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
  sdkId: "SSM Incidents",
  serviceShapeName: "SSMIncidents",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ssm-incidents" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
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
              `https://ssm-incidents-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://ssm-incidents-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://ssm-incidents.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://ssm-incidents.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceIdentifier: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
      retryAfter: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
      ),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceIdentifier: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceIdentifier: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
      serviceCode: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnsupportedOperationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOperationException>()(
    "UnsupportedOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Arn = string;
export type FindingId = string;
export type FindingIdList = string[];
const FindingIdList = /*@__PURE__*/ __L.at(__c0, 0);
export interface BatchGetIncidentFindingsInput {
  incidentRecordArn: string;
  findingIds: string[];
}
const BatchGetIncidentFindingsInput = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<BatchGetIncidentFindingsInput>;
export interface CodeDeployDeployment {
  startTime: Date;
  endTime?: Date;
  deploymentGroupArn: string;
  deploymentId: string;
}
const CodeDeployDeployment = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<CodeDeployDeployment>;
export interface CloudFormationStackUpdate {
  startTime: Date;
  endTime?: Date;
  stackArn: string;
}
const CloudFormationStackUpdate = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CloudFormationStackUpdate>;
export type FindingDetails =
  | { codeDeployDeployment: CodeDeployDeployment; cloudFormationStackUpdate?: never }
  | { codeDeployDeployment?: never; cloudFormationStackUpdate: CloudFormationStackUpdate };
const FindingDetails = /*@__PURE__*/ __L.at(__c0, 4);
export interface Finding {
  id: string;
  creationTime: Date;
  lastModifiedTime: Date;
  details?: FindingDetails;
}
const Finding = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<Finding>;
export type FindingList = Finding[];
const FindingList = /*@__PURE__*/ __L.at(__c0, 6);
export interface BatchGetIncidentFindingsError_ {
  findingId: string;
  code: string;
  message: string;
}
const BatchGetIncidentFindingsError_ = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<BatchGetIncidentFindingsError_>;
export type BatchGetIncidentFindingsErrorList = BatchGetIncidentFindingsError_[];
const BatchGetIncidentFindingsErrorList = /*@__PURE__*/ __L.at(__c1, 0);
export interface BatchGetIncidentFindingsOutput {
  findings: Finding[];
  errors: BatchGetIncidentFindingsError_[];
}
const BatchGetIncidentFindingsOutput = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchGetIncidentFindingsOutput>;
export type RegionName = string;
export type SseKmsKey = string;
export interface RegionMapInputValue {
  sseKmsKeyId?: string;
}
const RegionMapInputValue = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<RegionMapInputValue>;
export type RegionMapInput = { [key: string]: RegionMapInputValue | undefined };
const RegionMapInput = /*@__PURE__*/ __L.at(__c1, 3);
export type ClientToken = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c1, 4);
export interface CreateReplicationSetInput {
  regions: { [key: string]: RegionMapInputValue | undefined };
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateReplicationSetInput = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateReplicationSetInput>;
export interface CreateReplicationSetOutput {
  arn: string;
}
const CreateReplicationSetOutput = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateReplicationSetOutput>;
export type ResponsePlanName = string;
export type ResponsePlanDisplayName = string;
export type IncidentTitle = string;
export type Impact = number;
export type IncidentSummary = string;
export type DedupeString = string;
export type NotificationTargetItem = { snsTopicArn: string };
const NotificationTargetItem = /*@__PURE__*/ __L.at(__c1, 7);
export type NotificationTargetSet = NotificationTargetItem[];
const NotificationTargetSet = /*@__PURE__*/ __L.at(__c2, 0);
export interface IncidentTemplate {
  title: string;
  impact: number;
  summary?: string;
  dedupeString?: string;
  notificationTargets?: NotificationTargetItem[];
  incidentTags?: { [key: string]: string | undefined };
}
const IncidentTemplate = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<IncidentTemplate>;
export interface EmptyChatChannel {}
const EmptyChatChannel = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<EmptyChatChannel>;
export type SnsArn = string;
export type ChatbotSnsConfigurationSet = string[];
const ChatbotSnsConfigurationSet = FindingIdList as any as S.Schema<ChatbotSnsConfigurationSet>;
export type ChatChannel =
  | { empty: EmptyChatChannel; chatbotSns?: never }
  | { empty?: never; chatbotSns: string[] };
const ChatChannel = /*@__PURE__*/ __L.at(__c2, 3);
export type SsmContactsArn = string;
export type EngagementSet = string[];
const EngagementSet = FindingIdList as any as S.Schema<EngagementSet>;
export type RoleArn = string;
export type SsmTargetAccount = string;
export type SsmParameterValues = string[];
const SsmParameterValues = FindingIdList as any as S.Schema<SsmParameterValues>;
export type SsmParameters = { [key: string]: string[] | undefined };
const SsmParameters = /*@__PURE__*/ __L.at(__c2, 4);
export type VariableType = string;
export type DynamicSsmParameterValue = { variable: string };
const DynamicSsmParameterValue = /*@__PURE__*/ __L.at(__c2, 5);
export type DynamicSsmParameters = { [key: string]: DynamicSsmParameterValue | undefined };
const DynamicSsmParameters = /*@__PURE__*/ __L.at(__c2, 6);
export interface SsmAutomation {
  roleArn: string;
  documentName: string;
  documentVersion?: string;
  targetAccount?: string;
  parameters?: { [key: string]: string[] | undefined };
  dynamicParameters?: { [key: string]: DynamicSsmParameterValue | undefined };
}
const SsmAutomation = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<SsmAutomation>;
export type Action = { ssmAutomation: SsmAutomation };
const Action = /*@__PURE__*/ __L.at(__c3, 0);
export type ActionsList = Action[];
const ActionsList = /*@__PURE__*/ __L.at(__c3, 1);
export interface PagerDutyIncidentConfiguration {
  serviceId: string;
}
const PagerDutyIncidentConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<PagerDutyIncidentConfiguration>;
export interface PagerDutyConfiguration {
  name: string;
  secretId: string;
  pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;
}
const PagerDutyConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<PagerDutyConfiguration>;
export type Integration = { pagerDutyConfiguration: PagerDutyConfiguration };
const Integration = /*@__PURE__*/ __L.at(__c3, 4);
export type Integrations = Integration[];
const Integrations = /*@__PURE__*/ __L.at(__c3, 5);
export interface CreateResponsePlanInput {
  clientToken?: string;
  name: string;
  displayName?: string;
  incidentTemplate: IncidentTemplate;
  chatChannel?: ChatChannel;
  engagements?: string[];
  actions?: Action[];
  tags?: { [key: string]: string | undefined };
  integrations?: Integration[];
}
const CreateResponsePlanInput = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateResponsePlanInput>;
export interface CreateResponsePlanOutput {
  arn: string;
}
const CreateResponsePlanOutput = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateResponsePlanOutput>;
export type TimelineEventType = string;
export type EventData = string;
export type GeneratedId = string;
export type EventReference =
  | { resource: string; relatedItemId?: never }
  | { resource?: never; relatedItemId: string };
const EventReference = /*@__PURE__*/ __L.at(__c4, 0);
export type EventReferenceList = EventReference[];
const EventReferenceList = /*@__PURE__*/ __L.at(__c4, 1);
export interface CreateTimelineEventInput {
  clientToken?: string;
  incidentRecordArn: string;
  eventTime: Date;
  eventType: string;
  eventData: string;
  eventReferences?: EventReference[];
}
const CreateTimelineEventInput = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateTimelineEventInput>;
export type UUID = string;
export interface CreateTimelineEventOutput {
  incidentRecordArn: string;
  eventId: string;
}
const CreateTimelineEventOutput = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<CreateTimelineEventOutput>;
export interface DeleteIncidentRecordInput {
  arn: string;
}
const DeleteIncidentRecordInput = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<DeleteIncidentRecordInput>;
export interface DeleteIncidentRecordOutput {}
const DeleteIncidentRecordOutput = EmptyChatChannel as any as S.Schema<DeleteIncidentRecordOutput>;
export interface DeleteReplicationSetInput {
  arn: string;
}
const DeleteReplicationSetInput = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteReplicationSetInput>;
export interface DeleteReplicationSetOutput {}
const DeleteReplicationSetOutput = EmptyChatChannel as any as S.Schema<DeleteReplicationSetOutput>;
export type PolicyId = string;
export interface DeleteResourcePolicyInput {
  resourceArn: string;
  policyId: string;
}
const DeleteResourcePolicyInput = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeleteResourcePolicyInput>;
export interface DeleteResourcePolicyOutput {}
const DeleteResourcePolicyOutput = EmptyChatChannel as any as S.Schema<DeleteResourcePolicyOutput>;
export interface DeleteResponsePlanInput {
  arn: string;
}
const DeleteResponsePlanInput = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeleteResponsePlanInput>;
export interface DeleteResponsePlanOutput {}
const DeleteResponsePlanOutput = EmptyChatChannel as any as S.Schema<DeleteResponsePlanOutput>;
export interface DeleteTimelineEventInput {
  incidentRecordArn: string;
  eventId: string;
}
const DeleteTimelineEventInput = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DeleteTimelineEventInput>;
export interface DeleteTimelineEventOutput {}
const DeleteTimelineEventOutput = EmptyChatChannel as any as S.Schema<DeleteTimelineEventOutput>;
export interface GetIncidentRecordInput {
  arn: string;
}
const GetIncidentRecordInput = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<GetIncidentRecordInput>;
export type IncidentRecordStatus = string;
export type AutomationExecution = { ssmExecutionArn: string };
const AutomationExecution = /*@__PURE__*/ __L.at(__c5, 2);
export type AutomationExecutionSet = AutomationExecution[];
const AutomationExecutionSet = /*@__PURE__*/ __L.at(__c5, 3);
export type ServicePrincipal = string;
export type IncidentSource = string;
export interface IncidentRecordSource {
  createdBy: string;
  invokedBy?: string;
  resourceArn?: string;
  source: string;
}
const IncidentRecordSource = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<IncidentRecordSource>;
export interface IncidentRecord {
  arn: string;
  title: string;
  summary?: string;
  status: string;
  impact: number;
  creationTime: Date;
  resolvedTime?: Date;
  lastModifiedTime: Date;
  lastModifiedBy: string;
  automationExecutions?: AutomationExecution[];
  incidentRecordSource: IncidentRecordSource;
  dedupeString: string;
  chatChannel?: ChatChannel;
  notificationTargets?: NotificationTargetItem[];
}
const IncidentRecord = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<IncidentRecord>;
export interface GetIncidentRecordOutput {
  incidentRecord: IncidentRecord;
}
const GetIncidentRecordOutput = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<GetIncidentRecordOutput>;
export interface GetReplicationSetInput {
  arn: string;
}
const GetReplicationSetInput = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<GetReplicationSetInput>;
export type RegionStatus = string;
export interface RegionInfo {
  sseKmsKeyId?: string;
  status: string;
  statusMessage?: string;
  statusUpdateDateTime: Date;
}
const RegionInfo = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<RegionInfo>;
export type RegionInfoMap = { [key: string]: RegionInfo | undefined };
const RegionInfoMap = /*@__PURE__*/ __L.at(__c6, 1);
export type ReplicationSetStatus = string;
export interface ReplicationSet {
  arn?: string;
  regionMap: { [key: string]: RegionInfo | undefined };
  status: string;
  deletionProtected: boolean;
  createdTime: Date;
  createdBy: string;
  lastModifiedTime: Date;
  lastModifiedBy: string;
}
const ReplicationSet = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<ReplicationSet>;
export interface GetReplicationSetOutput {
  replicationSet: ReplicationSet;
}
const GetReplicationSetOutput = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<GetReplicationSetOutput>;
export type MaxResults = number;
export type NextToken = string;
export interface GetResourcePoliciesInput {
  resourceArn: string;
  maxResults?: number;
  nextToken?: string;
}
const GetResourcePoliciesInput = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<GetResourcePoliciesInput>;
export type Policy = string;
export interface ResourcePolicy {
  policyDocument: string;
  policyId: string;
  ramResourceShareRegion: string;
}
const ResourcePolicy = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<ResourcePolicy>;
export type ResourcePolicyList = ResourcePolicy[];
const ResourcePolicyList = /*@__PURE__*/ __L.at(__c6, 6);
export interface GetResourcePoliciesOutput {
  resourcePolicies: ResourcePolicy[];
  nextToken?: string;
}
const GetResourcePoliciesOutput = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<GetResourcePoliciesOutput>;
export interface GetResponsePlanInput {
  arn: string;
}
const GetResponsePlanInput = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<GetResponsePlanInput>;
export interface GetResponsePlanOutput {
  arn: string;
  name: string;
  displayName?: string;
  incidentTemplate: IncidentTemplate;
  chatChannel?: ChatChannel;
  engagements?: string[];
  actions?: Action[];
  integrations?: Integration[];
}
const GetResponsePlanOutput = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<GetResponsePlanOutput>;
export interface GetTimelineEventInput {
  incidentRecordArn: string;
  eventId: string;
}
const GetTimelineEventInput = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<GetTimelineEventInput>;
export interface TimelineEvent {
  incidentRecordArn: string;
  eventId: string;
  eventTime: Date;
  eventUpdatedTime: Date;
  eventType: string;
  eventData: string;
  eventReferences?: EventReference[];
}
const TimelineEvent = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<TimelineEvent>;
export interface GetTimelineEventOutput {
  event: TimelineEvent;
}
const GetTimelineEventOutput = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<GetTimelineEventOutput>;
export interface ListIncidentFindingsInput {
  incidentRecordArn: string;
  maxResults?: number;
  nextToken?: string;
}
const ListIncidentFindingsInput = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ListIncidentFindingsInput>;
export interface FindingSummary {
  id: string;
  lastModifiedTime: Date;
}
const FindingSummary = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<FindingSummary>;
export type FindingSummaryList = FindingSummary[];
const FindingSummaryList = /*@__PURE__*/ __L.at(__c7, 7);
export interface ListIncidentFindingsOutput {
  findings: FindingSummary[];
  nextToken?: string;
}
const ListIncidentFindingsOutput = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<ListIncidentFindingsOutput>;
export type StringList = string[];
const StringList = FindingIdList as any as S.Schema<StringList>;
export type IntegerList = number[];
const IntegerList = /*@__PURE__*/ __L.at(__c8, 1);
export type AttributeValueList =
  | { stringValues: string[]; integerValues?: never }
  | { stringValues?: never; integerValues: number[] };
const AttributeValueList = /*@__PURE__*/ __L.at(__c8, 2);
export type Condition =
  | { before: Date; after?: never; equals?: never }
  | { before?: never; after: Date; equals?: never }
  | { before?: never; after?: never; equals: AttributeValueList };
const Condition = /*@__PURE__*/ __L.at(__c8, 3);
export interface Filter {
  key: string;
  condition: Condition;
}
const Filter = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<Filter>;
export type FilterList = Filter[];
const FilterList = /*@__PURE__*/ __L.at(__c8, 5);
export interface ListIncidentRecordsInput {
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
const ListIncidentRecordsInput = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ListIncidentRecordsInput>;
export interface IncidentRecordSummary {
  arn: string;
  title: string;
  status: string;
  impact: number;
  creationTime: Date;
  resolvedTime?: Date;
  incidentRecordSource: IncidentRecordSource;
}
const IncidentRecordSummary = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<IncidentRecordSummary>;
export type IncidentRecordSummaryList = IncidentRecordSummary[];
const IncidentRecordSummaryList = /*@__PURE__*/ __L.at(__c9, 0);
export interface ListIncidentRecordsOutput {
  incidentRecordSummaries: IncidentRecordSummary[];
  nextToken?: string;
}
const ListIncidentRecordsOutput = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<ListIncidentRecordsOutput>;
export interface ListRelatedItemsInput {
  incidentRecordArn: string;
  maxResults?: number;
  nextToken?: string;
}
const ListRelatedItemsInput = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<ListRelatedItemsInput>;
export type Url = string;
export type MetricDefinition = string;
export interface PagerDutyIncidentDetail {
  id: string;
  autoResolve?: boolean;
  secretId?: string;
}
const PagerDutyIncidentDetail = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<PagerDutyIncidentDetail>;
export type ItemValue =
  | { arn: string; url?: never; metricDefinition?: never; pagerDutyIncidentDetail?: never }
  | { arn?: never; url: string; metricDefinition?: never; pagerDutyIncidentDetail?: never }
  | { arn?: never; url?: never; metricDefinition: string; pagerDutyIncidentDetail?: never }
  | {
      arn?: never;
      url?: never;
      metricDefinition?: never;
      pagerDutyIncidentDetail: PagerDutyIncidentDetail;
    };
const ItemValue = /*@__PURE__*/ __L.at(__c9, 4);
export type ItemType = string;
export interface ItemIdentifier {
  value: ItemValue;
  type: string;
}
const ItemIdentifier = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<ItemIdentifier>;
export interface RelatedItem {
  identifier: ItemIdentifier;
  title?: string;
  generatedId?: string;
}
const RelatedItem = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<RelatedItem>;
export type RelatedItemList = RelatedItem[];
const RelatedItemList = /*@__PURE__*/ __L.at(__c9, 7);
export interface ListRelatedItemsOutput {
  relatedItems: RelatedItem[];
  nextToken?: string;
}
const ListRelatedItemsOutput = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<ListRelatedItemsOutput>;
export interface ListReplicationSetsInput {
  maxResults?: number;
  nextToken?: string;
}
const ListReplicationSetsInput = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<ListReplicationSetsInput>;
export type ReplicationSetArnList = string[];
const ReplicationSetArnList = FindingIdList as any as S.Schema<ReplicationSetArnList>;
export interface ListReplicationSetsOutput {
  replicationSetArns: string[];
  nextToken?: string;
}
const ListReplicationSetsOutput = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<ListReplicationSetsOutput>;
export interface ListResponsePlansInput {
  maxResults?: number;
  nextToken?: string;
}
const ListResponsePlansInput = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<ListResponsePlansInput>;
export interface ResponsePlanSummary {
  arn: string;
  name: string;
  displayName?: string;
}
const ResponsePlanSummary = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<ResponsePlanSummary>;
export type ResponsePlanSummaryList = ResponsePlanSummary[];
const ResponsePlanSummaryList = /*@__PURE__*/ __L.at(__c10, 5);
export interface ListResponsePlansOutput {
  responsePlanSummaries: ResponsePlanSummary[];
  nextToken?: string;
}
const ListResponsePlansOutput = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<ListResponsePlansOutput>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export type TimelineEventSort = string;
export type SortOrder = string;
export interface ListTimelineEventsInput {
  incidentRecordArn: string;
  filters?: Filter[];
  sortBy?: string;
  sortOrder?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListTimelineEventsInput = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<ListTimelineEventsInput>;
export interface EventSummary {
  incidentRecordArn: string;
  eventId: string;
  eventTime: Date;
  eventUpdatedTime: Date;
  eventType: string;
  eventReferences?: EventReference[];
}
const EventSummary = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<EventSummary>;
export type EventSummaryList = EventSummary[];
const EventSummaryList = /*@__PURE__*/ __L.at(__c11, 3);
export interface ListTimelineEventsOutput {
  eventSummaries: EventSummary[];
  nextToken?: string;
}
const ListTimelineEventsOutput = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<ListTimelineEventsOutput>;
export interface PutResourcePolicyInput {
  resourceArn: string;
  policy: string;
}
const PutResourcePolicyInput = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<PutResourcePolicyInput>;
export interface PutResourcePolicyOutput {
  policyId: string;
}
const PutResourcePolicyOutput = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<PutResourcePolicyOutput>;
export type RawData = string;
export interface TriggerDetails {
  source: string;
  triggerArn?: string;
  timestamp: Date;
  rawData?: string;
}
const TriggerDetails = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<TriggerDetails>;
export interface StartIncidentInput {
  clientToken?: string;
  responsePlanArn: string;
  title?: string;
  impact?: number;
  triggerDetails?: TriggerDetails;
  relatedItems?: RelatedItem[];
}
const StartIncidentInput = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<StartIncidentInput>;
export interface StartIncidentOutput {
  incidentRecordArn: string;
}
const StartIncidentOutput = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<StartIncidentOutput>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = EmptyChatChannel as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = FindingIdList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = EmptyChatChannel as any as S.Schema<UntagResourceResponse>;
export interface UpdateDeletionProtectionInput {
  arn: string;
  deletionProtected: boolean;
  clientToken?: string;
}
const UpdateDeletionProtectionInput = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<UpdateDeletionProtectionInput>;
export interface UpdateDeletionProtectionOutput {}
const UpdateDeletionProtectionOutput =
  EmptyChatChannel as any as S.Schema<UpdateDeletionProtectionOutput>;
export interface UpdateIncidentRecordInput {
  clientToken?: string;
  arn: string;
  title?: string;
  summary?: string;
  impact?: number;
  status?: string;
  chatChannel?: ChatChannel;
  notificationTargets?: NotificationTargetItem[];
}
const UpdateIncidentRecordInput = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<UpdateIncidentRecordInput>;
export interface UpdateIncidentRecordOutput {}
const UpdateIncidentRecordOutput = EmptyChatChannel as any as S.Schema<UpdateIncidentRecordOutput>;
export type RelatedItemsUpdate =
  | { itemToAdd: RelatedItem; itemToRemove?: never }
  | { itemToAdd?: never; itemToRemove: ItemIdentifier };
const RelatedItemsUpdate = /*@__PURE__*/ __L.at(__c12, 6);
export interface UpdateRelatedItemsInput {
  clientToken?: string;
  incidentRecordArn: string;
  relatedItemsUpdate: RelatedItemsUpdate;
}
const UpdateRelatedItemsInput = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<UpdateRelatedItemsInput>;
export interface UpdateRelatedItemsOutput {}
const UpdateRelatedItemsOutput = EmptyChatChannel as any as S.Schema<UpdateRelatedItemsOutput>;
export interface AddRegionAction {
  regionName: string;
  sseKmsKeyId?: string;
}
const AddRegionAction = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<AddRegionAction>;
export interface DeleteRegionAction {
  regionName: string;
}
const DeleteRegionAction = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<DeleteRegionAction>;
export type UpdateReplicationSetAction =
  | { addRegionAction: AddRegionAction; deleteRegionAction?: never }
  | { addRegionAction?: never; deleteRegionAction: DeleteRegionAction };
const UpdateReplicationSetAction = /*@__PURE__*/ __L.at(__c13, 2);
export type UpdateActionList = UpdateReplicationSetAction[];
const UpdateActionList = /*@__PURE__*/ __L.at(__c13, 3);
export interface UpdateReplicationSetInput {
  arn: string;
  actions: UpdateReplicationSetAction[];
  clientToken?: string;
}
const UpdateReplicationSetInput = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<UpdateReplicationSetInput>;
export interface UpdateReplicationSetOutput {}
const UpdateReplicationSetOutput = EmptyChatChannel as any as S.Schema<UpdateReplicationSetOutput>;
export type TagMapUpdate = { [key: string]: string | undefined };
const TagMapUpdate = /*@__PURE__*/ __L.at(__c13, 5);
export interface UpdateResponsePlanInput {
  clientToken?: string;
  arn: string;
  displayName?: string;
  incidentTemplateTitle?: string;
  incidentTemplateImpact?: number;
  incidentTemplateSummary?: string;
  incidentTemplateDedupeString?: string;
  incidentTemplateNotificationTargets?: NotificationTargetItem[];
  chatChannel?: ChatChannel;
  engagements?: string[];
  actions?: Action[];
  incidentTemplateTags?: { [key: string]: string | undefined };
  integrations?: Integration[];
}
const UpdateResponsePlanInput = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<UpdateResponsePlanInput>;
export interface UpdateResponsePlanOutput {}
const UpdateResponsePlanOutput = EmptyChatChannel as any as S.Schema<UpdateResponsePlanOutput>;
export interface UpdateTimelineEventInput {
  clientToken?: string;
  incidentRecordArn: string;
  eventId: string;
  eventTime?: Date;
  eventType?: string;
  eventData?: string;
  eventReferences?: EventReference[];
}
const UpdateTimelineEventInput = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<UpdateTimelineEventInput>;
export interface UpdateTimelineEventOutput {}
const UpdateTimelineEventOutput = EmptyChatChannel as any as S.Schema<UpdateTimelineEventOutput>;
export type ExceptionMessage = string;
export type ResourceType = string;
export type ServiceCode = string;
export type BatchGetIncidentFindingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about all specified findings for an incident, including descriptive details about each finding. A finding
 * represents a recent application environment change made by an CodeDeploy
 * deployment or an CloudFormation stack creation or update that can be investigated as a
 * potential cause of the incident.
 */
export const batchGetIncidentFindings: API.OperationMethod<
  BatchGetIncidentFindingsInput,
  BatchGetIncidentFindingsOutput,
  BatchGetIncidentFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetIncidentFindingsInput,
  output: BatchGetIncidentFindingsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetIncidentFindings",
}));

export type CreateReplicationSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * A replication set replicates and encrypts your data to the provided Regions with the
 * provided KMS key.
 */
export const createReplicationSet: API.OperationMethod<
  CreateReplicationSetInput,
  CreateReplicationSetOutput,
  CreateReplicationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateReplicationSetInput,
  output: CreateReplicationSetOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReplicationSet",
}));

export type CreateResponsePlanError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a response plan that automates the initial response to incidents. A response plan
 * engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning
 * of an incident.
 */
export const createResponsePlan: API.OperationMethod<
  CreateResponsePlanInput,
  CreateResponsePlanOutput,
  CreateResponsePlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateResponsePlanInput,
  output: CreateResponsePlanOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateResponsePlan",
}));

export type CreateTimelineEventError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom timeline event on the incident details page of an incident record.
 * Incident Manager automatically creates timeline events that mark key moments during an incident.
 * You can create custom timeline events to mark important events that Incident Manager can detect
 * automatically.
 */
export const createTimelineEvent: API.OperationMethod<
  CreateTimelineEventInput,
  CreateTimelineEventOutput,
  CreateTimelineEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTimelineEventInput,
  output: CreateTimelineEventOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTimelineEvent",
}));

export type DeleteIncidentRecordError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete an incident record from Incident Manager.
 */
export const deleteIncidentRecord: API.OperationMethod<
  DeleteIncidentRecordInput,
  DeleteIncidentRecordOutput,
  DeleteIncidentRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIncidentRecordInput,
  output: DeleteIncidentRecordOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIncidentRecord",
}));

export type DeleteReplicationSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes all Regions in your replication set. Deleting the replication set deletes all
 * Incident Manager data.
 */
export const deleteReplicationSet: API.OperationMethod<
  DeleteReplicationSetInput,
  DeleteReplicationSetOutput,
  DeleteReplicationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteReplicationSetInput,
  output: DeleteReplicationSetOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReplicationSet",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the resource policy that Resource Access Manager uses to share your Incident Manager
 * resource.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyInput,
  DeleteResourcePolicyOutput,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourcePolicyInput,
  output: DeleteResourcePolicyOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteResponsePlanError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response
 * plan.
 */
export const deleteResponsePlan: API.OperationMethod<
  DeleteResponsePlanInput,
  DeleteResponsePlanOutput,
  DeleteResponsePlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResponsePlanInput,
  output: DeleteResponsePlanOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResponsePlan",
}));

export type DeleteTimelineEventError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a timeline event from an incident.
 */
export const deleteTimelineEvent: API.OperationMethod<
  DeleteTimelineEventInput,
  DeleteTimelineEventOutput,
  DeleteTimelineEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTimelineEventInput,
  output: DeleteTimelineEventOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTimelineEvent",
}));

export type GetIncidentRecordError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the details for the specified incident record.
 */
export const getIncidentRecord: API.OperationMethod<
  GetIncidentRecordInput,
  GetIncidentRecordOutput,
  GetIncidentRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIncidentRecordInput,
  output: GetIncidentRecordOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIncidentRecord",
}));

export type GetReplicationSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve your Incident Manager replication set.
 */
export const getReplicationSet: API.OperationMethod<
  GetReplicationSetInput,
  GetReplicationSetOutput,
  GetReplicationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetReplicationSetInput,
  output: GetReplicationSetOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReplicationSet",
}));

export type GetResourcePoliciesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the resource policies attached to the specified response plan.
 */
export const getResourcePolicies: API.PaginatedOperationMethod<
  GetResourcePoliciesInput,
  GetResourcePoliciesOutput,
  GetResourcePoliciesError,
  Credentials | HttpClient.HttpClient,
  ResourcePolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetResourcePoliciesInput,
  output: GetResourcePoliciesOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resourcePolicies",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetResponsePlanError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of the specified response plan.
 */
export const getResponsePlan: API.OperationMethod<
  GetResponsePlanInput,
  GetResponsePlanOutput,
  GetResponsePlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResponsePlanInput,
  output: GetResponsePlanOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResponsePlan",
}));

export type GetTimelineEventError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a timeline event based on its ID and incident record.
 */
export const getTimelineEvent: API.OperationMethod<
  GetTimelineEventInput,
  GetTimelineEventOutput,
  GetTimelineEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTimelineEventInput,
  output: GetTimelineEventOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTimelineEvent",
}));

export type ListIncidentFindingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of the IDs of findings, plus their last modified times, that have been
 * identified for a specified incident. A finding represents a recent application environment
 * change made by an CloudFormation stack creation or update or an CodeDeploy
 * deployment that can be investigated as a potential cause of the incident.
 */
export const listIncidentFindings: API.PaginatedOperationMethod<
  ListIncidentFindingsInput,
  ListIncidentFindingsOutput,
  ListIncidentFindingsError,
  Credentials | HttpClient.HttpClient,
  FindingSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIncidentFindingsInput,
  output: ListIncidentFindingsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIncidentFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIncidentRecordsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all incident records in your account. Use this command to retrieve the Amazon
 * Resource Name (ARN) of the incident record you want to update.
 */
export const listIncidentRecords: API.PaginatedOperationMethod<
  ListIncidentRecordsInput,
  ListIncidentRecordsOutput,
  ListIncidentRecordsError,
  Credentials | HttpClient.HttpClient,
  IncidentRecordSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIncidentRecordsInput,
  output: ListIncidentRecordsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIncidentRecords",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "incidentRecordSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRelatedItemsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all related items for an incident record.
 */
export const listRelatedItems: API.PaginatedOperationMethod<
  ListRelatedItemsInput,
  ListRelatedItemsOutput,
  ListRelatedItemsError,
  Credentials | HttpClient.HttpClient,
  RelatedItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRelatedItemsInput,
  output: ListRelatedItemsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRelatedItems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "relatedItems",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReplicationSetsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists details about the replication set configured in your account.
 */
export const listReplicationSets: API.PaginatedOperationMethod<
  ListReplicationSetsInput,
  ListReplicationSetsOutput,
  ListReplicationSetsError,
  Credentials | HttpClient.HttpClient,
  Arn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListReplicationSetsInput,
  output: ListReplicationSetsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReplicationSets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "replicationSetArns",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResponsePlansError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all response plans in your account.
 */
export const listResponsePlans: API.PaginatedOperationMethod<
  ListResponsePlansInput,
  ListResponsePlansOutput,
  ListResponsePlansError,
  Credentials | HttpClient.HttpClient,
  ResponsePlanSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResponsePlansInput,
  output: ListResponsePlansOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResponsePlans",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "responsePlanSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags that are attached to the specified response plan or incident.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTimelineEventsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists timeline events for the specified incident record.
 */
export const listTimelineEvents: API.PaginatedOperationMethod<
  ListTimelineEventsInput,
  ListTimelineEventsOutput,
  ListTimelineEventsError,
  Credentials | HttpClient.HttpClient,
  EventSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTimelineEventsInput,
  output: ListTimelineEventsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTimelineEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "eventSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a resource policy to the specified response plan. The resource policy is used to
 * share the response plan using Resource Access Manager (RAM). For more
 * information about cross-account sharing, see Cross-Region and cross-account incident management.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyInput,
  PutResourcePolicyOutput,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutResourcePolicyInput,
  output: PutResourcePolicyOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type StartIncidentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Used to start an incident from CloudWatch alarms, EventBridge events, or
 * manually.
 */
export const startIncident: API.OperationMethod<
  StartIncidentInput,
  StartIncidentOutput,
  StartIncidentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartIncidentInput,
  output: StartIncidentOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartIncident",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a tag to a response plan.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDeletionProtectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update deletion protection to either allow or deny deletion of the final Region in a
 * replication set.
 */
export const updateDeletionProtection: API.OperationMethod<
  UpdateDeletionProtectionInput,
  UpdateDeletionProtectionOutput,
  UpdateDeletionProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDeletionProtectionInput,
  output: UpdateDeletionProtectionOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDeletionProtection",
}));

export type UpdateIncidentRecordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the details of an incident record. You can use this operation to update an incident
 * record from the defined chat channel. For more information about using actions in chat
 * channels, see Interacting through chat.
 */
export const updateIncidentRecord: API.OperationMethod<
  UpdateIncidentRecordInput,
  UpdateIncidentRecordOutput,
  UpdateIncidentRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateIncidentRecordInput,
  output: UpdateIncidentRecordOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIncidentRecord",
}));

export type UpdateRelatedItemsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Add or remove related items from the related items tab of an incident record.
 */
export const updateRelatedItems: API.OperationMethod<
  UpdateRelatedItemsInput,
  UpdateRelatedItemsOutput,
  UpdateRelatedItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRelatedItemsInput,
  output: UpdateRelatedItemsOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRelatedItems",
}));

export type UpdateReplicationSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Add or delete Regions from your replication set.
 */
export const updateReplicationSet: API.OperationMethod<
  UpdateReplicationSetInput,
  UpdateReplicationSetOutput,
  UpdateReplicationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateReplicationSetInput,
  output: UpdateReplicationSetOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReplicationSet",
}));

export type UpdateResponsePlanError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified response plan.
 */
export const updateResponsePlan: API.OperationMethod<
  UpdateResponsePlanInput,
  UpdateResponsePlanOutput,
  UpdateResponsePlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResponsePlanInput,
  output: UpdateResponsePlanOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResponsePlan",
}));

export type UpdateTimelineEventError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a timeline event. You can update events of type `Custom Event`.
 */
export const updateTimelineEvent: API.OperationMethod<
  UpdateTimelineEventInput,
  UpdateTimelineEventOutput,
  UpdateTimelineEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTimelineEventInput,
  output: UpdateTimelineEventOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTimelineEvent",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ incidentRecordArn: S.String, findingIds: FindingIdList }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/batchGetIncidentFindings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetIncidentFindingsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deploymentGroupArn: S.String,
          deploymentId: S.String,
        }),
      ).annotate({ identifier: "CodeDeployDeployment" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stackArn: S.String,
        }),
      ).annotate({
        identifier: "CloudFormationStackUpdate",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ codeDeployDeployment: CodeDeployDeployment }),
        /*@__PURE__*/ S.Struct({ cloudFormationStackUpdate: CloudFormationStackUpdate }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          details: S.optional(FindingDetails),
        }),
      ).annotate({ identifier: "Finding" });
    case 6:
      return S.Array(Finding);
    case 7:
      return S.suspend(() =>
        S.Struct({ findingId: S.String, code: S.String, message: S.String }),
      ).annotate({
        identifier: "BatchGetIncidentFindingsError",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BatchGetIncidentFindingsError_);
    case 1:
      return S.suspend(() =>
        S.Struct({ findings: FindingList, errors: BatchGetIncidentFindingsErrorList }),
      ).annotate({
        identifier: "BatchGetIncidentFindingsOutput",
      });
    case 2:
      return S.suspend(() => S.Struct({ sseKmsKeyId: S.optional(S.String) })).annotate({
        identifier: "RegionMapInputValue",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ RegionMapInputValue.pipe(S.optional));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          regions: RegionMapInput,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/createReplicationSet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateReplicationSetInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "CreateReplicationSetOutput",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ snsTopicArn: S.String })]);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(NotificationTargetItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          impact: S.Number,
          summary: S.optional(S.String),
          dedupeString: S.optional(S.String),
          notificationTargets: S.optional(NotificationTargetSet),
          incidentTags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "IncidentTemplate" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "EmptyChatChannel",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ empty: EmptyChatChannel }),
        /*@__PURE__*/ S.Struct({ chatbotSns: ChatbotSnsConfigurationSet }),
      ]);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ SsmParameterValues.pipe(S.optional));
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ variable: S.String })]);
    case 6:
      return S.Record(S.String, /*@__PURE__*/ DynamicSsmParameterValue.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          documentName: S.String,
          documentVersion: S.optional(S.String),
          targetAccount: S.optional(S.String),
          parameters: S.optional(SsmParameters),
          dynamicParameters: S.optional(DynamicSsmParameters),
        }),
      ).annotate({ identifier: "SsmAutomation" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ ssmAutomation: SsmAutomation })]);
    case 1:
      return S.Array(Action);
    case 2:
      return S.suspend(() => S.Struct({ serviceId: S.String })).annotate({
        identifier: "PagerDutyIncidentConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          secretId: S.String,
          pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration,
        }),
      ).annotate({ identifier: "PagerDutyConfiguration" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ pagerDutyConfiguration: PagerDutyConfiguration })]);
    case 5:
      return S.Array(Integration);
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          displayName: S.optional(S.String),
          incidentTemplate: IncidentTemplate,
          chatChannel: S.optional(ChatChannel),
          engagements: S.optional(EngagementSet),
          actions: S.optional(ActionsList),
          tags: S.optional(TagMap),
          integrations: S.optional(Integrations),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/createResponsePlan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateResponsePlanInput" });
    case 7:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "CreateResponsePlanOutput",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ resource: S.String }),
        /*@__PURE__*/ S.Struct({ relatedItemId: S.String }),
      ]);
    case 1:
      return S.Array(EventReference);
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          incidentRecordArn: S.String,
          eventTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          eventType: S.String,
          eventData: S.String,
          eventReferences: S.optional(EventReferenceList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/createTimelineEvent" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateTimelineEventInput" });
    case 3:
      return S.suspend(() => S.Struct({ incidentRecordArn: S.String, eventId: S.String })).annotate(
        {
          identifier: "CreateTimelineEventOutput",
        },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deleteIncidentRecord" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIncidentRecordInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deleteReplicationSet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteReplicationSetInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, policyId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deleteResourcePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deleteResponsePlan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteResponsePlanInput" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ incidentRecordArn: S.String, eventId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deleteTimelineEvent" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTimelineEventInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/getIncidentRecord" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetIncidentRecordInput" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ ssmExecutionArn: S.String })]);
    case 3:
      return S.Array(AutomationExecution);
    case 4:
      return S.suspend(() =>
        S.Struct({
          createdBy: S.String,
          invokedBy: S.optional(S.String),
          resourceArn: S.optional(S.String),
          source: S.String,
        }),
      ).annotate({ identifier: "IncidentRecordSource" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          title: S.String,
          summary: S.optional(S.String),
          status: S.String,
          impact: S.Number,
          creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          resolvedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedBy: S.String,
          automationExecutions: S.optional(AutomationExecutionSet),
          incidentRecordSource: IncidentRecordSource,
          dedupeString: S.String,
          chatChannel: S.optional(ChatChannel),
          notificationTargets: S.optional(NotificationTargetSet),
        }),
      ).annotate({ identifier: "IncidentRecord" });
    case 6:
      return S.suspend(() => S.Struct({ incidentRecord: IncidentRecord })).annotate({
        identifier: "GetIncidentRecordOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/getReplicationSet" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetReplicationSetInput" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sseKmsKeyId: S.optional(S.String),
          status: S.String,
          statusMessage: S.optional(S.String),
          statusUpdateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "RegionInfo" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ RegionInfo.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          regionMap: RegionInfoMap,
          status: S.String,
          deletionProtected: S.Boolean,
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          createdBy: S.String,
          lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedBy: S.String,
        }),
      ).annotate({ identifier: "ReplicationSet" });
    case 3:
      return S.suspend(() => S.Struct({ replicationSet: ReplicationSet })).annotate({
        identifier: "GetReplicationSetOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/getResourcePolicies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourcePoliciesInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyDocument: S.String,
          policyId: S.String,
          ramResourceShareRegion: S.String,
        }),
      ).annotate({ identifier: "ResourcePolicy" });
    case 6:
      return S.Array(ResourcePolicy);
    case 7:
      return S.suspend(() =>
        S.Struct({ resourcePolicies: ResourcePolicyList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetResourcePoliciesOutput",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/getResponsePlan" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResponsePlanInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          displayName: S.optional(S.String),
          incidentTemplate: IncidentTemplate,
          chatChannel: S.optional(ChatChannel),
          engagements: S.optional(EngagementSet),
          actions: S.optional(ActionsList),
          integrations: S.optional(Integrations),
        }),
      ).annotate({ identifier: "GetResponsePlanOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          incidentRecordArn: S.String.pipe(T.HttpQuery("incidentRecordArn")),
          eventId: S.String.pipe(T.HttpQuery("eventId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/getTimelineEvent" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTimelineEventInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          incidentRecordArn: S.String,
          eventId: S.String,
          eventTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          eventUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          eventType: S.String,
          eventData: S.String,
          eventReferences: S.optional(EventReferenceList),
        }),
      ).annotate({ identifier: "TimelineEvent" });
    case 4:
      return S.suspend(() => S.Struct({ event: TimelineEvent })).annotate({
        identifier: "GetTimelineEventOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          incidentRecordArn: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listIncidentFindings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIncidentFindingsInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "FindingSummary" });
    case 7:
      return S.Array(FindingSummary);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ findings: FindingSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListIncidentFindingsOutput",
      });
    case 1:
      return S.Array(S.Number);
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValues: StringList }),
        /*@__PURE__*/ S.Struct({ integerValues: IntegerList }),
      ]);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          before: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
        /*@__PURE__*/ S.Struct({
          after: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
        /*@__PURE__*/ S.Struct({ equals: AttributeValueList }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ key: S.String, condition: Condition })).annotate({
        identifier: "Filter",
      });
    case 5:
      return S.Array(Filter);
    case 6:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(FilterList),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listIncidentRecords" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIncidentRecordsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          title: S.String,
          status: S.String,
          impact: S.Number,
          creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          resolvedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          incidentRecordSource: IncidentRecordSource,
        }),
      ).annotate({ identifier: "IncidentRecordSummary" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(IncidentRecordSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          incidentRecordSummaries: IncidentRecordSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIncidentRecordsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          incidentRecordArn: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/listRelatedItems" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListRelatedItemsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          autoResolve: S.optional(S.Boolean),
          secretId: S.optional(S.String),
        }),
      ).annotate({ identifier: "PagerDutyIncidentDetail" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ arn: S.String }),
        /*@__PURE__*/ S.Struct({ url: S.String }),
        /*@__PURE__*/ S.Struct({ metricDefinition: S.String }),
        /*@__PURE__*/ S.Struct({ pagerDutyIncidentDetail: PagerDutyIncidentDetail }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ value: ItemValue, type: S.String })).annotate({
        identifier: "ItemIdentifier",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          identifier: ItemIdentifier,
          title: S.optional(S.String),
          generatedId: S.optional(S.String),
        }),
      ).annotate({ identifier: "RelatedItem" });
    case 7:
      return S.Array(RelatedItem);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ relatedItems: RelatedItemList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRelatedItemsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listReplicationSets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListReplicationSetsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ replicationSetArns: ReplicationSetArnList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListReplicationSetsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listResponsePlans" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListResponsePlansInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String, name: S.String, displayName: S.optional(S.String) }),
      ).annotate({ identifier: "ResponsePlanSummary" });
    case 5:
      return S.Array(ResponsePlanSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          responsePlanSummaries: ResponsePlanSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListResponsePlansOutput" });
    case 7:
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
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tags: TagMap })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          incidentRecordArn: S.String,
          filters: S.optional(FilterList),
          sortBy: S.optional(S.String),
          sortOrder: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listTimelineEvents" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTimelineEventsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          incidentRecordArn: S.String,
          eventId: S.String,
          eventTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          eventUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          eventType: S.String,
          eventReferences: S.optional(EventReferenceList),
        }),
      ).annotate({ identifier: "EventSummary" });
    case 3:
      return S.Array(EventSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ eventSummaries: EventSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTimelineEventsOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, policy: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/putResourcePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutResourcePolicyInput" });
    case 6:
      return S.suspend(() => S.Struct({ policyId: S.String })).annotate({
        identifier: "PutResourcePolicyOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          source: S.String,
          triggerArn: S.optional(S.String),
          timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          rawData: S.optional(S.String),
        }),
      ).annotate({ identifier: "TriggerDetails" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          responsePlanArn: S.String,
          title: S.optional(S.String),
          impact: S.optional(S.Number),
          triggerDetails: S.optional(TriggerDetails),
          relatedItems: S.optional(RelatedItemList),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/startIncident" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartIncidentInput" });
    case 1:
      return S.suspend(() => S.Struct({ incidentRecordArn: S.String })).annotate({
        identifier: "StartIncidentOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
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
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          deletionProtected: S.Boolean,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/updateDeletionProtection" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDeletionProtectionInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          arn: S.String,
          title: S.optional(S.String),
          summary: S.optional(S.String),
          impact: S.optional(S.Number),
          status: S.optional(S.String),
          chatChannel: S.optional(ChatChannel),
          notificationTargets: S.optional(NotificationTargetSet),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/updateIncidentRecord" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIncidentRecordInput",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ itemToAdd: RelatedItem }),
        /*@__PURE__*/ S.Struct({ itemToRemove: ItemIdentifier }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          incidentRecordArn: S.String,
          relatedItemsUpdate: RelatedItemsUpdate,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/updateRelatedItems" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRelatedItemsInput" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ regionName: S.String, sseKmsKeyId: S.optional(S.String) }),
      ).annotate({ identifier: "AddRegionAction" });
    case 1:
      return S.suspend(() => S.Struct({ regionName: S.String })).annotate({
        identifier: "DeleteRegionAction",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ addRegionAction: AddRegionAction }),
        /*@__PURE__*/ S.Struct({ deleteRegionAction: DeleteRegionAction }),
      ]);
    case 3:
      return S.Array(UpdateReplicationSetAction);
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          actions: UpdateActionList,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/updateReplicationSet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateReplicationSetInput",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          arn: S.String,
          displayName: S.optional(S.String),
          incidentTemplateTitle: S.optional(S.String),
          incidentTemplateImpact: S.optional(S.Number),
          incidentTemplateSummary: S.optional(S.String),
          incidentTemplateDedupeString: S.optional(S.String),
          incidentTemplateNotificationTargets: S.optional(NotificationTargetSet),
          chatChannel: S.optional(ChatChannel),
          engagements: S.optional(EngagementSet),
          actions: S.optional(ActionsList),
          incidentTemplateTags: S.optional(TagMapUpdate),
          integrations: S.optional(Integrations),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/updateResponsePlan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateResponsePlanInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          incidentRecordArn: S.String,
          eventId: S.String,
          eventTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          eventType: S.optional(S.String),
          eventData: S.optional(S.String),
          eventReferences: S.optional(EventReferenceList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/updateTimelineEvent" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTimelineEventInput" });
  }
}
