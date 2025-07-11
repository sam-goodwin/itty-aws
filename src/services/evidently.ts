import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Evidently {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  testSegmentPattern(
    input: TestSegmentPatternRequest,
  ): Effect.Effect<
    TestSegmentPatternResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AppConfigResourceId = string;

export type Arn = string;

export interface BatchEvaluateFeatureRequest {
  project: string;
  requests: Array<EvaluationRequest>;
}
export interface BatchEvaluateFeatureResponse {
  results?: Array<EvaluationResult>;
}
export type ChangeDirectionEnum = string;

export interface CloudWatchLogsDestination {
  logGroup?: string;
}
export interface CloudWatchLogsDestinationConfig {
  logGroup?: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface CreateExperimentRequest {
  project: string;
  name: string;
  description?: string;
  treatments: Array<TreatmentConfig>;
  metricGoals: Array<MetricGoalConfig>;
  randomizationSalt?: string;
  samplingRate?: number;
  onlineAbConfig?: OnlineAbConfig;
  segment?: string;
  tags?: Record<string, string>;
}
export interface CreateExperimentResponse {
  experiment: Experiment;
}
export interface CreateFeatureRequest {
  project: string;
  name: string;
  evaluationStrategy?: string;
  description?: string;
  variations: Array<VariationConfig>;
  defaultVariation?: string;
  tags?: Record<string, string>;
  entityOverrides?: Record<string, string>;
}
export interface CreateFeatureResponse {
  feature?: Feature;
}
export interface CreateLaunchRequest {
  project: string;
  name: string;
  description?: string;
  scheduledSplitsConfig?: ScheduledSplitsLaunchConfig;
  metricMonitors?: Array<MetricMonitorConfig>;
  groups: Array<LaunchGroupConfig>;
  randomizationSalt?: string;
  tags?: Record<string, string>;
}
export interface CreateLaunchResponse {
  launch: Launch;
}
export interface CreateProjectRequest {
  name: string;
  description?: string;
  dataDelivery?: ProjectDataDeliveryConfig;
  appConfigResource?: ProjectAppConfigResourceConfig;
  tags?: Record<string, string>;
}
export interface CreateProjectResponse {
  project: Project;
}
export interface CreateSegmentRequest {
  name: string;
  pattern: string;
  description?: string;
  tags?: Record<string, string>;
}
export interface CreateSegmentResponse {
  segment: Segment;
}
export type CwDimensionSafeName = string;

export type CwLogGroupSafeName = string;

export interface DeleteExperimentRequest {
  project: string;
  experiment: string;
}
export interface DeleteExperimentResponse {}
export interface DeleteFeatureRequest {
  project: string;
  feature: string;
}
export interface DeleteFeatureResponse {}
export interface DeleteLaunchRequest {
  project: string;
  launch: string;
}
export interface DeleteLaunchResponse {}
export interface DeleteProjectRequest {
  project: string;
}
export interface DeleteProjectResponse {}
export interface DeleteSegmentRequest {
  segment: string;
}
export interface DeleteSegmentResponse {}
export type Description = string;

export type DoubleValueList = Array<number>;
export type EntityId = string;

export type EntityOverrideMap = Record<string, string>;
export type ErrorCodeEnum = string;

export type ErrorMessage = string;

export interface EvaluateFeatureRequest {
  project: string;
  feature: string;
  entityId: string;
  evaluationContext?: string;
}
export interface EvaluateFeatureResponse {
  variation?: string;
  value?: VariableValue;
  reason?: string;
  details?: string;
}
export interface EvaluationRequest {
  feature: string;
  entityId: string;
  evaluationContext?: string;
}
export type EvaluationRequestsList = Array<EvaluationRequest>;
export interface EvaluationResult {
  project?: string;
  feature: string;
  variation?: string;
  value?: VariableValue;
  entityId: string;
  reason?: string;
  details?: string;
}
export type EvaluationResultsList = Array<EvaluationResult>;
export interface EvaluationRule {
  name?: string;
  type: string;
}
export type EvaluationRulesList = Array<EvaluationRule>;
export interface Event {
  timestamp: Date | string;
  type: string;
  data: string;
}
export type EventList = Array<Event>;
export type EventType = string;

export interface Experiment {
  arn: string;
  name: string;
  project?: string;
  status: string;
  statusReason?: string;
  description?: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
  schedule?: ExperimentSchedule;
  execution?: ExperimentExecution;
  treatments?: Array<Treatment>;
  metricGoals?: Array<MetricGoal>;
  randomizationSalt?: string;
  samplingRate?: number;
  segment?: string;
  type: string;
  onlineAbDefinition?: OnlineAbDefinition;
  tags?: Record<string, string>;
}
export type ExperimentArn = string;

export type ExperimentBaseStat = string;

export interface ExperimentExecution {
  startedTime?: Date | string;
  endedTime?: Date | string;
}
export type ExperimentList = Array<Experiment>;
export type ExperimentName = string;

export interface ExperimentReport {
  metricName?: string;
  treatmentName?: string;
  reportName?: string;
  content?: string;
}
export type ExperimentReportList = Array<ExperimentReport>;
export type ExperimentReportName = string;

export type ExperimentReportNameList = Array<string>;
export type ExperimentResultRequestType = string;

export type ExperimentResultRequestTypeList = Array<string>;
export type ExperimentResultResponseType = string;

export interface ExperimentResultsData {
  metricName?: string;
  treatmentName?: string;
  resultStat?: string;
  values?: Array<number>;
}
export type ExperimentResultsDataList = Array<ExperimentResultsData>;
export interface ExperimentSchedule {
  analysisCompleteTime?: Date | string;
}
export type ExperimentStatus = string;

export type ExperimentStopDesiredState = string;

export type ExperimentType = string;

export interface Feature {
  arn: string;
  name: string;
  project?: string;
  status: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
  description?: string;
  evaluationStrategy: string;
  valueType: string;
  variations: Array<Variation>;
  defaultVariation?: string;
  evaluationRules?: Array<EvaluationRule>;
  tags?: Record<string, string>;
  entityOverrides?: Record<string, string>;
}
export type FeatureArn = string;

export type FeatureEvaluationStrategy = string;

export type FeatureName = string;

export type FeatureStatus = string;

export type FeatureSummariesList = Array<FeatureSummary>;
export interface FeatureSummary {
  arn: string;
  name: string;
  project?: string;
  status: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
  evaluationStrategy: string;
  evaluationRules?: Array<EvaluationRule>;
  defaultVariation?: string;
  tags?: Record<string, string>;
}
export type FeatureToVariationMap = Record<string, string>;
export interface GetExperimentRequest {
  project: string;
  experiment: string;
}
export interface GetExperimentResponse {
  experiment?: Experiment;
}
export interface GetExperimentResultsRequest {
  project: string;
  experiment: string;
  startTime?: Date | string;
  endTime?: Date | string;
  metricNames: Array<string>;
  treatmentNames: Array<string>;
  baseStat?: string;
  resultStats?: Array<string>;
  reportNames?: Array<string>;
  period?: number;
}
export interface GetExperimentResultsResponse {
  resultsData?: Array<ExperimentResultsData>;
  reports?: Array<ExperimentReport>;
  timestamps?: Array<Date | string>;
  details?: string;
}
export interface GetFeatureRequest {
  project: string;
  feature: string;
}
export interface GetFeatureResponse {
  feature: Feature;
}
export interface GetLaunchRequest {
  project: string;
  launch: string;
}
export interface GetLaunchResponse {
  launch?: Launch;
}
export interface GetProjectRequest {
  project: string;
}
export interface GetProjectResponse {
  project: Project;
}
export interface GetSegmentRequest {
  segment: string;
}
export interface GetSegmentResponse {
  segment: Segment;
}
export type GroupName = string;

export type GroupToWeightMap = Record<string, number>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type JsonPath = string;

export type JsonValue = string;

export interface Launch {
  arn: string;
  name: string;
  project?: string;
  status: string;
  statusReason?: string;
  description?: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
  execution?: LaunchExecution;
  groups?: Array<LaunchGroup>;
  metricMonitors?: Array<MetricMonitor>;
  randomizationSalt?: string;
  type: string;
  scheduledSplitsDefinition?: ScheduledSplitsLaunchDefinition;
  tags?: Record<string, string>;
}
export type LaunchArn = string;

export type LaunchesList = Array<Launch>;
export interface LaunchExecution {
  startedTime?: Date | string;
  endedTime?: Date | string;
}
export interface LaunchGroup {
  name: string;
  description?: string;
  featureVariations: Record<string, string>;
}
export interface LaunchGroupConfig {
  name: string;
  description?: string;
  feature: string;
  variation: string;
}
export type LaunchGroupConfigList = Array<LaunchGroupConfig>;
export type LaunchGroupList = Array<LaunchGroup>;
export type LaunchName = string;

export type LaunchStatus = string;

export type LaunchStopDesiredState = string;

export type LaunchType = string;

export interface ListExperimentsRequest {
  project: string;
  maxResults?: number;
  nextToken?: string;
  status?: string;
}
export interface ListExperimentsResponse {
  experiments?: Array<Experiment>;
  nextToken?: string;
}
export interface ListFeaturesRequest {
  project: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListFeaturesResponse {
  features?: Array<FeatureSummary>;
  nextToken?: string;
}
export interface ListLaunchesRequest {
  project: string;
  maxResults?: number;
  nextToken?: string;
  status?: string;
}
export interface ListLaunchesResponse {
  launches?: Array<Launch>;
  nextToken?: string;
}
export interface ListProjectsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListProjectsResponse {
  projects?: Array<ProjectSummary>;
  nextToken?: string;
}
export interface ListSegmentReferencesRequest {
  segment: string;
  maxResults?: number;
  nextToken?: string;
  type: string;
}
export interface ListSegmentReferencesResponse {
  referencedBy?: Array<RefResource>;
  nextToken?: string;
}
export interface ListSegmentsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSegmentsResponse {
  segments?: Array<Segment>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxExperiments = number;

export type MaxFeatures = number;

export type MaxLaunches = number;

export type MaxProjects = number;

export type MaxReferences = number;

export type MaxSegments = number;

export interface MetricDefinition {
  name?: string;
  entityIdKey?: string;
  valueKey?: string;
  eventPattern?: string;
  unitLabel?: string;
}
export interface MetricDefinitionConfig {
  name: string;
  entityIdKey: string;
  valueKey: string;
  eventPattern?: string;
  unitLabel?: string;
}
export interface MetricGoal {
  metricDefinition: MetricDefinition;
  desiredChange?: string;
}
export interface MetricGoalConfig {
  metricDefinition: MetricDefinitionConfig;
  desiredChange?: string;
}
export type MetricGoalConfigList = Array<MetricGoalConfig>;
export type MetricGoalsList = Array<MetricGoal>;
export interface MetricMonitor {
  metricDefinition: MetricDefinition;
}
export interface MetricMonitorConfig {
  metricDefinition: MetricDefinitionConfig;
}
export type MetricMonitorConfigList = Array<MetricMonitorConfig>;
export type MetricMonitorList = Array<MetricMonitor>;
export type MetricNameList = Array<string>;
export type MetricUnitLabel = string;

export type NextToken = string;

export interface OnlineAbConfig {
  controlTreatmentName?: string;
  treatmentWeights?: Record<string, number>;
}
export interface OnlineAbDefinition {
  controlTreatmentName?: string;
  treatmentWeights?: Record<string, number>;
}
export interface Project {
  arn: string;
  name: string;
  status: string;
  description?: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
  featureCount?: number;
  launchCount?: number;
  activeLaunchCount?: number;
  experimentCount?: number;
  activeExperimentCount?: number;
  dataDelivery?: ProjectDataDelivery;
  appConfigResource?: ProjectAppConfigResource;
  tags?: Record<string, string>;
}
export interface ProjectAppConfigResource {
  applicationId: string;
  environmentId: string;
  configurationProfileId: string;
}
export interface ProjectAppConfigResourceConfig {
  applicationId?: string;
  environmentId?: string;
}
export type ProjectArn = string;

export interface ProjectDataDelivery {
  s3Destination?: S3Destination;
  cloudWatchLogs?: CloudWatchLogsDestination;
}
export interface ProjectDataDeliveryConfig {
  s3Destination?: S3DestinationConfig;
  cloudWatchLogs?: CloudWatchLogsDestinationConfig;
}
export type ProjectName = string;

export type ProjectRef = string;

export type ProjectStatus = string;

export type ProjectSummariesList = Array<ProjectSummary>;
export interface ProjectSummary {
  arn: string;
  name: string;
  status: string;
  description?: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
  featureCount?: number;
  launchCount?: number;
  activeLaunchCount?: number;
  experimentCount?: number;
  activeExperimentCount?: number;
  tags?: Record<string, string>;
}
export interface PutProjectEventsRequest {
  project: string;
  events: Array<Event>;
}
export interface PutProjectEventsResponse {
  failedEventCount?: number;
  eventResults?: Array<PutProjectEventsResultEntry>;
}
export interface PutProjectEventsResultEntry {
  eventId?: string;
  errorCode?: string;
  errorMessage?: string;
}
export type PutProjectEventsResultEntryList =
  Array<PutProjectEventsResultEntry>;
export type RandomizationSalt = string;

export interface RefResource {
  name: string;
  type: string;
  arn?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  lastUpdatedOn?: string;
}
export type RefResourceList = Array<RefResource>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export type ResultsPeriod = number;

export type RuleName = string;

export type RuleType = string;

export type S3BucketSafeName = string;

export interface S3Destination {
  bucket?: string;
  prefix?: string;
}
export interface S3DestinationConfig {
  bucket?: string;
  prefix?: string;
}
export type S3PrefixSafeName = string;

export interface ScheduledSplit {
  startTime: Date | string;
  groupWeights?: Record<string, number>;
  segmentOverrides?: Array<SegmentOverride>;
}
export interface ScheduledSplitConfig {
  startTime: Date | string;
  groupWeights: Record<string, number>;
  segmentOverrides?: Array<SegmentOverride>;
}
export type ScheduledSplitConfigList = Array<ScheduledSplitConfig>;
export interface ScheduledSplitsLaunchConfig {
  steps: Array<ScheduledSplitConfig>;
}
export interface ScheduledSplitsLaunchDefinition {
  steps?: Array<ScheduledSplit>;
}
export type ScheduledStepList = Array<ScheduledSplit>;
export interface Segment {
  arn: string;
  name: string;
  pattern: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
  description?: string;
  experimentCount?: number;
  launchCount?: number;
  tags?: Record<string, string>;
}
export type SegmentArn = string;

export type SegmentList = Array<Segment>;
export type SegmentName = string;

export interface SegmentOverride {
  segment: string;
  evaluationOrder: number;
  weights: Record<string, number>;
}
export type SegmentOverridesList = Array<SegmentOverride>;
export type SegmentPattern = string;

export type SegmentRef = string;

export type SegmentReferenceResourceType = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type SplitWeight = number;

export interface StartExperimentRequest {
  project: string;
  experiment: string;
  analysisCompleteTime: Date | string;
}
export interface StartExperimentResponse {
  startedTime?: Date | string;
}
export interface StartLaunchRequest {
  project: string;
  launch: string;
}
export interface StartLaunchResponse {
  launch: Launch;
}
export interface StopExperimentRequest {
  project: string;
  experiment: string;
  desiredState?: string;
  reason?: string;
}
export interface StopExperimentResponse {
  endedTime?: Date | string;
}
export interface StopLaunchRequest {
  project: string;
  launch: string;
  desiredState?: string;
  reason?: string;
}
export interface StopLaunchResponse {
  endedTime?: Date | string;
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

export interface TestSegmentPatternRequest {
  pattern: string;
  payload: string;
}
export interface TestSegmentPatternResponse {
  match: boolean;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type TimestampList = Array<Date | string>;
export interface Treatment {
  name: string;
  description?: string;
  featureVariations?: Record<string, string>;
}
export interface TreatmentConfig {
  name: string;
  description?: string;
  feature: string;
  variation: string;
}
export type TreatmentConfigList = Array<TreatmentConfig>;
export type TreatmentList = Array<Treatment>;
export type TreatmentName = string;

export type TreatmentNameList = Array<string>;
export type TreatmentToWeightMap = Record<string, number>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateExperimentRequest {
  project: string;
  experiment: string;
  description?: string;
  treatments?: Array<TreatmentConfig>;
  metricGoals?: Array<MetricGoalConfig>;
  randomizationSalt?: string;
  samplingRate?: number;
  segment?: string;
  removeSegment?: boolean;
  onlineAbConfig?: OnlineAbConfig;
}
export interface UpdateExperimentResponse {
  experiment: Experiment;
}
export interface UpdateFeatureRequest {
  project: string;
  feature: string;
  evaluationStrategy?: string;
  description?: string;
  addOrUpdateVariations?: Array<VariationConfig>;
  removeVariations?: Array<string>;
  defaultVariation?: string;
  entityOverrides?: Record<string, string>;
}
export interface UpdateFeatureResponse {
  feature: Feature;
}
export interface UpdateLaunchRequest {
  project: string;
  launch: string;
  description?: string;
  groups?: Array<LaunchGroupConfig>;
  metricMonitors?: Array<MetricMonitorConfig>;
  randomizationSalt?: string;
  scheduledSplitsConfig?: ScheduledSplitsLaunchConfig;
}
export interface UpdateLaunchResponse {
  launch: Launch;
}
export interface UpdateProjectDataDeliveryRequest {
  project: string;
  s3Destination?: S3DestinationConfig;
  cloudWatchLogs?: CloudWatchLogsDestinationConfig;
}
export interface UpdateProjectDataDeliveryResponse {
  project: Project;
}
export interface UpdateProjectRequest {
  project: string;
  appConfigResource?: ProjectAppConfigResourceConfig;
  description?: string;
}
export interface UpdateProjectResponse {
  project: Project;
}
export type Uuid = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly reason?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type VariableValue =
  | {
      boolValue: boolean;
      stringValue?: undefined;
      longValue?: undefined;
      doubleValue?: undefined;
    }
  | {
      boolValue?: undefined;
      stringValue: string;
      longValue?: undefined;
      doubleValue?: undefined;
    }
  | {
      boolValue?: undefined;
      stringValue?: undefined;
      longValue: number;
      doubleValue?: undefined;
    }
  | {
      boolValue?: undefined;
      stringValue?: undefined;
      longValue?: undefined;
      doubleValue: number;
    };
export interface Variation {
  name?: string;
  value?: VariableValue;
}
export interface VariationConfig {
  name: string;
  value: VariableValue;
}
export type VariationConfigsList = Array<VariationConfig>;
export type VariationName = string;

export type VariationNameList = Array<string>;
export type VariationsList = Array<Variation>;
export type VariationValueType = string;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TestSegmentPattern {
  export type Input = TestSegmentPatternRequest;
  export type Output = TestSegmentPatternResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
