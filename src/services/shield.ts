import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSShield_20160616 {
  associateDRTLogBucket(
    input: AssociateDRTLogBucketRequest,
  ): Effect.Effect<
    AssociateDRTLogBucketResponse,
    | AccessDeniedForDependencyException
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | LimitsExceededException
    | NoAssociatedRoleException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateDRTRole(
    input: AssociateDRTRoleRequest,
  ): Effect.Effect<
    AssociateDRTRoleResponse,
    | AccessDeniedForDependencyException
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateHealthCheck(
    input: AssociateHealthCheckRequest,
  ): Effect.Effect<
    AssociateHealthCheckResponse,
    | InternalErrorException
    | InvalidParameterException
    | InvalidResourceException
    | LimitsExceededException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateProactiveEngagementDetails(
    input: AssociateProactiveEngagementDetailsRequest,
  ): Effect.Effect<
    AssociateProactiveEngagementDetailsResponse,
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createProtection(
    input: CreateProtectionRequest,
  ): Effect.Effect<
    CreateProtectionResponse,
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | InvalidResourceException
    | LimitsExceededException
    | OptimisticLockException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createProtectionGroup(
    input: CreateProtectionGroupRequest,
  ): Effect.Effect<
    CreateProtectionGroupResponse,
    | InternalErrorException
    | InvalidParameterException
    | LimitsExceededException
    | OptimisticLockException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createSubscription(
    input: CreateSubscriptionRequest,
  ): Effect.Effect<
    CreateSubscriptionResponse,
    InternalErrorException | ResourceAlreadyExistsException | CommonAwsError
  >;
  deleteProtection(
    input: DeleteProtectionRequest,
  ): Effect.Effect<
    DeleteProtectionResponse,
    | InternalErrorException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteProtectionGroup(
    input: DeleteProtectionGroupRequest,
  ): Effect.Effect<
    DeleteProtectionGroupResponse,
    | InternalErrorException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteSubscription(
    input: DeleteSubscriptionRequest,
  ): Effect.Effect<
    DeleteSubscriptionResponse,
    | InternalErrorException
    | LockedSubscriptionException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeAttack(
    input: DescribeAttackRequest,
  ): Effect.Effect<
    DescribeAttackResponse,
    AccessDeniedException | InternalErrorException | CommonAwsError
  >;
  describeAttackStatistics(
    input: DescribeAttackStatisticsRequest,
  ): Effect.Effect<
    DescribeAttackStatisticsResponse,
    InternalErrorException | CommonAwsError
  >;
  describeDRTAccess(
    input: DescribeDRTAccessRequest,
  ): Effect.Effect<
    DescribeDRTAccessResponse,
    InternalErrorException | ResourceNotFoundException | CommonAwsError
  >;
  describeEmergencyContactSettings(
    input: DescribeEmergencyContactSettingsRequest,
  ): Effect.Effect<
    DescribeEmergencyContactSettingsResponse,
    InternalErrorException | ResourceNotFoundException | CommonAwsError
  >;
  describeProtection(
    input: DescribeProtectionRequest,
  ): Effect.Effect<
    DescribeProtectionResponse,
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeProtectionGroup(
    input: DescribeProtectionGroupRequest,
  ): Effect.Effect<
    DescribeProtectionGroupResponse,
    InternalErrorException | ResourceNotFoundException | CommonAwsError
  >;
  describeSubscription(
    input: DescribeSubscriptionRequest,
  ): Effect.Effect<
    DescribeSubscriptionResponse,
    InternalErrorException | ResourceNotFoundException | CommonAwsError
  >;
  disableApplicationLayerAutomaticResponse(
    input: DisableApplicationLayerAutomaticResponseRequest,
  ): Effect.Effect<
    DisableApplicationLayerAutomaticResponseResponse,
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disableProactiveEngagement(
    input: DisableProactiveEngagementRequest,
  ): Effect.Effect<
    DisableProactiveEngagementResponse,
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateDRTLogBucket(
    input: DisassociateDRTLogBucketRequest,
  ): Effect.Effect<
    DisassociateDRTLogBucketResponse,
    | AccessDeniedForDependencyException
    | InternalErrorException
    | InvalidOperationException
    | NoAssociatedRoleException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateDRTRole(
    input: DisassociateDRTRoleRequest,
  ): Effect.Effect<
    DisassociateDRTRoleResponse,
    | InternalErrorException
    | InvalidOperationException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateHealthCheck(
    input: DisassociateHealthCheckRequest,
  ): Effect.Effect<
    DisassociateHealthCheckResponse,
    | InternalErrorException
    | InvalidParameterException
    | InvalidResourceException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  enableApplicationLayerAutomaticResponse(
    input: EnableApplicationLayerAutomaticResponseRequest,
  ): Effect.Effect<
    EnableApplicationLayerAutomaticResponseResponse,
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | LimitsExceededException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  enableProactiveEngagement(
    input: EnableProactiveEngagementRequest,
  ): Effect.Effect<
    EnableProactiveEngagementResponse,
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getSubscriptionState(
    input: GetSubscriptionStateRequest,
  ): Effect.Effect<
    GetSubscriptionStateResponse,
    InternalErrorException | CommonAwsError
  >;
  listAttacks(
    input: ListAttacksRequest,
  ): Effect.Effect<
    ListAttacksResponse,
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | CommonAwsError
  >;
  listProtectionGroups(
    input: ListProtectionGroupsRequest,
  ): Effect.Effect<
    ListProtectionGroupsResponse,
    | InternalErrorException
    | InvalidPaginationTokenException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listProtections(
    input: ListProtectionsRequest,
  ): Effect.Effect<
    ListProtectionsResponse,
    | InternalErrorException
    | InvalidPaginationTokenException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listResourcesInProtectionGroup(
    input: ListResourcesInProtectionGroupRequest,
  ): Effect.Effect<
    ListResourcesInProtectionGroupResponse,
    | InternalErrorException
    | InvalidPaginationTokenException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalErrorException
    | InvalidResourceException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalErrorException
    | InvalidParameterException
    | InvalidResourceException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalErrorException
    | InvalidParameterException
    | InvalidResourceException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateApplicationLayerAutomaticResponse(
    input: UpdateApplicationLayerAutomaticResponseRequest,
  ): Effect.Effect<
    UpdateApplicationLayerAutomaticResponseResponse,
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateEmergencyContactSettings(
    input: UpdateEmergencyContactSettingsRequest,
  ): Effect.Effect<
    UpdateEmergencyContactSettingsResponse,
    | InternalErrorException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateProtectionGroup(
    input: UpdateProtectionGroupRequest,
  ): Effect.Effect<
    UpdateProtectionGroupResponse,
    | InternalErrorException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateSubscription(
    input: UpdateSubscriptionRequest,
  ): Effect.Effect<
    UpdateSubscriptionResponse,
    | InternalErrorException
    | InvalidParameterException
    | LockedSubscriptionException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Shield = AWSShield_20160616;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export declare class AccessDeniedForDependencyException extends EffectData.TaggedError(
  "AccessDeniedForDependencyException",
)<{
  readonly message?: string;
}> {}
export interface ApplicationLayerAutomaticResponseConfiguration {
  Status: ApplicationLayerAutomaticResponseStatus;
  Action: ResponseAction;
}
export type ApplicationLayerAutomaticResponseStatus = "ENABLED" | "DISABLED";
export interface AssociateDRTLogBucketRequest {
  LogBucket: string;
}
export interface AssociateDRTLogBucketResponse {}
export interface AssociateDRTRoleRequest {
  RoleArn: string;
}
export interface AssociateDRTRoleResponse {}
export interface AssociateHealthCheckRequest {
  ProtectionId: string;
  HealthCheckArn: string;
}
export interface AssociateHealthCheckResponse {}
export interface AssociateProactiveEngagementDetailsRequest {
  EmergencyContactList: Array<EmergencyContact>;
}
export interface AssociateProactiveEngagementDetailsResponse {}
export interface AttackDetail {
  AttackId?: string;
  ResourceArn?: string;
  SubResources?: Array<SubResourceSummary>;
  StartTime?: Date | string;
  EndTime?: Date | string;
  AttackCounters?: Array<SummarizedCounter>;
  AttackProperties?: Array<AttackProperty>;
  Mitigations?: Array<Mitigation>;
}
export type AttackId = string;

export type AttackLayer = "NETWORK" | "APPLICATION";
export type AttackProperties = Array<AttackProperty>;
export interface AttackProperty {
  AttackLayer?: AttackLayer;
  AttackPropertyIdentifier?: AttackPropertyIdentifier;
  TopContributors?: Array<Contributor>;
  Unit?: Unit;
  Total?: number;
}
export type AttackPropertyIdentifier =
  | "DESTINATION_URL"
  | "REFERRER"
  | "SOURCE_ASN"
  | "SOURCE_COUNTRY"
  | "SOURCE_IP_ADDRESS"
  | "SOURCE_USER_AGENT"
  | "WORDPRESS_PINGBACK_REFLECTOR"
  | "WORDPRESS_PINGBACK_SOURCE";
export interface AttackStatisticsDataItem {
  AttackVolume?: AttackVolume;
  AttackCount: number;
}
export type AttackStatisticsDataList = Array<AttackStatisticsDataItem>;
export type AttackSummaries = Array<AttackSummary>;
export interface AttackSummary {
  AttackId?: string;
  ResourceArn?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  AttackVectors?: Array<AttackVectorDescription>;
}
export type AttackTimestamp = Date | string;

export interface AttackVectorDescription {
  VectorType: string;
}
export type AttackVectorDescriptionList = Array<AttackVectorDescription>;
export interface AttackVolume {
  BitsPerSecond?: AttackVolumeStatistics;
  PacketsPerSecond?: AttackVolumeStatistics;
  RequestsPerSecond?: AttackVolumeStatistics;
}
export interface AttackVolumeStatistics {
  Max: number;
}
export type AutoRenew = "ENABLED" | "DISABLED";
export interface BlockAction {}
export type ContactNotes = string;

export interface Contributor {
  Name?: string;
  Value?: number;
}
export interface CountAction {}
export interface CreateProtectionGroupRequest {
  ProtectionGroupId: string;
  Aggregation: ProtectionGroupAggregation;
  Pattern: ProtectionGroupPattern;
  ResourceType?: ProtectedResourceType;
  Members?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateProtectionGroupResponse {}
export interface CreateProtectionRequest {
  Name: string;
  ResourceArn: string;
  Tags?: Array<Tag>;
}
export interface CreateProtectionResponse {
  ProtectionId?: string;
}
export interface CreateSubscriptionRequest {}
export interface CreateSubscriptionResponse {}
export interface DeleteProtectionGroupRequest {
  ProtectionGroupId: string;
}
export interface DeleteProtectionGroupResponse {}
export interface DeleteProtectionRequest {
  ProtectionId: string;
}
export interface DeleteProtectionResponse {}
export interface DeleteSubscriptionRequest {}
export interface DeleteSubscriptionResponse {}
export interface DescribeAttackRequest {
  AttackId: string;
}
export interface DescribeAttackResponse {
  Attack?: AttackDetail;
}
export interface DescribeAttackStatisticsRequest {}
export interface DescribeAttackStatisticsResponse {
  TimeRange: TimeRange;
  DataItems: Array<AttackStatisticsDataItem>;
}
export interface DescribeDRTAccessRequest {}
export interface DescribeDRTAccessResponse {
  RoleArn?: string;
  LogBucketList?: Array<string>;
}
export interface DescribeEmergencyContactSettingsRequest {}
export interface DescribeEmergencyContactSettingsResponse {
  EmergencyContactList?: Array<EmergencyContact>;
}
export interface DescribeProtectionGroupRequest {
  ProtectionGroupId: string;
}
export interface DescribeProtectionGroupResponse {
  ProtectionGroup: ProtectionGroup;
}
export interface DescribeProtectionRequest {
  ProtectionId?: string;
  ResourceArn?: string;
}
export interface DescribeProtectionResponse {
  Protection?: Protection;
}
export interface DescribeSubscriptionRequest {}
export interface DescribeSubscriptionResponse {
  Subscription?: Subscription;
}
export interface DisableApplicationLayerAutomaticResponseRequest {
  ResourceArn: string;
}
export interface DisableApplicationLayerAutomaticResponseResponse {}
export interface DisableProactiveEngagementRequest {}
export interface DisableProactiveEngagementResponse {}
export interface DisassociateDRTLogBucketRequest {
  LogBucket: string;
}
export interface DisassociateDRTLogBucketResponse {}
export interface DisassociateDRTRoleRequest {}
export interface DisassociateDRTRoleResponse {}
export interface DisassociateHealthCheckRequest {
  ProtectionId: string;
  HealthCheckArn: string;
}
export interface DisassociateHealthCheckResponse {}
export type Double = number;

export type DurationInSeconds = number;

export type EmailAddress = string;

export interface EmergencyContact {
  EmailAddress: string;
  PhoneNumber?: string;
  ContactNotes?: string;
}
export type EmergencyContactList = Array<EmergencyContact>;
export interface EnableApplicationLayerAutomaticResponseRequest {
  ResourceArn: string;
  Action: ResponseAction;
}
export interface EnableApplicationLayerAutomaticResponseResponse {}
export interface EnableProactiveEngagementRequest {}
export interface EnableProactiveEngagementResponse {}
export type errorMessage = string;

export interface GetSubscriptionStateRequest {}
export interface GetSubscriptionStateResponse {
  SubscriptionState: SubscriptionState;
}
export type HealthCheckArn = string;

export type HealthCheckId = string;

export type HealthCheckIds = Array<string>;
export interface InclusionProtectionFilters {
  ResourceArns?: Array<string>;
  ProtectionNames?: Array<string>;
  ResourceTypes?: Array<ProtectedResourceType>;
}
export interface InclusionProtectionGroupFilters {
  ProtectionGroupIds?: Array<string>;
  Patterns?: Array<ProtectionGroupPattern>;
  ResourceTypes?: Array<ProtectedResourceType>;
  Aggregations?: Array<ProtectionGroupAggregation>;
}
export type Integer = number;

export declare class InternalErrorException extends EffectData.TaggedError(
  "InternalErrorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidOperationException extends EffectData.TaggedError(
  "InvalidOperationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPaginationTokenException extends EffectData.TaggedError(
  "InvalidPaginationTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
  readonly reason?: ValidationExceptionReason;
  readonly fields?: Array<ValidationExceptionField>;
}> {}
export declare class InvalidResourceException extends EffectData.TaggedError(
  "InvalidResourceException",
)<{
  readonly message?: string;
}> {}
export interface Limit {
  Type?: string;
  Max?: number;
}
export type LimitNumber = number;

export type Limits = Array<Limit>;
export declare class LimitsExceededException extends EffectData.TaggedError(
  "LimitsExceededException",
)<{
  readonly message?: string;
  readonly Type?: string;
  readonly Limit?: number;
}> {}
export type LimitType = string;

export interface ListAttacksRequest {
  ResourceArns?: Array<string>;
  StartTime?: TimeRange;
  EndTime?: TimeRange;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAttacksResponse {
  AttackSummaries?: Array<AttackSummary>;
  NextToken?: string;
}
export interface ListProtectionGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
  InclusionFilters?: InclusionProtectionGroupFilters;
}
export interface ListProtectionGroupsResponse {
  ProtectionGroups: Array<ProtectionGroup>;
  NextToken?: string;
}
export interface ListProtectionsRequest {
  NextToken?: string;
  MaxResults?: number;
  InclusionFilters?: InclusionProtectionFilters;
}
export interface ListProtectionsResponse {
  Protections?: Array<Protection>;
  NextToken?: string;
}
export interface ListResourcesInProtectionGroupRequest {
  ProtectionGroupId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListResourcesInProtectionGroupResponse {
  ResourceArns: Array<string>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export declare class LockedSubscriptionException extends EffectData.TaggedError(
  "LockedSubscriptionException",
)<{
  readonly message?: string;
}> {}
export type LogBucket = string;

export type LogBucketList = Array<string>;
export type Long = number;

export type MaxResults = number;

export interface Mitigation {
  MitigationName?: string;
}
export type MitigationList = Array<Mitigation>;
export declare class NoAssociatedRoleException extends EffectData.TaggedError(
  "NoAssociatedRoleException",
)<{
  readonly message?: string;
}> {}
export declare class OptimisticLockException extends EffectData.TaggedError(
  "OptimisticLockException",
)<{
  readonly message?: string;
}> {}
export type PhoneNumber = string;

export type ProactiveEngagementStatus = "ENABLED" | "DISABLED" | "PENDING";
export type ProtectedResourceType =
  | "CLOUDFRONT_DISTRIBUTION"
  | "ROUTE_53_HOSTED_ZONE"
  | "ELASTIC_IP_ALLOCATION"
  | "CLASSIC_LOAD_BALANCER"
  | "APPLICATION_LOAD_BALANCER"
  | "GLOBAL_ACCELERATOR";
export type ProtectedResourceTypeFilters = Array<ProtectedResourceType>;
export interface Protection {
  Id?: string;
  Name?: string;
  ResourceArn?: string;
  HealthCheckIds?: Array<string>;
  ProtectionArn?: string;
  ApplicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfiguration;
}
export interface ProtectionGroup {
  ProtectionGroupId: string;
  Aggregation: ProtectionGroupAggregation;
  Pattern: ProtectionGroupPattern;
  ResourceType?: ProtectedResourceType;
  Members: Array<string>;
  ProtectionGroupArn?: string;
}
export type ProtectionGroupAggregation = "SUM" | "MEAN" | "MAX";
export type ProtectionGroupAggregationFilters =
  Array<ProtectionGroupAggregation>;
export interface ProtectionGroupArbitraryPatternLimits {
  MaxMembers: number;
}
export type ProtectionGroupId = string;

export type ProtectionGroupIdFilters = Array<string>;
export interface ProtectionGroupLimits {
  MaxProtectionGroups: number;
  PatternTypeLimits: ProtectionGroupPatternTypeLimits;
}
export type ProtectionGroupMembers = Array<string>;
export type ProtectionGroupPattern = "ALL" | "ARBITRARY" | "BY_RESOURCE_TYPE";
export type ProtectionGroupPatternFilters = Array<ProtectionGroupPattern>;
export interface ProtectionGroupPatternTypeLimits {
  ArbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits;
}
export type ProtectionGroups = Array<ProtectionGroup>;
export type ProtectionId = string;

export interface ProtectionLimits {
  ProtectedResourceTypeLimits: Array<Limit>;
}
export type ProtectionName = string;

export type ProtectionNameFilters = Array<string>;
export type Protections = Array<Protection>;
export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
  readonly resourceType?: string;
}> {}
export type ResourceArn = string;

export type ResourceArnFilterList = Array<string>;
export type ResourceArnFilters = Array<string>;
export type ResourceArnList = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceType?: string;
}> {}
export interface ResponseAction {
  Block?: BlockAction;
  Count?: CountAction;
}
export type RoleArn = string;

export interface SubResourceSummary {
  Type?: SubResourceType;
  Id?: string;
  AttackVectors?: Array<SummarizedAttackVector>;
  Counters?: Array<SummarizedCounter>;
}
export type SubResourceSummaryList = Array<SubResourceSummary>;
export type SubResourceType = "IP" | "URL";
export interface Subscription {
  StartTime?: Date | string;
  EndTime?: Date | string;
  TimeCommitmentInSeconds?: number;
  AutoRenew?: AutoRenew;
  Limits?: Array<Limit>;
  ProactiveEngagementStatus?: ProactiveEngagementStatus;
  SubscriptionLimits: SubscriptionLimits;
  SubscriptionArn?: string;
}
export interface SubscriptionLimits {
  ProtectionLimits: ProtectionLimits;
  ProtectionGroupLimits: ProtectionGroupLimits;
}
export type SubscriptionState = "ACTIVE" | "INACTIVE";
export interface SummarizedAttackVector {
  VectorType: string;
  VectorCounters?: Array<SummarizedCounter>;
}
export type SummarizedAttackVectorList = Array<SummarizedAttackVector>;
export interface SummarizedCounter {
  Name?: string;
  Max?: number;
  Average?: number;
  Sum?: number;
  N?: number;
  Unit?: string;
}
export type SummarizedCounterList = Array<SummarizedCounter>;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TimeRange {
  FromInclusive?: Date | string;
  ToExclusive?: Date | string;
}
export type Timestamp = Date | string;

export type Token = string;

export type TopContributors = Array<Contributor>;
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationLayerAutomaticResponseRequest {
  ResourceArn: string;
  Action: ResponseAction;
}
export interface UpdateApplicationLayerAutomaticResponseResponse {}
export interface UpdateEmergencyContactSettingsRequest {
  EmergencyContactList?: Array<EmergencyContact>;
}
export interface UpdateEmergencyContactSettingsResponse {}
export interface UpdateProtectionGroupRequest {
  ProtectionGroupId: string;
  Aggregation: ProtectionGroupAggregation;
  Pattern: ProtectionGroupPattern;
  ResourceType?: ProtectedResourceType;
  Members?: Array<string>;
}
export interface UpdateProtectionGroupResponse {}
export interface UpdateSubscriptionRequest {
  AutoRenew?: AutoRenew;
}
export interface UpdateSubscriptionResponse {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = "FIELD_VALIDATION_FAILED" | "OTHER";
export declare namespace AssociateDRTLogBucket {
  export type Input = AssociateDRTLogBucketRequest;
  export type Output = AssociateDRTLogBucketResponse;
  export type Error =
    | AccessDeniedForDependencyException
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | LimitsExceededException
    | NoAssociatedRoleException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateDRTRole {
  export type Input = AssociateDRTRoleRequest;
  export type Output = AssociateDRTRoleResponse;
  export type Error =
    | AccessDeniedForDependencyException
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateHealthCheck {
  export type Input = AssociateHealthCheckRequest;
  export type Output = AssociateHealthCheckResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | InvalidResourceException
    | LimitsExceededException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateProactiveEngagementDetails {
  export type Input = AssociateProactiveEngagementDetailsRequest;
  export type Output = AssociateProactiveEngagementDetailsResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateProtection {
  export type Input = CreateProtectionRequest;
  export type Output = CreateProtectionResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | InvalidResourceException
    | LimitsExceededException
    | OptimisticLockException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateProtectionGroup {
  export type Input = CreateProtectionGroupRequest;
  export type Output = CreateProtectionGroupResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | LimitsExceededException
    | OptimisticLockException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateSubscription {
  export type Input = CreateSubscriptionRequest;
  export type Output = CreateSubscriptionResponse;
  export type Error =
    | InternalErrorException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace DeleteProtection {
  export type Input = DeleteProtectionRequest;
  export type Output = DeleteProtectionResponse;
  export type Error =
    | InternalErrorException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteProtectionGroup {
  export type Input = DeleteProtectionGroupRequest;
  export type Output = DeleteProtectionGroupResponse;
  export type Error =
    | InternalErrorException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSubscription {
  export type Input = DeleteSubscriptionRequest;
  export type Output = DeleteSubscriptionResponse;
  export type Error =
    | InternalErrorException
    | LockedSubscriptionException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAttack {
  export type Input = DescribeAttackRequest;
  export type Output = DescribeAttackResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeAttackStatistics {
  export type Input = DescribeAttackStatisticsRequest;
  export type Output = DescribeAttackStatisticsResponse;
  export type Error = InternalErrorException | CommonAwsError;
}

export declare namespace DescribeDRTAccess {
  export type Input = DescribeDRTAccessRequest;
  export type Output = DescribeDRTAccessResponse;
  export type Error =
    | InternalErrorException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeEmergencyContactSettings {
  export type Input = DescribeEmergencyContactSettingsRequest;
  export type Output = DescribeEmergencyContactSettingsResponse;
  export type Error =
    | InternalErrorException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeProtection {
  export type Input = DescribeProtectionRequest;
  export type Output = DescribeProtectionResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeProtectionGroup {
  export type Input = DescribeProtectionGroupRequest;
  export type Output = DescribeProtectionGroupResponse;
  export type Error =
    | InternalErrorException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSubscription {
  export type Input = DescribeSubscriptionRequest;
  export type Output = DescribeSubscriptionResponse;
  export type Error =
    | InternalErrorException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableApplicationLayerAutomaticResponse {
  export type Input = DisableApplicationLayerAutomaticResponseRequest;
  export type Output = DisableApplicationLayerAutomaticResponseResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableProactiveEngagement {
  export type Input = DisableProactiveEngagementRequest;
  export type Output = DisableProactiveEngagementResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateDRTLogBucket {
  export type Input = DisassociateDRTLogBucketRequest;
  export type Output = DisassociateDRTLogBucketResponse;
  export type Error =
    | AccessDeniedForDependencyException
    | InternalErrorException
    | InvalidOperationException
    | NoAssociatedRoleException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateDRTRole {
  export type Input = DisassociateDRTRoleRequest;
  export type Output = DisassociateDRTRoleResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateHealthCheck {
  export type Input = DisassociateHealthCheckRequest;
  export type Output = DisassociateHealthCheckResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | InvalidResourceException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableApplicationLayerAutomaticResponse {
  export type Input = EnableApplicationLayerAutomaticResponseRequest;
  export type Output = EnableApplicationLayerAutomaticResponseResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | LimitsExceededException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableProactiveEngagement {
  export type Input = EnableProactiveEngagementRequest;
  export type Output = EnableProactiveEngagementResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSubscriptionState {
  export type Input = GetSubscriptionStateRequest;
  export type Output = GetSubscriptionStateResponse;
  export type Error = InternalErrorException | CommonAwsError;
}

export declare namespace ListAttacks {
  export type Input = ListAttacksRequest;
  export type Output = ListAttacksResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ListProtectionGroups {
  export type Input = ListProtectionGroupsRequest;
  export type Output = ListProtectionGroupsResponse;
  export type Error =
    | InternalErrorException
    | InvalidPaginationTokenException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListProtections {
  export type Input = ListProtectionsRequest;
  export type Output = ListProtectionsResponse;
  export type Error =
    | InternalErrorException
    | InvalidPaginationTokenException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListResourcesInProtectionGroup {
  export type Input = ListResourcesInProtectionGroupRequest;
  export type Output = ListResourcesInProtectionGroupResponse;
  export type Error =
    | InternalErrorException
    | InvalidPaginationTokenException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidResourceException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | InvalidResourceException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | InvalidResourceException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateApplicationLayerAutomaticResponse {
  export type Input = UpdateApplicationLayerAutomaticResponseRequest;
  export type Output = UpdateApplicationLayerAutomaticResponseResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateEmergencyContactSettings {
  export type Input = UpdateEmergencyContactSettingsRequest;
  export type Output = UpdateEmergencyContactSettingsResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateProtectionGroup {
  export type Input = UpdateProtectionGroupRequest;
  export type Output = UpdateProtectionGroupResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateSubscription {
  export type Input = UpdateSubscriptionRequest;
  export type Output = UpdateSubscriptionResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | LockedSubscriptionException
    | OptimisticLockException
    | ResourceNotFoundException
    | CommonAwsError;
}
