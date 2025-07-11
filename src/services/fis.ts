import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface FaultInjectionSimulator {
  createExperimentTemplate(
    input: CreateExperimentTemplateRequest,
  ): Effect.Effect<
    {},
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createTargetAccountConfiguration(
    input: CreateTargetAccountConfigurationRequest,
  ): Effect.Effect<
    {},
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  deleteExperimentTemplate(
    input: DeleteExperimentTemplateRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteTargetAccountConfiguration(
    input: DeleteTargetAccountConfigurationRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getAction(
    input: GetActionRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getExperiment(
    input: GetExperimentRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getExperimentTargetAccountConfiguration(
    input: GetExperimentTargetAccountConfigurationRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getExperimentTemplate(
    input: GetExperimentTemplateRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getSafetyLever(
    input: GetSafetyLeverRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | CommonAwsError
  >;
  getTargetAccountConfiguration(
    input: GetTargetAccountConfigurationRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getTargetResourceType(
    input: GetTargetResourceTypeRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listActions(
    input: ListActionsRequest,
  ): Effect.Effect<
    {},
    ValidationException | CommonAwsError
  >;
  listExperimentResolvedTargets(
    input: ListExperimentResolvedTargetsRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listExperimentTargetAccountConfigurations(
    input: ListExperimentTargetAccountConfigurationsRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listExperimentTemplates(
    input: ListExperimentTemplatesRequest,
  ): Effect.Effect<
    {},
    ValidationException | CommonAwsError
  >;
  listExperiments(
    input: ListExperimentsRequest,
  ): Effect.Effect<
    {},
    ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listTargetAccountConfigurations(
    input: ListTargetAccountConfigurationsRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTargetResourceTypes(
    input: ListTargetResourceTypesRequest,
  ): Effect.Effect<
    {},
    ValidationException | CommonAwsError
  >;
  startExperiment(
    input: StartExperimentRequest,
  ): Effect.Effect<
    {},
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  stopExperiment(
    input: StopExperimentRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  updateExperimentTemplate(
    input: UpdateExperimentTemplateRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  updateSafetyLeverState(
    input: UpdateSafetyLeverStateRequest,
  ): Effect.Effect<
    {},
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateTargetAccountConfiguration(
    input: UpdateTargetAccountConfigurationRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type Fis = FaultInjectionSimulator;

export type AccountTargeting = never;
export interface Action {
}
export type ActionDescription = string;

export type ActionId = string;

export interface ActionParameter {
}
export type ActionParameterDescription = string;

export type ActionParameterMap = Record<string, unknown>;
export type ActionParameterName = string;

export type ActionParameterRequired = boolean;

export type ActionsMode = never;
export interface ActionSummary {
}
export type ActionSummaryList = Array<unknown>;
export interface ActionTarget {
}
export type ActionTargetMap = Record<string, unknown>;
export type ActionTargetName = string;

export type ClientToken = string;

export type CloudWatchLogGroupArn = string;

export interface ConflictException {
}
export interface CreateExperimentTemplateActionInput {
}
export type CreateExperimentTemplateActionInputMap = Record<string, unknown>;
export interface CreateExperimentTemplateExperimentOptionsInput {
}
export interface CreateExperimentTemplateLogConfigurationInput {
}
export interface CreateExperimentTemplateReportConfigurationInput {
}
export interface CreateExperimentTemplateRequest {
}
export interface CreateExperimentTemplateResponse {
}
export interface CreateExperimentTemplateStopConditionInput {
}
export type CreateExperimentTemplateStopConditionInputList = Array<unknown>;
export interface CreateExperimentTemplateTargetInput {
}
export type CreateExperimentTemplateTargetInputMap = Record<string, unknown>;
export interface CreateTargetAccountConfigurationRequest {
}
export interface CreateTargetAccountConfigurationResponse {
}
export type CreationTime = Date | string;

export interface DeleteExperimentTemplateRequest {
}
export interface DeleteExperimentTemplateResponse {
}
export interface DeleteTargetAccountConfigurationRequest {
}
export interface DeleteTargetAccountConfigurationResponse {
}
export type EmptyTargetResolutionMode = never;
export type ExceptionMessage = string;

export interface Experiment {
}
export interface ExperimentAction {
}
export type ExperimentActionDescription = string;

export type ExperimentActionEndTime = Date | string;

export type ExperimentActionMap = Record<string, unknown>;
export type ExperimentActionName = string;

export type ExperimentActionParameter = string;

export type ExperimentActionParameterMap = Record<string, unknown>;
export type ExperimentActionParameterName = string;

export type ExperimentActionStartAfter = string;

export type ExperimentActionStartAfterList = Array<unknown>;
export type ExperimentActionStartTime = Date | string;

export interface ExperimentActionState {
}
export type ExperimentActionStatus = never;
export type ExperimentActionStatusReason = string;

export type ExperimentActionTargetMap = Record<string, unknown>;
export type ExperimentActionTargetName = string;

export interface ExperimentCloudWatchLogsLogConfiguration {
}
export type ExperimentEndTime = Date | string;

export interface ExperimentError {
}
export type ExperimentErrorAccountId = string;

export type ExperimentErrorCode = string;

export type ExperimentErrorLocation = string;

export type ExperimentId = string;

export interface ExperimentLogConfiguration {
}
export interface ExperimentOptions {
}
export interface ExperimentReport {
}
export interface ExperimentReportConfiguration {
}
export interface ExperimentReportConfigurationCloudWatchDashboard {
}
export type ExperimentReportConfigurationCloudWatchDashboardList = Array<unknown>;
export interface ExperimentReportConfigurationDataSources {
}
export interface ExperimentReportConfigurationOutputs {
}
export interface ExperimentReportConfigurationOutputsS3Configuration {
}
export interface ExperimentReportError {
}
export type ExperimentReportErrorCode = string;

export type ExperimentReportReason = string;

export interface ExperimentReportS3Report {
}
export type ExperimentReportS3ReportArn = string;

export type ExperimentReportS3ReportList = Array<unknown>;
export type ExperimentReportS3ReportType = string;

export interface ExperimentReportState {
}
export type ExperimentReportStatus = never;
export interface ExperimentS3LogConfiguration {
}
export type ExperimentStartTime = Date | string;

export interface ExperimentState {
}
export type ExperimentStatus = never;
export type ExperimentStatusReason = string;

export interface ExperimentStopCondition {
}
export type ExperimentStopConditionList = Array<unknown>;
export interface ExperimentSummary {
}
export type ExperimentSummaryList = Array<unknown>;
export interface ExperimentTarget {
}
export interface ExperimentTargetAccountConfiguration {
}
export type ExperimentTargetAccountConfigurationList = Array<unknown>;
export interface ExperimentTargetAccountConfigurationSummary {
}
export interface ExperimentTargetFilter {
}
export type ExperimentTargetFilterList = Array<unknown>;
export type ExperimentTargetFilterPath = string;

export type ExperimentTargetFilterValue = string;

export type ExperimentTargetFilterValues = Array<unknown>;
export type ExperimentTargetMap = Record<string, unknown>;
export type ExperimentTargetName = string;

export type ExperimentTargetParameterMap = Record<string, unknown>;
export type ExperimentTargetParameterName = string;

export type ExperimentTargetParameterValue = string;

export type ExperimentTargetSelectionMode = string;

export interface ExperimentTemplate {
}
export interface ExperimentTemplateAction {
}
export type ExperimentTemplateActionDescription = string;

export type ExperimentTemplateActionMap = Record<string, unknown>;
export type ExperimentTemplateActionName = string;

export type ExperimentTemplateActionParameter = string;

export type ExperimentTemplateActionParameterMap = Record<string, unknown>;
export type ExperimentTemplateActionParameterName = string;

export type ExperimentTemplateActionStartAfter = string;

export type ExperimentTemplateActionStartAfterList = Array<unknown>;
export type ExperimentTemplateActionTargetMap = Record<string, unknown>;
export type ExperimentTemplateActionTargetName = string;

export interface ExperimentTemplateCloudWatchLogsLogConfiguration {
}
export interface ExperimentTemplateCloudWatchLogsLogConfigurationInput {
}
export type ExperimentTemplateDescription = string;

export interface ExperimentTemplateExperimentOptions {
}
export type ExperimentTemplateId = string;

export interface ExperimentTemplateLogConfiguration {
}
export interface ExperimentTemplateReportConfiguration {
}
export interface ExperimentTemplateReportConfigurationCloudWatchDashboard {
}
export type ExperimentTemplateReportConfigurationCloudWatchDashboardList = Array<unknown>;
export interface ExperimentTemplateReportConfigurationDataSources {
}
export interface ExperimentTemplateReportConfigurationDataSourcesInput {
}
export interface ExperimentTemplateReportConfigurationOutputs {
}
export interface ExperimentTemplateReportConfigurationOutputsInput {
}
export interface ExperimentTemplateS3LogConfiguration {
}
export interface ExperimentTemplateS3LogConfigurationInput {
}
export interface ExperimentTemplateStopCondition {
}
export type ExperimentTemplateStopConditionList = Array<unknown>;
export interface ExperimentTemplateSummary {
}
export type ExperimentTemplateSummaryList = Array<unknown>;
export interface ExperimentTemplateTarget {
}
export interface ExperimentTemplateTargetFilter {
}
export type ExperimentTemplateTargetFilterInputList = Array<unknown>;
export type ExperimentTemplateTargetFilterList = Array<unknown>;
export type ExperimentTemplateTargetFilterPath = string;

export type ExperimentTemplateTargetFilterValue = string;

export type ExperimentTemplateTargetFilterValues = Array<unknown>;
export interface ExperimentTemplateTargetInputFilter {
}
export type ExperimentTemplateTargetMap = Record<string, unknown>;
export type ExperimentTemplateTargetName = string;

export type ExperimentTemplateTargetParameterMap = Record<string, unknown>;
export type ExperimentTemplateTargetParameterName = string;

export type ExperimentTemplateTargetParameterValue = string;

export type ExperimentTemplateTargetSelectionMode = string;

export interface GetActionRequest {
}
export interface GetActionResponse {
}
export interface GetExperimentRequest {
}
export interface GetExperimentResponse {
}
export interface GetExperimentTargetAccountConfigurationRequest {
}
export interface GetExperimentTargetAccountConfigurationResponse {
}
export interface GetExperimentTemplateRequest {
}
export interface GetExperimentTemplateResponse {
}
export interface GetSafetyLeverRequest {
}
export interface GetSafetyLeverResponse {
}
export interface GetTargetAccountConfigurationRequest {
}
export interface GetTargetAccountConfigurationResponse {
}
export interface GetTargetResourceTypeRequest {
}
export interface GetTargetResourceTypeResponse {
}
export type LastUpdateTime = Date | string;

export type ListActionsMaxResults = number;

export interface ListActionsRequest {
}
export interface ListActionsResponse {
}
export type ListExperimentResolvedTargetsMaxResults = number;

export interface ListExperimentResolvedTargetsRequest {
}
export interface ListExperimentResolvedTargetsResponse {
}
export type ListExperimentsMaxResults = number;

export interface ListExperimentsRequest {
}
export interface ListExperimentsResponse {
}
export interface ListExperimentTargetAccountConfigurationsRequest {
}
export interface ListExperimentTargetAccountConfigurationsResponse {
}
export type ListExperimentTemplatesMaxResults = number;

export interface ListExperimentTemplatesRequest {
}
export interface ListExperimentTemplatesResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type ListTargetAccountConfigurationsMaxResults = number;

export interface ListTargetAccountConfigurationsRequest {
}
export interface ListTargetAccountConfigurationsResponse {
}
export type ListTargetResourceTypesMaxResults = number;

export interface ListTargetResourceTypesRequest {
}
export interface ListTargetResourceTypesResponse {
}
export type LogSchemaVersion = number;

export type NextToken = string;

export type ReportConfigurationCloudWatchDashboardIdentifier = string;

export interface ReportConfigurationCloudWatchDashboardInput {
}
export type ReportConfigurationCloudWatchDashboardInputList = Array<unknown>;
export type ReportConfigurationDuration = string;

export interface ReportConfigurationS3Output {
}
export interface ReportConfigurationS3OutputInput {
}
export type ReportConfigurationS3OutputPrefix = string;

export interface ResolvedTarget {
}
export type ResolvedTargetList = Array<unknown>;
export type ResourceArn = string;

export type ResourceArnList = Array<unknown>;
export interface ResourceNotFoundException {
}
export type RoleArn = string;

export type S3BucketName = string;

export type S3ObjectKey = string;

export interface SafetyLever {
}
export type SafetyLeverId = string;

export interface SafetyLeverState {
}
export type SafetyLeverStatus = never;
export type SafetyLeverStatusInput = never;
export type SafetyLeverStatusReason = string;

export interface ServiceQuotaExceededException {
}
export interface StartExperimentExperimentOptionsInput {
}
export interface StartExperimentRequest {
}
export interface StartExperimentResponse {
}
export type StopConditionSource = string;

export type StopConditionValue = string;

export interface StopExperimentRequest {
}
export interface StopExperimentResponse {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface TargetAccountConfiguration {
}
export type TargetAccountConfigurationDescription = string;

export type TargetAccountConfigurationList = Array<unknown>;
export type TargetAccountConfigurationsCount = number;

export interface TargetAccountConfigurationSummary {
}
export type TargetAccountId = string;

export type TargetInformationKey = string;

export type TargetInformationMap = Record<string, unknown>;
export type TargetInformationValue = string;

export type TargetName = string;

export interface TargetResourceType {
}
export type TargetResourceTypeDescription = string;

export type TargetResourceTypeId = string;

export interface TargetResourceTypeParameter {
}
export type TargetResourceTypeParameterDescription = string;

export type TargetResourceTypeParameterMap = Record<string, unknown>;
export type TargetResourceTypeParameterName = string;

export type TargetResourceTypeParameterRequired = boolean;

export interface TargetResourceTypeSummary {
}
export type TargetResourceTypeSummaryList = Array<unknown>;
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateExperimentTemplateActionInputItem {
}
export type UpdateExperimentTemplateActionInputMap = Record<string, unknown>;
export interface UpdateExperimentTemplateExperimentOptionsInput {
}
export interface UpdateExperimentTemplateLogConfigurationInput {
}
export interface UpdateExperimentTemplateReportConfigurationInput {
}
export interface UpdateExperimentTemplateRequest {
}
export interface UpdateExperimentTemplateResponse {
}
export interface UpdateExperimentTemplateStopConditionInput {
}
export type UpdateExperimentTemplateStopConditionInputList = Array<unknown>;
export interface UpdateExperimentTemplateTargetInput {
}
export type UpdateExperimentTemplateTargetInputMap = Record<string, unknown>;
export interface UpdateSafetyLeverStateInput {
}
export interface UpdateSafetyLeverStateRequest {
}
export interface UpdateSafetyLeverStateResponse {
}
export interface UpdateTargetAccountConfigurationRequest {
}
export interface UpdateTargetAccountConfigurationResponse {
}
export interface ValidationException {
}
export declare namespace CreateExperimentTemplate {
  export type Input = CreateExperimentTemplateRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTargetAccountConfiguration {
  export type Input = CreateTargetAccountConfigurationRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteExperimentTemplate {
  export type Input = DeleteExperimentTemplateRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTargetAccountConfiguration {
  export type Input = DeleteTargetAccountConfigurationRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAction {
  export type Input = GetActionRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExperiment {
  export type Input = GetExperimentRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExperimentTargetAccountConfiguration {
  export type Input = GetExperimentTargetAccountConfigurationRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExperimentTemplate {
  export type Input = GetExperimentTemplateRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSafetyLever {
  export type Input = GetSafetyLeverRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetTargetAccountConfiguration {
  export type Input = GetTargetAccountConfigurationRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTargetResourceType {
  export type Input = GetTargetResourceTypeRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListActions {
  export type Input = ListActionsRequest;
  export type Output = {};
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExperimentResolvedTargets {
  export type Input = ListExperimentResolvedTargetsRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExperimentTargetAccountConfigurations {
  export type Input = ListExperimentTargetAccountConfigurationsRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExperimentTemplates {
  export type Input = ListExperimentTemplatesRequest;
  export type Output = {};
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExperiments {
  export type Input = ListExperimentsRequest;
  export type Output = {};
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListTargetAccountConfigurations {
  export type Input = ListTargetAccountConfigurationsRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTargetResourceTypes {
  export type Input = ListTargetResourceTypesRequest;
  export type Output = {};
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartExperiment {
  export type Input = StartExperimentRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopExperiment {
  export type Input = StopExperimentRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UpdateExperimentTemplate {
  export type Input = UpdateExperimentTemplateRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSafetyLeverState {
  export type Input = UpdateSafetyLeverStateRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTargetAccountConfiguration {
  export type Input = UpdateTargetAccountConfigurationRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

