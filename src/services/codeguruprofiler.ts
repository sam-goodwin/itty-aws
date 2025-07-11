import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface CodeGuruProfiler {
  addNotificationChannels(
    input: AddNotificationChannelsRequest,
  ): Effect.Effect<
    AddNotificationChannelsResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetFrameMetricData(
    input: BatchGetFrameMetricDataRequest,
  ): Effect.Effect<
    BatchGetFrameMetricDataResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  configureAgent(
    input: ConfigureAgentRequest,
  ): Effect.Effect<
    ConfigureAgentResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createProfilingGroup(
    input: CreateProfilingGroupRequest,
  ): Effect.Effect<
    CreateProfilingGroupResponse,
    ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteProfilingGroup(
    input: DeleteProfilingGroupRequest,
  ): Effect.Effect<
    DeleteProfilingGroupResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeProfilingGroup(
    input: DescribeProfilingGroupRequest,
  ): Effect.Effect<
    DescribeProfilingGroupResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFindingsReportAccountSummary(
    input: GetFindingsReportAccountSummaryRequest,
  ): Effect.Effect<
    GetFindingsReportAccountSummaryResponse,
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getNotificationConfiguration(
    input: GetNotificationConfigurationRequest,
  ): Effect.Effect<
    GetNotificationConfigurationResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    GetPolicyResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getProfile(
    input: GetProfileRequest,
  ): Effect.Effect<
    GetProfileResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getRecommendations(
    input: GetRecommendationsRequest,
  ): Effect.Effect<
    GetRecommendationsResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFindingsReports(
    input: ListFindingsReportsRequest,
  ): Effect.Effect<
    ListFindingsReportsResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listProfileTimes(
    input: ListProfileTimesRequest,
  ): Effect.Effect<
    ListProfileTimesResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listProfilingGroups(
    input: ListProfilingGroupsRequest,
  ): Effect.Effect<
    ListProfilingGroupsResponse,
    InternalServerException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  postAgentProfile(
    input: PostAgentProfileRequest,
  ): Effect.Effect<
    PostAgentProfileResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putPermission(
    input: PutPermissionRequest,
  ): Effect.Effect<
    PutPermissionResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  removeNotificationChannel(
    input: RemoveNotificationChannelRequest,
  ): Effect.Effect<
    RemoveNotificationChannelResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  removePermission(
    input: RemovePermissionRequest,
  ): Effect.Effect<
    RemovePermissionResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  submitFeedback(
    input: SubmitFeedbackRequest,
  ): Effect.Effect<
    SubmitFeedbackResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateProfilingGroup(
    input: UpdateProfilingGroupRequest,
  ): Effect.Effect<
    UpdateProfilingGroupResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Codeguruprofiler = CodeGuruProfiler;

export type ActionGroup = string;

export interface AddNotificationChannelsRequest {
  profilingGroupName: string;
  channels: Array<Channel>;
}
export interface AddNotificationChannelsResponse {
  notificationConfiguration?: NotificationConfiguration;
}
export interface AgentConfiguration {
  shouldProfile: boolean;
  periodInSeconds: number;
  agentParameters?: Record<string, string>;
}
export interface AgentOrchestrationConfig {
  profilingEnabled: boolean;
}
export type AgentParameterField = string;

export type AgentParameters = Record<string, string>;
export type AgentProfile = Uint8Array | string;

export type AggregatedProfile = Uint8Array | string;

export interface AggregatedProfileTime {
  start?: Date | string;
  period?: string;
}
export type AggregationPeriod = string;

export type Anomalies = Array<Anomaly>;
export interface Anomaly {
  metric: Metric;
  reason: string;
  instances: Array<AnomalyInstance>;
}
export interface AnomalyInstance {
  id: string;
  startTime: Date | string;
  endTime?: Date | string;
  userFeedback?: UserFeedback;
}
export type AnomalyInstanceId = string;

export type AnomalyInstances = Array<AnomalyInstance>;
export interface BatchGetFrameMetricDataRequest {
  profilingGroupName: string;
  startTime?: Date | string;
  endTime?: Date | string;
  period?: string;
  targetResolution?: string;
  frameMetrics?: Array<FrameMetric>;
}
export interface BatchGetFrameMetricDataResponse {
  startTime: Date | string;
  endTime: Date | string;
  resolution: string;
  endTimes: Array<TimestampStructure>;
  unprocessedEndTimes: Record<string, Array<TimestampStructure>>;
  frameMetricData: Array<FrameMetricDatum>;
}
export interface Channel {
  id?: string;
  uri: string;
  eventPublishers: Array<string>;
}
export type ChannelId = string;

export type Channels = Array<Channel>;
export type ChannelUri = string;

export type ClientToken = string;

export type ComputePlatform = string;

export interface ConfigureAgentRequest {
  profilingGroupName: string;
  fleetInstanceId?: string;
  metadata?: Record<string, string>;
}
export interface ConfigureAgentResponse {
  configuration: AgentConfiguration;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface CreateProfilingGroupRequest {
  profilingGroupName: string;
  computePlatform?: string;
  clientToken: string;
  agentOrchestrationConfig?: AgentOrchestrationConfig;
  tags?: Record<string, string>;
}
export interface CreateProfilingGroupResponse {
  profilingGroup: ProfilingGroupDescription;
}
export interface DeleteProfilingGroupRequest {
  profilingGroupName: string;
}
export interface DeleteProfilingGroupResponse {
}
export interface DescribeProfilingGroupRequest {
  profilingGroupName: string;
}
export interface DescribeProfilingGroupResponse {
  profilingGroup: ProfilingGroupDescription;
}
export type EventPublisher = string;

export type EventPublishers = Array<string>;
export type FeedbackType = string;

export type FindingsReportId = string;

export type FindingsReportSummaries = Array<FindingsReportSummary>;
export interface FindingsReportSummary {
  id?: string;
  profilingGroupName?: string;
  profileStartTime?: Date | string;
  profileEndTime?: Date | string;
  totalNumberOfFindings?: number;
}
export type FleetInstanceId = string;

export interface FrameMetric {
  frameName: string;
  type: string;
  threadStates: Array<string>;
}
export type FrameMetricData = Array<FrameMetricDatum>;
export interface FrameMetricDatum {
  frameMetric: FrameMetric;
  values: Array<number>;
}
export type FrameMetrics = Array<FrameMetric>;
export type FrameMetricValue = number;

export type FrameMetricValues = Array<number>;
export interface GetFindingsReportAccountSummaryRequest {
  nextToken?: string;
  maxResults?: number;
  dailyReportsOnly?: boolean;
}
export interface GetFindingsReportAccountSummaryResponse {
  reportSummaries: Array<FindingsReportSummary>;
  nextToken?: string;
}
export interface GetNotificationConfigurationRequest {
  profilingGroupName: string;
}
export interface GetNotificationConfigurationResponse {
  notificationConfiguration: NotificationConfiguration;
}
export interface GetPolicyRequest {
  profilingGroupName: string;
}
export interface GetPolicyResponse {
  policy: string;
  revisionId: string;
}
export interface GetProfileRequest {
  profilingGroupName: string;
  startTime?: Date | string;
  period?: string;
  endTime?: Date | string;
  maxDepth?: number;
  accept?: string;
}
export interface GetProfileResponse {
  profile: Uint8Array | string;
  contentType: string;
  contentEncoding?: string;
}
export interface GetRecommendationsRequest {
  profilingGroupName: string;
  startTime: Date | string;
  endTime: Date | string;
  locale?: string;
}
export interface GetRecommendationsResponse {
  profilingGroupName: string;
  profileStartTime: Date | string;
  profileEndTime: Date | string;
  recommendations: Array<Recommendation>;
  anomalies: Array<Anomaly>;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ListFindingsReportsRequest {
  profilingGroupName: string;
  startTime: Date | string;
  endTime: Date | string;
  nextToken?: string;
  maxResults?: number;
  dailyReportsOnly?: boolean;
}
export interface ListFindingsReportsResponse {
  findingsReportSummaries: Array<FindingsReportSummary>;
  nextToken?: string;
}
export type ListOfTimestamps = Array<TimestampStructure>;
export interface ListProfileTimesRequest {
  profilingGroupName: string;
  startTime: Date | string;
  endTime: Date | string;
  period: string;
  orderBy?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListProfileTimesResponse {
  profileTimes: Array<ProfileTime>;
  nextToken?: string;
}
export interface ListProfilingGroupsRequest {
  nextToken?: string;
  maxResults?: number;
  includeDescription?: boolean;
}
export interface ListProfilingGroupsResponse {
  profilingGroupNames: Array<string>;
  profilingGroups?: Array<ProfilingGroupDescription>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type Locale = string;

export interface Match {
  targetFramesIndex?: number;
  frameAddress?: string;
  thresholdBreachValue?: number;
}
export type Matches = Array<Match>;
export type MaxDepth = number;

export type MaxResults = number;

export type Metadata = Record<string, string>;
export type MetadataField = string;

export interface Metric {
  frameName: string;
  type: string;
  threadStates: Array<string>;
}
export type MetricType = string;

export interface NotificationConfiguration {
  channels?: Array<Channel>;
}
export type OrderBy = string;

export type PaginationToken = string;

export interface Pattern {
  id?: string;
  name?: string;
  description?: string;
  resolutionSteps?: string;
  targetFrames?: Array<Array<string>>;
  thresholdPercent?: number;
  countersToAggregate?: Array<string>;
}
export type Percentage = number;

export type Period = string;

export interface PostAgentProfileRequest {
  profilingGroupName: string;
  agentProfile: Uint8Array | string;
  profileToken?: string;
  contentType: string;
}
export interface PostAgentProfileResponse {
}
export type Principal = string;

export type Principals = Array<string>;
export interface ProfileTime {
  start?: Date | string;
}
export type ProfileTimes = Array<ProfileTime>;
export type ProfilingGroupArn = string;

export interface ProfilingGroupDescription {
  name?: string;
  agentOrchestrationConfig?: AgentOrchestrationConfig;
  arn?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  profilingStatus?: ProfilingStatus;
  computePlatform?: string;
  tags?: Record<string, string>;
}
export type ProfilingGroupDescriptions = Array<ProfilingGroupDescription>;
export type ProfilingGroupName = string;

export type ProfilingGroupNames = Array<string>;
export interface ProfilingStatus {
  latestAgentProfileReportedAt?: Date | string;
  latestAggregatedProfile?: AggregatedProfileTime;
  latestAgentOrchestratedAt?: Date | string;
}
export interface PutPermissionRequest {
  profilingGroupName: string;
  actionGroup: string;
  principals: Array<string>;
  revisionId?: string;
}
export interface PutPermissionResponse {
  policy: string;
  revisionId: string;
}
export interface Recommendation {
  allMatchesCount: number;
  allMatchesSum: number;
  pattern: Pattern;
  topMatches: Array<Match>;
  startTime: Date | string;
  endTime: Date | string;
}
export type Recommendations = Array<Recommendation>;
export interface RemoveNotificationChannelRequest {
  profilingGroupName: string;
  channelId: string;
}
export interface RemoveNotificationChannelResponse {
  notificationConfiguration?: NotificationConfiguration;
}
export interface RemovePermissionRequest {
  profilingGroupName: string;
  actionGroup: string;
  revisionId: string;
}
export interface RemovePermissionResponse {
  policy: string;
  revisionId: string;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type RevisionId = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type Strings = Array<string>;
export interface SubmitFeedbackRequest {
  profilingGroupName: string;
  anomalyInstanceId: string;
  type: string;
  comment?: string;
}
export interface SubmitFeedbackResponse {
}
export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagsMap = Record<string, string>;
export type TargetFrame = Array<string>;
export type TargetFrames = Array<Array<string>>;
export type ThreadStates = Array<string>;
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export type Timestamp = Date | string;

export interface TimestampStructure {
  value: Date | string;
}
export type UnprocessedEndTimeMap = Record<string, Array<TimestampStructure>>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateProfilingGroupRequest {
  profilingGroupName: string;
  agentOrchestrationConfig: AgentOrchestrationConfig;
}
export interface UpdateProfilingGroupResponse {
  profilingGroup: ProfilingGroupDescription;
}
export interface UserFeedback {
  type: string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace AddNotificationChannels {
  export type Input = AddNotificationChannelsRequest;
  export type Output = AddNotificationChannelsResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetFrameMetricData {
  export type Input = BatchGetFrameMetricDataRequest;
  export type Output = BatchGetFrameMetricDataResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ConfigureAgent {
  export type Input = ConfigureAgentRequest;
  export type Output = ConfigureAgentResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProfilingGroup {
  export type Input = CreateProfilingGroupRequest;
  export type Output = CreateProfilingGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProfilingGroup {
  export type Input = DeleteProfilingGroupRequest;
  export type Output = DeleteProfilingGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeProfilingGroup {
  export type Input = DescribeProfilingGroupRequest;
  export type Output = DescribeProfilingGroupResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindingsReportAccountSummary {
  export type Input = GetFindingsReportAccountSummaryRequest;
  export type Output = GetFindingsReportAccountSummaryResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNotificationConfiguration {
  export type Input = GetNotificationConfigurationRequest;
  export type Output = GetNotificationConfigurationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
  export type Output = GetPolicyResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetProfile {
  export type Input = GetProfileRequest;
  export type Output = GetProfileResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRecommendations {
  export type Input = GetRecommendationsRequest;
  export type Output = GetRecommendationsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindingsReports {
  export type Input = ListFindingsReportsRequest;
  export type Output = ListFindingsReportsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfileTimes {
  export type Input = ListProfileTimesRequest;
  export type Output = ListProfileTimesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfilingGroups {
  export type Input = ListProfilingGroupsRequest;
  export type Output = ListProfilingGroupsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PostAgentProfile {
  export type Input = PostAgentProfileRequest;
  export type Output = PostAgentProfileResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutPermission {
  export type Input = PutPermissionRequest;
  export type Output = PutPermissionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveNotificationChannel {
  export type Input = RemoveNotificationChannelRequest;
  export type Output = RemoveNotificationChannelResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemovePermission {
  export type Input = RemovePermissionRequest;
  export type Output = RemovePermissionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SubmitFeedback {
  export type Input = SubmitFeedbackRequest;
  export type Output = SubmitFeedbackResponse;
  export type Error =
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
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProfilingGroup {
  export type Input = UpdateProfilingGroupRequest;
  export type Output = UpdateProfilingGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

