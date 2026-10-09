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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Application Insights",
  serviceShapeName: "EC2WindowsBarleyService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "applicationinsights" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-11-25");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://applicationinsights-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://applicationinsights-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://applicationinsights.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://applicationinsights.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AccessDeniedException", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "BadRequestException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InternalServerException", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceInUseException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFoundException", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class TagsAlreadyExistException
  extends /*@__PURE__*/ S.TaggedError<TagsAlreadyExistException>()(
    "TagsAlreadyExistException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ValidationException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type ResourceGroupName = string;
export type ComponentName = string;
export type WorkloadName = string;
export type Tier =
  | "CUSTOM"
  | "DEFAULT"
  | "DOT_NET_CORE"
  | "DOT_NET_WORKER"
  | "DOT_NET_WEB_TIER"
  | "DOT_NET_WEB"
  | "SQL_SERVER"
  | "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP"
  | "MYSQL"
  | "POSTGRESQL"
  | "JAVA_JMX"
  | "ORACLE"
  | "SAP_HANA_MULTI_NODE"
  | "SAP_HANA_SINGLE_NODE"
  | "SAP_HANA_HIGH_AVAILABILITY"
  | "SAP_ASE_SINGLE_NODE"
  | "SAP_ASE_HIGH_AVAILABILITY"
  | "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE"
  | "SHAREPOINT"
  | "ACTIVE_DIRECTORY"
  | "SAP_NETWEAVER_STANDARD"
  | "SAP_NETWEAVER_DISTRIBUTED"
  | "SAP_NETWEAVER_HIGH_AVAILABILITY"
  | (string & {});
export type ComponentConfiguration = string;
export interface WorkloadConfiguration {
  WorkloadName?: string;
  Tier?: Tier;
  Configuration?: string;
}
export interface AddWorkloadRequest {
  ResourceGroupName: string;
  ComponentName: string;
  WorkloadConfiguration: WorkloadConfiguration;
}
export type WorkloadId = string;
export interface AddWorkloadResponse {
  WorkloadId?: string;
  WorkloadConfiguration?: WorkloadConfiguration;
}
export type OpsCenterEnabled = boolean;
export type CWEMonitorEnabled = boolean;
export type OpsItemSNSTopicArn = string;
export type SNSNotificationArn = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export type AutoConfigEnabled = boolean;
export type AutoCreate = boolean;
export type GroupingType = "ACCOUNT_BASED" | (string & {});
export type AttachMissingPermission = boolean;
export interface CreateApplicationRequest {
  ResourceGroupName?: string;
  OpsCenterEnabled?: boolean;
  CWEMonitorEnabled?: boolean;
  OpsItemSNSTopicArn?: string;
  SNSNotificationArn?: string;
  Tags?: Tag[];
  AutoConfigEnabled?: boolean;
  AutoCreate?: boolean;
  GroupingType?: GroupingType;
  AttachMissingPermission?: boolean;
}
export type AccountId = string;
export type LifeCycle = string;
export type Remarks = string;
export type DiscoveryType = "RESOURCE_GROUP_BASED" | "ACCOUNT_BASED" | (string & {});
export interface ApplicationInfo {
  AccountId?: string;
  ResourceGroupName?: string;
  LifeCycle?: string;
  OpsItemSNSTopicArn?: string;
  SNSNotificationArn?: string;
  OpsCenterEnabled?: boolean;
  CWEMonitorEnabled?: boolean;
  Remarks?: string;
  AutoConfigEnabled?: boolean;
  DiscoveryType?: DiscoveryType;
  AttachMissingPermission?: boolean;
}
export interface CreateApplicationResponse {
  ApplicationInfo?: ApplicationInfo;
}
export type CustomComponentName = string;
export type ResourceARN = string;
export type ResourceList = string[];
export interface CreateComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
  ResourceList: string[];
}
export interface CreateComponentResponse {}
export type LogPatternSetName = string;
export type LogPatternName = string;
export type LogPatternRegex = string;
export type LogPatternRank = number;
export interface CreateLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
  Pattern: string;
  Rank: number;
}
export interface LogPattern {
  PatternSetName?: string;
  PatternName?: string;
  Pattern?: string;
  Rank?: number;
}
export interface CreateLogPatternResponse {
  LogPattern?: LogPattern;
  ResourceGroupName?: string;
}
export interface DeleteApplicationRequest {
  ResourceGroupName: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
}
export interface DeleteComponentResponse {}
export interface DeleteLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
}
export interface DeleteLogPatternResponse {}
export interface DescribeApplicationRequest {
  ResourceGroupName: string;
  AccountId?: string;
}
export interface DescribeApplicationResponse {
  ApplicationInfo?: ApplicationInfo;
}
export interface DescribeComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
  AccountId?: string;
}
export type ResourceType = string;
export type OsType = "WINDOWS" | "LINUX" | (string & {});
export type Monitor = boolean;
export type MetaDataKey = string;
export type MetaDataValue = string;
export type WorkloadMetaData = { [key: string]: string | undefined };
export type DetectedWorkload = { [key in Tier]?: { [key: string]: string | undefined } };
export interface ApplicationComponent {
  ComponentName?: string;
  ComponentRemarks?: string;
  ResourceType?: string;
  OsType?: OsType;
  Tier?: Tier;
  Monitor?: boolean;
  DetectedWorkload?: { [key: string]: { [key: string]: string | undefined } | undefined };
}
export interface DescribeComponentResponse {
  ApplicationComponent?: ApplicationComponent;
  ResourceList?: string[];
}
export interface DescribeComponentConfigurationRequest {
  ResourceGroupName: string;
  ComponentName: string;
  AccountId?: string;
}
export interface DescribeComponentConfigurationResponse {
  Monitor?: boolean;
  Tier?: Tier;
  ComponentConfiguration?: string;
}
export type RecommendationType = "INFRA_ONLY" | "WORKLOAD_ONLY" | "ALL" | (string & {});
export interface DescribeComponentConfigurationRecommendationRequest {
  ResourceGroupName: string;
  ComponentName: string;
  Tier: Tier;
  WorkloadName?: string;
  RecommendationType?: RecommendationType;
}
export interface DescribeComponentConfigurationRecommendationResponse {
  ComponentConfiguration?: string;
}
export interface DescribeLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
  AccountId?: string;
}
export interface DescribeLogPatternResponse {
  ResourceGroupName?: string;
  AccountId?: string;
  LogPattern?: LogPattern;
}
export type ObservationId = string;
export interface DescribeObservationRequest {
  ObservationId: string;
  AccountId?: string;
}
export type StartTime = Date;
export type EndTime = Date;
export type SourceType = string;
export type SourceARN = string;
export type LogGroup = string;
export type LineTime = Date;
export type LogText = string;
export type LogFilter = "ERROR" | "WARN" | "INFO" | (string & {});
export type MetricNamespace = string;
export type MetricName = string;
export type Unit = string;
export type Value = number;
export type CloudWatchEventId = string;
export type CloudWatchEventSource = "EC2" | "CODE_DEPLOY" | "HEALTH" | "RDS" | (string & {});
export type CloudWatchEventDetailType = string;
export type HealthEventArn = string;
export type HealthService = string;
export type HealthEventTypeCode = string;
export type HealthEventTypeCategory = string;
export type HealthEventDescription = string;
export type CodeDeployDeploymentId = string;
export type CodeDeployDeploymentGroup = string;
export type CodeDeployState = string;
export type CodeDeployApplication = string;
export type CodeDeployInstanceGroupId = string;
export type Ec2State = string;
export type RdsEventCategories = string;
export type RdsEventMessage = string;
export type S3EventName = string;
export type StatesExecutionArn = string;
export type StatesArn = string;
export type StatesStatus = string;
export type StatesInput = string;
export type EbsEvent = string;
export type EbsResult = string;
export type EbsCause = string;
export type EbsRequestId = string;
export type XRayFaultPercent = number;
export type XRayThrottlePercent = number;
export type XRayErrorPercent = number;
export type XRayRequestCount = number;
export type XRayRequestAverageLatency = number;
export type XRayNodeName = string;
export type XRayNodeType = string;
export interface Observation {
  Id?: string;
  StartTime?: Date;
  EndTime?: Date;
  SourceType?: string;
  SourceARN?: string;
  LogGroup?: string;
  LineTime?: Date;
  LogText?: string;
  LogFilter?: LogFilter;
  MetricNamespace?: string;
  MetricName?: string;
  Unit?: string;
  Value?: number;
  CloudWatchEventId?: string;
  CloudWatchEventSource?: CloudWatchEventSource;
  CloudWatchEventDetailType?: string;
  HealthEventArn?: string;
  HealthService?: string;
  HealthEventTypeCode?: string;
  HealthEventTypeCategory?: string;
  HealthEventDescription?: string;
  CodeDeployDeploymentId?: string;
  CodeDeployDeploymentGroup?: string;
  CodeDeployState?: string;
  CodeDeployApplication?: string;
  CodeDeployInstanceGroupId?: string;
  Ec2State?: string;
  RdsEventCategories?: string;
  RdsEventMessage?: string;
  S3EventName?: string;
  StatesExecutionArn?: string;
  StatesArn?: string;
  StatesStatus?: string;
  StatesInput?: string;
  EbsEvent?: string;
  EbsResult?: string;
  EbsCause?: string;
  EbsRequestId?: string;
  XRayFaultPercent?: number;
  XRayThrottlePercent?: number;
  XRayErrorPercent?: number;
  XRayRequestCount?: number;
  XRayRequestAverageLatency?: number;
  XRayNodeName?: string;
  XRayNodeType?: string;
}
export interface DescribeObservationResponse {
  Observation?: Observation;
}
export type ProblemId = string;
export interface DescribeProblemRequest {
  ProblemId: string;
  AccountId?: string;
}
export type Title = string;
export type ShortName = string;
export type Insights = string;
export type Status = "IGNORE" | "RESOLVED" | "PENDING" | "RECURRING" | "RECOVERING" | (string & {});
export type AffectedResource = string;
export type SeverityLevel = "Informative" | "Low" | "Medium" | "High" | (string & {});
export type FeedbackKey = "INSIGHTS_FEEDBACK" | (string & {});
export type FeedbackValue = "NOT_SPECIFIED" | "USEFUL" | "NOT_USEFUL" | (string & {});
export type Feedback = { [key in FeedbackKey]?: FeedbackValue };
export type RecurringCount = number;
export type LastRecurrenceTime = Date;
export type Visibility = "IGNORED" | "VISIBLE" | (string & {});
export type ResolutionMethod = "MANUAL" | "AUTOMATIC" | "UNRESOLVED" | (string & {});
export interface Problem {
  Id?: string;
  Title?: string;
  ShortName?: string;
  Insights?: string;
  Status?: Status;
  AffectedResource?: string;
  StartTime?: Date;
  EndTime?: Date;
  SeverityLevel?: SeverityLevel;
  AccountId?: string;
  ResourceGroupName?: string;
  Feedback?: { [key: string]: FeedbackValue | undefined };
  RecurringCount?: number;
  LastRecurrenceTime?: Date;
  Visibility?: Visibility;
  ResolutionMethod?: ResolutionMethod;
}
export interface DescribeProblemResponse {
  Problem?: Problem;
  SNSNotificationArn?: string;
}
export interface DescribeProblemObservationsRequest {
  ProblemId: string;
  AccountId?: string;
}
export type ObservationList = Observation[];
export interface RelatedObservations {
  ObservationList?: Observation[];
}
export interface DescribeProblemObservationsResponse {
  RelatedObservations?: RelatedObservations;
}
export interface DescribeWorkloadRequest {
  ResourceGroupName: string;
  ComponentName: string;
  WorkloadId: string;
  AccountId?: string;
}
export interface DescribeWorkloadResponse {
  WorkloadId?: string;
  WorkloadRemarks?: string;
  WorkloadConfiguration?: WorkloadConfiguration;
}
export type MaxEntities = number;
export type PaginationToken = string;
export interface ListApplicationsRequest {
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export type ApplicationInfoList = ApplicationInfo[];
export interface ListApplicationsResponse {
  ApplicationInfoList?: ApplicationInfo[];
  NextToken?: string;
}
export interface ListComponentsRequest {
  ResourceGroupName: string;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export type ApplicationComponentList = ApplicationComponent[];
export interface ListComponentsResponse {
  ApplicationComponentList?: ApplicationComponent[];
  NextToken?: string;
}
export type ConfigurationEventStatus = "INFO" | "WARN" | "ERROR" | (string & {});
export interface ListConfigurationHistoryRequest {
  ResourceGroupName?: string;
  StartTime?: Date;
  EndTime?: Date;
  EventStatus?: ConfigurationEventStatus;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export type ConfigurationEventMonitoredResourceARN = string;
export type ConfigurationEventResourceType =
  | "CLOUDWATCH_ALARM"
  | "CLOUDWATCH_LOG"
  | "CLOUDFORMATION"
  | "SSM_ASSOCIATION"
  | (string & {});
export type ConfigurationEventTime = Date;
export type ConfigurationEventDetail = string;
export type ConfigurationEventResourceName = string;
export interface ConfigurationEvent {
  ResourceGroupName?: string;
  AccountId?: string;
  MonitoredResourceARN?: string;
  EventStatus?: ConfigurationEventStatus;
  EventResourceType?: ConfigurationEventResourceType;
  EventTime?: Date;
  EventDetail?: string;
  EventResourceName?: string;
}
export type ConfigurationEventList = ConfigurationEvent[];
export interface ListConfigurationHistoryResponse {
  EventList?: ConfigurationEvent[];
  NextToken?: string;
}
export interface ListLogPatternsRequest {
  ResourceGroupName: string;
  PatternSetName?: string;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export type LogPatternList = LogPattern[];
export interface ListLogPatternsResponse {
  ResourceGroupName?: string;
  AccountId?: string;
  LogPatterns?: LogPattern[];
  NextToken?: string;
}
export interface ListLogPatternSetsRequest {
  ResourceGroupName: string;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export type LogPatternSetList = string[];
export interface ListLogPatternSetsResponse {
  ResourceGroupName?: string;
  AccountId?: string;
  LogPatternSets?: string[];
  NextToken?: string;
}
export interface ListProblemsRequest {
  AccountId?: string;
  ResourceGroupName?: string;
  StartTime?: Date;
  EndTime?: Date;
  MaxResults?: number;
  NextToken?: string;
  ComponentName?: string;
  Visibility?: Visibility;
}
export type ProblemList = Problem[];
export interface ListProblemsResponse {
  ProblemList?: Problem[];
  NextToken?: string;
  ResourceGroupName?: string;
  AccountId?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface ListWorkloadsRequest {
  ResourceGroupName: string;
  ComponentName: string;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export type MissingWorkloadConfig = boolean;
export interface Workload {
  WorkloadId?: string;
  ComponentName?: string;
  WorkloadName?: string;
  Tier?: Tier;
  WorkloadRemarks?: string;
  MissingWorkloadConfig?: boolean;
}
export type WorkloadList = Workload[];
export interface ListWorkloadsResponse {
  WorkloadList?: Workload[];
  NextToken?: string;
}
export interface RemoveWorkloadRequest {
  ResourceGroupName: string;
  ComponentName: string;
  WorkloadId: string;
}
export interface RemoveWorkloadResponse {}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export type RemoveSNSTopic = boolean;
export interface UpdateApplicationRequest {
  ResourceGroupName: string;
  OpsCenterEnabled?: boolean;
  CWEMonitorEnabled?: boolean;
  OpsItemSNSTopicArn?: string;
  SNSNotificationArn?: string;
  RemoveSNSTopic?: boolean;
  AutoConfigEnabled?: boolean;
  AttachMissingPermission?: boolean;
}
export interface UpdateApplicationResponse {
  ApplicationInfo?: ApplicationInfo;
}
export interface UpdateComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
  NewComponentName?: string;
  ResourceList?: string[];
}
export interface UpdateComponentResponse {}
export interface UpdateComponentConfigurationRequest {
  ResourceGroupName: string;
  ComponentName: string;
  Monitor?: boolean;
  Tier?: Tier;
  ComponentConfiguration?: string;
  AutoConfigEnabled?: boolean;
}
export interface UpdateComponentConfigurationResponse {}
export interface UpdateLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
  Pattern?: string;
  Rank?: number;
}
export interface UpdateLogPatternResponse {
  ResourceGroupName?: string;
  LogPattern?: LogPattern;
}
export type UpdateStatus = "RESOLVED" | (string & {});
export interface UpdateProblemRequest {
  ProblemId: string;
  UpdateStatus?: UpdateStatus;
  Visibility?: Visibility;
}
export interface UpdateProblemResponse {}
export interface UpdateWorkloadRequest {
  ResourceGroupName: string;
  ComponentName: string;
  WorkloadId?: string;
  WorkloadConfiguration: WorkloadConfiguration;
}
export interface UpdateWorkloadResponse {
  WorkloadId?: string;
  WorkloadConfiguration?: WorkloadConfiguration;
}
export type ErrorMsg = string;
export type ExceptionMessage = string;
export type AddWorkloadError =
  | InternalServerException
  | ResourceInUseException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds a workload to a component. Each component can have at most five workloads.
 */
export const addWorkload: API.OperationMethod<
  AddWorkloadRequest,
  AddWorkloadResponse,
  AddWorkloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1) as any as S.Schema<AddWorkloadRequest>,
  output: __S(2) as any as S.Schema<AddWorkloadResponse>,
  errors: [
    InternalServerException,
    ResourceInUseException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddWorkload",
}));

export type CreateApplicationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceInUseException
  | ResourceNotFoundException
  | TagsAlreadyExistException
  | ValidationException
  | CommonErrors;
/**
 * Adds an application that is created from a resource group.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<CreateApplicationRequest>,
  output: __S(7) as any as S.Schema<CreateApplicationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceInUseException,
    ResourceNotFoundException,
    TagsAlreadyExistException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateComponentError =
  | InternalServerException
  | ResourceInUseException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom component by grouping similar standalone instances to monitor.
 */
export const createComponent: API.OperationMethod<
  CreateComponentRequest,
  CreateComponentResponse,
  CreateComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<CreateComponentRequest>,
  output: __S(10) as any as S.Schema<CreateComponentResponse>,
  errors: [
    InternalServerException,
    ResourceInUseException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateComponent",
}));

export type CreateLogPatternError =
  | InternalServerException
  | ResourceInUseException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds an log pattern to a `LogPatternSet`.
 */
export const createLogPattern: API.OperationMethod<
  CreateLogPatternRequest,
  CreateLogPatternResponse,
  CreateLogPatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<CreateLogPatternRequest>,
  output: __S(13) as any as S.Schema<CreateLogPatternResponse>,
  errors: [
    InternalServerException,
    ResourceInUseException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLogPattern",
}));

export type DeleteApplicationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified application from monitoring. Does not delete the
 * application.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(10) as any as S.Schema<DeleteApplicationResponse>,
  errors: [
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteComponentError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Ungroups a custom component. When you ungroup custom components, all applicable monitors
 * that are set up for the component are removed and the instances revert to their standalone
 * status.
 */
export const deleteComponent: API.OperationMethod<
  DeleteComponentRequest,
  DeleteComponentResponse,
  DeleteComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<DeleteComponentRequest>,
  output: __S(10) as any as S.Schema<DeleteComponentResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteComponent",
}));

export type DeleteLogPatternError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified log pattern from a `LogPatternSet`.
 */
export const deleteLogPattern: API.OperationMethod<
  DeleteLogPatternRequest,
  DeleteLogPatternResponse,
  DeleteLogPatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<DeleteLogPatternRequest>,
  output: __S(10) as any as S.Schema<DeleteLogPatternResponse>,
  errors: [
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLogPattern",
}));

export type DescribeApplicationError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the application.
 */
export const describeApplication: API.OperationMethod<
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<DescribeApplicationRequest>,
  output: __S(7) as any as S.Schema<DescribeApplicationResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplication",
}));

export type DescribeComponentError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes a component and lists the resources that are grouped together in a
 * component.
 */
export const describeComponent: API.OperationMethod<
  DescribeComponentRequest,
  DescribeComponentResponse,
  DescribeComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<DescribeComponentRequest>,
  output: __S(22) as any as S.Schema<DescribeComponentResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeComponent",
}));

export type DescribeComponentConfigurationError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the monitoring configuration of the component.
 */
export const describeComponentConfiguration: API.OperationMethod<
  DescribeComponentConfigurationRequest,
  DescribeComponentConfigurationResponse,
  DescribeComponentConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23) as any as S.Schema<DescribeComponentConfigurationRequest>,
  output: __S(24) as any as S.Schema<DescribeComponentConfigurationResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeComponentConfiguration",
}));

export type DescribeComponentConfigurationRecommendationError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the recommended monitoring configuration of the component.
 */
export const describeComponentConfigurationRecommendation: API.OperationMethod<
  DescribeComponentConfigurationRecommendationRequest,
  DescribeComponentConfigurationRecommendationResponse,
  DescribeComponentConfigurationRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<DescribeComponentConfigurationRecommendationRequest>,
  output: __S(26) as any as S.Schema<DescribeComponentConfigurationRecommendationResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeComponentConfigurationRecommendation",
}));

export type DescribeLogPatternError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describe a specific log pattern from a `LogPatternSet`.
 */
export const describeLogPattern: API.OperationMethod<
  DescribeLogPatternRequest,
  DescribeLogPatternResponse,
  DescribeLogPatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<DescribeLogPatternRequest>,
  output: __S(28) as any as S.Schema<DescribeLogPatternResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLogPattern",
}));

export type DescribeObservationError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes an anomaly or error with the application.
 */
export const describeObservation: API.OperationMethod<
  DescribeObservationRequest,
  DescribeObservationResponse,
  DescribeObservationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<DescribeObservationRequest>,
  output: __S(31) as any as S.Schema<DescribeObservationResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeObservation",
}));

export type DescribeProblemError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes an application problem.
 */
export const describeProblem: API.OperationMethod<
  DescribeProblemRequest,
  DescribeProblemResponse,
  DescribeProblemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<DescribeProblemRequest>,
  output: __S(35) as any as S.Schema<DescribeProblemResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProblem",
}));

export type DescribeProblemObservationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the anomalies or errors associated with the problem.
 */
export const describeProblemObservations: API.OperationMethod<
  DescribeProblemObservationsRequest,
  DescribeProblemObservationsResponse,
  DescribeProblemObservationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<DescribeProblemObservationsRequest>,
  output: __S(39) as any as S.Schema<DescribeProblemObservationsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProblemObservations",
}));

export type DescribeWorkloadError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes a workload and its configuration.
 */
export const describeWorkload: API.OperationMethod<
  DescribeWorkloadRequest,
  DescribeWorkloadResponse,
  DescribeWorkloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<DescribeWorkloadRequest>,
  output: __S(41) as any as S.Schema<DescribeWorkloadResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkload",
}));

export type ListApplicationsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Lists the IDs of the applications that you are monitoring.
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(42) as any as S.Schema<ListApplicationsRequest>,
  output: __S(44) as any as S.Schema<ListApplicationsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListComponentsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the auto-grouped, standalone, and custom components of the application.
 */
export const listComponents: API.PaginatedOperationMethod<
  ListComponentsRequest,
  ListComponentsResponse,
  ListComponentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(45) as any as S.Schema<ListComponentsRequest>,
  output: __S(47) as any as S.Schema<ListComponentsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComponents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListConfigurationHistoryError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by
 * Application Insights. Examples of events represented are:
 *
 * - INFO: creating a new alarm or updating an alarm threshold.
 *
 * - WARN: alarm not created due to insufficient data points used to predict
 * thresholds.
 *
 * - ERROR: alarm not created due to permission errors or exceeding quotas.
 */
export const listConfigurationHistory: API.PaginatedOperationMethod<
  ListConfigurationHistoryRequest,
  ListConfigurationHistoryResponse,
  ListConfigurationHistoryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(48) as any as S.Schema<ListConfigurationHistoryRequest>,
  output: __S(51) as any as S.Schema<ListConfigurationHistoryResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationHistory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLogPatternsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the log patterns in the specific log `LogPatternSet`.
 */
export const listLogPatterns: API.PaginatedOperationMethod<
  ListLogPatternsRequest,
  ListLogPatternsResponse,
  ListLogPatternsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(52) as any as S.Schema<ListLogPatternsRequest>,
  output: __S(54) as any as S.Schema<ListLogPatternsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLogPatterns",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLogPatternSetsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the log pattern sets in the specific application.
 */
export const listLogPatternSets: API.PaginatedOperationMethod<
  ListLogPatternSetsRequest,
  ListLogPatternSetsResponse,
  ListLogPatternSetsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(55) as any as S.Schema<ListLogPatternSetsRequest>,
  output: __S(56) as any as S.Schema<ListLogPatternSetsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLogPatternSets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProblemsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the problems with your application.
 */
export const listProblems: API.PaginatedOperationMethod<
  ListProblemsRequest,
  ListProblemsResponse,
  ListProblemsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(57) as any as S.Schema<ListProblemsRequest>,
  output: __S(59) as any as S.Schema<ListProblemsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProblems",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve a list of the tags (keys and values) that are associated with a specified
 * application. A *tag* is a label that you optionally define and associate
 * with an application. Each tag consists of a required *tag key* and an
 * optional associated *tag value*. A tag key is a general label that acts
 * as a category for more specific tag values. A tag value acts as a descriptor within a tag
 * key.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(61) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWorkloadsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the workloads that are configured on a given component.
 */
export const listWorkloads: API.PaginatedOperationMethod<
  ListWorkloadsRequest,
  ListWorkloadsResponse,
  ListWorkloadsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(62) as any as S.Schema<ListWorkloadsRequest>,
  output: __S(65) as any as S.Schema<ListWorkloadsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkloads",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type RemoveWorkloadError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Remove workload from a component.
 */
export const removeWorkload: API.OperationMethod<
  RemoveWorkloadRequest,
  RemoveWorkloadResponse,
  RemoveWorkloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<RemoveWorkloadRequest>,
  output: __S(10) as any as S.Schema<RemoveWorkloadResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveWorkload",
}));

export type TagResourceError =
  | ResourceNotFoundException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Add one or more tags (keys and values) to a specified application. A
 * *tag* is a label that you optionally define and associate with an
 * application. Tags can help you categorize and manage application in different ways, such as
 * by purpose, owner, environment, or other criteria.
 *
 * Each tag consists of a required *tag key* and an associated
 * *tag value*, both of which you define. A tag key is a general label
 * that acts as a category for more specific tag values. A tag value acts as a descriptor
 * within a tag key.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<TagResourceRequest>,
  output: __S(10) as any as S.Schema<TagResourceResponse>,
  errors: [ResourceNotFoundException, TooManyTagsException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Remove one or more tags (keys and values) from a specified application.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<UntagResourceRequest>,
  output: __S(10) as any as S.Schema<UntagResourceResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateApplicationError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the application.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<UpdateApplicationRequest>,
  output: __S(7) as any as S.Schema<UpdateApplicationResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

export type UpdateComponentError =
  | InternalServerException
  | ResourceInUseException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the custom component name and/or the list of resources that make up the
 * component.
 */
export const updateComponent: API.OperationMethod<
  UpdateComponentRequest,
  UpdateComponentResponse,
  UpdateComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<UpdateComponentRequest>,
  output: __S(10) as any as S.Schema<UpdateComponentResponse>,
  errors: [
    InternalServerException,
    ResourceInUseException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateComponent",
}));

export type UpdateComponentConfigurationError =
  | InternalServerException
  | ResourceInUseException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the monitoring configurations for the component. The configuration input
 * parameter is an escaped JSON of the configuration and should match the schema of what is
 * returned by `DescribeComponentConfigurationRecommendation`.
 */
export const updateComponentConfiguration: API.OperationMethod<
  UpdateComponentConfigurationRequest,
  UpdateComponentConfigurationResponse,
  UpdateComponentConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<UpdateComponentConfigurationRequest>,
  output: __S(72) as any as S.Schema<UpdateComponentConfigurationResponse>,
  errors: [
    InternalServerException,
    ResourceInUseException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateComponentConfiguration",
}));

export type UpdateLogPatternError =
  | InternalServerException
  | ResourceInUseException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds a log pattern to a `LogPatternSet`.
 */
export const updateLogPattern: API.OperationMethod<
  UpdateLogPatternRequest,
  UpdateLogPatternResponse,
  UpdateLogPatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<UpdateLogPatternRequest>,
  output: __S(74) as any as S.Schema<UpdateLogPatternResponse>,
  errors: [
    InternalServerException,
    ResourceInUseException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLogPattern",
}));

export type UpdateProblemError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the visibility of the problem or specifies the problem as
 * `RESOLVED`.
 */
export const updateProblem: API.OperationMethod<
  UpdateProblemRequest,
  UpdateProblemResponse,
  UpdateProblemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<UpdateProblemRequest>,
  output: __S(10) as any as S.Schema<UpdateProblemResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProblem",
}));

export type UpdateWorkloadError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds a workload to a component. Each component can have at most five workloads.
 */
export const updateWorkload: API.OperationMethod<
  UpdateWorkloadRequest,
  UpdateWorkloadResponse,
  UpdateWorkloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76) as any as S.Schema<UpdateWorkloadRequest>,
  output: __S(2) as any as S.Schema<UpdateWorkloadResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkload",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WorkloadName: S.optional(S.String),
          Tier: S.optional(S.String),
          Configuration: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkloadConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          WorkloadConfiguration: __S(0),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AddWorkloadRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          WorkloadConfiguration: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "AddWorkloadResponse" });
    case 3:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 4:
      return S.Array(__S(3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.optional(S.String),
          OpsCenterEnabled: S.optional(S.Boolean),
          CWEMonitorEnabled: S.optional(S.Boolean),
          OpsItemSNSTopicArn: S.optional(S.String),
          SNSNotificationArn: S.optional(S.String),
          Tags: S.optional(__S(4)),
          AutoConfigEnabled: S.optional(S.Boolean),
          AutoCreate: S.optional(S.Boolean),
          GroupingType: S.optional(S.String),
          AttachMissingPermission: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          ResourceGroupName: S.optional(S.String),
          LifeCycle: S.optional(S.String),
          OpsItemSNSTopicArn: S.optional(S.String),
          SNSNotificationArn: S.optional(S.String),
          OpsCenterEnabled: S.optional(S.Boolean),
          CWEMonitorEnabled: S.optional(S.Boolean),
          Remarks: S.optional(S.String),
          AutoConfigEnabled: S.optional(S.Boolean),
          DiscoveryType: S.optional(S.String),
          AttachMissingPermission: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ApplicationInfo" });
    case 7:
      return S.suspend(() => S.Struct({ ApplicationInfo: S.optional(__S(6)) })).annotate({
        identifier: "CreateApplicationResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          ResourceList: __S(8),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateComponentRequest" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CreateComponentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          PatternSetName: S.String,
          PatternName: S.String,
          Pattern: S.String,
          Rank: S.Number,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLogPatternRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PatternSetName: S.optional(S.String),
          PatternName: S.optional(S.String),
          Pattern: S.optional(S.String),
          Rank: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LogPattern" });
    case 5:
      return S.suspend(() =>
        S.Struct({ LogPattern: S.optional(__S(12)), ResourceGroupName: S.optional(S.String) }),
      ).annotate({ identifier: "CreateLogPatternResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceGroupName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceGroupName: S.String, ComponentName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteComponentRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          PatternSetName: S.String,
          PatternName: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteLogPatternRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceGroupName: S.String, AccountId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeApplicationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeComponentRequest" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(19).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ComponentName: S.optional(S.String),
          ComponentRemarks: S.optional(S.String),
          ResourceType: S.optional(S.String),
          OsType: S.optional(S.String),
          Tier: S.optional(S.String),
          Monitor: S.optional(S.Boolean),
          DetectedWorkload: S.optional(__S(20)),
        }),
      ).annotate({ identifier: "ApplicationComponent" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationComponent: S.optional(__S(21)),
          ResourceList: S.optional(__S(8)),
        }),
      ).annotate({
        identifier: "DescribeComponentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeComponentConfigurationRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Monitor: S.optional(S.Boolean),
          Tier: S.optional(S.String),
          ComponentConfiguration: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeComponentConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          Tier: S.String,
          WorkloadName: S.optional(S.String),
          RecommendationType: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeComponentConfigurationRecommendationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ ComponentConfiguration: S.optional(S.String) })).annotate({
        identifier: "DescribeComponentConfigurationRecommendationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          PatternSetName: S.String,
          PatternName: S.String,
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeLogPatternRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.optional(S.String),
          AccountId: S.optional(S.String),
          LogPattern: S.optional(__S(12)),
        }),
      ).annotate({
        identifier: "DescribeLogPatternResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ObservationId: S.String, AccountId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeObservationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SourceType: S.optional(S.String),
          SourceARN: S.optional(S.String),
          LogGroup: S.optional(S.String),
          LineTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LogText: S.optional(S.String),
          LogFilter: S.optional(S.String),
          MetricNamespace: S.optional(S.String),
          MetricName: S.optional(S.String),
          Unit: S.optional(S.String),
          Value: S.optional(S.Number),
          CloudWatchEventId: S.optional(S.String),
          CloudWatchEventSource: S.optional(S.String),
          CloudWatchEventDetailType: S.optional(S.String),
          HealthEventArn: S.optional(S.String),
          HealthService: S.optional(S.String),
          HealthEventTypeCode: S.optional(S.String),
          HealthEventTypeCategory: S.optional(S.String),
          HealthEventDescription: S.optional(S.String),
          CodeDeployDeploymentId: S.optional(S.String),
          CodeDeployDeploymentGroup: S.optional(S.String),
          CodeDeployState: S.optional(S.String),
          CodeDeployApplication: S.optional(S.String),
          CodeDeployInstanceGroupId: S.optional(S.String),
          Ec2State: S.optional(S.String),
          RdsEventCategories: S.optional(S.String),
          RdsEventMessage: S.optional(S.String),
          S3EventName: S.optional(S.String),
          StatesExecutionArn: S.optional(S.String),
          StatesArn: S.optional(S.String),
          StatesStatus: S.optional(S.String),
          StatesInput: S.optional(S.String),
          EbsEvent: S.optional(S.String),
          EbsResult: S.optional(S.String),
          EbsCause: S.optional(S.String),
          EbsRequestId: S.optional(S.String),
          XRayFaultPercent: S.optional(S.Number),
          XRayThrottlePercent: S.optional(S.Number),
          XRayErrorPercent: S.optional(S.Number),
          XRayRequestCount: S.optional(S.Number),
          XRayRequestAverageLatency: S.optional(S.Number),
          XRayNodeName: S.optional(S.String),
          XRayNodeType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Observation" });
    case 7:
      return S.suspend(() => S.Struct({ Observation: S.optional(__S(30)) })).annotate({
        identifier: "DescribeObservationResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProblemId: S.String, AccountId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeProblemRequest" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Title: S.optional(S.String),
          ShortName: S.optional(S.String),
          Insights: S.optional(S.String),
          Status: S.optional(S.String),
          AffectedResource: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SeverityLevel: S.optional(S.String),
          AccountId: S.optional(S.String),
          ResourceGroupName: S.optional(S.String),
          Feedback: S.optional(__S(33)),
          RecurringCount: S.optional(S.Number),
          LastRecurrenceTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Visibility: S.optional(S.String),
          ResolutionMethod: S.optional(S.String),
        }),
      ).annotate({ identifier: "Problem" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Problem: S.optional(__S(34)), SNSNotificationArn: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeProblemResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ProblemId: S.String, AccountId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeProblemObservationsRequest",
      });
    case 5:
      return S.Array(__S(30));
    case 6:
      return S.suspend(() => S.Struct({ ObservationList: S.optional(__S(37)) })).annotate({
        identifier: "RelatedObservations",
      });
    case 7:
      return S.suspend(() => S.Struct({ RelatedObservations: S.optional(__S(38)) })).annotate({
        identifier: "DescribeProblemObservationsResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          WorkloadId: S.String,
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeWorkloadRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          WorkloadRemarks: S.optional(S.String),
          WorkloadConfiguration: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "DescribeWorkloadResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 3:
      return S.Array(__S(6));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationInfoList: S.optional(__S(43)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListApplicationsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListComponentsRequest" });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationComponentList: S.optional(__S(46)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListComponentsResponse" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventStatus: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListConfigurationHistoryRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.optional(S.String),
          AccountId: S.optional(S.String),
          MonitoredResourceARN: S.optional(S.String),
          EventStatus: S.optional(S.String),
          EventResourceType: S.optional(S.String),
          EventTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventDetail: S.optional(S.String),
          EventResourceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConfigurationEvent" });
    case 2:
      return S.Array(__S(49));
    case 3:
      return S.suspend(() =>
        S.Struct({
          EventList: S.optional(__S(50)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfigurationHistoryResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          PatternSetName: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListLogPatternsRequest" });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.optional(S.String),
          AccountId: S.optional(S.String),
          LogPatterns: S.optional(__S(53)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListLogPatternsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLogPatternSetsRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.optional(S.String),
          AccountId: S.optional(S.String),
          LogPatternSets: S.optional(__S(8)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLogPatternSetsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          ResourceGroupName: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ComponentName: S.optional(S.String),
          Visibility: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListProblemsRequest" });
    case 2:
      return S.Array(__S(34));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProblemList: S.optional(__S(58)),
          NextToken: S.optional(S.String),
          ResourceGroupName: S.optional(S.String),
          AccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListProblemsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(4)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWorkloadsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          ComponentName: S.optional(S.String),
          WorkloadName: S.optional(S.String),
          Tier: S.optional(S.String),
          WorkloadRemarks: S.optional(S.String),
          MissingWorkloadConfig: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Workload" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63));
    case 1:
      return S.suspend(() =>
        S.Struct({ WorkloadList: S.optional(__S(64)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWorkloadsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          WorkloadId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RemoveWorkloadRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(4) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(8) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          OpsCenterEnabled: S.optional(S.Boolean),
          CWEMonitorEnabled: S.optional(S.Boolean),
          OpsItemSNSTopicArn: S.optional(S.String),
          SNSNotificationArn: S.optional(S.String),
          RemoveSNSTopic: S.optional(S.Boolean),
          AutoConfigEnabled: S.optional(S.Boolean),
          AttachMissingPermission: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateApplicationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          NewComponentName: S.optional(S.String),
          ResourceList: S.optional(__S(8)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateComponentRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          Monitor: S.optional(S.Boolean),
          Tier: S.optional(S.String),
          ComponentConfiguration: S.optional(S.String),
          AutoConfigEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateComponentConfigurationRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "UpdateComponentConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          PatternSetName: S.String,
          PatternName: S.String,
          Pattern: S.optional(S.String),
          Rank: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateLogPatternRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceGroupName: S.optional(S.String), LogPattern: S.optional(__S(12)) }),
      ).annotate({ identifier: "UpdateLogPatternResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProblemId: S.String,
          UpdateStatus: S.optional(S.String),
          Visibility: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateProblemRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceGroupName: S.String,
          ComponentName: S.String,
          WorkloadId: S.optional(S.String),
          WorkloadConfiguration: __S(0),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateWorkloadRequest" });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
  }
}
