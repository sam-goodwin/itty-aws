import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface FaultInjectionSimulator {
  createExperimentTemplate(
    input: CreateExperimentTemplateRequest,
  ): Effect.Effect<
    CreateExperimentTemplateResponse,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createTargetAccountConfiguration(
    input: CreateTargetAccountConfigurationRequest,
  ): Effect.Effect<
    CreateTargetAccountConfigurationResponse,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteExperimentTemplate(
    input: DeleteExperimentTemplateRequest,
  ): Effect.Effect<
    DeleteExperimentTemplateResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteTargetAccountConfiguration(
    input: DeleteTargetAccountConfigurationRequest,
  ): Effect.Effect<
    DeleteTargetAccountConfigurationResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getAction(
    input: GetActionRequest,
  ): Effect.Effect<
    GetActionResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getExperiment(
    input: GetExperimentRequest,
  ): Effect.Effect<
    GetExperimentResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getExperimentTargetAccountConfiguration(
    input: GetExperimentTargetAccountConfigurationRequest,
  ): Effect.Effect<
    GetExperimentTargetAccountConfigurationResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getExperimentTemplate(
    input: GetExperimentTemplateRequest,
  ): Effect.Effect<
    GetExperimentTemplateResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getSafetyLever(
    input: GetSafetyLeverRequest,
  ): Effect.Effect<
    GetSafetyLeverResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  getTargetAccountConfiguration(
    input: GetTargetAccountConfigurationRequest,
  ): Effect.Effect<
    GetTargetAccountConfigurationResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getTargetResourceType(
    input: GetTargetResourceTypeRequest,
  ): Effect.Effect<
    GetTargetResourceTypeResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listActions(
    input: ListActionsRequest,
  ): Effect.Effect<ListActionsResponse, ValidationException | CommonAwsError>;
  listExperimentResolvedTargets(
    input: ListExperimentResolvedTargetsRequest,
  ): Effect.Effect<
    ListExperimentResolvedTargetsResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listExperiments(
    input: ListExperimentsRequest,
  ): Effect.Effect<
    ListExperimentsResponse,
    ValidationException | CommonAwsError
  >;
  listExperimentTargetAccountConfigurations(
    input: ListExperimentTargetAccountConfigurationsRequest,
  ): Effect.Effect<
    ListExperimentTargetAccountConfigurationsResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listExperimentTemplates(
    input: ListExperimentTemplatesRequest,
  ): Effect.Effect<
    ListExperimentTemplatesResponse,
    ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<ListTagsForResourceResponse, CommonAwsError>;
  listTargetAccountConfigurations(
    input: ListTargetAccountConfigurationsRequest,
  ): Effect.Effect<
    ListTargetAccountConfigurationsResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTargetResourceTypes(
    input: ListTargetResourceTypesRequest,
  ): Effect.Effect<
    ListTargetResourceTypesResponse,
    ValidationException | CommonAwsError
  >;
  startExperiment(
    input: StartExperimentRequest,
  ): Effect.Effect<
    StartExperimentResponse,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  stopExperiment(
    input: StopExperimentRequest,
  ): Effect.Effect<
    StopExperimentResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<TagResourceResponse, CommonAwsError>;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<UntagResourceResponse, CommonAwsError>;
  updateExperimentTemplate(
    input: UpdateExperimentTemplateRequest,
  ): Effect.Effect<
    UpdateExperimentTemplateResponse,
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  updateSafetyLeverState(
    input: UpdateSafetyLeverStateRequest,
  ): Effect.Effect<
    UpdateSafetyLeverStateResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateTargetAccountConfiguration(
    input: UpdateTargetAccountConfigurationRequest,
  ): Effect.Effect<
    UpdateTargetAccountConfigurationResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type Fis = FaultInjectionSimulator;

export type AccountTargeting = "SINGLE_ACCOUNT" | "MULTI_ACCOUNT";
export interface Action {
  id?: string;
  arn?: string;
  description?: string;
  parameters?: Record<string, ActionParameter>;
  targets?: Record<string, ActionTarget>;
  tags?: Record<string, string>;
}
export type ActionDescription = string;

export type ActionId = string;

export interface ActionParameter {
  description?: string;
  required?: boolean;
}
export type ActionParameterDescription = string;

export type ActionParameterMap = Record<string, ActionParameter>;
export type ActionParameterName = string;

export type ActionParameterRequired = boolean;

export type ActionsMode = "SKIP_ALL" | "RUN_ALL";
export interface ActionSummary {
  id?: string;
  arn?: string;
  description?: string;
  targets?: Record<string, ActionTarget>;
  tags?: Record<string, string>;
}
export type ActionSummaryList = Array<ActionSummary>;
export interface ActionTarget {
  resourceType?: string;
}
export type ActionTargetMap = Record<string, ActionTarget>;
export type ActionTargetName = string;

export type ClientToken = string;

export type CloudWatchLogGroupArn = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateExperimentTemplateActionInput {
  actionId: string;
  description?: string;
  parameters?: Record<string, string>;
  targets?: Record<string, string>;
  startAfter?: Array<string>;
}
export type CreateExperimentTemplateActionInputMap = Record<
  string,
  CreateExperimentTemplateActionInput
>;
export interface CreateExperimentTemplateExperimentOptionsInput {
  accountTargeting?: AccountTargeting;
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}
export interface CreateExperimentTemplateLogConfigurationInput {
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;
  logSchemaVersion: number;
}
export interface CreateExperimentTemplateReportConfigurationInput {
  outputs?: ExperimentTemplateReportConfigurationOutputsInput;
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
export interface CreateExperimentTemplateRequest {
  clientToken: string;
  description: string;
  stopConditions: Array<CreateExperimentTemplateStopConditionInput>;
  targets?: Record<string, CreateExperimentTemplateTargetInput>;
  actions: Record<string, CreateExperimentTemplateActionInput>;
  roleArn: string;
  tags?: Record<string, string>;
  logConfiguration?: CreateExperimentTemplateLogConfigurationInput;
  experimentOptions?: CreateExperimentTemplateExperimentOptionsInput;
  experimentReportConfiguration?: CreateExperimentTemplateReportConfigurationInput;
}
export interface CreateExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
export interface CreateExperimentTemplateStopConditionInput {
  source: string;
  value?: string;
}
export type CreateExperimentTemplateStopConditionInputList =
  Array<CreateExperimentTemplateStopConditionInput>;
export interface CreateExperimentTemplateTargetInput {
  resourceType: string;
  resourceArns?: Array<string>;
  resourceTags?: Record<string, string>;
  filters?: Array<ExperimentTemplateTargetInputFilter>;
  selectionMode: string;
  parameters?: Record<string, string>;
}
export type CreateExperimentTemplateTargetInputMap = Record<
  string,
  CreateExperimentTemplateTargetInput
>;
export interface CreateTargetAccountConfigurationRequest {
  clientToken?: string;
  experimentTemplateId: string;
  accountId: string;
  roleArn: string;
  description?: string;
}
export interface CreateTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
export type CreationTime = Date | string;

export interface DeleteExperimentTemplateRequest {
  id: string;
}
export interface DeleteExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
export interface DeleteTargetAccountConfigurationRequest {
  experimentTemplateId: string;
  accountId: string;
}
export interface DeleteTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
export type EmptyTargetResolutionMode = "FAIL" | "SKIP";
export type ExceptionMessage = string;

export interface Experiment {
  id?: string;
  arn?: string;
  experimentTemplateId?: string;
  roleArn?: string;
  state?: ExperimentState;
  targets?: Record<string, ExperimentTarget>;
  actions?: Record<string, ExperimentAction>;
  stopConditions?: Array<ExperimentStopCondition>;
  creationTime?: Date | string;
  startTime?: Date | string;
  endTime?: Date | string;
  tags?: Record<string, string>;
  logConfiguration?: ExperimentLogConfiguration;
  experimentOptions?: ExperimentOptions;
  targetAccountConfigurationsCount?: number;
  experimentReportConfiguration?: ExperimentReportConfiguration;
  experimentReport?: ExperimentReport;
}
export interface ExperimentAction {
  actionId?: string;
  description?: string;
  parameters?: Record<string, string>;
  targets?: Record<string, string>;
  startAfter?: Array<string>;
  state?: ExperimentActionState;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type ExperimentActionDescription = string;

export type ExperimentActionEndTime = Date | string;

export type ExperimentActionMap = Record<string, ExperimentAction>;
export type ExperimentActionName = string;

export type ExperimentActionParameter = string;

export type ExperimentActionParameterMap = Record<string, string>;
export type ExperimentActionParameterName = string;

export type ExperimentActionStartAfter = string;

export type ExperimentActionStartAfterList = Array<string>;
export type ExperimentActionStartTime = Date | string;

export interface ExperimentActionState {
  status?: ExperimentActionStatus;
  reason?: string;
}
export type ExperimentActionStatus =
  | "pending"
  | "initiating"
  | "running"
  | "completed"
  | "cancelled"
  | "stopping"
  | "stopped"
  | "failed"
  | "skipped";
export type ExperimentActionStatusReason = string;

export type ExperimentActionTargetMap = Record<string, string>;
export type ExperimentActionTargetName = string;

export interface ExperimentCloudWatchLogsLogConfiguration {
  logGroupArn?: string;
}
export type ExperimentEndTime = Date | string;

export interface ExperimentError {
  accountId?: string;
  code?: string;
  location?: string;
}
export type ExperimentErrorAccountId = string;

export type ExperimentErrorCode = string;

export type ExperimentErrorLocation = string;

export type ExperimentId = string;

export interface ExperimentLogConfiguration {
  cloudWatchLogsConfiguration?: ExperimentCloudWatchLogsLogConfiguration;
  s3Configuration?: ExperimentS3LogConfiguration;
  logSchemaVersion?: number;
}
export interface ExperimentOptions {
  accountTargeting?: AccountTargeting;
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
  actionsMode?: ActionsMode;
}
export interface ExperimentReport {
  state?: ExperimentReportState;
  s3Reports?: Array<ExperimentReportS3Report>;
}
export interface ExperimentReportConfiguration {
  outputs?: ExperimentReportConfigurationOutputs;
  dataSources?: ExperimentReportConfigurationDataSources;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
export interface ExperimentReportConfigurationCloudWatchDashboard {
  dashboardIdentifier?: string;
}
export type ExperimentReportConfigurationCloudWatchDashboardList =
  Array<ExperimentReportConfigurationCloudWatchDashboard>;
export interface ExperimentReportConfigurationDataSources {
  cloudWatchDashboards?: Array<ExperimentReportConfigurationCloudWatchDashboard>;
}
export interface ExperimentReportConfigurationOutputs {
  s3Configuration?: ExperimentReportConfigurationOutputsS3Configuration;
}
export interface ExperimentReportConfigurationOutputsS3Configuration {
  bucketName?: string;
  prefix?: string;
}
export interface ExperimentReportError {
  code?: string;
}
export type ExperimentReportErrorCode = string;

export type ExperimentReportReason = string;

export interface ExperimentReportS3Report {
  arn?: string;
  reportType?: string;
}
export type ExperimentReportS3ReportArn = string;

export type ExperimentReportS3ReportList = Array<ExperimentReportS3Report>;
export type ExperimentReportS3ReportType = string;

export interface ExperimentReportState {
  status?: ExperimentReportStatus;
  reason?: string;
  error?: ExperimentReportError;
}
export type ExperimentReportStatus =
  | "pending"
  | "running"
  | "completed"
  | "cancelled"
  | "failed";
export interface ExperimentS3LogConfiguration {
  bucketName?: string;
  prefix?: string;
}
export type ExperimentStartTime = Date | string;

export interface ExperimentState {
  status?: ExperimentStatus;
  reason?: string;
  error?: ExperimentError;
}
export type ExperimentStatus =
  | "pending"
  | "initiating"
  | "running"
  | "completed"
  | "stopping"
  | "stopped"
  | "failed"
  | "cancelled";
export type ExperimentStatusReason = string;

export interface ExperimentStopCondition {
  source?: string;
  value?: string;
}
export type ExperimentStopConditionList = Array<ExperimentStopCondition>;
export interface ExperimentSummary {
  id?: string;
  arn?: string;
  experimentTemplateId?: string;
  state?: ExperimentState;
  creationTime?: Date | string;
  tags?: Record<string, string>;
  experimentOptions?: ExperimentOptions;
}
export type ExperimentSummaryList = Array<ExperimentSummary>;
export interface ExperimentTarget {
  resourceType?: string;
  resourceArns?: Array<string>;
  resourceTags?: Record<string, string>;
  filters?: Array<ExperimentTargetFilter>;
  selectionMode?: string;
  parameters?: Record<string, string>;
}
export interface ExperimentTargetAccountConfiguration {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
export type ExperimentTargetAccountConfigurationList =
  Array<ExperimentTargetAccountConfigurationSummary>;
export interface ExperimentTargetAccountConfigurationSummary {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
export interface ExperimentTargetFilter {
  path?: string;
  values?: Array<string>;
}
export type ExperimentTargetFilterList = Array<ExperimentTargetFilter>;
export type ExperimentTargetFilterPath = string;

export type ExperimentTargetFilterValue = string;

export type ExperimentTargetFilterValues = Array<string>;
export type ExperimentTargetMap = Record<string, ExperimentTarget>;
export type ExperimentTargetName = string;

export type ExperimentTargetParameterMap = Record<string, string>;
export type ExperimentTargetParameterName = string;

export type ExperimentTargetParameterValue = string;

export type ExperimentTargetSelectionMode = string;

export interface ExperimentTemplate {
  id?: string;
  arn?: string;
  description?: string;
  targets?: Record<string, ExperimentTemplateTarget>;
  actions?: Record<string, ExperimentTemplateAction>;
  stopConditions?: Array<ExperimentTemplateStopCondition>;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  roleArn?: string;
  tags?: Record<string, string>;
  logConfiguration?: ExperimentTemplateLogConfiguration;
  experimentOptions?: ExperimentTemplateExperimentOptions;
  targetAccountConfigurationsCount?: number;
  experimentReportConfiguration?: ExperimentTemplateReportConfiguration;
}
export interface ExperimentTemplateAction {
  actionId?: string;
  description?: string;
  parameters?: Record<string, string>;
  targets?: Record<string, string>;
  startAfter?: Array<string>;
}
export type ExperimentTemplateActionDescription = string;

export type ExperimentTemplateActionMap = Record<
  string,
  ExperimentTemplateAction
>;
export type ExperimentTemplateActionName = string;

export type ExperimentTemplateActionParameter = string;

export type ExperimentTemplateActionParameterMap = Record<string, string>;
export type ExperimentTemplateActionParameterName = string;

export type ExperimentTemplateActionStartAfter = string;

export type ExperimentTemplateActionStartAfterList = Array<string>;
export type ExperimentTemplateActionTargetMap = Record<string, string>;
export type ExperimentTemplateActionTargetName = string;

export interface ExperimentTemplateCloudWatchLogsLogConfiguration {
  logGroupArn?: string;
}
export interface ExperimentTemplateCloudWatchLogsLogConfigurationInput {
  logGroupArn: string;
}
export type ExperimentTemplateDescription = string;

export interface ExperimentTemplateExperimentOptions {
  accountTargeting?: AccountTargeting;
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}
export type ExperimentTemplateId = string;

export interface ExperimentTemplateLogConfiguration {
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration;
  s3Configuration?: ExperimentTemplateS3LogConfiguration;
  logSchemaVersion?: number;
}
export interface ExperimentTemplateReportConfiguration {
  outputs?: ExperimentTemplateReportConfigurationOutputs;
  dataSources?: ExperimentTemplateReportConfigurationDataSources;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
export interface ExperimentTemplateReportConfigurationCloudWatchDashboard {
  dashboardIdentifier?: string;
}
export type ExperimentTemplateReportConfigurationCloudWatchDashboardList =
  Array<ExperimentTemplateReportConfigurationCloudWatchDashboard>;
export interface ExperimentTemplateReportConfigurationDataSources {
  cloudWatchDashboards?: Array<ExperimentTemplateReportConfigurationCloudWatchDashboard>;
}
export interface ExperimentTemplateReportConfigurationDataSourcesInput {
  cloudWatchDashboards?: Array<ReportConfigurationCloudWatchDashboardInput>;
}
export interface ExperimentTemplateReportConfigurationOutputs {
  s3Configuration?: ReportConfigurationS3Output;
}
export interface ExperimentTemplateReportConfigurationOutputsInput {
  s3Configuration?: ReportConfigurationS3OutputInput;
}
export interface ExperimentTemplateS3LogConfiguration {
  bucketName?: string;
  prefix?: string;
}
export interface ExperimentTemplateS3LogConfigurationInput {
  bucketName: string;
  prefix?: string;
}
export interface ExperimentTemplateStopCondition {
  source?: string;
  value?: string;
}
export type ExperimentTemplateStopConditionList =
  Array<ExperimentTemplateStopCondition>;
export interface ExperimentTemplateSummary {
  id?: string;
  arn?: string;
  description?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  tags?: Record<string, string>;
}
export type ExperimentTemplateSummaryList = Array<ExperimentTemplateSummary>;
export interface ExperimentTemplateTarget {
  resourceType?: string;
  resourceArns?: Array<string>;
  resourceTags?: Record<string, string>;
  filters?: Array<ExperimentTemplateTargetFilter>;
  selectionMode?: string;
  parameters?: Record<string, string>;
}
export interface ExperimentTemplateTargetFilter {
  path?: string;
  values?: Array<string>;
}
export type ExperimentTemplateTargetFilterInputList =
  Array<ExperimentTemplateTargetInputFilter>;
export type ExperimentTemplateTargetFilterList =
  Array<ExperimentTemplateTargetFilter>;
export type ExperimentTemplateTargetFilterPath = string;

export type ExperimentTemplateTargetFilterValue = string;

export type ExperimentTemplateTargetFilterValues = Array<string>;
export interface ExperimentTemplateTargetInputFilter {
  path: string;
  values: Array<string>;
}
export type ExperimentTemplateTargetMap = Record<
  string,
  ExperimentTemplateTarget
>;
export type ExperimentTemplateTargetName = string;

export type ExperimentTemplateTargetParameterMap = Record<string, string>;
export type ExperimentTemplateTargetParameterName = string;

export type ExperimentTemplateTargetParameterValue = string;

export type ExperimentTemplateTargetSelectionMode = string;

export interface GetActionRequest {
  id: string;
}
export interface GetActionResponse {
  action?: Action;
}
export interface GetExperimentRequest {
  id: string;
}
export interface GetExperimentResponse {
  experiment?: Experiment;
}
export interface GetExperimentTargetAccountConfigurationRequest {
  experimentId: string;
  accountId: string;
}
export interface GetExperimentTargetAccountConfigurationResponse {
  targetAccountConfiguration?: ExperimentTargetAccountConfiguration;
}
export interface GetExperimentTemplateRequest {
  id: string;
}
export interface GetExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
export interface GetSafetyLeverRequest {
  id: string;
}
export interface GetSafetyLeverResponse {
  safetyLever?: SafetyLever;
}
export interface GetTargetAccountConfigurationRequest {
  experimentTemplateId: string;
  accountId: string;
}
export interface GetTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
export interface GetTargetResourceTypeRequest {
  resourceType: string;
}
export interface GetTargetResourceTypeResponse {
  targetResourceType?: TargetResourceType;
}
export type LastUpdateTime = Date | string;

export type ListActionsMaxResults = number;

export interface ListActionsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListActionsResponse {
  actions?: Array<ActionSummary>;
  nextToken?: string;
}
export type ListExperimentResolvedTargetsMaxResults = number;

export interface ListExperimentResolvedTargetsRequest {
  experimentId: string;
  maxResults?: number;
  nextToken?: string;
  targetName?: string;
}
export interface ListExperimentResolvedTargetsResponse {
  resolvedTargets?: Array<ResolvedTarget>;
  nextToken?: string;
}
export type ListExperimentsMaxResults = number;

export interface ListExperimentsRequest {
  maxResults?: number;
  nextToken?: string;
  experimentTemplateId?: string;
}
export interface ListExperimentsResponse {
  experiments?: Array<ExperimentSummary>;
  nextToken?: string;
}
export interface ListExperimentTargetAccountConfigurationsRequest {
  experimentId: string;
  nextToken?: string;
}
export interface ListExperimentTargetAccountConfigurationsResponse {
  targetAccountConfigurations?: Array<ExperimentTargetAccountConfigurationSummary>;
  nextToken?: string;
}
export type ListExperimentTemplatesMaxResults = number;

export interface ListExperimentTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListExperimentTemplatesResponse {
  experimentTemplates?: Array<ExperimentTemplateSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type ListTargetAccountConfigurationsMaxResults = number;

export interface ListTargetAccountConfigurationsRequest {
  experimentTemplateId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTargetAccountConfigurationsResponse {
  targetAccountConfigurations?: Array<TargetAccountConfigurationSummary>;
  nextToken?: string;
}
export type ListTargetResourceTypesMaxResults = number;

export interface ListTargetResourceTypesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListTargetResourceTypesResponse {
  targetResourceTypes?: Array<TargetResourceTypeSummary>;
  nextToken?: string;
}
export type LogSchemaVersion = number;

export type NextToken = string;

export type ReportConfigurationCloudWatchDashboardIdentifier = string;

export interface ReportConfigurationCloudWatchDashboardInput {
  dashboardIdentifier?: string;
}
export type ReportConfigurationCloudWatchDashboardInputList =
  Array<ReportConfigurationCloudWatchDashboardInput>;
export type ReportConfigurationDuration = string;

export interface ReportConfigurationS3Output {
  bucketName?: string;
  prefix?: string;
}
export interface ReportConfigurationS3OutputInput {
  bucketName?: string;
  prefix?: string;
}
export type ReportConfigurationS3OutputPrefix = string;

export interface ResolvedTarget {
  resourceType?: string;
  targetName?: string;
  targetInformation?: Record<string, string>;
}
export type ResolvedTargetList = Array<ResolvedTarget>;
export type ResourceArn = string;

export type ResourceArnList = Array<string>;
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export type S3BucketName = string;

export type S3ObjectKey = string;

export interface SafetyLever {
  id?: string;
  arn?: string;
  state?: SafetyLeverState;
}
export type SafetyLeverId = string;

export interface SafetyLeverState {
  status?: SafetyLeverStatus;
  reason?: string;
}
export type SafetyLeverStatus = "DISENGAGED" | "ENGAGED" | "ENGAGING";
export type SafetyLeverStatusInput = "DISENGAGED" | "ENGAGED";
export type SafetyLeverStatusReason = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface StartExperimentExperimentOptionsInput {
  actionsMode?: ActionsMode;
}
export interface StartExperimentRequest {
  clientToken: string;
  experimentTemplateId: string;
  experimentOptions?: StartExperimentExperimentOptionsInput;
  tags?: Record<string, string>;
}
export interface StartExperimentResponse {
  experiment?: Experiment;
}
export type StopConditionSource = string;

export type StopConditionValue = string;

export interface StopExperimentRequest {
  id: string;
}
export interface StopExperimentResponse {
  experiment?: Experiment;
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

export interface TargetAccountConfiguration {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
export type TargetAccountConfigurationDescription = string;

export type TargetAccountConfigurationList =
  Array<TargetAccountConfigurationSummary>;
export type TargetAccountConfigurationsCount = number;

export interface TargetAccountConfigurationSummary {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
export type TargetAccountId = string;

export type TargetInformationKey = string;

export type TargetInformationMap = Record<string, string>;
export type TargetInformationValue = string;

export type TargetName = string;

export interface TargetResourceType {
  resourceType?: string;
  description?: string;
  parameters?: Record<string, TargetResourceTypeParameter>;
}
export type TargetResourceTypeDescription = string;

export type TargetResourceTypeId = string;

export interface TargetResourceTypeParameter {
  description?: string;
  required?: boolean;
}
export type TargetResourceTypeParameterDescription = string;

export type TargetResourceTypeParameterMap = Record<
  string,
  TargetResourceTypeParameter
>;
export type TargetResourceTypeParameterName = string;

export type TargetResourceTypeParameterRequired = boolean;

export interface TargetResourceTypeSummary {
  resourceType?: string;
  description?: string;
}
export type TargetResourceTypeSummaryList = Array<TargetResourceTypeSummary>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys?: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateExperimentTemplateActionInputItem {
  actionId?: string;
  description?: string;
  parameters?: Record<string, string>;
  targets?: Record<string, string>;
  startAfter?: Array<string>;
}
export type UpdateExperimentTemplateActionInputMap = Record<
  string,
  UpdateExperimentTemplateActionInputItem
>;
export interface UpdateExperimentTemplateExperimentOptionsInput {
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}
export interface UpdateExperimentTemplateLogConfigurationInput {
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;
  logSchemaVersion?: number;
}
export interface UpdateExperimentTemplateReportConfigurationInput {
  outputs?: ExperimentTemplateReportConfigurationOutputsInput;
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
export interface UpdateExperimentTemplateRequest {
  id: string;
  description?: string;
  stopConditions?: Array<UpdateExperimentTemplateStopConditionInput>;
  targets?: Record<string, UpdateExperimentTemplateTargetInput>;
  actions?: Record<string, UpdateExperimentTemplateActionInputItem>;
  roleArn?: string;
  logConfiguration?: UpdateExperimentTemplateLogConfigurationInput;
  experimentOptions?: UpdateExperimentTemplateExperimentOptionsInput;
  experimentReportConfiguration?: UpdateExperimentTemplateReportConfigurationInput;
}
export interface UpdateExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
export interface UpdateExperimentTemplateStopConditionInput {
  source: string;
  value?: string;
}
export type UpdateExperimentTemplateStopConditionInputList =
  Array<UpdateExperimentTemplateStopConditionInput>;
export interface UpdateExperimentTemplateTargetInput {
  resourceType: string;
  resourceArns?: Array<string>;
  resourceTags?: Record<string, string>;
  filters?: Array<ExperimentTemplateTargetInputFilter>;
  selectionMode: string;
  parameters?: Record<string, string>;
}
export type UpdateExperimentTemplateTargetInputMap = Record<
  string,
  UpdateExperimentTemplateTargetInput
>;
export interface UpdateSafetyLeverStateInput {
  status: SafetyLeverStatusInput;
  reason: string;
}
export interface UpdateSafetyLeverStateRequest {
  id: string;
  state: UpdateSafetyLeverStateInput;
}
export interface UpdateSafetyLeverStateResponse {
  safetyLever?: SafetyLever;
}
export interface UpdateTargetAccountConfigurationRequest {
  experimentTemplateId: string;
  accountId: string;
  roleArn?: string;
  description?: string;
}
export interface UpdateTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace CreateExperimentTemplate {
  export type Input = CreateExperimentTemplateRequest;
  export type Output = CreateExperimentTemplateResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTargetAccountConfiguration {
  export type Input = CreateTargetAccountConfigurationRequest;
  export type Output = CreateTargetAccountConfigurationResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteExperimentTemplate {
  export type Input = DeleteExperimentTemplateRequest;
  export type Output = DeleteExperimentTemplateResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTargetAccountConfiguration {
  export type Input = DeleteTargetAccountConfigurationRequest;
  export type Output = DeleteTargetAccountConfigurationResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAction {
  export type Input = GetActionRequest;
  export type Output = GetActionResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExperiment {
  export type Input = GetExperimentRequest;
  export type Output = GetExperimentResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExperimentTargetAccountConfiguration {
  export type Input = GetExperimentTargetAccountConfigurationRequest;
  export type Output = GetExperimentTargetAccountConfigurationResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExperimentTemplate {
  export type Input = GetExperimentTemplateRequest;
  export type Output = GetExperimentTemplateResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSafetyLever {
  export type Input = GetSafetyLeverRequest;
  export type Output = GetSafetyLeverResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetTargetAccountConfiguration {
  export type Input = GetTargetAccountConfigurationRequest;
  export type Output = GetTargetAccountConfigurationResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTargetResourceType {
  export type Input = GetTargetResourceTypeRequest;
  export type Output = GetTargetResourceTypeResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListActions {
  export type Input = ListActionsRequest;
  export type Output = ListActionsResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListExperimentResolvedTargets {
  export type Input = ListExperimentResolvedTargetsRequest;
  export type Output = ListExperimentResolvedTargetsResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExperiments {
  export type Input = ListExperimentsRequest;
  export type Output = ListExperimentsResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListExperimentTargetAccountConfigurations {
  export type Input = ListExperimentTargetAccountConfigurationsRequest;
  export type Output = ListExperimentTargetAccountConfigurationsResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExperimentTemplates {
  export type Input = ListExperimentTemplatesRequest;
  export type Output = ListExperimentTemplatesResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListTargetAccountConfigurations {
  export type Input = ListTargetAccountConfigurationsRequest;
  export type Output = ListTargetAccountConfigurationsResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTargetResourceTypes {
  export type Input = ListTargetResourceTypesRequest;
  export type Output = ListTargetResourceTypesResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace StartExperiment {
  export type Input = StartExperimentRequest;
  export type Output = StartExperimentResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopExperiment {
  export type Input = StopExperimentRequest;
  export type Output = StopExperimentResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error = CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = CommonAwsError;
}

export declare namespace UpdateExperimentTemplate {
  export type Input = UpdateExperimentTemplateRequest;
  export type Output = UpdateExperimentTemplateResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSafetyLeverState {
  export type Input = UpdateSafetyLeverStateRequest;
  export type Output = UpdateSafetyLeverStateResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTargetAccountConfiguration {
  export type Input = UpdateTargetAccountConfigurationRequest;
  export type Output = UpdateTargetAccountConfigurationResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
