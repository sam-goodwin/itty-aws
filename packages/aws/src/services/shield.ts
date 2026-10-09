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
const ns = /*@__PURE__*/ T.XmlNamespace("http://ddp.amazonaws.com/doc/2016-06-02/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Shield",
  serviceShapeName: "AWSShield_20160616",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "shield" });
const ver = /*@__PURE__*/ T.ServiceVersion("2016-06-02");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
  const _p0 = () => ({
    authSchemes: [{ name: "sigv4", signingName: "shield", signingRegion: "us-east-1" }],
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
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://shield.us-east-1.amazonaws.com", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://shield-fips.us-east-1.amazonaws.com", _p0(), {});
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://shield-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://shield-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://shield.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://shield.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class AccessDeniedForDependencyException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedForDependencyException>()(
    "AccessDeniedForDependencyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAuthError) {}
export class InternalErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalErrorException>()("InternalErrorException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withServerError) {}
export class InvalidOperationException
  extends /*@__PURE__*/ S.TaggedError<InvalidOperationException>()("InvalidOperationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidPaginationTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidPaginationTokenException>()(
    "InvalidPaginationTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()("InvalidParameterException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    reason: /*@__PURE__*/ S.optional(
      /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionReason",
      }),
    ),
    fields: /*@__PURE__*/ S.optional(
      /*@__PURE__*/ S.suspend(() => __S(99, __c12, 3)).annotate({
        identifier: "ValidationExceptionFieldList",
      }),
    ),
  }) {}
export class InvalidResourceException
  extends /*@__PURE__*/ S.TaggedError<InvalidResourceException>()("InvalidResourceException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LimitsExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitsExceededException>()("LimitsExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Type: /*@__PURE__*/ S.optional(S.String),
    Limit: /*@__PURE__*/ S.optional(S.Number),
  }) {}
export class LockedSubscriptionException
  extends /*@__PURE__*/ S.TaggedError<LockedSubscriptionException>()(
    "LockedSubscriptionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class NoAssociatedRoleException
  extends /*@__PURE__*/ S.TaggedError<NoAssociatedRoleException>()("NoAssociatedRoleException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class OptimisticLockException
  extends /*@__PURE__*/ S.TaggedError<OptimisticLockException>()("OptimisticLockException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
  ).pipe(C.withAlreadyExistsError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    resourceType: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class SubscriptionNotFound
  extends /*@__PURE__*/ S.TaggedError<SubscriptionNotFound>()(
    "SubscriptionNotFound",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.SyntheticError({
      from: "ResourceNotFoundException",
      message: "The subscription does not exist.",
    }),
  ).pipe(C.withNotFoundError) {}
export type LogBucket = string;
export interface AssociateDRTLogBucketRequest {
  LogBucket: string;
}
export interface AssociateDRTLogBucketResponse {}
export type RoleArn = string;
export interface AssociateDRTRoleRequest {
  RoleArn: string;
}
export interface AssociateDRTRoleResponse {}
export type ProtectionId = string;
export type HealthCheckArn = string;
export interface AssociateHealthCheckRequest {
  ProtectionId: string;
  HealthCheckArn: string;
}
export interface AssociateHealthCheckResponse {}
export type EmailAddress = string;
export type PhoneNumber = string;
export type ContactNotes = string;
export interface EmergencyContact {
  EmailAddress: string;
  PhoneNumber?: string;
  ContactNotes?: string;
}
export type EmergencyContactList = EmergencyContact[];
export interface AssociateProactiveEngagementDetailsRequest {
  EmergencyContactList: EmergencyContact[];
}
export interface AssociateProactiveEngagementDetailsResponse {}
export type ProtectionName = string;
export type ResourceArn = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Tag[];
export interface CreateProtectionRequest {
  Name: string;
  ResourceArn: string;
  Tags?: Tag[];
}
export interface CreateProtectionResponse {
  ProtectionId?: string;
}
export type ProtectionGroupId = string;
export type ProtectionGroupAggregation = "SUM" | "MEAN" | "MAX" | (string & {});
export type ProtectionGroupPattern = "ALL" | "ARBITRARY" | "BY_RESOURCE_TYPE" | (string & {});
export type ProtectedResourceType =
  | "CLOUDFRONT_DISTRIBUTION"
  | "ROUTE_53_HOSTED_ZONE"
  | "ELASTIC_IP_ALLOCATION"
  | "CLASSIC_LOAD_BALANCER"
  | "APPLICATION_LOAD_BALANCER"
  | "GLOBAL_ACCELERATOR"
  | (string & {});
export type ProtectionGroupMembers = string[];
export interface CreateProtectionGroupRequest {
  ProtectionGroupId: string;
  Aggregation: ProtectionGroupAggregation;
  Pattern: ProtectionGroupPattern;
  ResourceType?: ProtectedResourceType;
  Members?: string[];
  Tags?: Tag[];
}
export interface CreateProtectionGroupResponse {}
export interface CreateSubscriptionRequest {}
export interface CreateSubscriptionResponse {}
export interface DeleteProtectionRequest {
  ProtectionId: string;
}
export interface DeleteProtectionResponse {}
export interface DeleteProtectionGroupRequest {
  ProtectionGroupId: string;
}
export interface DeleteProtectionGroupResponse {}
export interface DeleteSubscriptionRequest {}
export interface DeleteSubscriptionResponse {}
export type AttackId = string;
export interface DescribeAttackRequest {
  AttackId: string;
}
export type SubResourceType = "IP" | "URL" | (string & {});
export interface SummarizedCounter {
  Name?: string;
  Max?: number;
  Average?: number;
  Sum?: number;
  N?: number;
  Unit?: string;
}
export type SummarizedCounterList = SummarizedCounter[];
export interface SummarizedAttackVector {
  VectorType: string;
  VectorCounters?: SummarizedCounter[];
}
export type SummarizedAttackVectorList = SummarizedAttackVector[];
export interface SubResourceSummary {
  Type?: SubResourceType;
  Id?: string;
  AttackVectors?: SummarizedAttackVector[];
  Counters?: SummarizedCounter[];
}
export type SubResourceSummaryList = SubResourceSummary[];
export type AttackTimestamp = Date;
export type AttackLayer = "NETWORK" | "APPLICATION" | (string & {});
export type AttackPropertyIdentifier =
  | "DESTINATION_URL"
  | "REFERRER"
  | "SOURCE_ASN"
  | "SOURCE_COUNTRY"
  | "SOURCE_IP_ADDRESS"
  | "SOURCE_USER_AGENT"
  | "WORDPRESS_PINGBACK_REFLECTOR"
  | "WORDPRESS_PINGBACK_SOURCE"
  | (string & {});
export interface Contributor {
  Name?: string;
  Value?: number;
}
export type TopContributors = Contributor[];
export type Unit = "BITS" | "BYTES" | "PACKETS" | "REQUESTS" | (string & {});
export interface AttackProperty {
  AttackLayer?: AttackLayer;
  AttackPropertyIdentifier?: AttackPropertyIdentifier;
  TopContributors?: Contributor[];
  Unit?: Unit;
  Total?: number;
}
export type AttackProperties = AttackProperty[];
export interface Mitigation {
  MitigationName?: string;
}
export type MitigationList = Mitigation[];
export interface AttackDetail {
  AttackId?: string;
  ResourceArn?: string;
  SubResources?: SubResourceSummary[];
  StartTime?: Date;
  EndTime?: Date;
  AttackCounters?: SummarizedCounter[];
  AttackProperties?: AttackProperty[];
  Mitigations?: Mitigation[];
}
export interface DescribeAttackResponse {
  Attack?: AttackDetail;
}
export interface DescribeAttackStatisticsRequest {}
export interface TimeRange {
  FromInclusive?: Date;
  ToExclusive?: Date;
}
export interface AttackVolumeStatistics {
  Max: number;
}
export interface AttackVolume {
  BitsPerSecond?: AttackVolumeStatistics;
  PacketsPerSecond?: AttackVolumeStatistics;
  RequestsPerSecond?: AttackVolumeStatistics;
}
export interface AttackStatisticsDataItem {
  AttackVolume?: AttackVolume;
  AttackCount: number;
}
export type AttackStatisticsDataList = AttackStatisticsDataItem[];
export interface DescribeAttackStatisticsResponse {
  TimeRange: TimeRange;
  DataItems: AttackStatisticsDataItem[];
}
export interface DescribeDRTAccessRequest {}
export type LogBucketList = string[];
export interface DescribeDRTAccessResponse {
  RoleArn?: string;
  LogBucketList?: string[];
}
export interface DescribeEmergencyContactSettingsRequest {}
export interface DescribeEmergencyContactSettingsResponse {
  EmergencyContactList?: EmergencyContact[];
}
export interface DescribeProtectionRequest {
  ProtectionId?: string;
  ResourceArn?: string;
}
export type HealthCheckId = string;
export type HealthCheckIds = string[];
export type ApplicationLayerAutomaticResponseStatus = "ENABLED" | "DISABLED" | (string & {});
export interface BlockAction {}
export interface CountAction {}
export interface ResponseAction {
  Block?: BlockAction;
  Count?: CountAction;
}
export interface ApplicationLayerAutomaticResponseConfiguration {
  Status: ApplicationLayerAutomaticResponseStatus;
  Action: ResponseAction;
}
export interface Protection {
  Id?: string;
  Name?: string;
  ResourceArn?: string;
  HealthCheckIds?: string[];
  ProtectionArn?: string;
  ApplicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfiguration;
}
export interface DescribeProtectionResponse {
  Protection?: Protection;
}
export interface DescribeProtectionGroupRequest {
  ProtectionGroupId: string;
}
export interface ProtectionGroup {
  ProtectionGroupId: string;
  Aggregation: ProtectionGroupAggregation;
  Pattern: ProtectionGroupPattern;
  ResourceType?: ProtectedResourceType;
  Members: string[];
  ProtectionGroupArn?: string;
}
export interface DescribeProtectionGroupResponse {
  ProtectionGroup: ProtectionGroup;
}
export interface DescribeSubscriptionRequest {}
export type DurationInSeconds = number;
export type AutoRenew = "ENABLED" | "DISABLED" | (string & {});
export interface Limit {
  Type?: string;
  Max?: number;
}
export type Limits = Limit[];
export type ProactiveEngagementStatus = "ENABLED" | "DISABLED" | "PENDING" | (string & {});
export interface ProtectionLimits {
  ProtectedResourceTypeLimits: Limit[];
}
export interface ProtectionGroupArbitraryPatternLimits {
  MaxMembers: number;
}
export interface ProtectionGroupPatternTypeLimits {
  ArbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits;
}
export interface ProtectionGroupLimits {
  MaxProtectionGroups: number;
  PatternTypeLimits: ProtectionGroupPatternTypeLimits;
}
export interface SubscriptionLimits {
  ProtectionLimits: ProtectionLimits;
  ProtectionGroupLimits: ProtectionGroupLimits;
}
export interface Subscription {
  StartTime?: Date;
  EndTime?: Date;
  TimeCommitmentInSeconds?: number;
  AutoRenew?: AutoRenew;
  Limits?: Limit[];
  ProactiveEngagementStatus?: ProactiveEngagementStatus;
  SubscriptionLimits: SubscriptionLimits;
  SubscriptionArn?: string;
}
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
export interface EnableApplicationLayerAutomaticResponseRequest {
  ResourceArn: string;
  Action: ResponseAction;
}
export interface EnableApplicationLayerAutomaticResponseResponse {}
export interface EnableProactiveEngagementRequest {}
export interface EnableProactiveEngagementResponse {}
export interface GetSubscriptionStateRequest {}
export type SubscriptionState = "ACTIVE" | "INACTIVE" | (string & {});
export interface GetSubscriptionStateResponse {
  SubscriptionState: SubscriptionState;
}
export type ResourceArnFilterList = string[];
export type Token = string;
export type MaxResults = number;
export interface ListAttacksRequest {
  ResourceArns?: string[];
  StartTime?: TimeRange;
  EndTime?: TimeRange;
  NextToken?: string;
  MaxResults?: number;
}
export interface AttackVectorDescription {
  VectorType: string;
}
export type AttackVectorDescriptionList = AttackVectorDescription[];
export interface AttackSummary {
  AttackId?: string;
  ResourceArn?: string;
  StartTime?: Date;
  EndTime?: Date;
  AttackVectors?: AttackVectorDescription[];
}
export type AttackSummaries = AttackSummary[];
export interface ListAttacksResponse {
  AttackSummaries?: AttackSummary[];
  NextToken?: string;
}
export type ProtectionGroupIdFilters = string[];
export type ProtectionGroupPatternFilters = ProtectionGroupPattern[];
export type ProtectedResourceTypeFilters = ProtectedResourceType[];
export type ProtectionGroupAggregationFilters = ProtectionGroupAggregation[];
export interface InclusionProtectionGroupFilters {
  ProtectionGroupIds?: string[];
  Patterns?: ProtectionGroupPattern[];
  ResourceTypes?: ProtectedResourceType[];
  Aggregations?: ProtectionGroupAggregation[];
}
export interface ListProtectionGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
  InclusionFilters?: InclusionProtectionGroupFilters;
}
export type ProtectionGroups = ProtectionGroup[];
export interface ListProtectionGroupsResponse {
  ProtectionGroups: ProtectionGroup[];
  NextToken?: string;
}
export type ResourceArnFilters = string[];
export type ProtectionNameFilters = string[];
export interface InclusionProtectionFilters {
  ResourceArns?: string[];
  ProtectionNames?: string[];
  ResourceTypes?: ProtectedResourceType[];
}
export interface ListProtectionsRequest {
  NextToken?: string;
  MaxResults?: number;
  InclusionFilters?: InclusionProtectionFilters;
}
export type Protections = Protection[];
export interface ListProtectionsResponse {
  Protections?: Protection[];
  NextToken?: string;
}
export interface ListResourcesInProtectionGroupRequest {
  ProtectionGroupId: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ResourceArnList = string[];
export interface ListResourcesInProtectionGroupResponse {
  ResourceArns: string[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateApplicationLayerAutomaticResponseRequest {
  ResourceArn: string;
  Action: ResponseAction;
}
export interface UpdateApplicationLayerAutomaticResponseResponse {}
export interface UpdateEmergencyContactSettingsRequest {
  EmergencyContactList?: EmergencyContact[];
}
export interface UpdateEmergencyContactSettingsResponse {}
export interface UpdateProtectionGroupRequest {
  ProtectionGroupId: string;
  Aggregation: ProtectionGroupAggregation;
  Pattern: ProtectionGroupPattern;
  ResourceType?: ProtectedResourceType;
  Members?: string[];
}
export interface UpdateProtectionGroupResponse {}
export interface UpdateSubscriptionRequest {
  AutoRenew?: AutoRenew;
}
export interface UpdateSubscriptionResponse {}
export type ErrorMessage = string;
export type ValidationExceptionReason = "FIELD_VALIDATION_FAILED" | "OTHER" | (string & {});
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type LimitType = string;
export type LimitNumber = number;
export type AssociateDRTLogBucketError =
  | AccessDeniedForDependencyException
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | LimitsExceededException
  | NoAssociatedRoleException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.
 *
 * To use the services of the SRT and make an `AssociateDRTLogBucket` request, you must be subscribed to the Business Support plan or the Enterprise Support plan.
 */
export const associateDRTLogBucket: API.OperationMethod<
  AssociateDRTLogBucketRequest,
  AssociateDRTLogBucketResponse,
  AssociateDRTLogBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AssociateDRTLogBucketRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AssociateDRTLogBucketResponse>,
  errors: [
    AccessDeniedForDependencyException,
    InternalErrorException,
    InvalidOperationException,
    InvalidParameterException,
    LimitsExceededException,
    NoAssociatedRoleException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateDRTLogBucket",
}));

export type AssociateDRTRoleError =
  | AccessDeniedForDependencyException
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.
 *
 * You can associate only one `RoleArn` with your subscription. If you submit an `AssociateDRTRole` request for an account that already has an associated role, the new `RoleArn` will replace the existing `RoleArn`.
 *
 * Prior to making the `AssociateDRTRole` request, you must attach the `AWSShieldDRTAccessPolicy` managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at AWSShieldDRTAccessPolicy. For more information see Adding and removing IAM identity permissions. The role must also trust the service principal
 * `drt.shield.amazonaws.com`. For more information, see IAM JSON policy elements: Principal.
 *
 * The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.
 *
 * You must have the `iam:PassRole` permission to make an `AssociateDRTRole` request. For more information, see Granting a user permissions to pass a role to an Amazon Web Services service.
 *
 * To use the services of the SRT and make an `AssociateDRTRole` request, you must be subscribed to the Business Support plan or the Enterprise Support plan.
 */
export const associateDRTRole: API.OperationMethod<
  AssociateDRTRoleRequest,
  AssociateDRTRoleResponse,
  AssociateDRTRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<AssociateDRTRoleRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<AssociateDRTRoleResponse>,
  errors: [
    AccessDeniedForDependencyException,
    InternalErrorException,
    InvalidOperationException,
    InvalidParameterException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateDRTRole",
}));

export type AssociateHealthCheckError =
  | InternalErrorException
  | InvalidParameterException
  | InvalidResourceException
  | LimitsExceededException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response.
 *
 * You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see Shield Advanced Health-Based Detection in the *WAF Developer Guide*.
 */
export const associateHealthCheck: API.OperationMethod<
  AssociateHealthCheckRequest,
  AssociateHealthCheckResponse,
  AssociateHealthCheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<AssociateHealthCheckRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AssociateHealthCheckResponse>,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    InvalidResourceException,
    LimitsExceededException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateHealthCheck",
}));

export type AssociateProactiveEngagementDetailsError =
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list.
 *
 * After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls `DisableProactiveEngagement` and `EnableProactiveEngagement`.
 *
 * This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.
 *
 * The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using `DescribeEmergencyContactSettings` and then provide it to this call.
 */
export const associateProactiveEngagementDetails: API.OperationMethod<
  AssociateProactiveEngagementDetailsRequest,
  AssociateProactiveEngagementDetailsResponse,
  AssociateProactiveEngagementDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<AssociateProactiveEngagementDetailsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AssociateProactiveEngagementDetailsResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    InvalidParameterException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateProactiveEngagementDetails",
}));

export type CreateProtectionError =
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | InvalidResourceException
  | LimitsExceededException
  | OptimisticLockException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.
 *
 * You can add protection to only a single resource with each `CreateProtection` request. You can add protection to multiple resources
 * at once through the Shield Advanced console at https://console.aws.amazon.com/wafv2/shieldv2#/.
 * For more information see
 * Getting Started with Shield Advanced
 * and Adding Shield Advanced protection to Amazon Web Services resources.
 */
export const createProtection: API.OperationMethod<
  CreateProtectionRequest,
  CreateProtectionResponse,
  CreateProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<CreateProtectionRequest>,
  output: __S(11, __c1, 3) as any as S.Schema<CreateProtectionResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    InvalidParameterException,
    InvalidResourceException,
    LimitsExceededException,
    OptimisticLockException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProtection",
}));

export type CreateProtectionGroupError =
  | InternalErrorException
  | InvalidParameterException
  | LimitsExceededException
  | OptimisticLockException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
 */
export const createProtectionGroup: API.OperationMethod<
  CreateProtectionGroupRequest,
  CreateProtectionGroupResponse,
  CreateProtectionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13, __c1, 5) as any as S.Schema<CreateProtectionGroupRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CreateProtectionGroupResponse>,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    LimitsExceededException,
    OptimisticLockException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProtectionGroup",
}));

export type CreateSubscriptionError =
  | InternalErrorException
  | ResourceAlreadyExistsException
  | CommonErrors;
/**
 * Activates Shield Advanced for an account.
 *
 * For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account,
 * regardless of whether the payer account itself is subscribed.
 *
 * When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an `UpdateSubscription` request.
 */
export const createSubscription: API.OperationMethod<
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  CreateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<CreateSubscriptionRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CreateSubscriptionResponse>,
  errors: [InternalErrorException, ResourceAlreadyExistsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSubscription",
}));

export type DeleteProtectionError =
  | InternalErrorException
  | OptimisticLockException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Deletes an Shield Advanced Protection.
 */
export const deleteProtection: API.OperationMethod<
  DeleteProtectionRequest,
  DeleteProtectionResponse,
  DeleteProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<DeleteProtectionRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<DeleteProtectionResponse>,
  errors: [
    InternalErrorException,
    OptimisticLockException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProtection",
}));

export type DeleteProtectionGroupError =
  | InternalErrorException
  | OptimisticLockException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Removes the specified protection group.
 */
export const deleteProtectionGroup: API.OperationMethod<
  DeleteProtectionGroupRequest,
  DeleteProtectionGroupResponse,
  DeleteProtectionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<DeleteProtectionGroupRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteProtectionGroupResponse>,
  errors: [
    InternalErrorException,
    OptimisticLockException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProtectionGroup",
}));

export type DeleteSubscriptionError =
  | InternalErrorException
  | LockedSubscriptionException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment.
 */
export const deleteSubscription: API.OperationMethod<
  DeleteSubscriptionRequest,
  DeleteSubscriptionResponse,
  DeleteSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17, __c2, 1) as any as S.Schema<DeleteSubscriptionRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteSubscriptionResponse>,
  errors: [
    InternalErrorException,
    LockedSubscriptionException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSubscription",
}));

export type DescribeAttackError = AccessDeniedException | InternalErrorException | CommonErrors;
/**
 * Describes the details of a DDoS attack.
 */
export const describeAttack: API.OperationMethod<
  DescribeAttackRequest,
  DescribeAttackResponse,
  DescribeAttackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18, __c2, 2) as any as S.Schema<DescribeAttackRequest>,
  output: __S(32, __c4, 0) as any as S.Schema<DescribeAttackResponse>,
  errors: [AccessDeniedException, InternalErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAttack",
}));

export type DescribeAttackStatisticsError = InternalErrorException | CommonErrors;
/**
 * Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.
 *
 * The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is `2020-10-26 15:39:32 PDT`, equal to `2020-10-26 22:39:32 UTC`, then the time range for the attack data returned is from `2019-10-26 00:00:00 UTC` to `2020-10-26 00:00:00 UTC`.
 *
 * The time range indicates the period covered by the attack statistics data items.
 */
export const describeAttackStatistics: API.OperationMethod<
  DescribeAttackStatisticsRequest,
  DescribeAttackStatisticsResponse,
  DescribeAttackStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33, __c4, 1) as any as S.Schema<DescribeAttackStatisticsRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<DescribeAttackStatisticsResponse>,
  errors: [InternalErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAttackStatistics",
}));

export type DescribeDRTAccessError =
  | InternalErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.
 */
export const describeDRTAccess: API.OperationMethod<
  DescribeDRTAccessRequest,
  DescribeDRTAccessResponse,
  DescribeDRTAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<DescribeDRTAccessRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<DescribeDRTAccessResponse>,
  errors: [InternalErrorException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDRTAccess",
}));

export type DescribeEmergencyContactSettingsError =
  | InternalErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
 */
export const describeEmergencyContactSettings: API.OperationMethod<
  DescribeEmergencyContactSettingsRequest,
  DescribeEmergencyContactSettingsResponse,
  DescribeEmergencyContactSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42, __c5, 2) as any as S.Schema<DescribeEmergencyContactSettingsRequest>,
  output: __S(43, __c5, 3) as any as S.Schema<DescribeEmergencyContactSettingsResponse>,
  errors: [InternalErrorException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEmergencyContactSettings",
}));

export type DescribeProtectionError =
  | InternalErrorException
  | InvalidParameterException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Lists the details of a Protection object.
 */
export const describeProtection: API.OperationMethod<
  DescribeProtectionRequest,
  DescribeProtectionResponse,
  DescribeProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<DescribeProtectionRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<DescribeProtectionResponse>,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProtection",
}));

export type DescribeProtectionGroupError =
  | InternalErrorException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Returns the specification for the specified protection group.
 */
export const describeProtectionGroup: API.OperationMethod<
  DescribeProtectionGroupRequest,
  DescribeProtectionGroupResponse,
  DescribeProtectionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<DescribeProtectionGroupRequest>,
  output: __S(52, __c6, 4) as any as S.Schema<DescribeProtectionGroupResponse>,
  errors: [InternalErrorException, ResourceNotFoundException, SubscriptionNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProtectionGroup",
}));

export type DescribeSubscriptionError =
  | InternalErrorException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Provides details about the Shield Advanced subscription for an account.
 */
export const describeSubscription: API.OperationMethod<
  DescribeSubscriptionRequest,
  DescribeSubscriptionResponse,
  DescribeSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<DescribeSubscriptionRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<DescribeSubscriptionResponse>,
  errors: [InternalErrorException, ResourceNotFoundException, SubscriptionNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSubscription",
}));

export type DisableApplicationLayerAutomaticResponseError =
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This
 * stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource.
 */
export const disableApplicationLayerAutomaticResponse: API.OperationMethod<
  DisableApplicationLayerAutomaticResponseRequest,
  DisableApplicationLayerAutomaticResponseResponse,
  DisableApplicationLayerAutomaticResponseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<DisableApplicationLayerAutomaticResponseRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisableApplicationLayerAutomaticResponseResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    InvalidParameterException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableApplicationLayerAutomaticResponse",
}));

export type DisableProactiveEngagementError =
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.
 */
export const disableProactiveEngagement: API.OperationMethod<
  DisableProactiveEngagementRequest,
  DisableProactiveEngagementResponse,
  DisableProactiveEngagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64, __c8, 0) as any as S.Schema<DisableProactiveEngagementRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisableProactiveEngagementResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    InvalidParameterException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableProactiveEngagement",
}));

export type DisassociateDRTLogBucketError =
  | AccessDeniedForDependencyException
  | InternalErrorException
  | InvalidOperationException
  | NoAssociatedRoleException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.
 */
export const disassociateDRTLogBucket: API.OperationMethod<
  DisassociateDRTLogBucketRequest,
  DisassociateDRTLogBucketResponse,
  DisassociateDRTLogBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<DisassociateDRTLogBucketRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisassociateDRTLogBucketResponse>,
  errors: [
    AccessDeniedForDependencyException,
    InternalErrorException,
    InvalidOperationException,
    NoAssociatedRoleException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateDRTLogBucket",
}));

export type DisassociateDRTRoleError =
  | InternalErrorException
  | InvalidOperationException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.
 */
export const disassociateDRTRole: API.OperationMethod<
  DisassociateDRTRoleRequest,
  DisassociateDRTRoleResponse,
  DisassociateDRTRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<DisassociateDRTRoleRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisassociateDRTRoleResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateDRTRole",
}));

export type DisassociateHealthCheckError =
  | InternalErrorException
  | InvalidParameterException
  | InvalidResourceException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response.
 *
 * You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see Shield Advanced Health-Based Detection in the *WAF Developer Guide*.
 */
export const disassociateHealthCheck: API.OperationMethod<
  DisassociateHealthCheckRequest,
  DisassociateHealthCheckResponse,
  DisassociateHealthCheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67, __c8, 3) as any as S.Schema<DisassociateHealthCheckRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisassociateHealthCheckResponse>,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    InvalidResourceException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateHealthCheck",
}));

export type EnableApplicationLayerAutomaticResponseError =
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | LimitsExceededException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource.
 *
 * This feature is available for Amazon CloudFront distributions and Application Load Balancers only.
 *
 * This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the
 * resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated
 * with the resource. For information about how automatic mitigation works and the requirements for using it, see
 * Shield Advanced automatic application layer DDoS mitigation.
 *
 * Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use UpdateApplicationLayerAutomaticResponse.
 *
 * To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console
 * at https://console.aws.amazon.com/wafv2/shieldv2#/. For more information,
 * see Getting Started with Shield Advanced. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see
 * WAF Developer Guide.
 */
export const enableApplicationLayerAutomaticResponse: API.OperationMethod<
  EnableApplicationLayerAutomaticResponseRequest,
  EnableApplicationLayerAutomaticResponseResponse,
  EnableApplicationLayerAutomaticResponseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<EnableApplicationLayerAutomaticResponseRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<EnableApplicationLayerAutomaticResponseResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    InvalidParameterException,
    LimitsExceededException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableApplicationLayerAutomaticResponse",
}));

export type EnableProactiveEngagementError =
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
 */
export const enableProactiveEngagement: API.OperationMethod<
  EnableProactiveEngagementRequest,
  EnableProactiveEngagementResponse,
  EnableProactiveEngagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<EnableProactiveEngagementRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<EnableProactiveEngagementResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    InvalidParameterException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableProactiveEngagement",
}));

export type GetSubscriptionStateError = InternalErrorException | CommonErrors;
/**
 * Returns the `SubscriptionState`, either `Active` or `Inactive`.
 */
export const getSubscriptionState: API.OperationMethod<
  GetSubscriptionStateRequest,
  GetSubscriptionStateResponse,
  GetSubscriptionStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<GetSubscriptionStateRequest>,
  output: __S(71, __c8, 7) as any as S.Schema<GetSubscriptionStateResponse>,
  errors: [InternalErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSubscriptionState",
}));

export type ListAttacksError =
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | CommonErrors;
/**
 * Returns all ongoing DDoS attacks or all DDoS attacks during a specified time
 * period.
 */
export const listAttacks: API.PaginatedOperationMethod<
  ListAttacksRequest,
  ListAttacksResponse,
  ListAttacksError,
  Credentials | HttpClient.HttpClient,
  AttackSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<ListAttacksRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<ListAttacksResponse>,
  errors: [InternalErrorException, InvalidOperationException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttacks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AttackSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProtectionGroupsError =
  | InternalErrorException
  | InvalidPaginationTokenException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Retrieves ProtectionGroup objects for the account. You can retrieve all protection groups or you can provide
 * filtering criteria and retrieve just the subset of protection groups that match the criteria.
 */
export const listProtectionGroups: API.PaginatedOperationMethod<
  ListProtectionGroupsRequest,
  ListProtectionGroupsResponse,
  ListProtectionGroupsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<ListProtectionGroupsRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<ListProtectionGroupsResponse>,
  errors: [
    InternalErrorException,
    InvalidPaginationTokenException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProtectionGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProtectionsError =
  | InternalErrorException
  | InvalidPaginationTokenException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Retrieves Protection objects for the account. You can retrieve all protections or you can provide
 * filtering criteria and retrieve just the subset of protections that match the criteria.
 */
export const listProtections: API.PaginatedOperationMethod<
  ListProtectionsRequest,
  ListProtectionsResponse,
  ListProtectionsError,
  Credentials | HttpClient.HttpClient,
  Protection
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(84, __c10, 4) as any as S.Schema<ListProtectionsRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<ListProtectionsResponse>,
  errors: [
    InternalErrorException,
    InvalidPaginationTokenException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProtections",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Protections",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourcesInProtectionGroupError =
  | InternalErrorException
  | InvalidPaginationTokenException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the resources that are included in the protection group.
 */
export const listResourcesInProtectionGroup: API.PaginatedOperationMethod<
  ListResourcesInProtectionGroupRequest,
  ListResourcesInProtectionGroupResponse,
  ListResourcesInProtectionGroupError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(87, __c10, 7) as any as S.Schema<ListResourcesInProtectionGroupRequest>,
  output: __S(88, __c11, 0) as any as S.Schema<ListResourcesInProtectionGroupResponse>,
  errors: [InternalErrorException, InvalidPaginationTokenException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourcesInProtectionGroup",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalErrorException
  | InvalidResourceException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    InternalErrorException,
    InvalidResourceException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError =
  | InternalErrorException
  | InvalidParameterException
  | InvalidResourceException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Adds or updates tags for a resource in Shield.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<TagResourceRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<TagResourceResponse>,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    InvalidResourceException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalErrorException
  | InvalidParameterException
  | InvalidResourceException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Removes tags from a resource in Shield.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<UntagResourceRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    InvalidResourceException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateApplicationLayerAutomaticResponseError =
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.
 */
export const updateApplicationLayerAutomaticResponse: API.OperationMethod<
  UpdateApplicationLayerAutomaticResponseRequest,
  UpdateApplicationLayerAutomaticResponseResponse,
  UpdateApplicationLayerAutomaticResponseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<UpdateApplicationLayerAutomaticResponseRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateApplicationLayerAutomaticResponseResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    InvalidParameterException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplicationLayerAutomaticResponse",
}));

export type UpdateEmergencyContactSettingsError =
  | InternalErrorException
  | InvalidParameterException
  | OptimisticLockException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
 */
export const updateEmergencyContactSettings: API.OperationMethod<
  UpdateEmergencyContactSettingsRequest,
  UpdateEmergencyContactSettingsResponse,
  UpdateEmergencyContactSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<UpdateEmergencyContactSettingsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateEmergencyContactSettingsResponse>,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    OptimisticLockException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEmergencyContactSettings",
}));

export type UpdateProtectionGroupError =
  | InternalErrorException
  | InvalidParameterException
  | OptimisticLockException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
 */
export const updateProtectionGroup: API.OperationMethod<
  UpdateProtectionGroupRequest,
  UpdateProtectionGroupResponse,
  UpdateProtectionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<UpdateProtectionGroupRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateProtectionGroupResponse>,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    OptimisticLockException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProtectionGroup",
}));

export type UpdateSubscriptionError =
  | InternalErrorException
  | InvalidParameterException
  | LockedSubscriptionException
  | OptimisticLockException
  | ResourceNotFoundException
  | SubscriptionNotFound
  | CommonErrors;
/**
 * Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.
 *
 * For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account,
 * regardless of whether the payer account itself is subscribed.
 */
export const updateSubscription: API.OperationMethod<
  UpdateSubscriptionRequest,
  UpdateSubscriptionResponse,
  UpdateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97, __c12, 1) as any as S.Schema<UpdateSubscriptionRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateSubscriptionResponse>,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    LockedSubscriptionException,
    OptimisticLockException,
    ResourceNotFoundException,
    SubscriptionNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSubscription",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LogBucket: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateDRTLogBucketRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AssociateDRTLogBucketResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ RoleArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AssociateDRTRoleRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AssociateDRTRoleResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ProtectionId: S.String, HealthCheckArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateHealthCheckRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EmailAddress: S.String,
          PhoneNumber: S.optional(S.String),
          ContactNotes: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmergencyContact" });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ EmergencyContactList: __S(6, __c0, 6) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateProactiveEngagementDetailsRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.String, ResourceArn: S.String, Tags: S.optional(__S(9, __c1, 1)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateProtectionRequest" });
    case 3:
      return S.suspend(() => S.Struct({ ProtectionId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateProtectionResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProtectionGroupId: S.String,
          Aggregation: S.String,
          Pattern: S.String,
          ResourceType: S.optional(S.String),
          Members: S.optional(__S(12, __c1, 4)),
          Tags: S.optional(__S(9, __c1, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateProtectionGroupRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateSubscriptionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ProtectionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteProtectionRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProtectionGroupId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteProtectionGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSubscriptionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AttackId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeAttackRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Max: S.optional(S.Number),
          Average: S.optional(S.Number),
          Sum: S.optional(S.Number),
          N: S.optional(S.Number),
          Unit: S.optional(S.String),
        }),
      ).annotate({ identifier: "SummarizedCounter" });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ VectorType: S.String, VectorCounters: S.optional(__S(20, __c2, 4)) }),
      ).annotate({ identifier: "SummarizedAttackVector" });
    case 6:
      return S.Array(__S(21, __c2, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Id: S.optional(S.String),
          AttackVectors: S.optional(__S(22, __c2, 6)),
          Counters: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({ identifier: "SubResourceSummary" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23, __c2, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.Number) }),
      ).annotate({ identifier: "Contributor" });
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AttackLayer: S.optional(S.String),
          AttackPropertyIdentifier: S.optional(S.String),
          TopContributors: S.optional(__S(26, __c3, 2)),
          Unit: S.optional(S.String),
          Total: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AttackProperty" });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.suspend(() => S.Struct({ MitigationName: S.optional(S.String) })).annotate({
        identifier: "Mitigation",
      });
    case 6:
      return S.Array(__S(29, __c3, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          AttackId: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          SubResources: S.optional(__S(24, __c3, 0)),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AttackCounters: S.optional(__S(20, __c2, 4)),
          AttackProperties: S.optional(__S(28, __c3, 4)),
          Mitigations: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({ identifier: "AttackDetail" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Attack: S.optional(__S(31, __c3, 7)) }).pipe(ns)).annotate({
        identifier: "DescribeAttackResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAttackStatisticsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FromInclusive: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ToExclusive: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TimeRange" });
    case 3:
      return S.suspend(() => S.Struct({ Max: S.Number })).annotate({
        identifier: "AttackVolumeStatistics",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BitsPerSecond: S.optional(__S(35, __c4, 3)),
          PacketsPerSecond: S.optional(__S(35, __c4, 3)),
          RequestsPerSecond: S.optional(__S(35, __c4, 3)),
        }),
      ).annotate({ identifier: "AttackVolume" });
    case 5:
      return S.suspend(() =>
        S.Struct({ AttackVolume: S.optional(__S(36, __c4, 4)), AttackCount: S.Number }),
      ).annotate({ identifier: "AttackStatisticsDataItem" });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ TimeRange: __S(34, __c4, 2), DataItems: __S(38, __c4, 6) }).pipe(ns),
      ).annotate({
        identifier: "DescribeAttackStatisticsResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeDRTAccessRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RoleArn: S.optional(S.String),
          LogBucketList: S.optional(__S(12, __c1, 4)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDRTAccessResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEmergencyContactSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ EmergencyContactList: S.optional(__S(6, __c0, 6)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeEmergencyContactSettingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ProtectionId: S.optional(S.String), ResourceArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeProtectionRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "BlockAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Block: S.optional(__S(45, __c5, 5)), Count: S.optional(__S(45, __c5, 5)) }),
      ).annotate({ identifier: "ResponseAction" });
    case 7:
      return S.suspend(() => S.Struct({ Status: S.String, Action: __S(46, __c5, 6) })).annotate({
        identifier: "ApplicationLayerAutomaticResponseConfiguration",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          HealthCheckIds: S.optional(__S(12, __c1, 4)),
          ProtectionArn: S.optional(S.String),
          ApplicationLayerAutomaticResponseConfiguration: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({ identifier: "Protection" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Protection: S.optional(__S(48, __c6, 0)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeProtectionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ProtectionGroupId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeProtectionGroupRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProtectionGroupId: S.String,
          Aggregation: S.String,
          Pattern: S.String,
          ResourceType: S.optional(S.String),
          Members: __S(12, __c1, 4),
          ProtectionGroupArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProtectionGroup" });
    case 4:
      return S.suspend(() => S.Struct({ ProtectionGroup: __S(51, __c6, 3) }).pipe(ns)).annotate({
        identifier: "DescribeProtectionGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSubscriptionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Max: S.optional(S.Number) }),
      ).annotate({ identifier: "Limit" });
    case 7:
      return S.Array(__S(54, __c6, 6));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ProtectedResourceTypeLimits: __S(55, __c6, 7) })).annotate({
        identifier: "ProtectionLimits",
      });
    case 1:
      return S.suspend(() => S.Struct({ MaxMembers: S.Number })).annotate({
        identifier: "ProtectionGroupArbitraryPatternLimits",
      });
    case 2:
      return S.suspend(() => S.Struct({ ArbitraryPatternLimits: __S(57, __c7, 1) })).annotate({
        identifier: "ProtectionGroupPatternTypeLimits",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxProtectionGroups: S.Number,
          PatternTypeLimits: __S(58, __c7, 2),
        }),
      ).annotate({ identifier: "ProtectionGroupLimits" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProtectionLimits: __S(56, __c7, 0),
          ProtectionGroupLimits: __S(59, __c7, 3),
        }),
      ).annotate({ identifier: "SubscriptionLimits" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TimeCommitmentInSeconds: S.optional(S.Number),
          AutoRenew: S.optional(S.String),
          Limits: S.optional(__S(55, __c6, 7)),
          ProactiveEngagementStatus: S.optional(S.String),
          SubscriptionLimits: __S(60, __c7, 4),
          SubscriptionArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Subscription" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Subscription: S.optional(__S(61, __c7, 5)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeSubscriptionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableApplicationLayerAutomaticResponseRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableProactiveEngagementRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ LogBucket: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateDRTLogBucketRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateDRTRoleRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ProtectionId: S.String, HealthCheckArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateHealthCheckRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Action: __S(46, __c5, 6) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableApplicationLayerAutomaticResponseRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableProactiveEngagementRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetSubscriptionStateRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ SubscriptionState: S.String }).pipe(ns)).annotate({
        identifier: "GetSubscriptionStateResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceArns: S.optional(__S(12, __c1, 4)),
          StartTime: S.optional(__S(34, __c4, 2)),
          EndTime: S.optional(__S(34, __c4, 2)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAttacksRequest" });
    case 1:
      return S.suspend(() => S.Struct({ VectorType: S.String })).annotate({
        identifier: "AttackVectorDescription",
      });
    case 2:
      return S.Array(__S(73, __c9, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AttackId: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AttackVectors: S.optional(__S(74, __c9, 2)),
        }),
      ).annotate({ identifier: "AttackSummary" });
    case 4:
      return S.Array(__S(75, __c9, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          AttackSummaries: S.optional(__S(76, __c9, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListAttacksResponse" });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProtectionGroupIds: S.optional(__S(12, __c1, 4)),
          Patterns: S.optional(__S(78, __c9, 6)),
          ResourceTypes: S.optional(__S(78, __c9, 6)),
          Aggregations: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({
        identifier: "InclusionProtectionGroupFilters",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          InclusionFilters: S.optional(__S(79, __c9, 7)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListProtectionGroupsRequest",
      });
    case 1:
      return S.Array(__S(51, __c6, 3));
    case 2:
      return S.suspend(() =>
        S.Struct({ ProtectionGroups: __S(81, __c10, 1), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListProtectionGroupsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceArns: S.optional(__S(12, __c1, 4)),
          ProtectionNames: S.optional(__S(12, __c1, 4)),
          ResourceTypes: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({
        identifier: "InclusionProtectionFilters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          InclusionFilters: S.optional(__S(83, __c10, 3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListProtectionsRequest" });
    case 5:
      return S.Array(__S(48, __c6, 0));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Protections: S.optional(__S(85, __c10, 5)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListProtectionsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProtectionGroupId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListResourcesInProtectionGroupRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArns: __S(12, __c1, 4), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListResourcesInProtectionGroupResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(9, __c1, 1)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(9, __c1, 1) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(12, __c1, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Action: __S(46, __c5, 6) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateApplicationLayerAutomaticResponseRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ EmergencyContactList: S.optional(__S(6, __c0, 6)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateEmergencyContactSettingsRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProtectionGroupId: S.String,
          Aggregation: S.String,
          Pattern: S.String,
          ResourceType: S.optional(S.String),
          Members: S.optional(__S(12, __c1, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateProtectionGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AutoRenew: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateSubscriptionRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 3:
      return S.Array(__S(98, __c12, 2));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
