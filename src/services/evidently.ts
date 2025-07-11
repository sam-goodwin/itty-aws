import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface Evidently {
  batchEvaluateFeature(
    input: BatchEvaluateFeatureRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createExperiment(
    input: CreateExperimentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createFeature(
    input: CreateFeatureRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createLaunch(
    input: CreateLaunchRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createProject(
    input: CreateProjectRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createSegment(
    input: CreateSegmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  deleteExperiment(
    input: DeleteExperimentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ValidationException | CommonAwsError
  >;
  deleteFeature(
    input: DeleteFeatureRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteLaunch(
    input: DeleteLaunchRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteProject(
    input: DeleteProjectRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteSegment(
    input: DeleteSegmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  evaluateFeature(
    input: EvaluateFeatureRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getExperiment(
    input: GetExperimentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getExperimentResults(
    input: GetExperimentResultsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFeature(
    input: GetFeatureRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getLaunch(
    input: GetLaunchRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getProject(
    input: GetProjectRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSegment(
    input: GetSegmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listExperiments(
    input: ListExperimentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listFeatures(
    input: ListFeaturesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listLaunches(
    input: ListLaunchesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listProjects(
    input: ListProjectsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listSegmentReferences(
    input: ListSegmentReferencesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listSegments(
    input: ListSegmentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  putProjectEvents(
    input: PutProjectEventsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startExperiment(
    input: StartExperimentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startLaunch(
    input: StartLaunchRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopExperiment(
    input: StopExperimentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopLaunch(
    input: StopLaunchRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  testSegmentPattern(
    input: TestSegmentPatternRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateExperiment(
    input: UpdateExperimentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateFeature(
    input: UpdateFeatureRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  updateLaunch(
    input: UpdateLaunchRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateProject(
    input: UpdateProjectRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  updateProjectDataDelivery(
    input: UpdateProjectDataDeliveryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
}

export interface AccessDeniedException {
}
export type AppConfigResourceId = string;

export type Arn = string;

export interface BatchEvaluateFeatureRequest {
}
export interface BatchEvaluateFeatureResponse {
}
export type ChangeDirectionEnum = string;

export interface CloudWatchLogsDestination {
}
export interface CloudWatchLogsDestinationConfig {
}
export interface ConflictException {
}
export interface CreateExperimentRequest {
}
export interface CreateExperimentResponse {
}
export interface CreateFeatureRequest {
}
export interface CreateFeatureResponse {
}
export interface CreateLaunchRequest {
}
export interface CreateLaunchResponse {
}
export interface CreateProjectRequest {
}
export interface CreateProjectResponse {
}
export interface CreateSegmentRequest {
}
export interface CreateSegmentResponse {
}
export type CwDimensionSafeName = string;

export type CwLogGroupSafeName = string;

export interface DeleteExperimentRequest {
}
export interface DeleteExperimentResponse {
}
export interface DeleteFeatureRequest {
}
export interface DeleteFeatureResponse {
}
export interface DeleteLaunchRequest {
}
export interface DeleteLaunchResponse {
}
export interface DeleteProjectRequest {
}
export interface DeleteProjectResponse {
}
export interface DeleteSegmentRequest {
}
export interface DeleteSegmentResponse {
}
export type Description = string;

export type DoubleValueList = Array<unknown>;
export type EntityId = string;

export type EntityOverrideMap = Record<string, unknown>;
export type ErrorCodeEnum = string;

export type ErrorMessage = string;

export interface EvaluateFeatureRequest {
}
export interface EvaluateFeatureResponse {
}
export interface EvaluationRequest {
}
export type EvaluationRequestsList = Array<unknown>;
export interface EvaluationResult {
}
export type EvaluationResultsList = Array<unknown>;
export interface EvaluationRule {
}
export type EvaluationRulesList = Array<unknown>;
export interface Event {
}
export type EventList = Array<unknown>;
export type EventType = string;

export interface Experiment {
}
export type ExperimentArn = string;

export type ExperimentBaseStat = string;

export interface ExperimentExecution {
}
export type ExperimentList = Array<unknown>;
export type ExperimentName = string;

export interface ExperimentReport {
}
export type ExperimentReportList = Array<unknown>;
export type ExperimentReportName = string;

export type ExperimentReportNameList = Array<unknown>;
export type ExperimentResultRequestType = string;

export type ExperimentResultRequestTypeList = Array<unknown>;
export type ExperimentResultResponseType = string;

export interface ExperimentResultsData {
}
export type ExperimentResultsDataList = Array<unknown>;
export interface ExperimentSchedule {
}
export type ExperimentStatus = string;

export type ExperimentStopDesiredState = string;

export type ExperimentType = string;

export interface Feature {
}
export type FeatureArn = string;

export type FeatureEvaluationStrategy = string;

export type FeatureName = string;

export type FeatureStatus = string;

export type FeatureSummariesList = Array<unknown>;
export interface FeatureSummary {
}
export type FeatureToVariationMap = Record<string, unknown>;
export interface GetExperimentRequest {
}
export interface GetExperimentResponse {
}
export interface GetExperimentResultsRequest {
}
export interface GetExperimentResultsResponse {
}
export interface GetFeatureRequest {
}
export interface GetFeatureResponse {
}
export interface GetLaunchRequest {
}
export interface GetLaunchResponse {
}
export interface GetProjectRequest {
}
export interface GetProjectResponse {
}
export interface GetSegmentRequest {
}
export interface GetSegmentResponse {
}
export type GroupName = string;

export type GroupToWeightMap = Record<string, unknown>;
export interface InternalServerException {
}
export type JsonPath = string;

export type JsonValue = string;

export interface Launch {
}
export type LaunchArn = string;

export type LaunchesList = Array<unknown>;
export interface LaunchExecution {
}
export interface LaunchGroup {
}
export interface LaunchGroupConfig {
}
export type LaunchGroupConfigList = Array<unknown>;
export type LaunchGroupList = Array<unknown>;
export type LaunchName = string;

export type LaunchStatus = string;

export type LaunchStopDesiredState = string;

export type LaunchType = string;

export interface ListExperimentsRequest {
}
export interface ListExperimentsResponse {
}
export interface ListFeaturesRequest {
}
export interface ListFeaturesResponse {
}
export interface ListLaunchesRequest {
}
export interface ListLaunchesResponse {
}
export interface ListProjectsRequest {
}
export interface ListProjectsResponse {
}
export interface ListSegmentReferencesRequest {
}
export interface ListSegmentReferencesResponse {
}
export interface ListSegmentsRequest {
}
export interface ListSegmentsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type MaxExperiments = number;

export type MaxFeatures = number;

export type MaxLaunches = number;

export type MaxProjects = number;

export type MaxReferences = number;

export type MaxSegments = number;

export interface MetricDefinition {
}
export interface MetricDefinitionConfig {
}
export interface MetricGoal {
}
export interface MetricGoalConfig {
}
export type MetricGoalConfigList = Array<unknown>;
export type MetricGoalsList = Array<unknown>;
export interface MetricMonitor {
}
export interface MetricMonitorConfig {
}
export type MetricMonitorConfigList = Array<unknown>;
export type MetricMonitorList = Array<unknown>;
export type MetricNameList = Array<unknown>;
export type MetricUnitLabel = string;

export type NextToken = string;

export interface OnlineAbConfig {
}
export interface OnlineAbDefinition {
}
export interface Project {
}
export interface ProjectAppConfigResource {
}
export interface ProjectAppConfigResourceConfig {
}
export type ProjectArn = string;

export interface ProjectDataDelivery {
}
export interface ProjectDataDeliveryConfig {
}
export type ProjectName = string;

export type ProjectRef = string;

export type ProjectStatus = string;

export type ProjectSummariesList = Array<unknown>;
export interface ProjectSummary {
}
export interface PutProjectEventsRequest {
}
export interface PutProjectEventsResponse {
}
export interface PutProjectEventsResultEntry {
}
export type PutProjectEventsResultEntryList = Array<unknown>;
export type RandomizationSalt = string;

export interface RefResource {
}
export type RefResourceList = Array<unknown>;
export interface ResourceNotFoundException {
}
export type ResultsPeriod = number;

export type RuleName = string;

export type RuleType = string;

export type S3BucketSafeName = string;

export interface S3Destination {
}
export interface S3DestinationConfig {
}
export type S3PrefixSafeName = string;

export interface ScheduledSplit {
}
export interface ScheduledSplitConfig {
}
export type ScheduledSplitConfigList = Array<unknown>;
export interface ScheduledSplitsLaunchConfig {
}
export interface ScheduledSplitsLaunchDefinition {
}
export type ScheduledStepList = Array<unknown>;
export interface Segment {
}
export type SegmentArn = string;

export type SegmentList = Array<unknown>;
export type SegmentName = string;

export interface SegmentOverride {
}
export type SegmentOverridesList = Array<unknown>;
export type SegmentPattern = string;

export type SegmentRef = string;

export type SegmentReferenceResourceType = string;

export interface ServiceQuotaExceededException {
}
export interface ServiceUnavailableException {
}
export type SplitWeight = number;

export interface StartExperimentRequest {
}
export interface StartExperimentResponse {
}
export interface StartLaunchRequest {
}
export interface StartLaunchResponse {
}
export interface StopExperimentRequest {
}
export interface StopExperimentResponse {
}
export interface StopLaunchRequest {
}
export interface StopLaunchResponse {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface TestSegmentPatternRequest {
}
export interface TestSegmentPatternResponse {
}
export interface ThrottlingException {
}
export type TimestampList = Array<unknown>;
export interface Treatment {
}
export interface TreatmentConfig {
}
export type TreatmentConfigList = Array<unknown>;
export type TreatmentList = Array<unknown>;
export type TreatmentName = string;

export type TreatmentNameList = Array<unknown>;
export type TreatmentToWeightMap = Record<string, unknown>;
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateExperimentRequest {
}
export interface UpdateExperimentResponse {
}
export interface UpdateFeatureRequest {
}
export interface UpdateFeatureResponse {
}
export interface UpdateLaunchRequest {
}
export interface UpdateLaunchResponse {
}
export interface UpdateProjectDataDeliveryRequest {
}
export interface UpdateProjectDataDeliveryResponse {
}
export interface UpdateProjectRequest {
}
export interface UpdateProjectResponse {
}
export type Uuid = string;

export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFieldList = Array<unknown>;
export type ValidationExceptionReason = string;

export type VariableValue = never;
export interface Variation {
}
export interface VariationConfig {
}
export type VariationConfigsList = Array<unknown>;
export type VariationName = string;

export type VariationNameList = Array<unknown>;
export type VariationsList = Array<unknown>;
export type VariationValueType = string;

export declare namespace BatchEvaluateFeature {
  export type Input = BatchEvaluateFeatureRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateExperiment {
  export type Input = CreateExperimentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFeature {
  export type Input = CreateFeatureRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLaunch {
  export type Input = CreateLaunchRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProject {
  export type Input = CreateProjectRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSegment {
  export type Input = CreateSegmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteExperiment {
  export type Input = DeleteExperimentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFeature {
  export type Input = DeleteFeatureRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLaunch {
  export type Input = DeleteLaunchRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProject {
  export type Input = DeleteProjectRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSegment {
  export type Input = DeleteSegmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EvaluateFeature {
  export type Input = EvaluateFeatureRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExperiment {
  export type Input = GetExperimentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExperimentResults {
  export type Input = GetExperimentResultsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFeature {
  export type Input = GetFeatureRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLaunch {
  export type Input = GetLaunchRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProject {
  export type Input = GetProjectRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSegment {
  export type Input = GetSegmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExperiments {
  export type Input = ListExperimentsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFeatures {
  export type Input = ListFeaturesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLaunches {
  export type Input = ListLaunchesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProjects {
  export type Input = ListProjectsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSegmentReferences {
  export type Input = ListSegmentReferencesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSegments {
  export type Input = ListSegmentsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutProjectEvents {
  export type Input = PutProjectEventsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartExperiment {
  export type Input = StartExperimentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartLaunch {
  export type Input = StartLaunchRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopExperiment {
  export type Input = StopExperimentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopLaunch {
  export type Input = StopLaunchRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TestSegmentPattern {
  export type Input = TestSegmentPatternRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateExperiment {
  export type Input = UpdateExperimentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFeature {
  export type Input = UpdateFeatureRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLaunch {
  export type Input = UpdateLaunchRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProject {
  export type Input = UpdateProjectRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProjectDataDelivery {
  export type Input = UpdateProjectDataDeliveryRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

