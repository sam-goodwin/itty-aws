import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface InspectorService {
  addAttributesToFindings(
    input: AddAttributesToFindingsRequest,
  ): Effect.Effect<
    AddAttributesToFindingsResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  createAssessmentTarget(
    input: CreateAssessmentTargetRequest,
  ): Effect.Effect<
    CreateAssessmentTargetResponse,
    | AccessDeniedException
    | InternalException
    | InvalidCrossAccountRoleException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  createAssessmentTemplate(
    input: CreateAssessmentTemplateRequest,
  ): Effect.Effect<
    CreateAssessmentTemplateResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  createExclusionsPreview(
    input: CreateExclusionsPreviewRequest,
  ): Effect.Effect<
    CreateExclusionsPreviewResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | PreviewGenerationInProgressException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  createResourceGroup(
    input: CreateResourceGroupRequest,
  ): Effect.Effect<
    CreateResourceGroupResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | LimitExceededException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  deleteAssessmentRun(
    input: DeleteAssessmentRunRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AssessmentRunInProgressException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  deleteAssessmentTarget(
    input: DeleteAssessmentTargetRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AssessmentRunInProgressException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  deleteAssessmentTemplate(
    input: DeleteAssessmentTemplateRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AssessmentRunInProgressException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  describeAssessmentRuns(
    input: DescribeAssessmentRunsRequest,
  ): Effect.Effect<
    DescribeAssessmentRunsResponse,
    InternalException | InvalidInputException | CommonAwsError
  >;
  describeAssessmentTargets(
    input: DescribeAssessmentTargetsRequest,
  ): Effect.Effect<
    DescribeAssessmentTargetsResponse,
    InternalException | InvalidInputException | CommonAwsError
  >;
  describeAssessmentTemplates(
    input: DescribeAssessmentTemplatesRequest,
  ): Effect.Effect<
    DescribeAssessmentTemplatesResponse,
    InternalException | InvalidInputException | CommonAwsError
  >;
  describeCrossAccountAccessRole(input: {}): Effect.Effect<
    DescribeCrossAccountAccessRoleResponse,
    InternalException | CommonAwsError
  >;
  describeExclusions(
    input: DescribeExclusionsRequest,
  ): Effect.Effect<
    DescribeExclusionsResponse,
    InternalException | InvalidInputException | CommonAwsError
  >;
  describeFindings(
    input: DescribeFindingsRequest,
  ): Effect.Effect<
    DescribeFindingsResponse,
    InternalException | InvalidInputException | CommonAwsError
  >;
  describeResourceGroups(
    input: DescribeResourceGroupsRequest,
  ): Effect.Effect<
    DescribeResourceGroupsResponse,
    InternalException | InvalidInputException | CommonAwsError
  >;
  describeRulesPackages(
    input: DescribeRulesPackagesRequest,
  ): Effect.Effect<
    DescribeRulesPackagesResponse,
    InternalException | InvalidInputException | CommonAwsError
  >;
  getAssessmentReport(
    input: GetAssessmentReportRequest,
  ): Effect.Effect<
    GetAssessmentReportResponse,
    | AccessDeniedException
    | AssessmentRunInProgressException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  getExclusionsPreview(
    input: GetExclusionsPreviewRequest,
  ): Effect.Effect<
    GetExclusionsPreviewResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  getTelemetryMetadata(
    input: GetTelemetryMetadataRequest,
  ): Effect.Effect<
    GetTelemetryMetadataResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  listAssessmentRunAgents(
    input: ListAssessmentRunAgentsRequest,
  ): Effect.Effect<
    ListAssessmentRunAgentsResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  listAssessmentRuns(
    input: ListAssessmentRunsRequest,
  ): Effect.Effect<
    ListAssessmentRunsResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  listAssessmentTargets(
    input: ListAssessmentTargetsRequest,
  ): Effect.Effect<
    ListAssessmentTargetsResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | CommonAwsError
  >;
  listAssessmentTemplates(
    input: ListAssessmentTemplatesRequest,
  ): Effect.Effect<
    ListAssessmentTemplatesResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  listEventSubscriptions(
    input: ListEventSubscriptionsRequest,
  ): Effect.Effect<
    ListEventSubscriptionsResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  listExclusions(
    input: ListExclusionsRequest,
  ): Effect.Effect<
    ListExclusionsResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  listFindings(
    input: ListFindingsRequest,
  ): Effect.Effect<
    ListFindingsResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  listRulesPackages(
    input: ListRulesPackagesRequest,
  ): Effect.Effect<
    ListRulesPackagesResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  previewAgents(
    input: PreviewAgentsRequest,
  ): Effect.Effect<
    PreviewAgentsResponse,
    | AccessDeniedException
    | InternalException
    | InvalidCrossAccountRoleException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError
  >;
  registerCrossAccountAccessRole(
    input: RegisterCrossAccountAccessRoleRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalException
    | InvalidCrossAccountRoleException
    | InvalidInputException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  removeAttributesFromFindings(
    input: RemoveAttributesFromFindingsRequest,
  ): Effect.Effect<
    RemoveAttributesFromFindingsResponse,
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  setTagsForResource(
    input: SetTagsForResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  startAssessmentRun(
    input: StartAssessmentRunRequest,
  ): Effect.Effect<
    StartAssessmentRunResponse,
    | AccessDeniedException
    | AgentsAlreadyRunningAssessmentException
    | InternalException
    | InvalidCrossAccountRoleException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  stopAssessmentRun(
    input: StopAssessmentRunRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  subscribeToEvent(
    input: SubscribeToEventRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  unsubscribeFromEvent(
    input: UnsubscribeFromEventRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
  updateAssessmentTarget(
    input: UpdateAssessmentTargetRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError
  >;
}

export type Inspector = InspectorService;

export type AccessDeniedErrorCode =
  | "ACCESS_DENIED_TO_ASSESSMENT_TARGET"
  | "ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE"
  | "ACCESS_DENIED_TO_ASSESSMENT_RUN"
  | "ACCESS_DENIED_TO_FINDING"
  | "ACCESS_DENIED_TO_RESOURCE_GROUP"
  | "ACCESS_DENIED_TO_RULES_PACKAGE"
  | "ACCESS_DENIED_TO_SNS_TOPIC"
  | "ACCESS_DENIED_TO_IAM_ROLE";
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
  readonly errorCode: AccessDeniedErrorCode;
  readonly canRetry: boolean;
}> {}
export interface AddAttributesToFindingsRequest {
  findingArns: Array<string>;
  attributes: Array<Attribute>;
}
export interface AddAttributesToFindingsResponse {
  failedItems: Record<string, FailedItemDetails>;
}
export type AddRemoveAttributesFindingArnList = Array<string>;
export interface AgentAlreadyRunningAssessment {
  agentId: string;
  assessmentRunArn: string;
}
export type AgentAlreadyRunningAssessmentList =
  Array<AgentAlreadyRunningAssessment>;
export interface AgentFilter {
  agentHealths: Array<AgentHealth>;
  agentHealthCodes: Array<AgentHealthCode>;
}
export type AgentHealth = "HEALTHY" | "UNHEALTHY" | "UNKNOWN";
export type AgentHealthCode =
  | "IDLE"
  | "RUNNING"
  | "SHUTDOWN"
  | "UNHEALTHY"
  | "THROTTLED"
  | "UNKNOWN";
export type AgentHealthCodeList = Array<AgentHealthCode>;
export type AgentHealthList = Array<AgentHealth>;
export type AgentId = string;

export type AgentIdList = Array<string>;
export interface AgentPreview {
  hostname?: string;
  agentId: string;
  autoScalingGroup?: string;
  agentHealth?: AgentHealth;
  agentVersion?: string;
  operatingSystem?: string;
  kernelVersion?: string;
  ipv4Address?: string;
}
export type AgentPreviewList = Array<AgentPreview>;
export declare class AgentsAlreadyRunningAssessmentException extends EffectData.TaggedError(
  "AgentsAlreadyRunningAssessmentException",
)<{
  readonly message: string;
  readonly agents: Array<AgentAlreadyRunningAssessment>;
  readonly agentsTruncated: boolean;
  readonly canRetry: boolean;
}> {}
export type AgentVersion = string;

export type AmiId = string;

export type Arn = string;

export type ArnCount = number;

export type AssessmentRulesPackageArnList = Array<string>;
export interface AssessmentRun {
  arn: string;
  name: string;
  assessmentTemplateArn: string;
  state: AssessmentRunState;
  durationInSeconds: number;
  rulesPackageArns: Array<string>;
  userAttributesForFindings: Array<Attribute>;
  createdAt: Date | string;
  startedAt?: Date | string;
  completedAt?: Date | string;
  stateChangedAt: Date | string;
  dataCollected: boolean;
  stateChanges: Array<AssessmentRunStateChange>;
  notifications: Array<AssessmentRunNotification>;
  findingCounts: Record<Severity, number>;
}
export interface AssessmentRunAgent {
  agentId: string;
  assessmentRunArn: string;
  agentHealth: AgentHealth;
  agentHealthCode: AgentHealthCode;
  agentHealthDetails?: string;
  autoScalingGroup?: string;
  telemetryMetadata: Array<TelemetryMetadata>;
}
export type AssessmentRunAgentList = Array<AssessmentRunAgent>;
export type AssessmentRunDuration = number;

export interface AssessmentRunFilter {
  namePattern?: string;
  states?: Array<AssessmentRunState>;
  durationRange?: DurationRange;
  rulesPackageArns?: Array<string>;
  startTimeRange?: TimestampRange;
  completionTimeRange?: TimestampRange;
  stateChangeTimeRange?: TimestampRange;
}
export type AssessmentRunFindingCounts = Record<Severity, number>;
export type AssessmentRunInProgressArnList = Array<string>;
export declare class AssessmentRunInProgressException extends EffectData.TaggedError(
  "AssessmentRunInProgressException",
)<{
  readonly message: string;
  readonly assessmentRunArns: Array<string>;
  readonly assessmentRunArnsTruncated: boolean;
  readonly canRetry: boolean;
}> {}
export type AssessmentRunList = Array<AssessmentRun>;
export type AssessmentRunName = string;

export interface AssessmentRunNotification {
  date: Date | string;
  event: InspectorEvent;
  message?: string;
  error: boolean;
  snsTopicArn?: string;
  snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCode;
}
export type AssessmentRunNotificationList = Array<AssessmentRunNotification>;
export type AssessmentRunNotificationSnsStatusCode =
  | "SUCCESS"
  | "TOPIC_DOES_NOT_EXIST"
  | "ACCESS_DENIED"
  | "INTERNAL_ERROR";
export type AssessmentRunState =
  | "CREATED"
  | "START_DATA_COLLECTION_PENDING"
  | "START_DATA_COLLECTION_IN_PROGRESS"
  | "COLLECTING_DATA"
  | "STOP_DATA_COLLECTION_PENDING"
  | "DATA_COLLECTED"
  | "START_EVALUATING_RULES_PENDING"
  | "EVALUATING_RULES"
  | "FAILED"
  | "ERROR"
  | "COMPLETED"
  | "COMPLETED_WITH_ERRORS"
  | "CANCELED";
export interface AssessmentRunStateChange {
  stateChangedAt: Date | string;
  state: AssessmentRunState;
}
export type AssessmentRunStateChangeList = Array<AssessmentRunStateChange>;
export type AssessmentRunStateList = Array<AssessmentRunState>;
export interface AssessmentTarget {
  arn: string;
  name: string;
  resourceGroupArn?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export interface AssessmentTargetFilter {
  assessmentTargetNamePattern?: string;
}
export type AssessmentTargetList = Array<AssessmentTarget>;
export type AssessmentTargetName = string;

export interface AssessmentTemplate {
  arn: string;
  name: string;
  assessmentTargetArn: string;
  durationInSeconds: number;
  rulesPackageArns: Array<string>;
  userAttributesForFindings: Array<Attribute>;
  lastAssessmentRunArn?: string;
  assessmentRunCount: number;
  createdAt: Date | string;
}
export interface AssessmentTemplateFilter {
  namePattern?: string;
  durationRange?: DurationRange;
  rulesPackageArns?: Array<string>;
}
export type AssessmentTemplateList = Array<AssessmentTemplate>;
export type AssessmentTemplateName = string;

export type AssessmentTemplateRulesPackageArnList = Array<string>;
export interface AssetAttributes {
  schemaVersion: number;
  agentId?: string;
  autoScalingGroup?: string;
  amiId?: string;
  hostname?: string;
  ipv4Addresses?: Array<string>;
  tags?: Array<Tag>;
  networkInterfaces?: Array<NetworkInterface>;
}
export type AssetType = "EC2_INSTANCE";
export interface Attribute {
  key: string;
  value?: string;
}
export type AttributeKey = string;

export type AttributeList = Array<Attribute>;
export type AttributeValue = string;

export type AutoScalingGroup = string;

export type AutoScalingGroupList = Array<string>;
export type BatchDescribeArnList = Array<string>;
export type BatchDescribeExclusionsArnList = Array<string>;
export type Bool = boolean;

export interface CreateAssessmentTargetRequest {
  assessmentTargetName: string;
  resourceGroupArn?: string;
}
export interface CreateAssessmentTargetResponse {
  assessmentTargetArn: string;
}
export interface CreateAssessmentTemplateRequest {
  assessmentTargetArn: string;
  assessmentTemplateName: string;
  durationInSeconds: number;
  rulesPackageArns: Array<string>;
  userAttributesForFindings?: Array<Attribute>;
}
export interface CreateAssessmentTemplateResponse {
  assessmentTemplateArn: string;
}
export interface CreateExclusionsPreviewRequest {
  assessmentTemplateArn: string;
}
export interface CreateExclusionsPreviewResponse {
  previewToken: string;
}
export interface CreateResourceGroupRequest {
  resourceGroupTags: Array<ResourceGroupTag>;
}
export interface CreateResourceGroupResponse {
  resourceGroupArn: string;
}
export interface DeleteAssessmentRunRequest {
  assessmentRunArn: string;
}
export interface DeleteAssessmentTargetRequest {
  assessmentTargetArn: string;
}
export interface DeleteAssessmentTemplateRequest {
  assessmentTemplateArn: string;
}
export interface DescribeAssessmentRunsRequest {
  assessmentRunArns: Array<string>;
}
export interface DescribeAssessmentRunsResponse {
  assessmentRuns: Array<AssessmentRun>;
  failedItems: Record<string, FailedItemDetails>;
}
export interface DescribeAssessmentTargetsRequest {
  assessmentTargetArns: Array<string>;
}
export interface DescribeAssessmentTargetsResponse {
  assessmentTargets: Array<AssessmentTarget>;
  failedItems: Record<string, FailedItemDetails>;
}
export interface DescribeAssessmentTemplatesRequest {
  assessmentTemplateArns: Array<string>;
}
export interface DescribeAssessmentTemplatesResponse {
  assessmentTemplates: Array<AssessmentTemplate>;
  failedItems: Record<string, FailedItemDetails>;
}
export interface DescribeCrossAccountAccessRoleResponse {
  roleArn: string;
  valid: boolean;
  registeredAt: Date | string;
}
export interface DescribeExclusionsRequest {
  exclusionArns: Array<string>;
  locale?: Locale;
}
export interface DescribeExclusionsResponse {
  exclusions: Record<string, Exclusion>;
  failedItems: Record<string, FailedItemDetails>;
}
export interface DescribeFindingsRequest {
  findingArns: Array<string>;
  locale?: Locale;
}
export interface DescribeFindingsResponse {
  findings: Array<Finding>;
  failedItems: Record<string, FailedItemDetails>;
}
export interface DescribeResourceGroupsRequest {
  resourceGroupArns: Array<string>;
}
export interface DescribeResourceGroupsResponse {
  resourceGroups: Array<ResourceGroup>;
  failedItems: Record<string, FailedItemDetails>;
}
export interface DescribeRulesPackagesRequest {
  rulesPackageArns: Array<string>;
  locale?: Locale;
}
export interface DescribeRulesPackagesResponse {
  rulesPackages: Array<RulesPackage>;
  failedItems: Record<string, FailedItemDetails>;
}
export interface DurationRange {
  minSeconds?: number;
  maxSeconds?: number;
}
export type ErrorMessage = string;

export interface EventSubscription {
  event: InspectorEvent;
  subscribedAt: Date | string;
}
export type EventSubscriptionList = Array<EventSubscription>;
export interface Exclusion {
  arn: string;
  title: string;
  description: string;
  recommendation: string;
  scopes: Array<Scope>;
  attributes?: Array<Attribute>;
}
export type ExclusionMap = Record<string, Exclusion>;
export interface ExclusionPreview {
  title: string;
  description: string;
  recommendation: string;
  scopes: Array<Scope>;
  attributes?: Array<Attribute>;
}
export type ExclusionPreviewList = Array<ExclusionPreview>;
export interface FailedItemDetails {
  failureCode: FailedItemErrorCode;
  retryable: boolean;
}
export type FailedItemErrorCode =
  | "INVALID_ARN"
  | "DUPLICATE_ARN"
  | "ITEM_DOES_NOT_EXIST"
  | "ACCESS_DENIED"
  | "LIMIT_EXCEEDED"
  | "INTERNAL_ERROR";
export type FailedItems = Record<string, FailedItemDetails>;
export type FilterRulesPackageArnList = Array<string>;
export interface Finding {
  arn: string;
  schemaVersion?: number;
  service?: string;
  serviceAttributes?: InspectorServiceAttributes;
  assetType?: AssetType;
  assetAttributes?: AssetAttributes;
  id?: string;
  title?: string;
  description?: string;
  recommendation?: string;
  severity?: Severity;
  numericSeverity?: number;
  confidence?: number;
  indicatorOfCompromise?: boolean;
  attributes: Array<Attribute>;
  userAttributes: Array<Attribute>;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type FindingCount = number;

export interface FindingFilter {
  agentIds?: Array<string>;
  autoScalingGroups?: Array<string>;
  ruleNames?: Array<string>;
  severities?: Array<Severity>;
  rulesPackageArns?: Array<string>;
  attributes?: Array<Attribute>;
  userAttributes?: Array<Attribute>;
  creationTimeRange?: TimestampRange;
}
export type FindingId = string;

export type FindingList = Array<Finding>;
export interface GetAssessmentReportRequest {
  assessmentRunArn: string;
  reportFileFormat: ReportFileFormat;
  reportType: ReportType;
}
export interface GetAssessmentReportResponse {
  status: ReportStatus;
  url?: string;
}
export interface GetExclusionsPreviewRequest {
  assessmentTemplateArn: string;
  previewToken: string;
  nextToken?: string;
  maxResults?: number;
  locale?: Locale;
}
export interface GetExclusionsPreviewResponse {
  previewStatus: PreviewStatus;
  exclusionPreviews?: Array<ExclusionPreview>;
  nextToken?: string;
}
export interface GetTelemetryMetadataRequest {
  assessmentRunArn: string;
}
export interface GetTelemetryMetadataResponse {
  telemetryMetadata: Array<TelemetryMetadata>;
}
export type Hostname = string;

export type InspectorEvent =
  | "ASSESSMENT_RUN_STARTED"
  | "ASSESSMENT_RUN_COMPLETED"
  | "ASSESSMENT_RUN_STATE_CHANGED"
  | "FINDING_REPORTED"
  | "OTHER";
export interface InspectorServiceAttributes {
  schemaVersion: number;
  assessmentRunArn?: string;
  rulesPackageArn?: string;
}
export declare class InternalException extends EffectData.TaggedError(
  "InternalException",
)<{
  readonly message: string;
  readonly canRetry: boolean;
}> {}
export type InvalidCrossAccountRoleErrorCode =
  | "ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP"
  | "ROLE_DOES_NOT_HAVE_CORRECT_POLICY";
export declare class InvalidCrossAccountRoleException extends EffectData.TaggedError(
  "InvalidCrossAccountRoleException",
)<{
  readonly message: string;
  readonly errorCode: InvalidCrossAccountRoleErrorCode;
  readonly canRetry: boolean;
}> {}
export type InvalidInputErrorCode =
  | "INVALID_ASSESSMENT_TARGET_ARN"
  | "INVALID_ASSESSMENT_TEMPLATE_ARN"
  | "INVALID_ASSESSMENT_RUN_ARN"
  | "INVALID_FINDING_ARN"
  | "INVALID_RESOURCE_GROUP_ARN"
  | "INVALID_RULES_PACKAGE_ARN"
  | "INVALID_RESOURCE_ARN"
  | "INVALID_SNS_TOPIC_ARN"
  | "INVALID_IAM_ROLE_ARN"
  | "INVALID_ASSESSMENT_TARGET_NAME"
  | "INVALID_ASSESSMENT_TARGET_NAME_PATTERN"
  | "INVALID_ASSESSMENT_TEMPLATE_NAME"
  | "INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN"
  | "INVALID_ASSESSMENT_TEMPLATE_DURATION"
  | "INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE"
  | "INVALID_ASSESSMENT_RUN_DURATION_RANGE"
  | "INVALID_ASSESSMENT_RUN_START_TIME_RANGE"
  | "INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE"
  | "INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE"
  | "INVALID_ASSESSMENT_RUN_STATE"
  | "INVALID_TAG"
  | "INVALID_TAG_KEY"
  | "INVALID_TAG_VALUE"
  | "INVALID_RESOURCE_GROUP_TAG_KEY"
  | "INVALID_RESOURCE_GROUP_TAG_VALUE"
  | "INVALID_ATTRIBUTE"
  | "INVALID_USER_ATTRIBUTE"
  | "INVALID_USER_ATTRIBUTE_KEY"
  | "INVALID_USER_ATTRIBUTE_VALUE"
  | "INVALID_PAGINATION_TOKEN"
  | "INVALID_MAX_RESULTS"
  | "INVALID_AGENT_ID"
  | "INVALID_AUTO_SCALING_GROUP"
  | "INVALID_RULE_NAME"
  | "INVALID_SEVERITY"
  | "INVALID_LOCALE"
  | "INVALID_EVENT"
  | "ASSESSMENT_TARGET_NAME_ALREADY_TAKEN"
  | "ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN"
  | "INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS"
  | "INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS"
  | "INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS"
  | "INVALID_NUMBER_OF_FINDING_ARNS"
  | "INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS"
  | "INVALID_NUMBER_OF_RULES_PACKAGE_ARNS"
  | "INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES"
  | "INVALID_NUMBER_OF_TAGS"
  | "INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS"
  | "INVALID_NUMBER_OF_ATTRIBUTES"
  | "INVALID_NUMBER_OF_USER_ATTRIBUTES"
  | "INVALID_NUMBER_OF_AGENT_IDS"
  | "INVALID_NUMBER_OF_AUTO_SCALING_GROUPS"
  | "INVALID_NUMBER_OF_RULE_NAMES"
  | "INVALID_NUMBER_OF_SEVERITIES";
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly message: string;
  readonly errorCode: InvalidInputErrorCode;
  readonly canRetry: boolean;
}> {}
export type IocConfidence = number;

export type Ipv4Address = string;

export type Ipv4AddressList = Array<string>;
export type Ipv6Addresses = Array<string>;
export type KernelVersion = string;

export type LimitExceededErrorCode =
  | "ASSESSMENT_TARGET_LIMIT_EXCEEDED"
  | "ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED"
  | "ASSESSMENT_RUN_LIMIT_EXCEEDED"
  | "RESOURCE_GROUP_LIMIT_EXCEEDED"
  | "EVENT_SUBSCRIPTION_LIMIT_EXCEEDED";
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message: string;
  readonly errorCode: LimitExceededErrorCode;
  readonly canRetry: boolean;
}> {}
export interface ListAssessmentRunAgentsRequest {
  assessmentRunArn: string;
  filter?: AgentFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssessmentRunAgentsResponse {
  assessmentRunAgents: Array<AssessmentRunAgent>;
  nextToken?: string;
}
export interface ListAssessmentRunsRequest {
  assessmentTemplateArns?: Array<string>;
  filter?: AssessmentRunFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssessmentRunsResponse {
  assessmentRunArns: Array<string>;
  nextToken?: string;
}
export interface ListAssessmentTargetsRequest {
  filter?: AssessmentTargetFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssessmentTargetsResponse {
  assessmentTargetArns: Array<string>;
  nextToken?: string;
}
export interface ListAssessmentTemplatesRequest {
  assessmentTargetArns?: Array<string>;
  filter?: AssessmentTemplateFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssessmentTemplatesResponse {
  assessmentTemplateArns: Array<string>;
  nextToken?: string;
}
export type ListEventSubscriptionsMaxResults = number;

export interface ListEventSubscriptionsRequest {
  resourceArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEventSubscriptionsResponse {
  subscriptions: Array<Subscription>;
  nextToken?: string;
}
export interface ListExclusionsRequest {
  assessmentRunArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListExclusionsResponse {
  exclusionArns: Array<string>;
  nextToken?: string;
}
export interface ListFindingsRequest {
  assessmentRunArns?: Array<string>;
  filter?: FindingFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFindingsResponse {
  findingArns: Array<string>;
  nextToken?: string;
}
export type ListMaxResults = number;

export type ListParentArnList = Array<string>;
export type ListReturnedArnList = Array<string>;
export interface ListRulesPackagesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListRulesPackagesResponse {
  rulesPackageArns: Array<string>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Array<Tag>;
}
export type Locale = "EN_US";
export type Long = number;

export type Message = string;

export type MessageType = string;

export type NamePattern = string;

export interface NetworkInterface {
  networkInterfaceId?: string;
  subnetId?: string;
  vpcId?: string;
  privateDnsName?: string;
  privateIpAddress?: string;
  privateIpAddresses?: Array<PrivateIp>;
  publicDnsName?: string;
  publicIp?: string;
  ipv6Addresses?: Array<string>;
  securityGroups?: Array<SecurityGroup>;
}
export type NetworkInterfaces = Array<NetworkInterface>;
export type NoSuchEntityErrorCode =
  | "ASSESSMENT_TARGET_DOES_NOT_EXIST"
  | "ASSESSMENT_TEMPLATE_DOES_NOT_EXIST"
  | "ASSESSMENT_RUN_DOES_NOT_EXIST"
  | "FINDING_DOES_NOT_EXIST"
  | "RESOURCE_GROUP_DOES_NOT_EXIST"
  | "RULES_PACKAGE_DOES_NOT_EXIST"
  | "SNS_TOPIC_DOES_NOT_EXIST"
  | "IAM_ROLE_DOES_NOT_EXIST";
export declare class NoSuchEntityException extends EffectData.TaggedError(
  "NoSuchEntityException",
)<{
  readonly message: string;
  readonly errorCode: NoSuchEntityErrorCode;
  readonly canRetry: boolean;
}> {}
export type NumericSeverity = number;

export type NumericVersion = number;

export type OperatingSystem = string;

export type PaginationToken = string;

export type PreviewAgentsMaxResults = number;

export interface PreviewAgentsRequest {
  previewAgentsArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface PreviewAgentsResponse {
  agentPreviews: Array<AgentPreview>;
  nextToken?: string;
}
export declare class PreviewGenerationInProgressException extends EffectData.TaggedError(
  "PreviewGenerationInProgressException",
)<{
  readonly message: string;
}> {}
export type PreviewStatus = "WORK_IN_PROGRESS" | "COMPLETED";
export interface PrivateIp {
  privateDnsName?: string;
  privateIpAddress?: string;
}
export type PrivateIpAddresses = Array<PrivateIp>;
export type ProviderName = string;

export interface RegisterCrossAccountAccessRoleRequest {
  roleArn: string;
}
export interface RemoveAttributesFromFindingsRequest {
  findingArns: Array<string>;
  attributeKeys: Array<string>;
}
export interface RemoveAttributesFromFindingsResponse {
  failedItems: Record<string, FailedItemDetails>;
}
export type ReportFileFormat = "HTML" | "PDF";
export type ReportStatus = "WORK_IN_PROGRESS" | "FAILED" | "COMPLETED";
export type ReportType = "FINDING" | "FULL";
export interface ResourceGroup {
  arn: string;
  tags: Array<ResourceGroupTag>;
  createdAt: Date | string;
}
export type ResourceGroupList = Array<ResourceGroup>;
export interface ResourceGroupTag {
  key: string;
  value?: string;
}
export type ResourceGroupTags = Array<ResourceGroupTag>;
export type RuleName = string;

export type RuleNameList = Array<string>;
export interface RulesPackage {
  arn: string;
  name: string;
  version: string;
  provider: string;
  description?: string;
}
export type RulesPackageList = Array<RulesPackage>;
export type RulesPackageName = string;

export interface Scope {
  key?: ScopeType;
  value?: string;
}
export type ScopeList = Array<Scope>;
export type ScopeType = "INSTANCE_ID" | "RULES_PACKAGE_ARN";
export type ScopeValue = string;

export interface SecurityGroup {
  groupName?: string;
  groupId?: string;
}
export type SecurityGroups = Array<SecurityGroup>;
export type ServiceName = string;

export declare class ServiceTemporarilyUnavailableException extends EffectData.TaggedError(
  "ServiceTemporarilyUnavailableException",
)<{
  readonly message: string;
  readonly canRetry: boolean;
}> {}
export interface SetTagsForResourceRequest {
  resourceArn: string;
  tags?: Array<Tag>;
}
export type Severity =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "INFORMATIONAL"
  | "UNDEFINED";
export type SeverityList = Array<Severity>;
export interface StartAssessmentRunRequest {
  assessmentTemplateArn: string;
  assessmentRunName?: string;
}
export interface StartAssessmentRunResponse {
  assessmentRunArn: string;
}
export type StopAction = "START_EVALUATION" | "SKIP_EVALUATION";
export interface StopAssessmentRunRequest {
  assessmentRunArn: string;
  stopAction?: StopAction;
}
export interface SubscribeToEventRequest {
  resourceArn: string;
  event: InspectorEvent;
  topicArn: string;
}
export interface Subscription {
  resourceArn: string;
  topicArn: string;
  eventSubscriptions: Array<EventSubscription>;
}
export type SubscriptionList = Array<Subscription>;
export interface Tag {
  key: string;
  value?: string;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export type Tags = Array<Tag>;
export type TagValue = string;

export interface TelemetryMetadata {
  messageType: string;
  count: number;
  dataSize?: number;
}
export type TelemetryMetadataList = Array<TelemetryMetadata>;
export type Text = string;

export type Timestamp = Date | string;

export interface TimestampRange {
  beginDate?: Date | string;
  endDate?: Date | string;
}
export interface UnsubscribeFromEventRequest {
  resourceArn: string;
  event: InspectorEvent;
  topicArn: string;
}
export declare class UnsupportedFeatureException extends EffectData.TaggedError(
  "UnsupportedFeatureException",
)<{
  readonly message: string;
  readonly canRetry: boolean;
}> {}
export interface UpdateAssessmentTargetRequest {
  assessmentTargetArn: string;
  assessmentTargetName: string;
  resourceGroupArn?: string;
}
export type Url = string;

export type UserAttributeKeyList = Array<string>;
export type UserAttributeList = Array<Attribute>;
export type UUID = string;

export type Version = string;

export declare namespace AddAttributesToFindings {
  export type Input = AddAttributesToFindingsRequest;
  export type Output = AddAttributesToFindingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace CreateAssessmentTarget {
  export type Input = CreateAssessmentTargetRequest;
  export type Output = CreateAssessmentTargetResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidCrossAccountRoleException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace CreateAssessmentTemplate {
  export type Input = CreateAssessmentTemplateRequest;
  export type Output = CreateAssessmentTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace CreateExclusionsPreview {
  export type Input = CreateExclusionsPreviewRequest;
  export type Output = CreateExclusionsPreviewResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | PreviewGenerationInProgressException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace CreateResourceGroup {
  export type Input = CreateResourceGroupRequest;
  export type Output = CreateResourceGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | LimitExceededException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteAssessmentRun {
  export type Input = DeleteAssessmentRunRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AssessmentRunInProgressException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteAssessmentTarget {
  export type Input = DeleteAssessmentTargetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AssessmentRunInProgressException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteAssessmentTemplate {
  export type Input = DeleteAssessmentTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AssessmentRunInProgressException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeAssessmentRuns {
  export type Input = DescribeAssessmentRunsRequest;
  export type Output = DescribeAssessmentRunsResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeAssessmentTargets {
  export type Input = DescribeAssessmentTargetsRequest;
  export type Output = DescribeAssessmentTargetsResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeAssessmentTemplates {
  export type Input = DescribeAssessmentTemplatesRequest;
  export type Output = DescribeAssessmentTemplatesResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeCrossAccountAccessRole {
  export type Input = {};
  export type Output = DescribeCrossAccountAccessRoleResponse;
  export type Error = InternalException | CommonAwsError;
}

export declare namespace DescribeExclusions {
  export type Input = DescribeExclusionsRequest;
  export type Output = DescribeExclusionsResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeFindings {
  export type Input = DescribeFindingsRequest;
  export type Output = DescribeFindingsResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeResourceGroups {
  export type Input = DescribeResourceGroupsRequest;
  export type Output = DescribeResourceGroupsResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeRulesPackages {
  export type Input = DescribeRulesPackagesRequest;
  export type Output = DescribeRulesPackagesResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace GetAssessmentReport {
  export type Input = GetAssessmentReportRequest;
  export type Output = GetAssessmentReportResponse;
  export type Error =
    | AccessDeniedException
    | AssessmentRunInProgressException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace GetExclusionsPreview {
  export type Input = GetExclusionsPreviewRequest;
  export type Output = GetExclusionsPreviewResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace GetTelemetryMetadata {
  export type Input = GetTelemetryMetadataRequest;
  export type Output = GetTelemetryMetadataResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ListAssessmentRunAgents {
  export type Input = ListAssessmentRunAgentsRequest;
  export type Output = ListAssessmentRunAgentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ListAssessmentRuns {
  export type Input = ListAssessmentRunsRequest;
  export type Output = ListAssessmentRunsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ListAssessmentTargets {
  export type Input = ListAssessmentTargetsRequest;
  export type Output = ListAssessmentTargetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ListAssessmentTemplates {
  export type Input = ListAssessmentTemplatesRequest;
  export type Output = ListAssessmentTemplatesResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ListEventSubscriptions {
  export type Input = ListEventSubscriptionsRequest;
  export type Output = ListEventSubscriptionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ListExclusions {
  export type Input = ListExclusionsRequest;
  export type Output = ListExclusionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ListFindings {
  export type Input = ListFindingsRequest;
  export type Output = ListFindingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ListRulesPackages {
  export type Input = ListRulesPackagesRequest;
  export type Output = ListRulesPackagesResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace PreviewAgents {
  export type Input = PreviewAgentsRequest;
  export type Output = PreviewAgentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidCrossAccountRoleException
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace RegisterCrossAccountAccessRole {
  export type Input = RegisterCrossAccountAccessRoleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidCrossAccountRoleException
    | InvalidInputException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace RemoveAttributesFromFindings {
  export type Input = RemoveAttributesFromFindingsRequest;
  export type Output = RemoveAttributesFromFindingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace SetTagsForResource {
  export type Input = SetTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace StartAssessmentRun {
  export type Input = StartAssessmentRunRequest;
  export type Output = StartAssessmentRunResponse;
  export type Error =
    | AccessDeniedException
    | AgentsAlreadyRunningAssessmentException
    | InternalException
    | InvalidCrossAccountRoleException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace StopAssessmentRun {
  export type Input = StopAssessmentRunRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace SubscribeToEvent {
  export type Input = SubscribeToEventRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace UnsubscribeFromEvent {
  export type Input = UnsubscribeFromEventRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateAssessmentTarget {
  export type Input = UpdateAssessmentTargetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceTemporarilyUnavailableException
    | CommonAwsError;
}
