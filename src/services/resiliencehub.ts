import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AwsResilienceHub {
  acceptResourceGroupingRecommendations(
    input: AcceptResourceGroupingRecommendationsRequest,
  ): Effect.Effect<
    AcceptResourceGroupingRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  addDraftAppVersionResourceMappings(
    input: AddDraftAppVersionResourceMappingsRequest,
  ): Effect.Effect<
    AddDraftAppVersionResourceMappingsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchUpdateRecommendationStatus(
    input: BatchUpdateRecommendationStatusRequest,
  ): Effect.Effect<
    BatchUpdateRecommendationStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createApp(
    input: CreateAppRequest,
  ): Effect.Effect<
    CreateAppResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAppVersionAppComponent(
    input: CreateAppVersionAppComponentRequest,
  ): Effect.Effect<
    CreateAppVersionAppComponentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAppVersionResource(
    input: CreateAppVersionResourceRequest,
  ): Effect.Effect<
    CreateAppVersionResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRecommendationTemplate(
    input: CreateRecommendationTemplateRequest,
  ): Effect.Effect<
    CreateRecommendationTemplateResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createResiliencyPolicy(
    input: CreateResiliencyPolicyRequest,
  ): Effect.Effect<
    CreateResiliencyPolicyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteApp(
    input: DeleteAppRequest,
  ): Effect.Effect<
    DeleteAppResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAppAssessment(
    input: DeleteAppAssessmentRequest,
  ): Effect.Effect<
    DeleteAppAssessmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAppInputSource(
    input: DeleteAppInputSourceRequest,
  ): Effect.Effect<
    DeleteAppInputSourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAppVersionAppComponent(
    input: DeleteAppVersionAppComponentRequest,
  ): Effect.Effect<
    DeleteAppVersionAppComponentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAppVersionResource(
    input: DeleteAppVersionResourceRequest,
  ): Effect.Effect<
    DeleteAppVersionResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRecommendationTemplate(
    input: DeleteRecommendationTemplateRequest,
  ): Effect.Effect<
    DeleteRecommendationTemplateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResiliencyPolicy(
    input: DeleteResiliencyPolicyRequest,
  ): Effect.Effect<
    DeleteResiliencyPolicyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeApp(
    input: DescribeAppRequest,
  ): Effect.Effect<
    DescribeAppResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAppAssessment(
    input: DescribeAppAssessmentRequest,
  ): Effect.Effect<
    DescribeAppAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAppVersion(
    input: DescribeAppVersionRequest,
  ): Effect.Effect<
    DescribeAppVersionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAppVersionAppComponent(
    input: DescribeAppVersionAppComponentRequest,
  ): Effect.Effect<
    DescribeAppVersionAppComponentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAppVersionResource(
    input: DescribeAppVersionResourceRequest,
  ): Effect.Effect<
    DescribeAppVersionResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAppVersionResourcesResolutionStatus(
    input: DescribeAppVersionResourcesResolutionStatusRequest,
  ): Effect.Effect<
    DescribeAppVersionResourcesResolutionStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAppVersionTemplate(
    input: DescribeAppVersionTemplateRequest,
  ): Effect.Effect<
    DescribeAppVersionTemplateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDraftAppVersionResourcesImportStatus(
    input: DescribeDraftAppVersionResourcesImportStatusRequest,
  ): Effect.Effect<
    DescribeDraftAppVersionResourcesImportStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeMetricsExport(
    input: DescribeMetricsExportRequest,
  ): Effect.Effect<
    DescribeMetricsExportResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeResiliencyPolicy(
    input: DescribeResiliencyPolicyRequest,
  ): Effect.Effect<
    DescribeResiliencyPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeResourceGroupingRecommendationTask(
    input: DescribeResourceGroupingRecommendationTaskRequest,
  ): Effect.Effect<
    DescribeResourceGroupingRecommendationTaskResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  importResourcesToDraftAppVersion(
    input: ImportResourcesToDraftAppVersionRequest,
  ): Effect.Effect<
    ImportResourcesToDraftAppVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAlarmRecommendations(
    input: ListAlarmRecommendationsRequest,
  ): Effect.Effect<
    ListAlarmRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppAssessmentComplianceDrifts(
    input: ListAppAssessmentComplianceDriftsRequest,
  ): Effect.Effect<
    ListAppAssessmentComplianceDriftsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppAssessmentResourceDrifts(
    input: ListAppAssessmentResourceDriftsRequest,
  ): Effect.Effect<
    ListAppAssessmentResourceDriftsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppAssessments(
    input: ListAppAssessmentsRequest,
  ): Effect.Effect<
    ListAppAssessmentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppComponentCompliances(
    input: ListAppComponentCompliancesRequest,
  ): Effect.Effect<
    ListAppComponentCompliancesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppComponentRecommendations(
    input: ListAppComponentRecommendationsRequest,
  ): Effect.Effect<
    ListAppComponentRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppInputSources(
    input: ListAppInputSourcesRequest,
  ): Effect.Effect<
    ListAppInputSourcesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApps(
    input: ListAppsRequest,
  ): Effect.Effect<
    ListAppsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppVersionAppComponents(
    input: ListAppVersionAppComponentsRequest,
  ): Effect.Effect<
    ListAppVersionAppComponentsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppVersionResourceMappings(
    input: ListAppVersionResourceMappingsRequest,
  ): Effect.Effect<
    ListAppVersionResourceMappingsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppVersionResources(
    input: ListAppVersionResourcesRequest,
  ): Effect.Effect<
    ListAppVersionResourcesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppVersions(
    input: ListAppVersionsRequest,
  ): Effect.Effect<
    ListAppVersionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listMetrics(
    input: ListMetricsRequest,
  ): Effect.Effect<
    ListMetricsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRecommendationTemplates(
    input: ListRecommendationTemplatesRequest,
  ): Effect.Effect<
    ListRecommendationTemplatesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listResiliencyPolicies(
    input: ListResiliencyPoliciesRequest,
  ): Effect.Effect<
    ListResiliencyPoliciesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listResourceGroupingRecommendations(
    input: ListResourceGroupingRecommendationsRequest,
  ): Effect.Effect<
    ListResourceGroupingRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSopRecommendations(
    input: ListSopRecommendationsRequest,
  ): Effect.Effect<
    ListSopRecommendationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSuggestedResiliencyPolicies(
    input: ListSuggestedResiliencyPoliciesRequest,
  ): Effect.Effect<
    ListSuggestedResiliencyPoliciesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestRecommendations(
    input: ListTestRecommendationsRequest,
  ): Effect.Effect<
    ListTestRecommendationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listUnsupportedAppVersionResources(
    input: ListUnsupportedAppVersionResourcesRequest,
  ): Effect.Effect<
    ListUnsupportedAppVersionResourcesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  publishAppVersion(
    input: PublishAppVersionRequest,
  ): Effect.Effect<
    PublishAppVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putDraftAppVersionTemplate(
    input: PutDraftAppVersionTemplateRequest,
  ): Effect.Effect<
    PutDraftAppVersionTemplateResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  rejectResourceGroupingRecommendations(
    input: RejectResourceGroupingRecommendationsRequest,
  ): Effect.Effect<
    RejectResourceGroupingRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  removeDraftAppVersionResourceMappings(
    input: RemoveDraftAppVersionResourceMappingsRequest,
  ): Effect.Effect<
    RemoveDraftAppVersionResourceMappingsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resolveAppVersionResources(
    input: ResolveAppVersionResourcesRequest,
  ): Effect.Effect<
    ResolveAppVersionResourcesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startAppAssessment(
    input: StartAppAssessmentRequest,
  ): Effect.Effect<
    StartAppAssessmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startMetricsExport(
    input: StartMetricsExportRequest,
  ): Effect.Effect<
    StartMetricsExportResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startResourceGroupingRecommendationTask(
    input: StartResourceGroupingRecommendationTaskRequest,
  ): Effect.Effect<
    StartResourceGroupingRecommendationTaskResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateApp(
    input: UpdateAppRequest,
  ): Effect.Effect<
    UpdateAppResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAppVersion(
    input: UpdateAppVersionRequest,
  ): Effect.Effect<
    UpdateAppVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAppVersionAppComponent(
    input: UpdateAppVersionAppComponentRequest,
  ): Effect.Effect<
    UpdateAppVersionAppComponentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAppVersionResource(
    input: UpdateAppVersionResourceRequest,
  ): Effect.Effect<
    UpdateAppVersionResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateResiliencyPolicy(
    input: UpdateResiliencyPolicyRequest,
  ): Effect.Effect<
    UpdateResiliencyPolicyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Resiliencehub = AwsResilienceHub;

export type AcceptGroupingRecommendationEntries =
  Array<AcceptGroupingRecommendationEntry>;
export interface AcceptGroupingRecommendationEntry {
  groupingRecommendationId: string;
}
export interface AcceptResourceGroupingRecommendationsRequest {
  appArn: string;
  entries: Array<AcceptGroupingRecommendationEntry>;
}
export interface AcceptResourceGroupingRecommendationsResponse {
  appArn: string;
  failedEntries: Array<FailedGroupingRecommendationEntry>;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AddDraftAppVersionResourceMappingsRequest {
  appArn: string;
  resourceMappings: Array<ResourceMapping>;
}
export interface AddDraftAppVersionResourceMappingsResponse {
  appArn: string;
  appVersion: string;
  resourceMappings: Array<ResourceMapping>;
}
export type AdditionalInfoMap = Record<string, Array<string>>;
export type AdditionalInfoValueList = Array<string>;
export interface Alarm {
  alarmArn?: string;
  source?: string;
}
export interface AlarmRecommendation {
  recommendationId: string;
  referenceId: string;
  name: string;
  description?: string;
  type: AlarmType;
  appComponentName?: string;
  items?: Array<RecommendationItem>;
  prerequisite?: string;
  appComponentNames?: Array<string>;
  recommendationStatus?: RecommendationStatus;
}
export type AlarmRecommendationList = Array<AlarmRecommendation>;
export type AlarmReferenceIdList = Array<string>;
export type AlarmType = "METRIC" | "COMPOSITE" | "CANARY" | "LOGS" | "EVENT";
export interface App {
  appArn: string;
  name: string;
  description?: string;
  policyArn?: string;
  creationTime: Date | string;
  status?: AppStatusType;
  complianceStatus?: AppComplianceStatusType;
  lastAppComplianceEvaluationTime?: Date | string;
  resiliencyScore?: number;
  lastResiliencyScoreEvaluationTime?: Date | string;
  tags?: Record<string, string>;
  assessmentSchedule?: AppAssessmentScheduleType;
  permissionModel?: PermissionModel;
  eventSubscriptions?: Array<EventSubscription>;
  driftStatus?: AppDriftStatusType;
  lastDriftEvaluationTime?: Date | string;
  rtoInSecs?: number;
  rpoInSecs?: number;
  awsApplicationArn?: string;
}
export interface AppAssessment {
  appArn?: string;
  appVersion?: string;
  invoker: AssessmentInvoker;
  cost?: Cost;
  resiliencyScore?: ResiliencyScore;
  compliance?: Record<DisruptionType, DisruptionCompliance>;
  complianceStatus?: ComplianceStatus;
  assessmentStatus: AssessmentStatus;
  startTime?: Date | string;
  endTime?: Date | string;
  message?: string;
  assessmentName?: string;
  assessmentArn: string;
  policy?: ResiliencyPolicy;
  tags?: Record<string, string>;
  resourceErrorsDetails?: ResourceErrorsDetails;
  versionName?: string;
  driftStatus?: DriftStatus;
  summary?: AssessmentSummary;
}
export type AppAssessmentScheduleType = "DISABLED" | "DAILY";
export interface AppAssessmentSummary {
  appArn?: string;
  appVersion?: string;
  assessmentStatus: AssessmentStatus;
  invoker?: AssessmentInvoker;
  startTime?: Date | string;
  endTime?: Date | string;
  message?: string;
  assessmentName?: string;
  assessmentArn: string;
  complianceStatus?: ComplianceStatus;
  cost?: Cost;
  resiliencyScore?: number;
  versionName?: string;
  driftStatus?: DriftStatus;
}
export type AppAssessmentSummaryList = Array<AppAssessmentSummary>;
export type AppComplianceStatusType =
  | "POLICY_BREACHED"
  | "POLICY_MET"
  | "NOT_ASSESSED"
  | "CHANGES_DETECTED"
  | "NOT_APPLICABLE"
  | "MISSING_POLICY";
export interface AppComponent {
  name: string;
  type: string;
  id?: string;
  additionalInfo?: Record<string, Array<string>>;
}
export interface AppComponentCompliance {
  cost?: Cost;
  appComponentName?: string;
  compliance?: Record<DisruptionType, DisruptionCompliance>;
  message?: string;
  status?: ComplianceStatus;
  resiliencyScore?: ResiliencyScore;
}
export type AppComponentList = Array<AppComponent>;
export type AppComponentNameList = Array<string>;
export type AppDriftStatusType = "NOT_CHECKED" | "NOT_DETECTED" | "DETECTED";
export interface AppInputSource {
  sourceName?: string;
  importType: ResourceMappingType;
  sourceArn?: string;
  terraformSource?: TerraformSource;
  resourceCount?: number;
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}
export type AppInputSourceList = Array<AppInputSource>;
export type AppStatusType = "ACTIVE" | "DELETING";
export interface AppSummary {
  appArn: string;
  name: string;
  description?: string;
  creationTime: Date | string;
  complianceStatus?: AppComplianceStatusType;
  resiliencyScore?: number;
  assessmentSchedule?: AppAssessmentScheduleType;
  status?: AppStatusType;
  driftStatus?: AppDriftStatusType;
  lastAppComplianceEvaluationTime?: Date | string;
  rtoInSecs?: number;
  rpoInSecs?: number;
  awsApplicationArn?: string;
}
export type AppSummaryList = Array<AppSummary>;
export type AppTemplateBody = string;

export type AppVersionList = Array<AppVersionSummary>;
export interface AppVersionSummary {
  appVersion: string;
  identifier?: number;
  creationTime?: Date | string;
  versionName?: string;
}
export type Arn = string;

export type ArnList = Array<string>;
export type AssessmentCompliance = Record<DisruptionType, DisruptionCompliance>;
export type AssessmentInvoker = "USER" | "SYSTEM";
export interface AssessmentRiskRecommendation {
  risk?: string;
  recommendation?: string;
  appComponents?: Array<string>;
}
export type AssessmentRiskRecommendationList =
  Array<AssessmentRiskRecommendation>;
export type AssessmentStatus = "PENDING" | "INPROGRESS" | "FAILED" | "SUCCESS";
export type AssessmentStatusList = Array<AssessmentStatus>;
export interface AssessmentSummary {
  summary?: string;
  riskRecommendations?: Array<AssessmentRiskRecommendation>;
}
export type AwsRegion = string;

export type BatchUpdateRecommendationStatusFailedEntries =
  Array<BatchUpdateRecommendationStatusFailedEntry>;
export interface BatchUpdateRecommendationStatusFailedEntry {
  entryId: string;
  errorMessage: string;
}
export interface BatchUpdateRecommendationStatusRequest {
  appArn: string;
  requestEntries: Array<UpdateRecommendationStatusRequestEntry>;
}
export interface BatchUpdateRecommendationStatusResponse {
  appArn: string;
  successfulEntries: Array<BatchUpdateRecommendationStatusSuccessfulEntry>;
  failedEntries: Array<BatchUpdateRecommendationStatusFailedEntry>;
}
export type BatchUpdateRecommendationStatusSuccessfulEntries =
  Array<BatchUpdateRecommendationStatusSuccessfulEntry>;
export interface BatchUpdateRecommendationStatusSuccessfulEntry {
  entryId: string;
  referenceId: string;
  item?: UpdateRecommendationStatusItem;
  excluded: boolean;
  appComponentId?: string;
  excludeReason?: ExcludeRecommendationReason;
}
export type BooleanOptional = boolean;

export type ClientToken = string;

export interface ComplianceDrift {
  entityId?: string;
  entityType?: string;
  driftType?: DriftType;
  appId?: string;
  appVersion?: string;
  expectedReferenceId?: string;
  expectedValue?: Record<DisruptionType, DisruptionCompliance>;
  actualReferenceId?: string;
  actualValue?: Record<DisruptionType, DisruptionCompliance>;
  diffType?: DifferenceType;
}
export type ComplianceDriftList = Array<ComplianceDrift>;
export type ComplianceStatus =
  | "POLICY_BREACHED"
  | "POLICY_MET"
  | "NOT_APPLICABLE"
  | "MISSING_POLICY";
export type ComponentCompliancesList = Array<AppComponentCompliance>;
export interface ComponentRecommendation {
  appComponentName: string;
  recommendationStatus: RecommendationComplianceStatus;
  configRecommendations: Array<ConfigRecommendation>;
}
export type ComponentRecommendationList = Array<ComponentRecommendation>;
export interface Condition {
  field: string;
  operator: ConditionOperatorType;
  value?: string;
}
export type ConditionList = Array<Condition>;
export type ConditionOperatorType =
  | "EQUALS"
  | "NOT_EQUALS"
  | "GREATER_THEN"
  | "GREATER_OR_EQUALS"
  | "LESS_THEN"
  | "LESS_OR_EQUALS";
export interface ConfigRecommendation {
  cost?: Cost;
  appComponentName?: string;
  compliance?: Record<DisruptionType, DisruptionCompliance>;
  recommendationCompliance?: Record<
    DisruptionType,
    RecommendationDisruptionCompliance
  >;
  optimizationType: ConfigRecommendationOptimizationType;
  name: string;
  description?: string;
  suggestedChanges?: Array<string>;
  haArchitecture?: HaArchitecture;
  referenceId: string;
}
export type ConfigRecommendationList = Array<ConfigRecommendation>;
export type ConfigRecommendationOptimizationType =
  | "LEAST_COST"
  | "LEAST_CHANGE"
  | "BEST_AZ_RECOVERY"
  | "LEAST_ERRORS"
  | "BEST_ATTAINABLE"
  | "BEST_REGION_RECOVERY";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface Cost {
  amount: number;
  currency: string;
  frequency: CostFrequency;
}
export type CostFrequency = "HOURLY" | "DAILY" | "MONTHLY" | "YEARLY";
export interface CreateAppRequest {
  name: string;
  description?: string;
  policyArn?: string;
  tags?: Record<string, string>;
  clientToken?: string;
  assessmentSchedule?: AppAssessmentScheduleType;
  permissionModel?: PermissionModel;
  eventSubscriptions?: Array<EventSubscription>;
  awsApplicationArn?: string;
}
export interface CreateAppResponse {
  app: App;
}
export interface CreateAppVersionAppComponentRequest {
  appArn: string;
  id?: string;
  name: string;
  type: string;
  additionalInfo?: Record<string, Array<string>>;
  clientToken?: string;
}
export interface CreateAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
export interface CreateAppVersionResourceRequest {
  appArn: string;
  resourceName?: string;
  logicalResourceId: LogicalResourceId;
  physicalResourceId: string;
  awsRegion?: string;
  awsAccountId?: string;
  resourceType: string;
  appComponents: Array<string>;
  additionalInfo?: Record<string, Array<string>>;
  clientToken?: string;
}
export interface CreateAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
export interface CreateRecommendationTemplateRequest {
  recommendationIds?: Array<string>;
  format?: TemplateFormat;
  recommendationTypes?: Array<RenderRecommendationType>;
  assessmentArn: string;
  name: string;
  clientToken?: string;
  tags?: Record<string, string>;
  bucketName?: string;
}
export interface CreateRecommendationTemplateResponse {
  recommendationTemplate?: RecommendationTemplate;
}
export interface CreateResiliencyPolicyRequest {
  policyName: string;
  policyDescription?: string;
  dataLocationConstraint?: DataLocationConstraint;
  tier: ResiliencyPolicyTier;
  policy: Record<DisruptionType, FailurePolicy>;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateResiliencyPolicyResponse {
  policy: ResiliencyPolicy;
}
export type CurrencyCode = string;

export type CustomerId = string;

export type DataLocationConstraint =
  | "ANY_LOCATION"
  | "SAME_CONTINENT"
  | "SAME_COUNTRY";
export interface DeleteAppAssessmentRequest {
  assessmentArn: string;
  clientToken?: string;
}
export interface DeleteAppAssessmentResponse {
  assessmentArn: string;
  assessmentStatus: AssessmentStatus;
}
export interface DeleteAppInputSourceRequest {
  appArn: string;
  sourceArn?: string;
  terraformSource?: TerraformSource;
  clientToken?: string;
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}
export interface DeleteAppInputSourceResponse {
  appArn?: string;
  appInputSource?: AppInputSource;
}
export interface DeleteAppRequest {
  appArn: string;
  forceDelete?: boolean;
  clientToken?: string;
}
export interface DeleteAppResponse {
  appArn: string;
}
export interface DeleteAppVersionAppComponentRequest {
  appArn: string;
  id: string;
  clientToken?: string;
}
export interface DeleteAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
export interface DeleteAppVersionResourceRequest {
  appArn: string;
  resourceName?: string;
  logicalResourceId?: LogicalResourceId;
  physicalResourceId?: string;
  awsRegion?: string;
  awsAccountId?: string;
  clientToken?: string;
}
export interface DeleteAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
export interface DeleteRecommendationTemplateRequest {
  recommendationTemplateArn: string;
  clientToken?: string;
}
export interface DeleteRecommendationTemplateResponse {
  recommendationTemplateArn: string;
  status: RecommendationTemplateStatus;
}
export interface DeleteResiliencyPolicyRequest {
  policyArn: string;
  clientToken?: string;
}
export interface DeleteResiliencyPolicyResponse {
  policyArn: string;
}
export interface DescribeAppAssessmentRequest {
  assessmentArn: string;
}
export interface DescribeAppAssessmentResponse {
  assessment: AppAssessment;
}
export interface DescribeAppRequest {
  appArn: string;
}
export interface DescribeAppResponse {
  app: App;
}
export interface DescribeAppVersionAppComponentRequest {
  appArn: string;
  appVersion: string;
  id: string;
}
export interface DescribeAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
export interface DescribeAppVersionRequest {
  appArn: string;
  appVersion: string;
}
export interface DescribeAppVersionResourceRequest {
  appArn: string;
  appVersion: string;
  resourceName?: string;
  logicalResourceId?: LogicalResourceId;
  physicalResourceId?: string;
  awsRegion?: string;
  awsAccountId?: string;
}
export interface DescribeAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
export interface DescribeAppVersionResourcesResolutionStatusRequest {
  appArn: string;
  appVersion: string;
  resolutionId?: string;
}
export interface DescribeAppVersionResourcesResolutionStatusResponse {
  appArn: string;
  appVersion: string;
  resolutionId: string;
  status: ResourceResolutionStatusType;
  errorMessage?: string;
}
export interface DescribeAppVersionResponse {
  appArn: string;
  appVersion: string;
  additionalInfo?: Record<string, Array<string>>;
}
export interface DescribeAppVersionTemplateRequest {
  appArn: string;
  appVersion: string;
}
export interface DescribeAppVersionTemplateResponse {
  appArn: string;
  appVersion: string;
  appTemplateBody: string;
}
export interface DescribeDraftAppVersionResourcesImportStatusRequest {
  appArn: string;
}
export interface DescribeDraftAppVersionResourcesImportStatusResponse {
  appArn: string;
  appVersion: string;
  status: ResourceImportStatusType;
  statusChangeTime: Date | string;
  errorMessage?: string;
  errorDetails?: Array<ErrorDetail>;
}
export interface DescribeMetricsExportRequest {
  metricsExportId: string;
}
export interface DescribeMetricsExportResponse {
  metricsExportId: string;
  status: MetricsExportStatusType;
  exportLocation?: S3Location;
  errorMessage?: string;
}
export interface DescribeResiliencyPolicyRequest {
  policyArn: string;
}
export interface DescribeResiliencyPolicyResponse {
  policy: ResiliencyPolicy;
}
export interface DescribeResourceGroupingRecommendationTaskRequest {
  appArn: string;
  groupingId?: string;
}
export interface DescribeResourceGroupingRecommendationTaskResponse {
  groupingId: string;
  status: ResourcesGroupingRecGenStatusType;
  errorMessage?: string;
}
export type DifferenceType = "NOT_EQUAL" | "ADDED" | "REMOVED";
export interface DisruptionCompliance {
  achievableRtoInSecs?: number;
  currentRtoInSecs?: number;
  rtoReferenceId?: string;
  rtoDescription?: string;
  currentRpoInSecs?: number;
  rpoReferenceId?: string;
  rpoDescription?: string;
  complianceStatus: ComplianceStatus;
  achievableRpoInSecs?: number;
  message?: string;
}
export type DisruptionPolicy = Record<DisruptionType, FailurePolicy>;
export type DisruptionResiliencyScore = Record<DisruptionType, number>;
export type DisruptionType = "SOFTWARE" | "HARDWARE" | "AZ" | "REGION";
export type DocumentName = string;

export type Double = number;

export type DriftStatus = "NOT_CHECKED" | "NOT_DETECTED" | "DETECTED";
export type DriftType =
  | "APPLICATION_COMPLIANCE"
  | "APP_COMPONENT_RESILIENCY_COMPLIANCE_STATUS";
export type EksNamespace = string;

export type EksNamespaceList = Array<string>;
export interface EksSource {
  eksClusterArn: string;
  namespaces: Array<string>;
}
export interface EksSourceClusterNamespace {
  eksClusterArn: string;
  namespace: string;
}
export type EksSourceList = Array<EksSource>;
export type EntityDescription = string;

export type EntityId = string;

export type EntityName = string;

export type EntityName255 = string;

export type EntityNameList = Array<string>;
export type EntityVersion = string;

export interface ErrorDetail {
  errorMessage?: string;
}
export type ErrorDetailList = Array<ErrorDetail>;
export type ErrorMessage = string;

export type EstimatedCostTier = "L1" | "L2" | "L3" | "L4";
export interface EventSubscription {
  name: string;
  eventType: EventType;
  snsTopicArn?: string;
}
export type EventSubscriptionList = Array<EventSubscription>;
export type EventType = "SCHEDULED_ASSESSMENT_FAILURE" | "DRIFT_DETECTED";
export type ExcludeRecommendationReason =
  | "ALREADY_IMPLEMENTED"
  | "NOT_RELEVANT"
  | "COMPLEXITY_OF_IMPLEMENTATION";
export interface Experiment {
  experimentArn?: string;
  experimentTemplateId?: string;
}
export type FailedGroupingRecommendationEntries =
  Array<FailedGroupingRecommendationEntry>;
export interface FailedGroupingRecommendationEntry {
  groupingRecommendationId: string;
  errorMessage: string;
}
export interface FailurePolicy {
  rtoInSecs: number;
  rpoInSecs: number;
}
export interface Field {
  name: string;
  aggregation?: FieldAggregationType;
}
export type FieldAggregationType = "MIN" | "MAX" | "SUM" | "AVG" | "COUNT";
export type FieldList = Array<Field>;
export interface GroupingAppComponent {
  appComponentId: string;
  appComponentType: string;
  appComponentName: string;
}
export interface GroupingRecommendation {
  groupingRecommendationId: string;
  groupingAppComponent: GroupingAppComponent;
  resources: Array<GroupingResource>;
  score: number;
  recommendationReasons: Array<string>;
  status: GroupingRecommendationStatusType;
  confidenceLevel: GroupingRecommendationConfidenceLevel;
  creationTime: Date | string;
  rejectionReason?: GroupingRecommendationRejectionReason;
}
export type GroupingRecommendationConfidenceLevel = "HIGH" | "MEDIUM";
export type GroupingRecommendationList = Array<GroupingRecommendation>;
export type GroupingRecommendationRejectionReason =
  | "DISTINCT_BUSINESS_PURPOSE"
  | "SEPARATE_DATA_CONCERN"
  | "DISTINCT_USER_GROUP_HANDLING"
  | "OTHER";
export type GroupingRecommendationStatusType =
  | "ACCEPTED"
  | "REJECTED"
  | "PENDING_DECISION";
export interface GroupingResource {
  resourceName: string;
  resourceType: string;
  physicalResourceId: PhysicalResourceId;
  logicalResourceId: LogicalResourceId;
  sourceAppComponentIds: Array<string>;
}
export type GroupingResourceList = Array<GroupingResource>;
export type HaArchitecture =
  | "MULTI_SITE"
  | "WARM_STANDBY"
  | "PILOT_LIGHT"
  | "BACKUP_AND_RESTORE"
  | "NO_RECOVERY_PLAN";
export type IamRoleArn = string;

export type IamRoleArnList = Array<string>;
export type IamRoleName = string;

export interface ImportResourcesToDraftAppVersionRequest {
  appArn: string;
  sourceArns?: Array<string>;
  terraformSources?: Array<TerraformSource>;
  importStrategy?: ResourceImportStrategyType;
  eksSources?: Array<EksSource>;
}
export interface ImportResourcesToDraftAppVersionResponse {
  appArn: string;
  appVersion: string;
  sourceArns?: Array<string>;
  status: ResourceImportStatusType;
  terraformSources?: Array<TerraformSource>;
  eksSources?: Array<EksSource>;
}
export type Integer = number;

export type IntegerOptional = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface ListAlarmRecommendationsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAlarmRecommendationsResponse {
  alarmRecommendations: Array<AlarmRecommendation>;
  nextToken?: string;
}
export interface ListAppAssessmentComplianceDriftsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppAssessmentComplianceDriftsResponse {
  complianceDrifts: Array<ComplianceDrift>;
  nextToken?: string;
}
export interface ListAppAssessmentResourceDriftsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppAssessmentResourceDriftsResponse {
  resourceDrifts: Array<ResourceDrift>;
  nextToken?: string;
}
export interface ListAppAssessmentsRequest {
  appArn?: string;
  assessmentName?: string;
  assessmentStatus?: Array<AssessmentStatus>;
  complianceStatus?: ComplianceStatus;
  invoker?: AssessmentInvoker;
  reverseOrder?: boolean;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppAssessmentsResponse {
  nextToken?: string;
  assessmentSummaries: Array<AppAssessmentSummary>;
}
export interface ListAppComponentCompliancesRequest {
  nextToken?: string;
  maxResults?: number;
  assessmentArn: string;
}
export interface ListAppComponentCompliancesResponse {
  componentCompliances: Array<AppComponentCompliance>;
  nextToken?: string;
}
export interface ListAppComponentRecommendationsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppComponentRecommendationsResponse {
  componentRecommendations: Array<ComponentRecommendation>;
  nextToken?: string;
}
export interface ListAppInputSourcesRequest {
  appArn: string;
  appVersion: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppInputSourcesResponse {
  appInputSources: Array<AppInputSource>;
  nextToken?: string;
}
export interface ListAppsRequest {
  nextToken?: string;
  maxResults?: number;
  name?: string;
  appArn?: string;
  fromLastAssessmentTime?: Date | string;
  toLastAssessmentTime?: Date | string;
  reverseOrder?: boolean;
  awsApplicationArn?: string;
}
export interface ListAppsResponse {
  appSummaries: Array<AppSummary>;
  nextToken?: string;
}
export interface ListAppVersionAppComponentsRequest {
  appArn: string;
  appVersion: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppVersionAppComponentsResponse {
  appArn: string;
  appVersion: string;
  appComponents?: Array<AppComponent>;
  nextToken?: string;
}
export interface ListAppVersionResourceMappingsRequest {
  appArn: string;
  appVersion: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppVersionResourceMappingsResponse {
  resourceMappings: Array<ResourceMapping>;
  nextToken?: string;
}
export interface ListAppVersionResourcesRequest {
  appArn: string;
  appVersion: string;
  resolutionId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppVersionResourcesResponse {
  physicalResources: Array<PhysicalResource>;
  resolutionId: string;
  nextToken?: string;
}
export interface ListAppVersionsRequest {
  appArn: string;
  nextToken?: string;
  maxResults?: number;
  startTime?: Date | string;
  endTime?: Date | string;
}
export interface ListAppVersionsResponse {
  appVersions: Array<AppVersionSummary>;
  nextToken?: string;
}
export interface ListMetricsRequest {
  nextToken?: string;
  maxResults?: number;
  fields?: Array<Field>;
  dataSource?: string;
  conditions?: Array<Condition>;
  sorts?: Array<Sort>;
}
export interface ListMetricsResponse {
  rows: Array<Array<string>>;
  nextToken?: string;
}
export interface ListRecommendationTemplatesRequest {
  assessmentArn?: string;
  reverseOrder?: boolean;
  status?: Array<RecommendationTemplateStatus>;
  recommendationTemplateArn?: string;
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListRecommendationTemplatesResponse {
  nextToken?: string;
  recommendationTemplates?: Array<RecommendationTemplate>;
}
export interface ListResiliencyPoliciesRequest {
  policyName?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListResiliencyPoliciesResponse {
  resiliencyPolicies: Array<ResiliencyPolicy>;
  nextToken?: string;
}
export interface ListResourceGroupingRecommendationsRequest {
  appArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListResourceGroupingRecommendationsResponse {
  groupingRecommendations: Array<GroupingRecommendation>;
  nextToken?: string;
}
export interface ListSopRecommendationsRequest {
  nextToken?: string;
  maxResults?: number;
  assessmentArn: string;
}
export interface ListSopRecommendationsResponse {
  nextToken?: string;
  sopRecommendations: Array<SopRecommendation>;
}
export interface ListSuggestedResiliencyPoliciesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListSuggestedResiliencyPoliciesResponse {
  resiliencyPolicies: Array<ResiliencyPolicy>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTestRecommendationsRequest {
  nextToken?: string;
  maxResults?: number;
  assessmentArn: string;
}
export interface ListTestRecommendationsResponse {
  nextToken?: string;
  testRecommendations: Array<TestRecommendation>;
}
export interface ListUnsupportedAppVersionResourcesRequest {
  appArn: string;
  appVersion: string;
  resolutionId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListUnsupportedAppVersionResourcesResponse {
  unsupportedResources: Array<UnsupportedResource>;
  resolutionId: string;
  nextToken?: string;
}
export interface LogicalResourceId {
  identifier: string;
  logicalStackName?: string;
  resourceGroupName?: string;
  terraformSourceName?: string;
  eksSourceName?: string;
}
export type Long = number;

export type LongOptional = number;

export type MaxResults = number;

export type MetricsExportStatusType =
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "SUCCESS";
export type NextToken = string;

export interface PermissionModel {
  type: PermissionModelType;
  invokerRoleName?: string;
  crossAccountRoleArns?: Array<string>;
}
export type PermissionModelType = "LEGACY_IAM_USER" | "ROLE_BASED";
export type PhysicalIdentifierType = "ARN" | "NATIVE";
export interface PhysicalResource {
  resourceName?: string;
  logicalResourceId: LogicalResourceId;
  physicalResourceId: PhysicalResourceId;
  resourceType: string;
  appComponents?: Array<AppComponent>;
  additionalInfo?: Record<string, Array<string>>;
  excluded?: boolean;
  sourceType?: ResourceSourceType;
  parentResourceName?: string;
}
export interface PhysicalResourceId {
  identifier: string;
  type: PhysicalIdentifierType;
  awsRegion?: string;
  awsAccountId?: string;
}
export type PhysicalResourceList = Array<PhysicalResource>;
export interface PublishAppVersionRequest {
  appArn: string;
  versionName?: string;
}
export interface PublishAppVersionResponse {
  appArn: string;
  appVersion?: string;
  identifier?: number;
  versionName?: string;
}
export interface PutDraftAppVersionTemplateRequest {
  appArn: string;
  appTemplateBody: string;
}
export interface PutDraftAppVersionTemplateResponse {
  appArn?: string;
  appVersion?: string;
}
export type RecommendationCompliance = Record<
  DisruptionType,
  RecommendationDisruptionCompliance
>;
export type RecommendationComplianceStatus =
  | "BREACHED_UNATTAINABLE"
  | "BREACHED_CAN_MEET"
  | "MET_CAN_IMPROVE"
  | "MISSING_POLICY";
export interface RecommendationDisruptionCompliance {
  expectedComplianceStatus: ComplianceStatus;
  expectedRtoInSecs?: number;
  expectedRtoDescription?: string;
  expectedRpoInSecs?: number;
  expectedRpoDescription?: string;
}
export type RecommendationIdList = Array<string>;
export interface RecommendationItem {
  resourceId?: string;
  targetAccountId?: string;
  targetRegion?: string;
  alreadyImplemented?: boolean;
  excluded?: boolean;
  excludeReason?: ExcludeRecommendationReason;
  latestDiscoveredExperiment?: Experiment;
  discoveredAlarm?: Alarm;
}
export type RecommendationItemList = Array<RecommendationItem>;
export type RecommendationStatus =
  | "IMPLEMENTED"
  | "INACTIVE"
  | "NOT_IMPLEMENTED"
  | "EXCLUDED";
export interface RecommendationTemplate {
  templatesLocation?: S3Location;
  assessmentArn: string;
  appArn?: string;
  recommendationIds?: Array<string>;
  recommendationTypes: Array<RenderRecommendationType>;
  format: TemplateFormat;
  recommendationTemplateArn: string;
  message?: string;
  status: RecommendationTemplateStatus;
  name: string;
  startTime?: Date | string;
  endTime?: Date | string;
  tags?: Record<string, string>;
  needsReplacements?: boolean;
}
export type RecommendationTemplateList = Array<RecommendationTemplate>;
export type RecommendationTemplateStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "SUCCESS";
export type RecommendationTemplateStatusList =
  Array<RecommendationTemplateStatus>;
export type RejectGroupingRecommendationEntries =
  Array<RejectGroupingRecommendationEntry>;
export interface RejectGroupingRecommendationEntry {
  groupingRecommendationId: string;
  rejectionReason?: GroupingRecommendationRejectionReason;
}
export interface RejectResourceGroupingRecommendationsRequest {
  appArn: string;
  entries: Array<RejectGroupingRecommendationEntry>;
}
export interface RejectResourceGroupingRecommendationsResponse {
  appArn: string;
  failedEntries: Array<FailedGroupingRecommendationEntry>;
}
export interface RemoveDraftAppVersionResourceMappingsRequest {
  appArn: string;
  resourceNames?: Array<string>;
  logicalStackNames?: Array<string>;
  appRegistryAppNames?: Array<string>;
  resourceGroupNames?: Array<string>;
  terraformSourceNames?: Array<string>;
  eksSourceNames?: Array<string>;
}
export interface RemoveDraftAppVersionResourceMappingsResponse {
  appArn?: string;
  appVersion?: string;
}
export type RenderRecommendationType = "ALARM" | "SOP" | "TEST";
export type RenderRecommendationTypeList = Array<RenderRecommendationType>;
export type ResiliencyPolicies = Array<ResiliencyPolicy>;
export interface ResiliencyPolicy {
  policyArn?: string;
  policyName?: string;
  policyDescription?: string;
  dataLocationConstraint?: DataLocationConstraint;
  tier?: ResiliencyPolicyTier;
  estimatedCostTier?: EstimatedCostTier;
  policy?: Record<DisruptionType, FailurePolicy>;
  creationTime?: Date | string;
  tags?: Record<string, string>;
}
export type ResiliencyPolicyTier =
  | "MISSION_CRITICAL"
  | "CRITICAL"
  | "IMPORTANT"
  | "CORE_SERVICES"
  | "NON_CRITICAL"
  | "NOT_APPLICABLE";
export interface ResiliencyScore {
  score: number;
  disruptionScore: Record<DisruptionType, number>;
  componentScore?: Record<ResiliencyScoreType, ScoringComponentResiliencyScore>;
}
export type ResiliencyScoreType = "COMPLIANCE" | "TEST" | "ALARM" | "SOP";
export interface ResolveAppVersionResourcesRequest {
  appArn: string;
  appVersion: string;
}
export interface ResolveAppVersionResourcesResponse {
  appArn: string;
  appVersion: string;
  resolutionId: string;
  status: ResourceResolutionStatusType;
}
export interface ResourceDrift {
  appArn?: string;
  appVersion?: string;
  referenceId?: string;
  resourceIdentifier?: ResourceIdentifier;
  diffType?: DifferenceType;
}
export type ResourceDriftList = Array<ResourceDrift>;
export interface ResourceError {
  logicalResourceId?: string;
  physicalResourceId?: string;
  reason?: string;
}
export type ResourceErrorList = Array<ResourceError>;
export interface ResourceErrorsDetails {
  resourceErrors?: Array<ResourceError>;
  hasMoreErrors?: boolean;
}
export type ResourceId = string;

export interface ResourceIdentifier {
  logicalResourceId?: LogicalResourceId;
  resourceType?: string;
}
export type ResourceImportStatusType =
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "SUCCESS";
export type ResourceImportStrategyType = "ADD_ONLY" | "REPLACE_ALL";
export interface ResourceMapping {
  resourceName?: string;
  logicalStackName?: string;
  appRegistryAppName?: string;
  resourceGroupName?: string;
  mappingType: ResourceMappingType;
  physicalResourceId: PhysicalResourceId;
  terraformSourceName?: string;
  eksSourceName?: string;
}
export type ResourceMappingList = Array<ResourceMapping>;
export type ResourceMappingType =
  | "CFN_STACK"
  | "RESOURCE"
  | "APP_REGISTRY_APP"
  | "RESOURCE_GROUP"
  | "TERRAFORM"
  | "EKS";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export type ResourceResolutionStatusType =
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "SUCCESS";
export type ResourcesGroupingRecGenStatusType =
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "SUCCESS";
export type ResourceSourceType = "APP_TEMPLATE" | "DISCOVERED";
export type ResourceType = string;

export type RetryAfterSeconds = number;

export type Row = Array<string>;
export type RowList = Array<Array<string>>;
export interface S3Location {
  bucket?: string;
  prefix?: string;
}
export type S3Url = string;

export interface ScoringComponentResiliencyScore {
  score?: number;
  possibleScore?: number;
  outstandingCount?: number;
  excludedCount?: number;
}
export type ScoringComponentResiliencyScores = Record<
  ResiliencyScoreType,
  ScoringComponentResiliencyScore
>;
export type Seconds = number;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SopRecommendation {
  serviceType: SopServiceType;
  appComponentName?: string;
  description?: string;
  recommendationId: string;
  name?: string;
  items?: Array<RecommendationItem>;
  referenceId: string;
  prerequisite?: string;
  recommendationStatus?: RecommendationStatus;
}
export type SopRecommendationList = Array<SopRecommendation>;
export type SopServiceType = "SSM";
export interface Sort {
  field: string;
  ascending?: boolean;
}
export type SortList = Array<Sort>;
export type SpecReferenceId = string;

export interface StartAppAssessmentRequest {
  appArn: string;
  appVersion: string;
  assessmentName: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface StartAppAssessmentResponse {
  assessment: AppAssessment;
}
export interface StartMetricsExportRequest {
  bucketName?: string;
  clientToken?: string;
}
export interface StartMetricsExportResponse {
  metricsExportId: string;
  status: MetricsExportStatusType;
}
export interface StartResourceGroupingRecommendationTaskRequest {
  appArn: string;
}
export interface StartResourceGroupingRecommendationTaskResponse {
  appArn: string;
  groupingId: string;
  status: ResourcesGroupingRecGenStatusType;
  errorMessage?: string;
}
export type String1024 = string;

export type String128WithoutWhitespace = string;

export type String2048 = string;

export type String255 = string;

export type String255List = Array<string>;
export type String500 = string;

export type SuggestedChangesList = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TemplateFormat = "CFN_YAML" | "CFN_JSON";
export interface TerraformSource {
  s3StateFileUrl: string;
}
export type TerraformSourceList = Array<TerraformSource>;
export interface TestRecommendation {
  recommendationId?: string;
  referenceId: string;
  appComponentId?: string;
  appComponentName?: string;
  name?: string;
  intent?: string;
  risk?: TestRisk;
  type?: TestType;
  description?: string;
  items?: Array<RecommendationItem>;
  prerequisite?: string;
  dependsOnAlarms?: Array<string>;
  recommendationStatus?: RecommendationStatus;
}
export type TestRecommendationList = Array<TestRecommendation>;
export type TestRisk = "SMALL" | "MEDIUM" | "HIGH";
export type TestType = "SOFTWARE" | "HARDWARE" | "AZ" | "REGION";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type TimeStamp = Date | string;

export interface UnsupportedResource {
  logicalResourceId: LogicalResourceId;
  physicalResourceId: PhysicalResourceId;
  resourceType: string;
  unsupportedResourceStatus?: string;
}
export type UnsupportedResourceList = Array<UnsupportedResource>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAppRequest {
  appArn: string;
  description?: string;
  policyArn?: string;
  clearResiliencyPolicyArn?: boolean;
  assessmentSchedule?: AppAssessmentScheduleType;
  permissionModel?: PermissionModel;
  eventSubscriptions?: Array<EventSubscription>;
}
export interface UpdateAppResponse {
  app: App;
}
export interface UpdateAppVersionAppComponentRequest {
  appArn: string;
  id: string;
  name?: string;
  type?: string;
  additionalInfo?: Record<string, Array<string>>;
}
export interface UpdateAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
export interface UpdateAppVersionRequest {
  appArn: string;
  additionalInfo?: Record<string, Array<string>>;
}
export interface UpdateAppVersionResourceRequest {
  appArn: string;
  resourceName?: string;
  logicalResourceId?: LogicalResourceId;
  physicalResourceId?: string;
  awsRegion?: string;
  awsAccountId?: string;
  resourceType?: string;
  appComponents?: Array<string>;
  additionalInfo?: Record<string, Array<string>>;
  excluded?: boolean;
}
export interface UpdateAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
export interface UpdateAppVersionResponse {
  appArn: string;
  appVersion: string;
  additionalInfo?: Record<string, Array<string>>;
}
export interface UpdateRecommendationStatusItem {
  resourceId?: string;
  targetAccountId?: string;
  targetRegion?: string;
}
export type UpdateRecommendationStatusRequestEntries =
  Array<UpdateRecommendationStatusRequestEntry>;
export interface UpdateRecommendationStatusRequestEntry {
  entryId: string;
  referenceId: string;
  item?: UpdateRecommendationStatusItem;
  excluded: boolean;
  appComponentId?: string;
  excludeReason?: ExcludeRecommendationReason;
}
export interface UpdateResiliencyPolicyRequest {
  policyArn: string;
  policyName?: string;
  policyDescription?: string;
  dataLocationConstraint?: DataLocationConstraint;
  tier?: ResiliencyPolicyTier;
  policy?: Record<DisruptionType, FailurePolicy>;
}
export interface UpdateResiliencyPolicyResponse {
  policy: ResiliencyPolicy;
}
export type Uuid = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace AcceptResourceGroupingRecommendations {
  export type Input = AcceptResourceGroupingRecommendationsRequest;
  export type Output = AcceptResourceGroupingRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AddDraftAppVersionResourceMappings {
  export type Input = AddDraftAppVersionResourceMappingsRequest;
  export type Output = AddDraftAppVersionResourceMappingsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateRecommendationStatus {
  export type Input = BatchUpdateRecommendationStatusRequest;
  export type Output = BatchUpdateRecommendationStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApp {
  export type Input = CreateAppRequest;
  export type Output = CreateAppResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAppVersionAppComponent {
  export type Input = CreateAppVersionAppComponentRequest;
  export type Output = CreateAppVersionAppComponentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAppVersionResource {
  export type Input = CreateAppVersionResourceRequest;
  export type Output = CreateAppVersionResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRecommendationTemplate {
  export type Input = CreateRecommendationTemplateRequest;
  export type Output = CreateRecommendationTemplateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResiliencyPolicy {
  export type Input = CreateResiliencyPolicyRequest;
  export type Output = CreateResiliencyPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApp {
  export type Input = DeleteAppRequest;
  export type Output = DeleteAppResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAppAssessment {
  export type Input = DeleteAppAssessmentRequest;
  export type Output = DeleteAppAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAppInputSource {
  export type Input = DeleteAppInputSourceRequest;
  export type Output = DeleteAppInputSourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAppVersionAppComponent {
  export type Input = DeleteAppVersionAppComponentRequest;
  export type Output = DeleteAppVersionAppComponentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAppVersionResource {
  export type Input = DeleteAppVersionResourceRequest;
  export type Output = DeleteAppVersionResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRecommendationTemplate {
  export type Input = DeleteRecommendationTemplateRequest;
  export type Output = DeleteRecommendationTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResiliencyPolicy {
  export type Input = DeleteResiliencyPolicyRequest;
  export type Output = DeleteResiliencyPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeApp {
  export type Input = DescribeAppRequest;
  export type Output = DescribeAppResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAppAssessment {
  export type Input = DescribeAppAssessmentRequest;
  export type Output = DescribeAppAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAppVersion {
  export type Input = DescribeAppVersionRequest;
  export type Output = DescribeAppVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAppVersionAppComponent {
  export type Input = DescribeAppVersionAppComponentRequest;
  export type Output = DescribeAppVersionAppComponentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAppVersionResource {
  export type Input = DescribeAppVersionResourceRequest;
  export type Output = DescribeAppVersionResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAppVersionResourcesResolutionStatus {
  export type Input = DescribeAppVersionResourcesResolutionStatusRequest;
  export type Output = DescribeAppVersionResourcesResolutionStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAppVersionTemplate {
  export type Input = DescribeAppVersionTemplateRequest;
  export type Output = DescribeAppVersionTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDraftAppVersionResourcesImportStatus {
  export type Input = DescribeDraftAppVersionResourcesImportStatusRequest;
  export type Output = DescribeDraftAppVersionResourcesImportStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeMetricsExport {
  export type Input = DescribeMetricsExportRequest;
  export type Output = DescribeMetricsExportResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeResiliencyPolicy {
  export type Input = DescribeResiliencyPolicyRequest;
  export type Output = DescribeResiliencyPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeResourceGroupingRecommendationTask {
  export type Input = DescribeResourceGroupingRecommendationTaskRequest;
  export type Output = DescribeResourceGroupingRecommendationTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportResourcesToDraftAppVersion {
  export type Input = ImportResourcesToDraftAppVersionRequest;
  export type Output = ImportResourcesToDraftAppVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAlarmRecommendations {
  export type Input = ListAlarmRecommendationsRequest;
  export type Output = ListAlarmRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppAssessmentComplianceDrifts {
  export type Input = ListAppAssessmentComplianceDriftsRequest;
  export type Output = ListAppAssessmentComplianceDriftsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppAssessmentResourceDrifts {
  export type Input = ListAppAssessmentResourceDriftsRequest;
  export type Output = ListAppAssessmentResourceDriftsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppAssessments {
  export type Input = ListAppAssessmentsRequest;
  export type Output = ListAppAssessmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppComponentCompliances {
  export type Input = ListAppComponentCompliancesRequest;
  export type Output = ListAppComponentCompliancesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppComponentRecommendations {
  export type Input = ListAppComponentRecommendationsRequest;
  export type Output = ListAppComponentRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppInputSources {
  export type Input = ListAppInputSourcesRequest;
  export type Output = ListAppInputSourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApps {
  export type Input = ListAppsRequest;
  export type Output = ListAppsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppVersionAppComponents {
  export type Input = ListAppVersionAppComponentsRequest;
  export type Output = ListAppVersionAppComponentsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppVersionResourceMappings {
  export type Input = ListAppVersionResourceMappingsRequest;
  export type Output = ListAppVersionResourceMappingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppVersionResources {
  export type Input = ListAppVersionResourcesRequest;
  export type Output = ListAppVersionResourcesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppVersions {
  export type Input = ListAppVersionsRequest;
  export type Output = ListAppVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMetrics {
  export type Input = ListMetricsRequest;
  export type Output = ListMetricsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecommendationTemplates {
  export type Input = ListRecommendationTemplatesRequest;
  export type Output = ListRecommendationTemplatesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResiliencyPolicies {
  export type Input = ListResiliencyPoliciesRequest;
  export type Output = ListResiliencyPoliciesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceGroupingRecommendations {
  export type Input = ListResourceGroupingRecommendationsRequest;
  export type Output = ListResourceGroupingRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSopRecommendations {
  export type Input = ListSopRecommendationsRequest;
  export type Output = ListSopRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSuggestedResiliencyPolicies {
  export type Input = ListSuggestedResiliencyPoliciesRequest;
  export type Output = ListSuggestedResiliencyPoliciesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestRecommendations {
  export type Input = ListTestRecommendationsRequest;
  export type Output = ListTestRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUnsupportedAppVersionResources {
  export type Input = ListUnsupportedAppVersionResourcesRequest;
  export type Output = ListUnsupportedAppVersionResourcesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PublishAppVersion {
  export type Input = PublishAppVersionRequest;
  export type Output = PublishAppVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutDraftAppVersionTemplate {
  export type Input = PutDraftAppVersionTemplateRequest;
  export type Output = PutDraftAppVersionTemplateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RejectResourceGroupingRecommendations {
  export type Input = RejectResourceGroupingRecommendationsRequest;
  export type Output = RejectResourceGroupingRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveDraftAppVersionResourceMappings {
  export type Input = RemoveDraftAppVersionResourceMappingsRequest;
  export type Output = RemoveDraftAppVersionResourceMappingsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResolveAppVersionResources {
  export type Input = ResolveAppVersionResourcesRequest;
  export type Output = ResolveAppVersionResourcesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAppAssessment {
  export type Input = StartAppAssessmentRequest;
  export type Output = StartAppAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartMetricsExport {
  export type Input = StartMetricsExportRequest;
  export type Output = StartMetricsExportResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartResourceGroupingRecommendationTask {
  export type Input = StartResourceGroupingRecommendationTaskRequest;
  export type Output = StartResourceGroupingRecommendationTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApp {
  export type Input = UpdateAppRequest;
  export type Output = UpdateAppResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAppVersion {
  export type Input = UpdateAppVersionRequest;
  export type Output = UpdateAppVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAppVersionAppComponent {
  export type Input = UpdateAppVersionAppComponentRequest;
  export type Output = UpdateAppVersionAppComponentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAppVersionResource {
  export type Input = UpdateAppVersionResourceRequest;
  export type Output = UpdateAppVersionResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResiliencyPolicy {
  export type Input = UpdateResiliencyPolicyRequest;
  export type Output = UpdateResiliencyPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
