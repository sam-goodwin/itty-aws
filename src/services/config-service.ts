import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface StarlingDoveService {
  associateResourceTypes(
    input: AssociateResourceTypesRequest,
  ): Effect.Effect<
    {},
    ConflictException | NoSuchConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  batchGetAggregateResourceConfig(
    input: BatchGetAggregateResourceConfigRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigurationAggregatorException | ValidationException | CommonAwsError
  >;
  batchGetResourceConfig(
    input: BatchGetResourceConfigRequest,
  ): Effect.Effect<
    {},
    NoAvailableConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  deleteAggregationAuthorization(
    input: DeleteAggregationAuthorizationRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | CommonAwsError
  >;
  deleteConfigRule(
    input: DeleteConfigRuleRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigRuleException | ResourceInUseException | CommonAwsError
  >;
  deleteConfigurationAggregator(
    input: DeleteConfigurationAggregatorRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigurationAggregatorException | CommonAwsError
  >;
  deleteConfigurationRecorder(
    input: DeleteConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigurationRecorderException | UnmodifiableEntityException | CommonAwsError
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
    LastDeliveryChannelDeleteFailedException | NoSuchDeliveryChannelException | CommonAwsError
  >;
  deleteEvaluationResults(
    input: DeleteEvaluationResultsRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigRuleException | ResourceInUseException | CommonAwsError
  >;
  deleteOrganizationConfigRule(
    input: DeleteOrganizationConfigRuleRequest,
  ): Effect.Effect<
    {},
    NoSuchOrganizationConfigRuleException | OrganizationAccessDeniedException | ResourceInUseException | CommonAwsError
  >;
  deleteOrganizationConformancePack(
    input: DeleteOrganizationConformancePackRequest,
  ): Effect.Effect<
    {},
    NoSuchOrganizationConformancePackException | OrganizationAccessDeniedException | ResourceInUseException | CommonAwsError
  >;
  deletePendingAggregationRequest(
    input: DeletePendingAggregationRequestRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | CommonAwsError
  >;
  deleteRemediationConfiguration(
    input: DeleteRemediationConfigurationRequest,
  ): Effect.Effect<
    {},
    InsufficientPermissionsException | InvalidParameterValueException | NoSuchRemediationConfigurationException | RemediationInProgressException | CommonAwsError
  >;
  deleteRemediationExceptions(
    input: DeleteRemediationExceptionsRequest,
  ): Effect.Effect<
    {},
    NoSuchRemediationExceptionException | CommonAwsError
  >;
  deleteResourceConfig(
    input: DeleteResourceConfigRequest,
  ): Effect.Effect<
    {},
    NoRunningConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  deleteRetentionConfiguration(
    input: DeleteRetentionConfigurationRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | NoSuchRetentionConfigurationException | CommonAwsError
  >;
  deleteServiceLinkedConfigurationRecorder(
    input: DeleteServiceLinkedConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    ConflictException | NoSuchConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  deleteStoredQuery(
    input: DeleteStoredQueryRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deliverConfigSnapshot(
    input: DeliverConfigSnapshotRequest,
  ): Effect.Effect<
    {},
    NoAvailableConfigurationRecorderException | NoRunningConfigurationRecorderException | NoSuchDeliveryChannelException | CommonAwsError
  >;
  describeAggregateComplianceByConfigRules(
    input: DescribeAggregateComplianceByConfigRulesRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchConfigurationAggregatorException | ValidationException | CommonAwsError
  >;
  describeAggregateComplianceByConformancePacks(
    input: DescribeAggregateComplianceByConformancePacksRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchConfigurationAggregatorException | ValidationException | CommonAwsError
  >;
  describeAggregationAuthorizations(
    input: DescribeAggregationAuthorizationsRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidParameterValueException | CommonAwsError
  >;
  describeComplianceByConfigRule(
    input: DescribeComplianceByConfigRuleRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | InvalidParameterValueException | NoSuchConfigRuleException | CommonAwsError
  >;
  describeComplianceByResource(
    input: DescribeComplianceByResourceRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | InvalidParameterValueException | CommonAwsError
  >;
  describeConfigRuleEvaluationStatus(
    input: DescribeConfigRuleEvaluationStatusRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | InvalidParameterValueException | NoSuchConfigRuleException | CommonAwsError
  >;
  describeConfigRules(
    input: DescribeConfigRulesRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | InvalidParameterValueException | NoSuchConfigRuleException | CommonAwsError
  >;
  describeConfigurationAggregatorSourcesStatus(
    input: DescribeConfigurationAggregatorSourcesStatusRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidParameterValueException | NoSuchConfigurationAggregatorException | CommonAwsError
  >;
  describeConfigurationAggregators(
    input: DescribeConfigurationAggregatorsRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidParameterValueException | NoSuchConfigurationAggregatorException | CommonAwsError
  >;
  describeConfigurationRecorderStatus(
    input: DescribeConfigurationRecorderStatusRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  describeConfigurationRecorders(
    input: DescribeConfigurationRecordersRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  describeConformancePackCompliance(
    input: DescribeConformancePackComplianceRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidParameterValueException | NoSuchConfigRuleInConformancePackException | NoSuchConformancePackException | CommonAwsError
  >;
  describeConformancePackStatus(
    input: DescribeConformancePackStatusRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidParameterValueException | CommonAwsError
  >;
  describeConformancePacks(
    input: DescribeConformancePacksRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidParameterValueException | NoSuchConformancePackException | CommonAwsError
  >;
  describeDeliveryChannelStatus(
    input: DescribeDeliveryChannelStatusRequest,
  ): Effect.Effect<
    {},
    NoSuchDeliveryChannelException | CommonAwsError
  >;
  describeDeliveryChannels(
    input: DescribeDeliveryChannelsRequest,
  ): Effect.Effect<
    {},
    NoSuchDeliveryChannelException | CommonAwsError
  >;
  describeOrganizationConfigRuleStatuses(
    input: DescribeOrganizationConfigRuleStatusesRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchOrganizationConfigRuleException | OrganizationAccessDeniedException | CommonAwsError
  >;
  describeOrganizationConfigRules(
    input: DescribeOrganizationConfigRulesRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchOrganizationConfigRuleException | OrganizationAccessDeniedException | CommonAwsError
  >;
  describeOrganizationConformancePackStatuses(
    input: DescribeOrganizationConformancePackStatusesRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchOrganizationConformancePackException | OrganizationAccessDeniedException | CommonAwsError
  >;
  describeOrganizationConformancePacks(
    input: DescribeOrganizationConformancePacksRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchOrganizationConformancePackException | OrganizationAccessDeniedException | CommonAwsError
  >;
  describePendingAggregationRequests(
    input: DescribePendingAggregationRequestsRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidParameterValueException | CommonAwsError
  >;
  describeRemediationConfigurations(
    input: DescribeRemediationConfigurationsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  describeRemediationExceptions(
    input: DescribeRemediationExceptionsRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | InvalidParameterValueException | CommonAwsError
  >;
  describeRemediationExecutionStatus(
    input: DescribeRemediationExecutionStatusRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | InvalidParameterValueException | NoSuchRemediationConfigurationException | CommonAwsError
  >;
  describeRetentionConfigurations(
    input: DescribeRetentionConfigurationsRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | InvalidParameterValueException | NoSuchRetentionConfigurationException | CommonAwsError
  >;
  disassociateResourceTypes(
    input: DisassociateResourceTypesRequest,
  ): Effect.Effect<
    {},
    ConflictException | NoSuchConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  getAggregateComplianceDetailsByConfigRule(
    input: GetAggregateComplianceDetailsByConfigRuleRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchConfigurationAggregatorException | ValidationException | CommonAwsError
  >;
  getAggregateConfigRuleComplianceSummary(
    input: GetAggregateConfigRuleComplianceSummaryRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchConfigurationAggregatorException | ValidationException | CommonAwsError
  >;
  getAggregateConformancePackComplianceSummary(
    input: GetAggregateConformancePackComplianceSummaryRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchConfigurationAggregatorException | ValidationException | CommonAwsError
  >;
  getAggregateDiscoveredResourceCounts(
    input: GetAggregateDiscoveredResourceCountsRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchConfigurationAggregatorException | ValidationException | CommonAwsError
  >;
  getAggregateResourceConfig(
    input: GetAggregateResourceConfigRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigurationAggregatorException | OversizedConfigurationItemException | ResourceNotDiscoveredException | ValidationException | CommonAwsError
  >;
  getComplianceDetailsByConfigRule(
    input: GetComplianceDetailsByConfigRuleRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | InvalidParameterValueException | NoSuchConfigRuleException | CommonAwsError
  >;
  getComplianceDetailsByResource(
    input: GetComplianceDetailsByResourceRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | CommonAwsError
  >;
  getComplianceSummaryByConfigRule(
    input: {},
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getComplianceSummaryByResourceType(
    input: GetComplianceSummaryByResourceTypeRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | CommonAwsError
  >;
  getConformancePackComplianceDetails(
    input: GetConformancePackComplianceDetailsRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidParameterValueException | NoSuchConfigRuleInConformancePackException | NoSuchConformancePackException | CommonAwsError
  >;
  getConformancePackComplianceSummary(
    input: GetConformancePackComplianceSummaryRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchConformancePackException | CommonAwsError
  >;
  getCustomRulePolicy(
    input: GetCustomRulePolicyRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigRuleException | CommonAwsError
  >;
  getDiscoveredResourceCounts(
    input: GetDiscoveredResourceCountsRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  getOrganizationConfigRuleDetailedStatus(
    input: GetOrganizationConfigRuleDetailedStatusRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchOrganizationConfigRuleException | OrganizationAccessDeniedException | CommonAwsError
  >;
  getOrganizationConformancePackDetailedStatus(
    input: GetOrganizationConformancePackDetailedStatusRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchOrganizationConformancePackException | OrganizationAccessDeniedException | CommonAwsError
  >;
  getOrganizationCustomRulePolicy(
    input: GetOrganizationCustomRulePolicyRequest,
  ): Effect.Effect<
    {},
    NoSuchOrganizationConfigRuleException | OrganizationAccessDeniedException | CommonAwsError
  >;
  getResourceConfigHistory(
    input: GetResourceConfigHistoryRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidTimeRangeException | NoAvailableConfigurationRecorderException | ResourceNotDiscoveredException | ValidationException | CommonAwsError
  >;
  getResourceEvaluationSummary(
    input: GetResourceEvaluationSummaryRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | CommonAwsError
  >;
  getStoredQuery(
    input: GetStoredQueryRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listAggregateDiscoveredResources(
    input: ListAggregateDiscoveredResourcesRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoSuchConfigurationAggregatorException | ValidationException | CommonAwsError
  >;
  listConfigurationRecorders(
    input: ListConfigurationRecordersRequest,
  ): Effect.Effect<
    {},
    ValidationException | CommonAwsError
  >;
  listConformancePackComplianceScores(
    input: ListConformancePackComplianceScoresRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | InvalidParameterValueException | CommonAwsError
  >;
  listDiscoveredResources(
    input: ListDiscoveredResourcesRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | NoAvailableConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  listResourceEvaluations(
    input: ListResourceEvaluationsRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | InvalidParameterValueException | InvalidTimeRangeException | CommonAwsError
  >;
  listStoredQueries(
    input: ListStoredQueriesRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InvalidLimitException | InvalidNextTokenException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  putAggregationAuthorization(
    input: PutAggregationAuthorizationRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | CommonAwsError
  >;
  putConfigRule(
    input: PutConfigRuleRequest,
  ): Effect.Effect<
    {},
    InsufficientPermissionsException | InvalidParameterValueException | MaxNumberOfConfigRulesExceededException | NoAvailableConfigurationRecorderException | ResourceInUseException | CommonAwsError
  >;
  putConfigurationAggregator(
    input: PutConfigurationAggregatorRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | InvalidRoleException | LimitExceededException | NoAvailableOrganizationException | OrganizationAccessDeniedException | OrganizationAllFeaturesNotEnabledException | CommonAwsError
  >;
  putConfigurationRecorder(
    input: PutConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    InvalidConfigurationRecorderNameException | InvalidRecordingGroupException | InvalidRoleException | MaxNumberOfConfigurationRecordersExceededException | UnmodifiableEntityException | ValidationException | CommonAwsError
  >;
  putConformancePack(
    input: PutConformancePackRequest,
  ): Effect.Effect<
    {},
    ConformancePackTemplateValidationException | InsufficientPermissionsException | InvalidParameterValueException | MaxNumberOfConformancePacksExceededException | ResourceInUseException | CommonAwsError
  >;
  putDeliveryChannel(
    input: PutDeliveryChannelRequest,
  ): Effect.Effect<
    {},
    InsufficientDeliveryPolicyException | InvalidDeliveryChannelNameException | InvalidS3KeyPrefixException | InvalidS3KmsKeyArnException | InvalidSNSTopicARNException | MaxNumberOfDeliveryChannelsExceededException | NoAvailableConfigurationRecorderException | NoSuchBucketException | CommonAwsError
  >;
  putEvaluations(
    input: PutEvaluationsRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | InvalidResultTokenException | NoSuchConfigRuleException | CommonAwsError
  >;
  putExternalEvaluation(
    input: PutExternalEvaluationRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | NoSuchConfigRuleException | CommonAwsError
  >;
  putOrganizationConfigRule(
    input: PutOrganizationConfigRuleRequest,
  ): Effect.Effect<
    {},
    InsufficientPermissionsException | InvalidParameterValueException | MaxNumberOfOrganizationConfigRulesExceededException | NoAvailableOrganizationException | OrganizationAccessDeniedException | OrganizationAllFeaturesNotEnabledException | ResourceInUseException | ValidationException | CommonAwsError
  >;
  putOrganizationConformancePack(
    input: PutOrganizationConformancePackRequest,
  ): Effect.Effect<
    {},
    InsufficientPermissionsException | MaxNumberOfOrganizationConformancePacksExceededException | NoAvailableOrganizationException | OrganizationAccessDeniedException | OrganizationAllFeaturesNotEnabledException | OrganizationConformancePackTemplateValidationException | ResourceInUseException | ValidationException | CommonAwsError
  >;
  putRemediationConfigurations(
    input: PutRemediationConfigurationsRequest,
  ): Effect.Effect<
    {},
    InsufficientPermissionsException | InvalidParameterValueException | CommonAwsError
  >;
  putRemediationExceptions(
    input: PutRemediationExceptionsRequest,
  ): Effect.Effect<
    {},
    InsufficientPermissionsException | InvalidParameterValueException | CommonAwsError
  >;
  putResourceConfig(
    input: PutResourceConfigRequest,
  ): Effect.Effect<
    {},
    InsufficientPermissionsException | MaxActiveResourcesExceededException | NoRunningConfigurationRecorderException | ValidationException | CommonAwsError
  >;
  putRetentionConfiguration(
    input: PutRetentionConfigurationRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | MaxNumberOfRetentionConfigurationsExceededException | CommonAwsError
  >;
  putServiceLinkedConfigurationRecorder(
    input: PutServiceLinkedConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    ConflictException | InsufficientPermissionsException | LimitExceededException | ValidationException | CommonAwsError
  >;
  putStoredQuery(
    input: PutStoredQueryRequest,
  ): Effect.Effect<
    {},
    ResourceConcurrentModificationException | TooManyTagsException | ValidationException | CommonAwsError
  >;
  selectAggregateResourceConfig(
    input: SelectAggregateResourceConfigRequest,
  ): Effect.Effect<
    {},
    InvalidExpressionException | InvalidLimitException | InvalidNextTokenException | NoSuchConfigurationAggregatorException | CommonAwsError
  >;
  selectResourceConfig(
    input: SelectResourceConfigRequest,
  ): Effect.Effect<
    {},
    InvalidExpressionException | InvalidLimitException | InvalidNextTokenException | CommonAwsError
  >;
  startConfigRulesEvaluation(
    input: StartConfigRulesEvaluationRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | LimitExceededException | NoSuchConfigRuleException | ResourceInUseException | CommonAwsError
  >;
  startConfigurationRecorder(
    input: StartConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    NoAvailableDeliveryChannelException | NoSuchConfigurationRecorderException | UnmodifiableEntityException | CommonAwsError
  >;
  startRemediationExecution(
    input: StartRemediationExecutionRequest,
  ): Effect.Effect<
    {},
    InsufficientPermissionsException | InvalidParameterValueException | NoSuchRemediationConfigurationException | CommonAwsError
  >;
  startResourceEvaluation(
    input: StartResourceEvaluationRequest,
  ): Effect.Effect<
    {},
    IdempotentParameterMismatch | InvalidParameterValueException | CommonAwsError
  >;
  stopConfigurationRecorder(
    input: StopConfigurationRecorderRequest,
  ): Effect.Effect<
    {},
    NoSuchConfigurationRecorderException | UnmodifiableEntityException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | TooManyTagsException | ValidationException | CommonAwsError
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
}
export type AccountAggregationSourceAccountList = Array<unknown>;
export type AccountAggregationSourceList = Array<unknown>;
export type AccountId = string;

export interface AggregateComplianceByConfigRule {
}
export type AggregateComplianceByConfigRuleList = Array<unknown>;
export interface AggregateComplianceByConformancePack {
}
export type AggregateComplianceByConformancePackList = Array<unknown>;
export interface AggregateComplianceCount {
}
export type AggregateComplianceCountList = Array<unknown>;
export interface AggregateConformancePackCompliance {
}
export interface AggregateConformancePackComplianceCount {
}
export interface AggregateConformancePackComplianceFilters {
}
export interface AggregateConformancePackComplianceSummary {
}
export interface AggregateConformancePackComplianceSummaryFilters {
}
export type AggregateConformancePackComplianceSummaryGroupKey = never;
export type AggregateConformancePackComplianceSummaryList = Array<unknown>;
export interface AggregatedSourceStatus {
}
export type AggregatedSourceStatusList = Array<unknown>;
export type AggregatedSourceStatusType = never;
export type AggregatedSourceStatusTypeList = Array<unknown>;
export type AggregatedSourceType = never;
export interface AggregateEvaluationResult {
}
export type AggregateEvaluationResultList = Array<unknown>;
export interface AggregateResourceIdentifier {
}
export interface AggregationAuthorization {
}
export type AggregationAuthorizationList = Array<unknown>;
export interface AggregatorFilterResourceType {
}
export interface AggregatorFilters {
}
export interface AggregatorFilterServicePrincipal {
}
export type AggregatorFilterType = never;
export type AggregatorRegionList = Array<unknown>;
export type AllSupported = boolean;

export type AmazonResourceName = string;

export type Annotation = string;

export type ARN = string;

export interface AssociateResourceTypesRequest {
}
export interface AssociateResourceTypesResponse {
}
export type AutoRemediationAttempts = number;

export type AutoRemediationAttemptSeconds = number;

export type AvailabilityZone = string;

export type AwsRegion = string;

export interface BaseConfigurationItem {
}
export type BaseConfigurationItems = Array<unknown>;
export type BaseResourceId = string;

export interface BatchGetAggregateResourceConfigRequest {
}
export interface BatchGetAggregateResourceConfigResponse {
}
export interface BatchGetResourceConfigRequest {
}
export interface BatchGetResourceConfigResponse {
}
export type ChannelName = string;

export type ChronologicalOrder = never;
export type ClientToken = string;

export interface Compliance {
}
export interface ComplianceByConfigRule {
}
export type ComplianceByConfigRules = Array<unknown>;
export interface ComplianceByResource {
}
export type ComplianceByResources = Array<unknown>;
export interface ComplianceContributorCount {
}
export type ComplianceResourceTypes = Array<unknown>;
export type ComplianceScore = string;

export type ComplianceSummariesByResourceType = Array<unknown>;
export interface ComplianceSummary {
}
export interface ComplianceSummaryByResourceType {
}
export type ComplianceType = never;
export type ComplianceTypes = Array<unknown>;
export interface ConfigExportDeliveryInfo {
}
export interface ConfigRule {
}
export interface ConfigRuleComplianceFilters {
}
export interface ConfigRuleComplianceSummaryFilters {
}
export type ConfigRuleComplianceSummaryGroupKey = never;
export interface ConfigRuleEvaluationStatus {
}
export type ConfigRuleEvaluationStatusList = Array<unknown>;
export type ConfigRuleName = string;

export type ConfigRuleNames = Array<unknown>;
export type ConfigRules = Array<unknown>;
export type ConfigRuleState = never;
export interface ConfigSnapshotDeliveryProperties {
}
export interface ConfigStreamDeliveryInfo {
}
export type Configuration = string;

export interface ConfigurationAggregator {
}
export type ConfigurationAggregatorArn = string;

export type ConfigurationAggregatorList = Array<unknown>;
export type ConfigurationAggregatorName = string;

export type ConfigurationAggregatorNameList = Array<unknown>;
export interface ConfigurationItem {
}
export type ConfigurationItemCaptureTime = Date | string;

export type ConfigurationItemDeliveryTime = Date | string;

export type ConfigurationItemList = Array<unknown>;
export type ConfigurationItemMD5Hash = string;

export type ConfigurationItemStatus = never;
export interface ConfigurationRecorder {
}
export interface ConfigurationRecorderFilter {
}
export type ConfigurationRecorderFilterList = Array<unknown>;
export type ConfigurationRecorderFilterName = never;
export type ConfigurationRecorderFilterValue = string;

export type ConfigurationRecorderFilterValues = Array<unknown>;
export type ConfigurationRecorderList = Array<unknown>;
export type ConfigurationRecorderNameList = Array<unknown>;
export interface ConfigurationRecorderStatus {
}
export type ConfigurationRecorderStatusList = Array<unknown>;
export type ConfigurationRecorderSummaries = Array<unknown>;
export interface ConfigurationRecorderSummary {
}
export type ConfigurationStateId = string;

export interface ConflictException {
}
export type ConformancePackArn = string;

export interface ConformancePackComplianceFilters {
}
export type ConformancePackComplianceResourceIds = Array<unknown>;
export interface ConformancePackComplianceScore {
}
export type ConformancePackComplianceScores = Array<unknown>;
export interface ConformancePackComplianceScoresFilters {
}
export interface ConformancePackComplianceSummary {
}
export type ConformancePackComplianceSummaryList = Array<unknown>;
export type ConformancePackComplianceType = never;
export type ConformancePackConfigRuleNames = Array<unknown>;
export interface ConformancePackDetail {
}
export type ConformancePackDetailList = Array<unknown>;
export interface ConformancePackEvaluationFilters {
}
export interface ConformancePackEvaluationResult {
}
export type ConformancePackId = string;

export interface ConformancePackInputParameter {
}
export type ConformancePackInputParameters = Array<unknown>;
export type ConformancePackName = string;

export type ConformancePackNameFilter = Array<unknown>;
export type ConformancePackNamesList = Array<unknown>;
export type ConformancePackNamesToSummarizeList = Array<unknown>;
export interface ConformancePackRuleCompliance {
}
export type ConformancePackRuleComplianceList = Array<unknown>;
export type ConformancePackRuleEvaluationResultsList = Array<unknown>;
export type ConformancePackState = never;
export interface ConformancePackStatusDetail {
}
export type ConformancePackStatusDetailsList = Array<unknown>;
export type ConformancePackStatusReason = string;

export interface ConformancePackTemplateValidationException {
}
export type ControlsList = Array<unknown>;
export type CosmosPageLimit = number;

export interface CustomPolicyDetails {
}
export type DebugLogDeliveryAccounts = Array<unknown>;
export interface DeleteAggregationAuthorizationRequest {
}
export interface DeleteConfigRuleRequest {
}
export interface DeleteConfigurationAggregatorRequest {
}
export interface DeleteConfigurationRecorderRequest {
}
export interface DeleteConformancePackRequest {
}
export interface DeleteDeliveryChannelRequest {
}
export interface DeleteEvaluationResultsRequest {
}
export interface DeleteEvaluationResultsResponse {
}
export interface DeleteOrganizationConfigRuleRequest {
}
export interface DeleteOrganizationConformancePackRequest {
}
export interface DeletePendingAggregationRequestRequest {
}
export interface DeleteRemediationConfigurationRequest {
}
export interface DeleteRemediationConfigurationResponse {
}
export interface DeleteRemediationExceptionsRequest {
}
export interface DeleteRemediationExceptionsResponse {
}
export interface DeleteResourceConfigRequest {
}
export interface DeleteRetentionConfigurationRequest {
}
export interface DeleteServiceLinkedConfigurationRecorderRequest {
}
export interface DeleteServiceLinkedConfigurationRecorderResponse {
}
export interface DeleteStoredQueryRequest {
}
export interface DeleteStoredQueryResponse {
}
export interface DeliverConfigSnapshotRequest {
}
export interface DeliverConfigSnapshotResponse {
}
export interface DeliveryChannel {
}
export type DeliveryChannelList = Array<unknown>;
export type DeliveryChannelNameList = Array<unknown>;
export interface DeliveryChannelStatus {
}
export type DeliveryChannelStatusList = Array<unknown>;
export type DeliveryS3Bucket = string;

export type DeliveryS3KeyPrefix = string;

export type DeliveryStatus = never;
export interface DescribeAggregateComplianceByConfigRulesRequest {
}
export interface DescribeAggregateComplianceByConfigRulesResponse {
}
export interface DescribeAggregateComplianceByConformancePacksRequest {
}
export interface DescribeAggregateComplianceByConformancePacksResponse {
}
export interface DescribeAggregationAuthorizationsRequest {
}
export interface DescribeAggregationAuthorizationsResponse {
}
export interface DescribeComplianceByConfigRuleRequest {
}
export interface DescribeComplianceByConfigRuleResponse {
}
export interface DescribeComplianceByResourceRequest {
}
export interface DescribeComplianceByResourceResponse {
}
export interface DescribeConfigRuleEvaluationStatusRequest {
}
export interface DescribeConfigRuleEvaluationStatusResponse {
}
export interface DescribeConfigRulesFilters {
}
export interface DescribeConfigRulesRequest {
}
export interface DescribeConfigRulesResponse {
}
export interface DescribeConfigurationAggregatorSourcesStatusRequest {
}
export interface DescribeConfigurationAggregatorSourcesStatusResponse {
}
export interface DescribeConfigurationAggregatorsRequest {
}
export interface DescribeConfigurationAggregatorsResponse {
}
export interface DescribeConfigurationRecordersRequest {
}
export interface DescribeConfigurationRecordersResponse {
}
export interface DescribeConfigurationRecorderStatusRequest {
}
export interface DescribeConfigurationRecorderStatusResponse {
}
export type DescribeConformancePackComplianceLimit = number;

export interface DescribeConformancePackComplianceRequest {
}
export interface DescribeConformancePackComplianceResponse {
}
export interface DescribeConformancePacksRequest {
}
export interface DescribeConformancePacksResponse {
}
export interface DescribeConformancePackStatusRequest {
}
export interface DescribeConformancePackStatusResponse {
}
export interface DescribeDeliveryChannelsRequest {
}
export interface DescribeDeliveryChannelsResponse {
}
export interface DescribeDeliveryChannelStatusRequest {
}
export interface DescribeDeliveryChannelStatusResponse {
}
export interface DescribeOrganizationConfigRulesRequest {
}
export interface DescribeOrganizationConfigRulesResponse {
}
export interface DescribeOrganizationConfigRuleStatusesRequest {
}
export interface DescribeOrganizationConfigRuleStatusesResponse {
}
export interface DescribeOrganizationConformancePacksRequest {
}
export interface DescribeOrganizationConformancePacksResponse {
}
export interface DescribeOrganizationConformancePackStatusesRequest {
}
export interface DescribeOrganizationConformancePackStatusesResponse {
}
export type DescribePendingAggregationRequestsLimit = number;

export interface DescribePendingAggregationRequestsRequest {
}
export interface DescribePendingAggregationRequestsResponse {
}
export interface DescribeRemediationConfigurationsRequest {
}
export interface DescribeRemediationConfigurationsResponse {
}
export interface DescribeRemediationExceptionsRequest {
}
export interface DescribeRemediationExceptionsResponse {
}
export interface DescribeRemediationExecutionStatusRequest {
}
export interface DescribeRemediationExecutionStatusResponse {
}
export interface DescribeRetentionConfigurationsRequest {
}
export interface DescribeRetentionConfigurationsResponse {
}
export type Description = string;

export interface DisassociateResourceTypesRequest {
}
export interface DisassociateResourceTypesResponse {
}
export type DiscoveredResourceIdentifierList = Array<unknown>;
export type EarlierTime = Date | string;

export type EmptiableStringWithCharLimit256 = string;

export type ErrorMessage = string;

export interface Evaluation {
}
export interface EvaluationContext {
}
export type EvaluationContextIdentifier = string;

export type EvaluationMode = never;
export interface EvaluationModeConfiguration {
}
export type EvaluationModes = Array<unknown>;
export interface EvaluationResult {
}
export interface EvaluationResultIdentifier {
}
export interface EvaluationResultQualifier {
}
export type EvaluationResults = Array<unknown>;
export type Evaluations = Array<unknown>;
export interface EvaluationStatus {
}
export type EvaluationTimeout = number;

export type EventSource = never;
export type ExcludedAccounts = Array<unknown>;
export interface ExclusionByResourceTypes {
}
export interface ExecutionControls {
}
export type Expression = string;

export interface ExternalEvaluation {
}
export interface FailedDeleteRemediationExceptionsBatch {
}
export type FailedDeleteRemediationExceptionsBatches = Array<unknown>;
export interface FailedRemediationBatch {
}
export type FailedRemediationBatches = Array<unknown>;
export interface FailedRemediationExceptionBatch {
}
export type FailedRemediationExceptionBatches = Array<unknown>;
export interface FieldInfo {
}
export type FieldInfoList = Array<unknown>;
export type FieldName = string;

export interface GetAggregateComplianceDetailsByConfigRuleRequest {
}
export interface GetAggregateComplianceDetailsByConfigRuleResponse {
}
export interface GetAggregateConfigRuleComplianceSummaryRequest {
}
export interface GetAggregateConfigRuleComplianceSummaryResponse {
}
export interface GetAggregateConformancePackComplianceSummaryRequest {
}
export interface GetAggregateConformancePackComplianceSummaryResponse {
}
export interface GetAggregateDiscoveredResourceCountsRequest {
}
export interface GetAggregateDiscoveredResourceCountsResponse {
}
export interface GetAggregateResourceConfigRequest {
}
export interface GetAggregateResourceConfigResponse {
}
export interface GetComplianceDetailsByConfigRuleRequest {
}
export interface GetComplianceDetailsByConfigRuleResponse {
}
export interface GetComplianceDetailsByResourceRequest {
}
export interface GetComplianceDetailsByResourceResponse {
}
export interface GetComplianceSummaryByConfigRuleResponse {
}
export interface GetComplianceSummaryByResourceTypeRequest {
}
export interface GetComplianceSummaryByResourceTypeResponse {
}
export type GetConformancePackComplianceDetailsLimit = number;

export interface GetConformancePackComplianceDetailsRequest {
}
export interface GetConformancePackComplianceDetailsResponse {
}
export interface GetConformancePackComplianceSummaryRequest {
}
export interface GetConformancePackComplianceSummaryResponse {
}
export interface GetCustomRulePolicyRequest {
}
export interface GetCustomRulePolicyResponse {
}
export interface GetDiscoveredResourceCountsRequest {
}
export interface GetDiscoveredResourceCountsResponse {
}
export interface GetOrganizationConfigRuleDetailedStatusRequest {
}
export interface GetOrganizationConfigRuleDetailedStatusResponse {
}
export interface GetOrganizationConformancePackDetailedStatusRequest {
}
export interface GetOrganizationConformancePackDetailedStatusResponse {
}
export interface GetOrganizationCustomRulePolicyRequest {
}
export interface GetOrganizationCustomRulePolicyResponse {
}
export interface GetResourceConfigHistoryRequest {
}
export interface GetResourceConfigHistoryResponse {
}
export interface GetResourceEvaluationSummaryRequest {
}
export interface GetResourceEvaluationSummaryResponse {
}
export interface GetStoredQueryRequest {
}
export interface GetStoredQueryResponse {
}
export type GroupByAPILimit = number;

export interface GroupedResourceCount {
}
export type GroupedResourceCountList = Array<unknown>;
export interface IdempotentParameterMismatch {
}
export type IncludeGlobalResourceTypes = boolean;

export interface InsufficientDeliveryPolicyException {
}
export interface InsufficientPermissionsException {
}
export type Integer = number;

export interface InvalidConfigurationRecorderNameException {
}
export interface InvalidDeliveryChannelNameException {
}
export interface InvalidExpressionException {
}
export interface InvalidLimitException {
}
export interface InvalidNextTokenException {
}
export interface InvalidParameterValueException {
}
export interface InvalidRecordingGroupException {
}
export interface InvalidResultTokenException {
}
export interface InvalidRoleException {
}
export interface InvalidS3KeyPrefixException {
}
export interface InvalidS3KmsKeyArnException {
}
export interface InvalidSNSTopicARNException {
}
export interface InvalidTimeRangeException {
}
export interface LastDeliveryChannelDeleteFailedException {
}
export type LastUpdatedTime = Date | string;

export type LaterTime = Date | string;

export type Limit = number;

export interface LimitExceededException {
}
export interface ListAggregateDiscoveredResourcesRequest {
}
export interface ListAggregateDiscoveredResourcesResponse {
}
export interface ListConfigurationRecordersRequest {
}
export interface ListConfigurationRecordersResponse {
}
export interface ListConformancePackComplianceScoresRequest {
}
export interface ListConformancePackComplianceScoresResponse {
}
export interface ListDiscoveredResourcesRequest {
}
export interface ListDiscoveredResourcesResponse {
}
export type ListResourceEvaluationsPageItemLimit = number;

export interface ListResourceEvaluationsRequest {
}
export interface ListResourceEvaluationsResponse {
}
export interface ListStoredQueriesRequest {
}
export interface ListStoredQueriesResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type Long = number;

export interface MaxActiveResourcesExceededException {
}
export type MaximumExecutionFrequency = never;
export interface MaxNumberOfConfigRulesExceededException {
}
export interface MaxNumberOfConfigurationRecordersExceededException {
}
export interface MaxNumberOfConformancePacksExceededException {
}
export interface MaxNumberOfDeliveryChannelsExceededException {
}
export interface MaxNumberOfOrganizationConfigRulesExceededException {
}
export interface MaxNumberOfOrganizationConformancePacksExceededException {
}
export interface MaxNumberOfRetentionConfigurationsExceededException {
}
export type MaxResults = number;

export type MemberAccountRuleStatus = never;
export interface MemberAccountStatus {
}
export type MessageType = never;
export type Name = string;

export type NextToken = string;

export interface NoAvailableConfigurationRecorderException {
}
export interface NoAvailableDeliveryChannelException {
}
export interface NoAvailableOrganizationException {
}
export interface NoRunningConfigurationRecorderException {
}
export interface NoSuchBucketException {
}
export interface NoSuchConfigRuleException {
}
export interface NoSuchConfigRuleInConformancePackException {
}
export interface NoSuchConfigurationAggregatorException {
}
export interface NoSuchConfigurationRecorderException {
}
export interface NoSuchConformancePackException {
}
export interface NoSuchDeliveryChannelException {
}
export interface NoSuchOrganizationConfigRuleException {
}
export interface NoSuchOrganizationConformancePackException {
}
export interface NoSuchRemediationConfigurationException {
}
export interface NoSuchRemediationExceptionException {
}
export interface NoSuchRetentionConfigurationException {
}
export type OrderingTimestamp = Date | string;

export interface OrganizationAccessDeniedException {
}
export interface OrganizationAggregationSource {
}
export interface OrganizationAllFeaturesNotEnabledException {
}
export interface OrganizationConfigRule {
}
export type OrganizationConfigRuleDetailedStatus = Array<unknown>;
export type OrganizationConfigRuleName = string;

export type OrganizationConfigRuleNames = Array<unknown>;
export type OrganizationConfigRules = Array<unknown>;
export interface OrganizationConfigRuleStatus {
}
export type OrganizationConfigRuleStatuses = Array<unknown>;
export type OrganizationConfigRuleTriggerType = never;
export type OrganizationConfigRuleTriggerTypeNoSN = never;
export type OrganizationConfigRuleTriggerTypeNoSNs = Array<unknown>;
export type OrganizationConfigRuleTriggerTypes = Array<unknown>;
export interface OrganizationConformancePack {
}
export interface OrganizationConformancePackDetailedStatus {
}
export type OrganizationConformancePackDetailedStatuses = Array<unknown>;
export type OrganizationConformancePackName = string;

export type OrganizationConformancePackNames = Array<unknown>;
export type OrganizationConformancePacks = Array<unknown>;
export interface OrganizationConformancePackStatus {
}
export type OrganizationConformancePackStatuses = Array<unknown>;
export interface OrganizationConformancePackTemplateValidationException {
}
export interface OrganizationCustomPolicyRuleMetadata {
}
export interface OrganizationCustomPolicyRuleMetadataNoPolicy {
}
export interface OrganizationCustomRuleMetadata {
}
export interface OrganizationManagedRuleMetadata {
}
export type OrganizationResourceDetailedStatus = never;
export interface OrganizationResourceDetailedStatusFilters {
}
export type OrganizationResourceStatus = never;
export type OrganizationRuleStatus = never;
export interface OversizedConfigurationItemException {
}
export type Owner = never;
export type PageSizeLimit = number;

export type ParameterName = string;

export type ParameterValue = string;

export interface PendingAggregationRequest {
}
export type PendingAggregationRequestList = Array<unknown>;
export type Percentage = number;

export type PolicyRuntime = string;

export type PolicyText = string;

export interface PutAggregationAuthorizationRequest {
}
export interface PutAggregationAuthorizationResponse {
}
export interface PutConfigRuleRequest {
}
export interface PutConfigurationAggregatorRequest {
}
export interface PutConfigurationAggregatorResponse {
}
export interface PutConfigurationRecorderRequest {
}
export interface PutConformancePackRequest {
}
export interface PutConformancePackResponse {
}
export interface PutDeliveryChannelRequest {
}
export interface PutEvaluationsRequest {
}
export interface PutEvaluationsResponse {
}
export interface PutExternalEvaluationRequest {
}
export interface PutExternalEvaluationResponse {
}
export interface PutOrganizationConfigRuleRequest {
}
export interface PutOrganizationConfigRuleResponse {
}
export interface PutOrganizationConformancePackRequest {
}
export interface PutOrganizationConformancePackResponse {
}
export interface PutRemediationConfigurationsRequest {
}
export interface PutRemediationConfigurationsResponse {
}
export interface PutRemediationExceptionsRequest {
}
export interface PutRemediationExceptionsResponse {
}
export interface PutResourceConfigRequest {
}
export interface PutRetentionConfigurationRequest {
}
export interface PutRetentionConfigurationResponse {
}
export interface PutServiceLinkedConfigurationRecorderRequest {
}
export interface PutServiceLinkedConfigurationRecorderResponse {
}
export interface PutStoredQueryRequest {
}
export interface PutStoredQueryResponse {
}
export type QueryArn = string;

export type QueryDescription = string;

export type QueryExpression = string;

export type QueryId = string;

export interface QueryInfo {
}
export type QueryName = string;

export type RecorderName = string;

export type RecorderStatus = never;
export type RecordingFrequency = never;
export interface RecordingGroup {
}
export interface RecordingMode {
}
export interface RecordingModeOverride {
}
export type RecordingModeOverrides = Array<unknown>;
export type RecordingModeResourceTypesList = Array<unknown>;
export type RecordingScope = never;
export interface RecordingStrategy {
}
export type RecordingStrategyType = never;
export type ReevaluateConfigRuleNames = Array<unknown>;
export type RelatedEvent = string;

export type RelatedEventList = Array<unknown>;
export interface Relationship {
}
export type RelationshipList = Array<unknown>;
export type RelationshipName = string;

export interface RemediationConfiguration {
}
export type RemediationConfigurations = Array<unknown>;
export interface RemediationException {
}
export interface RemediationExceptionResourceKey {
}
export type RemediationExceptionResourceKeys = Array<unknown>;
export type RemediationExceptions = Array<unknown>;
export type RemediationExecutionState = never;
export interface RemediationExecutionStatus {
}
export type RemediationExecutionStatuses = Array<unknown>;
export interface RemediationExecutionStep {
}
export type RemediationExecutionSteps = Array<unknown>;
export type RemediationExecutionStepState = never;
export interface RemediationInProgressException {
}
export type RemediationParameters = Record<string, unknown>;
export interface RemediationParameterValue {
}
export type RemediationTargetType = never;
export interface ResourceConcurrentModificationException {
}
export type ResourceConfiguration = string;

export type ResourceConfigurationSchemaType = never;
export interface ResourceCount {
}
export interface ResourceCountFilters {
}
export type ResourceCountGroupKey = never;
export type ResourceCounts = Array<unknown>;
export type ResourceCreationTime = Date | string;

export type ResourceDeletionTime = Date | string;

export interface ResourceDetails {
}
export interface ResourceEvaluation {
}
export interface ResourceEvaluationFilters {
}
export type ResourceEvaluationId = string;

export type ResourceEvaluations = Array<unknown>;
export type ResourceEvaluationStatus = never;
export interface ResourceFilters {
}
export type ResourceId = string;

export interface ResourceIdentifier {
}
export type ResourceIdentifierList = Array<unknown>;
export type ResourceIdentifiersList = Array<unknown>;
export type ResourceIdList = Array<unknown>;
export interface ResourceInUseException {
}
export interface ResourceKey {
}
export type ResourceKeys = Array<unknown>;
export type ResourceName = string;

export interface ResourceNotDiscoveredException {
}
export interface ResourceNotFoundException {
}
export type ResourceType = never;
export type ResourceTypeList = Array<unknown>;
export type ResourceTypes = Array<unknown>;
export type ResourceTypesScope = Array<unknown>;
export type ResourceTypeString = string;

export type ResourceTypeValue = string;

export type ResourceTypeValueList = Array<unknown>;
export interface ResourceValue {
}
export type ResourceValueType = never;
export type Results = Array<unknown>;
export interface RetentionConfiguration {
}
export type RetentionConfigurationList = Array<unknown>;
export type RetentionConfigurationName = string;

export type RetentionConfigurationNameList = Array<unknown>;
export type RetentionPeriodInDays = number;

export type RuleLimit = number;

export type SchemaVersionId = string;

export interface Scope {
}
export interface SelectAggregateResourceConfigRequest {
}
export interface SelectAggregateResourceConfigResponse {
}
export interface SelectResourceConfigRequest {
}
export interface SelectResourceConfigResponse {
}
export type ServicePrincipal = string;

export type ServicePrincipalValue = string;

export type ServicePrincipalValueList = Array<unknown>;
export type SortBy = never;
export type SortOrder = never;
export interface Source {
}
export interface SourceDetail {
}
export type SourceDetails = Array<unknown>;
export interface SsmControls {
}
export type SSMDocumentName = string;

export type SSMDocumentVersion = string;

export type StackArn = string;

export interface StartConfigRulesEvaluationRequest {
}
export interface StartConfigRulesEvaluationResponse {
}
export interface StartConfigurationRecorderRequest {
}
export interface StartRemediationExecutionRequest {
}
export interface StartRemediationExecutionResponse {
}
export interface StartResourceEvaluationRequest {
}
export interface StartResourceEvaluationResponse {
}
export type StaticParameterValues = Array<unknown>;
export interface StaticValue {
}
export interface StatusDetailFilters {
}
export interface StopConfigurationRecorderRequest {
}
export interface StoredQuery {
}
export interface StoredQueryMetadata {
}
export type StoredQueryMetadataList = Array<unknown>;
export type StringWithCharLimit1024 = string;

export type StringWithCharLimit128 = string;

export type StringWithCharLimit2048 = string;

export type StringWithCharLimit256 = string;

export type StringWithCharLimit256Min0 = string;

export type StringWithCharLimit64 = string;

export type StringWithCharLimit768 = string;

export type SupplementaryConfiguration = Record<string, unknown>;
export type SupplementaryConfigurationName = string;

export type SupplementaryConfigurationValue = string;

export interface Tag {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagList = Array<unknown>;
export interface TagResourceRequest {
}
export type Tags = Record<string, unknown>;
export type TagsList = Array<unknown>;
export type TagValue = string;

export type TemplateBody = string;

export type TemplateS3Uri = string;

export interface TemplateSSMDocumentDetails {
}
export interface TimeWindow {
}
export interface TooManyTagsException {
}
export interface UnmodifiableEntityException {
}
export type UnprocessedResourceIdentifierList = Array<unknown>;
export interface UntagResourceRequest {
}
export interface ValidationException {
}
export type Value = string;

export type Version = string;

export declare namespace AssociateResourceTypes {
  export type Input = AssociateResourceTypesRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetAggregateResourceConfig {
  export type Input = BatchGetAggregateResourceConfigRequest;
  export type Output = {};
  export type Error =
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetResourceConfig {
  export type Input = BatchGetResourceConfigRequest;
  export type Output = {};
  export type Error =
    | NoAvailableConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAggregationAuthorization {
  export type Input = DeleteAggregationAuthorizationRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | CommonAwsError;
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
  export type Error =
    | NoSuchConfigurationAggregatorException
    | CommonAwsError;
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
  export type Output = {};
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
  export type Error =
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DeleteRemediationConfiguration {
  export type Input = DeleteRemediationConfigurationRequest;
  export type Output = {};
  export type Error =
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | NoSuchRemediationConfigurationException
    | RemediationInProgressException
    | CommonAwsError;
}

export declare namespace DeleteRemediationExceptions {
  export type Input = DeleteRemediationExceptionsRequest;
  export type Output = {};
  export type Error =
    | NoSuchRemediationExceptionException
    | CommonAwsError;
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
  export type Output = {};
  export type Error =
    | ConflictException
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStoredQuery {
  export type Input = DeleteStoredQueryRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeliverConfigSnapshot {
  export type Input = DeliverConfigSnapshotRequest;
  export type Output = {};
  export type Error =
    | NoAvailableConfigurationRecorderException
    | NoRunningConfigurationRecorderException
    | NoSuchDeliveryChannelException
    | CommonAwsError;
}

export declare namespace DescribeAggregateComplianceByConfigRules {
  export type Input = DescribeAggregateComplianceByConfigRulesRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAggregateComplianceByConformancePacks {
  export type Input = DescribeAggregateComplianceByConformancePacksRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAggregationAuthorizations {
  export type Input = DescribeAggregationAuthorizationsRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeComplianceByConfigRule {
  export type Input = DescribeComplianceByConfigRuleRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace DescribeComplianceByResource {
  export type Input = DescribeComplianceByResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeConfigRuleEvaluationStatus {
  export type Input = DescribeConfigRuleEvaluationStatusRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace DescribeConfigRules {
  export type Input = DescribeConfigRulesRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationAggregatorSourcesStatus {
  export type Input = DescribeConfigurationAggregatorSourcesStatusRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigurationAggregatorException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationAggregators {
  export type Input = DescribeConfigurationAggregatorsRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigurationAggregatorException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationRecorderStatus {
  export type Input = DescribeConfigurationRecorderStatusRequest;
  export type Output = {};
  export type Error =
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationRecorders {
  export type Input = DescribeConfigurationRecordersRequest;
  export type Output = {};
  export type Error =
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConformancePackCompliance {
  export type Input = DescribeConformancePackComplianceRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleInConformancePackException
    | NoSuchConformancePackException
    | CommonAwsError;
}

export declare namespace DescribeConformancePackStatus {
  export type Input = DescribeConformancePackStatusRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeConformancePacks {
  export type Input = DescribeConformancePacksRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConformancePackException
    | CommonAwsError;
}

export declare namespace DescribeDeliveryChannelStatus {
  export type Input = DescribeDeliveryChannelStatusRequest;
  export type Output = {};
  export type Error =
    | NoSuchDeliveryChannelException
    | CommonAwsError;
}

export declare namespace DescribeDeliveryChannels {
  export type Input = DescribeDeliveryChannelsRequest;
  export type Output = {};
  export type Error =
    | NoSuchDeliveryChannelException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConfigRuleStatuses {
  export type Input = DescribeOrganizationConfigRuleStatusesRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConfigRules {
  export type Input = DescribeOrganizationConfigRulesRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConformancePackStatuses {
  export type Input = DescribeOrganizationConformancePackStatusesRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConformancePacks {
  export type Input = DescribeOrganizationConformancePacksRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace DescribePendingAggregationRequests {
  export type Input = DescribePendingAggregationRequestsRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeRemediationConfigurations {
  export type Input = DescribeRemediationConfigurationsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeRemediationExceptions {
  export type Input = DescribeRemediationExceptionsRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeRemediationExecutionStatus {
  export type Input = DescribeRemediationExecutionStatusRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchRemediationConfigurationException
    | CommonAwsError;
}

export declare namespace DescribeRetentionConfigurations {
  export type Input = DescribeRetentionConfigurationsRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchRetentionConfigurationException
    | CommonAwsError;
}

export declare namespace DisassociateResourceTypes {
  export type Input = DisassociateResourceTypesRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | NoSuchConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateComplianceDetailsByConfigRule {
  export type Input = GetAggregateComplianceDetailsByConfigRuleRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateConfigRuleComplianceSummary {
  export type Input = GetAggregateConfigRuleComplianceSummaryRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateConformancePackComplianceSummary {
  export type Input = GetAggregateConformancePackComplianceSummaryRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateDiscoveredResourceCounts {
  export type Input = GetAggregateDiscoveredResourceCountsRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAggregateResourceConfig {
  export type Input = GetAggregateResourceConfigRequest;
  export type Output = {};
  export type Error =
    | NoSuchConfigurationAggregatorException
    | OversizedConfigurationItemException
    | ResourceNotDiscoveredException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetComplianceDetailsByConfigRule {
  export type Input = GetComplianceDetailsByConfigRuleRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace GetComplianceDetailsByResource {
  export type Input = GetComplianceDetailsByResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace GetComplianceSummaryByConfigRule {
  export type Input = {};
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetComplianceSummaryByResourceType {
  export type Input = GetComplianceSummaryByResourceTypeRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace GetConformancePackComplianceDetails {
  export type Input = GetConformancePackComplianceDetailsRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConformancePackException
    | CommonAwsError;
}

export declare namespace GetCustomRulePolicy {
  export type Input = GetCustomRulePolicyRequest;
  export type Output = {};
  export type Error =
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace GetDiscoveredResourceCounts {
  export type Input = GetDiscoveredResourceCountsRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOrganizationConfigRuleDetailedStatus {
  export type Input = GetOrganizationConfigRuleDetailedStatusRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace GetOrganizationConformancePackDetailedStatus {
  export type Input = GetOrganizationConformancePackDetailedStatusRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchOrganizationConformancePackException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace GetOrganizationCustomRulePolicy {
  export type Input = GetOrganizationCustomRulePolicyRequest;
  export type Output = {};
  export type Error =
    | NoSuchOrganizationConfigRuleException
    | OrganizationAccessDeniedException
    | CommonAwsError;
}

export declare namespace GetResourceConfigHistory {
  export type Input = GetResourceConfigHistoryRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetStoredQuery {
  export type Input = GetStoredQueryRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAggregateDiscoveredResources {
  export type Input = ListAggregateDiscoveredResourcesRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfigurationRecorders {
  export type Input = ListConfigurationRecordersRequest;
  export type Output = {};
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConformancePackComplianceScores {
  export type Input = ListConformancePackComplianceScoresRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace ListDiscoveredResources {
  export type Input = ListDiscoveredResourcesRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | NoAvailableConfigurationRecorderException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceEvaluations {
  export type Input = ListResourceEvaluationsRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterValueException
    | InvalidTimeRangeException
    | CommonAwsError;
}

export declare namespace ListStoredQueries {
  export type Input = ListStoredQueriesRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidLimitException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutAggregationAuthorization {
  export type Input = PutAggregationAuthorizationRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | CommonAwsError;
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidResultTokenException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace PutExternalEvaluation {
  export type Input = PutExternalEvaluationRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | NoSuchConfigRuleException
    | CommonAwsError;
}

export declare namespace PutOrganizationConfigRule {
  export type Input = PutOrganizationConfigRuleRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace PutRemediationExceptions {
  export type Input = PutRemediationExceptionsRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MaxNumberOfRetentionConfigurationsExceededException
    | CommonAwsError;
}

export declare namespace PutServiceLinkedConfigurationRecorder {
  export type Input = PutServiceLinkedConfigurationRecorderRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InsufficientPermissionsException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutStoredQuery {
  export type Input = PutStoredQueryRequest;
  export type Output = {};
  export type Error =
    | ResourceConcurrentModificationException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SelectAggregateResourceConfig {
  export type Input = SelectAggregateResourceConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidExpressionException
    | InvalidLimitException
    | InvalidNextTokenException
    | NoSuchConfigurationAggregatorException
    | CommonAwsError;
}

export declare namespace SelectResourceConfig {
  export type Input = SelectResourceConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidExpressionException
    | InvalidLimitException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace StartConfigRulesEvaluation {
  export type Input = StartConfigRulesEvaluationRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InsufficientPermissionsException
    | InvalidParameterValueException
    | NoSuchRemediationConfigurationException
    | CommonAwsError;
}

export declare namespace StartResourceEvaluation {
  export type Input = StartResourceEvaluationRequest;
  export type Output = {};
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

