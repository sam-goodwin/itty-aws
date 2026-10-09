import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Notifications",
  serviceShapeName: "Notifications",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "notifications" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://notifications-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://notifications.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
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
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()), resourceId: S.String },
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
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()), resourceId: S.String },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceType: S.String,
      resourceId: /*@__PURE__*/ S.optional(S.String),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(117, __c14, 5)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ChannelArn = string;
export type NotificationConfigurationArn = string;
export interface AssociateChannelRequest {
  arn: string;
  notificationConfigurationArn: string;
}
export interface AssociateChannelResponse {}
export type AccountContactType = string;
export type ManagedNotificationConfigurationOsArn = string;
export interface AssociateManagedNotificationAccountContactRequest {
  contactIdentifier: string;
  managedNotificationConfigurationArn: string;
  isSensitiveEventsSubscribed?: boolean;
}
export interface AssociateManagedNotificationAccountContactResponse {}
export interface AssociateManagedNotificationAdditionalChannelRequest {
  channelArn: string;
  managedNotificationConfigurationArn: string;
  isSensitiveEventsSubscribed?: boolean;
}
export interface AssociateManagedNotificationAdditionalChannelResponse {}
export type OrganizationalUnitId = string;
export interface AssociateOrganizationalUnitRequest {
  organizationalUnitId: string;
  notificationConfigurationArn: string;
}
export interface AssociateOrganizationalUnitResponse {}
export type Source = string;
export type EventType = string;
export type EventRuleEventPattern = string;
export type Region = string;
export type Regions = string[];
export interface CreateEventRuleRequest {
  notificationConfigurationArn: string;
  source: string;
  eventType: string;
  eventPattern?: string;
  regions: string[];
}
export type EventRuleArn = string;
export type EventRuleStatus = string;
export type EventRuleStatusReason = string;
export interface EventRuleStatusSummary {
  status: string;
  reason: string;
}
export type StatusSummaryByRegion = { [key: string]: EventRuleStatusSummary | undefined };
export interface CreateEventRuleResponse {
  arn: string;
  notificationConfigurationArn: string;
  statusSummaryByRegion: { [key: string]: EventRuleStatusSummary | undefined };
}
export type NotificationConfigurationName = string;
export type NotificationConfigurationDescription = string;
export type AggregationDuration = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateNotificationConfigurationRequest {
  name: string;
  description: string;
  aggregationDuration?: string;
  tags?: { [key: string]: string | undefined };
}
export type NotificationConfigurationStatus = string;
export interface CreateNotificationConfigurationResponse {
  arn: string;
  status: string;
}
export interface DeleteEventRuleRequest {
  arn: string;
}
export interface DeleteEventRuleResponse {}
export interface DeleteNotificationConfigurationRequest {
  arn: string;
}
export interface DeleteNotificationConfigurationResponse {}
export interface DeregisterNotificationHubRequest {
  notificationHubRegion: string;
}
export type NotificationHubStatus = string;
export type NotificationHubStatusReason = string;
export interface NotificationHubStatusSummary {
  status: string;
  reason: string;
}
export interface DeregisterNotificationHubResponse {
  notificationHubRegion: string;
  statusSummary: NotificationHubStatusSummary;
}
export interface DisableNotificationsAccessForOrganizationRequest {}
export interface DisableNotificationsAccessForOrganizationResponse {}
export interface DisassociateChannelRequest {
  arn: string;
  notificationConfigurationArn: string;
}
export interface DisassociateChannelResponse {}
export interface DisassociateManagedNotificationAccountContactRequest {
  contactIdentifier: string;
  managedNotificationConfigurationArn: string;
}
export interface DisassociateManagedNotificationAccountContactResponse {}
export interface DisassociateManagedNotificationAdditionalChannelRequest {
  channelArn: string;
  managedNotificationConfigurationArn: string;
}
export interface DisassociateManagedNotificationAdditionalChannelResponse {}
export interface DisassociateOrganizationalUnitRequest {
  organizationalUnitId: string;
  notificationConfigurationArn: string;
}
export interface DisassociateOrganizationalUnitResponse {}
export interface EnableNotificationsAccessForOrganizationRequest {}
export interface EnableNotificationsAccessForOrganizationResponse {}
export interface GetEventRuleRequest {
  arn: string;
}
export type CreationTime = Date;
export type ManagedRuleArn = string;
export type ManagedRuleArns = string[];
export interface GetEventRuleResponse {
  arn: string;
  notificationConfigurationArn: string;
  creationTime: Date;
  source: string;
  eventType: string;
  eventPattern: string;
  regions: string[];
  managedRules: string[];
  statusSummaryByRegion: { [key: string]: EventRuleStatusSummary | undefined };
}
export type ManagedNotificationChildEventArn = string;
export type LocaleCode = string;
export interface GetManagedNotificationChildEventRequest {
  arn: string;
  locale?: string;
}
export type SchemaVersion = string;
export type NotificationEventId = string;
export type TextPartReference = string;
export interface Dimension {
  name: string;
  value: string;
}
export type Dimensions = Dimension[];
export interface MessageComponents {
  headline?: string;
  paragraphSummary?: string;
  completeDescription?: string;
  markupDescription?: string;
  dimensions?: Dimension[];
}
export type Url = string;
export type NotificationType = string;
export type EventStatus = string;
export type ManagedNotificationEventArn = string;
export type TextPartId = string;
export type TextPartType = string;
export type TextByLocale = { [key: string]: string | undefined };
export interface TextPartValue {
  type: string;
  displayText?: string;
  textByLocale?: { [key: string]: string | undefined };
  url?: string;
}
export type TextParts = { [key: string]: TextPartValue | undefined };
export interface SummarizationDimensionDetail {
  name: string;
  value: string;
}
export type SummarizationDimensionDetails = SummarizationDimensionDetail[];
export interface AggregationDetail {
  summarizationDimensions?: SummarizationDimensionDetail[];
}
export interface ManagedNotificationChildEvent {
  schemaVersion: string;
  id: string;
  messageComponents: MessageComponents;
  sourceEventDetailUrl?: string;
  sourceEventDetailUrlDisplayText?: string;
  notificationType: string;
  eventStatus?: string;
  aggregateManagedNotificationEventArn: string;
  startTime?: Date;
  endTime?: Date;
  textParts: { [key: string]: TextPartValue | undefined };
  organizationalUnitId?: string;
  aggregationDetail?: AggregationDetail;
}
export interface GetManagedNotificationChildEventResponse {
  arn: string;
  managedNotificationConfigurationArn: string;
  creationTime: Date;
  content: ManagedNotificationChildEvent;
}
export interface GetManagedNotificationConfigurationRequest {
  arn: string;
}
export type ManagedNotificationConfigurationName = string;
export type ManagedNotificationConfigurationDescription = string;
export interface GetManagedNotificationConfigurationResponse {
  arn: string;
  name: string;
  description: string;
  category: string;
  subCategory: string;
}
export interface GetManagedNotificationEventRequest {
  arn: string;
  locale?: string;
}
export type AggregationEventType = string;
export interface AggregationKey {
  name: string;
  value: string;
}
export type AggregationKeys = AggregationKey[];
export type SampleAggregationDimensionValues = string[];
export interface SummarizationDimensionOverview {
  name: string;
  count: number;
  sampleValues?: string[];
}
export type SummarizationDimensionOverviews = SummarizationDimensionOverview[];
export interface AggregationSummary {
  eventCount: number;
  aggregatedBy: AggregationKey[];
  aggregatedAccounts: SummarizationDimensionOverview;
  aggregatedRegions: SummarizationDimensionOverview;
  aggregatedOrganizationalUnits?: SummarizationDimensionOverview;
  additionalSummarizationDimensions?: SummarizationDimensionOverview[];
}
export type AttachmentDisplayName = string;
export type SensitiveUrl = string | redacted.Redacted<string>;
export type AttachmentContentType = string;
export interface NotificationEventAttachment {
  displayName: string;
  attachmentDownloadUrl?: string | redacted.Redacted<string>;
  contentType: string;
}
export type NotificationEventAttachmentList = NotificationEventAttachment[];
export interface ManagedNotificationEvent {
  schemaVersion: string;
  id: string;
  messageComponents: MessageComponents;
  sourceEventDetailUrl?: string;
  sourceEventDetailUrlDisplayText?: string;
  notificationType: string;
  eventStatus?: string;
  aggregationEventType?: string;
  aggregationSummary?: AggregationSummary;
  startTime?: Date;
  endTime?: Date;
  textParts: { [key: string]: TextPartValue | undefined };
  organizationalUnitId?: string;
  attachments?: NotificationEventAttachment[];
}
export interface GetManagedNotificationEventResponse {
  arn: string;
  managedNotificationConfigurationArn: string;
  creationTime: Date;
  content: ManagedNotificationEvent;
}
export interface GetNotificationConfigurationRequest {
  arn: string;
}
export type NotificationConfigurationSubtype = string;
export interface GetNotificationConfigurationResponse {
  arn: string;
  name: string;
  description: string;
  status: string;
  creationTime: Date;
  aggregationDuration?: string;
  subtype?: string;
}
export type NotificationEventArn = string;
export interface GetNotificationEventRequest {
  arn: string;
  locale?: string;
}
export type AccountId = string;
export type Arn = string;
export type Tags = string[];
export interface Resource {
  id?: string;
  arn?: string;
  detailUrl?: string;
  tags?: string[];
}
export type Resources = Resource[];
export interface SourceEventMetadata {
  eventTypeVersion: string;
  sourceEventId: string;
  eventOriginRegion?: string;
  relatedAccount: string;
  source: string;
  eventOccurrenceTime: Date;
  eventType: string;
  relatedResources: Resource[];
}
export type MediaId = string;
export type MediaElementType = string;
export interface MediaElement {
  mediaId: string;
  type: string;
  url: string;
  caption: string;
}
export type Media = MediaElement[];
export interface NotificationEventSchema {
  schemaVersion: string;
  id: string;
  sourceEventMetadata: SourceEventMetadata;
  messageComponents: MessageComponents;
  sourceEventDetailUrl?: string;
  sourceEventDetailUrlDisplayText?: string;
  notificationType: string;
  eventStatus?: string;
  aggregationEventType?: string;
  aggregateNotificationEventArn?: string;
  aggregationSummary?: AggregationSummary;
  startTime?: Date;
  endTime?: Date;
  textParts: { [key: string]: TextPartValue | undefined };
  media: MediaElement[];
  organizationalUnitId?: string;
}
export interface GetNotificationEventResponse {
  arn: string;
  notificationConfigurationArn: string;
  creationTime: Date;
  content: NotificationEventSchema;
}
export interface GetNotificationsAccessForOrganizationRequest {}
export type AccessStatus = "ENABLED" | "DISABLED" | "PENDING" | "FAILED" | (string & {});
export interface NotificationsAccessForOrganization {
  accessStatus: AccessStatus;
}
export interface GetNotificationsAccessForOrganizationResponse {
  notificationsAccessForOrganization: NotificationsAccessForOrganization;
}
export type NextToken = string;
export interface ListChannelsRequest {
  notificationConfigurationArn: string;
  maxResults?: number;
  nextToken?: string;
}
export type Channels = string[];
export interface ListChannelsResponse {
  nextToken?: string;
  channels: string[];
}
export interface ListEventRulesRequest {
  notificationConfigurationArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface EventRuleStructure {
  arn: string;
  notificationConfigurationArn: string;
  creationTime: Date;
  source: string;
  eventType: string;
  eventPattern: string;
  regions: string[];
  managedRules: string[];
  statusSummaryByRegion: { [key: string]: EventRuleStatusSummary | undefined };
}
export type EventRules = EventRuleStructure[];
export interface ListEventRulesResponse {
  nextToken?: string;
  eventRules: EventRuleStructure[];
}
export interface ListManagedNotificationChannelAssociationsRequest {
  managedNotificationConfigurationArn: string;
  maxResults?: number;
  nextToken?: string;
}
export type ChannelType = "MOBILE" | "CHATBOT" | "EMAIL" | "ACCOUNT_CONTACT" | (string & {});
export type ChannelAssociationOverrideOption = string;
export interface ManagedNotificationChannelAssociationSummary {
  channelIdentifier: string;
  channelType: ChannelType;
  overrideOption?: string;
  isSensitiveEventsSubscribed?: boolean;
}
export type ManagedNotificationChannelAssociations = ManagedNotificationChannelAssociationSummary[];
export interface ListManagedNotificationChannelAssociationsResponse {
  nextToken?: string;
  channelAssociations: ManagedNotificationChannelAssociationSummary[];
}
export interface ListManagedNotificationChildEventsRequest {
  aggregateManagedNotificationEventArn: string;
  startTime?: Date;
  endTime?: Date;
  locale?: string;
  maxResults?: number;
  relatedAccount?: string;
  organizationalUnitId?: string;
  nextToken?: string;
}
export interface ManagedSourceEventMetadataSummary {
  eventOriginRegion?: string;
  source: string;
  eventType: string;
}
export interface MessageComponentsSummary {
  headline: string;
}
export interface ManagedNotificationChildEventSummary {
  schemaVersion: string;
  sourceEventMetadata: ManagedSourceEventMetadataSummary;
  messageComponents: MessageComponentsSummary;
  aggregationDetail: AggregationDetail;
  eventStatus: string;
  notificationType: string;
}
export interface ManagedNotificationChildEventOverview {
  arn: string;
  managedNotificationConfigurationArn: string;
  relatedAccount: string;
  creationTime: Date;
  childEvent: ManagedNotificationChildEventSummary;
  aggregateManagedNotificationEventArn: string;
  organizationalUnitId?: string;
}
export type ManagedNotificationChildEvents = ManagedNotificationChildEventOverview[];
export interface ListManagedNotificationChildEventsResponse {
  nextToken?: string;
  managedNotificationChildEvents: ManagedNotificationChildEventOverview[];
}
export type ChannelIdentifier = string;
export interface ListManagedNotificationConfigurationsRequest {
  channelIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ManagedNotificationConfigurationStructure {
  arn: string;
  name: string;
  description: string;
}
export type ManagedNotificationConfigurations = ManagedNotificationConfigurationStructure[];
export interface ListManagedNotificationConfigurationsResponse {
  nextToken?: string;
  managedNotificationConfigurations: ManagedNotificationConfigurationStructure[];
}
export interface ListManagedNotificationEventsRequest {
  startTime?: Date;
  endTime?: Date;
  locale?: string;
  source?: string;
  maxResults?: number;
  nextToken?: string;
  organizationalUnitId?: string;
  relatedAccount?: string;
  includeSensitiveEvents?: boolean;
}
export interface ManagedNotificationEventSummary {
  schemaVersion: string;
  sourceEventMetadata: ManagedSourceEventMetadataSummary;
  messageComponents: MessageComponentsSummary;
  eventStatus: string;
  notificationType: string;
}
export type AggregatedNotificationRegions = string[];
export interface ManagedNotificationEventOverview {
  arn: string;
  managedNotificationConfigurationArn: string;
  relatedAccount: string;
  creationTime: Date;
  notificationEvent: ManagedNotificationEventSummary;
  aggregationEventType?: string;
  organizationalUnitId?: string;
  aggregationSummary?: AggregationSummary;
  aggregatedNotificationRegions?: string[];
}
export type ManagedNotificationEvents = ManagedNotificationEventOverview[];
export interface ListManagedNotificationEventsResponse {
  nextToken?: string;
  managedNotificationEvents: ManagedNotificationEventOverview[];
}
export type MemberAccountNotificationConfigurationStatus = string;
export interface ListMemberAccountsRequest {
  notificationConfigurationArn: string;
  maxResults?: number;
  nextToken?: string;
  memberAccount?: string;
  status?: string;
  organizationalUnitId?: string;
}
export interface MemberAccount {
  notificationConfigurationArn?: string;
  accountId: string;
  status: string;
  statusReason: string;
  organizationalUnitId: string;
}
export type MemberAccounts = MemberAccount[];
export interface ListMemberAccountsResponse {
  memberAccounts: MemberAccount[];
  nextToken?: string;
}
export interface ListNotificationConfigurationsRequest {
  eventRuleSource?: string;
  channelArn?: string;
  status?: string;
  subtype?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface NotificationConfigurationStructure {
  arn: string;
  name: string;
  description: string;
  status: string;
  creationTime: Date;
  aggregationDuration?: string;
  subtype?: string;
}
export type NotificationConfigurations = NotificationConfigurationStructure[];
export interface ListNotificationConfigurationsResponse {
  nextToken?: string;
  notificationConfigurations: NotificationConfigurationStructure[];
}
export interface ListNotificationEventsRequest {
  startTime?: Date;
  endTime?: Date;
  locale?: string;
  source?: string;
  includeChildEvents?: boolean;
  aggregateNotificationEventArn?: string;
  maxResults?: number;
  nextToken?: string;
  organizationalUnitId?: string;
}
export interface SourceEventMetadataSummary {
  eventOriginRegion?: string;
  source: string;
  eventType: string;
}
export interface NotificationEventSummary {
  schemaVersion: string;
  sourceEventMetadata: SourceEventMetadataSummary;
  messageComponents: MessageComponentsSummary;
  eventStatus: string;
  notificationType: string;
}
export interface NotificationEventOverview {
  arn: string;
  notificationConfigurationArn: string;
  relatedAccount: string;
  creationTime: Date;
  notificationEvent: NotificationEventSummary;
  aggregationEventType?: string;
  aggregateNotificationEventArn?: string;
  aggregationSummary?: AggregationSummary;
  organizationalUnitId?: string;
}
export type NotificationEvents = NotificationEventOverview[];
export interface ListNotificationEventsResponse {
  nextToken?: string;
  notificationEvents: NotificationEventOverview[];
}
export interface ListNotificationHubsRequest {
  maxResults?: number;
  nextToken?: string;
}
export type LastActivationTime = Date;
export interface NotificationHubOverview {
  notificationHubRegion: string;
  statusSummary: NotificationHubStatusSummary;
  creationTime: Date;
  lastActivationTime?: Date;
}
export type NotificationHubs = NotificationHubOverview[];
export interface ListNotificationHubsResponse {
  notificationHubs: NotificationHubOverview[];
  nextToken?: string;
}
export interface ListOrganizationalUnitsRequest {
  notificationConfigurationArn: string;
  maxResults?: number;
  nextToken?: string;
}
export type OrganizationalUnits = string[];
export interface ListOrganizationalUnitsResponse {
  organizationalUnits: string[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface RegisterNotificationHubRequest {
  notificationHubRegion: string;
}
export interface RegisterNotificationHubResponse {
  notificationHubRegion: string;
  statusSummary: NotificationHubStatusSummary;
  creationTime: Date;
  lastActivationTime?: Date;
}
export interface TagResourceRequest {
  arn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  arn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateEventRuleRequest {
  arn: string;
  eventPattern?: string;
  regions?: string[];
}
export interface UpdateEventRuleResponse {
  arn: string;
  notificationConfigurationArn: string;
  statusSummaryByRegion: { [key: string]: EventRuleStatusSummary | undefined };
}
export type ManagedNotificationChannelIdentifier = string;
export interface UpdateManagedNotificationChannelAssociationRequest {
  managedNotificationConfigurationArn: string;
  channelIdentifier: string;
  isSensitiveEventsSubscribed?: boolean;
}
export interface UpdateManagedNotificationChannelAssociationResponse {}
export interface UpdateNotificationConfigurationRequest {
  arn: string;
  name?: string;
  description?: string;
  aggregationDuration?: string;
}
export interface UpdateNotificationConfigurationResponse {
  arn: string;
}
export type ErrorMessage = string;
export type ResourceId = string;
export type ResourceType = string;
export type ServiceCode = string;
export type QuotaCode = string;
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AssociateChannelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a delivery Channel with a particular `NotificationConfiguration`. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).
 */
export const associateChannel: API.OperationMethod<
  AssociateChannelRequest,
  AssociateChannelResponse,
  AssociateChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AssociateChannelRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AssociateChannelResponse>,
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
  operationName: "AssociateChannel",
}));

export type AssociateManagedNotificationAccountContactError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates an Account Contact with a particular `ManagedNotificationConfiguration`.
 */
export const associateManagedNotificationAccountContact: API.OperationMethod<
  AssociateManagedNotificationAccountContactRequest,
  AssociateManagedNotificationAccountContactResponse,
  AssociateManagedNotificationAccountContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<AssociateManagedNotificationAccountContactRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<AssociateManagedNotificationAccountContactResponse>,
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
  operationName: "AssociateManagedNotificationAccountContact",
}));

export type AssociateManagedNotificationAdditionalChannelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates an additional Channel with a particular `ManagedNotificationConfiguration`.
 *
 * Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).
 */
export const associateManagedNotificationAdditionalChannel: API.OperationMethod<
  AssociateManagedNotificationAdditionalChannelRequest,
  AssociateManagedNotificationAdditionalChannelResponse,
  AssociateManagedNotificationAdditionalChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<AssociateManagedNotificationAdditionalChannelRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<AssociateManagedNotificationAdditionalChannelResponse>,
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
  operationName: "AssociateManagedNotificationAdditionalChannel",
}));

export type AssociateOrganizationalUnitError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates an organizational unit with a notification configuration.
 */
export const associateOrganizationalUnit: API.OperationMethod<
  AssociateOrganizationalUnitRequest,
  AssociateOrganizationalUnitResponse,
  AssociateOrganizationalUnitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5, __c0, 5) as any as S.Schema<AssociateOrganizationalUnitRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<AssociateOrganizationalUnitResponse>,
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
  operationName: "AssociateOrganizationalUnit",
}));

export type CreateEventRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an `EventRule` that is associated with a specified `NotificationConfiguration`.
 */
export const createEventRule: API.OperationMethod<
  CreateEventRuleRequest,
  CreateEventRuleResponse,
  CreateEventRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<CreateEventRuleRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<CreateEventRuleResponse>,
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
  operationName: "CreateEventRule",
}));

export type CreateNotificationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new `NotificationConfiguration`.
 */
export const createNotificationConfiguration: API.OperationMethod<
  CreateNotificationConfigurationRequest,
  CreateNotificationConfigurationResponse,
  CreateNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<CreateNotificationConfigurationRequest>,
  output: __S(13, __c1, 5) as any as S.Schema<CreateNotificationConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNotificationConfiguration",
}));

export type DeleteEventRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an `EventRule`.
 */
export const deleteEventRule: API.OperationMethod<
  DeleteEventRuleRequest,
  DeleteEventRuleResponse,
  DeleteEventRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<DeleteEventRuleRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteEventRuleResponse>,
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
  operationName: "DeleteEventRule",
}));

export type DeleteNotificationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a `NotificationConfiguration`.
 */
export const deleteNotificationConfiguration: API.OperationMethod<
  DeleteNotificationConfigurationRequest,
  DeleteNotificationConfigurationResponse,
  DeleteNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<DeleteNotificationConfigurationRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<DeleteNotificationConfigurationResponse>,
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
  operationName: "DeleteNotificationConfiguration",
}));

export type DeregisterNotificationHubError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deregisters a `NotificationHub` in the specified Region.
 *
 * You can't deregister the last `NotificationHub` in the account. `NotificationEvents` stored in the deregistered `NotificationHub` are no longer visible. Recreating a new `NotificationHub` in the same Region restores access to those `NotificationEvents`.
 */
export const deregisterNotificationHub: API.OperationMethod<
  DeregisterNotificationHubRequest,
  DeregisterNotificationHubResponse,
  DeregisterNotificationHubError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<DeregisterNotificationHubRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<DeregisterNotificationHubResponse>,
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
  operationName: "DeregisterNotificationHub",
}));

export type DisableNotificationsAccessForOrganizationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables service trust between User Notifications and Amazon Web Services Organizations.
 */
export const disableNotificationsAccessForOrganization: API.OperationMethod<
  DisableNotificationsAccessForOrganizationRequest,
  DisableNotificationsAccessForOrganizationResponse,
  DisableNotificationsAccessForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<DisableNotificationsAccessForOrganizationRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<DisableNotificationsAccessForOrganizationResponse>,
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
  operationName: "DisableNotificationsAccessForOrganization",
}));

export type DisassociateChannelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a Channel from a specified `NotificationConfiguration`. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).
 */
export const disassociateChannel: API.OperationMethod<
  DisassociateChannelRequest,
  DisassociateChannelResponse,
  DisassociateChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20, __c2, 4) as any as S.Schema<DisassociateChannelRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisassociateChannelResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateChannel",
}));

export type DisassociateManagedNotificationAccountContactError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates an Account Contact with a particular `ManagedNotificationConfiguration`.
 */
export const disassociateManagedNotificationAccountContact: API.OperationMethod<
  DisassociateManagedNotificationAccountContactRequest,
  DisassociateManagedNotificationAccountContactResponse,
  DisassociateManagedNotificationAccountContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<DisassociateManagedNotificationAccountContactRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<DisassociateManagedNotificationAccountContactResponse>,
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
  operationName: "DisassociateManagedNotificationAccountContact",
}));

export type DisassociateManagedNotificationAdditionalChannelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates an additional Channel from a particular `ManagedNotificationConfiguration`.
 *
 * Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).
 */
export const disassociateManagedNotificationAdditionalChannel: API.OperationMethod<
  DisassociateManagedNotificationAdditionalChannelRequest,
  DisassociateManagedNotificationAdditionalChannelResponse,
  DisassociateManagedNotificationAdditionalChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(
    22,
    __c2,
    6,
  ) as any as S.Schema<DisassociateManagedNotificationAdditionalChannelRequest>,
  output: __S(
    23,
    __c2,
    7,
  ) as any as S.Schema<DisassociateManagedNotificationAdditionalChannelResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateManagedNotificationAdditionalChannel",
}));

export type DisassociateOrganizationalUnitError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the association between an organizational unit and a notification configuration.
 */
export const disassociateOrganizationalUnit: API.OperationMethod<
  DisassociateOrganizationalUnitRequest,
  DisassociateOrganizationalUnitResponse,
  DisassociateOrganizationalUnitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<DisassociateOrganizationalUnitRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<DisassociateOrganizationalUnitResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateOrganizationalUnit",
}));

export type EnableNotificationsAccessForOrganizationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables service trust between User Notifications and Amazon Web Services Organizations.
 */
export const enableNotificationsAccessForOrganization: API.OperationMethod<
  EnableNotificationsAccessForOrganizationRequest,
  EnableNotificationsAccessForOrganizationResponse,
  EnableNotificationsAccessForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<EnableNotificationsAccessForOrganizationRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<EnableNotificationsAccessForOrganizationResponse>,
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
  operationName: "EnableNotificationsAccessForOrganization",
}));

export type GetEventRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a specified `EventRule`.
 */
export const getEventRule: API.OperationMethod<
  GetEventRuleRequest,
  GetEventRuleResponse,
  GetEventRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<GetEventRuleRequest>,
  output: __S(27, __c3, 3) as any as S.Schema<GetEventRuleResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEventRule",
}));

export type GetManagedNotificationChildEventError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the child event of a specific given `ManagedNotificationEvent`.
 */
export const getManagedNotificationChildEvent: API.OperationMethod<
  GetManagedNotificationChildEventRequest,
  GetManagedNotificationChildEventResponse,
  GetManagedNotificationChildEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<GetManagedNotificationChildEventRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<GetManagedNotificationChildEventResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedNotificationChildEvent",
}));

export type GetManagedNotificationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a specified `ManagedNotificationConfiguration`.
 */
export const getManagedNotificationConfiguration: API.OperationMethod<
  GetManagedNotificationConfigurationRequest,
  GetManagedNotificationConfigurationResponse,
  GetManagedNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<GetManagedNotificationConfigurationRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<GetManagedNotificationConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedNotificationConfiguration",
}));

export type GetManagedNotificationEventError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a specified `ManagedNotificationEvent`.
 */
export const getManagedNotificationEvent: API.OperationMethod<
  GetManagedNotificationEventRequest,
  GetManagedNotificationEventResponse,
  GetManagedNotificationEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42, __c5, 2) as any as S.Schema<GetManagedNotificationEventRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<GetManagedNotificationEventResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedNotificationEvent",
}));

export type GetNotificationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a specified `NotificationConfiguration`.
 */
export const getNotificationConfiguration: API.OperationMethod<
  GetNotificationConfigurationRequest,
  GetNotificationConfigurationResponse,
  GetNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<GetNotificationConfigurationRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<GetNotificationConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotificationConfiguration",
}));

export type GetNotificationEventError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a specified `NotificationEvent`.
 *
 * User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. `GetNotificationEvent` only returns notifications stored in the same Region in which the action is called. User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub. For more information, see Notification hubs in the *Amazon Web Services User Notifications User Guide*.
 */
export const getNotificationEvent: API.OperationMethod<
  GetNotificationEventRequest,
  GetNotificationEventResponse,
  GetNotificationEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<GetNotificationEventRequest>,
  output: __S(59, __c7, 3) as any as S.Schema<GetNotificationEventResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotificationEvent",
}));

export type GetNotificationsAccessForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the AccessStatus of Service Trust Enablement for User Notifications and Amazon Web Services Organizations.
 */
export const getNotificationsAccessForOrganization: API.OperationMethod<
  GetNotificationsAccessForOrganizationRequest,
  GetNotificationsAccessForOrganizationResponse,
  GetNotificationsAccessForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<GetNotificationsAccessForOrganizationRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<GetNotificationsAccessForOrganizationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotificationsAccessForOrganization",
}));

export type ListChannelsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of Channels for a `NotificationConfiguration`.
 */
export const listChannels: API.PaginatedOperationMethod<
  ListChannelsRequest,
  ListChannelsResponse,
  ListChannelsError,
  Credentials | HttpClient.HttpClient,
  ChannelArn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<ListChannelsRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<ListChannelsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "channels",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEventRulesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of `EventRules` according to specified filters, in reverse chronological order (newest first).
 */
export const listEventRules: API.PaginatedOperationMethod<
  ListEventRulesRequest,
  ListEventRulesResponse,
  ListEventRulesError,
  Credentials | HttpClient.HttpClient,
  EventRuleStructure
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<ListEventRulesRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<ListEventRulesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "eventRules",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedNotificationChannelAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of Account contacts and Channels associated with a `ManagedNotificationConfiguration`, in paginated format.
 */
export const listManagedNotificationChannelAssociations: API.PaginatedOperationMethod<
  ListManagedNotificationChannelAssociationsRequest,
  ListManagedNotificationChannelAssociationsResponse,
  ListManagedNotificationChannelAssociationsError,
  Credentials | HttpClient.HttpClient,
  ManagedNotificationChannelAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<ListManagedNotificationChannelAssociationsRequest>,
  output: __S(71, __c8, 7) as any as S.Schema<ListManagedNotificationChannelAssociationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedNotificationChannelAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "channelAssociations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedNotificationChildEventsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of `ManagedNotificationChildEvents` for a specified aggregate `ManagedNotificationEvent`, ordered by creation time in reverse chronological order (newest first).
 */
export const listManagedNotificationChildEvents: API.PaginatedOperationMethod<
  ListManagedNotificationChildEventsRequest,
  ListManagedNotificationChildEventsResponse,
  ListManagedNotificationChildEventsError,
  Credentials | HttpClient.HttpClient,
  ManagedNotificationChildEventOverview
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<ListManagedNotificationChildEventsRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<ListManagedNotificationChildEventsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedNotificationChildEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "managedNotificationChildEvents",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedNotificationConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of Managed Notification Configurations according to specified filters, ordered by creation time in reverse chronological order (newest first).
 */
export const listManagedNotificationConfigurations: API.PaginatedOperationMethod<
  ListManagedNotificationConfigurationsRequest,
  ListManagedNotificationConfigurationsResponse,
  ListManagedNotificationConfigurationsError,
  Credentials | HttpClient.HttpClient,
  ManagedNotificationConfigurationStructure
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<ListManagedNotificationConfigurationsRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<ListManagedNotificationConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedNotificationConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "managedNotificationConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedNotificationEventsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of Managed Notification Events according to specified filters, ordered by creation time in reverse chronological order (newest first).
 */
export const listManagedNotificationEvents: API.PaginatedOperationMethod<
  ListManagedNotificationEventsRequest,
  ListManagedNotificationEventsResponse,
  ListManagedNotificationEventsError,
  Credentials | HttpClient.HttpClient,
  ManagedNotificationEventOverview
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<ListManagedNotificationEventsRequest>,
  output: __S(87, __c10, 7) as any as S.Schema<ListManagedNotificationEventsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedNotificationEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "managedNotificationEvents",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMemberAccountsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of member accounts associated with a notification configuration.
 */
export const listMemberAccounts: API.PaginatedOperationMethod<
  ListMemberAccountsRequest,
  ListMemberAccountsResponse,
  ListMemberAccountsError,
  Credentials | HttpClient.HttpClient,
  MemberAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(88, __c11, 0) as any as S.Schema<ListMemberAccountsRequest>,
  output: __S(91, __c11, 3) as any as S.Schema<ListMemberAccountsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMemberAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "memberAccounts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNotificationConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of abbreviated `NotificationConfigurations` according to specified filters, in reverse chronological order (newest first).
 */
export const listNotificationConfigurations: API.PaginatedOperationMethod<
  ListNotificationConfigurationsRequest,
  ListNotificationConfigurationsResponse,
  ListNotificationConfigurationsError,
  Credentials | HttpClient.HttpClient,
  NotificationConfigurationStructure
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(92, __c11, 4) as any as S.Schema<ListNotificationConfigurationsRequest>,
  output: __S(94, __c11, 6) as any as S.Schema<ListNotificationConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotificationConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "notificationConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNotificationEventsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of `NotificationEvents` according to specified filters, in reverse chronological order (newest first).
 *
 * User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. ListNotificationEvents only returns notifications stored in the same Region in which the action is called. User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub. For more information, see Notification hubs in the *Amazon Web Services User Notifications User Guide*.
 */
export const listNotificationEvents: API.PaginatedOperationMethod<
  ListNotificationEventsRequest,
  ListNotificationEventsResponse,
  ListNotificationEventsError,
  Credentials | HttpClient.HttpClient,
  NotificationEventOverview
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<ListNotificationEventsRequest>,
  output: __S(99, __c12, 3) as any as S.Schema<ListNotificationEventsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotificationEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "notificationEvents",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNotificationHubsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of `NotificationHubs`.
 */
export const listNotificationHubs: API.PaginatedOperationMethod<
  ListNotificationHubsRequest,
  ListNotificationHubsResponse,
  ListNotificationHubsError,
  Credentials | HttpClient.HttpClient,
  NotificationHubOverview
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<ListNotificationHubsRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<ListNotificationHubsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotificationHubs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "notificationHubs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListOrganizationalUnitsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of organizational units associated with a notification configuration.
 */
export const listOrganizationalUnits: API.PaginatedOperationMethod<
  ListOrganizationalUnitsRequest,
  ListOrganizationalUnitsResponse,
  ListOrganizationalUnitsError,
  Credentials | HttpClient.HttpClient,
  OrganizationalUnitId
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(104, __c13, 0) as any as S.Schema<ListOrganizationalUnitsRequest>,
  output: __S(105, __c13, 1) as any as S.Schema<ListOrganizationalUnitsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOrganizationalUnits",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "organizationalUnits",
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
 * Returns a list of tags for a specified Amazon Resource Name (ARN).
 *
 * For more information, see Tagging your Amazon Web Services resources in the *Tagging Amazon Web Services Resources User Guide*.
 *
 * This is only supported for `NotificationConfigurations`.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(107, __c13, 3) as any as S.Schema<ListTagsForResourceResponse>,
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

export type RegisterNotificationHubError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Registers a `NotificationHub` in the specified Region.
 *
 * There is a maximum of one `NotificationHub` per Region. You can have a maximum of 3 `NotificationHub` resources at a time.
 */
export const registerNotificationHub: API.OperationMethod<
  RegisterNotificationHubRequest,
  RegisterNotificationHubResponse,
  RegisterNotificationHubError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108, __c13, 4) as any as S.Schema<RegisterNotificationHubRequest>,
  output: __S(109, __c13, 5) as any as S.Schema<RegisterNotificationHubResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterNotificationHub",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tags the resource with a tag key and value.
 *
 * For more information, see Tagging your Amazon Web Services resources in the *Tagging Amazon Web Services Resources User Guide*.
 *
 * This is only supported for `NotificationConfigurations`.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<TagResourceRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Untags a resource with a specified Amazon Resource Name (ARN).
 *
 * For more information, see Tagging your Amazon Web Services resources in the *Tagging Amazon Web Services Resources User Guide*.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<UntagResourceRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateEventRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing `EventRule`.
 */
export const updateEventRule: API.OperationMethod<
  UpdateEventRuleRequest,
  UpdateEventRuleResponse,
  UpdateEventRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112, __c14, 0) as any as S.Schema<UpdateEventRuleRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<UpdateEventRuleResponse>,
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
  operationName: "UpdateEventRule",
}));

export type UpdateManagedNotificationChannelAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the `isSensitiveEventsSubscribed` property of a particular ManagedNotification channel association.
 */
export const updateManagedNotificationChannelAssociation: API.OperationMethod<
  UpdateManagedNotificationChannelAssociationRequest,
  UpdateManagedNotificationChannelAssociationResponse,
  UpdateManagedNotificationChannelAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113, __c14, 1) as any as S.Schema<UpdateManagedNotificationChannelAssociationRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<UpdateManagedNotificationChannelAssociationResponse>,
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
  operationName: "UpdateManagedNotificationChannelAssociation",
}));

export type UpdateNotificationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a `NotificationConfiguration`.
 */
export const updateNotificationConfiguration: API.OperationMethod<
  UpdateNotificationConfigurationRequest,
  UpdateNotificationConfigurationResponse,
  UpdateNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<UpdateNotificationConfigurationRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<UpdateNotificationConfigurationResponse>,
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
  operationName: "UpdateNotificationConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          notificationConfigurationArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/channels/associate/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateChannelRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateChannelResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          contactIdentifier: S.String.pipe(T.HttpLabel("contactIdentifier")),
          managedNotificationConfigurationArn: S.String,
          isSensitiveEventsSubscribed: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/contacts/associate-managed-notification/{contactIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateManagedNotificationAccountContactRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateManagedNotificationAccountContactResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.String.pipe(T.HttpLabel("channelArn")),
          managedNotificationConfigurationArn: S.String,
          isSensitiveEventsSubscribed: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/channels/associate-managed-notification/{channelArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateManagedNotificationAdditionalChannelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          organizationalUnitId: S.String.pipe(T.HttpLabel("organizationalUnitId")),
          notificationConfigurationArn: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/organizational-units/associate/{organizationalUnitId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateOrganizationalUnitRequest",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          notificationConfigurationArn: S.String,
          source: S.String,
          eventType: S.String,
          eventPattern: S.optional(S.String),
          regions: __S(6, __c0, 6),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/event-rules" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateEventRuleRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ status: S.String, reason: S.String })).annotate({
        identifier: "EventRuleStatusSummary",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(8, __c1, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          notificationConfigurationArn: S.String,
          statusSummaryByRegion: __S(9, __c1, 1),
        }),
      ).annotate({ identifier: "CreateEventRuleResponse" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.String,
          aggregationDuration: S.optional(S.String),
          tags: S.optional(__S(11, __c1, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/notification-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateNotificationConfigurationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ arn: S.String, status: S.String })).annotate({
        identifier: "CreateNotificationConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/event-rules/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEventRuleRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/notification-configurations/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteNotificationConfigurationRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          notificationHubRegion: S.String.pipe(T.HttpLabel("notificationHubRegion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/notification-hubs/{notificationHubRegion}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterNotificationHubRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ status: S.String, reason: S.String })).annotate({
        identifier: "NotificationHubStatusSummary",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ notificationHubRegion: S.String, statusSummary: __S(17, __c2, 1) }),
      ).annotate({
        identifier: "DeregisterNotificationHubResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/organization/access" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisableNotificationsAccessForOrganizationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          notificationConfigurationArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/channels/disassociate/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateChannelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          contactIdentifier: S.String.pipe(T.HttpLabel("contactIdentifier")),
          managedNotificationConfigurationArn: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/contacts/disassociate-managed-notification/{contactIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateManagedNotificationAccountContactRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.String.pipe(T.HttpLabel("channelArn")),
          managedNotificationConfigurationArn: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/channels/disassociate-managed-notification/{channelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateManagedNotificationAdditionalChannelRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DisassociateManagedNotificationAdditionalChannelResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          organizationalUnitId: S.String.pipe(T.HttpLabel("organizationalUnitId")),
          notificationConfigurationArn: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/organizational-units/disassociate/{organizationalUnitId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateOrganizationalUnitRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/access" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "EnableNotificationsAccessForOrganizationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/event-rules/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetEventRuleRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          notificationConfigurationArn: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          source: S.String,
          eventType: S.String,
          eventPattern: S.String,
          regions: __S(6, __c0, 6),
          managedRules: __S(6, __c0, 6),
          statusSummaryByRegion: __S(9, __c1, 1),
        }),
      ).annotate({ identifier: "GetEventRuleResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          locale: S.optional(S.String).pipe(T.HttpQuery("locale")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-notification-child-events/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedNotificationChildEventRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ name: S.String, value: S.String })).annotate({
        identifier: "Dimension",
      });
    case 6:
      return S.Array(__S(29, __c3, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          headline: S.optional(S.String),
          paragraphSummary: S.optional(S.String),
          completeDescription: S.optional(S.String),
          markupDescription: S.optional(S.String),
          dimensions: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({ identifier: "MessageComponents" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          displayText: S.optional(S.String),
          textByLocale: S.optional(__S(32, __c4, 0)),
          url: S.optional(S.String),
        }),
      ).annotate({ identifier: "TextPartValue" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(33, __c4, 1).pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, value: S.String })).annotate({
        identifier: "SummarizationDimensionDetail",
      });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ summarizationDimensions: S.optional(__S(36, __c4, 4)) }),
      ).annotate({ identifier: "AggregationDetail" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          schemaVersion: S.String,
          id: S.String,
          messageComponents: __S(31, __c3, 7),
          sourceEventDetailUrl: S.optional(S.String),
          sourceEventDetailUrlDisplayText: S.optional(S.String),
          notificationType: S.String,
          eventStatus: S.optional(S.String),
          aggregateManagedNotificationEventArn: S.String,
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          textParts: __S(34, __c4, 2),
          organizationalUnitId: S.optional(S.String),
          aggregationDetail: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({
        identifier: "ManagedNotificationChildEvent",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          managedNotificationConfigurationArn: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          content: __S(38, __c4, 6),
        }),
      ).annotate({
        identifier: "GetManagedNotificationChildEventResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-notification-configurations/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedNotificationConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          description: S.String,
          category: S.String,
          subCategory: S.String,
        }),
      ).annotate({
        identifier: "GetManagedNotificationConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          locale: S.optional(S.String).pipe(T.HttpQuery("locale")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-notification-events/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedNotificationEventRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          count: S.Number,
          sampleValues: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({
        identifier: "SummarizationDimensionOverview",
      });
    case 4:
      return S.Array(__S(43, __c5, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventCount: S.Number,
          aggregatedBy: __S(30, __c3, 6),
          aggregatedAccounts: __S(43, __c5, 3),
          aggregatedRegions: __S(43, __c5, 3),
          aggregatedOrganizationalUnits: S.optional(__S(43, __c5, 3)),
          additionalSummarizationDimensions: S.optional(__S(44, __c5, 4)),
        }),
      ).annotate({ identifier: "AggregationSummary" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          displayName: S.String,
          attachmentDownloadUrl: S.optional(SensitiveString),
          contentType: S.String,
        }),
      ).annotate({
        identifier: "NotificationEventAttachment",
      });
    case 7:
      return S.Array(__S(46, __c5, 6));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          schemaVersion: S.String,
          id: S.String,
          messageComponents: __S(31, __c3, 7),
          sourceEventDetailUrl: S.optional(S.String),
          sourceEventDetailUrlDisplayText: S.optional(S.String),
          notificationType: S.String,
          eventStatus: S.optional(S.String),
          aggregationEventType: S.optional(S.String),
          aggregationSummary: S.optional(__S(45, __c5, 5)),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          textParts: __S(34, __c4, 2),
          organizationalUnitId: S.optional(S.String),
          attachments: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({ identifier: "ManagedNotificationEvent" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          managedNotificationConfigurationArn: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          content: __S(48, __c6, 0),
        }),
      ).annotate({
        identifier: "GetManagedNotificationEventResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/notification-configurations/{arn}" }),
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
        S.Struct({
          arn: S.String,
          name: S.String,
          description: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          aggregationDuration: S.optional(S.String),
          subtype: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetNotificationConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          locale: S.optional(S.String).pipe(T.HttpQuery("locale")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/notification-events/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetNotificationEventRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          detailUrl: S.optional(S.String),
          tags: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({ identifier: "Resource" });
    case 6:
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          eventTypeVersion: S.String,
          sourceEventId: S.String,
          eventOriginRegion: S.optional(S.String),
          relatedAccount: S.String,
          source: S.String,
          eventOccurrenceTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          eventType: S.String,
          relatedResources: __S(54, __c6, 6),
        }),
      ).annotate({ identifier: "SourceEventMetadata" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ mediaId: S.String, type: S.String, url: S.String, caption: S.String }),
      ).annotate({ identifier: "MediaElement" });
    case 1:
      return S.Array(__S(56, __c7, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          schemaVersion: S.String,
          id: S.String,
          sourceEventMetadata: __S(55, __c6, 7),
          messageComponents: __S(31, __c3, 7),
          sourceEventDetailUrl: S.optional(S.String),
          sourceEventDetailUrlDisplayText: S.optional(S.String),
          notificationType: S.String,
          eventStatus: S.optional(S.String),
          aggregationEventType: S.optional(S.String),
          aggregateNotificationEventArn: S.optional(S.String),
          aggregationSummary: S.optional(__S(45, __c5, 5)),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          textParts: __S(34, __c4, 2),
          media: __S(57, __c7, 1),
          organizationalUnitId: S.optional(S.String),
        }),
      ).annotate({ identifier: "NotificationEventSchema" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          notificationConfigurationArn: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          content: __S(58, __c7, 2),
        }),
      ).annotate({
        identifier: "GetNotificationEventResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/organization/access" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetNotificationsAccessForOrganizationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ accessStatus: S.String })).annotate({
        identifier: "NotificationsAccessForOrganization",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ notificationsAccessForOrganization: __S(61, __c7, 5) }),
      ).annotate({
        identifier: "GetNotificationsAccessForOrganizationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          notificationConfigurationArn: S.String.pipe(T.HttpQuery("notificationConfigurationArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/channels" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListChannelsRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), channels: __S(6, __c0, 6) }),
      ).annotate({ identifier: "ListChannelsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          notificationConfigurationArn: S.String.pipe(T.HttpQuery("notificationConfigurationArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/event-rules" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEventRulesRequest" });
    case 2:
      return S.Array(__S(27, __c3, 3));
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), eventRules: __S(66, __c8, 2) }),
      ).annotate({ identifier: "ListEventRulesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          managedNotificationConfigurationArn: S.String.pipe(
            T.HttpQuery("managedNotificationConfigurationArn"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/channels/list-managed-notification-channel-associations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedNotificationChannelAssociationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          channelIdentifier: S.String,
          channelType: S.String,
          overrideOption: S.optional(S.String),
          isSensitiveEventsSubscribed: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ManagedNotificationChannelAssociationSummary",
      });
    case 6:
      return S.Array(__S(69, __c8, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          channelAssociations: __S(70, __c8, 6),
        }),
      ).annotate({
        identifier: "ListManagedNotificationChannelAssociationsResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          aggregateManagedNotificationEventArn: S.String.pipe(
            T.HttpLabel("aggregateManagedNotificationEventArn"),
          ),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("startTime"),
          ),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("endTime"),
          ),
          locale: S.optional(S.String).pipe(T.HttpQuery("locale")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          relatedAccount: S.optional(S.String).pipe(T.HttpQuery("relatedAccount")),
          organizationalUnitId: S.optional(S.String).pipe(T.HttpQuery("organizationalUnitId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/list-managed-notification-child-events/{aggregateManagedNotificationEventArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedNotificationChildEventsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          eventOriginRegion: S.optional(S.String),
          source: S.String,
          eventType: S.String,
        }),
      ).annotate({
        identifier: "ManagedSourceEventMetadataSummary",
      });
    case 2:
      return S.suspend(() => S.Struct({ headline: S.String })).annotate({
        identifier: "MessageComponentsSummary",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          schemaVersion: S.String,
          sourceEventMetadata: __S(73, __c9, 1),
          messageComponents: __S(74, __c9, 2),
          aggregationDetail: __S(37, __c4, 5),
          eventStatus: S.String,
          notificationType: S.String,
        }),
      ).annotate({
        identifier: "ManagedNotificationChildEventSummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          managedNotificationConfigurationArn: S.String,
          relatedAccount: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          childEvent: __S(75, __c9, 3),
          aggregateManagedNotificationEventArn: S.String,
          organizationalUnitId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ManagedNotificationChildEventOverview",
      });
    case 5:
      return S.Array(__S(76, __c9, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          managedNotificationChildEvents: __S(77, __c9, 5),
        }),
      ).annotate({
        identifier: "ListManagedNotificationChildEventsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          channelIdentifier: S.optional(S.String).pipe(T.HttpQuery("channelIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-notification-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedNotificationConfigurationsRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String, name: S.String, description: S.String }),
      ).annotate({
        identifier: "ManagedNotificationConfigurationStructure",
      });
    case 1:
      return S.Array(__S(80, __c10, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          managedNotificationConfigurations: __S(81, __c10, 1),
        }),
      ).annotate({
        identifier: "ListManagedNotificationConfigurationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("startTime"),
          ),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("endTime"),
          ),
          locale: S.optional(S.String).pipe(T.HttpQuery("locale")),
          source: S.optional(S.String).pipe(T.HttpQuery("source")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          organizationalUnitId: S.optional(S.String).pipe(T.HttpQuery("organizationalUnitId")),
          relatedAccount: S.optional(S.String).pipe(T.HttpQuery("relatedAccount")),
          includeSensitiveEvents: S.optional(S.Boolean).pipe(T.HttpQuery("includeSensitiveEvents")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-notification-events" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedNotificationEventsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          schemaVersion: S.String,
          sourceEventMetadata: __S(73, __c9, 1),
          messageComponents: __S(74, __c9, 2),
          eventStatus: S.String,
          notificationType: S.String,
        }),
      ).annotate({
        identifier: "ManagedNotificationEventSummary",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          managedNotificationConfigurationArn: S.String,
          relatedAccount: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          notificationEvent: __S(84, __c10, 4),
          aggregationEventType: S.optional(S.String),
          organizationalUnitId: S.optional(S.String),
          aggregationSummary: S.optional(__S(45, __c5, 5)),
          aggregatedNotificationRegions: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({
        identifier: "ManagedNotificationEventOverview",
      });
    case 6:
      return S.Array(__S(85, __c10, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          managedNotificationEvents: __S(86, __c10, 6),
        }),
      ).annotate({
        identifier: "ListManagedNotificationEventsResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          notificationConfigurationArn: S.String.pipe(T.HttpQuery("notificationConfigurationArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          memberAccount: S.optional(S.String).pipe(T.HttpQuery("memberAccount")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          organizationalUnitId: S.optional(S.String).pipe(T.HttpQuery("organizationalUnitId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/list-member-accounts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMemberAccountsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          notificationConfigurationArn: S.optional(S.String),
          accountId: S.String,
          status: S.String,
          statusReason: S.String,
          organizationalUnitId: S.String,
        }),
      ).annotate({ identifier: "MemberAccount" });
    case 2:
      return S.Array(__S(89, __c11, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ memberAccounts: __S(90, __c11, 2), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListMemberAccountsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          eventRuleSource: S.optional(S.String).pipe(T.HttpQuery("eventRuleSource")),
          channelArn: S.optional(S.String).pipe(T.HttpQuery("channelArn")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          subtype: S.optional(S.String).pipe(T.HttpQuery("subtype")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/notification-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNotificationConfigurationsRequest",
      });
    case 5:
      return S.Array(__S(51, __c6, 3));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          notificationConfigurations: __S(93, __c11, 5),
        }),
      ).annotate({
        identifier: "ListNotificationConfigurationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("startTime"),
          ),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("endTime"),
          ),
          locale: S.optional(S.String).pipe(T.HttpQuery("locale")),
          source: S.optional(S.String).pipe(T.HttpQuery("source")),
          includeChildEvents: S.optional(S.Boolean).pipe(T.HttpQuery("includeChildEvents")),
          aggregateNotificationEventArn: S.optional(S.String).pipe(
            T.HttpQuery("aggregateNotificationEventArn"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          organizationalUnitId: S.optional(S.String).pipe(T.HttpQuery("organizationalUnitId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/notification-events" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNotificationEventsRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          schemaVersion: S.String,
          sourceEventMetadata: __S(73, __c9, 1),
          messageComponents: __S(74, __c9, 2),
          eventStatus: S.String,
          notificationType: S.String,
        }),
      ).annotate({ identifier: "NotificationEventSummary" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          notificationConfigurationArn: S.String,
          relatedAccount: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          notificationEvent: __S(96, __c12, 0),
          aggregationEventType: S.optional(S.String),
          aggregateNotificationEventArn: S.optional(S.String),
          aggregationSummary: S.optional(__S(45, __c5, 5)),
          organizationalUnitId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NotificationEventOverview",
      });
    case 2:
      return S.Array(__S(97, __c12, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), notificationEvents: __S(98, __c12, 2) }),
      ).annotate({
        identifier: "ListNotificationEventsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/notification-hubs" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListNotificationHubsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          notificationHubRegion: S.String,
          statusSummary: __S(17, __c2, 1),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastActivationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "NotificationHubOverview" });
    case 6:
      return S.Array(__S(101, __c12, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ notificationHubs: __S(102, __c12, 6), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListNotificationHubsResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          notificationConfigurationArn: S.String.pipe(T.HttpQuery("notificationConfigurationArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/organizational-units" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOrganizationalUnitsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ organizationalUnits: __S(6, __c0, 6), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListOrganizationalUnitsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(11, __c1, 3)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ notificationHubRegion: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/notification-hubs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterNotificationHubRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          notificationHubRegion: S.String,
          statusSummary: __S(17, __c2, 1),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastActivationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "RegisterNotificationHubResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")), tags: __S(11, __c1, 3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tags/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          tagKeys: __S(6, __c0, 6).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/tags/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          eventPattern: S.optional(S.String),
          regions: S.optional(__S(6, __c0, 6)),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/event-rules/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateEventRuleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          managedNotificationConfigurationArn: S.String,
          channelIdentifier: S.String,
          isSensitiveEventsSubscribed: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/channels/update-managed-notification-channel-association",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateManagedNotificationChannelAssociationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          aggregationDuration: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/notification-configurations/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNotificationConfigurationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "UpdateNotificationConfigurationResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 5:
      return S.Array(__S(116, __c14, 4));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
