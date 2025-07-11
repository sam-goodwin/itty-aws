import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonDMSv20160101 {
  addTagsToResource(
    input: AddTagsToResourceMessage,
  ): Effect.Effect<
    AddTagsToResourceResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  applyPendingMaintenanceAction(
    input: ApplyPendingMaintenanceActionMessage,
  ): Effect.Effect<
    ApplyPendingMaintenanceActionResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  batchStartRecommendations(
    input: BatchStartRecommendationsRequest,
  ): Effect.Effect<
    BatchStartRecommendationsResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  cancelReplicationTaskAssessmentRun(
    input: CancelReplicationTaskAssessmentRunMessage,
  ): Effect.Effect<
    CancelReplicationTaskAssessmentRunResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  createDataMigration(
    input: CreateDataMigrationMessage,
  ): Effect.Effect<
    CreateDataMigrationResponse,
    | FailedDependencyFault
    | InvalidOperationFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  createDataProvider(
    input: CreateDataProviderMessage,
  ): Effect.Effect<
    CreateDataProviderResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceAlreadyExistsFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  createEndpoint(
    input: CreateEndpointMessage,
  ): Effect.Effect<
    CreateEndpointResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | CommonAwsError
  >;
  createEventSubscription(
    input: CreateEventSubscriptionMessage,
  ): Effect.Effect<
    CreateEventSubscriptionResponse,
    | KMSAccessDeniedFault
    | KMSDisabledFault
    | KMSInvalidStateFault
    | KMSNotFoundFault
    | KMSThrottlingFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | CommonAwsError
  >;
  createFleetAdvisorCollector(
    input: CreateFleetAdvisorCollectorRequest,
  ): Effect.Effect<
    CreateFleetAdvisorCollectorResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  createInstanceProfile(
    input: CreateInstanceProfileMessage,
  ): Effect.Effect<
    CreateInstanceProfileResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  createMigrationProject(
    input: CreateMigrationProjectMessage,
  ): Effect.Effect<
    CreateMigrationProjectResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  createReplicationConfig(
    input: CreateReplicationConfigMessage,
  ): Effect.Effect<
    CreateReplicationConfigResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | InvalidSubnet
    | KMSKeyNotAccessibleFault
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  createReplicationInstance(
    input: CreateReplicationInstanceMessage,
  ): Effect.Effect<
    CreateReplicationInstanceResponse,
    | AccessDeniedFault
    | InsufficientResourceCapacityFault
    | InvalidResourceStateFault
    | InvalidSubnet
    | KMSKeyNotAccessibleFault
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | StorageQuotaExceededFault
    | CommonAwsError
  >;
  createReplicationSubnetGroup(
    input: CreateReplicationSubnetGroupMessage,
  ): Effect.Effect<
    CreateReplicationSubnetGroupResponse,
    | AccessDeniedFault
    | InvalidSubnet
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  createReplicationTask(
    input: CreateReplicationTaskMessage,
  ): Effect.Effect<
    CreateReplicationTaskResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  deleteCertificate(
    input: DeleteCertificateMessage,
  ): Effect.Effect<
    DeleteCertificateResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  deleteConnection(
    input: DeleteConnectionMessage,
  ): Effect.Effect<
    DeleteConnectionResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  deleteDataMigration(
    input: DeleteDataMigrationMessage,
  ): Effect.Effect<
    DeleteDataMigrationResponse,
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  deleteDataProvider(
    input: DeleteDataProviderMessage,
  ): Effect.Effect<
    DeleteDataProviderResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  deleteEndpoint(
    input: DeleteEndpointMessage,
  ): Effect.Effect<
    DeleteEndpointResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  deleteEventSubscription(
    input: DeleteEventSubscriptionMessage,
  ): Effect.Effect<
    DeleteEventSubscriptionResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  deleteFleetAdvisorCollector(
    input: DeleteCollectorRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedFault
    | CollectorNotFoundFault
    | InvalidResourceStateFault
    | CommonAwsError
  >;
  deleteFleetAdvisorDatabases(
    input: DeleteFleetAdvisorDatabasesRequest,
  ): Effect.Effect<
    DeleteFleetAdvisorDatabasesResponse,
    | AccessDeniedFault
    | InvalidOperationFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  deleteInstanceProfile(
    input: DeleteInstanceProfileMessage,
  ): Effect.Effect<
    DeleteInstanceProfileResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  deleteMigrationProject(
    input: DeleteMigrationProjectMessage,
  ): Effect.Effect<
    DeleteMigrationProjectResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  deleteReplicationConfig(
    input: DeleteReplicationConfigMessage,
  ): Effect.Effect<
    DeleteReplicationConfigResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  deleteReplicationInstance(
    input: DeleteReplicationInstanceMessage,
  ): Effect.Effect<
    DeleteReplicationInstanceResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  deleteReplicationSubnetGroup(
    input: DeleteReplicationSubnetGroupMessage,
  ): Effect.Effect<
    DeleteReplicationSubnetGroupResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  deleteReplicationTask(
    input: DeleteReplicationTaskMessage,
  ): Effect.Effect<
    DeleteReplicationTaskResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  deleteReplicationTaskAssessmentRun(
    input: DeleteReplicationTaskAssessmentRunMessage,
  ): Effect.Effect<
    DeleteReplicationTaskAssessmentRunResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  describeAccountAttributes(
    input: DescribeAccountAttributesMessage,
  ): Effect.Effect<DescribeAccountAttributesResponse, CommonAwsError>;
  describeApplicableIndividualAssessments(
    input: DescribeApplicableIndividualAssessmentsMessage,
  ): Effect.Effect<
    DescribeApplicableIndividualAssessmentsResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  describeCertificates(
    input: DescribeCertificatesMessage,
  ): Effect.Effect<
    DescribeCertificatesResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeConnections(
    input: DescribeConnectionsMessage,
  ): Effect.Effect<
    DescribeConnectionsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeConversionConfiguration(
    input: DescribeConversionConfigurationMessage,
  ): Effect.Effect<
    DescribeConversionConfigurationResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeDataMigrations(
    input: DescribeDataMigrationsMessage,
  ): Effect.Effect<
    DescribeDataMigrationsResponse,
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  describeDataProviders(
    input: DescribeDataProvidersMessage,
  ): Effect.Effect<
    DescribeDataProvidersResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  describeEndpoints(
    input: DescribeEndpointsMessage,
  ): Effect.Effect<
    DescribeEndpointsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeEndpointSettings(
    input: DescribeEndpointSettingsMessage,
  ): Effect.Effect<DescribeEndpointSettingsResponse, CommonAwsError>;
  describeEndpointTypes(
    input: DescribeEndpointTypesMessage,
  ): Effect.Effect<DescribeEndpointTypesResponse, CommonAwsError>;
  describeEngineVersions(
    input: DescribeEngineVersionsMessage,
  ): Effect.Effect<DescribeEngineVersionsResponse, CommonAwsError>;
  describeEventCategories(
    input: DescribeEventCategoriesMessage,
  ): Effect.Effect<DescribeEventCategoriesResponse, CommonAwsError>;
  describeEvents(
    input: DescribeEventsMessage,
  ): Effect.Effect<DescribeEventsResponse, CommonAwsError>;
  describeEventSubscriptions(
    input: DescribeEventSubscriptionsMessage,
  ): Effect.Effect<
    DescribeEventSubscriptionsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeExtensionPackAssociations(
    input: DescribeExtensionPackAssociationsMessage,
  ): Effect.Effect<DescribeExtensionPackAssociationsResponse, CommonAwsError>;
  describeFleetAdvisorCollectors(
    input: DescribeFleetAdvisorCollectorsRequest,
  ): Effect.Effect<
    DescribeFleetAdvisorCollectorsResponse,
    InvalidResourceStateFault | CommonAwsError
  >;
  describeFleetAdvisorDatabases(
    input: DescribeFleetAdvisorDatabasesRequest,
  ): Effect.Effect<
    DescribeFleetAdvisorDatabasesResponse,
    InvalidResourceStateFault | CommonAwsError
  >;
  describeFleetAdvisorLsaAnalysis(
    input: DescribeFleetAdvisorLsaAnalysisRequest,
  ): Effect.Effect<
    DescribeFleetAdvisorLsaAnalysisResponse,
    InvalidResourceStateFault | CommonAwsError
  >;
  describeFleetAdvisorSchemaObjectSummary(
    input: DescribeFleetAdvisorSchemaObjectSummaryRequest,
  ): Effect.Effect<
    DescribeFleetAdvisorSchemaObjectSummaryResponse,
    InvalidResourceStateFault | CommonAwsError
  >;
  describeFleetAdvisorSchemas(
    input: DescribeFleetAdvisorSchemasRequest,
  ): Effect.Effect<
    DescribeFleetAdvisorSchemasResponse,
    InvalidResourceStateFault | CommonAwsError
  >;
  describeInstanceProfiles(
    input: DescribeInstanceProfilesMessage,
  ): Effect.Effect<
    DescribeInstanceProfilesResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  describeMetadataModelAssessments(
    input: DescribeMetadataModelAssessmentsMessage,
  ): Effect.Effect<
    DescribeMetadataModelAssessmentsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeMetadataModelConversions(
    input: DescribeMetadataModelConversionsMessage,
  ): Effect.Effect<
    DescribeMetadataModelConversionsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeMetadataModelExportsAsScript(
    input: DescribeMetadataModelExportsAsScriptMessage,
  ): Effect.Effect<
    DescribeMetadataModelExportsAsScriptResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeMetadataModelExportsToTarget(
    input: DescribeMetadataModelExportsToTargetMessage,
  ): Effect.Effect<
    DescribeMetadataModelExportsToTargetResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeMetadataModelImports(
    input: DescribeMetadataModelImportsMessage,
  ): Effect.Effect<
    DescribeMetadataModelImportsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeMigrationProjects(
    input: DescribeMigrationProjectsMessage,
  ): Effect.Effect<
    DescribeMigrationProjectsResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  describeOrderableReplicationInstances(
    input: DescribeOrderableReplicationInstancesMessage,
  ): Effect.Effect<
    DescribeOrderableReplicationInstancesResponse,
    CommonAwsError
  >;
  describePendingMaintenanceActions(
    input: DescribePendingMaintenanceActionsMessage,
  ): Effect.Effect<
    DescribePendingMaintenanceActionsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeRecommendationLimitations(
    input: DescribeRecommendationLimitationsRequest,
  ): Effect.Effect<
    DescribeRecommendationLimitationsResponse,
    AccessDeniedFault | InvalidResourceStateFault | CommonAwsError
  >;
  describeRecommendations(
    input: DescribeRecommendationsRequest,
  ): Effect.Effect<
    DescribeRecommendationsResponse,
    AccessDeniedFault | InvalidResourceStateFault | CommonAwsError
  >;
  describeRefreshSchemasStatus(
    input: DescribeRefreshSchemasStatusMessage,
  ): Effect.Effect<
    DescribeRefreshSchemasStatusResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  describeReplicationConfigs(
    input: DescribeReplicationConfigsMessage,
  ): Effect.Effect<
    DescribeReplicationConfigsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeReplicationInstances(
    input: DescribeReplicationInstancesMessage,
  ): Effect.Effect<
    DescribeReplicationInstancesResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeReplicationInstanceTaskLogs(
    input: DescribeReplicationInstanceTaskLogsMessage,
  ): Effect.Effect<
    DescribeReplicationInstanceTaskLogsResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  describeReplications(
    input: DescribeReplicationsMessage,
  ): Effect.Effect<
    DescribeReplicationsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeReplicationSubnetGroups(
    input: DescribeReplicationSubnetGroupsMessage,
  ): Effect.Effect<
    DescribeReplicationSubnetGroupsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeReplicationTableStatistics(
    input: DescribeReplicationTableStatisticsMessage,
  ): Effect.Effect<
    DescribeReplicationTableStatisticsResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  describeReplicationTaskAssessmentResults(
    input: DescribeReplicationTaskAssessmentResultsMessage,
  ): Effect.Effect<
    DescribeReplicationTaskAssessmentResultsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeReplicationTaskAssessmentRuns(
    input: DescribeReplicationTaskAssessmentRunsMessage,
  ): Effect.Effect<
    DescribeReplicationTaskAssessmentRunsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeReplicationTaskIndividualAssessments(
    input: DescribeReplicationTaskIndividualAssessmentsMessage,
  ): Effect.Effect<
    DescribeReplicationTaskIndividualAssessmentsResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeReplicationTasks(
    input: DescribeReplicationTasksMessage,
  ): Effect.Effect<
    DescribeReplicationTasksResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeSchemas(
    input: DescribeSchemasMessage,
  ): Effect.Effect<
    DescribeSchemasResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  describeTableStatistics(
    input: DescribeTableStatisticsMessage,
  ): Effect.Effect<
    DescribeTableStatisticsResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  exportMetadataModelAssessment(
    input: ExportMetadataModelAssessmentMessage,
  ): Effect.Effect<
    ExportMetadataModelAssessmentResponse,
    ResourceNotFoundFault | CommonAwsError
  >;
  importCertificate(
    input: ImportCertificateMessage,
  ): Effect.Effect<
    ImportCertificateResponse,
    | InvalidCertificateFault
    | ResourceAlreadyExistsFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceMessage,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  modifyConversionConfiguration(
    input: ModifyConversionConfigurationMessage,
  ): Effect.Effect<
    ModifyConversionConfigurationResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  modifyDataMigration(
    input: ModifyDataMigrationMessage,
  ): Effect.Effect<
    ModifyDataMigrationResponse,
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  modifyDataProvider(
    input: ModifyDataProviderMessage,
  ): Effect.Effect<
    ModifyDataProviderResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  modifyEndpoint(
    input: ModifyEndpointMessage,
  ): Effect.Effect<
    ModifyEndpointResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  modifyEventSubscription(
    input: ModifyEventSubscriptionMessage,
  ): Effect.Effect<
    ModifyEventSubscriptionResponse,
    | AccessDeniedFault
    | KMSAccessDeniedFault
    | KMSDisabledFault
    | KMSInvalidStateFault
    | KMSNotFoundFault
    | KMSThrottlingFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | CommonAwsError
  >;
  modifyInstanceProfile(
    input: ModifyInstanceProfileMessage,
  ): Effect.Effect<
    ModifyInstanceProfileResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  modifyMigrationProject(
    input: ModifyMigrationProjectMessage,
  ): Effect.Effect<
    ModifyMigrationProjectResponse,
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  modifyReplicationConfig(
    input: ModifyReplicationConfigMessage,
  ): Effect.Effect<
    ModifyReplicationConfigResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | InvalidSubnet
    | KMSKeyNotAccessibleFault
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  modifyReplicationInstance(
    input: ModifyReplicationInstanceMessage,
  ): Effect.Effect<
    ModifyReplicationInstanceResponse,
    | AccessDeniedFault
    | InsufficientResourceCapacityFault
    | InvalidResourceStateFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | StorageQuotaExceededFault
    | UpgradeDependencyFailureFault
    | CommonAwsError
  >;
  modifyReplicationSubnetGroup(
    input: ModifyReplicationSubnetGroupMessage,
  ): Effect.Effect<
    ModifyReplicationSubnetGroupResponse,
    | AccessDeniedFault
    | InvalidSubnet
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | SubnetAlreadyInUse
    | CommonAwsError
  >;
  modifyReplicationTask(
    input: ModifyReplicationTaskMessage,
  ): Effect.Effect<
    ModifyReplicationTaskResponse,
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  moveReplicationTask(
    input: MoveReplicationTaskMessage,
  ): Effect.Effect<
    MoveReplicationTaskResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  rebootReplicationInstance(
    input: RebootReplicationInstanceMessage,
  ): Effect.Effect<
    RebootReplicationInstanceResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  refreshSchemas(
    input: RefreshSchemasMessage,
  ): Effect.Effect<
    RefreshSchemasResponse,
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  reloadReplicationTables(
    input: ReloadReplicationTablesMessage,
  ): Effect.Effect<
    ReloadReplicationTablesResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  reloadTables(
    input: ReloadTablesMessage,
  ): Effect.Effect<
    ReloadTablesResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  removeTagsFromResource(
    input: RemoveTagsFromResourceMessage,
  ): Effect.Effect<
    RemoveTagsFromResourceResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  runFleetAdvisorLsaAnalysis(input: {}): Effect.Effect<
    RunFleetAdvisorLsaAnalysisResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  startDataMigration(
    input: StartDataMigrationMessage,
  ): Effect.Effect<
    StartDataMigrationResponse,
    | FailedDependencyFault
    | InvalidOperationFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  startExtensionPackAssociation(
    input: StartExtensionPackAssociationMessage,
  ): Effect.Effect<
    StartExtensionPackAssociationResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  startMetadataModelAssessment(
    input: StartMetadataModelAssessmentMessage,
  ): Effect.Effect<
    StartMetadataModelAssessmentResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  startMetadataModelConversion(
    input: StartMetadataModelConversionMessage,
  ): Effect.Effect<
    StartMetadataModelConversionResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  startMetadataModelExportAsScript(
    input: StartMetadataModelExportAsScriptMessage,
  ): Effect.Effect<
    StartMetadataModelExportAsScriptResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  startMetadataModelExportToTarget(
    input: StartMetadataModelExportToTargetMessage,
  ): Effect.Effect<
    StartMetadataModelExportToTargetResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  startMetadataModelImport(
    input: StartMetadataModelImportMessage,
  ): Effect.Effect<
    StartMetadataModelImportResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  startRecommendations(
    input: StartRecommendationsRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  startReplication(
    input: StartReplicationMessage,
  ): Effect.Effect<
    StartReplicationResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  startReplicationTask(
    input: StartReplicationTaskMessage,
  ): Effect.Effect<
    StartReplicationTaskResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  startReplicationTaskAssessment(
    input: StartReplicationTaskAssessmentMessage,
  ): Effect.Effect<
    StartReplicationTaskAssessmentResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  startReplicationTaskAssessmentRun(
    input: StartReplicationTaskAssessmentRunMessage,
  ): Effect.Effect<
    StartReplicationTaskAssessmentRunResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSAccessDeniedFault
    | KMSDisabledFault
    | KMSFault
    | KMSInvalidStateFault
    | KMSKeyNotAccessibleFault
    | KMSNotFoundFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError
  >;
  stopDataMigration(
    input: StopDataMigrationMessage,
  ): Effect.Effect<
    StopDataMigrationResponse,
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  stopReplication(
    input: StopReplicationMessage,
  ): Effect.Effect<
    StopReplicationResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  stopReplicationTask(
    input: StopReplicationTaskMessage,
  ): Effect.Effect<
    StopReplicationTaskResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  testConnection(
    input: TestConnectionMessage,
  ): Effect.Effect<
    TestConnectionResponse,
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError
  >;
  updateSubscriptionsToEventBridge(
    input: UpdateSubscriptionsToEventBridgeMessage,
  ): Effect.Effect<
    UpdateSubscriptionsToEventBridgeResponse,
    AccessDeniedFault | InvalidResourceStateFault | CommonAwsError
  >;
}

export type DatabaseMigrationService = AmazonDMSv20160101;

export declare class AccessDeniedFault extends EffectData.TaggedError(
  "AccessDeniedFault",
)<{
  readonly message?: string;
}> {}
export interface AccountQuota {
  AccountQuotaName?: string;
  Used?: number;
  Max?: number;
}
export type AccountQuotaList = Array<AccountQuota>;
export interface AddTagsToResourceMessage {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface AddTagsToResourceResponse {}
export interface ApplyPendingMaintenanceActionMessage {
  ReplicationInstanceArn: string;
  ApplyAction: string;
  OptInType: string;
}
export interface ApplyPendingMaintenanceActionResponse {
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}
export type ArnList = Array<string>;
export type AssessmentReportType = "PDF" | "CSV";
export type AssessmentReportTypesList = Array<AssessmentReportType>;
export type AuthMechanismValue = "DEFAULT" | "MONGODB_CR" | "SCRAM_SHA_1";
export type AuthTypeValue = "NO" | "PASSWORD";
export interface AvailabilityZone {
  Name?: string;
}
export type AvailabilityZonesList = Array<string>;
export type AvailableUpgradesList = Array<string>;
export interface BatchStartRecommendationsErrorEntry {
  DatabaseId?: string;
  Message?: string;
  Code?: string;
}
export type BatchStartRecommendationsErrorEntryList =
  Array<BatchStartRecommendationsErrorEntry>;
export interface BatchStartRecommendationsRequest {
  Data?: Array<StartRecommendationsRequestEntry>;
}
export interface BatchStartRecommendationsResponse {
  ErrorEntries?: Array<BatchStartRecommendationsErrorEntry>;
}
export type DatabaseMigrationServiceBoolean = boolean;

export type BooleanOptional = boolean;

export interface CancelReplicationTaskAssessmentRunMessage {
  ReplicationTaskAssessmentRunArn: string;
}
export interface CancelReplicationTaskAssessmentRunResponse {
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}
export type CannedAclForObjectsValue =
  | "NONE"
  | "PRIVATE"
  | "PUBLIC_READ"
  | "PUBLIC_READ_WRITE"
  | "AUTHENTICATED_READ"
  | "AWS_EXEC_READ"
  | "BUCKET_OWNER_READ"
  | "BUCKET_OWNER_FULL_CONTROL";
export interface Certificate {
  CertificateIdentifier?: string;
  CertificateCreationDate?: Date | string;
  CertificatePem?: string;
  CertificateWallet?: Uint8Array | string;
  CertificateArn?: string;
  CertificateOwner?: string;
  ValidFromDate?: Date | string;
  ValidToDate?: Date | string;
  SigningAlgorithm?: string;
  KeyLength?: number;
}
export type CertificateList = Array<Certificate>;
export type CertificateWallet = Uint8Array | string;

export type CharLengthSemantics = "DEFAULT" | "CHAR" | "BYTE";
export interface CollectorHealthCheck {
  CollectorStatus?: CollectorStatus;
  LocalCollectorS3Access?: boolean;
  WebCollectorS3Access?: boolean;
  WebCollectorGrantedRoleBasedAccess?: boolean;
}
export declare class CollectorNotFoundFault extends EffectData.TaggedError(
  "CollectorNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface CollectorResponse {
  CollectorReferencedId?: string;
  CollectorName?: string;
  CollectorVersion?: string;
  VersionStatus?: VersionStatus;
  Description?: string;
  S3BucketName?: string;
  ServiceAccessRoleArn?: string;
  CollectorHealthCheck?: CollectorHealthCheck;
  LastDataReceived?: string;
  RegisteredDate?: string;
  CreatedDate?: string;
  ModifiedDate?: string;
  InventoryData?: InventoryData;
}
export type CollectorResponses = Array<CollectorResponse>;
export interface CollectorShortInfoResponse {
  CollectorReferencedId?: string;
  CollectorName?: string;
}
export type CollectorsList = Array<CollectorShortInfoResponse>;
export type CollectorStatus = "UNREGISTERED" | "ACTIVE";
export type CompressionTypeValue = "NONE" | "GZIP";
export interface ComputeConfig {
  AvailabilityZone?: string;
  DnsNameServers?: string;
  KmsKeyId?: string;
  MaxCapacityUnits?: number;
  MinCapacityUnits?: number;
  MultiAZ?: boolean;
  PreferredMaintenanceWindow?: string;
  ReplicationSubnetGroupId?: string;
  VpcSecurityGroupIds?: Array<string>;
}
export interface Connection {
  ReplicationInstanceArn?: string;
  EndpointArn?: string;
  Status?: string;
  LastFailureMessage?: string;
  EndpointIdentifier?: string;
  ReplicationInstanceIdentifier?: string;
}
export type ConnectionList = Array<Connection>;
export interface CreateDataMigrationMessage {
  DataMigrationName?: string;
  MigrationProjectIdentifier: string;
  DataMigrationType: MigrationTypeValue;
  ServiceAccessRoleArn: string;
  EnableCloudwatchLogs?: boolean;
  SourceDataSettings?: Array<SourceDataSetting>;
  TargetDataSettings?: Array<TargetDataSetting>;
  NumberOfJobs?: number;
  Tags?: Array<Tag>;
  SelectionRules?: string;
}
export interface CreateDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface CreateDataProviderMessage {
  DataProviderName?: string;
  Description?: string;
  Engine: string;
  Virtual?: boolean;
  Settings: DataProviderSettings;
  Tags?: Array<Tag>;
}
export interface CreateDataProviderResponse {
  DataProvider?: DataProvider;
}
export interface CreateEndpointMessage {
  EndpointIdentifier: string;
  EndpointType: ReplicationEndpointTypeValue;
  EngineName: string;
  Username?: string;
  Password?: string;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  ExtraConnectionAttributes?: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
  CertificateArn?: string;
  SslMode?: DmsSslModeValue;
  ServiceAccessRoleArn?: string;
  ExternalTableDefinition?: string;
  DynamoDbSettings?: DynamoDbSettings;
  S3Settings?: S3Settings;
  DmsTransferSettings?: DmsTransferSettings;
  MongoDbSettings?: MongoDbSettings;
  KinesisSettings?: KinesisSettings;
  KafkaSettings?: KafkaSettings;
  ElasticsearchSettings?: ElasticsearchSettings;
  NeptuneSettings?: NeptuneSettings;
  RedshiftSettings?: RedshiftSettings;
  PostgreSQLSettings?: PostgreSQLSettings;
  MySQLSettings?: MySQLSettings;
  OracleSettings?: OracleSettings;
  SybaseSettings?: SybaseSettings;
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
  IBMDb2Settings?: IBMDb2Settings;
  ResourceIdentifier?: string;
  DocDbSettings?: DocDbSettings;
  RedisSettings?: RedisSettings;
  GcpMySQLSettings?: GcpMySQLSettings;
  TimestreamSettings?: TimestreamSettings;
}
export interface CreateEndpointResponse {
  Endpoint?: Endpoint;
}
export interface CreateEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn: string;
  SourceType?: string;
  EventCategories?: Array<string>;
  SourceIds?: Array<string>;
  Enabled?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateEventSubscriptionResponse {
  EventSubscription?: EventSubscription;
}
export interface CreateFleetAdvisorCollectorRequest {
  CollectorName: string;
  Description?: string;
  ServiceAccessRoleArn: string;
  S3BucketName: string;
}
export interface CreateFleetAdvisorCollectorResponse {
  CollectorReferencedId?: string;
  CollectorName?: string;
  Description?: string;
  ServiceAccessRoleArn?: string;
  S3BucketName?: string;
}
export interface CreateInstanceProfileMessage {
  AvailabilityZone?: string;
  KmsKeyArn?: string;
  PubliclyAccessible?: boolean;
  Tags?: Array<Tag>;
  NetworkType?: string;
  InstanceProfileName?: string;
  Description?: string;
  SubnetGroupIdentifier?: string;
  VpcSecurityGroups?: Array<string>;
}
export interface CreateInstanceProfileResponse {
  InstanceProfile?: InstanceProfile;
}
export interface CreateMigrationProjectMessage {
  MigrationProjectName?: string;
  SourceDataProviderDescriptors: Array<DataProviderDescriptorDefinition>;
  TargetDataProviderDescriptors: Array<DataProviderDescriptorDefinition>;
  InstanceProfileIdentifier: string;
  TransformationRules?: string;
  Description?: string;
  Tags?: Array<Tag>;
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}
export interface CreateMigrationProjectResponse {
  MigrationProject?: MigrationProject;
}
export interface CreateReplicationConfigMessage {
  ReplicationConfigIdentifier: string;
  SourceEndpointArn: string;
  TargetEndpointArn: string;
  ComputeConfig: ComputeConfig;
  ReplicationType: MigrationTypeValue;
  TableMappings: string;
  ReplicationSettings?: string;
  SupplementalSettings?: string;
  ResourceIdentifier?: string;
  Tags?: Array<Tag>;
}
export interface CreateReplicationConfigResponse {
  ReplicationConfig?: ReplicationConfig;
}
export interface CreateReplicationInstanceMessage {
  ReplicationInstanceIdentifier: string;
  AllocatedStorage?: number;
  ReplicationInstanceClass: string;
  VpcSecurityGroupIds?: Array<string>;
  AvailabilityZone?: string;
  ReplicationSubnetGroupIdentifier?: string;
  PreferredMaintenanceWindow?: string;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  PubliclyAccessible?: boolean;
  DnsNameServers?: string;
  ResourceIdentifier?: string;
  NetworkType?: string;
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings;
}
export interface CreateReplicationInstanceResponse {
  ReplicationInstance?: ReplicationInstance;
}
export interface CreateReplicationSubnetGroupMessage {
  ReplicationSubnetGroupIdentifier: string;
  ReplicationSubnetGroupDescription: string;
  SubnetIds: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateReplicationSubnetGroupResponse {
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}
export interface CreateReplicationTaskMessage {
  ReplicationTaskIdentifier: string;
  SourceEndpointArn: string;
  TargetEndpointArn: string;
  ReplicationInstanceArn: string;
  MigrationType: MigrationTypeValue;
  TableMappings: string;
  ReplicationTaskSettings?: string;
  CdcStartTime?: Date | string;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
  Tags?: Array<Tag>;
  TaskData?: string;
  ResourceIdentifier?: string;
}
export interface CreateReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export interface DatabaseInstanceSoftwareDetailsResponse {
  Engine?: string;
  EngineVersion?: string;
  EngineEdition?: string;
  ServicePack?: string;
  SupportLevel?: string;
  OsArchitecture?: number;
  Tooltip?: string;
}
export type DatabaseList = Array<DatabaseResponse>;
export type DatabaseMode = "DEFAULT" | "BABELFISH";
export interface DatabaseResponse {
  DatabaseId?: string;
  DatabaseName?: string;
  IpAddress?: string;
  NumberOfSchemas?: number;
  Server?: ServerShortInfoResponse;
  SoftwareDetails?: DatabaseInstanceSoftwareDetailsResponse;
  Collectors?: Array<CollectorShortInfoResponse>;
}
export interface DatabaseShortInfoResponse {
  DatabaseId?: string;
  DatabaseName?: string;
  DatabaseIpAddress?: string;
  DatabaseEngine?: string;
}
export type DataFormatValue = "CSV" | "PARQUET";
export interface DataMigration {
  DataMigrationName?: string;
  DataMigrationArn?: string;
  DataMigrationCreateTime?: Date | string;
  DataMigrationStartTime?: Date | string;
  DataMigrationEndTime?: Date | string;
  ServiceAccessRoleArn?: string;
  MigrationProjectArn?: string;
  DataMigrationType?: MigrationTypeValue;
  DataMigrationSettings?: DataMigrationSettings;
  SourceDataSettings?: Array<SourceDataSetting>;
  TargetDataSettings?: Array<TargetDataSetting>;
  DataMigrationStatistics?: DataMigrationStatistics;
  DataMigrationStatus?: string;
  PublicIpAddresses?: Array<string>;
  DataMigrationCidrBlocks?: Array<string>;
  LastFailureMessage?: string;
  StopReason?: string;
}
export type DataMigrationCidrBlock = Array<string>;
export type DataMigrations = Array<DataMigration>;
export interface DataMigrationSettings {
  NumberOfJobs?: number;
  CloudwatchLogsEnabled?: boolean;
  SelectionRules?: string;
}
export interface DataMigrationStatistics {
  TablesLoaded?: number;
  ElapsedTimeMillis?: number;
  TablesLoading?: number;
  FullLoadPercentage?: number;
  CDCLatency?: number;
  TablesQueued?: number;
  TablesErrored?: number;
  StartTime?: Date | string;
  StopTime?: Date | string;
}
export interface DataProvider {
  DataProviderName?: string;
  DataProviderArn?: string;
  DataProviderCreationTime?: Date | string;
  Description?: string;
  Engine?: string;
  Virtual?: boolean;
  Settings?: DataProviderSettings;
}
export interface DataProviderDescriptor {
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
  DataProviderName?: string;
  DataProviderArn?: string;
}
export interface DataProviderDescriptorDefinition {
  DataProviderIdentifier: string;
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
}
export type DataProviderDescriptorDefinitionList =
  Array<DataProviderDescriptorDefinition>;
export type DataProviderDescriptorList = Array<DataProviderDescriptor>;
export type DataProviderList = Array<DataProvider>;
export type DataProviderSettings =
  | {
      RedshiftSettings: RedshiftDataProviderSettings;
      PostgreSqlSettings?: undefined;
      MySqlSettings?: undefined;
      OracleSettings?: undefined;
      MicrosoftSqlServerSettings?: undefined;
      DocDbSettings?: undefined;
      MariaDbSettings?: undefined;
      IbmDb2LuwSettings?: undefined;
      IbmDb2zOsSettings?: undefined;
      MongoDbSettings?: undefined;
    }
  | {
      RedshiftSettings?: undefined;
      PostgreSqlSettings: PostgreSqlDataProviderSettings;
      MySqlSettings?: undefined;
      OracleSettings?: undefined;
      MicrosoftSqlServerSettings?: undefined;
      DocDbSettings?: undefined;
      MariaDbSettings?: undefined;
      IbmDb2LuwSettings?: undefined;
      IbmDb2zOsSettings?: undefined;
      MongoDbSettings?: undefined;
    }
  | {
      RedshiftSettings?: undefined;
      PostgreSqlSettings?: undefined;
      MySqlSettings: MySqlDataProviderSettings;
      OracleSettings?: undefined;
      MicrosoftSqlServerSettings?: undefined;
      DocDbSettings?: undefined;
      MariaDbSettings?: undefined;
      IbmDb2LuwSettings?: undefined;
      IbmDb2zOsSettings?: undefined;
      MongoDbSettings?: undefined;
    }
  | {
      RedshiftSettings?: undefined;
      PostgreSqlSettings?: undefined;
      MySqlSettings?: undefined;
      OracleSettings: OracleDataProviderSettings;
      MicrosoftSqlServerSettings?: undefined;
      DocDbSettings?: undefined;
      MariaDbSettings?: undefined;
      IbmDb2LuwSettings?: undefined;
      IbmDb2zOsSettings?: undefined;
      MongoDbSettings?: undefined;
    }
  | {
      RedshiftSettings?: undefined;
      PostgreSqlSettings?: undefined;
      MySqlSettings?: undefined;
      OracleSettings?: undefined;
      MicrosoftSqlServerSettings: MicrosoftSqlServerDataProviderSettings;
      DocDbSettings?: undefined;
      MariaDbSettings?: undefined;
      IbmDb2LuwSettings?: undefined;
      IbmDb2zOsSettings?: undefined;
      MongoDbSettings?: undefined;
    }
  | {
      RedshiftSettings?: undefined;
      PostgreSqlSettings?: undefined;
      MySqlSettings?: undefined;
      OracleSettings?: undefined;
      MicrosoftSqlServerSettings?: undefined;
      DocDbSettings: DocDbDataProviderSettings;
      MariaDbSettings?: undefined;
      IbmDb2LuwSettings?: undefined;
      IbmDb2zOsSettings?: undefined;
      MongoDbSettings?: undefined;
    }
  | {
      RedshiftSettings?: undefined;
      PostgreSqlSettings?: undefined;
      MySqlSettings?: undefined;
      OracleSettings?: undefined;
      MicrosoftSqlServerSettings?: undefined;
      DocDbSettings?: undefined;
      MariaDbSettings: MariaDbDataProviderSettings;
      IbmDb2LuwSettings?: undefined;
      IbmDb2zOsSettings?: undefined;
      MongoDbSettings?: undefined;
    }
  | {
      RedshiftSettings?: undefined;
      PostgreSqlSettings?: undefined;
      MySqlSettings?: undefined;
      OracleSettings?: undefined;
      MicrosoftSqlServerSettings?: undefined;
      DocDbSettings?: undefined;
      MariaDbSettings?: undefined;
      IbmDb2LuwSettings: IbmDb2LuwDataProviderSettings;
      IbmDb2zOsSettings?: undefined;
      MongoDbSettings?: undefined;
    }
  | {
      RedshiftSettings?: undefined;
      PostgreSqlSettings?: undefined;
      MySqlSettings?: undefined;
      OracleSettings?: undefined;
      MicrosoftSqlServerSettings?: undefined;
      DocDbSettings?: undefined;
      MariaDbSettings?: undefined;
      IbmDb2LuwSettings?: undefined;
      IbmDb2zOsSettings: IbmDb2zOsDataProviderSettings;
      MongoDbSettings?: undefined;
    }
  | {
      RedshiftSettings?: undefined;
      PostgreSqlSettings?: undefined;
      MySqlSettings?: undefined;
      OracleSettings?: undefined;
      MicrosoftSqlServerSettings?: undefined;
      DocDbSettings?: undefined;
      MariaDbSettings?: undefined;
      IbmDb2LuwSettings?: undefined;
      IbmDb2zOsSettings?: undefined;
      MongoDbSettings: MongoDbDataProviderSettings;
    };
export type DatePartitionDelimiterValue =
  | "SLASH"
  | "UNDERSCORE"
  | "DASH"
  | "NONE";
export type DatePartitionSequenceValue =
  | "YYYYMMDD"
  | "YYYYMMDDHH"
  | "YYYYMM"
  | "MMYYYYDD"
  | "DDMMYYYY";
export interface DefaultErrorDetails {
  Message?: string;
}
export interface DeleteCertificateMessage {
  CertificateArn: string;
}
export interface DeleteCertificateResponse {
  Certificate?: Certificate;
}
export interface DeleteCollectorRequest {
  CollectorReferencedId: string;
}
export interface DeleteConnectionMessage {
  EndpointArn: string;
  ReplicationInstanceArn: string;
}
export interface DeleteConnectionResponse {
  Connection?: Connection;
}
export interface DeleteDataMigrationMessage {
  DataMigrationIdentifier: string;
}
export interface DeleteDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface DeleteDataProviderMessage {
  DataProviderIdentifier: string;
}
export interface DeleteDataProviderResponse {
  DataProvider?: DataProvider;
}
export interface DeleteEndpointMessage {
  EndpointArn: string;
}
export interface DeleteEndpointResponse {
  Endpoint?: Endpoint;
}
export interface DeleteEventSubscriptionMessage {
  SubscriptionName: string;
}
export interface DeleteEventSubscriptionResponse {
  EventSubscription?: EventSubscription;
}
export interface DeleteFleetAdvisorDatabasesRequest {
  DatabaseIds: Array<string>;
}
export interface DeleteFleetAdvisorDatabasesResponse {
  DatabaseIds?: Array<string>;
}
export interface DeleteInstanceProfileMessage {
  InstanceProfileIdentifier: string;
}
export interface DeleteInstanceProfileResponse {
  InstanceProfile?: InstanceProfile;
}
export interface DeleteMigrationProjectMessage {
  MigrationProjectIdentifier: string;
}
export interface DeleteMigrationProjectResponse {
  MigrationProject?: MigrationProject;
}
export interface DeleteReplicationConfigMessage {
  ReplicationConfigArn: string;
}
export interface DeleteReplicationConfigResponse {
  ReplicationConfig?: ReplicationConfig;
}
export interface DeleteReplicationInstanceMessage {
  ReplicationInstanceArn: string;
}
export interface DeleteReplicationInstanceResponse {
  ReplicationInstance?: ReplicationInstance;
}
export interface DeleteReplicationSubnetGroupMessage {
  ReplicationSubnetGroupIdentifier: string;
}
export interface DeleteReplicationSubnetGroupResponse {}
export interface DeleteReplicationTaskAssessmentRunMessage {
  ReplicationTaskAssessmentRunArn: string;
}
export interface DeleteReplicationTaskAssessmentRunResponse {
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}
export interface DeleteReplicationTaskMessage {
  ReplicationTaskArn: string;
}
export interface DeleteReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export interface DescribeAccountAttributesMessage {}
export interface DescribeAccountAttributesResponse {
  AccountQuotas?: Array<AccountQuota>;
  UniqueAccountIdentifier?: string;
}
export interface DescribeApplicableIndividualAssessmentsMessage {
  ReplicationTaskArn?: string;
  ReplicationInstanceArn?: string;
  ReplicationConfigArn?: string;
  SourceEngineName?: string;
  TargetEngineName?: string;
  MigrationType?: MigrationTypeValue;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeApplicableIndividualAssessmentsResponse {
  IndividualAssessmentNames?: Array<string>;
  Marker?: string;
}
export interface DescribeCertificatesMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeCertificatesResponse {
  Marker?: string;
  Certificates?: Array<Certificate>;
}
export interface DescribeConnectionsMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeConnectionsResponse {
  Marker?: string;
  Connections?: Array<Connection>;
}
export interface DescribeConversionConfigurationMessage {
  MigrationProjectIdentifier: string;
}
export interface DescribeConversionConfigurationResponse {
  MigrationProjectIdentifier?: string;
  ConversionConfiguration?: string;
}
export interface DescribeDataMigrationsMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
  WithoutSettings?: boolean;
  WithoutStatistics?: boolean;
}
export interface DescribeDataMigrationsResponse {
  DataMigrations?: Array<DataMigration>;
  Marker?: string;
}
export interface DescribeDataProvidersMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDataProvidersResponse {
  Marker?: string;
  DataProviders?: Array<DataProvider>;
}
export interface DescribeEndpointSettingsMessage {
  EngineName: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEndpointSettingsResponse {
  Marker?: string;
  EndpointSettings?: Array<EndpointSetting>;
}
export interface DescribeEndpointsMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEndpointsResponse {
  Marker?: string;
  Endpoints?: Array<Endpoint>;
}
export interface DescribeEndpointTypesMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEndpointTypesResponse {
  Marker?: string;
  SupportedEndpointTypes?: Array<SupportedEndpointType>;
}
export interface DescribeEngineVersionsMessage {
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEngineVersionsResponse {
  EngineVersions?: Array<EngineVersion>;
  Marker?: string;
}
export interface DescribeEventCategoriesMessage {
  SourceType?: string;
  Filters?: Array<Filter>;
}
export interface DescribeEventCategoriesResponse {
  EventCategoryGroupList?: Array<EventCategoryGroup>;
}
export interface DescribeEventsMessage {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Duration?: number;
  EventCategories?: Array<string>;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEventsResponse {
  Marker?: string;
  Events?: Array<Event>;
}
export interface DescribeEventSubscriptionsMessage {
  SubscriptionName?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEventSubscriptionsResponse {
  Marker?: string;
  EventSubscriptionsList?: Array<EventSubscription>;
}
export interface DescribeExtensionPackAssociationsMessage {
  MigrationProjectIdentifier: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeExtensionPackAssociationsResponse {
  Marker?: string;
  Requests?: Array<SchemaConversionRequest>;
}
export interface DescribeFleetAdvisorCollectorsRequest {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeFleetAdvisorCollectorsResponse {
  Collectors?: Array<CollectorResponse>;
  NextToken?: string;
}
export interface DescribeFleetAdvisorDatabasesRequest {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeFleetAdvisorDatabasesResponse {
  Databases?: Array<DatabaseResponse>;
  NextToken?: string;
}
export interface DescribeFleetAdvisorLsaAnalysisRequest {
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeFleetAdvisorLsaAnalysisResponse {
  Analysis?: Array<FleetAdvisorLsaAnalysisResponse>;
  NextToken?: string;
}
export interface DescribeFleetAdvisorSchemaObjectSummaryRequest {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeFleetAdvisorSchemaObjectSummaryResponse {
  FleetAdvisorSchemaObjects?: Array<FleetAdvisorSchemaObjectResponse>;
  NextToken?: string;
}
export interface DescribeFleetAdvisorSchemasRequest {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeFleetAdvisorSchemasResponse {
  FleetAdvisorSchemas?: Array<SchemaResponse>;
  NextToken?: string;
}
export interface DescribeInstanceProfilesMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeInstanceProfilesResponse {
  Marker?: string;
  InstanceProfiles?: Array<InstanceProfile>;
}
export interface DescribeMetadataModelAssessmentsMessage {
  MigrationProjectIdentifier: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelAssessmentsResponse {
  Marker?: string;
  Requests?: Array<SchemaConversionRequest>;
}
export interface DescribeMetadataModelConversionsMessage {
  MigrationProjectIdentifier: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelConversionsResponse {
  Marker?: string;
  Requests?: Array<SchemaConversionRequest>;
}
export interface DescribeMetadataModelExportsAsScriptMessage {
  MigrationProjectIdentifier: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelExportsAsScriptResponse {
  Marker?: string;
  Requests?: Array<SchemaConversionRequest>;
}
export interface DescribeMetadataModelExportsToTargetMessage {
  MigrationProjectIdentifier: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelExportsToTargetResponse {
  Marker?: string;
  Requests?: Array<SchemaConversionRequest>;
}
export interface DescribeMetadataModelImportsMessage {
  MigrationProjectIdentifier: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelImportsResponse {
  Marker?: string;
  Requests?: Array<SchemaConversionRequest>;
}
export interface DescribeMigrationProjectsMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeMigrationProjectsResponse {
  Marker?: string;
  MigrationProjects?: Array<MigrationProject>;
}
export interface DescribeOrderableReplicationInstancesMessage {
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeOrderableReplicationInstancesResponse {
  OrderableReplicationInstances?: Array<OrderableReplicationInstance>;
  Marker?: string;
}
export interface DescribePendingMaintenanceActionsMessage {
  ReplicationInstanceArn?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribePendingMaintenanceActionsResponse {
  PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions>;
  Marker?: string;
}
export interface DescribeRecommendationLimitationsRequest {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeRecommendationLimitationsResponse {
  NextToken?: string;
  Limitations?: Array<Limitation>;
}
export interface DescribeRecommendationsRequest {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeRecommendationsResponse {
  NextToken?: string;
  Recommendations?: Array<Recommendation>;
}
export interface DescribeRefreshSchemasStatusMessage {
  EndpointArn: string;
}
export interface DescribeRefreshSchemasStatusResponse {
  RefreshSchemasStatus?: RefreshSchemasStatus;
}
export interface DescribeReplicationConfigsMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReplicationConfigsResponse {
  Marker?: string;
  ReplicationConfigs?: Array<ReplicationConfig>;
}
export interface DescribeReplicationInstancesMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReplicationInstancesResponse {
  Marker?: string;
  ReplicationInstances?: Array<ReplicationInstance>;
}
export interface DescribeReplicationInstanceTaskLogsMessage {
  ReplicationInstanceArn: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReplicationInstanceTaskLogsResponse {
  ReplicationInstanceArn?: string;
  ReplicationInstanceTaskLogs?: Array<ReplicationInstanceTaskLog>;
  Marker?: string;
}
export interface DescribeReplicationsMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReplicationsResponse {
  Marker?: string;
  Replications?: Array<Replication>;
}
export interface DescribeReplicationSubnetGroupsMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReplicationSubnetGroupsResponse {
  Marker?: string;
  ReplicationSubnetGroups?: Array<ReplicationSubnetGroup>;
}
export interface DescribeReplicationTableStatisticsMessage {
  ReplicationConfigArn: string;
  MaxRecords?: number;
  Marker?: string;
  Filters?: Array<Filter>;
}
export interface DescribeReplicationTableStatisticsResponse {
  ReplicationConfigArn?: string;
  Marker?: string;
  ReplicationTableStatistics?: Array<TableStatistics>;
}
export interface DescribeReplicationTaskAssessmentResultsMessage {
  ReplicationTaskArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReplicationTaskAssessmentResultsResponse {
  Marker?: string;
  BucketName?: string;
  ReplicationTaskAssessmentResults?: Array<ReplicationTaskAssessmentResult>;
}
export interface DescribeReplicationTaskAssessmentRunsMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReplicationTaskAssessmentRunsResponse {
  Marker?: string;
  ReplicationTaskAssessmentRuns?: Array<ReplicationTaskAssessmentRun>;
}
export interface DescribeReplicationTaskIndividualAssessmentsMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReplicationTaskIndividualAssessmentsResponse {
  Marker?: string;
  ReplicationTaskIndividualAssessments?: Array<ReplicationTaskIndividualAssessment>;
}
export interface DescribeReplicationTasksMessage {
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
  WithoutSettings?: boolean;
}
export interface DescribeReplicationTasksResponse {
  Marker?: string;
  ReplicationTasks?: Array<ReplicationTask>;
}
export interface DescribeSchemasMessage {
  EndpointArn: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeSchemasResponse {
  Marker?: string;
  Schemas?: Array<string>;
}
export interface DescribeTableStatisticsMessage {
  ReplicationTaskArn: string;
  MaxRecords?: number;
  Marker?: string;
  Filters?: Array<Filter>;
}
export interface DescribeTableStatisticsResponse {
  ReplicationTaskArn?: string;
  TableStatistics?: Array<TableStatistics>;
  Marker?: string;
}
export type DmsSslModeValue = "NONE" | "REQUIRE" | "VERIFY_CA" | "VERIFY_FULL";
export interface DmsTransferSettings {
  ServiceAccessRoleArn?: string;
  BucketName?: string;
}
export interface DocDbDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
}
export interface DocDbSettings {
  Username?: string;
  Password?: string;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  NestingLevel?: NestingLevelValue;
  ExtractDocId?: boolean;
  DocsToInvestigate?: number;
  KmsKeyId?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  UseUpdateLookUp?: boolean;
  ReplicateShardCollections?: boolean;
}
export type DoubleOptional = number;

export interface DynamoDbSettings {
  ServiceAccessRoleArn: string;
}
export interface ElasticsearchSettings {
  ServiceAccessRoleArn: string;
  EndpointUri: string;
  FullLoadErrorPercentage?: number;
  ErrorRetryDuration?: number;
  UseNewMappingType?: boolean;
}
export type EncodingTypeValue = "PLAIN" | "PLAIN_DICTIONARY" | "RLE_DICTIONARY";
export type EncryptionModeValue = "SSE_S3" | "SSE_KMS";
export interface Endpoint {
  EndpointIdentifier?: string;
  EndpointType?: ReplicationEndpointTypeValue;
  EngineName?: string;
  EngineDisplayName?: string;
  Username?: string;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  ExtraConnectionAttributes?: string;
  Status?: string;
  KmsKeyId?: string;
  EndpointArn?: string;
  CertificateArn?: string;
  SslMode?: DmsSslModeValue;
  ServiceAccessRoleArn?: string;
  ExternalTableDefinition?: string;
  ExternalId?: string;
  DynamoDbSettings?: DynamoDbSettings;
  S3Settings?: S3Settings;
  DmsTransferSettings?: DmsTransferSettings;
  MongoDbSettings?: MongoDbSettings;
  KinesisSettings?: KinesisSettings;
  KafkaSettings?: KafkaSettings;
  ElasticsearchSettings?: ElasticsearchSettings;
  NeptuneSettings?: NeptuneSettings;
  RedshiftSettings?: RedshiftSettings;
  PostgreSQLSettings?: PostgreSQLSettings;
  MySQLSettings?: MySQLSettings;
  OracleSettings?: OracleSettings;
  SybaseSettings?: SybaseSettings;
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
  IBMDb2Settings?: IBMDb2Settings;
  DocDbSettings?: DocDbSettings;
  RedisSettings?: RedisSettings;
  GcpMySQLSettings?: GcpMySQLSettings;
  TimestreamSettings?: TimestreamSettings;
}
export type EndpointList = Array<Endpoint>;
export interface EndpointSetting {
  Name?: string;
  Type?: EndpointSettingTypeValue;
  EnumValues?: Array<string>;
  Sensitive?: boolean;
  Units?: string;
  Applicability?: string;
  IntValueMin?: number;
  IntValueMax?: number;
  DefaultValue?: string;
}
export type EndpointSettingEnumValues = Array<string>;
export type EndpointSettingsList = Array<EndpointSetting>;
export type EndpointSettingTypeValue =
  | "STRING"
  | "BOOLEAN"
  | "INTEGER"
  | "ENUM";
export interface EngineVersion {
  Version?: string;
  Lifecycle?: string;
  ReleaseStatus?: ReleaseStatusValues;
  LaunchDate?: Date | string;
  AutoUpgradeDate?: Date | string;
  DeprecationDate?: Date | string;
  ForceUpgradeDate?: Date | string;
  AvailableUpgrades?: Array<string>;
}
export type EngineVersionList = Array<EngineVersion>;
export type ErrorDetails = { defaultErrorDetails: DefaultErrorDetails };
export interface Event {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  Message?: string;
  EventCategories?: Array<string>;
  Date?: Date | string;
}
export type EventCategoriesList = Array<string>;
export interface EventCategoryGroup {
  SourceType?: string;
  EventCategories?: Array<string>;
}
export type EventCategoryGroupList = Array<EventCategoryGroup>;
export type EventList = Array<Event>;
export interface EventSubscription {
  CustomerAwsId?: string;
  CustSubscriptionId?: string;
  SnsTopicArn?: string;
  Status?: string;
  SubscriptionCreationTime?: string;
  SourceType?: string;
  SourceIdsList?: Array<string>;
  EventCategoriesList?: Array<string>;
  Enabled?: boolean;
}
export type EventSubscriptionsList = Array<EventSubscription>;
export type ExceptionMessage = string;

export type ExcludeTestList = Array<string>;
export interface ExportMetadataModelAssessmentMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
  FileName?: string;
  AssessmentReportTypes?: Array<AssessmentReportType>;
}
export interface ExportMetadataModelAssessmentResponse {
  PdfReport?: ExportMetadataModelAssessmentResultEntry;
  CsvReport?: ExportMetadataModelAssessmentResultEntry;
}
export interface ExportMetadataModelAssessmentResultEntry {
  S3ObjectKey?: string;
  ObjectURL?: string;
}
export interface ExportSqlDetails {
  S3ObjectKey?: string;
  ObjectURL?: string;
}
export declare class FailedDependencyFault extends EffectData.TaggedError(
  "FailedDependencyFault",
)<{
  readonly message?: string;
}> {}
export interface Filter {
  Name: string;
  Values: Array<string>;
}
export type FilterList = Array<Filter>;
export type FilterValueList = Array<string>;
export interface FleetAdvisorLsaAnalysisResponse {
  LsaAnalysisId?: string;
  Status?: string;
}
export type FleetAdvisorLsaAnalysisResponseList =
  Array<FleetAdvisorLsaAnalysisResponse>;
export type FleetAdvisorSchemaList = Array<SchemaResponse>;
export type FleetAdvisorSchemaObjectList =
  Array<FleetAdvisorSchemaObjectResponse>;
export interface FleetAdvisorSchemaObjectResponse {
  SchemaId?: string;
  ObjectType?: string;
  NumberOfObjects?: number;
  CodeLineCount?: number;
  CodeSize?: number;
}
export interface GcpMySQLSettings {
  AfterConnectScript?: string;
  CleanSourceMetadataOnMismatch?: boolean;
  DatabaseName?: string;
  EventsPollInterval?: number;
  TargetDbType?: TargetDbType;
  MaxFileSize?: number;
  ParallelLoadThreads?: number;
  Password?: string;
  Port?: number;
  ServerName?: string;
  ServerTimezone?: string;
  Username?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export interface IbmDb2LuwDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface IBMDb2Settings {
  DatabaseName?: string;
  Password?: string;
  Port?: number;
  ServerName?: string;
  SetDataCaptureChanges?: boolean;
  CurrentLsn?: string;
  MaxKBytesPerRead?: number;
  Username?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  LoadTimeout?: number;
  WriteBufferSize?: number;
  MaxFileSize?: number;
  KeepCsvFiles?: boolean;
}
export interface IbmDb2zOsDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface ImportCertificateMessage {
  CertificateIdentifier: string;
  CertificatePem?: string;
  CertificateWallet?: Uint8Array | string;
  Tags?: Array<Tag>;
}
export interface ImportCertificateResponse {
  Certificate?: Certificate;
}
export type IncludeTestList = Array<string>;
export type IndividualAssessmentNameList = Array<string>;
export interface InstanceProfile {
  InstanceProfileArn?: string;
  AvailabilityZone?: string;
  KmsKeyArn?: string;
  PubliclyAccessible?: boolean;
  NetworkType?: string;
  InstanceProfileName?: string;
  Description?: string;
  InstanceProfileCreationTime?: Date | string;
  SubnetGroupIdentifier?: string;
  VpcSecurityGroups?: Array<string>;
}
export type InstanceProfileList = Array<InstanceProfile>;
export declare class InsufficientResourceCapacityFault extends EffectData.TaggedError(
  "InsufficientResourceCapacityFault",
)<{
  readonly message?: string;
}> {}
export type Integer = number;

export type IntegerList = Array<number>;
export type IntegerOptional = number;

export declare class InvalidCertificateFault extends EffectData.TaggedError(
  "InvalidCertificateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidOperationFault extends EffectData.TaggedError(
  "InvalidOperationFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidResourceStateFault extends EffectData.TaggedError(
  "InvalidResourceStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSubnet extends EffectData.TaggedError(
  "InvalidSubnet",
)<{
  readonly message?: string;
}> {}
export interface InventoryData {
  NumberOfDatabases?: number;
  NumberOfSchemas?: number;
}
export type Iso8601DateTime = Date | string;

export type KafkaSaslMechanism = "SCRAM_SHA_512" | "PLAIN";
export type KafkaSecurityProtocol =
  | "PLAINTEXT"
  | "SSL_AUTHENTICATION"
  | "SSL_ENCRYPTION"
  | "SASL_SSL";
export interface KafkaSettings {
  Broker?: string;
  Topic?: string;
  MessageFormat?: MessageFormatValue;
  IncludeTransactionDetails?: boolean;
  IncludePartitionValue?: boolean;
  PartitionIncludeSchemaTable?: boolean;
  IncludeTableAlterOperations?: boolean;
  IncludeControlDetails?: boolean;
  MessageMaxBytes?: number;
  IncludeNullAndEmpty?: boolean;
  SecurityProtocol?: KafkaSecurityProtocol;
  SslClientCertificateArn?: string;
  SslClientKeyArn?: string;
  SslClientKeyPassword?: string;
  SslCaCertificateArn?: string;
  SaslUsername?: string;
  SaslPassword?: string;
  NoHexPrefix?: boolean;
  SaslMechanism?: KafkaSaslMechanism;
  SslEndpointIdentificationAlgorithm?: KafkaSslEndpointIdentificationAlgorithm;
  UseLargeIntegerValue?: boolean;
}
export type KafkaSslEndpointIdentificationAlgorithm = "NONE" | "HTTPS";
export interface KerberosAuthenticationSettings {
  KeyCacheSecretId?: string;
  KeyCacheSecretIamArn?: string;
  Krb5FileContents?: string;
}
export type KeyList = Array<string>;
export interface KinesisSettings {
  StreamArn?: string;
  MessageFormat?: MessageFormatValue;
  ServiceAccessRoleArn?: string;
  IncludeTransactionDetails?: boolean;
  IncludePartitionValue?: boolean;
  PartitionIncludeSchemaTable?: boolean;
  IncludeTableAlterOperations?: boolean;
  IncludeControlDetails?: boolean;
  IncludeNullAndEmpty?: boolean;
  NoHexPrefix?: boolean;
  UseLargeIntegerValue?: boolean;
}
export declare class KMSAccessDeniedFault extends EffectData.TaggedError(
  "KMSAccessDeniedFault",
)<{
  readonly message?: string;
}> {}
export declare class KMSDisabledFault extends EffectData.TaggedError(
  "KMSDisabledFault",
)<{
  readonly message?: string;
}> {}
export declare class KMSFault extends EffectData.TaggedError("KMSFault")<{
  readonly message?: string;
}> {}
export declare class KMSInvalidStateFault extends EffectData.TaggedError(
  "KMSInvalidStateFault",
)<{
  readonly message?: string;
}> {}
export declare class KMSKeyNotAccessibleFault extends EffectData.TaggedError(
  "KMSKeyNotAccessibleFault",
)<{
  readonly message?: string;
}> {}
export declare class KMSNotFoundFault extends EffectData.TaggedError(
  "KMSNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class KMSThrottlingFault extends EffectData.TaggedError(
  "KMSThrottlingFault",
)<{
  readonly message?: string;
}> {}
export interface Limitation {
  DatabaseId?: string;
  EngineName?: string;
  Name?: string;
  Description?: string;
  Impact?: string;
  Type?: string;
}
export type LimitationList = Array<Limitation>;
export interface ListTagsForResourceMessage {
  ResourceArn?: string;
  ResourceArnList?: Array<string>;
}
export interface ListTagsForResourceResponse {
  TagList?: Array<Tag>;
}
export type Long = number;

export type LongOptional = number;

export type LongVarcharMappingType = "WSTRING" | "CLOB" | "NCLOB";
export interface MariaDbDataProviderSettings {
  ServerName?: string;
  Port?: number;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export type Marker = string;

export type MessageFormatValue = "JSON" | "JSON_UNFORMATTED";
export interface MicrosoftSqlServerDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface MicrosoftSQLServerSettings {
  Port?: number;
  BcpPacketSize?: number;
  DatabaseName?: string;
  ControlTablesFileGroup?: string;
  Password?: string;
  QuerySingleAlwaysOnNode?: boolean;
  ReadBackupOnly?: boolean;
  SafeguardPolicy?: SafeguardPolicy;
  ServerName?: string;
  Username?: string;
  UseBcpFullLoad?: boolean;
  UseThirdPartyBackupDevice?: boolean;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  TrimSpaceInChar?: boolean;
  TlogAccessMode?: TlogAccessMode;
  ForceLobLookup?: boolean;
  AuthenticationMethod?: SqlServerAuthenticationMethod;
}
export interface MigrationProject {
  MigrationProjectName?: string;
  MigrationProjectArn?: string;
  MigrationProjectCreationTime?: Date | string;
  SourceDataProviderDescriptors?: Array<DataProviderDescriptor>;
  TargetDataProviderDescriptors?: Array<DataProviderDescriptor>;
  InstanceProfileArn?: string;
  InstanceProfileName?: string;
  TransformationRules?: string;
  Description?: string;
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}
export type MigrationProjectIdentifier = string;

export type MigrationProjectList = Array<MigrationProject>;
export type MigrationTypeValue = "FULL_LOAD" | "CDC" | "FULL_LOAD_AND_CDC";
export interface ModifyConversionConfigurationMessage {
  MigrationProjectIdentifier: string;
  ConversionConfiguration: string;
}
export interface ModifyConversionConfigurationResponse {
  MigrationProjectIdentifier?: string;
}
export interface ModifyDataMigrationMessage {
  DataMigrationIdentifier: string;
  DataMigrationName?: string;
  EnableCloudwatchLogs?: boolean;
  ServiceAccessRoleArn?: string;
  DataMigrationType?: MigrationTypeValue;
  SourceDataSettings?: Array<SourceDataSetting>;
  TargetDataSettings?: Array<TargetDataSetting>;
  NumberOfJobs?: number;
  SelectionRules?: string;
}
export interface ModifyDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface ModifyDataProviderMessage {
  DataProviderIdentifier: string;
  DataProviderName?: string;
  Description?: string;
  Engine?: string;
  Virtual?: boolean;
  ExactSettings?: boolean;
  Settings?: DataProviderSettings;
}
export interface ModifyDataProviderResponse {
  DataProvider?: DataProvider;
}
export interface ModifyEndpointMessage {
  EndpointArn: string;
  EndpointIdentifier?: string;
  EndpointType?: ReplicationEndpointTypeValue;
  EngineName?: string;
  Username?: string;
  Password?: string;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  ExtraConnectionAttributes?: string;
  CertificateArn?: string;
  SslMode?: DmsSslModeValue;
  ServiceAccessRoleArn?: string;
  ExternalTableDefinition?: string;
  DynamoDbSettings?: DynamoDbSettings;
  S3Settings?: S3Settings;
  DmsTransferSettings?: DmsTransferSettings;
  MongoDbSettings?: MongoDbSettings;
  KinesisSettings?: KinesisSettings;
  KafkaSettings?: KafkaSettings;
  ElasticsearchSettings?: ElasticsearchSettings;
  NeptuneSettings?: NeptuneSettings;
  RedshiftSettings?: RedshiftSettings;
  PostgreSQLSettings?: PostgreSQLSettings;
  MySQLSettings?: MySQLSettings;
  OracleSettings?: OracleSettings;
  SybaseSettings?: SybaseSettings;
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
  IBMDb2Settings?: IBMDb2Settings;
  DocDbSettings?: DocDbSettings;
  RedisSettings?: RedisSettings;
  ExactSettings?: boolean;
  GcpMySQLSettings?: GcpMySQLSettings;
  TimestreamSettings?: TimestreamSettings;
}
export interface ModifyEndpointResponse {
  Endpoint?: Endpoint;
}
export interface ModifyEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn?: string;
  SourceType?: string;
  EventCategories?: Array<string>;
  Enabled?: boolean;
}
export interface ModifyEventSubscriptionResponse {
  EventSubscription?: EventSubscription;
}
export interface ModifyInstanceProfileMessage {
  InstanceProfileIdentifier: string;
  AvailabilityZone?: string;
  KmsKeyArn?: string;
  PubliclyAccessible?: boolean;
  NetworkType?: string;
  InstanceProfileName?: string;
  Description?: string;
  SubnetGroupIdentifier?: string;
  VpcSecurityGroups?: Array<string>;
}
export interface ModifyInstanceProfileResponse {
  InstanceProfile?: InstanceProfile;
}
export interface ModifyMigrationProjectMessage {
  MigrationProjectIdentifier: string;
  MigrationProjectName?: string;
  SourceDataProviderDescriptors?: Array<DataProviderDescriptorDefinition>;
  TargetDataProviderDescriptors?: Array<DataProviderDescriptorDefinition>;
  InstanceProfileIdentifier?: string;
  TransformationRules?: string;
  Description?: string;
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}
export interface ModifyMigrationProjectResponse {
  MigrationProject?: MigrationProject;
}
export interface ModifyReplicationConfigMessage {
  ReplicationConfigArn: string;
  ReplicationConfigIdentifier?: string;
  ReplicationType?: MigrationTypeValue;
  TableMappings?: string;
  ReplicationSettings?: string;
  SupplementalSettings?: string;
  ComputeConfig?: ComputeConfig;
  SourceEndpointArn?: string;
  TargetEndpointArn?: string;
}
export interface ModifyReplicationConfigResponse {
  ReplicationConfig?: ReplicationConfig;
}
export interface ModifyReplicationInstanceMessage {
  ReplicationInstanceArn: string;
  AllocatedStorage?: number;
  ApplyImmediately?: boolean;
  ReplicationInstanceClass?: string;
  VpcSecurityGroupIds?: Array<string>;
  PreferredMaintenanceWindow?: string;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  ReplicationInstanceIdentifier?: string;
  NetworkType?: string;
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings;
}
export interface ModifyReplicationInstanceResponse {
  ReplicationInstance?: ReplicationInstance;
}
export interface ModifyReplicationSubnetGroupMessage {
  ReplicationSubnetGroupIdentifier: string;
  ReplicationSubnetGroupDescription?: string;
  SubnetIds: Array<string>;
}
export interface ModifyReplicationSubnetGroupResponse {
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}
export interface ModifyReplicationTaskMessage {
  ReplicationTaskArn: string;
  ReplicationTaskIdentifier?: string;
  MigrationType?: MigrationTypeValue;
  TableMappings?: string;
  ReplicationTaskSettings?: string;
  CdcStartTime?: Date | string;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
  TaskData?: string;
}
export interface ModifyReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export interface MongoDbDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  AuthType?: AuthTypeValue;
  AuthSource?: string;
  AuthMechanism?: AuthMechanismValue;
}
export interface MongoDbSettings {
  Username?: string;
  Password?: string;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  AuthType?: AuthTypeValue;
  AuthMechanism?: AuthMechanismValue;
  NestingLevel?: NestingLevelValue;
  ExtractDocId?: string;
  DocsToInvestigate?: string;
  AuthSource?: string;
  KmsKeyId?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  UseUpdateLookUp?: boolean;
  ReplicateShardCollections?: boolean;
}
export interface MoveReplicationTaskMessage {
  ReplicationTaskArn: string;
  TargetReplicationInstanceArn: string;
}
export interface MoveReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export type MySQLAuthenticationMethod = "Password" | "IAM";
export interface MySqlDataProviderSettings {
  ServerName?: string;
  Port?: number;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface MySQLSettings {
  AfterConnectScript?: string;
  CleanSourceMetadataOnMismatch?: boolean;
  DatabaseName?: string;
  EventsPollInterval?: number;
  TargetDbType?: TargetDbType;
  MaxFileSize?: number;
  ParallelLoadThreads?: number;
  Password?: string;
  Port?: number;
  ServerName?: string;
  ServerTimezone?: string;
  Username?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  ExecuteTimeout?: number;
  ServiceAccessRoleArn?: string;
  AuthenticationMethod?: MySQLAuthenticationMethod;
}
export interface NeptuneSettings {
  ServiceAccessRoleArn?: string;
  S3BucketName: string;
  S3BucketFolder: string;
  ErrorRetryDuration?: number;
  MaxFileSize?: number;
  MaxRetryCount?: number;
  IamAuthEnabled?: boolean;
}
export type NestingLevelValue = "NONE" | "ONE";
export type OracleAuthenticationMethod = "Password" | "Kerberos";
export interface OracleDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  AsmServer?: string;
  SecretsManagerOracleAsmSecretId?: string;
  SecretsManagerOracleAsmAccessRoleArn?: string;
  SecretsManagerSecurityDbEncryptionSecretId?: string;
  SecretsManagerSecurityDbEncryptionAccessRoleArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface OracleSettings {
  AddSupplementalLogging?: boolean;
  ArchivedLogDestId?: number;
  AdditionalArchivedLogDestId?: number;
  ExtraArchivedLogDestIds?: Array<number>;
  AllowSelectNestedTables?: boolean;
  ParallelAsmReadThreads?: number;
  ReadAheadBlocks?: number;
  AccessAlternateDirectly?: boolean;
  UseAlternateFolderForOnline?: boolean;
  OraclePathPrefix?: string;
  UsePathPrefix?: string;
  ReplacePathPrefix?: boolean;
  EnableHomogenousTablespace?: boolean;
  DirectPathNoLog?: boolean;
  ArchivedLogsOnly?: boolean;
  AsmPassword?: string;
  AsmServer?: string;
  AsmUser?: string;
  CharLengthSemantics?: CharLengthSemantics;
  DatabaseName?: string;
  DirectPathParallelLoad?: boolean;
  FailTasksOnLobTruncation?: boolean;
  NumberDatatypeScale?: number;
  Password?: string;
  Port?: number;
  ReadTableSpaceName?: boolean;
  RetryInterval?: number;
  SecurityDbEncryption?: string;
  SecurityDbEncryptionName?: string;
  ServerName?: string;
  SpatialDataOptionToGeoJsonFunctionName?: string;
  StandbyDelayTime?: number;
  Username?: string;
  UseBFile?: boolean;
  UseDirectPathFullLoad?: boolean;
  UseLogminerReader?: boolean;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  SecretsManagerOracleAsmAccessRoleArn?: string;
  SecretsManagerOracleAsmSecretId?: string;
  TrimSpaceInChar?: boolean;
  ConvertTimestampWithZoneToUTC?: boolean;
  OpenTransactionWindow?: number;
  AuthenticationMethod?: OracleAuthenticationMethod;
}
export interface OrderableReplicationInstance {
  EngineVersion?: string;
  ReplicationInstanceClass?: string;
  StorageType?: string;
  MinAllocatedStorage?: number;
  MaxAllocatedStorage?: number;
  DefaultAllocatedStorage?: number;
  IncludedAllocatedStorage?: number;
  AvailabilityZones?: Array<string>;
  ReleaseStatus?: ReleaseStatusValues;
}
export type OrderableReplicationInstanceList =
  Array<OrderableReplicationInstance>;
export type OriginTypeValue = "SOURCE" | "TARGET";
export type ParquetVersionValue = "PARQUET_1_0" | "PARQUET_2_0";
export interface PendingMaintenanceAction {
  Action?: string;
  AutoAppliedAfterDate?: Date | string;
  ForcedApplyDate?: Date | string;
  OptInStatus?: string;
  CurrentApplyDate?: Date | string;
  Description?: string;
}
export type PendingMaintenanceActionDetails = Array<PendingMaintenanceAction>;
export type PendingMaintenanceActions =
  Array<ResourcePendingMaintenanceActions>;
export type PluginNameValue = "NO_PREFERENCE" | "TEST_DECODING" | "PGLOGICAL";
export type PostgreSQLAuthenticationMethod = "Password" | "IAM";
export interface PostgreSqlDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface PostgreSQLSettings {
  AfterConnectScript?: string;
  CaptureDdls?: boolean;
  MaxFileSize?: number;
  DatabaseName?: string;
  DdlArtifactsSchema?: string;
  ExecuteTimeout?: number;
  FailTasksOnLobTruncation?: boolean;
  HeartbeatEnable?: boolean;
  HeartbeatSchema?: string;
  HeartbeatFrequency?: number;
  Password?: string;
  Port?: number;
  ServerName?: string;
  Username?: string;
  SlotName?: string;
  PluginName?: PluginNameValue;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  TrimSpaceInChar?: boolean;
  MapBooleanAsBoolean?: boolean;
  MapJsonbAsClob?: boolean;
  MapLongVarcharAs?: LongVarcharMappingType;
  DatabaseMode?: DatabaseMode;
  BabelfishDatabaseName?: string;
  DisableUnicodeSourceFilter?: boolean;
  ServiceAccessRoleArn?: string;
  AuthenticationMethod?: PostgreSQLAuthenticationMethod;
}
export interface PremigrationAssessmentStatus {
  PremigrationAssessmentRunArn?: string;
  FailOnAssessmentFailure?: boolean;
  Status?: string;
  PremigrationAssessmentRunCreationDate?: Date | string;
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress;
  LastFailureMessage?: string;
  ResultLocationBucket?: string;
  ResultLocationFolder?: string;
  ResultEncryptionMode?: string;
  ResultKmsKeyArn?: string;
  ResultStatistic?: ReplicationTaskAssessmentRunResultStatistic;
}
export type PremigrationAssessmentStatusList =
  Array<PremigrationAssessmentStatus>;
export interface ProvisionData {
  ProvisionState?: string;
  ProvisionedCapacityUnits?: number;
  DateProvisioned?: Date | string;
  IsNewProvisioningAvailable?: boolean;
  DateNewProvisioningDataAvailable?: Date | string;
  ReasonForNewProvisioningData?: string;
}
export type PublicIpAddressList = Array<string>;
export interface RdsConfiguration {
  EngineEdition?: string;
  InstanceType?: string;
  InstanceVcpu?: number;
  InstanceMemory?: number;
  StorageType?: string;
  StorageSize?: number;
  StorageIops?: number;
  DeploymentOption?: string;
  EngineVersion?: string;
}
export interface RdsRecommendation {
  RequirementsToTarget?: RdsRequirements;
  TargetConfiguration?: RdsConfiguration;
}
export interface RdsRequirements {
  EngineEdition?: string;
  InstanceVcpu?: number;
  InstanceMemory?: number;
  StorageSize?: number;
  StorageIops?: number;
  DeploymentOption?: string;
  EngineVersion?: string;
}
export interface RebootReplicationInstanceMessage {
  ReplicationInstanceArn: string;
  ForceFailover?: boolean;
  ForcePlannedFailover?: boolean;
}
export interface RebootReplicationInstanceResponse {
  ReplicationInstance?: ReplicationInstance;
}
export interface Recommendation {
  DatabaseId?: string;
  EngineName?: string;
  CreatedDate?: string;
  Status?: string;
  Preferred?: boolean;
  Settings?: RecommendationSettings;
  Data?: RecommendationData;
}
export interface RecommendationData {
  RdsEngine?: RdsRecommendation;
}
export type RecommendationList = Array<Recommendation>;
export interface RecommendationSettings {
  InstanceSizingType: string;
  WorkloadType: string;
}
export type RedisAuthTypeValue = "NONE" | "AUTH_ROLE" | "AUTH_TOKEN";
export interface RedisSettings {
  ServerName: string;
  Port: number;
  SslSecurityProtocol?: SslSecurityProtocolValue;
  AuthType?: RedisAuthTypeValue;
  AuthUserName?: string;
  AuthPassword?: string;
  SslCaCertificateArn?: string;
}
export interface RedshiftDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface RedshiftSettings {
  AcceptAnyDate?: boolean;
  AfterConnectScript?: string;
  BucketFolder?: string;
  BucketName?: string;
  CaseSensitiveNames?: boolean;
  CompUpdate?: boolean;
  ConnectionTimeout?: number;
  DatabaseName?: string;
  DateFormat?: string;
  EmptyAsNull?: boolean;
  EncryptionMode?: EncryptionModeValue;
  ExplicitIds?: boolean;
  FileTransferUploadStreams?: number;
  LoadTimeout?: number;
  MaxFileSize?: number;
  Password?: string;
  Port?: number;
  RemoveQuotes?: boolean;
  ReplaceInvalidChars?: string;
  ReplaceChars?: string;
  ServerName?: string;
  ServiceAccessRoleArn?: string;
  ServerSideEncryptionKmsKeyId?: string;
  TimeFormat?: string;
  TrimBlanks?: boolean;
  TruncateColumns?: boolean;
  Username?: string;
  WriteBufferSize?: number;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  MapBooleanAsBoolean?: boolean;
}
export interface RefreshSchemasMessage {
  EndpointArn: string;
  ReplicationInstanceArn: string;
}
export interface RefreshSchemasResponse {
  RefreshSchemasStatus?: RefreshSchemasStatus;
}
export interface RefreshSchemasStatus {
  EndpointArn?: string;
  ReplicationInstanceArn?: string;
  Status?: RefreshSchemasStatusTypeValue;
  LastRefreshDate?: Date | string;
  LastFailureMessage?: string;
}
export type RefreshSchemasStatusTypeValue =
  | "SUCCESSFUL"
  | "FAILED"
  | "REFRESHING";
export type ReleaseStatusValues = "BETA" | "PROD";
export type ReloadOptionValue = "DATA_RELOAD" | "VALIDATE_ONLY";
export interface ReloadReplicationTablesMessage {
  ReplicationConfigArn: string;
  TablesToReload: Array<TableToReload>;
  ReloadOption?: ReloadOptionValue;
}
export interface ReloadReplicationTablesResponse {
  ReplicationConfigArn?: string;
}
export interface ReloadTablesMessage {
  ReplicationTaskArn: string;
  TablesToReload: Array<TableToReload>;
  ReloadOption?: ReloadOptionValue;
}
export interface ReloadTablesResponse {
  ReplicationTaskArn?: string;
}
export interface RemoveTagsFromResourceMessage {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface RemoveTagsFromResourceResponse {}
export interface Replication {
  ReplicationConfigIdentifier?: string;
  ReplicationConfigArn?: string;
  SourceEndpointArn?: string;
  TargetEndpointArn?: string;
  ReplicationType?: MigrationTypeValue;
  Status?: string;
  ProvisionData?: ProvisionData;
  PremigrationAssessmentStatuses?: Array<PremigrationAssessmentStatus>;
  StopReason?: string;
  FailureMessages?: Array<string>;
  ReplicationStats?: ReplicationStats;
  StartReplicationType?: string;
  CdcStartTime?: Date | string;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
  RecoveryCheckpoint?: string;
  ReplicationCreateTime?: Date | string;
  ReplicationUpdateTime?: Date | string;
  ReplicationLastStopTime?: Date | string;
  ReplicationDeprovisionTime?: Date | string;
}
export interface ReplicationConfig {
  ReplicationConfigIdentifier?: string;
  ReplicationConfigArn?: string;
  SourceEndpointArn?: string;
  TargetEndpointArn?: string;
  ReplicationType?: MigrationTypeValue;
  ComputeConfig?: ComputeConfig;
  ReplicationSettings?: string;
  SupplementalSettings?: string;
  TableMappings?: string;
  ReplicationConfigCreateTime?: Date | string;
  ReplicationConfigUpdateTime?: Date | string;
}
export type ReplicationConfigList = Array<ReplicationConfig>;
export type ReplicationEndpointTypeValue = "SOURCE" | "TARGET";
export interface ReplicationInstance {
  ReplicationInstanceIdentifier?: string;
  ReplicationInstanceClass?: string;
  ReplicationInstanceStatus?: string;
  AllocatedStorage?: number;
  InstanceCreateTime?: Date | string;
  VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
  AvailabilityZone?: string;
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: ReplicationPendingModifiedValues;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  KmsKeyId?: string;
  ReplicationInstanceArn?: string;
  ReplicationInstancePublicIpAddress?: string;
  ReplicationInstancePrivateIpAddress?: string;
  ReplicationInstancePublicIpAddresses?: Array<string>;
  ReplicationInstancePrivateIpAddresses?: Array<string>;
  ReplicationInstanceIpv6Addresses?: Array<string>;
  PubliclyAccessible?: boolean;
  SecondaryAvailabilityZone?: string;
  FreeUntil?: Date | string;
  DnsNameServers?: string;
  NetworkType?: string;
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings;
}
export type ReplicationInstanceClass = string;

export type ReplicationInstanceIpv6AddressList = Array<string>;
export type ReplicationInstanceList = Array<ReplicationInstance>;
export type ReplicationInstancePrivateIpAddressList = Array<string>;
export type ReplicationInstancePublicIpAddressList = Array<string>;
export interface ReplicationInstanceTaskLog {
  ReplicationTaskName?: string;
  ReplicationTaskArn?: string;
  ReplicationInstanceTaskLogSize?: number;
}
export type ReplicationInstanceTaskLogsList = Array<ReplicationInstanceTaskLog>;
export type ReplicationList = Array<Replication>;
export interface ReplicationPendingModifiedValues {
  ReplicationInstanceClass?: string;
  AllocatedStorage?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  NetworkType?: string;
}
export interface ReplicationStats {
  FullLoadProgressPercent?: number;
  ElapsedTimeMillis?: number;
  TablesLoaded?: number;
  TablesLoading?: number;
  TablesQueued?: number;
  TablesErrored?: number;
  FreshStartDate?: Date | string;
  StartDate?: Date | string;
  StopDate?: Date | string;
  FullLoadStartDate?: Date | string;
  FullLoadFinishDate?: Date | string;
}
export interface ReplicationSubnetGroup {
  ReplicationSubnetGroupIdentifier?: string;
  ReplicationSubnetGroupDescription?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Array<Subnet>;
  SupportedNetworkTypes?: Array<string>;
}
export declare class ReplicationSubnetGroupDoesNotCoverEnoughAZs extends EffectData.TaggedError(
  "ReplicationSubnetGroupDoesNotCoverEnoughAZs",
)<{
  readonly message?: string;
}> {}
export type ReplicationSubnetGroups = Array<ReplicationSubnetGroup>;
export type ReplicationTableStatisticsList = Array<TableStatistics>;
export interface ReplicationTask {
  ReplicationTaskIdentifier?: string;
  SourceEndpointArn?: string;
  TargetEndpointArn?: string;
  ReplicationInstanceArn?: string;
  MigrationType?: MigrationTypeValue;
  TableMappings?: string;
  ReplicationTaskSettings?: string;
  Status?: string;
  LastFailureMessage?: string;
  StopReason?: string;
  ReplicationTaskCreationDate?: Date | string;
  ReplicationTaskStartDate?: Date | string;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
  RecoveryCheckpoint?: string;
  ReplicationTaskArn?: string;
  ReplicationTaskStats?: ReplicationTaskStats;
  TaskData?: string;
  TargetReplicationInstanceArn?: string;
}
export interface ReplicationTaskAssessmentResult {
  ReplicationTaskIdentifier?: string;
  ReplicationTaskArn?: string;
  ReplicationTaskLastAssessmentDate?: Date | string;
  AssessmentStatus?: string;
  AssessmentResultsFile?: string;
  AssessmentResults?: string;
  S3ObjectUrl?: string;
}
export type ReplicationTaskAssessmentResultList =
  Array<ReplicationTaskAssessmentResult>;
export interface ReplicationTaskAssessmentRun {
  ReplicationTaskAssessmentRunArn?: string;
  ReplicationTaskArn?: string;
  Status?: string;
  ReplicationTaskAssessmentRunCreationDate?: Date | string;
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress;
  LastFailureMessage?: string;
  ServiceAccessRoleArn?: string;
  ResultLocationBucket?: string;
  ResultLocationFolder?: string;
  ResultEncryptionMode?: string;
  ResultKmsKeyArn?: string;
  AssessmentRunName?: string;
  IsLatestTaskAssessmentRun?: boolean;
  ResultStatistic?: ReplicationTaskAssessmentRunResultStatistic;
}
export type ReplicationTaskAssessmentRunList =
  Array<ReplicationTaskAssessmentRun>;
export interface ReplicationTaskAssessmentRunProgress {
  IndividualAssessmentCount?: number;
  IndividualAssessmentCompletedCount?: number;
}
export interface ReplicationTaskAssessmentRunResultStatistic {
  Passed?: number;
  Failed?: number;
  Error?: number;
  Warning?: number;
  Cancelled?: number;
  Skipped?: number;
}
export interface ReplicationTaskIndividualAssessment {
  ReplicationTaskIndividualAssessmentArn?: string;
  ReplicationTaskAssessmentRunArn?: string;
  IndividualAssessmentName?: string;
  Status?: string;
  ReplicationTaskIndividualAssessmentStartDate?: Date | string;
}
export type ReplicationTaskIndividualAssessmentList =
  Array<ReplicationTaskIndividualAssessment>;
export type ReplicationTaskList = Array<ReplicationTask>;
export interface ReplicationTaskStats {
  FullLoadProgressPercent?: number;
  ElapsedTimeMillis?: number;
  TablesLoaded?: number;
  TablesLoading?: number;
  TablesQueued?: number;
  TablesErrored?: number;
  FreshStartDate?: Date | string;
  StartDate?: Date | string;
  StopDate?: Date | string;
  FullLoadStartDate?: Date | string;
  FullLoadFinishDate?: Date | string;
}
export declare class ResourceAlreadyExistsFault extends EffectData.TaggedError(
  "ResourceAlreadyExistsFault",
)<{
  readonly message?: string;
  readonly resourceArn?: string;
}> {}
export type ResourceArn = string;

export declare class ResourceNotFoundFault extends EffectData.TaggedError(
  "ResourceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ResourcePendingMaintenanceActions {
  ResourceIdentifier?: string;
  PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction>;
}
export declare class ResourceQuotaExceededFault extends EffectData.TaggedError(
  "ResourceQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface RunFleetAdvisorLsaAnalysisResponse {
  LsaAnalysisId?: string;
  Status?: string;
}
export declare class S3AccessDeniedFault extends EffectData.TaggedError(
  "S3AccessDeniedFault",
)<{
  readonly message?: string;
}> {}
export declare class S3ResourceNotFoundFault extends EffectData.TaggedError(
  "S3ResourceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface S3Settings {
  ServiceAccessRoleArn?: string;
  ExternalTableDefinition?: string;
  CsvRowDelimiter?: string;
  CsvDelimiter?: string;
  BucketFolder?: string;
  BucketName?: string;
  CompressionType?: CompressionTypeValue;
  EncryptionMode?: EncryptionModeValue;
  ServerSideEncryptionKmsKeyId?: string;
  DataFormat?: DataFormatValue;
  EncodingType?: EncodingTypeValue;
  DictPageSizeLimit?: number;
  RowGroupLength?: number;
  DataPageSize?: number;
  ParquetVersion?: ParquetVersionValue;
  EnableStatistics?: boolean;
  IncludeOpForFullLoad?: boolean;
  CdcInsertsOnly?: boolean;
  TimestampColumnName?: string;
  ParquetTimestampInMillisecond?: boolean;
  CdcInsertsAndUpdates?: boolean;
  DatePartitionEnabled?: boolean;
  DatePartitionSequence?: DatePartitionSequenceValue;
  DatePartitionDelimiter?: DatePartitionDelimiterValue;
  UseCsvNoSupValue?: boolean;
  CsvNoSupValue?: string;
  PreserveTransactions?: boolean;
  CdcPath?: string;
  UseTaskStartTimeForFullLoadTimestamp?: boolean;
  CannedAclForObjects?: CannedAclForObjectsValue;
  AddColumnName?: boolean;
  CdcMaxBatchInterval?: number;
  CdcMinFileSize?: number;
  CsvNullValue?: string;
  IgnoreHeaderRows?: number;
  MaxFileSize?: number;
  Rfc4180?: boolean;
  DatePartitionTimezone?: string;
  AddTrailingPaddingCharacter?: boolean;
  ExpectedBucketOwner?: string;
  GlueCatalogGeneration?: boolean;
}
export type SafeguardPolicy =
  | "RELY_ON_SQL_SERVER_REPLICATION_AGENT"
  | "EXCLUSIVE_AUTOMATIC_TRUNCATION"
  | "SHARED_AUTOMATIC_TRUNCATION";
export interface SCApplicationAttributes {
  S3BucketPath?: string;
  S3BucketRoleArn?: string;
}
export interface SchemaConversionRequest {
  Status?: string;
  RequestIdentifier?: string;
  MigrationProjectArn?: string;
  Error?: ErrorDetails;
  ExportSqlDetails?: ExportSqlDetails;
}
export type SchemaConversionRequestList = Array<SchemaConversionRequest>;
export type SchemaList = Array<string>;
export interface SchemaResponse {
  CodeLineCount?: number;
  CodeSize?: number;
  Complexity?: string;
  Server?: ServerShortInfoResponse;
  DatabaseInstance?: DatabaseShortInfoResponse;
  SchemaId?: string;
  SchemaName?: string;
  OriginalSchema?: SchemaShortInfoResponse;
  Similarity?: number;
}
export interface SchemaShortInfoResponse {
  SchemaId?: string;
  SchemaName?: string;
  DatabaseId?: string;
  DatabaseName?: string;
  DatabaseIpAddress?: string;
}
export type SecretString = string;

export interface ServerShortInfoResponse {
  ServerId?: string;
  IpAddress?: string;
  ServerName?: string;
}
export declare class SNSInvalidTopicFault extends EffectData.TaggedError(
  "SNSInvalidTopicFault",
)<{
  readonly message?: string;
}> {}
export declare class SNSNoAuthorizationFault extends EffectData.TaggedError(
  "SNSNoAuthorizationFault",
)<{
  readonly message?: string;
}> {}
export interface SourceDataSetting {
  CDCStartPosition?: string;
  CDCStartTime?: Date | string;
  CDCStopTime?: Date | string;
  SlotName?: string;
}
export type SourceDataSettings = Array<SourceDataSetting>;
export type SourceIdsList = Array<string>;
export type SourceType = "replication_instance";
export type SqlServerAuthenticationMethod = "Password" | "Kerberos";
export type SslSecurityProtocolValue = "PLAINTEXT" | "SSL_ENCRYPTION";
export interface StartDataMigrationMessage {
  DataMigrationIdentifier: string;
  StartType: StartReplicationMigrationTypeValue;
}
export interface StartDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface StartExtensionPackAssociationMessage {
  MigrationProjectIdentifier: string;
}
export interface StartExtensionPackAssociationResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelAssessmentMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
}
export interface StartMetadataModelAssessmentResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelConversionMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
}
export interface StartMetadataModelConversionResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelExportAsScriptMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
  Origin: OriginTypeValue;
  FileName?: string;
}
export interface StartMetadataModelExportAsScriptResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelExportToTargetMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
  OverwriteExtensionPack?: boolean;
}
export interface StartMetadataModelExportToTargetResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelImportMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
  Origin: OriginTypeValue;
  Refresh?: boolean;
}
export interface StartMetadataModelImportResponse {
  RequestIdentifier?: string;
}
export interface StartRecommendationsRequest {
  DatabaseId: string;
  Settings: RecommendationSettings;
}
export interface StartRecommendationsRequestEntry {
  DatabaseId: string;
  Settings: RecommendationSettings;
}
export type StartRecommendationsRequestEntryList =
  Array<StartRecommendationsRequestEntry>;
export interface StartReplicationMessage {
  ReplicationConfigArn: string;
  StartReplicationType: string;
  PremigrationAssessmentSettings?: string;
  CdcStartTime?: Date | string;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
}
export type StartReplicationMigrationTypeValue =
  | "RELOAD_TARGET"
  | "RESUME_PROCESSING"
  | "START_REPLICATION";
export interface StartReplicationResponse {
  Replication?: Replication;
}
export interface StartReplicationTaskAssessmentMessage {
  ReplicationTaskArn: string;
}
export interface StartReplicationTaskAssessmentResponse {
  ReplicationTask?: ReplicationTask;
}
export interface StartReplicationTaskAssessmentRunMessage {
  ReplicationTaskArn: string;
  ServiceAccessRoleArn: string;
  ResultLocationBucket: string;
  ResultLocationFolder?: string;
  ResultEncryptionMode?: string;
  ResultKmsKeyArn?: string;
  AssessmentRunName: string;
  IncludeOnly?: Array<string>;
  Exclude?: Array<string>;
  Tags?: Array<Tag>;
}
export interface StartReplicationTaskAssessmentRunResponse {
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}
export interface StartReplicationTaskMessage {
  ReplicationTaskArn: string;
  StartReplicationTaskType: StartReplicationTaskTypeValue;
  CdcStartTime?: Date | string;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
}
export interface StartReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export type StartReplicationTaskTypeValue =
  | "START_REPLICATION"
  | "RESUME_PROCESSING"
  | "RELOAD_TARGET";
export interface StopDataMigrationMessage {
  DataMigrationIdentifier: string;
}
export interface StopDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface StopReplicationMessage {
  ReplicationConfigArn: string;
}
export interface StopReplicationResponse {
  Replication?: Replication;
}
export interface StopReplicationTaskMessage {
  ReplicationTaskArn: string;
}
export interface StopReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export declare class StorageQuotaExceededFault extends EffectData.TaggedError(
  "StorageQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type DatabaseMigrationServiceString = string;

export type StringList = Array<string>;
export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetStatus?: string;
}
export declare class SubnetAlreadyInUse extends EffectData.TaggedError(
  "SubnetAlreadyInUse",
)<{
  readonly message?: string;
}> {}
export type SubnetIdentifierList = Array<string>;
export type SubnetList = Array<Subnet>;
export interface SupportedEndpointType {
  EngineName?: string;
  SupportsCDC?: boolean;
  EndpointType?: ReplicationEndpointTypeValue;
  ReplicationInstanceEngineMinimumVersion?: string;
  EngineDisplayName?: string;
}
export type SupportedEndpointTypeList = Array<SupportedEndpointType>;
export interface SybaseSettings {
  DatabaseName?: string;
  Password?: string;
  Port?: number;
  ServerName?: string;
  Username?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export type TableListToReload = Array<TableToReload>;
export type TablePreparationMode =
  | "DO_NOTHING"
  | "TRUNCATE"
  | "DROP_TABLES_ON_TARGET";
export interface TableStatistics {
  SchemaName?: string;
  TableName?: string;
  Inserts?: number;
  Deletes?: number;
  Updates?: number;
  Ddls?: number;
  AppliedInserts?: number;
  AppliedDeletes?: number;
  AppliedUpdates?: number;
  AppliedDdls?: number;
  FullLoadRows?: number;
  FullLoadCondtnlChkFailedRows?: number;
  FullLoadErrorRows?: number;
  FullLoadStartTime?: Date | string;
  FullLoadEndTime?: Date | string;
  FullLoadReloaded?: boolean;
  LastUpdateTime?: Date | string;
  TableState?: string;
  ValidationPendingRecords?: number;
  ValidationFailedRecords?: number;
  ValidationSuspendedRecords?: number;
  ValidationState?: string;
  ValidationStateDetails?: string;
  ResyncState?: string;
  ResyncRowsAttempted?: number;
  ResyncRowsSucceeded?: number;
  ResyncRowsFailed?: number;
  ResyncProgress?: number;
}
export type TableStatisticsList = Array<TableStatistics>;
export interface TableToReload {
  SchemaName: string;
  TableName: string;
}
export interface Tag {
  Key?: string;
  Value?: string;
  ResourceArn?: string;
}
export type TagList = Array<Tag>;
export interface TargetDataSetting {
  TablePreparationMode?: TablePreparationMode;
}
export type TargetDataSettings = Array<TargetDataSetting>;
export type TargetDbType = "SPECIFIC_DATABASE" | "MULTIPLE_DATABASES";
export interface TestConnectionMessage {
  ReplicationInstanceArn: string;
  EndpointArn: string;
}
export interface TestConnectionResponse {
  Connection?: Connection;
}
export interface TimestreamSettings {
  DatabaseName: string;
  MemoryDuration: number;
  MagneticDuration: number;
  CdcInsertsAndUpdates?: boolean;
  EnableMagneticStoreWrites?: boolean;
}
export type TlogAccessMode =
  | "BackupOnly"
  | "PreferBackup"
  | "PreferTlog"
  | "TlogOnly";
export type TStamp = Date | string;

export interface UpdateSubscriptionsToEventBridgeMessage {
  ForceMove?: boolean;
}
export interface UpdateSubscriptionsToEventBridgeResponse {
  Result?: string;
}
export declare class UpgradeDependencyFailureFault extends EffectData.TaggedError(
  "UpgradeDependencyFailureFault",
)<{
  readonly message?: string;
}> {}
export type VersionStatus = "UP_TO_DATE" | "OUTDATED" | "UNSUPPORTED";
export type VpcSecurityGroupIdList = Array<string>;
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
export type VpcSecurityGroupMembershipList = Array<VpcSecurityGroupMembership>;
export declare namespace AddTagsToResource {
  export type Input = AddTagsToResourceMessage;
  export type Output = AddTagsToResourceResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ApplyPendingMaintenanceAction {
  export type Input = ApplyPendingMaintenanceActionMessage;
  export type Output = ApplyPendingMaintenanceActionResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace BatchStartRecommendations {
  export type Input = BatchStartRecommendationsRequest;
  export type Output = BatchStartRecommendationsResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace CancelReplicationTaskAssessmentRun {
  export type Input = CancelReplicationTaskAssessmentRunMessage;
  export type Output = CancelReplicationTaskAssessmentRunResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace CreateDataMigration {
  export type Input = CreateDataMigrationMessage;
  export type Output = CreateDataMigrationResponse;
  export type Error =
    | FailedDependencyFault
    | InvalidOperationFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDataProvider {
  export type Input = CreateDataProviderMessage;
  export type Output = CreateDataProviderResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceAlreadyExistsFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateEndpoint {
  export type Input = CreateEndpointMessage;
  export type Output = CreateEndpointResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | CommonAwsError;
}

export declare namespace CreateEventSubscription {
  export type Input = CreateEventSubscriptionMessage;
  export type Output = CreateEventSubscriptionResponse;
  export type Error =
    | KMSAccessDeniedFault
    | KMSDisabledFault
    | KMSInvalidStateFault
    | KMSNotFoundFault
    | KMSThrottlingFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | CommonAwsError;
}

export declare namespace CreateFleetAdvisorCollector {
  export type Input = CreateFleetAdvisorCollectorRequest;
  export type Output = CreateFleetAdvisorCollectorResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace CreateInstanceProfile {
  export type Input = CreateInstanceProfileMessage;
  export type Output = CreateInstanceProfileResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace CreateMigrationProject {
  export type Input = CreateMigrationProjectMessage;
  export type Output = CreateMigrationProjectResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace CreateReplicationConfig {
  export type Input = CreateReplicationConfigMessage;
  export type Output = CreateReplicationConfigResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | InvalidSubnet
    | KMSKeyNotAccessibleFault
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateReplicationInstance {
  export type Input = CreateReplicationInstanceMessage;
  export type Output = CreateReplicationInstanceResponse;
  export type Error =
    | AccessDeniedFault
    | InsufficientResourceCapacityFault
    | InvalidResourceStateFault
    | InvalidSubnet
    | KMSKeyNotAccessibleFault
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | StorageQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateReplicationSubnetGroup {
  export type Input = CreateReplicationSubnetGroupMessage;
  export type Output = CreateReplicationSubnetGroupResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidSubnet
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateReplicationTask {
  export type Input = CreateReplicationTaskMessage;
  export type Output = CreateReplicationTaskResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace DeleteCertificate {
  export type Input = DeleteCertificateMessage;
  export type Output = DeleteCertificateResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteConnection {
  export type Input = DeleteConnectionMessage;
  export type Output = DeleteConnectionResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteDataMigration {
  export type Input = DeleteDataMigrationMessage;
  export type Output = DeleteDataMigrationResponse;
  export type Error =
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteDataProvider {
  export type Input = DeleteDataProviderMessage;
  export type Output = DeleteDataProviderResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteEndpoint {
  export type Input = DeleteEndpointMessage;
  export type Output = DeleteEndpointResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteEventSubscription {
  export type Input = DeleteEventSubscriptionMessage;
  export type Output = DeleteEventSubscriptionResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteFleetAdvisorCollector {
  export type Input = DeleteCollectorRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedFault
    | CollectorNotFoundFault
    | InvalidResourceStateFault
    | CommonAwsError;
}

export declare namespace DeleteFleetAdvisorDatabases {
  export type Input = DeleteFleetAdvisorDatabasesRequest;
  export type Output = DeleteFleetAdvisorDatabasesResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidOperationFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteInstanceProfile {
  export type Input = DeleteInstanceProfileMessage;
  export type Output = DeleteInstanceProfileResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteMigrationProject {
  export type Input = DeleteMigrationProjectMessage;
  export type Output = DeleteMigrationProjectResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteReplicationConfig {
  export type Input = DeleteReplicationConfigMessage;
  export type Output = DeleteReplicationConfigResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteReplicationInstance {
  export type Input = DeleteReplicationInstanceMessage;
  export type Output = DeleteReplicationInstanceResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteReplicationSubnetGroup {
  export type Input = DeleteReplicationSubnetGroupMessage;
  export type Output = DeleteReplicationSubnetGroupResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteReplicationTask {
  export type Input = DeleteReplicationTaskMessage;
  export type Output = DeleteReplicationTaskResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteReplicationTaskAssessmentRun {
  export type Input = DeleteReplicationTaskAssessmentRunMessage;
  export type Output = DeleteReplicationTaskAssessmentRunResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeAccountAttributes {
  export type Input = DescribeAccountAttributesMessage;
  export type Output = DescribeAccountAttributesResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeApplicableIndividualAssessments {
  export type Input = DescribeApplicableIndividualAssessmentsMessage;
  export type Output = DescribeApplicableIndividualAssessmentsResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeCertificates {
  export type Input = DescribeCertificatesMessage;
  export type Output = DescribeCertificatesResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeConnections {
  export type Input = DescribeConnectionsMessage;
  export type Output = DescribeConnectionsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeConversionConfiguration {
  export type Input = DescribeConversionConfigurationMessage;
  export type Output = DescribeConversionConfigurationResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDataMigrations {
  export type Input = DescribeDataMigrationsMessage;
  export type Output = DescribeDataMigrationsResponse;
  export type Error =
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeDataProviders {
  export type Input = DescribeDataProvidersMessage;
  export type Output = DescribeDataProvidersResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeEndpoints {
  export type Input = DescribeEndpointsMessage;
  export type Output = DescribeEndpointsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeEndpointSettings {
  export type Input = DescribeEndpointSettingsMessage;
  export type Output = DescribeEndpointSettingsResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEndpointTypes {
  export type Input = DescribeEndpointTypesMessage;
  export type Output = DescribeEndpointTypesResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEngineVersions {
  export type Input = DescribeEngineVersionsMessage;
  export type Output = DescribeEngineVersionsResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEventCategories {
  export type Input = DescribeEventCategoriesMessage;
  export type Output = DescribeEventCategoriesResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEvents {
  export type Input = DescribeEventsMessage;
  export type Output = DescribeEventsResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEventSubscriptions {
  export type Input = DescribeEventSubscriptionsMessage;
  export type Output = DescribeEventSubscriptionsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeExtensionPackAssociations {
  export type Input = DescribeExtensionPackAssociationsMessage;
  export type Output = DescribeExtensionPackAssociationsResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeFleetAdvisorCollectors {
  export type Input = DescribeFleetAdvisorCollectorsRequest;
  export type Output = DescribeFleetAdvisorCollectorsResponse;
  export type Error = InvalidResourceStateFault | CommonAwsError;
}

export declare namespace DescribeFleetAdvisorDatabases {
  export type Input = DescribeFleetAdvisorDatabasesRequest;
  export type Output = DescribeFleetAdvisorDatabasesResponse;
  export type Error = InvalidResourceStateFault | CommonAwsError;
}

export declare namespace DescribeFleetAdvisorLsaAnalysis {
  export type Input = DescribeFleetAdvisorLsaAnalysisRequest;
  export type Output = DescribeFleetAdvisorLsaAnalysisResponse;
  export type Error = InvalidResourceStateFault | CommonAwsError;
}

export declare namespace DescribeFleetAdvisorSchemaObjectSummary {
  export type Input = DescribeFleetAdvisorSchemaObjectSummaryRequest;
  export type Output = DescribeFleetAdvisorSchemaObjectSummaryResponse;
  export type Error = InvalidResourceStateFault | CommonAwsError;
}

export declare namespace DescribeFleetAdvisorSchemas {
  export type Input = DescribeFleetAdvisorSchemasRequest;
  export type Output = DescribeFleetAdvisorSchemasResponse;
  export type Error = InvalidResourceStateFault | CommonAwsError;
}

export declare namespace DescribeInstanceProfiles {
  export type Input = DescribeInstanceProfilesMessage;
  export type Output = DescribeInstanceProfilesResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeMetadataModelAssessments {
  export type Input = DescribeMetadataModelAssessmentsMessage;
  export type Output = DescribeMetadataModelAssessmentsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeMetadataModelConversions {
  export type Input = DescribeMetadataModelConversionsMessage;
  export type Output = DescribeMetadataModelConversionsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeMetadataModelExportsAsScript {
  export type Input = DescribeMetadataModelExportsAsScriptMessage;
  export type Output = DescribeMetadataModelExportsAsScriptResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeMetadataModelExportsToTarget {
  export type Input = DescribeMetadataModelExportsToTargetMessage;
  export type Output = DescribeMetadataModelExportsToTargetResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeMetadataModelImports {
  export type Input = DescribeMetadataModelImportsMessage;
  export type Output = DescribeMetadataModelImportsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeMigrationProjects {
  export type Input = DescribeMigrationProjectsMessage;
  export type Output = DescribeMigrationProjectsResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeOrderableReplicationInstances {
  export type Input = DescribeOrderableReplicationInstancesMessage;
  export type Output = DescribeOrderableReplicationInstancesResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribePendingMaintenanceActions {
  export type Input = DescribePendingMaintenanceActionsMessage;
  export type Output = DescribePendingMaintenanceActionsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeRecommendationLimitations {
  export type Input = DescribeRecommendationLimitationsRequest;
  export type Output = DescribeRecommendationLimitationsResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | CommonAwsError;
}

export declare namespace DescribeRecommendations {
  export type Input = DescribeRecommendationsRequest;
  export type Output = DescribeRecommendationsResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | CommonAwsError;
}

export declare namespace DescribeRefreshSchemasStatus {
  export type Input = DescribeRefreshSchemasStatusMessage;
  export type Output = DescribeRefreshSchemasStatusResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeReplicationConfigs {
  export type Input = DescribeReplicationConfigsMessage;
  export type Output = DescribeReplicationConfigsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeReplicationInstances {
  export type Input = DescribeReplicationInstancesMessage;
  export type Output = DescribeReplicationInstancesResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeReplicationInstanceTaskLogs {
  export type Input = DescribeReplicationInstanceTaskLogsMessage;
  export type Output = DescribeReplicationInstanceTaskLogsResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeReplications {
  export type Input = DescribeReplicationsMessage;
  export type Output = DescribeReplicationsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeReplicationSubnetGroups {
  export type Input = DescribeReplicationSubnetGroupsMessage;
  export type Output = DescribeReplicationSubnetGroupsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeReplicationTableStatistics {
  export type Input = DescribeReplicationTableStatisticsMessage;
  export type Output = DescribeReplicationTableStatisticsResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeReplicationTaskAssessmentResults {
  export type Input = DescribeReplicationTaskAssessmentResultsMessage;
  export type Output = DescribeReplicationTaskAssessmentResultsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeReplicationTaskAssessmentRuns {
  export type Input = DescribeReplicationTaskAssessmentRunsMessage;
  export type Output = DescribeReplicationTaskAssessmentRunsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeReplicationTaskIndividualAssessments {
  export type Input = DescribeReplicationTaskIndividualAssessmentsMessage;
  export type Output = DescribeReplicationTaskIndividualAssessmentsResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeReplicationTasks {
  export type Input = DescribeReplicationTasksMessage;
  export type Output = DescribeReplicationTasksResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeSchemas {
  export type Input = DescribeSchemasMessage;
  export type Output = DescribeSchemasResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeTableStatistics {
  export type Input = DescribeTableStatisticsMessage;
  export type Output = DescribeTableStatisticsResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ExportMetadataModelAssessment {
  export type Input = ExportMetadataModelAssessmentMessage;
  export type Output = ExportMetadataModelAssessmentResponse;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace ImportCertificate {
  export type Input = ImportCertificateMessage;
  export type Output = ImportCertificateResponse;
  export type Error =
    | InvalidCertificateFault
    | ResourceAlreadyExistsFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceMessage;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyConversionConfiguration {
  export type Input = ModifyConversionConfigurationMessage;
  export type Output = ModifyConversionConfigurationResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyDataMigration {
  export type Input = ModifyDataMigrationMessage;
  export type Output = ModifyDataMigrationResponse;
  export type Error =
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyDataProvider {
  export type Input = ModifyDataProviderMessage;
  export type Output = ModifyDataProviderResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyEndpoint {
  export type Input = ModifyEndpointMessage;
  export type Output = ModifyEndpointResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyEventSubscription {
  export type Input = ModifyEventSubscriptionMessage;
  export type Output = ModifyEventSubscriptionResponse;
  export type Error =
    | AccessDeniedFault
    | KMSAccessDeniedFault
    | KMSDisabledFault
    | KMSInvalidStateFault
    | KMSNotFoundFault
    | KMSThrottlingFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | CommonAwsError;
}

export declare namespace ModifyInstanceProfile {
  export type Input = ModifyInstanceProfileMessage;
  export type Output = ModifyInstanceProfileResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyMigrationProject {
  export type Input = ModifyMigrationProjectMessage;
  export type Output = ModifyMigrationProjectResponse;
  export type Error =
    | AccessDeniedFault
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyReplicationConfig {
  export type Input = ModifyReplicationConfigMessage;
  export type Output = ModifyReplicationConfigResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | InvalidSubnet
    | KMSKeyNotAccessibleFault
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyReplicationInstance {
  export type Input = ModifyReplicationInstanceMessage;
  export type Output = ModifyReplicationInstanceResponse;
  export type Error =
    | AccessDeniedFault
    | InsufficientResourceCapacityFault
    | InvalidResourceStateFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | StorageQuotaExceededFault
    | UpgradeDependencyFailureFault
    | CommonAwsError;
}

export declare namespace ModifyReplicationSubnetGroup {
  export type Input = ModifyReplicationSubnetGroupMessage;
  export type Output = ModifyReplicationSubnetGroupResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidSubnet
    | ReplicationSubnetGroupDoesNotCoverEnoughAZs
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | SubnetAlreadyInUse
    | CommonAwsError;
}

export declare namespace ModifyReplicationTask {
  export type Input = ModifyReplicationTaskMessage;
  export type Output = ModifyReplicationTaskResponse;
  export type Error =
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace MoveReplicationTask {
  export type Input = MoveReplicationTaskMessage;
  export type Output = MoveReplicationTaskResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace RebootReplicationInstance {
  export type Input = RebootReplicationInstanceMessage;
  export type Output = RebootReplicationInstanceResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace RefreshSchemas {
  export type Input = RefreshSchemasMessage;
  export type Output = RefreshSchemasResponse;
  export type Error =
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace ReloadReplicationTables {
  export type Input = ReloadReplicationTablesMessage;
  export type Output = ReloadReplicationTablesResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ReloadTables {
  export type Input = ReloadTablesMessage;
  export type Output = ReloadTablesResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace RemoveTagsFromResource {
  export type Input = RemoveTagsFromResourceMessage;
  export type Output = RemoveTagsFromResourceResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace RunFleetAdvisorLsaAnalysis {
  export type Input = {};
  export type Output = RunFleetAdvisorLsaAnalysisResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartDataMigration {
  export type Input = StartDataMigrationMessage;
  export type Output = StartDataMigrationResponse;
  export type Error =
    | FailedDependencyFault
    | InvalidOperationFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace StartExtensionPackAssociation {
  export type Input = StartExtensionPackAssociationMessage;
  export type Output = StartExtensionPackAssociationResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartMetadataModelAssessment {
  export type Input = StartMetadataModelAssessmentMessage;
  export type Output = StartMetadataModelAssessmentResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartMetadataModelConversion {
  export type Input = StartMetadataModelConversionMessage;
  export type Output = StartMetadataModelConversionResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartMetadataModelExportAsScript {
  export type Input = StartMetadataModelExportAsScriptMessage;
  export type Output = StartMetadataModelExportAsScriptResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartMetadataModelExportToTarget {
  export type Input = StartMetadataModelExportToTargetMessage;
  export type Output = StartMetadataModelExportToTargetResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartMetadataModelImport {
  export type Input = StartMetadataModelImportMessage;
  export type Output = StartMetadataModelImportResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartRecommendations {
  export type Input = StartRecommendationsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartReplication {
  export type Input = StartReplicationMessage;
  export type Output = StartReplicationResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartReplicationTask {
  export type Input = StartReplicationTaskMessage;
  export type Output = StartReplicationTaskResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartReplicationTaskAssessment {
  export type Input = StartReplicationTaskAssessmentMessage;
  export type Output = StartReplicationTaskAssessmentResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartReplicationTaskAssessmentRun {
  export type Input = StartReplicationTaskAssessmentRunMessage;
  export type Output = StartReplicationTaskAssessmentRunResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSAccessDeniedFault
    | KMSDisabledFault
    | KMSFault
    | KMSInvalidStateFault
    | KMSKeyNotAccessibleFault
    | KMSNotFoundFault
    | ResourceAlreadyExistsFault
    | ResourceNotFoundFault
    | S3AccessDeniedFault
    | S3ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StopDataMigration {
  export type Input = StopDataMigrationMessage;
  export type Output = StopDataMigrationResponse;
  export type Error =
    | FailedDependencyFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StopReplication {
  export type Input = StopReplicationMessage;
  export type Output = StopReplicationResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StopReplicationTask {
  export type Input = StopReplicationTaskMessage;
  export type Output = StopReplicationTaskResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace TestConnection {
  export type Input = TestConnectionMessage;
  export type Output = TestConnectionResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | ResourceQuotaExceededFault
    | CommonAwsError;
}

export declare namespace UpdateSubscriptionsToEventBridge {
  export type Input = UpdateSubscriptionsToEventBridgeMessage;
  export type Output = UpdateSubscriptionsToEventBridgeResponse;
  export type Error =
    | AccessDeniedFault
    | InvalidResourceStateFault
    | CommonAwsError;
}
