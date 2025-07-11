import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface StarlingDoveService {
  associateResourceTypes(
    input: AssociateResourceTypesRequest,
  ): Effect.Effect<
    AssociateResourceTypesResponse,
    | ConflictException
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError
  >;
  batchGetAggregateResourceConfig(
    input: BatchGetAggregateResourceConfigRequest,
  ): Effect.Effect<
    BatchGetAggregateResourceConfigResponse,
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError
  >;
  batchGetResourceConfig(
    input: BatchGetResourceConfigRequest,
  ): Effect.Effect<
    BatchGetResourceConfigResponse,
    | NoAvailableConfigurationRecorderException
    | ValidationException
    | CommonAwsError
  >;
  deleteAggregationAuthorization(
    input: DeleteAggregationAuthorizationRequest,
  ): Effect.Effect<{}, InvalidParameterValueException | CommonAwsError>;
  deleteConfigRule(
    input: DeleteConfigRuleRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigRuleException | ResourceInUseException | CommonAwsError
  >;
  deleteConfigurationAggregator(
    input: DeleteConfigurationAggregatorRequest,
  ): Effect.Effect<{}, NoSuchConfigurationAggregatorException | CommonAwsError>;
  deleteConfigurationRecorder(
    input: DeleteConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    | NoSuchConfigurationRecorderException
    | UnmodifiableEntityException
    | CommonAwsError
  >;
  deleteConformancePack(
    input: DeleteConformancePackRequest,
  ): Effect.Effect<
    {},
    NoSuchConformancePackException | ResourceInUseException | CommonAwsError
  >;
  deleteDeliveryChannel(
    input: DeleteDeliveryChannelRequest,
  ): Effect.Effect<
    {},
    | LastDeliveryChannelDeleteFailedException
    | NoSuchDeliveryChannelException
    | CommonAwsError
  >;
  deleteEvaluationResults(
    input: DeleteEvaluationResultsRequest,
  ): Effect.Effect<
    DeleteEvaluationResultsResponse,
    NoSuchConfigRuleException | ResourceInUseException | CommonAwsError
  >;
  deleteOrganizationConfigRule(
    input: DeleteOrganizationConfigRuleRequest,
  ): Effect.Effect<
    {},
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | ResourceInUseException
    | CommonAwsError
  >;
  deleteOrganizationConformancePack(
    input: DeleteOrganizationConformancePackRequest,
  ): Effect.Effect<
    {},
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | ResourceInUseException
    | CommonAwsError
  >;
  deletePendingAggregationRequest(
    input: DeletePendingAggregationRequestRequest,
  ): Effect.Effect<{}, InvalidParameterValueException | CommonAwsError>;
  deleteRemediationConfiguration(
    input: DeleteRemediationConfigurationRequest,
  ): Effect.Effect<
    DeleteRemediationConfigurationResponse,
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | NoSuchRemediationConfigurationException
    | RemediationInProgressException
    | CommonAwsError
  >;
  deleteRemediationExceptions(
    input: DeleteRemediationExceptionsRequest,
  ): Effect.Effect<
    DeleteRemediationExceptionsResponse,
    NoSuchRemediationExceptionException | CommonAwsError
  >;
  deleteResourceConfig(
    input: DeleteResourceConfigRequest,
  ): Effect.Effect<
    {},
    | NoRunningConfigurationRecorderException
    | ValidationException
    | CommonAwsError
  >;
  deleteRetentionConfiguration(
    input: DeleteRetentionConfigurationRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | NoSuchRetentionConfigurationException
    | CommonAwsError
  >;
  deleteServiceLinkedConfigurationRecorder(
    input: DeleteServiceLinkedConfigurationRecorderRequest,
  ): Effect.Effect<
    DeleteServiceLinkedConfigurationRecorderResponse,
    | ConflictException
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError
  >;
  deleteStoredQuery(
    input: DeleteStoredQueryRequest,
  ): Effect.Effect<
    DeleteStoredQueryResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deliverConfigSnapshot(
    input: DeliverConfigSnapshotRequest,
  ): Effect.Effect<
    DeliverConfigSnapshotResponse,
    | NoAvailableConfigurationRecorderException
    | NoRunningConfigurationRecorderException
    | NoSuchDeliveryChannelException
    | CommonAwsError
  >;
  describeAggregateComplianceByConfigRules(
    input: DescribeAggregateComplianceByConfigRulesRequest,
  ): Effect.Effect<
    DescribeAggregateComplianceByConfigRulesResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError
  >;
  describeAggregateComplianceByConformancePacks(
    input: DescribeAggregateComplianceByConformancePacksRequest,
  ): Effect.Effect<
    DescribeAggregateComplianceByConformancePacksResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError
  >;
  describeAggregationAuthorizations(
    input: DescribeAggregationAuthorizationsRequest,
  ): Effect.Effect<
    DescribeAggregationAuthorizationsResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeComplianceByConfigRule(
    input: DescribeComplianceByConfigRuleRequest,
  ): Effect.Effect<
    DescribeComplianceByConfigRuleResponse,
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError
  >;
  describeComplianceByResource(
    input: DescribeComplianceByResourceRequest,
  ): Effect.Effect<
    DescribeComplianceByResourceResponse,
    InvalidNextTokenException | InvalidParameterValueException | CommonAwsError
  >;
  describeConfigRuleEvaluationStatus(
    input: DescribeConfigRuleEvaluationStatusRequest,
  ): Effect.Effect<
    DescribeConfigRuleEvaluationStatusResponse,
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError
  >;
  describeConfigRules(
    input: DescribeConfigRulesRequest,
  ): Effect.Effect<
    DescribeConfigRulesResponse,
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError
  >;
  describeConfigurationAggregators(
    input: DescribeConfigurationAggregatorsRequest,
  ): Effect.Effect<
    DescribeConfigurationAggregatorsResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigurationAggregatorException
    | CommonAwsError
  >;
  describeConfigurationAggregatorSourcesStatus(
    input: DescribeConfigurationAggregatorSourcesStatusRequest,
  ): Effect.Effect<
    DescribeConfigurationAggregatorSourcesStatusResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigurationAggregatorException
    | CommonAwsError
  >;
  describeConfigurationRecorders(
    input: DescribeConfigurationRecordersRequest,
  ): Effect.Effect<
    DescribeConfigurationRecordersResponse,
    NoSuchConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  describeConfigurationRecorderStatus(
    input: DescribeConfigurationRecorderStatusRequest,
  ): Effect.Effect<
    DescribeConfigurationRecorderStatusResponse,
    NoSuchConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  describeConformancePackCompliance(
    input: DescribeConformancePackComplianceRequest,
  ): Effect.Effect<
    DescribeConformancePackComplianceResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleInConformancePackException
    | NoSuchConformancePackException
    | CommonAwsError
  >;
  describeConformancePacks(
    input: DescribeConformancePacksRequest,
  ): Effect.Effect<
    DescribeConformancePacksResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConformancePackException
    | CommonAwsError
  >;
  describeConformancePackStatus(
    input: DescribeConformancePackStatusRequest,
  ): Effect.Effect<
    DescribeConformancePackStatusResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeDeliveryChannels(
    input: DescribeDeliveryChannelsRequest,
  ): Effect.Effect<
    DescribeDeliveryChannelsResponse,
    NoSuchDeliveryChannelException | CommonAwsError
  >;
  describeDeliveryChannelStatus(
    input: DescribeDeliveryChannelStatusRequest,
  ): Effect.Effect<
    DescribeDeliveryChannelStatusResponse,
    NoSuchDeliveryChannelException | CommonAwsError
  >;
  describeOrganizationConfigRules(
    input: DescribeOrganizationConfigRulesRequest,
  ): Effect.Effect<
    DescribeOrganizationConfigRulesResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError
  >;
  describeOrganizationConfigRuleStatuses(
    input: DescribeOrganizationConfigRuleStatusesRequest,
  ): Effect.Effect<
    DescribeOrganizationConfigRuleStatusesResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError
  >;
  describeOrganizationConformancePacks(
    input: DescribeOrganizationConformancePacksRequest,
  ): Effect.Effect<
    DescribeOrganizationConformancePacksResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | CommonAwsError
  >;
  describeOrganizationConformancePackStatuses(
    input: DescribeOrganizationConformancePackStatusesRequest,
  ): Effect.Effect<
    DescribeOrganizationConformancePackStatusesResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | CommonAwsError
  >;
  describePendingAggregationRequests(
    input: DescribePendingAggregationRequestsRequest,
  ): Effect.Effect<
    DescribePendingAggregationRequestsResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeRemediationConfigurations(
    input: DescribeRemediationConfigurationsRequest,
  ): Effect.Effect<DescribeRemediationConfigurationsResponse, CommonAwsError>;
  describeRemediationExceptions(
    input: DescribeRemediationExceptionsRequest,
  ): Effect.Effect<
    DescribeRemediationExceptionsResponse,
    InvalidNextTokenException | InvalidParameterValueException | CommonAwsError
  >;
  describeRemediationExecutionStatus(
    input: DescribeRemediationExecutionStatusRequest,
  ): Effect.Effect<
    DescribeRemediationExecutionStatusResponse,
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchRemediationConfigurationException
    | CommonAwsError
  >;
  describeRetentionConfigurations(
    input: DescribeRetentionConfigurationsRequest,
  ): Effect.Effect<
    DescribeRetentionConfigurationsResponse,
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchRetentionConfigurationException
    | CommonAwsError
  >;
  disassociateResourceTypes(
    input: DisassociateResourceTypesRequest,
  ): Effect.Effect<
    DisassociateResourceTypesResponse,
    | ConflictException
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError
  >;
  getAggregateComplianceDetailsByConfigRule(
    input: GetAggregateComplianceDetailsByConfigRuleRequest,
  ): Effect.Effect<
    GetAggregateComplianceDetailsByConfigRuleResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError
  >;
  getAggregateConfigRuleComplianceSummary(
    input: GetAggregateConfigRuleComplianceSummaryRequest,
  ): Effect.Effect<
    GetAggregateConfigRuleComplianceSummaryResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError
  >;
  getAggregateConformancePackComplianceSummary(
    input: GetAggregateConformancePackComplianceSummaryRequest,
  ): Effect.Effect<
    GetAggregateConformancePackComplianceSummaryResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError
  >;
  getAggregateDiscoveredResourceCounts(
    input: GetAggregateDiscoveredResourceCountsRequest,
  ): Effect.Effect<
    GetAggregateDiscoveredResourceCountsResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError
  >;
  getAggregateResourceConfig(
    input: GetAggregateResourceConfigRequest,
  ): Effect.Effect<
    GetAggregateResourceConfigResponse,
    | NoSuchConfigurationAggregatorException
    | OversizedConfigurationItemException
    | ResourceNotDiscoveredException
    | ValidationException
    | CommonAwsError
  >;
  getComplianceDetailsByConfigRule(
    input: GetComplianceDetailsByConfigRuleRequest,
  ): Effect.Effect<
    GetComplianceDetailsByConfigRuleResponse,
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError
  >;
  getComplianceDetailsByResource(
    input: GetComplianceDetailsByResourceRequest,
  ): Effect.Effect<
    GetComplianceDetailsByResourceResponse,
    InvalidParameterValueException | CommonAwsError
  >;
  getComplianceSummaryByConfigRule(input: {}): Effect.Effect<
    GetComplianceSummaryByConfigRuleResponse,
    CommonAwsError
  >;
  getComplianceSummaryByResourceType(
    input: GetComplianceSummaryByResourceTypeRequest,
  ): Effect.Effect<
    GetComplianceSummaryByResourceTypeResponse,
    InvalidParameterValueException | CommonAwsError
  >;
  getConformancePackComplianceDetails(
    input: GetConformancePackComplianceDetailsRequest,
  ): Effect.Effect<
    GetConformancePackComplianceDetailsResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleInConformancePackException
    | NoSuchConformancePackException
    | CommonAwsError
  >;
  getConformancePackComplianceSummary(
    input: GetConformancePackComplianceSummaryRequest,
  ): Effect.Effect<
    GetConformancePackComplianceSummaryResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConformancePackException
    | CommonAwsError
  >;
  getCustomRulePolicy(
    input: GetCustomRulePolicyRequest,
  ): Effect.Effect<
    GetCustomRulePolicyResponse,
    NoSuchConfigRuleException | CommonAwsError
  >;
  getDiscoveredResourceCounts(
    input: GetDiscoveredResourceCountsRequest,
  ): Effect.Effect<
    GetDiscoveredResourceCountsResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError
  >;
  getOrganizationConfigRuleDetailedStatus(
    input: GetOrganizationConfigRuleDetailedStatusRequest,
  ): Effect.Effect<
    GetOrganizationConfigRuleDetailedStatusResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError
  >;
  getOrganizationConformancePackDetailedStatus(
    input: GetOrganizationConformancePackDetailedStatusRequest,
  ): Effect.Effect<
    GetOrganizationConformancePackDetailedStatusResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | CommonAwsError
  >;
  getOrganizationCustomRulePolicy(
    input: GetOrganizationCustomRulePolicyRequest,
  ): Effect.Effect<
    GetOrganizationCustomRulePolicyResponse,
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError
  >;
  getResourceConfigHistory(
    input: GetResourceConfigHistoryRequest,
  ): Effect.Effect<
    GetResourceConfigHistoryResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidTimeRangeException
    | NoAvailableConfigurationRecorderException
    | ResourceNotDiscoveredException
    | ValidationException
    | CommonAwsError
  >;
  getResourceEvaluationSummary(
    input: GetResourceEvaluationSummaryRequest,
  ): Effect.Effect<
    GetResourceEvaluationSummaryResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  getStoredQuery(
    input: GetStoredQueryRequest,
  ): Effect.Effect<
    GetStoredQueryResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listAggregateDiscoveredResources(
    input: ListAggregateDiscoveredResourcesRequest,
  ): Effect.Effect<
    ListAggregateDiscoveredResourcesResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError
  >;
  listConfigurationRecorders(
    input: ListConfigurationRecordersRequest,
  ): Effect.Effect<
    ListConfigurationRecordersResponse,
    ValidationException | CommonAwsError
  >;
  listConformancePackComplianceScores(
    input: ListConformancePackComplianceScoresRequest,
  ): Effect.Effect<
    ListConformancePackComplianceScoresResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  listDiscoveredResources(
    input: ListDiscoveredResourcesRequest,
  ): Effect.Effect<
    ListDiscoveredResourcesResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | NoAvailableConfigurationRecorderException
    | ValidationException
    | CommonAwsError
  >;
  listResourceEvaluations(
    input: ListResourceEvaluationsRequest,
  ): Effect.Effect<
    ListResourceEvaluationsResponse,
    | InvalidNextTokenException
    | InvalidParameterValueException
    | InvalidTimeRangeException
    | CommonAwsError
  >;
  listStoredQueries(
    input: ListStoredQueriesRequest,
  ): Effect.Effect<
    ListStoredQueriesResponse,
    InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidLimitException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putAggregationAuthorization(
    input: PutAggregationAuthorizationRequest,
  ): Effect.Effect<
    PutAggregationAuthorizationResponse,
    InvalidParameterValueException | CommonAwsError
  >;
  putConfigRule(
    input: PutConfigRuleRequest,
  ): Effect.Effect<
    {},
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | MaxNumberOfConfigRulesExceededException
    | NoAvailableConfigurationRecorderException
    | ResourceInUseException
    | CommonAwsError
  >;
  putConfigurationAggregator(
    input: PutConfigurationAggregatorRequest,
  ): Effect.Effect<
    PutConfigurationAggregatorResponse,
    | InvalidParameterValueException
    | InvalidRoleException
    | LimitExceededException
    | NoAvailableOrganizationException
    | OrganizationAccessDeniedException
    | OrganizationAllFeaturesNotEnabledException
    | CommonAwsError
  >;
  putConfigurationRecorder(
    input: PutConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    | InvalidConfigurationRecorderNameException
    | InvalidRecordingGroupException
    | InvalidRoleException
    | MaxNumberOfConfigurationRecordersExceededException
    | UnmodifiableEntityException
    | ValidationException
    | CommonAwsError
  >;
  putConformancePack(
    input: PutConformancePackRequest,
  ): Effect.Effect<
    PutConformancePackResponse,
    | ConformancePackTemplateValidationException
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | MaxNumberOfConformancePacksExceededException
    | ResourceInUseException
    | CommonAwsError
  >;
  putDeliveryChannel(
    input: PutDeliveryChannelRequest,
  ): Effect.Effect<
    {},
    | InsufficientDeliveryPolicyException
    | InvalidDeliveryChannelNameException
    | InvalidS3KeyPrefixException
    | InvalidS3KmsKeyArnException
    | InvalidSNSTopicARNException
    | MaxNumberOfDeliveryChannelsExceededException
    | NoAvailableConfigurationRecorderException
    | NoSuchBucketException
    | CommonAwsError
  >;
  putEvaluations(
    input: PutEvaluationsRequest,
  ): Effect.Effect<
    PutEvaluationsResponse,
    | InvalidParameterValueException
    | InvalidResultTokenException
    | NoSuchConfigRuleException
    | CommonAwsError
  >;
  putExternalEvaluation(
    input: PutExternalEvaluationRequest,
  ): Effect.Effect<
    PutExternalEvaluationResponse,
    InvalidParameterValueException | NoSuchConfigRuleException | CommonAwsError
  >;
  putOrganizationConfigRule(
    input: PutOrganizationConfigRuleRequest,
  ): Effect.Effect<
    PutOrganizationConfigRuleResponse,
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | MaxNumberOfOrganizationConfigRulesExceededException
    | NoAvailableOrganizationException
    | OrganizationAccessDeniedException
    | OrganizationAllFeaturesNotEnabledException
    | ResourceInUseException
    | ValidationException
    | CommonAwsError
  >;
  putOrganizationConformancePack(
    input: PutOrganizationConformancePackRequest,
  ): Effect.Effect<
    PutOrganizationConformancePackResponse,
    | InsufficientPermissionsException
    | MaxNumberOfOrganizationConformancePacksExceededException
    | NoAvailableOrganizationException
    | OrganizationAccessDeniedException
    | OrganizationAllFeaturesNotEnabledException
    | OrganizationConformancePackTemplateValidationException
    | ResourceInUseException
    | ValidationException
    | CommonAwsError
  >;
  putRemediationConfigurations(
    input: PutRemediationConfigurationsRequest,
  ): Effect.Effect<
    PutRemediationConfigurationsResponse,
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  putRemediationExceptions(
    input: PutRemediationExceptionsRequest,
  ): Effect.Effect<
    PutRemediationExceptionsResponse,
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  putResourceConfig(
    input: PutResourceConfigRequest,
  ): Effect.Effect<
    {},
    | InsufficientPermissionsException
    | MaxActiveResourcesExceededException
    | NoRunningConfigurationRecorderException
    | ValidationException
    | CommonAwsError
  >;
  putRetentionConfiguration(
    input: PutRetentionConfigurationRequest,
  ): Effect.Effect<
    PutRetentionConfigurationResponse,
    | InvalidParameterValueException
    | MaxNumberOfRetentionConfigurationsExceededException
    | CommonAwsError
  >;
  putServiceLinkedConfigurationRecorder(
    input: PutServiceLinkedConfigurationRecorderRequest,
  ): Effect.Effect<
    PutServiceLinkedConfigurationRecorderResponse,
    | ConflictException
    | InsufficientPermissionsException
    | LimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  putStoredQuery(
    input: PutStoredQueryRequest,
  ): Effect.Effect<
    PutStoredQueryResponse,
    | ResourceConcurrentModificationException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  selectAggregateResourceConfig(
    input: SelectAggregateResourceConfigRequest,
  ): Effect.Effect<
    SelectAggregateResourceConfigResponse,
    | InvalidExpressionException
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | CommonAwsError
  >;
  selectResourceConfig(
    input: SelectResourceConfigRequest,
  ): Effect.Effect<
    SelectResourceConfigResponse,
    | InvalidExpressionException
    | InvalidLimitException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  startConfigRulesEvaluation(
    input: StartConfigRulesEvaluationRequest,
  ): Effect.Effect<
    StartConfigRulesEvaluationResponse,
    | InvalidParameterValueException
    | LimitExceededException
    | NoSuchConfigRuleException
    | ResourceInUseException
    | CommonAwsError
  >;
  startConfigurationRecorder(
    input: StartConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    | NoAvailableDeliveryChannelException
    | NoSuchConfigurationRecorderException
    | UnmodifiableEntityException
    | CommonAwsError
  >;
  startRemediationExecution(
    input: StartRemediationExecutionRequest,
  ): Effect.Effect<
    StartRemediationExecutionResponse,
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | NoSuchRemediationConfigurationException
    | CommonAwsError
  >;
  startResourceEvaluation(
    input: StartResourceEvaluationRequest,
  ): Effect.Effect<
    StartResourceEvaluationResponse,
    | IdempotentParameterMismatch
    | InvalidParameterValueException
    | CommonAwsError
  >;
  stopConfigurationRecorder(
    input: StopConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    | NoSuchConfigurationRecorderException
    | UnmodifiableEntityException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type ConfigService = StarlingDoveService;

export interface AccountAggregationSource {
  AccountIds: Array<string>;
  AllAwsRegions?: boolean;
  AwsRegions?: Array<string>;
}
export type AccountAggregationSourceAccountList = Array<string>;
export type AccountAggregationSourceList = Array<AccountAggregationSource>;
export type AccountId = string;

export interface AggregateComplianceByConfigRule {
  ConfigRuleName?: string;
  Compliance?: Compliance;
  AccountId?: string;
  AwsRegion?: string;
}
export type AggregateComplianceByConfigRuleList =
  Array<AggregateComplianceByConfigRule>;
export interface AggregateComplianceByConformancePack {
  ConformancePackName?: string;
  Compliance?: AggregateConformancePackCompliance;
  AccountId?: string;
  AwsRegion?: string;
}
export type AggregateComplianceByConformancePackList =
  Array<AggregateComplianceByConformancePack>;
export interface AggregateComplianceCount {
  GroupName?: string;
  ComplianceSummary?: ComplianceSummary;
}
export type AggregateComplianceCountList = Array<AggregateComplianceCount>;
export interface AggregateConformancePackCompliance {
  ComplianceType?: ConformancePackComplianceType;
  CompliantRuleCount?: number;
  NonCompliantRuleCount?: number;
  TotalRuleCount?: number;
}
export interface AggregateConformancePackComplianceCount {
  CompliantConformancePackCount?: number;
  NonCompliantConformancePackCount?: number;
}
export interface AggregateConformancePackComplianceFilters {
  ConformancePackName?: string;
  ComplianceType?: ConformancePackComplianceType;
  AccountId?: string;
  AwsRegion?: string;
}
export interface AggregateConformancePackComplianceSummary {
  ComplianceSummary?: AggregateConformancePackComplianceCount;
  GroupName?: string;
}
export interface AggregateConformancePackComplianceSummaryFilters {
  AccountId?: string;
  AwsRegion?: string;
}
export type AggregateConformancePackComplianceSummaryGroupKey =
  | "ACCOUNT_ID"
  | "AWS_REGION";
export type AggregateConformancePackComplianceSummaryList =
  Array<AggregateConformancePackComplianceSummary>;
export interface AggregatedSourceStatus {
  SourceId?: string;
  SourceType?: AggregatedSourceType;
  AwsRegion?: string;
  LastUpdateStatus?: AggregatedSourceStatusType;
  LastUpdateTime?: Date | string;
  LastErrorCode?: string;
  LastErrorMessage?: string;
}
export type AggregatedSourceStatusList = Array<AggregatedSourceStatus>;
export type AggregatedSourceStatusType = "FAILED" | "SUCCEEDED" | "OUTDATED";
export type AggregatedSourceStatusTypeList = Array<AggregatedSourceStatusType>;
export type AggregatedSourceType = "ACCOUNT" | "ORGANIZATION";
export interface AggregateEvaluationResult {
  EvaluationResultIdentifier?: EvaluationResultIdentifier;
  ComplianceType?: ComplianceType;
  ResultRecordedTime?: Date | string;
  ConfigRuleInvokedTime?: Date | string;
  Annotation?: string;
  AccountId?: string;
  AwsRegion?: string;
}
export type AggregateEvaluationResultList = Array<AggregateEvaluationResult>;
export interface AggregateResourceIdentifier {
  SourceAccountId: string;
  SourceRegion: string;
  ResourceId: string;
  ResourceType: ResourceType;
  ResourceName?: string;
}
export interface AggregationAuthorization {
  AggregationAuthorizationArn?: string;
  AuthorizedAccountId?: string;
  AuthorizedAwsRegion?: string;
  CreationTime?: Date | string;
}
export type AggregationAuthorizationList = Array<AggregationAuthorization>;
export interface AggregatorFilterResourceType {
  Type?: AggregatorFilterType;
  Value?: Array<string>;
}
export interface AggregatorFilters {
  ResourceType?: AggregatorFilterResourceType;
  ServicePrincipal?: AggregatorFilterServicePrincipal;
}
export interface AggregatorFilterServicePrincipal {
  Type?: AggregatorFilterType;
  Value?: Array<string>;
}
export type AggregatorFilterType = "INCLUDE";
export type AggregatorRegionList = Array<string>;
export type AllSupported = boolean;

export type AmazonResourceName = string;

export type Annotation = string;

export type ARN = string;

export interface AssociateResourceTypesRequest {
  ConfigurationRecorderArn: string;
  ResourceTypes: Array<ResourceType>;
}
export interface AssociateResourceTypesResponse {
  ConfigurationRecorder: ConfigurationRecorder;
}
export type AutoRemediationAttempts = number;

export type AutoRemediationAttemptSeconds = number;

export type AvailabilityZone = string;

export type AwsRegion = string;

export interface BaseConfigurationItem {
  version?: string;
  accountId?: string;
  configurationItemCaptureTime?: Date | string;
  configurationItemStatus?: ConfigurationItemStatus;
  configurationStateId?: string;
  arn?: string;
  resourceType?: ResourceType;
  resourceId?: string;
  resourceName?: string;
  awsRegion?: string;
  availabilityZone?: string;
  resourceCreationTime?: Date | string;
  configuration?: string;
  supplementaryConfiguration?: Record<string, string>;
  recordingFrequency?: RecordingFrequency;
  configurationItemDeliveryTime?: Date | string;
}
export type BaseConfigurationItems = Array<BaseConfigurationItem>;
export type BaseResourceId = string;

export interface BatchGetAggregateResourceConfigRequest {
  ConfigurationAggregatorName: string;
  ResourceIdentifiers: Array<AggregateResourceIdentifier>;
}
export interface BatchGetAggregateResourceConfigResponse {
  BaseConfigurationItems?: Array<BaseConfigurationItem>;
  UnprocessedResourceIdentifiers?: Array<AggregateResourceIdentifier>;
}
export interface BatchGetResourceConfigRequest {
  resourceKeys: Array<ResourceKey>;
}
export interface BatchGetResourceConfigResponse {
  baseConfigurationItems?: Array<BaseConfigurationItem>;
  unprocessedResourceKeys?: Array<ResourceKey>;
}
export type ChannelName = string;

export type ChronologicalOrder = "Reverse" | "Forward";
export type ClientToken = string;

export interface Compliance {
  ComplianceType?: ComplianceType;
  ComplianceContributorCount?: ComplianceContributorCount;
}
export interface ComplianceByConfigRule {
  ConfigRuleName?: string;
  Compliance?: Compliance;
}
export type ComplianceByConfigRules = Array<ComplianceByConfigRule>;
export interface ComplianceByResource {
  ResourceType?: string;
  ResourceId?: string;
  Compliance?: Compliance;
}
export type ComplianceByResources = Array<ComplianceByResource>;
export interface ComplianceContributorCount {
  CappedCount?: number;
  CapExceeded?: boolean;
}
export type ComplianceResourceTypes = Array<string>;
export type ComplianceScore = string;

export type ComplianceSummariesByResourceType =
  Array<ComplianceSummaryByResourceType>;
export interface ComplianceSummary {
  CompliantResourceCount?: ComplianceContributorCount;
  NonCompliantResourceCount?: ComplianceContributorCount;
  ComplianceSummaryTimestamp?: Date | string;
}
export interface ComplianceSummaryByResourceType {
  ResourceType?: string;
  ComplianceSummary?: ComplianceSummary;
}
export type ComplianceType =
  | "Compliant"
  | "Non_Compliant"
  | "Not_Applicable"
  | "Insufficient_Data";
export type ComplianceTypes = Array<ComplianceType>;
export interface ConfigExportDeliveryInfo {
  lastStatus?: DeliveryStatus;
  lastErrorCode?: string;
  lastErrorMessage?: string;
  lastAttemptTime?: Date | string;
  lastSuccessfulTime?: Date | string;
  nextDeliveryTime?: Date | string;
}
export interface ConfigRule {
  ConfigRuleName?: string;
  ConfigRuleArn?: string;
  ConfigRuleId?: string;
  Description?: string;
  Scope?: Scope;
  Source: Source;
  InputParameters?: string;
  MaximumExecutionFrequency?: MaximumExecutionFrequency;
  ConfigRuleState?: ConfigRuleState;
  CreatedBy?: string;
  EvaluationModes?: Array<EvaluationModeConfiguration>;
}
export interface ConfigRuleComplianceFilters {
  ConfigRuleName?: string;
  ComplianceType?: ComplianceType;
  AccountId?: string;
  AwsRegion?: string;
}
export interface ConfigRuleComplianceSummaryFilters {
  AccountId?: string;
  AwsRegion?: string;
}
export type ConfigRuleComplianceSummaryGroupKey = "ACCOUNT_ID" | "AWS_REGION";
export interface ConfigRuleEvaluationStatus {
  ConfigRuleName?: string;
  ConfigRuleArn?: string;
  ConfigRuleId?: string;
  LastSuccessfulInvocationTime?: Date | string;
  LastFailedInvocationTime?: Date | string;
  LastSuccessfulEvaluationTime?: Date | string;
  LastFailedEvaluationTime?: Date | string;
  FirstActivatedTime?: Date | string;
  LastDeactivatedTime?: Date | string;
  LastErrorCode?: string;
  LastErrorMessage?: string;
  FirstEvaluationStarted?: boolean;
  LastDebugLogDeliveryStatus?: string;
  LastDebugLogDeliveryStatusReason?: string;
  LastDebugLogDeliveryTime?: Date | string;
}
export type ConfigRuleEvaluationStatusList = Array<ConfigRuleEvaluationStatus>;
export type ConfigRuleName = string;

export type ConfigRuleNames = Array<string>;
export type ConfigRules = Array<ConfigRule>;
export type ConfigRuleState =
  | "ACTIVE"
  | "DELETING"
  | "DELETING_RESULTS"
  | "EVALUATING";
export interface ConfigSnapshotDeliveryProperties {
  deliveryFrequency?: MaximumExecutionFrequency;
}
export interface ConfigStreamDeliveryInfo {
  lastStatus?: DeliveryStatus;
  lastErrorCode?: string;
  lastErrorMessage?: string;
  lastStatusChangeTime?: Date | string;
}
export type Configuration = string;

export interface ConfigurationAggregator {
  ConfigurationAggregatorName?: string;
  ConfigurationAggregatorArn?: string;
  AccountAggregationSources?: Array<AccountAggregationSource>;
  OrganizationAggregationSource?: OrganizationAggregationSource;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  CreatedBy?: string;
  AggregatorFilters?: AggregatorFilters;
}
export type ConfigurationAggregatorArn = string;

export type ConfigurationAggregatorList = Array<ConfigurationAggregator>;
export type ConfigurationAggregatorName = string;

export type ConfigurationAggregatorNameList = Array<string>;
export interface ConfigurationItem {
  version?: string;
  accountId?: string;
  configurationItemCaptureTime?: Date | string;
  configurationItemStatus?: ConfigurationItemStatus;
  configurationStateId?: string;
  configurationItemMD5Hash?: string;
  arn?: string;
  resourceType?: ResourceType;
  resourceId?: string;
  resourceName?: string;
  awsRegion?: string;
  availabilityZone?: string;
  resourceCreationTime?: Date | string;
  tags?: Record<string, string>;
  relatedEvents?: Array<string>;
  relationships?: Array<Relationship>;
  configuration?: string;
  supplementaryConfiguration?: Record<string, string>;
  recordingFrequency?: RecordingFrequency;
  configurationItemDeliveryTime?: Date | string;
}
export type ConfigurationItemCaptureTime = Date | string;

export type ConfigurationItemDeliveryTime = Date | string;

export type ConfigurationItemList = Array<ConfigurationItem>;
export type ConfigurationItemMD5Hash = string;

export type ConfigurationItemStatus =
  | "OK"
  | "ResourceDiscovered"
  | "ResourceNotRecorded"
  | "ResourceDeleted"
  | "ResourceDeletedNotRecorded";
export interface ConfigurationRecorder {
  arn?: string;
  name?: string;
  roleARN?: string;
  recordingGroup?: RecordingGroup;
  recordingMode?: RecordingMode;
  recordingScope?: RecordingScope;
  servicePrincipal?: string;
}
export interface ConfigurationRecorderFilter {
  filterName?: ConfigurationRecorderFilterName;
  filterValue?: Array<string>;
}
export type ConfigurationRecorderFilterList =
  Array<ConfigurationRecorderFilter>;
export type ConfigurationRecorderFilterName = "RecordingScope";
export type ConfigurationRecorderFilterValue = string;

export type ConfigurationRecorderFilterValues = Array<string>;
export type ConfigurationRecorderList = Array<ConfigurationRecorder>;
export type ConfigurationRecorderNameList = Array<string>;
export interface ConfigurationRecorderStatus {
  arn?: string;
  name?: string;
  lastStartTime?: Date | string;
  lastStopTime?: Date | string;
  recording?: boolean;
  lastStatus?: RecorderStatus;
  lastErrorCode?: string;
  lastErrorMessage?: string;
  lastStatusChangeTime?: Date | string;
  servicePrincipal?: string;
}
export type ConfigurationRecorderStatusList =
  Array<ConfigurationRecorderStatus>;
export type ConfigurationRecorderSummaries =
  Array<ConfigurationRecorderSummary>;
export interface ConfigurationRecorderSummary {
  arn: string;
  name: string;
  servicePrincipal?: string;
  recordingScope: RecordingScope;
}
export type ConfigurationStateId = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ConformancePackArn = string;

export interface ConformancePackComplianceFilters {
  ConfigRuleNames?: Array<string>;
  ComplianceType?: ConformancePackComplianceType;
}
export type ConformancePackComplianceResourceIds = Array<string>;
export interface ConformancePackComplianceScore {
  Score?: string;
  ConformancePackName?: string;
  LastUpdatedTime?: Date | string;
}
export type ConformancePackComplianceScores =
  Array<ConformancePackComplianceScore>;
export interface ConformancePackComplianceScoresFilters {
  ConformancePackNames: Array<string>;
}
export interface ConformancePackComplianceSummary {
  ConformancePackName: string;
  ConformancePackComplianceStatus: ConformancePackComplianceType;
}
export type ConformancePackComplianceSummaryList =
  Array<ConformancePackComplianceSummary>;
export type ConformancePackComplianceType =
  | "COMPLIANT"
  | "NON_COMPLIANT"
  | "INSUFFICIENT_DATA";
export type ConformancePackConfigRuleNames = Array<string>;
export interface ConformancePackDetail {
  ConformancePackName: string;
  ConformancePackArn: string;
  ConformancePackId: string;
  DeliveryS3Bucket?: string;
  DeliveryS3KeyPrefix?: string;
  ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
  LastUpdateRequestedTime?: Date | string;
  CreatedBy?: string;
  TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails;
}
export type ConformancePackDetailList = Array<ConformancePackDetail>;
export interface ConformancePackEvaluationFilters {
  ConfigRuleNames?: Array<string>;
  ComplianceType?: ConformancePackComplianceType;
  ResourceType?: string;
  ResourceIds?: Array<string>;
}
export interface ConformancePackEvaluationResult {
  ComplianceType: ConformancePackComplianceType;
  EvaluationResultIdentifier: EvaluationResultIdentifier;
  ConfigRuleInvokedTime: Date | string;
  ResultRecordedTime: Date | string;
  Annotation?: string;
}
export type ConformancePackId = string;

export interface ConformancePackInputParameter {
  ParameterName: string;
  ParameterValue: string;
}
export type ConformancePackInputParameters =
  Array<ConformancePackInputParameter>;
export type ConformancePackName = string;

export type ConformancePackNameFilter = Array<string>;
export type ConformancePackNamesList = Array<string>;
export type ConformancePackNamesToSummarizeList = Array<string>;
export interface ConformancePackRuleCompliance {
  ConfigRuleName?: string;
  ComplianceType?: ConformancePackComplianceType;
  Controls?: Array<string>;
}
export type ConformancePackRuleComplianceList =
  Array<ConformancePackRuleCompliance>;
export type ConformancePackRuleEvaluationResultsList =
  Array<ConformancePackEvaluationResult>;
export type ConformancePackState =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED";
export interface ConformancePackStatusDetail {
  ConformancePackName: string;
  ConformancePackId: string;
  ConformancePackArn: string;
  ConformancePackState: ConformancePackState;
  StackArn: string;
  ConformancePackStatusReason?: string;
  LastUpdateRequestedTime: Date | string;
  LastUpdateCompletedTime?: Date | string;
}
export type ConformancePackStatusDetailsList =
  Array<ConformancePackStatusDetail>;
export type ConformancePackStatusReason = string;

export declare class ConformancePackTemplateValidationException extends EffectData.TaggedError(
  "ConformancePackTemplateValidationException",
)<{
  readonly message?: string;
}> {}
export type ControlsList = Array<string>;
export type CosmosPageLimit = number;

export interface CustomPolicyDetails {
  PolicyRuntime: string;
  PolicyText: string;
  EnableDebugLogDelivery?: boolean;
}
export type DebugLogDeliveryAccounts = Array<string>;
export interface DeleteAggregationAuthorizationRequest {
  AuthorizedAccountId: string;
  AuthorizedAwsRegion: string;
}
export interface DeleteConfigRuleRequest {
  ConfigRuleName: string;
}
export interface DeleteConfigurationAggregatorRequest {
  ConfigurationAggregatorName: string;
}
export interface DeleteConfigurationRecorderRequest {
  ConfigurationRecorderName: string;
}
export interface DeleteConformancePackRequest {
  ConformancePackName: string;
}
export interface DeleteDeliveryChannelRequest {
  DeliveryChannelName: string;
}
export interface DeleteEvaluationResultsRequest {
  ConfigRuleName: string;
}
export interface DeleteEvaluationResultsResponse {}
export interface DeleteOrganizationConfigRuleRequest {
  OrganizationConfigRuleName: string;
}
export interface DeleteOrganizationConformancePackRequest {
  OrganizationConformancePackName: string;
}
export interface DeletePendingAggregationRequestRequest {
  RequesterAccountId: string;
  RequesterAwsRegion: string;
}
export interface DeleteRemediationConfigurationRequest {
  ConfigRuleName: string;
  ResourceType?: string;
}
export interface DeleteRemediationConfigurationResponse {}
export interface DeleteRemediationExceptionsRequest {
  ConfigRuleName: string;
  ResourceKeys: Array<RemediationExceptionResourceKey>;
}
export interface DeleteRemediationExceptionsResponse {
  FailedBatches?: Array<FailedDeleteRemediationExceptionsBatch>;
}
export interface DeleteResourceConfigRequest {
  ResourceType: string;
  ResourceId: string;
}
export interface DeleteRetentionConfigurationRequest {
  RetentionConfigurationName: string;
}
export interface DeleteServiceLinkedConfigurationRecorderRequest {
  ServicePrincipal: string;
}
export interface DeleteServiceLinkedConfigurationRecorderResponse {
  Arn: string;
  Name: string;
}
export interface DeleteStoredQueryRequest {
  QueryName: string;
}
export interface DeleteStoredQueryResponse {}
export interface DeliverConfigSnapshotRequest {
  deliveryChannelName: string;
}
export interface DeliverConfigSnapshotResponse {
  configSnapshotId?: string;
}
export interface DeliveryChannel {
  name?: string;
  s3BucketName?: string;
  s3KeyPrefix?: string;
  s3KmsKeyArn?: string;
  snsTopicARN?: string;
  configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
}
export type DeliveryChannelList = Array<DeliveryChannel>;
export type DeliveryChannelNameList = Array<string>;
export interface DeliveryChannelStatus {
  name?: string;
  configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;
  configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;
  configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;
}
export type DeliveryChannelStatusList = Array<DeliveryChannelStatus>;
export type DeliveryS3Bucket = string;

export type DeliveryS3KeyPrefix = string;

export type DeliveryStatus = "Success" | "Failure" | "Not_Applicable";
export interface DescribeAggregateComplianceByConfigRulesRequest {
  ConfigurationAggregatorName: string;
  Filters?: ConfigRuleComplianceFilters;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeAggregateComplianceByConfigRulesResponse {
  AggregateComplianceByConfigRules?: Array<AggregateComplianceByConfigRule>;
  NextToken?: string;
}
export interface DescribeAggregateComplianceByConformancePacksRequest {
  ConfigurationAggregatorName: string;
  Filters?: AggregateConformancePackComplianceFilters;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeAggregateComplianceByConformancePacksResponse {
  AggregateComplianceByConformancePacks?: Array<AggregateComplianceByConformancePack>;
  NextToken?: string;
}
export interface DescribeAggregationAuthorizationsRequest {
  Limit?: number;
  NextToken?: string;
}
export interface DescribeAggregationAuthorizationsResponse {
  AggregationAuthorizations?: Array<AggregationAuthorization>;
  NextToken?: string;
}
export interface DescribeComplianceByConfigRuleRequest {
  ConfigRuleNames?: Array<string>;
  ComplianceTypes?: Array<ComplianceType>;
  NextToken?: string;
}
export interface DescribeComplianceByConfigRuleResponse {
  ComplianceByConfigRules?: Array<ComplianceByConfigRule>;
  NextToken?: string;
}
export interface DescribeComplianceByResourceRequest {
  ResourceType?: string;
  ResourceId?: string;
  ComplianceTypes?: Array<ComplianceType>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeComplianceByResourceResponse {
  ComplianceByResources?: Array<ComplianceByResource>;
  NextToken?: string;
}
export interface DescribeConfigRuleEvaluationStatusRequest {
  ConfigRuleNames?: Array<string>;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeConfigRuleEvaluationStatusResponse {
  ConfigRulesEvaluationStatus?: Array<ConfigRuleEvaluationStatus>;
  NextToken?: string;
}
export interface DescribeConfigRulesFilters {
  EvaluationMode?: EvaluationMode;
}
export interface DescribeConfigRulesRequest {
  ConfigRuleNames?: Array<string>;
  NextToken?: string;
  Filters?: DescribeConfigRulesFilters;
}
export interface DescribeConfigRulesResponse {
  ConfigRules?: Array<ConfigRule>;
  NextToken?: string;
}
export interface DescribeConfigurationAggregatorSourcesStatusRequest {
  ConfigurationAggregatorName: string;
  UpdateStatus?: Array<AggregatedSourceStatusType>;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeConfigurationAggregatorSourcesStatusResponse {
  AggregatedSourceStatusList?: Array<AggregatedSourceStatus>;
  NextToken?: string;
}
export interface DescribeConfigurationAggregatorsRequest {
  ConfigurationAggregatorNames?: Array<string>;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeConfigurationAggregatorsResponse {
  ConfigurationAggregators?: Array<ConfigurationAggregator>;
  NextToken?: string;
}
export interface DescribeConfigurationRecordersRequest {
  ConfigurationRecorderNames?: Array<string>;
  ServicePrincipal?: string;
  Arn?: string;
}
export interface DescribeConfigurationRecordersResponse {
  ConfigurationRecorders?: Array<ConfigurationRecorder>;
}
export interface DescribeConfigurationRecorderStatusRequest {
  ConfigurationRecorderNames?: Array<string>;
  ServicePrincipal?: string;
  Arn?: string;
}
export interface DescribeConfigurationRecorderStatusResponse {
  ConfigurationRecordersStatus?: Array<ConfigurationRecorderStatus>;
}
export type DescribeConformancePackComplianceLimit = number;

export interface DescribeConformancePackComplianceRequest {
  ConformancePackName: string;
  Filters?: ConformancePackComplianceFilters;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeConformancePackComplianceResponse {
  ConformancePackName: string;
  ConformancePackRuleComplianceList: Array<ConformancePackRuleCompliance>;
  NextToken?: string;
}
export interface DescribeConformancePacksRequest {
  ConformancePackNames?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeConformancePacksResponse {
  ConformancePackDetails?: Array<ConformancePackDetail>;
  NextToken?: string;
}
export interface DescribeConformancePackStatusRequest {
  ConformancePackNames?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeConformancePackStatusResponse {
  ConformancePackStatusDetails?: Array<ConformancePackStatusDetail>;
  NextToken?: string;
}
export interface DescribeDeliveryChannelsRequest {
  DeliveryChannelNames?: Array<string>;
}
export interface DescribeDeliveryChannelsResponse {
  DeliveryChannels?: Array<DeliveryChannel>;
}
export interface DescribeDeliveryChannelStatusRequest {
  DeliveryChannelNames?: Array<string>;
}
export interface DescribeDeliveryChannelStatusResponse {
  DeliveryChannelsStatus?: Array<DeliveryChannelStatus>;
}
export interface DescribeOrganizationConfigRulesRequest {
  OrganizationConfigRuleNames?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeOrganizationConfigRulesResponse {
  OrganizationConfigRules?: Array<OrganizationConfigRule>;
  NextToken?: string;
}
export interface DescribeOrganizationConfigRuleStatusesRequest {
  OrganizationConfigRuleNames?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeOrganizationConfigRuleStatusesResponse {
  OrganizationConfigRuleStatuses?: Array<OrganizationConfigRuleStatus>;
  NextToken?: string;
}
export interface DescribeOrganizationConformancePacksRequest {
  OrganizationConformancePackNames?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeOrganizationConformancePacksResponse {
  OrganizationConformancePacks?: Array<OrganizationConformancePack>;
  NextToken?: string;
}
export interface DescribeOrganizationConformancePackStatusesRequest {
  OrganizationConformancePackNames?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeOrganizationConformancePackStatusesResponse {
  OrganizationConformancePackStatuses?: Array<OrganizationConformancePackStatus>;
  NextToken?: string;
}
export type DescribePendingAggregationRequestsLimit = number;

export interface DescribePendingAggregationRequestsRequest {
  Limit?: number;
  NextToken?: string;
}
export interface DescribePendingAggregationRequestsResponse {
  PendingAggregationRequests?: Array<PendingAggregationRequest>;
  NextToken?: string;
}
export interface DescribeRemediationConfigurationsRequest {
  ConfigRuleNames: Array<string>;
}
export interface DescribeRemediationConfigurationsResponse {
  RemediationConfigurations?: Array<RemediationConfiguration>;
}
export interface DescribeRemediationExceptionsRequest {
  ConfigRuleName: string;
  ResourceKeys?: Array<RemediationExceptionResourceKey>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeRemediationExceptionsResponse {
  RemediationExceptions?: Array<RemediationException>;
  NextToken?: string;
}
export interface DescribeRemediationExecutionStatusRequest {
  ConfigRuleName: string;
  ResourceKeys?: Array<ResourceKey>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeRemediationExecutionStatusResponse {
  RemediationExecutionStatuses?: Array<RemediationExecutionStatus>;
  NextToken?: string;
}
export interface DescribeRetentionConfigurationsRequest {
  RetentionConfigurationNames?: Array<string>;
  NextToken?: string;
}
export interface DescribeRetentionConfigurationsResponse {
  RetentionConfigurations?: Array<RetentionConfiguration>;
  NextToken?: string;
}
export type Description = string;

export interface DisassociateResourceTypesRequest {
  ConfigurationRecorderArn: string;
  ResourceTypes: Array<ResourceType>;
}
export interface DisassociateResourceTypesResponse {
  ConfigurationRecorder: ConfigurationRecorder;
}
export type DiscoveredResourceIdentifierList =
  Array<AggregateResourceIdentifier>;
export type EarlierTime = Date | string;

export type EmptiableStringWithCharLimit256 = string;

export type ErrorMessage = string;

export interface Evaluation {
  ComplianceResourceType: string;
  ComplianceResourceId: string;
  ComplianceType: ComplianceType;
  Annotation?: string;
  OrderingTimestamp: Date | string;
}
export interface EvaluationContext {
  EvaluationContextIdentifier?: string;
}
export type EvaluationContextIdentifier = string;

export type EvaluationMode = "DETECTIVE" | "PROACTIVE";
export interface EvaluationModeConfiguration {
  Mode?: EvaluationMode;
}
export type EvaluationModes = Array<EvaluationModeConfiguration>;
export interface EvaluationResult {
  EvaluationResultIdentifier?: EvaluationResultIdentifier;
  ComplianceType?: ComplianceType;
  ResultRecordedTime?: Date | string;
  ConfigRuleInvokedTime?: Date | string;
  Annotation?: string;
  ResultToken?: string;
}
export interface EvaluationResultIdentifier {
  EvaluationResultQualifier?: EvaluationResultQualifier;
  OrderingTimestamp?: Date | string;
  ResourceEvaluationId?: string;
}
export interface EvaluationResultQualifier {
  ConfigRuleName?: string;
  ResourceType?: string;
  ResourceId?: string;
  EvaluationMode?: EvaluationMode;
}
export type EvaluationResults = Array<EvaluationResult>;
export type Evaluations = Array<Evaluation>;
export interface EvaluationStatus {
  Status: ResourceEvaluationStatus;
  FailureReason?: string;
}
export type EvaluationTimeout = number;

export type EventSource = "Aws_Config";
export type ExcludedAccounts = Array<string>;
export interface ExclusionByResourceTypes {
  resourceTypes?: Array<ResourceType>;
}
export interface ExecutionControls {
  SsmControls?: SsmControls;
}
export type Expression = string;

export interface ExternalEvaluation {
  ComplianceResourceType: string;
  ComplianceResourceId: string;
  ComplianceType: ComplianceType;
  Annotation?: string;
  OrderingTimestamp: Date | string;
}
export interface FailedDeleteRemediationExceptionsBatch {
  FailureMessage?: string;
  FailedItems?: Array<RemediationExceptionResourceKey>;
}
export type FailedDeleteRemediationExceptionsBatches =
  Array<FailedDeleteRemediationExceptionsBatch>;
export interface FailedRemediationBatch {
  FailureMessage?: string;
  FailedItems?: Array<RemediationConfiguration>;
}
export type FailedRemediationBatches = Array<FailedRemediationBatch>;
export interface FailedRemediationExceptionBatch {
  FailureMessage?: string;
  FailedItems?: Array<RemediationException>;
}
export type FailedRemediationExceptionBatches =
  Array<FailedRemediationExceptionBatch>;
export interface FieldInfo {
  Name?: string;
}
export type FieldInfoList = Array<FieldInfo>;
export type FieldName = string;

export interface GetAggregateComplianceDetailsByConfigRuleRequest {
  ConfigurationAggregatorName: string;
  ConfigRuleName: string;
  AccountId: string;
  AwsRegion: string;
  ComplianceType?: ComplianceType;
  Limit?: number;
  NextToken?: string;
}
export interface GetAggregateComplianceDetailsByConfigRuleResponse {
  AggregateEvaluationResults?: Array<AggregateEvaluationResult>;
  NextToken?: string;
}
export interface GetAggregateConfigRuleComplianceSummaryRequest {
  ConfigurationAggregatorName: string;
  Filters?: ConfigRuleComplianceSummaryFilters;
  GroupByKey?: ConfigRuleComplianceSummaryGroupKey;
  Limit?: number;
  NextToken?: string;
}
export interface GetAggregateConfigRuleComplianceSummaryResponse {
  GroupByKey?: string;
  AggregateComplianceCounts?: Array<AggregateComplianceCount>;
  NextToken?: string;
}
export interface GetAggregateConformancePackComplianceSummaryRequest {
  ConfigurationAggregatorName: string;
  Filters?: AggregateConformancePackComplianceSummaryFilters;
  GroupByKey?: AggregateConformancePackComplianceSummaryGroupKey;
  Limit?: number;
  NextToken?: string;
}
export interface GetAggregateConformancePackComplianceSummaryResponse {
  AggregateConformancePackComplianceSummaries?: Array<AggregateConformancePackComplianceSummary>;
  GroupByKey?: string;
  NextToken?: string;
}
export interface GetAggregateDiscoveredResourceCountsRequest {
  ConfigurationAggregatorName: string;
  Filters?: ResourceCountFilters;
  GroupByKey?: ResourceCountGroupKey;
  Limit?: number;
  NextToken?: string;
}
export interface GetAggregateDiscoveredResourceCountsResponse {
  TotalDiscoveredResources: number;
  GroupByKey?: string;
  GroupedResourceCounts?: Array<GroupedResourceCount>;
  NextToken?: string;
}
export interface GetAggregateResourceConfigRequest {
  ConfigurationAggregatorName: string;
  ResourceIdentifier: AggregateResourceIdentifier;
}
export interface GetAggregateResourceConfigResponse {
  ConfigurationItem?: ConfigurationItem;
}
export interface GetComplianceDetailsByConfigRuleRequest {
  ConfigRuleName: string;
  ComplianceTypes?: Array<ComplianceType>;
  Limit?: number;
  NextToken?: string;
}
export interface GetComplianceDetailsByConfigRuleResponse {
  EvaluationResults?: Array<EvaluationResult>;
  NextToken?: string;
}
export interface GetComplianceDetailsByResourceRequest {
  ResourceType?: string;
  ResourceId?: string;
  ComplianceTypes?: Array<ComplianceType>;
  NextToken?: string;
  ResourceEvaluationId?: string;
}
export interface GetComplianceDetailsByResourceResponse {
  EvaluationResults?: Array<EvaluationResult>;
  NextToken?: string;
}
export interface GetComplianceSummaryByConfigRuleResponse {
  ComplianceSummary?: ComplianceSummary;
}
export interface GetComplianceSummaryByResourceTypeRequest {
  ResourceTypes?: Array<string>;
}
export interface GetComplianceSummaryByResourceTypeResponse {
  ComplianceSummariesByResourceType?: Array<ComplianceSummaryByResourceType>;
}
export type GetConformancePackComplianceDetailsLimit = number;

export interface GetConformancePackComplianceDetailsRequest {
  ConformancePackName: string;
  Filters?: ConformancePackEvaluationFilters;
  Limit?: number;
  NextToken?: string;
}
export interface GetConformancePackComplianceDetailsResponse {
  ConformancePackName: string;
  ConformancePackRuleEvaluationResults?: Array<ConformancePackEvaluationResult>;
  NextToken?: string;
}
export interface GetConformancePackComplianceSummaryRequest {
  ConformancePackNames: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface GetConformancePackComplianceSummaryResponse {
  ConformancePackComplianceSummaryList?: Array<ConformancePackComplianceSummary>;
  NextToken?: string;
}
export interface GetCustomRulePolicyRequest {
  ConfigRuleName?: string;
}
export interface GetCustomRulePolicyResponse {
  PolicyText?: string;
}
export interface GetDiscoveredResourceCountsRequest {
  resourceTypes?: Array<string>;
  limit?: number;
  nextToken?: string;
}
export interface GetDiscoveredResourceCountsResponse {
  totalDiscoveredResources?: number;
  resourceCounts?: Array<ResourceCount>;
  nextToken?: string;
}
export interface GetOrganizationConfigRuleDetailedStatusRequest {
  OrganizationConfigRuleName: string;
  Filters?: StatusDetailFilters;
  Limit?: number;
  NextToken?: string;
}
export interface GetOrganizationConfigRuleDetailedStatusResponse {
  OrganizationConfigRuleDetailedStatus?: Array<MemberAccountStatus>;
  NextToken?: string;
}
export interface GetOrganizationConformancePackDetailedStatusRequest {
  OrganizationConformancePackName: string;
  Filters?: OrganizationResourceDetailedStatusFilters;
  Limit?: number;
  NextToken?: string;
}
export interface GetOrganizationConformancePackDetailedStatusResponse {
  OrganizationConformancePackDetailedStatuses?: Array<OrganizationConformancePackDetailedStatus>;
  NextToken?: string;
}
export interface GetOrganizationCustomRulePolicyRequest {
  OrganizationConfigRuleName: string;
}
export interface GetOrganizationCustomRulePolicyResponse {
  PolicyText?: string;
}
export interface GetResourceConfigHistoryRequest {
  resourceType: ResourceType;
  resourceId: string;
  laterTime?: Date | string;
  earlierTime?: Date | string;
  chronologicalOrder?: ChronologicalOrder;
  limit?: number;
  nextToken?: string;
}
export interface GetResourceConfigHistoryResponse {
  configurationItems?: Array<ConfigurationItem>;
  nextToken?: string;
}
export interface GetResourceEvaluationSummaryRequest {
  ResourceEvaluationId: string;
}
export interface GetResourceEvaluationSummaryResponse {
  ResourceEvaluationId?: string;
  EvaluationMode?: EvaluationMode;
  EvaluationStatus?: EvaluationStatus;
  EvaluationStartTimestamp?: Date | string;
  Compliance?: ComplianceType;
  EvaluationContext?: EvaluationContext;
  ResourceDetails?: ResourceDetails;
}
export interface GetStoredQueryRequest {
  QueryName: string;
}
export interface GetStoredQueryResponse {
  StoredQuery?: StoredQuery;
}
export type GroupByAPILimit = number;

export interface GroupedResourceCount {
  GroupName: string;
  ResourceCount: number;
}
export type GroupedResourceCountList = Array<GroupedResourceCount>;
export declare class IdempotentParameterMismatch extends EffectData.TaggedError(
  "IdempotentParameterMismatch",
)<{
  readonly message?: string;
}> {}
export type IncludeGlobalResourceTypes = boolean;

export declare class InsufficientDeliveryPolicyException extends EffectData.TaggedError(
  "InsufficientDeliveryPolicyException",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientPermissionsException extends EffectData.TaggedError(
  "InsufficientPermissionsException",
)<{
  readonly message?: string;
}> {}
export type Integer = number;

export declare class InvalidConfigurationRecorderNameException extends EffectData.TaggedError(
  "InvalidConfigurationRecorderNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeliveryChannelNameException extends EffectData.TaggedError(
  "InvalidDeliveryChannelNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidExpressionException extends EffectData.TaggedError(
  "InvalidExpressionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidLimitException extends EffectData.TaggedError(
  "InvalidLimitException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRecordingGroupException extends EffectData.TaggedError(
  "InvalidRecordingGroupException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidResultTokenException extends EffectData.TaggedError(
  "InvalidResultTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRoleException extends EffectData.TaggedError(
  "InvalidRoleException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidS3KeyPrefixException extends EffectData.TaggedError(
  "InvalidS3KeyPrefixException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidS3KmsKeyArnException extends EffectData.TaggedError(
  "InvalidS3KmsKeyArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSNSTopicARNException extends EffectData.TaggedError(
  "InvalidSNSTopicARNException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTimeRangeException extends EffectData.TaggedError(
  "InvalidTimeRangeException",
)<{
  readonly message?: string;
}> {}
export declare class LastDeliveryChannelDeleteFailedException extends EffectData.TaggedError(
  "LastDeliveryChannelDeleteFailedException",
)<{
  readonly message?: string;
}> {}
export type LastUpdatedTime = Date | string;

export type LaterTime = Date | string;

export type Limit = number;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListAggregateDiscoveredResourcesRequest {
  ConfigurationAggregatorName: string;
  ResourceType: ResourceType;
  Filters?: ResourceFilters;
  Limit?: number;
  NextToken?: string;
}
export interface ListAggregateDiscoveredResourcesResponse {
  ResourceIdentifiers?: Array<AggregateResourceIdentifier>;
  NextToken?: string;
}
export interface ListConfigurationRecordersRequest {
  Filters?: Array<ConfigurationRecorderFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConfigurationRecordersResponse {
  ConfigurationRecorderSummaries: Array<ConfigurationRecorderSummary>;
  NextToken?: string;
}
export interface ListConformancePackComplianceScoresRequest {
  Filters?: ConformancePackComplianceScoresFilters;
  SortOrder?: SortOrder;
  SortBy?: SortBy;
  Limit?: number;
  NextToken?: string;
}
export interface ListConformancePackComplianceScoresResponse {
  NextToken?: string;
  ConformancePackComplianceScores: Array<ConformancePackComplianceScore>;
}
export interface ListDiscoveredResourcesRequest {
  resourceType: ResourceType;
  resourceIds?: Array<string>;
  resourceName?: string;
  limit?: number;
  includeDeletedResources?: boolean;
  nextToken?: string;
}
export interface ListDiscoveredResourcesResponse {
  resourceIdentifiers?: Array<ResourceIdentifier>;
  nextToken?: string;
}
export type ListResourceEvaluationsPageItemLimit = number;

export interface ListResourceEvaluationsRequest {
  Filters?: ResourceEvaluationFilters;
  Limit?: number;
  NextToken?: string;
}
export interface ListResourceEvaluationsResponse {
  ResourceEvaluations?: Array<ResourceEvaluation>;
  NextToken?: string;
}
export interface ListStoredQueriesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListStoredQueriesResponse {
  StoredQueryMetadata?: Array<StoredQueryMetadata>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  Limit?: number;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export type Long = number;

export declare class MaxActiveResourcesExceededException extends EffectData.TaggedError(
  "MaxActiveResourcesExceededException",
)<{
  readonly message?: string;
}> {}
export type MaximumExecutionFrequency =
  | "One_Hour"
  | "Three_Hours"
  | "Six_Hours"
  | "Twelve_Hours"
  | "TwentyFour_Hours";
export declare class MaxNumberOfConfigRulesExceededException extends EffectData.TaggedError(
  "MaxNumberOfConfigRulesExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaxNumberOfConfigurationRecordersExceededException extends EffectData.TaggedError(
  "MaxNumberOfConfigurationRecordersExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaxNumberOfConformancePacksExceededException extends EffectData.TaggedError(
  "MaxNumberOfConformancePacksExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaxNumberOfDeliveryChannelsExceededException extends EffectData.TaggedError(
  "MaxNumberOfDeliveryChannelsExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaxNumberOfOrganizationConfigRulesExceededException extends EffectData.TaggedError(
  "MaxNumberOfOrganizationConfigRulesExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaxNumberOfOrganizationConformancePacksExceededException extends EffectData.TaggedError(
  "MaxNumberOfOrganizationConformancePacksExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaxNumberOfRetentionConfigurationsExceededException extends EffectData.TaggedError(
  "MaxNumberOfRetentionConfigurationsExceededException",
)<{
  readonly message?: string;
}> {}
export type MaxResults = number;

export type MemberAccountRuleStatus =
  | "CREATE_SUCCESSFUL"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_SUCCESSFUL"
  | "DELETE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED";
export interface MemberAccountStatus {
  AccountId: string;
  ConfigRuleName: string;
  MemberAccountRuleStatus: MemberAccountRuleStatus;
  ErrorCode?: string;
  ErrorMessage?: string;
  LastUpdateTime?: Date | string;
}
export type MessageType =
  | "ConfigurationItemChangeNotification"
  | "ConfigurationSnapshotDeliveryCompleted"
  | "ScheduledNotification"
  | "OversizedConfigurationItemChangeNotification";
export type Name = string;

export type NextToken = string;

export declare class NoAvailableConfigurationRecorderException extends EffectData.TaggedError(
  "NoAvailableConfigurationRecorderException",
)<{
  readonly message?: string;
}> {}
export declare class NoAvailableDeliveryChannelException extends EffectData.TaggedError(
  "NoAvailableDeliveryChannelException",
)<{
  readonly message?: string;
}> {}
export declare class NoAvailableOrganizationException extends EffectData.TaggedError(
  "NoAvailableOrganizationException",
)<{
  readonly message?: string;
}> {}
export declare class NoRunningConfigurationRecorderException extends EffectData.TaggedError(
  "NoRunningConfigurationRecorderException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchBucketException extends EffectData.TaggedError(
  "NoSuchBucketException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchConfigRuleException extends EffectData.TaggedError(
  "NoSuchConfigRuleException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchConfigRuleInConformancePackException extends EffectData.TaggedError(
  "NoSuchConfigRuleInConformancePackException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchConfigurationAggregatorException extends EffectData.TaggedError(
  "NoSuchConfigurationAggregatorException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchConfigurationRecorderException extends EffectData.TaggedError(
  "NoSuchConfigurationRecorderException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchConformancePackException extends EffectData.TaggedError(
  "NoSuchConformancePackException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchDeliveryChannelException extends EffectData.TaggedError(
  "NoSuchDeliveryChannelException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchOrganizationConfigRuleException extends EffectData.TaggedError(
  "NoSuchOrganizationConfigRuleException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchOrganizationConformancePackException extends EffectData.TaggedError(
  "NoSuchOrganizationConformancePackException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchRemediationConfigurationException extends EffectData.TaggedError(
  "NoSuchRemediationConfigurationException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchRemediationExceptionException extends EffectData.TaggedError(
  "NoSuchRemediationExceptionException",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchRetentionConfigurationException extends EffectData.TaggedError(
  "NoSuchRetentionConfigurationException",
)<{
  readonly message?: string;
}> {}
export type OrderingTimestamp = Date | string;

export declare class OrganizationAccessDeniedException extends EffectData.TaggedError(
  "OrganizationAccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface OrganizationAggregationSource {
  RoleArn: string;
  AwsRegions?: Array<string>;
  AllAwsRegions?: boolean;
}
export declare class OrganizationAllFeaturesNotEnabledException extends EffectData.TaggedError(
  "OrganizationAllFeaturesNotEnabledException",
)<{
  readonly message?: string;
}> {}
export interface OrganizationConfigRule {
  OrganizationConfigRuleName: string;
  OrganizationConfigRuleArn: string;
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
  ExcludedAccounts?: Array<string>;
  LastUpdateTime?: Date | string;
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadataNoPolicy;
}
export type OrganizationConfigRuleDetailedStatus = Array<MemberAccountStatus>;
export type OrganizationConfigRuleName = string;

export type OrganizationConfigRuleNames = Array<string>;
export type OrganizationConfigRules = Array<OrganizationConfigRule>;
export interface OrganizationConfigRuleStatus {
  OrganizationConfigRuleName: string;
  OrganizationRuleStatus: OrganizationRuleStatus;
  ErrorCode?: string;
  ErrorMessage?: string;
  LastUpdateTime?: Date | string;
}
export type OrganizationConfigRuleStatuses =
  Array<OrganizationConfigRuleStatus>;
export type OrganizationConfigRuleTriggerType =
  | "CONFIGURATION_ITEM_CHANGE_NOTIFICATION"
  | "OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFCATION"
  | "SCHEDULED_NOTIFICATION";
export type OrganizationConfigRuleTriggerTypeNoSN =
  | "CONFIGURATION_ITEM_CHANGE_NOTIFICATION"
  | "OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFCATION";
export type OrganizationConfigRuleTriggerTypeNoSNs =
  Array<OrganizationConfigRuleTriggerTypeNoSN>;
export type OrganizationConfigRuleTriggerTypes =
  Array<OrganizationConfigRuleTriggerType>;
export interface OrganizationConformancePack {
  OrganizationConformancePackName: string;
  OrganizationConformancePackArn: string;
  DeliveryS3Bucket?: string;
  DeliveryS3KeyPrefix?: string;
  ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
  ExcludedAccounts?: Array<string>;
  LastUpdateTime: Date | string;
}
export interface OrganizationConformancePackDetailedStatus {
  AccountId: string;
  ConformancePackName: string;
  Status: OrganizationResourceDetailedStatus;
  ErrorCode?: string;
  ErrorMessage?: string;
  LastUpdateTime?: Date | string;
}
export type OrganizationConformancePackDetailedStatuses =
  Array<OrganizationConformancePackDetailedStatus>;
export type OrganizationConformancePackName = string;

export type OrganizationConformancePackNames = Array<string>;
export type OrganizationConformancePacks = Array<OrganizationConformancePack>;
export interface OrganizationConformancePackStatus {
  OrganizationConformancePackName: string;
  Status: OrganizationResourceStatus;
  ErrorCode?: string;
  ErrorMessage?: string;
  LastUpdateTime?: Date | string;
}
export type OrganizationConformancePackStatuses =
  Array<OrganizationConformancePackStatus>;
export declare class OrganizationConformancePackTemplateValidationException extends EffectData.TaggedError(
  "OrganizationConformancePackTemplateValidationException",
)<{
  readonly message?: string;
}> {}
export interface OrganizationCustomPolicyRuleMetadata {
  Description?: string;
  OrganizationConfigRuleTriggerTypes?: Array<OrganizationConfigRuleTriggerTypeNoSN>;
  InputParameters?: string;
  MaximumExecutionFrequency?: MaximumExecutionFrequency;
  ResourceTypesScope?: Array<string>;
  ResourceIdScope?: string;
  TagKeyScope?: string;
  TagValueScope?: string;
  PolicyRuntime: string;
  PolicyText: string;
  DebugLogDeliveryAccounts?: Array<string>;
}
export interface OrganizationCustomPolicyRuleMetadataNoPolicy {
  Description?: string;
  OrganizationConfigRuleTriggerTypes?: Array<OrganizationConfigRuleTriggerTypeNoSN>;
  InputParameters?: string;
  MaximumExecutionFrequency?: MaximumExecutionFrequency;
  ResourceTypesScope?: Array<string>;
  ResourceIdScope?: string;
  TagKeyScope?: string;
  TagValueScope?: string;
  PolicyRuntime?: string;
  DebugLogDeliveryAccounts?: Array<string>;
}
export interface OrganizationCustomRuleMetadata {
  Description?: string;
  LambdaFunctionArn: string;
  OrganizationConfigRuleTriggerTypes: Array<OrganizationConfigRuleTriggerType>;
  InputParameters?: string;
  MaximumExecutionFrequency?: MaximumExecutionFrequency;
  ResourceTypesScope?: Array<string>;
  ResourceIdScope?: string;
  TagKeyScope?: string;
  TagValueScope?: string;
}
export interface OrganizationManagedRuleMetadata {
  Description?: string;
  RuleIdentifier: string;
  InputParameters?: string;
  MaximumExecutionFrequency?: MaximumExecutionFrequency;
  ResourceTypesScope?: Array<string>;
  ResourceIdScope?: string;
  TagKeyScope?: string;
  TagValueScope?: string;
}
export type OrganizationResourceDetailedStatus =
  | "CREATE_SUCCESSFUL"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_SUCCESSFUL"
  | "DELETE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED";
export interface OrganizationResourceDetailedStatusFilters {
  AccountId?: string;
  Status?: OrganizationResourceDetailedStatus;
}
export type OrganizationResourceStatus =
  | "CREATE_SUCCESSFUL"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_SUCCESSFUL"
  | "DELETE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED";
export type OrganizationRuleStatus =
  | "CREATE_SUCCESSFUL"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_SUCCESSFUL"
  | "DELETE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED";
export declare class OversizedConfigurationItemException extends EffectData.TaggedError(
  "OversizedConfigurationItemException",
)<{
  readonly message?: string;
}> {}
export type Owner = "Custom_Lambda" | "Aws" | "Custom_Policy";
export type PageSizeLimit = number;

export type ParameterName = string;

export type ParameterValue = string;

export interface PendingAggregationRequest {
  RequesterAccountId?: string;
  RequesterAwsRegion?: string;
}
export type PendingAggregationRequestList = Array<PendingAggregationRequest>;
export type Percentage = number;

export type PolicyRuntime = string;

export type PolicyText = string;

export interface PutAggregationAuthorizationRequest {
  AuthorizedAccountId: string;
  AuthorizedAwsRegion: string;
  Tags?: Array<Tag>;
}
export interface PutAggregationAuthorizationResponse {
  AggregationAuthorization?: AggregationAuthorization;
}
export interface PutConfigRuleRequest {
  ConfigRule: ConfigRule;
  Tags?: Array<Tag>;
}
export interface PutConfigurationAggregatorRequest {
  ConfigurationAggregatorName: string;
  AccountAggregationSources?: Array<AccountAggregationSource>;
  OrganizationAggregationSource?: OrganizationAggregationSource;
  Tags?: Array<Tag>;
  AggregatorFilters?: AggregatorFilters;
}
export interface PutConfigurationAggregatorResponse {
  ConfigurationAggregator?: ConfigurationAggregator;
}
export interface PutConfigurationRecorderRequest {
  ConfigurationRecorder: ConfigurationRecorder;
  Tags?: Array<Tag>;
}
export interface PutConformancePackRequest {
  ConformancePackName: string;
  TemplateS3Uri?: string;
  TemplateBody?: string;
  DeliveryS3Bucket?: string;
  DeliveryS3KeyPrefix?: string;
  ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
  TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails;
}
export interface PutConformancePackResponse {
  ConformancePackArn?: string;
}
export interface PutDeliveryChannelRequest {
  DeliveryChannel: DeliveryChannel;
}
export interface PutEvaluationsRequest {
  Evaluations?: Array<Evaluation>;
  ResultToken: string;
  TestMode?: boolean;
}
export interface PutEvaluationsResponse {
  FailedEvaluations?: Array<Evaluation>;
}
export interface PutExternalEvaluationRequest {
  ConfigRuleName: string;
  ExternalEvaluation: ExternalEvaluation;
}
export interface PutExternalEvaluationResponse {}
export interface PutOrganizationConfigRuleRequest {
  OrganizationConfigRuleName: string;
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
  ExcludedAccounts?: Array<string>;
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata;
}
export interface PutOrganizationConfigRuleResponse {
  OrganizationConfigRuleArn?: string;
}
export interface PutOrganizationConformancePackRequest {
  OrganizationConformancePackName: string;
  TemplateS3Uri?: string;
  TemplateBody?: string;
  DeliveryS3Bucket?: string;
  DeliveryS3KeyPrefix?: string;
  ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
  ExcludedAccounts?: Array<string>;
}
export interface PutOrganizationConformancePackResponse {
  OrganizationConformancePackArn?: string;
}
export interface PutRemediationConfigurationsRequest {
  RemediationConfigurations: Array<RemediationConfiguration>;
}
export interface PutRemediationConfigurationsResponse {
  FailedBatches?: Array<FailedRemediationBatch>;
}
export interface PutRemediationExceptionsRequest {
  ConfigRuleName: string;
  ResourceKeys: Array<RemediationExceptionResourceKey>;
  Message?: string;
  ExpirationTime?: Date | string;
}
export interface PutRemediationExceptionsResponse {
  FailedBatches?: Array<FailedRemediationExceptionBatch>;
}
export interface PutResourceConfigRequest {
  ResourceType: string;
  SchemaVersionId: string;
  ResourceId: string;
  ResourceName?: string;
  Configuration: string;
  Tags?: Record<string, string>;
}
export interface PutRetentionConfigurationRequest {
  RetentionPeriodInDays: number;
}
export interface PutRetentionConfigurationResponse {
  RetentionConfiguration?: RetentionConfiguration;
}
export interface PutServiceLinkedConfigurationRecorderRequest {
  ServicePrincipal: string;
  Tags?: Array<Tag>;
}
export interface PutServiceLinkedConfigurationRecorderResponse {
  Arn?: string;
  Name?: string;
}
export interface PutStoredQueryRequest {
  StoredQuery: StoredQuery;
  Tags?: Array<Tag>;
}
export interface PutStoredQueryResponse {
  QueryArn?: string;
}
export type QueryArn = string;

export type QueryDescription = string;

export type QueryExpression = string;

export type QueryId = string;

export interface QueryInfo {
  SelectFields?: Array<FieldInfo>;
}
export type QueryName = string;

export type RecorderName = string;

export type RecorderStatus =
  | "Pending"
  | "Success"
  | "Failure"
  | "NotApplicable";
export type RecordingFrequency = "CONTINUOUS" | "DAILY";
export interface RecordingGroup {
  allSupported?: boolean;
  includeGlobalResourceTypes?: boolean;
  resourceTypes?: Array<ResourceType>;
  exclusionByResourceTypes?: ExclusionByResourceTypes;
  recordingStrategy?: RecordingStrategy;
}
export interface RecordingMode {
  recordingFrequency: RecordingFrequency;
  recordingModeOverrides?: Array<RecordingModeOverride>;
}
export interface RecordingModeOverride {
  description?: string;
  resourceTypes: Array<ResourceType>;
  recordingFrequency: RecordingFrequency;
}
export type RecordingModeOverrides = Array<RecordingModeOverride>;
export type RecordingModeResourceTypesList = Array<ResourceType>;
export type RecordingScope = "INTERNAL" | "PAID";
export interface RecordingStrategy {
  useOnly?: RecordingStrategyType;
}
export type RecordingStrategyType =
  | "ALL_SUPPORTED_RESOURCE_TYPES"
  | "INCLUSION_BY_RESOURCE_TYPES"
  | "EXCLUSION_BY_RESOURCE_TYPES";
export type ReevaluateConfigRuleNames = Array<string>;
export type RelatedEvent = string;

export type RelatedEventList = Array<string>;
export interface Relationship {
  resourceType?: ResourceType;
  resourceId?: string;
  resourceName?: string;
  relationshipName?: string;
}
export type RelationshipList = Array<Relationship>;
export type RelationshipName = string;

export interface RemediationConfiguration {
  ConfigRuleName: string;
  TargetType: RemediationTargetType;
  TargetId: string;
  TargetVersion?: string;
  Parameters?: Record<string, RemediationParameterValue>;
  ResourceType?: string;
  Automatic?: boolean;
  ExecutionControls?: ExecutionControls;
  MaximumAutomaticAttempts?: number;
  RetryAttemptSeconds?: number;
  Arn?: string;
  CreatedByService?: string;
}
export type RemediationConfigurations = Array<RemediationConfiguration>;
export interface RemediationException {
  ConfigRuleName: string;
  ResourceType: string;
  ResourceId: string;
  Message?: string;
  ExpirationTime?: Date | string;
}
export interface RemediationExceptionResourceKey {
  ResourceType?: string;
  ResourceId?: string;
}
export type RemediationExceptionResourceKeys =
  Array<RemediationExceptionResourceKey>;
export type RemediationExceptions = Array<RemediationException>;
export type RemediationExecutionState =
  | "QUEUED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED";
export interface RemediationExecutionStatus {
  ResourceKey?: ResourceKey;
  State?: RemediationExecutionState;
  StepDetails?: Array<RemediationExecutionStep>;
  InvocationTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type RemediationExecutionStatuses = Array<RemediationExecutionStatus>;
export interface RemediationExecutionStep {
  Name?: string;
  State?: RemediationExecutionStepState;
  ErrorMessage?: string;
  StartTime?: Date | string;
  StopTime?: Date | string;
}
export type RemediationExecutionSteps = Array<RemediationExecutionStep>;
export type RemediationExecutionStepState = "SUCCEEDED" | "PENDING" | "FAILED";
export declare class RemediationInProgressException extends EffectData.TaggedError(
  "RemediationInProgressException",
)<{
  readonly message?: string;
}> {}
export type RemediationParameters = Record<string, RemediationParameterValue>;
export interface RemediationParameterValue {
  ResourceValue?: ResourceValue;
  StaticValue?: StaticValue;
}
export type RemediationTargetType = "SSM_DOCUMENT";
export declare class ResourceConcurrentModificationException extends EffectData.TaggedError(
  "ResourceConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export type ResourceConfiguration = string;

export type ResourceConfigurationSchemaType = "CFN_RESOURCE_SCHEMA";
export interface ResourceCount {
  resourceType?: ResourceType;
  count?: number;
}
export interface ResourceCountFilters {
  ResourceType?: ResourceType;
  AccountId?: string;
  Region?: string;
}
export type ResourceCountGroupKey =
  | "RESOURCE_TYPE"
  | "ACCOUNT_ID"
  | "AWS_REGION";
export type ResourceCounts = Array<ResourceCount>;
export type ResourceCreationTime = Date | string;

export type ResourceDeletionTime = Date | string;

export interface ResourceDetails {
  ResourceId: string;
  ResourceType: string;
  ResourceConfiguration: string;
  ResourceConfigurationSchemaType?: ResourceConfigurationSchemaType;
}
export interface ResourceEvaluation {
  ResourceEvaluationId?: string;
  EvaluationMode?: EvaluationMode;
  EvaluationStartTimestamp?: Date | string;
}
export interface ResourceEvaluationFilters {
  EvaluationMode?: EvaluationMode;
  TimeWindow?: TimeWindow;
  EvaluationContextIdentifier?: string;
}
export type ResourceEvaluationId = string;

export type ResourceEvaluations = Array<ResourceEvaluation>;
export type ResourceEvaluationStatus = "IN_PROGRESS" | "FAILED" | "SUCCEEDED";
export interface ResourceFilters {
  AccountId?: string;
  ResourceId?: string;
  ResourceName?: string;
  Region?: string;
}
export type ResourceId = string;

export interface ResourceIdentifier {
  resourceType?: ResourceType;
  resourceId?: string;
  resourceName?: string;
  resourceDeletionTime?: Date | string;
}
export type ResourceIdentifierList = Array<ResourceIdentifier>;
export type ResourceIdentifiersList = Array<AggregateResourceIdentifier>;
export type ResourceIdList = Array<string>;
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export interface ResourceKey {
  resourceType: ResourceType;
  resourceId: string;
}
export type ResourceKeys = Array<ResourceKey>;
export type ResourceName = string;

export declare class ResourceNotDiscoveredException extends EffectData.TaggedError(
  "ResourceNotDiscoveredException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourceType =
  | "CustomerGateway"
  | "EIP"
  | "Host"
  | "Instance"
  | "InternetGateway"
  | "NetworkAcl"
  | "NetworkInterface"
  | "RouteTable"
  | "SecurityGroup"
  | "Subnet"
  | "Trail"
  | "Volume"
  | "VPC"
  | "VPNConnection"
  | "VPNGateway"
  | "RegisteredHAInstance"
  | "NatGateway"
  | "EgressOnlyInternetGateway"
  | "VPCEndpoint"
  | "VPCEndpointService"
  | "FlowLog"
  | "VPCPeeringConnection"
  | "Domain"
  | "Group"
  | "Policy"
  | "Role"
  | "User"
  | "LoadBalancerV2"
  | "Certificate"
  | "DBInstance"
  | "DBSubnetGroup"
  | "DBSecurityGroup"
  | "DBSnapshot"
  | "DBCluster"
  | "DBClusterSnapshot"
  | "EventSubscription"
  | "Bucket"
  | "AccountPublicAccessBlock"
  | "Cluster"
  | "ClusterSnapshot"
  | "ClusterParameterGroup"
  | "ClusterSecurityGroup"
  | "ClusterSubnetGroup"
  | "RedshiftEventSubscription"
  | "ManagedInstanceInventory"
  | "Alarm"
  | "Stack"
  | "LoadBalancer"
  | "AutoScalingGroup"
  | "LaunchConfiguration"
  | "ScalingPolicy"
  | "ScheduledAction"
  | "Table"
  | "Project"
  | "RateBasedRule"
  | "Rule"
  | "RuleGroup"
  | "WebACL"
  | "RegionalRateBasedRule"
  | "RegionalRule"
  | "RegionalRuleGroup"
  | "RegionalWebACL"
  | "Distribution"
  | "StreamingDistribution"
  | "Function"
  | "NetworkFirewallFirewall"
  | "NetworkFirewallFirewallPolicy"
  | "NetworkFirewallRuleGroup"
  | "Application"
  | "ApplicationVersion"
  | "Environment"
  | "WebACLV2"
  | "RuleGroupV2"
  | "IPSetV2"
  | "RegexPatternSetV2"
  | "ManagedRuleSetV2"
  | "EncryptionConfig"
  | "AssociationCompliance"
  | "PatchCompliance"
  | "Protection"
  | "RegionalProtection"
  | "ConformancePackCompliance"
  | "ResourceCompliance"
  | "Stage"
  | "RestApi"
  | "StageV2"
  | "Api"
  | "Pipeline"
  | "CloudFormationProvisionedProduct"
  | "CloudFormationProduct"
  | "Portfolio"
  | "Queue"
  | "Key"
  | "QLDBLedger"
  | "Secret"
  | "Topic"
  | "FileData"
  | "BackupPlan"
  | "BackupSelection"
  | "BackupVault"
  | "BackupRecoveryPoint"
  | "ECRRepository"
  | "ECSCluster"
  | "ECSService"
  | "ECSTaskDefinition"
  | "EFSAccessPoint"
  | "EFSFileSystem"
  | "EKSCluster"
  | "OpenSearchDomain"
  | "TransitGateway"
  | "KinesisStream"
  | "KinesisStreamConsumer"
  | "CodeDeployApplication"
  | "CodeDeployDeploymentConfig"
  | "CodeDeployDeploymentGroup"
  | "LaunchTemplate"
  | "ECRPublicRepository"
  | "GuardDutyDetector"
  | "EMRSecurityConfiguration"
  | "SageMakerCodeRepository"
  | "Route53ResolverResolverEndpoint"
  | "Route53ResolverResolverRule"
  | "Route53ResolverResolverRuleAssociation"
  | "DMSReplicationSubnetGroup"
  | "DMSEventSubscription"
  | "MSKCluster"
  | "StepFunctionsActivity"
  | "WorkSpacesWorkspace"
  | "WorkSpacesConnectionAlias"
  | "SageMakerModel"
  | "ListenerV2"
  | "StepFunctionsStateMachine"
  | "BatchJobQueue"
  | "BatchComputeEnvironment"
  | "AccessAnalyzerAnalyzer"
  | "AthenaWorkGroup"
  | "AthenaDataCatalog"
  | "DetectiveGraph"
  | "GlobalAcceleratorAccelerator"
  | "GlobalAcceleratorEndpointGroup"
  | "GlobalAcceleratorListener"
  | "TransitGatewayAttachment"
  | "TransitGatewayRouteTable"
  | "DMSCertificate"
  | "AppConfigApplication"
  | "AppSyncGraphQLApi"
  | "DataSyncLocationSMB"
  | "DataSyncLocationFSxLustre"
  | "DataSyncLocationS3"
  | "DataSyncLocationEFS"
  | "DataSyncTask"
  | "DataSyncLocationNFS"
  | "NetworkInsightsAccessScopeAnalysis"
  | "EKSFargateProfile"
  | "GlueJob"
  | "GuardDutyThreatIntelSet"
  | "GuardDutyIPSet"
  | "SageMakerWorkteam"
  | "SageMakerNotebookInstanceLifecycleConfig"
  | "ServiceDiscoveryService"
  | "ServiceDiscoveryPublicDnsNamespace"
  | "SESContactList"
  | "SESConfigurationSet"
  | "Route53HostedZone"
  | "IoTEventsInput"
  | "IoTEventsDetectorModel"
  | "IoTEventsAlarmModel"
  | "ServiceDiscoveryHttpNamespace"
  | "EventsEventBus"
  | "ImageBuilderContainerRecipe"
  | "ImageBuilderDistributionConfiguration"
  | "ImageBuilderInfrastructureConfiguration"
  | "DataSyncLocationObjectStorage"
  | "DataSyncLocationHDFS"
  | "GlueClassifier"
  | "Route53RecoveryReadinessCell"
  | "Route53RecoveryReadinessReadinessCheck"
  | "ECRRegistryPolicy"
  | "BackupReportPlan"
  | "LightsailCertificate"
  | "RUMAppMonitor"
  | "EventsEndpoint"
  | "SESReceiptRuleSet"
  | "EventsArchive"
  | "EventsApiDestination"
  | "LightsailDisk"
  | "FISExperimentTemplate"
  | "DataSyncLocationFSxWindows"
  | "SESReceiptFilter"
  | "GuardDutyFilter"
  | "SESTemplate"
  | "AmazonMQBroker"
  | "AppConfigEnvironment"
  | "AppConfigConfigurationProfile"
  | "Cloud9EnvironmentEC2"
  | "EventSchemasRegistry"
  | "EventSchemasRegistryPolicy"
  | "EventSchemasDiscoverer"
  | "FraudDetectorLabel"
  | "FraudDetectorEntityType"
  | "FraudDetectorVariable"
  | "FraudDetectorOutcome"
  | "IoTAuthorizer"
  | "IoTSecurityProfile"
  | "IoTRoleAlias"
  | "IoTDimension"
  | "IoTAnalyticsDatastore"
  | "LightsailBucket"
  | "LightsailStaticIp"
  | "MediaPackagePackagingGroup"
  | "Route53RecoveryReadinessRecoveryGroup"
  | "ResilienceHubResiliencyPolicy"
  | "TransferWorkflow"
  | "EKSIdentityProviderConfig"
  | "EKSAddon"
  | "GlueMLTransform"
  | "IoTPolicy"
  | "IoTMitigationAction"
  | "IoTTwinMakerWorkspace"
  | "IoTTwinMakerEntity"
  | "IoTAnalyticsDataset"
  | "IoTAnalyticsPipeline"
  | "IoTAnalyticsChannel"
  | "IoTSiteWiseDashboard"
  | "IoTSiteWiseProject"
  | "IoTSiteWisePortal"
  | "IoTSiteWiseAssetModel"
  | "IVSChannel"
  | "IVSRecordingConfiguration"
  | "IVSPlaybackKeyPair"
  | "KinesisAnalyticsV2Application"
  | "RDSGlobalCluster"
  | "S3MultiRegionAccessPoint"
  | "DeviceFarmTestGridProject"
  | "BudgetsBudgetsAction"
  | "LexBot"
  | "CodeGuruReviewerRepositoryAssociation"
  | "IoTCustomMetric"
  | "Route53ResolverFirewallDomainList"
  | "RoboMakerRobotApplicationVersion"
  | "EC2TrafficMirrorSession"
  | "IoTSiteWiseGateway"
  | "LexBotAlias"
  | "LookoutMetricsAlert"
  | "IoTAccountAuditConfiguration"
  | "EC2TrafficMirrorTarget"
  | "S3StorageLens"
  | "IoTScheduledAudit"
  | "EventsConnection"
  | "EventSchemasSchema"
  | "MediaPackagePackagingConfiguration"
  | "KinesisVideoSignalingChannel"
  | "AppStreamDirectoryConfig"
  | "LookoutVisionProject"
  | "Route53RecoveryControlCluster"
  | "Route53RecoveryControlSafetyRule"
  | "Route53RecoveryControlControlPanel"
  | "Route53RecoveryControlRoutingControl"
  | "Route53RecoveryReadinessResourceSet"
  | "RoboMakerSimulationApplication"
  | "RoboMakerRobotApplication"
  | "HealthLakeFHIRDatastore"
  | "PinpointSegment"
  | "PinpointApplicationSettings"
  | "EventsRule"
  | "EC2DHCPOptions"
  | "EC2NetworkInsightsPath"
  | "EC2TrafficMirrorFilter"
  | "EC2IPAM"
  | "IoTTwinMakerScene"
  | "NetworkManagerTransitGatewayRegistration"
  | "CustomerProfilesDomain"
  | "AutoScalingWarmPool"
  | "ConnectPhoneNumber"
  | "AppConfigDeploymentStrategy"
  | "AppFlowFlow"
  | "AuditManagerAssessment"
  | "CloudWatchMetricStream"
  | "DeviceFarmInstanceProfile"
  | "DeviceFarmProject"
  | "EC2EC2Fleet"
  | "EC2SubnetRouteTableAssociation"
  | "ECRPullThroughCacheRule"
  | "GroundStationConfig"
  | "ImageBuilderImagePipeline"
  | "IoTFleetMetric"
  | "IoTWirelessServiceProfile"
  | "NetworkManagerDevice"
  | "NetworkManagerGlobalNetwork"
  | "NetworkManagerLink"
  | "NetworkManagerSite"
  | "PanoramaPackage"
  | "PinpointApp"
  | "RedshiftScheduledAction"
  | "Route53ResolverFirewallRuleGroupAssociation"
  | "SageMakerAppImageConfig"
  | "SageMakerImage"
  | "ECSTaskSet"
  | "CassandraKeyspace"
  | "SignerSigningProfile"
  | "AmplifyApp"
  | "AppMeshVirtualNode"
  | "AppMeshVirtualService"
  | "AppRunnerVpcConnector"
  | "AppStreamApplication"
  | "CodeArtifactRepository"
  | "EC2PrefixList"
  | "EC2SpotFleet"
  | "EvidentlyProject"
  | "ForecastDataset"
  | "IAMSAMLProvider"
  | "IAMServerCertificate"
  | "PinpointCampaign"
  | "PinpointInAppTemplate"
  | "SageMakerDomain"
  | "TransferAgreement"
  | "TransferConnector"
  | "KinesisFirehoseDeliveryStream"
  | "AmplifyBranch"
  | "AppIntegrationsEventIntegration"
  | "AppMeshRoute"
  | "AthenaPreparedStatement"
  | "EC2IPAMScope"
  | "EvidentlyLaunch"
  | "ForecastDatasetGroup"
  | "GreengrassV2ComponentVersion"
  | "GroundStationMissionProfile"
  | "MediaConnectFlowEntitlement"
  | "MediaConnectFlowVpcInterface"
  | "MediaTailorPlaybackConfiguration"
  | "MSKConfiguration"
  | "PersonalizeDataset"
  | "PersonalizeSchema"
  | "PersonalizeSolution"
  | "PinpointEmailTemplate"
  | "PinpointEventStream"
  | "ResilienceHubApp"
  | "ACMPCACertificateAuthority"
  | "AppConfigHostedConfigurationVersion"
  | "AppMeshVirtualGateway"
  | "AppMeshVirtualRouter"
  | "AppRunnerService"
  | "CustomerProfilesObjectType"
  | "DMSEndpoint"
  | "EC2CapacityReservation"
  | "EC2ClientVpnEndpoint"
  | "KendraIndex"
  | "KinesisVideoStream"
  | "LogsDestination"
  | "PinpointEmailChannel"
  | "S3AccessPoint"
  | "NetworkManagerCustomerGatewayAssociation"
  | "NetworkManagerLinkAssociation"
  | "IoTWirelessMulticastGroup"
  | "PersonalizeDatasetGroup"
  | "IoTTwinMakerComponentType"
  | "CodeBuildReportGroup"
  | "SageMakerFeatureGroup"
  | "MSKBatchScramSecret"
  | "AppStreamStack"
  | "IoTJobTemplate"
  | "IoTWirelessFuotaTask"
  | "IoTProvisioningTemplate"
  | "InspectorV2Filter"
  | "Route53ResolverResolverQueryLoggingConfigAssociation"
  | "ServiceDiscoveryInstance"
  | "TransferCertificate"
  | "MediaConnectFlowSource"
  | "APSRuleGroupsNamespace"
  | "CodeGuruProfilerProfilingGroup"
  | "Route53ResolverResolverQueryLoggingConfig"
  | "BatchSchedulingPolicy"
  | "ACMPCACertificateAuthorityActivation"
  | "AppMeshGatewayRoute"
  | "AppMeshMesh"
  | "ConnectInstance"
  | "ConnectQuickConnect"
  | "EC2CarrierGateway"
  | "EC2IPAMPool"
  | "EC2TransitGatewayConnect"
  | "EC2TransitGatewayMulticastDomain"
  | "ECSCapacityProvider"
  | "IAMInstanceProfile"
  | "IoTCACertificate"
  | "IoTTwinMakerSyncJob"
  | "KafkaConnectConnector"
  | "LambdaCodeSigningConfig"
  | "NetworkManagerConnectPeer"
  | "ResourceExplorer2Index"
  | "AppStreamFleet"
  | "CognitoUserPool"
  | "CognitoUserPoolClient"
  | "CognitoUserPoolGroup"
  | "EC2NetworkInsightsAccessScope"
  | "EC2NetworkInsightsAnalysis"
  | "GrafanaWorkspace"
  | "GroundStationDataflowEndpointGroup"
  | "ImageBuilderImageRecipe"
  | "KMSAlias"
  | "M2Environment"
  | "QuickSightDataSource"
  | "QuickSightTemplate"
  | "QuickSightTheme"
  | "RDSOptionGroup"
  | "RedshiftEndpointAccess"
  | "Route53ResolverFirewallRuleGroup"
  | "SSMDocument"
  | "AppConfigExtensionAssociation"
  | "AppIntegrationsApplication"
  | "AppSyncApiCache"
  | "BedrockGuardrail"
  | "BedrockKnowledgeBase"
  | "CognitoIdentityPool"
  | "ConnectRule"
  | "ConnectUser"
  | "EC2ClientVpnTargetNetworkAssociation"
  | "EC2EIPAssociation"
  | "EC2IPAMResourceDiscovery"
  | "EC2IPAMResourceDiscoveryAssociation"
  | "EC2InstanceConnectEndpoint"
  | "EC2SnapshotBlockPublicAccess"
  | "EC2VPCBlockPublicAccessExclusion"
  | "EC2VPCBlockPublicAccessOptions"
  | "EC2VPCEndpointConnectionNotification"
  | "EC2VPNConnectionRoute"
  | "EvidentlySegment"
  | "IAMOIDCProvider"
  | "InspectorV2Activation"
  | "MSKClusterPolicy"
  | "MSKVpcConnection"
  | "MediaConnectGateway"
  | "MemoryDBSubnetGroup"
  | "OpenSearchServerlessCollection"
  | "OpenSearchServerlessVpcEndpoint"
  | "RedshiftEndpointAuthorization"
  | "Route53ProfilesProfile"
  | "S3StorageLensGroup"
  | "S3ExpressBucketPolicy"
  | "S3ExpressDirectoryBucket"
  | "SageMakerInferenceExperiment"
  | "SecurityHubStandard"
  | "TransferProfile";
export type ResourceTypeList = Array<ResourceType>;
export type ResourceTypes = Array<string>;
export type ResourceTypesScope = Array<string>;
export type ResourceTypeString = string;

export type ResourceTypeValue = string;

export type ResourceTypeValueList = Array<string>;
export interface ResourceValue {
  Value: ResourceValueType;
}
export type ResourceValueType = "RESOURCE_ID";
export type Results = Array<string>;
export interface RetentionConfiguration {
  Name: string;
  RetentionPeriodInDays: number;
}
export type RetentionConfigurationList = Array<RetentionConfiguration>;
export type RetentionConfigurationName = string;

export type RetentionConfigurationNameList = Array<string>;
export type RetentionPeriodInDays = number;

export type RuleLimit = number;

export type SchemaVersionId = string;

export interface Scope {
  ComplianceResourceTypes?: Array<string>;
  TagKey?: string;
  TagValue?: string;
  ComplianceResourceId?: string;
}
export interface SelectAggregateResourceConfigRequest {
  Expression: string;
  ConfigurationAggregatorName: string;
  Limit?: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface SelectAggregateResourceConfigResponse {
  Results?: Array<string>;
  QueryInfo?: QueryInfo;
  NextToken?: string;
}
export interface SelectResourceConfigRequest {
  Expression: string;
  Limit?: number;
  NextToken?: string;
}
export interface SelectResourceConfigResponse {
  Results?: Array<string>;
  QueryInfo?: QueryInfo;
  NextToken?: string;
}
export type ServicePrincipal = string;

export type ServicePrincipalValue = string;

export type ServicePrincipalValueList = Array<string>;
export type SortBy = "SCORE";
export type SortOrder = "ASCENDING" | "DESCENDING";
export interface Source {
  Owner: Owner;
  SourceIdentifier?: string;
  SourceDetails?: Array<SourceDetail>;
  CustomPolicyDetails?: CustomPolicyDetails;
}
export interface SourceDetail {
  EventSource?: EventSource;
  MessageType?: MessageType;
  MaximumExecutionFrequency?: MaximumExecutionFrequency;
}
export type SourceDetails = Array<SourceDetail>;
export interface SsmControls {
  ConcurrentExecutionRatePercentage?: number;
  ErrorPercentage?: number;
}
export type SSMDocumentName = string;

export type SSMDocumentVersion = string;

export type StackArn = string;

export interface StartConfigRulesEvaluationRequest {
  ConfigRuleNames?: Array<string>;
}
export interface StartConfigRulesEvaluationResponse {}
export interface StartConfigurationRecorderRequest {
  ConfigurationRecorderName: string;
}
export interface StartRemediationExecutionRequest {
  ConfigRuleName: string;
  ResourceKeys: Array<ResourceKey>;
}
export interface StartRemediationExecutionResponse {
  FailureMessage?: string;
  FailedItems?: Array<ResourceKey>;
}
export interface StartResourceEvaluationRequest {
  ResourceDetails: ResourceDetails;
  EvaluationContext?: EvaluationContext;
  EvaluationMode: EvaluationMode;
  EvaluationTimeout?: number;
  ClientToken?: string;
}
export interface StartResourceEvaluationResponse {
  ResourceEvaluationId?: string;
}
export type StaticParameterValues = Array<string>;
export interface StaticValue {
  Values: Array<string>;
}
export interface StatusDetailFilters {
  AccountId?: string;
  MemberAccountRuleStatus?: MemberAccountRuleStatus;
}
export interface StopConfigurationRecorderRequest {
  ConfigurationRecorderName: string;
}
export interface StoredQuery {
  QueryId?: string;
  QueryArn?: string;
  QueryName: string;
  Description?: string;
  Expression?: string;
}
export interface StoredQueryMetadata {
  QueryId: string;
  QueryArn: string;
  QueryName: string;
  Description?: string;
}
export type StoredQueryMetadataList = Array<StoredQueryMetadata>;
export type StringWithCharLimit1024 = string;

export type StringWithCharLimit128 = string;

export type StringWithCharLimit2048 = string;

export type StringWithCharLimit256 = string;

export type StringWithCharLimit256Min0 = string;

export type StringWithCharLimit64 = string;

export type StringWithCharLimit768 = string;

export type SupplementaryConfiguration = Record<string, string>;
export type SupplementaryConfigurationName = string;

export type SupplementaryConfigurationValue = string;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export type Tags = Record<string, string>;
export type TagsList = Array<Tag>;
export type TagValue = string;

export type TemplateBody = string;

export type TemplateS3Uri = string;

export interface TemplateSSMDocumentDetails {
  DocumentName: string;
  DocumentVersion?: string;
}
export interface TimeWindow {
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export declare class UnmodifiableEntityException extends EffectData.TaggedError(
  "UnmodifiableEntityException",
)<{
  readonly message?: string;
}> {}
export type UnprocessedResourceIdentifierList =
  Array<AggregateResourceIdentifier>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type Value = string;

export type Version = string;

export declare namespace AssociateResourceTypes {
  export type Input = AssociateResourceTypesRequest;
  export type Output = AssociateResourceTypesResponse;
  export type Error =
    | ConflictException
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetAggregateResourceConfig {
  export type Input = BatchGetAggregateResourceConfigRequest;
  export type Output = BatchGetAggregateResourceConfigResponse;
  export type Error =
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetResourceConfig {
  export type Input = BatchGetResourceConfigRequest;
  export type Output = BatchGetResourceConfigResponse;
  export type Error =
    | NoAvailableConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAggregationAuthorization {
  export type Input = DeleteAggregationAuthorizationRequest;
  export type Output = {};
  export type Error = InvalidParameterValueException | CommonAwsError;
}

export declare namespace DeleteConfigRule {
  export type Input = DeleteConfigRuleRequest;
  export type Output = {};
  export type Error =
    | NoSuchConfigRuleException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationAggregator {
  export type Input = DeleteConfigurationAggregatorRequest;
  export type Output = {};
  export type Error = NoSuchConfigurationAggregatorException | CommonAwsError;
}

export declare namespace DeleteConfigurationRecorder {
  export type Input = DeleteConfigurationRecorderRequest;
  export type Output = {};
  export type Error =
    | NoSuchConfigurationRecorderException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace DeleteConformancePack {
  export type Input = DeleteConformancePackRequest;
  export type Output = {};
  export type Error =
    | NoSuchConformancePackException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteDeliveryChannel {
  export type Input = DeleteDeliveryChannelRequest;
  export type Output = {};
  export type Error =
    | LastDeliveryChannelDeleteFailedException
    | NoSuchDeliveryChannelException
    | CommonAwsError;
}

export declare namespace DeleteEvaluationResults {
  export type Input = DeleteEvaluationResultsRequest;
  export type Output = DeleteEvaluationResultsResponse;
  export type Error =
    | NoSuchConfigRuleException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteOrganizationConfigRule {
  export type Input = DeleteOrganizationConfigRuleRequest;
  export type Output = {};
  export type Error =
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteOrganizationConformancePack {
  export type Input = DeleteOrganizationConformancePackRequest;
  export type Output = {};
  export type Error =
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeletePendingAggregationRequest {
  export type Input = DeletePendingAggregationRequestRequest;
  export type Output = {};
  export type Error = InvalidParameterValueException | CommonAwsError;
}

export declare namespace DeleteRemediationConfiguration {
  export type Input = DeleteRemediationConfigurationRequest;
  export type Output = DeleteRemediationConfigurationResponse;
  export type Error =
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | NoSuchRemediationConfigurationException
    | RemediationInProgressException
    | CommonAwsError;
}

export declare namespace DeleteRemediationExceptions {
  export type Input = DeleteRemediationExceptionsRequest;
  export type Output = DeleteRemediationExceptionsResponse;
  export type Error = NoSuchRemediationExceptionException | CommonAwsError;
}

export declare namespace DeleteResourceConfig {
  export type Input = DeleteResourceConfigRequest;
  export type Output = {};
  export type Error =
    | NoRunningConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRetentionConfiguration {
  export type Input = DeleteRetentionConfigurationRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | NoSuchRetentionConfigurationException
    | CommonAwsError;
}

export declare namespace DeleteServiceLinkedConfigurationRecorder {
  export type Input = DeleteServiceLinkedConfigurationRecorderRequest;
  export type Output = DeleteServiceLinkedConfigurationRecorderResponse;
  export type Error =
    | ConflictException
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStoredQuery {
  export type Input = DeleteStoredQueryRequest;
  export type Output = DeleteStoredQueryResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeliverConfigSnapshot {
  export type Input = DeliverConfigSnapshotRequest;
  export type Output = DeliverConfigSnapshotResponse;
  export type Error =
    | NoAvailableConfigurationRecorderException
    | NoRunningConfigurationRecorderException
    | NoSuchDeliveryChannelException
    | CommonAwsError;
}

export declare namespace DescribeAggregateComplianceByConfigRules {
  export type Input = DescribeAggregateComplianceByConfigRulesRequest;
  export type Output = DescribeAggregateComplianceByConfigRulesResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAggregateComplianceByConformancePacks {
  export type Input = DescribeAggregateComplianceByConformancePacksRequest;
  export type Output = DescribeAggregateComplianceByConformancePacksResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAggregationAuthorizations {
  export type Input = DescribeAggregationAuthorizationsRequest;
  export type Output = DescribeAggregationAuthorizationsResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeComplianceByConfigRule {
  export type Input = DescribeComplianceByConfigRuleRequest;
  export type Output = DescribeComplianceByConfigRuleResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace DescribeComplianceByResource {
  export type Input = DescribeComplianceByResourceRequest;
  export type Output = DescribeComplianceByResourceResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeConfigRuleEvaluationStatus {
  export type Input = DescribeConfigRuleEvaluationStatusRequest;
  export type Output = DescribeConfigRuleEvaluationStatusResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace DescribeConfigRules {
  export type Input = DescribeConfigRulesRequest;
  export type Output = DescribeConfigRulesResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationAggregators {
  export type Input = DescribeConfigurationAggregatorsRequest;
  export type Output = DescribeConfigurationAggregatorsResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigurationAggregatorException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationAggregatorSourcesStatus {
  export type Input = DescribeConfigurationAggregatorSourcesStatusRequest;
  export type Output = DescribeConfigurationAggregatorSourcesStatusResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigurationAggregatorException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationRecorders {
  export type Input = DescribeConfigurationRecordersRequest;
  export type Output = DescribeConfigurationRecordersResponse;
  export type Error =
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationRecorderStatus {
  export type Input = DescribeConfigurationRecorderStatusRequest;
  export type Output = DescribeConfigurationRecorderStatusResponse;
  export type Error =
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConformancePackCompliance {
  export type Input = DescribeConformancePackComplianceRequest;
  export type Output = DescribeConformancePackComplianceResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleInConformancePackException
    | NoSuchConformancePackException
    | CommonAwsError;
}

export declare namespace DescribeConformancePacks {
  export type Input = DescribeConformancePacksRequest;
  export type Output = DescribeConformancePacksResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConformancePackException
    | CommonAwsError;
}

export declare namespace DescribeConformancePackStatus {
  export type Input = DescribeConformancePackStatusRequest;
  export type Output = DescribeConformancePackStatusResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeDeliveryChannels {
  export type Input = DescribeDeliveryChannelsRequest;
  export type Output = DescribeDeliveryChannelsResponse;
  export type Error = NoSuchDeliveryChannelException | CommonAwsError;
}

export declare namespace DescribeDeliveryChannelStatus {
  export type Input = DescribeDeliveryChannelStatusRequest;
  export type Output = DescribeDeliveryChannelStatusResponse;
  export type Error = NoSuchDeliveryChannelException | CommonAwsError;
}

export declare namespace DescribeOrganizationConfigRules {
  export type Input = DescribeOrganizationConfigRulesRequest;
  export type Output = DescribeOrganizationConfigRulesResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConfigRuleStatuses {
  export type Input = DescribeOrganizationConfigRuleStatusesRequest;
  export type Output = DescribeOrganizationConfigRuleStatusesResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConformancePacks {
  export type Input = DescribeOrganizationConformancePacksRequest;
  export type Output = DescribeOrganizationConformancePacksResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConformancePackStatuses {
  export type Input = DescribeOrganizationConformancePackStatusesRequest;
  export type Output = DescribeOrganizationConformancePackStatusesResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace DescribePendingAggregationRequests {
  export type Input = DescribePendingAggregationRequestsRequest;
  export type Output = DescribePendingAggregationRequestsResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeRemediationConfigurations {
  export type Input = DescribeRemediationConfigurationsRequest;
  export type Output = DescribeRemediationConfigurationsResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeRemediationExceptions {
  export type Input = DescribeRemediationExceptionsRequest;
  export type Output = DescribeRemediationExceptionsResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeRemediationExecutionStatus {
  export type Input = DescribeRemediationExecutionStatusRequest;
  export type Output = DescribeRemediationExecutionStatusResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchRemediationConfigurationException
    | CommonAwsError;
}

export declare namespace DescribeRetentionConfigurations {
  export type Input = DescribeRetentionConfigurationsRequest;
  export type Output = DescribeRetentionConfigurationsResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchRetentionConfigurationException
    | CommonAwsError;
}

export declare namespace DisassociateResourceTypes {
  export type Input = DisassociateResourceTypesRequest;
  export type Output = DisassociateResourceTypesResponse;
  export type Error =
    | ConflictException
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateComplianceDetailsByConfigRule {
  export type Input = GetAggregateComplianceDetailsByConfigRuleRequest;
  export type Output = GetAggregateComplianceDetailsByConfigRuleResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateConfigRuleComplianceSummary {
  export type Input = GetAggregateConfigRuleComplianceSummaryRequest;
  export type Output = GetAggregateConfigRuleComplianceSummaryResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateConformancePackComplianceSummary {
  export type Input = GetAggregateConformancePackComplianceSummaryRequest;
  export type Output = GetAggregateConformancePackComplianceSummaryResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateDiscoveredResourceCounts {
  export type Input = GetAggregateDiscoveredResourceCountsRequest;
  export type Output = GetAggregateDiscoveredResourceCountsResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateResourceConfig {
  export type Input = GetAggregateResourceConfigRequest;
  export type Output = GetAggregateResourceConfigResponse;
  export type Error =
    | NoSuchConfigurationAggregatorException
    | OversizedConfigurationItemException
    | ResourceNotDiscoveredException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetComplianceDetailsByConfigRule {
  export type Input = GetComplianceDetailsByConfigRuleRequest;
  export type Output = GetComplianceDetailsByConfigRuleResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace GetComplianceDetailsByResource {
  export type Input = GetComplianceDetailsByResourceRequest;
  export type Output = GetComplianceDetailsByResourceResponse;
  export type Error = InvalidParameterValueException | CommonAwsError;
}

export declare namespace GetComplianceSummaryByConfigRule {
  export type Input = {};
  export type Output = GetComplianceSummaryByConfigRuleResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetComplianceSummaryByResourceType {
  export type Input = GetComplianceSummaryByResourceTypeRequest;
  export type Output = GetComplianceSummaryByResourceTypeResponse;
  export type Error = InvalidParameterValueException | CommonAwsError;
}

export declare namespace GetConformancePackComplianceDetails {
  export type Input = GetConformancePackComplianceDetailsRequest;
  export type Output = GetConformancePackComplianceDetailsResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleInConformancePackException
    | NoSuchConformancePackException
    | CommonAwsError;
}

export declare namespace GetConformancePackComplianceSummary {
  export type Input = GetConformancePackComplianceSummaryRequest;
  export type Output = GetConformancePackComplianceSummaryResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConformancePackException
    | CommonAwsError;
}

export declare namespace GetCustomRulePolicy {
  export type Input = GetCustomRulePolicyRequest;
  export type Output = GetCustomRulePolicyResponse;
  export type Error = NoSuchConfigRuleException | CommonAwsError;
}

export declare namespace GetDiscoveredResourceCounts {
  export type Input = GetDiscoveredResourceCountsRequest;
  export type Output = GetDiscoveredResourceCountsResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOrganizationConfigRuleDetailedStatus {
  export type Input = GetOrganizationConfigRuleDetailedStatusRequest;
  export type Output = GetOrganizationConfigRuleDetailedStatusResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace GetOrganizationConformancePackDetailedStatus {
  export type Input = GetOrganizationConformancePackDetailedStatusRequest;
  export type Output = GetOrganizationConformancePackDetailedStatusResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace GetOrganizationCustomRulePolicy {
  export type Input = GetOrganizationCustomRulePolicyRequest;
  export type Output = GetOrganizationCustomRulePolicyResponse;
  export type Error =
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace GetResourceConfigHistory {
  export type Input = GetResourceConfigHistoryRequest;
  export type Output = GetResourceConfigHistoryResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidTimeRangeException
    | NoAvailableConfigurationRecorderException
    | ResourceNotDiscoveredException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceEvaluationSummary {
  export type Input = GetResourceEvaluationSummaryRequest;
  export type Output = GetResourceEvaluationSummaryResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetStoredQuery {
  export type Input = GetStoredQueryRequest;
  export type Output = GetStoredQueryResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAggregateDiscoveredResources {
  export type Input = ListAggregateDiscoveredResourcesRequest;
  export type Output = ListAggregateDiscoveredResourcesResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfigurationRecorders {
  export type Input = ListConfigurationRecordersRequest;
  export type Output = ListConfigurationRecordersResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListConformancePackComplianceScores {
  export type Input = ListConformancePackComplianceScoresRequest;
  export type Output = ListConformancePackComplianceScoresResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace ListDiscoveredResources {
  export type Input = ListDiscoveredResourcesRequest;
  export type Output = ListDiscoveredResourcesResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoAvailableConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceEvaluations {
  export type Input = ListResourceEvaluationsRequest;
  export type Output = ListResourceEvaluationsResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | InvalidTimeRangeException
    | CommonAwsError;
}

export declare namespace ListStoredQueries {
  export type Input = ListStoredQueriesRequest;
  export type Output = ListStoredQueriesResponse;
  export type Error =
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutAggregationAuthorization {
  export type Input = PutAggregationAuthorizationRequest;
  export type Output = PutAggregationAuthorizationResponse;
  export type Error = InvalidParameterValueException | CommonAwsError;
}

export declare namespace PutConfigRule {
  export type Input = PutConfigRuleRequest;
  export type Output = {};
  export type Error =
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | MaxNumberOfConfigRulesExceededException
    | NoAvailableConfigurationRecorderException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace PutConfigurationAggregator {
  export type Input = PutConfigurationAggregatorRequest;
  export type Output = PutConfigurationAggregatorResponse;
  export type Error =
    | InvalidParameterValueException
    | InvalidRoleException
    | LimitExceededException
    | NoAvailableOrganizationException
    | OrganizationAccessDeniedException
    | OrganizationAllFeaturesNotEnabledException
    | CommonAwsError;
}

export declare namespace PutConfigurationRecorder {
  export type Input = PutConfigurationRecorderRequest;
  export type Output = {};
  export type Error =
    | InvalidConfigurationRecorderNameException
    | InvalidRecordingGroupException
    | InvalidRoleException
    | MaxNumberOfConfigurationRecordersExceededException
    | UnmodifiableEntityException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutConformancePack {
  export type Input = PutConformancePackRequest;
  export type Output = PutConformancePackResponse;
  export type Error =
    | ConformancePackTemplateValidationException
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | MaxNumberOfConformancePacksExceededException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace PutDeliveryChannel {
  export type Input = PutDeliveryChannelRequest;
  export type Output = {};
  export type Error =
    | InsufficientDeliveryPolicyException
    | InvalidDeliveryChannelNameException
    | InvalidS3KeyPrefixException
    | InvalidS3KmsKeyArnException
    | InvalidSNSTopicARNException
    | MaxNumberOfDeliveryChannelsExceededException
    | NoAvailableConfigurationRecorderException
    | NoSuchBucketException
    | CommonAwsError;
}

export declare namespace PutEvaluations {
  export type Input = PutEvaluationsRequest;
  export type Output = PutEvaluationsResponse;
  export type Error =
    | InvalidParameterValueException
    | InvalidResultTokenException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace PutExternalEvaluation {
  export type Input = PutExternalEvaluationRequest;
  export type Output = PutExternalEvaluationResponse;
  export type Error =
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace PutOrganizationConfigRule {
  export type Input = PutOrganizationConfigRuleRequest;
  export type Output = PutOrganizationConfigRuleResponse;
  export type Error =
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | MaxNumberOfOrganizationConfigRulesExceededException
    | NoAvailableOrganizationException
    | OrganizationAccessDeniedException
    | OrganizationAllFeaturesNotEnabledException
    | ResourceInUseException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutOrganizationConformancePack {
  export type Input = PutOrganizationConformancePackRequest;
  export type Output = PutOrganizationConformancePackResponse;
  export type Error =
    | InsufficientPermissionsException
    | MaxNumberOfOrganizationConformancePacksExceededException
    | NoAvailableOrganizationException
    | OrganizationAccessDeniedException
    | OrganizationAllFeaturesNotEnabledException
    | OrganizationConformancePackTemplateValidationException
    | ResourceInUseException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRemediationConfigurations {
  export type Input = PutRemediationConfigurationsRequest;
  export type Output = PutRemediationConfigurationsResponse;
  export type Error =
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace PutRemediationExceptions {
  export type Input = PutRemediationExceptionsRequest;
  export type Output = PutRemediationExceptionsResponse;
  export type Error =
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace PutResourceConfig {
  export type Input = PutResourceConfigRequest;
  export type Output = {};
  export type Error =
    | InsufficientPermissionsException
    | MaxActiveResourcesExceededException
    | NoRunningConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRetentionConfiguration {
  export type Input = PutRetentionConfigurationRequest;
  export type Output = PutRetentionConfigurationResponse;
  export type Error =
    | InvalidParameterValueException
    | MaxNumberOfRetentionConfigurationsExceededException
    | CommonAwsError;
}

export declare namespace PutServiceLinkedConfigurationRecorder {
  export type Input = PutServiceLinkedConfigurationRecorderRequest;
  export type Output = PutServiceLinkedConfigurationRecorderResponse;
  export type Error =
    | ConflictException
    | InsufficientPermissionsException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutStoredQuery {
  export type Input = PutStoredQueryRequest;
  export type Output = PutStoredQueryResponse;
  export type Error =
    | ResourceConcurrentModificationException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SelectAggregateResourceConfig {
  export type Input = SelectAggregateResourceConfigRequest;
  export type Output = SelectAggregateResourceConfigResponse;
  export type Error =
    | InvalidExpressionException
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | CommonAwsError;
}

export declare namespace SelectResourceConfig {
  export type Input = SelectResourceConfigRequest;
  export type Output = SelectResourceConfigResponse;
  export type Error =
    | InvalidExpressionException
    | InvalidLimitException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace StartConfigRulesEvaluation {
  export type Input = StartConfigRulesEvaluationRequest;
  export type Output = StartConfigRulesEvaluationResponse;
  export type Error =
    | InvalidParameterValueException
    | LimitExceededException
    | NoSuchConfigRuleException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace StartConfigurationRecorder {
  export type Input = StartConfigurationRecorderRequest;
  export type Output = {};
  export type Error =
    | NoAvailableDeliveryChannelException
    | NoSuchConfigurationRecorderException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace StartRemediationExecution {
  export type Input = StartRemediationExecutionRequest;
  export type Output = StartRemediationExecutionResponse;
  export type Error =
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | NoSuchRemediationConfigurationException
    | CommonAwsError;
}

export declare namespace StartResourceEvaluation {
  export type Input = StartResourceEvaluationRequest;
  export type Output = StartResourceEvaluationResponse;
  export type Error =
    | IdempotentParameterMismatch
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace StopConfigurationRecorder {
  export type Input = StopConfigurationRecorderRequest;
  export type Output = {};
  export type Error =
    | NoSuchConfigurationRecorderException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
