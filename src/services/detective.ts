import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonDetective {
  acceptInvitation(
    input: AcceptInvitationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  batchGetGraphMemberDatasources(
    input: BatchGetGraphMemberDatasourcesRequest,
  ): Effect.Effect<
    BatchGetGraphMemberDatasourcesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  batchGetMembershipDatasources(
    input: BatchGetMembershipDatasourcesRequest,
  ): Effect.Effect<
    BatchGetMembershipDatasourcesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createGraph(
    input: CreateGraphRequest,
  ): Effect.Effect<
    CreateGraphResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createMembers(
    input: CreateMembersRequest,
  ): Effect.Effect<
    CreateMembersResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteGraph(
    input: DeleteGraphRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteMembers(
    input: DeleteMembersRequest,
  ): Effect.Effect<
    DeleteMembersResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeOrganizationConfiguration(
    input: DescribeOrganizationConfigurationRequest,
  ): Effect.Effect<
    DescribeOrganizationConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  disableOrganizationAdminAccount(input: {}): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  disassociateMembership(
    input: DisassociateMembershipRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  enableOrganizationAdminAccount(
    input: EnableOrganizationAdminAccountRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getInvestigation(
    input: GetInvestigationRequest,
  ): Effect.Effect<
    GetInvestigationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getMembers(
    input: GetMembersRequest,
  ): Effect.Effect<
    GetMembersResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listDatasourcePackages(
    input: ListDatasourcePackagesRequest,
  ): Effect.Effect<
    ListDatasourcePackagesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listGraphs(
    input: ListGraphsRequest,
  ): Effect.Effect<
    ListGraphsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listIndicators(
    input: ListIndicatorsRequest,
  ): Effect.Effect<
    ListIndicatorsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listInvestigations(
    input: ListInvestigationsRequest,
  ): Effect.Effect<
    ListInvestigationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listInvitations(
    input: ListInvitationsRequest,
  ): Effect.Effect<
    ListInvitationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listMembers(
    input: ListMembersRequest,
  ): Effect.Effect<
    ListMembersResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listOrganizationAdminAccounts(
    input: ListOrganizationAdminAccountsRequest,
  ): Effect.Effect<
    ListOrganizationAdminAccountsResponse,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  rejectInvitation(
    input: RejectInvitationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startInvestigation(
    input: StartInvestigationRequest,
  ): Effect.Effect<
    StartInvestigationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  startMonitoringMember(
    input: StartMonitoringMemberRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateDatasourcePackages(
    input: UpdateDatasourcePackagesRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  updateInvestigationState(
    input: UpdateInvestigationStateRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  updateOrganizationConfiguration(
    input: UpdateOrganizationConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
}

export type Detective = AmazonDetective;

export interface AcceptInvitationRequest {
  GraphArn: string;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly ErrorCode?: ErrorCode;
  readonly ErrorCodeReason?: string;
  readonly SubErrorCode?: ErrorCode;
  readonly SubErrorCodeReason?: string;
}> {}
export interface Account {
  AccountId: string;
  EmailAddress: string;
}
export type AccountId = string;

export type AccountIdExtendedList = Array<string>;
export type AccountIdList = Array<string>;
export type AccountList = Array<Account>;
export interface Administrator {
  AccountId?: string;
  GraphArn?: string;
  DelegationTime?: Date | string;
}
export type AdministratorList = Array<Administrator>;
export type AiPaginationToken = string;

export type APIFailureCount = number;

export type APIName = string;

export type APISuccessCount = number;

export type Aso = string;

export interface BatchGetGraphMemberDatasourcesRequest {
  GraphArn: string;
  AccountIds: Array<string>;
}
export interface BatchGetGraphMemberDatasourcesResponse {
  MemberDatasources?: Array<MembershipDatasources>;
  UnprocessedAccounts?: Array<UnprocessedAccount>;
}
export interface BatchGetMembershipDatasourcesRequest {
  GraphArns: Array<string>;
}
export interface BatchGetMembershipDatasourcesResponse {
  MembershipDatasources?: Array<MembershipDatasources>;
  UnprocessedGraphs?: Array<UnprocessedGraph>;
}
export type DetectiveBoolean = boolean;

export type ByteValue = number;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateGraphRequest {
  Tags?: Record<string, string>;
}
export interface CreateGraphResponse {
  GraphArn?: string;
}
export interface CreateMembersRequest {
  GraphArn: string;
  Message?: string;
  DisableEmailNotification?: boolean;
  Accounts: Array<Account>;
}
export interface CreateMembersResponse {
  Members?: Array<MemberDetail>;
  UnprocessedAccounts?: Array<UnprocessedAccount>;
}
export type DatasourcePackage =
  | "DETECTIVE_CORE"
  | "EKS_AUDIT"
  | "ASFF_SECURITYHUB_FINDING";
export interface DatasourcePackageIngestDetail {
  DatasourcePackageIngestState?: DatasourcePackageIngestState;
  LastIngestStateChange?: Record<
    DatasourcePackageIngestState,
    TimestampForCollection
  >;
}
export type DatasourcePackageIngestDetails = Record<
  DatasourcePackage,
  DatasourcePackageIngestDetail
>;
export type DatasourcePackageIngestHistory = Record<
  DatasourcePackage,
  Record<DatasourcePackageIngestState, TimestampForCollection>
>;
export type DatasourcePackageIngestState = "STARTED" | "STOPPED" | "DISABLED";
export type DatasourcePackageIngestStates = Record<
  DatasourcePackage,
  DatasourcePackageIngestState
>;
export type DatasourcePackageList = Array<DatasourcePackage>;
export interface DatasourcePackageUsageInfo {
  VolumeUsageInBytes?: number;
  VolumeUsageUpdateTime?: Date | string;
}
export interface DateFilter {
  StartInclusive: Date | string;
  EndInclusive: Date | string;
}
export interface DeleteGraphRequest {
  GraphArn: string;
}
export interface DeleteMembersRequest {
  GraphArn: string;
  AccountIds: Array<string>;
}
export interface DeleteMembersResponse {
  AccountIds?: Array<string>;
  UnprocessedAccounts?: Array<UnprocessedAccount>;
}
export interface DescribeOrganizationConfigurationRequest {
  GraphArn: string;
}
export interface DescribeOrganizationConfigurationResponse {
  AutoEnable?: boolean;
}
export interface DisassociateMembershipRequest {
  GraphArn: string;
}
export type EmailAddress = string;

export type EmailMessage = string;

export interface EnableOrganizationAdminAccountRequest {
  AccountId: string;
}
export type EntityArn = string;

export type EntityType = "IAM_ROLE" | "IAM_USER";
export type ErrorCode =
  | "InvalidGraphArn"
  | "InvalidRequestBody"
  | "InternalError";
export type ErrorCodeReason = string;

export type ErrorMessage = string;

export type Field = "SEVERITY" | "STATUS" | "CREATED_TIME";
export interface FilterCriteria {
  Severity?: StringFilter;
  Status?: StringFilter;
  State?: StringFilter;
  EntityArn?: StringFilter;
  CreatedTime?: DateFilter;
}
export interface FlaggedIpAddressDetail {
  IpAddress?: string;
  Reason?: Reason;
}
export interface GetInvestigationRequest {
  GraphArn: string;
  InvestigationId: string;
}
export interface GetInvestigationResponse {
  GraphArn?: string;
  InvestigationId?: string;
  EntityArn?: string;
  EntityType?: EntityType;
  CreatedTime?: Date | string;
  ScopeStartTime?: Date | string;
  ScopeEndTime?: Date | string;
  Status?: Status;
  Severity?: Severity;
  State?: State;
}
export interface GetMembersRequest {
  GraphArn: string;
  AccountIds: Array<string>;
}
export interface GetMembersResponse {
  MemberDetails?: Array<MemberDetail>;
  UnprocessedAccounts?: Array<UnprocessedAccount>;
}
export interface Graph {
  Arn?: string;
  CreatedTime?: Date | string;
}
export type GraphArn = string;

export type GraphArnList = Array<string>;
export type GraphList = Array<Graph>;
export type HourlyTimeDelta = number;

export type Id = string;

export interface ImpossibleTravelDetail {
  StartingIpAddress?: string;
  EndingIpAddress?: string;
  StartingLocation?: string;
  EndingLocation?: string;
  HourlyTimeDelta?: number;
}
export interface Indicator {
  IndicatorType?: IndicatorType;
  IndicatorDetail?: IndicatorDetail;
}
export interface IndicatorDetail {
  TTPsObservedDetail?: TTPsObservedDetail;
  ImpossibleTravelDetail?: ImpossibleTravelDetail;
  FlaggedIpAddressDetail?: FlaggedIpAddressDetail;
  NewGeolocationDetail?: NewGeolocationDetail;
  NewAsoDetail?: NewAsoDetail;
  NewUserAgentDetail?: NewUserAgentDetail;
  RelatedFindingDetail?: RelatedFindingDetail;
  RelatedFindingGroupDetail?: RelatedFindingGroupDetail;
}
export type Indicators = Array<Indicator>;
export type IndicatorType =
  | "TTP_OBSERVED"
  | "IMPOSSIBLE_TRAVEL"
  | "FLAGGED_IP_ADDRESS"
  | "NEW_GEOLOCATION"
  | "NEW_ASO"
  | "NEW_USER_AGENT"
  | "RELATED_FINDING"
  | "RELATED_FINDING_GROUP";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface InvestigationDetail {
  InvestigationId?: string;
  Severity?: Severity;
  Status?: Status;
  State?: State;
  CreatedTime?: Date | string;
  EntityArn?: string;
  EntityType?: EntityType;
}
export type InvestigationDetails = Array<InvestigationDetail>;
export type InvestigationId = string;

export type InvitationType = "INVITATION" | "ORGANIZATION";
export type IpAddress = string;

export type IsNewForEntireAccount = boolean;

export type LastIngestStateChangeDates = Record<
  DatasourcePackageIngestState,
  TimestampForCollection
>;
export interface ListDatasourcePackagesRequest {
  GraphArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDatasourcePackagesResponse {
  DatasourcePackages?: Record<DatasourcePackage, DatasourcePackageIngestDetail>;
  NextToken?: string;
}
export interface ListGraphsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGraphsResponse {
  GraphList?: Array<Graph>;
  NextToken?: string;
}
export interface ListIndicatorsRequest {
  GraphArn: string;
  InvestigationId: string;
  IndicatorType?: IndicatorType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListIndicatorsResponse {
  GraphArn?: string;
  InvestigationId?: string;
  NextToken?: string;
  Indicators?: Array<Indicator>;
}
export interface ListInvestigationsRequest {
  GraphArn: string;
  NextToken?: string;
  MaxResults?: number;
  FilterCriteria?: FilterCriteria;
  SortCriteria?: SortCriteria;
}
export interface ListInvestigationsResponse {
  InvestigationDetails?: Array<InvestigationDetail>;
  NextToken?: string;
}
export interface ListInvitationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListInvitationsResponse {
  Invitations?: Array<MemberDetail>;
  NextToken?: string;
}
export interface ListMembersRequest {
  GraphArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMembersResponse {
  MemberDetails?: Array<MemberDetail>;
  NextToken?: string;
}
export interface ListOrganizationAdminAccountsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOrganizationAdminAccountsResponse {
  Administrators?: Array<Administrator>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type Location = string;

export type MaxResults = number;

export interface MemberDetail {
  AccountId?: string;
  EmailAddress?: string;
  GraphArn?: string;
  MasterId?: string;
  AdministratorId?: string;
  Status?: MemberStatus;
  DisabledReason?: MemberDisabledReason;
  InvitedTime?: Date | string;
  UpdatedTime?: Date | string;
  VolumeUsageInBytes?: number;
  VolumeUsageUpdatedTime?: Date | string;
  PercentOfGraphUtilization?: number;
  PercentOfGraphUtilizationUpdatedTime?: Date | string;
  InvitationType?: InvitationType;
  VolumeUsageByDatasourcePackage?: Record<
    DatasourcePackage,
    DatasourcePackageUsageInfo
  >;
  DatasourcePackageIngestStates?: Record<
    DatasourcePackage,
    DatasourcePackageIngestState
  >;
}
export type MemberDetailList = Array<MemberDetail>;
export type MemberDisabledReason = "VOLUME_TOO_HIGH" | "VOLUME_UNKNOWN";
export type MemberResultsLimit = number;

export interface MembershipDatasources {
  AccountId?: string;
  GraphArn?: string;
  DatasourcePackageIngestHistory?: Record<
    DatasourcePackage,
    Record<DatasourcePackageIngestState, TimestampForCollection>
  >;
}
export type MembershipDatasourcesList = Array<MembershipDatasources>;
export type MemberStatus =
  | "INVITED"
  | "VERIFICATION_IN_PROGRESS"
  | "VERIFICATION_FAILED"
  | "ENABLED"
  | "ACCEPTED_BUT_DISABLED";
export interface NewAsoDetail {
  Aso?: string;
  IsNewForEntireAccount?: boolean;
}
export interface NewGeolocationDetail {
  Location?: string;
  IpAddress?: string;
  IsNewForEntireAccount?: boolean;
}
export interface NewUserAgentDetail {
  UserAgent?: string;
  IsNewForEntireAccount?: boolean;
}
export type PaginationToken = string;

export type Percentage = number;

export type Procedure = string;

export type Reason = "AWS_THREAT_INTELLIGENCE";
export interface RejectInvitationRequest {
  GraphArn: string;
}
export interface RelatedFindingDetail {
  Arn?: string;
  Type?: string;
  IpAddress?: string;
}
export interface RelatedFindingGroupDetail {
  Id?: string;
}
export type Resource = string;

export type ResourceList = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly Resources?: Array<string>;
}> {}
export type Severity = "INFORMATIONAL" | "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export interface SortCriteria {
  Field?: Field;
  SortOrder?: SortOrder;
}
export type SortOrder = "ASC" | "DESC";
export interface StartInvestigationRequest {
  GraphArn: string;
  EntityArn: string;
  ScopeStartTime: Date | string;
  ScopeEndTime: Date | string;
}
export interface StartInvestigationResponse {
  InvestigationId?: string;
}
export interface StartMonitoringMemberRequest {
  GraphArn: string;
  AccountId: string;
}
export type State = "ACTIVE" | "ARCHIVED";
export type Status = "RUNNING" | "FAILED" | "SUCCESSFUL";
export interface StringFilter {
  Value: string;
}
export type Tactic = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Technique = string;

export type Timestamp = Date | string;

export interface TimestampForCollection {
  Timestamp?: Date | string;
}
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export interface TTPsObservedDetail {
  Tactic?: string;
  Technique?: string;
  Procedure?: string;
  IpAddress?: string;
  APIName?: string;
  APISuccessCount?: number;
  APIFailureCount?: number;
}
export type Type = string;

export interface UnprocessedAccount {
  AccountId?: string;
  Reason?: string;
}
export type UnprocessedAccountList = Array<UnprocessedAccount>;
export interface UnprocessedGraph {
  GraphArn?: string;
  Reason?: string;
}
export type UnprocessedGraphList = Array<UnprocessedGraph>;
export type UnprocessedReason = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDatasourcePackagesRequest {
  GraphArn: string;
  DatasourcePackages: Array<DatasourcePackage>;
}
export interface UpdateInvestigationStateRequest {
  GraphArn: string;
  InvestigationId: string;
  State: State;
}
export interface UpdateOrganizationConfigurationRequest {
  GraphArn: string;
  AutoEnable?: boolean;
}
export type UserAgent = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly ErrorCode?: ErrorCode;
  readonly ErrorCodeReason?: string;
}> {}
export type Value = string;

export type VolumeUsageByDatasourcePackage = Record<
  DatasourcePackage,
  DatasourcePackageUsageInfo
>;
export declare namespace AcceptInvitation {
  export type Input = AcceptInvitationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetGraphMemberDatasources {
  export type Input = BatchGetGraphMemberDatasourcesRequest;
  export type Output = BatchGetGraphMemberDatasourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetMembershipDatasources {
  export type Input = BatchGetMembershipDatasourcesRequest;
  export type Output = BatchGetMembershipDatasourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGraph {
  export type Input = CreateGraphRequest;
  export type Output = CreateGraphResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateMembers {
  export type Input = CreateMembersRequest;
  export type Output = CreateMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGraph {
  export type Input = DeleteGraphRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMembers {
  export type Input = DeleteMembersRequest;
  export type Output = DeleteMembersResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConfiguration {
  export type Input = DescribeOrganizationConfigurationRequest;
  export type Output = DescribeOrganizationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableOrganizationAdminAccount {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateMembership {
  export type Input = DisassociateMembershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableOrganizationAdminAccount {
  export type Input = EnableOrganizationAdminAccountRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInvestigation {
  export type Input = GetInvestigationRequest;
  export type Output = GetInvestigationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMembers {
  export type Input = GetMembersRequest;
  export type Output = GetMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDatasourcePackages {
  export type Input = ListDatasourcePackagesRequest;
  export type Output = ListDatasourcePackagesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGraphs {
  export type Input = ListGraphsRequest;
  export type Output = ListGraphsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIndicators {
  export type Input = ListIndicatorsRequest;
  export type Output = ListIndicatorsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInvestigations {
  export type Input = ListInvestigationsRequest;
  export type Output = ListInvestigationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInvitations {
  export type Input = ListInvitationsRequest;
  export type Output = ListInvitationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMembers {
  export type Input = ListMembersRequest;
  export type Output = ListMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOrganizationAdminAccounts {
  export type Input = ListOrganizationAdminAccountsRequest;
  export type Output = ListOrganizationAdminAccountsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RejectInvitation {
  export type Input = RejectInvitationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartInvestigation {
  export type Input = StartInvestigationRequest;
  export type Output = StartInvestigationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartMonitoringMember {
  export type Input = StartMonitoringMemberRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDatasourcePackages {
  export type Input = UpdateDatasourcePackagesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateInvestigationState {
  export type Input = UpdateInvestigationStateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOrganizationConfiguration {
  export type Input = UpdateOrganizationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}
