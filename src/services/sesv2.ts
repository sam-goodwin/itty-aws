import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface SimpleEmailService_v2 {
  batchGetMetricData(
    input: BatchGetMetricDataRequest,
  ): Effect.Effect<
    BatchGetMetricDataResponse,
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  cancelExportJob(
    input: CancelExportJobRequest,
  ): Effect.Effect<
    CancelExportJobResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createConfigurationSet(
    input: CreateConfigurationSetRequest,
  ): Effect.Effect<
    CreateConfigurationSetResponse,
    | AlreadyExistsException
    | BadRequestException
    | ConcurrentModificationException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createConfigurationSetEventDestination(
    input: CreateConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    CreateConfigurationSetEventDestinationResponse,
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createContact(
    input: CreateContactRequest,
  ): Effect.Effect<
    CreateContactResponse,
    | AlreadyExistsException
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createContactList(
    input: CreateContactListRequest,
  ): Effect.Effect<
    CreateContactListResponse,
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createCustomVerificationEmailTemplate(
    input: CreateCustomVerificationEmailTemplateRequest,
  ): Effect.Effect<
    CreateCustomVerificationEmailTemplateResponse,
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createDedicatedIpPool(
    input: CreateDedicatedIpPoolRequest,
  ): Effect.Effect<
    CreateDedicatedIpPoolResponse,
    | AlreadyExistsException
    | BadRequestException
    | ConcurrentModificationException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createDeliverabilityTestReport(
    input: CreateDeliverabilityTestReportRequest,
  ): Effect.Effect<
    CreateDeliverabilityTestReportResponse,
    | AccountSuspendedException
    | BadRequestException
    | ConcurrentModificationException
    | LimitExceededException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | NotFoundException
    | SendingPausedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createEmailIdentity(
    input: CreateEmailIdentityRequest,
  ): Effect.Effect<
    CreateEmailIdentityResponse,
    | AlreadyExistsException
    | BadRequestException
    | ConcurrentModificationException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createEmailIdentityPolicy(
    input: CreateEmailIdentityPolicyRequest,
  ): Effect.Effect<
    CreateEmailIdentityPolicyResponse,
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createEmailTemplate(
    input: CreateEmailTemplateRequest,
  ): Effect.Effect<
    CreateEmailTemplateResponse,
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createExportJob(
    input: CreateExportJobRequest,
  ): Effect.Effect<
    CreateExportJobResponse,
    | BadRequestException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createImportJob(
    input: CreateImportJobRequest,
  ): Effect.Effect<
    CreateImportJobResponse,
    | BadRequestException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createMultiRegionEndpoint(
    input: CreateMultiRegionEndpointRequest,
  ): Effect.Effect<
    CreateMultiRegionEndpointResponse,
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteConfigurationSet(
    input: DeleteConfigurationSetRequest,
  ): Effect.Effect<
    DeleteConfigurationSetResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteConfigurationSetEventDestination(
    input: DeleteConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    DeleteConfigurationSetEventDestinationResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteContact(
    input: DeleteContactRequest,
  ): Effect.Effect<
    DeleteContactResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteContactList(
    input: DeleteContactListRequest,
  ): Effect.Effect<
    DeleteContactListResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteCustomVerificationEmailTemplate(
    input: DeleteCustomVerificationEmailTemplateRequest,
  ): Effect.Effect<
    DeleteCustomVerificationEmailTemplateResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteDedicatedIpPool(
    input: DeleteDedicatedIpPoolRequest,
  ): Effect.Effect<
    DeleteDedicatedIpPoolResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteEmailIdentity(
    input: DeleteEmailIdentityRequest,
  ): Effect.Effect<
    DeleteEmailIdentityResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteEmailIdentityPolicy(
    input: DeleteEmailIdentityPolicyRequest,
  ): Effect.Effect<
    DeleteEmailIdentityPolicyResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteEmailTemplate(
    input: DeleteEmailTemplateRequest,
  ): Effect.Effect<
    DeleteEmailTemplateResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteMultiRegionEndpoint(
    input: DeleteMultiRegionEndpointRequest,
  ): Effect.Effect<
    DeleteMultiRegionEndpointResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteSuppressedDestination(
    input: DeleteSuppressedDestinationRequest,
  ): Effect.Effect<
    DeleteSuppressedDestinationResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
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
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getConfigurationSet(
    input: GetConfigurationSetRequest,
  ): Effect.Effect<
    GetConfigurationSetResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getConfigurationSetEventDestinations(
    input: GetConfigurationSetEventDestinationsRequest,
  ): Effect.Effect<
    GetConfigurationSetEventDestinationsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getContact(
    input: GetContactRequest,
  ): Effect.Effect<
    GetContactResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getContactList(
    input: GetContactListRequest,
  ): Effect.Effect<
    GetContactListResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCustomVerificationEmailTemplate(
    input: GetCustomVerificationEmailTemplateRequest,
  ): Effect.Effect<
    GetCustomVerificationEmailTemplateResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDedicatedIp(
    input: GetDedicatedIpRequest,
  ): Effect.Effect<
    GetDedicatedIpResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDedicatedIpPool(
    input: GetDedicatedIpPoolRequest,
  ): Effect.Effect<
    GetDedicatedIpPoolResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDedicatedIps(
    input: GetDedicatedIpsRequest,
  ): Effect.Effect<
    GetDedicatedIpsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDeliverabilityDashboardOptions(
    input: GetDeliverabilityDashboardOptionsRequest,
  ): Effect.Effect<
    GetDeliverabilityDashboardOptionsResponse,
    | BadRequestException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDeliverabilityTestReport(
    input: GetDeliverabilityTestReportRequest,
  ): Effect.Effect<
    GetDeliverabilityTestReportResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDomainDeliverabilityCampaign(
    input: GetDomainDeliverabilityCampaignRequest,
  ): Effect.Effect<
    GetDomainDeliverabilityCampaignResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDomainStatisticsReport(
    input: GetDomainStatisticsReportRequest,
  ): Effect.Effect<
    GetDomainStatisticsReportResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getEmailIdentity(
    input: GetEmailIdentityRequest,
  ): Effect.Effect<
    GetEmailIdentityResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getEmailIdentityPolicies(
    input: GetEmailIdentityPoliciesRequest,
  ): Effect.Effect<
    GetEmailIdentityPoliciesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getEmailTemplate(
    input: GetEmailTemplateRequest,
  ): Effect.Effect<
    GetEmailTemplateResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getExportJob(
    input: GetExportJobRequest,
  ): Effect.Effect<
    GetExportJobResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getImportJob(
    input: GetImportJobRequest,
  ): Effect.Effect<
    GetImportJobResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getMessageInsights(
    input: GetMessageInsightsRequest,
  ): Effect.Effect<
    GetMessageInsightsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getMultiRegionEndpoint(
    input: GetMultiRegionEndpointRequest,
  ): Effect.Effect<
    GetMultiRegionEndpointResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSuppressedDestination(
    input: GetSuppressedDestinationRequest,
  ): Effect.Effect<
    GetSuppressedDestinationResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listConfigurationSets(
    input: ListConfigurationSetsRequest,
  ): Effect.Effect<
    ListConfigurationSetsResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listContactLists(
    input: ListContactListsRequest,
  ): Effect.Effect<
    ListContactListsResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listContacts(
    input: ListContactsRequest,
  ): Effect.Effect<
    ListContactsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listCustomVerificationEmailTemplates(
    input: ListCustomVerificationEmailTemplatesRequest,
  ): Effect.Effect<
    ListCustomVerificationEmailTemplatesResponse,
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
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listDomainDeliverabilityCampaigns(
    input: ListDomainDeliverabilityCampaignsRequest,
  ): Effect.Effect<
    ListDomainDeliverabilityCampaignsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listEmailIdentities(
    input: ListEmailIdentitiesRequest,
  ): Effect.Effect<
    ListEmailIdentitiesResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listEmailTemplates(
    input: ListEmailTemplatesRequest,
  ): Effect.Effect<
    ListEmailTemplatesResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listExportJobs(
    input: ListExportJobsRequest,
  ): Effect.Effect<
    ListExportJobsResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listImportJobs(
    input: ListImportJobsRequest,
  ): Effect.Effect<
    ListImportJobsResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listMultiRegionEndpoints(
    input: ListMultiRegionEndpointsRequest,
  ): Effect.Effect<
    ListMultiRegionEndpointsResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  listRecommendations(
    input: ListRecommendationsRequest,
  ): Effect.Effect<
    ListRecommendationsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listSuppressedDestinations(
    input: ListSuppressedDestinationsRequest,
  ): Effect.Effect<
    ListSuppressedDestinationsResponse,
    | BadRequestException
    | InvalidNextTokenException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putAccountDedicatedIpWarmupAttributes(
    input: PutAccountDedicatedIpWarmupAttributesRequest,
  ): Effect.Effect<
    PutAccountDedicatedIpWarmupAttributesResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  putAccountDetails(
    input: PutAccountDetailsRequest,
  ): Effect.Effect<
    PutAccountDetailsResponse,
    | BadRequestException
    | ConflictException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putAccountSendingAttributes(
    input: PutAccountSendingAttributesRequest,
  ): Effect.Effect<
    PutAccountSendingAttributesResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  putAccountSuppressionAttributes(
    input: PutAccountSuppressionAttributesRequest,
  ): Effect.Effect<
    PutAccountSuppressionAttributesResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  putAccountVdmAttributes(
    input: PutAccountVdmAttributesRequest,
  ): Effect.Effect<
    PutAccountVdmAttributesResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  putConfigurationSetArchivingOptions(
    input: PutConfigurationSetArchivingOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetArchivingOptionsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putConfigurationSetDeliveryOptions(
    input: PutConfigurationSetDeliveryOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetDeliveryOptionsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putConfigurationSetReputationOptions(
    input: PutConfigurationSetReputationOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetReputationOptionsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putConfigurationSetSendingOptions(
    input: PutConfigurationSetSendingOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetSendingOptionsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putConfigurationSetSuppressionOptions(
    input: PutConfigurationSetSuppressionOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetSuppressionOptionsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putConfigurationSetTrackingOptions(
    input: PutConfigurationSetTrackingOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetTrackingOptionsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putConfigurationSetVdmOptions(
    input: PutConfigurationSetVdmOptionsRequest,
  ): Effect.Effect<
    PutConfigurationSetVdmOptionsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putDedicatedIpInPool(
    input: PutDedicatedIpInPoolRequest,
  ): Effect.Effect<
    PutDedicatedIpInPoolResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putDedicatedIpPoolScalingAttributes(
    input: PutDedicatedIpPoolScalingAttributesRequest,
  ): Effect.Effect<
    PutDedicatedIpPoolScalingAttributesResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putDedicatedIpWarmupAttributes(
    input: PutDedicatedIpWarmupAttributesRequest,
  ): Effect.Effect<
    PutDedicatedIpWarmupAttributesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putDeliverabilityDashboardOption(
    input: PutDeliverabilityDashboardOptionRequest,
  ): Effect.Effect<
    PutDeliverabilityDashboardOptionResponse,
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putEmailIdentityConfigurationSetAttributes(
    input: PutEmailIdentityConfigurationSetAttributesRequest,
  ): Effect.Effect<
    PutEmailIdentityConfigurationSetAttributesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putEmailIdentityDkimAttributes(
    input: PutEmailIdentityDkimAttributesRequest,
  ): Effect.Effect<
    PutEmailIdentityDkimAttributesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putEmailIdentityDkimSigningAttributes(
    input: PutEmailIdentityDkimSigningAttributesRequest,
  ): Effect.Effect<
    PutEmailIdentityDkimSigningAttributesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putEmailIdentityFeedbackAttributes(
    input: PutEmailIdentityFeedbackAttributesRequest,
  ): Effect.Effect<
    PutEmailIdentityFeedbackAttributesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putEmailIdentityMailFromAttributes(
    input: PutEmailIdentityMailFromAttributesRequest,
  ): Effect.Effect<
    PutEmailIdentityMailFromAttributesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putSuppressedDestination(
    input: PutSuppressedDestinationRequest,
  ): Effect.Effect<
    PutSuppressedDestinationResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  sendBulkEmail(
    input: SendBulkEmailRequest,
  ): Effect.Effect<
    SendBulkEmailResponse,
    | AccountSuspendedException
    | BadRequestException
    | LimitExceededException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | NotFoundException
    | SendingPausedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  sendCustomVerificationEmail(
    input: SendCustomVerificationEmailRequest,
  ): Effect.Effect<
    SendCustomVerificationEmailResponse,
    | BadRequestException
    | LimitExceededException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | NotFoundException
    | SendingPausedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  sendEmail(
    input: SendEmailRequest,
  ): Effect.Effect<
    SendEmailResponse,
    | AccountSuspendedException
    | BadRequestException
    | LimitExceededException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | NotFoundException
    | SendingPausedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  testRenderEmailTemplate(
    input: TestRenderEmailTemplateRequest,
  ): Effect.Effect<
    TestRenderEmailTemplateResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateConfigurationSetEventDestination(
    input: UpdateConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    UpdateConfigurationSetEventDestinationResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateContact(
    input: UpdateContactRequest,
  ): Effect.Effect<
    UpdateContactResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateContactList(
    input: UpdateContactListRequest,
  ): Effect.Effect<
    UpdateContactListResponse,
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateCustomVerificationEmailTemplate(
    input: UpdateCustomVerificationEmailTemplateRequest,
  ): Effect.Effect<
    UpdateCustomVerificationEmailTemplateResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateEmailIdentityPolicy(
    input: UpdateEmailIdentityPolicyRequest,
  ): Effect.Effect<
    UpdateEmailIdentityPolicyResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateEmailTemplate(
    input: UpdateEmailTemplateRequest,
  ): Effect.Effect<
    UpdateEmailTemplateResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type Sesv2 = SimpleEmailService_v2;

export interface AccountDetails {
  MailType?: MailType;
  WebsiteURL?: string;
  ContactLanguage?: ContactLanguage;
  UseCaseDescription?: string;
  AdditionalContactEmailAddresses?: Array<string>;
  ReviewDetails?: ReviewDetails;
}
export declare class AccountSuspendedException extends Data.TaggedError(
  "AccountSuspendedException",
)<{
  readonly message?: string;
}> {}
export type AdditionalContactEmailAddress = string;

export type AdditionalContactEmailAddresses = Array<string>;
export type AdminEmail = string;

export declare class AlreadyExistsException extends Data.TaggedError(
  "AlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type AmazonResourceName = string;

export type ArchiveArn = string;

export interface ArchivingOptions {
  ArchiveArn?: string;
}
export interface Attachment {
  RawContent: Uint8Array | string;
  ContentDisposition?: AttachmentContentDisposition;
  FileName: string;
  ContentDescription?: string;
  ContentId?: string;
  ContentTransferEncoding?: AttachmentContentTransferEncoding;
  ContentType?: string;
}
export type AttachmentContentDescription = string;

export type AttachmentContentDisposition = "ATTACHMENT" | "INLINE";
export type AttachmentContentId = string;

export type AttachmentContentTransferEncoding =
  | "BASE64"
  | "QUOTED_PRINTABLE"
  | "SEVEN_BIT";
export type AttachmentContentType = string;

export type AttachmentFileName = string;

export type AttachmentList = Array<Attachment>;
export type AttributesData = string;

export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export type BatchGetMetricDataQueries = Array<BatchGetMetricDataQuery>;
export interface BatchGetMetricDataQuery {
  Id: string;
  Namespace: MetricNamespace;
  Metric: Metric;
  Dimensions?: Record<MetricDimensionName, string>;
  StartDate: Date | string;
  EndDate: Date | string;
}
export interface BatchGetMetricDataRequest {
  Queries: Array<BatchGetMetricDataQuery>;
}
export interface BatchGetMetricDataResponse {
  Results?: Array<MetricDataResult>;
  Errors?: Array<MetricDataError>;
}
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
export interface Bounce {
  BounceType?: BounceType;
  BounceSubType?: string;
  DiagnosticCode?: string;
}
export type BounceSubType = string;

export type BounceType = "UNDETERMINED" | "TRANSIENT" | "PERMANENT";
export interface BulkEmailContent {
  Template?: Template;
}
export interface BulkEmailEntry {
  Destination: Destination;
  ReplacementTags?: Array<MessageTag>;
  ReplacementEmailContent?: ReplacementEmailContent;
  ReplacementHeaders?: Array<MessageHeader>;
}
export type BulkEmailEntryList = Array<BulkEmailEntry>;
export interface BulkEmailEntryResult {
  Status?: BulkEmailStatus;
  Error?: string;
  MessageId?: string;
}
export type BulkEmailEntryResultList = Array<BulkEmailEntryResult>;
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
  | "FAILED";
export type CampaignId = string;

export interface CancelExportJobRequest {
  JobId: string;
}
export interface CancelExportJobResponse {}
export type CaseId = string;

export type Charset = string;

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
export interface Complaint {
  ComplaintSubType?: string;
  ComplaintFeedbackType?: string;
}
export type ComplaintFeedbackType = string;

export type ComplaintSubType = string;

export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export type ConfigurationSetName = string;

export type ConfigurationSetNameList = Array<string>;
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface Contact {
  EmailAddress?: string;
  TopicPreferences?: Array<TopicPreference>;
  TopicDefaultPreferences?: Array<TopicPreference>;
  UnsubscribeAll?: boolean;
  LastUpdatedTimestamp?: Date | string;
}
export type ContactLanguage = "EN" | "JA";
export interface ContactList {
  ContactListName?: string;
  LastUpdatedTimestamp?: Date | string;
}
export interface ContactListDestination {
  ContactListName: string;
  ContactListImportAction: ContactListImportAction;
}
export type ContactListImportAction = "DELETE" | "PUT";
export type ContactListName = string;

export interface Content {
  Data: string;
  Charset?: string;
}
export type Counter = number;

export interface CreateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  EventDestination: EventDestinationDefinition;
}
export interface CreateConfigurationSetEventDestinationResponse {}
export interface CreateConfigurationSetRequest {
  ConfigurationSetName: string;
  TrackingOptions?: TrackingOptions;
  DeliveryOptions?: DeliveryOptions;
  ReputationOptions?: ReputationOptions;
  SendingOptions?: SendingOptions;
  Tags?: Array<Tag>;
  SuppressionOptions?: SuppressionOptions;
  VdmOptions?: VdmOptions;
  ArchivingOptions?: ArchivingOptions;
}
export interface CreateConfigurationSetResponse {}
export interface CreateContactListRequest {
  ContactListName: string;
  Topics?: Array<Topic>;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateContactListResponse {}
export interface CreateContactRequest {
  ContactListName: string;
  EmailAddress: string;
  TopicPreferences?: Array<TopicPreference>;
  UnsubscribeAll?: boolean;
  AttributesData?: string;
}
export interface CreateContactResponse {}
export interface CreateCustomVerificationEmailTemplateRequest {
  TemplateName: string;
  FromEmailAddress: string;
  TemplateSubject: string;
  TemplateContent: string;
  SuccessRedirectionURL: string;
  FailureRedirectionURL: string;
}
export interface CreateCustomVerificationEmailTemplateResponse {}
export interface CreateDedicatedIpPoolRequest {
  PoolName: string;
  Tags?: Array<Tag>;
  ScalingMode?: ScalingMode;
}
export interface CreateDedicatedIpPoolResponse {}
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
export interface CreateEmailIdentityPolicyRequest {
  EmailIdentity: string;
  PolicyName: string;
  Policy: string;
}
export interface CreateEmailIdentityPolicyResponse {}
export interface CreateEmailIdentityRequest {
  EmailIdentity: string;
  Tags?: Array<Tag>;
  DkimSigningAttributes?: DkimSigningAttributes;
  ConfigurationSetName?: string;
}
export interface CreateEmailIdentityResponse {
  IdentityType?: IdentityType;
  VerifiedForSendingStatus?: boolean;
  DkimAttributes?: DkimAttributes;
}
export interface CreateEmailTemplateRequest {
  TemplateName: string;
  TemplateContent: EmailTemplateContent;
}
export interface CreateEmailTemplateResponse {}
export interface CreateExportJobRequest {
  ExportDataSource: ExportDataSource;
  ExportDestination: ExportDestination;
}
export interface CreateExportJobResponse {
  JobId?: string;
}
export interface CreateImportJobRequest {
  ImportDestination: ImportDestination;
  ImportDataSource: ImportDataSource;
}
export interface CreateImportJobResponse {
  JobId?: string;
}
export interface CreateMultiRegionEndpointRequest {
  EndpointName: string;
  Details: Details;
  Tags?: Array<Tag>;
}
export interface CreateMultiRegionEndpointResponse {
  Status?: Status;
  EndpointId?: string;
}
export type CustomRedirectDomain = string;

export interface CustomVerificationEmailTemplateMetadata {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
}
export type CustomVerificationEmailTemplatesList =
  Array<CustomVerificationEmailTemplateMetadata>;
export interface DailyVolume {
  StartDate?: Date | string;
  VolumeStatistics?: VolumeStatistics;
  DomainIspPlacements?: Array<DomainIspPlacement>;
}
export type DailyVolumes = Array<DailyVolume>;
export interface DashboardAttributes {
  EngagementMetrics?: FeatureStatus;
}
export interface DashboardOptions {
  EngagementMetrics?: FeatureStatus;
}
export type DataFormat = "CSV" | "JSON";
export interface DedicatedIp {
  Ip: string;
  WarmupStatus: WarmupStatus;
  WarmupPercentage: number;
  PoolName?: string;
}
export type DedicatedIpList = Array<DedicatedIp>;
export interface DedicatedIpPool {
  PoolName: string;
  ScalingMode: ScalingMode;
}
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
export interface DeleteContactListRequest {
  ContactListName: string;
}
export interface DeleteContactListResponse {}
export interface DeleteContactRequest {
  ContactListName: string;
  EmailAddress: string;
}
export interface DeleteContactResponse {}
export interface DeleteCustomVerificationEmailTemplateRequest {
  TemplateName: string;
}
export interface DeleteCustomVerificationEmailTemplateResponse {}
export interface DeleteDedicatedIpPoolRequest {
  PoolName: string;
}
export interface DeleteDedicatedIpPoolResponse {}
export interface DeleteEmailIdentityPolicyRequest {
  EmailIdentity: string;
  PolicyName: string;
}
export interface DeleteEmailIdentityPolicyResponse {}
export interface DeleteEmailIdentityRequest {
  EmailIdentity: string;
}
export interface DeleteEmailIdentityResponse {}
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
}
export interface DeleteSuppressedDestinationResponse {}
export type DeliverabilityDashboardAccountStatus =
  | "ACTIVE"
  | "PENDING_EXPIRATION"
  | "DISABLED";
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

export type DeliveryEventType =
  | "SEND"
  | "DELIVERY"
  | "TRANSIENT_BOUNCE"
  | "PERMANENT_BOUNCE"
  | "UNDETERMINED_BOUNCE"
  | "COMPLAINT";
export interface DeliveryOptions {
  TlsPolicy?: TlsPolicy;
  SendingPoolName?: string;
  MaxDeliverySeconds?: number;
}
export type Description = string;

export interface Destination {
  ToAddresses?: Array<string>;
  CcAddresses?: Array<string>;
  BccAddresses?: Array<string>;
}
export interface Details {
  RoutesDetails: Array<RouteDetails>;
}
export type DiagnosticCode = string;

export type DimensionName = string;

export type Dimensions = Record<MetricDimensionName, string>;
export type DimensionValueSource = "MESSAGE_TAG" | "EMAIL_HEADER" | "LINK_TAG";
export type DisplayName = string;

export interface DkimAttributes {
  SigningEnabled?: boolean;
  Status?: DkimStatus;
  Tokens?: Array<string>;
  SigningAttributesOrigin?: DkimSigningAttributesOrigin;
  NextSigningKeyLength?: DkimSigningKeyLength;
  CurrentSigningKeyLength?: DkimSigningKeyLength;
  LastKeyGenerationTimestamp?: Date | string;
}
export interface DkimSigningAttributes {
  DomainSigningSelector?: string;
  DomainSigningPrivateKey?: string;
  NextSigningKeyLength?: DkimSigningKeyLength;
  DomainSigningAttributesOrigin?: DkimSigningAttributesOrigin;
}
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
  | "AWS_SES_EU_CENTRAL_2";
export type DkimSigningKeyLength = "RSA_1024_BIT" | "RSA_2048_BIT";
export type DkimStatus =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "TEMPORARY_FAILURE"
  | "NOT_STARTED";
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
export type DomainDeliverabilityCampaignList =
  Array<DomainDeliverabilityCampaign>;
export interface DomainDeliverabilityTrackingOption {
  Domain?: string;
  SubscriptionStartDate?: Date | string;
  InboxPlacementTrackingOption?: InboxPlacementTrackingOption;
}
export type DomainDeliverabilityTrackingOptions =
  Array<DomainDeliverabilityTrackingOption>;
export interface DomainIspPlacement {
  IspName?: string;
  InboxRawCount?: number;
  SpamRawCount?: number;
  InboxPercentage?: number;
  SpamPercentage?: number;
}
export type DomainIspPlacements = Array<DomainIspPlacement>;
export type EmailAddress = string;

export type EmailAddressFilterList = Array<string>;
export type EmailAddressList = Array<string>;
export interface EmailContent {
  Simple?: Message;
  Raw?: RawMessage;
  Template?: Template;
}
export interface EmailInsights {
  Destination?: string;
  Isp?: string;
  Events?: Array<InsightsEvent>;
}
export type EmailInsightsList = Array<EmailInsights>;
export type EmailSubject = string;

export type EmailSubjectFilterList = Array<string>;
export interface EmailTemplateContent {
  Subject?: string;
  Text?: string;
  Html?: string;
}
export type EmailTemplateData = string;

export type EmailTemplateHtml = string;

export interface EmailTemplateMetadata {
  TemplateName?: string;
  CreatedTimestamp?: Date | string;
}
export type EmailTemplateMetadataList = Array<EmailTemplateMetadata>;
export type EmailTemplateName = string;

export type EmailTemplateSubject = string;

export type EmailTemplateText = string;

export type Enabled = boolean;

export type EnabledWrapper = boolean;

export type EndpointId = string;

export type EndpointName = string;

export type EngagementEventType = "OPEN" | "CLICK";
export type ErrorMessage = string;

export type Esp = string;

export type Esps = Array<string>;
export interface EventBridgeDestination {
  EventBusArn: string;
}
export interface EventDestination {
  Name: string;
  Enabled?: boolean;
  MatchingEventTypes: Array<EventType>;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  CloudWatchDestination?: CloudWatchDestination;
  SnsDestination?: SnsDestination;
  EventBridgeDestination?: EventBridgeDestination;
  PinpointDestination?: PinpointDestination;
}
export interface EventDestinationDefinition {
  Enabled?: boolean;
  MatchingEventTypes?: Array<EventType>;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  CloudWatchDestination?: CloudWatchDestination;
  SnsDestination?: SnsDestination;
  EventBridgeDestination?: EventBridgeDestination;
  PinpointDestination?: PinpointDestination;
}
export type EventDestinationName = string;

export type EventDestinations = Array<EventDestination>;
export interface EventDetails {
  Bounce?: Bounce;
  Complaint?: Complaint;
}
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
  | "SUBSCRIPTION";
export type EventTypes = Array<EventType>;
export interface ExportDataSource {
  MetricsDataSource?: MetricsDataSource;
  MessageInsightsDataSource?: MessageInsightsDataSource;
}
export interface ExportDestination {
  DataFormat: DataFormat;
  S3Url?: string;
}
export type ExportDimensions = Record<MetricDimensionName, Array<string>>;
export type ExportDimensionValue = Array<string>;
export type ExportedRecordsCount = number;

export interface ExportJobSummary {
  JobId?: string;
  ExportSourceType?: ExportSourceType;
  JobStatus?: JobStatus;
  CreatedTimestamp?: Date | string;
  CompletedTimestamp?: Date | string;
}
export type ExportJobSummaryList = Array<ExportJobSummary>;
export interface ExportMetric {
  Name?: Metric;
  Aggregation?: MetricAggregation;
}
export type ExportMetrics = Array<ExportMetric>;
export type ExportSourceType = "METRICS_DATA" | "MESSAGE_INSIGHTS";
export interface ExportStatistics {
  ProcessedRecordsCount?: number;
  ExportedRecordsCount?: number;
}
export type FailedRecordsCount = number;

export type FailedRecordsS3Url = string;

export interface FailureInfo {
  FailedRecordsS3Url?: string;
  ErrorMessage?: string;
}
export type FailureRedirectionURL = string;

export type FeatureStatus = "ENABLED" | "DISABLED";
export type FeedbackId = string;

export type GeneralEnforcementStatus = string;

export interface GetAccountRequest {}
export interface GetAccountResponse {
  DedicatedIpAutoWarmupEnabled?: boolean;
  EnforcementStatus?: string;
  ProductionAccessEnabled?: boolean;
  SendQuota?: SendQuota;
  SendingEnabled?: boolean;
  SuppressionAttributes?: SuppressionAttributes;
  Details?: AccountDetails;
  VdmAttributes?: VdmAttributes;
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
  SuppressionOptions?: SuppressionOptions;
  VdmOptions?: VdmOptions;
  ArchivingOptions?: ArchivingOptions;
}
export interface GetContactListRequest {
  ContactListName: string;
}
export interface GetContactListResponse {
  ContactListName?: string;
  Topics?: Array<Topic>;
  Description?: string;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  Tags?: Array<Tag>;
}
export interface GetContactRequest {
  ContactListName: string;
  EmailAddress: string;
}
export interface GetContactResponse {
  ContactListName?: string;
  EmailAddress?: string;
  TopicPreferences?: Array<TopicPreference>;
  TopicDefaultPreferences?: Array<TopicPreference>;
  UnsubscribeAll?: boolean;
  AttributesData?: string;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
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
export interface GetDedicatedIpPoolRequest {
  PoolName: string;
}
export interface GetDedicatedIpPoolResponse {
  DedicatedIpPool?: DedicatedIpPool;
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
export interface GetDeliverabilityDashboardOptionsRequest {}
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
export interface GetEmailIdentityPoliciesRequest {
  EmailIdentity: string;
}
export interface GetEmailIdentityPoliciesResponse {
  Policies?: Record<string, string>;
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
  Policies?: Record<string, string>;
  Tags?: Array<Tag>;
  ConfigurationSetName?: string;
  VerificationStatus?: VerificationStatus;
  VerificationInfo?: VerificationInfo;
}
export interface GetEmailTemplateRequest {
  TemplateName: string;
}
export interface GetEmailTemplateResponse {
  TemplateName: string;
  TemplateContent: EmailTemplateContent;
}
export interface GetExportJobRequest {
  JobId: string;
}
export interface GetExportJobResponse {
  JobId?: string;
  ExportSourceType?: ExportSourceType;
  JobStatus?: JobStatus;
  ExportDestination?: ExportDestination;
  ExportDataSource?: ExportDataSource;
  CreatedTimestamp?: Date | string;
  CompletedTimestamp?: Date | string;
  FailureInfo?: FailureInfo;
  Statistics?: ExportStatistics;
}
export interface GetImportJobRequest {
  JobId: string;
}
export interface GetImportJobResponse {
  JobId?: string;
  ImportDestination?: ImportDestination;
  ImportDataSource?: ImportDataSource;
  FailureInfo?: FailureInfo;
  JobStatus?: JobStatus;
  CreatedTimestamp?: Date | string;
  CompletedTimestamp?: Date | string;
  ProcessedRecordsCount?: number;
  FailedRecordsCount?: number;
}
export interface GetMessageInsightsRequest {
  MessageId: string;
}
export interface GetMessageInsightsResponse {
  MessageId?: string;
  FromEmailAddress?: string;
  Subject?: string;
  EmailTags?: Array<MessageTag>;
  Insights?: Array<EmailInsights>;
}
export interface GetMultiRegionEndpointRequest {
  EndpointName: string;
}
export interface GetMultiRegionEndpointResponse {
  EndpointName?: string;
  EndpointId?: string;
  Routes?: Array<Route>;
  Status?: Status;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
}
export interface GetSuppressedDestinationRequest {
  EmailAddress: string;
}
export interface GetSuppressedDestinationResponse {
  SuppressedDestination: SuppressedDestination;
}
export interface GuardianAttributes {
  OptimizedSharedDelivery?: FeatureStatus;
}
export interface GuardianOptions {
  OptimizedSharedDelivery?: FeatureStatus;
}
export type HttpsPolicy = "REQUIRE" | "REQUIRE_OPEN_ONLY" | "OPTIONAL";
export type Identity = string;

export interface IdentityInfo {
  IdentityType?: IdentityType;
  IdentityName?: string;
  SendingEnabled?: boolean;
  VerificationStatus?: VerificationStatus;
}
export type IdentityInfoList = Array<IdentityInfo>;
export type IdentityType = "EMAIL_ADDRESS" | "DOMAIN" | "MANAGED_DOMAIN";
export type ImageUrl = string;

export interface ImportDataSource {
  S3Url: string;
  DataFormat: DataFormat;
}
export interface ImportDestination {
  SuppressionListDestination?: SuppressionListDestination;
  ContactListDestination?: ContactListDestination;
}
export type ImportDestinationType = "SUPPRESSION_LIST" | "CONTACT_LIST";
export interface ImportJobSummary {
  JobId?: string;
  ImportDestination?: ImportDestination;
  JobStatus?: JobStatus;
  CreatedTimestamp?: Date | string;
  ProcessedRecordsCount?: number;
  FailedRecordsCount?: number;
}
export type ImportJobSummaryList = Array<ImportJobSummary>;
export interface InboxPlacementTrackingOption {
  Global?: boolean;
  TrackedIsps?: Array<string>;
}
export type InsightsEmailAddress = string;

export interface InsightsEvent {
  Timestamp?: Date | string;
  Type?: EventType;
  Details?: EventDetails;
}
export type InsightsEvents = Array<InsightsEvent>;
export declare class InternalServiceErrorException extends Data.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNextTokenException extends Data.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly message?: string;
}> {}
export type Ip = string;

export type IpList = Array<string>;
export type Isp = string;

export type IspFilterList = Array<string>;
export type IspName = string;

export type IspNameList = Array<string>;
export interface IspPlacement {
  IspName?: string;
  PlacementStatistics?: PlacementStatistics;
}
export type IspPlacements = Array<IspPlacement>;
export type JobId = string;

export type JobStatus =
  | "CREATED"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED";
export interface KinesisFirehoseDestination {
  IamRoleArn: string;
  DeliveryStreamArn: string;
}
export type LastDeliveryEventList = Array<DeliveryEventType>;
export type LastEngagementEventList = Array<EngagementEventType>;
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
export interface ListContactListsRequest {
  PageSize?: number;
  NextToken?: string;
}
export interface ListContactListsResponse {
  ContactLists?: Array<ContactList>;
  NextToken?: string;
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
export interface ListContactsResponse {
  Contacts?: Array<Contact>;
  NextToken?: string;
}
export interface ListCustomVerificationEmailTemplatesRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListCustomVerificationEmailTemplatesResponse {
  CustomVerificationEmailTemplates?: Array<CustomVerificationEmailTemplateMetadata>;
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
export interface ListEmailTemplatesRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListEmailTemplatesResponse {
  TemplatesMetadata?: Array<EmailTemplateMetadata>;
  NextToken?: string;
}
export interface ListExportJobsRequest {
  NextToken?: string;
  PageSize?: number;
  ExportSourceType?: ExportSourceType;
  JobStatus?: JobStatus;
}
export interface ListExportJobsResponse {
  ExportJobs?: Array<ExportJobSummary>;
  NextToken?: string;
}
export interface ListImportJobsRequest {
  ImportDestinationType?: ImportDestinationType;
  NextToken?: string;
  PageSize?: number;
}
export interface ListImportJobsResponse {
  ImportJobs?: Array<ImportJobSummary>;
  NextToken?: string;
}
export interface ListManagementOptions {
  ContactListName: string;
  TopicName?: string;
}
export interface ListMultiRegionEndpointsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListMultiRegionEndpointsResponse {
  MultiRegionEndpoints?: Array<MultiRegionEndpoint>;
  NextToken?: string;
}
export type ListOfContactLists = Array<ContactList>;
export type ListOfContacts = Array<Contact>;
export type ListOfDedicatedIpPools = Array<string>;
export type ListRecommendationFilterValue = string;

export type ListRecommendationsFilter = Record<
  ListRecommendationsFilterKey,
  string
>;
export type ListRecommendationsFilterKey =
  | "TYPE"
  | "IMPACT"
  | "STATUS"
  | "RESOURCE_ARN";
export interface ListRecommendationsRequest {
  Filter?: Record<ListRecommendationsFilterKey, string>;
  NextToken?: string;
  PageSize?: number;
}
export interface ListRecommendationsResponse {
  Recommendations?: Array<Recommendation>;
  NextToken?: string;
}
export interface ListSuppressedDestinationsRequest {
  Reasons?: Array<SuppressionListReason>;
  StartDate?: Date | string;
  EndDate?: Date | string;
  NextToken?: string;
  PageSize?: number;
}
export interface ListSuppressedDestinationsResponse {
  SuppressedDestinationSummaries?: Array<SuppressedDestinationSummary>;
  NextToken?: string;
}
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
export type MailFromDomainStatus =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "TEMPORARY_FAILURE";
export type MailType = "MARKETING" | "TRANSACTIONAL";
export type Max24HourSend = number;

export type MaxDeliverySeconds = number;

export type MaxItems = number;

export type MaxSendRate = number;

export interface Message {
  Subject: Content;
  Body: Body;
  Headers?: Array<MessageHeader>;
  Attachments?: Array<Attachment>;
}
export type MessageContent = string;

export type MessageData = string;

export interface MessageHeader {
  Name: string;
  Value: string;
}
export type MessageHeaderList = Array<MessageHeader>;
export type MessageHeaderName = string;

export type MessageHeaderValue = string;

export interface MessageInsightsDataSource {
  StartDate: Date | string;
  EndDate: Date | string;
  Include?: MessageInsightsFilters;
  Exclude?: MessageInsightsFilters;
  MaxResults?: number;
}
export type MessageInsightsExportMaxResults = number;

export interface MessageInsightsFilters {
  FromEmailAddress?: Array<string>;
  Destination?: Array<string>;
  Subject?: Array<string>;
  Isp?: Array<string>;
  LastDeliveryEvent?: Array<DeliveryEventType>;
  LastEngagementEvent?: Array<EngagementEventType>;
}
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
  | "DELIVERY_COMPLAINT";
export type MetricAggregation = "RATE" | "VOLUME";
export interface MetricDataError {
  Id?: string;
  Code?: QueryErrorCode;
  Message?: string;
}
export type MetricDataErrorList = Array<MetricDataError>;
export interface MetricDataResult {
  Id?: string;
  Timestamps?: Array<Date | string>;
  Values?: Array<number>;
}
export type MetricDataResultList = Array<MetricDataResult>;
export type MetricDimensionName =
  | "EMAIL_IDENTITY"
  | "CONFIGURATION_SET"
  | "ISP";
export type MetricDimensionValue = string;

export type MetricNamespace = "VDM";
export interface MetricsDataSource {
  Dimensions: Record<MetricDimensionName, Array<string>>;
  Namespace: MetricNamespace;
  Metrics: Array<ExportMetric>;
  StartDate: Date | string;
  EndDate: Date | string;
}
export type MetricValueList = Array<number>;
export interface MultiRegionEndpoint {
  EndpointName?: string;
  Status?: Status;
  EndpointId?: string;
  Regions?: Array<string>;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
}
export type MultiRegionEndpoints = Array<MultiRegionEndpoint>;
export type NextToken = string;

export type NextTokenV2 = string;

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
export type PageSizeV2 = number;

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
export type Policy = string;

export type PolicyMap = Record<string, string>;
export type PolicyName = string;

export type PoolName = string;

export type PrimaryNameServer = string;

export type PrivateKey = string;

export type ProcessedRecordsCount = number;

export interface PutAccountDedicatedIpWarmupAttributesRequest {
  AutoWarmupEnabled?: boolean;
}
export interface PutAccountDedicatedIpWarmupAttributesResponse {}
export interface PutAccountDetailsRequest {
  MailType: MailType;
  WebsiteURL: string;
  ContactLanguage?: ContactLanguage;
  UseCaseDescription?: string;
  AdditionalContactEmailAddresses?: Array<string>;
  ProductionAccessEnabled?: boolean;
}
export interface PutAccountDetailsResponse {}
export interface PutAccountSendingAttributesRequest {
  SendingEnabled?: boolean;
}
export interface PutAccountSendingAttributesResponse {}
export interface PutAccountSuppressionAttributesRequest {
  SuppressedReasons?: Array<SuppressionListReason>;
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
  SuppressedReasons?: Array<SuppressionListReason>;
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
  SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
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
  DkimTokens?: Array<string>;
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
}
export interface PutSuppressedDestinationResponse {}
export type QueryErrorCode = "INTERNAL_FAILURE" | "ACCESS_DENIED";
export type QueryErrorMessage = string;

export type QueryIdentifier = string;

export type RawAttachmentData = Uint8Array | string;

export interface RawMessage {
  Data: Uint8Array | string;
}
export type RawMessageData = Uint8Array | string;

export type RblName = string;

export interface Recommendation {
  ResourceArn?: string;
  Type?: RecommendationType;
  Description?: string;
  Status?: RecommendationStatus;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  Impact?: RecommendationImpact;
}
export type RecommendationDescription = string;

export type RecommendationImpact = "LOW" | "HIGH";
export type RecommendationsList = Array<Recommendation>;
export type RecommendationStatus = "OPEN" | "FIXED";
export type RecommendationType =
  | "DKIM"
  | "DMARC"
  | "SPF"
  | "BIMI"
  | "COMPLAINT";
export type Region = string;

export type Regions = Array<string>;
export type RenderedEmailTemplate = string;

export interface ReplacementEmailContent {
  ReplacementTemplate?: ReplacementTemplate;
}
export interface ReplacementTemplate {
  ReplacementTemplateData?: string;
}
export type ReportId = string;

export type ReportName = string;

export interface ReputationOptions {
  ReputationMetricsEnabled?: boolean;
  LastFreshStart?: Date | string;
}
export interface ReviewDetails {
  Status?: ReviewStatus;
  CaseId?: string;
}
export type ReviewStatus = "PENDING" | "FAILED" | "GRANTED" | "DENIED";
export interface Route {
  Region: string;
}
export interface RouteDetails {
  Region: string;
}
export type Routes = Array<Route>;
export type RoutesDetails = Array<RouteDetails>;
export type S3Url = string;

export type ScalingMode = "STANDARD" | "MANAGED";
export type Selector = string;

export interface SendBulkEmailRequest {
  FromEmailAddress?: string;
  FromEmailAddressIdentityArn?: string;
  ReplyToAddresses?: Array<string>;
  FeedbackForwardingEmailAddress?: string;
  FeedbackForwardingEmailAddressIdentityArn?: string;
  DefaultEmailTags?: Array<MessageTag>;
  DefaultContent: BulkEmailContent;
  BulkEmailEntries: Array<BulkEmailEntry>;
  ConfigurationSetName?: string;
  EndpointId?: string;
}
export interface SendBulkEmailResponse {
  BulkEmailEntryResults: Array<BulkEmailEntryResult>;
}
export interface SendCustomVerificationEmailRequest {
  EmailAddress: string;
  TemplateName: string;
  ConfigurationSetName?: string;
}
export interface SendCustomVerificationEmailResponse {
  MessageId?: string;
}
export interface SendEmailRequest {
  FromEmailAddress?: string;
  FromEmailAddressIdentityArn?: string;
  Destination?: Destination;
  ReplyToAddresses?: Array<string>;
  FeedbackForwardingEmailAddress?: string;
  FeedbackForwardingEmailAddressIdentityArn?: string;
  Content: EmailContent;
  EmailTags?: Array<MessageTag>;
  ConfigurationSetName?: string;
  EndpointId?: string;
  ListManagementOptions?: ListManagementOptions;
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

export type SerialNumber = number;

export interface SnsDestination {
  TopicArn: string;
}
export interface SOARecord {
  PrimaryNameServer?: string;
  AdminEmail?: string;
  SerialNumber?: number;
}
export type Status = "CREATING" | "READY" | "FAILED" | "DELETING";
export type Subject = string;

export type SubscriptionStatus = "OPT_IN" | "OPT_OUT";
export type SuccessRedirectionURL = string;

export interface SuppressedDestination {
  EmailAddress: string;
  Reason: SuppressionListReason;
  LastUpdateTime: Date | string;
  Attributes?: SuppressedDestinationAttributes;
}
export interface SuppressedDestinationAttributes {
  MessageId?: string;
  FeedbackId?: string;
}
export type SuppressedDestinationSummaries =
  Array<SuppressedDestinationSummary>;
export interface SuppressedDestinationSummary {
  EmailAddress: string;
  Reason: SuppressionListReason;
  LastUpdateTime: Date | string;
}
export interface SuppressionAttributes {
  SuppressedReasons?: Array<SuppressionListReason>;
}
export interface SuppressionListDestination {
  SuppressionListImportAction: SuppressionListImportAction;
}
export type SuppressionListImportAction = "DELETE" | "PUT";
export type SuppressionListReason = "BOUNCE" | "COMPLAINT";
export type SuppressionListReasons = Array<SuppressionListReason>;
export interface SuppressionOptions {
  SuppressedReasons?: Array<SuppressionListReason>;
}
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
export interface TagResourceResponse {}
export type TagValue = string;

export interface Template {
  TemplateName?: string;
  TemplateArn?: string;
  TemplateContent?: EmailTemplateContent;
  TemplateData?: string;
  Headers?: Array<MessageHeader>;
  Attachments?: Array<Attachment>;
}
export type TemplateContent = string;

export interface TestRenderEmailTemplateRequest {
  TemplateName: string;
  TemplateData: string;
}
export interface TestRenderEmailTemplateResponse {
  RenderedTemplate: string;
}
export type Timestamp = Date | string;

export type TimestampList = Array<Date | string>;
export type TlsPolicy = "REQUIRE" | "OPTIONAL";
export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
}> {}
export interface Topic {
  TopicName: string;
  DisplayName: string;
  Description?: string;
  DefaultSubscriptionStatus: SubscriptionStatus;
}
export interface TopicFilter {
  TopicName?: string;
  UseDefaultIfPreferenceUnavailable?: boolean;
}
export type TopicName = string;

export interface TopicPreference {
  TopicName: string;
  SubscriptionStatus: SubscriptionStatus;
}
export type TopicPreferenceList = Array<TopicPreference>;
export type Topics = Array<Topic>;
export interface TrackingOptions {
  CustomRedirectDomain: string;
  HttpsPolicy?: HttpsPolicy;
}
export type UnsubscribeAll = boolean;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  EventDestination: EventDestinationDefinition;
}
export interface UpdateConfigurationSetEventDestinationResponse {}
export interface UpdateContactListRequest {
  ContactListName: string;
  Topics?: Array<Topic>;
  Description?: string;
}
export interface UpdateContactListResponse {}
export interface UpdateContactRequest {
  ContactListName: string;
  EmailAddress: string;
  TopicPreferences?: Array<TopicPreference>;
  UnsubscribeAll?: boolean;
  AttributesData?: string;
}
export interface UpdateContactResponse {}
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
export type UseCaseDescription = string;

export type UseDefaultIfPreferenceUnavailable = boolean;

export interface VdmAttributes {
  VdmEnabled: FeatureStatus;
  DashboardAttributes?: DashboardAttributes;
  GuardianAttributes?: GuardianAttributes;
}
export interface VdmOptions {
  DashboardOptions?: DashboardOptions;
  GuardianOptions?: GuardianOptions;
}
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
  | "REPLICATION_PRIMARY_INVALID_REGION";
export interface VerificationInfo {
  LastCheckedTimestamp?: Date | string;
  LastSuccessTimestamp?: Date | string;
  ErrorType?: VerificationError;
  SOARecord?: SOARecord;
}
export type VerificationStatus =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "TEMPORARY_FAILURE"
  | "NOT_STARTED";
export type Volume = number;

export interface VolumeStatistics {
  InboxRawCount?: number;
  SpamRawCount?: number;
  ProjectedInbox?: number;
  ProjectedSpam?: number;
}
export type WarmupStatus = "IN_PROGRESS" | "DONE";
export type WebsiteURL = string;

export declare namespace BatchGetMetricData {
  export type Input = BatchGetMetricDataRequest;
  export type Output = BatchGetMetricDataResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CancelExportJob {
  export type Input = CancelExportJobRequest;
  export type Output = CancelExportJobResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

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

export declare namespace CreateContact {
  export type Input = CreateContactRequest;
  export type Output = CreateContactResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateContactList {
  export type Input = CreateContactListRequest;
  export type Output = CreateContactListResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateCustomVerificationEmailTemplate {
  export type Input = CreateCustomVerificationEmailTemplateRequest;
  export type Output = CreateCustomVerificationEmailTemplateResponse;
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
    | AlreadyExistsException
    | BadRequestException
    | ConcurrentModificationException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateEmailIdentityPolicy {
  export type Input = CreateEmailIdentityPolicyRequest;
  export type Output = CreateEmailIdentityPolicyResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateEmailTemplate {
  export type Input = CreateEmailTemplateRequest;
  export type Output = CreateEmailTemplateResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateExportJob {
  export type Input = CreateExportJobRequest;
  export type Output = CreateExportJobResponse;
  export type Error =
    | BadRequestException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateImportJob {
  export type Input = CreateImportJobRequest;
  export type Output = CreateImportJobResponse;
  export type Error =
    | BadRequestException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateMultiRegionEndpoint {
  export type Input = CreateMultiRegionEndpointRequest;
  export type Output = CreateMultiRegionEndpointResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
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

export declare namespace DeleteContact {
  export type Input = DeleteContactRequest;
  export type Output = DeleteContactResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteContactList {
  export type Input = DeleteContactListRequest;
  export type Output = DeleteContactListResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteCustomVerificationEmailTemplate {
  export type Input = DeleteCustomVerificationEmailTemplateRequest;
  export type Output = DeleteCustomVerificationEmailTemplateResponse;
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

export declare namespace DeleteEmailIdentityPolicy {
  export type Input = DeleteEmailIdentityPolicyRequest;
  export type Output = DeleteEmailIdentityPolicyResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEmailTemplate {
  export type Input = DeleteEmailTemplateRequest;
  export type Output = DeleteEmailTemplateResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteMultiRegionEndpoint {
  export type Input = DeleteMultiRegionEndpointRequest;
  export type Output = DeleteMultiRegionEndpointResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteSuppressedDestination {
  export type Input = DeleteSuppressedDestinationRequest;
  export type Output = DeleteSuppressedDestinationResponse;
  export type Error =
    | BadRequestException
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

export declare namespace GetContact {
  export type Input = GetContactRequest;
  export type Output = GetContactResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetContactList {
  export type Input = GetContactListRequest;
  export type Output = GetContactListResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCustomVerificationEmailTemplate {
  export type Input = GetCustomVerificationEmailTemplateRequest;
  export type Output = GetCustomVerificationEmailTemplateResponse;
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

export declare namespace GetDedicatedIpPool {
  export type Input = GetDedicatedIpPoolRequest;
  export type Output = GetDedicatedIpPoolResponse;
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

export declare namespace GetEmailIdentityPolicies {
  export type Input = GetEmailIdentityPoliciesRequest;
  export type Output = GetEmailIdentityPoliciesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetEmailTemplate {
  export type Input = GetEmailTemplateRequest;
  export type Output = GetEmailTemplateResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetExportJob {
  export type Input = GetExportJobRequest;
  export type Output = GetExportJobResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetImportJob {
  export type Input = GetImportJobRequest;
  export type Output = GetImportJobResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetMessageInsights {
  export type Input = GetMessageInsightsRequest;
  export type Output = GetMessageInsightsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetMultiRegionEndpoint {
  export type Input = GetMultiRegionEndpointRequest;
  export type Output = GetMultiRegionEndpointResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSuppressedDestination {
  export type Input = GetSuppressedDestinationRequest;
  export type Output = GetSuppressedDestinationResponse;
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

export declare namespace ListContactLists {
  export type Input = ListContactListsRequest;
  export type Output = ListContactListsResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListContacts {
  export type Input = ListContactsRequest;
  export type Output = ListContactsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListCustomVerificationEmailTemplates {
  export type Input = ListCustomVerificationEmailTemplatesRequest;
  export type Output = ListCustomVerificationEmailTemplatesResponse;
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

export declare namespace ListEmailTemplates {
  export type Input = ListEmailTemplatesRequest;
  export type Output = ListEmailTemplatesResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListExportJobs {
  export type Input = ListExportJobsRequest;
  export type Output = ListExportJobsResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListImportJobs {
  export type Input = ListImportJobsRequest;
  export type Output = ListImportJobsResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListMultiRegionEndpoints {
  export type Input = ListMultiRegionEndpointsRequest;
  export type Output = ListMultiRegionEndpointsResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListRecommendations {
  export type Input = ListRecommendationsRequest;
  export type Output = ListRecommendationsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListSuppressedDestinations {
  export type Input = ListSuppressedDestinationsRequest;
  export type Output = ListSuppressedDestinationsResponse;
  export type Error =
    | BadRequestException
    | InvalidNextTokenException
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

export declare namespace PutAccountDetails {
  export type Input = PutAccountDetailsRequest;
  export type Output = PutAccountDetailsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
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

export declare namespace PutAccountSuppressionAttributes {
  export type Input = PutAccountSuppressionAttributesRequest;
  export type Output = PutAccountSuppressionAttributesResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutAccountVdmAttributes {
  export type Input = PutAccountVdmAttributesRequest;
  export type Output = PutAccountVdmAttributesResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutConfigurationSetArchivingOptions {
  export type Input = PutConfigurationSetArchivingOptionsRequest;
  export type Output = PutConfigurationSetArchivingOptionsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
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

export declare namespace PutConfigurationSetSuppressionOptions {
  export type Input = PutConfigurationSetSuppressionOptionsRequest;
  export type Output = PutConfigurationSetSuppressionOptionsResponse;
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

export declare namespace PutConfigurationSetVdmOptions {
  export type Input = PutConfigurationSetVdmOptionsRequest;
  export type Output = PutConfigurationSetVdmOptionsResponse;
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

export declare namespace PutDedicatedIpPoolScalingAttributes {
  export type Input = PutDedicatedIpPoolScalingAttributesRequest;
  export type Output = PutDedicatedIpPoolScalingAttributesResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
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

export declare namespace PutEmailIdentityConfigurationSetAttributes {
  export type Input = PutEmailIdentityConfigurationSetAttributesRequest;
  export type Output = PutEmailIdentityConfigurationSetAttributesResponse;
  export type Error =
    | BadRequestException
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

export declare namespace PutEmailIdentityDkimSigningAttributes {
  export type Input = PutEmailIdentityDkimSigningAttributesRequest;
  export type Output = PutEmailIdentityDkimSigningAttributesResponse;
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

export declare namespace PutSuppressedDestination {
  export type Input = PutSuppressedDestinationRequest;
  export type Output = PutSuppressedDestinationResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SendBulkEmail {
  export type Input = SendBulkEmailRequest;
  export type Output = SendBulkEmailResponse;
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

export declare namespace SendCustomVerificationEmail {
  export type Input = SendCustomVerificationEmailRequest;
  export type Output = SendCustomVerificationEmailResponse;
  export type Error =
    | BadRequestException
    | LimitExceededException
    | MailFromDomainNotVerifiedException
    | MessageRejected
    | NotFoundException
    | SendingPausedException
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

export declare namespace TestRenderEmailTemplate {
  export type Input = TestRenderEmailTemplateRequest;
  export type Output = TestRenderEmailTemplateResponse;
  export type Error =
    | BadRequestException
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

export declare namespace UpdateContact {
  export type Input = UpdateContactRequest;
  export type Output = UpdateContactResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateContactList {
  export type Input = UpdateContactListRequest;
  export type Output = UpdateContactListResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateCustomVerificationEmailTemplate {
  export type Input = UpdateCustomVerificationEmailTemplateRequest;
  export type Output = UpdateCustomVerificationEmailTemplateResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateEmailIdentityPolicy {
  export type Input = UpdateEmailIdentityPolicyRequest;
  export type Output = UpdateEmailIdentityPolicyResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateEmailTemplate {
  export type Input = UpdateEmailTemplateRequest;
  export type Output = UpdateEmailTemplateResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
