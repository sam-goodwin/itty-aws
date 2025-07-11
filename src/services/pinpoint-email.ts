import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonPinpointEmailService {
  createConfigurationSet(
    input: CreateConfigurationSetRequest,
  ): Effect.Effect<
    CreateConfigurationSetResponse,
    AlreadyExistsException | BadRequestException | ConcurrentModificationException | LimitExceededException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createConfigurationSetEventDestination(
    input: CreateConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    CreateConfigurationSetEventDestinationResponse,
    AlreadyExistsException | BadRequestException | LimitExceededException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createDedicatedIpPool(
    input: CreateDedicatedIpPoolRequest,
  ): Effect.Effect<
    CreateDedicatedIpPoolResponse,
    AlreadyExistsException | BadRequestException | ConcurrentModificationException | LimitExceededException | TooManyRequestsException | CommonAwsError
  >;
  createDeliverabilityTestReport(
    input: CreateDeliverabilityTestReportRequest,
  ): Effect.Effect<
    CreateDeliverabilityTestReportResponse,
    AccountSuspendedException | BadRequestException | ConcurrentModificationException | LimitExceededException | MailFromDomainNotVerifiedException | MessageRejected | NotFoundException | SendingPausedException | TooManyRequestsException | CommonAwsError
  >;
  createEmailIdentity(
    input: CreateEmailIdentityRequest,
  ): Effect.Effect<
    CreateEmailIdentityResponse,
    BadRequestException | ConcurrentModificationException | LimitExceededException | TooManyRequestsException | CommonAwsError
  >;
  deleteConfigurationSet(
    input: DeleteConfigurationSetRequest,
  ): Effect.Effect<
    DeleteConfigurationSetResponse,
    BadRequestException | ConcurrentModificationException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteConfigurationSetEventDestination(
    input: DeleteConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    DeleteConfigurationSetEventDestinationResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteDedicatedIpPool(
    input: DeleteDedicatedIpPoolRequest,
  ): Effect.Effect<
    DeleteDedicatedIpPoolResponse,
    BadRequestException | ConcurrentModificationException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteEmailIdentity(
    input: DeleteEmailIdentityRequest,
  ): Effect.Effect<
    DeleteEmailIdentityResponse,
    BadRequestException | ConcurrentModificationException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getAccount(
    input: GetAccountRequest,
  ): Effect.Effect<
    GetAccountResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  getBlacklistReports(
    input: GetBlacklistReportsRequest,
  ): Effect.Effect<
    GetBlacklistReportsResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getConfigurationSet(
    input: GetConfigurationSetRequest,
  ): Effect.Effect<
    GetConfigurationSetResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getConfigurationSetEventDestinations(
    input: GetConfigurationSetEventDestinationsRequest,
  ): Effect.Effect<
    GetConfigurationSetEventDestinationsResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getDedicatedIp(
    input: GetDedicatedIpRequest,
  ): Effect.Effect<
    GetDedicatedIpResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getDedicatedIps(
    input: GetDedicatedIpsRequest,
  ): Effect.Effect<
    GetDedicatedIpsResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getDeliverabilityDashboardOptions(
    input: GetDeliverabilityDashboardOptionsRequest,
  ): Effect.Effect<
    GetDeliverabilityDashboardOptionsResponse,
    BadRequestException | LimitExceededException | TooManyRequestsException | CommonAwsError
  >;
  getDeliverabilityTestReport(
    input: GetDeliverabilityTestReportRequest,
  ): Effect.Effect<
    GetDeliverabilityTestReportResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getDomainDeliverabilityCampaign(
    input: GetDomainDeliverabilityCampaignRequest,
  ): Effect.Effect<
    GetDomainDeliverabilityCampaignResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getDomainStatisticsReport(
    input: GetDomainStatisticsReportRequest,
  ): Effect.Effect<
    GetDomainStatisticsReportResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getEmailIdentity(
    input: GetEmailIdentityRequest,
  ): Effect.Effect<
    GetEmailIdentityResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listConfigurationSets(
    input: ListConfigurationSetsRequest,
  ): Effect.Effect<
    ListConfigurationSetsResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listDedicatedIpPools(
    input: ListDedicatedIpPoolsRequest,
  ): Effect.Effect<
    ListDedicatedIpPoolsResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listDeliverabilityTestReports(
    input: ListDeliverabilityTestReportsRequest,
  ): Effect.Effect<
    ListDeliverabilityTestReportsResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listDomainDeliverabilityCampaigns(
    input: ListDomainDeliverabilityCampaignsRequest,
  ): Effect.Effect<
    ListDomainDeliverabilityCampaignsResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listEmailIdentities(
    input: ListEmailIdentitiesRequest,
  ): Effect.Effect<
    ListEmailIdentitiesResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putAccountDedicatedIpWarmupAttributes(
    input: PutAccountDedicatedIpWarmupAttributesRequest,
  ): Effect.Effect<
    PutAccountDedicatedIpWarmupAttributesResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  putAccountSendingAttributes(
    input: PutAccountSendingAttributesRequest,
  ): Effect.Effect<
    PutAccountSendingAttributesResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  putConfigurationSetDeliveryOptions(
    input: PutConfigurationSetDeliveryOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetDeliveryOptionsResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putConfigurationSetReputationOptions(
    input: PutConfigurationSetReputationOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetReputationOptionsResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putConfigurationSetSendingOptions(
    input: PutConfigurationSetSendingOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetSendingOptionsResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putConfigurationSetTrackingOptions(
    input: PutConfigurationSetTrackingOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetTrackingOptionsResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putDedicatedIpInPool(
    input: PutDedicatedIpInPoolRequest,
  ): Effect.Effect<
    PutDedicatedIpInPoolResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putDedicatedIpWarmupAttributes(
    input: PutDedicatedIpWarmupAttributesRequest,
  ): Effect.Effect<
    PutDedicatedIpWarmupAttributesResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putDeliverabilityDashboardOption(
    input: PutDeliverabilityDashboardOptionRequest,
  ): Effect.Effect<
    PutDeliverabilityDashboardOptionResponse,
    AlreadyExistsException | BadRequestException | LimitExceededException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putEmailIdentityDkimAttributes(
    input: PutEmailIdentityDkimAttributesRequest,
  ): Effect.Effect<
    PutEmailIdentityDkimAttributesResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putEmailIdentityFeedbackAttributes(
    input: PutEmailIdentityFeedbackAttributesRequest,
  ): Effect.Effect<
    PutEmailIdentityFeedbackAttributesResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  putEmailIdentityMailFromAttributes(
    input: PutEmailIdentityMailFromAttributesRequest,
  ): Effect.Effect<
    PutEmailIdentityMailFromAttributesResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  sendEmail(
    input: SendEmailRequest,
  ): Effect.Effect<
    SendEmailResponse,
    AccountSuspendedException | BadRequestException | LimitExceededException | MailFromDomainNotVerifiedException | MessageRejected | NotFoundException | SendingPausedException | TooManyRequestsException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    BadRequestException | ConcurrentModificationException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    BadRequestException | ConcurrentModificationException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateConfigurationSetEventDestination(
    input: UpdateConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    UpdateConfigurationSetEventDestinationResponse,
    BadRequestException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
}

export type PinpointEmail = AmazonPinpointEmailService;

export declare class AccountSuspendedException extends Data.TaggedError(
  "AccountSuspendedException",
)<{
  readonly message?: string;
}> {}
export declare class AlreadyExistsException extends Data.TaggedError(
  "AlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type AmazonResourceName = string;

export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export type BehaviorOnMxFailure = "USE_DEFAULT_VALUE" | "REJECT_MESSAGE";
export type BlacklistEntries = Array<BlacklistEntry>;
export interface BlacklistEntry {
  RblName?: string;
  ListingTime?: Date | string;
  Description?: string;
}
export type BlacklistingDescription = string;

export type BlacklistItemName = string;

export type BlacklistItemNames = Array<string>;
export type BlacklistReport = Record<string, Array<BlacklistEntry>>;
export interface Body {
  Text?: Content;
  Html?: Content;
}
export type CampaignId = string;

export type Charset = string;

export interface CloudWatchDestination {
  DimensionConfigurations: Array<CloudWatchDimensionConfiguration>;
}
export interface CloudWatchDimensionConfiguration {
  DimensionName: string;
  DimensionValueSource: DimensionValueSource;
  DefaultDimensionValue: string;
}
export type CloudWatchDimensionConfigurations = Array<CloudWatchDimensionConfiguration>;
export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export type ConfigurationSetName = string;

export type ConfigurationSetNameList = Array<string>;
export interface Content {
  Data: string;
  Charset?: string;
}
export interface CreateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  EventDestination: EventDestinationDefinition;
}
export interface CreateConfigurationSetEventDestinationResponse {
}
export interface CreateConfigurationSetRequest {
  ConfigurationSetName: string;
  TrackingOptions?: TrackingOptions;
  DeliveryOptions?: DeliveryOptions;
  ReputationOptions?: ReputationOptions;
  SendingOptions?: SendingOptions;
  Tags?: Array<Tag>;
}
export interface CreateConfigurationSetResponse {
}
export interface CreateDedicatedIpPoolRequest {
  PoolName: string;
  Tags?: Array<Tag>;
}
export interface CreateDedicatedIpPoolResponse {
}
export interface CreateDeliverabilityTestReportRequest {
  ReportName?: string;
  FromEmailAddress: string;
  Content: EmailContent;
  Tags?: Array<Tag>;
}
export interface CreateDeliverabilityTestReportResponse {
  ReportId: string;
  DeliverabilityTestStatus: DeliverabilityTestStatus;
}
export interface CreateEmailIdentityRequest {
  EmailIdentity: string;
  Tags?: Array<Tag>;
}
export interface CreateEmailIdentityResponse {
  IdentityType?: IdentityType;
  VerifiedForSendingStatus?: boolean;
  DkimAttributes?: DkimAttributes;
}
export type CustomRedirectDomain = string;

export interface DailyVolume {
  StartDate?: Date | string;
  VolumeStatistics?: VolumeStatistics;
  DomainIspPlacements?: Array<DomainIspPlacement>;
}
export type DailyVolumes = Array<DailyVolume>;
export interface DedicatedIp {
  Ip: string;
  WarmupStatus: WarmupStatus;
  WarmupPercentage: number;
  PoolName?: string;
}
export type DedicatedIpList = Array<DedicatedIp>;
export type DefaultDimensionValue = string;

export interface DeleteConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
}
export interface DeleteConfigurationSetEventDestinationResponse {
}
export interface DeleteConfigurationSetRequest {
  ConfigurationSetName: string;
}
export interface DeleteConfigurationSetResponse {
}
export interface DeleteDedicatedIpPoolRequest {
  PoolName: string;
}
export interface DeleteDedicatedIpPoolResponse {
}
export interface DeleteEmailIdentityRequest {
  EmailIdentity: string;
}
export interface DeleteEmailIdentityResponse {
}
export type DeliverabilityDashboardAccountStatus = "ACTIVE" | "PENDING_EXPIRATION" | "DISABLED";
export interface DeliverabilityTestReport {
  ReportId?: string;
  ReportName?: string;
  Subject?: string;
  FromEmailAddress?: string;
  CreateDate?: Date | string;
  DeliverabilityTestStatus?: DeliverabilityTestStatus;
}
export type DeliverabilityTestReports = Array<DeliverabilityTestReport>;
export type DeliverabilityTestStatus = "IN_PROGRESS" | "COMPLETED";
export type DeliverabilityTestSubject = string;

export interface DeliveryOptions {
  TlsPolicy?: TlsPolicy;
  SendingPoolName?: string;
}
export interface Destination {
  ToAddresses?: Array<string>;
  CcAddresses?: Array<string>;
  BccAddresses?: Array<string>;
}
export type DimensionName = string;

export type DimensionValueSource = "MESSAGE_TAG" | "EMAIL_HEADER" | "LINK_TAG";
export interface DkimAttributes {
  SigningEnabled?: boolean;
  Status?: DkimStatus;
  Tokens?: Array<string>;
}
export type DkimStatus = "PENDING" | "SUCCESS" | "FAILED" | "TEMPORARY_FAILURE" | "NOT_STARTED";
export type DnsToken = string;

export type DnsTokenList = Array<string>;
export type Domain = string;

export interface DomainDeliverabilityCampaign {
  CampaignId?: string;
  ImageUrl?: string;
  Subject?: string;
  FromAddress?: string;
  SendingIps?: Array<string>;
  FirstSeenDateTime?: Date | string;
  LastSeenDateTime?: Date | string;
  InboxCount?: number;
  SpamCount?: number;
  ReadRate?: number;
  DeleteRate?: number;
  ReadDeleteRate?: number;
  ProjectedVolume?: number;
  Esps?: Array<string>;
}
export type DomainDeliverabilityCampaignList = Array<DomainDeliverabilityCampaign>;
export interface DomainDeliverabilityTrackingOption {
  Domain?: string;
  SubscriptionStartDate?: Date | string;
  InboxPlacementTrackingOption?: InboxPlacementTrackingOption;
}
export type DomainDeliverabilityTrackingOptions = Array<DomainDeliverabilityTrackingOption>;
export interface DomainIspPlacement {
  IspName?: string;
  InboxRawCount?: number;
  SpamRawCount?: number;
  InboxPercentage?: number;
  SpamPercentage?: number;
}
export type DomainIspPlacements = Array<DomainIspPlacement>;
export type EmailAddress = string;

export type EmailAddressList = Array<string>;
export interface EmailContent {
  Simple?: Message;
  Raw?: RawMessage;
  Template?: Template;
}
export type Enabled = boolean;

export type ErrorMessage = string;

export type Esp = string;

export type Esps = Array<string>;
export interface EventDestination {
  Name: string;
  Enabled?: boolean;
  MatchingEventTypes: Array<EventType>;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  CloudWatchDestination?: CloudWatchDestination;
  SnsDestination?: SnsDestination;
  PinpointDestination?: PinpointDestination;
}
export interface EventDestinationDefinition {
  Enabled?: boolean;
  MatchingEventTypes?: Array<EventType>;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  CloudWatchDestination?: CloudWatchDestination;
  SnsDestination?: SnsDestination;
  PinpointDestination?: PinpointDestination;
}
export type EventDestinationName = string;

export type EventDestinations = Array<EventDestination>;
export type EventType = "SEND" | "REJECT" | "BOUNCE" | "COMPLAINT" | "DELIVERY" | "OPEN" | "CLICK" | "RENDERING_FAILURE";
export type EventTypes = Array<EventType>;
export type GeneralEnforcementStatus = string;

export interface GetAccountRequest {
}
export interface GetAccountResponse {
  SendQuota?: SendQuota;
  SendingEnabled?: boolean;
  DedicatedIpAutoWarmupEnabled?: boolean;
  EnforcementStatus?: string;
  ProductionAccessEnabled?: boolean;
}
export interface GetBlacklistReportsRequest {
  BlacklistItemNames: Array<string>;
}
export interface GetBlacklistReportsResponse {
  BlacklistReport: Record<string, Array<BlacklistEntry>>;
}
export interface GetConfigurationSetEventDestinationsRequest {
  ConfigurationSetName: string;
}
export interface GetConfigurationSetEventDestinationsResponse {
  EventDestinations?: Array<EventDestination>;
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
  Tags?: Array<Tag>;
}
export interface GetDedicatedIpRequest {
  Ip: string;
}
export interface GetDedicatedIpResponse {
  DedicatedIp?: DedicatedIp;
}
export interface GetDedicatedIpsRequest {
  PoolName?: string;
  NextToken?: string;
  PageSize?: number;
}
export interface GetDedicatedIpsResponse {
  DedicatedIps?: Array<DedicatedIp>;
  NextToken?: string;
}
export interface GetDeliverabilityDashboardOptionsRequest {
}
export interface GetDeliverabilityDashboardOptionsResponse {
  DashboardEnabled: boolean;
  SubscriptionExpiryDate?: Date | string;
  AccountStatus?: DeliverabilityDashboardAccountStatus;
  ActiveSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
  PendingExpirationSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
}
export interface GetDeliverabilityTestReportRequest {
  ReportId: string;
}
export interface GetDeliverabilityTestReportResponse {
  DeliverabilityTestReport: DeliverabilityTestReport;
  OverallPlacement: PlacementStatistics;
  IspPlacements: Array<IspPlacement>;
  Message?: string;
  Tags?: Array<Tag>;
}
export interface GetDomainDeliverabilityCampaignRequest {
  CampaignId: string;
}
export interface GetDomainDeliverabilityCampaignResponse {
  DomainDeliverabilityCampaign: DomainDeliverabilityCampaign;
}
export interface GetDomainStatisticsReportRequest {
  Domain: string;
  StartDate: Date | string;
  EndDate: Date | string;
}
export interface GetDomainStatisticsReportResponse {
  OverallVolume: OverallVolume;
  DailyVolumes: Array<DailyVolume>;
}
export interface GetEmailIdentityRequest {
  EmailIdentity: string;
}
export interface GetEmailIdentityResponse {
  IdentityType?: IdentityType;
  FeedbackForwardingStatus?: boolean;
  VerifiedForSendingStatus?: boolean;
  DkimAttributes?: DkimAttributes;
  MailFromAttributes?: MailFromAttributes;
  Tags?: Array<Tag>;
}
export type Identity = string;

export interface IdentityInfo {
  IdentityType?: IdentityType;
  IdentityName?: string;
  SendingEnabled?: boolean;
}
export type IdentityInfoList = Array<IdentityInfo>;
export type IdentityType = "EMAIL_ADDRESS" | "DOMAIN" | "MANAGED_DOMAIN";
export type ImageUrl = string;

export interface InboxPlacementTrackingOption {
  Global?: boolean;
  TrackedIsps?: Array<string>;
}
export type Ip = string;

export type IpList = Array<string>;
export type IspName = string;

export type IspNameList = Array<string>;
export interface IspPlacement {
  IspName?: string;
  PlacementStatistics?: PlacementStatistics;
}
export type IspPlacements = Array<IspPlacement>;
export interface KinesisFirehoseDestination {
  IamRoleArn: string;
  DeliveryStreamArn: string;
}
export type LastFreshStart = Date | string;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListConfigurationSetsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListConfigurationSetsResponse {
  ConfigurationSets?: Array<string>;
  NextToken?: string;
}
export interface ListDedicatedIpPoolsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListDedicatedIpPoolsResponse {
  DedicatedIpPools?: Array<string>;
  NextToken?: string;
}
export interface ListDeliverabilityTestReportsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListDeliverabilityTestReportsResponse {
  DeliverabilityTestReports: Array<DeliverabilityTestReport>;
  NextToken?: string;
}
export interface ListDomainDeliverabilityCampaignsRequest {
  StartDate: Date | string;
  EndDate: Date | string;
  SubscribedDomain: string;
  NextToken?: string;
  PageSize?: number;
}
export interface ListDomainDeliverabilityCampaignsResponse {
  DomainDeliverabilityCampaigns: Array<DomainDeliverabilityCampaign>;
  NextToken?: string;
}
export interface ListEmailIdentitiesRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListEmailIdentitiesResponse {
  EmailIdentities?: Array<IdentityInfo>;
  NextToken?: string;
}
export type ListOfDedicatedIpPools = Array<string>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags: Array<Tag>;
}
export interface MailFromAttributes {
  MailFromDomain: string;
  MailFromDomainStatus: MailFromDomainStatus;
  BehaviorOnMxFailure: BehaviorOnMxFailure;
}
export type MailFromDomainName = string;

export declare class MailFromDomainNotVerifiedException extends Data.TaggedError(
  "MailFromDomainNotVerifiedException",
)<{
  readonly message?: string;
}> {}
export type MailFromDomainStatus = "PENDING" | "SUCCESS" | "FAILED" | "TEMPORARY_FAILURE";
export type Max24HourSend = number;

export type MaxItems = number;

export type MaxSendRate = number;

export interface Message {
  Subject: Content;
  Body: Body;
}
export type MessageContent = string;

export type MessageData = string;

export declare class MessageRejected extends Data.TaggedError(
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

export type NextToken = string;

export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type OutboundMessageId = string;

export interface OverallVolume {
  VolumeStatistics?: VolumeStatistics;
  ReadRatePercent?: number;
  DomainIspPlacements?: Array<DomainIspPlacement>;
}
export type Percentage = number;

export type Percentage100Wrapper = number;

export interface PinpointDestination {
  ApplicationArn?: string;
}
export interface PlacementStatistics {
  InboxPercentage?: number;
  SpamPercentage?: number;
  MissingPercentage?: number;
  SpfPercentage?: number;
  DkimPercentage?: number;
}
export type PoolName = string;

export interface PutAccountDedicatedIpWarmupAttributesRequest {
  AutoWarmupEnabled?: boolean;
}
export interface PutAccountDedicatedIpWarmupAttributesResponse {
}
export interface PutAccountSendingAttributesRequest {
  SendingEnabled?: boolean;
}
export interface PutAccountSendingAttributesResponse {
}
export interface PutConfigurationSetDeliveryOptionsRequest {
  ConfigurationSetName: string;
  TlsPolicy?: TlsPolicy;
  SendingPoolName?: string;
}
export interface PutConfigurationSetDeliveryOptionsResponse {
}
export interface PutConfigurationSetReputationOptionsRequest {
  ConfigurationSetName: string;
  ReputationMetricsEnabled?: boolean;
}
export interface PutConfigurationSetReputationOptionsResponse {
}
export interface PutConfigurationSetSendingOptionsRequest {
  ConfigurationSetName: string;
  SendingEnabled?: boolean;
}
export interface PutConfigurationSetSendingOptionsResponse {
}
export interface PutConfigurationSetTrackingOptionsRequest {
  ConfigurationSetName: string;
  CustomRedirectDomain?: string;
}
export interface PutConfigurationSetTrackingOptionsResponse {
}
export interface PutDedicatedIpInPoolRequest {
  Ip: string;
  DestinationPoolName: string;
}
export interface PutDedicatedIpInPoolResponse {
}
export interface PutDedicatedIpWarmupAttributesRequest {
  Ip: string;
  WarmupPercentage: number;
}
export interface PutDedicatedIpWarmupAttributesResponse {
}
export interface PutDeliverabilityDashboardOptionRequest {
  DashboardEnabled: boolean;
  SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
}
export interface PutDeliverabilityDashboardOptionResponse {
}
export interface PutEmailIdentityDkimAttributesRequest {
  EmailIdentity: string;
  SigningEnabled?: boolean;
}
export interface PutEmailIdentityDkimAttributesResponse {
}
export interface PutEmailIdentityFeedbackAttributesRequest {
  EmailIdentity: string;
  EmailForwardingEnabled?: boolean;
}
export interface PutEmailIdentityFeedbackAttributesResponse {
}
export interface PutEmailIdentityMailFromAttributesRequest {
  EmailIdentity: string;
  MailFromDomain?: string;
  BehaviorOnMxFailure?: BehaviorOnMxFailure;
}
export interface PutEmailIdentityMailFromAttributesResponse {
}
export interface RawMessage {
  Data: Uint8Array | string;
}
export type RawMessageData = Uint8Array | string;

export type RblName = string;

export type ReportId = string;

export type ReportName = string;

export interface ReputationOptions {
  ReputationMetricsEnabled?: boolean;
  LastFreshStart?: Date | string;
}
export interface SendEmailRequest {
  FromEmailAddress?: string;
  Destination: Destination;
  ReplyToAddresses?: Array<string>;
  FeedbackForwardingEmailAddress?: string;
  Content: EmailContent;
  EmailTags?: Array<MessageTag>;
  ConfigurationSetName?: string;
}
export interface SendEmailResponse {
  MessageId?: string;
}
export interface SendingOptions {
  SendingEnabled?: boolean;
}
export declare class SendingPausedException extends Data.TaggedError(
  "SendingPausedException",
)<{
  readonly message?: string;
}> {}
export type SendingPoolName = string;

export interface SendQuota {
  Max24HourSend?: number;
  MaxSendRate?: number;
  SentLast24Hours?: number;
}
export type SentLast24Hours = number;

export interface SnsDestination {
  TopicArn: string;
}
export type Subject = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface Template {
  TemplateArn?: string;
  TemplateData?: string;
}
export type TemplateArn = string;

export type TemplateData = string;

export type Timestamp = Date | string;

export type TlsPolicy = "REQUIRE" | "OPTIONAL";
export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
}> {}
export interface TrackingOptions {
  CustomRedirectDomain: string;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  EventDestination: EventDestinationDefinition;
}
export interface UpdateConfigurationSetEventDestinationResponse {
}
export type Volume = number;

export interface VolumeStatistics {
  InboxRawCount?: number;
  SpamRawCount?: number;
  ProjectedInbox?: number;
  ProjectedSpam?: number;
}
export type WarmupStatus = "IN_PROGRESS" | "DONE";
export declare namespace CreateConfigurationSet {
  export type Input = CreateConfigurationSetRequest;
  export type Output = CreateConfigurationSetResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | ConcurrentModificationException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateConfigurationSetEventDestination {
  export type Input = CreateConfigurationSetEventDestinationRequest;
  export type Output = CreateConfigurationSetEventDestinationResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateDedicatedIpPool {
  export type Input = CreateDedicatedIpPoolRequest;
  export type Output = CreateDedicatedIpPoolResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | ConcurrentModificationException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateDeliverabilityTestReport {
  export type Input = CreateDeliverabilityTestReportRequest;
  export type Output = CreateDeliverabilityTestReportResponse;
  export type Error =
    | AccountSuspendedException
    | BadRequestException
    | ConcurrentModificationException
    | LimitExceededException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | NotFoundException
    | SendingPausedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateEmailIdentity {
  export type Input = CreateEmailIdentityRequest;
  export type Output = CreateEmailIdentityResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationSet {
  export type Input = DeleteConfigurationSetRequest;
  export type Output = DeleteConfigurationSetResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationSetEventDestination {
  export type Input = DeleteConfigurationSetEventDestinationRequest;
  export type Output = DeleteConfigurationSetEventDestinationResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteDedicatedIpPool {
  export type Input = DeleteDedicatedIpPoolRequest;
  export type Output = DeleteDedicatedIpPoolResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEmailIdentity {
  export type Input = DeleteEmailIdentityRequest;
  export type Output = DeleteEmailIdentityResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAccount {
  export type Input = GetAccountRequest;
  export type Output = GetAccountResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetBlacklistReports {
  export type Input = GetBlacklistReportsRequest;
  export type Output = GetBlacklistReportsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetConfigurationSet {
  export type Input = GetConfigurationSetRequest;
  export type Output = GetConfigurationSetResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetConfigurationSetEventDestinations {
  export type Input = GetConfigurationSetEventDestinationsRequest;
  export type Output = GetConfigurationSetEventDestinationsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDedicatedIp {
  export type Input = GetDedicatedIpRequest;
  export type Output = GetDedicatedIpResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDedicatedIps {
  export type Input = GetDedicatedIpsRequest;
  export type Output = GetDedicatedIpsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDeliverabilityDashboardOptions {
  export type Input = GetDeliverabilityDashboardOptionsRequest;
  export type Output = GetDeliverabilityDashboardOptionsResponse;
  export type Error =
    | BadRequestException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDeliverabilityTestReport {
  export type Input = GetDeliverabilityTestReportRequest;
  export type Output = GetDeliverabilityTestReportResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDomainDeliverabilityCampaign {
  export type Input = GetDomainDeliverabilityCampaignRequest;
  export type Output = GetDomainDeliverabilityCampaignResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDomainStatisticsReport {
  export type Input = GetDomainStatisticsReportRequest;
  export type Output = GetDomainStatisticsReportResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetEmailIdentity {
  export type Input = GetEmailIdentityRequest;
  export type Output = GetEmailIdentityResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListConfigurationSets {
  export type Input = ListConfigurationSetsRequest;
  export type Output = ListConfigurationSetsResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListDedicatedIpPools {
  export type Input = ListDedicatedIpPoolsRequest;
  export type Output = ListDedicatedIpPoolsResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListDeliverabilityTestReports {
  export type Input = ListDeliverabilityTestReportsRequest;
  export type Output = ListDeliverabilityTestReportsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListDomainDeliverabilityCampaigns {
  export type Input = ListDomainDeliverabilityCampaignsRequest;
  export type Output = ListDomainDeliverabilityCampaignsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEmailIdentities {
  export type Input = ListEmailIdentitiesRequest;
  export type Output = ListEmailIdentitiesResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutAccountDedicatedIpWarmupAttributes {
  export type Input = PutAccountDedicatedIpWarmupAttributesRequest;
  export type Output = PutAccountDedicatedIpWarmupAttributesResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutAccountSendingAttributes {
  export type Input = PutAccountSendingAttributesRequest;
  export type Output = PutAccountSendingAttributesResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutConfigurationSetDeliveryOptions {
  export type Input = PutConfigurationSetDeliveryOptionsRequest;
  export type Output = PutConfigurationSetDeliveryOptionsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutConfigurationSetReputationOptions {
  export type Input = PutConfigurationSetReputationOptionsRequest;
  export type Output = PutConfigurationSetReputationOptionsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutConfigurationSetSendingOptions {
  export type Input = PutConfigurationSetSendingOptionsRequest;
  export type Output = PutConfigurationSetSendingOptionsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutConfigurationSetTrackingOptions {
  export type Input = PutConfigurationSetTrackingOptionsRequest;
  export type Output = PutConfigurationSetTrackingOptionsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutDedicatedIpInPool {
  export type Input = PutDedicatedIpInPoolRequest;
  export type Output = PutDedicatedIpInPoolResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutDedicatedIpWarmupAttributes {
  export type Input = PutDedicatedIpWarmupAttributesRequest;
  export type Output = PutDedicatedIpWarmupAttributesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutDeliverabilityDashboardOption {
  export type Input = PutDeliverabilityDashboardOptionRequest;
  export type Output = PutDeliverabilityDashboardOptionResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutEmailIdentityDkimAttributes {
  export type Input = PutEmailIdentityDkimAttributesRequest;
  export type Output = PutEmailIdentityDkimAttributesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutEmailIdentityFeedbackAttributes {
  export type Input = PutEmailIdentityFeedbackAttributesRequest;
  export type Output = PutEmailIdentityFeedbackAttributesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutEmailIdentityMailFromAttributes {
  export type Input = PutEmailIdentityMailFromAttributesRequest;
  export type Output = PutEmailIdentityMailFromAttributesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SendEmail {
  export type Input = SendEmailRequest;
  export type Output = SendEmailResponse;
  export type Error =
    | AccountSuspendedException
    | BadRequestException
    | LimitExceededException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | NotFoundException
    | SendingPausedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateConfigurationSetEventDestination {
  export type Input = UpdateConfigurationSetEventDestinationRequest;
  export type Output = UpdateConfigurationSetEventDestinationResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

