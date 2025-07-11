import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface CloudTrail_20131101 {
  addTags(
    input: AddTagsRequest,
  ): Effect.Effect<
    AddTagsResponse,
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | CloudTrailARNInvalidException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidTagParameterException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | TagsLimitExceededException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  cancelQuery(
    input: CancelQueryRequest,
  ): Effect.Effect<
    CancelQueryResponse,
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InactiveQueryException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | QueryIdNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createChannel(
    input: CreateChannelRequest,
  ): Effect.Effect<
    CreateChannelResponse,
    | ChannelAlreadyExistsException
    | ChannelMaxLimitExceededException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidEventDataStoreCategoryException
    | InvalidParameterException
    | InvalidSourceException
    | InvalidTagParameterException
    | OperationNotPermittedException
    | TagsLimitExceededException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createDashboard(
    input: CreateDashboardRequest,
  ): Effect.Effect<
    CreateDashboardResponse,
    | ConflictException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidQueryStatementException
    | InvalidTagParameterException
    | ServiceQuotaExceededException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createEventDataStore(
    input: CreateEventDataStoreRequest,
  ): Effect.Effect<
    CreateEventDataStoreResponse,
    | CloudTrailAccessNotEnabledException
    | ConflictException
    | EventDataStoreAlreadyExistsException
    | EventDataStoreMaxLimitExceededException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InvalidEventSelectorsException
    | InvalidKmsKeyIdException
    | InvalidParameterException
    | InvalidTagParameterException
    | KmsException
    | KmsKeyNotFoundException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createTrail(
    input: CreateTrailRequest,
  ): Effect.Effect<
    CreateTrailResponse,
    | CloudTrailAccessNotEnabledException
    | CloudTrailInvalidClientTokenIdException
    | CloudWatchLogsDeliveryUnavailableException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InsufficientSnsTopicPolicyException
    | InvalidCloudWatchLogsLogGroupArnException
    | InvalidCloudWatchLogsRoleArnException
    | InvalidKmsKeyIdException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidS3BucketNameException
    | InvalidS3PrefixException
    | InvalidSnsTopicNameException
    | InvalidTagParameterException
    | InvalidTrailNameException
    | KmsException
    | KmsKeyDisabledException
    | KmsKeyNotFoundException
    | MaximumNumberOfTrailsExceededException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | S3BucketDoesNotExistException
    | TagsLimitExceededException
    | ThrottlingException
    | TrailAlreadyExistsException
    | TrailNotProvidedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteChannel(
    input: DeleteChannelRequest,
  ): Effect.Effect<
    DeleteChannelResponse,
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteDashboard(
    input: DeleteDashboardRequest,
  ): Effect.Effect<
    DeleteDashboardResponse,
    | ConflictException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteEventDataStore(
    input: DeleteEventDataStoreRequest,
  ): Effect.Effect<
    DeleteEventDataStoreResponse,
    | ChannelExistsForEDSException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreFederationEnabledException
    | EventDataStoreHasOngoingImportException
    | EventDataStoreNotFoundException
    | EventDataStoreTerminationProtectedException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | ConflictException
    | OperationNotPermittedException
    | ResourceARNNotValidException
    | ResourceNotFoundException
    | ResourcePolicyNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteTrail(
    input: DeleteTrailRequest,
  ): Effect.Effect<
    DeleteTrailResponse,
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deregisterOrganizationDelegatedAdmin(
    input: DeregisterOrganizationDelegatedAdminRequest,
  ): Effect.Effect<
    DeregisterOrganizationDelegatedAdminResponse,
    | AccountNotFoundException
    | AccountNotRegisteredException
    | CloudTrailAccessNotEnabledException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NotOrganizationManagementAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  describeQuery(
    input: DescribeQueryRequest,
  ): Effect.Effect<
    DescribeQueryResponse,
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | QueryIdNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  describeTrails(
    input: DescribeTrailsRequest,
  ): Effect.Effect<
    DescribeTrailsResponse,
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  disableFederation(
    input: DisableFederationRequest,
  ): Effect.Effect<
    DisableFederationResponse,
    | AccessDeniedException
    | CloudTrailAccessNotEnabledException
    | ConcurrentModificationException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  enableFederation(
    input: EnableFederationRequest,
  ): Effect.Effect<
    EnableFederationResponse,
    | AccessDeniedException
    | CloudTrailAccessNotEnabledException
    | ConcurrentModificationException
    | EventDataStoreARNInvalidException
    | EventDataStoreFederationEnabledException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  generateQuery(
    input: GenerateQueryRequest,
  ): Effect.Effect<
    GenerateQueryResponse,
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | GenerateResponseException
    | InactiveEventDataStoreException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getChannel(
    input: GetChannelRequest,
  ): Effect.Effect<
    GetChannelResponse,
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getDashboard(
    input: GetDashboardRequest,
  ): Effect.Effect<
    GetDashboardResponse,
    ResourceNotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  getEventConfiguration(
    input: GetEventConfigurationRequest,
  ): Effect.Effect<
    GetEventConfigurationResponse,
    | CloudTrailARNInvalidException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getEventDataStore(
    input: GetEventDataStoreRequest,
  ): Effect.Effect<
    GetEventDataStoreResponse,
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getEventSelectors(
    input: GetEventSelectorsRequest,
  ): Effect.Effect<
    GetEventSelectorsResponse,
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getImport(
    input: GetImportRequest,
  ): Effect.Effect<
    GetImportResponse,
    | ImportNotFoundException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getInsightSelectors(
    input: GetInsightSelectorsRequest,
  ): Effect.Effect<
    GetInsightSelectorsResponse,
    | CloudTrailARNInvalidException
    | InsightNotEnabledException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getQueryResults(
    input: GetQueryResultsRequest,
  ): Effect.Effect<
    GetQueryResultsResponse,
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | QueryIdNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | OperationNotPermittedException
    | ResourceARNNotValidException
    | ResourceNotFoundException
    | ResourcePolicyNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getTrail(
    input: GetTrailRequest,
  ): Effect.Effect<
    GetTrailResponse,
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | OperationNotPermittedException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getTrailStatus(
    input: GetTrailStatusRequest,
  ): Effect.Effect<
    GetTrailStatusResponse,
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | OperationNotPermittedException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listChannels(
    input: ListChannelsRequest,
  ): Effect.Effect<
    ListChannelsResponse,
    | InvalidNextTokenException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listDashboards(
    input: ListDashboardsRequest,
  ): Effect.Effect<
    ListDashboardsResponse,
    UnsupportedOperationException | CommonAwsError
  >;
  listEventDataStores(
    input: ListEventDataStoresRequest,
  ): Effect.Effect<
    ListEventDataStoresResponse,
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listImportFailures(
    input: ListImportFailuresRequest,
  ): Effect.Effect<
    ListImportFailuresResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listImports(
    input: ListImportsRequest,
  ): Effect.Effect<
    ListImportsResponse,
    | EventDataStoreARNInvalidException
    | InvalidNextTokenException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listInsightsMetricData(
    input: ListInsightsMetricDataRequest,
  ): Effect.Effect<
    ListInsightsMetricDataResponse,
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listPublicKeys(
    input: ListPublicKeysRequest,
  ): Effect.Effect<
    ListPublicKeysResponse,
    | InvalidTimeRangeException
    | InvalidTokenException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listQueries(
    input: ListQueriesRequest,
  ): Effect.Effect<
    ListQueriesResponse,
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidDateRangeException
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidQueryStatusException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResponse,
    | ChannelARNInvalidException
    | CloudTrailARNInvalidException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidTokenException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listTrails(
    input: ListTrailsRequest,
  ): Effect.Effect<
    ListTrailsResponse,
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  lookupEvents(
    input: LookupEventsRequest,
  ): Effect.Effect<
    LookupEventsResponse,
    | InvalidEventCategoryException
    | InvalidLookupAttributesException
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidTimeRangeException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  putEventConfiguration(
    input: PutEventConfigurationRequest,
  ): Effect.Effect<
    PutEventConfigurationResponse,
    | CloudTrailARNInvalidException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientIAMAccessPermissionException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  putEventSelectors(
    input: PutEventSelectorsRequest,
  ): Effect.Effect<
    PutEventSelectorsResponse,
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventSelectorsException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  putInsightSelectors(
    input: PutInsightSelectorsRequest,
  ): Effect.Effect<
    PutInsightSelectorsResponse,
    | CloudTrailARNInvalidException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InvalidHomeRegionException
    | InvalidInsightSelectorsException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidTrailNameException
    | KmsException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | S3BucketDoesNotExistException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | ConflictException
    | OperationNotPermittedException
    | ResourceARNNotValidException
    | ResourceNotFoundException
    | ResourcePolicyNotValidException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  registerOrganizationDelegatedAdmin(
    input: RegisterOrganizationDelegatedAdminRequest,
  ): Effect.Effect<
    RegisterOrganizationDelegatedAdminResponse,
    | AccountNotFoundException
    | AccountRegisteredException
    | CannotDelegateManagementAccountException
    | CloudTrailAccessNotEnabledException
    | ConflictException
    | DelegatedAdminAccountLimitExceededException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientIAMAccessPermissionException
    | InvalidParameterException
    | NotOrganizationManagementAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  removeTags(
    input: RemoveTagsRequest,
  ): Effect.Effect<
    RemoveTagsResponse,
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | CloudTrailARNInvalidException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidTagParameterException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  restoreEventDataStore(
    input: RestoreEventDataStoreRequest,
  ): Effect.Effect<
    RestoreEventDataStoreResponse,
    | CloudTrailAccessNotEnabledException
    | EventDataStoreARNInvalidException
    | EventDataStoreMaxLimitExceededException
    | EventDataStoreNotFoundException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventDataStoreStatusException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  searchSampleQueries(
    input: SearchSampleQueriesRequest,
  ): Effect.Effect<
    SearchSampleQueriesResponse,
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startDashboardRefresh(
    input: StartDashboardRefreshRequest,
  ): Effect.Effect<
    StartDashboardRefreshResponse,
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startEventDataStoreIngestion(
    input: StartEventDataStoreIngestionRequest,
  ): Effect.Effect<
    StartEventDataStoreIngestionResponse,
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startImport(
    input: StartImportRequest,
  ): Effect.Effect<
    StartImportResponse,
    | AccountHasOngoingImportException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | ImportNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidImportSourceException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startLogging(
    input: StartLoggingRequest,
  ): Effect.Effect<
    StartLoggingResponse,
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startQuery(
    input: StartQueryRequest,
  ): Effect.Effect<
    StartQueryResponse,
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InvalidParameterException
    | InvalidQueryStatementException
    | InvalidS3BucketNameException
    | InvalidS3PrefixException
    | MaxConcurrentQueriesException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | S3BucketDoesNotExistException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  stopEventDataStoreIngestion(
    input: StopEventDataStoreIngestionRequest,
  ): Effect.Effect<
    StopEventDataStoreIngestionResponse,
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  stopImport(
    input: StopImportRequest,
  ): Effect.Effect<
    StopImportResponse,
    | ImportNotFoundException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  stopLogging(
    input: StopLoggingRequest,
  ): Effect.Effect<
    StopLoggingResponse,
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  updateChannel(
    input: UpdateChannelRequest,
  ): Effect.Effect<
    UpdateChannelResponse,
    | ChannelAlreadyExistsException
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidEventDataStoreCategoryException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  updateDashboard(
    input: UpdateDashboardRequest,
  ): Effect.Effect<
    UpdateDashboardResponse,
    | ConflictException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidQueryStatementException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  updateEventDataStore(
    input: UpdateEventDataStoreRequest,
  ): Effect.Effect<
    UpdateEventDataStoreResponse,
    | CloudTrailAccessNotEnabledException
    | EventDataStoreAlreadyExistsException
    | EventDataStoreARNInvalidException
    | EventDataStoreHasOngoingImportException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InvalidEventSelectorsException
    | InvalidInsightSelectorsException
    | InvalidKmsKeyIdException
    | InvalidParameterException
    | KmsException
    | KmsKeyNotFoundException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  updateTrail(
    input: UpdateTrailRequest,
  ): Effect.Effect<
    UpdateTrailResponse,
    | CloudTrailAccessNotEnabledException
    | CloudTrailARNInvalidException
    | CloudTrailInvalidClientTokenIdException
    | CloudWatchLogsDeliveryUnavailableException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InsufficientSnsTopicPolicyException
    | InvalidCloudWatchLogsLogGroupArnException
    | InvalidCloudWatchLogsRoleArnException
    | InvalidEventSelectorsException
    | InvalidHomeRegionException
    | InvalidKmsKeyIdException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidS3BucketNameException
    | InvalidS3PrefixException
    | InvalidSnsTopicNameException
    | InvalidTrailNameException
    | KmsException
    | KmsKeyDisabledException
    | KmsKeyNotFoundException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | S3BucketDoesNotExistException
    | ThrottlingException
    | TrailNotFoundException
    | TrailNotProvidedException
    | UnsupportedOperationException
    | CommonAwsError
  >;
}

export type Cloudtrail = CloudTrail_20131101;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export declare class AccountHasOngoingImportException extends EffectData.TaggedError(
  "AccountHasOngoingImportException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

export declare class AccountNotFoundException extends EffectData.TaggedError(
  "AccountNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class AccountNotRegisteredException extends EffectData.TaggedError(
  "AccountNotRegisteredException",
)<{
  readonly Message?: string;
}> {}
export declare class AccountRegisteredException extends EffectData.TaggedError(
  "AccountRegisteredException",
)<{
  readonly Message?: string;
}> {}
export interface AddTagsRequest {
  ResourceId: string;
  TagsList: Array<Tag>;
}
export interface AddTagsResponse {}
export interface AdvancedEventSelector {
  Name?: string;
  FieldSelectors: Array<AdvancedFieldSelector>;
}
export type AdvancedEventSelectors = Array<AdvancedEventSelector>;
export interface AdvancedFieldSelector {
  Field: string;
  Equals?: Array<string>;
  StartsWith?: Array<string>;
  EndsWith?: Array<string>;
  NotEquals?: Array<string>;
  NotStartsWith?: Array<string>;
  NotEndsWith?: Array<string>;
}
export type AdvancedFieldSelectors = Array<AdvancedFieldSelector>;
export type BillingMode =
  | "EXTENDABLE_RETENTION_PRICING"
  | "FIXED_RETENTION_PRICING";
export type CloudtrailBoolean = boolean;

export type ByteBuffer = Uint8Array | string;

export interface CancelQueryRequest {
  EventDataStore?: string;
  QueryId: string;
  EventDataStoreOwnerAccountId?: string;
}
export interface CancelQueryResponse {
  QueryId: string;
  QueryStatus: QueryStatus;
  EventDataStoreOwnerAccountId?: string;
}
export declare class CannotDelegateManagementAccountException extends EffectData.TaggedError(
  "CannotDelegateManagementAccountException",
)<{
  readonly Message?: string;
}> {}
export interface Channel {
  ChannelArn?: string;
  Name?: string;
}
export declare class ChannelAlreadyExistsException extends EffectData.TaggedError(
  "ChannelAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type ChannelArn = string;

export declare class ChannelARNInvalidException extends EffectData.TaggedError(
  "ChannelARNInvalidException",
)<{
  readonly Message?: string;
}> {}
export declare class ChannelExistsForEDSException extends EffectData.TaggedError(
  "ChannelExistsForEDSException",
)<{
  readonly Message?: string;
}> {}
export declare class ChannelMaxLimitExceededException extends EffectData.TaggedError(
  "ChannelMaxLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ChannelName = string;

export declare class ChannelNotFoundException extends EffectData.TaggedError(
  "ChannelNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Channels = Array<Channel>;
export declare class CloudTrailAccessNotEnabledException extends EffectData.TaggedError(
  "CloudTrailAccessNotEnabledException",
)<{
  readonly Message?: string;
}> {}
export declare class CloudTrailARNInvalidException extends EffectData.TaggedError(
  "CloudTrailARNInvalidException",
)<{
  readonly Message?: string;
}> {}
export declare class CloudTrailInvalidClientTokenIdException extends EffectData.TaggedError(
  "CloudTrailInvalidClientTokenIdException",
)<{
  readonly Message?: string;
}> {}
export declare class CloudWatchLogsDeliveryUnavailableException extends EffectData.TaggedError(
  "CloudWatchLogsDeliveryUnavailableException",
)<{
  readonly Message?: string;
}> {}
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface ContextKeySelector {
  Type: Type;
  Equals: Array<string>;
}
export type ContextKeySelectors = Array<ContextKeySelector>;
export interface CreateChannelRequest {
  Name: string;
  Source: string;
  Destinations: Array<Destination>;
  Tags?: Array<Tag>;
}
export interface CreateChannelResponse {
  ChannelArn?: string;
  Name?: string;
  Source?: string;
  Destinations?: Array<Destination>;
  Tags?: Array<Tag>;
}
export interface CreateDashboardRequest {
  Name: string;
  RefreshSchedule?: RefreshSchedule;
  TagsList?: Array<Tag>;
  TerminationProtectionEnabled?: boolean;
  Widgets?: Array<RequestWidget>;
}
export interface CreateDashboardResponse {
  DashboardArn?: string;
  Name?: string;
  Type?: DashboardType;
  Widgets?: Array<Widget>;
  TagsList?: Array<Tag>;
  RefreshSchedule?: RefreshSchedule;
  TerminationProtectionEnabled?: boolean;
}
export interface CreateEventDataStoreRequest {
  Name: string;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
  MultiRegionEnabled?: boolean;
  OrganizationEnabled?: boolean;
  RetentionPeriod?: number;
  TerminationProtectionEnabled?: boolean;
  TagsList?: Array<Tag>;
  KmsKeyId?: string;
  StartIngestion?: boolean;
  BillingMode?: BillingMode;
}
export interface CreateEventDataStoreResponse {
  EventDataStoreArn?: string;
  Name?: string;
  Status?: EventDataStoreStatus;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
  MultiRegionEnabled?: boolean;
  OrganizationEnabled?: boolean;
  RetentionPeriod?: number;
  TerminationProtectionEnabled?: boolean;
  TagsList?: Array<Tag>;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  KmsKeyId?: string;
  BillingMode?: BillingMode;
}
export interface CreateTrailRequest {
  Name: string;
  S3BucketName: string;
  S3KeyPrefix?: string;
  SnsTopicName?: string;
  IncludeGlobalServiceEvents?: boolean;
  IsMultiRegionTrail?: boolean;
  EnableLogFileValidation?: boolean;
  CloudWatchLogsLogGroupArn?: string;
  CloudWatchLogsRoleArn?: string;
  KmsKeyId?: string;
  IsOrganizationTrail?: boolean;
  TagsList?: Array<Tag>;
}
export interface CreateTrailResponse {
  Name?: string;
  S3BucketName?: string;
  S3KeyPrefix?: string;
  SnsTopicName?: string;
  SnsTopicARN?: string;
  IncludeGlobalServiceEvents?: boolean;
  IsMultiRegionTrail?: boolean;
  TrailARN?: string;
  LogFileValidationEnabled?: boolean;
  CloudWatchLogsLogGroupArn?: string;
  CloudWatchLogsRoleArn?: string;
  KmsKeyId?: string;
  IsOrganizationTrail?: boolean;
}
export type DashboardArn = string;

export interface DashboardDetail {
  DashboardArn?: string;
  Type?: DashboardType;
}
export type DashboardName = string;

export type Dashboards = Array<DashboardDetail>;
export type DashboardStatus =
  | "CREATING"
  | "CREATED"
  | "UPDATING"
  | "UPDATED"
  | "DELETING";
export type DashboardType = "MANAGED" | "CUSTOM";
export interface DataResource {
  Type?: string;
  Values?: Array<string>;
}
export type DataResources = Array<DataResource>;
export type DataResourceValues = Array<string>;
export type CloudtrailDate = Date | string;

export declare class DelegatedAdminAccountLimitExceededException extends EffectData.TaggedError(
  "DelegatedAdminAccountLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteChannelRequest {
  Channel: string;
}
export interface DeleteChannelResponse {}
export interface DeleteDashboardRequest {
  DashboardId: string;
}
export interface DeleteDashboardResponse {}
export interface DeleteEventDataStoreRequest {
  EventDataStore: string;
}
export interface DeleteEventDataStoreResponse {}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteTrailRequest {
  Name: string;
}
export interface DeleteTrailResponse {}
export type DeliveryS3Uri = string;

export type DeliveryStatus =
  | "SUCCESS"
  | "FAILED"
  | "FAILED_SIGNING_FILE"
  | "PENDING"
  | "RESOURCE_NOT_FOUND"
  | "ACCESS_DENIED"
  | "ACCESS_DENIED_SIGNING_FILE"
  | "CANCELLED"
  | "UNKNOWN";
export interface DeregisterOrganizationDelegatedAdminRequest {
  DelegatedAdminAccountId: string;
}
export interface DeregisterOrganizationDelegatedAdminResponse {}
export interface DescribeQueryRequest {
  EventDataStore?: string;
  QueryId?: string;
  QueryAlias?: string;
  RefreshId?: string;
  EventDataStoreOwnerAccountId?: string;
}
export interface DescribeQueryResponse {
  QueryId?: string;
  QueryString?: string;
  QueryStatus?: QueryStatus;
  QueryStatistics?: QueryStatisticsForDescribeQuery;
  ErrorMessage?: string;
  DeliveryS3Uri?: string;
  DeliveryStatus?: DeliveryStatus;
  Prompt?: string;
  EventDataStoreOwnerAccountId?: string;
}
export interface DescribeTrailsRequest {
  trailNameList?: Array<string>;
  includeShadowTrails?: boolean;
}
export interface DescribeTrailsResponse {
  trailList?: Array<Trail>;
}
export interface Destination {
  Type: DestinationType;
  Location: string;
}
export type Destinations = Array<Destination>;
export type DestinationType = "EVENT_DATA_STORE" | "AWS_SERVICE";
export interface DisableFederationRequest {
  EventDataStore: string;
}
export interface DisableFederationResponse {
  EventDataStoreArn?: string;
  FederationStatus?: FederationStatus;
}
export type Double = number;

export interface EnableFederationRequest {
  EventDataStore: string;
  FederationRoleArn: string;
}
export interface EnableFederationResponse {
  EventDataStoreArn?: string;
  FederationStatus?: FederationStatus;
  FederationRoleArn?: string;
}
export type ErrorCode = string;

export type ErrorMessage = string;

export interface Event {
  EventId?: string;
  EventName?: string;
  ReadOnly?: string;
  AccessKeyId?: string;
  EventTime?: Date | string;
  EventSource?: string;
  Username?: string;
  Resources?: Array<Resource>;
  CloudTrailEvent?: string;
}
export type EventCategory = "Insight";
export interface EventDataStore {
  EventDataStoreArn?: string;
  Name?: string;
  TerminationProtectionEnabled?: boolean;
  Status?: EventDataStoreStatus;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
  MultiRegionEnabled?: boolean;
  OrganizationEnabled?: boolean;
  RetentionPeriod?: number;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export declare class EventDataStoreAlreadyExistsException extends EffectData.TaggedError(
  "EventDataStoreAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type EventDataStoreArn = string;

export declare class EventDataStoreARNInvalidException extends EffectData.TaggedError(
  "EventDataStoreARNInvalidException",
)<{
  readonly Message?: string;
}> {}
export declare class EventDataStoreFederationEnabledException extends EffectData.TaggedError(
  "EventDataStoreFederationEnabledException",
)<{
  readonly Message?: string;
}> {}
export declare class EventDataStoreHasOngoingImportException extends EffectData.TaggedError(
  "EventDataStoreHasOngoingImportException",
)<{
  readonly Message?: string;
}> {}
export type EventDataStoreKmsKeyId = string;

export type EventDataStoreList = Array<string>;
export declare class EventDataStoreMaxLimitExceededException extends EffectData.TaggedError(
  "EventDataStoreMaxLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type EventDataStoreName = string;

export declare class EventDataStoreNotFoundException extends EffectData.TaggedError(
  "EventDataStoreNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type EventDataStores = Array<EventDataStore>;
export type EventDataStoreStatus =
  | "CREATED"
  | "ENABLED"
  | "PENDING_DELETION"
  | "STARTING_INGESTION"
  | "STOPPING_INGESTION"
  | "STOPPED_INGESTION";
export declare class EventDataStoreTerminationProtectedException extends EffectData.TaggedError(
  "EventDataStoreTerminationProtectedException",
)<{
  readonly Message?: string;
}> {}
export type EventName = string;

export interface EventSelector {
  ReadWriteType?: ReadWriteType;
  IncludeManagementEvents?: boolean;
  DataResources?: Array<DataResource>;
  ExcludeManagementEventSources?: Array<string>;
}
export type EventSelectors = Array<EventSelector>;
export type EventsList = Array<Event>;
export type EventSource = string;

export type ExcludeManagementEventSources = Array<string>;
export type FederationRoleArn = string;

export type FederationStatus =
  | "ENABLING"
  | "ENABLED"
  | "DISABLING"
  | "DISABLED";
export interface GenerateQueryRequest {
  EventDataStores: Array<string>;
  Prompt: string;
}
export interface GenerateQueryResponse {
  QueryStatement?: string;
  QueryAlias?: string;
  EventDataStoreOwnerAccountId?: string;
}
export declare class GenerateResponseException extends EffectData.TaggedError(
  "GenerateResponseException",
)<{
  readonly Message?: string;
}> {}
export interface GetChannelRequest {
  Channel: string;
}
export interface GetChannelResponse {
  ChannelArn?: string;
  Name?: string;
  Source?: string;
  SourceConfig?: SourceConfig;
  Destinations?: Array<Destination>;
  IngestionStatus?: IngestionStatus;
}
export interface GetDashboardRequest {
  DashboardId: string;
}
export interface GetDashboardResponse {
  DashboardArn?: string;
  Type?: DashboardType;
  Status?: DashboardStatus;
  Widgets?: Array<Widget>;
  RefreshSchedule?: RefreshSchedule;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  LastRefreshId?: string;
  LastRefreshFailureReason?: string;
  TerminationProtectionEnabled?: boolean;
}
export interface GetEventConfigurationRequest {
  EventDataStore?: string;
}
export interface GetEventConfigurationResponse {
  EventDataStoreArn?: string;
  MaxEventSize?: MaxEventSize;
  ContextKeySelectors?: Array<ContextKeySelector>;
}
export interface GetEventDataStoreRequest {
  EventDataStore: string;
}
export interface GetEventDataStoreResponse {
  EventDataStoreArn?: string;
  Name?: string;
  Status?: EventDataStoreStatus;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
  MultiRegionEnabled?: boolean;
  OrganizationEnabled?: boolean;
  RetentionPeriod?: number;
  TerminationProtectionEnabled?: boolean;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  KmsKeyId?: string;
  BillingMode?: BillingMode;
  FederationStatus?: FederationStatus;
  FederationRoleArn?: string;
  PartitionKeys?: Array<PartitionKey>;
}
export interface GetEventSelectorsRequest {
  TrailName: string;
}
export interface GetEventSelectorsResponse {
  TrailARN?: string;
  EventSelectors?: Array<EventSelector>;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
}
export interface GetImportRequest {
  ImportId: string;
}
export interface GetImportResponse {
  ImportId?: string;
  Destinations?: Array<string>;
  ImportSource?: ImportSource;
  StartEventTime?: Date | string;
  EndEventTime?: Date | string;
  ImportStatus?: ImportStatus;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  ImportStatistics?: ImportStatistics;
}
export interface GetInsightSelectorsRequest {
  TrailName?: string;
  EventDataStore?: string;
}
export interface GetInsightSelectorsResponse {
  TrailARN?: string;
  InsightSelectors?: Array<InsightSelector>;
  EventDataStoreArn?: string;
  InsightsDestination?: string;
}
export interface GetQueryResultsRequest {
  EventDataStore?: string;
  QueryId: string;
  NextToken?: string;
  MaxQueryResults?: number;
  EventDataStoreOwnerAccountId?: string;
}
export interface GetQueryResultsResponse {
  QueryStatus?: QueryStatus;
  QueryStatistics?: QueryStatistics;
  QueryResultRows?: Array<Array<Record<string, string>>>;
  NextToken?: string;
  ErrorMessage?: string;
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export interface GetResourcePolicyResponse {
  ResourceArn?: string;
  ResourcePolicy?: string;
  DelegatedAdminResourcePolicy?: string;
}
export interface GetTrailRequest {
  Name: string;
}
export interface GetTrailResponse {
  Trail?: Trail;
}
export interface GetTrailStatusRequest {
  Name: string;
}
export interface GetTrailStatusResponse {
  IsLogging?: boolean;
  LatestDeliveryError?: string;
  LatestNotificationError?: string;
  LatestDeliveryTime?: Date | string;
  LatestNotificationTime?: Date | string;
  StartLoggingTime?: Date | string;
  StopLoggingTime?: Date | string;
  LatestCloudWatchLogsDeliveryError?: string;
  LatestCloudWatchLogsDeliveryTime?: Date | string;
  LatestDigestDeliveryTime?: Date | string;
  LatestDigestDeliveryError?: string;
  LatestDeliveryAttemptTime?: string;
  LatestNotificationAttemptTime?: string;
  LatestNotificationAttemptSucceeded?: string;
  LatestDeliveryAttemptSucceeded?: string;
  TimeLoggingStarted?: string;
  TimeLoggingStopped?: string;
}
export type ImportDestinations = Array<string>;
export type ImportFailureList = Array<ImportFailureListItem>;
export interface ImportFailureListItem {
  Location?: string;
  Status?: ImportFailureStatus;
  ErrorType?: string;
  ErrorMessage?: string;
  LastUpdatedTime?: Date | string;
}
export type ImportFailureStatus = "FAILED" | "RETRY" | "SUCCEEDED";
export declare class ImportNotFoundException extends EffectData.TaggedError(
  "ImportNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ImportsList = Array<ImportsListItem>;
export interface ImportsListItem {
  ImportId?: string;
  ImportStatus?: ImportStatus;
  Destinations?: Array<string>;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export interface ImportSource {
  S3: S3ImportSource;
}
export interface ImportStatistics {
  PrefixesFound?: number;
  PrefixesCompleted?: number;
  FilesCompleted?: number;
  EventsCompleted?: number;
  FailedEntries?: number;
}
export type ImportStatus =
  | "INITIALIZING"
  | "IN_PROGRESS"
  | "FAILED"
  | "STOPPED"
  | "COMPLETED";
export declare class InactiveEventDataStoreException extends EffectData.TaggedError(
  "InactiveEventDataStoreException",
)<{
  readonly Message?: string;
}> {}
export declare class InactiveQueryException extends EffectData.TaggedError(
  "InactiveQueryException",
)<{
  readonly Message?: string;
}> {}
export interface IngestionStatus {
  LatestIngestionSuccessTime?: Date | string;
  LatestIngestionSuccessEventID?: string;
  LatestIngestionErrorCode?: string;
  LatestIngestionAttemptTime?: Date | string;
  LatestIngestionAttemptEventID?: string;
}
export declare class InsightNotEnabledException extends EffectData.TaggedError(
  "InsightNotEnabledException",
)<{
  readonly Message?: string;
}> {}
export interface InsightSelector {
  InsightType?: InsightType;
}
export type InsightSelectors = Array<InsightSelector>;
export type InsightsMetricDataType = "FILL_WITH_ZEROS" | "NON_ZERO_DATA";
export type InsightsMetricMaxResults = number;

export type InsightsMetricNextToken = string;

export type InsightsMetricPeriod = number;

export type InsightsMetricValues = Array<number>;
export type InsightType = "ApiCallRateInsight" | "ApiErrorRateInsight";
export declare class InsufficientDependencyServiceAccessPermissionException extends EffectData.TaggedError(
  "InsufficientDependencyServiceAccessPermissionException",
)<{
  readonly Message?: string;
}> {}
export declare class InsufficientEncryptionPolicyException extends EffectData.TaggedError(
  "InsufficientEncryptionPolicyException",
)<{
  readonly Message?: string;
}> {}
export declare class InsufficientIAMAccessPermissionException extends EffectData.TaggedError(
  "InsufficientIAMAccessPermissionException",
)<{
  readonly Message?: string;
}> {}
export declare class InsufficientS3BucketPolicyException extends EffectData.TaggedError(
  "InsufficientS3BucketPolicyException",
)<{
  readonly Message?: string;
}> {}
export declare class InsufficientSnsTopicPolicyException extends EffectData.TaggedError(
  "InsufficientSnsTopicPolicyException",
)<{
  readonly Message?: string;
}> {}
export type Integer = number;

export declare class InvalidCloudWatchLogsLogGroupArnException extends EffectData.TaggedError(
  "InvalidCloudWatchLogsLogGroupArnException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidCloudWatchLogsRoleArnException extends EffectData.TaggedError(
  "InvalidCloudWatchLogsRoleArnException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDateRangeException extends EffectData.TaggedError(
  "InvalidDateRangeException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidEventCategoryException extends EffectData.TaggedError(
  "InvalidEventCategoryException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidEventDataStoreCategoryException extends EffectData.TaggedError(
  "InvalidEventDataStoreCategoryException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidEventDataStoreStatusException extends EffectData.TaggedError(
  "InvalidEventDataStoreStatusException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidEventSelectorsException extends EffectData.TaggedError(
  "InvalidEventSelectorsException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidHomeRegionException extends EffectData.TaggedError(
  "InvalidHomeRegionException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidImportSourceException extends EffectData.TaggedError(
  "InvalidImportSourceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInsightSelectorsException extends EffectData.TaggedError(
  "InvalidInsightSelectorsException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidKmsKeyIdException extends EffectData.TaggedError(
  "InvalidKmsKeyIdException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidLookupAttributesException extends EffectData.TaggedError(
  "InvalidLookupAttributesException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidMaxResultsException extends EffectData.TaggedError(
  "InvalidMaxResultsException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterCombinationException extends EffectData.TaggedError(
  "InvalidParameterCombinationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidQueryStatementException extends EffectData.TaggedError(
  "InvalidQueryStatementException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidQueryStatusException extends EffectData.TaggedError(
  "InvalidQueryStatusException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidS3BucketNameException extends EffectData.TaggedError(
  "InvalidS3BucketNameException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidS3PrefixException extends EffectData.TaggedError(
  "InvalidS3PrefixException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidSnsTopicNameException extends EffectData.TaggedError(
  "InvalidSnsTopicNameException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidSourceException extends EffectData.TaggedError(
  "InvalidSourceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTagParameterException extends EffectData.TaggedError(
  "InvalidTagParameterException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTimeRangeException extends EffectData.TaggedError(
  "InvalidTimeRangeException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTokenException extends EffectData.TaggedError(
  "InvalidTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTrailNameException extends EffectData.TaggedError(
  "InvalidTrailNameException",
)<{
  readonly Message?: string;
}> {}
export declare class KmsException extends EffectData.TaggedError(
  "KmsException",
)<{
  readonly Message?: string;
}> {}
export declare class KmsKeyDisabledException extends EffectData.TaggedError(
  "KmsKeyDisabledException",
)<{
  readonly Message?: string;
}> {}
export declare class KmsKeyNotFoundException extends EffectData.TaggedError(
  "KmsKeyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ListChannelsMaxResultsCount = number;

export interface ListChannelsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChannelsResponse {
  Channels?: Array<Channel>;
  NextToken?: string;
}
export type ListDashboardsMaxResultsCount = number;

export interface ListDashboardsRequest {
  NamePrefix?: string;
  Type?: DashboardType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDashboardsResponse {
  Dashboards?: Array<DashboardDetail>;
  NextToken?: string;
}
export type ListEventDataStoresMaxResultsCount = number;

export interface ListEventDataStoresRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEventDataStoresResponse {
  EventDataStores?: Array<EventDataStore>;
  NextToken?: string;
}
export type ListImportFailuresMaxResultsCount = number;

export interface ListImportFailuresRequest {
  ImportId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListImportFailuresResponse {
  Failures?: Array<ImportFailureListItem>;
  NextToken?: string;
}
export type ListImportsMaxResultsCount = number;

export interface ListImportsRequest {
  MaxResults?: number;
  Destination?: string;
  ImportStatus?: ImportStatus;
  NextToken?: string;
}
export interface ListImportsResponse {
  Imports?: Array<ImportsListItem>;
  NextToken?: string;
}
export interface ListInsightsMetricDataRequest {
  EventSource: string;
  EventName: string;
  InsightType: InsightType;
  ErrorCode?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Period?: number;
  DataType?: InsightsMetricDataType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInsightsMetricDataResponse {
  EventSource?: string;
  EventName?: string;
  InsightType?: InsightType;
  ErrorCode?: string;
  Timestamps?: Array<Date | string>;
  Values?: Array<number>;
  NextToken?: string;
}
export interface ListPublicKeysRequest {
  StartTime?: Date | string;
  EndTime?: Date | string;
  NextToken?: string;
}
export interface ListPublicKeysResponse {
  PublicKeyList?: Array<PublicKey>;
  NextToken?: string;
}
export type ListQueriesMaxResultsCount = number;

export interface ListQueriesRequest {
  EventDataStore: string;
  NextToken?: string;
  MaxResults?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
  QueryStatus?: QueryStatus;
}
export interface ListQueriesResponse {
  Queries?: Array<Query>;
  NextToken?: string;
}
export interface ListTagsRequest {
  ResourceIdList: Array<string>;
  NextToken?: string;
}
export interface ListTagsResponse {
  ResourceTagList?: Array<ResourceTag>;
  NextToken?: string;
}
export interface ListTrailsRequest {
  NextToken?: string;
}
export interface ListTrailsResponse {
  Trails?: Array<TrailInfo>;
  NextToken?: string;
}
export type Location = string;

export type Long = number;

export interface LookupAttribute {
  AttributeKey: LookupAttributeKey;
  AttributeValue: string;
}
export type LookupAttributeKey =
  | "EVENT_ID"
  | "EVENT_NAME"
  | "READ_ONLY"
  | "USERNAME"
  | "RESOURCE_TYPE"
  | "RESOURCE_NAME"
  | "EVENT_SOURCE"
  | "ACCESS_KEY_ID";
export type LookupAttributesList = Array<LookupAttribute>;
export type LookupAttributeValue = string;

export interface LookupEventsRequest {
  LookupAttributes?: Array<LookupAttribute>;
  StartTime?: Date | string;
  EndTime?: Date | string;
  EventCategory?: EventCategory;
  MaxResults?: number;
  NextToken?: string;
}
export interface LookupEventsResponse {
  Events?: Array<Event>;
  NextToken?: string;
}
export declare class MaxConcurrentQueriesException extends EffectData.TaggedError(
  "MaxConcurrentQueriesException",
)<{
  readonly Message?: string;
}> {}
export type MaxEventSize = "Standard" | "Large";
export declare class MaximumNumberOfTrailsExceededException extends EffectData.TaggedError(
  "MaximumNumberOfTrailsExceededException",
)<{
  readonly Message?: string;
}> {}
export type MaxQueryResults = number;

export type MaxResults = number;

export type NextToken = string;

export declare class NoManagementAccountSLRExistsException extends EffectData.TaggedError(
  "NoManagementAccountSLRExistsException",
)<{
  readonly Message?: string;
}> {}
export declare class NotOrganizationManagementAccountException extends EffectData.TaggedError(
  "NotOrganizationManagementAccountException",
)<{
  readonly Message?: string;
}> {}
export declare class NotOrganizationMasterAccountException extends EffectData.TaggedError(
  "NotOrganizationMasterAccountException",
)<{
  readonly Message?: string;
}> {}
export declare class OperationNotPermittedException extends EffectData.TaggedError(
  "OperationNotPermittedException",
)<{
  readonly Message?: string;
}> {}
export type Operator = Array<string>;
export type OperatorTargetList = Array<string>;
export type OperatorTargetListMember = string;

export type OperatorValue = string;

export declare class OrganizationNotInAllFeaturesModeException extends EffectData.TaggedError(
  "OrganizationNotInAllFeaturesModeException",
)<{
  readonly Message?: string;
}> {}
export declare class OrganizationsNotInUseException extends EffectData.TaggedError(
  "OrganizationsNotInUseException",
)<{
  readonly Message?: string;
}> {}
export type PaginationToken = string;

export interface PartitionKey {
  Name: string;
  Type: string;
}
export type PartitionKeyList = Array<PartitionKey>;
export type PartitionKeyName = string;

export type PartitionKeyType = string;

export type Prompt = string;

export interface PublicKey {
  Value?: Uint8Array | string;
  ValidityStartTime?: Date | string;
  ValidityEndTime?: Date | string;
  Fingerprint?: string;
}
export type PublicKeyList = Array<PublicKey>;
export interface PutEventConfigurationRequest {
  EventDataStore?: string;
  MaxEventSize: MaxEventSize;
  ContextKeySelectors: Array<ContextKeySelector>;
}
export interface PutEventConfigurationResponse {
  EventDataStoreArn?: string;
  MaxEventSize?: MaxEventSize;
  ContextKeySelectors?: Array<ContextKeySelector>;
}
export interface PutEventSelectorsRequest {
  TrailName: string;
  EventSelectors?: Array<EventSelector>;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
}
export interface PutEventSelectorsResponse {
  TrailARN?: string;
  EventSelectors?: Array<EventSelector>;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
}
export interface PutInsightSelectorsRequest {
  TrailName?: string;
  InsightSelectors: Array<InsightSelector>;
  EventDataStore?: string;
  InsightsDestination?: string;
}
export interface PutInsightSelectorsResponse {
  TrailARN?: string;
  InsightSelectors?: Array<InsightSelector>;
  EventDataStoreArn?: string;
  InsightsDestination?: string;
}
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  ResourcePolicy: string;
}
export interface PutResourcePolicyResponse {
  ResourceArn?: string;
  ResourcePolicy?: string;
  DelegatedAdminResourcePolicy?: string;
}
export type Queries = Array<Query>;
export interface Query {
  QueryId?: string;
  QueryStatus?: QueryStatus;
  CreationTime?: Date | string;
}
export type QueryAlias = string;

export declare class QueryIdNotFoundException extends EffectData.TaggedError(
  "QueryIdNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type QueryParameter = string;

export type QueryParameterKey = string;

export type QueryParameters = Array<string>;
export type QueryParameterValue = string;

export type QueryParameterValues = Record<string, string>;
export type QueryResultColumn = Record<string, string>;
export type QueryResultKey = string;

export type QueryResultRow = Array<Record<string, string>>;
export type QueryResultRows = Array<Array<Record<string, string>>>;
export type QueryResultValue = string;

export type QueryStatement = string;

export interface QueryStatistics {
  ResultsCount?: number;
  TotalResultsCount?: number;
  BytesScanned?: number;
}
export interface QueryStatisticsForDescribeQuery {
  EventsMatched?: number;
  EventsScanned?: number;
  BytesScanned?: number;
  ExecutionTimeInMillis?: number;
  CreationTime?: Date | string;
}
export type QueryStatus =
  | "QUEUED"
  | "RUNNING"
  | "FINISHED"
  | "FAILED"
  | "CANCELLED"
  | "TIMED_OUT";
export type ReadWriteType = "ReadOnly" | "WriteOnly" | "All";
export type RefreshId = string;

export interface RefreshSchedule {
  Frequency?: RefreshScheduleFrequency;
  Status?: RefreshScheduleStatus;
  TimeOfDay?: string;
}
export interface RefreshScheduleFrequency {
  Unit?: RefreshScheduleFrequencyUnit;
  Value?: number;
}
export type RefreshScheduleFrequencyUnit = "HOURS" | "DAYS";
export type RefreshScheduleFrequencyValue = number;

export type RefreshScheduleStatus = "ENABLED" | "DISABLED";
export interface RegisterOrganizationDelegatedAdminRequest {
  MemberAccountId: string;
}
export interface RegisterOrganizationDelegatedAdminResponse {}
export interface RemoveTagsRequest {
  ResourceId: string;
  TagsList: Array<Tag>;
}
export interface RemoveTagsResponse {}
export interface RequestWidget {
  QueryStatement: string;
  QueryParameters?: Array<string>;
  ViewProperties: Record<string, string>;
}
export type RequestWidgetList = Array<RequestWidget>;
export interface Resource {
  ResourceType?: string;
  ResourceName?: string;
}
export type ResourceArn = string;

export declare class ResourceARNNotValidException extends EffectData.TaggedError(
  "ResourceARNNotValidException",
)<{
  readonly Message?: string;
}> {}
export type ResourceIdList = Array<string>;
export type ResourceList = Array<Resource>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourcePolicy = string;

export declare class ResourcePolicyNotFoundException extends EffectData.TaggedError(
  "ResourcePolicyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourcePolicyNotValidException extends EffectData.TaggedError(
  "ResourcePolicyNotValidException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceTag {
  ResourceId?: string;
  TagsList?: Array<Tag>;
}
export type ResourceTagList = Array<ResourceTag>;
export declare class ResourceTypeNotSupportedException extends EffectData.TaggedError(
  "ResourceTypeNotSupportedException",
)<{
  readonly Message?: string;
}> {}
export interface RestoreEventDataStoreRequest {
  EventDataStore: string;
}
export interface RestoreEventDataStoreResponse {
  EventDataStoreArn?: string;
  Name?: string;
  Status?: EventDataStoreStatus;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
  MultiRegionEnabled?: boolean;
  OrganizationEnabled?: boolean;
  RetentionPeriod?: number;
  TerminationProtectionEnabled?: boolean;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  KmsKeyId?: string;
  BillingMode?: BillingMode;
}
export type RetentionPeriod = number;

export declare class S3BucketDoesNotExistException extends EffectData.TaggedError(
  "S3BucketDoesNotExistException",
)<{
  readonly Message?: string;
}> {}
export interface S3ImportSource {
  S3LocationUri: string;
  S3BucketRegion: string;
  S3BucketAccessRoleArn: string;
}
export type SampleQueryDescription = string;

export type SampleQueryName = string;

export type SampleQueryRelevance = number;

export type SampleQuerySQL = string;

export type SearchSampleQueriesMaxResults = number;

export interface SearchSampleQueriesRequest {
  SearchPhrase: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface SearchSampleQueriesResponse {
  SearchResults?: Array<SearchSampleQueriesSearchResult>;
  NextToken?: string;
}
export type SearchSampleQueriesSearchPhrase = string;

export interface SearchSampleQueriesSearchResult {
  Name?: string;
  Description?: string;
  SQL?: string;
  Relevance?: number;
}
export type SearchSampleQueriesSearchResults =
  Array<SearchSampleQueriesSearchResult>;
export type SelectorField = string;

export type SelectorName = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type Source = string;

export interface SourceConfig {
  ApplyToAllRegions?: boolean;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
}
export interface StartDashboardRefreshRequest {
  DashboardId: string;
  QueryParameterValues?: Record<string, string>;
}
export interface StartDashboardRefreshResponse {
  RefreshId?: string;
}
export interface StartEventDataStoreIngestionRequest {
  EventDataStore: string;
}
export interface StartEventDataStoreIngestionResponse {}
export interface StartImportRequest {
  Destinations?: Array<string>;
  ImportSource?: ImportSource;
  StartEventTime?: Date | string;
  EndEventTime?: Date | string;
  ImportId?: string;
}
export interface StartImportResponse {
  ImportId?: string;
  Destinations?: Array<string>;
  ImportSource?: ImportSource;
  StartEventTime?: Date | string;
  EndEventTime?: Date | string;
  ImportStatus?: ImportStatus;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export interface StartLoggingRequest {
  Name: string;
}
export interface StartLoggingResponse {}
export interface StartQueryRequest {
  QueryStatement?: string;
  DeliveryS3Uri?: string;
  QueryAlias?: string;
  QueryParameters?: Array<string>;
  EventDataStoreOwnerAccountId?: string;
}
export interface StartQueryResponse {
  QueryId?: string;
  EventDataStoreOwnerAccountId?: string;
}
export interface StopEventDataStoreIngestionRequest {
  EventDataStore: string;
}
export interface StopEventDataStoreIngestionResponse {}
export interface StopImportRequest {
  ImportId: string;
}
export interface StopImportResponse {
  ImportId?: string;
  ImportSource?: ImportSource;
  Destinations?: Array<string>;
  ImportStatus?: ImportStatus;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  StartEventTime?: Date | string;
  EndEventTime?: Date | string;
  ImportStatistics?: ImportStatistics;
}
export interface StopLoggingRequest {
  Name: string;
}
export interface StopLoggingResponse {}
export type CloudtrailString = string;

export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export declare class TagsLimitExceededException extends EffectData.TaggedError(
  "TagsLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type TagsList = Array<Tag>;
export type TagValue = string;

export type TerminationProtectionEnabled = boolean;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type TimeOfDay = string;

export type Timestamps = Array<Date | string>;
export interface Trail {
  Name?: string;
  S3BucketName?: string;
  S3KeyPrefix?: string;
  SnsTopicName?: string;
  SnsTopicARN?: string;
  IncludeGlobalServiceEvents?: boolean;
  IsMultiRegionTrail?: boolean;
  HomeRegion?: string;
  TrailARN?: string;
  LogFileValidationEnabled?: boolean;
  CloudWatchLogsLogGroupArn?: string;
  CloudWatchLogsRoleArn?: string;
  KmsKeyId?: string;
  HasCustomEventSelectors?: boolean;
  HasInsightSelectors?: boolean;
  IsOrganizationTrail?: boolean;
}
export declare class TrailAlreadyExistsException extends EffectData.TaggedError(
  "TrailAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export interface TrailInfo {
  TrailARN?: string;
  Name?: string;
  HomeRegion?: string;
}
export type TrailList = Array<Trail>;
export type TrailNameList = Array<string>;
export declare class TrailNotFoundException extends EffectData.TaggedError(
  "TrailNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class TrailNotProvidedException extends EffectData.TaggedError(
  "TrailNotProvidedException",
)<{
  readonly Message?: string;
}> {}
export type Trails = Array<TrailInfo>;
export type Type = "TagContext" | "RequestContext";
export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateChannelRequest {
  Channel: string;
  Destinations?: Array<Destination>;
  Name?: string;
}
export interface UpdateChannelResponse {
  ChannelArn?: string;
  Name?: string;
  Source?: string;
  Destinations?: Array<Destination>;
}
export interface UpdateDashboardRequest {
  DashboardId: string;
  Widgets?: Array<RequestWidget>;
  RefreshSchedule?: RefreshSchedule;
  TerminationProtectionEnabled?: boolean;
}
export interface UpdateDashboardResponse {
  DashboardArn?: string;
  Name?: string;
  Type?: DashboardType;
  Widgets?: Array<Widget>;
  RefreshSchedule?: RefreshSchedule;
  TerminationProtectionEnabled?: boolean;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export interface UpdateEventDataStoreRequest {
  EventDataStore: string;
  Name?: string;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
  MultiRegionEnabled?: boolean;
  OrganizationEnabled?: boolean;
  RetentionPeriod?: number;
  TerminationProtectionEnabled?: boolean;
  KmsKeyId?: string;
  BillingMode?: BillingMode;
}
export interface UpdateEventDataStoreResponse {
  EventDataStoreArn?: string;
  Name?: string;
  Status?: EventDataStoreStatus;
  AdvancedEventSelectors?: Array<AdvancedEventSelector>;
  MultiRegionEnabled?: boolean;
  OrganizationEnabled?: boolean;
  RetentionPeriod?: number;
  TerminationProtectionEnabled?: boolean;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  KmsKeyId?: string;
  BillingMode?: BillingMode;
  FederationStatus?: FederationStatus;
  FederationRoleArn?: string;
}
export interface UpdateTrailRequest {
  Name: string;
  S3BucketName?: string;
  S3KeyPrefix?: string;
  SnsTopicName?: string;
  IncludeGlobalServiceEvents?: boolean;
  IsMultiRegionTrail?: boolean;
  EnableLogFileValidation?: boolean;
  CloudWatchLogsLogGroupArn?: string;
  CloudWatchLogsRoleArn?: string;
  KmsKeyId?: string;
  IsOrganizationTrail?: boolean;
}
export interface UpdateTrailResponse {
  Name?: string;
  S3BucketName?: string;
  S3KeyPrefix?: string;
  SnsTopicName?: string;
  SnsTopicARN?: string;
  IncludeGlobalServiceEvents?: boolean;
  IsMultiRegionTrail?: boolean;
  TrailARN?: string;
  LogFileValidationEnabled?: boolean;
  CloudWatchLogsLogGroupArn?: string;
  CloudWatchLogsRoleArn?: string;
  KmsKeyId?: string;
  IsOrganizationTrail?: boolean;
}
export type UUID = string;

export type ViewPropertiesKey = string;

export type ViewPropertiesMap = Record<string, string>;
export type ViewPropertiesValue = string;

export interface Widget {
  QueryAlias?: string;
  QueryStatement?: string;
  QueryParameters?: Array<string>;
  ViewProperties?: Record<string, string>;
}
export type WidgetList = Array<Widget>;
export declare namespace AddTags {
  export type Input = AddTagsRequest;
  export type Output = AddTagsResponse;
  export type Error =
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | CloudTrailARNInvalidException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidTagParameterException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | TagsLimitExceededException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CancelQuery {
  export type Input = CancelQueryRequest;
  export type Output = CancelQueryResponse;
  export type Error =
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InactiveQueryException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | QueryIdNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateChannel {
  export type Input = CreateChannelRequest;
  export type Output = CreateChannelResponse;
  export type Error =
    | ChannelAlreadyExistsException
    | ChannelMaxLimitExceededException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidEventDataStoreCategoryException
    | InvalidParameterException
    | InvalidSourceException
    | InvalidTagParameterException
    | OperationNotPermittedException
    | TagsLimitExceededException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateDashboard {
  export type Input = CreateDashboardRequest;
  export type Output = CreateDashboardResponse;
  export type Error =
    | ConflictException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidQueryStatementException
    | InvalidTagParameterException
    | ServiceQuotaExceededException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateEventDataStore {
  export type Input = CreateEventDataStoreRequest;
  export type Output = CreateEventDataStoreResponse;
  export type Error =
    | CloudTrailAccessNotEnabledException
    | ConflictException
    | EventDataStoreAlreadyExistsException
    | EventDataStoreMaxLimitExceededException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InvalidEventSelectorsException
    | InvalidKmsKeyIdException
    | InvalidParameterException
    | InvalidTagParameterException
    | KmsException
    | KmsKeyNotFoundException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateTrail {
  export type Input = CreateTrailRequest;
  export type Output = CreateTrailResponse;
  export type Error =
    | CloudTrailAccessNotEnabledException
    | CloudTrailInvalidClientTokenIdException
    | CloudWatchLogsDeliveryUnavailableException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InsufficientSnsTopicPolicyException
    | InvalidCloudWatchLogsLogGroupArnException
    | InvalidCloudWatchLogsRoleArnException
    | InvalidKmsKeyIdException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidS3BucketNameException
    | InvalidS3PrefixException
    | InvalidSnsTopicNameException
    | InvalidTagParameterException
    | InvalidTrailNameException
    | KmsException
    | KmsKeyDisabledException
    | KmsKeyNotFoundException
    | MaximumNumberOfTrailsExceededException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | S3BucketDoesNotExistException
    | TagsLimitExceededException
    | ThrottlingException
    | TrailAlreadyExistsException
    | TrailNotProvidedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteChannel {
  export type Input = DeleteChannelRequest;
  export type Output = DeleteChannelResponse;
  export type Error =
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteDashboard {
  export type Input = DeleteDashboardRequest;
  export type Output = DeleteDashboardResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteEventDataStore {
  export type Input = DeleteEventDataStoreRequest;
  export type Output = DeleteEventDataStoreResponse;
  export type Error =
    | ChannelExistsForEDSException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreFederationEnabledException
    | EventDataStoreHasOngoingImportException
    | EventDataStoreNotFoundException
    | EventDataStoreTerminationProtectedException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | ConflictException
    | OperationNotPermittedException
    | ResourceARNNotValidException
    | ResourceNotFoundException
    | ResourcePolicyNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteTrail {
  export type Input = DeleteTrailRequest;
  export type Output = DeleteTrailResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeregisterOrganizationDelegatedAdmin {
  export type Input = DeregisterOrganizationDelegatedAdminRequest;
  export type Output = DeregisterOrganizationDelegatedAdminResponse;
  export type Error =
    | AccountNotFoundException
    | AccountNotRegisteredException
    | CloudTrailAccessNotEnabledException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NotOrganizationManagementAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeQuery {
  export type Input = DescribeQueryRequest;
  export type Output = DescribeQueryResponse;
  export type Error =
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | QueryIdNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeTrails {
  export type Input = DescribeTrailsRequest;
  export type Output = DescribeTrailsResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DisableFederation {
  export type Input = DisableFederationRequest;
  export type Output = DisableFederationResponse;
  export type Error =
    | AccessDeniedException
    | CloudTrailAccessNotEnabledException
    | ConcurrentModificationException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace EnableFederation {
  export type Input = EnableFederationRequest;
  export type Output = EnableFederationResponse;
  export type Error =
    | AccessDeniedException
    | CloudTrailAccessNotEnabledException
    | ConcurrentModificationException
    | EventDataStoreARNInvalidException
    | EventDataStoreFederationEnabledException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GenerateQuery {
  export type Input = GenerateQueryRequest;
  export type Output = GenerateQueryResponse;
  export type Error =
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | GenerateResponseException
    | InactiveEventDataStoreException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetChannel {
  export type Input = GetChannelRequest;
  export type Output = GetChannelResponse;
  export type Error =
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetDashboard {
  export type Input = GetDashboardRequest;
  export type Output = GetDashboardResponse;
  export type Error =
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetEventConfiguration {
  export type Input = GetEventConfigurationRequest;
  export type Output = GetEventConfigurationResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetEventDataStore {
  export type Input = GetEventDataStoreRequest;
  export type Output = GetEventDataStoreResponse;
  export type Error =
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetEventSelectors {
  export type Input = GetEventSelectorsRequest;
  export type Output = GetEventSelectorsResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetImport {
  export type Input = GetImportRequest;
  export type Output = GetImportResponse;
  export type Error =
    | ImportNotFoundException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetInsightSelectors {
  export type Input = GetInsightSelectorsRequest;
  export type Output = GetInsightSelectorsResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | InsightNotEnabledException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetQueryResults {
  export type Input = GetQueryResultsRequest;
  export type Output = GetQueryResultsResponse;
  export type Error =
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | QueryIdNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | OperationNotPermittedException
    | ResourceARNNotValidException
    | ResourceNotFoundException
    | ResourcePolicyNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetTrail {
  export type Input = GetTrailRequest;
  export type Output = GetTrailResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | OperationNotPermittedException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetTrailStatus {
  export type Input = GetTrailStatusRequest;
  export type Output = GetTrailStatusResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | OperationNotPermittedException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListChannels {
  export type Input = ListChannelsRequest;
  export type Output = ListChannelsResponse;
  export type Error =
    | InvalidNextTokenException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListDashboards {
  export type Input = ListDashboardsRequest;
  export type Output = ListDashboardsResponse;
  export type Error = UnsupportedOperationException | CommonAwsError;
}

export declare namespace ListEventDataStores {
  export type Input = ListEventDataStoresRequest;
  export type Output = ListEventDataStoresResponse;
  export type Error =
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListImportFailures {
  export type Input = ListImportFailuresRequest;
  export type Output = ListImportFailuresResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListImports {
  export type Input = ListImportsRequest;
  export type Output = ListImportsResponse;
  export type Error =
    | EventDataStoreARNInvalidException
    | InvalidNextTokenException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListInsightsMetricData {
  export type Input = ListInsightsMetricDataRequest;
  export type Output = ListInsightsMetricDataResponse;
  export type Error =
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListPublicKeys {
  export type Input = ListPublicKeysRequest;
  export type Output = ListPublicKeysResponse;
  export type Error =
    | InvalidTimeRangeException
    | InvalidTokenException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListQueries {
  export type Input = ListQueriesRequest;
  export type Output = ListQueriesResponse;
  export type Error =
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidDateRangeException
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidQueryStatusException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = ListTagsResponse;
  export type Error =
    | ChannelARNInvalidException
    | CloudTrailARNInvalidException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidTokenException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListTrails {
  export type Input = ListTrailsRequest;
  export type Output = ListTrailsResponse;
  export type Error =
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace LookupEvents {
  export type Input = LookupEventsRequest;
  export type Output = LookupEventsResponse;
  export type Error =
    | InvalidEventCategoryException
    | InvalidLookupAttributesException
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidTimeRangeException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace PutEventConfiguration {
  export type Input = PutEventConfigurationRequest;
  export type Output = PutEventConfigurationResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientIAMAccessPermissionException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace PutEventSelectors {
  export type Input = PutEventSelectorsRequest;
  export type Output = PutEventSelectorsResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventSelectorsException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace PutInsightSelectors {
  export type Input = PutInsightSelectorsRequest;
  export type Output = PutInsightSelectorsResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InvalidHomeRegionException
    | InvalidInsightSelectorsException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidTrailNameException
    | KmsException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | S3BucketDoesNotExistException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | ConflictException
    | OperationNotPermittedException
    | ResourceARNNotValidException
    | ResourceNotFoundException
    | ResourcePolicyNotValidException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace RegisterOrganizationDelegatedAdmin {
  export type Input = RegisterOrganizationDelegatedAdminRequest;
  export type Output = RegisterOrganizationDelegatedAdminResponse;
  export type Error =
    | AccountNotFoundException
    | AccountRegisteredException
    | CannotDelegateManagementAccountException
    | CloudTrailAccessNotEnabledException
    | ConflictException
    | DelegatedAdminAccountLimitExceededException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientIAMAccessPermissionException
    | InvalidParameterException
    | NotOrganizationManagementAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace RemoveTags {
  export type Input = RemoveTagsRequest;
  export type Output = RemoveTagsResponse;
  export type Error =
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | CloudTrailARNInvalidException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidTagParameterException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace RestoreEventDataStore {
  export type Input = RestoreEventDataStoreRequest;
  export type Output = RestoreEventDataStoreResponse;
  export type Error =
    | CloudTrailAccessNotEnabledException
    | EventDataStoreARNInvalidException
    | EventDataStoreMaxLimitExceededException
    | EventDataStoreNotFoundException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventDataStoreStatusException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace SearchSampleQueries {
  export type Input = SearchSampleQueriesRequest;
  export type Output = SearchSampleQueriesResponse;
  export type Error =
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartDashboardRefresh {
  export type Input = StartDashboardRefreshRequest;
  export type Output = StartDashboardRefreshResponse;
  export type Error =
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartEventDataStoreIngestion {
  export type Input = StartEventDataStoreIngestionRequest;
  export type Output = StartEventDataStoreIngestionResponse;
  export type Error =
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartImport {
  export type Input = StartImportRequest;
  export type Output = StartImportResponse;
  export type Error =
    | AccountHasOngoingImportException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | ImportNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidImportSourceException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartLogging {
  export type Input = StartLoggingRequest;
  export type Output = StartLoggingResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartQuery {
  export type Input = StartQueryRequest;
  export type Output = StartQueryResponse;
  export type Error =
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InvalidParameterException
    | InvalidQueryStatementException
    | InvalidS3BucketNameException
    | InvalidS3PrefixException
    | MaxConcurrentQueriesException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | S3BucketDoesNotExistException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StopEventDataStoreIngestion {
  export type Input = StopEventDataStoreIngestionRequest;
  export type Output = StopEventDataStoreIngestionResponse;
  export type Error =
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StopImport {
  export type Input = StopImportRequest;
  export type Output = StopImportResponse;
  export type Error =
    | ImportNotFoundException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StopLogging {
  export type Input = StopLoggingRequest;
  export type Output = StopLoggingResponse;
  export type Error =
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateChannel {
  export type Input = UpdateChannelRequest;
  export type Output = UpdateChannelResponse;
  export type Error =
    | ChannelAlreadyExistsException
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidEventDataStoreCategoryException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateDashboard {
  export type Input = UpdateDashboardRequest;
  export type Output = UpdateDashboardResponse;
  export type Error =
    | ConflictException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidQueryStatementException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateEventDataStore {
  export type Input = UpdateEventDataStoreRequest;
  export type Output = UpdateEventDataStoreResponse;
  export type Error =
    | CloudTrailAccessNotEnabledException
    | EventDataStoreAlreadyExistsException
    | EventDataStoreARNInvalidException
    | EventDataStoreHasOngoingImportException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InvalidEventSelectorsException
    | InvalidInsightSelectorsException
    | InvalidKmsKeyIdException
    | InvalidParameterException
    | KmsException
    | KmsKeyNotFoundException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateTrail {
  export type Input = UpdateTrailRequest;
  export type Output = UpdateTrailResponse;
  export type Error =
    | CloudTrailAccessNotEnabledException
    | CloudTrailARNInvalidException
    | CloudTrailInvalidClientTokenIdException
    | CloudWatchLogsDeliveryUnavailableException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InsufficientSnsTopicPolicyException
    | InvalidCloudWatchLogsLogGroupArnException
    | InvalidCloudWatchLogsRoleArnException
    | InvalidEventSelectorsException
    | InvalidHomeRegionException
    | InvalidKmsKeyIdException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidS3BucketNameException
    | InvalidS3PrefixException
    | InvalidSnsTopicNameException
    | InvalidTrailNameException
    | KmsException
    | KmsKeyDisabledException
    | KmsKeyNotFoundException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | S3BucketDoesNotExistException
    | ThrottlingException
    | TrailNotFoundException
    | TrailNotProvidedException
    | UnsupportedOperationException
    | CommonAwsError;
}
