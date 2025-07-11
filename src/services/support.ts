import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSSupport_20130415 {
  addAttachmentsToSet(
    input: AddAttachmentsToSetRequest,
  ): Effect.Effect<
    AddAttachmentsToSetResponse,
    | AttachmentLimitExceeded
    | AttachmentSetExpired
    | AttachmentSetIdNotFound
    | AttachmentSetSizeLimitExceeded
    | InternalServerError
    | CommonAwsError
  >;
  addCommunicationToCase(
    input: AddCommunicationToCaseRequest,
  ): Effect.Effect<
    AddCommunicationToCaseResponse,
    | AttachmentSetExpired
    | AttachmentSetIdNotFound
    | CaseIdNotFound
    | InternalServerError
    | CommonAwsError
  >;
  createCase(
    input: CreateCaseRequest,
  ): Effect.Effect<
    CreateCaseResponse,
    | AttachmentSetExpired
    | AttachmentSetIdNotFound
    | CaseCreationLimitExceeded
    | InternalServerError
    | CommonAwsError
  >;
  describeAttachment(
    input: DescribeAttachmentRequest,
  ): Effect.Effect<
    DescribeAttachmentResponse,
    | AttachmentIdNotFound
    | DescribeAttachmentLimitExceeded
    | InternalServerError
    | CommonAwsError
  >;
  describeCases(
    input: DescribeCasesRequest,
  ): Effect.Effect<
    DescribeCasesResponse,
    CaseIdNotFound | InternalServerError | CommonAwsError
  >;
  describeCommunications(
    input: DescribeCommunicationsRequest,
  ): Effect.Effect<
    DescribeCommunicationsResponse,
    CaseIdNotFound | InternalServerError | CommonAwsError
  >;
  describeCreateCaseOptions(
    input: DescribeCreateCaseOptionsRequest,
  ): Effect.Effect<
    DescribeCreateCaseOptionsResponse,
    InternalServerError | ThrottlingException | CommonAwsError
  >;
  describeServices(
    input: DescribeServicesRequest,
  ): Effect.Effect<
    DescribeServicesResponse,
    InternalServerError | CommonAwsError
  >;
  describeSeverityLevels(
    input: DescribeSeverityLevelsRequest,
  ): Effect.Effect<
    DescribeSeverityLevelsResponse,
    InternalServerError | CommonAwsError
  >;
  describeSupportedLanguages(
    input: DescribeSupportedLanguagesRequest,
  ): Effect.Effect<
    DescribeSupportedLanguagesResponse,
    InternalServerError | ThrottlingException | CommonAwsError
  >;
  describeTrustedAdvisorCheckRefreshStatuses(
    input: DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  ): Effect.Effect<
    DescribeTrustedAdvisorCheckRefreshStatusesResponse,
    InternalServerError | ThrottlingException | CommonAwsError
  >;
  describeTrustedAdvisorCheckResult(
    input: DescribeTrustedAdvisorCheckResultRequest,
  ): Effect.Effect<
    DescribeTrustedAdvisorCheckResultResponse,
    InternalServerError | ThrottlingException | CommonAwsError
  >;
  describeTrustedAdvisorChecks(
    input: DescribeTrustedAdvisorChecksRequest,
  ): Effect.Effect<
    DescribeTrustedAdvisorChecksResponse,
    InternalServerError | ThrottlingException | CommonAwsError
  >;
  describeTrustedAdvisorCheckSummaries(
    input: DescribeTrustedAdvisorCheckSummariesRequest,
  ): Effect.Effect<
    DescribeTrustedAdvisorCheckSummariesResponse,
    InternalServerError | ThrottlingException | CommonAwsError
  >;
  refreshTrustedAdvisorCheck(
    input: RefreshTrustedAdvisorCheckRequest,
  ): Effect.Effect<
    RefreshTrustedAdvisorCheckResponse,
    InternalServerError | CommonAwsError
  >;
  resolveCase(
    input: ResolveCaseRequest,
  ): Effect.Effect<
    ResolveCaseResponse,
    CaseIdNotFound | InternalServerError | CommonAwsError
  >;
}

export type Support = AWSSupport_20130415;

export interface AddAttachmentsToSetRequest {
  attachmentSetId?: string;
  attachments: Array<Attachment>;
}
export interface AddAttachmentsToSetResponse {
  attachmentSetId?: string;
  expiryTime?: string;
}
export interface AddCommunicationToCaseRequest {
  caseId?: string;
  communicationBody: string;
  ccEmailAddresses?: Array<string>;
  attachmentSetId?: string;
}
export interface AddCommunicationToCaseResponse {
  result?: boolean;
}
export type AfterTime = string;

export interface Attachment {
  fileName?: string;
  data?: Uint8Array | string;
}
export interface AttachmentDetails {
  attachmentId?: string;
  fileName?: string;
}
export type AttachmentId = string;

export declare class AttachmentIdNotFound extends Data.TaggedError(
  "AttachmentIdNotFound",
)<{
  readonly message?: string;
}> {}
export declare class AttachmentLimitExceeded extends Data.TaggedError(
  "AttachmentLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type Attachments = Array<Attachment>;
export type AttachmentSet = Array<AttachmentDetails>;
export declare class AttachmentSetExpired extends Data.TaggedError(
  "AttachmentSetExpired",
)<{
  readonly message?: string;
}> {}
export type AttachmentSetId = string;

export declare class AttachmentSetIdNotFound extends Data.TaggedError(
  "AttachmentSetIdNotFound",
)<{
  readonly message?: string;
}> {}
export declare class AttachmentSetSizeLimitExceeded extends Data.TaggedError(
  "AttachmentSetSizeLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type AvailabilityErrorMessage = string;

export type BeforeTime = string;

export declare class CaseCreationLimitExceeded extends Data.TaggedError(
  "CaseCreationLimitExceeded",
)<{
  readonly message?: string;
}> {}
export interface CaseDetails {
  caseId?: string;
  displayId?: string;
  subject?: string;
  status?: string;
  serviceCode?: string;
  categoryCode?: string;
  severityCode?: string;
  submittedBy?: string;
  timeCreated?: string;
  recentCommunications?: RecentCaseCommunications;
  ccEmailAddresses?: Array<string>;
  language?: string;
}
export type CaseId = string;

export type CaseIdList = Array<string>;
export declare class CaseIdNotFound extends Data.TaggedError("CaseIdNotFound")<{
  readonly message?: string;
}> {}
export type CaseList = Array<CaseDetails>;
export type CaseStatus = string;

export interface Category {
  code?: string;
  name?: string;
}
export type CategoryCode = string;

export type CategoryList = Array<Category>;
export type CategoryName = string;

export type CcEmailAddress = string;

export type CcEmailAddressList = Array<string>;
export type Code = string;

export interface Communication {
  caseId?: string;
  body?: string;
  submittedBy?: string;
  timeCreated?: string;
  attachmentSet?: Array<AttachmentDetails>;
}
export type CommunicationBody = string;

export type CommunicationList = Array<Communication>;
export interface CommunicationTypeOptions {
  type?: string;
  supportedHours?: Array<SupportedHour>;
  datesWithoutSupport?: Array<DateInterval>;
}
export type CommunicationTypeOptionsList = Array<CommunicationTypeOptions>;
export interface CreateCaseRequest {
  subject: string;
  serviceCode?: string;
  severityCode?: string;
  categoryCode?: string;
  communicationBody: string;
  ccEmailAddresses?: Array<string>;
  language?: string;
  issueType?: string;
  attachmentSetId?: string;
}
export interface CreateCaseResponse {
  caseId?: string;
}
export type Data = Uint8Array | string;

export interface DateInterval {
  startDateTime?: string;
  endDateTime?: string;
}
export type DatesWithoutSupportList = Array<DateInterval>;
export declare class DescribeAttachmentLimitExceeded extends Data.TaggedError(
  "DescribeAttachmentLimitExceeded",
)<{
  readonly message?: string;
}> {}
export interface DescribeAttachmentRequest {
  attachmentId: string;
}
export interface DescribeAttachmentResponse {
  attachment?: Attachment;
}
export interface DescribeCasesRequest {
  caseIdList?: Array<string>;
  displayId?: string;
  afterTime?: string;
  beforeTime?: string;
  includeResolvedCases?: boolean;
  nextToken?: string;
  maxResults?: number;
  language?: string;
  includeCommunications?: boolean;
}
export interface DescribeCasesResponse {
  cases?: Array<CaseDetails>;
  nextToken?: string;
}
export interface DescribeCommunicationsRequest {
  caseId: string;
  beforeTime?: string;
  afterTime?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeCommunicationsResponse {
  communications?: Array<Communication>;
  nextToken?: string;
}
export interface DescribeCreateCaseOptionsRequest {
  issueType: string;
  serviceCode: string;
  language: string;
  categoryCode: string;
}
export interface DescribeCreateCaseOptionsResponse {
  languageAvailability?: string;
  communicationTypes?: Array<CommunicationTypeOptions>;
}
export interface DescribeServicesRequest {
  serviceCodeList?: Array<string>;
  language?: string;
}
export interface DescribeServicesResponse {
  services?: Array<Service>;
}
export interface DescribeSeverityLevelsRequest {
  language?: string;
}
export interface DescribeSeverityLevelsResponse {
  severityLevels?: Array<SeverityLevel>;
}
export interface DescribeSupportedLanguagesRequest {
  issueType: string;
  serviceCode: string;
  categoryCode: string;
}
export interface DescribeSupportedLanguagesResponse {
  supportedLanguages?: Array<SupportedLanguage>;
}
export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
  checkIds: Array<string>;
}
export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
  statuses: Array<TrustedAdvisorCheckRefreshStatus>;
}
export interface DescribeTrustedAdvisorCheckResultRequest {
  checkId: string;
  language?: string;
}
export interface DescribeTrustedAdvisorCheckResultResponse {
  result?: TrustedAdvisorCheckResult;
}
export interface DescribeTrustedAdvisorChecksRequest {
  language: string;
}
export interface DescribeTrustedAdvisorChecksResponse {
  checks: Array<TrustedAdvisorCheckDescription>;
}
export interface DescribeTrustedAdvisorCheckSummariesRequest {
  checkIds: Array<string>;
}
export interface DescribeTrustedAdvisorCheckSummariesResponse {
  summaries: Array<TrustedAdvisorCheckSummary>;
}
export type Display = string;

export type DisplayId = string;

export type Double = number;

export type EndTime = string;

export type ErrorMessage = string;

export type ExpiryTime = string;

export type FileName = string;

export type IncludeCommunications = boolean;

export type IncludeResolvedCases = boolean;

export declare class InternalServerError extends Data.TaggedError(
  "InternalServerError",
)<{
  readonly message?: string;
}> {}
export type IssueType = string;

export type Language = string;

export type Long = number;

export type MaxResults = number;

export type NextToken = string;

export interface RecentCaseCommunications {
  communications?: Array<Communication>;
  nextToken?: string;
}
export interface RefreshTrustedAdvisorCheckRequest {
  checkId: string;
}
export interface RefreshTrustedAdvisorCheckResponse {
  status: TrustedAdvisorCheckRefreshStatus;
}
export interface ResolveCaseRequest {
  caseId?: string;
}
export interface ResolveCaseResponse {
  initialCaseStatus?: string;
  finalCaseStatus?: string;
}
export type Result = boolean;

export interface Service {
  code?: string;
  name?: string;
  categories?: Array<Category>;
}
export type ServiceCode = string;

export type ServiceCode2 = string;

export type ServiceCodeList = Array<string>;
export type ServiceList = Array<Service>;
export type ServiceName = string;

export type SeverityCode = string;

export interface SeverityLevel {
  code?: string;
  name?: string;
}
export type SeverityLevelCode = string;

export type SeverityLevelName = string;

export type SeverityLevelsList = Array<SeverityLevel>;
export type StartTime = string;

export type Status = string;

export type StringList = Array<string>;
export type Subject = string;

export type SubmittedBy = string;

export interface SupportedHour {
  startTime?: string;
  endTime?: string;
}
export type SupportedHoursList = Array<SupportedHour>;
export interface SupportedLanguage {
  code?: string;
  language?: string;
  display?: string;
}
export type SupportedLanguagesList = Array<SupportedLanguage>;
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TimeCreated = string;

export interface TrustedAdvisorCategorySpecificSummary {
  costOptimizing?: TrustedAdvisorCostOptimizingSummary;
}
export interface TrustedAdvisorCheckDescription {
  id: string;
  name: string;
  description: string;
  category: string;
  metadata: Array<string>;
}
export type TrustedAdvisorCheckList = Array<TrustedAdvisorCheckDescription>;
export interface TrustedAdvisorCheckRefreshStatus {
  checkId: string;
  status: string;
  millisUntilNextRefreshable: number;
}
export type TrustedAdvisorCheckRefreshStatusList =
  Array<TrustedAdvisorCheckRefreshStatus>;
export interface TrustedAdvisorCheckResult {
  checkId: string;
  timestamp: string;
  status: string;
  resourcesSummary: TrustedAdvisorResourcesSummary;
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
  flaggedResources: Array<TrustedAdvisorResourceDetail>;
}
export interface TrustedAdvisorCheckSummary {
  checkId: string;
  timestamp: string;
  status: string;
  hasFlaggedResources?: boolean;
  resourcesSummary: TrustedAdvisorResourcesSummary;
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
}
export type TrustedAdvisorCheckSummaryList = Array<TrustedAdvisorCheckSummary>;
export interface TrustedAdvisorCostOptimizingSummary {
  estimatedMonthlySavings: number;
  estimatedPercentMonthlySavings: number;
}
export interface TrustedAdvisorResourceDetail {
  status: string;
  region?: string;
  resourceId: string;
  isSuppressed?: boolean;
  metadata: Array<string>;
}
export type TrustedAdvisorResourceDetailList =
  Array<TrustedAdvisorResourceDetail>;
export interface TrustedAdvisorResourcesSummary {
  resourcesProcessed: number;
  resourcesFlagged: number;
  resourcesIgnored: number;
  resourcesSuppressed: number;
}
export type Type = string;

export type ValidatedCategoryCode = string;

export type ValidatedCommunicationBody = string;

export type ValidatedDateTime = string;

export type ValidatedIssueTypeString = string;

export type ValidatedLanguageAvailability = string;

export type ValidatedServiceCode = string;

export declare namespace AddAttachmentsToSet {
  export type Input = AddAttachmentsToSetRequest;
  export type Output = AddAttachmentsToSetResponse;
  export type Error =
    | AttachmentLimitExceeded
    | AttachmentSetExpired
    | AttachmentSetIdNotFound
    | AttachmentSetSizeLimitExceeded
    | InternalServerError
    | CommonAwsError;
}

export declare namespace AddCommunicationToCase {
  export type Input = AddCommunicationToCaseRequest;
  export type Output = AddCommunicationToCaseResponse;
  export type Error =
    | AttachmentSetExpired
    | AttachmentSetIdNotFound
    | CaseIdNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace CreateCase {
  export type Input = CreateCaseRequest;
  export type Output = CreateCaseResponse;
  export type Error =
    | AttachmentSetExpired
    | AttachmentSetIdNotFound
    | CaseCreationLimitExceeded
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeAttachment {
  export type Input = DescribeAttachmentRequest;
  export type Output = DescribeAttachmentResponse;
  export type Error =
    | AttachmentIdNotFound
    | DescribeAttachmentLimitExceeded
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeCases {
  export type Input = DescribeCasesRequest;
  export type Output = DescribeCasesResponse;
  export type Error = CaseIdNotFound | InternalServerError | CommonAwsError;
}

export declare namespace DescribeCommunications {
  export type Input = DescribeCommunicationsRequest;
  export type Output = DescribeCommunicationsResponse;
  export type Error = CaseIdNotFound | InternalServerError | CommonAwsError;
}

export declare namespace DescribeCreateCaseOptions {
  export type Input = DescribeCreateCaseOptionsRequest;
  export type Output = DescribeCreateCaseOptionsResponse;
  export type Error =
    | InternalServerError
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeServices {
  export type Input = DescribeServicesRequest;
  export type Output = DescribeServicesResponse;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribeSeverityLevels {
  export type Input = DescribeSeverityLevelsRequest;
  export type Output = DescribeSeverityLevelsResponse;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribeSupportedLanguages {
  export type Input = DescribeSupportedLanguagesRequest;
  export type Output = DescribeSupportedLanguagesResponse;
  export type Error =
    | InternalServerError
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTrustedAdvisorCheckRefreshStatuses {
  export type Input = DescribeTrustedAdvisorCheckRefreshStatusesRequest;
  export type Output = DescribeTrustedAdvisorCheckRefreshStatusesResponse;
  export type Error =
    | InternalServerError
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTrustedAdvisorCheckResult {
  export type Input = DescribeTrustedAdvisorCheckResultRequest;
  export type Output = DescribeTrustedAdvisorCheckResultResponse;
  export type Error =
    | InternalServerError
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTrustedAdvisorChecks {
  export type Input = DescribeTrustedAdvisorChecksRequest;
  export type Output = DescribeTrustedAdvisorChecksResponse;
  export type Error =
    | InternalServerError
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTrustedAdvisorCheckSummaries {
  export type Input = DescribeTrustedAdvisorCheckSummariesRequest;
  export type Output = DescribeTrustedAdvisorCheckSummariesResponse;
  export type Error =
    | InternalServerError
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RefreshTrustedAdvisorCheck {
  export type Input = RefreshTrustedAdvisorCheckRequest;
  export type Output = RefreshTrustedAdvisorCheckResponse;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace ResolveCase {
  export type Input = ResolveCaseRequest;
  export type Output = ResolveCaseResponse;
  export type Error = CaseIdNotFound | InternalServerError | CommonAwsError;
}
