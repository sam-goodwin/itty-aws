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
export interface BatchGetIncidentFindingsInput {
  incidentRecordArn: string;
  findingIds: string[];
}
export interface CodeDeployDeployment {
  startTime: Date;
  endTime?: Date;
  deploymentGroupArn: string;
  deploymentId: string;
}
export interface CloudFormationStackUpdate {
  startTime: Date;
  endTime?: Date;
  stackArn: string;
}
export type FindingDetails =
  | { codeDeployDeployment: CodeDeployDeployment; cloudFormationStackUpdate?: never }
  | { codeDeployDeployment?: never; cloudFormationStackUpdate: CloudFormationStackUpdate };
export interface Finding {
  id: string;
  creationTime: Date;
  lastModifiedTime: Date;
  details?: FindingDetails;
}
export type FindingList = Finding[];
export interface BatchGetIncidentFindingsError_ {
  findingId: string;
  code: string;
  message: string;
}
export type BatchGetIncidentFindingsErrorList = BatchGetIncidentFindingsError_[];
export interface BatchGetIncidentFindingsOutput {
  findings: Finding[];
  errors: BatchGetIncidentFindingsError_[];
}
export type RegionName = string;
export type SseKmsKey = string;
export interface RegionMapInputValue {
  sseKmsKeyId?: string;
}
export type RegionMapInput = { [key: string]: RegionMapInputValue | undefined };
export type ClientToken = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateReplicationSetInput {
  regions: { [key: string]: RegionMapInputValue | undefined };
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateReplicationSetOutput {
  arn: string;
}
export type ResponsePlanName = string;
export type ResponsePlanDisplayName = string;
export type IncidentTitle = string;
export type Impact = number;
export type IncidentSummary = string;
export type DedupeString = string;
export type NotificationTargetItem = { snsTopicArn: string };
export type NotificationTargetSet = NotificationTargetItem[];
export interface IncidentTemplate {
  title: string;
  impact: number;
  summary?: string;
  dedupeString?: string;
  notificationTargets?: NotificationTargetItem[];
  incidentTags?: { [key: string]: string | undefined };
}
export interface EmptyChatChannel {}
export type SnsArn = string;
export type ChatbotSnsConfigurationSet = string[];
export type ChatChannel =
  | { empty: EmptyChatChannel; chatbotSns?: never }
  | { empty?: never; chatbotSns: string[] };
export type SsmContactsArn = string;
export type EngagementSet = string[];
export type RoleArn = string;
export type SsmTargetAccount = string;
export type SsmParameterValues = string[];
export type SsmParameters = { [key: string]: string[] | undefined };
export type VariableType = string;
export type DynamicSsmParameterValue = { variable: string };
export type DynamicSsmParameters = { [key: string]: DynamicSsmParameterValue | undefined };
export interface SsmAutomation {
  roleArn: string;
  documentName: string;
  documentVersion?: string;
  targetAccount?: string;
  parameters?: { [key: string]: string[] | undefined };
  dynamicParameters?: { [key: string]: DynamicSsmParameterValue | undefined };
}
export type Action = { ssmAutomation: SsmAutomation };
export type ActionsList = Action[];
export interface PagerDutyIncidentConfiguration {
  serviceId: string;
}
export interface PagerDutyConfiguration {
  name: string;
  secretId: string;
  pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;
}
export type Integration = { pagerDutyConfiguration: PagerDutyConfiguration };
export type Integrations = Integration[];
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
export interface CreateResponsePlanOutput {
  arn: string;
}
export type TimelineEventType = string;
export type EventData = string;
export type GeneratedId = string;
export type EventReference =
  | { resource: string; relatedItemId?: never }
  | { resource?: never; relatedItemId: string };
export type EventReferenceList = EventReference[];
export interface CreateTimelineEventInput {
  clientToken?: string;
  incidentRecordArn: string;
  eventTime: Date;
  eventType: string;
  eventData: string;
  eventReferences?: EventReference[];
}
export type UUID = string;
export interface CreateTimelineEventOutput {
  incidentRecordArn: string;
  eventId: string;
}
export interface DeleteIncidentRecordInput {
  arn: string;
}
export interface DeleteIncidentRecordOutput {}
export interface DeleteReplicationSetInput {
  arn: string;
}
export interface DeleteReplicationSetOutput {}
export type PolicyId = string;
export interface DeleteResourcePolicyInput {
  resourceArn: string;
  policyId: string;
}
export interface DeleteResourcePolicyOutput {}
export interface DeleteResponsePlanInput {
  arn: string;
}
export interface DeleteResponsePlanOutput {}
export interface DeleteTimelineEventInput {
  incidentRecordArn: string;
  eventId: string;
}
export interface DeleteTimelineEventOutput {}
export interface GetIncidentRecordInput {
  arn: string;
}
export type IncidentRecordStatus = string;
export type AutomationExecution = { ssmExecutionArn: string };
export type AutomationExecutionSet = AutomationExecution[];
export type ServicePrincipal = string;
export type IncidentSource = string;
export interface IncidentRecordSource {
  createdBy: string;
  invokedBy?: string;
  resourceArn?: string;
  source: string;
}
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
export interface GetIncidentRecordOutput {
  incidentRecord: IncidentRecord;
}
export interface GetReplicationSetInput {
  arn: string;
}
export type RegionStatus = string;
export interface RegionInfo {
  sseKmsKeyId?: string;
  status: string;
  statusMessage?: string;
  statusUpdateDateTime: Date;
}
export type RegionInfoMap = { [key: string]: RegionInfo | undefined };
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
export interface GetReplicationSetOutput {
  replicationSet: ReplicationSet;
}
export type MaxResults = number;
export type NextToken = string;
export interface GetResourcePoliciesInput {
  resourceArn: string;
  maxResults?: number;
  nextToken?: string;
}
export type Policy = string;
export interface ResourcePolicy {
  policyDocument: string;
  policyId: string;
  ramResourceShareRegion: string;
}
export type ResourcePolicyList = ResourcePolicy[];
export interface GetResourcePoliciesOutput {
  resourcePolicies: ResourcePolicy[];
  nextToken?: string;
}
export interface GetResponsePlanInput {
  arn: string;
}
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
export interface GetTimelineEventInput {
  incidentRecordArn: string;
  eventId: string;
}
export interface TimelineEvent {
  incidentRecordArn: string;
  eventId: string;
  eventTime: Date;
  eventUpdatedTime: Date;
  eventType: string;
  eventData: string;
  eventReferences?: EventReference[];
}
export interface GetTimelineEventOutput {
  event: TimelineEvent;
}
export interface ListIncidentFindingsInput {
  incidentRecordArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface FindingSummary {
  id: string;
  lastModifiedTime: Date;
}
export type FindingSummaryList = FindingSummary[];
export interface ListIncidentFindingsOutput {
  findings: FindingSummary[];
  nextToken?: string;
}
export type StringList = string[];
export type IntegerList = number[];
export type AttributeValueList =
  | { stringValues: string[]; integerValues?: never }
  | { stringValues?: never; integerValues: number[] };
export type Condition =
  | { before: Date; after?: never; equals?: never }
  | { before?: never; after: Date; equals?: never }
  | { before?: never; after?: never; equals: AttributeValueList };
export interface Filter {
  key: string;
  condition: Condition;
}
export type FilterList = Filter[];
export interface ListIncidentRecordsInput {
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export interface IncidentRecordSummary {
  arn: string;
  title: string;
  status: string;
  impact: number;
  creationTime: Date;
  resolvedTime?: Date;
  incidentRecordSource: IncidentRecordSource;
}
export type IncidentRecordSummaryList = IncidentRecordSummary[];
export interface ListIncidentRecordsOutput {
  incidentRecordSummaries: IncidentRecordSummary[];
  nextToken?: string;
}
export interface ListRelatedItemsInput {
  incidentRecordArn: string;
  maxResults?: number;
  nextToken?: string;
}
export type Url = string;
export type MetricDefinition = string;
export interface PagerDutyIncidentDetail {
  id: string;
  autoResolve?: boolean;
  secretId?: string;
}
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
export type ItemType = string;
export interface ItemIdentifier {
  value: ItemValue;
  type: string;
}
export interface RelatedItem {
  identifier: ItemIdentifier;
  title?: string;
  generatedId?: string;
}
export type RelatedItemList = RelatedItem[];
export interface ListRelatedItemsOutput {
  relatedItems: RelatedItem[];
  nextToken?: string;
}
export interface ListReplicationSetsInput {
  maxResults?: number;
  nextToken?: string;
}
export type ReplicationSetArnList = string[];
export interface ListReplicationSetsOutput {
  replicationSetArns: string[];
  nextToken?: string;
}
export interface ListResponsePlansInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ResponsePlanSummary {
  arn: string;
  name: string;
  displayName?: string;
}
export type ResponsePlanSummaryList = ResponsePlanSummary[];
export interface ListResponsePlansOutput {
  responsePlanSummaries: ResponsePlanSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
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
export interface EventSummary {
  incidentRecordArn: string;
  eventId: string;
  eventTime: Date;
  eventUpdatedTime: Date;
  eventType: string;
  eventReferences?: EventReference[];
}
export type EventSummaryList = EventSummary[];
export interface ListTimelineEventsOutput {
  eventSummaries: EventSummary[];
  nextToken?: string;
}
export interface PutResourcePolicyInput {
  resourceArn: string;
  policy: string;
}
export interface PutResourcePolicyOutput {
  policyId: string;
}
export type RawData = string;
export interface TriggerDetails {
  source: string;
  triggerArn?: string;
  timestamp: Date;
  rawData?: string;
}
export interface StartIncidentInput {
  clientToken?: string;
  responsePlanArn: string;
  title?: string;
  impact?: number;
  triggerDetails?: TriggerDetails;
  relatedItems?: RelatedItem[];
}
export interface StartIncidentOutput {
  incidentRecordArn: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateDeletionProtectionInput {
  arn: string;
  deletionProtected: boolean;
  clientToken?: string;
}
export interface UpdateDeletionProtectionOutput {}
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
export interface UpdateIncidentRecordOutput {}
export type RelatedItemsUpdate =
  | { itemToAdd: RelatedItem; itemToRemove?: never }
  | { itemToAdd?: never; itemToRemove: ItemIdentifier };
export interface UpdateRelatedItemsInput {
  clientToken?: string;
  incidentRecordArn: string;
  relatedItemsUpdate: RelatedItemsUpdate;
}
export interface UpdateRelatedItemsOutput {}
export interface AddRegionAction {
  regionName: string;
  sseKmsKeyId?: string;
}
export interface DeleteRegionAction {
  regionName: string;
}
export type UpdateReplicationSetAction =
  | { addRegionAction: AddRegionAction; deleteRegionAction?: never }
  | { addRegionAction?: never; deleteRegionAction: DeleteRegionAction };
export type UpdateActionList = UpdateReplicationSetAction[];
export interface UpdateReplicationSetInput {
  arn: string;
  actions: UpdateReplicationSetAction[];
  clientToken?: string;
}
export interface UpdateReplicationSetOutput {}
export type TagMapUpdate = { [key: string]: string | undefined };
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
export interface UpdateResponsePlanOutput {}
export interface UpdateTimelineEventInput {
  clientToken?: string;
  incidentRecordArn: string;
  eventId: string;
  eventTime?: Date;
  eventType?: string;
  eventData?: string;
  eventReferences?: EventReference[];
}
export interface UpdateTimelineEventOutput {}
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
  input: __S(1, __c0, 1) as any as S.Schema<BatchGetIncidentFindingsInput>,
  output: __S(9, __c1, 1) as any as S.Schema<BatchGetIncidentFindingsOutput>,
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
  input: __S(13, __c1, 5) as any as S.Schema<CreateReplicationSetInput>,
  output: __S(14, __c1, 6) as any as S.Schema<CreateReplicationSetOutput>,
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
  input: __S(30, __c3, 6) as any as S.Schema<CreateResponsePlanInput>,
  output: __S(31, __c3, 7) as any as S.Schema<CreateResponsePlanOutput>,
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
  input: __S(34, __c4, 2) as any as S.Schema<CreateTimelineEventInput>,
  output: __S(35, __c4, 3) as any as S.Schema<CreateTimelineEventOutput>,
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
  input: __S(36, __c4, 4) as any as S.Schema<DeleteIncidentRecordInput>,
  output: __S(18, __c2, 2) as any as S.Schema<DeleteIncidentRecordOutput>,
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
  input: __S(37, __c4, 5) as any as S.Schema<DeleteReplicationSetInput>,
  output: __S(18, __c2, 2) as any as S.Schema<DeleteReplicationSetOutput>,
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
  input: __S(38, __c4, 6) as any as S.Schema<DeleteResourcePolicyInput>,
  output: __S(18, __c2, 2) as any as S.Schema<DeleteResourcePolicyOutput>,
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
  input: __S(39, __c4, 7) as any as S.Schema<DeleteResponsePlanInput>,
  output: __S(18, __c2, 2) as any as S.Schema<DeleteResponsePlanOutput>,
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
  input: __S(40, __c5, 0) as any as S.Schema<DeleteTimelineEventInput>,
  output: __S(18, __c2, 2) as any as S.Schema<DeleteTimelineEventOutput>,
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
  input: __S(41, __c5, 1) as any as S.Schema<GetIncidentRecordInput>,
  output: __S(46, __c5, 6) as any as S.Schema<GetIncidentRecordOutput>,
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
  input: __S(47, __c5, 7) as any as S.Schema<GetReplicationSetInput>,
  output: __S(51, __c6, 3) as any as S.Schema<GetReplicationSetOutput>,
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
  input: __S(52, __c6, 4) as any as S.Schema<GetResourcePoliciesInput>,
  output: __S(55, __c6, 7) as any as S.Schema<GetResourcePoliciesOutput>,
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
  input: __S(56, __c7, 0) as any as S.Schema<GetResponsePlanInput>,
  output: __S(57, __c7, 1) as any as S.Schema<GetResponsePlanOutput>,
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
  input: __S(58, __c7, 2) as any as S.Schema<GetTimelineEventInput>,
  output: __S(60, __c7, 4) as any as S.Schema<GetTimelineEventOutput>,
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
  input: __S(61, __c7, 5) as any as S.Schema<ListIncidentFindingsInput>,
  output: __S(64, __c8, 0) as any as S.Schema<ListIncidentFindingsOutput>,
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
  input: __S(70, __c8, 6) as any as S.Schema<ListIncidentRecordsInput>,
  output: __S(73, __c9, 1) as any as S.Schema<ListIncidentRecordsOutput>,
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
  input: __S(74, __c9, 2) as any as S.Schema<ListRelatedItemsInput>,
  output: __S(80, __c10, 0) as any as S.Schema<ListRelatedItemsOutput>,
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
  input: __S(81, __c10, 1) as any as S.Schema<ListReplicationSetsInput>,
  output: __S(82, __c10, 2) as any as S.Schema<ListReplicationSetsOutput>,
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
  input: __S(83, __c10, 3) as any as S.Schema<ListResponsePlansInput>,
  output: __S(86, __c10, 6) as any as S.Schema<ListResponsePlansOutput>,
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
  input: __S(87, __c10, 7) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(88, __c11, 0) as any as S.Schema<ListTagsForResourceResponse>,
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
  input: __S(89, __c11, 1) as any as S.Schema<ListTimelineEventsInput>,
  output: __S(92, __c11, 4) as any as S.Schema<ListTimelineEventsOutput>,
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
  input: __S(93, __c11, 5) as any as S.Schema<PutResourcePolicyInput>,
  output: __S(94, __c11, 6) as any as S.Schema<PutResourcePolicyOutput>,
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
  input: __S(96, __c12, 0) as any as S.Schema<StartIncidentInput>,
  output: __S(97, __c12, 1) as any as S.Schema<StartIncidentOutput>,
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
  input: __S(98, __c12, 2) as any as S.Schema<TagResourceRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<TagResourceResponse>,
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
  input: __S(99, __c12, 3) as any as S.Schema<UntagResourceRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<UntagResourceResponse>,
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
  input: __S(100, __c12, 4) as any as S.Schema<UpdateDeletionProtectionInput>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdateDeletionProtectionOutput>,
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
  input: __S(101, __c12, 5) as any as S.Schema<UpdateIncidentRecordInput>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdateIncidentRecordOutput>,
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
  input: __S(103, __c12, 7) as any as S.Schema<UpdateRelatedItemsInput>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdateRelatedItemsOutput>,
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
  input: __S(108, __c13, 4) as any as S.Schema<UpdateReplicationSetInput>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdateReplicationSetOutput>,
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
  input: __S(110, __c13, 6) as any as S.Schema<UpdateResponsePlanInput>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdateResponsePlanOutput>,
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
  input: __S(111, __c13, 7) as any as S.Schema<UpdateTimelineEventInput>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdateTimelineEventOutput>,
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
        S.Struct({ incidentRecordArn: S.String, findingIds: __S(0, __c0, 0) }).pipe(
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
        /*@__PURE__*/ S.Struct({ codeDeployDeployment: __S(2, __c0, 2) }),
        /*@__PURE__*/ S.Struct({ cloudFormationStackUpdate: __S(3, __c0, 3) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          details: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "Finding" });
    case 6:
      return S.Array(__S(5, __c0, 5));
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
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ findings: __S(6, __c0, 6), errors: __S(8, __c1, 0) }),
      ).annotate({
        identifier: "BatchGetIncidentFindingsOutput",
      });
    case 2:
      return S.suspend(() => S.Struct({ sseKmsKeyId: S.optional(S.String) })).annotate({
        identifier: "RegionMapInputValue",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(10, __c1, 2).pipe(S.optional));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          regions: __S(11, __c1, 3),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(12, __c1, 4)),
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
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          impact: S.Number,
          summary: S.optional(S.String),
          dedupeString: S.optional(S.String),
          notificationTargets: S.optional(__S(16, __c2, 0)),
          incidentTags: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({ identifier: "IncidentTemplate" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "EmptyChatChannel",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ empty: __S(18, __c2, 2) }),
        /*@__PURE__*/ S.Struct({ chatbotSns: __S(0, __c0, 0) }),
      ]);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(0, __c0, 0).pipe(S.optional));
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ variable: S.String })]);
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(21, __c2, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          documentName: S.String,
          documentVersion: S.optional(S.String),
          targetAccount: S.optional(S.String),
          parameters: S.optional(__S(20, __c2, 4)),
          dynamicParameters: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({ identifier: "SsmAutomation" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ ssmAutomation: __S(23, __c2, 7) })]);
    case 1:
      return S.Array(__S(24, __c3, 0));
    case 2:
      return S.suspend(() => S.Struct({ serviceId: S.String })).annotate({
        identifier: "PagerDutyIncidentConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          secretId: S.String,
          pagerDutyIncidentConfiguration: __S(26, __c3, 2),
        }),
      ).annotate({ identifier: "PagerDutyConfiguration" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ pagerDutyConfiguration: __S(27, __c3, 3) })]);
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          displayName: S.optional(S.String),
          incidentTemplate: __S(17, __c2, 1),
          chatChannel: S.optional(__S(19, __c2, 3)),
          engagements: S.optional(__S(0, __c0, 0)),
          actions: S.optional(__S(25, __c3, 1)),
          tags: S.optional(__S(12, __c1, 4)),
          integrations: S.optional(__S(29, __c3, 5)),
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
      return S.Array(__S(32, __c4, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          incidentRecordArn: S.String,
          eventTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          eventType: S.String,
          eventData: S.String,
          eventReferences: S.optional(__S(33, __c4, 1)),
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
      return S.Array(__S(42, __c5, 2));
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
          automationExecutions: S.optional(__S(43, __c5, 3)),
          incidentRecordSource: __S(44, __c5, 4),
          dedupeString: S.String,
          chatChannel: S.optional(__S(19, __c2, 3)),
          notificationTargets: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "IncidentRecord" });
    case 6:
      return S.suspend(() => S.Struct({ incidentRecord: __S(45, __c5, 5) })).annotate({
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
      return S.Record(S.String, /*@__PURE__*/ __S(48, __c6, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          regionMap: __S(49, __c6, 1),
          status: S.String,
          deletionProtected: S.Boolean,
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          createdBy: S.String,
          lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedBy: S.String,
        }),
      ).annotate({ identifier: "ReplicationSet" });
    case 3:
      return S.suspend(() => S.Struct({ replicationSet: __S(50, __c6, 2) })).annotate({
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
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ resourcePolicies: __S(54, __c6, 6), nextToken: S.optional(S.String) }),
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
          incidentTemplate: __S(17, __c2, 1),
          chatChannel: S.optional(__S(19, __c2, 3)),
          engagements: S.optional(__S(0, __c0, 0)),
          actions: S.optional(__S(25, __c3, 1)),
          integrations: S.optional(__S(29, __c3, 5)),
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
          eventReferences: S.optional(__S(33, __c4, 1)),
        }),
      ).annotate({ identifier: "TimelineEvent" });
    case 4:
      return S.suspend(() => S.Struct({ event: __S(59, __c7, 3) })).annotate({
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
      return S.Array(__S(62, __c7, 6));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ findings: __S(63, __c7, 7), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListIncidentFindingsOutput",
      });
    case 1:
      return S.Array(S.Number);
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValues: __S(0, __c0, 0) }),
        /*@__PURE__*/ S.Struct({ integerValues: __S(65, __c8, 1) }),
      ]);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          before: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
        /*@__PURE__*/ S.Struct({
          after: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
        /*@__PURE__*/ S.Struct({ equals: __S(66, __c8, 2) }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ key: S.String, condition: __S(67, __c8, 3) })).annotate({
        identifier: "Filter",
      });
    case 5:
      return S.Array(__S(68, __c8, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(69, __c8, 5)),
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
          incidentRecordSource: __S(44, __c5, 4),
        }),
      ).annotate({ identifier: "IncidentRecordSummary" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          incidentRecordSummaries: __S(72, __c9, 0),
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
        /*@__PURE__*/ S.Struct({ pagerDutyIncidentDetail: __S(75, __c9, 3) }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ value: __S(76, __c9, 4), type: S.String })).annotate({
        identifier: "ItemIdentifier",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          identifier: __S(77, __c9, 5),
          title: S.optional(S.String),
          generatedId: S.optional(S.String),
        }),
      ).annotate({ identifier: "RelatedItem" });
    case 7:
      return S.Array(__S(78, __c9, 6));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ relatedItems: __S(79, __c9, 7), nextToken: S.optional(S.String) }),
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
        S.Struct({ replicationSetArns: __S(0, __c0, 0), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(84, __c10, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          responsePlanSummaries: __S(85, __c10, 5),
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
      return S.suspend(() => S.Struct({ tags: __S(12, __c1, 4) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          incidentRecordArn: S.String,
          filters: S.optional(__S(69, __c8, 5)),
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
          eventReferences: S.optional(__S(33, __c4, 1)),
        }),
      ).annotate({ identifier: "EventSummary" });
    case 3:
      return S.Array(__S(90, __c11, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ eventSummaries: __S(91, __c11, 3), nextToken: S.optional(S.String) }),
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
          triggerDetails: S.optional(__S(95, __c11, 7)),
          relatedItems: S.optional(__S(79, __c9, 7)),
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
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(12, __c1, 4),
        }).pipe(
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
          tagKeys: __S(0, __c0, 0).pipe(T.HttpQuery("tagKeys")),
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
          chatChannel: S.optional(__S(19, __c2, 3)),
          notificationTargets: S.optional(__S(16, __c2, 0)),
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
        /*@__PURE__*/ S.Struct({ itemToAdd: __S(78, __c9, 6) }),
        /*@__PURE__*/ S.Struct({ itemToRemove: __S(77, __c9, 5) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          incidentRecordArn: S.String,
          relatedItemsUpdate: __S(102, __c12, 6),
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
        /*@__PURE__*/ S.Struct({ addRegionAction: __S(104, __c13, 0) }),
        /*@__PURE__*/ S.Struct({ deleteRegionAction: __S(105, __c13, 1) }),
      ]);
    case 3:
      return S.Array(__S(106, __c13, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          actions: __S(107, __c13, 3),
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
          incidentTemplateNotificationTargets: S.optional(__S(16, __c2, 0)),
          chatChannel: S.optional(__S(19, __c2, 3)),
          engagements: S.optional(__S(0, __c0, 0)),
          actions: S.optional(__S(25, __c3, 1)),
          incidentTemplateTags: S.optional(__S(109, __c13, 5)),
          integrations: S.optional(__S(29, __c3, 5)),
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
          eventReferences: S.optional(__S(33, __c4, 1)),
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

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
