import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class SES extends AWSServiceClient {
  cloneReceiptRuleSet(
    input: CloneReceiptRuleSetRequest,
  ): Effect.Effect<
    CloneReceiptRuleSetResponse,
    | AlreadyExistsException
    | LimitExceededException
    | RuleSetDoesNotExistException
    | CommonAwsError
  >;
  createConfigurationSet(
    input: CreateConfigurationSetRequest,
  ): Effect.Effect<
    CreateConfigurationSetResponse,
    | ConfigurationSetAlreadyExistsException
    | InvalidConfigurationSetException
    | LimitExceededException
    | CommonAwsError
  >;
  createConfigurationSetEventDestination(
    input: CreateConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    CreateConfigurationSetEventDestinationResponse,
    | ConfigurationSetDoesNotExistException
    | EventDestinationAlreadyExistsException
    | InvalidCloudWatchDestinationException
    | InvalidFirehoseDestinationException
    | InvalidSNSDestinationException
    | LimitExceededException
    | CommonAwsError
  >;
  createConfigurationSetTrackingOptions(
    input: CreateConfigurationSetTrackingOptionsRequest,
  ): Effect.Effect<
    CreateConfigurationSetTrackingOptionsResponse,
    | ConfigurationSetDoesNotExistException
    | InvalidTrackingOptionsException
    | TrackingOptionsAlreadyExistsException
    | CommonAwsError
  >;
  createCustomVerificationEmailTemplate(
    input: CreateCustomVerificationEmailTemplateRequest,
  ): Effect.Effect<
    {},
    | CustomVerificationEmailInvalidContentException
    | CustomVerificationEmailTemplateAlreadyExistsException
    | FromEmailAddressNotVerifiedException
    | LimitExceededException
    | CommonAwsError
  >;
  createReceiptFilter(
    input: CreateReceiptFilterRequest,
  ): Effect.Effect<
    CreateReceiptFilterResponse,
    AlreadyExistsException | LimitExceededException | CommonAwsError
  >;
  createReceiptRule(
    input: CreateReceiptRuleRequest,
  ): Effect.Effect<
    CreateReceiptRuleResponse,
    | AlreadyExistsException
    | InvalidLambdaFunctionException
    | InvalidS3ConfigurationException
    | InvalidSnsTopicException
    | LimitExceededException
    | RuleDoesNotExistException
    | RuleSetDoesNotExistException
    | CommonAwsError
  >;
  createReceiptRuleSet(
    input: CreateReceiptRuleSetRequest,
  ): Effect.Effect<
    CreateReceiptRuleSetResponse,
    AlreadyExistsException | LimitExceededException | CommonAwsError
  >;
  createTemplate(
    input: CreateTemplateRequest,
  ): Effect.Effect<
    CreateTemplateResponse,
    | AlreadyExistsException
    | InvalidTemplateException
    | LimitExceededException
    | CommonAwsError
  >;
  deleteConfigurationSet(
    input: DeleteConfigurationSetRequest,
  ): Effect.Effect<
    DeleteConfigurationSetResponse,
    ConfigurationSetDoesNotExistException | CommonAwsError
  >;
  deleteConfigurationSetEventDestination(
    input: DeleteConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    DeleteConfigurationSetEventDestinationResponse,
    | ConfigurationSetDoesNotExistException
    | EventDestinationDoesNotExistException
    | CommonAwsError
  >;
  deleteConfigurationSetTrackingOptions(
    input: DeleteConfigurationSetTrackingOptionsRequest,
  ): Effect.Effect<
    DeleteConfigurationSetTrackingOptionsResponse,
    | ConfigurationSetDoesNotExistException
    | TrackingOptionsDoesNotExistException
    | CommonAwsError
  >;
  deleteCustomVerificationEmailTemplate(
    input: DeleteCustomVerificationEmailTemplateRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteIdentity(
    input: DeleteIdentityRequest,
  ): Effect.Effect<DeleteIdentityResponse, CommonAwsError>;
  deleteIdentityPolicy(
    input: DeleteIdentityPolicyRequest,
  ): Effect.Effect<DeleteIdentityPolicyResponse, CommonAwsError>;
  deleteReceiptFilter(
    input: DeleteReceiptFilterRequest,
  ): Effect.Effect<DeleteReceiptFilterResponse, CommonAwsError>;
  deleteReceiptRule(
    input: DeleteReceiptRuleRequest,
  ): Effect.Effect<
    DeleteReceiptRuleResponse,
    RuleSetDoesNotExistException | CommonAwsError
  >;
  deleteReceiptRuleSet(
    input: DeleteReceiptRuleSetRequest,
  ): Effect.Effect<
    DeleteReceiptRuleSetResponse,
    CannotDeleteException | CommonAwsError
  >;
  deleteTemplate(
    input: DeleteTemplateRequest,
  ): Effect.Effect<DeleteTemplateResponse, CommonAwsError>;
  deleteVerifiedEmailAddress(
    input: DeleteVerifiedEmailAddressRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  describeActiveReceiptRuleSet(
    input: DescribeActiveReceiptRuleSetRequest,
  ): Effect.Effect<DescribeActiveReceiptRuleSetResponse, CommonAwsError>;
  describeConfigurationSet(
    input: DescribeConfigurationSetRequest,
  ): Effect.Effect<
    DescribeConfigurationSetResponse,
    ConfigurationSetDoesNotExistException | CommonAwsError
  >;
  describeReceiptRule(
    input: DescribeReceiptRuleRequest,
  ): Effect.Effect<
    DescribeReceiptRuleResponse,
    RuleDoesNotExistException | RuleSetDoesNotExistException | CommonAwsError
  >;
  describeReceiptRuleSet(
    input: DescribeReceiptRuleSetRequest,
  ): Effect.Effect<
    DescribeReceiptRuleSetResponse,
    RuleSetDoesNotExistException | CommonAwsError
  >;
  getAccountSendingEnabled(input: {}): Effect.Effect<
    GetAccountSendingEnabledResponse,
    CommonAwsError
  >;
  getCustomVerificationEmailTemplate(
    input: GetCustomVerificationEmailTemplateRequest,
  ): Effect.Effect<
    GetCustomVerificationEmailTemplateResponse,
    CustomVerificationEmailTemplateDoesNotExistException | CommonAwsError
  >;
  getIdentityDkimAttributes(
    input: GetIdentityDkimAttributesRequest,
  ): Effect.Effect<GetIdentityDkimAttributesResponse, CommonAwsError>;
  getIdentityMailFromDomainAttributes(
    input: GetIdentityMailFromDomainAttributesRequest,
  ): Effect.Effect<GetIdentityMailFromDomainAttributesResponse, CommonAwsError>;
  getIdentityNotificationAttributes(
    input: GetIdentityNotificationAttributesRequest,
  ): Effect.Effect<GetIdentityNotificationAttributesResponse, CommonAwsError>;
  getIdentityPolicies(
    input: GetIdentityPoliciesRequest,
  ): Effect.Effect<GetIdentityPoliciesResponse, CommonAwsError>;
  getIdentityVerificationAttributes(
    input: GetIdentityVerificationAttributesRequest,
  ): Effect.Effect<GetIdentityVerificationAttributesResponse, CommonAwsError>;
  getSendQuota(input: {}): Effect.Effect<GetSendQuotaResponse, CommonAwsError>;
  getSendStatistics(input: {}): Effect.Effect<
    GetSendStatisticsResponse,
    CommonAwsError
  >;
  getTemplate(
    input: GetTemplateRequest,
  ): Effect.Effect<
    GetTemplateResponse,
    TemplateDoesNotExistException | CommonAwsError
  >;
  listConfigurationSets(
    input: ListConfigurationSetsRequest,
  ): Effect.Effect<ListConfigurationSetsResponse, CommonAwsError>;
  listCustomVerificationEmailTemplates(
    input: ListCustomVerificationEmailTemplatesRequest,
  ): Effect.Effect<
    ListCustomVerificationEmailTemplatesResponse,
    CommonAwsError
  >;
  listIdentities(
    input: ListIdentitiesRequest,
  ): Effect.Effect<ListIdentitiesResponse, CommonAwsError>;
  listIdentityPolicies(
    input: ListIdentityPoliciesRequest,
  ): Effect.Effect<ListIdentityPoliciesResponse, CommonAwsError>;
  listReceiptFilters(
    input: ListReceiptFiltersRequest,
  ): Effect.Effect<ListReceiptFiltersResponse, CommonAwsError>;
  listReceiptRuleSets(
    input: ListReceiptRuleSetsRequest,
  ): Effect.Effect<ListReceiptRuleSetsResponse, CommonAwsError>;
  listTemplates(
    input: ListTemplatesRequest,
  ): Effect.Effect<ListTemplatesResponse, CommonAwsError>;
  listVerifiedEmailAddresses(input: {}): Effect.Effect<
    ListVerifiedEmailAddressesResponse,
    CommonAwsError
  >;
  putConfigurationSetDeliveryOptions(
    input: PutConfigurationSetDeliveryOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetDeliveryOptionsResponse,
    | ConfigurationSetDoesNotExistException
    | InvalidDeliveryOptionsException
    | CommonAwsError
  >;
  putIdentityPolicy(
    input: PutIdentityPolicyRequest,
  ): Effect.Effect<
    PutIdentityPolicyResponse,
    InvalidPolicyException | CommonAwsError
  >;
  reorderReceiptRuleSet(
    input: ReorderReceiptRuleSetRequest,
  ): Effect.Effect<
    ReorderReceiptRuleSetResponse,
    RuleDoesNotExistException | RuleSetDoesNotExistException | CommonAwsError
  >;
  sendBounce(
    input: SendBounceRequest,
  ): Effect.Effect<SendBounceResponse, MessageRejected | CommonAwsError>;
  sendBulkTemplatedEmail(
    input: SendBulkTemplatedEmailRequest,
  ): Effect.Effect<
    SendBulkTemplatedEmailResponse,
    | AccountSendingPausedException
    | ConfigurationSetDoesNotExistException
    | ConfigurationSetSendingPausedException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | TemplateDoesNotExistException
    | CommonAwsError
  >;
  sendCustomVerificationEmail(
    input: SendCustomVerificationEmailRequest,
  ): Effect.Effect<
    SendCustomVerificationEmailResponse,
    | ConfigurationSetDoesNotExistException
    | CustomVerificationEmailTemplateDoesNotExistException
    | FromEmailAddressNotVerifiedException
    | MessageRejected
    | ProductionAccessNotGrantedException
    | CommonAwsError
  >;
  sendEmail(
    input: SendEmailRequest,
  ): Effect.Effect<
    SendEmailResponse,
    | AccountSendingPausedException
    | ConfigurationSetDoesNotExistException
    | ConfigurationSetSendingPausedException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | CommonAwsError
  >;
  sendRawEmail(
    input: SendRawEmailRequest,
  ): Effect.Effect<
    SendRawEmailResponse,
    | AccountSendingPausedException
    | ConfigurationSetDoesNotExistException
    | ConfigurationSetSendingPausedException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | CommonAwsError
  >;
  sendTemplatedEmail(
    input: SendTemplatedEmailRequest,
  ): Effect.Effect<
    SendTemplatedEmailResponse,
    | AccountSendingPausedException
    | ConfigurationSetDoesNotExistException
    | ConfigurationSetSendingPausedException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | TemplateDoesNotExistException
    | CommonAwsError
  >;
  setActiveReceiptRuleSet(
    input: SetActiveReceiptRuleSetRequest,
  ): Effect.Effect<
    SetActiveReceiptRuleSetResponse,
    RuleSetDoesNotExistException | CommonAwsError
  >;
  setIdentityDkimEnabled(
    input: SetIdentityDkimEnabledRequest,
  ): Effect.Effect<SetIdentityDkimEnabledResponse, CommonAwsError>;
  setIdentityFeedbackForwardingEnabled(
    input: SetIdentityFeedbackForwardingEnabledRequest,
  ): Effect.Effect<
    SetIdentityFeedbackForwardingEnabledResponse,
    CommonAwsError
  >;
  setIdentityHeadersInNotificationsEnabled(
    input: SetIdentityHeadersInNotificationsEnabledRequest,
  ): Effect.Effect<
    SetIdentityHeadersInNotificationsEnabledResponse,
    CommonAwsError
  >;
  setIdentityMailFromDomain(
    input: SetIdentityMailFromDomainRequest,
  ): Effect.Effect<SetIdentityMailFromDomainResponse, CommonAwsError>;
  setIdentityNotificationTopic(
    input: SetIdentityNotificationTopicRequest,
  ): Effect.Effect<SetIdentityNotificationTopicResponse, CommonAwsError>;
  setReceiptRulePosition(
    input: SetReceiptRulePositionRequest,
  ): Effect.Effect<
    SetReceiptRulePositionResponse,
    RuleDoesNotExistException | RuleSetDoesNotExistException | CommonAwsError
  >;
  testRenderTemplate(
    input: TestRenderTemplateRequest,
  ): Effect.Effect<
    TestRenderTemplateResponse,
    | InvalidRenderingParameterException
    | MissingRenderingAttributeException
    | TemplateDoesNotExistException
    | CommonAwsError
  >;
  updateAccountSendingEnabled(
    input: UpdateAccountSendingEnabledRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  updateConfigurationSetEventDestination(
    input: UpdateConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    UpdateConfigurationSetEventDestinationResponse,
    | ConfigurationSetDoesNotExistException
    | EventDestinationDoesNotExistException
    | InvalidCloudWatchDestinationException
    | InvalidFirehoseDestinationException
    | InvalidSNSDestinationException
    | CommonAwsError
  >;
  updateConfigurationSetReputationMetricsEnabled(
    input: UpdateConfigurationSetReputationMetricsEnabledRequest,
  ): Effect.Effect<{}, ConfigurationSetDoesNotExistException | CommonAwsError>;
  updateConfigurationSetSendingEnabled(
    input: UpdateConfigurationSetSendingEnabledRequest,
  ): Effect.Effect<{}, ConfigurationSetDoesNotExistException | CommonAwsError>;
  updateConfigurationSetTrackingOptions(
    input: UpdateConfigurationSetTrackingOptionsRequest,
  ): Effect.Effect<
    UpdateConfigurationSetTrackingOptionsResponse,
    | ConfigurationSetDoesNotExistException
    | InvalidTrackingOptionsException
    | TrackingOptionsDoesNotExistException
    | CommonAwsError
  >;
  updateCustomVerificationEmailTemplate(
    input: UpdateCustomVerificationEmailTemplateRequest,
  ): Effect.Effect<
    {},
    | CustomVerificationEmailInvalidContentException
    | CustomVerificationEmailTemplateDoesNotExistException
    | FromEmailAddressNotVerifiedException
    | CommonAwsError
  >;
  updateReceiptRule(
    input: UpdateReceiptRuleRequest,
  ): Effect.Effect<
    UpdateReceiptRuleResponse,
    | InvalidLambdaFunctionException
    | InvalidS3ConfigurationException
    | InvalidSnsTopicException
    | LimitExceededException
    | RuleDoesNotExistException
    | RuleSetDoesNotExistException
    | CommonAwsError
  >;
  updateTemplate(
    input: UpdateTemplateRequest,
  ): Effect.Effect<
    UpdateTemplateResponse,
    InvalidTemplateException | TemplateDoesNotExistException | CommonAwsError
  >;
  verifyDomainDkim(
    input: VerifyDomainDkimRequest,
  ): Effect.Effect<VerifyDomainDkimResponse, CommonAwsError>;
  verifyDomainIdentity(
    input: VerifyDomainIdentityRequest,
  ): Effect.Effect<VerifyDomainIdentityResponse, CommonAwsError>;
  verifyEmailAddress(
    input: VerifyEmailAddressRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  verifyEmailIdentity(
    input: VerifyEmailIdentityRequest,
  ): Effect.Effect<VerifyEmailIdentityResponse, CommonAwsError>;
}

export declare class Ses extends SES {}

export declare class AccountSendingPausedException extends EffectData.TaggedError(
  "AccountSendingPausedException",
)<{
  readonly message?: string;
}> {}
export interface AddHeaderAction {
  HeaderName: string;
  HeaderValue: string;
}
export type Address = string;

export type AddressList = Array<string>;
export declare class AlreadyExistsException extends EffectData.TaggedError(
  "AlreadyExistsException",
)<{
  readonly Name?: string;
  readonly message?: string;
}> {}
export type AmazonResourceName = string;

export type ArrivalDate = Date | string;

export type BehaviorOnMXFailure = "UseDefaultValue" | "RejectMessage";
export interface Body {
  Text?: Content;
  Html?: Content;
}
export interface BounceAction {
  TopicArn?: string;
  SmtpReplyCode: string;
  StatusCode?: string;
  Message: string;
  Sender: string;
}
export interface BouncedRecipientInfo {
  Recipient: string;
  RecipientArn?: string;
  BounceType?: BounceType;
  RecipientDsnFields?: RecipientDsnFields;
}
export type BouncedRecipientInfoList = Array<BouncedRecipientInfo>;
export type BounceMessage = string;

export type BounceSmtpReplyCode = string;

export type BounceStatusCode = string;

export type BounceType =
  | "DoesNotExist"
  | "MessageTooLarge"
  | "ExceededQuota"
  | "ContentRejected"
  | "Undefined"
  | "TemporaryFailure";
export interface BulkEmailDestination {
  Destination: Destination;
  ReplacementTags?: Array<MessageTag>;
  ReplacementTemplateData?: string;
}
export type BulkEmailDestinationList = Array<BulkEmailDestination>;
export interface BulkEmailDestinationStatus {
  Status?: BulkEmailStatus;
  Error?: string;
  MessageId?: string;
}
export type BulkEmailDestinationStatusList = Array<BulkEmailDestinationStatus>;
export type BulkEmailStatus =
  | "Success"
  | "MessageRejected"
  | "MailFromDomainNotVerified"
  | "ConfigurationSetDoesNotExist"
  | "TemplateDoesNotExist"
  | "AccountSuspended"
  | "AccountThrottled"
  | "AccountDailyQuotaExceeded"
  | "InvalidSendingPoolName"
  | "AccountSendingPaused"
  | "ConfigurationSetSendingPaused"
  | "InvalidParameterValue"
  | "TransientFailure"
  | "Failed";
export declare class CannotDeleteException extends EffectData.TaggedError(
  "CannotDeleteException",
)<{
  readonly Name?: string;
  readonly message?: string;
}> {}
export type Charset = string;

export type Cidr = string;

export interface CloneReceiptRuleSetRequest {
  RuleSetName: string;
  OriginalRuleSetName: string;
}
export interface CloneReceiptRuleSetResponse {}
export interface CloudWatchDestination {
  DimensionConfigurations: Array<CloudWatchDimensionConfiguration>;
}
export interface CloudWatchDimensionConfiguration {
  DimensionName: string;
  DimensionValueSource: DimensionValueSource;
  DefaultDimensionValue: string;
}
export type CloudWatchDimensionConfigurations =
  Array<CloudWatchDimensionConfiguration>;
export interface ConfigurationSet {
  Name: string;
}
export declare class ConfigurationSetAlreadyExistsException extends EffectData.TaggedError(
  "ConfigurationSetAlreadyExistsException",
)<{
  readonly ConfigurationSetName?: string;
  readonly message?: string;
}> {}
export type ConfigurationSetAttribute =
  | "EVENT_DESTINATIONS"
  | "TRACKING_OPTIONS"
  | "DELIVERY_OPTIONS"
  | "REPUTATION_OPTIONS";
export type ConfigurationSetAttributeList = Array<ConfigurationSetAttribute>;
export declare class ConfigurationSetDoesNotExistException extends EffectData.TaggedError(
  "ConfigurationSetDoesNotExistException",
)<{
  readonly ConfigurationSetName?: string;
  readonly message?: string;
}> {}
export type ConfigurationSetName = string;

export type ConfigurationSets = Array<ConfigurationSet>;
export declare class ConfigurationSetSendingPausedException extends EffectData.TaggedError(
  "ConfigurationSetSendingPausedException",
)<{
  readonly ConfigurationSetName?: string;
  readonly message?: string;
}> {}
export interface ConnectAction {
  InstanceARN: string;
  IAMRoleARN: string;
}
export type ConnectInstanceArn = string;

export interface Content {
  Data: string;
  Charset?: string;
}
export type Counter = number;

export interface CreateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestination: EventDestination;
}
export interface CreateConfigurationSetEventDestinationResponse {}
export interface CreateConfigurationSetRequest {
  ConfigurationSet: ConfigurationSet;
}
export interface CreateConfigurationSetResponse {}
export interface CreateConfigurationSetTrackingOptionsRequest {
  ConfigurationSetName: string;
  TrackingOptions: TrackingOptions;
}
export interface CreateConfigurationSetTrackingOptionsResponse {}
export interface CreateCustomVerificationEmailTemplateRequest {
  TemplateName: string;
  FromEmailAddress: string;
  TemplateSubject: string;
  TemplateContent: string;
  SuccessRedirectionURL: string;
  FailureRedirectionURL: string;
}
export interface CreateReceiptFilterRequest {
  Filter: ReceiptFilter;
}
export interface CreateReceiptFilterResponse {}
export interface CreateReceiptRuleRequest {
  RuleSetName: string;
  After?: string;
  Rule: ReceiptRule;
}
export interface CreateReceiptRuleResponse {}
export interface CreateReceiptRuleSetRequest {
  RuleSetName: string;
}
export interface CreateReceiptRuleSetResponse {}
export interface CreateTemplateRequest {
  Template: Template;
}
export interface CreateTemplateResponse {}
export type CustomMailFromStatus =
  | "Pending"
  | "Success"
  | "Failed"
  | "TemporaryFailure";
export type CustomRedirectDomain = string;

export declare class CustomVerificationEmailInvalidContentException extends EffectData.TaggedError(
  "CustomVerificationEmailInvalidContentException",
)<{
  readonly message?: string;
}> {}
export interface CustomVerificationEmailTemplate {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
}
export declare class CustomVerificationEmailTemplateAlreadyExistsException extends EffectData.TaggedError(
  "CustomVerificationEmailTemplateAlreadyExistsException",
)<{
  readonly CustomVerificationEmailTemplateName?: string;
  readonly message?: string;
}> {}
export declare class CustomVerificationEmailTemplateDoesNotExistException extends EffectData.TaggedError(
  "CustomVerificationEmailTemplateDoesNotExistException",
)<{
  readonly CustomVerificationEmailTemplateName?: string;
  readonly message?: string;
}> {}
export type CustomVerificationEmailTemplates =
  Array<CustomVerificationEmailTemplate>;
export type DefaultDimensionValue = string;

export interface DeleteConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
}
export interface DeleteConfigurationSetEventDestinationResponse {}
export interface DeleteConfigurationSetRequest {
  ConfigurationSetName: string;
}
export interface DeleteConfigurationSetResponse {}
export interface DeleteConfigurationSetTrackingOptionsRequest {
  ConfigurationSetName: string;
}
export interface DeleteConfigurationSetTrackingOptionsResponse {}
export interface DeleteCustomVerificationEmailTemplateRequest {
  TemplateName: string;
}
export interface DeleteIdentityPolicyRequest {
  Identity: string;
  PolicyName: string;
}
export interface DeleteIdentityPolicyResponse {}
export interface DeleteIdentityRequest {
  Identity: string;
}
export interface DeleteIdentityResponse {}
export interface DeleteReceiptFilterRequest {
  FilterName: string;
}
export interface DeleteReceiptFilterResponse {}
export interface DeleteReceiptRuleRequest {
  RuleSetName: string;
  RuleName: string;
}
export interface DeleteReceiptRuleResponse {}
export interface DeleteReceiptRuleSetRequest {
  RuleSetName: string;
}
export interface DeleteReceiptRuleSetResponse {}
export interface DeleteTemplateRequest {
  TemplateName: string;
}
export interface DeleteTemplateResponse {}
export interface DeleteVerifiedEmailAddressRequest {
  EmailAddress: string;
}
export interface DeliveryOptions {
  TlsPolicy?: TlsPolicy;
}
export interface DescribeActiveReceiptRuleSetRequest {}
export interface DescribeActiveReceiptRuleSetResponse {
  Metadata?: ReceiptRuleSetMetadata;
  Rules?: Array<ReceiptRule>;
}
export interface DescribeConfigurationSetRequest {
  ConfigurationSetName: string;
  ConfigurationSetAttributeNames?: Array<ConfigurationSetAttribute>;
}
export interface DescribeConfigurationSetResponse {
  ConfigurationSet?: ConfigurationSet;
  EventDestinations?: Array<EventDestination>;
  TrackingOptions?: TrackingOptions;
  DeliveryOptions?: DeliveryOptions;
  ReputationOptions?: ReputationOptions;
}
export interface DescribeReceiptRuleRequest {
  RuleSetName: string;
  RuleName: string;
}
export interface DescribeReceiptRuleResponse {
  Rule?: ReceiptRule;
}
export interface DescribeReceiptRuleSetRequest {
  RuleSetName: string;
}
export interface DescribeReceiptRuleSetResponse {
  Metadata?: ReceiptRuleSetMetadata;
  Rules?: Array<ReceiptRule>;
}
export interface Destination {
  ToAddresses?: Array<string>;
  CcAddresses?: Array<string>;
  BccAddresses?: Array<string>;
}
export type DiagnosticCode = string;

export type DimensionName = string;

export type DimensionValueSource = "MESSAGE_TAG" | "EMAIL_HEADER" | "LINK_TAG";
export type DkimAttributes = Record<string, IdentityDkimAttributes>;
export type Domain = string;

export type DsnAction =
  | "FAILED"
  | "DELAYED"
  | "DELIVERED"
  | "RELAYED"
  | "EXPANDED";
export type DsnStatus = string;

export type Enabled = boolean;

export type SesError = string;

export type ErrorMessage = string;

export interface EventDestination {
  Name: string;
  Enabled?: boolean;
  MatchingEventTypes: Array<EventType>;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  CloudWatchDestination?: CloudWatchDestination;
  SNSDestination?: SNSDestination;
}
export declare class EventDestinationAlreadyExistsException extends EffectData.TaggedError(
  "EventDestinationAlreadyExistsException",
)<{
  readonly ConfigurationSetName?: string;
  readonly EventDestinationName?: string;
  readonly message?: string;
}> {}
export declare class EventDestinationDoesNotExistException extends EffectData.TaggedError(
  "EventDestinationDoesNotExistException",
)<{
  readonly ConfigurationSetName?: string;
  readonly EventDestinationName?: string;
  readonly message?: string;
}> {}
export type EventDestinationName = string;

export type EventDestinations = Array<EventDestination>;
export type EventType =
  | "SEND"
  | "REJECT"
  | "BOUNCE"
  | "COMPLAINT"
  | "DELIVERY"
  | "OPEN"
  | "CLICK"
  | "RENDERING_FAILURE";
export type EventTypes = Array<EventType>;
export type Explanation = string;

export interface ExtensionField {
  Name: string;
  Value: string;
}
export type ExtensionFieldList = Array<ExtensionField>;
export type ExtensionFieldName = string;

export type ExtensionFieldValue = string;

export type FailureRedirectionURL = string;

export type FromAddress = string;

export declare class FromEmailAddressNotVerifiedException extends EffectData.TaggedError(
  "FromEmailAddressNotVerifiedException",
)<{
  readonly FromEmailAddress?: string;
  readonly message?: string;
}> {}
export interface GetAccountSendingEnabledResponse {
  Enabled?: boolean;
}
export interface GetCustomVerificationEmailTemplateRequest {
  TemplateName: string;
}
export interface GetCustomVerificationEmailTemplateResponse {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  TemplateContent?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
}
export interface GetIdentityDkimAttributesRequest {
  Identities: Array<string>;
}
export interface GetIdentityDkimAttributesResponse {
  DkimAttributes: Record<string, IdentityDkimAttributes>;
}
export interface GetIdentityMailFromDomainAttributesRequest {
  Identities: Array<string>;
}
export interface GetIdentityMailFromDomainAttributesResponse {
  MailFromDomainAttributes: Record<string, IdentityMailFromDomainAttributes>;
}
export interface GetIdentityNotificationAttributesRequest {
  Identities: Array<string>;
}
export interface GetIdentityNotificationAttributesResponse {
  NotificationAttributes: Record<string, IdentityNotificationAttributes>;
}
export interface GetIdentityPoliciesRequest {
  Identity: string;
  PolicyNames: Array<string>;
}
export interface GetIdentityPoliciesResponse {
  Policies: Record<string, string>;
}
export interface GetIdentityVerificationAttributesRequest {
  Identities: Array<string>;
}
export interface GetIdentityVerificationAttributesResponse {
  VerificationAttributes: Record<string, IdentityVerificationAttributes>;
}
export interface GetSendQuotaResponse {
  Max24HourSend?: number;
  MaxSendRate?: number;
  SentLast24Hours?: number;
}
export interface GetSendStatisticsResponse {
  SendDataPoints?: Array<SendDataPoint>;
}
export interface GetTemplateRequest {
  TemplateName: string;
}
export interface GetTemplateResponse {
  Template?: Template;
}
export type HeaderName = string;

export type HeaderValue = string;

export type HtmlPart = string;

export type IAMRoleARN = string;

export type Identity = string;

export interface IdentityDkimAttributes {
  DkimEnabled: boolean;
  DkimVerificationStatus: VerificationStatus;
  DkimTokens?: Array<string>;
}
export type IdentityList = Array<string>;
export interface IdentityMailFromDomainAttributes {
  MailFromDomain: string;
  MailFromDomainStatus: CustomMailFromStatus;
  BehaviorOnMXFailure: BehaviorOnMXFailure;
}
export interface IdentityNotificationAttributes {
  BounceTopic: string;
  ComplaintTopic: string;
  DeliveryTopic: string;
  ForwardingEnabled: boolean;
  HeadersInBounceNotificationsEnabled?: boolean;
  HeadersInComplaintNotificationsEnabled?: boolean;
  HeadersInDeliveryNotificationsEnabled?: boolean;
}
export type IdentityType = "EmailAddress" | "Domain";
export interface IdentityVerificationAttributes {
  VerificationStatus: VerificationStatus;
  VerificationToken?: string;
}
export declare class InvalidCloudWatchDestinationException extends EffectData.TaggedError(
  "InvalidCloudWatchDestinationException",
)<{
  readonly ConfigurationSetName?: string;
  readonly EventDestinationName?: string;
  readonly message?: string;
}> {}
export declare class InvalidConfigurationSetException extends EffectData.TaggedError(
  "InvalidConfigurationSetException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeliveryOptionsException extends EffectData.TaggedError(
  "InvalidDeliveryOptionsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidFirehoseDestinationException extends EffectData.TaggedError(
  "InvalidFirehoseDestinationException",
)<{
  readonly ConfigurationSetName?: string;
  readonly EventDestinationName?: string;
  readonly message?: string;
}> {}
export declare class InvalidLambdaFunctionException extends EffectData.TaggedError(
  "InvalidLambdaFunctionException",
)<{
  readonly FunctionArn?: string;
  readonly message?: string;
}> {}
export declare class InvalidPolicyException extends EffectData.TaggedError(
  "InvalidPolicyException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRenderingParameterException extends EffectData.TaggedError(
  "InvalidRenderingParameterException",
)<{
  readonly TemplateName?: string;
  readonly message?: string;
}> {}
export declare class InvalidS3ConfigurationException extends EffectData.TaggedError(
  "InvalidS3ConfigurationException",
)<{
  readonly Bucket?: string;
  readonly message?: string;
}> {}
export declare class InvalidSNSDestinationException extends EffectData.TaggedError(
  "InvalidSNSDestinationException",
)<{
  readonly ConfigurationSetName?: string;
  readonly EventDestinationName?: string;
  readonly message?: string;
}> {}
export declare class InvalidSnsTopicException extends EffectData.TaggedError(
  "InvalidSnsTopicException",
)<{
  readonly Topic?: string;
  readonly message?: string;
}> {}
export declare class InvalidTemplateException extends EffectData.TaggedError(
  "InvalidTemplateException",
)<{
  readonly TemplateName?: string;
  readonly message?: string;
}> {}
export declare class InvalidTrackingOptionsException extends EffectData.TaggedError(
  "InvalidTrackingOptionsException",
)<{
  readonly message?: string;
}> {}
export type InvocationType = "Event" | "RequestResponse";
export interface KinesisFirehoseDestination {
  IAMRoleARN: string;
  DeliveryStreamARN: string;
}
export interface LambdaAction {
  TopicArn?: string;
  FunctionArn: string;
  InvocationType?: InvocationType;
}
export type LastAttemptDate = Date | string;

export type LastFreshStart = Date | string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListConfigurationSetsRequest {
  NextToken?: string;
  MaxItems?: number;
}
export interface ListConfigurationSetsResponse {
  ConfigurationSets?: Array<ConfigurationSet>;
  NextToken?: string;
}
export interface ListCustomVerificationEmailTemplatesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCustomVerificationEmailTemplatesResponse {
  CustomVerificationEmailTemplates?: Array<CustomVerificationEmailTemplate>;
  NextToken?: string;
}
export interface ListIdentitiesRequest {
  IdentityType?: IdentityType;
  NextToken?: string;
  MaxItems?: number;
}
export interface ListIdentitiesResponse {
  Identities: Array<string>;
  NextToken?: string;
}
export interface ListIdentityPoliciesRequest {
  Identity: string;
}
export interface ListIdentityPoliciesResponse {
  PolicyNames: Array<string>;
}
export interface ListReceiptFiltersRequest {}
export interface ListReceiptFiltersResponse {
  Filters?: Array<ReceiptFilter>;
}
export interface ListReceiptRuleSetsRequest {
  NextToken?: string;
}
export interface ListReceiptRuleSetsResponse {
  RuleSets?: Array<ReceiptRuleSetMetadata>;
  NextToken?: string;
}
export interface ListTemplatesRequest {
  NextToken?: string;
  MaxItems?: number;
}
export interface ListTemplatesResponse {
  TemplatesMetadata?: Array<TemplateMetadata>;
  NextToken?: string;
}
export interface ListVerifiedEmailAddressesResponse {
  VerifiedEmailAddresses?: Array<string>;
}
export type MailFromDomainAttributes = Record<
  string,
  IdentityMailFromDomainAttributes
>;
export type MailFromDomainName = string;

export declare class MailFromDomainNotVerifiedException extends EffectData.TaggedError(
  "MailFromDomainNotVerifiedException",
)<{
  readonly message?: string;
}> {}
export type Max24HourSend = number;

export type MaxItems = number;

export type MaxResults = number;

export type MaxSendRate = number;

export interface Message {
  Subject: Content;
  Body: Body;
}
export type MessageData = string;

export interface MessageDsn {
  ReportingMta: string;
  ArrivalDate?: Date | string;
  ExtensionFields?: Array<ExtensionField>;
}
export type MessageId = string;

export declare class MessageRejected extends EffectData.TaggedError(
  "MessageRejected",
)<{
  readonly message?: string;
}> {}
export interface MessageTag {
  Name: string;
  Value: string;
}
export type MessageTagList = Array<MessageTag>;
export type MessageTagName = string;

export type MessageTagValue = string;

export declare class MissingRenderingAttributeException extends EffectData.TaggedError(
  "MissingRenderingAttributeException",
)<{
  readonly TemplateName?: string;
  readonly message?: string;
}> {}
export type NextToken = string;

export type NotificationAttributes = Record<
  string,
  IdentityNotificationAttributes
>;
export type NotificationTopic = string;

export type NotificationType = "Bounce" | "Complaint" | "Delivery";
export type Policy = string;

export type PolicyMap = Record<string, string>;
export type PolicyName = string;

export type PolicyNameList = Array<string>;
export declare class ProductionAccessNotGrantedException extends EffectData.TaggedError(
  "ProductionAccessNotGrantedException",
)<{
  readonly message?: string;
}> {}
export interface PutConfigurationSetDeliveryOptionsRequest {
  ConfigurationSetName: string;
  DeliveryOptions?: DeliveryOptions;
}
export interface PutConfigurationSetDeliveryOptionsResponse {}
export interface PutIdentityPolicyRequest {
  Identity: string;
  PolicyName: string;
  Policy: string;
}
export interface PutIdentityPolicyResponse {}
export interface RawMessage {
  Data: Uint8Array | string;
}
export type RawMessageData = Uint8Array | string;

export interface ReceiptAction {
  S3Action?: S3Action;
  BounceAction?: BounceAction;
  WorkmailAction?: WorkmailAction;
  LambdaAction?: LambdaAction;
  StopAction?: StopAction;
  AddHeaderAction?: AddHeaderAction;
  SNSAction?: SNSAction;
  ConnectAction?: ConnectAction;
}
export type ReceiptActionsList = Array<ReceiptAction>;
export interface ReceiptFilter {
  Name: string;
  IpFilter: ReceiptIpFilter;
}
export type ReceiptFilterList = Array<ReceiptFilter>;
export type ReceiptFilterName = string;

export type ReceiptFilterPolicy = "Block" | "Allow";
export interface ReceiptIpFilter {
  Policy: ReceiptFilterPolicy;
  Cidr: string;
}
export interface ReceiptRule {
  Name: string;
  Enabled?: boolean;
  TlsPolicy?: TlsPolicy;
  Recipients?: Array<string>;
  Actions?: Array<ReceiptAction>;
  ScanEnabled?: boolean;
}
export type ReceiptRuleName = string;

export type ReceiptRuleNamesList = Array<string>;
export interface ReceiptRuleSetMetadata {
  Name?: string;
  CreatedTimestamp?: Date | string;
}
export type ReceiptRuleSetName = string;

export type ReceiptRuleSetsLists = Array<ReceiptRuleSetMetadata>;
export type ReceiptRulesList = Array<ReceiptRule>;
export type Recipient = string;

export interface RecipientDsnFields {
  FinalRecipient?: string;
  Action: DsnAction;
  RemoteMta?: string;
  Status: string;
  DiagnosticCode?: string;
  LastAttemptDate?: Date | string;
  ExtensionFields?: Array<ExtensionField>;
}
export type RecipientsList = Array<string>;
export type RemoteMta = string;

export type RenderedTemplate = string;

export interface ReorderReceiptRuleSetRequest {
  RuleSetName: string;
  RuleNames: Array<string>;
}
export interface ReorderReceiptRuleSetResponse {}
export type ReportingMta = string;

export interface ReputationOptions {
  SendingEnabled?: boolean;
  ReputationMetricsEnabled?: boolean;
  LastFreshStart?: Date | string;
}
export declare class RuleDoesNotExistException extends EffectData.TaggedError(
  "RuleDoesNotExistException",
)<{
  readonly Name?: string;
  readonly message?: string;
}> {}
export type RuleOrRuleSetName = string;

export declare class RuleSetDoesNotExistException extends EffectData.TaggedError(
  "RuleSetDoesNotExistException",
)<{
  readonly Name?: string;
  readonly message?: string;
}> {}
export interface S3Action {
  TopicArn?: string;
  BucketName: string;
  ObjectKeyPrefix?: string;
  KmsKeyArn?: string;
  IamRoleArn?: string;
}
export type S3BucketName = string;

export type S3KeyPrefix = string;

export interface SendBounceRequest {
  OriginalMessageId: string;
  BounceSender: string;
  Explanation?: string;
  MessageDsn?: MessageDsn;
  BouncedRecipientInfoList: Array<BouncedRecipientInfo>;
  BounceSenderArn?: string;
}
export interface SendBounceResponse {
  MessageId?: string;
}
export interface SendBulkTemplatedEmailRequest {
  Source: string;
  SourceArn?: string;
  ReplyToAddresses?: Array<string>;
  ReturnPath?: string;
  ReturnPathArn?: string;
  ConfigurationSetName?: string;
  DefaultTags?: Array<MessageTag>;
  Template: string;
  TemplateArn?: string;
  DefaultTemplateData: string;
  Destinations: Array<BulkEmailDestination>;
}
export interface SendBulkTemplatedEmailResponse {
  Status: Array<BulkEmailDestinationStatus>;
}
export interface SendCustomVerificationEmailRequest {
  EmailAddress: string;
  TemplateName: string;
  ConfigurationSetName?: string;
}
export interface SendCustomVerificationEmailResponse {
  MessageId?: string;
}
export interface SendDataPoint {
  Timestamp?: Date | string;
  DeliveryAttempts?: number;
  Bounces?: number;
  Complaints?: number;
  Rejects?: number;
}
export type SendDataPointList = Array<SendDataPoint>;
export interface SendEmailRequest {
  Source: string;
  Destination: Destination;
  Message: Message;
  ReplyToAddresses?: Array<string>;
  ReturnPath?: string;
  SourceArn?: string;
  ReturnPathArn?: string;
  Tags?: Array<MessageTag>;
  ConfigurationSetName?: string;
}
export interface SendEmailResponse {
  MessageId: string;
}
export interface SendRawEmailRequest {
  Source?: string;
  Destinations?: Array<string>;
  RawMessage: RawMessage;
  FromArn?: string;
  SourceArn?: string;
  ReturnPathArn?: string;
  Tags?: Array<MessageTag>;
  ConfigurationSetName?: string;
}
export interface SendRawEmailResponse {
  MessageId: string;
}
export interface SendTemplatedEmailRequest {
  Source: string;
  Destination: Destination;
  ReplyToAddresses?: Array<string>;
  ReturnPath?: string;
  SourceArn?: string;
  ReturnPathArn?: string;
  Tags?: Array<MessageTag>;
  ConfigurationSetName?: string;
  Template: string;
  TemplateArn?: string;
  TemplateData: string;
}
export interface SendTemplatedEmailResponse {
  MessageId: string;
}
export type SentLast24Hours = number;

export interface SetActiveReceiptRuleSetRequest {
  RuleSetName?: string;
}
export interface SetActiveReceiptRuleSetResponse {}
export interface SetIdentityDkimEnabledRequest {
  Identity: string;
  DkimEnabled: boolean;
}
export interface SetIdentityDkimEnabledResponse {}
export interface SetIdentityFeedbackForwardingEnabledRequest {
  Identity: string;
  ForwardingEnabled: boolean;
}
export interface SetIdentityFeedbackForwardingEnabledResponse {}
export interface SetIdentityHeadersInNotificationsEnabledRequest {
  Identity: string;
  NotificationType: NotificationType;
  Enabled: boolean;
}
export interface SetIdentityHeadersInNotificationsEnabledResponse {}
export interface SetIdentityMailFromDomainRequest {
  Identity: string;
  MailFromDomain?: string;
  BehaviorOnMXFailure?: BehaviorOnMXFailure;
}
export interface SetIdentityMailFromDomainResponse {}
export interface SetIdentityNotificationTopicRequest {
  Identity: string;
  NotificationType: NotificationType;
  SnsTopic?: string;
}
export interface SetIdentityNotificationTopicResponse {}
export interface SetReceiptRulePositionRequest {
  RuleSetName: string;
  RuleName: string;
  After?: string;
}
export interface SetReceiptRulePositionResponse {}
export interface SNSAction {
  TopicArn: string;
  Encoding?: SNSActionEncoding;
}
export type SNSActionEncoding = "UTF8" | "Base64";
export interface SNSDestination {
  TopicARN: string;
}
export interface StopAction {
  Scope: StopScope;
  TopicArn?: string;
}
export type StopScope = "RULE_SET";
export type Subject = string;

export type SubjectPart = string;

export type SuccessRedirectionURL = string;

export interface Template {
  TemplateName: string;
  SubjectPart?: string;
  TextPart?: string;
  HtmlPart?: string;
}
export type TemplateContent = string;

export type TemplateData = string;

export declare class TemplateDoesNotExistException extends EffectData.TaggedError(
  "TemplateDoesNotExistException",
)<{
  readonly TemplateName?: string;
  readonly message?: string;
}> {}
export interface TemplateMetadata {
  Name?: string;
  CreatedTimestamp?: Date | string;
}
export type TemplateMetadataList = Array<TemplateMetadata>;
export type TemplateName = string;

export interface TestRenderTemplateRequest {
  TemplateName: string;
  TemplateData: string;
}
export interface TestRenderTemplateResponse {
  RenderedTemplate?: string;
}
export type TextPart = string;

export type Timestamp = Date | string;

export type TlsPolicy = "Require" | "Optional";
export interface TrackingOptions {
  CustomRedirectDomain?: string;
}
export declare class TrackingOptionsAlreadyExistsException extends EffectData.TaggedError(
  "TrackingOptionsAlreadyExistsException",
)<{
  readonly ConfigurationSetName?: string;
  readonly message?: string;
}> {}
export declare class TrackingOptionsDoesNotExistException extends EffectData.TaggedError(
  "TrackingOptionsDoesNotExistException",
)<{
  readonly ConfigurationSetName?: string;
  readonly message?: string;
}> {}
export interface UpdateAccountSendingEnabledRequest {
  Enabled?: boolean;
}
export interface UpdateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestination: EventDestination;
}
export interface UpdateConfigurationSetEventDestinationResponse {}
export interface UpdateConfigurationSetReputationMetricsEnabledRequest {
  ConfigurationSetName: string;
  Enabled: boolean;
}
export interface UpdateConfigurationSetSendingEnabledRequest {
  ConfigurationSetName: string;
  Enabled: boolean;
}
export interface UpdateConfigurationSetTrackingOptionsRequest {
  ConfigurationSetName: string;
  TrackingOptions: TrackingOptions;
}
export interface UpdateConfigurationSetTrackingOptionsResponse {}
export interface UpdateCustomVerificationEmailTemplateRequest {
  TemplateName: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  TemplateContent?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
}
export interface UpdateReceiptRuleRequest {
  RuleSetName: string;
  Rule: ReceiptRule;
}
export interface UpdateReceiptRuleResponse {}
export interface UpdateTemplateRequest {
  Template: Template;
}
export interface UpdateTemplateResponse {}
export type VerificationAttributes = Record<
  string,
  IdentityVerificationAttributes
>;
export type VerificationStatus =
  | "Pending"
  | "Success"
  | "Failed"
  | "TemporaryFailure"
  | "NotStarted";
export type VerificationToken = string;

export type VerificationTokenList = Array<string>;
export interface VerifyDomainDkimRequest {
  Domain: string;
}
export interface VerifyDomainDkimResponse {
  DkimTokens: Array<string>;
}
export interface VerifyDomainIdentityRequest {
  Domain: string;
}
export interface VerifyDomainIdentityResponse {
  VerificationToken: string;
}
export interface VerifyEmailAddressRequest {
  EmailAddress: string;
}
export interface VerifyEmailIdentityRequest {
  EmailAddress: string;
}
export interface VerifyEmailIdentityResponse {}
export interface WorkmailAction {
  TopicArn?: string;
  OrganizationArn: string;
}
export declare namespace CloneReceiptRuleSet {
  export type Input = CloneReceiptRuleSetRequest;
  export type Output = CloneReceiptRuleSetResponse;
  export type Error =
    | AlreadyExistsException
    | LimitExceededException
    | RuleSetDoesNotExistException
    | CommonAwsError;
}

export declare namespace CreateConfigurationSet {
  export type Input = CreateConfigurationSetRequest;
  export type Output = CreateConfigurationSetResponse;
  export type Error =
    | ConfigurationSetAlreadyExistsException
    | InvalidConfigurationSetException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateConfigurationSetEventDestination {
  export type Input = CreateConfigurationSetEventDestinationRequest;
  export type Output = CreateConfigurationSetEventDestinationResponse;
  export type Error =
    | ConfigurationSetDoesNotExistException
    | EventDestinationAlreadyExistsException
    | InvalidCloudWatchDestinationException
    | InvalidFirehoseDestinationException
    | InvalidSNSDestinationException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateConfigurationSetTrackingOptions {
  export type Input = CreateConfigurationSetTrackingOptionsRequest;
  export type Output = CreateConfigurationSetTrackingOptionsResponse;
  export type Error =
    | ConfigurationSetDoesNotExistException
    | InvalidTrackingOptionsException
    | TrackingOptionsAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreateCustomVerificationEmailTemplate {
  export type Input = CreateCustomVerificationEmailTemplateRequest;
  export type Output = {};
  export type Error =
    | CustomVerificationEmailInvalidContentException
    | CustomVerificationEmailTemplateAlreadyExistsException
    | FromEmailAddressNotVerifiedException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateReceiptFilter {
  export type Input = CreateReceiptFilterRequest;
  export type Output = CreateReceiptFilterResponse;
  export type Error =
    | AlreadyExistsException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateReceiptRule {
  export type Input = CreateReceiptRuleRequest;
  export type Output = CreateReceiptRuleResponse;
  export type Error =
    | AlreadyExistsException
    | InvalidLambdaFunctionException
    | InvalidS3ConfigurationException
    | InvalidSnsTopicException
    | LimitExceededException
    | RuleDoesNotExistException
    | RuleSetDoesNotExistException
    | CommonAwsError;
}

export declare namespace CreateReceiptRuleSet {
  export type Input = CreateReceiptRuleSetRequest;
  export type Output = CreateReceiptRuleSetResponse;
  export type Error =
    | AlreadyExistsException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateTemplate {
  export type Input = CreateTemplateRequest;
  export type Output = CreateTemplateResponse;
  export type Error =
    | AlreadyExistsException
    | InvalidTemplateException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationSet {
  export type Input = DeleteConfigurationSetRequest;
  export type Output = DeleteConfigurationSetResponse;
  export type Error = ConfigurationSetDoesNotExistException | CommonAwsError;
}

export declare namespace DeleteConfigurationSetEventDestination {
  export type Input = DeleteConfigurationSetEventDestinationRequest;
  export type Output = DeleteConfigurationSetEventDestinationResponse;
  export type Error =
    | ConfigurationSetDoesNotExistException
    | EventDestinationDoesNotExistException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationSetTrackingOptions {
  export type Input = DeleteConfigurationSetTrackingOptionsRequest;
  export type Output = DeleteConfigurationSetTrackingOptionsResponse;
  export type Error =
    | ConfigurationSetDoesNotExistException
    | TrackingOptionsDoesNotExistException
    | CommonAwsError;
}

export declare namespace DeleteCustomVerificationEmailTemplate {
  export type Input = DeleteCustomVerificationEmailTemplateRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteIdentity {
  export type Input = DeleteIdentityRequest;
  export type Output = DeleteIdentityResponse;
  export type Error = CommonAwsError;
}

export declare namespace DeleteIdentityPolicy {
  export type Input = DeleteIdentityPolicyRequest;
  export type Output = DeleteIdentityPolicyResponse;
  export type Error = CommonAwsError;
}

export declare namespace DeleteReceiptFilter {
  export type Input = DeleteReceiptFilterRequest;
  export type Output = DeleteReceiptFilterResponse;
  export type Error = CommonAwsError;
}

export declare namespace DeleteReceiptRule {
  export type Input = DeleteReceiptRuleRequest;
  export type Output = DeleteReceiptRuleResponse;
  export type Error = RuleSetDoesNotExistException | CommonAwsError;
}

export declare namespace DeleteReceiptRuleSet {
  export type Input = DeleteReceiptRuleSetRequest;
  export type Output = DeleteReceiptRuleSetResponse;
  export type Error = CannotDeleteException | CommonAwsError;
}

export declare namespace DeleteTemplate {
  export type Input = DeleteTemplateRequest;
  export type Output = DeleteTemplateResponse;
  export type Error = CommonAwsError;
}

export declare namespace DeleteVerifiedEmailAddress {
  export type Input = DeleteVerifiedEmailAddressRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DescribeActiveReceiptRuleSet {
  export type Input = DescribeActiveReceiptRuleSetRequest;
  export type Output = DescribeActiveReceiptRuleSetResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeConfigurationSet {
  export type Input = DescribeConfigurationSetRequest;
  export type Output = DescribeConfigurationSetResponse;
  export type Error = ConfigurationSetDoesNotExistException | CommonAwsError;
}

export declare namespace DescribeReceiptRule {
  export type Input = DescribeReceiptRuleRequest;
  export type Output = DescribeReceiptRuleResponse;
  export type Error =
    | RuleDoesNotExistException
    | RuleSetDoesNotExistException
    | CommonAwsError;
}

export declare namespace DescribeReceiptRuleSet {
  export type Input = DescribeReceiptRuleSetRequest;
  export type Output = DescribeReceiptRuleSetResponse;
  export type Error = RuleSetDoesNotExistException | CommonAwsError;
}

export declare namespace GetAccountSendingEnabled {
  export type Input = {};
  export type Output = GetAccountSendingEnabledResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetCustomVerificationEmailTemplate {
  export type Input = GetCustomVerificationEmailTemplateRequest;
  export type Output = GetCustomVerificationEmailTemplateResponse;
  export type Error =
    | CustomVerificationEmailTemplateDoesNotExistException
    | CommonAwsError;
}

export declare namespace GetIdentityDkimAttributes {
  export type Input = GetIdentityDkimAttributesRequest;
  export type Output = GetIdentityDkimAttributesResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetIdentityMailFromDomainAttributes {
  export type Input = GetIdentityMailFromDomainAttributesRequest;
  export type Output = GetIdentityMailFromDomainAttributesResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetIdentityNotificationAttributes {
  export type Input = GetIdentityNotificationAttributesRequest;
  export type Output = GetIdentityNotificationAttributesResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetIdentityPolicies {
  export type Input = GetIdentityPoliciesRequest;
  export type Output = GetIdentityPoliciesResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetIdentityVerificationAttributes {
  export type Input = GetIdentityVerificationAttributesRequest;
  export type Output = GetIdentityVerificationAttributesResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetSendQuota {
  export type Input = {};
  export type Output = GetSendQuotaResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetSendStatistics {
  export type Input = {};
  export type Output = GetSendStatisticsResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetTemplate {
  export type Input = GetTemplateRequest;
  export type Output = GetTemplateResponse;
  export type Error = TemplateDoesNotExistException | CommonAwsError;
}

export declare namespace ListConfigurationSets {
  export type Input = ListConfigurationSetsRequest;
  export type Output = ListConfigurationSetsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListCustomVerificationEmailTemplates {
  export type Input = ListCustomVerificationEmailTemplatesRequest;
  export type Output = ListCustomVerificationEmailTemplatesResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListIdentities {
  export type Input = ListIdentitiesRequest;
  export type Output = ListIdentitiesResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListIdentityPolicies {
  export type Input = ListIdentityPoliciesRequest;
  export type Output = ListIdentityPoliciesResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListReceiptFilters {
  export type Input = ListReceiptFiltersRequest;
  export type Output = ListReceiptFiltersResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListReceiptRuleSets {
  export type Input = ListReceiptRuleSetsRequest;
  export type Output = ListReceiptRuleSetsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListTemplates {
  export type Input = ListTemplatesRequest;
  export type Output = ListTemplatesResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListVerifiedEmailAddresses {
  export type Input = {};
  export type Output = ListVerifiedEmailAddressesResponse;
  export type Error = CommonAwsError;
}

export declare namespace PutConfigurationSetDeliveryOptions {
  export type Input = PutConfigurationSetDeliveryOptionsRequest;
  export type Output = PutConfigurationSetDeliveryOptionsResponse;
  export type Error =
    | ConfigurationSetDoesNotExistException
    | InvalidDeliveryOptionsException
    | CommonAwsError;
}

export declare namespace PutIdentityPolicy {
  export type Input = PutIdentityPolicyRequest;
  export type Output = PutIdentityPolicyResponse;
  export type Error = InvalidPolicyException | CommonAwsError;
}

export declare namespace ReorderReceiptRuleSet {
  export type Input = ReorderReceiptRuleSetRequest;
  export type Output = ReorderReceiptRuleSetResponse;
  export type Error =
    | RuleDoesNotExistException
    | RuleSetDoesNotExistException
    | CommonAwsError;
}

export declare namespace SendBounce {
  export type Input = SendBounceRequest;
  export type Output = SendBounceResponse;
  export type Error = MessageRejected | CommonAwsError;
}

export declare namespace SendBulkTemplatedEmail {
  export type Input = SendBulkTemplatedEmailRequest;
  export type Output = SendBulkTemplatedEmailResponse;
  export type Error =
    | AccountSendingPausedException
    | ConfigurationSetDoesNotExistException
    | ConfigurationSetSendingPausedException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | TemplateDoesNotExistException
    | CommonAwsError;
}

export declare namespace SendCustomVerificationEmail {
  export type Input = SendCustomVerificationEmailRequest;
  export type Output = SendCustomVerificationEmailResponse;
  export type Error =
    | ConfigurationSetDoesNotExistException
    | CustomVerificationEmailTemplateDoesNotExistException
    | FromEmailAddressNotVerifiedException
    | MessageRejected
    | ProductionAccessNotGrantedException
    | CommonAwsError;
}

export declare namespace SendEmail {
  export type Input = SendEmailRequest;
  export type Output = SendEmailResponse;
  export type Error =
    | AccountSendingPausedException
    | ConfigurationSetDoesNotExistException
    | ConfigurationSetSendingPausedException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | CommonAwsError;
}

export declare namespace SendRawEmail {
  export type Input = SendRawEmailRequest;
  export type Output = SendRawEmailResponse;
  export type Error =
    | AccountSendingPausedException
    | ConfigurationSetDoesNotExistException
    | ConfigurationSetSendingPausedException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | CommonAwsError;
}

export declare namespace SendTemplatedEmail {
  export type Input = SendTemplatedEmailRequest;
  export type Output = SendTemplatedEmailResponse;
  export type Error =
    | AccountSendingPausedException
    | ConfigurationSetDoesNotExistException
    | ConfigurationSetSendingPausedException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | TemplateDoesNotExistException
    | CommonAwsError;
}

export declare namespace SetActiveReceiptRuleSet {
  export type Input = SetActiveReceiptRuleSetRequest;
  export type Output = SetActiveReceiptRuleSetResponse;
  export type Error = RuleSetDoesNotExistException | CommonAwsError;
}

export declare namespace SetIdentityDkimEnabled {
  export type Input = SetIdentityDkimEnabledRequest;
  export type Output = SetIdentityDkimEnabledResponse;
  export type Error = CommonAwsError;
}

export declare namespace SetIdentityFeedbackForwardingEnabled {
  export type Input = SetIdentityFeedbackForwardingEnabledRequest;
  export type Output = SetIdentityFeedbackForwardingEnabledResponse;
  export type Error = CommonAwsError;
}

export declare namespace SetIdentityHeadersInNotificationsEnabled {
  export type Input = SetIdentityHeadersInNotificationsEnabledRequest;
  export type Output = SetIdentityHeadersInNotificationsEnabledResponse;
  export type Error = CommonAwsError;
}

export declare namespace SetIdentityMailFromDomain {
  export type Input = SetIdentityMailFromDomainRequest;
  export type Output = SetIdentityMailFromDomainResponse;
  export type Error = CommonAwsError;
}

export declare namespace SetIdentityNotificationTopic {
  export type Input = SetIdentityNotificationTopicRequest;
  export type Output = SetIdentityNotificationTopicResponse;
  export type Error = CommonAwsError;
}

export declare namespace SetReceiptRulePosition {
  export type Input = SetReceiptRulePositionRequest;
  export type Output = SetReceiptRulePositionResponse;
  export type Error =
    | RuleDoesNotExistException
    | RuleSetDoesNotExistException
    | CommonAwsError;
}

export declare namespace TestRenderTemplate {
  export type Input = TestRenderTemplateRequest;
  export type Output = TestRenderTemplateResponse;
  export type Error =
    | InvalidRenderingParameterException
    | MissingRenderingAttributeException
    | TemplateDoesNotExistException
    | CommonAwsError;
}

export declare namespace UpdateAccountSendingEnabled {
  export type Input = UpdateAccountSendingEnabledRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace UpdateConfigurationSetEventDestination {
  export type Input = UpdateConfigurationSetEventDestinationRequest;
  export type Output = UpdateConfigurationSetEventDestinationResponse;
  export type Error =
    | ConfigurationSetDoesNotExistException
    | EventDestinationDoesNotExistException
    | InvalidCloudWatchDestinationException
    | InvalidFirehoseDestinationException
    | InvalidSNSDestinationException
    | CommonAwsError;
}

export declare namespace UpdateConfigurationSetReputationMetricsEnabled {
  export type Input = UpdateConfigurationSetReputationMetricsEnabledRequest;
  export type Output = {};
  export type Error = ConfigurationSetDoesNotExistException | CommonAwsError;
}

export declare namespace UpdateConfigurationSetSendingEnabled {
  export type Input = UpdateConfigurationSetSendingEnabledRequest;
  export type Output = {};
  export type Error = ConfigurationSetDoesNotExistException | CommonAwsError;
}

export declare namespace UpdateConfigurationSetTrackingOptions {
  export type Input = UpdateConfigurationSetTrackingOptionsRequest;
  export type Output = UpdateConfigurationSetTrackingOptionsResponse;
  export type Error =
    | ConfigurationSetDoesNotExistException
    | InvalidTrackingOptionsException
    | TrackingOptionsDoesNotExistException
    | CommonAwsError;
}

export declare namespace UpdateCustomVerificationEmailTemplate {
  export type Input = UpdateCustomVerificationEmailTemplateRequest;
  export type Output = {};
  export type Error =
    | CustomVerificationEmailInvalidContentException
    | CustomVerificationEmailTemplateDoesNotExistException
    | FromEmailAddressNotVerifiedException
    | CommonAwsError;
}

export declare namespace UpdateReceiptRule {
  export type Input = UpdateReceiptRuleRequest;
  export type Output = UpdateReceiptRuleResponse;
  export type Error =
    | InvalidLambdaFunctionException
    | InvalidS3ConfigurationException
    | InvalidSnsTopicException
    | LimitExceededException
    | RuleDoesNotExistException
    | RuleSetDoesNotExistException
    | CommonAwsError;
}

export declare namespace UpdateTemplate {
  export type Input = UpdateTemplateRequest;
  export type Output = UpdateTemplateResponse;
  export type Error =
    | InvalidTemplateException
    | TemplateDoesNotExistException
    | CommonAwsError;
}

export declare namespace VerifyDomainDkim {
  export type Input = VerifyDomainDkimRequest;
  export type Output = VerifyDomainDkimResponse;
  export type Error = CommonAwsError;
}

export declare namespace VerifyDomainIdentity {
  export type Input = VerifyDomainIdentityRequest;
  export type Output = VerifyDomainIdentityResponse;
  export type Error = CommonAwsError;
}

export declare namespace VerifyEmailAddress {
  export type Input = VerifyEmailAddressRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace VerifyEmailIdentity {
  export type Input = VerifyEmailIdentityRequest;
  export type Output = VerifyEmailIdentityResponse;
  export type Error = CommonAwsError;
}
