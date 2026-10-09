import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CodeGuruProfiler",
  serviceShapeName: "CodeGuruProfiler",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "codeguru-profiler" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-07-18");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://codeguru-profiler-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://codeguru-profiler-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://codeguru-profiler.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://codeguru-profiler.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(402), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withQuotaError, C.withRetryableError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ProfilingGroupName = string;
export type ChannelId = string;
export type ChannelUri = string;
export type EventPublisher = string;
export type EventPublishers = string[];
const EventPublishers = /*@__PURE__*/ __L.at(__c0, 0);
export interface Channel {
  id?: string;
  uri: string;
  eventPublishers: string[];
}
const Channel = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<Channel>;
export type Channels = Channel[];
const Channels = /*@__PURE__*/ __L.at(__c0, 2);
export interface AddNotificationChannelsRequest {
  profilingGroupName: string;
  channels: Channel[];
}
const AddNotificationChannelsRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AddNotificationChannelsRequest>;
export interface NotificationConfiguration {
  channels?: Channel[];
}
const NotificationConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<NotificationConfiguration>;
export interface AddNotificationChannelsResponse {
  notificationConfiguration?: NotificationConfiguration;
}
const AddNotificationChannelsResponse = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<AddNotificationChannelsResponse>;
export type Period = string;
export type AggregationPeriod = string;
export type MetricType = string;
export type ThreadStates = string[];
const ThreadStates = EventPublishers as any as S.Schema<ThreadStates>;
export interface FrameMetric {
  frameName: string;
  type: string;
  threadStates: string[];
}
const FrameMetric = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<FrameMetric>;
export type FrameMetrics = FrameMetric[];
const FrameMetrics = /*@__PURE__*/ __L.at(__c0, 7);
export interface BatchGetFrameMetricDataRequest {
  profilingGroupName: string;
  startTime?: Date;
  endTime?: Date;
  period?: string;
  targetResolution?: string;
  frameMetrics?: FrameMetric[];
}
const BatchGetFrameMetricDataRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BatchGetFrameMetricDataRequest>;
export interface TimestampStructure {
  value: Date;
}
const TimestampStructure = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<TimestampStructure>;
export type ListOfTimestamps = TimestampStructure[];
const ListOfTimestamps = /*@__PURE__*/ __L.at(__c1, 2);
export type UnprocessedEndTimeMap = { [key: string]: TimestampStructure[] | undefined };
const UnprocessedEndTimeMap = /*@__PURE__*/ __L.at(__c1, 3);
export type FrameMetricValue = number;
export type FrameMetricValues = number[];
const FrameMetricValues = /*@__PURE__*/ __L.at(__c1, 4);
export interface FrameMetricDatum {
  frameMetric: FrameMetric;
  values: number[];
}
const FrameMetricDatum = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<FrameMetricDatum>;
export type FrameMetricData = FrameMetricDatum[];
const FrameMetricData = /*@__PURE__*/ __L.at(__c1, 6);
export interface BatchGetFrameMetricDataResponse {
  startTime: Date;
  endTime: Date;
  resolution: string;
  endTimes: TimestampStructure[];
  unprocessedEndTimes: { [key: string]: TimestampStructure[] | undefined };
  frameMetricData: FrameMetricDatum[];
}
const BatchGetFrameMetricDataResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<BatchGetFrameMetricDataResponse>;
export type FleetInstanceId = string;
export type MetadataField = string;
export type Metadata = { [key: string]: string | undefined };
const Metadata = /*@__PURE__*/ __L.at(__c2, 0);
export interface ConfigureAgentRequest {
  profilingGroupName: string;
  fleetInstanceId?: string;
  metadata?: { [key: string]: string | undefined };
}
const ConfigureAgentRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<ConfigureAgentRequest>;
export type AgentParameterField = string;
export type AgentParameters = { [key: string]: string | undefined };
const AgentParameters = /*@__PURE__*/ __L.at(__c2, 2);
export interface AgentConfiguration {
  shouldProfile: boolean;
  periodInSeconds: number;
  agentParameters?: { [key: string]: string | undefined };
}
const AgentConfiguration = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<AgentConfiguration>;
export interface ConfigureAgentResponse {
  configuration: AgentConfiguration;
}
const ConfigureAgentResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<ConfigureAgentResponse>;
export type ComputePlatform = string;
export type ClientToken = string;
export interface AgentOrchestrationConfig {
  profilingEnabled: boolean;
}
const AgentOrchestrationConfig = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<AgentOrchestrationConfig>;
export type TagsMap = { [key: string]: string | undefined };
const TagsMap = Metadata as any as S.Schema<TagsMap>;
export interface CreateProfilingGroupRequest {
  profilingGroupName: string;
  computePlatform?: string;
  clientToken: string;
  agentOrchestrationConfig?: AgentOrchestrationConfig;
  tags?: { [key: string]: string | undefined };
}
const CreateProfilingGroupRequest = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateProfilingGroupRequest>;
export type ProfilingGroupArn = string;
export interface AggregatedProfileTime {
  start?: Date;
  period?: string;
}
const AggregatedProfileTime = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<AggregatedProfileTime>;
export interface ProfilingStatus {
  latestAgentProfileReportedAt?: Date;
  latestAggregatedProfile?: AggregatedProfileTime;
  latestAgentOrchestratedAt?: Date;
}
const ProfilingStatus = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ProfilingStatus>;
export interface ProfilingGroupDescription {
  name?: string;
  agentOrchestrationConfig?: AgentOrchestrationConfig;
  arn?: string;
  createdAt?: Date;
  updatedAt?: Date;
  profilingStatus?: ProfilingStatus;
  computePlatform?: string;
  tags?: { [key: string]: string | undefined };
}
const ProfilingGroupDescription = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ProfilingGroupDescription>;
export interface CreateProfilingGroupResponse {
  profilingGroup: ProfilingGroupDescription;
}
const CreateProfilingGroupResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateProfilingGroupResponse>;
export interface DeleteProfilingGroupRequest {
  profilingGroupName: string;
}
const DeleteProfilingGroupRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<DeleteProfilingGroupRequest>;
export interface DeleteProfilingGroupResponse {}
const DeleteProfilingGroupResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<DeleteProfilingGroupResponse>;
export interface DescribeProfilingGroupRequest {
  profilingGroupName: string;
}
const DescribeProfilingGroupRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DescribeProfilingGroupRequest>;
export interface DescribeProfilingGroupResponse {
  profilingGroup: ProfilingGroupDescription;
}
const DescribeProfilingGroupResponse =
  CreateProfilingGroupResponse as any as S.Schema<DescribeProfilingGroupResponse>;
export type PaginationToken = string;
export type MaxResults = number;
export interface GetFindingsReportAccountSummaryRequest {
  nextToken?: string;
  maxResults?: number;
  dailyReportsOnly?: boolean;
}
const GetFindingsReportAccountSummaryRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<GetFindingsReportAccountSummaryRequest>;
export type FindingsReportId = string;
export interface FindingsReportSummary {
  id?: string;
  profilingGroupName?: string;
  profileStartTime?: Date;
  profileEndTime?: Date;
  totalNumberOfFindings?: number;
}
const FindingsReportSummary = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<FindingsReportSummary>;
export type FindingsReportSummaries = FindingsReportSummary[];
const FindingsReportSummaries = /*@__PURE__*/ __L.at(__c4, 0);
export interface GetFindingsReportAccountSummaryResponse {
  reportSummaries: FindingsReportSummary[];
  nextToken?: string;
}
const GetFindingsReportAccountSummaryResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<GetFindingsReportAccountSummaryResponse>;
export interface GetNotificationConfigurationRequest {
  profilingGroupName: string;
}
const GetNotificationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<GetNotificationConfigurationRequest>;
export interface GetNotificationConfigurationResponse {
  notificationConfiguration: NotificationConfiguration;
}
const GetNotificationConfigurationResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<GetNotificationConfigurationResponse>;
export interface GetPolicyRequest {
  profilingGroupName: string;
}
const GetPolicyRequest = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<GetPolicyRequest>;
export type RevisionId = string;
export interface GetPolicyResponse {
  policy: string;
  revisionId: string;
}
const GetPolicyResponse = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<GetPolicyResponse>;
export type MaxDepth = number;
export interface GetProfileRequest {
  profilingGroupName: string;
  startTime?: Date;
  period?: string;
  endTime?: Date;
  maxDepth?: number;
  accept?: string;
}
const GetProfileRequest = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<GetProfileRequest>;
export interface GetProfileResponse {
  profile: T.StreamingOutputBody;
  contentType: string;
  contentEncoding?: string;
}
const GetProfileResponse = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<GetProfileResponse>;
export type Locale = string;
export interface GetRecommendationsRequest {
  profilingGroupName: string;
  startTime: Date;
  endTime: Date;
  locale?: string;
}
const GetRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<GetRecommendationsRequest>;
export type TargetFrame = string[];
const TargetFrame = EventPublishers as any as S.Schema<TargetFrame>;
export type TargetFrames = string[][];
const TargetFrames = /*@__PURE__*/ __L.at(__c5, 1);
export type Percentage = number;
export type Strings = string[];
const Strings = EventPublishers as any as S.Schema<Strings>;
export interface Pattern {
  id?: string;
  name?: string;
  description?: string;
  resolutionSteps?: string;
  targetFrames?: string[][];
  thresholdPercent?: number;
  countersToAggregate?: string[];
}
const Pattern = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<Pattern>;
export interface Match {
  targetFramesIndex?: number;
  frameAddress?: string;
  thresholdBreachValue?: number;
}
const Match = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<Match>;
export type Matches = Match[];
const Matches = /*@__PURE__*/ __L.at(__c5, 4);
export interface Recommendation {
  allMatchesCount: number;
  allMatchesSum: number;
  pattern: Pattern;
  topMatches: Match[];
  startTime: Date;
  endTime: Date;
}
const Recommendation = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<Recommendation>;
export type Recommendations = Recommendation[];
const Recommendations = /*@__PURE__*/ __L.at(__c5, 6);
export interface Metric {
  frameName: string;
  type: string;
  threadStates: string[];
}
const Metric = FrameMetric as any as S.Schema<Metric>;
export type FeedbackType = string;
export interface UserFeedback {
  type: string;
}
const UserFeedback = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<UserFeedback>;
export interface AnomalyInstance {
  id: string;
  startTime: Date;
  endTime?: Date;
  userFeedback?: UserFeedback;
}
const AnomalyInstance = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<AnomalyInstance>;
export type AnomalyInstances = AnomalyInstance[];
const AnomalyInstances = /*@__PURE__*/ __L.at(__c6, 1);
export interface Anomaly {
  metric: Metric;
  reason: string;
  instances: AnomalyInstance[];
}
const Anomaly = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<Anomaly>;
export type Anomalies = Anomaly[];
const Anomalies = /*@__PURE__*/ __L.at(__c6, 3);
export interface GetRecommendationsResponse {
  profilingGroupName: string;
  profileStartTime: Date;
  profileEndTime: Date;
  recommendations: Recommendation[];
  anomalies: Anomaly[];
}
const GetRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<GetRecommendationsResponse>;
export interface ListFindingsReportsRequest {
  profilingGroupName: string;
  startTime: Date;
  endTime: Date;
  nextToken?: string;
  maxResults?: number;
  dailyReportsOnly?: boolean;
}
const ListFindingsReportsRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<ListFindingsReportsRequest>;
export interface ListFindingsReportsResponse {
  findingsReportSummaries: FindingsReportSummary[];
  nextToken?: string;
}
const ListFindingsReportsResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ListFindingsReportsResponse>;
export type OrderBy = string;
export interface ListProfileTimesRequest {
  profilingGroupName: string;
  startTime: Date;
  endTime: Date;
  period: string;
  orderBy?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListProfileTimesRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<ListProfileTimesRequest>;
export interface ProfileTime {
  start?: Date;
}
const ProfileTime = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<ProfileTime>;
export type ProfileTimes = ProfileTime[];
const ProfileTimes = /*@__PURE__*/ __L.at(__c7, 1);
export interface ListProfileTimesResponse {
  profileTimes: ProfileTime[];
  nextToken?: string;
}
const ListProfileTimesResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ListProfileTimesResponse>;
export interface ListProfilingGroupsRequest {
  nextToken?: string;
  maxResults?: number;
  includeDescription?: boolean;
}
const ListProfilingGroupsRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ListProfilingGroupsRequest>;
export type ProfilingGroupNames = string[];
const ProfilingGroupNames = EventPublishers as any as S.Schema<ProfilingGroupNames>;
export type ProfilingGroupDescriptions = ProfilingGroupDescription[];
const ProfilingGroupDescriptions = /*@__PURE__*/ __L.at(__c7, 4);
export interface ListProfilingGroupsResponse {
  profilingGroupNames: string[];
  profilingGroups?: ProfilingGroupDescription[];
  nextToken?: string;
}
const ListProfilingGroupsResponse = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ListProfilingGroupsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PostAgentProfileRequest {
  profilingGroupName: string;
  agentProfile: T.StreamingInputBody;
  profileToken?: string;
  contentType: string;
}
const PostAgentProfileRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<PostAgentProfileRequest>;
export interface PostAgentProfileResponse {}
const PostAgentProfileResponse =
  DeleteProfilingGroupResponse as any as S.Schema<PostAgentProfileResponse>;
export type ActionGroup = string;
export type Principal = string;
export type Principals = string[];
const Principals = EventPublishers as any as S.Schema<Principals>;
export interface PutPermissionRequest {
  profilingGroupName: string;
  actionGroup: string;
  principals: string[];
  revisionId?: string;
}
const PutPermissionRequest = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<PutPermissionRequest>;
export interface PutPermissionResponse {
  policy: string;
  revisionId: string;
}
const PutPermissionResponse = GetPolicyResponse as any as S.Schema<PutPermissionResponse>;
export interface RemoveNotificationChannelRequest {
  profilingGroupName: string;
  channelId: string;
}
const RemoveNotificationChannelRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<RemoveNotificationChannelRequest>;
export interface RemoveNotificationChannelResponse {
  notificationConfiguration?: NotificationConfiguration;
}
const RemoveNotificationChannelResponse =
  AddNotificationChannelsResponse as any as S.Schema<RemoveNotificationChannelResponse>;
export interface RemovePermissionRequest {
  profilingGroupName: string;
  actionGroup: string;
  revisionId: string;
}
const RemovePermissionRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<RemovePermissionRequest>;
export interface RemovePermissionResponse {
  policy: string;
  revisionId: string;
}
const RemovePermissionResponse = GetPolicyResponse as any as S.Schema<RemovePermissionResponse>;
export type AnomalyInstanceId = string;
export interface SubmitFeedbackRequest {
  profilingGroupName: string;
  anomalyInstanceId: string;
  type: string;
  comment?: string;
}
const SubmitFeedbackRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<SubmitFeedbackRequest>;
export interface SubmitFeedbackResponse {}
const SubmitFeedbackResponse =
  DeleteProfilingGroupResponse as any as S.Schema<SubmitFeedbackResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteProfilingGroupResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = EventPublishers as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  DeleteProfilingGroupResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateProfilingGroupRequest {
  profilingGroupName: string;
  agentOrchestrationConfig: AgentOrchestrationConfig;
}
const UpdateProfilingGroupRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<UpdateProfilingGroupRequest>;
export interface UpdateProfilingGroupResponse {
  profilingGroup: ProfilingGroupDescription;
}
const UpdateProfilingGroupResponse =
  CreateProfilingGroupResponse as any as S.Schema<UpdateProfilingGroupResponse>;
export type AddNotificationChannelsError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Add up to 2 anomaly notifications channels for a profiling group.
 */
export const addNotificationChannels: API.OperationMethod<
  AddNotificationChannelsRequest,
  AddNotificationChannelsResponse,
  AddNotificationChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddNotificationChannelsRequest,
  output: AddNotificationChannelsResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddNotificationChannels",
}));

export type BatchGetFrameMetricDataError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the time series of values for a requested list
 * of frame metrics from a time period.
 */
export const batchGetFrameMetricData: API.OperationMethod<
  BatchGetFrameMetricDataRequest,
  BatchGetFrameMetricDataResponse,
  BatchGetFrameMetricDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetFrameMetricDataRequest,
  output: BatchGetFrameMetricDataResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetFrameMetricData",
}));

export type ConfigureAgentError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Used by profiler agents to report their current state and to receive remote
 * configuration updates. For example, `ConfigureAgent` can be used
 * to tell an agent whether to profile or not and for how long to return profiling data.
 */
export const configureAgent: API.OperationMethod<
  ConfigureAgentRequest,
  ConfigureAgentResponse,
  ConfigureAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConfigureAgentRequest,
  output: ConfigureAgentResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConfigureAgent",
}));

export type CreateProfilingGroupError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a profiling group.
 */
export const createProfilingGroup: API.OperationMethod<
  CreateProfilingGroupRequest,
  CreateProfilingGroupResponse,
  CreateProfilingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProfilingGroupRequest,
  output: CreateProfilingGroupResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProfilingGroup",
}));

export type DeleteProfilingGroupError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a profiling group.
 */
export const deleteProfilingGroup: API.OperationMethod<
  DeleteProfilingGroupRequest,
  DeleteProfilingGroupResponse,
  DeleteProfilingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProfilingGroupRequest,
  output: DeleteProfilingGroupResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProfilingGroup",
}));

export type DescribeProfilingGroupError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a
 * `ProfilingGroupDescription`
 *
 * object that contains information about the requested profiling group.
 */
export const describeProfilingGroup: API.OperationMethod<
  DescribeProfilingGroupRequest,
  DescribeProfilingGroupResponse,
  DescribeProfilingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeProfilingGroupRequest,
  output: DescribeProfilingGroupResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProfilingGroup",
}));

export type GetFindingsReportAccountSummaryError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of
 *
 * `FindingsReportSummary`
 *
 * objects that contain analysis results for all profiling groups in your AWS account.
 */
export const getFindingsReportAccountSummary: API.PaginatedOperationMethod<
  GetFindingsReportAccountSummaryRequest,
  GetFindingsReportAccountSummaryResponse,
  GetFindingsReportAccountSummaryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetFindingsReportAccountSummaryRequest,
  output: GetFindingsReportAccountSummaryResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingsReportAccountSummary",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetNotificationConfigurationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the current configuration for anomaly notifications for a profiling group.
 */
export const getNotificationConfiguration: API.OperationMethod<
  GetNotificationConfigurationRequest,
  GetNotificationConfigurationResponse,
  GetNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNotificationConfigurationRequest,
  output: GetNotificationConfigurationResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotificationConfiguration",
}));

export type GetPolicyError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the JSON-formatted resource-based policy on a profiling group.
 */
export const getPolicy: API.OperationMethod<
  GetPolicyRequest,
  GetPolicyResponse,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyRequest,
  output: GetPolicyResponse,
  errors: [InternalServerException, ResourceNotFoundException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicy",
}));

export type GetProfileError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the aggregated profile of a profiling group for a specified time range.
 * Amazon CodeGuru Profiler collects posted agent profiles for a profiling group
 * into aggregated profiles.
 *
 * Because aggregated profiles expire over time `GetProfile` is not idempotent.
 *
 * Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: `startTime`,
 * `endTime`, `period`. The maximum time range allowed is 7 days. If you specify all 3 parameters,
 * an exception is thrown. If you specify only `period`, the latest aggregated profile is returned.
 *
 * Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to
 * UTC. The aggregation period of an aggregated profile determines how long it is retained. For more
 * information, see
 * `AggregatedProfileTime`
 * . The aggregated profile's aggregation period determines how long
 * it is retained by CodeGuru Profiler.
 *
 * - If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days.
 *
 * - If the aggregation period is 1 hour, the aggregated profile is retained for 60 days.
 *
 * - If the aggregation period is 1 day, the aggregated profile is retained for 3 years.
 *
 * There are two use cases for calling `GetProfile`.
 *
 * - If you want to return an aggregated profile that already exists, use
 *
 * `ListProfileTimes`
 * to
 * view the time ranges of existing aggregated profiles. Use them in a `GetProfile` request to return a specific,
 * existing aggregated profile.
 *
 * - If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile,
 * then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time
 * range and return them as one aggregated profile.
 *
 * If aggregated profiles do not exist for the full time range requested, then
 * aggregated profiles for a smaller time range are returned. For example, if the
 * requested time range is from 00:00 to 00:20, and the existing aggregated profiles are
 * from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned.
 */
export const getProfile: API.OperationMethod<
  GetProfileRequest,
  GetProfileResponse,
  GetProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProfileRequest,
  output: GetProfileResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfile",
}));

export type GetRecommendationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of
 *
 * `Recommendation`
 *
 * objects that contain recommendations for a profiling group for a given time period. A list of
 *
 * `Anomaly`
 *
 * objects that contains details about anomalies detected in the profiling group for the same time period is also
 * returned.
 */
export const getRecommendations: API.OperationMethod<
  GetRecommendationsRequest,
  GetRecommendationsResponse,
  GetRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecommendationsRequest,
  output: GetRecommendationsResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommendations",
}));

export type ListFindingsReportsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the available reports for a given profiling group and time range.
 */
export const listFindingsReports: API.PaginatedOperationMethod<
  ListFindingsReportsRequest,
  ListFindingsReportsResponse,
  ListFindingsReportsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFindingsReportsRequest,
  output: ListFindingsReportsResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindingsReports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProfileTimesError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the start times of the available aggregated profiles of a profiling group
 * for an aggregation period within the specified time range.
 */
export const listProfileTimes: API.PaginatedOperationMethod<
  ListProfileTimesRequest,
  ListProfileTimesResponse,
  ListProfileTimesError,
  Credentials | HttpClient.HttpClient,
  ProfileTime
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProfileTimesRequest,
  output: ListProfileTimesResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileTimes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "profileTimes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProfilingGroupsError = InternalServerException | ThrottlingException | CommonErrors;
/**
 * Returns a list of profiling groups. The profiling groups are returned as
 *
 * `ProfilingGroupDescription`
 *
 * objects.
 */
export const listProfilingGroups: API.PaginatedOperationMethod<
  ListProfilingGroupsRequest,
  ListProfilingGroupsResponse,
  ListProfilingGroupsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProfilingGroupsRequest,
  output: ListProfilingGroupsResponse,
  errors: [InternalServerException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfilingGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the tags that are assigned to a specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PostAgentProfileError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Submits profiling data to an aggregated profile of a profiling group. To get an
 * aggregated profile that is created with this profiling data, use
 *
 * `GetProfile`
 * .
 */
export const postAgentProfile: API.OperationMethod<
  PostAgentProfileRequest,
  PostAgentProfileResponse,
  PostAgentProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PostAgentProfileRequest,
  output: PostAgentProfileResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PostAgentProfile",
}));

export type PutPermissionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds permissions to a profiling group's resource-based policy
 * that are provided using an action group. If a profiling group doesn't have
 * a resource-based policy, one is created for it using the permissions in the action group and
 * the roles and users in the `principals` parameter.
 *
 * The one supported action group that can be added is `agentPermission`
 * which grants `ConfigureAgent` and `PostAgent` permissions. For
 * more information, see Resource-based
 * policies in CodeGuru Profiler in the Amazon CodeGuru Profiler User
 * Guide,
 * `ConfigureAgent`
 * , and
 * `PostAgentProfile`
 * .
 *
 * The first time you call `PutPermission` on a profiling group, do not specify a `revisionId` because
 * it doesn't have a resource-based policy. Subsequent calls must provide a `revisionId` to specify
 * which revision of the resource-based policy to add the permissions to.
 *
 * The response contains the profiling group's JSON-formatted resource policy.
 */
export const putPermission: API.OperationMethod<
  PutPermissionRequest,
  PutPermissionResponse,
  PutPermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutPermissionRequest,
  output: PutPermissionResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutPermission",
}));

export type RemoveNotificationChannelError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Remove one anomaly notifications channel for a profiling group.
 */
export const removeNotificationChannel: API.OperationMethod<
  RemoveNotificationChannelRequest,
  RemoveNotificationChannelResponse,
  RemoveNotificationChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveNotificationChannelRequest,
  output: RemoveNotificationChannelResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveNotificationChannel",
}));

export type RemovePermissionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes permissions from a profiling group's resource-based policy that are provided
 * using an action group. The one supported action group that can be removed is
 * `agentPermission` which grants `ConfigureAgent` and
 * `PostAgent` permissions. For more information, see Resource-based policies in CodeGuru Profiler in the Amazon
 * CodeGuru Profiler User Guide,
 * `ConfigureAgent`
 * , and
 * `PostAgentProfile`
 * .
 */
export const removePermission: API.OperationMethod<
  RemovePermissionRequest,
  RemovePermissionResponse,
  RemovePermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemovePermissionRequest,
  output: RemovePermissionResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemovePermission",
}));

export type SubmitFeedbackError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is
 * useful or not.
 */
export const submitFeedback: API.OperationMethod<
  SubmitFeedbackRequest,
  SubmitFeedbackResponse,
  SubmitFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SubmitFeedbackRequest,
  output: SubmitFeedbackResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitFeedback",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Use to assign one or more tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Use to remove one or more tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateProfilingGroupError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a profiling group.
 */
export const updateProfilingGroup: API.OperationMethod<
  UpdateProfilingGroupRequest,
  UpdateProfilingGroupResponse,
  UpdateProfilingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateProfilingGroupRequest,
  output: UpdateProfilingGroupResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProfilingGroup",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), uri: S.String, eventPublishers: EventPublishers }),
      ).annotate({ identifier: "Channel" });
    case 2:
      return S.Array(Channel);
    case 3:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          channels: Channels,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/profilingGroups/{profilingGroupName}/notificationConfiguration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AddNotificationChannelsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ channels: S.optional(Channels) })).annotate({
        identifier: "NotificationConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ notificationConfiguration: S.optional(NotificationConfiguration) }),
      ).annotate({
        identifier: "AddNotificationChannelsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ frameName: S.String, type: S.String, threadStates: ThreadStates }),
      ).annotate({ identifier: "FrameMetric" });
    case 7:
      return S.Array(FrameMetric);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("startTime"),
          ),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("endTime"),
          ),
          period: S.optional(S.String).pipe(T.HttpQuery("period")),
          targetResolution: S.optional(S.String).pipe(T.HttpQuery("targetResolution")),
          frameMetrics: S.optional(FrameMetrics),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/profilingGroups/{profilingGroupName}/frames/-/metrics",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetFrameMetricDataRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ value: T.DateFromString.pipe(T.TimestampFormat("date-time")) }),
      ).annotate({ identifier: "TimestampStructure" });
    case 2:
      return S.Array(TimestampStructure);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ ListOfTimestamps.pipe(S.optional));
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({ frameMetric: FrameMetric, values: FrameMetricValues }),
      ).annotate({ identifier: "FrameMetricDatum" });
    case 6:
      return S.Array(FrameMetricDatum);
    case 7:
      return S.suspend(() =>
        S.Struct({
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          resolution: S.String,
          endTimes: ListOfTimestamps,
          unprocessedEndTimes: UnprocessedEndTimeMap,
          frameMetricData: FrameMetricData,
        }),
      ).annotate({
        identifier: "BatchGetFrameMetricDataResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          fleetInstanceId: S.optional(S.String),
          metadata: S.optional(Metadata),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/profilingGroups/{profilingGroupName}/configureAgent" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ConfigureAgentRequest" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          shouldProfile: S.Boolean,
          periodInSeconds: S.Number,
          agentParameters: S.optional(AgentParameters),
        }),
      ).annotate({ identifier: "AgentConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configuration: AgentConfiguration.pipe(T.HttpPayload()).annotate({
            identifier: "AgentConfiguration",
          }),
        }),
      ).annotate({ identifier: "ConfigureAgentResponse" });
    case 5:
      return S.suspend(() => S.Struct({ profilingEnabled: S.Boolean })).annotate({
        identifier: "AgentOrchestrationConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String,
          computePlatform: S.optional(S.String),
          clientToken: S.String.pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          agentOrchestrationConfig: S.optional(AgentOrchestrationConfig),
          tags: S.optional(TagsMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/profilingGroups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateProfilingGroupRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          start: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          period: S.optional(S.String),
        }),
      ).annotate({ identifier: "AggregatedProfileTime" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          latestAgentProfileReportedAt: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          latestAggregatedProfile: S.optional(AggregatedProfileTime),
          latestAgentOrchestratedAt: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
        }),
      ).annotate({ identifier: "ProfilingStatus" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          agentOrchestrationConfig: S.optional(AgentOrchestrationConfig),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          profilingStatus: S.optional(ProfilingStatus),
          computePlatform: S.optional(S.String),
          tags: S.optional(TagsMap),
        }),
      ).annotate({
        identifier: "ProfilingGroupDescription",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          profilingGroup: ProfilingGroupDescription.pipe(T.HttpPayload()).annotate({
            identifier: "ProfilingGroupDescription",
          }),
        }),
      ).annotate({
        identifier: "CreateProfilingGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/profilingGroups/{profilingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProfilingGroupRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteProfilingGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profilingGroups/{profilingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeProfilingGroupRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          dailyReportsOnly: S.optional(S.Boolean).pipe(T.HttpQuery("dailyReportsOnly")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/internal/findingsReports" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingsReportAccountSummaryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          profilingGroupName: S.optional(S.String),
          profileStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          profileEndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          totalNumberOfFindings: S.optional(S.Number),
        }),
      ).annotate({ identifier: "FindingsReportSummary" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(FindingsReportSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ reportSummaries: FindingsReportSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetFindingsReportAccountSummaryResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/profilingGroups/{profilingGroupName}/notificationConfiguration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetNotificationConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ notificationConfiguration: NotificationConfiguration }),
      ).annotate({
        identifier: "GetNotificationConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profilingGroups/{profilingGroupName}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPolicyRequest" });
    case 5:
      return S.suspend(() => S.Struct({ policy: S.String, revisionId: S.String })).annotate({
        identifier: "GetPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("startTime"),
          ),
          period: S.optional(S.String).pipe(T.HttpQuery("period")),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("endTime"),
          ),
          maxDepth: S.optional(S.Number).pipe(T.HttpQuery("maxDepth")),
          accept: S.optional(S.String).pipe(T.HttpHeader("Accept")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profilingGroups/{profilingGroupName}/profile" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProfileRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          profile: T.StreamingOutput.pipe(T.HttpPayload()),
          contentType: S.String.pipe(T.HttpHeader("Content-Type")),
          contentEncoding: S.optional(S.String).pipe(T.HttpHeader("Content-Encoding")),
        }),
      ).annotate({ identifier: "GetProfileResponse" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")).pipe(
            T.HttpQuery("startTime"),
          ),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")).pipe(
            T.HttpQuery("endTime"),
          ),
          locale: S.optional(S.String).pipe(T.HttpQuery("locale")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/internal/profilingGroups/{profilingGroupName}/recommendations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecommendationsRequest",
      });
    case 1:
      return S.Array(TargetFrame);
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          resolutionSteps: S.optional(S.String),
          targetFrames: S.optional(TargetFrames),
          thresholdPercent: S.optional(S.Number),
          countersToAggregate: S.optional(Strings),
        }),
      ).annotate({ identifier: "Pattern" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          targetFramesIndex: S.optional(S.Number),
          frameAddress: S.optional(S.String),
          thresholdBreachValue: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Match" });
    case 4:
      return S.Array(Match);
    case 5:
      return S.suspend(() =>
        S.Struct({
          allMatchesCount: S.Number,
          allMatchesSum: S.Number,
          pattern: Pattern,
          topMatches: Matches,
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "Recommendation" });
    case 6:
      return S.Array(Recommendation);
    case 7:
      return S.suspend(() => S.Struct({ type: S.String })).annotate({
        identifier: "UserFeedback",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          userFeedback: S.optional(UserFeedback),
        }),
      ).annotate({ identifier: "AnomalyInstance" });
    case 1:
      return S.Array(AnomalyInstance);
    case 2:
      return S.suspend(() =>
        S.Struct({ metric: Metric, reason: S.String, instances: AnomalyInstances }),
      ).annotate({ identifier: "Anomaly" });
    case 3:
      return S.Array(Anomaly);
    case 4:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String,
          profileStartTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          profileEndTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          recommendations: Recommendations,
          anomalies: Anomalies,
        }),
      ).annotate({
        identifier: "GetRecommendationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")).pipe(
            T.HttpQuery("startTime"),
          ),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")).pipe(
            T.HttpQuery("endTime"),
          ),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          dailyReportsOnly: S.optional(S.Boolean).pipe(T.HttpQuery("dailyReportsOnly")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/internal/profilingGroups/{profilingGroupName}/findingsReports",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFindingsReportsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          findingsReportSummaries: FindingsReportSummaries,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFindingsReportsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")).pipe(
            T.HttpQuery("startTime"),
          ),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")).pipe(
            T.HttpQuery("endTime"),
          ),
          period: S.String.pipe(T.HttpQuery("period")),
          orderBy: S.optional(S.String).pipe(T.HttpQuery("orderBy")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profilingGroups/{profilingGroupName}/profileTimes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListProfileTimesRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ start: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))) }),
      ).annotate({ identifier: "ProfileTime" });
    case 1:
      return S.Array(ProfileTime);
    case 2:
      return S.suspend(() =>
        S.Struct({ profileTimes: ProfileTimes, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListProfileTimesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          includeDescription: S.optional(S.Boolean).pipe(T.HttpQuery("includeDescription")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/profilingGroups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListProfilingGroupsRequest",
      });
    case 4:
      return S.Array(ProfilingGroupDescription);
    case 5:
      return S.suspend(() =>
        S.Struct({
          profilingGroupNames: ProfilingGroupNames,
          profilingGroups: S.optional(ProfilingGroupDescriptions),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProfilingGroupsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(TagsMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          agentProfile: T.StreamingInput.pipe(T.HttpPayload()),
          profileToken: S.optional(S.String).pipe(
            T.HttpQuery("profileToken"),
            T.IdempotencyToken(),
          ),
          contentType: S.String.pipe(T.HttpHeader("Content-Type")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/profilingGroups/{profilingGroupName}/agentProfile" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PostAgentProfileRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          actionGroup: S.String.pipe(T.HttpLabel("actionGroup")),
          principals: Principals,
          revisionId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/profilingGroups/{profilingGroupName}/policy/{actionGroup}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutPermissionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          channelId: S.String.pipe(T.HttpLabel("channelId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveNotificationChannelRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          actionGroup: S.String.pipe(T.HttpLabel("actionGroup")),
          revisionId: S.String.pipe(T.HttpQuery("revisionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/profilingGroups/{profilingGroupName}/policy/{actionGroup}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RemovePermissionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          anomalyInstanceId: S.String.pipe(T.HttpLabel("anomalyInstanceId")),
          type: S.String,
          comment: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SubmitFeedbackRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagsMap }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          profilingGroupName: S.String.pipe(T.HttpLabel("profilingGroupName")),
          agentOrchestrationConfig: AgentOrchestrationConfig,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/profilingGroups/{profilingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateProfilingGroupRequest",
      });
  }
}
