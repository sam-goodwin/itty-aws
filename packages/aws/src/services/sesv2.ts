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
  sdkId: "SESv2",
  serviceShapeName: "SimpleEmailService_v2",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ses" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-09-27");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint, EndpointId } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = () => ({
    authSchemes: [{ name: "sigv4a", signingName: "ses", signingRegionSet: ["*"] }],
  });
  {
    const PartitionResult = _.partition(Region);
    if (
      EndpointId != null &&
      Region != null &&
      PartitionResult != null &&
      PartitionResult !== false
    ) {
      if (_.isValidHostLabel(EndpointId, true)) {
        if (UseFIPS === false) {
          if (Endpoint != null) {
            return e(Endpoint, _p0(), {});
          }
          if (_.getAttr(PartitionResult, "name") === "aws-us-gov" && UseDualStack === true) {
            if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
              return e(
                `https://${EndpointId}.endpoints.email.us-gov.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
                _p0(),
                {},
              );
            }
            return err("DualStack is enabled but this partition does not support DualStack");
          }
          if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
            return e(
              `https://${EndpointId}.endpoints.email.us-gov.${_.getAttr(PartitionResult, "dnsSuffix")}`,
              _p0(),
              {},
            );
          }
          if (!(_.getAttr(PartitionResult, "name") === "aws-us-gov") && UseDualStack === true) {
            if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
              return e(
                `https://${EndpointId}.endpoints.email.global.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
                _p0(),
                {},
              );
            }
            return err("DualStack is enabled but this partition does not support DualStack");
          }
          if (!(_.getAttr(PartitionResult, "name") === "aws-us-gov")) {
            return e(
              `https://${EndpointId}.endpoints.email.${_.getAttr(PartitionResult, "dnsSuffix")}`,
              _p0(),
              {},
            );
          }
        }
        return err("Invalid Configuration: FIPS is not supported with multi-region endpoints");
      }
      return err("EndpointId must be a valid host label");
    }
  }
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
              `https://email-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://email-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://email.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://email.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccountSuspendedException
  extends /*@__PURE__*/ S.TaggedError<AccountSuspendedException>()(
    "AccountSuspendedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class AlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<AlreadyExistsException>()(
    "AlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServiceErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServiceErrorException>()(
    "InternalServiceErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()(
    "InvalidNextTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class MailFromDomainNotVerifiedException
  extends /*@__PURE__*/ S.TaggedError<MailFromDomainNotVerifiedException>()(
    "MailFromDomainNotVerifiedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class MessageRejected
  extends /*@__PURE__*/ S.TaggedError<MessageRejected>()(
    "MessageRejected",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class SendingPausedException
  extends /*@__PURE__*/ S.TaggedError<SendingPausedException>()(
    "SendingPausedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export type Identity = string;
export type EmailAddress = string;
export type CertificateArn = string;
export interface AssociateEmailIdentityCertificateRequest {
  EmailIdentity: string;
  FromAddress?: string;
  CertificateArn: string;
}
export interface AssociateEmailIdentityCertificateResponse {}
export type QueryIdentifier = string;
export type MetricNamespace = "VDM" | (string & {});
export type Metric =
  | "SEND"
  | "COMPLAINT"
  | "PERMANENT_BOUNCE"
  | "TRANSIENT_BOUNCE"
  | "OPEN"
  | "CLICK"
  | "DELIVERY"
  | "DELIVERY_OPEN"
  | "DELIVERY_CLICK"
  | "DELIVERY_COMPLAINT"
  | (string & {});
export type MetricDimensionName =
  | "EMAIL_IDENTITY"
  | "CONFIGURATION_SET"
  | "ISP"
  | "TENANT_NAME"
  | (string & {});
export type MetricDimensionValue = string;
export type Dimensions = { [key in MetricDimensionName]?: string };
export interface BatchGetMetricDataQuery {
  Id: string;
  Namespace: MetricNamespace;
  Metric: Metric;
  Dimensions?: { [key: string]: string | undefined };
  StartDate: Date;
  EndDate: Date;
}
export type BatchGetMetricDataQueries = BatchGetMetricDataQuery[];
export interface BatchGetMetricDataRequest {
  Queries: BatchGetMetricDataQuery[];
}
export type TimestampList = Date[];
export type Counter = number;
export type MetricValueList = number[];
export interface MetricDataResult {
  Id?: string;
  Timestamps?: Date[];
  Values?: number[];
}
export type MetricDataResultList = MetricDataResult[];
export type QueryErrorCode = "INTERNAL_FAILURE" | "ACCESS_DENIED" | (string & {});
export type QueryErrorMessage = string;
export interface MetricDataError {
  Id?: string;
  Code?: QueryErrorCode;
  Message?: string;
}
export type MetricDataErrorList = MetricDataError[];
export interface BatchGetMetricDataResponse {
  Results?: MetricDataResult[];
  Errors?: MetricDataError[];
}
export type JobId = string;
export interface CancelExportJobRequest {
  JobId: string;
}
export interface CancelExportJobResponse {}
export type ConfigurationSetName = string;
export type CustomRedirectDomain = string;
export type HttpsPolicy = "REQUIRE" | "REQUIRE_OPEN_ONLY" | "OPTIONAL" | (string & {});
export interface TrackingOptions {
  CustomRedirectDomain: string;
  HttpsPolicy?: HttpsPolicy;
}
export type TlsPolicy = "REQUIRE" | "OPTIONAL" | (string & {});
export type PoolName = string;
export type MaxDeliverySeconds = number;
export interface DeliveryOptions {
  TlsPolicy?: TlsPolicy;
  SendingPoolName?: string;
  MaxDeliverySeconds?: number;
}
export type Enabled = boolean;
export type LastFreshStart = Date;
export interface ReputationOptions {
  ReputationMetricsEnabled?: boolean;
  LastFreshStart?: Date;
}
export interface SendingOptions {
  SendingEnabled?: boolean;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export type SuppressionListReason = "BOUNCE" | "COMPLAINT" | (string & {});
export type SuppressionListReasons = SuppressionListReason[];
export type SuppressionListScope = "ACCOUNT" | "TENANT" | (string & {});
export type FeatureStatus = "ENABLED" | "DISABLED" | (string & {});
export type SuppressionConfidenceVerdictThreshold = "MEDIUM" | "HIGH" | "MANAGED" | (string & {});
export interface SuppressionConfidenceThreshold {
  ConfidenceVerdictThreshold: SuppressionConfidenceVerdictThreshold;
}
export interface SuppressionConditionThreshold {
  ConditionThresholdEnabled: FeatureStatus;
  OverallConfidenceThreshold?: SuppressionConfidenceThreshold;
}
export interface SuppressionValidationOptions {
  ConditionThreshold: SuppressionConditionThreshold;
}
export interface SuppressionOptions {
  SuppressedReasons?: SuppressionListReason[];
  SuppressionScope?: SuppressionListScope;
  ValidationOptions?: SuppressionValidationOptions;
}
export interface DashboardOptions {
  EngagementMetrics?: FeatureStatus;
}
export interface GuardianOptions {
  OptimizedSharedDelivery?: FeatureStatus;
}
export interface VdmOptions {
  DashboardOptions?: DashboardOptions;
  GuardianOptions?: GuardianOptions;
}
export type ArchiveArn = string;
export interface ArchivingOptions {
  ArchiveArn?: string;
}
export interface DefaultSigningScheme {}
export type SignatureFormat = "DETACHED" | (string & {});
export interface SmimeSigningScheme {
  SignatureFormat?: SignatureFormat;
}
export type SigningScheme =
  | { DefaultScheme: DefaultSigningScheme; SmimeScheme?: never }
  | { DefaultScheme?: never; SmimeScheme: SmimeSigningScheme };
export interface MessageSecurityOptions {
  SigningScheme?: SigningScheme;
}
export interface CreateConfigurationSetRequest {
  ConfigurationSetName: string;
  TrackingOptions?: TrackingOptions;
  DeliveryOptions?: DeliveryOptions;
  ReputationOptions?: ReputationOptions;
  SendingOptions?: SendingOptions;
  Tags?: Tag[];
  SuppressionOptions?: SuppressionOptions;
  VdmOptions?: VdmOptions;
  ArchivingOptions?: ArchivingOptions;
  MessageSecurityOptions?: MessageSecurityOptions;
}
export interface CreateConfigurationSetResponse {}
export type EventDestinationName = string;
export type EventType =
  | "SEND"
  | "REJECT"
  | "BOUNCE"
  | "COMPLAINT"
  | "DELIVERY"
  | "OPEN"
  | "CLICK"
  | "RENDERING_FAILURE"
  | "DELIVERY_DELAY"
  | "SUBSCRIPTION"
  | (string & {});
export type EventTypes = EventType[];
export type AmazonResourceName = string;
export interface KinesisFirehoseDestination {
  IamRoleArn: string;
  DeliveryStreamArn: string;
}
export type DimensionName = string;
export type DimensionValueSource = "MESSAGE_TAG" | "EMAIL_HEADER" | "LINK_TAG" | (string & {});
export type DefaultDimensionValue = string;
export interface CloudWatchDimensionConfiguration {
  DimensionName: string;
  DimensionValueSource: DimensionValueSource;
  DefaultDimensionValue: string;
}
export type CloudWatchDimensionConfigurations = CloudWatchDimensionConfiguration[];
export interface CloudWatchDestination {
  DimensionConfigurations: CloudWatchDimensionConfiguration[];
}
export interface SnsDestination {
  TopicArn: string;
}
export interface EventBridgeDestination {
  EventBusArn: string;
}
export interface PinpointDestination {
  ApplicationArn?: string;
}
export interface EventDestinationDefinition {
  Enabled?: boolean;
  MatchingEventTypes?: EventType[];
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  CloudWatchDestination?: CloudWatchDestination;
  SnsDestination?: SnsDestination;
  EventBridgeDestination?: EventBridgeDestination;
  PinpointDestination?: PinpointDestination;
}
export interface CreateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  EventDestination: EventDestinationDefinition;
}
export interface CreateConfigurationSetEventDestinationResponse {}
export type ContactListName = string;
export type TopicName = string;
export type SubscriptionStatus = "OPT_IN" | "OPT_OUT" | (string & {});
export interface TopicPreference {
  TopicName: string;
  SubscriptionStatus: SubscriptionStatus;
}
export type TopicPreferenceList = TopicPreference[];
export type UnsubscribeAll = boolean;
export type AttributesData = string;
export interface CreateContactRequest {
  ContactListName: string;
  EmailAddress: string;
  TopicPreferences?: TopicPreference[];
  UnsubscribeAll?: boolean;
  AttributesData?: string;
}
export interface CreateContactResponse {}
export type DisplayName = string;
export type Description = string;
export interface Topic {
  TopicName: string;
  DisplayName: string;
  Description?: string;
  DefaultSubscriptionStatus: SubscriptionStatus;
}
export type Topics = Topic[];
export interface CreateContactListRequest {
  ContactListName: string;
  Topics?: Topic[];
  Description?: string;
  Tags?: Tag[];
}
export interface CreateContactListResponse {}
export type EmailTemplateName = string;
export type EmailTemplateSubject = string;
export type TemplateContent = string;
export type SuccessRedirectionURL = string;
export type FailureRedirectionURL = string;
export interface CreateCustomVerificationEmailTemplateRequest {
  TemplateName: string;
  FromEmailAddress: string;
  TemplateSubject: string;
  TemplateContent: string;
  Tags?: Tag[];
  SuccessRedirectionURL: string;
  FailureRedirectionURL: string;
}
export interface CreateCustomVerificationEmailTemplateResponse {}
export type ScalingMode = "STANDARD" | "MANAGED" | (string & {});
export interface CreateDedicatedIpPoolRequest {
  PoolName: string;
  Tags?: Tag[];
  ScalingMode?: ScalingMode;
}
export interface CreateDedicatedIpPoolResponse {}
export type ReportName = string;
export type MessageData = string;
export type Charset = string;
export interface Content {
  Data: string;
  Charset?: string;
}
export interface Body {
  Text?: Content;
  Html?: Content;
}
export type MessageHeaderName = string;
export type MessageHeaderValue = string;
export interface MessageHeader {
  Name: string;
  Value: string;
}
export type MessageHeaderList = MessageHeader[];
export type RawAttachmentData = Uint8Array;
export type AttachmentContentDisposition = "ATTACHMENT" | "INLINE" | (string & {});
export type AttachmentFileName = string;
export type AttachmentContentDescription = string;
export type AttachmentContentId = string;
export type AttachmentContentTransferEncoding =
  | "BASE64"
  | "QUOTED_PRINTABLE"
  | "SEVEN_BIT"
  | (string & {});
export type AttachmentContentType = string;
export interface Attachment {
  RawContent: Uint8Array;
  ContentDisposition?: AttachmentContentDisposition;
  FileName: string;
  ContentDescription?: string;
  ContentId?: string;
  ContentTransferEncoding?: AttachmentContentTransferEncoding;
  ContentType?: string;
}
export type AttachmentList = Attachment[];
export interface Message {
  Subject: Content;
  Body: Body;
  Headers?: MessageHeader[];
  Attachments?: Attachment[];
}
export type RawMessageData = Uint8Array;
export interface RawMessage {
  Data: Uint8Array;
}
export type EmailTemplateText = string;
export type EmailTemplateHtml = string;
export interface EmailTemplateContent {
  Subject?: string;
  Text?: string;
  Html?: string;
}
export type EmailTemplateData = string;
export interface Template {
  TemplateName?: string;
  TemplateArn?: string;
  TemplateContent?: EmailTemplateContent;
  TemplateData?: string;
  Headers?: MessageHeader[];
  Attachments?: Attachment[];
}
export interface EmailContent {
  Simple?: Message;
  Raw?: RawMessage;
  Template?: Template;
}
export interface CreateDeliverabilityTestReportRequest {
  ReportName?: string;
  FromEmailAddress: string;
  Content: EmailContent;
  Tags?: Tag[];
}
export type ReportId = string;
export type DeliverabilityTestStatus = "IN_PROGRESS" | "COMPLETED" | (string & {});
export interface CreateDeliverabilityTestReportResponse {
  ReportId: string;
  DeliverabilityTestStatus: DeliverabilityTestStatus;
}
export type Selector = string;
export type PrivateKey = string | redacted.Redacted<string>;
export type DkimSigningKeyLength = "RSA_1024_BIT" | "RSA_2048_BIT" | (string & {});
export type DkimSigningAttributesOrigin =
  | "AWS_SES"
  | "EXTERNAL"
  | "AWS_SES_AF_SOUTH_1"
  | "AWS_SES_EU_NORTH_1"
  | "AWS_SES_AP_SOUTH_1"
  | "AWS_SES_EU_WEST_3"
  | "AWS_SES_EU_WEST_2"
  | "AWS_SES_EU_SOUTH_1"
  | "AWS_SES_EU_WEST_1"
  | "AWS_SES_AP_NORTHEAST_3"
  | "AWS_SES_AP_NORTHEAST_2"
  | "AWS_SES_ME_SOUTH_1"
  | "AWS_SES_AP_NORTHEAST_1"
  | "AWS_SES_IL_CENTRAL_1"
  | "AWS_SES_SA_EAST_1"
  | "AWS_SES_CA_CENTRAL_1"
  | "AWS_SES_AP_SOUTHEAST_1"
  | "AWS_SES_AP_SOUTHEAST_2"
  | "AWS_SES_AP_SOUTHEAST_3"
  | "AWS_SES_EU_CENTRAL_1"
  | "AWS_SES_US_EAST_1"
  | "AWS_SES_US_EAST_2"
  | "AWS_SES_US_WEST_1"
  | "AWS_SES_US_WEST_2"
  | "AWS_SES_ME_CENTRAL_1"
  | "AWS_SES_AP_SOUTH_2"
  | "AWS_SES_EU_CENTRAL_2"
  | "AWS_SES_AP_SOUTHEAST_5"
  | "AWS_SES_CA_WEST_1"
  | "AWS_SES_US_GOV_EAST_1"
  | "AWS_SES_US_GOV_WEST_1"
  | (string & {});
export interface DkimSigningAttributes {
  DomainSigningSelector?: string;
  DomainSigningPrivateKey?: string | redacted.Redacted<string>;
  NextSigningKeyLength?: DkimSigningKeyLength;
  DomainSigningAttributesOrigin?: DkimSigningAttributesOrigin;
}
export interface CreateEmailIdentityRequest {
  EmailIdentity: string;
  Tags?: Tag[];
  DkimSigningAttributes?: DkimSigningAttributes;
  ConfigurationSetName?: string;
}
export type IdentityType = "EMAIL_ADDRESS" | "DOMAIN" | "MANAGED_DOMAIN" | (string & {});
export type DkimStatus =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "TEMPORARY_FAILURE"
  | "NOT_STARTED"
  | (string & {});
export type DnsToken = string;
export type DnsTokenList = string[];
export type HostedZone = string;
export interface DkimAttributes {
  SigningEnabled?: boolean;
  Status?: DkimStatus;
  Tokens?: string[];
  SigningHostedZone?: string;
  SigningAttributesOrigin?: DkimSigningAttributesOrigin;
  NextSigningKeyLength?: DkimSigningKeyLength;
  CurrentSigningKeyLength?: DkimSigningKeyLength;
  LastKeyGenerationTimestamp?: Date;
}
export interface CreateEmailIdentityResponse {
  IdentityType?: IdentityType;
  VerifiedForSendingStatus?: boolean;
  DkimAttributes?: DkimAttributes;
}
export type PolicyName = string;
export type Policy = string;
export interface CreateEmailIdentityPolicyRequest {
  EmailIdentity: string;
  PolicyName: string;
  Policy: string;
}
export interface CreateEmailIdentityPolicyResponse {}
export interface CreateEmailTemplateRequest {
  TemplateName: string;
  TemplateContent: EmailTemplateContent;
  Tags?: Tag[];
}
export interface CreateEmailTemplateResponse {}
export type ExportDimensionValue = string[];
export type ExportDimensions = { [key in MetricDimensionName]?: string[] };
export type MetricAggregation = "RATE" | "VOLUME" | (string & {});
export interface ExportMetric {
  Name?: Metric;
  Aggregation?: MetricAggregation;
}
export type ExportMetrics = ExportMetric[];
export interface MetricsDataSource {
  Dimensions: { [key: string]: string[] | undefined };
  Namespace: MetricNamespace;
  Metrics: ExportMetric[];
  StartDate: Date;
  EndDate: Date;
}
export type InsightsEmailAddress = string | redacted.Redacted<string>;
export type EmailAddressFilterList = (string | redacted.Redacted<string>)[];
export type EmailSubject = string | redacted.Redacted<string>;
export type EmailSubjectFilterList = (string | redacted.Redacted<string>)[];
export type Isp = string;
export type IspFilterList = string[];
export type TenantName = string;
export type TenantNameFilterList = string[];
export type DeliveryEventType =
  | "SEND"
  | "DELIVERY"
  | "TRANSIENT_BOUNCE"
  | "PERMANENT_BOUNCE"
  | "UNDETERMINED_BOUNCE"
  | "COMPLAINT"
  | (string & {});
export type LastDeliveryEventList = DeliveryEventType[];
export type EngagementEventType = "OPEN" | "CLICK" | (string & {});
export type LastEngagementEventList = EngagementEventType[];
export interface MessageInsightsFilters {
  FromEmailAddress?: (string | redacted.Redacted<string>)[];
  Destination?: (string | redacted.Redacted<string>)[];
  Subject?: (string | redacted.Redacted<string>)[];
  Isp?: string[];
  TenantName?: string[];
  LastDeliveryEvent?: DeliveryEventType[];
  LastEngagementEvent?: EngagementEventType[];
}
export type MessageInsightsExportMaxResults = number;
export interface MessageInsightsDataSource {
  StartDate: Date;
  EndDate: Date;
  Include?: MessageInsightsFilters;
  Exclude?: MessageInsightsFilters;
  MaxResults?: number;
}
export interface ExportDataSource {
  MetricsDataSource?: MetricsDataSource;
  MessageInsightsDataSource?: MessageInsightsDataSource;
}
export type DataFormat = "CSV" | "JSON" | (string & {});
export type S3Url = string;
export interface ExportDestination {
  DataFormat: DataFormat;
  S3Url?: string;
}
export interface CreateExportJobRequest {
  ExportDataSource: ExportDataSource;
  ExportDestination: ExportDestination;
}
export interface CreateExportJobResponse {
  JobId?: string;
}
export type SuppressionListImportAction = "DELETE" | "PUT" | (string & {});
export interface SuppressionListDestination {
  SuppressionListImportAction: SuppressionListImportAction;
}
export type ContactListImportAction = "DELETE" | "PUT" | (string & {});
export interface ContactListDestination {
  ContactListName: string;
  ContactListImportAction: ContactListImportAction;
}
export interface ImportDestination {
  SuppressionListDestination?: SuppressionListDestination;
  ContactListDestination?: ContactListDestination;
}
export interface ImportDataSource {
  S3Url: string;
  DataFormat: DataFormat;
}
export interface CreateImportJobRequest {
  ImportDestination: ImportDestination;
  ImportDataSource: ImportDataSource;
}
export interface CreateImportJobResponse {
  JobId?: string;
}
export type EndpointName = string;
export type Region = string;
export interface RouteDetails {
  Region: string;
}
export type RoutesDetails = RouteDetails[];
export interface Details {
  RoutesDetails: RouteDetails[];
}
export interface CreateMultiRegionEndpointRequest {
  EndpointName: string;
  Details: Details;
  Tags?: Tag[];
}
export type Status = "CREATING" | "READY" | "FAILED" | "DELETING" | (string & {});
export type EndpointId = string;
export interface CreateMultiRegionEndpointResponse {
  Status?: Status;
  EndpointId?: string;
}
export interface TenantSuppressionAttributes {
  SuppressedReasons?: SuppressionListReason[];
  SuppressionScope?: SuppressionListScope;
}
export interface CreateTenantRequest {
  TenantName: string;
  Tags?: Tag[];
  SuppressionAttributes?: TenantSuppressionAttributes;
}
export type TenantId = string;
export type SendingStatus = "ENABLED" | "REINSTATED" | "DISABLED" | (string & {});
export interface CreateTenantResponse {
  TenantName?: string;
  TenantId?: string;
  TenantArn?: string;
  CreatedTimestamp?: Date;
  Tags?: Tag[];
  SendingStatus?: SendingStatus;
  SuppressionAttributes?: TenantSuppressionAttributes;
}
export interface CreateTenantResourceAssociationRequest {
  TenantName: string;
  ResourceArn: string;
}
export interface CreateTenantResourceAssociationResponse {}
export interface DeleteConfigurationSetRequest {
  ConfigurationSetName: string;
}
export interface DeleteConfigurationSetResponse {}
export interface DeleteConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
}
export interface DeleteConfigurationSetEventDestinationResponse {}
export interface DeleteContactRequest {
  ContactListName: string;
  EmailAddress: string;
}
export interface DeleteContactResponse {}
export interface DeleteContactListRequest {
  ContactListName: string;
}
export interface DeleteContactListResponse {}
export interface DeleteCustomVerificationEmailTemplateRequest {
  TemplateName: string;
}
export interface DeleteCustomVerificationEmailTemplateResponse {}
export interface DeleteDedicatedIpPoolRequest {
  PoolName: string;
}
export interface DeleteDedicatedIpPoolResponse {}
export interface DeleteEmailIdentityRequest {
  EmailIdentity: string;
}
export interface DeleteEmailIdentityResponse {}
export interface DeleteEmailIdentityPolicyRequest {
  EmailIdentity: string;
  PolicyName: string;
}
export interface DeleteEmailIdentityPolicyResponse {}
export interface DeleteEmailTemplateRequest {
  TemplateName: string;
}
export interface DeleteEmailTemplateResponse {}
export interface DeleteMultiRegionEndpointRequest {
  EndpointName: string;
}
export interface DeleteMultiRegionEndpointResponse {
  Status?: Status;
}
export interface DeleteSuppressedDestinationRequest {
  EmailAddress: string;
  TenantName?: string;
}
export interface DeleteSuppressedDestinationResponse {}
export interface DeleteTenantRequest {
  TenantName: string;
}
export interface DeleteTenantResponse {}
export interface DeleteTenantResourceAssociationRequest {
  TenantName: string;
  ResourceArn: string;
}
export interface DeleteTenantResourceAssociationResponse {}
export interface DisassociateEmailIdentityCertificateRequest {
  EmailIdentity: string;
  FromAddress?: string;
}
export interface DisassociateEmailIdentityCertificateResponse {}
export interface GetAccountRequest {}
export type GeneralEnforcementStatus = string;
export type Max24HourSend = number;
export type MaxSendRate = number;
export type SentLast24Hours = number;
export interface SendQuota {
  Max24HourSend?: number;
  MaxSendRate?: number;
  SentLast24Hours?: number;
}
export interface SuppressionValidationAttributes {
  ConditionThreshold: SuppressionConditionThreshold;
}
export interface SuppressionAttributes {
  SuppressedReasons?: SuppressionListReason[];
  ValidationAttributes?: SuppressionValidationAttributes;
}
export type MailType = "MARKETING" | "TRANSACTIONAL" | (string & {});
export type WebsiteURL = string | redacted.Redacted<string>;
export type ContactLanguage = "EN" | "JA" | (string & {});
export type UseCaseDescription = string | redacted.Redacted<string>;
export type AdditionalContactEmailAddress = string | redacted.Redacted<string>;
export type AdditionalContactEmailAddresses = (string | redacted.Redacted<string>)[];
export type ReviewStatus = "PENDING" | "FAILED" | "GRANTED" | "DENIED" | (string & {});
export type CaseId = string;
export interface ReviewDetails {
  Status?: ReviewStatus;
  CaseId?: string;
}
export interface AccountDetails {
  MailType?: MailType;
  WebsiteURL?: string | redacted.Redacted<string>;
  ContactLanguage?: ContactLanguage;
  UseCaseDescription?: string | redacted.Redacted<string>;
  AdditionalContactEmailAddresses?: (string | redacted.Redacted<string>)[];
  ReviewDetails?: ReviewDetails;
}
export interface DashboardAttributes {
  EngagementMetrics?: FeatureStatus;
}
export interface GuardianAttributes {
  OptimizedSharedDelivery?: FeatureStatus;
}
export interface VdmAttributes {
  VdmEnabled: FeatureStatus;
  DashboardAttributes?: DashboardAttributes;
  GuardianAttributes?: GuardianAttributes;
}
export type PricingPlan = "NONE" | "ESSENTIALS" | "PRO" | "ENTERPRISE" | (string & {});
export interface PricingAttributes {
  CurrentPlan?: PricingPlan;
  NextPlan?: PricingPlan;
}
export interface GetAccountResponse {
  DedicatedIpAutoWarmupEnabled?: boolean;
  EnforcementStatus?: string;
  ProductionAccessEnabled?: boolean;
  SendQuota?: SendQuota;
  SendingEnabled?: boolean;
  SuppressionAttributes?: SuppressionAttributes;
  Details?: AccountDetails;
  VdmAttributes?: VdmAttributes;
  PricingAttributes?: PricingAttributes;
}
export type BlacklistItemName = string;
export type BlacklistItemNames = string[];
export interface GetBlacklistReportsRequest {
  BlacklistItemNames: string[];
}
export type RblName = string;
export type BlacklistingDescription = string;
export interface BlacklistEntry {
  RblName?: string;
  ListingTime?: Date;
  Description?: string;
}
export type BlacklistEntries = BlacklistEntry[];
export type BlacklistReport = { [key: string]: BlacklistEntry[] | undefined };
export interface GetBlacklistReportsResponse {
  BlacklistReport: { [key: string]: BlacklistEntry[] | undefined };
}
export interface GetConfigurationSetRequest {
  ConfigurationSetName: string;
}
export interface GetConfigurationSetResponse {
  ConfigurationSetName?: string;
  TrackingOptions?: TrackingOptions;
  DeliveryOptions?: DeliveryOptions;
  ReputationOptions?: ReputationOptions;
  SendingOptions?: SendingOptions;
  Tags?: Tag[];
  SuppressionOptions?: SuppressionOptions;
  VdmOptions?: VdmOptions;
  ArchivingOptions?: ArchivingOptions;
  MessageSecurityOptions?: MessageSecurityOptions;
}
export interface GetConfigurationSetEventDestinationsRequest {
  ConfigurationSetName: string;
}
export interface EventDestination {
  Name: string;
  Enabled?: boolean;
  MatchingEventTypes: EventType[];
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  CloudWatchDestination?: CloudWatchDestination;
  SnsDestination?: SnsDestination;
  EventBridgeDestination?: EventBridgeDestination;
  PinpointDestination?: PinpointDestination;
}
export type EventDestinations = EventDestination[];
export interface GetConfigurationSetEventDestinationsResponse {
  EventDestinations?: EventDestination[];
}
export interface GetContactRequest {
  ContactListName: string;
  EmailAddress: string;
}
export interface GetContactResponse {
  ContactListName?: string;
  EmailAddress?: string;
  TopicPreferences?: TopicPreference[];
  TopicDefaultPreferences?: TopicPreference[];
  UnsubscribeAll?: boolean;
  AttributesData?: string;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
}
export interface GetContactListRequest {
  ContactListName: string;
}
export interface GetContactListResponse {
  ContactListName?: string;
  Topics?: Topic[];
  Description?: string;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  Tags?: Tag[];
}
export interface GetCustomVerificationEmailTemplateRequest {
  TemplateName: string;
}
export interface GetCustomVerificationEmailTemplateResponse {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  TemplateContent?: string;
  Tags?: Tag[];
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
}
export type Ip = string;
export interface GetDedicatedIpRequest {
  Ip: string;
}
export type WarmupStatus = "IN_PROGRESS" | "DONE" | "NOT_APPLICABLE" | (string & {});
export type Percentage100Wrapper = number;
export interface DedicatedIp {
  Ip: string;
  WarmupStatus: WarmupStatus;
  WarmupPercentage: number;
  PoolName?: string;
}
export interface GetDedicatedIpResponse {
  DedicatedIp?: DedicatedIp;
}
export interface GetDedicatedIpPoolRequest {
  PoolName: string;
}
export interface DedicatedIpPool {
  PoolName: string;
  ScalingMode: ScalingMode;
}
export interface GetDedicatedIpPoolResponse {
  DedicatedIpPool?: DedicatedIpPool;
}
export type NextToken = string;
export type MaxItems = number;
export interface GetDedicatedIpsRequest {
  PoolName?: string;
  NextToken?: string;
  PageSize?: number;
}
export type DedicatedIpList = DedicatedIp[];
export interface GetDedicatedIpsResponse {
  DedicatedIps?: DedicatedIp[];
  NextToken?: string;
}
export interface GetDeliverabilityDashboardOptionsRequest {}
export type DeliverabilityDashboardAccountStatus =
  | "ACTIVE"
  | "PENDING_EXPIRATION"
  | "DISABLED"
  | (string & {});
export type Domain = string;
export type IspName = string;
export type IspNameList = string[];
export interface InboxPlacementTrackingOption {
  Global?: boolean;
  TrackedIsps?: string[];
}
export interface DomainDeliverabilityTrackingOption {
  Domain?: string;
  SubscriptionStartDate?: Date;
  InboxPlacementTrackingOption?: InboxPlacementTrackingOption;
}
export type DomainDeliverabilityTrackingOptions = DomainDeliverabilityTrackingOption[];
export interface GetDeliverabilityDashboardOptionsResponse {
  DashboardEnabled: boolean;
  SubscriptionExpiryDate?: Date;
  AccountStatus?: DeliverabilityDashboardAccountStatus;
  ActiveSubscribedDomains?: DomainDeliverabilityTrackingOption[];
  PendingExpirationSubscribedDomains?: DomainDeliverabilityTrackingOption[];
}
export interface GetDeliverabilityTestReportRequest {
  ReportId: string;
}
export type DeliverabilityTestSubject = string;
export interface DeliverabilityTestReport {
  ReportId?: string;
  ReportName?: string;
  Subject?: string;
  FromEmailAddress?: string;
  CreateDate?: Date;
  DeliverabilityTestStatus?: DeliverabilityTestStatus;
}
export type Percentage = number;
export interface PlacementStatistics {
  InboxPercentage?: number;
  SpamPercentage?: number;
  MissingPercentage?: number;
  SpfPercentage?: number;
  DkimPercentage?: number;
}
export interface IspPlacement {
  IspName?: string;
  PlacementStatistics?: PlacementStatistics;
}
export type IspPlacements = IspPlacement[];
export type MessageContent = string;
export interface GetDeliverabilityTestReportResponse {
  DeliverabilityTestReport: DeliverabilityTestReport;
  OverallPlacement: PlacementStatistics;
  IspPlacements: IspPlacement[];
  Message?: string;
  Tags?: Tag[];
}
export type CampaignId = string;
export interface GetDomainDeliverabilityCampaignRequest {
  CampaignId: string;
}
export type ImageUrl = string;
export type Subject = string;
export type IpList = string[];
export type Volume = number;
export type Esp = string;
export type Esps = string[];
export interface DomainDeliverabilityCampaign {
  CampaignId?: string;
  ImageUrl?: string;
  Subject?: string;
  FromAddress?: string;
  SendingIps?: string[];
  FirstSeenDateTime?: Date;
  LastSeenDateTime?: Date;
  InboxCount?: number;
  SpamCount?: number;
  ReadRate?: number;
  DeleteRate?: number;
  ReadDeleteRate?: number;
  ProjectedVolume?: number;
  Esps?: string[];
}
export interface GetDomainDeliverabilityCampaignResponse {
  DomainDeliverabilityCampaign: DomainDeliverabilityCampaign;
}
export interface GetDomainStatisticsReportRequest {
  Domain: string;
  StartDate: Date;
  EndDate: Date;
}
export interface VolumeStatistics {
  InboxRawCount?: number;
  SpamRawCount?: number;
  ProjectedInbox?: number;
  ProjectedSpam?: number;
}
export interface DomainIspPlacement {
  IspName?: string;
  InboxRawCount?: number;
  SpamRawCount?: number;
  InboxPercentage?: number;
  SpamPercentage?: number;
}
export type DomainIspPlacements = DomainIspPlacement[];
export interface OverallVolume {
  VolumeStatistics?: VolumeStatistics;
  ReadRatePercent?: number;
  DomainIspPlacements?: DomainIspPlacement[];
}
export interface DailyVolume {
  StartDate?: Date;
  VolumeStatistics?: VolumeStatistics;
  DomainIspPlacements?: DomainIspPlacement[];
}
export type DailyVolumes = DailyVolume[];
export interface GetDomainStatisticsReportResponse {
  OverallVolume: OverallVolume;
  DailyVolumes: DailyVolume[];
}
export interface GetEmailAddressInsightsRequest {
  EmailAddress: string;
}
export type EmailAddressInsightsConfidenceVerdict = "LOW" | "MEDIUM" | "HIGH" | (string & {});
export interface EmailAddressInsightsVerdict {
  ConfidenceVerdict?: EmailAddressInsightsConfidenceVerdict;
}
export interface EmailAddressInsightsMailboxEvaluations {
  HasValidSyntax?: EmailAddressInsightsVerdict;
  HasValidDnsRecords?: EmailAddressInsightsVerdict;
  MailboxExists?: EmailAddressInsightsVerdict;
  IsRoleAddress?: EmailAddressInsightsVerdict;
  IsDisposable?: EmailAddressInsightsVerdict;
  IsRandomInput?: EmailAddressInsightsVerdict;
}
export interface MailboxValidation {
  IsValid?: EmailAddressInsightsVerdict;
  Evaluations?: EmailAddressInsightsMailboxEvaluations;
}
export interface GetEmailAddressInsightsResponse {
  MailboxValidation?: MailboxValidation;
}
export interface GetEmailIdentityRequest {
  EmailIdentity: string;
}
export type MailFromDomainName = string;
export type MailFromDomainStatus =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "TEMPORARY_FAILURE"
  | (string & {});
export type BehaviorOnMxFailure = "USE_DEFAULT_VALUE" | "REJECT_MESSAGE" | (string & {});
export interface MailFromAttributes {
  MailFromDomain?: string;
  MailFromDomainStatus?: MailFromDomainStatus;
  BehaviorOnMxFailure?: BehaviorOnMxFailure;
}
export type PolicyMap = { [key: string]: string | undefined };
export type VerificationStatus =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "TEMPORARY_FAILURE"
  | "NOT_STARTED"
  | (string & {});
export type VerificationError =
  | "SERVICE_ERROR"
  | "DNS_SERVER_ERROR"
  | "HOST_NOT_FOUND"
  | "TYPE_NOT_FOUND"
  | "INVALID_VALUE"
  | "REPLICATION_ACCESS_DENIED"
  | "REPLICATION_PRIMARY_NOT_FOUND"
  | "REPLICATION_PRIMARY_BYO_DKIM_NOT_SUPPORTED"
  | "REPLICATION_REPLICA_AS_PRIMARY_NOT_SUPPORTED"
  | "REPLICATION_PRIMARY_INVALID_REGION"
  | (string & {});
export type PrimaryNameServer = string;
export type AdminEmail = string;
export type SerialNumber = number;
export interface SOARecord {
  PrimaryNameServer?: string;
  AdminEmail?: string;
  SerialNumber?: number;
}
export interface VerificationInfo {
  LastCheckedTimestamp?: Date;
  LastSuccessTimestamp?: Date;
  ErrorType?: VerificationError;
  SOARecord?: SOARecord;
}
export interface GetEmailIdentityResponse {
  IdentityType?: IdentityType;
  FeedbackForwardingStatus?: boolean;
  VerifiedForSendingStatus?: boolean;
  DkimAttributes?: DkimAttributes;
  MailFromAttributes?: MailFromAttributes;
  Policies?: { [key: string]: string | undefined };
  Tags?: Tag[];
  ConfigurationSetName?: string;
  VerificationStatus?: VerificationStatus;
  VerificationInfo?: VerificationInfo;
}
export interface GetEmailIdentityPoliciesRequest {
  EmailIdentity: string;
}
export interface GetEmailIdentityPoliciesResponse {
  Policies?: { [key: string]: string | undefined };
}
export interface GetEmailTemplateRequest {
  TemplateName: string;
}
export interface GetEmailTemplateResponse {
  TemplateName: string;
  TemplateContent: EmailTemplateContent;
  Tags?: Tag[];
}
export interface GetExportJobRequest {
  JobId: string;
}
export type ExportSourceType = "METRICS_DATA" | "MESSAGE_INSIGHTS" | (string & {});
export type JobStatus =
  | "CREATED"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED"
  | (string & {});
export type FailedRecordsS3Url = string;
export type ErrorMessage = string;
export interface FailureInfo {
  FailedRecordsS3Url?: string;
  ErrorMessage?: string;
}
export type ProcessedRecordsCount = number;
export type ExportedRecordsCount = number;
export interface ExportStatistics {
  ProcessedRecordsCount?: number;
  ExportedRecordsCount?: number;
}
export interface GetExportJobResponse {
  JobId?: string;
  ExportSourceType?: ExportSourceType;
  JobStatus?: JobStatus;
  ExportDestination?: ExportDestination;
  ExportDataSource?: ExportDataSource;
  CreatedTimestamp?: Date;
  CompletedTimestamp?: Date;
  FailureInfo?: FailureInfo;
  Statistics?: ExportStatistics;
}
export interface GetImportJobRequest {
  JobId: string;
}
export type FailedRecordsCount = number;
export interface GetImportJobResponse {
  JobId?: string;
  ImportDestination?: ImportDestination;
  ImportDataSource?: ImportDataSource;
  FailureInfo?: FailureInfo;
  JobStatus?: JobStatus;
  CreatedTimestamp?: Date;
  CompletedTimestamp?: Date;
  ProcessedRecordsCount?: number;
  FailedRecordsCount?: number;
}
export type OutboundMessageId = string;
export interface GetMessageInsightsRequest {
  MessageId: string;
}
export type MessageTagName = string;
export type MessageTagValue = string;
export interface MessageTag {
  Name: string;
  Value: string;
}
export type MessageTagList = MessageTag[];
export type BounceType = "UNDETERMINED" | "TRANSIENT" | "PERMANENT" | (string & {});
export type BounceSubType = string;
export type DiagnosticCode = string;
export interface Bounce {
  BounceType?: BounceType;
  BounceSubType?: string;
  DiagnosticCode?: string;
}
export type ComplaintSubType = string;
export type ComplaintFeedbackType = string;
export interface Complaint {
  ComplaintSubType?: string;
  ComplaintFeedbackType?: string;
}
export interface EventDetails {
  Bounce?: Bounce;
  Complaint?: Complaint;
}
export interface InsightsEvent {
  Timestamp?: Date;
  Type?: EventType;
  Details?: EventDetails;
}
export type InsightsEvents = InsightsEvent[];
export interface EmailInsights {
  Destination?: string | redacted.Redacted<string>;
  Isp?: string;
  Events?: InsightsEvent[];
}
export type EmailInsightsList = EmailInsights[];
export interface GetMessageInsightsResponse {
  MessageId?: string;
  FromEmailAddress?: string | redacted.Redacted<string>;
  Subject?: string | redacted.Redacted<string>;
  EmailTags?: MessageTag[];
  Insights?: EmailInsights[];
}
export interface GetMultiRegionEndpointRequest {
  EndpointName: string;
}
export interface Route {
  Region: string;
}
export type Routes = Route[];
export interface GetMultiRegionEndpointResponse {
  EndpointName?: string;
  EndpointId?: string;
  Routes?: Route[];
  Status?: Status;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
}
export type ReputationEntityReference = string;
export type ReputationEntityType = "RESOURCE" | (string & {});
export interface GetReputationEntityRequest {
  ReputationEntityReference: string;
  ReputationEntityType: ReputationEntityType;
}
export type StatusCause = string;
export interface StatusRecord {
  Status?: SendingStatus;
  Cause?: string;
  LastUpdatedTimestamp?: Date;
}
export type RecommendationImpact = "LOW" | "HIGH" | (string & {});
export interface ReputationEntity {
  ReputationEntityReference?: string;
  ReputationEntityType?: ReputationEntityType;
  ReputationManagementPolicy?: string;
  CustomerManagedStatus?: StatusRecord;
  AwsSesManagedStatus?: StatusRecord;
  SendingStatusAggregate?: SendingStatus;
  ReputationImpact?: RecommendationImpact;
}
export interface GetReputationEntityResponse {
  ReputationEntity?: ReputationEntity;
}
export interface GetSuppressedDestinationRequest {
  EmailAddress: string;
  TenantName?: string;
}
export type FeedbackId = string;
export interface SuppressedDestinationAttributes {
  MessageId?: string;
  FeedbackId?: string;
}
export interface SuppressedDestination {
  EmailAddress: string;
  Reason: SuppressionListReason;
  LastUpdateTime: Date;
  Attributes?: SuppressedDestinationAttributes;
  TenantName?: string;
}
export interface GetSuppressedDestinationResponse {
  SuppressedDestination: SuppressedDestination;
}
export interface GetTenantRequest {
  TenantName: string;
}
export interface Tenant {
  TenantName?: string;
  TenantId?: string;
  TenantArn?: string;
  CreatedTimestamp?: Date;
  Tags?: Tag[];
  SendingStatus?: SendingStatus;
  SuppressionAttributes?: TenantSuppressionAttributes;
}
export interface GetTenantResponse {
  Tenant?: Tenant;
}
export type ConfigurationSetFilterKey = "CONFIGURATION_SET_NAME_CONTAINS" | (string & {});
export type ConfigurationSetFilterValue = string;
export type ConfigurationSetFilter = { [key in ConfigurationSetFilterKey]?: string };
export interface ListConfigurationSetsRequest {
  Filter?: { [key: string]: string | undefined };
  NextToken?: string;
  PageSize?: number;
}
export type ConfigurationSetNameList = string[];
export interface ListConfigurationSetsResponse {
  ConfigurationSets?: string[];
  NextToken?: string;
}
export interface ListContactListsRequest {
  PageSize?: number;
  NextToken?: string;
}
export interface ContactList {
  ContactListName?: string;
  LastUpdatedTimestamp?: Date;
}
export type ListOfContactLists = ContactList[];
export interface ListContactListsResponse {
  ContactLists?: ContactList[];
  NextToken?: string;
}
export type UseDefaultIfPreferenceUnavailable = boolean;
export interface TopicFilter {
  TopicName?: string;
  UseDefaultIfPreferenceUnavailable?: boolean;
}
export interface ListContactsFilter {
  FilteredStatus?: SubscriptionStatus;
  TopicFilter?: TopicFilter;
}
export interface ListContactsRequest {
  ContactListName: string;
  Filter?: ListContactsFilter;
  PageSize?: number;
  NextToken?: string;
}
export interface Contact {
  EmailAddress?: string;
  TopicPreferences?: TopicPreference[];
  TopicDefaultPreferences?: TopicPreference[];
  UnsubscribeAll?: boolean;
  LastUpdatedTimestamp?: Date;
}
export type ListOfContacts = Contact[];
export interface ListContactsResponse {
  Contacts?: Contact[];
  NextToken?: string;
}
export interface ListCustomVerificationEmailTemplatesRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface CustomVerificationEmailTemplateMetadata {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
}
export type CustomVerificationEmailTemplatesList = CustomVerificationEmailTemplateMetadata[];
export interface ListCustomVerificationEmailTemplatesResponse {
  CustomVerificationEmailTemplates?: CustomVerificationEmailTemplateMetadata[];
  NextToken?: string;
}
export interface ListDedicatedIpPoolsRequest {
  NextToken?: string;
  PageSize?: number;
}
export type ListOfDedicatedIpPools = string[];
export interface ListDedicatedIpPoolsResponse {
  DedicatedIpPools?: string[];
  NextToken?: string;
}
export interface ListDeliverabilityTestReportsRequest {
  NextToken?: string;
  PageSize?: number;
}
export type DeliverabilityTestReports = DeliverabilityTestReport[];
export interface ListDeliverabilityTestReportsResponse {
  DeliverabilityTestReports: DeliverabilityTestReport[];
  NextToken?: string;
}
export interface ListDomainDeliverabilityCampaignsRequest {
  StartDate: Date;
  EndDate: Date;
  SubscribedDomain: string;
  NextToken?: string;
  PageSize?: number;
}
export type DomainDeliverabilityCampaignList = DomainDeliverabilityCampaign[];
export interface ListDomainDeliverabilityCampaignsResponse {
  DomainDeliverabilityCampaigns: DomainDeliverabilityCampaign[];
  NextToken?: string;
}
export type IdentityFilterKey =
  | "IDENTITY_NAME_CONTAINS"
  | "IDENTITY_TYPE"
  | "VERIFICATION_STATUS"
  | (string & {});
export type IdentityFilterValue = string;
export type IdentityFilter = { [key in IdentityFilterKey]?: string };
export interface ListEmailIdentitiesRequest {
  Filter?: { [key: string]: string | undefined };
  NextToken?: string;
  PageSize?: number;
}
export interface IdentityInfo {
  IdentityType?: IdentityType;
  IdentityName?: string;
  SendingEnabled?: boolean;
  VerificationStatus?: VerificationStatus;
}
export type IdentityInfoList = IdentityInfo[];
export interface ListEmailIdentitiesResponse {
  EmailIdentities?: IdentityInfo[];
  NextToken?: string;
}
export interface ListEmailIdentityCertificatesRequest {
  EmailIdentity: string;
  NextToken?: string;
  PageSize?: number;
}
export type IdentityCertificateStatus =
  | "PROVISIONING"
  | "INACTIVE"
  | "DEPROVISIONING"
  | "ACTIVE"
  | "FAILED"
  | (string & {});
export interface IdentityCertificate {
  FromAddress?: string;
  Status?: IdentityCertificateStatus;
  CertificateArn?: string;
  CertificateExpiryTime?: Date;
}
export type IdentityCertificateList = IdentityCertificate[];
export interface ListEmailIdentityCertificatesResponse {
  Certificates?: IdentityCertificate[];
  NextToken?: string;
}
export interface ListEmailTemplatesRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface EmailTemplateMetadata {
  TemplateName?: string;
  CreatedTimestamp?: Date;
}
export type EmailTemplateMetadataList = EmailTemplateMetadata[];
export interface ListEmailTemplatesResponse {
  TemplatesMetadata?: EmailTemplateMetadata[];
  NextToken?: string;
}
export interface ListExportJobsRequest {
  NextToken?: string;
  PageSize?: number;
  ExportSourceType?: ExportSourceType;
  JobStatus?: JobStatus;
}
export interface ExportJobSummary {
  JobId?: string;
  ExportSourceType?: ExportSourceType;
  JobStatus?: JobStatus;
  CreatedTimestamp?: Date;
  CompletedTimestamp?: Date;
}
export type ExportJobSummaryList = ExportJobSummary[];
export interface ListExportJobsResponse {
  ExportJobs?: ExportJobSummary[];
  NextToken?: string;
}
export type ImportDestinationType = "SUPPRESSION_LIST" | "CONTACT_LIST" | (string & {});
export interface ListImportJobsRequest {
  ImportDestinationType?: ImportDestinationType;
  NextToken?: string;
  PageSize?: number;
}
export interface ImportJobSummary {
  JobId?: string;
  ImportDestination?: ImportDestination;
  JobStatus?: JobStatus;
  CreatedTimestamp?: Date;
  ProcessedRecordsCount?: number;
  FailedRecordsCount?: number;
}
export type ImportJobSummaryList = ImportJobSummary[];
export interface ListImportJobsResponse {
  ImportJobs?: ImportJobSummary[];
  NextToken?: string;
}
export type NextTokenV2 = string;
export type PageSizeV2 = number;
export interface ListMultiRegionEndpointsRequest {
  NextToken?: string;
  PageSize?: number;
}
export type Regions = string[];
export interface MultiRegionEndpoint {
  EndpointName?: string;
  Status?: Status;
  EndpointId?: string;
  Regions?: string[];
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
}
export type MultiRegionEndpoints = MultiRegionEndpoint[];
export interface ListMultiRegionEndpointsResponse {
  MultiRegionEndpoints?: MultiRegionEndpoint[];
  NextToken?: string;
}
export type ListRecommendationsFilterKey =
  | "TYPE"
  | "IMPACT"
  | "STATUS"
  | "RESOURCE_ARN"
  | (string & {});
export type ListRecommendationFilterValue = string;
export type ListRecommendationsFilter = { [key in ListRecommendationsFilterKey]?: string };
export interface ListRecommendationsRequest {
  Filter?: { [key: string]: string | undefined };
  NextToken?: string;
  PageSize?: number;
}
export type RecommendationType =
  | "DKIM"
  | "DMARC"
  | "SPF"
  | "BIMI"
  | "COMPLAINT"
  | "BOUNCE"
  | "FEEDBACK_3P"
  | "IP_LISTING"
  | (string & {});
export type RecommendationDescription = string;
export type RecommendationStatus = "OPEN" | "FIXED" | (string & {});
export interface Recommendation {
  ResourceArn?: string;
  Type?: RecommendationType;
  Description?: string;
  Status?: RecommendationStatus;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  Impact?: RecommendationImpact;
}
export type RecommendationsList = Recommendation[];
export interface ListRecommendationsResponse {
  Recommendations?: Recommendation[];
  NextToken?: string;
}
export type ReputationEntityFilterKey =
  | "ENTITY_TYPE"
  | "REPUTATION_IMPACT"
  | "SENDING_STATUS"
  | "ENTITY_REFERENCE_PREFIX"
  | (string & {});
export type ReputationEntityFilterValue = string;
export type ReputationEntityFilter = { [key in ReputationEntityFilterKey]?: string };
export interface ListReputationEntitiesRequest {
  Filter?: { [key: string]: string | undefined };
  NextToken?: string;
  PageSize?: number;
}
export type ReputationEntitiesList = ReputationEntity[];
export interface ListReputationEntitiesResponse {
  ReputationEntities?: ReputationEntity[];
  NextToken?: string;
}
export interface ListResourceTenantsRequest {
  ResourceArn: string;
  PageSize?: number;
  NextToken?: string;
}
export interface ResourceTenantMetadata {
  TenantName?: string;
  TenantId?: string;
  ResourceArn?: string;
  AssociatedTimestamp?: Date;
}
export type ResourceTenantMetadataList = ResourceTenantMetadata[];
export interface ListResourceTenantsResponse {
  ResourceTenants?: ResourceTenantMetadata[];
  NextToken?: string;
}
export interface ListSuppressedDestinationsRequest {
  TenantName?: string;
  Reasons?: SuppressionListReason[];
  StartDate?: Date;
  EndDate?: Date;
  NextToken?: string;
  PageSize?: number;
}
export interface SuppressedDestinationSummary {
  EmailAddress: string;
  Reason: SuppressionListReason;
  LastUpdateTime: Date;
}
export type SuppressedDestinationSummaries = SuppressedDestinationSummary[];
export interface ListSuppressedDestinationsResponse {
  SuppressedDestinationSummaries?: SuppressedDestinationSummary[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags: Tag[];
}
export type ListTenantResourcesFilterKey = "RESOURCE_TYPE" | (string & {});
export type ListTenantResourcesFilterValue = string;
export type ListTenantResourcesFilter = { [key in ListTenantResourcesFilterKey]?: string };
export interface ListTenantResourcesRequest {
  TenantName: string;
  Filter?: { [key: string]: string | undefined };
  PageSize?: number;
  NextToken?: string;
}
export type ResourceType =
  | "EMAIL_IDENTITY"
  | "CONFIGURATION_SET"
  | "EMAIL_TEMPLATE"
  | (string & {});
export interface TenantResource {
  ResourceType?: ResourceType;
  ResourceArn?: string;
}
export type TenantResourceList = TenantResource[];
export interface ListTenantResourcesResponse {
  TenantResources?: TenantResource[];
  NextToken?: string;
}
export type ListTenantsFilterKey = "TENANT_NAME_CONTAINS" | "SENDING_STATUS" | (string & {});
export type ListTenantsFilterValue = string;
export type ListTenantsFilter = { [key in ListTenantsFilterKey]?: string };
export interface ListTenantsRequest {
  Filter?: { [key: string]: string | undefined };
  NextToken?: string;
  PageSize?: number;
}
export interface TenantInfo {
  TenantName?: string;
  TenantId?: string;
  TenantArn?: string;
  CreatedTimestamp?: Date;
  SendingStatus?: SendingStatus;
}
export type TenantInfoList = TenantInfo[];
export interface ListTenantsResponse {
  Tenants?: TenantInfo[];
  NextToken?: string;
}
export interface PutAccountDedicatedIpWarmupAttributesRequest {
  AutoWarmupEnabled?: boolean;
}
export interface PutAccountDedicatedIpWarmupAttributesResponse {}
export type EnabledWrapper = boolean;
export interface PutAccountDetailsRequest {
  MailType: MailType;
  WebsiteURL: string | redacted.Redacted<string>;
  ContactLanguage?: ContactLanguage;
  UseCaseDescription?: string | redacted.Redacted<string>;
  AdditionalContactEmailAddresses?: (string | redacted.Redacted<string>)[];
  ProductionAccessEnabled?: boolean;
}
export interface PutAccountDetailsResponse {}
export interface PutAccountPricingAttributesRequest {
  Plan: PricingPlan;
}
export interface PutAccountPricingAttributesResponse {}
export interface PutAccountSendingAttributesRequest {
  SendingEnabled?: boolean;
}
export interface PutAccountSendingAttributesResponse {}
export interface PutAccountSuppressionAttributesRequest {
  SuppressedReasons?: SuppressionListReason[];
  ValidationAttributes?: SuppressionValidationAttributes;
}
export interface PutAccountSuppressionAttributesResponse {}
export interface PutAccountVdmAttributesRequest {
  VdmAttributes: VdmAttributes;
}
export interface PutAccountVdmAttributesResponse {}
export interface PutConfigurationSetArchivingOptionsRequest {
  ConfigurationSetName: string;
  ArchiveArn?: string;
}
export interface PutConfigurationSetArchivingOptionsResponse {}
export type SendingPoolName = string;
export interface PutConfigurationSetDeliveryOptionsRequest {
  ConfigurationSetName: string;
  TlsPolicy?: TlsPolicy;
  SendingPoolName?: string;
  MaxDeliverySeconds?: number;
}
export interface PutConfigurationSetDeliveryOptionsResponse {}
export interface PutConfigurationSetReputationOptionsRequest {
  ConfigurationSetName: string;
  ReputationMetricsEnabled?: boolean;
}
export interface PutConfigurationSetReputationOptionsResponse {}
export interface PutConfigurationSetSendingOptionsRequest {
  ConfigurationSetName: string;
  SendingEnabled?: boolean;
}
export interface PutConfigurationSetSendingOptionsResponse {}
export interface PutConfigurationSetSuppressionOptionsRequest {
  ConfigurationSetName: string;
  SuppressionScope?: SuppressionListScope;
  SuppressedReasons?: SuppressionListReason[];
  ValidationOptions?: SuppressionValidationOptions;
}
export interface PutConfigurationSetSuppressionOptionsResponse {}
export interface PutConfigurationSetTrackingOptionsRequest {
  ConfigurationSetName: string;
  CustomRedirectDomain?: string;
  HttpsPolicy?: HttpsPolicy;
}
export interface PutConfigurationSetTrackingOptionsResponse {}
export interface PutConfigurationSetVdmOptionsRequest {
  ConfigurationSetName: string;
  VdmOptions?: VdmOptions;
}
export interface PutConfigurationSetVdmOptionsResponse {}
export interface PutDedicatedIpInPoolRequest {
  Ip: string;
  DestinationPoolName: string;
}
export interface PutDedicatedIpInPoolResponse {}
export interface PutDedicatedIpPoolScalingAttributesRequest {
  PoolName: string;
  ScalingMode: ScalingMode;
}
export interface PutDedicatedIpPoolScalingAttributesResponse {}
export interface PutDedicatedIpWarmupAttributesRequest {
  Ip: string;
  WarmupPercentage: number;
}
export interface PutDedicatedIpWarmupAttributesResponse {}
export interface PutDeliverabilityDashboardOptionRequest {
  DashboardEnabled: boolean;
  SubscribedDomains?: DomainDeliverabilityTrackingOption[];
}
export interface PutDeliverabilityDashboardOptionResponse {}
export interface PutEmailIdentityConfigurationSetAttributesRequest {
  EmailIdentity: string;
  ConfigurationSetName?: string;
}
export interface PutEmailIdentityConfigurationSetAttributesResponse {}
export interface PutEmailIdentityDkimAttributesRequest {
  EmailIdentity: string;
  SigningEnabled?: boolean;
}
export interface PutEmailIdentityDkimAttributesResponse {}
export interface PutEmailIdentityDkimSigningAttributesRequest {
  EmailIdentity: string;
  SigningAttributesOrigin: DkimSigningAttributesOrigin;
  SigningAttributes?: DkimSigningAttributes;
}
export interface PutEmailIdentityDkimSigningAttributesResponse {
  DkimStatus?: DkimStatus;
  DkimTokens?: string[];
  SigningHostedZone?: string;
}
export interface PutEmailIdentityFeedbackAttributesRequest {
  EmailIdentity: string;
  EmailForwardingEnabled?: boolean;
}
export interface PutEmailIdentityFeedbackAttributesResponse {}
export interface PutEmailIdentityMailFromAttributesRequest {
  EmailIdentity: string;
  MailFromDomain?: string;
  BehaviorOnMxFailure?: BehaviorOnMxFailure;
}
export interface PutEmailIdentityMailFromAttributesResponse {}
export interface PutSuppressedDestinationRequest {
  EmailAddress: string;
  Reason: SuppressionListReason;
  TenantName?: string;
}
export interface PutSuppressedDestinationResponse {}
export interface PutTenantSuppressionAttributesRequest {
  TenantName: string;
  SuppressedReasons?: SuppressionListReason[];
  SuppressionScope?: SuppressionListScope;
}
export interface PutTenantSuppressionAttributesResponse {}
export type EmailAddressList = string[];
export interface BulkEmailContent {
  Template?: Template;
}
export interface Destination {
  ToAddresses?: string[];
  CcAddresses?: string[];
  BccAddresses?: string[];
}
export interface ReplacementTemplate {
  ReplacementTemplateData?: string;
}
export interface ReplacementEmailContent {
  ReplacementTemplate?: ReplacementTemplate;
}
export interface BulkEmailEntry {
  Destination: Destination;
  ReplacementTags?: MessageTag[];
  ReplacementEmailContent?: ReplacementEmailContent;
  ReplacementHeaders?: MessageHeader[];
}
export type BulkEmailEntryList = BulkEmailEntry[];
export interface TrackingConfigurationOverrides {
  OpenTrackingEnabled?: FeatureStatus;
  ClickTrackingEnabled?: FeatureStatus;
}
export interface ConfigurationOverrides {
  Tracking?: TrackingConfigurationOverrides;
}
export interface SendBulkEmailRequest {
  FromEmailAddress?: string;
  FromEmailAddressIdentityArn?: string;
  ReplyToAddresses?: string[];
  FeedbackForwardingEmailAddress?: string;
  FeedbackForwardingEmailAddressIdentityArn?: string;
  DefaultEmailTags?: MessageTag[];
  DefaultContent: BulkEmailContent;
  BulkEmailEntries: BulkEmailEntry[];
  ConfigurationSetName?: string;
  EndpointId?: string;
  TenantName?: string;
  ConfigurationOverrides?: ConfigurationOverrides;
}
export type BulkEmailStatus =
  | "SUCCESS"
  | "MESSAGE_REJECTED"
  | "MAIL_FROM_DOMAIN_NOT_VERIFIED"
  | "CONFIGURATION_SET_NOT_FOUND"
  | "TEMPLATE_NOT_FOUND"
  | "ACCOUNT_SUSPENDED"
  | "ACCOUNT_THROTTLED"
  | "ACCOUNT_DAILY_QUOTA_EXCEEDED"
  | "INVALID_SENDING_POOL_NAME"
  | "ACCOUNT_SENDING_PAUSED"
  | "CONFIGURATION_SET_SENDING_PAUSED"
  | "INVALID_PARAMETER"
  | "TRANSIENT_FAILURE"
  | "FAILED"
  | (string & {});
export interface BulkEmailEntryResult {
  Status?: BulkEmailStatus;
  Error?: string;
  MessageId?: string;
}
export type BulkEmailEntryResultList = BulkEmailEntryResult[];
export interface SendBulkEmailResponse {
  BulkEmailEntryResults: BulkEmailEntryResult[];
}
export interface SendCustomVerificationEmailRequest {
  EmailAddress: string;
  TemplateName: string;
  ConfigurationSetName?: string;
}
export interface SendCustomVerificationEmailResponse {
  MessageId?: string;
}
export interface ListManagementOptions {
  ContactListName: string;
  TopicName?: string;
}
export interface SendEmailRequest {
  FromEmailAddress?: string;
  FromEmailAddressIdentityArn?: string;
  Destination?: Destination;
  ReplyToAddresses?: string[];
  FeedbackForwardingEmailAddress?: string;
  FeedbackForwardingEmailAddressIdentityArn?: string;
  Content: EmailContent;
  EmailTags?: MessageTag[];
  ConfigurationSetName?: string;
  EndpointId?: string;
  TenantName?: string;
  ListManagementOptions?: ListManagementOptions;
  ConfigurationOverrides?: ConfigurationOverrides;
}
export interface SendEmailResponse {
  MessageId?: string;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export interface TestRenderEmailTemplateRequest {
  TemplateName: string;
  TemplateData: string;
}
export type RenderedEmailTemplate = string;
export interface TestRenderEmailTemplateResponse {
  RenderedTemplate: string;
}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateConfigurationSetRequest {
  ConfigurationSetName: string;
  MessageSecurityOptions?: MessageSecurityOptions;
}
export interface UpdateConfigurationSetResponse {}
export interface UpdateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  EventDestination: EventDestinationDefinition;
}
export interface UpdateConfigurationSetEventDestinationResponse {}
export interface UpdateContactRequest {
  ContactListName: string;
  EmailAddress: string;
  TopicPreferences?: TopicPreference[];
  UnsubscribeAll?: boolean;
  AttributesData?: string;
}
export interface UpdateContactResponse {}
export interface UpdateContactListRequest {
  ContactListName: string;
  Topics?: Topic[];
  Description?: string;
}
export interface UpdateContactListResponse {}
export interface UpdateCustomVerificationEmailTemplateRequest {
  TemplateName: string;
  FromEmailAddress: string;
  TemplateSubject: string;
  TemplateContent: string;
  SuccessRedirectionURL: string;
  FailureRedirectionURL: string;
}
export interface UpdateCustomVerificationEmailTemplateResponse {}
export interface UpdateEmailIdentityPolicyRequest {
  EmailIdentity: string;
  PolicyName: string;
  Policy: string;
}
export interface UpdateEmailIdentityPolicyResponse {}
export interface UpdateEmailTemplateRequest {
  TemplateName: string;
  TemplateContent: EmailTemplateContent;
}
export interface UpdateEmailTemplateResponse {}
export interface UpdateReputationEntityCustomerManagedStatusRequest {
  ReputationEntityType: ReputationEntityType;
  ReputationEntityReference: string;
  SendingStatus: SendingStatus;
}
export interface UpdateReputationEntityCustomerManagedStatusResponse {}
export interface UpdateReputationEntityPolicyRequest {
  ReputationEntityType: ReputationEntityType;
  ReputationEntityReference: string;
  ReputationEntityPolicy: string;
}
export interface UpdateReputationEntityPolicyResponse {}
export type AssociateEmailIdentityCertificateError =
  | AlreadyExistsException
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Associates an S/MIME certificate with an email identity. After the certificate is
 * active, Amazon SES API v2 can add an S/MIME signature to messages that you send from the associated
 * address when signing is enabled on the configuration set used to send the message.
 *
 * The certificate is an X.509 certificate that you manage in Certificate Manager
 * (ACM). You identify it by its Amazon Resource Name (ARN).
 *
 * - If the email identity is a domain, you must specify a `FromAddress`
 * that belongs to that domain or one of its subdomains. The certificate applies to
 * messages sent from that address.
 *
 * - If the email identity is an email address, `FromAddress` is
 * optional. If you specify it, it must exactly match the email identity.
 *
 * When the association is created, the certificate begins provisioning and its status is
 * `PROVISIONING`. The status changes to `ACTIVE` when the certificate
 * is ready to use for signing. Each email address can have only one certificate
 * association. If an association already exists for the address, this operation returns an
 * error, unless the existing association is in the `DEPROVISIONING` state.
 */
export const associateEmailIdentityCertificate: API.OperationMethod<
  AssociateEmailIdentityCertificateRequest,
  AssociateEmailIdentityCertificateResponse,
  AssociateEmailIdentityCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AssociateEmailIdentityCertificateRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AssociateEmailIdentityCertificateResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateEmailIdentityCertificate",
}));

export type BatchGetMetricDataError =
  | BadRequestException
  | InternalServiceErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves batches of metric data collected based on your sending activity.
 *
 * You can execute this operation no more than 16 times per second,
 * and with at most 160 queries from the batches per second (cumulative).
 */
export const batchGetMetricData: API.OperationMethod<
  BatchGetMetricDataRequest,
  BatchGetMetricDataResponse,
  BatchGetMetricDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5, __c0, 5) as any as S.Schema<BatchGetMetricDataRequest>,
  output: __S(12, __c1, 4) as any as S.Schema<BatchGetMetricDataResponse>,
  errors: [
    BadRequestException,
    InternalServiceErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetMetricData",
}));

export type CancelExportJobError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Cancels an export job.
 */
export const cancelExportJob: API.OperationMethod<
  CancelExportJobRequest,
  CancelExportJobResponse,
  CancelExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13, __c1, 5) as any as S.Schema<CancelExportJobRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<CancelExportJobResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelExportJob",
}));

export type CreateConfigurationSetError =
  | AlreadyExistsException
  | BadRequestException
  | ConcurrentModificationException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Create a configuration set. *Configuration sets* are groups of
 * rules that you can apply to the emails that you send. You apply a configuration set to
 * an email by specifying the name of the configuration set when you call the Amazon SES API v2. When
 * you apply a configuration set to an email, all of the rules in that configuration set
 * are applied to the email.
 */
export const createConfigurationSet: API.OperationMethod<
  CreateConfigurationSetRequest,
  CreateConfigurationSetResponse,
  CreateConfigurationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33, __c4, 1) as any as S.Schema<CreateConfigurationSetRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<CreateConfigurationSetResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    ConcurrentModificationException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationSet",
}));

export type CreateConfigurationSetEventDestinationError =
  | AlreadyExistsException
  | BadRequestException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Create an event destination. *Events* include message sends,
 * deliveries, opens, clicks, bounces, and complaints. Event
 * destinations are places that you can send information about these events
 * to. For example, you can send event data to Amazon EventBridge and associate a rule to send the event
 * to the specified target.
 *
 * A single configuration set can include more than one event destination.
 */
export const createConfigurationSetEventDestination: API.OperationMethod<
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse,
  CreateConfigurationSetEventDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42, __c5, 2) as any as S.Schema<CreateConfigurationSetEventDestinationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CreateConfigurationSetEventDestinationResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationSetEventDestination",
}));

export type CreateContactError =
  | AlreadyExistsException
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a contact, which is an end-user who is receiving the email, and adds them to a
 * contact list.
 */
export const createContact: API.OperationMethod<
  CreateContactRequest,
  CreateContactResponse,
  CreateContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<CreateContactRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<CreateContactResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateContact",
}));

export type CreateContactListError =
  | AlreadyExistsException
  | BadRequestException
  | LimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a contact list.
 */
export const createContactList: API.OperationMethod<
  CreateContactListRequest,
  CreateContactListResponse,
  CreateContactListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<CreateContactListRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<CreateContactListResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    LimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateContactList",
}));

export type CreateCustomVerificationEmailTemplateError =
  | AlreadyExistsException
  | BadRequestException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new custom verification email template.
 *
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createCustomVerificationEmailTemplate: API.OperationMethod<
  CreateCustomVerificationEmailTemplateRequest,
  CreateCustomVerificationEmailTemplateResponse,
  CreateCustomVerificationEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<CreateCustomVerificationEmailTemplateRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CreateCustomVerificationEmailTemplateResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomVerificationEmailTemplate",
}));

export type CreateDedicatedIpPoolError =
  | AlreadyExistsException
  | BadRequestException
  | ConcurrentModificationException
  | LimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
 * IP addresses that are associated with your Amazon Web Services account. You can associate a pool with
 * a configuration set. When you send an email that uses that configuration set, the
 * message is sent from one of the addresses in the associated pool.
 */
export const createDedicatedIpPool: API.OperationMethod<
  CreateDedicatedIpPoolRequest,
  CreateDedicatedIpPoolResponse,
  CreateDedicatedIpPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<CreateDedicatedIpPoolRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<CreateDedicatedIpPoolResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    ConcurrentModificationException,
    LimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDedicatedIpPool",
}));

export type CreateDeliverabilityTestReportError =
  | AccountSuspendedException
  | BadRequestException
  | ConcurrentModificationException
  | LimitExceededException
  | MailFromDomainNotVerifiedException
  | MessageRejected
  | NotFoundException
  | SendingPausedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
 * by various email providers around the world. When you perform a predictive inbox placement test, you provide a
 * sample message that contains the content that you plan to send to your customers. Amazon SES
 * then sends that message to special email addresses spread across several major email
 * providers. After about 24 hours, the test is complete, and you can use the
 * `GetDeliverabilityTestReport` operation to view the results of the
 * test.
 */
export const createDeliverabilityTestReport: API.OperationMethod<
  CreateDeliverabilityTestReportRequest,
  CreateDeliverabilityTestReportResponse,
  CreateDeliverabilityTestReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<CreateDeliverabilityTestReportRequest>,
  output: __S(63, __c7, 7) as any as S.Schema<CreateDeliverabilityTestReportResponse>,
  errors: [
    AccountSuspendedException,
    BadRequestException,
    ConcurrentModificationException,
    LimitExceededException,
    MailFromDomainNotVerifiedException,
    MessageRejected,
    NotFoundException,
    SendingPausedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDeliverabilityTestReport",
}));

export type CreateEmailIdentityError =
  | AlreadyExistsException
  | BadRequestException
  | ConcurrentModificationException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts the process of verifying an email identity. An *identity* is
 * an email address or domain that you use when you send email. Before you can use an
 * identity to send email, you first have to verify it. By verifying an identity, you
 * demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2
 * permission to send email from the identity.
 *
 * When you verify an email address, Amazon SES sends an email to the address. Your email
 * address is verified as soon as you follow the link in the verification email.
 *
 * When you verify a domain without specifying the `DkimSigningAttributes`
 * object, this operation provides a set of DKIM tokens. You can convert these tokens into
 * CNAME records, which you then add to the DNS configuration for your domain. Your domain
 * is verified when Amazon SES detects these records in the DNS configuration for your domain.
 * This verification method is known as Easy DKIM.
 *
 * Alternatively, you can perform the verification process by providing your own
 * public-private key pair. This verification method is known as Bring Your Own DKIM
 * (BYODKIM). To use BYODKIM, your call to the `CreateEmailIdentity` operation
 * has to include the `DkimSigningAttributes` object. When you specify this
 * object, you provide a selector (a component of the DNS record name that identifies the
 * public key to use for DKIM authentication) and a private key.
 *
 * When you verify a domain, this operation provides a set of DKIM tokens, which you can
 * convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
 * domain. Your domain is verified when Amazon SES detects these records in the DNS
 * configuration for your domain. For some DNS providers, it can take 72 hours or more to
 * complete the domain verification process.
 *
 * Additionally, you can associate an existing configuration set with the email identity that you're verifying.
 */
export const createEmailIdentity: API.OperationMethod<
  CreateEmailIdentityRequest,
  CreateEmailIdentityResponse,
  CreateEmailIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<CreateEmailIdentityRequest>,
  output: __S(68, __c8, 4) as any as S.Schema<CreateEmailIdentityResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    ConcurrentModificationException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEmailIdentity",
}));

export type CreateEmailIdentityPolicyError =
  | AlreadyExistsException
  | BadRequestException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates the specified sending authorization policy for the given identity (an email
 * address or a domain).
 *
 * This API is for the identity owner only. If you have not verified the identity,
 * this API will return an error.
 *
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createEmailIdentityPolicy: API.OperationMethod<
  CreateEmailIdentityPolicyRequest,
  CreateEmailIdentityPolicyResponse,
  CreateEmailIdentityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<CreateEmailIdentityPolicyRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CreateEmailIdentityPolicyResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEmailIdentityPolicy",
}));

export type CreateEmailTemplateError =
  | AlreadyExistsException
  | BadRequestException
  | LimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates an email template. Email templates enable you to send personalized email to
 * one or more destinations in a single API operation. For more information, see the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createEmailTemplate: API.OperationMethod<
  CreateEmailTemplateRequest,
  CreateEmailTemplateResponse,
  CreateEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<CreateEmailTemplateRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<CreateEmailTemplateResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    LimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEmailTemplate",
}));

export type CreateExportJobError =
  | BadRequestException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates an export job for a data source and destination.
 *
 * You can execute this operation no more than once per second.
 */
export const createExportJob: API.OperationMethod<
  CreateExportJobRequest,
  CreateExportJobResponse,
  CreateExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<CreateExportJobRequest>,
  output: __S(81, __c10, 1) as any as S.Schema<CreateExportJobResponse>,
  errors: [
    BadRequestException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExportJob",
}));

export type CreateImportJobError =
  | BadRequestException
  | LimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates an import job for a data destination.
 */
export const createImportJob: API.OperationMethod<
  CreateImportJobRequest,
  CreateImportJobResponse,
  CreateImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<CreateImportJobRequest>,
  output: __S(81, __c10, 1) as any as S.Schema<CreateImportJobResponse>,
  errors: [BadRequestException, LimitExceededException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateImportJob",
}));

export type CreateMultiRegionEndpointError =
  | AlreadyExistsException
  | BadRequestException
  | LimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a multi-region endpoint (global-endpoint).
 *
 * The primary region is going to be the AWS-Region where the operation is executed.
 * The secondary region has to be provided in request's parameters.
 * From the data flow standpoint there is no difference between primary
 * and secondary regions - sending traffic is divided between the two.
 * The primary region is the region where the resource has been created and where it can be managed.
 */
export const createMultiRegionEndpoint: API.OperationMethod<
  CreateMultiRegionEndpointRequest,
  CreateMultiRegionEndpointResponse,
  CreateMultiRegionEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<CreateMultiRegionEndpointRequest>,
  output: __S(91, __c11, 3) as any as S.Schema<CreateMultiRegionEndpointResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    LimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMultiRegionEndpoint",
}));

export type CreateTenantError =
  | AlreadyExistsException
  | BadRequestException
  | LimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Create a tenant.
 *
 * *Tenants* are logical containers that group related SES resources together.
 * Each tenant can have its own set of resources like email identities, configuration sets,
 * and templates, along with reputation metrics and sending status. This helps isolate and manage
 * email sending for different customers or business units within your Amazon SES API v2 account.
 *
 * You can optionally specify `SuppressionAttributes` to configure tenant-level
 * suppression at creation time. When tenant-level suppression is enabled, Amazon SES maintains a
 * separate suppression list for the tenant instead of using the account-level suppression list.
 */
export const createTenant: API.OperationMethod<
  CreateTenantRequest,
  CreateTenantResponse,
  CreateTenantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<CreateTenantRequest>,
  output: __S(94, __c11, 6) as any as S.Schema<CreateTenantResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    LimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTenant",
}));

export type CreateTenantResourceAssociationError =
  | AlreadyExistsException
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Associate a resource with a tenant.
 *
 * *Resources* can be email identities, configuration sets, or email templates.
 * When you associate a resource with a tenant, you can use that resource when sending emails
 * on behalf of that tenant.
 *
 * A single resource can be associated with multiple tenants, allowing for resource sharing
 * across different tenants while maintaining isolation in email sending operations.
 */
export const createTenantResourceAssociation: API.OperationMethod<
  CreateTenantResourceAssociationRequest,
  CreateTenantResourceAssociationResponse,
  CreateTenantResourceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<CreateTenantResourceAssociationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CreateTenantResourceAssociationResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTenantResourceAssociation",
}));

export type DeleteConfigurationSetError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Delete an existing configuration set.
 *
 * *Configuration sets* are groups of rules that you can apply to the
 * emails you send. You apply a configuration set to an email by including a reference to
 * the configuration set in the headers of the email. When you apply a configuration set to
 * an email, all of the rules in that configuration set are applied to the email.
 */
export const deleteConfigurationSet: API.OperationMethod<
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResponse,
  DeleteConfigurationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<DeleteConfigurationSetRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<DeleteConfigurationSetResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationSet",
}));

export type DeleteConfigurationSetEventDestinationError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Delete an event destination.
 *
 * *Events* include message sends, deliveries, opens, clicks, bounces,
 * and complaints. *Event destinations* are places that you can send
 * information about these events to. For example, you can send event data to Amazon EventBridge and
 * associate a rule to send the event to the specified target.
 */
export const deleteConfigurationSetEventDestination: API.OperationMethod<
  DeleteConfigurationSetEventDestinationRequest,
  DeleteConfigurationSetEventDestinationResponse,
  DeleteConfigurationSetEventDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97, __c12, 1) as any as S.Schema<DeleteConfigurationSetEventDestinationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteConfigurationSetEventDestinationResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationSetEventDestination",
}));

export type DeleteContactError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes a contact from a contact list.
 */
export const deleteContact: API.OperationMethod<
  DeleteContactRequest,
  DeleteContactResponse,
  DeleteContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<DeleteContactRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<DeleteContactResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteContact",
}));

export type DeleteContactListError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a contact list and all of the contacts on that list.
 */
export const deleteContactList: API.OperationMethod<
  DeleteContactListRequest,
  DeleteContactListResponse,
  DeleteContactListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(99, __c12, 3) as any as S.Schema<DeleteContactListRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<DeleteContactListResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteContactList",
}));

export type DeleteCustomVerificationEmailTemplateError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an existing custom verification email template.
 *
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteCustomVerificationEmailTemplate: API.OperationMethod<
  DeleteCustomVerificationEmailTemplateRequest,
  DeleteCustomVerificationEmailTemplateResponse,
  DeleteCustomVerificationEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<DeleteCustomVerificationEmailTemplateRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteCustomVerificationEmailTemplateResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomVerificationEmailTemplate",
}));

export type DeleteDedicatedIpPoolError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Delete a dedicated IP pool.
 */
export const deleteDedicatedIpPool: API.OperationMethod<
  DeleteDedicatedIpPoolRequest,
  DeleteDedicatedIpPoolResponse,
  DeleteDedicatedIpPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<DeleteDedicatedIpPoolRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<DeleteDedicatedIpPoolResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDedicatedIpPool",
}));

export type DeleteEmailIdentityError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an email identity. An identity can be either an email address or a domain
 * name.
 */
export const deleteEmailIdentity: API.OperationMethod<
  DeleteEmailIdentityRequest,
  DeleteEmailIdentityResponse,
  DeleteEmailIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<DeleteEmailIdentityRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<DeleteEmailIdentityResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEmailIdentity",
}));

export type DeleteEmailIdentityPolicyError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes the specified sending authorization policy for the given identity (an email
 * address or a domain). This API returns successfully even if a policy with the specified
 * name does not exist.
 *
 * This API is for the identity owner only. If you have not verified the identity,
 * this API will return an error.
 *
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteEmailIdentityPolicy: API.OperationMethod<
  DeleteEmailIdentityPolicyRequest,
  DeleteEmailIdentityPolicyResponse,
  DeleteEmailIdentityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<DeleteEmailIdentityPolicyRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteEmailIdentityPolicyResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEmailIdentityPolicy",
}));

export type DeleteEmailTemplateError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an email template.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteEmailTemplate: API.OperationMethod<
  DeleteEmailTemplateRequest,
  DeleteEmailTemplateResponse,
  DeleteEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104, __c13, 0) as any as S.Schema<DeleteEmailTemplateRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<DeleteEmailTemplateResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEmailTemplate",
}));

export type DeleteMultiRegionEndpointError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a multi-region endpoint (global-endpoint).
 *
 * Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region
 * where operation is executed can be deleted.
 */
export const deleteMultiRegionEndpoint: API.OperationMethod<
  DeleteMultiRegionEndpointRequest,
  DeleteMultiRegionEndpointResponse,
  DeleteMultiRegionEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<DeleteMultiRegionEndpointRequest>,
  output: __S(106, __c13, 2) as any as S.Schema<DeleteMultiRegionEndpointResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMultiRegionEndpoint",
}));

export type DeleteSuppressedDestinationError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes an email address from the suppression list for your account or for a specific
 * tenant. To target a tenant's suppression list, specify the `TenantName`
 * parameter. If you omit `TenantName`, the address is removed from the
 * account-level suppression list.
 */
export const deleteSuppressedDestination: API.OperationMethod<
  DeleteSuppressedDestinationRequest,
  DeleteSuppressedDestinationResponse,
  DeleteSuppressedDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<DeleteSuppressedDestinationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteSuppressedDestinationResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSuppressedDestination",
}));

export type DeleteTenantError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Delete an existing tenant.
 *
 * When you delete a tenant, its associations with resources
 * are removed, but the resources themselves are not deleted.
 */
export const deleteTenant: API.OperationMethod<
  DeleteTenantRequest,
  DeleteTenantResponse,
  DeleteTenantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108, __c13, 4) as any as S.Schema<DeleteTenantRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<DeleteTenantResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTenant",
}));

export type DeleteTenantResourceAssociationError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Delete an association between a tenant and a resource.
 *
 * When you delete a tenant-resource association, the resource itself is not deleted,
 * only its association with the specific tenant is removed. After removal, the resource
 * will no longer be available for use with that tenant's email sending operations.
 */
export const deleteTenantResourceAssociation: API.OperationMethod<
  DeleteTenantResourceAssociationRequest,
  DeleteTenantResourceAssociationResponse,
  DeleteTenantResourceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<DeleteTenantResourceAssociationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteTenantResourceAssociationResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTenantResourceAssociation",
}));

export type DisassociateEmailIdentityCertificateError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes the association between an S/MIME certificate and an email identity. After the
 * association is removed, Amazon SES API v2 stops adding an S/MIME signature to messages sent from
 * that address.
 *
 * If the email identity is a domain, specify the `FromAddress` whose
 * certificate association you want to remove.
 *
 * This operation is idempotent. If the specified email identity exists but there's no
 * matching certificate association, the operation succeeds without making any changes.
 * Amazon SES API v2 returns a `NotFoundException` only when the specified email identity
 * doesn't exist.
 */
export const disassociateEmailIdentityCertificate: API.OperationMethod<
  DisassociateEmailIdentityCertificateRequest,
  DisassociateEmailIdentityCertificateResponse,
  DisassociateEmailIdentityCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<DisassociateEmailIdentityCertificateRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisassociateEmailIdentityCertificateResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateEmailIdentityCertificate",
}));

export type GetAccountError = BadRequestException | TooManyRequestsException | CommonErrors;
/**
 * Obtain information about the email-sending status and capabilities of your Amazon SES
 * account in the current Amazon Web Services Region.
 */
export const getAccount: API.OperationMethod<
  GetAccountRequest,
  GetAccountResponse,
  GetAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<GetAccountRequest>,
  output: __S(118, __c14, 6) as any as S.Schema<GetAccountResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccount",
}));

export type GetBlacklistReportsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve a list of the blacklists that your dedicated IP addresses appear on.
 */
export const getBlacklistReports: API.OperationMethod<
  GetBlacklistReportsRequest,
  GetBlacklistReportsResponse,
  GetBlacklistReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119, __c14, 7) as any as S.Schema<GetBlacklistReportsRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<GetBlacklistReportsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBlacklistReports",
}));

export type GetConfigurationSetError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Get information about an existing configuration set, including the dedicated IP pool
 * that it's associated with, whether or not it's enabled for sending email, and
 * more.
 *
 * *Configuration sets* are groups of rules that you can apply to the
 * emails you send. You apply a configuration set to an email by including a reference to
 * the configuration set in the headers of the email. When you apply a configuration set to
 * an email, all of the rules in that configuration set are applied to the email.
 */
export const getConfigurationSet: API.OperationMethod<
  GetConfigurationSetRequest,
  GetConfigurationSetResponse,
  GetConfigurationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<GetConfigurationSetRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<GetConfigurationSetResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfigurationSet",
}));

export type GetConfigurationSetEventDestinationsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve a list of event destinations that are associated with a configuration
 * set.
 *
 * *Events* include message sends, deliveries, opens, clicks, bounces,
 * and complaints. *Event destinations* are places that you can send
 * information about these events to. For example, you can send event data to Amazon EventBridge and
 * associate a rule to send the event to the specified target.
 */
export const getConfigurationSetEventDestinations: API.OperationMethod<
  GetConfigurationSetEventDestinationsRequest,
  GetConfigurationSetEventDestinationsResponse,
  GetConfigurationSetEventDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<GetConfigurationSetEventDestinationsRequest>,
  output: __S(129, __c16, 1) as any as S.Schema<GetConfigurationSetEventDestinationsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfigurationSetEventDestinations",
}));

export type GetContactError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a contact from a contact list.
 */
export const getContact: API.OperationMethod<
  GetContactRequest,
  GetContactResponse,
  GetContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<GetContactRequest>,
  output: __S(131, __c16, 3) as any as S.Schema<GetContactResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContact",
}));

export type GetContactListError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns contact list metadata. It does not return any information about the contacts
 * present in the list.
 */
export const getContactList: API.OperationMethod<
  GetContactListRequest,
  GetContactListResponse,
  GetContactListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132, __c16, 4) as any as S.Schema<GetContactListRequest>,
  output: __S(133, __c16, 5) as any as S.Schema<GetContactListResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContactList",
}));

export type GetCustomVerificationEmailTemplateError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns the custom email verification template for the template name you
 * specify.
 *
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const getCustomVerificationEmailTemplate: API.OperationMethod<
  GetCustomVerificationEmailTemplateRequest,
  GetCustomVerificationEmailTemplateResponse,
  GetCustomVerificationEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<GetCustomVerificationEmailTemplateRequest>,
  output: __S(135, __c16, 7) as any as S.Schema<GetCustomVerificationEmailTemplateResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCustomVerificationEmailTemplate",
}));

export type GetDedicatedIpError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Get information about a dedicated IP address, including the name of the dedicated IP
 * pool that it's associated with, as well information about the automatic warm-up process
 * for the address.
 */
export const getDedicatedIp: API.OperationMethod<
  GetDedicatedIpRequest,
  GetDedicatedIpResponse,
  GetDedicatedIpError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136, __c17, 0) as any as S.Schema<GetDedicatedIpRequest>,
  output: __S(138, __c17, 2) as any as S.Schema<GetDedicatedIpResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDedicatedIp",
}));

export type GetDedicatedIpPoolError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve information about the dedicated pool.
 */
export const getDedicatedIpPool: API.OperationMethod<
  GetDedicatedIpPoolRequest,
  GetDedicatedIpPoolResponse,
  GetDedicatedIpPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139, __c17, 3) as any as S.Schema<GetDedicatedIpPoolRequest>,
  output: __S(141, __c17, 5) as any as S.Schema<GetDedicatedIpPoolResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDedicatedIpPool",
}));

export type GetDedicatedIpsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List the dedicated IP addresses that are associated with your Amazon Web Services
 * account.
 */
export const getDedicatedIps: API.PaginatedOperationMethod<
  GetDedicatedIpsRequest,
  GetDedicatedIpsResponse,
  GetDedicatedIpsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<GetDedicatedIpsRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<GetDedicatedIpsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDedicatedIps",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type GetDeliverabilityDashboardOptionsError =
  | BadRequestException
  | LimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve information about the status of the Deliverability dashboard for your account. When
 * the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other
 * metrics for the domains that you use to send email. You also gain the ability to perform
 * predictive inbox placement tests.
 *
 * When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 * to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 * information about the features and cost of a Deliverability dashboard subscription, see Amazon SES Pricing.
 */
export const getDeliverabilityDashboardOptions: API.OperationMethod<
  GetDeliverabilityDashboardOptionsRequest,
  GetDeliverabilityDashboardOptionsResponse,
  GetDeliverabilityDashboardOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<GetDeliverabilityDashboardOptionsRequest>,
  output: __S(149, __c18, 5) as any as S.Schema<GetDeliverabilityDashboardOptionsResponse>,
  errors: [BadRequestException, LimitExceededException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeliverabilityDashboardOptions",
}));

export type GetDeliverabilityTestReportError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve the results of a predictive inbox placement test.
 */
export const getDeliverabilityTestReport: API.OperationMethod<
  GetDeliverabilityTestReportRequest,
  GetDeliverabilityTestReportResponse,
  GetDeliverabilityTestReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(150, __c18, 6) as any as S.Schema<GetDeliverabilityTestReportRequest>,
  output: __S(155, __c19, 3) as any as S.Schema<GetDeliverabilityTestReportResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeliverabilityTestReport",
}));

export type GetDomainDeliverabilityCampaignError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve all the deliverability data for a specific campaign. This data is available
 * for a campaign only if the campaign sent email by using a domain that the
 * Deliverability dashboard is enabled for.
 */
export const getDomainDeliverabilityCampaign: API.OperationMethod<
  GetDomainDeliverabilityCampaignRequest,
  GetDomainDeliverabilityCampaignResponse,
  GetDomainDeliverabilityCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(156, __c19, 4) as any as S.Schema<GetDomainDeliverabilityCampaignRequest>,
  output: __S(158, __c19, 6) as any as S.Schema<GetDomainDeliverabilityCampaignResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomainDeliverabilityCampaign",
}));

export type GetDomainStatisticsReportError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve inbox placement and engagement rates for the domains that you use to send
 * email.
 */
export const getDomainStatisticsReport: API.OperationMethod<
  GetDomainStatisticsReportRequest,
  GetDomainStatisticsReportResponse,
  GetDomainStatisticsReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<GetDomainStatisticsReportRequest>,
  output: __S(166, __c20, 6) as any as S.Schema<GetDomainStatisticsReportResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomainStatisticsReport",
}));

export type GetEmailAddressInsightsError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides validation insights about a specific email address, including syntax validation, DNS record checks, mailbox existence, and other deliverability factors.
 */
export const getEmailAddressInsights: API.OperationMethod<
  GetEmailAddressInsightsRequest,
  GetEmailAddressInsightsResponse,
  GetEmailAddressInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<GetEmailAddressInsightsRequest>,
  output: __S(171, __c21, 3) as any as S.Schema<GetEmailAddressInsightsResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEmailAddressInsights",
}));

export type GetEmailIdentityError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides information about a specific identity, including the identity's verification
 * status, sending authorization policies, its DKIM authentication status, and its custom
 * Mail-From settings.
 */
export const getEmailIdentity: API.OperationMethod<
  GetEmailIdentityRequest,
  GetEmailIdentityResponse,
  GetEmailIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(172, __c21, 4) as any as S.Schema<GetEmailIdentityRequest>,
  output: __S(177, __c22, 1) as any as S.Schema<GetEmailIdentityResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEmailIdentity",
}));

export type GetEmailIdentityPoliciesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns the requested sending authorization policies for the given identity (an email
 * address or a domain). The policies are returned as a map of policy names to policy
 * contents. You can retrieve a maximum of 20 policies at a time.
 *
 * This API is for the identity owner only. If you have not verified the identity,
 * this API will return an error.
 *
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const getEmailIdentityPolicies: API.OperationMethod<
  GetEmailIdentityPoliciesRequest,
  GetEmailIdentityPoliciesResponse,
  GetEmailIdentityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178, __c22, 2) as any as S.Schema<GetEmailIdentityPoliciesRequest>,
  output: __S(179, __c22, 3) as any as S.Schema<GetEmailIdentityPoliciesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEmailIdentityPolicies",
}));

export type GetEmailTemplateError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays the template object (which includes the subject line, HTML part and text
 * part) for the template you specify.
 *
 * You can execute this operation no more than 50 times per second.
 */
export const getEmailTemplate: API.OperationMethod<
  GetEmailTemplateRequest,
  GetEmailTemplateResponse,
  GetEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180, __c22, 4) as any as S.Schema<GetEmailTemplateRequest>,
  output: __S(181, __c22, 5) as any as S.Schema<GetEmailTemplateResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEmailTemplate",
}));

export type GetExportJobError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides information about an export job.
 */
export const getExportJob: API.OperationMethod<
  GetExportJobRequest,
  GetExportJobResponse,
  GetExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<GetExportJobRequest>,
  output: __S(185, __c23, 1) as any as S.Schema<GetExportJobResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExportJob",
}));

export type GetImportJobError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides information about an import job.
 */
export const getImportJob: API.OperationMethod<
  GetImportJobRequest,
  GetImportJobResponse,
  GetImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186, __c23, 2) as any as S.Schema<GetImportJobRequest>,
  output: __S(187, __c23, 3) as any as S.Schema<GetImportJobResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImportJob",
}));

export type GetMessageInsightsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides information about a specific message, including the from address, the
 * subject, the recipient address, email tags, as well as events associated with the message.
 *
 * You can execute this operation no more than once per second.
 */
export const getMessageInsights: API.OperationMethod<
  GetMessageInsightsRequest,
  GetMessageInsightsResponse,
  GetMessageInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188, __c23, 4) as any as S.Schema<GetMessageInsightsRequest>,
  output: __S(196, __c24, 4) as any as S.Schema<GetMessageInsightsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMessageInsights",
}));

export type GetMultiRegionEndpointError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays the multi-region endpoint (global-endpoint) configuration.
 *
 * Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region
 * where operation is executed can be displayed.
 */
export const getMultiRegionEndpoint: API.OperationMethod<
  GetMultiRegionEndpointRequest,
  GetMultiRegionEndpointResponse,
  GetMultiRegionEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(197, __c24, 5) as any as S.Schema<GetMultiRegionEndpointRequest>,
  output: __S(198, __c24, 6) as any as S.Schema<GetMultiRegionEndpointResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMultiRegionEndpoint",
}));

export type GetReputationEntityError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve information about a specific reputation entity, including its reputation
 * management policy, customer-managed status, Amazon Web Services Amazon SES-managed status, and aggregate
 * sending status.
 *
 * *Reputation entities* represent resources in your Amazon SES account that have reputation
 * tracking and management capabilities. The reputation impact reflects the highest
 * impact reputation finding for the entity. Reputation findings can be retrieved
 * using the `ListRecommendations` operation.
 */
export const getReputationEntity: API.OperationMethod<
  GetReputationEntityRequest,
  GetReputationEntityResponse,
  GetReputationEntityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(199, __c24, 7) as any as S.Schema<GetReputationEntityRequest>,
  output: __S(202, __c25, 2) as any as S.Schema<GetReputationEntityResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReputationEntity",
}));

export type GetSuppressedDestinationError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about a specific email address that's on the suppression list
 * for your account or for a specific tenant. To target a tenant's suppression list,
 * specify the `TenantName` parameter. If you omit `TenantName`,
 * the operation targets the account-level suppression list.
 */
export const getSuppressedDestination: API.OperationMethod<
  GetSuppressedDestinationRequest,
  GetSuppressedDestinationResponse,
  GetSuppressedDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203, __c25, 3) as any as S.Schema<GetSuppressedDestinationRequest>,
  output: __S(206, __c25, 6) as any as S.Schema<GetSuppressedDestinationResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSuppressedDestination",
}));

export type GetTenantError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Get information about a specific tenant, including the tenant's name, ID, ARN,
 * creation timestamp, tags, sending status, and suppression attributes.
 */
export const getTenant: API.OperationMethod<
  GetTenantRequest,
  GetTenantResponse,
  GetTenantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207, __c25, 7) as any as S.Schema<GetTenantRequest>,
  output: __S(208, __c26, 0) as any as S.Schema<GetTenantResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTenant",
}));

export type ListConfigurationSetsError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List all of the configuration sets associated with your account in the current
 * region.
 *
 * *Configuration sets* are groups of rules that you can apply to the
 * emails you send. You apply a configuration set to an email by including a reference to
 * the configuration set in the headers of the email. When you apply a configuration set to
 * an email, all of the rules in that configuration set are applied to the email.
 */
export const listConfigurationSets: API.PaginatedOperationMethod<
  ListConfigurationSetsRequest,
  ListConfigurationSetsResponse,
  ListConfigurationSetsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(209, __c26, 1) as any as S.Schema<ListConfigurationSetsRequest>,
  output: __S(210, __c26, 2) as any as S.Schema<ListConfigurationSetsResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationSets",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListContactListsError = BadRequestException | TooManyRequestsException | CommonErrors;
/**
 * Lists all of the contact lists available.
 *
 * If your output includes a "NextToken" field with a string value, this indicates there may be additional
 * contacts on the filtered list - regardless of the number of contacts returned.
 */
export const listContactLists: API.PaginatedOperationMethod<
  ListContactListsRequest,
  ListContactListsResponse,
  ListContactListsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(211, __c26, 3) as any as S.Schema<ListContactListsRequest>,
  output: __S(214, __c26, 6) as any as S.Schema<ListContactListsResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContactLists",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListContactsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists the contacts present in a specific contact list.
 */
export const listContacts: API.PaginatedOperationMethod<
  ListContactsRequest,
  ListContactsResponse,
  ListContactsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(217, __c27, 1) as any as S.Schema<ListContactsRequest>,
  output: __S(220, __c27, 4) as any as S.Schema<ListContactsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContacts",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListCustomVerificationEmailTemplatesError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists the existing custom verification email templates for your account in the current
 * Amazon Web Services Region.
 *
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const listCustomVerificationEmailTemplates: API.PaginatedOperationMethod<
  ListCustomVerificationEmailTemplatesRequest,
  ListCustomVerificationEmailTemplatesResponse,
  ListCustomVerificationEmailTemplatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(221, __c27, 5) as any as S.Schema<ListCustomVerificationEmailTemplatesRequest>,
  output: __S(224, __c28, 0) as any as S.Schema<ListCustomVerificationEmailTemplatesResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomVerificationEmailTemplates",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListDedicatedIpPoolsError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List all of the dedicated IP pools that exist in your Amazon Web Services account in the current
 * Region.
 */
export const listDedicatedIpPools: API.PaginatedOperationMethod<
  ListDedicatedIpPoolsRequest,
  ListDedicatedIpPoolsResponse,
  ListDedicatedIpPoolsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(225, __c28, 1) as any as S.Schema<ListDedicatedIpPoolsRequest>,
  output: __S(226, __c28, 2) as any as S.Schema<ListDedicatedIpPoolsResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDedicatedIpPools",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListDeliverabilityTestReportsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
 * predictive inbox placement tests that are complete, you can use the `GetDeliverabilityTestReport`
 * operation to view the results.
 */
export const listDeliverabilityTestReports: API.PaginatedOperationMethod<
  ListDeliverabilityTestReportsRequest,
  ListDeliverabilityTestReportsResponse,
  ListDeliverabilityTestReportsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(227, __c28, 3) as any as S.Schema<ListDeliverabilityTestReportsRequest>,
  output: __S(229, __c28, 5) as any as S.Schema<ListDeliverabilityTestReportsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeliverabilityTestReports",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListDomainDeliverabilityCampaignsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve deliverability data for all the campaigns that used a specific domain to send
 * email during a specified time range. This data is available for a domain only if you
 * enabled the Deliverability dashboard for the domain.
 */
export const listDomainDeliverabilityCampaigns: API.PaginatedOperationMethod<
  ListDomainDeliverabilityCampaignsRequest,
  ListDomainDeliverabilityCampaignsResponse,
  ListDomainDeliverabilityCampaignsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(230, __c28, 6) as any as S.Schema<ListDomainDeliverabilityCampaignsRequest>,
  output: __S(232, __c29, 0) as any as S.Schema<ListDomainDeliverabilityCampaignsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainDeliverabilityCampaigns",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListEmailIdentitiesError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of all of the email identities that are associated with your Amazon Web Services
 * account. An identity can be either an email address or a domain. This operation returns
 * identities that are verified as well as those that aren't. This operation returns
 * identities that are associated with Amazon SES and Amazon Pinpoint.
 */
export const listEmailIdentities: API.PaginatedOperationMethod<
  ListEmailIdentitiesRequest,
  ListEmailIdentitiesResponse,
  ListEmailIdentitiesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(233, __c29, 1) as any as S.Schema<ListEmailIdentitiesRequest>,
  output: __S(236, __c29, 4) as any as S.Schema<ListEmailIdentitiesResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEmailIdentities",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListEmailIdentityCertificatesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists the S/MIME certificates that are associated with the specified email identity.
 * The results include certificates in all states, such as `PROVISIONING`,
 * `ACTIVE`, `INACTIVE`, `DEPROVISIONING`, and
 * `FAILED`.
 *
 * If a certificate has passed its expiration time, it's returned with a status of
 * `FAILED`.
 *
 * We recommend using pagination to ensure that the operation returns quickly and
 * successfully. When there are more results than fit in a single response, the response
 * includes a `NextToken` value that you use in a subsequent call to retrieve
 * the next set of results.
 */
export const listEmailIdentityCertificates: API.PaginatedOperationMethod<
  ListEmailIdentityCertificatesRequest,
  ListEmailIdentityCertificatesResponse,
  ListEmailIdentityCertificatesError,
  Credentials | HttpClient.HttpClient,
  IdentityCertificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(237, __c29, 5) as any as S.Schema<ListEmailIdentityCertificatesRequest>,
  output: __S(240, __c30, 0) as any as S.Schema<ListEmailIdentityCertificatesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEmailIdentityCertificates",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Certificates",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListEmailTemplatesError = BadRequestException | TooManyRequestsException | CommonErrors;
/**
 * Lists the email templates present in your Amazon SES account in the current Amazon Web Services
 * Region.
 *
 * You can execute this operation no more than once per second.
 */
export const listEmailTemplates: API.PaginatedOperationMethod<
  ListEmailTemplatesRequest,
  ListEmailTemplatesResponse,
  ListEmailTemplatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(241, __c30, 1) as any as S.Schema<ListEmailTemplatesRequest>,
  output: __S(244, __c30, 4) as any as S.Schema<ListEmailTemplatesResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEmailTemplates",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListExportJobsError = BadRequestException | TooManyRequestsException | CommonErrors;
/**
 * Lists all of the export jobs.
 */
export const listExportJobs: API.PaginatedOperationMethod<
  ListExportJobsRequest,
  ListExportJobsResponse,
  ListExportJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(245, __c30, 5) as any as S.Schema<ListExportJobsRequest>,
  output: __S(248, __c31, 0) as any as S.Schema<ListExportJobsResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExportJobs",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListImportJobsError = BadRequestException | TooManyRequestsException | CommonErrors;
/**
 * Lists all of the import jobs.
 */
export const listImportJobs: API.PaginatedOperationMethod<
  ListImportJobsRequest,
  ListImportJobsResponse,
  ListImportJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(249, __c31, 1) as any as S.Schema<ListImportJobsRequest>,
  output: __S(252, __c31, 4) as any as S.Schema<ListImportJobsResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImportJobs",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListMultiRegionEndpointsError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List the multi-region endpoints (global-endpoints).
 *
 * Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region
 * where operation is executed will be listed.
 */
export const listMultiRegionEndpoints: API.PaginatedOperationMethod<
  ListMultiRegionEndpointsRequest,
  ListMultiRegionEndpointsResponse,
  ListMultiRegionEndpointsError,
  Credentials | HttpClient.HttpClient,
  MultiRegionEndpoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(253, __c31, 5) as any as S.Schema<ListMultiRegionEndpointsRequest>,
  output: __S(256, __c32, 0) as any as S.Schema<ListMultiRegionEndpointsResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMultiRegionEndpoints",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "MultiRegionEndpoints",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListRecommendationsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.
 *
 * You can execute this operation no more than once per second.
 */
export const listRecommendations: API.PaginatedOperationMethod<
  ListRecommendationsRequest,
  ListRecommendationsResponse,
  ListRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(257, __c32, 1) as any as S.Schema<ListRecommendationsRequest>,
  output: __S(260, __c32, 4) as any as S.Schema<ListRecommendationsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendations",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListReputationEntitiesError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List reputation entities in your Amazon SES account in the current Amazon Web Services Region.
 * You can filter the results by entity type, reputation impact, sending status,
 * or entity reference prefix.
 *
 * *Reputation entities* represent resources in your account that have reputation
 * tracking and management capabilities. Use this operation to get an overview of
 * all entities and their current reputation status.
 */
export const listReputationEntities: API.PaginatedOperationMethod<
  ListReputationEntitiesRequest,
  ListReputationEntitiesResponse,
  ListReputationEntitiesError,
  Credentials | HttpClient.HttpClient,
  ReputationEntity
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(261, __c32, 5) as any as S.Schema<ListReputationEntitiesRequest>,
  output: __S(263, __c32, 7) as any as S.Schema<ListReputationEntitiesResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReputationEntities",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ReputationEntities",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListResourceTenantsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List all tenants associated with a specific resource.
 *
 * This operation returns a list of tenants that are associated with the specified
 * resource. This is useful for understanding which tenants are currently using a particular
 * resource such as an email identity, configuration set, or email template.
 */
export const listResourceTenants: API.PaginatedOperationMethod<
  ListResourceTenantsRequest,
  ListResourceTenantsResponse,
  ListResourceTenantsError,
  Credentials | HttpClient.HttpClient,
  ResourceTenantMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(264, __c33, 0) as any as S.Schema<ListResourceTenantsRequest>,
  output: __S(267, __c33, 3) as any as S.Schema<ListResourceTenantsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceTenants",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourceTenants",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListSuppressedDestinationsError =
  | BadRequestException
  | InvalidNextTokenException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves a list of email addresses that are on the suppression list for your
 * account or for a specific tenant. To target a tenant's suppression list, specify the
 * `TenantName` parameter. If you omit `TenantName`, the operation
 * targets the account-level suppression list.
 */
export const listSuppressedDestinations: API.PaginatedOperationMethod<
  ListSuppressedDestinationsRequest,
  ListSuppressedDestinationsResponse,
  ListSuppressedDestinationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(268, __c33, 4) as any as S.Schema<ListSuppressedDestinationsRequest>,
  output: __S(271, __c33, 7) as any as S.Schema<ListSuppressedDestinationsResponse>,
  errors: [
    BadRequestException,
    InvalidNextTokenException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSuppressedDestinations",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "PageSize" } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve a list of the tags (keys and values) that are associated with a specified
 * resource. A *tag* is a label that you optionally define and associate
 * with a resource. Each tag consists of a required *tag key* and an
 * optional associated *tag value*. A tag key is a general label that
 * acts as a category for more specific tag values. A tag value acts as a descriptor within
 * a tag key.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(272, __c34, 0) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTenantResourcesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List all resources associated with a specific tenant.
 *
 * This operation returns a list of resources (email identities, configuration sets,
 * or email templates) that are associated with the specified tenant. You can optionally
 * filter the results by resource type.
 */
export const listTenantResources: API.PaginatedOperationMethod<
  ListTenantResourcesRequest,
  ListTenantResourcesResponse,
  ListTenantResourcesError,
  Credentials | HttpClient.HttpClient,
  TenantResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(274, __c34, 2) as any as S.Schema<ListTenantResourcesRequest>,
  output: __S(277, __c34, 5) as any as S.Schema<ListTenantResourcesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTenantResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TenantResources",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListTenantsError = BadRequestException | TooManyRequestsException | CommonErrors;
/**
 * List all tenants associated with your account in the current Amazon Web Services Region.
 *
 * This operation returns basic information about each tenant,
 * such as tenant name, ID, ARN, and creation timestamp.
 */
export const listTenants: API.PaginatedOperationMethod<
  ListTenantsRequest,
  ListTenantsResponse,
  ListTenantsError,
  Credentials | HttpClient.HttpClient,
  TenantInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(278, __c34, 6) as any as S.Schema<ListTenantsRequest>,
  output: __S(281, __c35, 1) as any as S.Schema<ListTenantsResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTenants",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Tenants",
    pageSize: "PageSize",
  } as const,
})) as any;

export type PutAccountDedicatedIpWarmupAttributesError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enable or disable the automatic warm-up feature for dedicated IP addresses.
 */
export const putAccountDedicatedIpWarmupAttributes: API.OperationMethod<
  PutAccountDedicatedIpWarmupAttributesRequest,
  PutAccountDedicatedIpWarmupAttributesResponse,
  PutAccountDedicatedIpWarmupAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(282, __c35, 2) as any as S.Schema<PutAccountDedicatedIpWarmupAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutAccountDedicatedIpWarmupAttributesResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountDedicatedIpWarmupAttributes",
}));

export type PutAccountDetailsError =
  | BadRequestException
  | ConflictException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Update your Amazon SES account details.
 */
export const putAccountDetails: API.OperationMethod<
  PutAccountDetailsRequest,
  PutAccountDetailsResponse,
  PutAccountDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<PutAccountDetailsRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<PutAccountDetailsResponse>,
  errors: [BadRequestException, ConflictException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountDetails",
}));

export type PutAccountPricingAttributesError =
  | BadRequestException
  | ConflictException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Set the pricing plan for your Amazon SES account.
 */
export const putAccountPricingAttributes: API.OperationMethod<
  PutAccountPricingAttributesRequest,
  PutAccountPricingAttributesResponse,
  PutAccountPricingAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(284, __c35, 4) as any as S.Schema<PutAccountPricingAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutAccountPricingAttributesResponse>,
  errors: [BadRequestException, ConflictException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountPricingAttributes",
}));

export type PutAccountSendingAttributesError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enable or disable the ability of your account to send email.
 */
export const putAccountSendingAttributes: API.OperationMethod<
  PutAccountSendingAttributesRequest,
  PutAccountSendingAttributesResponse,
  PutAccountSendingAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(285, __c35, 5) as any as S.Schema<PutAccountSendingAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutAccountSendingAttributesResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountSendingAttributes",
}));

export type PutAccountSuppressionAttributesError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Change the settings for the account-level suppression list.
 */
export const putAccountSuppressionAttributes: API.OperationMethod<
  PutAccountSuppressionAttributesRequest,
  PutAccountSuppressionAttributesResponse,
  PutAccountSuppressionAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(286, __c35, 6) as any as S.Schema<PutAccountSuppressionAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutAccountSuppressionAttributesResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountSuppressionAttributes",
}));

export type PutAccountVdmAttributesError =
  | BadRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Update your Amazon SES account VDM attributes.
 *
 * You can execute this operation no more than once per second.
 */
export const putAccountVdmAttributes: API.OperationMethod<
  PutAccountVdmAttributesRequest,
  PutAccountVdmAttributesResponse,
  PutAccountVdmAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(287, __c35, 7) as any as S.Schema<PutAccountVdmAttributesRequest>,
  output: __S(288, __c36, 0) as any as S.Schema<PutAccountVdmAttributesResponse>,
  errors: [BadRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountVdmAttributes",
}));

export type PutConfigurationSetArchivingOptionsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Associate the configuration set with a MailManager archive. When you send email using the
 * `SendEmail` or `SendBulkEmail` operations the message as it will be given
 * to the receiving SMTP server will be archived, along with the recipient information.
 */
export const putConfigurationSetArchivingOptions: API.OperationMethod<
  PutConfigurationSetArchivingOptionsRequest,
  PutConfigurationSetArchivingOptionsResponse,
  PutConfigurationSetArchivingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(289, __c36, 1) as any as S.Schema<PutConfigurationSetArchivingOptionsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutConfigurationSetArchivingOptionsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutConfigurationSetArchivingOptions",
}));

export type PutConfigurationSetDeliveryOptionsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools
 * to create groups of dedicated IP addresses for sending specific types of email.
 */
export const putConfigurationSetDeliveryOptions: API.OperationMethod<
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsResponse,
  PutConfigurationSetDeliveryOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(290, __c36, 2) as any as S.Schema<PutConfigurationSetDeliveryOptionsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutConfigurationSetDeliveryOptionsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutConfigurationSetDeliveryOptions",
}));

export type PutConfigurationSetReputationOptionsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enable or disable collection of reputation metrics for emails that you send using a
 * particular configuration set in a specific Amazon Web Services Region.
 */
export const putConfigurationSetReputationOptions: API.OperationMethod<
  PutConfigurationSetReputationOptionsRequest,
  PutConfigurationSetReputationOptionsResponse,
  PutConfigurationSetReputationOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(291, __c36, 3) as any as S.Schema<PutConfigurationSetReputationOptionsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutConfigurationSetReputationOptionsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutConfigurationSetReputationOptions",
}));

export type PutConfigurationSetSendingOptionsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enable or disable email sending for messages that use a particular configuration set
 * in a specific Amazon Web Services Region.
 */
export const putConfigurationSetSendingOptions: API.OperationMethod<
  PutConfigurationSetSendingOptionsRequest,
  PutConfigurationSetSendingOptionsResponse,
  PutConfigurationSetSendingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(292, __c36, 4) as any as S.Schema<PutConfigurationSetSendingOptionsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutConfigurationSetSendingOptionsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutConfigurationSetSendingOptions",
}));

export type PutConfigurationSetSuppressionOptionsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Specify the suppression list preferences for a configuration set. You can
 * also use this operation to specify a `SuppressionScope` to override the
 * suppression scope of the tenant or account for emails sent using this configuration
 * set.
 */
export const putConfigurationSetSuppressionOptions: API.OperationMethod<
  PutConfigurationSetSuppressionOptionsRequest,
  PutConfigurationSetSuppressionOptionsResponse,
  PutConfigurationSetSuppressionOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(293, __c36, 5) as any as S.Schema<PutConfigurationSetSuppressionOptionsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutConfigurationSetSuppressionOptionsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutConfigurationSetSuppressionOptions",
}));

export type PutConfigurationSetTrackingOptionsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Specify a custom domain to use for open and click tracking elements in email that you
 * send.
 */
export const putConfigurationSetTrackingOptions: API.OperationMethod<
  PutConfigurationSetTrackingOptionsRequest,
  PutConfigurationSetTrackingOptionsResponse,
  PutConfigurationSetTrackingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(294, __c36, 6) as any as S.Schema<PutConfigurationSetTrackingOptionsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutConfigurationSetTrackingOptionsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutConfigurationSetTrackingOptions",
}));

export type PutConfigurationSetVdmOptionsError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Specify VDM preferences for email that you send using the configuration set.
 *
 * You can execute this operation no more than once per second.
 */
export const putConfigurationSetVdmOptions: API.OperationMethod<
  PutConfigurationSetVdmOptionsRequest,
  PutConfigurationSetVdmOptionsResponse,
  PutConfigurationSetVdmOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(295, __c36, 7) as any as S.Schema<PutConfigurationSetVdmOptionsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutConfigurationSetVdmOptionsResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutConfigurationSetVdmOptions",
}));

export type PutDedicatedIpInPoolError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Move a dedicated IP address to an existing dedicated IP pool.
 *
 * The dedicated IP address that you specify must already exist, and must be
 * associated with your Amazon Web Services account.
 *
 * The dedicated IP pool you specify must already exist. You can create a new pool by
 * using the `CreateDedicatedIpPool` operation.
 */
export const putDedicatedIpInPool: API.OperationMethod<
  PutDedicatedIpInPoolRequest,
  PutDedicatedIpInPoolResponse,
  PutDedicatedIpInPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(296, __c37, 0) as any as S.Schema<PutDedicatedIpInPoolRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<PutDedicatedIpInPoolResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDedicatedIpInPool",
}));

export type PutDedicatedIpPoolScalingAttributesError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Used to convert a dedicated IP pool to a different scaling mode.
 *
 * `MANAGED` pools cannot be converted to `STANDARD` scaling mode.
 */
export const putDedicatedIpPoolScalingAttributes: API.OperationMethod<
  PutDedicatedIpPoolScalingAttributesRequest,
  PutDedicatedIpPoolScalingAttributesResponse,
  PutDedicatedIpPoolScalingAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(297, __c37, 1) as any as S.Schema<PutDedicatedIpPoolScalingAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutDedicatedIpPoolScalingAttributesResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDedicatedIpPoolScalingAttributes",
}));

export type PutDedicatedIpWarmupAttributesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 *
 */
export const putDedicatedIpWarmupAttributes: API.OperationMethod<
  PutDedicatedIpWarmupAttributesRequest,
  PutDedicatedIpWarmupAttributesResponse,
  PutDedicatedIpWarmupAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(298, __c37, 2) as any as S.Schema<PutDedicatedIpWarmupAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutDedicatedIpWarmupAttributesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDedicatedIpWarmupAttributes",
}));

export type PutDeliverabilityDashboardOptionError =
  | AlreadyExistsException
  | BadRequestException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 * access to reputation, deliverability, and other metrics for the domains that you use to
 * send email. You also gain the ability to perform predictive inbox placement tests.
 *
 * When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 * to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 * information about the features and cost of a Deliverability dashboard subscription, see Amazon SES Pricing.
 */
export const putDeliverabilityDashboardOption: API.OperationMethod<
  PutDeliverabilityDashboardOptionRequest,
  PutDeliverabilityDashboardOptionResponse,
  PutDeliverabilityDashboardOptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(299, __c37, 3) as any as S.Schema<PutDeliverabilityDashboardOptionRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutDeliverabilityDashboardOptionResponse>,
  errors: [
    AlreadyExistsException,
    BadRequestException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDeliverabilityDashboardOption",
}));

export type PutEmailIdentityConfigurationSetAttributesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Used to associate a configuration set with an email identity.
 */
export const putEmailIdentityConfigurationSetAttributes: API.OperationMethod<
  PutEmailIdentityConfigurationSetAttributesRequest,
  PutEmailIdentityConfigurationSetAttributesResponse,
  PutEmailIdentityConfigurationSetAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(300, __c37, 4) as any as S.Schema<PutEmailIdentityConfigurationSetAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutEmailIdentityConfigurationSetAttributesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEmailIdentityConfigurationSetAttributes",
}));

export type PutEmailIdentityDkimAttributesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Used to enable or disable DKIM authentication for an email identity.
 */
export const putEmailIdentityDkimAttributes: API.OperationMethod<
  PutEmailIdentityDkimAttributesRequest,
  PutEmailIdentityDkimAttributesResponse,
  PutEmailIdentityDkimAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(301, __c37, 5) as any as S.Schema<PutEmailIdentityDkimAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutEmailIdentityDkimAttributesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEmailIdentityDkimAttributes",
}));

export type PutEmailIdentityDkimSigningAttributesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Used to configure or change the DKIM authentication settings for an email domain
 * identity. You can use this operation to do any of the following:
 *
 * - Update the signing attributes for an identity that uses Bring Your Own DKIM
 * (BYODKIM).
 *
 * - Update the key length that should be used for Easy DKIM.
 *
 * - Change from using no DKIM authentication to using Easy DKIM.
 *
 * - Change from using no DKIM authentication to using BYODKIM.
 *
 * - Change from using Easy DKIM to using BYODKIM.
 *
 * - Change from using BYODKIM to using Easy DKIM.
 */
export const putEmailIdentityDkimSigningAttributes: API.OperationMethod<
  PutEmailIdentityDkimSigningAttributesRequest,
  PutEmailIdentityDkimSigningAttributesResponse,
  PutEmailIdentityDkimSigningAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(302, __c37, 6) as any as S.Schema<PutEmailIdentityDkimSigningAttributesRequest>,
  output: __S(303, __c37, 7) as any as S.Schema<PutEmailIdentityDkimSigningAttributesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEmailIdentityDkimSigningAttributes",
}));

export type PutEmailIdentityFeedbackAttributesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Used to enable or disable feedback forwarding for an identity. This setting determines
 * what happens when an identity is used to send an email that results in a bounce or
 * complaint event.
 *
 * If the value is `true`, you receive email notifications when bounce or
 * complaint events occur. These notifications are sent to the address that you specified
 * in the `Return-Path` header of the original email.
 *
 * You're required to have a method of tracking bounces and complaints. If you haven't
 * set up another mechanism for receiving bounce or complaint notifications (for example,
 * by setting up an event destination), you receive an email notification when these events
 * occur (even if this setting is disabled).
 */
export const putEmailIdentityFeedbackAttributes: API.OperationMethod<
  PutEmailIdentityFeedbackAttributesRequest,
  PutEmailIdentityFeedbackAttributesResponse,
  PutEmailIdentityFeedbackAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(304, __c38, 0) as any as S.Schema<PutEmailIdentityFeedbackAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutEmailIdentityFeedbackAttributesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEmailIdentityFeedbackAttributes",
}));

export type PutEmailIdentityMailFromAttributesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Used to enable or disable the custom Mail-From domain configuration for an email
 * identity.
 */
export const putEmailIdentityMailFromAttributes: API.OperationMethod<
  PutEmailIdentityMailFromAttributesRequest,
  PutEmailIdentityMailFromAttributesResponse,
  PutEmailIdentityMailFromAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(305, __c38, 1) as any as S.Schema<PutEmailIdentityMailFromAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutEmailIdentityMailFromAttributesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEmailIdentityMailFromAttributes",
}));

export type PutSuppressedDestinationError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds an email address to the suppression list for your account or for a specific
 * tenant. To target a tenant's suppression list, specify the `TenantName`
 * parameter. If you omit `TenantName`, the address is added to the
 * account-level suppression list.
 */
export const putSuppressedDestination: API.OperationMethod<
  PutSuppressedDestinationRequest,
  PutSuppressedDestinationResponse,
  PutSuppressedDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(306, __c38, 2) as any as S.Schema<PutSuppressedDestinationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutSuppressedDestinationResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSuppressedDestination",
}));

export type PutTenantSuppressionAttributesError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Configure the suppression list preferences for a tenant. Use this operation to enable
 * or disable tenant-level suppression, or to change the suppressed reasons for a tenant.
 *
 * When you set the suppression scope to `TENANT`, Amazon SES maintains a separate
 * suppression list for the tenant. When you set the scope to `ACCOUNT`, the tenant
 * uses the account-level suppression list.
 */
export const putTenantSuppressionAttributes: API.OperationMethod<
  PutTenantSuppressionAttributesRequest,
  PutTenantSuppressionAttributesResponse,
  PutTenantSuppressionAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(307, __c38, 3) as any as S.Schema<PutTenantSuppressionAttributesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutTenantSuppressionAttributesResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTenantSuppressionAttributes",
}));

export type SendBulkEmailError =
  | AccountSuspendedException
  | BadRequestException
  | LimitExceededException
  | MailFromDomainNotVerifiedException
  | MessageRejected
  | NotFoundException
  | SendingPausedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Composes an email message to multiple destinations.
 */
export const sendBulkEmail: API.OperationMethod<
  SendBulkEmailRequest,
  SendBulkEmailResponse,
  SendBulkEmailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(316, __c39, 4) as any as S.Schema<SendBulkEmailRequest>,
  output: __S(319, __c39, 7) as any as S.Schema<SendBulkEmailResponse>,
  errors: [
    AccountSuspendedException,
    BadRequestException,
    LimitExceededException,
    MailFromDomainNotVerifiedException,
    MessageRejected,
    NotFoundException,
    SendingPausedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendBulkEmail",
}));

export type SendCustomVerificationEmailError =
  | BadRequestException
  | LimitExceededException
  | MailFromDomainNotVerifiedException
  | MessageRejected
  | NotFoundException
  | SendingPausedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds an email address to the list of identities for your Amazon SES account in the current
 * Amazon Web Services Region and attempts to verify it. As a result of executing this
 * operation, a customized verification email is sent to the specified address.
 *
 * To use this operation, you must first create a custom verification email template. For
 * more information about creating and using custom verification email templates, see
 * Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const sendCustomVerificationEmail: API.OperationMethod<
  SendCustomVerificationEmailRequest,
  SendCustomVerificationEmailResponse,
  SendCustomVerificationEmailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(320, __c40, 0) as any as S.Schema<SendCustomVerificationEmailRequest>,
  output: __S(321, __c40, 1) as any as S.Schema<SendCustomVerificationEmailResponse>,
  errors: [
    BadRequestException,
    LimitExceededException,
    MailFromDomainNotVerifiedException,
    MessageRejected,
    NotFoundException,
    SendingPausedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendCustomVerificationEmail",
}));

export type SendEmailError =
  | AccountSuspendedException
  | BadRequestException
  | LimitExceededException
  | MailFromDomainNotVerifiedException
  | MessageRejected
  | NotFoundException
  | SendingPausedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Sends an email message. You can use the Amazon SES API v2 to send the following types of
 * messages:
 *
 * - **Simple** - A standard email message. When
 * you create this type of message, you specify the sender, the recipient, and the
 * message body, and Amazon SES assembles the message for you.
 *
 * - **Raw** - A raw, MIME-formatted email
 * message. When you send this type of email, you have to specify all of the
 * message headers, as well as the message body. You can use this message type to
 * send messages that contain attachments. The message that you specify has to be a
 * valid MIME message.
 *
 * - **Templated** - A message that contains
 * personalization tags. When you send this type of email, Amazon SES API v2 automatically
 * replaces the tags with values that you specify.
 */
export const sendEmail: API.OperationMethod<
  SendEmailRequest,
  SendEmailResponse,
  SendEmailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(323, __c40, 3) as any as S.Schema<SendEmailRequest>,
  output: __S(324, __c40, 4) as any as S.Schema<SendEmailResponse>,
  errors: [
    AccountSuspendedException,
    BadRequestException,
    LimitExceededException,
    MailFromDomainNotVerifiedException,
    MessageRejected,
    NotFoundException,
    SendingPausedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendEmail",
}));

export type TagResourceError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Add one or more tags (keys and values) to a specified resource. A
 * *tag* is a label that you optionally define and associate with a
 * resource. Tags can help you categorize and manage resources in different ways, such as
 * by purpose, owner, environment, or other criteria. A resource can have as many as 50
 * tags.
 *
 * Each tag consists of a required *tag key* and an
 * associated *tag value*, both of which you define. A tag key is a
 * general label that acts as a category for more specific tag values. A tag value acts as
 * a descriptor within a tag key.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(325, __c40, 5) as any as S.Schema<TagResourceRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<TagResourceResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TestRenderEmailTemplateError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a preview of the MIME content of an email when provided with a template and a
 * set of replacement data.
 *
 * You can execute this operation no more than once per second.
 */
export const testRenderEmailTemplate: API.OperationMethod<
  TestRenderEmailTemplateRequest,
  TestRenderEmailTemplateResponse,
  TestRenderEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(326, __c40, 6) as any as S.Schema<TestRenderEmailTemplateRequest>,
  output: __S(327, __c40, 7) as any as S.Schema<TestRenderEmailTemplateResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestRenderEmailTemplate",
}));

export type UntagResourceError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Remove one or more tags (keys and values) from a specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(328, __c41, 0) as any as S.Schema<UntagResourceRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<UntagResourceResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateConfigurationSetError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing configuration set.
 *
 * This operation performs a partial update. Only the attributes that you include in the
 * request are updated; any omitted attribute is left unchanged.
 */
export const updateConfigurationSet: API.OperationMethod<
  UpdateConfigurationSetRequest,
  UpdateConfigurationSetResponse,
  UpdateConfigurationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(329, __c41, 1) as any as S.Schema<UpdateConfigurationSetRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<UpdateConfigurationSetResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationSet",
}));

export type UpdateConfigurationSetEventDestinationError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Update the configuration of an event destination for a configuration set.
 *
 * *Events* include message sends, deliveries, opens, clicks, bounces,
 * and complaints. *Event destinations* are places that you can send
 * information about these events to. For example, you can send event data to Amazon EventBridge and
 * associate a rule to send the event to the specified target.
 */
export const updateConfigurationSetEventDestination: API.OperationMethod<
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse,
  UpdateConfigurationSetEventDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(330, __c41, 2) as any as S.Schema<UpdateConfigurationSetEventDestinationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateConfigurationSetEventDestinationResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationSetEventDestination",
}));

export type UpdateContactError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates a contact's preferences for a list.
 *
 * You must specify all existing topic preferences in the
 * `TopicPreferences` object, not just the ones that need updating;
 * otherwise, all your existing preferences will be removed.
 */
export const updateContact: API.OperationMethod<
  UpdateContactRequest,
  UpdateContactResponse,
  UpdateContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(331, __c41, 3) as any as S.Schema<UpdateContactRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<UpdateContactResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateContact",
}));

export type UpdateContactListError =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates contact list metadata. This operation does a complete replacement.
 */
export const updateContactList: API.OperationMethod<
  UpdateContactListRequest,
  UpdateContactListResponse,
  UpdateContactListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(332, __c41, 4) as any as S.Schema<UpdateContactListRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<UpdateContactListResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateContactList",
}));

export type UpdateCustomVerificationEmailTemplateError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing custom verification email template.
 *
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const updateCustomVerificationEmailTemplate: API.OperationMethod<
  UpdateCustomVerificationEmailTemplateRequest,
  UpdateCustomVerificationEmailTemplateResponse,
  UpdateCustomVerificationEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(333, __c41, 5) as any as S.Schema<UpdateCustomVerificationEmailTemplateRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateCustomVerificationEmailTemplateResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCustomVerificationEmailTemplate",
}));

export type UpdateEmailIdentityPolicyError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the specified sending authorization policy for the given identity (an email
 * address or a domain). This API returns successfully even if a policy with the specified
 * name does not exist.
 *
 * This API is for the identity owner only. If you have not verified the identity,
 * this API will return an error.
 *
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const updateEmailIdentityPolicy: API.OperationMethod<
  UpdateEmailIdentityPolicyRequest,
  UpdateEmailIdentityPolicyResponse,
  UpdateEmailIdentityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(334, __c41, 6) as any as S.Schema<UpdateEmailIdentityPolicyRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateEmailIdentityPolicyResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEmailIdentityPolicy",
}));

export type UpdateEmailTemplateError =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an email template. Email templates enable you to send personalized email to
 * one or more destinations in a single API operation. For more information, see the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const updateEmailTemplate: API.OperationMethod<
  UpdateEmailTemplateRequest,
  UpdateEmailTemplateResponse,
  UpdateEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(335, __c41, 7) as any as S.Schema<UpdateEmailTemplateRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<UpdateEmailTemplateResponse>,
  errors: [BadRequestException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEmailTemplate",
}));

export type UpdateReputationEntityCustomerManagedStatusError =
  | BadRequestException
  | ConflictException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Update the customer-managed sending status for a reputation entity. This allows
 * you to enable, disable, or reinstate sending for the entity.
 *
 * The customer-managed status works in conjunction with the Amazon Web Services Amazon SES-managed status
 * to determine the overall sending capability. When you update the customer-managed status,
 * the Amazon Web Services Amazon SES-managed status remains unchanged. If Amazon Web Services Amazon SES has disabled the entity,
 * it will not be allowed to send regardless of the customer-managed status setting. When you
 * reinstate an entity through the customer-managed status, it can continue sending only if
 * the Amazon Web Services Amazon SES-managed status also permits sending, even if there are active reputation
 * findings, until the findings are resolved or new violations occur.
 */
export const updateReputationEntityCustomerManagedStatus: API.OperationMethod<
  UpdateReputationEntityCustomerManagedStatusRequest,
  UpdateReputationEntityCustomerManagedStatusResponse,
  UpdateReputationEntityCustomerManagedStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(336, __c42, 0) as any as S.Schema<UpdateReputationEntityCustomerManagedStatusRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateReputationEntityCustomerManagedStatusResponse>,
  errors: [BadRequestException, ConflictException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReputationEntityCustomerManagedStatus",
}));

export type UpdateReputationEntityPolicyError =
  | BadRequestException
  | ConflictException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Update the reputation management policy for a reputation entity. The policy
 * determines how the entity responds to reputation findings, such as automatically
 * pausing sending when certain thresholds are exceeded.
 *
 * Reputation management policies are Amazon Web Services Amazon SES-managed (predefined policies).
 * You can select from none, standard, and strict policies.
 */
export const updateReputationEntityPolicy: API.OperationMethod<
  UpdateReputationEntityPolicyRequest,
  UpdateReputationEntityPolicyResponse,
  UpdateReputationEntityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(337, __c42, 1) as any as S.Schema<UpdateReputationEntityPolicyRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateReputationEntityPolicyResponse>,
  errors: [BadRequestException, ConflictException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReputationEntityPolicy",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String,
          FromAddress: S.optional(S.String),
          CertificateArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/identity/certificates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateEmailIdentityCertificateRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateEmailIdentityCertificateResponse",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          Namespace: S.String,
          Metric: S.String,
          Dimensions: S.optional(__S(2, __c0, 2)),
          StartDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "BatchGetMetricDataQuery" });
    case 4:
      return S.Array(__S(3, __c0, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ Queries: __S(4, __c0, 4) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/metrics/batch" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetMetricDataRequest",
      });
    case 6:
      return S.Array(/*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")));
    case 7:
      return S.Array(S.Number);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Timestamps: S.optional(__S(6, __c0, 6)),
          Values: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "MetricDataResult" });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Code: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "MetricDataError" });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Results: S.optional(__S(9, __c1, 1)),
          Errors: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({
        identifier: "BatchGetMetricDataResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ JobId: S.String.pipe(T.HttpLabel("JobId")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/export-jobs/{JobId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelExportJobRequest" });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelExportJobResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ CustomRedirectDomain: S.String, HttpsPolicy: S.optional(S.String) }),
      ).annotate({ identifier: "TrackingOptions" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TlsPolicy: S.optional(S.String),
          SendingPoolName: S.optional(S.String),
          MaxDeliverySeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DeliveryOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReputationMetricsEnabled: S.optional(S.Boolean),
          LastFreshStart: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ReputationOptions" });
    case 2:
      return S.suspend(() => S.Struct({ SendingEnabled: S.optional(S.Boolean) })).annotate({
        identifier: "SendingOptions",
      });
    case 3:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() => S.Struct({ ConfidenceVerdictThreshold: S.String })).annotate({
        identifier: "SuppressionConfidenceThreshold",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConditionThresholdEnabled: S.String,
          OverallConfidenceThreshold: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({
        identifier: "SuppressionConditionThreshold",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ConditionThreshold: __S(23, __c2, 7) })).annotate({
        identifier: "SuppressionValidationOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SuppressedReasons: S.optional(__S(21, __c2, 5)),
          SuppressionScope: S.optional(S.String),
          ValidationOptions: S.optional(__S(24, __c3, 0)),
        }),
      ).annotate({ identifier: "SuppressionOptions" });
    case 2:
      return S.suspend(() => S.Struct({ EngagementMetrics: S.optional(S.String) })).annotate({
        identifier: "DashboardOptions",
      });
    case 3:
      return S.suspend(() => S.Struct({ OptimizedSharedDelivery: S.optional(S.String) })).annotate({
        identifier: "GuardianOptions",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DashboardOptions: S.optional(__S(26, __c3, 2)),
          GuardianOptions: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({ identifier: "VdmOptions" });
    case 5:
      return S.suspend(() => S.Struct({ ArchiveArn: S.optional(S.String) })).annotate({
        identifier: "ArchivingOptions",
      });
    case 6:
      return S.suspend(() => S.Struct({ SignatureFormat: S.optional(S.String) })).annotate({
        identifier: "SmimeSigningScheme",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ DefaultScheme: __S(14, __c1, 6) }),
        /*@__PURE__*/ S.Struct({ SmimeScheme: __S(30, __c3, 6) }),
      ]);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ SigningScheme: S.optional(__S(31, __c3, 7)) })).annotate({
        identifier: "MessageSecurityOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String,
          TrackingOptions: S.optional(__S(15, __c1, 7)),
          DeliveryOptions: S.optional(__S(16, __c2, 0)),
          ReputationOptions: S.optional(__S(17, __c2, 1)),
          SendingOptions: S.optional(__S(18, __c2, 2)),
          Tags: S.optional(__S(20, __c2, 4)),
          SuppressionOptions: S.optional(__S(25, __c3, 1)),
          VdmOptions: S.optional(__S(28, __c3, 4)),
          ArchivingOptions: S.optional(__S(29, __c3, 5)),
          MessageSecurityOptions: S.optional(__S(32, __c4, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/configuration-sets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfigurationSetRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ IamRoleArn: S.String, DeliveryStreamArn: S.String }),
      ).annotate({
        identifier: "KinesisFirehoseDestination",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DimensionName: S.String,
          DimensionValueSource: S.String,
          DefaultDimensionValue: S.String,
        }),
      ).annotate({
        identifier: "CloudWatchDimensionConfiguration",
      });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() => S.Struct({ DimensionConfigurations: __S(36, __c4, 4) })).annotate({
        identifier: "CloudWatchDestination",
      });
    case 6:
      return S.suspend(() => S.Struct({ TopicArn: S.String })).annotate({
        identifier: "SnsDestination",
      });
    case 7:
      return S.suspend(() => S.Struct({ EventBusArn: S.String })).annotate({
        identifier: "EventBridgeDestination",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ApplicationArn: S.optional(S.String) })).annotate({
        identifier: "PinpointDestination",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          MatchingEventTypes: S.optional(__S(21, __c2, 5)),
          KinesisFirehoseDestination: S.optional(__S(34, __c4, 2)),
          CloudWatchDestination: S.optional(__S(37, __c4, 5)),
          SnsDestination: S.optional(__S(38, __c4, 6)),
          EventBridgeDestination: S.optional(__S(39, __c4, 7)),
          PinpointDestination: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({
        identifier: "EventDestinationDefinition",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          EventDestinationName: S.String,
          EventDestination: __S(41, __c5, 1),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfigurationSetEventDestinationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TopicName: S.String, SubscriptionStatus: S.String }),
      ).annotate({ identifier: "TopicPreference" });
    case 4:
      return S.Array(__S(43, __c5, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.String.pipe(T.HttpLabel("ContactListName")),
          EmailAddress: S.String,
          TopicPreferences: S.optional(__S(44, __c5, 4)),
          UnsubscribeAll: S.optional(S.Boolean),
          AttributesData: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/contact-lists/{ContactListName}/contacts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateContactRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TopicName: S.String,
          DisplayName: S.String,
          Description: S.optional(S.String),
          DefaultSubscriptionStatus: S.String,
        }),
      ).annotate({ identifier: "Topic" });
    case 7:
      return S.Array(__S(46, __c5, 6));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.String,
          Topics: S.optional(__S(47, __c5, 7)),
          Description: S.optional(S.String),
          Tags: S.optional(__S(20, __c2, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/contact-lists" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateContactListRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String,
          FromEmailAddress: S.String,
          TemplateSubject: S.String,
          TemplateContent: S.String,
          Tags: S.optional(__S(20, __c2, 4)),
          SuccessRedirectionURL: S.String,
          FailureRedirectionURL: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/custom-verification-email-templates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCustomVerificationEmailTemplateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PoolName: S.String,
          Tags: S.optional(__S(20, __c2, 4)),
          ScalingMode: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/dedicated-ip-pools" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDedicatedIpPoolRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Data: S.String, Charset: S.optional(S.String) })).annotate({
        identifier: "Content",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Text: S.optional(__S(51, __c6, 3)), Html: S.optional(__S(51, __c6, 3)) }),
      ).annotate({ identifier: "Body" });
    case 5:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "MessageHeader",
      });
    case 6:
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          RawContent: T.Blob,
          ContentDisposition: S.optional(S.String),
          FileName: S.String,
          ContentDescription: S.optional(S.String),
          ContentId: S.optional(S.String),
          ContentTransferEncoding: S.optional(S.String),
          ContentType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Attachment" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Subject: __S(51, __c6, 3),
          Body: __S(52, __c6, 4),
          Headers: S.optional(__S(54, __c6, 6)),
          Attachments: S.optional(__S(56, __c7, 0)),
        }),
      ).annotate({ identifier: "Message" });
    case 2:
      return S.suspend(() => S.Struct({ Data: T.Blob })).annotate({
        identifier: "RawMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Subject: S.optional(S.String),
          Text: S.optional(S.String),
          Html: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmailTemplateContent" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.optional(S.String),
          TemplateArn: S.optional(S.String),
          TemplateContent: S.optional(__S(59, __c7, 3)),
          TemplateData: S.optional(S.String),
          Headers: S.optional(__S(54, __c6, 6)),
          Attachments: S.optional(__S(56, __c7, 0)),
        }),
      ).annotate({ identifier: "Template" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Simple: S.optional(__S(57, __c7, 1)),
          Raw: S.optional(__S(58, __c7, 2)),
          Template: S.optional(__S(60, __c7, 4)),
        }),
      ).annotate({ identifier: "EmailContent" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ReportName: S.optional(S.String),
          FromEmailAddress: S.String,
          Content: __S(61, __c7, 5),
          Tags: S.optional(__S(20, __c2, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/deliverability-dashboard/test" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDeliverabilityTestReportRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ReportId: S.String, DeliverabilityTestStatus: S.String }),
      ).annotate({
        identifier: "CreateDeliverabilityTestReportResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainSigningSelector: S.optional(S.String),
          DomainSigningPrivateKey: S.optional(SensitiveString),
          NextSigningKeyLength: S.optional(S.String),
          DomainSigningAttributesOrigin: S.optional(S.String),
        }),
      ).annotate({ identifier: "DkimSigningAttributes" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String,
          Tags: S.optional(__S(20, __c2, 4)),
          DkimSigningAttributes: S.optional(__S(64, __c8, 0)),
          ConfigurationSetName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/identities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEmailIdentityRequest",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          SigningEnabled: S.optional(S.Boolean),
          Status: S.optional(S.String),
          Tokens: S.optional(__S(66, __c8, 2)),
          SigningHostedZone: S.optional(S.String),
          SigningAttributesOrigin: S.optional(S.String),
          NextSigningKeyLength: S.optional(S.String),
          CurrentSigningKeyLength: S.optional(S.String),
          LastKeyGenerationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DkimAttributes" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          IdentityType: S.optional(S.String),
          VerifiedForSendingStatus: S.optional(S.Boolean),
          DkimAttributes: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({
        identifier: "CreateEmailIdentityResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")),
          PolicyName: S.String.pipe(T.HttpLabel("PolicyName")),
          Policy: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEmailIdentityPolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String,
          TemplateContent: __S(59, __c7, 3),
          Tags: S.optional(__S(20, __c2, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/templates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEmailTemplateRequest",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(66, __c8, 2).pipe(S.optional));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Aggregation: S.optional(S.String) }),
      ).annotate({ identifier: "ExportMetric" });
    case 1:
      return S.Array(__S(72, __c9, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Dimensions: __S(71, __c8, 7),
          Namespace: S.String,
          Metrics: __S(73, __c9, 1),
          StartDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "MetricsDataSource" });
    case 3:
      return S.Array(SensitiveString);
    case 4:
      return S.suspend(() =>
        S.Struct({
          FromEmailAddress: S.optional(__S(75, __c9, 3)),
          Destination: S.optional(__S(75, __c9, 3)),
          Subject: S.optional(__S(75, __c9, 3)),
          Isp: S.optional(__S(66, __c8, 2)),
          TenantName: S.optional(__S(66, __c8, 2)),
          LastDeliveryEvent: S.optional(__S(21, __c2, 5)),
          LastEngagementEvent: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({ identifier: "MessageInsightsFilters" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Include: S.optional(__S(76, __c9, 4)),
          Exclude: S.optional(__S(76, __c9, 4)),
          MaxResults: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "MessageInsightsDataSource",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MetricsDataSource: S.optional(__S(74, __c9, 2)),
          MessageInsightsDataSource: S.optional(__S(77, __c9, 5)),
        }),
      ).annotate({ identifier: "ExportDataSource" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DataFormat: S.String, S3Url: S.optional(S.String) }),
      ).annotate({ identifier: "ExportDestination" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ExportDataSource: __S(78, __c9, 6), ExportDestination: __S(79, __c9, 7) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/export-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateExportJobRequest" });
    case 1:
      return S.suspend(() => S.Struct({ JobId: S.optional(S.String) })).annotate({
        identifier: "CreateExportJobResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ SuppressionListImportAction: S.String })).annotate({
        identifier: "SuppressionListDestination",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ContactListName: S.String, ContactListImportAction: S.String }),
      ).annotate({ identifier: "ContactListDestination" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SuppressionListDestination: S.optional(__S(82, __c10, 2)),
          ContactListDestination: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({ identifier: "ImportDestination" });
    case 5:
      return S.suspend(() => S.Struct({ S3Url: S.String, DataFormat: S.String })).annotate({
        identifier: "ImportDataSource",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ImportDestination: __S(84, __c10, 4),
          ImportDataSource: __S(85, __c10, 5),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/import-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateImportJobRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Region: S.String })).annotate({
        identifier: "RouteDetails",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() => S.Struct({ RoutesDetails: __S(88, __c11, 0) })).annotate({
        identifier: "Details",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EndpointName: S.String,
          Details: __S(89, __c11, 1),
          Tags: S.optional(__S(20, __c2, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/multi-region-endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMultiRegionEndpointRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(S.String), EndpointId: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateMultiRegionEndpointResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SuppressedReasons: S.optional(__S(21, __c2, 5)),
          SuppressionScope: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TenantSuppressionAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TenantName: S.String,
          Tags: S.optional(__S(20, __c2, 4)),
          SuppressionAttributes: S.optional(__S(92, __c11, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/email/tenants" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTenantRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TenantName: S.optional(S.String),
          TenantId: S.optional(S.String),
          TenantArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(__S(20, __c2, 4)),
          SendingStatus: S.optional(S.String),
          SuppressionAttributes: S.optional(__S(92, __c11, 4)),
        }),
      ).annotate({ identifier: "CreateTenantResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ TenantName: S.String, ResourceArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/tenants/resources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateTenantResourceAssociationRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfigurationSetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          EventDestinationName: S.String.pipe(T.HttpLabel("EventDestinationName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfigurationSetEventDestinationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.String.pipe(T.HttpLabel("ContactListName")),
          EmailAddress: S.String.pipe(T.HttpLabel("EmailAddress")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteContactRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ContactListName: S.String.pipe(T.HttpLabel("ContactListName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v2/email/contact-lists/{ContactListName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteContactListRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ TemplateName: S.String.pipe(T.HttpLabel("TemplateName")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/email/custom-verification-email-templates/{TemplateName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCustomVerificationEmailTemplateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ PoolName: S.String.pipe(T.HttpLabel("PoolName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v2/email/dedicated-ip-pools/{PoolName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDedicatedIpPoolRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v2/email/identities/{EmailIdentity}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEmailIdentityRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")),
          PolicyName: S.String.pipe(T.HttpLabel("PolicyName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEmailIdentityPolicyRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TemplateName: S.String.pipe(T.HttpLabel("TemplateName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v2/email/templates/{TemplateName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEmailTemplateRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ EndpointName: S.String.pipe(T.HttpLabel("EndpointName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v2/email/multi-region-endpoints/{EndpointName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMultiRegionEndpointRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "DeleteMultiRegionEndpointResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EmailAddress: S.String.pipe(T.HttpLabel("EmailAddress")),
          TenantName: S.optional(S.String).pipe(T.HttpQuery("TenantName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v2/email/suppression/addresses/{EmailAddress}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSuppressedDestinationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TenantName: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/tenants/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTenantRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ TenantName: S.String, ResourceArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/tenants/resources/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTenantResourceAssociationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ EmailIdentity: S.String, FromAddress: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/identity/certificates/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateEmailIdentityCertificateRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/v2/email/account" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAccountRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Max24HourSend: S.optional(S.Number),
          MaxSendRate: S.optional(S.Number),
          SentLast24Hours: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SendQuota" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SuppressedReasons: S.optional(__S(21, __c2, 5)),
          ValidationAttributes: S.optional(__S(24, __c3, 0)),
        }),
      ).annotate({ identifier: "SuppressionAttributes" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(S.String), CaseId: S.optional(S.String) }),
      ).annotate({ identifier: "ReviewDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MailType: S.optional(S.String),
          WebsiteURL: S.optional(SensitiveString),
          ContactLanguage: S.optional(S.String),
          UseCaseDescription: S.optional(SensitiveString),
          AdditionalContactEmailAddresses: S.optional(__S(75, __c9, 3)),
          ReviewDetails: S.optional(__S(114, __c14, 2)),
        }),
      ).annotate({ identifier: "AccountDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VdmEnabled: S.String,
          DashboardAttributes: S.optional(__S(26, __c3, 2)),
          GuardianAttributes: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({ identifier: "VdmAttributes" });
    case 5:
      return S.suspend(() =>
        S.Struct({ CurrentPlan: S.optional(S.String), NextPlan: S.optional(S.String) }),
      ).annotate({ identifier: "PricingAttributes" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DedicatedIpAutoWarmupEnabled: S.optional(S.Boolean),
          EnforcementStatus: S.optional(S.String),
          ProductionAccessEnabled: S.optional(S.Boolean),
          SendQuota: S.optional(__S(112, __c14, 0)),
          SendingEnabled: S.optional(S.Boolean),
          SuppressionAttributes: S.optional(__S(113, __c14, 1)),
          Details: S.optional(__S(115, __c14, 3)),
          VdmAttributes: S.optional(__S(116, __c14, 4)),
          PricingAttributes: S.optional(__S(117, __c14, 5)),
        }),
      ).annotate({ identifier: "GetAccountResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BlacklistItemNames: __S(66, __c8, 2).pipe(T.HttpQuery("BlacklistItemNames")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/deliverability-dashboard/blacklist-report" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBlacklistReportsRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RblName: S.optional(S.String),
          ListingTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "BlacklistEntry" });
    case 1:
      return S.Array(__S(120, __c15, 0));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(121, __c15, 1).pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ BlacklistReport: __S(122, __c15, 2) })).annotate({
        identifier: "GetBlacklistReportsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/configuration-sets/{ConfigurationSetName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfigurationSetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.optional(S.String),
          TrackingOptions: S.optional(__S(15, __c1, 7)),
          DeliveryOptions: S.optional(__S(16, __c2, 0)),
          ReputationOptions: S.optional(__S(17, __c2, 1)),
          SendingOptions: S.optional(__S(18, __c2, 2)),
          Tags: S.optional(__S(20, __c2, 4)),
          SuppressionOptions: S.optional(__S(25, __c3, 1)),
          VdmOptions: S.optional(__S(28, __c3, 4)),
          ArchivingOptions: S.optional(__S(29, __c3, 5)),
          MessageSecurityOptions: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({
        identifier: "GetConfigurationSetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfigurationSetEventDestinationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Enabled: S.optional(S.Boolean),
          MatchingEventTypes: __S(21, __c2, 5),
          KinesisFirehoseDestination: S.optional(__S(34, __c4, 2)),
          CloudWatchDestination: S.optional(__S(37, __c4, 5)),
          SnsDestination: S.optional(__S(38, __c4, 6)),
          EventBridgeDestination: S.optional(__S(39, __c4, 7)),
          PinpointDestination: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({ identifier: "EventDestination" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127, __c15, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ EventDestinations: S.optional(__S(128, __c16, 0)) }),
      ).annotate({
        identifier: "GetConfigurationSetEventDestinationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.String.pipe(T.HttpLabel("ContactListName")),
          EmailAddress: S.String.pipe(T.HttpLabel("EmailAddress")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetContactRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.optional(S.String),
          EmailAddress: S.optional(S.String),
          TopicPreferences: S.optional(__S(44, __c5, 4)),
          TopicDefaultPreferences: S.optional(__S(44, __c5, 4)),
          UnsubscribeAll: S.optional(S.Boolean),
          AttributesData: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetContactResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ContactListName: S.String.pipe(T.HttpLabel("ContactListName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/contact-lists/{ContactListName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetContactListRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.optional(S.String),
          Topics: S.optional(__S(47, __c5, 7)),
          Description: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({ identifier: "GetContactListResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ TemplateName: S.String.pipe(T.HttpLabel("TemplateName")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/email/custom-verification-email-templates/{TemplateName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCustomVerificationEmailTemplateRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.optional(S.String),
          FromEmailAddress: S.optional(S.String),
          TemplateSubject: S.optional(S.String),
          TemplateContent: S.optional(S.String),
          Tags: S.optional(__S(20, __c2, 4)),
          SuccessRedirectionURL: S.optional(S.String),
          FailureRedirectionURL: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetCustomVerificationEmailTemplateResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Ip: S.String.pipe(T.HttpLabel("Ip")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/dedicated-ips/{Ip}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDedicatedIpRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Ip: S.String,
          WarmupStatus: S.String,
          WarmupPercentage: S.Number,
          PoolName: S.optional(S.String),
        }),
      ).annotate({ identifier: "DedicatedIp" });
    case 2:
      return S.suspend(() => S.Struct({ DedicatedIp: S.optional(__S(137, __c17, 1)) })).annotate({
        identifier: "GetDedicatedIpResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ PoolName: S.String.pipe(T.HttpLabel("PoolName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/dedicated-ip-pools/{PoolName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDedicatedIpPoolRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ PoolName: S.String, ScalingMode: S.String })).annotate({
        identifier: "DedicatedIpPool",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DedicatedIpPool: S.optional(__S(140, __c17, 4)) }),
      ).annotate({
        identifier: "GetDedicatedIpPoolResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PoolName: S.optional(S.String).pipe(T.HttpQuery("PoolName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          PageSize: S.optional(S.Number).pipe(T.HttpQuery("PageSize")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/dedicated-ips" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDedicatedIpsRequest" });
    case 7:
      return S.Array(__S(137, __c17, 1));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DedicatedIps: S.optional(__S(143, __c17, 7)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetDedicatedIpsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/deliverability-dashboard" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDeliverabilityDashboardOptionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Global: S.optional(S.Boolean), TrackedIsps: S.optional(__S(66, __c8, 2)) }),
      ).annotate({
        identifier: "InboxPlacementTrackingOption",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Domain: S.optional(S.String),
          SubscriptionStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InboxPlacementTrackingOption: S.optional(__S(146, __c18, 2)),
        }),
      ).annotate({
        identifier: "DomainDeliverabilityTrackingOption",
      });
    case 4:
      return S.Array(__S(147, __c18, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DashboardEnabled: S.Boolean,
          SubscriptionExpiryDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AccountStatus: S.optional(S.String),
          ActiveSubscribedDomains: S.optional(__S(148, __c18, 4)),
          PendingExpirationSubscribedDomains: S.optional(__S(148, __c18, 4)),
        }),
      ).annotate({
        identifier: "GetDeliverabilityDashboardOptionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ReportId: S.String.pipe(T.HttpLabel("ReportId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/email/deliverability-dashboard/test-reports/{ReportId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDeliverabilityTestReportRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReportId: S.optional(S.String),
          ReportName: S.optional(S.String),
          Subject: S.optional(S.String),
          FromEmailAddress: S.optional(S.String),
          CreateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeliverabilityTestStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeliverabilityTestReport" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InboxPercentage: S.optional(S.Number),
          SpamPercentage: S.optional(S.Number),
          MissingPercentage: S.optional(S.Number),
          SpfPercentage: S.optional(S.Number),
          DkimPercentage: S.optional(S.Number),
        }),
      ).annotate({ identifier: "PlacementStatistics" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          IspName: S.optional(S.String),
          PlacementStatistics: S.optional(__S(152, __c19, 0)),
        }),
      ).annotate({ identifier: "IspPlacement" });
    case 2:
      return S.Array(__S(153, __c19, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          DeliverabilityTestReport: __S(151, __c18, 7),
          OverallPlacement: __S(152, __c19, 0),
          IspPlacements: __S(154, __c19, 2),
          Message: S.optional(S.String),
          Tags: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({
        identifier: "GetDeliverabilityTestReportResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ CampaignId: S.String.pipe(T.HttpLabel("CampaignId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/email/deliverability-dashboard/campaigns/{CampaignId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDomainDeliverabilityCampaignRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CampaignId: S.optional(S.String),
          ImageUrl: S.optional(S.String),
          Subject: S.optional(S.String),
          FromAddress: S.optional(S.String),
          SendingIps: S.optional(__S(66, __c8, 2)),
          FirstSeenDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastSeenDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InboxCount: S.optional(S.Number),
          SpamCount: S.optional(S.Number),
          ReadRate: S.optional(S.Number),
          DeleteRate: S.optional(S.Number),
          ReadDeleteRate: S.optional(S.Number),
          ProjectedVolume: S.optional(S.Number),
          Esps: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({
        identifier: "DomainDeliverabilityCampaign",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainDeliverabilityCampaign: __S(157, __c19, 5) }),
      ).annotate({
        identifier: "GetDomainDeliverabilityCampaignResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Domain: S.String.pipe(T.HttpLabel("Domain")),
          StartDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("StartDate")),
          EndDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("EndDate")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/email/deliverability-dashboard/statistics-report/{Domain}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDomainStatisticsReportRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InboxRawCount: S.optional(S.Number),
          SpamRawCount: S.optional(S.Number),
          ProjectedInbox: S.optional(S.Number),
          ProjectedSpam: S.optional(S.Number),
        }),
      ).annotate({ identifier: "VolumeStatistics" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          IspName: S.optional(S.String),
          InboxRawCount: S.optional(S.Number),
          SpamRawCount: S.optional(S.Number),
          InboxPercentage: S.optional(S.Number),
          SpamPercentage: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DomainIspPlacement" });
    case 2:
      return S.Array(__S(161, __c20, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          VolumeStatistics: S.optional(__S(160, __c20, 0)),
          ReadRatePercent: S.optional(S.Number),
          DomainIspPlacements: S.optional(__S(162, __c20, 2)),
        }),
      ).annotate({ identifier: "OverallVolume" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          VolumeStatistics: S.optional(__S(160, __c20, 0)),
          DomainIspPlacements: S.optional(__S(162, __c20, 2)),
        }),
      ).annotate({ identifier: "DailyVolume" });
    case 5:
      return S.Array(__S(164, __c20, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ OverallVolume: __S(163, __c20, 3), DailyVolumes: __S(165, __c20, 5) }),
      ).annotate({
        identifier: "GetDomainStatisticsReportResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ EmailAddress: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/email-address-insights" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEmailAddressInsightsRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ConfidenceVerdict: S.optional(S.String) })).annotate({
        identifier: "EmailAddressInsightsVerdict",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          HasValidSyntax: S.optional(__S(168, __c21, 0)),
          HasValidDnsRecords: S.optional(__S(168, __c21, 0)),
          MailboxExists: S.optional(__S(168, __c21, 0)),
          IsRoleAddress: S.optional(__S(168, __c21, 0)),
          IsDisposable: S.optional(__S(168, __c21, 0)),
          IsRandomInput: S.optional(__S(168, __c21, 0)),
        }),
      ).annotate({
        identifier: "EmailAddressInsightsMailboxEvaluations",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          IsValid: S.optional(__S(168, __c21, 0)),
          Evaluations: S.optional(__S(169, __c21, 1)),
        }),
      ).annotate({ identifier: "MailboxValidation" });
    case 3:
      return S.suspend(() =>
        S.Struct({ MailboxValidation: S.optional(__S(170, __c21, 2)) }),
      ).annotate({
        identifier: "GetEmailAddressInsightsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/identities/{EmailIdentity}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEmailIdentityRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MailFromDomain: S.optional(S.String),
          MailFromDomainStatus: S.optional(S.String),
          BehaviorOnMxFailure: S.optional(S.String),
        }),
      ).annotate({ identifier: "MailFromAttributes" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PrimaryNameServer: S.optional(S.String),
          AdminEmail: S.optional(S.String),
          SerialNumber: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SOARecord" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LastCheckedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastSuccessTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ErrorType: S.optional(S.String),
          SOARecord: S.optional(__S(175, __c21, 7)),
        }),
      ).annotate({ identifier: "VerificationInfo" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          IdentityType: S.optional(S.String),
          FeedbackForwardingStatus: S.optional(S.Boolean),
          VerifiedForSendingStatus: S.optional(S.Boolean),
          DkimAttributes: S.optional(__S(67, __c8, 3)),
          MailFromAttributes: S.optional(__S(173, __c21, 5)),
          Policies: S.optional(__S(174, __c21, 6)),
          Tags: S.optional(__S(20, __c2, 4)),
          ConfigurationSetName: S.optional(S.String),
          VerificationStatus: S.optional(S.String),
          VerificationInfo: S.optional(__S(176, __c22, 0)),
        }),
      ).annotate({ identifier: "GetEmailIdentityResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/identities/{EmailIdentity}/policies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEmailIdentityPoliciesRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Policies: S.optional(__S(174, __c21, 6)) })).annotate({
        identifier: "GetEmailIdentityPoliciesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TemplateName: S.String.pipe(T.HttpLabel("TemplateName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/templates/{TemplateName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEmailTemplateRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String,
          TemplateContent: __S(59, __c7, 3),
          Tags: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({ identifier: "GetEmailTemplateResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ JobId: S.String.pipe(T.HttpLabel("JobId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/export-jobs/{JobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetExportJobRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ FailedRecordsS3Url: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "FailureInfo" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProcessedRecordsCount: S.optional(S.Number),
          ExportedRecordsCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExportStatistics" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          ExportSourceType: S.optional(S.String),
          JobStatus: S.optional(S.String),
          ExportDestination: S.optional(__S(79, __c9, 7)),
          ExportDataSource: S.optional(__S(78, __c9, 6)),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailureInfo: S.optional(__S(183, __c22, 7)),
          Statistics: S.optional(__S(184, __c23, 0)),
        }),
      ).annotate({ identifier: "GetExportJobResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ JobId: S.String.pipe(T.HttpLabel("JobId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/import-jobs/{JobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetImportJobRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          ImportDestination: S.optional(__S(84, __c10, 4)),
          ImportDataSource: S.optional(__S(85, __c10, 5)),
          FailureInfo: S.optional(__S(183, __c22, 7)),
          JobStatus: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ProcessedRecordsCount: S.optional(S.Number),
          FailedRecordsCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GetImportJobResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ MessageId: S.String.pipe(T.HttpLabel("MessageId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/insights/{MessageId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMessageInsightsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BounceType: S.optional(S.String),
          BounceSubType: S.optional(S.String),
          DiagnosticCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "Bounce" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ComplaintSubType: S.optional(S.String),
          ComplaintFeedbackType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Complaint" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Bounce: S.optional(__S(189, __c23, 5)),
          Complaint: S.optional(__S(190, __c23, 6)),
        }),
      ).annotate({ identifier: "EventDetails" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Type: S.optional(S.String),
          Details: S.optional(__S(191, __c23, 7)),
        }),
      ).annotate({ identifier: "InsightsEvent" });
    case 1:
      return S.Array(__S(192, __c24, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Destination: S.optional(SensitiveString),
          Isp: S.optional(S.String),
          Events: S.optional(__S(193, __c24, 1)),
        }),
      ).annotate({ identifier: "EmailInsights" });
    case 3:
      return S.Array(__S(194, __c24, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          MessageId: S.optional(S.String),
          FromEmailAddress: S.optional(SensitiveString),
          Subject: S.optional(SensitiveString),
          EmailTags: S.optional(__S(54, __c6, 6)),
          Insights: S.optional(__S(195, __c24, 3)),
        }),
      ).annotate({
        identifier: "GetMessageInsightsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EndpointName: S.String.pipe(T.HttpLabel("EndpointName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/multi-region-endpoints/{EndpointName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMultiRegionEndpointRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EndpointName: S.optional(S.String),
          EndpointId: S.optional(S.String),
          Routes: S.optional(__S(88, __c11, 0)),
          Status: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetMultiRegionEndpointResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReputationEntityReference: S.String.pipe(T.HttpLabel("ReputationEntityReference")),
          ReputationEntityType: S.String.pipe(T.HttpLabel("ReputationEntityType")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReputationEntityRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          Cause: S.optional(S.String),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "StatusRecord" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReputationEntityReference: S.optional(S.String),
          ReputationEntityType: S.optional(S.String),
          ReputationManagementPolicy: S.optional(S.String),
          CustomerManagedStatus: S.optional(__S(200, __c25, 0)),
          AwsSesManagedStatus: S.optional(__S(200, __c25, 0)),
          SendingStatusAggregate: S.optional(S.String),
          ReputationImpact: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReputationEntity" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ReputationEntity: S.optional(__S(201, __c25, 1)) }),
      ).annotate({
        identifier: "GetReputationEntityResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EmailAddress: S.String.pipe(T.HttpLabel("EmailAddress")),
          TenantName: S.optional(S.String).pipe(T.HttpQuery("TenantName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/suppression/addresses/{EmailAddress}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSuppressedDestinationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ MessageId: S.optional(S.String), FeedbackId: S.optional(S.String) }),
      ).annotate({
        identifier: "SuppressedDestinationAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EmailAddress: S.String,
          Reason: S.String,
          LastUpdateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Attributes: S.optional(__S(204, __c25, 4)),
          TenantName: S.optional(S.String),
        }),
      ).annotate({ identifier: "SuppressedDestination" });
    case 6:
      return S.suspend(() => S.Struct({ SuppressedDestination: __S(205, __c25, 5) })).annotate({
        identifier: "GetSuppressedDestinationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ TenantName: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/tenants/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTenantRequest" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tenant: S.optional(__S(94, __c11, 6)) })).annotate({
        identifier: "GetTenantResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(2, __c0, 2)),
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/list-configuration-sets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfigurationSetsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSets: S.optional(__S(66, __c8, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfigurationSetsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PageSize: S.optional(S.Number).pipe(T.HttpQuery("PageSize")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/contact-lists" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListContactListsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.optional(S.String),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ContactList" });
    case 5:
      return S.Array(__S(212, __c26, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ ContactLists: S.optional(__S(213, __c26, 5)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListContactListsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TopicName: S.optional(S.String),
          UseDefaultIfPreferenceUnavailable: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TopicFilter" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FilteredStatus: S.optional(S.String),
          TopicFilter: S.optional(__S(215, __c26, 7)),
        }),
      ).annotate({ identifier: "ListContactsFilter" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.String.pipe(T.HttpLabel("ContactListName")),
          Filter: S.optional(__S(216, __c27, 0)),
          PageSize: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/email/contact-lists/{ContactListName}/contacts/list",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListContactsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EmailAddress: S.optional(S.String),
          TopicPreferences: S.optional(__S(44, __c5, 4)),
          TopicDefaultPreferences: S.optional(__S(44, __c5, 4)),
          UnsubscribeAll: S.optional(S.Boolean),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Contact" });
    case 3:
      return S.Array(__S(218, __c27, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ Contacts: S.optional(__S(219, __c27, 3)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListContactsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          PageSize: S.optional(S.Number).pipe(T.HttpQuery("PageSize")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/custom-verification-email-templates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCustomVerificationEmailTemplatesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.optional(S.String),
          FromEmailAddress: S.optional(S.String),
          TemplateSubject: S.optional(S.String),
          SuccessRedirectionURL: S.optional(S.String),
          FailureRedirectionURL: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CustomVerificationEmailTemplateMetadata",
      });
    case 7:
      return S.Array(__S(222, __c27, 6));
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CustomVerificationEmailTemplates: S.optional(__S(223, __c27, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCustomVerificationEmailTemplatesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          PageSize: S.optional(S.Number).pipe(T.HttpQuery("PageSize")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/dedicated-ip-pools" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDedicatedIpPoolsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DedicatedIpPools: S.optional(__S(66, __c8, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDedicatedIpPoolsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          PageSize: S.optional(S.Number).pipe(T.HttpQuery("PageSize")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/deliverability-dashboard/test-reports" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDeliverabilityTestReportsRequest",
      });
    case 4:
      return S.Array(__S(151, __c18, 7));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DeliverabilityTestReports: __S(228, __c28, 4),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDeliverabilityTestReportsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StartDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("StartDate")),
          EndDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("EndDate")),
          SubscribedDomain: S.String.pipe(T.HttpLabel("SubscribedDomain")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          PageSize: S.optional(S.Number).pipe(T.HttpQuery("PageSize")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDomainDeliverabilityCampaignsRequest",
      });
    case 7:
      return S.Array(__S(157, __c19, 5));
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainDeliverabilityCampaigns: __S(231, __c28, 7),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDomainDeliverabilityCampaignsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(2, __c0, 2)),
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/list-identities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEmailIdentitiesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          IdentityType: S.optional(S.String),
          IdentityName: S.optional(S.String),
          SendingEnabled: S.optional(S.Boolean),
          VerificationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "IdentityInfo" });
    case 3:
      return S.Array(__S(234, __c29, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          EmailIdentities: S.optional(__S(235, __c29, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEmailIdentitiesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String,
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/identity/certificates/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEmailIdentityCertificatesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FromAddress: S.optional(S.String),
          Status: S.optional(S.String),
          CertificateArn: S.optional(S.String),
          CertificateExpiryTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "IdentityCertificate" });
    case 7:
      return S.Array(__S(238, __c29, 6));
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Certificates: S.optional(__S(239, __c29, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEmailIdentityCertificatesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          PageSize: S.optional(S.Number).pipe(T.HttpQuery("PageSize")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/templates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEmailTemplatesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "EmailTemplateMetadata" });
    case 3:
      return S.Array(__S(242, __c30, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplatesMetadata: S.optional(__S(243, __c30, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEmailTemplatesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
          ExportSourceType: S.optional(S.String),
          JobStatus: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/list-export-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListExportJobsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          ExportSourceType: S.optional(S.String),
          JobStatus: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ExportJobSummary" });
    case 7:
      return S.Array(__S(246, __c30, 6));
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ExportJobs: S.optional(__S(247, __c30, 7)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListExportJobsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ImportDestinationType: S.optional(S.String),
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/import-jobs/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListImportJobsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          ImportDestination: S.optional(__S(84, __c10, 4)),
          JobStatus: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ProcessedRecordsCount: S.optional(S.Number),
          FailedRecordsCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ImportJobSummary" });
    case 3:
      return S.Array(__S(250, __c31, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ ImportJobs: S.optional(__S(251, __c31, 3)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListImportJobsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          PageSize: S.optional(S.Number).pipe(T.HttpQuery("PageSize")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/multi-region-endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMultiRegionEndpointsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EndpointName: S.optional(S.String),
          Status: S.optional(S.String),
          EndpointId: S.optional(S.String),
          Regions: S.optional(__S(66, __c8, 2)),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "MultiRegionEndpoint" });
    case 7:
      return S.Array(__S(254, __c31, 6));
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MultiRegionEndpoints: S.optional(__S(255, __c31, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListMultiRegionEndpointsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(2, __c0, 2)),
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/vdm/recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecommendationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          Type: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Impact: S.optional(S.String),
        }),
      ).annotate({ identifier: "Recommendation" });
    case 3:
      return S.Array(__S(258, __c32, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Recommendations: S.optional(__S(259, __c32, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecommendationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(2, __c0, 2)),
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/reputation/entities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListReputationEntitiesRequest",
      });
    case 6:
      return S.Array(__S(201, __c25, 1));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReputationEntities: S.optional(__S(262, __c32, 6)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListReputationEntitiesResponse",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          PageSize: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/resources/tenants/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceTenantsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TenantName: S.optional(S.String),
          TenantId: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          AssociatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ResourceTenantMetadata" });
    case 2:
      return S.Array(__S(265, __c33, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceTenants: S.optional(__S(266, __c33, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourceTenantsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TenantName: S.optional(S.String).pipe(T.HttpQuery("TenantName")),
          Reasons: S.optional(__S(21, __c2, 5)).pipe(T.HttpQuery("Reason")),
          StartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("StartDate"),
          ),
          EndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("EndDate"),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          PageSize: S.optional(S.Number).pipe(T.HttpQuery("PageSize")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/email/suppression/addresses" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSuppressedDestinationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EmailAddress: S.String,
          Reason: S.String,
          LastUpdateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "SuppressedDestinationSummary",
      });
    case 6:
      return S.Array(__S(269, __c33, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          SuppressedDestinationSummaries: S.optional(__S(270, __c33, 6)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSuppressedDestinationsResponse",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpQuery("ResourceArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v2/email/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ Tags: __S(20, __c2, 4) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TenantName: S.String,
          Filter: S.optional(__S(2, __c0, 2)),
          PageSize: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/tenants/resources/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTenantResourcesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceType: S.optional(S.String), ResourceArn: S.optional(S.String) }),
      ).annotate({ identifier: "TenantResource" });
    case 4:
      return S.Array(__S(275, __c34, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          TenantResources: S.optional(__S(276, __c34, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTenantResourcesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(2, __c0, 2)),
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/tenants/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTenantsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TenantName: S.optional(S.String),
          TenantId: S.optional(S.String),
          TenantArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SendingStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "TenantInfo" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(279, __c34, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ Tenants: S.optional(__S(280, __c35, 0)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTenantsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ AutoWarmupEnabled: S.optional(S.Boolean) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/account/dedicated-ips/warmup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAccountDedicatedIpWarmupAttributesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MailType: S.String,
          WebsiteURL: SensitiveString,
          ContactLanguage: S.optional(S.String),
          UseCaseDescription: S.optional(SensitiveString),
          AdditionalContactEmailAddresses: S.optional(__S(75, __c9, 3)),
          ProductionAccessEnabled: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/account/details" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutAccountDetailsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Plan: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/account/pricing-attributes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAccountPricingAttributesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ SendingEnabled: S.optional(S.Boolean) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/account/sending" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAccountSendingAttributesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SuppressedReasons: S.optional(__S(21, __c2, 5)),
          ValidationAttributes: S.optional(__S(24, __c3, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/account/suppression" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAccountSuppressionAttributesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ VdmAttributes: __S(116, __c14, 4) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/account/vdm" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAccountVdmAttributesRequest",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "PutAccountVdmAttributesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          ArchiveArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/archiving-options",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutConfigurationSetArchivingOptionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          TlsPolicy: S.optional(S.String),
          SendingPoolName: S.optional(S.String),
          MaxDeliverySeconds: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutConfigurationSetDeliveryOptionsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          ReputationMetricsEnabled: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/reputation-options",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutConfigurationSetReputationOptionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          SendingEnabled: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/sending",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutConfigurationSetSendingOptionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          SuppressionScope: S.optional(S.String),
          SuppressedReasons: S.optional(__S(21, __c2, 5)),
          ValidationOptions: S.optional(__S(24, __c3, 0)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutConfigurationSetSuppressionOptionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          CustomRedirectDomain: S.optional(S.String),
          HttpsPolicy: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/tracking-options",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutConfigurationSetTrackingOptionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          VdmOptions: S.optional(__S(28, __c3, 4)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/vdm-options",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutConfigurationSetVdmOptionsRequest",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Ip: S.String.pipe(T.HttpLabel("Ip")), DestinationPoolName: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/dedicated-ips/{Ip}/pool" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDedicatedIpInPoolRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PoolName: S.String.pipe(T.HttpLabel("PoolName")),
          ScalingMode: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/dedicated-ip-pools/{PoolName}/scaling" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDedicatedIpPoolScalingAttributesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Ip: S.String.pipe(T.HttpLabel("Ip")), WarmupPercentage: S.Number }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/dedicated-ips/{Ip}/warmup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDedicatedIpWarmupAttributesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DashboardEnabled: S.Boolean,
          SubscribedDomains: S.optional(__S(148, __c18, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/deliverability-dashboard" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDeliverabilityDashboardOptionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")),
          ConfigurationSetName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/identities/{EmailIdentity}/configuration-set",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutEmailIdentityConfigurationSetAttributesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")),
          SigningEnabled: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/identities/{EmailIdentity}/dkim" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutEmailIdentityDkimAttributesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")),
          SigningAttributesOrigin: S.String,
          SigningAttributes: S.optional(__S(64, __c8, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/identities/{EmailIdentity}/dkim/signing" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutEmailIdentityDkimSigningAttributesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DkimStatus: S.optional(S.String),
          DkimTokens: S.optional(__S(66, __c8, 2)),
          SigningHostedZone: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PutEmailIdentityDkimSigningAttributesResponse",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")),
          EmailForwardingEnabled: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/identities/{EmailIdentity}/feedback" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutEmailIdentityFeedbackAttributesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")),
          MailFromDomain: S.optional(S.String),
          BehaviorOnMxFailure: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/identities/{EmailIdentity}/mail-from" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutEmailIdentityMailFromAttributesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EmailAddress: S.String,
          Reason: S.String,
          TenantName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/suppression/addresses" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutSuppressedDestinationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TenantName: S.String,
          SuppressedReasons: S.optional(__S(21, __c2, 5)),
          SuppressionScope: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/tenant/suppression" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTenantSuppressionAttributesRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Template: S.optional(__S(60, __c7, 4)) })).annotate({
        identifier: "BulkEmailContent",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ToAddresses: S.optional(__S(66, __c8, 2)),
          CcAddresses: S.optional(__S(66, __c8, 2)),
          BccAddresses: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({ identifier: "Destination" });
    case 6:
      return S.suspend(() => S.Struct({ ReplacementTemplateData: S.optional(S.String) })).annotate({
        identifier: "ReplacementTemplate",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ReplacementTemplate: S.optional(__S(310, __c38, 6)) }),
      ).annotate({ identifier: "ReplacementEmailContent" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Destination: __S(309, __c38, 5),
          ReplacementTags: S.optional(__S(54, __c6, 6)),
          ReplacementEmailContent: S.optional(__S(311, __c38, 7)),
          ReplacementHeaders: S.optional(__S(54, __c6, 6)),
        }),
      ).annotate({ identifier: "BulkEmailEntry" });
    case 1:
      return S.Array(__S(312, __c39, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          OpenTrackingEnabled: S.optional(S.String),
          ClickTrackingEnabled: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TrackingConfigurationOverrides",
      });
    case 3:
      return S.suspend(() => S.Struct({ Tracking: S.optional(__S(314, __c39, 2)) })).annotate({
        identifier: "ConfigurationOverrides",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FromEmailAddress: S.optional(S.String),
          FromEmailAddressIdentityArn: S.optional(S.String),
          ReplyToAddresses: S.optional(__S(66, __c8, 2)),
          FeedbackForwardingEmailAddress: S.optional(S.String),
          FeedbackForwardingEmailAddressIdentityArn: S.optional(S.String),
          DefaultEmailTags: S.optional(__S(54, __c6, 6)),
          DefaultContent: __S(308, __c38, 4),
          BulkEmailEntries: __S(313, __c39, 1),
          ConfigurationSetName: S.optional(S.String),
          EndpointId: S.optional(S.String).pipe(T.ContextParam("EndpointId")),
          TenantName: S.optional(S.String),
          ConfigurationOverrides: S.optional(__S(315, __c39, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/outbound-bulk-emails" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SendBulkEmailRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          Error: S.optional(S.String),
          MessageId: S.optional(S.String),
        }),
      ).annotate({ identifier: "BulkEmailEntryResult" });
    case 6:
      return S.Array(__S(317, __c39, 5));
    case 7:
      return S.suspend(() => S.Struct({ BulkEmailEntryResults: __S(318, __c39, 6) })).annotate({
        identifier: "SendBulkEmailResponse",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EmailAddress: S.String,
          TemplateName: S.String,
          ConfigurationSetName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/outbound-custom-verification-emails" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendCustomVerificationEmailRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ MessageId: S.optional(S.String) })).annotate({
        identifier: "SendCustomVerificationEmailResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ContactListName: S.String, TopicName: S.optional(S.String) }),
      ).annotate({ identifier: "ListManagementOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FromEmailAddress: S.optional(S.String),
          FromEmailAddressIdentityArn: S.optional(S.String),
          Destination: S.optional(__S(309, __c38, 5)),
          ReplyToAddresses: S.optional(__S(66, __c8, 2)),
          FeedbackForwardingEmailAddress: S.optional(S.String),
          FeedbackForwardingEmailAddressIdentityArn: S.optional(S.String),
          Content: __S(61, __c7, 5),
          EmailTags: S.optional(__S(54, __c6, 6)),
          ConfigurationSetName: S.optional(S.String),
          EndpointId: S.optional(S.String).pipe(T.ContextParam("EndpointId")),
          TenantName: S.optional(S.String),
          ListManagementOptions: S.optional(__S(322, __c40, 2)),
          ConfigurationOverrides: S.optional(__S(315, __c39, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/outbound-emails" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SendEmailRequest" });
    case 4:
      return S.suspend(() => S.Struct({ MessageId: S.optional(S.String) })).annotate({
        identifier: "SendEmailResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(20, __c2, 4) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/email/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          TemplateData: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/templates/{TemplateName}/render" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TestRenderEmailTemplateRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ RenderedTemplate: S.String })).annotate({
        identifier: "TestRenderEmailTemplateResponse",
      });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpQuery("ResourceArn")),
          TagKeys: __S(66, __c8, 2).pipe(T.HttpQuery("TagKeys")),
        }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/v2/email/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String,
          MessageSecurityOptions: S.optional(__S(32, __c4, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/email/update-configuration-sets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfigurationSetRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String.pipe(T.HttpLabel("ConfigurationSetName")),
          EventDestinationName: S.String.pipe(T.HttpLabel("EventDestinationName")),
          EventDestination: __S(41, __c5, 1),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfigurationSetEventDestinationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.String.pipe(T.HttpLabel("ContactListName")),
          EmailAddress: S.String.pipe(T.HttpLabel("EmailAddress")),
          TopicPreferences: S.optional(__S(44, __c5, 4)),
          UnsubscribeAll: S.optional(S.Boolean),
          AttributesData: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateContactRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ContactListName: S.String.pipe(T.HttpLabel("ContactListName")),
          Topics: S.optional(__S(47, __c5, 7)),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/contact-lists/{ContactListName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateContactListRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          FromEmailAddress: S.String,
          TemplateSubject: S.String,
          TemplateContent: S.String,
          SuccessRedirectionURL: S.String,
          FailureRedirectionURL: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/custom-verification-email-templates/{TemplateName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCustomVerificationEmailTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EmailIdentity: S.String.pipe(T.HttpLabel("EmailIdentity")),
          PolicyName: S.String.pipe(T.HttpLabel("PolicyName")),
          Policy: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEmailIdentityPolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          TemplateContent: __S(59, __c7, 3),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/email/templates/{TemplateName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEmailTemplateRequest",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReputationEntityType: S.String.pipe(T.HttpLabel("ReputationEntityType")),
          ReputationEntityReference: S.String.pipe(T.HttpLabel("ReputationEntityReference")),
          SendingStatus: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/customer-managed-status",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateReputationEntityCustomerManagedStatusRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReputationEntityType: S.String.pipe(T.HttpLabel("ReputationEntityType")),
          ReputationEntityReference: S.String.pipe(T.HttpLabel("ReputationEntityReference")),
          ReputationEntityPolicy: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/policy",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateReputationEntityPolicyRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
