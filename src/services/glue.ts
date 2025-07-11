import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSGlue {
  batchCreatePartition(
    input: BatchCreatePartitionRequest,
  ): Effect.Effect<
    BatchCreatePartitionResponse,
    | AlreadyExistsException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  batchDeleteConnection(
    input: BatchDeleteConnectionRequest,
  ): Effect.Effect<
    BatchDeleteConnectionResponse,
    InternalServiceException | OperationTimeoutException | CommonAwsError
  >;
  batchDeletePartition(
    input: BatchDeletePartitionRequest,
  ): Effect.Effect<
    BatchDeletePartitionResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchDeleteTable(
    input: BatchDeleteTableRequest,
  ): Effect.Effect<
    BatchDeleteTableResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | CommonAwsError
  >;
  batchDeleteTableVersion(
    input: BatchDeleteTableVersionRequest,
  ): Effect.Effect<
    BatchDeleteTableVersionResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchGetBlueprints(
    input: BatchGetBlueprintsRequest,
  ): Effect.Effect<
    BatchGetBlueprintsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchGetCrawlers(
    input: BatchGetCrawlersRequest,
  ): Effect.Effect<
    BatchGetCrawlersResponse,
    InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  batchGetCustomEntityTypes(
    input: BatchGetCustomEntityTypesRequest,
  ): Effect.Effect<
    BatchGetCustomEntityTypesResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchGetDataQualityResult(
    input: BatchGetDataQualityResultRequest,
  ): Effect.Effect<
    BatchGetDataQualityResultResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchGetDevEndpoints(
    input: BatchGetDevEndpointsRequest,
  ): Effect.Effect<
    BatchGetDevEndpointsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchGetJobs(
    input: BatchGetJobsRequest,
  ): Effect.Effect<
    BatchGetJobsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchGetPartition(
    input: BatchGetPartitionRequest,
  ): Effect.Effect<
    BatchGetPartitionResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | InvalidStateException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchGetTableOptimizer(
    input: BatchGetTableOptimizerRequest,
  ): Effect.Effect<
    BatchGetTableOptimizerResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | CommonAwsError
  >;
  batchGetTriggers(
    input: BatchGetTriggersRequest,
  ): Effect.Effect<
    BatchGetTriggersResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchGetWorkflows(
    input: BatchGetWorkflowsRequest,
  ): Effect.Effect<
    BatchGetWorkflowsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchPutDataQualityStatisticAnnotation(
    input: BatchPutDataQualityStatisticAnnotationRequest,
  ): Effect.Effect<
    BatchPutDataQualityStatisticAnnotationResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  batchStopJobRun(
    input: BatchStopJobRunRequest,
  ): Effect.Effect<
    BatchStopJobRunResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  batchUpdatePartition(
    input: BatchUpdatePartitionRequest,
  ): Effect.Effect<
    BatchUpdatePartitionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  cancelDataQualityRuleRecommendationRun(
    input: CancelDataQualityRuleRecommendationRunRequest,
  ): Effect.Effect<
    CancelDataQualityRuleRecommendationRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  cancelDataQualityRulesetEvaluationRun(
    input: CancelDataQualityRulesetEvaluationRunRequest,
  ): Effect.Effect<
    CancelDataQualityRulesetEvaluationRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  cancelMLTaskRun(
    input: CancelMLTaskRunRequest,
  ): Effect.Effect<
    CancelMLTaskRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  cancelStatement(
    input: CancelStatementRequest,
  ): Effect.Effect<
    CancelStatementResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  checkSchemaVersionValidity(
    input: CheckSchemaVersionValidityInput,
  ): Effect.Effect<
    CheckSchemaVersionValidityResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  createBlueprint(
    input: CreateBlueprintRequest,
  ): Effect.Effect<
    CreateBlueprintResponse,
    | AlreadyExistsException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createCatalog(
    input: CreateCatalogRequest,
  ): Effect.Effect<
    CreateCatalogResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederatedResourceAlreadyExistsException
    | FederationSourceException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createClassifier(
    input: CreateClassifierRequest,
  ): Effect.Effect<
    CreateClassifierResponse,
    | AlreadyExistsException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  createColumnStatisticsTaskSettings(
    input: CreateColumnStatisticsTaskSettingsRequest,
  ): Effect.Effect<
    CreateColumnStatisticsTaskSettingsResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | ColumnStatisticsTaskRunningException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createConnection(
    input: CreateConnectionRequest,
  ): Effect.Effect<
    CreateConnectionResponse,
    | AlreadyExistsException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createCrawler(
    input: CreateCrawlerRequest,
  ): Effect.Effect<
    CreateCrawlerResponse,
    | AlreadyExistsException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createCustomEntityType(
    input: CreateCustomEntityTypeRequest,
  ): Effect.Effect<
    CreateCustomEntityTypeResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createDatabase(
    input: CreateDatabaseRequest,
  ): Effect.Effect<
    CreateDatabaseResponse,
    | AlreadyExistsException
    | ConcurrentModificationException
    | FederatedResourceAlreadyExistsException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createDataQualityRuleset(
    input: CreateDataQualityRulesetRequest,
  ): Effect.Effect<
    CreateDataQualityRulesetResponse,
    | AlreadyExistsException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createDevEndpoint(
    input: CreateDevEndpointRequest,
  ): Effect.Effect<
    CreateDevEndpointResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  createIntegration(
    input: CreateIntegrationRequest,
  ): Effect.Effect<
    CreateIntegrationResponse,
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | IntegrationConflictOperationFault
    | IntegrationQuotaExceededFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundException
    | ResourceNumberLimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  createIntegrationResourceProperty(
    input: CreateIntegrationResourcePropertyRequest,
  ): Effect.Effect<
    CreateIntegrationResourcePropertyResponse,
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createIntegrationTableProperties(
    input: CreateIntegrationTablePropertiesRequest,
  ): Effect.Effect<
    CreateIntegrationTablePropertiesResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    CreateJobResponse,
    | AlreadyExistsException
    | ConcurrentModificationException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createMLTransform(
    input: CreateMLTransformRequest,
  ): Effect.Effect<
    CreateMLTransformResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createPartition(
    input: CreatePartitionRequest,
  ): Effect.Effect<
    CreatePartitionResponse,
    | AlreadyExistsException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createPartitionIndex(
    input: CreatePartitionIndexRequest,
  ): Effect.Effect<
    CreatePartitionIndexResponse,
    | AlreadyExistsException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createRegistry(
    input: CreateRegistryInput,
  ): Effect.Effect<
    CreateRegistryResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | ConcurrentModificationException
    | InternalServiceException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createSchema(
    input: CreateSchemaInput,
  ): Effect.Effect<
    CreateSchemaResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createScript(
    input: CreateScriptRequest,
  ): Effect.Effect<
    CreateScriptResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  createSecurityConfiguration(
    input: CreateSecurityConfigurationRequest,
  ): Effect.Effect<
    CreateSecurityConfigurationResponse,
    | AlreadyExistsException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createSession(
    input: CreateSessionRequest,
  ): Effect.Effect<
    CreateSessionResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  createTable(
    input: CreateTableRequest,
  ): Effect.Effect<
    CreateTableResponse,
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createTableOptimizer(
    input: CreateTableOptimizerRequest,
  ): Effect.Effect<
    CreateTableOptimizerResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTrigger(
    input: CreateTriggerRequest,
  ): Effect.Effect<
    CreateTriggerResponse,
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createUsageProfile(
    input: CreateUsageProfileRequest,
  ): Effect.Effect<
    CreateUsageProfileResponse,
    | AlreadyExistsException
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createUserDefinedFunction(
    input: CreateUserDefinedFunctionRequest,
  ): Effect.Effect<
    CreateUserDefinedFunctionResponse,
    | AlreadyExistsException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  createWorkflow(
    input: CreateWorkflowRequest,
  ): Effect.Effect<
    CreateWorkflowResponse,
    | AlreadyExistsException
    | ConcurrentModificationException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  deleteBlueprint(
    input: DeleteBlueprintRequest,
  ): Effect.Effect<
    DeleteBlueprintResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteCatalog(
    input: DeleteCatalogRequest,
  ): Effect.Effect<
    DeleteCatalogResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteClassifier(
    input: DeleteClassifierRequest,
  ): Effect.Effect<
    DeleteClassifierResponse,
    EntityNotFoundException | OperationTimeoutException | CommonAwsError
  >;
  deleteColumnStatisticsForPartition(
    input: DeleteColumnStatisticsForPartitionRequest,
  ): Effect.Effect<
    DeleteColumnStatisticsForPartitionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteColumnStatisticsForTable(
    input: DeleteColumnStatisticsForTableRequest,
  ): Effect.Effect<
    DeleteColumnStatisticsForTableResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteColumnStatisticsTaskSettings(
    input: DeleteColumnStatisticsTaskSettingsRequest,
  ): Effect.Effect<
    DeleteColumnStatisticsTaskSettingsResponse,
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteConnection(
    input: DeleteConnectionRequest,
  ): Effect.Effect<
    DeleteConnectionResponse,
    EntityNotFoundException | OperationTimeoutException | CommonAwsError
  >;
  deleteCrawler(
    input: DeleteCrawlerRequest,
  ): Effect.Effect<
    DeleteCrawlerResponse,
    | CrawlerRunningException
    | EntityNotFoundException
    | OperationTimeoutException
    | SchedulerTransitioningException
    | CommonAwsError
  >;
  deleteCustomEntityType(
    input: DeleteCustomEntityTypeRequest,
  ): Effect.Effect<
    DeleteCustomEntityTypeResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteDatabase(
    input: DeleteDatabaseRequest,
  ): Effect.Effect<
    DeleteDatabaseResponse,
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteDataQualityRuleset(
    input: DeleteDataQualityRulesetRequest,
  ): Effect.Effect<
    DeleteDataQualityRulesetResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteDevEndpoint(
    input: DeleteDevEndpointRequest,
  ): Effect.Effect<
    DeleteDevEndpointResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteIntegration(
    input: DeleteIntegrationRequest,
  ): Effect.Effect<
    DeleteIntegrationResponse,
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | InvalidIntegrationStateFault
    | InvalidStateException
    | ValidationException
    | CommonAwsError
  >;
  deleteIntegrationTableProperties(
    input: DeleteIntegrationTablePropertiesRequest,
  ): Effect.Effect<
    DeleteIntegrationTablePropertiesResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteJob(
    input: DeleteJobRequest,
  ): Effect.Effect<
    DeleteJobResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteMLTransform(
    input: DeleteMLTransformRequest,
  ): Effect.Effect<
    DeleteMLTransformResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deletePartition(
    input: DeletePartitionRequest,
  ): Effect.Effect<
    DeletePartitionResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deletePartitionIndex(
    input: DeletePartitionIndexRequest,
  ): Effect.Effect<
    DeletePartitionIndexResponse,
    | ConflictException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteRegistry(
    input: DeleteRegistryInput,
  ): Effect.Effect<
    DeleteRegistryResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | ConditionCheckFailureException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteSchema(
    input: DeleteSchemaInput,
  ): Effect.Effect<
    DeleteSchemaResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError
  >;
  deleteSchemaVersions(
    input: DeleteSchemaVersionsInput,
  ): Effect.Effect<
    DeleteSchemaVersionsResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError
  >;
  deleteSecurityConfiguration(
    input: DeleteSecurityConfigurationRequest,
  ): Effect.Effect<
    DeleteSecurityConfigurationResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteSession(
    input: DeleteSessionRequest,
  ): Effect.Effect<
    DeleteSessionResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteTable(
    input: DeleteTableRequest,
  ): Effect.Effect<
    DeleteTableResponse,
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | CommonAwsError
  >;
  deleteTableOptimizer(
    input: DeleteTableOptimizerRequest,
  ): Effect.Effect<
    DeleteTableOptimizerResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteTableVersion(
    input: DeleteTableVersionRequest,
  ): Effect.Effect<
    DeleteTableVersionResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteTrigger(
    input: DeleteTriggerRequest,
  ): Effect.Effect<
    DeleteTriggerResponse,
    | ConcurrentModificationException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteUsageProfile(
    input: DeleteUsageProfileRequest,
  ): Effect.Effect<
    DeleteUsageProfileResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteUserDefinedFunction(
    input: DeleteUserDefinedFunctionRequest,
  ): Effect.Effect<
    DeleteUserDefinedFunctionResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  deleteWorkflow(
    input: DeleteWorkflowRequest,
  ): Effect.Effect<
    DeleteWorkflowResponse,
    | ConcurrentModificationException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  describeConnectionType(
    input: DescribeConnectionTypeRequest,
  ): Effect.Effect<
    DescribeConnectionTypeResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | ValidationException
    | CommonAwsError
  >;
  describeEntity(
    input: DescribeEntityRequest,
  ): Effect.Effect<
    DescribeEntityResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  describeInboundIntegrations(
    input: DescribeInboundIntegrationsRequest,
  ): Effect.Effect<
    DescribeInboundIntegrationsResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | IntegrationNotFoundFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | TargetResourceNotFound
    | ValidationException
    | CommonAwsError
  >;
  describeIntegrations(
    input: DescribeIntegrationsRequest,
  ): Effect.Effect<
    DescribeIntegrationsResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | IntegrationNotFoundFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ValidationException
    | CommonAwsError
  >;
  getBlueprint(
    input: GetBlueprintRequest,
  ): Effect.Effect<
    GetBlueprintResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getBlueprintRun(
    input: GetBlueprintRunRequest,
  ): Effect.Effect<
    GetBlueprintRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getBlueprintRuns(
    input: GetBlueprintRunsRequest,
  ): Effect.Effect<
    GetBlueprintRunsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getCatalog(
    input: GetCatalogRequest,
  ): Effect.Effect<
    GetCatalogResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getCatalogImportStatus(
    input: GetCatalogImportStatusRequest,
  ): Effect.Effect<
    GetCatalogImportStatusResponse,
    InternalServiceException | OperationTimeoutException | CommonAwsError
  >;
  getCatalogs(
    input: GetCatalogsRequest,
  ): Effect.Effect<
    GetCatalogsResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getClassifier(
    input: GetClassifierRequest,
  ): Effect.Effect<
    GetClassifierResponse,
    EntityNotFoundException | OperationTimeoutException | CommonAwsError
  >;
  getClassifiers(
    input: GetClassifiersRequest,
  ): Effect.Effect<
    GetClassifiersResponse,
    OperationTimeoutException | CommonAwsError
  >;
  getColumnStatisticsForPartition(
    input: GetColumnStatisticsForPartitionRequest,
  ): Effect.Effect<
    GetColumnStatisticsForPartitionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getColumnStatisticsForTable(
    input: GetColumnStatisticsForTableRequest,
  ): Effect.Effect<
    GetColumnStatisticsForTableResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getColumnStatisticsTaskRun(
    input: GetColumnStatisticsTaskRunRequest,
  ): Effect.Effect<
    GetColumnStatisticsTaskRunResponse,
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getColumnStatisticsTaskRuns(
    input: GetColumnStatisticsTaskRunsRequest,
  ): Effect.Effect<
    GetColumnStatisticsTaskRunsResponse,
    OperationTimeoutException | CommonAwsError
  >;
  getColumnStatisticsTaskSettings(
    input: GetColumnStatisticsTaskSettingsRequest,
  ): Effect.Effect<
    GetColumnStatisticsTaskSettingsResponse,
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getConnection(
    input: GetConnectionRequest,
  ): Effect.Effect<
    GetConnectionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getConnections(
    input: GetConnectionsRequest,
  ): Effect.Effect<
    GetConnectionsResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getCrawler(
    input: GetCrawlerRequest,
  ): Effect.Effect<
    GetCrawlerResponse,
    EntityNotFoundException | OperationTimeoutException | CommonAwsError
  >;
  getCrawlerMetrics(
    input: GetCrawlerMetricsRequest,
  ): Effect.Effect<
    GetCrawlerMetricsResponse,
    OperationTimeoutException | CommonAwsError
  >;
  getCrawlers(
    input: GetCrawlersRequest,
  ): Effect.Effect<
    GetCrawlersResponse,
    OperationTimeoutException | CommonAwsError
  >;
  getCustomEntityType(
    input: GetCustomEntityTypeRequest,
  ): Effect.Effect<
    GetCustomEntityTypeResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDatabase(
    input: GetDatabaseRequest,
  ): Effect.Effect<
    GetDatabaseResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDatabases(
    input: GetDatabasesRequest,
  ): Effect.Effect<
    GetDatabasesResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDataCatalogEncryptionSettings(
    input: GetDataCatalogEncryptionSettingsRequest,
  ): Effect.Effect<
    GetDataCatalogEncryptionSettingsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDataflowGraph(
    input: GetDataflowGraphRequest,
  ): Effect.Effect<
    GetDataflowGraphResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDataQualityModel(
    input: GetDataQualityModelRequest,
  ): Effect.Effect<
    GetDataQualityModelResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDataQualityModelResult(
    input: GetDataQualityModelResultRequest,
  ): Effect.Effect<
    GetDataQualityModelResultResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDataQualityResult(
    input: GetDataQualityResultRequest,
  ): Effect.Effect<
    GetDataQualityResultResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDataQualityRuleRecommendationRun(
    input: GetDataQualityRuleRecommendationRunRequest,
  ): Effect.Effect<
    GetDataQualityRuleRecommendationRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDataQualityRuleset(
    input: GetDataQualityRulesetRequest,
  ): Effect.Effect<
    GetDataQualityRulesetResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDataQualityRulesetEvaluationRun(
    input: GetDataQualityRulesetEvaluationRunRequest,
  ): Effect.Effect<
    GetDataQualityRulesetEvaluationRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDevEndpoint(
    input: GetDevEndpointRequest,
  ): Effect.Effect<
    GetDevEndpointResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getDevEndpoints(
    input: GetDevEndpointsRequest,
  ): Effect.Effect<
    GetDevEndpointsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getEntityRecords(
    input: GetEntityRecordsRequest,
  ): Effect.Effect<
    GetEntityRecordsResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  getIntegrationResourceProperty(
    input: GetIntegrationResourcePropertyRequest,
  ): Effect.Effect<
    GetIntegrationResourcePropertyResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getIntegrationTableProperties(
    input: GetIntegrationTablePropertiesRequest,
  ): Effect.Effect<
    GetIntegrationTablePropertiesResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getJob(
    input: GetJobRequest,
  ): Effect.Effect<
    GetJobResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getJobBookmark(
    input: GetJobBookmarkRequest,
  ): Effect.Effect<
    GetJobBookmarkResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  getJobRun(
    input: GetJobRunRequest,
  ): Effect.Effect<
    GetJobRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getJobRuns(
    input: GetJobRunsRequest,
  ): Effect.Effect<
    GetJobRunsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getJobs(
    input: GetJobsRequest,
  ): Effect.Effect<
    GetJobsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getMapping(
    input: GetMappingRequest,
  ): Effect.Effect<
    GetMappingResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getMLTaskRun(
    input: GetMLTaskRunRequest,
  ): Effect.Effect<
    GetMLTaskRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getMLTaskRuns(
    input: GetMLTaskRunsRequest,
  ): Effect.Effect<
    GetMLTaskRunsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getMLTransform(
    input: GetMLTransformRequest,
  ): Effect.Effect<
    GetMLTransformResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getMLTransforms(
    input: GetMLTransformsRequest,
  ): Effect.Effect<
    GetMLTransformsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getPartition(
    input: GetPartitionRequest,
  ): Effect.Effect<
    GetPartitionResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getPartitionIndexes(
    input: GetPartitionIndexesRequest,
  ): Effect.Effect<
    GetPartitionIndexesResponse,
    | ConflictException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getPartitions(
    input: GetPartitionsRequest,
  ): Effect.Effect<
    GetPartitionsResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | InvalidStateException
    | OperationTimeoutException
    | ResourceNotReadyException
    | CommonAwsError
  >;
  getPlan(
    input: GetPlanRequest,
  ): Effect.Effect<
    GetPlanResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getRegistry(
    input: GetRegistryInput,
  ): Effect.Effect<
    GetRegistryResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  getResourcePolicies(
    input: GetResourcePoliciesRequest,
  ): Effect.Effect<
    GetResourcePoliciesResponse,
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getSchema(
    input: GetSchemaInput,
  ): Effect.Effect<
    GetSchemaResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  getSchemaByDefinition(
    input: GetSchemaByDefinitionInput,
  ): Effect.Effect<
    GetSchemaByDefinitionResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  getSchemaVersion(
    input: GetSchemaVersionInput,
  ): Effect.Effect<
    GetSchemaVersionResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  getSchemaVersionsDiff(
    input: GetSchemaVersionsDiffInput,
  ): Effect.Effect<
    GetSchemaVersionsDiffResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  getSecurityConfiguration(
    input: GetSecurityConfigurationRequest,
  ): Effect.Effect<
    GetSecurityConfigurationResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getSecurityConfigurations(
    input: GetSecurityConfigurationsRequest,
  ): Effect.Effect<
    GetSecurityConfigurationsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getSession(
    input: GetSessionRequest,
  ): Effect.Effect<
    GetSessionResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getStatement(
    input: GetStatementRequest,
  ): Effect.Effect<
    GetStatementResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getTable(
    input: GetTableRequest,
  ): Effect.Effect<
    GetTableResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | CommonAwsError
  >;
  getTableOptimizer(
    input: GetTableOptimizerRequest,
  ): Effect.Effect<
    GetTableOptimizerResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | CommonAwsError
  >;
  getTables(
    input: GetTablesRequest,
  ): Effect.Effect<
    GetTablesResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getTableVersion(
    input: GetTableVersionRequest,
  ): Effect.Effect<
    GetTableVersionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getTableVersions(
    input: GetTableVersionsRequest,
  ): Effect.Effect<
    GetTableVersionsResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getTags(
    input: GetTagsRequest,
  ): Effect.Effect<
    GetTagsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getTrigger(
    input: GetTriggerRequest,
  ): Effect.Effect<
    GetTriggerResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getTriggers(
    input: GetTriggersRequest,
  ): Effect.Effect<
    GetTriggersResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getUnfilteredPartitionMetadata(
    input: GetUnfilteredPartitionMetadataRequest,
  ): Effect.Effect<
    GetUnfilteredPartitionMetadataResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | PermissionTypeMismatchException
    | CommonAwsError
  >;
  getUnfilteredPartitionsMetadata(
    input: GetUnfilteredPartitionsMetadataRequest,
  ): Effect.Effect<
    GetUnfilteredPartitionsMetadataResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | PermissionTypeMismatchException
    | CommonAwsError
  >;
  getUnfilteredTableMetadata(
    input: GetUnfilteredTableMetadataRequest,
  ): Effect.Effect<
    GetUnfilteredTableMetadataResponse,
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | PermissionTypeMismatchException
    | CommonAwsError
  >;
  getUsageProfile(
    input: GetUsageProfileRequest,
  ): Effect.Effect<
    GetUsageProfileResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getUserDefinedFunction(
    input: GetUserDefinedFunctionRequest,
  ): Effect.Effect<
    GetUserDefinedFunctionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getUserDefinedFunctions(
    input: GetUserDefinedFunctionsRequest,
  ): Effect.Effect<
    GetUserDefinedFunctionsResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getWorkflow(
    input: GetWorkflowRequest,
  ): Effect.Effect<
    GetWorkflowResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getWorkflowRun(
    input: GetWorkflowRunRequest,
  ): Effect.Effect<
    GetWorkflowRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getWorkflowRunProperties(
    input: GetWorkflowRunPropertiesRequest,
  ): Effect.Effect<
    GetWorkflowRunPropertiesResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  getWorkflowRuns(
    input: GetWorkflowRunsRequest,
  ): Effect.Effect<
    GetWorkflowRunsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  importCatalogToGlue(
    input: ImportCatalogToGlueRequest,
  ): Effect.Effect<
    ImportCatalogToGlueResponse,
    InternalServiceException | OperationTimeoutException | CommonAwsError
  >;
  listBlueprints(
    input: ListBlueprintsRequest,
  ): Effect.Effect<
    ListBlueprintsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listColumnStatisticsTaskRuns(
    input: ListColumnStatisticsTaskRunsRequest,
  ): Effect.Effect<
    ListColumnStatisticsTaskRunsResponse,
    OperationTimeoutException | CommonAwsError
  >;
  listConnectionTypes(
    input: ListConnectionTypesRequest,
  ): Effect.Effect<
    ListConnectionTypesResponse,
    AccessDeniedException | InternalServiceException | CommonAwsError
  >;
  listCrawlers(
    input: ListCrawlersRequest,
  ): Effect.Effect<
    ListCrawlersResponse,
    OperationTimeoutException | CommonAwsError
  >;
  listCrawls(
    input: ListCrawlsRequest,
  ): Effect.Effect<
    ListCrawlsResponse,
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listCustomEntityTypes(
    input: ListCustomEntityTypesRequest,
  ): Effect.Effect<
    ListCustomEntityTypesResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listDataQualityResults(
    input: ListDataQualityResultsRequest,
  ): Effect.Effect<
    ListDataQualityResultsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listDataQualityRuleRecommendationRuns(
    input: ListDataQualityRuleRecommendationRunsRequest,
  ): Effect.Effect<
    ListDataQualityRuleRecommendationRunsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listDataQualityRulesetEvaluationRuns(
    input: ListDataQualityRulesetEvaluationRunsRequest,
  ): Effect.Effect<
    ListDataQualityRulesetEvaluationRunsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listDataQualityRulesets(
    input: ListDataQualityRulesetsRequest,
  ): Effect.Effect<
    ListDataQualityRulesetsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listDataQualityStatisticAnnotations(
    input: ListDataQualityStatisticAnnotationsRequest,
  ): Effect.Effect<
    ListDataQualityStatisticAnnotationsResponse,
    InternalServiceException | InvalidInputException | CommonAwsError
  >;
  listDataQualityStatistics(
    input: ListDataQualityStatisticsRequest,
  ): Effect.Effect<
    ListDataQualityStatisticsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  listDevEndpoints(
    input: ListDevEndpointsRequest,
  ): Effect.Effect<
    ListDevEndpointsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listEntities(
    input: ListEntitiesRequest,
  ): Effect.Effect<
    ListEntitiesResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    ListJobsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listMLTransforms(
    input: ListMLTransformsRequest,
  ): Effect.Effect<
    ListMLTransformsResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listRegistries(
    input: ListRegistriesInput,
  ): Effect.Effect<
    ListRegistriesResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  listSchemas(
    input: ListSchemasInput,
  ): Effect.Effect<
    ListSchemasResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  listSchemaVersions(
    input: ListSchemaVersionsInput,
  ): Effect.Effect<
    ListSchemaVersionsResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  listSessions(
    input: ListSessionsRequest,
  ): Effect.Effect<
    ListSessionsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listStatements(
    input: ListStatementsRequest,
  ): Effect.Effect<
    ListStatementsResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listTableOptimizerRuns(
    input: ListTableOptimizerRunsRequest,
  ): Effect.Effect<
    ListTableOptimizerRunsResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTriggers(
    input: ListTriggersRequest,
  ): Effect.Effect<
    ListTriggersResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listUsageProfiles(
    input: ListUsageProfilesRequest,
  ): Effect.Effect<
    ListUsageProfilesResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | CommonAwsError
  >;
  listWorkflows(
    input: ListWorkflowsRequest,
  ): Effect.Effect<
    ListWorkflowsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  modifyIntegration(
    input: ModifyIntegrationRequest,
  ): Effect.Effect<
    ModifyIntegrationResponse,
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | InvalidIntegrationStateFault
    | InvalidStateException
    | ValidationException
    | CommonAwsError
  >;
  putDataCatalogEncryptionSettings(
    input: PutDataCatalogEncryptionSettingsRequest,
  ): Effect.Effect<
    PutDataCatalogEncryptionSettingsResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  putDataQualityProfileAnnotation(
    input: PutDataQualityProfileAnnotationRequest,
  ): Effect.Effect<
    PutDataQualityProfileAnnotationResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | ConditionCheckFailureException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  putSchemaVersionMetadata(
    input: PutSchemaVersionMetadataInput,
  ): Effect.Effect<
    PutSchemaVersionMetadataResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  putWorkflowRunProperties(
    input: PutWorkflowRunPropertiesRequest,
  ): Effect.Effect<
    PutWorkflowRunPropertiesResponse,
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  querySchemaVersionMetadata(
    input: QuerySchemaVersionMetadataInput,
  ): Effect.Effect<
    QuerySchemaVersionMetadataResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError
  >;
  registerSchemaVersion(
    input: RegisterSchemaVersionInput,
  ): Effect.Effect<
    RegisterSchemaVersionResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  removeSchemaVersionMetadata(
    input: RemoveSchemaVersionMetadataInput,
  ): Effect.Effect<
    RemoveSchemaVersionMetadataResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError
  >;
  resetJobBookmark(
    input: ResetJobBookmarkRequest,
  ): Effect.Effect<
    ResetJobBookmarkResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  resumeWorkflowRun(
    input: ResumeWorkflowRunRequest,
  ): Effect.Effect<
    ResumeWorkflowRunResponse,
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | IllegalWorkflowStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  runStatement(
    input: RunStatementRequest,
  ): Effect.Effect<
    RunStatementResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  searchTables(
    input: SearchTablesRequest,
  ): Effect.Effect<
    SearchTablesResponse,
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  startBlueprintRun(
    input: StartBlueprintRunRequest,
  ): Effect.Effect<
    StartBlueprintRunResponse,
    | EntityNotFoundException
    | IllegalBlueprintStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  startColumnStatisticsTaskRun(
    input: StartColumnStatisticsTaskRunRequest,
  ): Effect.Effect<
    StartColumnStatisticsTaskRunResponse,
    | AccessDeniedException
    | ColumnStatisticsTaskRunningException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  startColumnStatisticsTaskRunSchedule(
    input: StartColumnStatisticsTaskRunScheduleRequest,
  ): Effect.Effect<
    StartColumnStatisticsTaskRunScheduleResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  startCrawler(
    input: StartCrawlerRequest,
  ): Effect.Effect<
    StartCrawlerResponse,
    | CrawlerRunningException
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError
  >;
  startCrawlerSchedule(
    input: StartCrawlerScheduleRequest,
  ): Effect.Effect<
    StartCrawlerScheduleResponse,
    | EntityNotFoundException
    | NoScheduleException
    | OperationTimeoutException
    | SchedulerRunningException
    | SchedulerTransitioningException
    | CommonAwsError
  >;
  startDataQualityRuleRecommendationRun(
    input: StartDataQualityRuleRecommendationRunRequest,
  ): Effect.Effect<
    StartDataQualityRuleRecommendationRunResponse,
    | ConflictException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  startDataQualityRulesetEvaluationRun(
    input: StartDataQualityRulesetEvaluationRunRequest,
  ): Effect.Effect<
    StartDataQualityRulesetEvaluationRunResponse,
    | ConflictException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  startExportLabelsTaskRun(
    input: StartExportLabelsTaskRunRequest,
  ): Effect.Effect<
    StartExportLabelsTaskRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  startImportLabelsTaskRun(
    input: StartImportLabelsTaskRunRequest,
  ): Effect.Effect<
    StartImportLabelsTaskRunResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  startJobRun(
    input: StartJobRunRequest,
  ): Effect.Effect<
    StartJobRunResponse,
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  startMLEvaluationTaskRun(
    input: StartMLEvaluationTaskRunRequest,
  ): Effect.Effect<
    StartMLEvaluationTaskRunResponse,
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | MLTransformNotReadyException
    | OperationTimeoutException
    | CommonAwsError
  >;
  startMLLabelingSetGenerationTaskRun(
    input: StartMLLabelingSetGenerationTaskRunRequest,
  ): Effect.Effect<
    StartMLLabelingSetGenerationTaskRunResponse,
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  startTrigger(
    input: StartTriggerRequest,
  ): Effect.Effect<
    StartTriggerResponse,
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  startWorkflowRun(
    input: StartWorkflowRunRequest,
  ): Effect.Effect<
    StartWorkflowRunResponse,
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  stopColumnStatisticsTaskRun(
    input: StopColumnStatisticsTaskRunRequest,
  ): Effect.Effect<
    StopColumnStatisticsTaskRunResponse,
    | ColumnStatisticsTaskNotRunningException
    | ColumnStatisticsTaskStoppingException
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError
  >;
  stopColumnStatisticsTaskRunSchedule(
    input: StopColumnStatisticsTaskRunScheduleRequest,
  ): Effect.Effect<
    StopColumnStatisticsTaskRunScheduleResponse,
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  stopCrawler(
    input: StopCrawlerRequest,
  ): Effect.Effect<
    StopCrawlerResponse,
    | CrawlerNotRunningException
    | CrawlerStoppingException
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError
  >;
  stopCrawlerSchedule(
    input: StopCrawlerScheduleRequest,
  ): Effect.Effect<
    StopCrawlerScheduleResponse,
    | EntityNotFoundException
    | OperationTimeoutException
    | SchedulerNotRunningException
    | SchedulerTransitioningException
    | CommonAwsError
  >;
  stopSession(
    input: StopSessionRequest,
  ): Effect.Effect<
    StopSessionResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  stopTrigger(
    input: StopTriggerRequest,
  ): Effect.Effect<
    StopTriggerResponse,
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  stopWorkflowRun(
    input: StopWorkflowRunRequest,
  ): Effect.Effect<
    StopWorkflowRunResponse,
    | EntityNotFoundException
    | IllegalWorkflowStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  testConnection(
    input: TestConnectionRequest,
  ): Effect.Effect<
    TestConnectionResponse,
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateBlueprint(
    input: UpdateBlueprintRequest,
  ): Effect.Effect<
    UpdateBlueprintResponse,
    | ConcurrentModificationException
    | EntityNotFoundException
    | IllegalBlueprintStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateCatalog(
    input: UpdateCatalogRequest,
  ): Effect.Effect<
    UpdateCatalogResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateClassifier(
    input: UpdateClassifierRequest,
  ): Effect.Effect<
    UpdateClassifierResponse,
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | VersionMismatchException
    | CommonAwsError
  >;
  updateColumnStatisticsForPartition(
    input: UpdateColumnStatisticsForPartitionRequest,
  ): Effect.Effect<
    UpdateColumnStatisticsForPartitionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateColumnStatisticsForTable(
    input: UpdateColumnStatisticsForTableRequest,
  ): Effect.Effect<
    UpdateColumnStatisticsForTableResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateColumnStatisticsTaskSettings(
    input: UpdateColumnStatisticsTaskSettingsRequest,
  ): Effect.Effect<
    UpdateColumnStatisticsTaskSettingsResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | VersionMismatchException
    | CommonAwsError
  >;
  updateConnection(
    input: UpdateConnectionRequest,
  ): Effect.Effect<
    UpdateConnectionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateCrawler(
    input: UpdateCrawlerRequest,
  ): Effect.Effect<
    UpdateCrawlerResponse,
    | CrawlerRunningException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | VersionMismatchException
    | CommonAwsError
  >;
  updateCrawlerSchedule(
    input: UpdateCrawlerScheduleRequest,
  ): Effect.Effect<
    UpdateCrawlerScheduleResponse,
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | SchedulerTransitioningException
    | VersionMismatchException
    | CommonAwsError
  >;
  updateDatabase(
    input: UpdateDatabaseRequest,
  ): Effect.Effect<
    UpdateDatabaseResponse,
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateDataQualityRuleset(
    input: UpdateDataQualityRulesetRequest,
  ): Effect.Effect<
    UpdateDataQualityRulesetResponse,
    | AlreadyExistsException
    | EntityNotFoundException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  updateDevEndpoint(
    input: UpdateDevEndpointRequest,
  ): Effect.Effect<
    UpdateDevEndpointResponse,
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  updateIntegrationResourceProperty(
    input: UpdateIntegrationResourcePropertyRequest,
  ): Effect.Effect<
    UpdateIntegrationResourcePropertyResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateIntegrationTableProperties(
    input: UpdateIntegrationTablePropertiesRequest,
  ): Effect.Effect<
    UpdateIntegrationTablePropertiesResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateJob(
    input: UpdateJobRequest,
  ): Effect.Effect<
    UpdateJobResponse,
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateJobFromSourceControl(
    input: UpdateJobFromSourceControlRequest,
  ): Effect.Effect<
    UpdateJobFromSourceControlResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  updateMLTransform(
    input: UpdateMLTransformRequest,
  ): Effect.Effect<
    UpdateMLTransformResponse,
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updatePartition(
    input: UpdatePartitionRequest,
  ): Effect.Effect<
    UpdatePartitionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateRegistry(
    input: UpdateRegistryInput,
  ): Effect.Effect<
    UpdateRegistryResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  updateSchema(
    input: UpdateSchemaInput,
  ): Effect.Effect<
    UpdateSchemaResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError
  >;
  updateSourceControlFromJob(
    input: UpdateSourceControlFromJobRequest,
  ): Effect.Effect<
    UpdateSourceControlFromJobResponse,
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  updateTable(
    input: UpdateTableRequest,
  ): Effect.Effect<
    UpdateTableResponse,
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | ResourceNumberLimitExceededException
    | CommonAwsError
  >;
  updateTableOptimizer(
    input: UpdateTableOptimizerRequest,
  ): Effect.Effect<
    UpdateTableOptimizerResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTrigger(
    input: UpdateTriggerRequest,
  ): Effect.Effect<
    UpdateTriggerResponse,
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateUsageProfile(
    input: UpdateUsageProfileRequest,
  ): Effect.Effect<
    UpdateUsageProfileResponse,
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateUserDefinedFunction(
    input: UpdateUserDefinedFunctionRequest,
  ): Effect.Effect<
    UpdateUserDefinedFunctionResponse,
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
  updateWorkflow(
    input: UpdateWorkflowRequest,
  ): Effect.Effect<
    UpdateWorkflowResponse,
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError
  >;
}

export type Glue = AWSGlue;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccessToken = string;

export type AccountId = string;

export interface Action {
  JobName?: string;
  Arguments?: Record<string, string>;
  Timeout?: number;
  SecurityConfiguration?: string;
  NotificationProperty?: NotificationProperty;
  CrawlerName?: string;
}
export type ActionList = Array<Action>;
export type AdditionalContextMap = Record<string, string>;
export type AdditionalOptionKeys = "CacheOption" | "ObservationsOption";
export type AdditionalOptions = Record<string, string>;
export type AdditionalPlanOptionsMap = Record<string, string>;
export type AggFunction =
  | "avg"
  | "countDistinct"
  | "count"
  | "first"
  | "last"
  | "kurtosis"
  | "max"
  | "min"
  | "skewness"
  | "stddev_samp"
  | "stddev_pop"
  | "sum"
  | "sumDistinct"
  | "var_samp"
  | "var_pop";
export interface Aggregate {
  Name: string;
  Inputs: Array<string>;
  Groups: Array<Array<string>>;
  Aggs: Array<AggregateOperation>;
}
export interface AggregateOperation {
  Column: Array<string>;
  AggFunc: AggFunction;
}
export type AggregateOperations = Array<AggregateOperation>;
export interface AllowedValue {
  Description?: string;
  Value: string;
}
export type AllowedValueDescriptionString = string;

export type AllowedValues = Array<AllowedValue>;
export type AllowedValuesStringList = Array<string>;
export type AllowedValueValueString = string;

export type AllowFullTableExternalDataAccessEnum = "True" | "False";
export declare class AlreadyExistsException extends EffectData.TaggedError(
  "AlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export interface AmazonRedshiftAdvancedOption {
  Key?: string;
  Value?: string;
}
export type AmazonRedshiftAdvancedOptions = Array<AmazonRedshiftAdvancedOption>;
export interface AmazonRedshiftNodeData {
  AccessType?: string;
  SourceType?: string;
  Connection?: Option;
  Schema?: Option;
  Table?: Option;
  CatalogDatabase?: Option;
  CatalogTable?: Option;
  CatalogRedshiftSchema?: string;
  CatalogRedshiftTable?: string;
  TempDir?: string;
  IamRole?: Option;
  AdvancedOptions?: Array<AmazonRedshiftAdvancedOption>;
  SampleQuery?: string;
  PreAction?: string;
  PostAction?: string;
  Action?: string;
  TablePrefix?: string;
  Upsert?: boolean;
  MergeAction?: string;
  MergeWhenMatched?: string;
  MergeWhenNotMatched?: string;
  MergeClause?: string;
  CrawlerConnection?: string;
  TableSchema?: Array<Option>;
  StagingTable?: string;
  SelectedColumns?: Array<Option>;
}
export interface AmazonRedshiftSource {
  Name?: string;
  Data?: AmazonRedshiftNodeData;
}
export interface AmazonRedshiftTarget {
  Name?: string;
  Data?: AmazonRedshiftNodeData;
  Inputs?: Array<string>;
}
export interface AnnotationError {
  ProfileId?: string;
  StatisticId?: string;
  FailureReason?: string;
}
export type AnnotationErrorList = Array<AnnotationError>;
export type AnnotationList = Array<StatisticAnnotation>;
export type ApiVersion = string;

export interface ApplyMapping {
  Name: string;
  Inputs: Array<string>;
  Mapping: Array<Mapping>;
}
export type ArnString = string;

export interface AthenaConnectorSource {
  Name: string;
  ConnectionName: string;
  ConnectorName: string;
  ConnectionType: string;
  ConnectionTable?: string;
  SchemaName: string;
  OutputSchemas?: Array<GlueSchema>;
}
export type AttemptCount = number;

export type AuditColumnNamesList = Array<string>;
export interface AuditContext {
  AdditionalAuditContext?: string;
  RequestedColumns?: Array<string>;
  AllColumnsRequested?: boolean;
}
export type AuditContextString = string;

export interface AuthConfiguration {
  AuthenticationType: Property;
  SecretArn?: Property;
  OAuth2Properties?: Record<string, Property>;
  BasicAuthenticationProperties?: Record<string, Property>;
  CustomAuthenticationProperties?: Record<string, Property>;
}
export interface AuthenticationConfiguration {
  AuthenticationType?: AuthenticationType;
  SecretArn?: string;
  OAuth2Properties?: OAuth2Properties;
}
export interface AuthenticationConfigurationInput {
  AuthenticationType?: AuthenticationType;
  OAuth2Properties?: OAuth2PropertiesInput;
  SecretArn?: string;
  KmsKeyArn?: string;
  BasicAuthenticationCredentials?: BasicAuthenticationCredentials;
  CustomAuthenticationCredentials?: Record<string, string>;
}
export type AuthenticationType = "BASIC" | "OAUTH2" | "CUSTOM" | "IAM";
export type AuthenticationTypes = Array<AuthenticationType>;
export type AuthorizationCode = string;

export interface AuthorizationCodeProperties {
  AuthorizationCode?: string;
  RedirectUri?: string;
}
export type AuthTokenString = string;

export type AWSManagedClientApplicationReference = string;

export interface BackfillError {
  Code?: BackfillErrorCode;
  Partitions?: Array<PartitionValueList>;
}
export type BackfillErrorCode =
  | "ENCRYPTED_PARTITION_ERROR"
  | "INTERNAL_ERROR"
  | "INVALID_PARTITION_TYPE_DATA_ERROR"
  | "MISSING_PARTITION_VALUE_ERROR"
  | "UNSUPPORTED_PARTITION_CHARACTER_ERROR";
export type BackfillErroredPartitionsList = Array<PartitionValueList>;
export type BackfillErrors = Array<BackfillError>;
export interface BasicAuthenticationCredentials {
  Username?: string;
  Password?: string;
}
export interface BasicCatalogTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Database: string;
  Table: string;
}
export interface BatchCreatePartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionInputList: Array<PartitionInput>;
}
export interface BatchCreatePartitionResponse {
  Errors?: Array<PartitionError>;
}
export interface BatchDeleteConnectionRequest {
  CatalogId?: string;
  ConnectionNameList: Array<string>;
}
export interface BatchDeleteConnectionResponse {
  Succeeded?: Array<string>;
  Errors?: Record<string, ErrorDetail>;
}
export interface BatchDeletePartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionsToDelete: Array<PartitionValueList>;
}
export interface BatchDeletePartitionResponse {
  Errors?: Array<PartitionError>;
}
export type BatchDeletePartitionValueList = Array<PartitionValueList>;
export type BatchDeleteTableNameList = Array<string>;
export interface BatchDeleteTableRequest {
  CatalogId?: string;
  DatabaseName: string;
  TablesToDelete: Array<string>;
  TransactionId?: string;
}
export interface BatchDeleteTableResponse {
  Errors?: Array<TableError>;
}
export type BatchDeleteTableVersionList = Array<string>;
export interface BatchDeleteTableVersionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  VersionIds: Array<string>;
}
export interface BatchDeleteTableVersionResponse {
  Errors?: Array<TableVersionError>;
}
export type BatchGetBlueprintNames = Array<string>;
export interface BatchGetBlueprintsRequest {
  Names: Array<string>;
  IncludeBlueprint?: boolean;
  IncludeParameterSpec?: boolean;
}
export interface BatchGetBlueprintsResponse {
  Blueprints?: Array<Blueprint>;
  MissingBlueprints?: Array<string>;
}
export interface BatchGetCrawlersRequest {
  CrawlerNames: Array<string>;
}
export interface BatchGetCrawlersResponse {
  Crawlers?: Array<Crawler>;
  CrawlersNotFound?: Array<string>;
}
export interface BatchGetCustomEntityTypesRequest {
  Names: Array<string>;
}
export interface BatchGetCustomEntityTypesResponse {
  CustomEntityTypes?: Array<CustomEntityType>;
  CustomEntityTypesNotFound?: Array<string>;
}
export interface BatchGetDataQualityResultRequest {
  ResultIds: Array<string>;
}
export interface BatchGetDataQualityResultResponse {
  Results: Array<DataQualityResult>;
  ResultsNotFound?: Array<string>;
}
export interface BatchGetDevEndpointsRequest {
  DevEndpointNames: Array<string>;
}
export interface BatchGetDevEndpointsResponse {
  DevEndpoints?: Array<DevEndpoint>;
  DevEndpointsNotFound?: Array<string>;
}
export interface BatchGetJobsRequest {
  JobNames: Array<string>;
}
export interface BatchGetJobsResponse {
  Jobs?: Array<Job>;
  JobsNotFound?: Array<string>;
}
export interface BatchGetPartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionsToGet: Array<PartitionValueList>;
}
export interface BatchGetPartitionResponse {
  Partitions?: Array<Partition>;
  UnprocessedKeys?: Array<PartitionValueList>;
}
export type BatchGetPartitionValueList = Array<PartitionValueList>;
export type BatchGetTableOptimizerEntries = Array<BatchGetTableOptimizerEntry>;
export interface BatchGetTableOptimizerEntry {
  catalogId?: string;
  databaseName?: string;
  tableName?: string;
  type?: TableOptimizerType;
}
export interface BatchGetTableOptimizerError {
  error?: ErrorDetail;
  catalogId?: string;
  databaseName?: string;
  tableName?: string;
  type?: TableOptimizerType;
}
export type BatchGetTableOptimizerErrors = Array<BatchGetTableOptimizerError>;
export interface BatchGetTableOptimizerRequest {
  Entries: Array<BatchGetTableOptimizerEntry>;
}
export interface BatchGetTableOptimizerResponse {
  TableOptimizers?: Array<BatchTableOptimizer>;
  Failures?: Array<BatchGetTableOptimizerError>;
}
export interface BatchGetTriggersRequest {
  TriggerNames: Array<string>;
}
export interface BatchGetTriggersResponse {
  Triggers?: Array<Trigger>;
  TriggersNotFound?: Array<string>;
}
export interface BatchGetWorkflowsRequest {
  Names: Array<string>;
  IncludeGraph?: boolean;
}
export interface BatchGetWorkflowsResponse {
  Workflows?: Array<Workflow>;
  MissingWorkflows?: Array<string>;
}
export interface BatchPutDataQualityStatisticAnnotationRequest {
  InclusionAnnotations: Array<DatapointInclusionAnnotation>;
  ClientToken?: string;
}
export interface BatchPutDataQualityStatisticAnnotationResponse {
  FailedInclusionAnnotations?: Array<AnnotationError>;
}
export type BatchSize = number;

export interface BatchStopJobRunError {
  JobName?: string;
  JobRunId?: string;
  ErrorDetail?: ErrorDetail;
}
export type BatchStopJobRunErrorList = Array<BatchStopJobRunError>;
export type BatchStopJobRunJobRunIdList = Array<string>;
export interface BatchStopJobRunRequest {
  JobName: string;
  JobRunIds: Array<string>;
}
export interface BatchStopJobRunResponse {
  SuccessfulSubmissions?: Array<BatchStopJobRunSuccessfulSubmission>;
  Errors?: Array<BatchStopJobRunError>;
}
export interface BatchStopJobRunSuccessfulSubmission {
  JobName?: string;
  JobRunId?: string;
}
export type BatchStopJobRunSuccessfulSubmissionList =
  Array<BatchStopJobRunSuccessfulSubmission>;
export interface BatchTableOptimizer {
  catalogId?: string;
  databaseName?: string;
  tableName?: string;
  tableOptimizer?: TableOptimizer;
}
export type BatchTableOptimizers = Array<BatchTableOptimizer>;
export interface BatchUpdatePartitionFailureEntry {
  PartitionValueList?: Array<string>;
  ErrorDetail?: ErrorDetail;
}
export type BatchUpdatePartitionFailureList =
  Array<BatchUpdatePartitionFailureEntry>;
export interface BatchUpdatePartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  Entries: Array<BatchUpdatePartitionRequestEntry>;
}
export interface BatchUpdatePartitionRequestEntry {
  PartitionValueList: Array<string>;
  PartitionInput: PartitionInput;
}
export type BatchUpdatePartitionRequestEntryList =
  Array<BatchUpdatePartitionRequestEntry>;
export interface BatchUpdatePartitionResponse {
  Errors?: Array<BatchUpdatePartitionFailureEntry>;
}
export type BatchWindow = number;

export interface BinaryColumnStatisticsData {
  MaximumLength: number;
  AverageLength: number;
  NumberOfNulls: number;
}
export type Blob = Uint8Array | string;

export interface Blueprint {
  Name?: string;
  Description?: string;
  CreatedOn?: Date | string;
  LastModifiedOn?: Date | string;
  ParameterSpec?: string;
  BlueprintLocation?: string;
  BlueprintServiceLocation?: string;
  Status?: BlueprintStatus;
  ErrorMessage?: string;
  LastActiveDefinition?: LastActiveDefinition;
}
export interface BlueprintDetails {
  BlueprintName?: string;
  RunId?: string;
}
export type BlueprintNames = Array<string>;
export type BlueprintParameters = string;

export type BlueprintParameterSpec = string;

export interface BlueprintRun {
  BlueprintName?: string;
  RunId?: string;
  WorkflowName?: string;
  State?: BlueprintRunState;
  StartedOn?: Date | string;
  CompletedOn?: Date | string;
  ErrorMessage?: string;
  RollbackErrorMessage?: string;
  Parameters?: string;
  RoleArn?: string;
}
export type BlueprintRuns = Array<BlueprintRun>;
export type BlueprintRunState =
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "ROLLING_BACK";
export type Blueprints = Array<Blueprint>;
export type BlueprintStatus = "CREATING" | "ACTIVE" | "UPDATING" | "FAILED";
export type Bool = boolean;

export type GlueBoolean = boolean;

export interface BooleanColumnStatisticsData {
  NumberOfTrues: number;
  NumberOfFalses: number;
  NumberOfNulls: number;
}
export type BooleanNullable = boolean;

export type BooleanValue = boolean;

export type BoundedPartitionValueList = Array<string>;
export type BoxedBoolean = boolean;

export type BoxedDoubleFraction = number;

export type BoxedLong = number;

export type BoxedNonNegativeInt = number;

export type BoxedNonNegativeLong = number;

export type BoxedPositiveInt = number;

export interface CancelDataQualityRuleRecommendationRunRequest {
  RunId: string;
}
export interface CancelDataQualityRuleRecommendationRunResponse {}
export interface CancelDataQualityRulesetEvaluationRunRequest {
  RunId: string;
}
export interface CancelDataQualityRulesetEvaluationRunResponse {}
export interface CancelMLTaskRunRequest {
  TransformId: string;
  TaskRunId: string;
}
export interface CancelMLTaskRunResponse {
  TransformId?: string;
  TaskRunId?: string;
  Status?: TaskStatusType;
}
export interface CancelStatementRequest {
  SessionId: string;
  Id: number;
  RequestOrigin?: string;
}
export interface CancelStatementResponse {}
export interface Capabilities {
  SupportedAuthenticationTypes: Array<AuthenticationType>;
  SupportedDataOperations: Array<DataOperation>;
  SupportedComputeEnvironments: Array<ComputeEnvironment>;
}
export interface Catalog {
  CatalogId?: string;
  Name: string;
  ResourceArn?: string;
  Description?: string;
  Parameters?: Record<string, string>;
  CreateTime?: Date | string;
  UpdateTime?: Date | string;
  TargetRedshiftCatalog?: TargetRedshiftCatalog;
  FederatedCatalog?: FederatedCatalog;
  CatalogProperties?: CatalogPropertiesOutput;
  CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
  CreateDatabaseDefaultPermissions?: Array<PrincipalPermissions>;
  AllowFullTableExternalDataAccess?: AllowFullTableExternalDataAccessEnum;
}
export interface CatalogDeltaSource {
  Name: string;
  Database: string;
  Table: string;
  AdditionalDeltaOptions?: Record<string, string>;
  OutputSchemas?: Array<GlueSchema>;
}
export type CatalogEncryptionMode =
  | "DISABLED"
  | "SSEKMS"
  | "SSEKMSWITHSERVICEROLE";
export type CatalogEntries = Array<CatalogEntry>;
export interface CatalogEntry {
  DatabaseName: string;
  TableName: string;
}
export type CatalogGetterPageSize = number;

export interface CatalogHudiSource {
  Name: string;
  Database: string;
  Table: string;
  AdditionalHudiOptions?: Record<string, string>;
  OutputSchemas?: Array<GlueSchema>;
}
export type CatalogIdString = string;

export interface CatalogImportStatus {
  ImportCompleted?: boolean;
  ImportTime?: Date | string;
  ImportedBy?: string;
}
export interface CatalogInput {
  Description?: string;
  FederatedCatalog?: FederatedCatalog;
  Parameters?: Record<string, string>;
  TargetRedshiftCatalog?: TargetRedshiftCatalog;
  CatalogProperties?: CatalogProperties;
  CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
  CreateDatabaseDefaultPermissions?: Array<PrincipalPermissions>;
  AllowFullTableExternalDataAccess?: AllowFullTableExternalDataAccessEnum;
}
export interface CatalogKafkaSource {
  Name: string;
  WindowSize?: number;
  DetectSchema?: boolean;
  Table: string;
  Database: string;
  StreamingOptions?: KafkaStreamingSourceOptions;
  DataPreviewOptions?: StreamingDataPreviewOptions;
}
export interface CatalogKinesisSource {
  Name: string;
  WindowSize?: number;
  DetectSchema?: boolean;
  Table: string;
  Database: string;
  StreamingOptions?: KinesisStreamingSourceOptions;
  DataPreviewOptions?: StreamingDataPreviewOptions;
}
export type CatalogList = Array<Catalog>;
export type CatalogNameString = string;

export interface CatalogProperties {
  DataLakeAccessProperties?: DataLakeAccessProperties;
  CustomProperties?: Record<string, string>;
}
export interface CatalogPropertiesOutput {
  DataLakeAccessProperties?: DataLakeAccessPropertiesOutput;
  CustomProperties?: Record<string, string>;
}
export interface CatalogSchemaChangePolicy {
  EnableUpdateCatalog?: boolean;
  UpdateBehavior?: UpdateCatalogBehavior;
}
export interface CatalogSource {
  Name: string;
  Database: string;
  Table: string;
}
export type CatalogTablesList = Array<string>;
export interface CatalogTarget {
  DatabaseName: string;
  Tables: Array<string>;
  ConnectionName?: string;
  EventQueueArn?: string;
  DlqEventQueueArn?: string;
}
export type CatalogTargetList = Array<CatalogTarget>;
export type Category = string;

export interface CheckSchemaVersionValidityInput {
  DataFormat: DataFormat;
  SchemaDefinition: string;
}
export interface CheckSchemaVersionValidityResponse {
  Valid?: boolean;
  Error?: string;
}
export type Classification = string;

export interface Classifier {
  GrokClassifier?: GrokClassifier;
  XMLClassifier?: XMLClassifier;
  JsonClassifier?: JsonClassifier;
  CsvClassifier?: CsvClassifier;
}
export type ClassifierList = Array<Classifier>;
export type ClassifierNameList = Array<string>;
export interface CloudWatchEncryption {
  CloudWatchEncryptionMode?: CloudWatchEncryptionMode;
  KmsKeyArn?: string;
}
export type CloudWatchEncryptionMode = "DISABLED" | "SSEKMS";
export type CodeGenArgName = string;

export type CodeGenArgValue = string;

export interface CodeGenConfigurationNode {
  AthenaConnectorSource?: AthenaConnectorSource;
  JDBCConnectorSource?: JDBCConnectorSource;
  SparkConnectorSource?: SparkConnectorSource;
  CatalogSource?: CatalogSource;
  RedshiftSource?: RedshiftSource;
  S3CatalogSource?: S3CatalogSource;
  S3CsvSource?: S3CsvSource;
  S3ExcelSource?: S3ExcelSource;
  S3JsonSource?: S3JsonSource;
  S3ParquetSource?: S3ParquetSource;
  RelationalCatalogSource?: RelationalCatalogSource;
  DynamoDBCatalogSource?: DynamoDBCatalogSource;
  JDBCConnectorTarget?: JDBCConnectorTarget;
  SparkConnectorTarget?: SparkConnectorTarget;
  CatalogTarget?: BasicCatalogTarget;
  RedshiftTarget?: RedshiftTarget;
  S3CatalogTarget?: S3CatalogTarget;
  S3GlueParquetTarget?: S3GlueParquetTarget;
  S3HyperDirectTarget?: S3HyperDirectTarget;
  S3DirectTarget?: S3DirectTarget;
  S3IcebergDirectTarget?: S3IcebergDirectTarget;
  ApplyMapping?: ApplyMapping;
  SelectFields?: SelectFields;
  DropFields?: DropFields;
  RenameField?: RenameField;
  Spigot?: Spigot;
  Join?: Join;
  SplitFields?: SplitFields;
  SelectFromCollection?: SelectFromCollection;
  FillMissingValues?: FillMissingValues;
  Filter?: Filter;
  CustomCode?: CustomCode;
  SparkSQL?: SparkSQL;
  DirectKinesisSource?: DirectKinesisSource;
  DirectKafkaSource?: DirectKafkaSource;
  CatalogKinesisSource?: CatalogKinesisSource;
  CatalogKafkaSource?: CatalogKafkaSource;
  DropNullFields?: DropNullFields;
  Merge?: Merge;
  Union?: Union;
  PIIDetection?: PIIDetection;
  Aggregate?: Aggregate;
  DropDuplicates?: DropDuplicates;
  GovernedCatalogTarget?: GovernedCatalogTarget;
  GovernedCatalogSource?: GovernedCatalogSource;
  MicrosoftSQLServerCatalogSource?: MicrosoftSQLServerCatalogSource;
  MySQLCatalogSource?: MySQLCatalogSource;
  OracleSQLCatalogSource?: OracleSQLCatalogSource;
  PostgreSQLCatalogSource?: PostgreSQLCatalogSource;
  MicrosoftSQLServerCatalogTarget?: MicrosoftSQLServerCatalogTarget;
  MySQLCatalogTarget?: MySQLCatalogTarget;
  OracleSQLCatalogTarget?: OracleSQLCatalogTarget;
  PostgreSQLCatalogTarget?: PostgreSQLCatalogTarget;
  DynamicTransform?: DynamicTransform;
  EvaluateDataQuality?: EvaluateDataQuality;
  S3CatalogHudiSource?: S3CatalogHudiSource;
  CatalogHudiSource?: CatalogHudiSource;
  S3HudiSource?: S3HudiSource;
  S3HudiCatalogTarget?: S3HudiCatalogTarget;
  S3HudiDirectTarget?: S3HudiDirectTarget;
  DirectJDBCSource?: DirectJDBCSource;
  S3CatalogDeltaSource?: S3CatalogDeltaSource;
  CatalogDeltaSource?: CatalogDeltaSource;
  S3DeltaSource?: S3DeltaSource;
  S3DeltaCatalogTarget?: S3DeltaCatalogTarget;
  S3DeltaDirectTarget?: S3DeltaDirectTarget;
  AmazonRedshiftSource?: AmazonRedshiftSource;
  AmazonRedshiftTarget?: AmazonRedshiftTarget;
  EvaluateDataQualityMultiFrame?: EvaluateDataQualityMultiFrame;
  Recipe?: Recipe;
  SnowflakeSource?: SnowflakeSource;
  SnowflakeTarget?: SnowflakeTarget;
  ConnectorDataSource?: ConnectorDataSource;
  ConnectorDataTarget?: ConnectorDataTarget;
}
export type CodeGenConfigurationNodes = Record<
  string,
  CodeGenConfigurationNode
>;
export interface CodeGenEdge {
  Source: string;
  Target: string;
  TargetParameter?: string;
}
export type CodeGenIdentifier = string;

export interface CodeGenNode {
  Id: string;
  NodeType: string;
  Args: Array<CodeGenNodeArg>;
  LineNumber?: number;
}
export interface CodeGenNodeArg {
  Name: string;
  Value: string;
  Param?: boolean;
}
export type CodeGenNodeArgs = Array<CodeGenNodeArg>;
export type CodeGenNodeType = string;

export interface Column {
  Name: string;
  Type?: string;
  Comment?: string;
  Parameters?: Record<string, string>;
}
export interface ColumnError {
  ColumnName?: string;
  Error?: ErrorDetail;
}
export type ColumnErrors = Array<ColumnError>;
export interface ColumnImportance {
  ColumnName?: string;
  Importance?: number;
}
export type ColumnImportanceList = Array<ColumnImportance>;
export type ColumnList = Array<Column>;
export type ColumnNameList = Array<string>;
export type ColumnNameString = string;

export interface ColumnRowFilter {
  ColumnName?: string;
  RowFilterExpression?: string;
}
export type ColumnRowFilterList = Array<ColumnRowFilter>;
export interface ColumnStatistics {
  ColumnName: string;
  ColumnType: string;
  AnalyzedTime: Date | string;
  StatisticsData: ColumnStatisticsData;
}
export interface ColumnStatisticsData {
  Type: ColumnStatisticsType;
  BooleanColumnStatisticsData?: BooleanColumnStatisticsData;
  DateColumnStatisticsData?: DateColumnStatisticsData;
  DecimalColumnStatisticsData?: DecimalColumnStatisticsData;
  DoubleColumnStatisticsData?: DoubleColumnStatisticsData;
  LongColumnStatisticsData?: LongColumnStatisticsData;
  StringColumnStatisticsData?: StringColumnStatisticsData;
  BinaryColumnStatisticsData?: BinaryColumnStatisticsData;
}
export interface ColumnStatisticsError {
  ColumnStatistics?: ColumnStatistics;
  Error?: ErrorDetail;
}
export type ColumnStatisticsErrors = Array<ColumnStatisticsError>;
export type ColumnStatisticsList = Array<ColumnStatistics>;
export type ColumnStatisticsState =
  | "STARTING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "STOPPED";
export declare class ColumnStatisticsTaskNotRunningException extends EffectData.TaggedError(
  "ColumnStatisticsTaskNotRunningException",
)<{
  readonly Message?: string;
}> {}
export interface ColumnStatisticsTaskRun {
  CustomerId?: string;
  ColumnStatisticsTaskRunId?: string;
  DatabaseName?: string;
  TableName?: string;
  ColumnNameList?: Array<string>;
  CatalogID?: string;
  Role?: string;
  SampleSize?: number;
  SecurityConfiguration?: string;
  NumberOfWorkers?: number;
  WorkerType?: string;
  ComputationType?: ComputationType;
  Status?: ColumnStatisticsState;
  CreationTime?: Date | string;
  LastUpdated?: Date | string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ErrorMessage?: string;
  DPUSeconds?: number;
}
export type ColumnStatisticsTaskRunIdList = Array<string>;
export declare class ColumnStatisticsTaskRunningException extends EffectData.TaggedError(
  "ColumnStatisticsTaskRunningException",
)<{
  readonly Message?: string;
}> {}
export type ColumnStatisticsTaskRunsList = Array<ColumnStatisticsTaskRun>;
export interface ColumnStatisticsTaskSettings {
  DatabaseName?: string;
  TableName?: string;
  Schedule?: Schedule;
  ColumnNameList?: Array<string>;
  CatalogID?: string;
  Role?: string;
  SampleSize?: number;
  SecurityConfiguration?: string;
  ScheduleType?: ScheduleType;
  SettingSource?: SettingSource;
  LastExecutionAttempt?: ExecutionAttempt;
}
export declare class ColumnStatisticsTaskStoppingException extends EffectData.TaggedError(
  "ColumnStatisticsTaskStoppingException",
)<{
  readonly Message?: string;
}> {}
export type ColumnStatisticsType =
  | "BOOLEAN"
  | "DATE"
  | "DECIMAL"
  | "DOUBLE"
  | "LONG"
  | "STRING"
  | "BINARY";
export type ColumnTypeString = string;

export type ColumnValuesString = string;

export type ColumnValueStringList = Array<string>;
export type CommentString = string;

export type CommitIdString = string;

export interface CompactionConfiguration {
  icebergConfiguration?: IcebergCompactionConfiguration;
}
export interface CompactionMetrics {
  IcebergMetrics?: IcebergCompactionMetrics;
}
export type CompactionStrategy = "BINPACK" | "SORT" | "ZORDER";
export type Comparator =
  | "EQUALS"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_EQUALS"
  | "LESS_THAN_EQUALS";
export type Compatibility =
  | "NONE"
  | "DISABLED"
  | "BACKWARD"
  | "BACKWARD_ALL"
  | "FORWARD"
  | "FORWARD_ALL"
  | "FULL"
  | "FULL_ALL";
export type CompressionType = "GZIP" | "BZIP2";
export type ComputationType = "FULL" | "INCREMENTAL";
export type ComputeEnvironment = "SPARK" | "ATHENA" | "PYTHON";
export interface ComputeEnvironmentConfiguration {
  Name: string;
  Description: string;
  ComputeEnvironment: ComputeEnvironment;
  SupportedAuthenticationTypes: Array<AuthenticationType>;
  ConnectionOptions: Record<string, Property>;
  ConnectionPropertyNameOverrides: Record<string, string>;
  ConnectionOptionNameOverrides: Record<string, string>;
  ConnectionPropertiesRequiredOverrides: Array<string>;
  PhysicalConnectionPropertiesRequired?: boolean;
}
export type ComputeEnvironmentConfigurationDescriptionString = string;

export type ComputeEnvironmentConfigurationMap = Record<
  string,
  ComputeEnvironmentConfiguration
>;
export type ComputeEnvironmentList = Array<ComputeEnvironment>;
export type ComputeEnvironmentName = string;

export type ComputeEnvironments = Array<ComputeEnvironment>;
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConcurrentRunsExceededException extends EffectData.TaggedError(
  "ConcurrentRunsExceededException",
)<{
  readonly Message?: string;
}> {}
export interface Condition {
  LogicalOperator?: LogicalOperator;
  JobName?: string;
  State?: JobRunState;
  CrawlerName?: string;
  CrawlState?: CrawlState;
}
export declare class ConditionCheckFailureException extends EffectData.TaggedError(
  "ConditionCheckFailureException",
)<{
  readonly Message?: string;
}> {}
export interface ConditionExpression {
  Condition: string;
  Value?: string;
  TargetColumn: string;
}
export type ConditionExpressionList = Array<ConditionExpression>;
export type ConditionList = Array<Condition>;
export type ConfigurationMap = Record<string, ConfigurationObject>;
export interface ConfigurationObject {
  DefaultValue?: string;
  AllowedValues?: Array<string>;
  MinValue?: string;
  MaxValue?: string;
}
export type ConfigValueString = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface ConfusionMatrix {
  NumTruePositives?: number;
  NumFalsePositives?: number;
  NumTrueNegatives?: number;
  NumFalseNegatives?: number;
}
export interface Connection {
  Name?: string;
  Description?: string;
  ConnectionType?: ConnectionType;
  MatchCriteria?: Array<string>;
  ConnectionProperties?: Record<ConnectionPropertyKey, string>;
  SparkProperties?: Record<string, string>;
  AthenaProperties?: Record<string, string>;
  PythonProperties?: Record<string, string>;
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  LastUpdatedBy?: string;
  Status?: ConnectionStatus;
  StatusReason?: string;
  LastConnectionValidationTime?: Date | string;
  AuthenticationConfiguration?: AuthenticationConfiguration;
  ConnectionSchemaVersion?: number;
  CompatibleComputeEnvironments?: Array<ComputeEnvironment>;
}
export interface ConnectionInput {
  Name: string;
  Description?: string;
  ConnectionType: ConnectionType;
  MatchCriteria?: Array<string>;
  ConnectionProperties: Record<ConnectionPropertyKey, string>;
  SparkProperties?: Record<string, string>;
  AthenaProperties?: Record<string, string>;
  PythonProperties?: Record<string, string>;
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
  AuthenticationConfiguration?: AuthenticationConfigurationInput;
  ValidateCredentials?: boolean;
  ValidateForComputeEnvironments?: Array<ComputeEnvironment>;
}
export type ConnectionList = Array<Connection>;
export type ConnectionName = string;

export type ConnectionOptions = Record<string, string>;
export interface ConnectionPasswordEncryption {
  ReturnConnectionPasswordEncrypted: boolean;
  AwsKmsKeyId?: string;
}
export type ConnectionProperties = Record<ConnectionPropertyKey, string>;
export type ConnectionPropertyKey =
  | "HOST"
  | "PORT"
  | "USER_NAME"
  | "PASSWORD"
  | "ENCRYPTED_PASSWORD"
  | "JDBC_DRIVER_JAR_URI"
  | "JDBC_DRIVER_CLASS_NAME"
  | "JDBC_ENGINE"
  | "JDBC_ENGINE_VERSION"
  | "CONFIG_FILES"
  | "INSTANCE_ID"
  | "JDBC_CONNECTION_URL"
  | "JDBC_ENFORCE_SSL"
  | "CUSTOM_JDBC_CERT"
  | "SKIP_CUSTOM_JDBC_CERT_VALIDATION"
  | "CUSTOM_JDBC_CERT_STRING"
  | "CONNECTION_URL"
  | "KAFKA_BOOTSTRAP_SERVERS"
  | "KAFKA_SSL_ENABLED"
  | "KAFKA_CUSTOM_CERT"
  | "KAFKA_SKIP_CUSTOM_CERT_VALIDATION"
  | "KAFKA_CLIENT_KEYSTORE"
  | "KAFKA_CLIENT_KEYSTORE_PASSWORD"
  | "KAFKA_CLIENT_KEY_PASSWORD"
  | "ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD"
  | "ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD"
  | "KAFKA_SASL_MECHANISM"
  | "KAFKA_SASL_PLAIN_USERNAME"
  | "KAFKA_SASL_PLAIN_PASSWORD"
  | "ENCRYPTED_KAFKA_SASL_PLAIN_PASSWORD"
  | "KAFKA_SASL_SCRAM_USERNAME"
  | "KAFKA_SASL_SCRAM_PASSWORD"
  | "KAFKA_SASL_SCRAM_SECRETS_ARN"
  | "ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD"
  | "KAFKA_SASL_GSSAPI_KEYTAB"
  | "KAFKA_SASL_GSSAPI_KRB5_CONF"
  | "KAFKA_SASL_GSSAPI_SERVICE"
  | "KAFKA_SASL_GSSAPI_PRINCIPAL"
  | "SECRET_ID"
  | "CONNECTOR_URL"
  | "CONNECTOR_TYPE"
  | "CONNECTOR_CLASS_NAME"
  | "ENDPOINT"
  | "ENDPOINT_TYPE"
  | "ROLE_ARN"
  | "REGION"
  | "WORKGROUP_NAME"
  | "CLUSTER_IDENTIFIER"
  | "DATABASE";
export type ConnectionSchemaVersion = number;

export interface ConnectionsList {
  Connections?: Array<string>;
}
export type ConnectionStatus = "READY" | "IN_PROGRESS" | "FAILED";
export type ConnectionString = string;

export type ConnectionStringList = Array<string>;
export type ConnectionType =
  | "JDBC"
  | "SFTP"
  | "MONGODB"
  | "KAFKA"
  | "NETWORK"
  | "MARKETPLACE"
  | "CUSTOM"
  | "SALESFORCE"
  | "VIEW_VALIDATION_REDSHIFT"
  | "VIEW_VALIDATION_ATHENA"
  | "GOOGLEADS"
  | "GOOGLESHEETS"
  | "GOOGLEANALYTICS4"
  | "SERVICENOW"
  | "MARKETO"
  | "SAPODATA"
  | "ZENDESK"
  | "JIRACLOUD"
  | "NETSUITEERP"
  | "HUBSPOT"
  | "FACEBOOKADS"
  | "INSTAGRAMADS"
  | "ZOHOCRM"
  | "SALESFORCEPARDOT"
  | "SALESFORCEMARKETINGCLOUD"
  | "SLACK"
  | "STRIPE"
  | "INTERCOM"
  | "SNAPCHATADS";
export interface ConnectionTypeBrief {
  ConnectionType?: ConnectionType;
  DisplayName?: string;
  Vendor?: string;
  Description?: string;
  Categories?: Array<string>;
  Capabilities?: Capabilities;
  LogoUrl?: string;
  ConnectionTypeVariants?: Array<ConnectionTypeVariant>;
}
export type ConnectionTypeList = Array<ConnectionTypeBrief>;
export interface ConnectionTypeVariant {
  ConnectionTypeVariantName?: string;
  DisplayName?: string;
  Description?: string;
  LogoUrl?: string;
}
export type ConnectionTypeVariantList = Array<ConnectionTypeVariant>;
export interface ConnectorDataSource {
  Name: string;
  ConnectionType: string;
  Data: Record<string, string>;
  OutputSchemas?: Array<GlueSchema>;
}
export interface ConnectorDataTarget {
  Name: string;
  ConnectionType: string;
  Data: Record<string, string>;
  Inputs?: Array<string>;
}
export type ConnectorOptions = Record<string, string>;
export type ContextKey = string;

export type ContextValue = string;

export type ContextWords = Array<string>;
export interface Crawl {
  State?: CrawlState;
  StartedOn?: Date | string;
  CompletedOn?: Date | string;
  ErrorMessage?: string;
  LogGroup?: string;
  LogStream?: string;
}
export interface Crawler {
  Name?: string;
  Role?: string;
  Targets?: CrawlerTargets;
  DatabaseName?: string;
  Description?: string;
  Classifiers?: Array<string>;
  RecrawlPolicy?: RecrawlPolicy;
  SchemaChangePolicy?: SchemaChangePolicy;
  LineageConfiguration?: LineageConfiguration;
  State?: CrawlerState;
  TablePrefix?: string;
  Schedule?: Schedule;
  CrawlElapsedTime?: number;
  CreationTime?: Date | string;
  LastUpdated?: Date | string;
  LastCrawl?: LastCrawlInfo;
  Version?: number;
  Configuration?: string;
  CrawlerSecurityConfiguration?: string;
  LakeFormationConfiguration?: LakeFormationConfiguration;
}
export type CrawlerConfiguration = string;

export interface CrawlerHistory {
  CrawlId?: string;
  State?: CrawlerHistoryState;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Summary?: string;
  ErrorMessage?: string;
  LogGroup?: string;
  LogStream?: string;
  MessagePrefix?: string;
  DPUHour?: number;
}
export type CrawlerHistoryList = Array<CrawlerHistory>;
export type CrawlerHistoryState =
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "STOPPED";
export type CrawlerLineageSettings = "ENABLE" | "DISABLE";
export type CrawlerList = Array<Crawler>;
export interface CrawlerMetrics {
  CrawlerName?: string;
  TimeLeftSeconds?: number;
  StillEstimating?: boolean;
  LastRuntimeSeconds?: number;
  MedianRuntimeSeconds?: number;
  TablesCreated?: number;
  TablesUpdated?: number;
  TablesDeleted?: number;
}
export type CrawlerMetricsList = Array<CrawlerMetrics>;
export type CrawlerNameList = Array<string>;
export interface CrawlerNodeDetails {
  Crawls?: Array<Crawl>;
}
export declare class CrawlerNotRunningException extends EffectData.TaggedError(
  "CrawlerNotRunningException",
)<{
  readonly Message?: string;
}> {}
export declare class CrawlerRunningException extends EffectData.TaggedError(
  "CrawlerRunningException",
)<{
  readonly Message?: string;
}> {}
export type CrawlerSecurityConfiguration = string;

export type CrawlerState = "READY" | "RUNNING" | "STOPPING";
export declare class CrawlerStoppingException extends EffectData.TaggedError(
  "CrawlerStoppingException",
)<{
  readonly Message?: string;
}> {}
export interface CrawlerTargets {
  S3Targets?: Array<S3Target>;
  JdbcTargets?: Array<JdbcTarget>;
  MongoDBTargets?: Array<MongoDBTarget>;
  DynamoDBTargets?: Array<DynamoDBTarget>;
  CatalogTargets?: Array<CatalogTarget>;
  DeltaTargets?: Array<DeltaTarget>;
  IcebergTargets?: Array<IcebergTarget>;
  HudiTargets?: Array<HudiTarget>;
}
export type CrawlId = string;

export type CrawlList = Array<Crawl>;
export interface CrawlsFilter {
  FieldName?: FieldName;
  FilterOperator?: FilterOperator;
  FieldValue?: string;
}
export type CrawlsFilterList = Array<CrawlsFilter>;
export type CrawlState =
  | "RUNNING"
  | "CANCELLING"
  | "CANCELLED"
  | "SUCCEEDED"
  | "FAILED"
  | "ERROR";
export interface CreateBlueprintRequest {
  Name: string;
  Description?: string;
  BlueprintLocation: string;
  Tags?: Record<string, string>;
}
export interface CreateBlueprintResponse {
  Name?: string;
}
export interface CreateCatalogRequest {
  Name: string;
  CatalogInput: CatalogInput;
  Tags?: Record<string, string>;
}
export interface CreateCatalogResponse {}
export interface CreateClassifierRequest {
  GrokClassifier?: CreateGrokClassifierRequest;
  XMLClassifier?: CreateXMLClassifierRequest;
  JsonClassifier?: CreateJsonClassifierRequest;
  CsvClassifier?: CreateCsvClassifierRequest;
}
export interface CreateClassifierResponse {}
export interface CreateColumnStatisticsTaskSettingsRequest {
  DatabaseName: string;
  TableName: string;
  Role: string;
  Schedule?: string;
  ColumnNameList?: Array<string>;
  SampleSize?: number;
  CatalogID?: string;
  SecurityConfiguration?: string;
  Tags?: Record<string, string>;
}
export interface CreateColumnStatisticsTaskSettingsResponse {}
export interface CreateConnectionRequest {
  CatalogId?: string;
  ConnectionInput: ConnectionInput;
  Tags?: Record<string, string>;
}
export interface CreateConnectionResponse {
  CreateConnectionStatus?: ConnectionStatus;
}
export interface CreateCrawlerRequest {
  Name: string;
  Role: string;
  DatabaseName?: string;
  Description?: string;
  Targets: CrawlerTargets;
  Schedule?: string;
  Classifiers?: Array<string>;
  TablePrefix?: string;
  SchemaChangePolicy?: SchemaChangePolicy;
  RecrawlPolicy?: RecrawlPolicy;
  LineageConfiguration?: LineageConfiguration;
  LakeFormationConfiguration?: LakeFormationConfiguration;
  Configuration?: string;
  CrawlerSecurityConfiguration?: string;
  Tags?: Record<string, string>;
}
export interface CreateCrawlerResponse {}
export interface CreateCsvClassifierRequest {
  Name: string;
  Delimiter?: string;
  QuoteSymbol?: string;
  ContainsHeader?: CsvHeaderOption;
  Header?: Array<string>;
  DisableValueTrimming?: boolean;
  AllowSingleColumn?: boolean;
  CustomDatatypeConfigured?: boolean;
  CustomDatatypes?: Array<string>;
  Serde?: CsvSerdeOption;
}
export interface CreateCustomEntityTypeRequest {
  Name: string;
  RegexString: string;
  ContextWords?: Array<string>;
  Tags?: Record<string, string>;
}
export interface CreateCustomEntityTypeResponse {
  Name?: string;
}
export interface CreateDatabaseRequest {
  CatalogId?: string;
  DatabaseInput: DatabaseInput;
  Tags?: Record<string, string>;
}
export interface CreateDatabaseResponse {}
export interface CreateDataQualityRulesetRequest {
  Name: string;
  Description?: string;
  Ruleset: string;
  Tags?: Record<string, string>;
  TargetTable?: DataQualityTargetTable;
  DataQualitySecurityConfiguration?: string;
  ClientToken?: string;
}
export interface CreateDataQualityRulesetResponse {
  Name?: string;
}
export interface CreateDevEndpointRequest {
  EndpointName: string;
  RoleArn: string;
  SecurityGroupIds?: Array<string>;
  SubnetId?: string;
  PublicKey?: string;
  PublicKeys?: Array<string>;
  NumberOfNodes?: number;
  WorkerType?: WorkerType;
  GlueVersion?: string;
  NumberOfWorkers?: number;
  ExtraPythonLibsS3Path?: string;
  ExtraJarsS3Path?: string;
  SecurityConfiguration?: string;
  Tags?: Record<string, string>;
  Arguments?: Record<string, string>;
}
export interface CreateDevEndpointResponse {
  EndpointName?: string;
  Status?: string;
  SecurityGroupIds?: Array<string>;
  SubnetId?: string;
  RoleArn?: string;
  YarnEndpointAddress?: string;
  ZeppelinRemoteSparkInterpreterPort?: number;
  NumberOfNodes?: number;
  WorkerType?: WorkerType;
  GlueVersion?: string;
  NumberOfWorkers?: number;
  AvailabilityZone?: string;
  VpcId?: string;
  ExtraPythonLibsS3Path?: string;
  ExtraJarsS3Path?: string;
  FailureReason?: string;
  SecurityConfiguration?: string;
  CreatedTimestamp?: Date | string;
  Arguments?: Record<string, string>;
}
export type CreatedTimestamp = string;

export interface CreateGrokClassifierRequest {
  Classification: string;
  Name: string;
  GrokPattern: string;
  CustomPatterns?: string;
}
export interface CreateIcebergTableInput {
  Location: string;
  Schema: IcebergSchema;
  PartitionSpec?: IcebergPartitionSpec;
  WriteOrder?: IcebergSortOrder;
  Properties?: Record<string, string>;
}
export interface CreateIntegrationRequest {
  IntegrationName: string;
  SourceArn: string;
  TargetArn: string;
  Description?: string;
  DataFilter?: string;
  KmsKeyId?: string;
  AdditionalEncryptionContext?: Record<string, string>;
  Tags?: Array<Tag>;
  IntegrationConfig?: IntegrationConfig;
}
export interface CreateIntegrationResourcePropertyRequest {
  ResourceArn: string;
  SourceProcessingProperties?: SourceProcessingProperties;
  TargetProcessingProperties?: TargetProcessingProperties;
}
export interface CreateIntegrationResourcePropertyResponse {
  ResourceArn: string;
  SourceProcessingProperties?: SourceProcessingProperties;
  TargetProcessingProperties?: TargetProcessingProperties;
}
export interface CreateIntegrationResponse {
  SourceArn: string;
  TargetArn: string;
  IntegrationName: string;
  Description?: string;
  IntegrationArn: string;
  KmsKeyId?: string;
  AdditionalEncryptionContext?: Record<string, string>;
  Tags?: Array<Tag>;
  Status: IntegrationStatus;
  CreateTime: Date | string;
  Errors?: Array<IntegrationError>;
  DataFilter?: string;
  IntegrationConfig?: IntegrationConfig;
}
export interface CreateIntegrationTablePropertiesRequest {
  ResourceArn: string;
  TableName: string;
  SourceTableConfig?: SourceTableConfig;
  TargetTableConfig?: TargetTableConfig;
}
export interface CreateIntegrationTablePropertiesResponse {}
export interface CreateJobRequest {
  Name: string;
  JobMode?: JobMode;
  JobRunQueuingEnabled?: boolean;
  Description?: string;
  LogUri?: string;
  Role: string;
  ExecutionProperty?: ExecutionProperty;
  Command: JobCommand;
  DefaultArguments?: Record<string, string>;
  NonOverridableArguments?: Record<string, string>;
  Connections?: ConnectionsList;
  MaxRetries?: number;
  AllocatedCapacity?: number;
  Timeout?: number;
  MaxCapacity?: number;
  SecurityConfiguration?: string;
  Tags?: Record<string, string>;
  NotificationProperty?: NotificationProperty;
  GlueVersion?: string;
  NumberOfWorkers?: number;
  WorkerType?: WorkerType;
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
  ExecutionClass?: ExecutionClass;
  SourceControlDetails?: SourceControlDetails;
  MaintenanceWindow?: string;
}
export interface CreateJobResponse {
  Name?: string;
}
export interface CreateJsonClassifierRequest {
  Name: string;
  JsonPath: string;
}
export interface CreateMLTransformRequest {
  Name: string;
  Description?: string;
  InputRecordTables: Array<GlueTable>;
  Parameters: TransformParameters;
  Role: string;
  GlueVersion?: string;
  MaxCapacity?: number;
  WorkerType?: WorkerType;
  NumberOfWorkers?: number;
  Timeout?: number;
  MaxRetries?: number;
  Tags?: Record<string, string>;
  TransformEncryption?: TransformEncryption;
}
export interface CreateMLTransformResponse {
  TransformId?: string;
}
export interface CreatePartitionIndexRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionIndex: PartitionIndex;
}
export interface CreatePartitionIndexResponse {}
export interface CreatePartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionInput: PartitionInput;
}
export interface CreatePartitionResponse {}
export interface CreateRegistryInput {
  RegistryName: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateRegistryResponse {
  RegistryArn?: string;
  RegistryName?: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateSchemaInput {
  RegistryId?: RegistryId;
  SchemaName: string;
  DataFormat: DataFormat;
  Compatibility?: Compatibility;
  Description?: string;
  Tags?: Record<string, string>;
  SchemaDefinition?: string;
}
export interface CreateSchemaResponse {
  RegistryName?: string;
  RegistryArn?: string;
  SchemaName?: string;
  SchemaArn?: string;
  Description?: string;
  DataFormat?: DataFormat;
  Compatibility?: Compatibility;
  SchemaCheckpoint?: number;
  LatestSchemaVersion?: number;
  NextSchemaVersion?: number;
  SchemaStatus?: SchemaStatus;
  Tags?: Record<string, string>;
  SchemaVersionId?: string;
  SchemaVersionStatus?: SchemaVersionStatus;
}
export interface CreateScriptRequest {
  DagNodes?: Array<CodeGenNode>;
  DagEdges?: Array<CodeGenEdge>;
  Language?: Language;
}
export interface CreateScriptResponse {
  PythonScript?: string;
  ScalaCode?: string;
}
export interface CreateSecurityConfigurationRequest {
  Name: string;
  EncryptionConfiguration: EncryptionConfiguration;
}
export interface CreateSecurityConfigurationResponse {
  Name?: string;
  CreatedTimestamp?: Date | string;
}
export interface CreateSessionRequest {
  Id: string;
  Description?: string;
  Role: string;
  Command: SessionCommand;
  Timeout?: number;
  IdleTimeout?: number;
  DefaultArguments?: Record<string, string>;
  Connections?: ConnectionsList;
  MaxCapacity?: number;
  NumberOfWorkers?: number;
  WorkerType?: WorkerType;
  SecurityConfiguration?: string;
  GlueVersion?: string;
  Tags?: Record<string, string>;
  RequestOrigin?: string;
}
export interface CreateSessionResponse {
  Session?: Session;
}
export interface CreateTableOptimizerRequest {
  CatalogId: string;
  DatabaseName: string;
  TableName: string;
  Type: TableOptimizerType;
  TableOptimizerConfiguration: TableOptimizerConfiguration;
}
export interface CreateTableOptimizerResponse {}
export interface CreateTableRequest {
  CatalogId?: string;
  DatabaseName: string;
  Name?: string;
  TableInput: TableInput;
  PartitionIndexes?: Array<PartitionIndex>;
  TransactionId?: string;
  OpenTableFormatInput?: OpenTableFormatInput;
}
export interface CreateTableResponse {}
export interface CreateTriggerRequest {
  Name: string;
  WorkflowName?: string;
  Type: TriggerType;
  Schedule?: string;
  Predicate?: Predicate;
  Actions: Array<Action>;
  Description?: string;
  StartOnCreation?: boolean;
  Tags?: Record<string, string>;
  EventBatchingCondition?: EventBatchingCondition;
}
export interface CreateTriggerResponse {
  Name?: string;
}
export interface CreateUsageProfileRequest {
  Name: string;
  Description?: string;
  Configuration: ProfileConfiguration;
  Tags?: Record<string, string>;
}
export interface CreateUsageProfileResponse {
  Name?: string;
}
export interface CreateUserDefinedFunctionRequest {
  CatalogId?: string;
  DatabaseName: string;
  FunctionInput: UserDefinedFunctionInput;
}
export interface CreateUserDefinedFunctionResponse {}
export interface CreateWorkflowRequest {
  Name: string;
  Description?: string;
  DefaultRunProperties?: Record<string, string>;
  Tags?: Record<string, string>;
  MaxConcurrentRuns?: number;
}
export interface CreateWorkflowResponse {
  Name?: string;
}
export interface CreateXMLClassifierRequest {
  Classification: string;
  Name: string;
  RowTag?: string;
}
export type CredentialKey = string;

export type CredentialMap = Record<string, string>;
export type CredentialValue = string;

export type CronExpression = string;

export interface CsvClassifier {
  Name: string;
  CreationTime?: Date | string;
  LastUpdated?: Date | string;
  Version?: number;
  Delimiter?: string;
  QuoteSymbol?: string;
  ContainsHeader?: CsvHeaderOption;
  Header?: Array<string>;
  DisableValueTrimming?: boolean;
  AllowSingleColumn?: boolean;
  CustomDatatypeConfigured?: boolean;
  CustomDatatypes?: Array<string>;
  Serde?: CsvSerdeOption;
}
export type CsvColumnDelimiter = string;

export type CsvHeader = Array<string>;
export type CsvHeaderOption = "UNKNOWN" | "PRESENT" | "ABSENT";
export type CsvQuoteSymbol = string;

export type CsvSerdeOption = "OpenCSVSerDe" | "LazySimpleSerDe" | "None";
export interface CustomCode {
  Name: string;
  Inputs: Array<string>;
  Code: string;
  ClassName: string;
  OutputSchemas?: Array<GlueSchema>;
}
export type CustomDatatypes = Array<string>;
export interface CustomEntityType {
  Name: string;
  RegexString: string;
  ContextWords?: Array<string>;
}
export type CustomEntityTypeNames = Array<string>;
export type CustomEntityTypes = Array<CustomEntityType>;
export type CustomPatterns = string;

export type CustomProperties = Record<string, string>;
export type DagEdges = Array<CodeGenEdge>;
export type DagNodes = Array<CodeGenNode>;
export interface Database {
  Name: string;
  Description?: string;
  LocationUri?: string;
  Parameters?: Record<string, string>;
  CreateTime?: Date | string;
  CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
  TargetDatabase?: DatabaseIdentifier;
  CatalogId?: string;
  FederatedDatabase?: FederatedDatabase;
}
export type DatabaseAttributes = "NAME";
export type DatabaseAttributesList = Array<DatabaseAttributes>;
export interface DatabaseIdentifier {
  CatalogId?: string;
  DatabaseName?: string;
  Region?: string;
}
export interface DatabaseInput {
  Name: string;
  Description?: string;
  LocationUri?: string;
  Parameters?: Record<string, string>;
  CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
  TargetDatabase?: DatabaseIdentifier;
  FederatedDatabase?: FederatedDatabase;
}
export type DatabaseList = Array<Database>;
export type DatabaseName = string;

export type databaseNameString = string;

export type DatabrewCondition = string;

export type DatabrewConditionValue = string;

export interface DataCatalogEncryptionSettings {
  EncryptionAtRest?: EncryptionAtRest;
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
}
export type DataFormat = "AVRO" | "JSON" | "PROTOBUF";
export interface DataLakeAccessProperties {
  DataLakeAccess?: boolean;
  DataTransferRole?: string;
  KmsKey?: string;
  CatalogType?: string;
}
export interface DataLakeAccessPropertiesOutput {
  DataLakeAccess?: boolean;
  DataTransferRole?: string;
  KmsKey?: string;
  ManagedWorkgroupName?: string;
  ManagedWorkgroupStatus?: string;
  RedshiftDatabaseName?: string;
  StatusMessage?: string;
  CatalogType?: string;
}
export interface DataLakePrincipal {
  DataLakePrincipalIdentifier?: string;
}
export type DataLakePrincipalString = string;

export type DataOperation = "READ" | "WRITE";
export type DataOperations = Array<DataOperation>;
export interface DatapointInclusionAnnotation {
  ProfileId?: string;
  StatisticId?: string;
  InclusionAnnotation?: InclusionAnnotationValue;
}
export interface DataQualityAggregatedMetrics {
  TotalRowsProcessed?: number;
  TotalRowsPassed?: number;
  TotalRowsFailed?: number;
  TotalRulesProcessed?: number;
  TotalRulesPassed?: number;
  TotalRulesFailed?: number;
}
export interface DataQualityAnalyzerResult {
  Name?: string;
  Description?: string;
  EvaluationMessage?: string;
  EvaluatedMetrics?: Record<string, number>;
}
export type DataQualityAnalyzerResults = Array<DataQualityAnalyzerResult>;
export interface DataQualityEncryption {
  DataQualityEncryptionMode?: DataQualityEncryptionMode;
  KmsKeyArn?: string;
}
export type DataQualityEncryptionMode = "DISABLED" | "SSEKMS";
export interface DataQualityEvaluationRunAdditionalRunOptions {
  CloudWatchMetricsEnabled?: boolean;
  ResultsS3Prefix?: string;
  CompositeRuleEvaluationMethod?: DQCompositeRuleEvaluationMethod;
}
export interface DataQualityMetricValues {
  ActualValue?: number;
  ExpectedValue?: number;
  LowerLimit?: number;
  UpperLimit?: number;
}
export type DataQualityModelStatus = "RUNNING" | "SUCCEEDED" | "FAILED";
export interface DataQualityObservation {
  Description?: string;
  MetricBasedObservation?: MetricBasedObservation;
}
export type DataQualityObservationDescription = string;

export type DataQualityObservations = Array<DataQualityObservation>;
export interface DataQualityResult {
  ResultId?: string;
  ProfileId?: string;
  Score?: number;
  DataSource?: DataSource;
  RulesetName?: string;
  EvaluationContext?: string;
  StartedOn?: Date | string;
  CompletedOn?: Date | string;
  JobName?: string;
  JobRunId?: string;
  RulesetEvaluationRunId?: string;
  RuleResults?: Array<DataQualityRuleResult>;
  AnalyzerResults?: Array<DataQualityAnalyzerResult>;
  Observations?: Array<DataQualityObservation>;
  AggregatedMetrics?: DataQualityAggregatedMetrics;
}
export interface DataQualityResultDescription {
  ResultId?: string;
  DataSource?: DataSource;
  JobName?: string;
  JobRunId?: string;
  StartedOn?: Date | string;
}
export type DataQualityResultDescriptionList =
  Array<DataQualityResultDescription>;
export interface DataQualityResultFilterCriteria {
  DataSource?: DataSource;
  JobName?: string;
  JobRunId?: string;
  StartedAfter?: Date | string;
  StartedBefore?: Date | string;
}
export type DataQualityResultIdList = Array<string>;
export type DataQualityResultIds = Array<string>;
export type DataQualityResultsList = Array<DataQualityResult>;
export interface DataQualityRuleRecommendationRunDescription {
  RunId?: string;
  Status?: TaskStatusType;
  StartedOn?: Date | string;
  DataSource?: DataSource;
}
export interface DataQualityRuleRecommendationRunFilter {
  DataSource: DataSource;
  StartedBefore?: Date | string;
  StartedAfter?: Date | string;
}
export type DataQualityRuleRecommendationRunList =
  Array<DataQualityRuleRecommendationRunDescription>;
export interface DataQualityRuleResult {
  Name?: string;
  Description?: string;
  EvaluationMessage?: string;
  Result?: DataQualityRuleResultStatus;
  EvaluatedMetrics?: Record<string, number>;
  EvaluatedRule?: string;
  RuleMetrics?: Record<string, number>;
}
export type DataQualityRuleResultDescription = string;

export type DataQualityRuleResults = Array<DataQualityRuleResult>;
export type DataQualityRuleResultStatus = "PASS" | "FAIL" | "ERROR";
export interface DataQualityRulesetEvaluationRunDescription {
  RunId?: string;
  Status?: TaskStatusType;
  StartedOn?: Date | string;
  DataSource?: DataSource;
}
export interface DataQualityRulesetEvaluationRunFilter {
  DataSource: DataSource;
  StartedBefore?: Date | string;
  StartedAfter?: Date | string;
}
export type DataQualityRulesetEvaluationRunList =
  Array<DataQualityRulesetEvaluationRunDescription>;
export interface DataQualityRulesetFilterCriteria {
  Name?: string;
  Description?: string;
  CreatedBefore?: Date | string;
  CreatedAfter?: Date | string;
  LastModifiedBefore?: Date | string;
  LastModifiedAfter?: Date | string;
  TargetTable?: DataQualityTargetTable;
}
export type DataQualityRulesetList = Array<DataQualityRulesetListDetails>;
export interface DataQualityRulesetListDetails {
  Name?: string;
  Description?: string;
  CreatedOn?: Date | string;
  LastModifiedOn?: Date | string;
  TargetTable?: DataQualityTargetTable;
  RecommendationRunId?: string;
  RuleCount?: number;
}
export type DataQualityRulesetString = string;

export interface DataQualityTargetTable {
  TableName: string;
  DatabaseName: string;
  CatalogId?: string;
}
export interface DataSource {
  GlueTable: GlueTable;
}
export type DataSourceMap = Record<string, DataSource>;
export interface Datatype {
  Id: string;
  Label: string;
}
export interface DateColumnStatisticsData {
  MinimumValue?: Date | string;
  MaximumValue?: Date | string;
  NumberOfNulls: number;
  NumberOfDistinctValues: number;
}
export interface DecimalColumnStatisticsData {
  MinimumValue?: DecimalNumber;
  MaximumValue?: DecimalNumber;
  NumberOfNulls: number;
  NumberOfDistinctValues: number;
}
export interface DecimalNumber {
  UnscaledValue: Uint8Array | string;
  Scale: number;
}
export type DeleteBehavior =
  | "LOG"
  | "DELETE_FROM_DATABASE"
  | "DEPRECATE_IN_DATABASE";
export interface DeleteBlueprintRequest {
  Name: string;
}
export interface DeleteBlueprintResponse {
  Name?: string;
}
export interface DeleteCatalogRequest {
  CatalogId: string;
}
export interface DeleteCatalogResponse {}
export interface DeleteClassifierRequest {
  Name: string;
}
export interface DeleteClassifierResponse {}
export interface DeleteColumnStatisticsForPartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionValues: Array<string>;
  ColumnName: string;
}
export interface DeleteColumnStatisticsForPartitionResponse {}
export interface DeleteColumnStatisticsForTableRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  ColumnName: string;
}
export interface DeleteColumnStatisticsForTableResponse {}
export interface DeleteColumnStatisticsTaskSettingsRequest {
  DatabaseName: string;
  TableName: string;
}
export interface DeleteColumnStatisticsTaskSettingsResponse {}
export type DeleteConnectionNameList = Array<string>;
export interface DeleteConnectionRequest {
  CatalogId?: string;
  ConnectionName: string;
}
export interface DeleteConnectionResponse {}
export interface DeleteCrawlerRequest {
  Name: string;
}
export interface DeleteCrawlerResponse {}
export interface DeleteCustomEntityTypeRequest {
  Name: string;
}
export interface DeleteCustomEntityTypeResponse {
  Name?: string;
}
export interface DeleteDatabaseRequest {
  CatalogId?: string;
  Name: string;
}
export interface DeleteDatabaseResponse {}
export interface DeleteDataQualityRulesetRequest {
  Name: string;
}
export interface DeleteDataQualityRulesetResponse {}
export interface DeleteDevEndpointRequest {
  EndpointName: string;
}
export interface DeleteDevEndpointResponse {}
export interface DeleteIntegrationRequest {
  IntegrationIdentifier: string;
}
export interface DeleteIntegrationResponse {
  SourceArn: string;
  TargetArn: string;
  IntegrationName: string;
  Description?: string;
  IntegrationArn: string;
  KmsKeyId?: string;
  AdditionalEncryptionContext?: Record<string, string>;
  Tags?: Array<Tag>;
  Status: IntegrationStatus;
  CreateTime: Date | string;
  Errors?: Array<IntegrationError>;
  DataFilter?: string;
}
export interface DeleteIntegrationTablePropertiesRequest {
  ResourceArn: string;
  TableName: string;
}
export interface DeleteIntegrationTablePropertiesResponse {}
export interface DeleteJobRequest {
  JobName: string;
}
export interface DeleteJobResponse {
  JobName?: string;
}
export interface DeleteMLTransformRequest {
  TransformId: string;
}
export interface DeleteMLTransformResponse {
  TransformId?: string;
}
export interface DeletePartitionIndexRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  IndexName: string;
}
export interface DeletePartitionIndexResponse {}
export interface DeletePartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionValues: Array<string>;
}
export interface DeletePartitionResponse {}
export interface DeleteRegistryInput {
  RegistryId: RegistryId;
}
export interface DeleteRegistryResponse {
  RegistryName?: string;
  RegistryArn?: string;
  Status?: RegistryStatus;
}
export interface DeleteResourcePolicyRequest {
  PolicyHashCondition?: string;
  ResourceArn?: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteSchemaInput {
  SchemaId: SchemaId;
}
export interface DeleteSchemaResponse {
  SchemaArn?: string;
  SchemaName?: string;
  Status?: SchemaStatus;
}
export interface DeleteSchemaVersionsInput {
  SchemaId: SchemaId;
  Versions: string;
}
export interface DeleteSchemaVersionsResponse {
  SchemaVersionErrors?: Array<SchemaVersionErrorItem>;
}
export interface DeleteSecurityConfigurationRequest {
  Name: string;
}
export interface DeleteSecurityConfigurationResponse {}
export interface DeleteSessionRequest {
  Id: string;
  RequestOrigin?: string;
}
export interface DeleteSessionResponse {
  Id?: string;
}
export interface DeleteTableOptimizerRequest {
  CatalogId: string;
  DatabaseName: string;
  TableName: string;
  Type: TableOptimizerType;
}
export interface DeleteTableOptimizerResponse {}
export interface DeleteTableRequest {
  CatalogId?: string;
  DatabaseName: string;
  Name: string;
  TransactionId?: string;
}
export interface DeleteTableResponse {}
export interface DeleteTableVersionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  VersionId: string;
}
export interface DeleteTableVersionResponse {}
export interface DeleteTriggerRequest {
  Name: string;
}
export interface DeleteTriggerResponse {
  Name?: string;
}
export interface DeleteUsageProfileRequest {
  Name: string;
}
export interface DeleteUsageProfileResponse {}
export interface DeleteUserDefinedFunctionRequest {
  CatalogId?: string;
  DatabaseName: string;
  FunctionName: string;
}
export interface DeleteUserDefinedFunctionResponse {}
export interface DeleteWorkflowRequest {
  Name: string;
}
export interface DeleteWorkflowResponse {
  Name?: string;
}
export interface DeltaTarget {
  DeltaTables?: Array<string>;
  ConnectionName?: string;
  WriteManifest?: boolean;
  CreateNativeDeltaTable?: boolean;
}
export type DeltaTargetCompressionType = "UNCOMPRESSED" | "SNAPPY";
export type DeltaTargetList = Array<DeltaTarget>;
export interface DescribeConnectionTypeRequest {
  ConnectionType: string;
}
export interface DescribeConnectionTypeResponse {
  ConnectionType?: string;
  Description?: string;
  Capabilities?: Capabilities;
  ConnectionProperties?: Record<string, Property>;
  ConnectionOptions?: Record<string, Property>;
  AuthenticationConfiguration?: AuthConfiguration;
  ComputeEnvironmentConfigurations?: Record<
    string,
    ComputeEnvironmentConfiguration
  >;
  PhysicalConnectionRequirements?: Record<string, Property>;
  AthenaConnectionProperties?: Record<string, Property>;
  PythonConnectionProperties?: Record<string, Property>;
  SparkConnectionProperties?: Record<string, Property>;
}
export interface DescribeEntityRequest {
  ConnectionName: string;
  CatalogId?: string;
  EntityName: string;
  NextToken?: string;
  DataStoreApiVersion?: string;
}
export interface DescribeEntityResponse {
  Fields?: Array<Field>;
  NextToken?: string;
}
export interface DescribeInboundIntegrationsRequest {
  IntegrationArn?: string;
  Marker?: string;
  MaxRecords?: number;
  TargetArn?: string;
}
export interface DescribeInboundIntegrationsResponse {
  InboundIntegrations?: Array<InboundIntegration>;
  Marker?: string;
}
export interface DescribeIntegrationsRequest {
  IntegrationIdentifier?: string;
  Marker?: string;
  MaxRecords?: number;
  Filters?: Array<IntegrationFilter>;
}
export interface DescribeIntegrationsResponse {
  Integrations?: Array<Integration>;
  Marker?: string;
}
export type Description = string;

export type DescriptionString = string;

export type DescriptionStringRemovable = string;

export interface DevEndpoint {
  EndpointName?: string;
  RoleArn?: string;
  SecurityGroupIds?: Array<string>;
  SubnetId?: string;
  YarnEndpointAddress?: string;
  PrivateAddress?: string;
  ZeppelinRemoteSparkInterpreterPort?: number;
  PublicAddress?: string;
  Status?: string;
  WorkerType?: WorkerType;
  GlueVersion?: string;
  NumberOfWorkers?: number;
  NumberOfNodes?: number;
  AvailabilityZone?: string;
  VpcId?: string;
  ExtraPythonLibsS3Path?: string;
  ExtraJarsS3Path?: string;
  FailureReason?: string;
  LastUpdateStatus?: string;
  CreatedTimestamp?: Date | string;
  LastModifiedTimestamp?: Date | string;
  PublicKey?: string;
  PublicKeys?: Array<string>;
  SecurityConfiguration?: string;
  Arguments?: Record<string, string>;
}
export interface DevEndpointCustomLibraries {
  ExtraPythonLibsS3Path?: string;
  ExtraJarsS3Path?: string;
}
export type DevEndpointList = Array<DevEndpoint>;
export type DevEndpointNameList = Array<string>;
export type DevEndpointNames = Array<string>;
export interface DirectJDBCSource {
  Name: string;
  Database: string;
  Table: string;
  ConnectionName: string;
  ConnectionType: JDBCConnectionType;
  RedshiftTmpDir?: string;
}
export interface DirectKafkaSource {
  Name: string;
  StreamingOptions?: KafkaStreamingSourceOptions;
  WindowSize?: number;
  DetectSchema?: boolean;
  DataPreviewOptions?: StreamingDataPreviewOptions;
}
export interface DirectKinesisSource {
  Name: string;
  WindowSize?: number;
  DetectSchema?: boolean;
  StreamingOptions?: KinesisStreamingSourceOptions;
  DataPreviewOptions?: StreamingDataPreviewOptions;
}
export interface DirectSchemaChangePolicy {
  EnableUpdateCatalog?: boolean;
  UpdateBehavior?: UpdateCatalogBehavior;
  Table?: string;
  Database?: string;
}
export type DisplayName = string;

export type Double = number;

export interface DoubleColumnStatisticsData {
  MinimumValue?: number;
  MaximumValue?: number;
  NumberOfNulls: number;
  NumberOfDistinctValues: number;
}
export type DoubleValue = number;

export type dpuCounts = number;

export type dpuDurationInHour = number;

export type dpuHours = number;

export type DQAdditionalOptions = Record<AdditionalOptionKeys, string>;
export type DQCompositeRuleEvaluationMethod = "COLUMN" | "ROW";
export type DQDLAliases = Record<string, string>;
export type DQDLString = string;

export interface DQResultsPublishingOptions {
  EvaluationContext?: string;
  ResultsS3Prefix?: string;
  CloudWatchMetricsEnabled?: boolean;
  ResultsPublishingEnabled?: boolean;
}
export interface DQStopJobOnFailureOptions {
  StopJobOnFailureTiming?: DQStopJobOnFailureTiming;
}
export type DQStopJobOnFailureTiming = "Immediate" | "AfterDataLoad";
export type DQTransformOutput = "PrimaryInput" | "EvaluationResults";
export interface DropDuplicates {
  Name: string;
  Inputs: Array<string>;
  Columns?: Array<Array<string>>;
}
export interface DropFields {
  Name: string;
  Inputs: Array<string>;
  Paths: Array<Array<string>>;
}
export interface DropNullFields {
  Name: string;
  Inputs: Array<string>;
  NullCheckBoxList?: NullCheckBoxList;
  NullTextList?: Array<NullValueField>;
}
export interface DynamicTransform {
  Name: string;
  TransformName: string;
  Inputs: Array<string>;
  Parameters?: Array<TransformConfigParameter>;
  FunctionName: string;
  Path: string;
  Version?: string;
  OutputSchemas?: Array<GlueSchema>;
}
export interface DynamoDBCatalogSource {
  Name: string;
  Database: string;
  Table: string;
}
export interface DynamoDBTarget {
  Path?: string;
  scanAll?: boolean;
  scanRate?: number;
}
export type DynamoDBTargetList = Array<DynamoDBTarget>;
export interface Edge {
  SourceId?: string;
  DestinationId?: string;
}
export type EdgeList = Array<Edge>;
export type EnableAdditionalMetadata = Array<JdbcMetadataEntry>;
export type EnableHybridValues = "TRUE" | "FALSE";
export type EnclosedInStringProperties = Array<string>;
export type EnclosedInStringPropertiesMinOne = Array<string>;
export type EnclosedInStringProperty = string;

export type EnclosedInStringPropertyWithQuote = string;

export interface EncryptionAtRest {
  CatalogEncryptionMode: CatalogEncryptionMode;
  SseAwsKmsKeyId?: string;
  CatalogEncryptionServiceRole?: string;
}
export interface EncryptionConfiguration {
  S3Encryption?: Array<S3Encryption>;
  CloudWatchEncryption?: CloudWatchEncryption;
  JobBookmarksEncryption?: JobBookmarksEncryption;
  DataQualityEncryption?: DataQualityEncryption;
}
export interface Entity {
  EntityName?: string;
  Label?: string;
  IsParentEntity?: boolean;
  Description?: string;
  Category?: string;
  CustomProperties?: Record<string, string>;
}
export type EntityDescription = string;

export type EntityFieldName = string;

export type EntityLabel = string;

export type EntityList = Array<Entity>;
export type EntityName = string;

export declare class EntityNotFoundException extends EffectData.TaggedError(
  "EntityNotFoundException",
)<{
  readonly Message?: string;
  readonly FromFederationSource?: boolean;
}> {}
export type ErrorByName = Record<string, ErrorDetail>;
export type ErrorCodeString = string;

export interface ErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export interface ErrorDetails {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type ErrorMessageString = string;

export type ErrorString = string;

export interface EvaluateDataQuality {
  Name: string;
  Inputs: Array<string>;
  Ruleset: string;
  Output?: DQTransformOutput;
  PublishingOptions?: DQResultsPublishingOptions;
  StopJobOnFailureOptions?: DQStopJobOnFailureOptions;
}
export interface EvaluateDataQualityMultiFrame {
  Name: string;
  Inputs: Array<string>;
  AdditionalDataSources?: Record<string, string>;
  Ruleset: string;
  PublishingOptions?: DQResultsPublishingOptions;
  AdditionalOptions?: Record<AdditionalOptionKeys, string>;
  StopJobOnFailureOptions?: DQStopJobOnFailureOptions;
}
export type EvaluatedMetricsMap = Record<string, number>;
export interface EvaluationMetrics {
  TransformType: TransformType;
  FindMatchesMetrics?: FindMatchesMetrics;
}
export interface EventBatchingCondition {
  BatchSize: number;
  BatchWindow?: number;
}
export type EventQueueArn = string;

export interface ExecutionAttempt {
  Status?: ExecutionStatus;
  ColumnStatisticsTaskRunId?: string;
  ExecutionTimestamp?: Date | string;
  ErrorMessage?: string;
}
export type ExecutionClass = "FLEX" | "STANDARD";
export interface ExecutionProperty {
  MaxConcurrentRuns?: number;
}
export type ExecutionStatus = "FAILED" | "STARTED";
export type ExecutionTime = number;

export type ExistCondition = "MUST_EXIST" | "NOT_EXIST" | "NONE";
export interface ExportLabelsTaskRunProperties {
  OutputS3Path?: string;
}
export type ExtendedString = string;

export interface FederatedCatalog {
  Identifier?: string;
  ConnectionName?: string;
  ConnectionType?: string;
}
export interface FederatedDatabase {
  Identifier?: string;
  ConnectionName?: string;
  ConnectionType?: string;
}
export declare class FederatedResourceAlreadyExistsException extends EffectData.TaggedError(
  "FederatedResourceAlreadyExistsException",
)<{
  readonly Message?: string;
  readonly AssociatedGlueResource?: string;
}> {}
export interface FederatedTable {
  Identifier?: string;
  DatabaseIdentifier?: string;
  ConnectionName?: string;
  ConnectionType?: string;
}
export type FederationIdentifier = string;

export type FederationSourceErrorCode =
  | "AccessDeniedException"
  | "EntityNotFoundException"
  | "InvalidCredentialsException"
  | "InvalidInputException"
  | "InvalidResponseException"
  | "OperationTimeoutException"
  | "OperationNotSupportedException"
  | "InternalServiceException"
  | "PartialFailureException"
  | "ThrottlingException";
export declare class FederationSourceException extends EffectData.TaggedError(
  "FederationSourceException",
)<{
  readonly FederationSourceErrorCode?: FederationSourceErrorCode;
  readonly Message?: string;
}> {}
export declare class FederationSourceRetryableException extends EffectData.TaggedError(
  "FederationSourceRetryableException",
)<{
  readonly Message?: string;
}> {}
export interface Field {
  FieldName?: string;
  Label?: string;
  Description?: string;
  FieldType?: FieldDataType;
  IsPrimaryKey?: boolean;
  IsNullable?: boolean;
  IsRetrievable?: boolean;
  IsFilterable?: boolean;
  IsPartitionable?: boolean;
  IsCreateable?: boolean;
  IsUpdateable?: boolean;
  IsUpsertable?: boolean;
  IsDefaultOnCreate?: boolean;
  SupportedValues?: Array<string>;
  SupportedFilterOperators?: Array<FieldFilterOperator>;
  ParentField?: string;
  NativeDataType?: string;
  CustomProperties?: Record<string, string>;
}
export type FieldDataType =
  | "INT"
  | "SMALLINT"
  | "BIGINT"
  | "FLOAT"
  | "LONG"
  | "DATE"
  | "BOOLEAN"
  | "MAP"
  | "ARRAY"
  | "STRING"
  | "TIMESTAMP"
  | "DECIMAL"
  | "BYTE"
  | "SHORT"
  | "DOUBLE"
  | "STRUCT";
export type FieldDescription = string;

export type FieldFilterOperator =
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "LESS_THAN_OR_EQUAL_TO"
  | "CONTAINS"
  | "ORDER_BY";
export type FieldFilterOperatorsList = Array<FieldFilterOperator>;
export type FieldLabel = string;

export type FieldName =
  | "CRAWL_ID"
  | "STATE"
  | "START_TIME"
  | "END_TIME"
  | "DPU_HOUR";
export type FieldsList = Array<Field>;
export type FieldType = string;

export interface FillMissingValues {
  Name: string;
  Inputs: Array<string>;
  ImputedPath: string;
  FilledPath?: string;
}
export interface Filter {
  Name: string;
  Inputs: Array<string>;
  LogicalOperator: FilterLogicalOperator;
  Filters: Array<FilterExpression>;
}
export interface FilterExpression {
  Operation: FilterOperation;
  Negated?: boolean;
  Values: Array<FilterValue>;
}
export type FilterExpressions = Array<FilterExpression>;
export type FilterLogicalOperator = "AND" | "OR";
export type FilterOperation =
  | "EQ"
  | "LT"
  | "GT"
  | "LTE"
  | "GTE"
  | "REGEX"
  | "ISNULL";
export type FilterOperator = "GT" | "GE" | "LT" | "LE" | "EQ" | "NE";
export type FilterPredicate = string;

export type FilterString = string;

export interface FilterValue {
  Type: FilterValueType;
  Value: Array<string>;
}
export type FilterValues = Array<FilterValue>;
export type FilterValueType = "COLUMNEXTRACTED" | "CONSTANT";
export interface FindMatchesMetrics {
  AreaUnderPRCurve?: number;
  Precision?: number;
  Recall?: number;
  F1?: number;
  ConfusionMatrix?: ConfusionMatrix;
  ColumnImportances?: Array<ColumnImportance>;
}
export interface FindMatchesParameters {
  PrimaryKeyColumnName?: string;
  PrecisionRecallTradeoff?: number;
  AccuracyCostTradeoff?: number;
  EnforceProvidedLabels?: boolean;
}
export interface FindMatchesTaskRunProperties {
  JobId?: string;
  JobName?: string;
  JobRunId?: string;
}
export type FormatString = string;

export type Generic512CharString = string;

export type GenericBoundedDouble = number;

export type GenericLimitedString = string;

export type GenericMap = Record<string, string>;
export type GenericString = string;

export interface GetBlueprintRequest {
  Name: string;
  IncludeBlueprint?: boolean;
  IncludeParameterSpec?: boolean;
}
export interface GetBlueprintResponse {
  Blueprint?: Blueprint;
}
export interface GetBlueprintRunRequest {
  BlueprintName: string;
  RunId: string;
}
export interface GetBlueprintRunResponse {
  BlueprintRun?: BlueprintRun;
}
export interface GetBlueprintRunsRequest {
  BlueprintName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetBlueprintRunsResponse {
  BlueprintRuns?: Array<BlueprintRun>;
  NextToken?: string;
}
export interface GetCatalogImportStatusRequest {
  CatalogId?: string;
}
export interface GetCatalogImportStatusResponse {
  ImportStatus?: CatalogImportStatus;
}
export interface GetCatalogRequest {
  CatalogId: string;
}
export interface GetCatalogResponse {
  Catalog?: Catalog;
}
export interface GetCatalogsRequest {
  ParentCatalogId?: string;
  NextToken?: string;
  MaxResults?: number;
  Recursive?: boolean;
  IncludeRoot?: boolean;
}
export interface GetCatalogsResponse {
  CatalogList: Array<Catalog>;
  NextToken?: string;
}
export interface GetClassifierRequest {
  Name: string;
}
export interface GetClassifierResponse {
  Classifier?: Classifier;
}
export interface GetClassifiersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface GetClassifiersResponse {
  Classifiers?: Array<Classifier>;
  NextToken?: string;
}
export type GetColumnNamesList = Array<string>;
export interface GetColumnStatisticsForPartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionValues: Array<string>;
  ColumnNames: Array<string>;
}
export interface GetColumnStatisticsForPartitionResponse {
  ColumnStatisticsList?: Array<ColumnStatistics>;
  Errors?: Array<ColumnError>;
}
export interface GetColumnStatisticsForTableRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  ColumnNames: Array<string>;
}
export interface GetColumnStatisticsForTableResponse {
  ColumnStatisticsList?: Array<ColumnStatistics>;
  Errors?: Array<ColumnError>;
}
export interface GetColumnStatisticsTaskRunRequest {
  ColumnStatisticsTaskRunId: string;
}
export interface GetColumnStatisticsTaskRunResponse {
  ColumnStatisticsTaskRun?: ColumnStatisticsTaskRun;
}
export interface GetColumnStatisticsTaskRunsRequest {
  DatabaseName: string;
  TableName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetColumnStatisticsTaskRunsResponse {
  ColumnStatisticsTaskRuns?: Array<ColumnStatisticsTaskRun>;
  NextToken?: string;
}
export interface GetColumnStatisticsTaskSettingsRequest {
  DatabaseName: string;
  TableName: string;
}
export interface GetColumnStatisticsTaskSettingsResponse {
  ColumnStatisticsTaskSettings?: ColumnStatisticsTaskSettings;
}
export interface GetConnectionRequest {
  CatalogId?: string;
  Name: string;
  HidePassword?: boolean;
  ApplyOverrideForComputeEnvironment?: ComputeEnvironment;
}
export interface GetConnectionResponse {
  Connection?: Connection;
}
export interface GetConnectionsFilter {
  MatchCriteria?: Array<string>;
  ConnectionType?: ConnectionType;
  ConnectionSchemaVersion?: number;
}
export interface GetConnectionsRequest {
  CatalogId?: string;
  Filter?: GetConnectionsFilter;
  HidePassword?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetConnectionsResponse {
  ConnectionList?: Array<Connection>;
  NextToken?: string;
}
export interface GetCrawlerMetricsRequest {
  CrawlerNameList?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetCrawlerMetricsResponse {
  CrawlerMetricsList?: Array<CrawlerMetrics>;
  NextToken?: string;
}
export interface GetCrawlerRequest {
  Name: string;
}
export interface GetCrawlerResponse {
  Crawler?: Crawler;
}
export interface GetCrawlersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface GetCrawlersResponse {
  Crawlers?: Array<Crawler>;
  NextToken?: string;
}
export interface GetCustomEntityTypeRequest {
  Name: string;
}
export interface GetCustomEntityTypeResponse {
  Name?: string;
  RegexString?: string;
  ContextWords?: Array<string>;
}
export interface GetDatabaseRequest {
  CatalogId?: string;
  Name: string;
}
export interface GetDatabaseResponse {
  Database?: Database;
}
export interface GetDatabasesRequest {
  CatalogId?: string;
  NextToken?: string;
  MaxResults?: number;
  ResourceShareType?: ResourceShareType;
  AttributesToGet?: Array<DatabaseAttributes>;
}
export interface GetDatabasesResponse {
  DatabaseList: Array<Database>;
  NextToken?: string;
}
export interface GetDataCatalogEncryptionSettingsRequest {
  CatalogId?: string;
}
export interface GetDataCatalogEncryptionSettingsResponse {
  DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}
export interface GetDataflowGraphRequest {
  PythonScript?: string;
}
export interface GetDataflowGraphResponse {
  DagNodes?: Array<CodeGenNode>;
  DagEdges?: Array<CodeGenEdge>;
}
export interface GetDataQualityModelRequest {
  StatisticId?: string;
  ProfileId: string;
}
export interface GetDataQualityModelResponse {
  Status?: DataQualityModelStatus;
  StartedOn?: Date | string;
  CompletedOn?: Date | string;
  FailureReason?: string;
}
export interface GetDataQualityModelResultRequest {
  StatisticId: string;
  ProfileId: string;
}
export interface GetDataQualityModelResultResponse {
  CompletedOn?: Date | string;
  Model?: Array<StatisticModelResult>;
}
export interface GetDataQualityResultRequest {
  ResultId: string;
}
export interface GetDataQualityResultResponse {
  ResultId?: string;
  ProfileId?: string;
  Score?: number;
  DataSource?: DataSource;
  RulesetName?: string;
  EvaluationContext?: string;
  StartedOn?: Date | string;
  CompletedOn?: Date | string;
  JobName?: string;
  JobRunId?: string;
  RulesetEvaluationRunId?: string;
  RuleResults?: Array<DataQualityRuleResult>;
  AnalyzerResults?: Array<DataQualityAnalyzerResult>;
  Observations?: Array<DataQualityObservation>;
  AggregatedMetrics?: DataQualityAggregatedMetrics;
}
export interface GetDataQualityRuleRecommendationRunRequest {
  RunId: string;
}
export interface GetDataQualityRuleRecommendationRunResponse {
  RunId?: string;
  DataSource?: DataSource;
  Role?: string;
  NumberOfWorkers?: number;
  Timeout?: number;
  Status?: TaskStatusType;
  ErrorString?: string;
  StartedOn?: Date | string;
  LastModifiedOn?: Date | string;
  CompletedOn?: Date | string;
  ExecutionTime?: number;
  RecommendedRuleset?: string;
  CreatedRulesetName?: string;
  DataQualitySecurityConfiguration?: string;
}
export interface GetDataQualityRulesetEvaluationRunRequest {
  RunId: string;
}
export interface GetDataQualityRulesetEvaluationRunResponse {
  RunId?: string;
  DataSource?: DataSource;
  Role?: string;
  NumberOfWorkers?: number;
  Timeout?: number;
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;
  Status?: TaskStatusType;
  ErrorString?: string;
  StartedOn?: Date | string;
  LastModifiedOn?: Date | string;
  CompletedOn?: Date | string;
  ExecutionTime?: number;
  RulesetNames?: Array<string>;
  ResultIds?: Array<string>;
  AdditionalDataSources?: Record<string, DataSource>;
}
export interface GetDataQualityRulesetRequest {
  Name: string;
}
export interface GetDataQualityRulesetResponse {
  Name?: string;
  Description?: string;
  Ruleset?: string;
  TargetTable?: DataQualityTargetTable;
  CreatedOn?: Date | string;
  LastModifiedOn?: Date | string;
  RecommendationRunId?: string;
  DataQualitySecurityConfiguration?: string;
}
export interface GetDevEndpointRequest {
  EndpointName: string;
}
export interface GetDevEndpointResponse {
  DevEndpoint?: DevEndpoint;
}
export interface GetDevEndpointsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface GetDevEndpointsResponse {
  DevEndpoints?: Array<DevEndpoint>;
  NextToken?: string;
}
export interface GetEntityRecordsRequest {
  ConnectionName?: string;
  CatalogId?: string;
  EntityName: string;
  NextToken?: string;
  DataStoreApiVersion?: string;
  ConnectionOptions?: Record<string, string>;
  FilterPredicate?: string;
  Limit: number;
  OrderBy?: string;
  SelectedFields?: Array<string>;
}
export interface GetEntityRecordsResponse {
  Records?: Array<unknown>;
  NextToken?: string;
}
export interface GetIntegrationResourcePropertyRequest {
  ResourceArn: string;
}
export interface GetIntegrationResourcePropertyResponse {
  ResourceArn?: string;
  SourceProcessingProperties?: SourceProcessingProperties;
  TargetProcessingProperties?: TargetProcessingProperties;
}
export interface GetIntegrationTablePropertiesRequest {
  ResourceArn: string;
  TableName: string;
}
export interface GetIntegrationTablePropertiesResponse {
  ResourceArn?: string;
  TableName?: string;
  SourceTableConfig?: SourceTableConfig;
  TargetTableConfig?: TargetTableConfig;
}
export interface GetJobBookmarkRequest {
  JobName: string;
  RunId?: string;
}
export interface GetJobBookmarkResponse {
  JobBookmarkEntry?: JobBookmarkEntry;
}
export interface GetJobRequest {
  JobName: string;
}
export interface GetJobResponse {
  Job?: Job;
}
export interface GetJobRunRequest {
  JobName: string;
  RunId: string;
  PredecessorsIncluded?: boolean;
}
export interface GetJobRunResponse {
  JobRun?: JobRun;
}
export interface GetJobRunsRequest {
  JobName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetJobRunsResponse {
  JobRuns?: Array<JobRun>;
  NextToken?: string;
}
export interface GetJobsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface GetJobsResponse {
  Jobs?: Array<Job>;
  NextToken?: string;
}
export interface GetMappingRequest {
  Source: CatalogEntry;
  Sinks?: Array<CatalogEntry>;
  Location?: Location;
}
export interface GetMappingResponse {
  Mapping: Array<MappingEntry>;
}
export interface GetMLTaskRunRequest {
  TransformId: string;
  TaskRunId: string;
}
export interface GetMLTaskRunResponse {
  TransformId?: string;
  TaskRunId?: string;
  Status?: TaskStatusType;
  LogGroupName?: string;
  Properties?: TaskRunProperties;
  ErrorString?: string;
  StartedOn?: Date | string;
  LastModifiedOn?: Date | string;
  CompletedOn?: Date | string;
  ExecutionTime?: number;
}
export interface GetMLTaskRunsRequest {
  TransformId: string;
  NextToken?: string;
  MaxResults?: number;
  Filter?: TaskRunFilterCriteria;
  Sort?: TaskRunSortCriteria;
}
export interface GetMLTaskRunsResponse {
  TaskRuns?: Array<TaskRun>;
  NextToken?: string;
}
export interface GetMLTransformRequest {
  TransformId: string;
}
export interface GetMLTransformResponse {
  TransformId?: string;
  Name?: string;
  Description?: string;
  Status?: TransformStatusType;
  CreatedOn?: Date | string;
  LastModifiedOn?: Date | string;
  InputRecordTables?: Array<GlueTable>;
  Parameters?: TransformParameters;
  EvaluationMetrics?: EvaluationMetrics;
  LabelCount?: number;
  Schema?: Array<SchemaColumn>;
  Role?: string;
  GlueVersion?: string;
  MaxCapacity?: number;
  WorkerType?: WorkerType;
  NumberOfWorkers?: number;
  Timeout?: number;
  MaxRetries?: number;
  TransformEncryption?: TransformEncryption;
}
export interface GetMLTransformsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filter?: TransformFilterCriteria;
  Sort?: TransformSortCriteria;
}
export interface GetMLTransformsResponse {
  Transforms: Array<MLTransform>;
  NextToken?: string;
}
export interface GetPartitionIndexesRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  NextToken?: string;
}
export interface GetPartitionIndexesResponse {
  PartitionIndexDescriptorList?: Array<PartitionIndexDescriptor>;
  NextToken?: string;
}
export interface GetPartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionValues: Array<string>;
}
export interface GetPartitionResponse {
  Partition?: Partition;
}
export interface GetPartitionsRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  Expression?: string;
  NextToken?: string;
  Segment?: Segment;
  MaxResults?: number;
  ExcludeColumnSchema?: boolean;
  TransactionId?: string;
  QueryAsOfTime?: Date | string;
}
export interface GetPartitionsResponse {
  Partitions?: Array<Partition>;
  NextToken?: string;
}
export interface GetPlanRequest {
  Mapping: Array<MappingEntry>;
  Source: CatalogEntry;
  Sinks?: Array<CatalogEntry>;
  Location?: Location;
  Language?: Language;
  AdditionalPlanOptionsMap?: Record<string, string>;
}
export interface GetPlanResponse {
  PythonScript?: string;
  ScalaCode?: string;
}
export interface GetRegistryInput {
  RegistryId: RegistryId;
}
export interface GetRegistryResponse {
  RegistryName?: string;
  RegistryArn?: string;
  Description?: string;
  Status?: RegistryStatus;
  CreatedTime?: string;
  UpdatedTime?: string;
}
export interface GetResourcePoliciesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface GetResourcePoliciesResponse {
  GetResourcePoliciesResponseList?: Array<GluePolicy>;
  NextToken?: string;
}
export type GetResourcePoliciesResponseList = Array<GluePolicy>;
export interface GetResourcePolicyRequest {
  ResourceArn?: string;
}
export interface GetResourcePolicyResponse {
  PolicyInJson?: string;
  PolicyHash?: string;
  CreateTime?: Date | string;
  UpdateTime?: Date | string;
}
export interface GetSchemaByDefinitionInput {
  SchemaId: SchemaId;
  SchemaDefinition: string;
}
export interface GetSchemaByDefinitionResponse {
  SchemaVersionId?: string;
  SchemaArn?: string;
  DataFormat?: DataFormat;
  Status?: SchemaVersionStatus;
  CreatedTime?: string;
}
export interface GetSchemaInput {
  SchemaId: SchemaId;
}
export interface GetSchemaResponse {
  RegistryName?: string;
  RegistryArn?: string;
  SchemaName?: string;
  SchemaArn?: string;
  Description?: string;
  DataFormat?: DataFormat;
  Compatibility?: Compatibility;
  SchemaCheckpoint?: number;
  LatestSchemaVersion?: number;
  NextSchemaVersion?: number;
  SchemaStatus?: SchemaStatus;
  CreatedTime?: string;
  UpdatedTime?: string;
}
export interface GetSchemaVersionInput {
  SchemaId?: SchemaId;
  SchemaVersionId?: string;
  SchemaVersionNumber?: SchemaVersionNumber;
}
export interface GetSchemaVersionResponse {
  SchemaVersionId?: string;
  SchemaDefinition?: string;
  DataFormat?: DataFormat;
  SchemaArn?: string;
  VersionNumber?: number;
  Status?: SchemaVersionStatus;
  CreatedTime?: string;
}
export interface GetSchemaVersionsDiffInput {
  SchemaId: SchemaId;
  FirstSchemaVersionNumber: SchemaVersionNumber;
  SecondSchemaVersionNumber: SchemaVersionNumber;
  SchemaDiffType: SchemaDiffType;
}
export interface GetSchemaVersionsDiffResponse {
  Diff?: string;
}
export interface GetSecurityConfigurationRequest {
  Name: string;
}
export interface GetSecurityConfigurationResponse {
  SecurityConfiguration?: SecurityConfiguration;
}
export interface GetSecurityConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface GetSecurityConfigurationsResponse {
  SecurityConfigurations?: Array<SecurityConfiguration>;
  NextToken?: string;
}
export interface GetSessionRequest {
  Id: string;
  RequestOrigin?: string;
}
export interface GetSessionResponse {
  Session?: Session;
}
export interface GetStatementRequest {
  SessionId: string;
  Id: number;
  RequestOrigin?: string;
}
export interface GetStatementResponse {
  Statement?: Statement;
}
export interface GetTableOptimizerRequest {
  CatalogId: string;
  DatabaseName: string;
  TableName: string;
  Type: TableOptimizerType;
}
export interface GetTableOptimizerResponse {
  CatalogId?: string;
  DatabaseName?: string;
  TableName?: string;
  TableOptimizer?: TableOptimizer;
}
export interface GetTableRequest {
  CatalogId?: string;
  DatabaseName: string;
  Name: string;
  TransactionId?: string;
  QueryAsOfTime?: Date | string;
  IncludeStatusDetails?: boolean;
}
export interface GetTableResponse {
  Table?: Table;
}
export interface GetTablesRequest {
  CatalogId?: string;
  DatabaseName: string;
  Expression?: string;
  NextToken?: string;
  MaxResults?: number;
  TransactionId?: string;
  QueryAsOfTime?: Date | string;
  IncludeStatusDetails?: boolean;
  AttributesToGet?: Array<TableAttributes>;
}
export interface GetTablesResponse {
  TableList?: Array<Table>;
  NextToken?: string;
}
export interface GetTableVersionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  VersionId?: string;
}
export interface GetTableVersionResponse {
  TableVersion?: TableVersion;
}
export type GetTableVersionsList = Array<TableVersion>;
export interface GetTableVersionsRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetTableVersionsResponse {
  TableVersions?: Array<TableVersion>;
  NextToken?: string;
}
export interface GetTagsRequest {
  ResourceArn: string;
}
export interface GetTagsResponse {
  Tags?: Record<string, string>;
}
export interface GetTriggerRequest {
  Name: string;
}
export interface GetTriggerResponse {
  Trigger?: Trigger;
}
export interface GetTriggersRequest {
  NextToken?: string;
  DependentJobName?: string;
  MaxResults?: number;
}
export interface GetTriggersResponse {
  Triggers?: Array<Trigger>;
  NextToken?: string;
}
export interface GetUnfilteredPartitionMetadataRequest {
  Region?: string;
  CatalogId: string;
  DatabaseName: string;
  TableName: string;
  PartitionValues: Array<string>;
  AuditContext?: AuditContext;
  SupportedPermissionTypes: Array<PermissionType>;
  QuerySessionContext?: QuerySessionContext;
}
export interface GetUnfilteredPartitionMetadataResponse {
  Partition?: Partition;
  AuthorizedColumns?: Array<string>;
  IsRegisteredWithLakeFormation?: boolean;
}
export interface GetUnfilteredPartitionsMetadataRequest {
  Region?: string;
  CatalogId: string;
  DatabaseName: string;
  TableName: string;
  Expression?: string;
  AuditContext?: AuditContext;
  SupportedPermissionTypes: Array<PermissionType>;
  NextToken?: string;
  Segment?: Segment;
  MaxResults?: number;
  QuerySessionContext?: QuerySessionContext;
}
export interface GetUnfilteredPartitionsMetadataResponse {
  UnfilteredPartitions?: Array<UnfilteredPartition>;
  NextToken?: string;
}
export interface GetUnfilteredTableMetadataRequest {
  Region?: string;
  CatalogId: string;
  DatabaseName: string;
  Name: string;
  AuditContext?: AuditContext;
  SupportedPermissionTypes: Array<PermissionType>;
  ParentResourceArn?: string;
  RootResourceArn?: string;
  SupportedDialect?: SupportedDialect;
  Permissions?: Array<Permission>;
  QuerySessionContext?: QuerySessionContext;
}
export interface GetUnfilteredTableMetadataResponse {
  Table?: Table;
  AuthorizedColumns?: Array<string>;
  IsRegisteredWithLakeFormation?: boolean;
  CellFilters?: Array<ColumnRowFilter>;
  QueryAuthorizationId?: string;
  IsMultiDialectView?: boolean;
  ResourceArn?: string;
  IsProtected?: boolean;
  Permissions?: Array<Permission>;
  RowFilter?: string;
}
export interface GetUsageProfileRequest {
  Name: string;
}
export interface GetUsageProfileResponse {
  Name?: string;
  Description?: string;
  Configuration?: ProfileConfiguration;
  CreatedOn?: Date | string;
  LastModifiedOn?: Date | string;
}
export interface GetUserDefinedFunctionRequest {
  CatalogId?: string;
  DatabaseName: string;
  FunctionName: string;
}
export interface GetUserDefinedFunctionResponse {
  UserDefinedFunction?: UserDefinedFunction;
}
export interface GetUserDefinedFunctionsRequest {
  CatalogId?: string;
  DatabaseName?: string;
  Pattern: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetUserDefinedFunctionsResponse {
  UserDefinedFunctions?: Array<UserDefinedFunction>;
  NextToken?: string;
}
export interface GetWorkflowRequest {
  Name: string;
  IncludeGraph?: boolean;
}
export interface GetWorkflowResponse {
  Workflow?: Workflow;
}
export interface GetWorkflowRunPropertiesRequest {
  Name: string;
  RunId: string;
}
export interface GetWorkflowRunPropertiesResponse {
  RunProperties?: Record<string, string>;
}
export interface GetWorkflowRunRequest {
  Name: string;
  RunId: string;
  IncludeGraph?: boolean;
}
export interface GetWorkflowRunResponse {
  Run?: WorkflowRun;
}
export interface GetWorkflowRunsRequest {
  Name: string;
  IncludeGraph?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetWorkflowRunsResponse {
  Runs?: Array<WorkflowRun>;
  NextToken?: string;
}
export type glueConnectionNameString = string;

export declare class GlueEncryptionException extends EffectData.TaggedError(
  "GlueEncryptionException",
)<{
  readonly Message?: string;
}> {}
export interface GluePolicy {
  PolicyInJson?: string;
  PolicyHash?: string;
  CreateTime?: Date | string;
  UpdateTime?: Date | string;
}
export type GlueRecordType =
  | "DATE"
  | "STRING"
  | "TIMESTAMP"
  | "INT"
  | "FLOAT"
  | "LONG"
  | "BIGDECIMAL"
  | "BYTE"
  | "SHORT"
  | "DOUBLE";
export type GlueResourceArn = string;

export interface GlueSchema {
  Columns?: Array<GlueStudioSchemaColumn>;
}
export type GlueSchemas = Array<GlueSchema>;
export type GlueStudioColumnNameString = string;

export type GlueStudioPathList = Array<Array<string>>;
export interface GlueStudioSchemaColumn {
  Name: string;
  Type?: string;
}
export type GlueStudioSchemaColumnList = Array<GlueStudioSchemaColumn>;
export interface GlueTable {
  DatabaseName: string;
  TableName: string;
  CatalogId?: string;
  ConnectionName?: string;
  AdditionalOptions?: Record<string, string>;
}
export type GlueTableAdditionalOptions = Record<string, string>;
export type GlueTables = Array<GlueTable>;
export type GlueVersionString = string;

export interface GovernedCatalogSource {
  Name: string;
  Database: string;
  Table: string;
  PartitionPredicate?: string;
  AdditionalOptions?: S3SourceAdditionalOptions;
}
export interface GovernedCatalogTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Table: string;
  Database: string;
  SchemaChangePolicy?: CatalogSchemaChangePolicy;
}
export interface GrokClassifier {
  Name: string;
  Classification: string;
  CreationTime?: Date | string;
  LastUpdated?: Date | string;
  Version?: number;
  GrokPattern: string;
  CustomPatterns?: string;
}
export type GrokPattern = string;

export type HashString = string;

export interface HudiTarget {
  Paths?: Array<string>;
  ConnectionName?: string;
  Exclusions?: Array<string>;
  MaximumTraversalDepth?: number;
}
export type HudiTargetCompressionType =
  | "GZIP"
  | "LZO"
  | "UNCOMPRESSED"
  | "SNAPPY";
export type HudiTargetList = Array<HudiTarget>;
export type HyperTargetCompressionType = "UNCOMPRESSED";
export type IAMRoleArn = string;

export interface IcebergCompactionConfiguration {
  strategy?: CompactionStrategy;
}
export interface IcebergCompactionMetrics {
  NumberOfBytesCompacted?: number;
  NumberOfFilesCompacted?: number;
  DpuHours?: number;
  NumberOfDpus?: number;
  JobDurationInHour?: number;
}
export type IcebergDocument = unknown;

export interface IcebergInput {
  MetadataOperation: MetadataOperation;
  Version?: string;
  CreateIcebergTableInput?: CreateIcebergTableInput;
}
export type IcebergNullOrder = "NULLS_FIRST" | "NULLS_LAST";
export interface IcebergOrphanFileDeletionConfiguration {
  orphanFileRetentionPeriodInDays?: number;
  location?: string;
}
export interface IcebergOrphanFileDeletionMetrics {
  NumberOfOrphanFilesDeleted?: number;
  DpuHours?: number;
  NumberOfDpus?: number;
  JobDurationInHour?: number;
}
export interface IcebergPartitionField {
  SourceId: number;
  Transform: string;
  Name: string;
  FieldId?: number;
}
export interface IcebergPartitionSpec {
  Fields: Array<IcebergPartitionField>;
  SpecId?: number;
}
export type IcebergPartitionSpecFieldList = Array<IcebergPartitionField>;
export interface IcebergRetentionConfiguration {
  snapshotRetentionPeriodInDays?: number;
  numberOfSnapshotsToRetain?: number;
  cleanExpiredFiles?: boolean;
}
export interface IcebergRetentionMetrics {
  NumberOfDataFilesDeleted?: number;
  NumberOfManifestFilesDeleted?: number;
  NumberOfManifestListsDeleted?: number;
  DpuHours?: number;
  NumberOfDpus?: number;
  JobDurationInHour?: number;
}
export interface IcebergSchema {
  SchemaId?: number;
  IdentifierFieldIds?: Array<number>;
  Type?: IcebergStructTypeEnum;
  Fields: Array<IcebergStructField>;
}
export type IcebergSortDirection = "ASC" | "DESC";
export interface IcebergSortField {
  SourceId: number;
  Transform: string;
  Direction: IcebergSortDirection;
  NullOrder: IcebergNullOrder;
}
export interface IcebergSortOrder {
  OrderId: number;
  Fields: Array<IcebergSortField>;
}
export type IcebergSortOrderFieldList = Array<IcebergSortField>;
export interface IcebergStructField {
  Id: number;
  Name: string;
  Type: unknown;
  Required: boolean;
  Doc?: string;
}
export type IcebergStructFieldList = Array<IcebergStructField>;
export type IcebergStructTypeEnum = "STRUCT";
export interface IcebergTableUpdate {
  Schema: IcebergSchema;
  PartitionSpec?: IcebergPartitionSpec;
  SortOrder?: IcebergSortOrder;
  Location: string;
  Properties?: Record<string, string>;
}
export type IcebergTableUpdateList = Array<IcebergTableUpdate>;
export interface IcebergTarget {
  Paths?: Array<string>;
  ConnectionName?: string;
  Exclusions?: Array<string>;
  MaximumTraversalDepth?: number;
}
export type IcebergTargetCompressionType =
  | "GZIP"
  | "LZO"
  | "UNCOMPRESSED"
  | "SNAPPY";
export type IcebergTargetList = Array<IcebergTarget>;
export type IcebergTransformString = string;

export declare class IdempotentParameterMismatchException extends EffectData.TaggedError(
  "IdempotentParameterMismatchException",
)<{
  readonly Message?: string;
}> {}
export type IdleTimeout = number;

export type IdString = string;

export declare class IllegalBlueprintStateException extends EffectData.TaggedError(
  "IllegalBlueprintStateException",
)<{
  readonly Message?: string;
}> {}
export declare class IllegalSessionStateException extends EffectData.TaggedError(
  "IllegalSessionStateException",
)<{
  readonly Message?: string;
}> {}
export declare class IllegalWorkflowStateException extends EffectData.TaggedError(
  "IllegalWorkflowStateException",
)<{
  readonly Message?: string;
}> {}
export interface ImportCatalogToGlueRequest {
  CatalogId?: string;
}
export interface ImportCatalogToGlueResponse {}
export interface ImportLabelsTaskRunProperties {
  InputS3Path?: string;
  Replace?: boolean;
}
export interface InboundIntegration {
  SourceArn: string;
  TargetArn: string;
  IntegrationArn: string;
  Status: IntegrationStatus;
  CreateTime: Date | string;
  IntegrationConfig?: IntegrationConfig;
  Errors?: Array<IntegrationError>;
}
export type InboundIntegrationsList = Array<InboundIntegration>;
export type InclusionAnnotationList = Array<DatapointInclusionAnnotation>;
export type InclusionAnnotationValue = "INCLUDE" | "EXCLUDE";
export type Integer = number;

export type IntegerFlag = number;

export type IntegerList = Array<number>;
export type IntegerValue = number;

export interface Integration {
  SourceArn: string;
  TargetArn: string;
  Description?: string;
  IntegrationName: string;
  IntegrationArn: string;
  KmsKeyId?: string;
  AdditionalEncryptionContext?: Record<string, string>;
  Tags?: Array<Tag>;
  Status: IntegrationStatus;
  CreateTime: Date | string;
  IntegrationConfig?: IntegrationConfig;
  Errors?: Array<IntegrationError>;
  DataFilter?: string;
}
export type IntegrationAdditionalEncryptionContextMap = Record<string, string>;
export interface IntegrationConfig {
  RefreshInterval?: string;
  SourceProperties?: Record<string, string>;
}
export declare class IntegrationConflictOperationFault extends EffectData.TaggedError(
  "IntegrationConflictOperationFault",
)<{
  readonly Message?: string;
}> {}
export type IntegrationDescription = string;

export interface IntegrationError {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type IntegrationErrorList = Array<IntegrationError>;
export type IntegrationErrorMessage = string;

export interface IntegrationFilter {
  Name?: string;
  Values?: Array<string>;
}
export type IntegrationFilterList = Array<IntegrationFilter>;
export type IntegrationFilterValues = Array<string>;
export type IntegrationInteger = number;

export declare class IntegrationNotFoundFault extends EffectData.TaggedError(
  "IntegrationNotFoundFault",
)<{
  readonly Message?: string;
}> {}
export interface IntegrationPartition {
  FieldName?: string;
  FunctionSpec?: string;
  ConversionSpec?: string;
}
export type IntegrationPartitionSpecList = Array<IntegrationPartition>;
export declare class IntegrationQuotaExceededFault extends EffectData.TaggedError(
  "IntegrationQuotaExceededFault",
)<{
  readonly Message?: string;
}> {}
export type IntegrationsList = Array<Integration>;
export type IntegrationSourcePropertiesMap = Record<string, string>;
export type IntegrationStatus =
  | "CREATING"
  | "ACTIVE"
  | "MODIFYING"
  | "FAILED"
  | "DELETING"
  | "SYNCING"
  | "NEEDS_ATTENTION";
export type IntegrationString = string;

export type IntegrationTagsList = Array<Tag>;
export type IntegrationTimestamp = Date | string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
  readonly FromFederationSource?: boolean;
}> {}
export declare class InvalidIntegrationStateFault extends EffectData.TaggedError(
  "InvalidIntegrationStateFault",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidStateException extends EffectData.TaggedError(
  "InvalidStateException",
)<{
  readonly Message?: string;
}> {}
export type Iso8601DateTime = Date | string;

export type IsParentEntity = boolean;

export type IsVersionValid = boolean;

export type JDBCConnectionType =
  | "sqlserver"
  | "mysql"
  | "oracle"
  | "postgresql"
  | "redshift";
export interface JDBCConnectorOptions {
  FilterPredicate?: string;
  PartitionColumn?: string;
  LowerBound?: number;
  UpperBound?: number;
  NumPartitions?: number;
  JobBookmarkKeys?: Array<string>;
  JobBookmarkKeysSortOrder?: string;
  DataTypeMapping?: Record<JDBCDataType, GlueRecordType>;
}
export interface JDBCConnectorSource {
  Name: string;
  ConnectionName: string;
  ConnectorName: string;
  ConnectionType: string;
  AdditionalOptions?: JDBCConnectorOptions;
  ConnectionTable?: string;
  Query?: string;
  OutputSchemas?: Array<GlueSchema>;
}
export interface JDBCConnectorTarget {
  Name: string;
  Inputs: Array<string>;
  ConnectionName: string;
  ConnectionTable: string;
  ConnectorName: string;
  ConnectionType: string;
  AdditionalOptions?: Record<string, string>;
  OutputSchemas?: Array<GlueSchema>;
}
export type JDBCDataType =
  | "ARRAY"
  | "BIGINT"
  | "BINARY"
  | "BIT"
  | "BLOB"
  | "BOOLEAN"
  | "CHAR"
  | "CLOB"
  | "DATALINK"
  | "DATE"
  | "DECIMAL"
  | "DISTINCT"
  | "DOUBLE"
  | "FLOAT"
  | "INTEGER"
  | "JAVA_OBJECT"
  | "LONGNVARCHAR"
  | "LONGVARBINARY"
  | "LONGVARCHAR"
  | "NCHAR"
  | "NCLOB"
  | "NULL"
  | "NUMERIC"
  | "NVARCHAR"
  | "OTHER"
  | "REAL"
  | "REF"
  | "REF_CURSOR"
  | "ROWID"
  | "SMALLINT"
  | "SQLXML"
  | "STRUCT"
  | "TIME"
  | "TIME_WITH_TIMEZONE"
  | "TIMESTAMP"
  | "TIMESTAMP_WITH_TIMEZONE"
  | "TINYINT"
  | "VARBINARY"
  | "VARCHAR";
export type JDBCDataTypeMapping = Record<JDBCDataType, GlueRecordType>;
export type JdbcMetadataEntry = "COMMENTS" | "RAWTYPES";
export interface JdbcTarget {
  ConnectionName?: string;
  Path?: string;
  Exclusions?: Array<string>;
  EnableAdditionalMetadata?: Array<JdbcMetadataEntry>;
}
export type JdbcTargetList = Array<JdbcTarget>;
export interface Job {
  Name?: string;
  JobMode?: JobMode;
  JobRunQueuingEnabled?: boolean;
  Description?: string;
  LogUri?: string;
  Role?: string;
  CreatedOn?: Date | string;
  LastModifiedOn?: Date | string;
  ExecutionProperty?: ExecutionProperty;
  Command?: JobCommand;
  DefaultArguments?: Record<string, string>;
  NonOverridableArguments?: Record<string, string>;
  Connections?: ConnectionsList;
  MaxRetries?: number;
  AllocatedCapacity?: number;
  Timeout?: number;
  MaxCapacity?: number;
  WorkerType?: WorkerType;
  NumberOfWorkers?: number;
  SecurityConfiguration?: string;
  NotificationProperty?: NotificationProperty;
  GlueVersion?: string;
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
  ExecutionClass?: ExecutionClass;
  SourceControlDetails?: SourceControlDetails;
  MaintenanceWindow?: string;
  ProfileName?: string;
}
export interface JobBookmarkEntry {
  JobName?: string;
  Version?: number;
  Run?: number;
  Attempt?: number;
  PreviousRunId?: string;
  RunId?: string;
  JobBookmark?: string;
}
export interface JobBookmarksEncryption {
  JobBookmarksEncryptionMode?: JobBookmarksEncryptionMode;
  KmsKeyArn?: string;
}
export type JobBookmarksEncryptionMode = "DISABLED" | "CSEKMS";
export interface JobCommand {
  Name?: string;
  ScriptLocation?: string;
  PythonVersion?: string;
  Runtime?: string;
}
export type JobList = Array<Job>;
export type JobMode = "SCRIPT" | "VISUAL" | "NOTEBOOK";
export type JobName = string;

export type JobNameList = Array<string>;
export interface JobNodeDetails {
  JobRuns?: Array<JobRun>;
}
export interface JobRun {
  Id?: string;
  Attempt?: number;
  PreviousRunId?: string;
  TriggerName?: string;
  JobName?: string;
  JobMode?: JobMode;
  JobRunQueuingEnabled?: boolean;
  StartedOn?: Date | string;
  LastModifiedOn?: Date | string;
  CompletedOn?: Date | string;
  JobRunState?: JobRunState;
  Arguments?: Record<string, string>;
  ErrorMessage?: string;
  PredecessorRuns?: Array<Predecessor>;
  AllocatedCapacity?: number;
  ExecutionTime?: number;
  Timeout?: number;
  MaxCapacity?: number;
  WorkerType?: WorkerType;
  NumberOfWorkers?: number;
  SecurityConfiguration?: string;
  LogGroupName?: string;
  NotificationProperty?: NotificationProperty;
  GlueVersion?: string;
  DPUSeconds?: number;
  ExecutionClass?: ExecutionClass;
  MaintenanceWindow?: string;
  ProfileName?: string;
  StateDetail?: string;
}
export type JobRunList = Array<JobRun>;
export type JobRunState =
  | "STARTING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMEOUT"
  | "ERROR"
  | "WAITING"
  | "EXPIRED";
export interface JobUpdate {
  JobMode?: JobMode;
  JobRunQueuingEnabled?: boolean;
  Description?: string;
  LogUri?: string;
  Role?: string;
  ExecutionProperty?: ExecutionProperty;
  Command?: JobCommand;
  DefaultArguments?: Record<string, string>;
  NonOverridableArguments?: Record<string, string>;
  Connections?: ConnectionsList;
  MaxRetries?: number;
  AllocatedCapacity?: number;
  Timeout?: number;
  MaxCapacity?: number;
  WorkerType?: WorkerType;
  NumberOfWorkers?: number;
  SecurityConfiguration?: string;
  NotificationProperty?: NotificationProperty;
  GlueVersion?: string;
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
  ExecutionClass?: ExecutionClass;
  SourceControlDetails?: SourceControlDetails;
  MaintenanceWindow?: string;
}
export interface Join {
  Name: string;
  Inputs: Array<string>;
  JoinType: JoinType;
  Columns: Array<JoinColumn>;
}
export interface JoinColumn {
  From: string;
  Keys: Array<Array<string>>;
}
export type JoinColumns = Array<JoinColumn>;
export type JoinType =
  | "EQUIJOIN"
  | "LEFT"
  | "RIGHT"
  | "OUTER"
  | "LEFT_SEMI"
  | "LEFT_ANTI";
export interface JsonClassifier {
  Name: string;
  CreationTime?: Date | string;
  LastUpdated?: Date | string;
  Version?: number;
  JsonPath: string;
}
export type JsonPath = string;

export type JsonValue = string;

export type JwtToken = string;

export interface KafkaStreamingSourceOptions {
  BootstrapServers?: string;
  SecurityProtocol?: string;
  ConnectionName?: string;
  TopicName?: string;
  Assign?: string;
  SubscribePattern?: string;
  Classification?: string;
  Delimiter?: string;
  StartingOffsets?: string;
  EndingOffsets?: string;
  PollTimeoutMs?: number;
  NumRetries?: number;
  RetryIntervalMs?: number;
  MaxOffsetsPerTrigger?: number;
  MinPartitions?: number;
  IncludeHeaders?: boolean;
  AddRecordTimestamp?: string;
  EmitConsumerLagMetrics?: string;
  StartingTimestamp?: Date | string;
}
export type KeyList = Array<string>;
export interface KeySchemaElement {
  Name: string;
  Type: string;
}
export type KeySchemaElementList = Array<KeySchemaElement>;
export type KeyString = string;

export interface KinesisStreamingSourceOptions {
  EndpointUrl?: string;
  StreamName?: string;
  Classification?: string;
  Delimiter?: string;
  StartingPosition?: StartingPosition;
  MaxFetchTimeInMs?: number;
  MaxFetchRecordsPerShard?: number;
  MaxRecordPerRead?: number;
  AddIdleTimeBetweenReads?: boolean;
  IdleTimeBetweenReadsInMs?: number;
  DescribeShardInterval?: number;
  NumRetries?: number;
  RetryIntervalMs?: number;
  MaxRetryIntervalMs?: number;
  AvoidEmptyBatches?: boolean;
  StreamArn?: string;
  RoleArn?: string;
  RoleSessionName?: string;
  AddRecordTimestamp?: string;
  EmitConsumerLagMetrics?: string;
  StartingTimestamp?: Date | string;
}
export type KmsKeyArn = string;

export declare class KMSKeyNotAccessibleFault extends EffectData.TaggedError(
  "KMSKeyNotAccessibleFault",
)<{
  readonly Message?: string;
}> {}
export type LabelCount = number;

export interface LabelingSetGenerationTaskRunProperties {
  OutputS3Path?: string;
}
export interface LakeFormationConfiguration {
  UseLakeFormationCredentials?: boolean;
  AccountId?: string;
}
export type Language = "PYTHON" | "SCALA";
export interface LastActiveDefinition {
  Description?: string;
  LastModifiedOn?: Date | string;
  ParameterSpec?: string;
  BlueprintLocation?: string;
  BlueprintServiceLocation?: string;
}
export interface LastCrawlInfo {
  Status?: LastCrawlStatus;
  ErrorMessage?: string;
  LogGroup?: string;
  LogStream?: string;
  MessagePrefix?: string;
  StartTime?: Date | string;
}
export type LastCrawlStatus = "SUCCEEDED" | "CANCELLED" | "FAILED";
export type LatestSchemaVersionBoolean = boolean;

export type Limit = number;

export type LimitedPathList = Array<Array<string>>;
export type LimitedStringList = Array<string>;
export interface LineageConfiguration {
  CrawlerLineageSettings?: CrawlerLineageSettings;
}
export interface ListBlueprintsRequest {
  NextToken?: string;
  MaxResults?: number;
  Tags?: Record<string, string>;
}
export interface ListBlueprintsResponse {
  Blueprints?: Array<string>;
  NextToken?: string;
}
export interface ListColumnStatisticsTaskRunsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListColumnStatisticsTaskRunsResponse {
  ColumnStatisticsTaskRunIds?: Array<string>;
  NextToken?: string;
}
export interface ListConnectionTypesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConnectionTypesResponse {
  ConnectionTypes?: Array<ConnectionTypeBrief>;
  NextToken?: string;
}
export interface ListCrawlersRequest {
  MaxResults?: number;
  NextToken?: string;
  Tags?: Record<string, string>;
}
export interface ListCrawlersResponse {
  CrawlerNames?: Array<string>;
  NextToken?: string;
}
export interface ListCrawlsRequest {
  CrawlerName: string;
  MaxResults?: number;
  Filters?: Array<CrawlsFilter>;
  NextToken?: string;
}
export interface ListCrawlsResponse {
  Crawls?: Array<CrawlerHistory>;
  NextToken?: string;
}
export interface ListCustomEntityTypesRequest {
  NextToken?: string;
  MaxResults?: number;
  Tags?: Record<string, string>;
}
export interface ListCustomEntityTypesResponse {
  CustomEntityTypes?: Array<CustomEntityType>;
  NextToken?: string;
}
export interface ListDataQualityResultsRequest {
  Filter?: DataQualityResultFilterCriteria;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDataQualityResultsResponse {
  Results: Array<DataQualityResultDescription>;
  NextToken?: string;
}
export interface ListDataQualityRuleRecommendationRunsRequest {
  Filter?: DataQualityRuleRecommendationRunFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDataQualityRuleRecommendationRunsResponse {
  Runs?: Array<DataQualityRuleRecommendationRunDescription>;
  NextToken?: string;
}
export interface ListDataQualityRulesetEvaluationRunsRequest {
  Filter?: DataQualityRulesetEvaluationRunFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDataQualityRulesetEvaluationRunsResponse {
  Runs?: Array<DataQualityRulesetEvaluationRunDescription>;
  NextToken?: string;
}
export interface ListDataQualityRulesetsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filter?: DataQualityRulesetFilterCriteria;
  Tags?: Record<string, string>;
}
export interface ListDataQualityRulesetsResponse {
  Rulesets?: Array<DataQualityRulesetListDetails>;
  NextToken?: string;
}
export interface ListDataQualityStatisticAnnotationsRequest {
  StatisticId?: string;
  ProfileId?: string;
  TimestampFilter?: TimestampFilter;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDataQualityStatisticAnnotationsResponse {
  Annotations?: Array<StatisticAnnotation>;
  NextToken?: string;
}
export interface ListDataQualityStatisticsRequest {
  StatisticId?: string;
  ProfileId?: string;
  TimestampFilter?: TimestampFilter;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDataQualityStatisticsResponse {
  Statistics?: Array<StatisticSummary>;
  NextToken?: string;
}
export interface ListDevEndpointsRequest {
  NextToken?: string;
  MaxResults?: number;
  Tags?: Record<string, string>;
}
export interface ListDevEndpointsResponse {
  DevEndpointNames?: Array<string>;
  NextToken?: string;
}
export interface ListEntitiesRequest {
  ConnectionName?: string;
  CatalogId?: string;
  ParentEntityName?: string;
  NextToken?: string;
  DataStoreApiVersion?: string;
}
export interface ListEntitiesResponse {
  Entities?: Array<Entity>;
  NextToken?: string;
}
export interface ListJobsRequest {
  NextToken?: string;
  MaxResults?: number;
  Tags?: Record<string, string>;
}
export interface ListJobsResponse {
  JobNames?: Array<string>;
  NextToken?: string;
}
export interface ListMLTransformsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filter?: TransformFilterCriteria;
  Sort?: TransformSortCriteria;
  Tags?: Record<string, string>;
}
export interface ListMLTransformsResponse {
  TransformIds: Array<string>;
  NextToken?: string;
}
export type ListOfString = Array<string>;
export interface ListRegistriesInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRegistriesResponse {
  Registries?: Array<RegistryListItem>;
  NextToken?: string;
}
export interface ListSchemasInput {
  RegistryId?: RegistryId;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSchemasResponse {
  Schemas?: Array<SchemaListItem>;
  NextToken?: string;
}
export interface ListSchemaVersionsInput {
  SchemaId: SchemaId;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSchemaVersionsResponse {
  Schemas?: Array<SchemaVersionListItem>;
  NextToken?: string;
}
export interface ListSessionsRequest {
  NextToken?: string;
  MaxResults?: number;
  Tags?: Record<string, string>;
  RequestOrigin?: string;
}
export interface ListSessionsResponse {
  Ids?: Array<string>;
  Sessions?: Array<Session>;
  NextToken?: string;
}
export interface ListStatementsRequest {
  SessionId: string;
  RequestOrigin?: string;
  NextToken?: string;
}
export interface ListStatementsResponse {
  Statements?: Array<Statement>;
  NextToken?: string;
}
export interface ListTableOptimizerRunsRequest {
  CatalogId: string;
  DatabaseName: string;
  TableName: string;
  Type: TableOptimizerType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTableOptimizerRunsResponse {
  CatalogId?: string;
  DatabaseName?: string;
  TableName?: string;
  NextToken?: string;
  TableOptimizerRuns?: Array<TableOptimizerRun>;
}
export type ListTableOptimizerRunsToken = string;

export interface ListTriggersRequest {
  NextToken?: string;
  DependentJobName?: string;
  MaxResults?: number;
  Tags?: Record<string, string>;
}
export interface ListTriggersResponse {
  TriggerNames?: Array<string>;
  NextToken?: string;
}
export interface ListUsageProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListUsageProfilesResponse {
  Profiles?: Array<UsageProfileDefinition>;
  NextToken?: string;
}
export interface ListWorkflowsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWorkflowsResponse {
  Workflows?: Array<string>;
  NextToken?: string;
}
export interface Location {
  Jdbc?: Array<CodeGenNodeArg>;
  S3?: Array<CodeGenNodeArg>;
  DynamoDB?: Array<CodeGenNodeArg>;
}
export type LocationMap = Record<string, string>;
export type LocationString = string;

export type LocationStringList = Array<string>;
export type LogGroup = string;

export type Logical = "AND" | "ANY";
export type LogicalOperator = "EQUALS";
export type LogStream = string;

export type Long = number;

export interface LongColumnStatisticsData {
  MinimumValue?: number;
  MaximumValue?: number;
  NumberOfNulls: number;
  NumberOfDistinctValues: number;
}
export type LongValue = number;

export type LongValueString = string;

export type MaintenanceWindow = string;

export type ManyInputs = Array<string>;
export interface Mapping {
  ToKey?: string;
  FromPath?: Array<string>;
  FromType?: string;
  ToType?: string;
  Dropped?: boolean;
  Children?: Array<Mapping>;
}
export interface MappingEntry {
  SourceTable?: string;
  SourcePath?: string;
  SourceType?: string;
  TargetTable?: string;
  TargetPath?: string;
  TargetType?: string;
}
export type MappingList = Array<MappingEntry>;
export type Mappings = Array<Mapping>;
export type MapValue = Record<string, string>;
export type MaskValue = string;

export type MatchCriteria = Array<string>;
export type MaxConcurrentRuns = number;

export type MaxListTableOptimizerRunsTokenResults = number;

export type MaxResults = number;

export type MaxResultsNumber = number;

export type MaxRetries = number;

export interface Merge {
  Name: string;
  Inputs: Array<string>;
  Source: string;
  PrimaryKeys: Array<Array<string>>;
}
export type MessagePrefix = string;

export type MessageString = string;

export interface MetadataInfo {
  MetadataValue?: string;
  CreatedTime?: string;
  OtherMetadataValueList?: Array<OtherMetadataValueListItem>;
}
export type MetadataInfoMap = Record<string, MetadataInfo>;
export type MetadataKeyString = string;

export interface MetadataKeyValuePair {
  MetadataKey?: string;
  MetadataValue?: string;
}
export type MetadataList = Array<MetadataKeyValuePair>;
export type MetadataOperation = "CREATE";
export type MetadataValueString = string;

export interface MetricBasedObservation {
  MetricName?: string;
  StatisticId?: string;
  MetricValues?: DataQualityMetricValues;
  NewRules?: Array<string>;
}
export type metricCounts = number;

export interface MicrosoftSQLServerCatalogSource {
  Name: string;
  Database: string;
  Table: string;
}
export interface MicrosoftSQLServerCatalogTarget {
  Name: string;
  Inputs: Array<string>;
  Database: string;
  Table: string;
}
export type MillisecondsCount = number;

export interface MLTransform {
  TransformId?: string;
  Name?: string;
  Description?: string;
  Status?: TransformStatusType;
  CreatedOn?: Date | string;
  LastModifiedOn?: Date | string;
  InputRecordTables?: Array<GlueTable>;
  Parameters?: TransformParameters;
  EvaluationMetrics?: EvaluationMetrics;
  LabelCount?: number;
  Schema?: Array<SchemaColumn>;
  Role?: string;
  GlueVersion?: string;
  MaxCapacity?: number;
  WorkerType?: WorkerType;
  NumberOfWorkers?: number;
  Timeout?: number;
  MaxRetries?: number;
  TransformEncryption?: TransformEncryption;
}
export declare class MLTransformNotReadyException extends EffectData.TaggedError(
  "MLTransformNotReadyException",
)<{
  readonly Message?: string;
}> {}
export interface MLUserDataEncryption {
  MlUserDataEncryptionMode: MLUserDataEncryptionModeString;
  KmsKeyId?: string;
}
export type MLUserDataEncryptionModeString = "DISABLED" | "SSEKMS";
export interface ModifyIntegrationRequest {
  IntegrationIdentifier: string;
  Description?: string;
  DataFilter?: string;
  IntegrationName?: string;
}
export interface ModifyIntegrationResponse {
  SourceArn: string;
  TargetArn: string;
  IntegrationName: string;
  Description?: string;
  IntegrationArn: string;
  KmsKeyId?: string;
  AdditionalEncryptionContext?: Record<string, string>;
  Tags?: Array<Tag>;
  Status: IntegrationStatus;
  CreateTime: Date | string;
  Errors?: Array<IntegrationError>;
  DataFilter?: string;
}
export interface MongoDBTarget {
  ConnectionName?: string;
  Path?: string;
  ScanAll?: boolean;
}
export type MongoDBTargetList = Array<MongoDBTarget>;
export interface MySQLCatalogSource {
  Name: string;
  Database: string;
  Table: string;
}
export interface MySQLCatalogTarget {
  Name: string;
  Inputs: Array<string>;
  Database: string;
  Table: string;
}
export type NameString = string;

export type NameStringList = Array<string>;
export type NewRules = Array<string>;
export type NextToken = string;

export interface Node {
  Type?: NodeType;
  Name?: string;
  UniqueId?: string;
  TriggerDetails?: TriggerNodeDetails;
  JobDetails?: JobNodeDetails;
  CrawlerDetails?: CrawlerNodeDetails;
}
export type NodeId = string;

export type NodeIdList = Array<string>;
export type NodeList = Array<Node>;
export type NodeName = string;

export type NodeType = "CRAWLER" | "JOB" | "TRIGGER";
export type NonNegativeDouble = number;

export type NonNegativeInt = number;

export type NonNegativeInteger = number;

export type NonNegativeLong = number;

export declare class NoScheduleException extends EffectData.TaggedError(
  "NoScheduleException",
)<{
  readonly Message?: string;
}> {}
export interface NotificationProperty {
  NotifyDelayAfter?: number;
}
export type NotifyDelayAfter = number;

export type NullableBoolean = boolean;

export type NullableDouble = number;

export type NullableInteger = number;

export type NullableString = string;

export interface NullCheckBoxList {
  IsEmpty?: boolean;
  IsNullString?: boolean;
  IsNegOne?: boolean;
}
export interface NullValueField {
  Value: string;
  Datatype: Datatype;
}
export type NullValueFields = Array<NullValueField>;
export type NumberTargetPartitionsString = string;

export interface OAuth2ClientApplication {
  UserManagedClientApplicationClientId?: string;
  AWSManagedClientApplicationReference?: string;
}
export interface OAuth2Credentials {
  UserManagedClientApplicationClientSecret?: string;
  AccessToken?: string;
  RefreshToken?: string;
  JwtToken?: string;
}
export type OAuth2GrantType =
  | "AUTHORIZATION_CODE"
  | "CLIENT_CREDENTIALS"
  | "JWT_BEARER";
export interface OAuth2Properties {
  OAuth2GrantType?: OAuth2GrantType;
  OAuth2ClientApplication?: OAuth2ClientApplication;
  TokenUrl?: string;
  TokenUrlParametersMap?: Record<string, string>;
}
export interface OAuth2PropertiesInput {
  OAuth2GrantType?: OAuth2GrantType;
  OAuth2ClientApplication?: OAuth2ClientApplication;
  TokenUrl?: string;
  TokenUrlParametersMap?: Record<string, string>;
  AuthorizationCodeProperties?: AuthorizationCodeProperties;
  OAuth2Credentials?: OAuth2Credentials;
}
export type OneInput = Array<string>;
export interface OpenTableFormatInput {
  IcebergInput?: IcebergInput;
}
export type Operation = string;

export declare class OperationNotSupportedException extends EffectData.TaggedError(
  "OperationNotSupportedException",
)<{
  readonly Message?: string;
}> {}
export declare class OperationTimeoutException extends EffectData.TaggedError(
  "OperationTimeoutException",
)<{
  readonly Message?: string;
}> {}
export interface Option {
  Value?: string;
  Label?: string;
  Description?: string;
}
export type OptionKey = string;

export type OptionList = Array<Option>;
export type OptionValue = string;

export interface OracleSQLCatalogSource {
  Name: string;
  Database: string;
  Table: string;
}
export interface OracleSQLCatalogTarget {
  Name: string;
  Inputs: Array<string>;
  Database: string;
  Table: string;
}
export type OrchestrationArgumentsMap = Record<string, string>;
export type OrchestrationArgumentsValue = string;

export type OrchestrationIAMRoleArn = string;

export type OrchestrationMessageString = string;

export type OrchestrationNameString = string;

export type OrchestrationPageSize200 = number;

export type OrchestrationPageSize25 = number;

export type OrchestrationRoleArn = string;

export type OrchestrationS3Location = string;

export type OrchestrationStatementCodeString = string;

export type OrchestrationStringList = Array<string>;
export type OrchestrationToken = string;

export interface Order {
  Column: string;
  SortOrder: number;
}
export type OrderList = Array<Order>;
export interface OrphanFileDeletionConfiguration {
  icebergConfiguration?: IcebergOrphanFileDeletionConfiguration;
}
export interface OrphanFileDeletionMetrics {
  IcebergMetrics?: IcebergOrphanFileDeletionMetrics;
}
export type OtherMetadataValueList = Array<OtherMetadataValueListItem>;
export interface OtherMetadataValueListItem {
  MetadataValue?: string;
  CreatedTime?: string;
}
export type PageSize = number;

export type PaginationToken = string;

export type ParameterMap = Record<string, string>;
export type ParameterName = string;

export type ParametersMap = Record<string, string>;
export type ParametersMapValue = string;

export type ParameterValue = string;

export type ParamType =
  | "STR"
  | "INT"
  | "FLOAT"
  | "COMPLEX"
  | "BOOL"
  | "LIST"
  | "NULL";
export type ParquetCompressionType =
  | "SNAPPY"
  | "LZO"
  | "GZIP"
  | "BROTLI"
  | "LZ4"
  | "UNCOMPRESSED"
  | "NONE";
export interface Partition {
  Values?: Array<string>;
  DatabaseName?: string;
  TableName?: string;
  CreationTime?: Date | string;
  LastAccessTime?: Date | string;
  StorageDescriptor?: StorageDescriptor;
  Parameters?: Record<string, string>;
  LastAnalyzedTime?: Date | string;
  CatalogId?: string;
}
export interface PartitionError {
  PartitionValues?: Array<string>;
  ErrorDetail?: ErrorDetail;
}
export type PartitionErrors = Array<PartitionError>;
export interface PartitionIndex {
  Keys: Array<string>;
  IndexName: string;
}
export interface PartitionIndexDescriptor {
  IndexName: string;
  Keys: Array<KeySchemaElement>;
  IndexStatus: PartitionIndexStatus;
  BackfillErrors?: Array<BackfillError>;
}
export type PartitionIndexDescriptorList = Array<PartitionIndexDescriptor>;
export type PartitionIndexList = Array<PartitionIndex>;
export type PartitionIndexStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED";
export interface PartitionInput {
  Values?: Array<string>;
  LastAccessTime?: Date | string;
  StorageDescriptor?: StorageDescriptor;
  Parameters?: Record<string, string>;
  LastAnalyzedTime?: Date | string;
}
export type PartitionInputList = Array<PartitionInput>;
export type PartitionList = Array<Partition>;
export interface PartitionValueList {
  Values: Array<string>;
}
export type Password = string;

export type Path = string;

export type PathList = Array<string>;
export type Permission =
  | "ALL"
  | "SELECT"
  | "ALTER"
  | "DROP"
  | "DELETE"
  | "INSERT"
  | "CREATE_DATABASE"
  | "CREATE_TABLE"
  | "DATA_LOCATION_ACCESS";
export type PermissionList = Array<Permission>;
export type PermissionType =
  | "COLUMN_PERMISSION"
  | "CELL_FILTER_PERMISSION"
  | "NESTED_PERMISSION"
  | "NESTED_CELL_PERMISSION";
export type PermissionTypeList = Array<PermissionType>;
export declare class PermissionTypeMismatchException extends EffectData.TaggedError(
  "PermissionTypeMismatchException",
)<{
  readonly Message?: string;
}> {}
export interface PhysicalConnectionRequirements {
  SubnetId?: string;
  SecurityGroupIdList?: Array<string>;
  AvailabilityZone?: string;
}
export interface PIIDetection {
  Name: string;
  Inputs: Array<string>;
  PiiType: PiiType;
  EntityTypesToDetect: Array<string>;
  OutputColumnName?: string;
  SampleFraction?: number;
  ThresholdFraction?: number;
  MaskValue?: string;
}
export type PiiType =
  | "RowAudit"
  | "RowMasking"
  | "ColumnAudit"
  | "ColumnMasking";
export type PolicyJsonString = string;

export type PollingTime = number;

export type PositiveInteger = number;

export type PositiveLong = number;

export interface PostgreSQLCatalogSource {
  Name: string;
  Database: string;
  Table: string;
}
export interface PostgreSQLCatalogTarget {
  Name: string;
  Inputs: Array<string>;
  Database: string;
  Table: string;
}
export interface Predecessor {
  JobName?: string;
  RunId?: string;
}
export type PredecessorList = Array<Predecessor>;
export interface Predicate {
  Logical?: Logical;
  Conditions?: Array<Condition>;
}
export type PredicateString = string;

export type PrimaryKeyList = Array<string>;
export interface PrincipalPermissions {
  Principal?: DataLakePrincipal;
  Permissions?: Array<Permission>;
}
export type PrincipalPermissionsList = Array<PrincipalPermissions>;
export type PrincipalType = "USER" | "ROLE" | "GROUP";
export type Prob = number;

export interface ProfileConfiguration {
  SessionConfiguration?: Record<string, ConfigurationObject>;
  JobConfiguration?: Record<string, ConfigurationObject>;
}
export type PropertiesMap = Record<string, Property>;
export interface Property {
  Name: string;
  Description: string;
  Required: boolean;
  DefaultValue?: string;
  PropertyTypes: Array<PropertyType>;
  AllowedValues?: Array<AllowedValue>;
  DataOperationScopes?: Array<DataOperation>;
}
export type PropertyDescriptionString = string;

export type PropertyKey = string;

export type PropertyMap = Record<string, string>;
export type PropertyName = string;

export type PropertyNameOverrides = Record<string, string>;
export interface PropertyPredicate {
  Key?: string;
  Value?: string;
  Comparator?: Comparator;
}
export type PropertyType =
  | "USER_INPUT"
  | "SECRET"
  | "READ_ONLY"
  | "UNUSED"
  | "SECRET_OR_USER_INPUT";
export type PropertyTypes = Array<PropertyType>;
export type PropertyValue = string;

export type PublicKeysList = Array<string>;
export interface PutDataCatalogEncryptionSettingsRequest {
  CatalogId?: string;
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
}
export interface PutDataCatalogEncryptionSettingsResponse {}
export interface PutDataQualityProfileAnnotationRequest {
  ProfileId: string;
  InclusionAnnotation: InclusionAnnotationValue;
}
export interface PutDataQualityProfileAnnotationResponse {}
export interface PutResourcePolicyRequest {
  PolicyInJson: string;
  ResourceArn?: string;
  PolicyHashCondition?: string;
  PolicyExistsCondition?: ExistCondition;
  EnableHybrid?: EnableHybridValues;
}
export interface PutResourcePolicyResponse {
  PolicyHash?: string;
}
export interface PutSchemaVersionMetadataInput {
  SchemaId?: SchemaId;
  SchemaVersionNumber?: SchemaVersionNumber;
  SchemaVersionId?: string;
  MetadataKeyValue: MetadataKeyValuePair;
}
export interface PutSchemaVersionMetadataResponse {
  SchemaArn?: string;
  SchemaName?: string;
  RegistryName?: string;
  LatestVersion?: boolean;
  VersionNumber?: number;
  SchemaVersionId?: string;
  MetadataKey?: string;
  MetadataValue?: string;
}
export interface PutWorkflowRunPropertiesRequest {
  Name: string;
  RunId: string;
  RunProperties: Record<string, string>;
}
export interface PutWorkflowRunPropertiesResponse {}
export type PythonScript = string;

export type PythonVersionString = string;

export interface QuerySchemaVersionMetadataInput {
  SchemaId?: SchemaId;
  SchemaVersionNumber?: SchemaVersionNumber;
  SchemaVersionId?: string;
  MetadataList?: Array<MetadataKeyValuePair>;
  MaxResults?: number;
  NextToken?: string;
}
export type QuerySchemaVersionMetadataMaxResults = number;

export interface QuerySchemaVersionMetadataResponse {
  MetadataInfoMap?: Record<string, MetadataInfo>;
  SchemaVersionId?: string;
  NextToken?: string;
}
export interface QuerySessionContext {
  QueryId?: string;
  QueryStartTime?: Date | string;
  ClusterId?: string;
  QueryAuthorizationId?: string;
  AdditionalContext?: Record<string, string>;
}
export type QuoteChar = "QUOTE" | "QUILLEMET" | "SINGLE_QUOTE" | "DISABLED";
export interface Recipe {
  Name: string;
  Inputs: Array<string>;
  RecipeReference?: RecipeReference;
  RecipeSteps?: Array<RecipeStep>;
}
export interface RecipeAction {
  Operation: string;
  Parameters?: Record<string, string>;
}
export interface RecipeReference {
  RecipeArn: string;
  RecipeVersion: string;
}
export interface RecipeStep {
  Action: RecipeAction;
  ConditionExpressions?: Array<ConditionExpression>;
}
export type RecipeSteps = Array<RecipeStep>;
export type RecipeVersion = string;

export type GlueRecord = unknown;

export type Records = Array<unknown>;
export type RecordsCount = number;

export type RecrawlBehavior =
  | "CRAWL_EVERYTHING"
  | "CRAWL_NEW_FOLDERS_ONLY"
  | "CRAWL_EVENT_MODE";
export interface RecrawlPolicy {
  RecrawlBehavior?: RecrawlBehavior;
}
export type RedirectUri = string;

export interface RedshiftSource {
  Name: string;
  Database: string;
  Table: string;
  RedshiftTmpDir?: string;
  TmpDirIAMRole?: string;
}
export interface RedshiftTarget {
  Name: string;
  Inputs: Array<string>;
  Database: string;
  Table: string;
  RedshiftTmpDir?: string;
  TmpDirIAMRole?: string;
  UpsertRedshiftOptions?: UpsertRedshiftTargetOptions;
}
export type ReferenceDatasetsList = Array<string>;
export type RefreshToken = string;

export interface RegisterSchemaVersionInput {
  SchemaId: SchemaId;
  SchemaDefinition: string;
}
export interface RegisterSchemaVersionResponse {
  SchemaVersionId?: string;
  VersionNumber?: number;
  Status?: SchemaVersionStatus;
}
export interface RegistryId {
  RegistryName?: string;
  RegistryArn?: string;
}
export type RegistryListDefinition = Array<RegistryListItem>;
export interface RegistryListItem {
  RegistryName?: string;
  RegistryArn?: string;
  Description?: string;
  Status?: RegistryStatus;
  CreatedTime?: string;
  UpdatedTime?: string;
}
export type RegistryStatus = "AVAILABLE" | "DELETING";
export interface RelationalCatalogSource {
  Name: string;
  Database: string;
  Table: string;
}
export interface RemoveSchemaVersionMetadataInput {
  SchemaId?: SchemaId;
  SchemaVersionNumber?: SchemaVersionNumber;
  SchemaVersionId?: string;
  MetadataKeyValue: MetadataKeyValuePair;
}
export interface RemoveSchemaVersionMetadataResponse {
  SchemaArn?: string;
  SchemaName?: string;
  RegistryName?: string;
  LatestVersion?: boolean;
  VersionNumber?: number;
  SchemaVersionId?: string;
  MetadataKey?: string;
  MetadataValue?: string;
}
export interface RenameField {
  Name: string;
  Inputs: Array<string>;
  SourcePath: Array<string>;
  TargetPath: Array<string>;
}
export type ReplaceBoolean = boolean;

export interface ResetJobBookmarkRequest {
  JobName: string;
  RunId?: string;
}
export interface ResetJobBookmarkResponse {
  JobBookmarkEntry?: JobBookmarkEntry;
}
export type ResourceAction = "UPDATE" | "CREATE";
export type ResourceArnString = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotReadyException extends EffectData.TaggedError(
  "ResourceNotReadyException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNumberLimitExceededException extends EffectData.TaggedError(
  "ResourceNumberLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ResourceShareType = "FOREIGN" | "ALL" | "FEDERATED";
export type ResourceState =
  | "QUEUED"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "STOPPED"
  | "FAILED";
export type ResourceType = "JAR" | "FILE" | "ARCHIVE";
export interface ResourceUri {
  ResourceType?: ResourceType;
  Uri?: string;
}
export type ResourceUriList = Array<ResourceUri>;
export interface ResumeWorkflowRunRequest {
  Name: string;
  RunId: string;
  NodeIds: Array<string>;
}
export interface ResumeWorkflowRunResponse {
  RunId?: string;
  NodeIds?: Array<string>;
}
export interface RetentionConfiguration {
  icebergConfiguration?: IcebergRetentionConfiguration;
}
export interface RetentionMetrics {
  IcebergMetrics?: IcebergRetentionMetrics;
}
export type Role = string;

export type RoleArn = string;

export type RoleString = string;

export type RowTag = string;

export type RuleMetricsMap = Record<string, number>;
export type RulesetNames = Array<string>;
export type RunId = string;

export interface RunIdentifier {
  RunId?: string;
  JobRunId?: string;
}
export interface RunMetrics {
  NumberOfBytesCompacted?: string;
  NumberOfFilesCompacted?: string;
  NumberOfDpus?: string;
  JobDurationInHour?: string;
}
export interface RunStatementRequest {
  SessionId: string;
  Code: string;
  RequestOrigin?: string;
}
export interface RunStatementResponse {
  Id?: number;
}
export type RuntimeNameString = string;

export interface S3CatalogDeltaSource {
  Name: string;
  Database: string;
  Table: string;
  AdditionalDeltaOptions?: Record<string, string>;
  OutputSchemas?: Array<GlueSchema>;
}
export interface S3CatalogHudiSource {
  Name: string;
  Database: string;
  Table: string;
  AdditionalHudiOptions?: Record<string, string>;
  OutputSchemas?: Array<GlueSchema>;
}
export interface S3CatalogSource {
  Name: string;
  Database: string;
  Table: string;
  PartitionPredicate?: string;
  AdditionalOptions?: S3SourceAdditionalOptions;
}
export interface S3CatalogTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Table: string;
  Database: string;
  SchemaChangePolicy?: CatalogSchemaChangePolicy;
}
export interface S3CsvSource {
  Name: string;
  Paths: Array<string>;
  CompressionType?: CompressionType;
  Exclusions?: Array<string>;
  GroupSize?: string;
  GroupFiles?: string;
  Recurse?: boolean;
  MaxBand?: number;
  MaxFilesInBand?: number;
  AdditionalOptions?: S3DirectSourceAdditionalOptions;
  Separator: Separator;
  Escaper?: string;
  QuoteChar: QuoteChar;
  Multiline?: boolean;
  WithHeader?: boolean;
  WriteHeader?: boolean;
  SkipFirst?: boolean;
  OptimizePerformance?: boolean;
  OutputSchemas?: Array<GlueSchema>;
}
export interface S3DeltaCatalogTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Table: string;
  Database: string;
  AdditionalOptions?: Record<string, string>;
  SchemaChangePolicy?: CatalogSchemaChangePolicy;
}
export interface S3DeltaDirectTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Path: string;
  Compression: DeltaTargetCompressionType;
  NumberTargetPartitions?: string;
  Format: TargetFormat;
  AdditionalOptions?: Record<string, string>;
  SchemaChangePolicy?: DirectSchemaChangePolicy;
}
export interface S3DeltaSource {
  Name: string;
  Paths: Array<string>;
  AdditionalDeltaOptions?: Record<string, string>;
  AdditionalOptions?: S3DirectSourceAdditionalOptions;
  OutputSchemas?: Array<GlueSchema>;
}
export interface S3DirectSourceAdditionalOptions {
  BoundedSize?: number;
  BoundedFiles?: number;
  EnableSamplePath?: boolean;
  SamplePath?: string;
}
export interface S3DirectTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Path: string;
  Compression?: string;
  NumberTargetPartitions?: string;
  Format: TargetFormat;
  SchemaChangePolicy?: DirectSchemaChangePolicy;
}
export interface S3Encryption {
  S3EncryptionMode?: S3EncryptionMode;
  KmsKeyArn?: string;
}
export type S3EncryptionList = Array<S3Encryption>;
export type S3EncryptionMode = "DISABLED" | "SSEKMS" | "SSES3";
export interface S3ExcelSource {
  Name: string;
  Paths: Array<string>;
  CompressionType?: ParquetCompressionType;
  Exclusions?: Array<string>;
  GroupSize?: string;
  GroupFiles?: string;
  Recurse?: boolean;
  MaxBand?: number;
  MaxFilesInBand?: number;
  AdditionalOptions?: S3DirectSourceAdditionalOptions;
  NumberRows?: number;
  SkipFooter?: number;
  OutputSchemas?: Array<GlueSchema>;
}
export interface S3GlueParquetTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Path: string;
  Compression?: ParquetCompressionType;
  NumberTargetPartitions?: string;
  SchemaChangePolicy?: DirectSchemaChangePolicy;
}
export interface S3HudiCatalogTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Table: string;
  Database: string;
  AdditionalOptions: Record<string, string>;
  SchemaChangePolicy?: CatalogSchemaChangePolicy;
}
export interface S3HudiDirectTarget {
  Name: string;
  Inputs: Array<string>;
  Path: string;
  Compression: HudiTargetCompressionType;
  NumberTargetPartitions?: string;
  PartitionKeys?: Array<Array<string>>;
  Format: TargetFormat;
  AdditionalOptions: Record<string, string>;
  SchemaChangePolicy?: DirectSchemaChangePolicy;
}
export interface S3HudiSource {
  Name: string;
  Paths: Array<string>;
  AdditionalHudiOptions?: Record<string, string>;
  AdditionalOptions?: S3DirectSourceAdditionalOptions;
  OutputSchemas?: Array<GlueSchema>;
}
export interface S3HyperDirectTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Path: string;
  Compression?: HyperTargetCompressionType;
  SchemaChangePolicy?: DirectSchemaChangePolicy;
}
export interface S3IcebergDirectTarget {
  Name: string;
  Inputs: Array<string>;
  PartitionKeys?: Array<Array<string>>;
  Path: string;
  Format: TargetFormat;
  AdditionalOptions?: Record<string, string>;
  SchemaChangePolicy?: DirectSchemaChangePolicy;
  Compression: IcebergTargetCompressionType;
  NumberTargetPartitions?: string;
}
export interface S3JsonSource {
  Name: string;
  Paths: Array<string>;
  CompressionType?: CompressionType;
  Exclusions?: Array<string>;
  GroupSize?: string;
  GroupFiles?: string;
  Recurse?: boolean;
  MaxBand?: number;
  MaxFilesInBand?: number;
  AdditionalOptions?: S3DirectSourceAdditionalOptions;
  JsonPath?: string;
  Multiline?: boolean;
  OutputSchemas?: Array<GlueSchema>;
}
export interface S3ParquetSource {
  Name: string;
  Paths: Array<string>;
  CompressionType?: ParquetCompressionType;
  Exclusions?: Array<string>;
  GroupSize?: string;
  GroupFiles?: string;
  Recurse?: boolean;
  MaxBand?: number;
  MaxFilesInBand?: number;
  AdditionalOptions?: S3DirectSourceAdditionalOptions;
  OutputSchemas?: Array<GlueSchema>;
}
export interface S3SourceAdditionalOptions {
  BoundedSize?: number;
  BoundedFiles?: number;
}
export interface S3Target {
  Path?: string;
  Exclusions?: Array<string>;
  ConnectionName?: string;
  SampleSize?: number;
  EventQueueArn?: string;
  DlqEventQueueArn?: string;
}
export type S3TargetList = Array<S3Target>;
export type SampleSizePercentage = number;

export type ScalaCode = string;

export interface Schedule {
  ScheduleExpression?: string;
  State?: ScheduleState;
}
export declare class SchedulerNotRunningException extends EffectData.TaggedError(
  "SchedulerNotRunningException",
)<{
  readonly Message?: string;
}> {}
export declare class SchedulerRunningException extends EffectData.TaggedError(
  "SchedulerRunningException",
)<{
  readonly Message?: string;
}> {}
export declare class SchedulerTransitioningException extends EffectData.TaggedError(
  "SchedulerTransitioningException",
)<{
  readonly Message?: string;
}> {}
export type ScheduleState = "SCHEDULED" | "NOT_SCHEDULED" | "TRANSITIONING";
export type ScheduleType = "CRON" | "AUTO";
export interface SchemaChangePolicy {
  UpdateBehavior?: UpdateBehavior;
  DeleteBehavior?: DeleteBehavior;
}
export type SchemaCheckpointNumber = number;

export interface SchemaColumn {
  Name?: string;
  DataType?: string;
}
export type SchemaDefinitionDiff = string;

export type SchemaDefinitionString = string;

export type SchemaDiffType = "SYNTAX_DIFF";
export interface SchemaId {
  SchemaArn?: string;
  SchemaName?: string;
  RegistryName?: string;
}
export type SchemaListDefinition = Array<SchemaListItem>;
export interface SchemaListItem {
  RegistryName?: string;
  SchemaName?: string;
  SchemaArn?: string;
  Description?: string;
  SchemaStatus?: SchemaStatus;
  CreatedTime?: string;
  UpdatedTime?: string;
}
export type SchemaPathString = string;

export interface SchemaReference {
  SchemaId?: SchemaId;
  SchemaVersionId?: string;
  SchemaVersionNumber?: number;
}
export type SchemaRegistryNameString = string;

export type SchemaRegistryTokenString = string;

export type SchemaStatus = "AVAILABLE" | "PENDING" | "DELETING";
export type SchemaValidationError = string;

export interface SchemaVersionErrorItem {
  VersionNumber?: number;
  ErrorDetails?: ErrorDetails;
}
export type SchemaVersionErrorList = Array<SchemaVersionErrorItem>;
export type SchemaVersionIdString = string;

export type SchemaVersionList = Array<SchemaVersionListItem>;
export interface SchemaVersionListItem {
  SchemaArn?: string;
  SchemaVersionId?: string;
  VersionNumber?: number;
  Status?: SchemaVersionStatus;
  CreatedTime?: string;
}
export interface SchemaVersionNumber {
  LatestVersion?: boolean;
  VersionNumber?: number;
}
export type SchemaVersionStatus =
  | "AVAILABLE"
  | "PENDING"
  | "FAILURE"
  | "DELETING";
export type ScriptLocationString = string;

export type SearchPropertyPredicates = Array<PropertyPredicate>;
export interface SearchTablesRequest {
  CatalogId?: string;
  NextToken?: string;
  Filters?: Array<PropertyPredicate>;
  SearchText?: string;
  SortCriteria?: Array<SortCriterion>;
  MaxResults?: number;
  ResourceShareType?: ResourceShareType;
  IncludeStatusDetails?: boolean;
}
export interface SearchTablesResponse {
  NextToken?: string;
  TableList?: Array<Table>;
}
export type SecretArn = string;

export interface SecurityConfiguration {
  Name?: string;
  CreatedTimeStamp?: Date | string;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export type SecurityConfigurationList = Array<SecurityConfiguration>;
export type SecurityGroupIdList = Array<string>;
export interface Segment {
  SegmentNumber: number;
  TotalSegments: number;
}
export type SelectedFields = Array<string>;
export interface SelectFields {
  Name: string;
  Inputs: Array<string>;
  Paths: Array<Array<string>>;
}
export interface SelectFromCollection {
  Name: string;
  Inputs: Array<string>;
  Index: number;
}
export type Separator = "COMMA" | "CTRLA" | "PIPE" | "SEMICOLON" | "TAB";
export interface SerDeInfo {
  Name?: string;
  SerializationLibrary?: string;
  Parameters?: Record<string, string>;
}
export interface Session {
  Id?: string;
  CreatedOn?: Date | string;
  Status?: SessionStatus;
  ErrorMessage?: string;
  Description?: string;
  Role?: string;
  Command?: SessionCommand;
  DefaultArguments?: Record<string, string>;
  Connections?: ConnectionsList;
  Progress?: number;
  MaxCapacity?: number;
  SecurityConfiguration?: string;
  GlueVersion?: string;
  NumberOfWorkers?: number;
  WorkerType?: WorkerType;
  CompletedOn?: Date | string;
  ExecutionTime?: number;
  DPUSeconds?: number;
  IdleTimeout?: number;
  ProfileName?: string;
}
export interface SessionCommand {
  Name?: string;
  PythonVersion?: string;
}
export type SessionIdList = Array<string>;
export type SessionList = Array<Session>;
export type SessionStatus =
  | "PROVISIONING"
  | "READY"
  | "FAILED"
  | "TIMEOUT"
  | "STOPPING"
  | "STOPPED";
export type SettingSource = "CATALOG" | "TABLE";
export interface SkewedInfo {
  SkewedColumnNames?: Array<string>;
  SkewedColumnValues?: Array<string>;
  SkewedColumnValueLocationMaps?: Record<string, string>;
}
export interface SnowflakeNodeData {
  SourceType?: string;
  Connection?: Option;
  Schema?: string;
  Table?: string;
  Database?: string;
  TempDir?: string;
  IamRole?: Option;
  AdditionalOptions?: Record<string, string>;
  SampleQuery?: string;
  PreAction?: string;
  PostAction?: string;
  Action?: string;
  Upsert?: boolean;
  MergeAction?: string;
  MergeWhenMatched?: string;
  MergeWhenNotMatched?: string;
  MergeClause?: string;
  StagingTable?: string;
  SelectedColumns?: Array<Option>;
  AutoPushdown?: boolean;
  TableSchema?: Array<Option>;
}
export interface SnowflakeSource {
  Name: string;
  Data: SnowflakeNodeData;
  OutputSchemas?: Array<GlueSchema>;
}
export interface SnowflakeTarget {
  Name: string;
  Data: SnowflakeNodeData;
  Inputs?: Array<string>;
}
export type Sort = "ASCENDING" | "DESCENDING";
export type SortCriteria = Array<SortCriterion>;
export interface SortCriterion {
  FieldName?: string;
  Sort?: Sort;
}
export type SortDirectionType = "DESCENDING" | "ASCENDING";
export type SourceControlAuthStrategy =
  | "PERSONAL_ACCESS_TOKEN"
  | "AWS_SECRETS_MANAGER";
export interface SourceControlDetails {
  Provider?: SourceControlProvider;
  Repository?: string;
  Owner?: string;
  Branch?: string;
  Folder?: string;
  LastCommitId?: string;
  AuthStrategy?: SourceControlAuthStrategy;
  AuthToken?: string;
}
export type SourceControlProvider =
  | "GITHUB"
  | "GITLAB"
  | "BITBUCKET"
  | "AWS_CODE_COMMIT";
export interface SourceProcessingProperties {
  RoleArn?: string;
}
export interface SourceTableConfig {
  Fields?: Array<string>;
  FilterPredicate?: string;
  PrimaryKey?: Array<string>;
  RecordUpdateField?: string;
}
export type SourceTableFieldsList = Array<string>;
export interface SparkConnectorSource {
  Name: string;
  ConnectionName: string;
  ConnectorName: string;
  ConnectionType: string;
  AdditionalOptions?: Record<string, string>;
  OutputSchemas?: Array<GlueSchema>;
}
export interface SparkConnectorTarget {
  Name: string;
  Inputs: Array<string>;
  ConnectionName: string;
  ConnectorName: string;
  ConnectionType: string;
  AdditionalOptions?: Record<string, string>;
  OutputSchemas?: Array<GlueSchema>;
}
export interface SparkSQL {
  Name: string;
  Inputs: Array<string>;
  SqlQuery: string;
  SqlAliases: Array<SqlAlias>;
  OutputSchemas?: Array<GlueSchema>;
}
export interface Spigot {
  Name: string;
  Inputs: Array<string>;
  Path: string;
  Topk?: number;
  Prob?: number;
}
export interface SplitFields {
  Name: string;
  Inputs: Array<string>;
  Paths: Array<Array<string>>;
}
export interface SqlAlias {
  From: string;
  Alias: string;
}
export type SqlAliases = Array<SqlAlias>;
export type SqlQuery = string;

export interface StartBlueprintRunRequest {
  BlueprintName: string;
  Parameters?: string;
  RoleArn: string;
}
export interface StartBlueprintRunResponse {
  RunId?: string;
}
export interface StartColumnStatisticsTaskRunRequest {
  DatabaseName: string;
  TableName: string;
  ColumnNameList?: Array<string>;
  Role: string;
  SampleSize?: number;
  CatalogID?: string;
  SecurityConfiguration?: string;
}
export interface StartColumnStatisticsTaskRunResponse {
  ColumnStatisticsTaskRunId?: string;
}
export interface StartColumnStatisticsTaskRunScheduleRequest {
  DatabaseName: string;
  TableName: string;
}
export interface StartColumnStatisticsTaskRunScheduleResponse {}
export interface StartCrawlerRequest {
  Name: string;
}
export interface StartCrawlerResponse {}
export interface StartCrawlerScheduleRequest {
  CrawlerName: string;
}
export interface StartCrawlerScheduleResponse {}
export interface StartDataQualityRuleRecommendationRunRequest {
  DataSource: DataSource;
  Role: string;
  NumberOfWorkers?: number;
  Timeout?: number;
  CreatedRulesetName?: string;
  DataQualitySecurityConfiguration?: string;
  ClientToken?: string;
}
export interface StartDataQualityRuleRecommendationRunResponse {
  RunId?: string;
}
export interface StartDataQualityRulesetEvaluationRunRequest {
  DataSource: DataSource;
  Role: string;
  NumberOfWorkers?: number;
  Timeout?: number;
  ClientToken?: string;
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;
  RulesetNames: Array<string>;
  AdditionalDataSources?: Record<string, DataSource>;
}
export interface StartDataQualityRulesetEvaluationRunResponse {
  RunId?: string;
}
export interface StartExportLabelsTaskRunRequest {
  TransformId: string;
  OutputS3Path: string;
}
export interface StartExportLabelsTaskRunResponse {
  TaskRunId?: string;
}
export interface StartImportLabelsTaskRunRequest {
  TransformId: string;
  InputS3Path: string;
  ReplaceAllLabels?: boolean;
}
export interface StartImportLabelsTaskRunResponse {
  TaskRunId?: string;
}
export interface StartingEventBatchCondition {
  BatchSize?: number;
  BatchWindow?: number;
}
export type StartingPosition =
  | "LATEST"
  | "TRIM_HORIZON"
  | "EARLIEST"
  | "TIMESTAMP";
export interface StartJobRunRequest {
  JobName: string;
  JobRunQueuingEnabled?: boolean;
  JobRunId?: string;
  Arguments?: Record<string, string>;
  AllocatedCapacity?: number;
  Timeout?: number;
  MaxCapacity?: number;
  SecurityConfiguration?: string;
  NotificationProperty?: NotificationProperty;
  WorkerType?: WorkerType;
  NumberOfWorkers?: number;
  ExecutionClass?: ExecutionClass;
}
export interface StartJobRunResponse {
  JobRunId?: string;
}
export interface StartMLEvaluationTaskRunRequest {
  TransformId: string;
}
export interface StartMLEvaluationTaskRunResponse {
  TaskRunId?: string;
}
export interface StartMLLabelingSetGenerationTaskRunRequest {
  TransformId: string;
  OutputS3Path: string;
}
export interface StartMLLabelingSetGenerationTaskRunResponse {
  TaskRunId?: string;
}
export interface StartTriggerRequest {
  Name: string;
}
export interface StartTriggerResponse {
  Name?: string;
}
export interface StartWorkflowRunRequest {
  Name: string;
  RunProperties?: Record<string, string>;
}
export interface StartWorkflowRunResponse {
  RunId?: string;
}
export interface Statement {
  Id?: number;
  Code?: string;
  State?: StatementState;
  Output?: StatementOutput;
  Progress?: number;
  StartedOn?: number;
  CompletedOn?: number;
}
export type StatementList = Array<Statement>;
export interface StatementOutput {
  Data?: StatementOutputData;
  ExecutionCount?: number;
  Status?: StatementState;
  ErrorName?: string;
  ErrorValue?: string;
  Traceback?: Array<string>;
}
export interface StatementOutputData {
  TextPlain?: string;
}
export type StatementState =
  | "WAITING"
  | "RUNNING"
  | "AVAILABLE"
  | "CANCELLING"
  | "CANCELLED"
  | "ERROR";
export interface StatisticAnnotation {
  ProfileId?: string;
  StatisticId?: string;
  StatisticRecordedOn?: Date | string;
  InclusionAnnotation?: TimestampedInclusionAnnotation;
}
export type StatisticEvaluationLevel = "DATASET" | "COLUMN" | "MULTICOLUMN";
export interface StatisticModelResult {
  LowerBound?: number;
  UpperBound?: number;
  PredictedValue?: number;
  ActualValue?: number;
  Date?: Date | string;
  InclusionAnnotation?: InclusionAnnotationValue;
}
export type StatisticModelResults = Array<StatisticModelResult>;
export type StatisticNameString = string;

export type StatisticPropertiesMap = Record<string, string>;
export interface StatisticSummary {
  StatisticId?: string;
  ProfileId?: string;
  RunIdentifier?: RunIdentifier;
  StatisticName?: string;
  DoubleValue?: number;
  EvaluationLevel?: StatisticEvaluationLevel;
  ColumnsReferenced?: Array<string>;
  ReferencedDatasets?: Array<string>;
  StatisticProperties?: Record<string, string>;
  RecordedOn?: Date | string;
  InclusionAnnotation?: TimestampedInclusionAnnotation;
}
export type StatisticSummaryList = Array<StatisticSummary>;
export interface StatusDetails {
  RequestedChange?: Table;
  ViewValidations?: Array<ViewValidation>;
}
export interface StopColumnStatisticsTaskRunRequest {
  DatabaseName: string;
  TableName: string;
}
export interface StopColumnStatisticsTaskRunResponse {}
export interface StopColumnStatisticsTaskRunScheduleRequest {
  DatabaseName: string;
  TableName: string;
}
export interface StopColumnStatisticsTaskRunScheduleResponse {}
export interface StopCrawlerRequest {
  Name: string;
}
export interface StopCrawlerResponse {}
export interface StopCrawlerScheduleRequest {
  CrawlerName: string;
}
export interface StopCrawlerScheduleResponse {}
export interface StopSessionRequest {
  Id: string;
  RequestOrigin?: string;
}
export interface StopSessionResponse {
  Id?: string;
}
export interface StopTriggerRequest {
  Name: string;
}
export interface StopTriggerResponse {
  Name?: string;
}
export interface StopWorkflowRunRequest {
  Name: string;
  RunId: string;
}
export interface StopWorkflowRunResponse {}
export interface StorageDescriptor {
  Columns?: Array<Column>;
  Location?: string;
  AdditionalLocations?: Array<string>;
  InputFormat?: string;
  OutputFormat?: string;
  Compressed?: boolean;
  NumberOfBuckets?: number;
  SerdeInfo?: SerDeInfo;
  BucketColumns?: Array<string>;
  SortColumns?: Array<Order>;
  Parameters?: Record<string, string>;
  SkewedInfo?: SkewedInfo;
  StoredAsSubDirectories?: boolean;
  SchemaReference?: SchemaReference;
}
export interface StreamingDataPreviewOptions {
  PollingTime?: number;
  RecordPollingLimit?: number;
}
export type String128 = string;

export type String2048 = string;

export interface StringColumnStatisticsData {
  MaximumLength: number;
  AverageLength: number;
  NumberOfNulls: number;
  NumberOfDistinctValues: number;
}
export type StringList = Array<string>;
export type StringToStringMap = Record<string, string>;
export interface SupportedDialect {
  Dialect?: ViewDialect;
  DialectVersion?: string;
}
export interface Table {
  Name: string;
  DatabaseName?: string;
  Description?: string;
  Owner?: string;
  CreateTime?: Date | string;
  UpdateTime?: Date | string;
  LastAccessTime?: Date | string;
  LastAnalyzedTime?: Date | string;
  Retention?: number;
  StorageDescriptor?: StorageDescriptor;
  PartitionKeys?: Array<Column>;
  ViewOriginalText?: string;
  ViewExpandedText?: string;
  TableType?: string;
  Parameters?: Record<string, string>;
  CreatedBy?: string;
  IsRegisteredWithLakeFormation?: boolean;
  TargetTable?: TableIdentifier;
  CatalogId?: string;
  VersionId?: string;
  FederatedTable?: FederatedTable;
  ViewDefinition?: ViewDefinition;
  IsMultiDialectView?: boolean;
  Status?: TableStatus;
}
export type TableAttributes = "NAME" | "TABLE_TYPE";
export type TableAttributesList = Array<TableAttributes>;
export interface TableError {
  TableName?: string;
  ErrorDetail?: ErrorDetail;
}
export type TableErrors = Array<TableError>;
export interface TableIdentifier {
  CatalogId?: string;
  DatabaseName?: string;
  Name?: string;
  Region?: string;
}
export interface TableInput {
  Name: string;
  Description?: string;
  Owner?: string;
  LastAccessTime?: Date | string;
  LastAnalyzedTime?: Date | string;
  Retention?: number;
  StorageDescriptor?: StorageDescriptor;
  PartitionKeys?: Array<Column>;
  ViewOriginalText?: string;
  ViewExpandedText?: string;
  TableType?: string;
  Parameters?: Record<string, string>;
  TargetTable?: TableIdentifier;
  ViewDefinition?: ViewDefinitionInput;
}
export type TableList = Array<Table>;
export type TableName = string;

export type tableNameString = string;

export interface TableOptimizer {
  type?: TableOptimizerType;
  configuration?: TableOptimizerConfiguration;
  lastRun?: TableOptimizerRun;
}
export interface TableOptimizerConfiguration {
  roleArn?: string;
  enabled?: boolean;
  vpcConfiguration?: TableOptimizerVpcConfiguration;
  compactionConfiguration?: CompactionConfiguration;
  retentionConfiguration?: RetentionConfiguration;
  orphanFileDeletionConfiguration?: OrphanFileDeletionConfiguration;
}
export type TableOptimizerEventType =
  | "STARTING"
  | "COMPLETED"
  | "FAILED"
  | "IN_PROGRESS";
export interface TableOptimizerRun {
  eventType?: TableOptimizerEventType;
  startTimestamp?: Date | string;
  endTimestamp?: Date | string;
  metrics?: RunMetrics;
  error?: string;
  compactionMetrics?: CompactionMetrics;
  compactionStrategy?: CompactionStrategy;
  retentionMetrics?: RetentionMetrics;
  orphanFileDeletionMetrics?: OrphanFileDeletionMetrics;
}
export type TableOptimizerRuns = Array<TableOptimizerRun>;
export type TableOptimizerRunTimestamp = Date | string;

export type TableOptimizerType =
  | "COMPACTION"
  | "RETENTION"
  | "ORPHAN_FILE_DELETION";
export type TableOptimizerVpcConfiguration = { glueConnectionName: string };
export type TablePrefix = string;

export interface TableStatus {
  RequestedBy?: string;
  UpdatedBy?: string;
  RequestTime?: Date | string;
  UpdateTime?: Date | string;
  Action?: ResourceAction;
  State?: ResourceState;
  Error?: ErrorDetail;
  Details?: StatusDetails;
}
export type TableTypeString = string;

export interface TableVersion {
  Table?: Table;
  VersionId?: string;
}
export interface TableVersionError {
  TableName?: string;
  VersionId?: string;
  ErrorDetail?: ErrorDetail;
}
export type TableVersionErrors = Array<TableVersionError>;
export interface Tag {
  key?: string;
  value?: string;
}
export type TagKey = string;

export type TagKeysList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  TagsToAdd: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagsMap = Record<string, string>;
export type TagValue = string;

export type TargetColumn = string;

export type TargetFormat =
  | "JSON"
  | "CSV"
  | "AVRO"
  | "ORC"
  | "PARQUET"
  | "HUDI"
  | "DELTA"
  | "ICEBERG"
  | "HYPER"
  | "XML";
export interface TargetProcessingProperties {
  RoleArn?: string;
  KmsArn?: string;
  ConnectionName?: string;
  EventBusArn?: string;
}
export interface TargetRedshiftCatalog {
  CatalogArn: string;
}
export declare class TargetResourceNotFound extends EffectData.TaggedError(
  "TargetResourceNotFound",
)<{
  readonly Message?: string;
}> {}
export interface TargetTableConfig {
  UnnestSpec?: UnnestSpec;
  PartitionSpec?: Array<IntegrationPartition>;
  TargetTableName?: string;
}
export interface TaskRun {
  TransformId?: string;
  TaskRunId?: string;
  Status?: TaskStatusType;
  LogGroupName?: string;
  Properties?: TaskRunProperties;
  ErrorString?: string;
  StartedOn?: Date | string;
  LastModifiedOn?: Date | string;
  CompletedOn?: Date | string;
  ExecutionTime?: number;
}
export interface TaskRunFilterCriteria {
  TaskRunType?: TaskType;
  Status?: TaskStatusType;
  StartedBefore?: Date | string;
  StartedAfter?: Date | string;
}
export type TaskRunList = Array<TaskRun>;
export interface TaskRunProperties {
  TaskType?: TaskType;
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
}
export type TaskRunSortColumnType = "TASK_RUN_TYPE" | "STATUS" | "STARTED";
export interface TaskRunSortCriteria {
  Column: TaskRunSortColumnType;
  SortDirection: SortDirectionType;
}
export type TaskStatusType =
  | "STARTING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMEOUT";
export type TaskType =
  | "EVALUATION"
  | "LABELING_SET_GENERATION"
  | "IMPORT_LABELS"
  | "EXPORT_LABELS"
  | "FIND_MATCHES";
export interface TestConnectionInput {
  ConnectionType: ConnectionType;
  ConnectionProperties: Record<ConnectionPropertyKey, string>;
  AuthenticationConfiguration?: AuthenticationConfigurationInput;
}
export interface TestConnectionRequest {
  ConnectionName?: string;
  CatalogId?: string;
  TestConnectionInput?: TestConnectionInput;
}
export interface TestConnectionResponse {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Timeout = number;

export type Timestamp = Date | string;

export interface TimestampedInclusionAnnotation {
  Value?: InclusionAnnotationValue;
  LastModifiedOn?: Date | string;
}
export interface TimestampFilter {
  RecordedBefore?: Date | string;
  RecordedAfter?: Date | string;
}
export type TimestampValue = Date | string;

export type Token = string;

export type TokenUrl = string;

export type TokenUrlParameterKey = string;

export type TokenUrlParametersMap = Record<string, string>;
export type TokenUrlParameterValue = string;

export type Topk = number;

export type TotalSegmentsInteger = number;

export type TransactionIdString = string;

export interface TransformConfigParameter {
  Name: string;
  Type: ParamType;
  ValidationRule?: string;
  ValidationMessage?: string;
  Value?: Array<string>;
  ListType?: ParamType;
  IsOptional?: boolean;
}
export type TransformConfigParameterList = Array<TransformConfigParameter>;
export interface TransformEncryption {
  MlUserDataEncryption?: MLUserDataEncryption;
  TaskRunSecurityConfigurationName?: string;
}
export interface TransformFilterCriteria {
  Name?: string;
  TransformType?: TransformType;
  Status?: TransformStatusType;
  GlueVersion?: string;
  CreatedBefore?: Date | string;
  CreatedAfter?: Date | string;
  LastModifiedBefore?: Date | string;
  LastModifiedAfter?: Date | string;
  Schema?: Array<SchemaColumn>;
}
export type TransformIdList = Array<string>;
export type TransformList = Array<MLTransform>;
export interface TransformParameters {
  TransformType: TransformType;
  FindMatchesParameters?: FindMatchesParameters;
}
export type TransformSchema = Array<SchemaColumn>;
export type TransformSortColumnType =
  | "NAME"
  | "TRANSFORM_TYPE"
  | "STATUS"
  | "CREATED"
  | "LAST_MODIFIED";
export interface TransformSortCriteria {
  Column: TransformSortColumnType;
  SortDirection: SortDirectionType;
}
export type TransformStatusType = "NOT_READY" | "READY" | "DELETING";
export type TransformType = "FIND_MATCHES";
export interface Trigger {
  Name?: string;
  WorkflowName?: string;
  Id?: string;
  Type?: TriggerType;
  State?: TriggerState;
  Description?: string;
  Schedule?: string;
  Actions?: Array<Action>;
  Predicate?: Predicate;
  EventBatchingCondition?: EventBatchingCondition;
}
export type TriggerList = Array<Trigger>;
export type TriggerNameList = Array<string>;
export interface TriggerNodeDetails {
  Trigger?: Trigger;
}
export type TriggerState =
  | "CREATING"
  | "CREATED"
  | "ACTIVATING"
  | "ACTIVATED"
  | "DEACTIVATING"
  | "DEACTIVATED"
  | "DELETING"
  | "UPDATING";
export type TriggerType = "SCHEDULED" | "CONDITIONAL" | "ON_DEMAND" | "EVENT";
export interface TriggerUpdate {
  Name?: string;
  Description?: string;
  Schedule?: string;
  Actions?: Array<Action>;
  Predicate?: Predicate;
  EventBatchingCondition?: EventBatchingCondition;
}
export type TwoInputs = Array<string>;
export type TypeString = string;

export interface UnfilteredPartition {
  Partition?: Partition;
  AuthorizedColumns?: Array<string>;
  IsRegisteredWithLakeFormation?: boolean;
}
export type UnfilteredPartitionList = Array<UnfilteredPartition>;
export interface Union {
  Name: string;
  Inputs: Array<string>;
  UnionType: UnionType;
}
export type UnionType = "ALL" | "DISTINCT";
export type UnnestSpec = "TOPLEVEL" | "FULL" | "NOUNNEST";
export interface UntagResourceRequest {
  ResourceArn: string;
  TagsToRemove: Array<string>;
}
export interface UntagResourceResponse {}
export type UpdateBehavior = "LOG" | "UPDATE_IN_DATABASE";
export interface UpdateBlueprintRequest {
  Name: string;
  Description?: string;
  BlueprintLocation: string;
}
export interface UpdateBlueprintResponse {
  Name?: string;
}
export type UpdateCatalogBehavior = "UPDATE_IN_DATABASE" | "LOG";
export interface UpdateCatalogRequest {
  CatalogId: string;
  CatalogInput: CatalogInput;
}
export interface UpdateCatalogResponse {}
export interface UpdateClassifierRequest {
  GrokClassifier?: UpdateGrokClassifierRequest;
  XMLClassifier?: UpdateXMLClassifierRequest;
  JsonClassifier?: UpdateJsonClassifierRequest;
  CsvClassifier?: UpdateCsvClassifierRequest;
}
export interface UpdateClassifierResponse {}
export interface UpdateColumnStatisticsForPartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionValues: Array<string>;
  ColumnStatisticsList: Array<ColumnStatistics>;
}
export interface UpdateColumnStatisticsForPartitionResponse {
  Errors?: Array<ColumnStatisticsError>;
}
export interface UpdateColumnStatisticsForTableRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  ColumnStatisticsList: Array<ColumnStatistics>;
}
export interface UpdateColumnStatisticsForTableResponse {
  Errors?: Array<ColumnStatisticsError>;
}
export type UpdateColumnStatisticsList = Array<ColumnStatistics>;
export interface UpdateColumnStatisticsTaskSettingsRequest {
  DatabaseName: string;
  TableName: string;
  Role?: string;
  Schedule?: string;
  ColumnNameList?: Array<string>;
  SampleSize?: number;
  CatalogID?: string;
  SecurityConfiguration?: string;
}
export interface UpdateColumnStatisticsTaskSettingsResponse {}
export interface UpdateConnectionRequest {
  CatalogId?: string;
  Name: string;
  ConnectionInput: ConnectionInput;
}
export interface UpdateConnectionResponse {}
export interface UpdateCrawlerRequest {
  Name: string;
  Role?: string;
  DatabaseName?: string;
  Description?: string;
  Targets?: CrawlerTargets;
  Schedule?: string;
  Classifiers?: Array<string>;
  TablePrefix?: string;
  SchemaChangePolicy?: SchemaChangePolicy;
  RecrawlPolicy?: RecrawlPolicy;
  LineageConfiguration?: LineageConfiguration;
  LakeFormationConfiguration?: LakeFormationConfiguration;
  Configuration?: string;
  CrawlerSecurityConfiguration?: string;
}
export interface UpdateCrawlerResponse {}
export interface UpdateCrawlerScheduleRequest {
  CrawlerName: string;
  Schedule?: string;
}
export interface UpdateCrawlerScheduleResponse {}
export interface UpdateCsvClassifierRequest {
  Name: string;
  Delimiter?: string;
  QuoteSymbol?: string;
  ContainsHeader?: CsvHeaderOption;
  Header?: Array<string>;
  DisableValueTrimming?: boolean;
  AllowSingleColumn?: boolean;
  CustomDatatypeConfigured?: boolean;
  CustomDatatypes?: Array<string>;
  Serde?: CsvSerdeOption;
}
export interface UpdateDatabaseRequest {
  CatalogId?: string;
  Name: string;
  DatabaseInput: DatabaseInput;
}
export interface UpdateDatabaseResponse {}
export interface UpdateDataQualityRulesetRequest {
  Name: string;
  Description?: string;
  Ruleset?: string;
}
export interface UpdateDataQualityRulesetResponse {
  Name?: string;
  Description?: string;
  Ruleset?: string;
}
export interface UpdateDevEndpointRequest {
  EndpointName: string;
  PublicKey?: string;
  AddPublicKeys?: Array<string>;
  DeletePublicKeys?: Array<string>;
  CustomLibraries?: DevEndpointCustomLibraries;
  UpdateEtlLibraries?: boolean;
  DeleteArguments?: Array<string>;
  AddArguments?: Record<string, string>;
}
export interface UpdateDevEndpointResponse {}
export type UpdatedTimestamp = string;

export interface UpdateGrokClassifierRequest {
  Name: string;
  Classification?: string;
  GrokPattern?: string;
  CustomPatterns?: string;
}
export interface UpdateIcebergInput {
  UpdateIcebergTableInput: UpdateIcebergTableInput;
}
export interface UpdateIcebergTableInput {
  Updates: Array<IcebergTableUpdate>;
}
export interface UpdateIntegrationResourcePropertyRequest {
  ResourceArn: string;
  SourceProcessingProperties?: SourceProcessingProperties;
  TargetProcessingProperties?: TargetProcessingProperties;
}
export interface UpdateIntegrationResourcePropertyResponse {
  ResourceArn?: string;
  SourceProcessingProperties?: SourceProcessingProperties;
  TargetProcessingProperties?: TargetProcessingProperties;
}
export interface UpdateIntegrationTablePropertiesRequest {
  ResourceArn: string;
  TableName: string;
  SourceTableConfig?: SourceTableConfig;
  TargetTableConfig?: TargetTableConfig;
}
export interface UpdateIntegrationTablePropertiesResponse {}
export interface UpdateJobFromSourceControlRequest {
  JobName?: string;
  Provider?: SourceControlProvider;
  RepositoryName?: string;
  RepositoryOwner?: string;
  BranchName?: string;
  Folder?: string;
  CommitId?: string;
  AuthStrategy?: SourceControlAuthStrategy;
  AuthToken?: string;
}
export interface UpdateJobFromSourceControlResponse {
  JobName?: string;
}
export interface UpdateJobRequest {
  JobName: string;
  JobUpdate: JobUpdate;
}
export interface UpdateJobResponse {
  JobName?: string;
}
export interface UpdateJsonClassifierRequest {
  Name: string;
  JsonPath?: string;
}
export interface UpdateMLTransformRequest {
  TransformId: string;
  Name?: string;
  Description?: string;
  Parameters?: TransformParameters;
  Role?: string;
  GlueVersion?: string;
  MaxCapacity?: number;
  WorkerType?: WorkerType;
  NumberOfWorkers?: number;
  Timeout?: number;
  MaxRetries?: number;
}
export interface UpdateMLTransformResponse {
  TransformId?: string;
}
export interface UpdateOpenTableFormatInput {
  UpdateIcebergInput?: UpdateIcebergInput;
}
export interface UpdatePartitionRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  PartitionValueList: Array<string>;
  PartitionInput: PartitionInput;
}
export interface UpdatePartitionResponse {}
export interface UpdateRegistryInput {
  RegistryId: RegistryId;
  Description: string;
}
export interface UpdateRegistryResponse {
  RegistryName?: string;
  RegistryArn?: string;
}
export interface UpdateSchemaInput {
  SchemaId: SchemaId;
  SchemaVersionNumber?: SchemaVersionNumber;
  Compatibility?: Compatibility;
  Description?: string;
}
export interface UpdateSchemaResponse {
  SchemaArn?: string;
  SchemaName?: string;
  RegistryName?: string;
}
export interface UpdateSourceControlFromJobRequest {
  JobName?: string;
  Provider?: SourceControlProvider;
  RepositoryName?: string;
  RepositoryOwner?: string;
  BranchName?: string;
  Folder?: string;
  CommitId?: string;
  AuthStrategy?: SourceControlAuthStrategy;
  AuthToken?: string;
}
export interface UpdateSourceControlFromJobResponse {
  JobName?: string;
}
export interface UpdateTableOptimizerRequest {
  CatalogId: string;
  DatabaseName: string;
  TableName: string;
  Type: TableOptimizerType;
  TableOptimizerConfiguration: TableOptimizerConfiguration;
}
export interface UpdateTableOptimizerResponse {}
export interface UpdateTableRequest {
  CatalogId?: string;
  DatabaseName: string;
  Name?: string;
  TableInput?: TableInput;
  SkipArchive?: boolean;
  TransactionId?: string;
  VersionId?: string;
  ViewUpdateAction?: ViewUpdateAction;
  Force?: boolean;
  UpdateOpenTableFormatInput?: UpdateOpenTableFormatInput;
}
export interface UpdateTableResponse {}
export interface UpdateTriggerRequest {
  Name: string;
  TriggerUpdate: TriggerUpdate;
}
export interface UpdateTriggerResponse {
  Trigger?: Trigger;
}
export interface UpdateUsageProfileRequest {
  Name: string;
  Description?: string;
  Configuration: ProfileConfiguration;
}
export interface UpdateUsageProfileResponse {
  Name?: string;
}
export interface UpdateUserDefinedFunctionRequest {
  CatalogId?: string;
  DatabaseName: string;
  FunctionName: string;
  FunctionInput: UserDefinedFunctionInput;
}
export interface UpdateUserDefinedFunctionResponse {}
export interface UpdateWorkflowRequest {
  Name: string;
  Description?: string;
  DefaultRunProperties?: Record<string, string>;
  MaxConcurrentRuns?: number;
}
export interface UpdateWorkflowResponse {
  Name?: string;
}
export interface UpdateXMLClassifierRequest {
  Name: string;
  Classification?: string;
  RowTag?: string;
}
export interface UpsertRedshiftTargetOptions {
  TableLocation?: string;
  ConnectionName?: string;
  UpsertKeys?: Array<string>;
}
export type URI = string;

export type UriString = string;

export type UrlString = string;

export interface UsageProfileDefinition {
  Name?: string;
  Description?: string;
  CreatedOn?: Date | string;
  LastModifiedOn?: Date | string;
}
export type UsageProfileDefinitionList = Array<UsageProfileDefinition>;
export interface UserDefinedFunction {
  FunctionName?: string;
  DatabaseName?: string;
  ClassName?: string;
  OwnerName?: string;
  OwnerType?: PrincipalType;
  CreateTime?: Date | string;
  ResourceUris?: Array<ResourceUri>;
  CatalogId?: string;
}
export interface UserDefinedFunctionInput {
  FunctionName?: string;
  ClassName?: string;
  OwnerName?: string;
  OwnerType?: PrincipalType;
  ResourceUris?: Array<ResourceUri>;
}
export type UserDefinedFunctionList = Array<UserDefinedFunction>;
export type UserManagedClientApplicationClientId = string;

export type UserManagedClientApplicationClientSecret = string;

export type Username = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type ValueString = string;

export type ValueStringList = Array<string>;
export type Vendor = string;

export type VersionId = number;

export type VersionLongNumber = number;

export declare class VersionMismatchException extends EffectData.TaggedError(
  "VersionMismatchException",
)<{
  readonly Message?: string;
}> {}
export type VersionsString = string;

export type VersionString = string;

export interface ViewDefinition {
  IsProtected?: boolean;
  Definer?: string;
  SubObjects?: Array<string>;
  Representations?: Array<ViewRepresentation>;
}
export interface ViewDefinitionInput {
  IsProtected?: boolean;
  Definer?: string;
  Representations?: Array<ViewRepresentationInput>;
  SubObjects?: Array<string>;
}
export type ViewDialect = "REDSHIFT" | "ATHENA" | "SPARK";
export type ViewDialectVersionString = string;

export interface ViewRepresentation {
  Dialect?: ViewDialect;
  DialectVersion?: string;
  ViewOriginalText?: string;
  ViewExpandedText?: string;
  ValidationConnection?: string;
  IsStale?: boolean;
}
export interface ViewRepresentationInput {
  Dialect?: ViewDialect;
  DialectVersion?: string;
  ViewOriginalText?: string;
  ValidationConnection?: string;
  ViewExpandedText?: string;
}
export type ViewRepresentationInputList = Array<ViewRepresentationInput>;
export type ViewRepresentationList = Array<ViewRepresentation>;
export type ViewSubObjectsList = Array<string>;
export type ViewTextString = string;

export type ViewUpdateAction = "ADD" | "REPLACE" | "ADD_OR_REPLACE" | "DROP";
export interface ViewValidation {
  Dialect?: ViewDialect;
  DialectVersion?: string;
  ViewValidationText?: string;
  UpdateTime?: Date | string;
  State?: ResourceState;
  Error?: ErrorDetail;
}
export type ViewValidationList = Array<ViewValidation>;
export type WorkerType =
  | "Standard"
  | "G_1X"
  | "G_2X"
  | "G_025X"
  | "G_4X"
  | "G_8X"
  | "Z_2X";
export interface Workflow {
  Name?: string;
  Description?: string;
  DefaultRunProperties?: Record<string, string>;
  CreatedOn?: Date | string;
  LastModifiedOn?: Date | string;
  LastRun?: WorkflowRun;
  Graph?: WorkflowGraph;
  MaxConcurrentRuns?: number;
  BlueprintDetails?: BlueprintDetails;
}
export type WorkflowDescriptionString = string;

export interface WorkflowGraph {
  Nodes?: Array<Node>;
  Edges?: Array<Edge>;
}
export type WorkflowNames = Array<string>;
export interface WorkflowRun {
  Name?: string;
  WorkflowRunId?: string;
  PreviousRunId?: string;
  WorkflowRunProperties?: Record<string, string>;
  StartedOn?: Date | string;
  CompletedOn?: Date | string;
  Status?: WorkflowRunStatus;
  ErrorMessage?: string;
  Statistics?: WorkflowRunStatistics;
  Graph?: WorkflowGraph;
  StartingEventBatchCondition?: StartingEventBatchCondition;
}
export type WorkflowRunProperties = Record<string, string>;
export type WorkflowRuns = Array<WorkflowRun>;
export interface WorkflowRunStatistics {
  TotalActions?: number;
  TimeoutActions?: number;
  FailedActions?: number;
  StoppedActions?: number;
  SucceededActions?: number;
  RunningActions?: number;
  ErroredActions?: number;
  WaitingActions?: number;
}
export type WorkflowRunStatus =
  | "RUNNING"
  | "COMPLETED"
  | "STOPPING"
  | "STOPPED"
  | "ERROR";
export type Workflows = Array<Workflow>;
export interface XMLClassifier {
  Name: string;
  Classification: string;
  CreationTime?: Date | string;
  LastUpdated?: Date | string;
  Version?: number;
  RowTag?: string;
}
export declare namespace BatchCreatePartition {
  export type Input = BatchCreatePartitionRequest;
  export type Output = BatchCreatePartitionResponse;
  export type Error =
    | AlreadyExistsException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace BatchDeleteConnection {
  export type Input = BatchDeleteConnectionRequest;
  export type Output = BatchDeleteConnectionResponse;
  export type Error =
    | InternalServiceException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchDeletePartition {
  export type Input = BatchDeletePartitionRequest;
  export type Output = BatchDeletePartitionResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchDeleteTable {
  export type Input = BatchDeleteTableRequest;
  export type Output = BatchDeleteTableResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | CommonAwsError;
}

export declare namespace BatchDeleteTableVersion {
  export type Input = BatchDeleteTableVersionRequest;
  export type Output = BatchDeleteTableVersionResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGetBlueprints {
  export type Input = BatchGetBlueprintsRequest;
  export type Output = BatchGetBlueprintsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGetCrawlers {
  export type Input = BatchGetCrawlersRequest;
  export type Output = BatchGetCrawlersResponse;
  export type Error =
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGetCustomEntityTypes {
  export type Input = BatchGetCustomEntityTypesRequest;
  export type Output = BatchGetCustomEntityTypesResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGetDataQualityResult {
  export type Input = BatchGetDataQualityResultRequest;
  export type Output = BatchGetDataQualityResultResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGetDevEndpoints {
  export type Input = BatchGetDevEndpointsRequest;
  export type Output = BatchGetDevEndpointsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGetJobs {
  export type Input = BatchGetJobsRequest;
  export type Output = BatchGetJobsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGetPartition {
  export type Input = BatchGetPartitionRequest;
  export type Output = BatchGetPartitionResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | InvalidStateException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGetTableOptimizer {
  export type Input = BatchGetTableOptimizerRequest;
  export type Output = BatchGetTableOptimizerResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchGetTriggers {
  export type Input = BatchGetTriggersRequest;
  export type Output = BatchGetTriggersResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGetWorkflows {
  export type Input = BatchGetWorkflowsRequest;
  export type Output = BatchGetWorkflowsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchPutDataQualityStatisticAnnotation {
  export type Input = BatchPutDataQualityStatisticAnnotationRequest;
  export type Output = BatchPutDataQualityStatisticAnnotationResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace BatchStopJobRun {
  export type Input = BatchStopJobRunRequest;
  export type Output = BatchStopJobRunResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchUpdatePartition {
  export type Input = BatchUpdatePartitionRequest;
  export type Output = BatchUpdatePartitionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace CancelDataQualityRuleRecommendationRun {
  export type Input = CancelDataQualityRuleRecommendationRunRequest;
  export type Output = CancelDataQualityRuleRecommendationRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace CancelDataQualityRulesetEvaluationRun {
  export type Input = CancelDataQualityRulesetEvaluationRunRequest;
  export type Output = CancelDataQualityRulesetEvaluationRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace CancelMLTaskRun {
  export type Input = CancelMLTaskRunRequest;
  export type Output = CancelMLTaskRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace CancelStatement {
  export type Input = CancelStatementRequest;
  export type Output = CancelStatementResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace CheckSchemaVersionValidity {
  export type Input = CheckSchemaVersionValidityInput;
  export type Output = CheckSchemaVersionValidityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace CreateBlueprint {
  export type Input = CreateBlueprintRequest;
  export type Output = CreateBlueprintResponse;
  export type Error =
    | AlreadyExistsException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateCatalog {
  export type Input = CreateCatalogRequest;
  export type Output = CreateCatalogResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederatedResourceAlreadyExistsException
    | FederationSourceException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateClassifier {
  export type Input = CreateClassifierRequest;
  export type Output = CreateClassifierResponse;
  export type Error =
    | AlreadyExistsException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace CreateColumnStatisticsTaskSettings {
  export type Input = CreateColumnStatisticsTaskSettingsRequest;
  export type Output = CreateColumnStatisticsTaskSettingsResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | ColumnStatisticsTaskRunningException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateConnection {
  export type Input = CreateConnectionRequest;
  export type Output = CreateConnectionResponse;
  export type Error =
    | AlreadyExistsException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateCrawler {
  export type Input = CreateCrawlerRequest;
  export type Output = CreateCrawlerResponse;
  export type Error =
    | AlreadyExistsException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateCustomEntityType {
  export type Input = CreateCustomEntityTypeRequest;
  export type Output = CreateCustomEntityTypeResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateDatabase {
  export type Input = CreateDatabaseRequest;
  export type Output = CreateDatabaseResponse;
  export type Error =
    | AlreadyExistsException
    | ConcurrentModificationException
    | FederatedResourceAlreadyExistsException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateDataQualityRuleset {
  export type Input = CreateDataQualityRulesetRequest;
  export type Output = CreateDataQualityRulesetResponse;
  export type Error =
    | AlreadyExistsException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateDevEndpoint {
  export type Input = CreateDevEndpointRequest;
  export type Output = CreateDevEndpointResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIntegration {
  export type Input = CreateIntegrationRequest;
  export type Output = CreateIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | IntegrationConflictOperationFault
    | IntegrationQuotaExceededFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundException
    | ResourceNumberLimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIntegrationResourceProperty {
  export type Input = CreateIntegrationResourcePropertyRequest;
  export type Output = CreateIntegrationResourcePropertyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIntegrationTableProperties {
  export type Input = CreateIntegrationTablePropertiesRequest;
  export type Output = CreateIntegrationTablePropertiesResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateJob {
  export type Input = CreateJobRequest;
  export type Output = CreateJobResponse;
  export type Error =
    | AlreadyExistsException
    | ConcurrentModificationException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateMLTransform {
  export type Input = CreateMLTransformRequest;
  export type Output = CreateMLTransformResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreatePartition {
  export type Input = CreatePartitionRequest;
  export type Output = CreatePartitionResponse;
  export type Error =
    | AlreadyExistsException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreatePartitionIndex {
  export type Input = CreatePartitionIndexRequest;
  export type Output = CreatePartitionIndexResponse;
  export type Error =
    | AlreadyExistsException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateRegistry {
  export type Input = CreateRegistryInput;
  export type Output = CreateRegistryResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | ConcurrentModificationException
    | InternalServiceException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateSchema {
  export type Input = CreateSchemaInput;
  export type Output = CreateSchemaResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateScript {
  export type Input = CreateScriptRequest;
  export type Output = CreateScriptResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace CreateSecurityConfiguration {
  export type Input = CreateSecurityConfigurationRequest;
  export type Output = CreateSecurityConfigurationResponse;
  export type Error =
    | AlreadyExistsException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateSession {
  export type Input = CreateSessionRequest;
  export type Output = CreateSessionResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTable {
  export type Input = CreateTableRequest;
  export type Output = CreateTableResponse;
  export type Error =
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateTableOptimizer {
  export type Input = CreateTableOptimizerRequest;
  export type Output = CreateTableOptimizerResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTrigger {
  export type Input = CreateTriggerRequest;
  export type Output = CreateTriggerResponse;
  export type Error =
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateUsageProfile {
  export type Input = CreateUsageProfileRequest;
  export type Output = CreateUsageProfileResponse;
  export type Error =
    | AlreadyExistsException
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateUserDefinedFunction {
  export type Input = CreateUserDefinedFunctionRequest;
  export type Output = CreateUserDefinedFunctionResponse;
  export type Error =
    | AlreadyExistsException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateWorkflow {
  export type Input = CreateWorkflowRequest;
  export type Output = CreateWorkflowResponse;
  export type Error =
    | AlreadyExistsException
    | ConcurrentModificationException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteBlueprint {
  export type Input = DeleteBlueprintRequest;
  export type Output = DeleteBlueprintResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteCatalog {
  export type Input = DeleteCatalogRequest;
  export type Output = DeleteCatalogResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteClassifier {
  export type Input = DeleteClassifierRequest;
  export type Output = DeleteClassifierResponse;
  export type Error =
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteColumnStatisticsForPartition {
  export type Input = DeleteColumnStatisticsForPartitionRequest;
  export type Output = DeleteColumnStatisticsForPartitionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteColumnStatisticsForTable {
  export type Input = DeleteColumnStatisticsForTableRequest;
  export type Output = DeleteColumnStatisticsForTableResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteColumnStatisticsTaskSettings {
  export type Input = DeleteColumnStatisticsTaskSettingsRequest;
  export type Output = DeleteColumnStatisticsTaskSettingsResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteConnection {
  export type Input = DeleteConnectionRequest;
  export type Output = DeleteConnectionResponse;
  export type Error =
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteCrawler {
  export type Input = DeleteCrawlerRequest;
  export type Output = DeleteCrawlerResponse;
  export type Error =
    | CrawlerRunningException
    | EntityNotFoundException
    | OperationTimeoutException
    | SchedulerTransitioningException
    | CommonAwsError;
}

export declare namespace DeleteCustomEntityType {
  export type Input = DeleteCustomEntityTypeRequest;
  export type Output = DeleteCustomEntityTypeResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteDatabase {
  export type Input = DeleteDatabaseRequest;
  export type Output = DeleteDatabaseResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteDataQualityRuleset {
  export type Input = DeleteDataQualityRulesetRequest;
  export type Output = DeleteDataQualityRulesetResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteDevEndpoint {
  export type Input = DeleteDevEndpointRequest;
  export type Output = DeleteDevEndpointResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteIntegration {
  export type Input = DeleteIntegrationRequest;
  export type Output = DeleteIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | InvalidIntegrationStateFault
    | InvalidStateException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIntegrationTableProperties {
  export type Input = DeleteIntegrationTablePropertiesRequest;
  export type Output = DeleteIntegrationTablePropertiesResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteJob {
  export type Input = DeleteJobRequest;
  export type Output = DeleteJobResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteMLTransform {
  export type Input = DeleteMLTransformRequest;
  export type Output = DeleteMLTransformResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeletePartition {
  export type Input = DeletePartitionRequest;
  export type Output = DeletePartitionResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeletePartitionIndex {
  export type Input = DeletePartitionIndexRequest;
  export type Output = DeletePartitionIndexResponse;
  export type Error =
    | ConflictException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteRegistry {
  export type Input = DeleteRegistryInput;
  export type Output = DeleteRegistryResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | ConditionCheckFailureException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteSchema {
  export type Input = DeleteSchemaInput;
  export type Output = DeleteSchemaResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DeleteSchemaVersions {
  export type Input = DeleteSchemaVersionsInput;
  export type Output = DeleteSchemaVersionsResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DeleteSecurityConfiguration {
  export type Input = DeleteSecurityConfigurationRequest;
  export type Output = DeleteSecurityConfigurationResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteSession {
  export type Input = DeleteSessionRequest;
  export type Output = DeleteSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteTable {
  export type Input = DeleteTableRequest;
  export type Output = DeleteTableResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | CommonAwsError;
}

export declare namespace DeleteTableOptimizer {
  export type Input = DeleteTableOptimizerRequest;
  export type Output = DeleteTableOptimizerResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteTableVersion {
  export type Input = DeleteTableVersionRequest;
  export type Output = DeleteTableVersionResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteTrigger {
  export type Input = DeleteTriggerRequest;
  export type Output = DeleteTriggerResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteUsageProfile {
  export type Input = DeleteUsageProfileRequest;
  export type Output = DeleteUsageProfileResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteUserDefinedFunction {
  export type Input = DeleteUserDefinedFunctionRequest;
  export type Output = DeleteUserDefinedFunctionResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteWorkflow {
  export type Input = DeleteWorkflowRequest;
  export type Output = DeleteWorkflowResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DescribeConnectionType {
  export type Input = DescribeConnectionTypeRequest;
  export type Output = DescribeConnectionTypeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeEntity {
  export type Input = DescribeEntityRequest;
  export type Output = DescribeEntityResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeInboundIntegrations {
  export type Input = DescribeInboundIntegrationsRequest;
  export type Output = DescribeInboundIntegrationsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | IntegrationNotFoundFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | TargetResourceNotFound
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeIntegrations {
  export type Input = DescribeIntegrationsRequest;
  export type Output = DescribeIntegrationsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | IntegrationNotFoundFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBlueprint {
  export type Input = GetBlueprintRequest;
  export type Output = GetBlueprintResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetBlueprintRun {
  export type Input = GetBlueprintRunRequest;
  export type Output = GetBlueprintRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetBlueprintRuns {
  export type Input = GetBlueprintRunsRequest;
  export type Output = GetBlueprintRunsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetCatalog {
  export type Input = GetCatalogRequest;
  export type Output = GetCatalogResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetCatalogImportStatus {
  export type Input = GetCatalogImportStatusRequest;
  export type Output = GetCatalogImportStatusResponse;
  export type Error =
    | InternalServiceException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetCatalogs {
  export type Input = GetCatalogsRequest;
  export type Output = GetCatalogsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetClassifier {
  export type Input = GetClassifierRequest;
  export type Output = GetClassifierResponse;
  export type Error =
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetClassifiers {
  export type Input = GetClassifiersRequest;
  export type Output = GetClassifiersResponse;
  export type Error = OperationTimeoutException | CommonAwsError;
}

export declare namespace GetColumnStatisticsForPartition {
  export type Input = GetColumnStatisticsForPartitionRequest;
  export type Output = GetColumnStatisticsForPartitionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetColumnStatisticsForTable {
  export type Input = GetColumnStatisticsForTableRequest;
  export type Output = GetColumnStatisticsForTableResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetColumnStatisticsTaskRun {
  export type Input = GetColumnStatisticsTaskRunRequest;
  export type Output = GetColumnStatisticsTaskRunResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetColumnStatisticsTaskRuns {
  export type Input = GetColumnStatisticsTaskRunsRequest;
  export type Output = GetColumnStatisticsTaskRunsResponse;
  export type Error = OperationTimeoutException | CommonAwsError;
}

export declare namespace GetColumnStatisticsTaskSettings {
  export type Input = GetColumnStatisticsTaskSettingsRequest;
  export type Output = GetColumnStatisticsTaskSettingsResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetConnection {
  export type Input = GetConnectionRequest;
  export type Output = GetConnectionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetConnections {
  export type Input = GetConnectionsRequest;
  export type Output = GetConnectionsResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetCrawler {
  export type Input = GetCrawlerRequest;
  export type Output = GetCrawlerResponse;
  export type Error =
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetCrawlerMetrics {
  export type Input = GetCrawlerMetricsRequest;
  export type Output = GetCrawlerMetricsResponse;
  export type Error = OperationTimeoutException | CommonAwsError;
}

export declare namespace GetCrawlers {
  export type Input = GetCrawlersRequest;
  export type Output = GetCrawlersResponse;
  export type Error = OperationTimeoutException | CommonAwsError;
}

export declare namespace GetCustomEntityType {
  export type Input = GetCustomEntityTypeRequest;
  export type Output = GetCustomEntityTypeResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDatabase {
  export type Input = GetDatabaseRequest;
  export type Output = GetDatabaseResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDatabases {
  export type Input = GetDatabasesRequest;
  export type Output = GetDatabasesResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataCatalogEncryptionSettings {
  export type Input = GetDataCatalogEncryptionSettingsRequest;
  export type Output = GetDataCatalogEncryptionSettingsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataflowGraph {
  export type Input = GetDataflowGraphRequest;
  export type Output = GetDataflowGraphResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataQualityModel {
  export type Input = GetDataQualityModelRequest;
  export type Output = GetDataQualityModelResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataQualityModelResult {
  export type Input = GetDataQualityModelResultRequest;
  export type Output = GetDataQualityModelResultResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataQualityResult {
  export type Input = GetDataQualityResultRequest;
  export type Output = GetDataQualityResultResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataQualityRuleRecommendationRun {
  export type Input = GetDataQualityRuleRecommendationRunRequest;
  export type Output = GetDataQualityRuleRecommendationRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataQualityRuleset {
  export type Input = GetDataQualityRulesetRequest;
  export type Output = GetDataQualityRulesetResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataQualityRulesetEvaluationRun {
  export type Input = GetDataQualityRulesetEvaluationRunRequest;
  export type Output = GetDataQualityRulesetEvaluationRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDevEndpoint {
  export type Input = GetDevEndpointRequest;
  export type Output = GetDevEndpointResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDevEndpoints {
  export type Input = GetDevEndpointsRequest;
  export type Output = GetDevEndpointsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetEntityRecords {
  export type Input = GetEntityRecordsRequest;
  export type Output = GetEntityRecordsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIntegrationResourceProperty {
  export type Input = GetIntegrationResourcePropertyRequest;
  export type Output = GetIntegrationResourcePropertyResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIntegrationTableProperties {
  export type Input = GetIntegrationTablePropertiesRequest;
  export type Output = GetIntegrationTablePropertiesResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetJob {
  export type Input = GetJobRequest;
  export type Output = GetJobResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetJobBookmark {
  export type Input = GetJobBookmarkRequest;
  export type Output = GetJobBookmarkResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetJobRun {
  export type Input = GetJobRunRequest;
  export type Output = GetJobRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetJobRuns {
  export type Input = GetJobRunsRequest;
  export type Output = GetJobRunsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetJobs {
  export type Input = GetJobsRequest;
  export type Output = GetJobsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetMapping {
  export type Input = GetMappingRequest;
  export type Output = GetMappingResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetMLTaskRun {
  export type Input = GetMLTaskRunRequest;
  export type Output = GetMLTaskRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetMLTaskRuns {
  export type Input = GetMLTaskRunsRequest;
  export type Output = GetMLTaskRunsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetMLTransform {
  export type Input = GetMLTransformRequest;
  export type Output = GetMLTransformResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetMLTransforms {
  export type Input = GetMLTransformsRequest;
  export type Output = GetMLTransformsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetPartition {
  export type Input = GetPartitionRequest;
  export type Output = GetPartitionResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetPartitionIndexes {
  export type Input = GetPartitionIndexesRequest;
  export type Output = GetPartitionIndexesResponse;
  export type Error =
    | ConflictException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetPartitions {
  export type Input = GetPartitionsRequest;
  export type Output = GetPartitionsResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | InvalidStateException
    | OperationTimeoutException
    | ResourceNotReadyException
    | CommonAwsError;
}

export declare namespace GetPlan {
  export type Input = GetPlanRequest;
  export type Output = GetPlanResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetRegistry {
  export type Input = GetRegistryInput;
  export type Output = GetRegistryResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace GetResourcePolicies {
  export type Input = GetResourcePoliciesRequest;
  export type Output = GetResourcePoliciesResponse;
  export type Error =
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetSchema {
  export type Input = GetSchemaInput;
  export type Output = GetSchemaResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace GetSchemaByDefinition {
  export type Input = GetSchemaByDefinitionInput;
  export type Output = GetSchemaByDefinitionResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace GetSchemaVersion {
  export type Input = GetSchemaVersionInput;
  export type Output = GetSchemaVersionResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace GetSchemaVersionsDiff {
  export type Input = GetSchemaVersionsDiffInput;
  export type Output = GetSchemaVersionsDiffResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace GetSecurityConfiguration {
  export type Input = GetSecurityConfigurationRequest;
  export type Output = GetSecurityConfigurationResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetSecurityConfigurations {
  export type Input = GetSecurityConfigurationsRequest;
  export type Output = GetSecurityConfigurationsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetSession {
  export type Input = GetSessionRequest;
  export type Output = GetSessionResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetStatement {
  export type Input = GetStatementRequest;
  export type Output = GetStatementResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetTable {
  export type Input = GetTableRequest;
  export type Output = GetTableResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | CommonAwsError;
}

export declare namespace GetTableOptimizer {
  export type Input = GetTableOptimizerRequest;
  export type Output = GetTableOptimizerResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetTables {
  export type Input = GetTablesRequest;
  export type Output = GetTablesResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetTableVersion {
  export type Input = GetTableVersionRequest;
  export type Output = GetTableVersionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetTableVersions {
  export type Input = GetTableVersionsRequest;
  export type Output = GetTableVersionsResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetTags {
  export type Input = GetTagsRequest;
  export type Output = GetTagsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetTrigger {
  export type Input = GetTriggerRequest;
  export type Output = GetTriggerResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetTriggers {
  export type Input = GetTriggersRequest;
  export type Output = GetTriggersResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetUnfilteredPartitionMetadata {
  export type Input = GetUnfilteredPartitionMetadataRequest;
  export type Output = GetUnfilteredPartitionMetadataResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | PermissionTypeMismatchException
    | CommonAwsError;
}

export declare namespace GetUnfilteredPartitionsMetadata {
  export type Input = GetUnfilteredPartitionsMetadataRequest;
  export type Output = GetUnfilteredPartitionsMetadataResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | PermissionTypeMismatchException
    | CommonAwsError;
}

export declare namespace GetUnfilteredTableMetadata {
  export type Input = GetUnfilteredTableMetadataRequest;
  export type Output = GetUnfilteredTableMetadataResponse;
  export type Error =
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | PermissionTypeMismatchException
    | CommonAwsError;
}

export declare namespace GetUsageProfile {
  export type Input = GetUsageProfileRequest;
  export type Output = GetUsageProfileResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetUserDefinedFunction {
  export type Input = GetUserDefinedFunctionRequest;
  export type Output = GetUserDefinedFunctionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetUserDefinedFunctions {
  export type Input = GetUserDefinedFunctionsRequest;
  export type Output = GetUserDefinedFunctionsResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetWorkflow {
  export type Input = GetWorkflowRequest;
  export type Output = GetWorkflowResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetWorkflowRun {
  export type Input = GetWorkflowRunRequest;
  export type Output = GetWorkflowRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetWorkflowRunProperties {
  export type Input = GetWorkflowRunPropertiesRequest;
  export type Output = GetWorkflowRunPropertiesResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetWorkflowRuns {
  export type Input = GetWorkflowRunsRequest;
  export type Output = GetWorkflowRunsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ImportCatalogToGlue {
  export type Input = ImportCatalogToGlueRequest;
  export type Output = ImportCatalogToGlueResponse;
  export type Error =
    | InternalServiceException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListBlueprints {
  export type Input = ListBlueprintsRequest;
  export type Output = ListBlueprintsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListColumnStatisticsTaskRuns {
  export type Input = ListColumnStatisticsTaskRunsRequest;
  export type Output = ListColumnStatisticsTaskRunsResponse;
  export type Error = OperationTimeoutException | CommonAwsError;
}

export declare namespace ListConnectionTypes {
  export type Input = ListConnectionTypesRequest;
  export type Output = ListConnectionTypesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | CommonAwsError;
}

export declare namespace ListCrawlers {
  export type Input = ListCrawlersRequest;
  export type Output = ListCrawlersResponse;
  export type Error = OperationTimeoutException | CommonAwsError;
}

export declare namespace ListCrawls {
  export type Input = ListCrawlsRequest;
  export type Output = ListCrawlsResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListCustomEntityTypes {
  export type Input = ListCustomEntityTypesRequest;
  export type Output = ListCustomEntityTypesResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListDataQualityResults {
  export type Input = ListDataQualityResultsRequest;
  export type Output = ListDataQualityResultsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListDataQualityRuleRecommendationRuns {
  export type Input = ListDataQualityRuleRecommendationRunsRequest;
  export type Output = ListDataQualityRuleRecommendationRunsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListDataQualityRulesetEvaluationRuns {
  export type Input = ListDataQualityRulesetEvaluationRunsRequest;
  export type Output = ListDataQualityRulesetEvaluationRunsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListDataQualityRulesets {
  export type Input = ListDataQualityRulesetsRequest;
  export type Output = ListDataQualityRulesetsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListDataQualityStatisticAnnotations {
  export type Input = ListDataQualityStatisticAnnotationsRequest;
  export type Output = ListDataQualityStatisticAnnotationsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ListDataQualityStatistics {
  export type Input = ListDataQualityStatisticsRequest;
  export type Output = ListDataQualityStatisticsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ListDevEndpoints {
  export type Input = ListDevEndpointsRequest;
  export type Output = ListDevEndpointsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListEntities {
  export type Input = ListEntitiesRequest;
  export type Output = ListEntitiesResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListMLTransforms {
  export type Input = ListMLTransformsRequest;
  export type Output = ListMLTransformsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListRegistries {
  export type Input = ListRegistriesInput;
  export type Output = ListRegistriesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ListSchemas {
  export type Input = ListSchemasInput;
  export type Output = ListSchemasResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ListSchemaVersions {
  export type Input = ListSchemaVersionsInput;
  export type Output = ListSchemaVersionsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ListSessions {
  export type Input = ListSessionsRequest;
  export type Output = ListSessionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListStatements {
  export type Input = ListStatementsRequest;
  export type Output = ListStatementsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListTableOptimizerRuns {
  export type Input = ListTableOptimizerRunsRequest;
  export type Output = ListTableOptimizerRunsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTriggers {
  export type Input = ListTriggersRequest;
  export type Output = ListTriggersResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListUsageProfiles {
  export type Input = ListUsageProfilesRequest;
  export type Output = ListUsageProfilesResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListWorkflows {
  export type Input = ListWorkflowsRequest;
  export type Output = ListWorkflowsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ModifyIntegration {
  export type Input = ModifyIntegrationRequest;
  export type Output = ModifyIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | InvalidIntegrationStateFault
    | InvalidStateException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutDataCatalogEncryptionSettings {
  export type Input = PutDataCatalogEncryptionSettingsRequest;
  export type Output = PutDataCatalogEncryptionSettingsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace PutDataQualityProfileAnnotation {
  export type Input = PutDataQualityProfileAnnotationRequest;
  export type Output = PutDataQualityProfileAnnotationResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | ConditionCheckFailureException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace PutSchemaVersionMetadata {
  export type Input = PutSchemaVersionMetadataInput;
  export type Output = PutSchemaVersionMetadataResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace PutWorkflowRunProperties {
  export type Input = PutWorkflowRunPropertiesRequest;
  export type Output = PutWorkflowRunPropertiesResponse;
  export type Error =
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace QuerySchemaVersionMetadata {
  export type Input = QuerySchemaVersionMetadataInput;
  export type Output = QuerySchemaVersionMetadataResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace RegisterSchemaVersion {
  export type Input = RegisterSchemaVersionInput;
  export type Output = RegisterSchemaVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace RemoveSchemaVersionMetadata {
  export type Input = RemoveSchemaVersionMetadataInput;
  export type Output = RemoveSchemaVersionMetadataResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ResetJobBookmark {
  export type Input = ResetJobBookmarkRequest;
  export type Output = ResetJobBookmarkResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ResumeWorkflowRun {
  export type Input = ResumeWorkflowRunRequest;
  export type Output = ResumeWorkflowRunResponse;
  export type Error =
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | IllegalWorkflowStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace RunStatement {
  export type Input = RunStatementRequest;
  export type Output = RunStatementResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchTables {
  export type Input = SearchTablesRequest;
  export type Output = SearchTablesResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StartBlueprintRun {
  export type Input = StartBlueprintRunRequest;
  export type Output = StartBlueprintRunResponse;
  export type Error =
    | EntityNotFoundException
    | IllegalBlueprintStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace StartColumnStatisticsTaskRun {
  export type Input = StartColumnStatisticsTaskRunRequest;
  export type Output = StartColumnStatisticsTaskRunResponse;
  export type Error =
    | AccessDeniedException
    | ColumnStatisticsTaskRunningException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace StartColumnStatisticsTaskRunSchedule {
  export type Input = StartColumnStatisticsTaskRunScheduleRequest;
  export type Output = StartColumnStatisticsTaskRunScheduleResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StartCrawler {
  export type Input = StartCrawlerRequest;
  export type Output = StartCrawlerResponse;
  export type Error =
    | CrawlerRunningException
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StartCrawlerSchedule {
  export type Input = StartCrawlerScheduleRequest;
  export type Output = StartCrawlerScheduleResponse;
  export type Error =
    | EntityNotFoundException
    | NoScheduleException
    | OperationTimeoutException
    | SchedulerRunningException
    | SchedulerTransitioningException
    | CommonAwsError;
}

export declare namespace StartDataQualityRuleRecommendationRun {
  export type Input = StartDataQualityRuleRecommendationRunRequest;
  export type Output = StartDataQualityRuleRecommendationRunResponse;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StartDataQualityRulesetEvaluationRun {
  export type Input = StartDataQualityRulesetEvaluationRunRequest;
  export type Output = StartDataQualityRulesetEvaluationRunResponse;
  export type Error =
    | ConflictException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StartExportLabelsTaskRun {
  export type Input = StartExportLabelsTaskRunRequest;
  export type Output = StartExportLabelsTaskRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StartImportLabelsTaskRun {
  export type Input = StartImportLabelsTaskRunRequest;
  export type Output = StartImportLabelsTaskRunResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace StartJobRun {
  export type Input = StartJobRunRequest;
  export type Output = StartJobRunResponse;
  export type Error =
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace StartMLEvaluationTaskRun {
  export type Input = StartMLEvaluationTaskRunRequest;
  export type Output = StartMLEvaluationTaskRunResponse;
  export type Error =
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | MLTransformNotReadyException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StartMLLabelingSetGenerationTaskRun {
  export type Input = StartMLLabelingSetGenerationTaskRunRequest;
  export type Output = StartMLLabelingSetGenerationTaskRunResponse;
  export type Error =
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StartTrigger {
  export type Input = StartTriggerRequest;
  export type Output = StartTriggerResponse;
  export type Error =
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace StartWorkflowRun {
  export type Input = StartWorkflowRunRequest;
  export type Output = StartWorkflowRunResponse;
  export type Error =
    | ConcurrentRunsExceededException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace StopColumnStatisticsTaskRun {
  export type Input = StopColumnStatisticsTaskRunRequest;
  export type Output = StopColumnStatisticsTaskRunResponse;
  export type Error =
    | ColumnStatisticsTaskNotRunningException
    | ColumnStatisticsTaskStoppingException
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StopColumnStatisticsTaskRunSchedule {
  export type Input = StopColumnStatisticsTaskRunScheduleRequest;
  export type Output = StopColumnStatisticsTaskRunScheduleResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StopCrawler {
  export type Input = StopCrawlerRequest;
  export type Output = StopCrawlerResponse;
  export type Error =
    | CrawlerNotRunningException
    | CrawlerStoppingException
    | EntityNotFoundException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StopCrawlerSchedule {
  export type Input = StopCrawlerScheduleRequest;
  export type Output = StopCrawlerScheduleResponse;
  export type Error =
    | EntityNotFoundException
    | OperationTimeoutException
    | SchedulerNotRunningException
    | SchedulerTransitioningException
    | CommonAwsError;
}

export declare namespace StopSession {
  export type Input = StopSessionRequest;
  export type Output = StopSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | IllegalSessionStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StopTrigger {
  export type Input = StopTriggerRequest;
  export type Output = StopTriggerResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StopWorkflowRun {
  export type Input = StopWorkflowRunRequest;
  export type Output = StopWorkflowRunResponse;
  export type Error =
    | EntityNotFoundException
    | IllegalWorkflowStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace TestConnection {
  export type Input = TestConnectionRequest;
  export type Output = TestConnectionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateBlueprint {
  export type Input = UpdateBlueprintRequest;
  export type Output = UpdateBlueprintResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | IllegalBlueprintStateException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateCatalog {
  export type Input = UpdateCatalogRequest;
  export type Output = UpdateCatalogResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateClassifier {
  export type Input = UpdateClassifierRequest;
  export type Output = UpdateClassifierResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | VersionMismatchException
    | CommonAwsError;
}

export declare namespace UpdateColumnStatisticsForPartition {
  export type Input = UpdateColumnStatisticsForPartitionRequest;
  export type Output = UpdateColumnStatisticsForPartitionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateColumnStatisticsForTable {
  export type Input = UpdateColumnStatisticsForTableRequest;
  export type Output = UpdateColumnStatisticsForTableResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateColumnStatisticsTaskSettings {
  export type Input = UpdateColumnStatisticsTaskSettingsRequest;
  export type Output = UpdateColumnStatisticsTaskSettingsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | VersionMismatchException
    | CommonAwsError;
}

export declare namespace UpdateConnection {
  export type Input = UpdateConnectionRequest;
  export type Output = UpdateConnectionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateCrawler {
  export type Input = UpdateCrawlerRequest;
  export type Output = UpdateCrawlerResponse;
  export type Error =
    | CrawlerRunningException
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | VersionMismatchException
    | CommonAwsError;
}

export declare namespace UpdateCrawlerSchedule {
  export type Input = UpdateCrawlerScheduleRequest;
  export type Output = UpdateCrawlerScheduleResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidInputException
    | OperationTimeoutException
    | SchedulerTransitioningException
    | VersionMismatchException
    | CommonAwsError;
}

export declare namespace UpdateDatabase {
  export type Input = UpdateDatabaseRequest;
  export type Output = UpdateDatabaseResponse;
  export type Error =
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateDataQualityRuleset {
  export type Input = UpdateDataQualityRulesetRequest;
  export type Output = UpdateDataQualityRulesetResponse;
  export type Error =
    | AlreadyExistsException
    | EntityNotFoundException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace UpdateDevEndpoint {
  export type Input = UpdateDevEndpointRequest;
  export type Output = UpdateDevEndpointResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIntegrationResourceProperty {
  export type Input = UpdateIntegrationResourcePropertyRequest;
  export type Output = UpdateIntegrationResourcePropertyResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIntegrationTableProperties {
  export type Input = UpdateIntegrationTablePropertiesRequest;
  export type Output = UpdateIntegrationTablePropertiesResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServerException
    | InternalServiceException
    | InvalidInputException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateJob {
  export type Input = UpdateJobRequest;
  export type Output = UpdateJobResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateJobFromSourceControl {
  export type Input = UpdateJobFromSourceControlRequest;
  export type Output = UpdateJobFromSourceControlResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMLTransform {
  export type Input = UpdateMLTransformRequest;
  export type Output = UpdateMLTransformResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdatePartition {
  export type Input = UpdatePartitionRequest;
  export type Output = UpdatePartitionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateRegistry {
  export type Input = UpdateRegistryInput;
  export type Output = UpdateRegistryResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace UpdateSchema {
  export type Input = UpdateSchemaInput;
  export type Output = UpdateSchemaResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace UpdateSourceControlFromJob {
  export type Input = UpdateSourceControlFromJobRequest;
  export type Output = UpdateSourceControlFromJobResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTable {
  export type Input = UpdateTableRequest;
  export type Output = UpdateTableResponse;
  export type Error =
    | AlreadyExistsException
    | ConcurrentModificationException
    | EntityNotFoundException
    | FederationSourceException
    | FederationSourceRetryableException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace UpdateTableOptimizer {
  export type Input = UpdateTableOptimizerRequest;
  export type Output = UpdateTableOptimizerResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTrigger {
  export type Input = UpdateTriggerRequest;
  export type Output = UpdateTriggerResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateUsageProfile {
  export type Input = UpdateUsageProfileRequest;
  export type Output = UpdateUsageProfileResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationNotSupportedException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateUserDefinedFunction {
  export type Input = UpdateUserDefinedFunctionRequest;
  export type Output = UpdateUserDefinedFunctionResponse;
  export type Error =
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateWorkflow {
  export type Input = UpdateWorkflowRequest;
  export type Output = UpdateWorkflowResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}
