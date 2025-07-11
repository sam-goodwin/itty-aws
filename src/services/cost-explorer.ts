import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSInsightsIndexService {
  createAnomalyMonitor(
    input: CreateAnomalyMonitorRequest,
  ): Effect.Effect<
    CreateAnomalyMonitorResponse,
    LimitExceededException | CommonAwsError
  >;
  createAnomalySubscription(
    input: CreateAnomalySubscriptionRequest,
  ): Effect.Effect<
    CreateAnomalySubscriptionResponse,
    LimitExceededException | UnknownMonitorException | CommonAwsError
  >;
  createCostCategoryDefinition(
    input: CreateCostCategoryDefinitionRequest,
  ): Effect.Effect<
    CreateCostCategoryDefinitionResponse,
    LimitExceededException | ServiceQuotaExceededException | CommonAwsError
  >;
  deleteAnomalyMonitor(
    input: DeleteAnomalyMonitorRequest,
  ): Effect.Effect<
    DeleteAnomalyMonitorResponse,
    LimitExceededException | UnknownMonitorException | CommonAwsError
  >;
  deleteAnomalySubscription(
    input: DeleteAnomalySubscriptionRequest,
  ): Effect.Effect<
    DeleteAnomalySubscriptionResponse,
    LimitExceededException | UnknownSubscriptionException | CommonAwsError
  >;
  deleteCostCategoryDefinition(
    input: DeleteCostCategoryDefinitionRequest,
  ): Effect.Effect<
    DeleteCostCategoryDefinitionResponse,
    LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  describeCostCategoryDefinition(
    input: DescribeCostCategoryDefinitionRequest,
  ): Effect.Effect<
    DescribeCostCategoryDefinitionResponse,
    LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getAnomalies(
    input: GetAnomaliesRequest,
  ): Effect.Effect<
    GetAnomaliesResponse,
    InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  getAnomalyMonitors(
    input: GetAnomalyMonitorsRequest,
  ): Effect.Effect<
    GetAnomalyMonitorsResponse,
    InvalidNextTokenException | LimitExceededException | UnknownMonitorException | CommonAwsError
  >;
  getAnomalySubscriptions(
    input: GetAnomalySubscriptionsRequest,
  ): Effect.Effect<
    GetAnomalySubscriptionsResponse,
    InvalidNextTokenException | LimitExceededException | UnknownSubscriptionException | CommonAwsError
  >;
  getApproximateUsageRecords(
    input: GetApproximateUsageRecordsRequest,
  ): Effect.Effect<
    GetApproximateUsageRecordsResponse,
    DataUnavailableException | LimitExceededException | CommonAwsError
  >;
  getCommitmentPurchaseAnalysis(
    input: GetCommitmentPurchaseAnalysisRequest,
  ): Effect.Effect<
    GetCommitmentPurchaseAnalysisResponse,
    AnalysisNotFoundException | DataUnavailableException | LimitExceededException | CommonAwsError
  >;
  getCostAndUsage(
    input: GetCostAndUsageRequest,
  ): Effect.Effect<
    GetCostAndUsageResponse,
    BillExpirationException | DataUnavailableException | InvalidNextTokenException | LimitExceededException | RequestChangedException | ResourceNotFoundException | CommonAwsError
  >;
  getCostAndUsageComparisons(
    input: GetCostAndUsageComparisonsRequest,
  ): Effect.Effect<
    GetCostAndUsageComparisonsResponse,
    DataUnavailableException | InvalidNextTokenException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getCostAndUsageWithResources(
    input: GetCostAndUsageWithResourcesRequest,
  ): Effect.Effect<
    GetCostAndUsageWithResourcesResponse,
    BillExpirationException | DataUnavailableException | InvalidNextTokenException | LimitExceededException | RequestChangedException | ResourceNotFoundException | CommonAwsError
  >;
  getCostCategories(
    input: GetCostCategoriesRequest,
  ): Effect.Effect<
    GetCostCategoriesResponse,
    BillExpirationException | DataUnavailableException | InvalidNextTokenException | LimitExceededException | RequestChangedException | ResourceNotFoundException | CommonAwsError
  >;
  getCostComparisonDrivers(
    input: GetCostComparisonDriversRequest,
  ): Effect.Effect<
    GetCostComparisonDriversResponse,
    DataUnavailableException | InvalidNextTokenException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getCostForecast(
    input: GetCostForecastRequest,
  ): Effect.Effect<
    GetCostForecastResponse,
    DataUnavailableException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getDimensionValues(
    input: GetDimensionValuesRequest,
  ): Effect.Effect<
    GetDimensionValuesResponse,
    BillExpirationException | DataUnavailableException | InvalidNextTokenException | LimitExceededException | RequestChangedException | ResourceNotFoundException | CommonAwsError
  >;
  getReservationCoverage(
    input: GetReservationCoverageRequest,
  ): Effect.Effect<
    GetReservationCoverageResponse,
    DataUnavailableException | InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  getReservationPurchaseRecommendation(
    input: GetReservationPurchaseRecommendationRequest,
  ): Effect.Effect<
    GetReservationPurchaseRecommendationResponse,
    DataUnavailableException | InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  getReservationUtilization(
    input: GetReservationUtilizationRequest,
  ): Effect.Effect<
    GetReservationUtilizationResponse,
    DataUnavailableException | InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  getRightsizingRecommendation(
    input: GetRightsizingRecommendationRequest,
  ): Effect.Effect<
    GetRightsizingRecommendationResponse,
    InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  getSavingsPlanPurchaseRecommendationDetails(
    input: GetSavingsPlanPurchaseRecommendationDetailsRequest,
  ): Effect.Effect<
    GetSavingsPlanPurchaseRecommendationDetailsResponse,
    DataUnavailableException | LimitExceededException | CommonAwsError
  >;
  getSavingsPlansCoverage(
    input: GetSavingsPlansCoverageRequest,
  ): Effect.Effect<
    GetSavingsPlansCoverageResponse,
    DataUnavailableException | InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  getSavingsPlansPurchaseRecommendation(
    input: GetSavingsPlansPurchaseRecommendationRequest,
  ): Effect.Effect<
    GetSavingsPlansPurchaseRecommendationResponse,
    InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  getSavingsPlansUtilization(
    input: GetSavingsPlansUtilizationRequest,
  ): Effect.Effect<
    GetSavingsPlansUtilizationResponse,
    DataUnavailableException | LimitExceededException | CommonAwsError
  >;
  getSavingsPlansUtilizationDetails(
    input: GetSavingsPlansUtilizationDetailsRequest,
  ): Effect.Effect<
    GetSavingsPlansUtilizationDetailsResponse,
    DataUnavailableException | InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  getTags(
    input: GetTagsRequest,
  ): Effect.Effect<
    GetTagsResponse,
    BillExpirationException | DataUnavailableException | InvalidNextTokenException | LimitExceededException | RequestChangedException | ResourceNotFoundException | CommonAwsError
  >;
  getUsageForecast(
    input: GetUsageForecastRequest,
  ): Effect.Effect<
    GetUsageForecastResponse,
    DataUnavailableException | LimitExceededException | ResourceNotFoundException | UnresolvableUsageUnitException | CommonAwsError
  >;
  listCommitmentPurchaseAnalyses(
    input: ListCommitmentPurchaseAnalysesRequest,
  ): Effect.Effect<
    ListCommitmentPurchaseAnalysesResponse,
    DataUnavailableException | InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  listCostAllocationTagBackfillHistory(
    input: ListCostAllocationTagBackfillHistoryRequest,
  ): Effect.Effect<
    ListCostAllocationTagBackfillHistoryResponse,
    InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  listCostAllocationTags(
    input: ListCostAllocationTagsRequest,
  ): Effect.Effect<
    ListCostAllocationTagsResponse,
    InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  listCostCategoryDefinitions(
    input: ListCostCategoryDefinitionsRequest,
  ): Effect.Effect<
    ListCostCategoryDefinitionsResponse,
    LimitExceededException | CommonAwsError
  >;
  listSavingsPlansPurchaseRecommendationGeneration(
    input: ListSavingsPlansPurchaseRecommendationGenerationRequest,
  ): Effect.Effect<
    ListSavingsPlansPurchaseRecommendationGenerationResponse,
    DataUnavailableException | InvalidNextTokenException | LimitExceededException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  provideAnomalyFeedback(
    input: ProvideAnomalyFeedbackRequest,
  ): Effect.Effect<
    ProvideAnomalyFeedbackResponse,
    LimitExceededException | CommonAwsError
  >;
  startCommitmentPurchaseAnalysis(
    input: StartCommitmentPurchaseAnalysisRequest,
  ): Effect.Effect<
    StartCommitmentPurchaseAnalysisResponse,
    DataUnavailableException | GenerationExistsException | LimitExceededException | ServiceQuotaExceededException | CommonAwsError
  >;
  startCostAllocationTagBackfill(
    input: StartCostAllocationTagBackfillRequest,
  ): Effect.Effect<
    StartCostAllocationTagBackfillResponse,
    BackfillLimitExceededException | LimitExceededException | CommonAwsError
  >;
  startSavingsPlansPurchaseRecommendationGeneration(
    input: StartSavingsPlansPurchaseRecommendationGenerationRequest,
  ): Effect.Effect<
    StartSavingsPlansPurchaseRecommendationGenerationResponse,
    DataUnavailableException | GenerationExistsException | LimitExceededException | ServiceQuotaExceededException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    LimitExceededException | ResourceNotFoundException | TooManyTagsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  updateAnomalyMonitor(
    input: UpdateAnomalyMonitorRequest,
  ): Effect.Effect<
    UpdateAnomalyMonitorResponse,
    LimitExceededException | UnknownMonitorException | CommonAwsError
  >;
  updateAnomalySubscription(
    input: UpdateAnomalySubscriptionRequest,
  ): Effect.Effect<
    UpdateAnomalySubscriptionResponse,
    LimitExceededException | UnknownMonitorException | UnknownSubscriptionException | CommonAwsError
  >;
  updateCostAllocationTagsStatus(
    input: UpdateCostAllocationTagsStatusRequest,
  ): Effect.Effect<
    UpdateCostAllocationTagsStatusResponse,
    LimitExceededException | CommonAwsError
  >;
  updateCostCategoryDefinition(
    input: UpdateCostCategoryDefinitionRequest,
  ): Effect.Effect<
    UpdateCostCategoryDefinitionResponse,
    LimitExceededException | ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
}

export type CostExplorer = AWSInsightsIndexService;

export type AccountId = string;

export type AccountScope = "PAYER" | "LINKED";
export type AmortizedRecurringFee = string;

export type AmortizedUpfrontFee = string;

export interface AnalysisDetails {
  SavingsPlansPurchaseAnalysisDetails?: SavingsPlansPurchaseAnalysisDetails;
}
export type AnalysisId = string;

export type AnalysisIds = Array<string>;
export declare class AnalysisNotFoundException extends Data.TaggedError(
  "AnalysisNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type AnalysisStatus = "SUCCEEDED" | "PROCESSING" | "FAILED";
export interface AnalysisSummary {
  EstimatedCompletionTime?: string;
  AnalysisCompletionTime?: string;
  AnalysisStartedTime?: string;
  AnalysisStatus?: AnalysisStatus;
  ErrorCode?: ErrorCode;
  AnalysisId?: string;
  CommitmentPurchaseAnalysisConfiguration?: CommitmentPurchaseAnalysisConfiguration;
}
export type AnalysisSummaryList = Array<AnalysisSummary>;
export type AnalysisType = "MAX_SAVINGS" | "CUSTOM_COMMITMENT";
export type Anomalies = Array<Anomaly>;
export interface Anomaly {
  AnomalyId: string;
  AnomalyStartDate?: string;
  AnomalyEndDate?: string;
  DimensionValue?: string;
  RootCauses?: Array<RootCause>;
  AnomalyScore: AnomalyScore;
  Impact: Impact;
  MonitorArn: string;
  Feedback?: AnomalyFeedbackType;
}
export interface AnomalyDateInterval {
  StartDate: string;
  EndDate?: string;
}
export type AnomalyFeedbackType = "YES" | "NO" | "PLANNED_ACTIVITY";
export interface AnomalyMonitor {
  MonitorArn?: string;
  MonitorName: string;
  CreationDate?: string;
  LastUpdatedDate?: string;
  LastEvaluatedDate?: string;
  MonitorType: MonitorType;
  MonitorDimension?: MonitorDimension;
  MonitorSpecification?: Expression;
  DimensionalValueCount?: number;
}
export type AnomalyMonitors = Array<AnomalyMonitor>;
export interface AnomalyScore {
  MaxScore: number;
  CurrentScore: number;
}
export interface AnomalySubscription {
  SubscriptionArn?: string;
  AccountId?: string;
  MonitorArnList: Array<string>;
  Subscribers: Array<Subscriber>;
  Threshold?: number;
  Frequency: AnomalySubscriptionFrequency;
  SubscriptionName: string;
  ThresholdExpression?: Expression;
}
export type AnomalySubscriptionFrequency = "DAILY" | "IMMEDIATE" | "WEEKLY";
export type AnomalySubscriptions = Array<AnomalySubscription>;
export type ApproximateUsageRecordsPerService = Record<string, number>;
export type ApproximationDimension = "SERVICE" | "RESOURCE";
export type Arn = string;

export type Attributes = Record<string, string>;
export type AttributeType = string;

export type AttributeValue = string;

export declare class BackfillLimitExceededException extends Data.TaggedError(
  "BackfillLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class BillExpirationException extends Data.TaggedError(
  "BillExpirationException",
)<{
  readonly Message?: string;
}> {}
export type BillingViewArn = string;

export interface CommitmentPurchaseAnalysisConfiguration {
  SavingsPlansPurchaseAnalysisConfiguration?: SavingsPlansPurchaseAnalysisConfiguration;
}
export type ComparisonMetrics = Record<string, ComparisonMetricValue>;
export interface ComparisonMetricValue {
  BaselineTimePeriodAmount?: string;
  ComparisonTimePeriodAmount?: string;
  Difference?: string;
  Unit?: string;
}
export type Context = "COST_AND_USAGE" | "RESERVATIONS" | "SAVINGS_PLANS";
export interface CostAllocationTag {
  TagKey: string;
  Type: CostAllocationTagType;
  Status: CostAllocationTagStatus;
  LastUpdatedDate?: string;
  LastUsedDate?: string;
}
export interface CostAllocationTagBackfillRequest {
  BackfillFrom?: string;
  RequestedAt?: string;
  CompletedAt?: string;
  BackfillStatus?: CostAllocationTagBackfillStatus;
  LastUpdatedAt?: string;
}
export type CostAllocationTagBackfillRequestList = Array<CostAllocationTagBackfillRequest>;
export type CostAllocationTagBackfillStatus = "SUCCEEDED" | "PROCESSING" | "FAILED";
export type CostAllocationTagKeyList = Array<string>;
export type CostAllocationTagList = Array<CostAllocationTag>;
export type CostAllocationTagsMaxResults = number;

export type CostAllocationTagStatus = "ACTIVE" | "INACTIVE";
export interface CostAllocationTagStatusEntry {
  TagKey: string;
  Status: CostAllocationTagStatus;
}
export type CostAllocationTagStatusList = Array<CostAllocationTagStatusEntry>;
export type CostAllocationTagType = "AWS_GENERATED" | "USER_DEFINED";
export interface CostAndUsageComparison {
  CostAndUsageSelector?: Expression;
  Metrics?: Record<string, ComparisonMetricValue>;
}
export type CostAndUsageComparisons = Array<CostAndUsageComparison>;
export type CostAndUsageComparisonsMaxResults = number;

export interface CostCategory {
  CostCategoryArn: string;
  EffectiveStart: string;
  EffectiveEnd?: string;
  Name: string;
  RuleVersion: CostCategoryRuleVersion;
  Rules: Array<CostCategoryRule>;
  SplitChargeRules?: Array<CostCategorySplitChargeRule>;
  ProcessingStatus?: Array<CostCategoryProcessingStatus>;
  DefaultValue?: string;
}
export interface CostCategoryInheritedValueDimension {
  DimensionName?: CostCategoryInheritedValueDimensionName;
  DimensionKey?: string;
}
export type CostCategoryInheritedValueDimensionName = "LINKED_ACCOUNT_NAME" | "TAG";
export type CostCategoryMaxResults = number;

export type CostCategoryName = string;

export type CostCategoryNamesList = Array<string>;
export interface CostCategoryProcessingStatus {
  Component?: CostCategoryStatusComponent;
  Status?: CostCategoryStatus;
}
export type CostCategoryProcessingStatusList = Array<CostCategoryProcessingStatus>;
export interface CostCategoryReference {
  CostCategoryArn?: string;
  Name?: string;
  EffectiveStart?: string;
  EffectiveEnd?: string;
  NumberOfRules?: number;
  ProcessingStatus?: Array<CostCategoryProcessingStatus>;
  Values?: Array<string>;
  DefaultValue?: string;
}
export type CostCategoryReferencesList = Array<CostCategoryReference>;
export interface CostCategoryRule {
  Value?: string;
  Rule?: Expression;
  InheritedValue?: CostCategoryInheritedValueDimension;
  Type?: CostCategoryRuleType;
}
export type CostCategoryRulesList = Array<CostCategoryRule>;
export type CostCategoryRuleType = "REGULAR" | "INHERITED_VALUE";
export type CostCategoryRuleVersion = "CostCategoryExpressionV1";
export type CostCategorySplitChargeMethod = "FIXED" | "PROPORTIONAL" | "EVEN";
export interface CostCategorySplitChargeRule {
  Source: string;
  Targets: Array<string>;
  Method: CostCategorySplitChargeMethod;
  Parameters?: Array<CostCategorySplitChargeRuleParameter>;
}
export interface CostCategorySplitChargeRuleParameter {
  Type: CostCategorySplitChargeRuleParameterType;
  Values: Array<string>;
}
export type CostCategorySplitChargeRuleParametersList = Array<CostCategorySplitChargeRuleParameter>;
export type CostCategorySplitChargeRuleParameterType = "ALLOCATION_PERCENTAGES";
export type CostCategorySplitChargeRuleParameterValuesList = Array<string>;
export type CostCategorySplitChargeRulesList = Array<CostCategorySplitChargeRule>;
export type CostCategorySplitChargeRuleTargetsList = Array<string>;
export type CostCategoryStatus = "PROCESSING" | "APPLIED";
export type CostCategoryStatusComponent = "COST_EXPLORER";
export type CostCategoryValue = string;

export interface CostCategoryValues {
  Key?: string;
  Values?: Array<string>;
  MatchOptions?: Array<MatchOption>;
}
export type CostCategoryValuesList = Array<string>;
export interface CostComparisonDriver {
  CostSelector?: Expression;
  Metrics?: Record<string, ComparisonMetricValue>;
  CostDrivers?: Array<CostDriver>;
}
export type CostComparisonDrivers = Array<CostComparisonDriver>;
export type CostComparisonDriversMaxResults = number;

export interface CostDriver {
  Type?: string;
  Name?: string;
  Metrics?: Record<string, ComparisonMetricValue>;
}
export type CostDrivers = Array<CostDriver>;
export interface Coverage {
  CoverageHours?: CoverageHours;
  CoverageNormalizedUnits?: CoverageNormalizedUnits;
  CoverageCost?: CoverageCost;
}
export interface CoverageByTime {
  TimePeriod?: DateInterval;
  Groups?: Array<ReservationCoverageGroup>;
  Total?: Coverage;
}
export interface CoverageCost {
  OnDemandCost?: string;
}
export interface CoverageHours {
  OnDemandHours?: string;
  ReservedHours?: string;
  TotalRunningHours?: string;
  CoverageHoursPercentage?: string;
}
export type CoverageHoursPercentage = string;

export interface CoverageNormalizedUnits {
  OnDemandNormalizedUnits?: string;
  ReservedNormalizedUnits?: string;
  TotalRunningNormalizedUnits?: string;
  CoverageNormalizedUnitsPercentage?: string;
}
export type CoverageNormalizedUnitsPercentage = string;

export type CoveragesByTime = Array<CoverageByTime>;
export interface CreateAnomalyMonitorRequest {
  AnomalyMonitor: AnomalyMonitor;
  ResourceTags?: Array<ResourceTag>;
}
export interface CreateAnomalyMonitorResponse {
  MonitorArn: string;
}
export interface CreateAnomalySubscriptionRequest {
  AnomalySubscription: AnomalySubscription;
  ResourceTags?: Array<ResourceTag>;
}
export interface CreateAnomalySubscriptionResponse {
  SubscriptionArn: string;
}
export interface CreateCostCategoryDefinitionRequest {
  Name: string;
  EffectiveStart?: string;
  RuleVersion: CostCategoryRuleVersion;
  Rules: Array<CostCategoryRule>;
  DefaultValue?: string;
  SplitChargeRules?: Array<CostCategorySplitChargeRule>;
  ResourceTags?: Array<ResourceTag>;
}
export interface CreateCostCategoryDefinitionResponse {
  CostCategoryArn?: string;
  EffectiveStart?: string;
}
export interface CurrentInstance {
  ResourceId?: string;
  InstanceName?: string;
  Tags?: Array<TagValues>;
  ResourceDetails?: ResourceDetails;
  ResourceUtilization?: ResourceUtilization;
  ReservationCoveredHoursInLookbackPeriod?: string;
  SavingsPlansCoveredHoursInLookbackPeriod?: string;
  OnDemandHoursInLookbackPeriod?: string;
  TotalRunningHoursInLookbackPeriod?: string;
  MonthlyCost?: string;
  CurrencyCode?: string;
}
export declare class DataUnavailableException extends Data.TaggedError(
  "DataUnavailableException",
)<{
  readonly Message?: string;
}> {}
export interface DateInterval {
  Start: string;
  End: string;
}
export interface DeleteAnomalyMonitorRequest {
  MonitorArn: string;
}
export interface DeleteAnomalyMonitorResponse {
}
export interface DeleteAnomalySubscriptionRequest {
  SubscriptionArn: string;
}
export interface DeleteAnomalySubscriptionResponse {
}
export interface DeleteCostCategoryDefinitionRequest {
  CostCategoryArn: string;
}
export interface DeleteCostCategoryDefinitionResponse {
  CostCategoryArn?: string;
  EffectiveEnd?: string;
}
export interface DescribeCostCategoryDefinitionRequest {
  CostCategoryArn: string;
  EffectiveOn?: string;
}
export interface DescribeCostCategoryDefinitionResponse {
  CostCategory?: CostCategory;
}
export type Dimension = "AZ" | "INSTANCE_TYPE" | "LINKED_ACCOUNT" | "LINKED_ACCOUNT_NAME" | "OPERATION" | "PURCHASE_TYPE" | "REGION" | "SERVICE" | "SERVICE_CODE" | "USAGE_TYPE" | "USAGE_TYPE_GROUP" | "RECORD_TYPE" | "OPERATING_SYSTEM" | "TENANCY" | "SCOPE" | "PLATFORM" | "SUBSCRIPTION_ID" | "LEGAL_ENTITY_NAME" | "DEPLOYMENT_OPTION" | "DATABASE_ENGINE" | "CACHE_ENGINE" | "INSTANCE_TYPE_FAMILY" | "BILLING_ENTITY" | "RESERVATION_ID" | "RESOURCE_ID" | "RIGHTSIZING_TYPE" | "SAVINGS_PLANS_TYPE" | "SAVINGS_PLAN_ARN" | "PAYMENT_OPTION" | "AGREEMENT_END_DATE_TIME_AFTER" | "AGREEMENT_END_DATE_TIME_BEFORE" | "INVOICING_ENTITY" | "ANOMALY_TOTAL_IMPACT_ABSOLUTE" | "ANOMALY_TOTAL_IMPACT_PERCENTAGE";
export interface DimensionValues {
  Key?: Dimension;
  Values?: Array<string>;
  MatchOptions?: Array<MatchOption>;
}
export interface DimensionValuesWithAttributes {
  Value?: string;
  Attributes?: Record<string, string>;
}
export type DimensionValuesWithAttributesList = Array<DimensionValuesWithAttributes>;
export interface DiskResourceUtilization {
  DiskReadOpsPerSecond?: string;
  DiskWriteOpsPerSecond?: string;
  DiskReadBytesPerSecond?: string;
  DiskWriteBytesPerSecond?: string;
}
export interface DynamoDBCapacityDetails {
  CapacityUnits?: string;
  Region?: string;
}
export interface EBSResourceUtilization {
  EbsReadOpsPerSecond?: string;
  EbsWriteOpsPerSecond?: string;
  EbsReadBytesPerSecond?: string;
  EbsWriteBytesPerSecond?: string;
}
export interface EC2InstanceDetails {
  Family?: string;
  InstanceType?: string;
  Region?: string;
  AvailabilityZone?: string;
  Platform?: string;
  Tenancy?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
export interface EC2ResourceDetails {
  HourlyOnDemandRate?: string;
  InstanceType?: string;
  Platform?: string;
  Region?: string;
  Sku?: string;
  Memory?: string;
  NetworkPerformance?: string;
  Storage?: string;
  Vcpu?: string;
}
export interface EC2ResourceUtilization {
  MaxCpuUtilizationPercentage?: string;
  MaxMemoryUtilizationPercentage?: string;
  MaxStorageUtilizationPercentage?: string;
  EBSResourceUtilization?: EBSResourceUtilization;
  DiskResourceUtilization?: DiskResourceUtilization;
  NetworkResourceUtilization?: NetworkResourceUtilization;
}
export interface EC2Specification {
  OfferingClass?: OfferingClass;
}
export interface ElastiCacheInstanceDetails {
  Family?: string;
  NodeType?: string;
  Region?: string;
  ProductDescription?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
export type Entity = string;

export type ErrorCode = "NO_USAGE_FOUND" | "INTERNAL_FAILURE" | "INVALID_SAVINGS_PLANS_TO_ADD" | "INVALID_SAVINGS_PLANS_TO_EXCLUDE" | "INVALID_ACCOUNT_ID";
export type ErrorMessage = string;

export interface ESInstanceDetails {
  InstanceClass?: string;
  InstanceSize?: string;
  Region?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
export type Estimated = boolean;

export interface Expression {
  Or?: Array<Expression>;
  And?: Array<Expression>;
  Not?: Expression;
  Dimensions?: DimensionValues;
  Tags?: TagValues;
  CostCategories?: CostCategoryValues;
}
export type Expressions = Array<Expression>;
export type FindingReasonCode = "CPU_OVER_PROVISIONED" | "CPU_UNDER_PROVISIONED" | "MEMORY_OVER_PROVISIONED" | "MEMORY_UNDER_PROVISIONED" | "EBS_THROUGHPUT_OVER_PROVISIONED" | "EBS_THROUGHPUT_UNDER_PROVISIONED" | "EBS_IOPS_OVER_PROVISIONED" | "EBS_IOPS_UNDER_PROVISIONED" | "NETWORK_BANDWIDTH_OVER_PROVISIONED" | "NETWORK_BANDWIDTH_UNDER_PROVISIONED" | "NETWORK_PPS_OVER_PROVISIONED" | "NETWORK_PPS_UNDER_PROVISIONED" | "DISK_IOPS_OVER_PROVISIONED" | "DISK_IOPS_UNDER_PROVISIONED" | "DISK_THROUGHPUT_OVER_PROVISIONED" | "DISK_THROUGHPUT_UNDER_PROVISIONED";
export type FindingReasonCodes = Array<FindingReasonCode>;
export interface ForecastResult {
  TimePeriod?: DateInterval;
  MeanValue?: string;
  PredictionIntervalLowerBound?: string;
  PredictionIntervalUpperBound?: string;
}
export type ForecastResultsByTime = Array<ForecastResult>;
export declare class GenerationExistsException extends Data.TaggedError(
  "GenerationExistsException",
)<{
  readonly Message?: string;
}> {}
export type GenerationStatus = "SUCCEEDED" | "PROCESSING" | "FAILED";
export interface GenerationSummary {
  RecommendationId?: string;
  GenerationStatus?: GenerationStatus;
  GenerationStartedTime?: string;
  GenerationCompletionTime?: string;
  EstimatedCompletionTime?: string;
}
export type GenerationSummaryList = Array<GenerationSummary>;
export type GenericBoolean = boolean;

export type GenericDouble = number;

export type GenericString = string;

export interface GetAnomaliesRequest {
  MonitorArn?: string;
  DateInterval: AnomalyDateInterval;
  Feedback?: AnomalyFeedbackType;
  TotalImpact?: TotalImpactFilter;
  NextPageToken?: string;
  MaxResults?: number;
}
export interface GetAnomaliesResponse {
  Anomalies: Array<Anomaly>;
  NextPageToken?: string;
}
export interface GetAnomalyMonitorsRequest {
  MonitorArnList?: Array<string>;
  NextPageToken?: string;
  MaxResults?: number;
}
export interface GetAnomalyMonitorsResponse {
  AnomalyMonitors: Array<AnomalyMonitor>;
  NextPageToken?: string;
}
export interface GetAnomalySubscriptionsRequest {
  SubscriptionArnList?: Array<string>;
  MonitorArn?: string;
  NextPageToken?: string;
  MaxResults?: number;
}
export interface GetAnomalySubscriptionsResponse {
  AnomalySubscriptions: Array<AnomalySubscription>;
  NextPageToken?: string;
}
export interface GetApproximateUsageRecordsRequest {
  Granularity: Granularity;
  Services?: Array<string>;
  ApproximationDimension: ApproximationDimension;
}
export interface GetApproximateUsageRecordsResponse {
  Services?: Record<string, number>;
  TotalRecords?: number;
  LookbackPeriod?: DateInterval;
}
export interface GetCommitmentPurchaseAnalysisRequest {
  AnalysisId: string;
}
export interface GetCommitmentPurchaseAnalysisResponse {
  EstimatedCompletionTime: string;
  AnalysisCompletionTime?: string;
  AnalysisStartedTime: string;
  AnalysisId: string;
  AnalysisStatus: AnalysisStatus;
  ErrorCode?: ErrorCode;
  AnalysisDetails?: AnalysisDetails;
  CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration;
}
export interface GetCostAndUsageComparisonsRequest {
  BillingViewArn?: string;
  BaselineTimePeriod: DateInterval;
  ComparisonTimePeriod: DateInterval;
  MetricForComparison: string;
  Filter?: Expression;
  GroupBy?: Array<GroupDefinition>;
  MaxResults?: number;
  NextPageToken?: string;
}
export interface GetCostAndUsageComparisonsResponse {
  CostAndUsageComparisons?: Array<CostAndUsageComparison>;
  TotalCostAndUsage?: Record<string, ComparisonMetricValue>;
  NextPageToken?: string;
}
export interface GetCostAndUsageRequest {
  TimePeriod: DateInterval;
  Granularity: Granularity;
  Filter?: Expression;
  Metrics: Array<string>;
  GroupBy?: Array<GroupDefinition>;
  BillingViewArn?: string;
  NextPageToken?: string;
}
export interface GetCostAndUsageResponse {
  NextPageToken?: string;
  GroupDefinitions?: Array<GroupDefinition>;
  ResultsByTime?: Array<ResultByTime>;
  DimensionValueAttributes?: Array<DimensionValuesWithAttributes>;
}
export interface GetCostAndUsageWithResourcesRequest {
  TimePeriod: DateInterval;
  Granularity: Granularity;
  Filter: Expression;
  Metrics?: Array<string>;
  GroupBy?: Array<GroupDefinition>;
  BillingViewArn?: string;
  NextPageToken?: string;
}
export interface GetCostAndUsageWithResourcesResponse {
  NextPageToken?: string;
  GroupDefinitions?: Array<GroupDefinition>;
  ResultsByTime?: Array<ResultByTime>;
  DimensionValueAttributes?: Array<DimensionValuesWithAttributes>;
}
export interface GetCostCategoriesRequest {
  SearchString?: string;
  TimePeriod: DateInterval;
  CostCategoryName?: string;
  Filter?: Expression;
  SortBy?: Array<SortDefinition>;
  BillingViewArn?: string;
  MaxResults?: number;
  NextPageToken?: string;
}
export interface GetCostCategoriesResponse {
  NextPageToken?: string;
  CostCategoryNames?: Array<string>;
  CostCategoryValues?: Array<string>;
  ReturnSize: number;
  TotalSize: number;
}
export interface GetCostComparisonDriversRequest {
  BillingViewArn?: string;
  BaselineTimePeriod: DateInterval;
  ComparisonTimePeriod: DateInterval;
  MetricForComparison: string;
  Filter?: Expression;
  GroupBy?: Array<GroupDefinition>;
  MaxResults?: number;
  NextPageToken?: string;
}
export interface GetCostComparisonDriversResponse {
  CostComparisonDrivers?: Array<CostComparisonDriver>;
  NextPageToken?: string;
}
export interface GetCostForecastRequest {
  TimePeriod: DateInterval;
  Metric: Metric;
  Granularity: Granularity;
  Filter?: Expression;
  BillingViewArn?: string;
  PredictionIntervalLevel?: number;
}
export interface GetCostForecastResponse {
  Total?: MetricValue;
  ForecastResultsByTime?: Array<ForecastResult>;
}
export interface GetDimensionValuesRequest {
  SearchString?: string;
  TimePeriod: DateInterval;
  Dimension: Dimension;
  Context?: Context;
  Filter?: Expression;
  SortBy?: Array<SortDefinition>;
  BillingViewArn?: string;
  MaxResults?: number;
  NextPageToken?: string;
}
export interface GetDimensionValuesResponse {
  DimensionValues: Array<DimensionValuesWithAttributes>;
  ReturnSize: number;
  TotalSize: number;
  NextPageToken?: string;
}
export interface GetReservationCoverageRequest {
  TimePeriod: DateInterval;
  GroupBy?: Array<GroupDefinition>;
  Granularity?: Granularity;
  Filter?: Expression;
  Metrics?: Array<string>;
  NextPageToken?: string;
  SortBy?: SortDefinition;
  MaxResults?: number;
}
export interface GetReservationCoverageResponse {
  CoveragesByTime: Array<CoverageByTime>;
  Total?: Coverage;
  NextPageToken?: string;
}
export interface GetReservationPurchaseRecommendationRequest {
  AccountId?: string;
  Service: string;
  Filter?: Expression;
  AccountScope?: AccountScope;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  TermInYears?: TermInYears;
  PaymentOption?: PaymentOption;
  ServiceSpecification?: ServiceSpecification;
  PageSize?: number;
  NextPageToken?: string;
}
export interface GetReservationPurchaseRecommendationResponse {
  Metadata?: ReservationPurchaseRecommendationMetadata;
  Recommendations?: Array<ReservationPurchaseRecommendation>;
  NextPageToken?: string;
}
export interface GetReservationUtilizationRequest {
  TimePeriod: DateInterval;
  GroupBy?: Array<GroupDefinition>;
  Granularity?: Granularity;
  Filter?: Expression;
  SortBy?: SortDefinition;
  NextPageToken?: string;
  MaxResults?: number;
}
export interface GetReservationUtilizationResponse {
  UtilizationsByTime: Array<UtilizationByTime>;
  Total?: ReservationAggregates;
  NextPageToken?: string;
}
export interface GetRightsizingRecommendationRequest {
  Filter?: Expression;
  Configuration?: RightsizingRecommendationConfiguration;
  Service: string;
  PageSize?: number;
  NextPageToken?: string;
}
export interface GetRightsizingRecommendationResponse {
  Metadata?: RightsizingRecommendationMetadata;
  Summary?: RightsizingRecommendationSummary;
  RightsizingRecommendations?: Array<RightsizingRecommendation>;
  NextPageToken?: string;
  Configuration?: RightsizingRecommendationConfiguration;
}
export interface GetSavingsPlanPurchaseRecommendationDetailsRequest {
  RecommendationDetailId: string;
}
export interface GetSavingsPlanPurchaseRecommendationDetailsResponse {
  RecommendationDetailId?: string;
  RecommendationDetailData?: RecommendationDetailData;
}
export interface GetSavingsPlansCoverageRequest {
  TimePeriod: DateInterval;
  GroupBy?: Array<GroupDefinition>;
  Granularity?: Granularity;
  Filter?: Expression;
  Metrics?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  SortBy?: SortDefinition;
}
export interface GetSavingsPlansCoverageResponse {
  SavingsPlansCoverages: Array<SavingsPlansCoverage>;
  NextToken?: string;
}
export interface GetSavingsPlansPurchaseRecommendationRequest {
  SavingsPlansType: SupportedSavingsPlansType;
  TermInYears: TermInYears;
  PaymentOption: PaymentOption;
  AccountScope?: AccountScope;
  NextPageToken?: string;
  PageSize?: number;
  LookbackPeriodInDays: LookbackPeriodInDays;
  Filter?: Expression;
}
export interface GetSavingsPlansPurchaseRecommendationResponse {
  Metadata?: SavingsPlansPurchaseRecommendationMetadata;
  SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;
  NextPageToken?: string;
}
export interface GetSavingsPlansUtilizationDetailsRequest {
  TimePeriod: DateInterval;
  Filter?: Expression;
  DataType?: Array<SavingsPlansDataType>;
  NextToken?: string;
  MaxResults?: number;
  SortBy?: SortDefinition;
}
export interface GetSavingsPlansUtilizationDetailsResponse {
  SavingsPlansUtilizationDetails: Array<SavingsPlansUtilizationDetail>;
  Total?: SavingsPlansUtilizationAggregates;
  TimePeriod: DateInterval;
  NextToken?: string;
}
export interface GetSavingsPlansUtilizationRequest {
  TimePeriod: DateInterval;
  Granularity?: Granularity;
  Filter?: Expression;
  SortBy?: SortDefinition;
}
export interface GetSavingsPlansUtilizationResponse {
  SavingsPlansUtilizationsByTime?: Array<SavingsPlansUtilizationByTime>;
  Total: SavingsPlansUtilizationAggregates;
}
export interface GetTagsRequest {
  SearchString?: string;
  TimePeriod: DateInterval;
  TagKey?: string;
  Filter?: Expression;
  SortBy?: Array<SortDefinition>;
  BillingViewArn?: string;
  MaxResults?: number;
  NextPageToken?: string;
}
export interface GetTagsResponse {
  NextPageToken?: string;
  Tags: Array<string>;
  ReturnSize: number;
  TotalSize: number;
}
export interface GetUsageForecastRequest {
  TimePeriod: DateInterval;
  Metric: Metric;
  Granularity: Granularity;
  Filter?: Expression;
  BillingViewArn?: string;
  PredictionIntervalLevel?: number;
}
export interface GetUsageForecastResponse {
  Total?: MetricValue;
  ForecastResultsByTime?: Array<ForecastResult>;
}
export type Granularity = "DAILY" | "MONTHLY" | "HOURLY";
export interface Group {
  Keys?: Array<string>;
  Metrics?: Record<string, MetricValue>;
}
export interface GroupDefinition {
  Type?: GroupDefinitionType;
  Key?: string;
}
export type GroupDefinitionKey = string;

export type GroupDefinitions = Array<GroupDefinition>;
export type GroupDefinitionType = "DIMENSION" | "TAG" | "COST_CATEGORY";
export type Groups = Array<Group>;
export interface Impact {
  MaxImpact: number;
  TotalImpact?: number;
  TotalActualSpend?: number;
  TotalExpectedSpend?: number;
  TotalImpactPercentage?: number;
}
export interface InstanceDetails {
  EC2InstanceDetails?: EC2InstanceDetails;
  RDSInstanceDetails?: RDSInstanceDetails;
  RedshiftInstanceDetails?: RedshiftInstanceDetails;
  ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails;
  ESInstanceDetails?: ESInstanceDetails;
  MemoryDBInstanceDetails?: MemoryDBInstanceDetails;
}
export declare class InvalidNextTokenException extends Data.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export type Key = string;

export type Keys = Array<string>;
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListCommitmentPurchaseAnalysesRequest {
  AnalysisStatus?: AnalysisStatus;
  NextPageToken?: string;
  PageSize?: number;
  AnalysisIds?: Array<string>;
}
export interface ListCommitmentPurchaseAnalysesResponse {
  AnalysisSummaryList?: Array<AnalysisSummary>;
  NextPageToken?: string;
}
export interface ListCostAllocationTagBackfillHistoryRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCostAllocationTagBackfillHistoryResponse {
  BackfillRequests?: Array<CostAllocationTagBackfillRequest>;
  NextToken?: string;
}
export interface ListCostAllocationTagsRequest {
  Status?: CostAllocationTagStatus;
  TagKeys?: Array<string>;
  Type?: CostAllocationTagType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCostAllocationTagsResponse {
  CostAllocationTags?: Array<CostAllocationTag>;
  NextToken?: string;
}
export interface ListCostCategoryDefinitionsRequest {
  EffectiveOn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCostCategoryDefinitionsResponse {
  CostCategoryReferences?: Array<CostCategoryReference>;
  NextToken?: string;
}
export interface ListSavingsPlansPurchaseRecommendationGenerationRequest {
  GenerationStatus?: GenerationStatus;
  RecommendationIds?: Array<string>;
  PageSize?: number;
  NextPageToken?: string;
}
export interface ListSavingsPlansPurchaseRecommendationGenerationResponse {
  GenerationSummaryList?: Array<GenerationSummary>;
  NextPageToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  ResourceTags?: Array<ResourceTag>;
}
export type LookbackPeriodInDays = "SEVEN_DAYS" | "THIRTY_DAYS" | "SIXTY_DAYS";
export type MatchOption = "EQUALS" | "ABSENT" | "STARTS_WITH" | "ENDS_WITH" | "CONTAINS" | "CASE_SENSITIVE" | "CASE_INSENSITIVE" | "GREATER_THAN_OR_EQUAL";
export type MatchOptions = Array<MatchOption>;
export type MaxResults = number;

export interface MemoryDBInstanceDetails {
  Family?: string;
  NodeType?: string;
  Region?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
export type Metric = "BLENDED_COST" | "UNBLENDED_COST" | "AMORTIZED_COST" | "NET_UNBLENDED_COST" | "NET_AMORTIZED_COST" | "USAGE_QUANTITY" | "NORMALIZED_USAGE_AMOUNT";
export type MetricAmount = string;

export type MetricName = string;

export type MetricNames = Array<string>;
export type Metrics = Record<string, MetricValue>;
export type MetricsOverLookbackPeriod = Array<RecommendationDetailHourlyMetrics>;
export type MetricUnit = string;

export interface MetricValue {
  Amount?: string;
  Unit?: string;
}
export interface ModifyRecommendationDetail {
  TargetInstances?: Array<TargetInstance>;
}
export type MonitorArnList = Array<string>;
export type MonitorDimension = "SERVICE";
export type MonitorType = "DIMENSIONAL" | "CUSTOM";
export type NetRISavings = string;

export interface NetworkResourceUtilization {
  NetworkInBytesPerSecond?: string;
  NetworkOutBytesPerSecond?: string;
  NetworkPacketsInPerSecond?: string;
  NetworkPacketsOutPerSecond?: string;
}
export type NextPageToken = string;

export type NonNegativeInteger = number;

export type NonNegativeLong = number;

export type NullableNonNegativeDouble = number;

export type NumericOperator = "EQUAL" | "GREATER_THAN_OR_EQUAL" | "LESS_THAN_OR_EQUAL" | "GREATER_THAN" | "LESS_THAN" | "BETWEEN";
export type OfferingClass = "STANDARD" | "CONVERTIBLE";
export type OnDemandCost = string;

export type OnDemandCostOfRIHoursUsed = string;

export type OnDemandHours = string;

export type OnDemandNormalizedUnits = string;

export type PageSize = number;

export type PaymentOption = "NO_UPFRONT" | "PARTIAL_UPFRONT" | "ALL_UPFRONT" | "LIGHT_UTILIZATION" | "MEDIUM_UTILIZATION" | "HEAVY_UTILIZATION";
export type PlatformDifference = "HYPERVISOR" | "NETWORK_INTERFACE" | "STORAGE_INTERFACE" | "INSTANCE_STORE_AVAILABILITY" | "VIRTUALIZATION_TYPE";
export type PlatformDifferences = Array<PlatformDifference>;
export type PredictionIntervalLevel = number;

export interface ProvideAnomalyFeedbackRequest {
  AnomalyId: string;
  Feedback: AnomalyFeedbackType;
}
export interface ProvideAnomalyFeedbackResponse {
  AnomalyId: string;
}
export type PurchasedHours = string;

export type PurchasedUnits = string;

export interface RDSInstanceDetails {
  Family?: string;
  InstanceType?: string;
  Region?: string;
  DatabaseEngine?: string;
  DatabaseEdition?: string;
  DeploymentOption?: string;
  LicenseModel?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
export type RealizedSavings = string;

export interface RecommendationDetailData {
  AccountScope?: AccountScope;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  SavingsPlansType?: SupportedSavingsPlansType;
  TermInYears?: TermInYears;
  PaymentOption?: PaymentOption;
  AccountId?: string;
  CurrencyCode?: string;
  InstanceFamily?: string;
  Region?: string;
  OfferingId?: string;
  GenerationTimestamp?: string;
  LatestUsageTimestamp?: string;
  CurrentAverageHourlyOnDemandSpend?: string;
  CurrentMaximumHourlyOnDemandSpend?: string;
  CurrentMinimumHourlyOnDemandSpend?: string;
  EstimatedAverageUtilization?: string;
  EstimatedMonthlySavingsAmount?: string;
  EstimatedOnDemandCost?: string;
  EstimatedOnDemandCostWithCurrentCommitment?: string;
  EstimatedROI?: string;
  EstimatedSPCost?: string;
  EstimatedSavingsAmount?: string;
  EstimatedSavingsPercentage?: string;
  ExistingHourlyCommitment?: string;
  HourlyCommitmentToPurchase?: string;
  UpfrontCost?: string;
  CurrentAverageCoverage?: string;
  EstimatedAverageCoverage?: string;
  MetricsOverLookbackPeriod?: Array<RecommendationDetailHourlyMetrics>;
}
export interface RecommendationDetailHourlyMetrics {
  StartTime?: string;
  EstimatedOnDemandCost?: string;
  CurrentCoverage?: string;
  EstimatedCoverage?: string;
  EstimatedNewCommitmentUtilization?: string;
}
export type RecommendationDetailId = string;

export type RecommendationId = string;

export type RecommendationIdList = Array<string>;
export type RecommendationTarget = "SAME_INSTANCE_FAMILY" | "CROSS_INSTANCE_FAMILY";
export interface RedshiftInstanceDetails {
  Family?: string;
  NodeType?: string;
  Region?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
export declare class RequestChangedException extends Data.TaggedError(
  "RequestChangedException",
)<{
  readonly Message?: string;
}> {}
export interface ReservationAggregates {
  UtilizationPercentage?: string;
  UtilizationPercentageInUnits?: string;
  PurchasedHours?: string;
  PurchasedUnits?: string;
  TotalActualHours?: string;
  TotalActualUnits?: string;
  UnusedHours?: string;
  UnusedUnits?: string;
  OnDemandCostOfRIHoursUsed?: string;
  NetRISavings?: string;
  TotalPotentialRISavings?: string;
  AmortizedUpfrontFee?: string;
  AmortizedRecurringFee?: string;
  TotalAmortizedFee?: string;
  RICostForUnusedHours?: string;
  RealizedSavings?: string;
  UnrealizedSavings?: string;
}
export interface ReservationCoverageGroup {
  Attributes?: Record<string, string>;
  Coverage?: Coverage;
}
export type ReservationCoverageGroups = Array<ReservationCoverageGroup>;
export type ReservationGroupKey = string;

export type ReservationGroupValue = string;

export interface ReservationPurchaseRecommendation {
  AccountScope?: AccountScope;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  TermInYears?: TermInYears;
  PaymentOption?: PaymentOption;
  ServiceSpecification?: ServiceSpecification;
  RecommendationDetails?: Array<ReservationPurchaseRecommendationDetail>;
  RecommendationSummary?: ReservationPurchaseRecommendationSummary;
}
export interface ReservationPurchaseRecommendationDetail {
  AccountId?: string;
  InstanceDetails?: InstanceDetails;
  RecommendedNumberOfInstancesToPurchase?: string;
  RecommendedNormalizedUnitsToPurchase?: string;
  MinimumNumberOfInstancesUsedPerHour?: string;
  MinimumNormalizedUnitsUsedPerHour?: string;
  MaximumNumberOfInstancesUsedPerHour?: string;
  MaximumNormalizedUnitsUsedPerHour?: string;
  AverageNumberOfInstancesUsedPerHour?: string;
  AverageNormalizedUnitsUsedPerHour?: string;
  AverageUtilization?: string;
  EstimatedBreakEvenInMonths?: string;
  CurrencyCode?: string;
  EstimatedMonthlySavingsAmount?: string;
  EstimatedMonthlySavingsPercentage?: string;
  EstimatedMonthlyOnDemandCost?: string;
  EstimatedReservationCostForLookbackPeriod?: string;
  UpfrontCost?: string;
  RecurringStandardMonthlyCost?: string;
  ReservedCapacityDetails?: ReservedCapacityDetails;
  RecommendedNumberOfCapacityUnitsToPurchase?: string;
  MinimumNumberOfCapacityUnitsUsedPerHour?: string;
  MaximumNumberOfCapacityUnitsUsedPerHour?: string;
  AverageNumberOfCapacityUnitsUsedPerHour?: string;
}
export type ReservationPurchaseRecommendationDetails = Array<ReservationPurchaseRecommendationDetail>;
export interface ReservationPurchaseRecommendationMetadata {
  RecommendationId?: string;
  GenerationTimestamp?: string;
  AdditionalMetadata?: string;
}
export type ReservationPurchaseRecommendations = Array<ReservationPurchaseRecommendation>;
export interface ReservationPurchaseRecommendationSummary {
  TotalEstimatedMonthlySavingsAmount?: string;
  TotalEstimatedMonthlySavingsPercentage?: string;
  CurrencyCode?: string;
}
export interface ReservationUtilizationGroup {
  Key?: string;
  Value?: string;
  Attributes?: Record<string, string>;
  Utilization?: ReservationAggregates;
}
export type ReservationUtilizationGroups = Array<ReservationUtilizationGroup>;
export interface ReservedCapacityDetails {
  DynamoDBCapacityDetails?: DynamoDBCapacityDetails;
}
export type ReservedHours = string;

export type ReservedNormalizedUnits = string;

export interface ResourceDetails {
  EC2ResourceDetails?: EC2ResourceDetails;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export interface ResourceTag {
  Key: string;
  Value: string;
}
export type ResourceTagKey = string;

export type ResourceTagKeyList = Array<string>;
export type ResourceTagList = Array<ResourceTag>;
export type ResourceTagValue = string;

export interface ResourceUtilization {
  EC2ResourceUtilization?: EC2ResourceUtilization;
}
export interface ResultByTime {
  TimePeriod?: DateInterval;
  Total?: Record<string, MetricValue>;
  Groups?: Array<Group>;
  Estimated?: boolean;
}
export type ResultsByTime = Array<ResultByTime>;
export type RICostForUnusedHours = string;

export interface RightsizingRecommendation {
  AccountId?: string;
  CurrentInstance?: CurrentInstance;
  RightsizingType?: RightsizingType;
  ModifyRecommendationDetail?: ModifyRecommendationDetail;
  TerminateRecommendationDetail?: TerminateRecommendationDetail;
  FindingReasonCodes?: Array<FindingReasonCode>;
}
export interface RightsizingRecommendationConfiguration {
  RecommendationTarget: RecommendationTarget;
  BenefitsConsidered: boolean;
}
export type RightsizingRecommendationList = Array<RightsizingRecommendation>;
export interface RightsizingRecommendationMetadata {
  RecommendationId?: string;
  GenerationTimestamp?: string;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  AdditionalMetadata?: string;
}
export interface RightsizingRecommendationSummary {
  TotalRecommendationCount?: string;
  EstimatedTotalMonthlySavingsAmount?: string;
  SavingsCurrencyCode?: string;
  SavingsPercentage?: string;
}
export type RightsizingType = "TERMINATE" | "MODIFY";
export interface RootCause {
  Service?: string;
  Region?: string;
  LinkedAccount?: string;
  LinkedAccountName?: string;
  UsageType?: string;
  Impact?: RootCauseImpact;
}
export interface RootCauseImpact {
  Contribution: number;
}
export type RootCauses = Array<RootCause>;
export type SavingsPlanArn = string;

export interface SavingsPlans {
  PaymentOption?: PaymentOption;
  SavingsPlansType?: SupportedSavingsPlansType;
  Region?: string;
  InstanceFamily?: string;
  TermInYears?: TermInYears;
  SavingsPlansCommitment?: number;
  OfferingId?: string;
}
export interface SavingsPlansAmortizedCommitment {
  AmortizedRecurringCommitment?: string;
  AmortizedUpfrontCommitment?: string;
  TotalAmortizedCommitment?: string;
}
export type SavingsPlansCommitment = number;

export interface SavingsPlansCoverage {
  Attributes?: Record<string, string>;
  Coverage?: SavingsPlansCoverageData;
  TimePeriod?: DateInterval;
}
export interface SavingsPlansCoverageData {
  SpendCoveredBySavingsPlans?: string;
  OnDemandCost?: string;
  TotalCost?: string;
  CoveragePercentage?: string;
}
export type SavingsPlansCoverages = Array<SavingsPlansCoverage>;
export type SavingsPlansDataType = "ATTRIBUTES" | "UTILIZATION" | "AMORTIZED_COMMITMENT" | "SAVINGS";
export type SavingsPlansDataTypes = Array<SavingsPlansDataType>;
export interface SavingsPlansDetails {
  Region?: string;
  InstanceFamily?: string;
  OfferingId?: string;
}
export type SavingsPlansId = string;

export interface SavingsPlansPurchaseAnalysisConfiguration {
  AccountScope?: AccountScope;
  AccountId?: string;
  AnalysisType: AnalysisType;
  SavingsPlansToAdd: Array<SavingsPlans>;
  SavingsPlansToExclude?: Array<string>;
  LookBackTimePeriod: DateInterval;
}
export interface SavingsPlansPurchaseAnalysisDetails {
  CurrencyCode?: string;
  LookbackPeriodInHours?: string;
  CurrentAverageCoverage?: string;
  CurrentAverageHourlyOnDemandSpend?: string;
  CurrentMaximumHourlyOnDemandSpend?: string;
  CurrentMinimumHourlyOnDemandSpend?: string;
  CurrentOnDemandSpend?: string;
  ExistingHourlyCommitment?: string;
  HourlyCommitmentToPurchase?: string;
  EstimatedAverageCoverage?: string;
  EstimatedAverageUtilization?: string;
  EstimatedMonthlySavingsAmount?: string;
  EstimatedOnDemandCost?: string;
  EstimatedOnDemandCostWithCurrentCommitment?: string;
  EstimatedROI?: string;
  EstimatedSavingsAmount?: string;
  EstimatedSavingsPercentage?: string;
  EstimatedCommitmentCost?: string;
  LatestUsageTimestamp?: string;
  UpfrontCost?: string;
  AdditionalMetadata?: string;
  MetricsOverLookbackPeriod?: Array<RecommendationDetailHourlyMetrics>;
}
export interface SavingsPlansPurchaseRecommendation {
  AccountScope?: AccountScope;
  SavingsPlansType?: SupportedSavingsPlansType;
  TermInYears?: TermInYears;
  PaymentOption?: PaymentOption;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  SavingsPlansPurchaseRecommendationDetails?: Array<SavingsPlansPurchaseRecommendationDetail>;
  SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
}
export interface SavingsPlansPurchaseRecommendationDetail {
  SavingsPlansDetails?: SavingsPlansDetails;
  AccountId?: string;
  UpfrontCost?: string;
  EstimatedROI?: string;
  CurrencyCode?: string;
  EstimatedSPCost?: string;
  EstimatedOnDemandCost?: string;
  EstimatedOnDemandCostWithCurrentCommitment?: string;
  EstimatedSavingsAmount?: string;
  EstimatedSavingsPercentage?: string;
  HourlyCommitmentToPurchase?: string;
  EstimatedAverageUtilization?: string;
  EstimatedMonthlySavingsAmount?: string;
  CurrentMinimumHourlyOnDemandSpend?: string;
  CurrentMaximumHourlyOnDemandSpend?: string;
  CurrentAverageHourlyOnDemandSpend?: string;
  RecommendationDetailId?: string;
}
export type SavingsPlansPurchaseRecommendationDetailList = Array<SavingsPlansPurchaseRecommendationDetail>;
export interface SavingsPlansPurchaseRecommendationMetadata {
  RecommendationId?: string;
  GenerationTimestamp?: string;
  AdditionalMetadata?: string;
}
export interface SavingsPlansPurchaseRecommendationSummary {
  EstimatedROI?: string;
  CurrencyCode?: string;
  EstimatedTotalCost?: string;
  CurrentOnDemandSpend?: string;
  EstimatedSavingsAmount?: string;
  TotalRecommendationCount?: string;
  DailyCommitmentToPurchase?: string;
  HourlyCommitmentToPurchase?: string;
  EstimatedSavingsPercentage?: string;
  EstimatedMonthlySavingsAmount?: string;
  EstimatedOnDemandCostWithCurrentCommitment?: string;
}
export interface SavingsPlansSavings {
  NetSavings?: string;
  OnDemandCostEquivalent?: string;
}
export type SavingsPlansToAdd = Array<SavingsPlans>;
export type SavingsPlansToExclude = Array<string>;
export interface SavingsPlansUtilization {
  TotalCommitment?: string;
  UsedCommitment?: string;
  UnusedCommitment?: string;
  UtilizationPercentage?: string;
}
export interface SavingsPlansUtilizationAggregates {
  Utilization: SavingsPlansUtilization;
  Savings?: SavingsPlansSavings;
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}
export interface SavingsPlansUtilizationByTime {
  TimePeriod: DateInterval;
  Utilization: SavingsPlansUtilization;
  Savings?: SavingsPlansSavings;
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}
export interface SavingsPlansUtilizationDetail {
  SavingsPlanArn?: string;
  Attributes?: Record<string, string>;
  Utilization?: SavingsPlansUtilization;
  Savings?: SavingsPlansSavings;
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}
export type SavingsPlansUtilizationDetails = Array<SavingsPlansUtilizationDetail>;
export type SavingsPlansUtilizationsByTime = Array<SavingsPlansUtilizationByTime>;
export type SearchString = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ServiceSpecification {
  EC2Specification?: EC2Specification;
}
export interface SortDefinition {
  Key: string;
  SortOrder?: SortOrder;
}
export type SortDefinitionKey = string;

export type SortDefinitions = Array<SortDefinition>;
export type SortOrder = "ASCENDING" | "DESCENDING";
export interface StartCommitmentPurchaseAnalysisRequest {
  CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration;
}
export interface StartCommitmentPurchaseAnalysisResponse {
  AnalysisId: string;
  AnalysisStartedTime: string;
  EstimatedCompletionTime: string;
}
export interface StartCostAllocationTagBackfillRequest {
  BackfillFrom: string;
}
export interface StartCostAllocationTagBackfillResponse {
  BackfillRequest?: CostAllocationTagBackfillRequest;
}
export interface StartSavingsPlansPurchaseRecommendationGenerationRequest {
}
export interface StartSavingsPlansPurchaseRecommendationGenerationResponse {
  RecommendationId?: string;
  GenerationStartedTime?: string;
  EstimatedCompletionTime?: string;
}
export interface Subscriber {
  Address?: string;
  Type?: SubscriberType;
  Status?: SubscriberStatus;
}
export type SubscriberAddress = string;

export type Subscribers = Array<Subscriber>;
export type SubscriberStatus = "CONFIRMED" | "DECLINED";
export type SubscriberType = "EMAIL" | "SNS";
export type SupportedSavingsPlansType = "COMPUTE_SP" | "EC2_INSTANCE_SP" | "SAGEMAKER_SP";
export type TagKey = string;

export type TagList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  ResourceTags: Array<ResourceTag>;
}
export interface TagResourceResponse {
}
export interface TagValues {
  Key?: string;
  Values?: Array<string>;
  MatchOptions?: Array<MatchOption>;
}
export type TagValuesList = Array<TagValues>;
export interface TargetInstance {
  EstimatedMonthlyCost?: string;
  EstimatedMonthlySavings?: string;
  CurrencyCode?: string;
  DefaultTargetInstance?: boolean;
  ResourceDetails?: ResourceDetails;
  ExpectedResourceUtilization?: ResourceUtilization;
  PlatformDifferences?: Array<PlatformDifference>;
}
export type TargetInstancesList = Array<TargetInstance>;
export interface TerminateRecommendationDetail {
  EstimatedMonthlySavings?: string;
  CurrencyCode?: string;
}
export type TermInYears = "ONE_YEAR" | "THREE_YEARS";
export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export type TotalActualHours = string;

export type TotalActualUnits = string;

export type TotalAmortizedFee = string;

export interface TotalImpactFilter {
  NumericOperator: NumericOperator;
  StartValue: number;
  EndValue?: number;
}
export type TotalPotentialRISavings = string;

export type TotalRunningHours = string;

export type TotalRunningNormalizedUnits = string;

export declare class UnknownMonitorException extends Data.TaggedError(
  "UnknownMonitorException",
)<{
  readonly Message?: string;
}> {}
export declare class UnknownSubscriptionException extends Data.TaggedError(
  "UnknownSubscriptionException",
)<{
  readonly Message?: string;
}> {}
export type UnrealizedSavings = string;

export declare class UnresolvableUsageUnitException extends Data.TaggedError(
  "UnresolvableUsageUnitException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  ResourceTagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export type UnusedHours = string;

export type UnusedUnits = string;

export interface UpdateAnomalyMonitorRequest {
  MonitorArn: string;
  MonitorName?: string;
}
export interface UpdateAnomalyMonitorResponse {
  MonitorArn: string;
}
export interface UpdateAnomalySubscriptionRequest {
  SubscriptionArn: string;
  Threshold?: number;
  Frequency?: AnomalySubscriptionFrequency;
  MonitorArnList?: Array<string>;
  Subscribers?: Array<Subscriber>;
  SubscriptionName?: string;
  ThresholdExpression?: Expression;
}
export interface UpdateAnomalySubscriptionResponse {
  SubscriptionArn: string;
}
export interface UpdateCostAllocationTagsStatusError {
  TagKey?: string;
  Code?: string;
  Message?: string;
}
export type UpdateCostAllocationTagsStatusErrors = Array<UpdateCostAllocationTagsStatusError>;
export interface UpdateCostAllocationTagsStatusRequest {
  CostAllocationTagsStatus: Array<CostAllocationTagStatusEntry>;
}
export interface UpdateCostAllocationTagsStatusResponse {
  Errors?: Array<UpdateCostAllocationTagsStatusError>;
}
export interface UpdateCostCategoryDefinitionRequest {
  CostCategoryArn: string;
  EffectiveStart?: string;
  RuleVersion: CostCategoryRuleVersion;
  Rules: Array<CostCategoryRule>;
  DefaultValue?: string;
  SplitChargeRules?: Array<CostCategorySplitChargeRule>;
}
export interface UpdateCostCategoryDefinitionResponse {
  CostCategoryArn?: string;
  EffectiveStart?: string;
}
export type UsageServices = Array<string>;
export interface UtilizationByTime {
  TimePeriod?: DateInterval;
  Groups?: Array<ReservationUtilizationGroup>;
  Total?: ReservationAggregates;
}
export type UtilizationPercentage = string;

export type UtilizationPercentageInUnits = string;

export type UtilizationsByTime = Array<UtilizationByTime>;
export type Value = string;

export type Values = Array<string>;
export type YearMonthDay = string;

export type ZonedDateTime = string;

export declare namespace CreateAnomalyMonitor {
  export type Input = CreateAnomalyMonitorRequest;
  export type Output = CreateAnomalyMonitorResponse;
  export type Error =
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateAnomalySubscription {
  export type Input = CreateAnomalySubscriptionRequest;
  export type Output = CreateAnomalySubscriptionResponse;
  export type Error =
    | LimitExceededException
    | UnknownMonitorException
    | CommonAwsError;
}

export declare namespace CreateCostCategoryDefinition {
  export type Input = CreateCostCategoryDefinitionRequest;
  export type Output = CreateCostCategoryDefinitionResponse;
  export type Error =
    | LimitExceededException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace DeleteAnomalyMonitor {
  export type Input = DeleteAnomalyMonitorRequest;
  export type Output = DeleteAnomalyMonitorResponse;
  export type Error =
    | LimitExceededException
    | UnknownMonitorException
    | CommonAwsError;
}

export declare namespace DeleteAnomalySubscription {
  export type Input = DeleteAnomalySubscriptionRequest;
  export type Output = DeleteAnomalySubscriptionResponse;
  export type Error =
    | LimitExceededException
    | UnknownSubscriptionException
    | CommonAwsError;
}

export declare namespace DeleteCostCategoryDefinition {
  export type Input = DeleteCostCategoryDefinitionRequest;
  export type Output = DeleteCostCategoryDefinitionResponse;
  export type Error =
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeCostCategoryDefinition {
  export type Input = DescribeCostCategoryDefinitionRequest;
  export type Output = DescribeCostCategoryDefinitionResponse;
  export type Error =
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAnomalies {
  export type Input = GetAnomaliesRequest;
  export type Output = GetAnomaliesResponse;
  export type Error =
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetAnomalyMonitors {
  export type Input = GetAnomalyMonitorsRequest;
  export type Output = GetAnomalyMonitorsResponse;
  export type Error =
    | InvalidNextTokenException
    | LimitExceededException
    | UnknownMonitorException
    | CommonAwsError;
}

export declare namespace GetAnomalySubscriptions {
  export type Input = GetAnomalySubscriptionsRequest;
  export type Output = GetAnomalySubscriptionsResponse;
  export type Error =
    | InvalidNextTokenException
    | LimitExceededException
    | UnknownSubscriptionException
    | CommonAwsError;
}

export declare namespace GetApproximateUsageRecords {
  export type Input = GetApproximateUsageRecordsRequest;
  export type Output = GetApproximateUsageRecordsResponse;
  export type Error =
    | DataUnavailableException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetCommitmentPurchaseAnalysis {
  export type Input = GetCommitmentPurchaseAnalysisRequest;
  export type Output = GetCommitmentPurchaseAnalysisResponse;
  export type Error =
    | AnalysisNotFoundException
    | DataUnavailableException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetCostAndUsage {
  export type Input = GetCostAndUsageRequest;
  export type Output = GetCostAndUsageResponse;
  export type Error =
    | BillExpirationException
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | RequestChangedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCostAndUsageComparisons {
  export type Input = GetCostAndUsageComparisonsRequest;
  export type Output = GetCostAndUsageComparisonsResponse;
  export type Error =
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCostAndUsageWithResources {
  export type Input = GetCostAndUsageWithResourcesRequest;
  export type Output = GetCostAndUsageWithResourcesResponse;
  export type Error =
    | BillExpirationException
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | RequestChangedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCostCategories {
  export type Input = GetCostCategoriesRequest;
  export type Output = GetCostCategoriesResponse;
  export type Error =
    | BillExpirationException
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | RequestChangedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCostComparisonDrivers {
  export type Input = GetCostComparisonDriversRequest;
  export type Output = GetCostComparisonDriversResponse;
  export type Error =
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCostForecast {
  export type Input = GetCostForecastRequest;
  export type Output = GetCostForecastResponse;
  export type Error =
    | DataUnavailableException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetDimensionValues {
  export type Input = GetDimensionValuesRequest;
  export type Output = GetDimensionValuesResponse;
  export type Error =
    | BillExpirationException
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | RequestChangedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetReservationCoverage {
  export type Input = GetReservationCoverageRequest;
  export type Output = GetReservationCoverageResponse;
  export type Error =
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetReservationPurchaseRecommendation {
  export type Input = GetReservationPurchaseRecommendationRequest;
  export type Output = GetReservationPurchaseRecommendationResponse;
  export type Error =
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetReservationUtilization {
  export type Input = GetReservationUtilizationRequest;
  export type Output = GetReservationUtilizationResponse;
  export type Error =
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetRightsizingRecommendation {
  export type Input = GetRightsizingRecommendationRequest;
  export type Output = GetRightsizingRecommendationResponse;
  export type Error =
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetSavingsPlanPurchaseRecommendationDetails {
  export type Input = GetSavingsPlanPurchaseRecommendationDetailsRequest;
  export type Output = GetSavingsPlanPurchaseRecommendationDetailsResponse;
  export type Error =
    | DataUnavailableException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetSavingsPlansCoverage {
  export type Input = GetSavingsPlansCoverageRequest;
  export type Output = GetSavingsPlansCoverageResponse;
  export type Error =
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetSavingsPlansPurchaseRecommendation {
  export type Input = GetSavingsPlansPurchaseRecommendationRequest;
  export type Output = GetSavingsPlansPurchaseRecommendationResponse;
  export type Error =
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetSavingsPlansUtilization {
  export type Input = GetSavingsPlansUtilizationRequest;
  export type Output = GetSavingsPlansUtilizationResponse;
  export type Error =
    | DataUnavailableException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetSavingsPlansUtilizationDetails {
  export type Input = GetSavingsPlansUtilizationDetailsRequest;
  export type Output = GetSavingsPlansUtilizationDetailsResponse;
  export type Error =
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetTags {
  export type Input = GetTagsRequest;
  export type Output = GetTagsResponse;
  export type Error =
    | BillExpirationException
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | RequestChangedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetUsageForecast {
  export type Input = GetUsageForecastRequest;
  export type Output = GetUsageForecastResponse;
  export type Error =
    | DataUnavailableException
    | LimitExceededException
    | ResourceNotFoundException
    | UnresolvableUsageUnitException
    | CommonAwsError;
}

export declare namespace ListCommitmentPurchaseAnalyses {
  export type Input = ListCommitmentPurchaseAnalysesRequest;
  export type Output = ListCommitmentPurchaseAnalysesResponse;
  export type Error =
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListCostAllocationTagBackfillHistory {
  export type Input = ListCostAllocationTagBackfillHistoryRequest;
  export type Output = ListCostAllocationTagBackfillHistoryResponse;
  export type Error =
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListCostAllocationTags {
  export type Input = ListCostAllocationTagsRequest;
  export type Output = ListCostAllocationTagsResponse;
  export type Error =
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListCostCategoryDefinitions {
  export type Input = ListCostCategoryDefinitionsRequest;
  export type Output = ListCostCategoryDefinitionsResponse;
  export type Error =
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListSavingsPlansPurchaseRecommendationGeneration {
  export type Input = ListSavingsPlansPurchaseRecommendationGenerationRequest;
  export type Output = ListSavingsPlansPurchaseRecommendationGenerationResponse;
  export type Error =
    | DataUnavailableException
    | InvalidNextTokenException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ProvideAnomalyFeedback {
  export type Input = ProvideAnomalyFeedbackRequest;
  export type Output = ProvideAnomalyFeedbackResponse;
  export type Error =
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace StartCommitmentPurchaseAnalysis {
  export type Input = StartCommitmentPurchaseAnalysisRequest;
  export type Output = StartCommitmentPurchaseAnalysisResponse;
  export type Error =
    | DataUnavailableException
    | GenerationExistsException
    | LimitExceededException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace StartCostAllocationTagBackfill {
  export type Input = StartCostAllocationTagBackfillRequest;
  export type Output = StartCostAllocationTagBackfillResponse;
  export type Error =
    | BackfillLimitExceededException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace StartSavingsPlansPurchaseRecommendationGeneration {
  export type Input = StartSavingsPlansPurchaseRecommendationGenerationRequest;
  export type Output = StartSavingsPlansPurchaseRecommendationGenerationResponse;
  export type Error =
    | DataUnavailableException
    | GenerationExistsException
    | LimitExceededException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | LimitExceededException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateAnomalyMonitor {
  export type Input = UpdateAnomalyMonitorRequest;
  export type Output = UpdateAnomalyMonitorResponse;
  export type Error =
    | LimitExceededException
    | UnknownMonitorException
    | CommonAwsError;
}

export declare namespace UpdateAnomalySubscription {
  export type Input = UpdateAnomalySubscriptionRequest;
  export type Output = UpdateAnomalySubscriptionResponse;
  export type Error =
    | LimitExceededException
    | UnknownMonitorException
    | UnknownSubscriptionException
    | CommonAwsError;
}

export declare namespace UpdateCostAllocationTagsStatus {
  export type Input = UpdateCostAllocationTagsStatusRequest;
  export type Output = UpdateCostAllocationTagsStatusResponse;
  export type Error =
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace UpdateCostCategoryDefinition {
  export type Input = UpdateCostCategoryDefinitionRequest;
  export type Output = UpdateCostCategoryDefinitionResponse;
  export type Error =
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

