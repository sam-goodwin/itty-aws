import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Route53 extends AWSServiceClient {
  activateKeySigningKey(
    input: ActivateKeySigningKeyRequest,
  ): Effect.Effect<
    ActivateKeySigningKeyResponse,
    | ConcurrentModification
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | InvalidSigningStatus
    | NoSuchKeySigningKey
    | CommonAwsError
  >;
  associateVPCWithHostedZone(
    input: AssociateVPCWithHostedZoneRequest,
  ): Effect.Effect<
    AssociateVPCWithHostedZoneResponse,
    | ConflictingDomainExists
    | InvalidInput
    | InvalidVPCId
    | LimitsExceeded
    | NoSuchHostedZone
    | NotAuthorizedException
    | PriorRequestNotComplete
    | PublicZoneVPCAssociation
    | CommonAwsError
  >;
  changeCidrCollection(
    input: ChangeCidrCollectionRequest,
  ): Effect.Effect<
    ChangeCidrCollectionResponse,
    | CidrBlockInUseException
    | CidrCollectionVersionMismatchException
    | ConcurrentModification
    | InvalidInput
    | LimitsExceeded
    | NoSuchCidrCollectionException
    | CommonAwsError
  >;
  changeResourceRecordSets(
    input: ChangeResourceRecordSetsRequest,
  ): Effect.Effect<
    ChangeResourceRecordSetsResponse,
    | InvalidChangeBatch
    | InvalidInput
    | NoSuchHealthCheck
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | CommonAwsError
  >;
  changeTagsForResource(
    input: ChangeTagsForResourceRequest,
  ): Effect.Effect<
    ChangeTagsForResourceResponse,
    | InvalidInput
    | NoSuchHealthCheck
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | ThrottlingException
    | CommonAwsError
  >;
  createCidrCollection(
    input: CreateCidrCollectionRequest,
  ): Effect.Effect<
    CreateCidrCollectionResponse,
    | CidrCollectionAlreadyExistsException
    | ConcurrentModification
    | InvalidInput
    | LimitsExceeded
    | CommonAwsError
  >;
  createHealthCheck(
    input: CreateHealthCheckRequest,
  ): Effect.Effect<
    CreateHealthCheckResponse,
    | HealthCheckAlreadyExists
    | InvalidInput
    | TooManyHealthChecks
    | CommonAwsError
  >;
  createHostedZone(
    input: CreateHostedZoneRequest,
  ): Effect.Effect<
    CreateHostedZoneResponse,
    | ConflictingDomainExists
    | DelegationSetNotAvailable
    | DelegationSetNotReusable
    | HostedZoneAlreadyExists
    | InvalidDomainName
    | InvalidInput
    | InvalidVPCId
    | NoSuchDelegationSet
    | TooManyHostedZones
    | CommonAwsError
  >;
  createKeySigningKey(
    input: CreateKeySigningKeyRequest,
  ): Effect.Effect<
    CreateKeySigningKeyResponse,
    | ConcurrentModification
    | InvalidArgument
    | InvalidInput
    | InvalidKeySigningKeyName
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | InvalidSigningStatus
    | KeySigningKeyAlreadyExists
    | NoSuchHostedZone
    | TooManyKeySigningKeys
    | CommonAwsError
  >;
  createQueryLoggingConfig(
    input: CreateQueryLoggingConfigRequest,
  ): Effect.Effect<
    CreateQueryLoggingConfigResponse,
    | ConcurrentModification
    | InsufficientCloudWatchLogsResourcePolicy
    | InvalidInput
    | NoSuchCloudWatchLogsLogGroup
    | NoSuchHostedZone
    | QueryLoggingConfigAlreadyExists
    | CommonAwsError
  >;
  createReusableDelegationSet(
    input: CreateReusableDelegationSetRequest,
  ): Effect.Effect<
    CreateReusableDelegationSetResponse,
    | DelegationSetAlreadyCreated
    | DelegationSetAlreadyReusable
    | DelegationSetNotAvailable
    | HostedZoneNotFound
    | InvalidArgument
    | InvalidInput
    | LimitsExceeded
    | CommonAwsError
  >;
  createTrafficPolicy(
    input: CreateTrafficPolicyRequest,
  ): Effect.Effect<
    CreateTrafficPolicyResponse,
    | InvalidInput
    | InvalidTrafficPolicyDocument
    | TooManyTrafficPolicies
    | TrafficPolicyAlreadyExists
    | CommonAwsError
  >;
  createTrafficPolicyInstance(
    input: CreateTrafficPolicyInstanceRequest,
  ): Effect.Effect<
    CreateTrafficPolicyInstanceResponse,
    | InvalidInput
    | NoSuchHostedZone
    | NoSuchTrafficPolicy
    | TooManyTrafficPolicyInstances
    | TrafficPolicyInstanceAlreadyExists
    | CommonAwsError
  >;
  createTrafficPolicyVersion(
    input: CreateTrafficPolicyVersionRequest,
  ): Effect.Effect<
    CreateTrafficPolicyVersionResponse,
    | ConcurrentModification
    | InvalidInput
    | InvalidTrafficPolicyDocument
    | NoSuchTrafficPolicy
    | TooManyTrafficPolicyVersionsForCurrentPolicy
    | CommonAwsError
  >;
  createVPCAssociationAuthorization(
    input: CreateVPCAssociationAuthorizationRequest,
  ): Effect.Effect<
    CreateVPCAssociationAuthorizationResponse,
    | ConcurrentModification
    | InvalidInput
    | InvalidVPCId
    | NoSuchHostedZone
    | TooManyVPCAssociationAuthorizations
    | CommonAwsError
  >;
  deactivateKeySigningKey(
    input: DeactivateKeySigningKeyRequest,
  ): Effect.Effect<
    DeactivateKeySigningKeyResponse,
    | ConcurrentModification
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidSigningStatus
    | KeySigningKeyInParentDSRecord
    | KeySigningKeyInUse
    | NoSuchKeySigningKey
    | CommonAwsError
  >;
  deleteCidrCollection(
    input: DeleteCidrCollectionRequest,
  ): Effect.Effect<
    DeleteCidrCollectionResponse,
    | CidrCollectionInUseException
    | ConcurrentModification
    | InvalidInput
    | NoSuchCidrCollectionException
    | CommonAwsError
  >;
  deleteHealthCheck(
    input: DeleteHealthCheckRequest,
  ): Effect.Effect<
    DeleteHealthCheckResponse,
    HealthCheckInUse | InvalidInput | NoSuchHealthCheck | CommonAwsError
  >;
  deleteHostedZone(
    input: DeleteHostedZoneRequest,
  ): Effect.Effect<
    DeleteHostedZoneResponse,
    | HostedZoneNotEmpty
    | InvalidDomainName
    | InvalidInput
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | CommonAwsError
  >;
  deleteKeySigningKey(
    input: DeleteKeySigningKeyRequest,
  ): Effect.Effect<
    DeleteKeySigningKeyResponse,
    | ConcurrentModification
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | InvalidSigningStatus
    | NoSuchKeySigningKey
    | CommonAwsError
  >;
  deleteQueryLoggingConfig(
    input: DeleteQueryLoggingConfigRequest,
  ): Effect.Effect<
    DeleteQueryLoggingConfigResponse,
    | ConcurrentModification
    | InvalidInput
    | NoSuchQueryLoggingConfig
    | CommonAwsError
  >;
  deleteReusableDelegationSet(
    input: DeleteReusableDelegationSetRequest,
  ): Effect.Effect<
    DeleteReusableDelegationSetResponse,
    | DelegationSetInUse
    | DelegationSetNotReusable
    | InvalidInput
    | NoSuchDelegationSet
    | CommonAwsError
  >;
  deleteTrafficPolicy(
    input: DeleteTrafficPolicyRequest,
  ): Effect.Effect<
    DeleteTrafficPolicyResponse,
    | ConcurrentModification
    | InvalidInput
    | NoSuchTrafficPolicy
    | TrafficPolicyInUse
    | CommonAwsError
  >;
  deleteTrafficPolicyInstance(
    input: DeleteTrafficPolicyInstanceRequest,
  ): Effect.Effect<
    DeleteTrafficPolicyInstanceResponse,
    | InvalidInput
    | NoSuchTrafficPolicyInstance
    | PriorRequestNotComplete
    | CommonAwsError
  >;
  deleteVPCAssociationAuthorization(
    input: DeleteVPCAssociationAuthorizationRequest,
  ): Effect.Effect<
    DeleteVPCAssociationAuthorizationResponse,
    | ConcurrentModification
    | InvalidInput
    | InvalidVPCId
    | NoSuchHostedZone
    | VPCAssociationAuthorizationNotFound
    | CommonAwsError
  >;
  disableHostedZoneDNSSEC(
    input: DisableHostedZoneDNSSECRequest,
  ): Effect.Effect<
    DisableHostedZoneDNSSECResponse,
    | ConcurrentModification
    | DNSSECNotFound
    | InvalidArgument
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | KeySigningKeyInParentDSRecord
    | NoSuchHostedZone
    | CommonAwsError
  >;
  disassociateVPCFromHostedZone(
    input: DisassociateVPCFromHostedZoneRequest,
  ): Effect.Effect<
    DisassociateVPCFromHostedZoneResponse,
    | InvalidInput
    | InvalidVPCId
    | LastVPCAssociation
    | NoSuchHostedZone
    | VPCAssociationNotFound
    | CommonAwsError
  >;
  enableHostedZoneDNSSEC(
    input: EnableHostedZoneDNSSECRequest,
  ): Effect.Effect<
    EnableHostedZoneDNSSECResponse,
    | ConcurrentModification
    | DNSSECNotFound
    | HostedZonePartiallyDelegated
    | InvalidArgument
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | KeySigningKeyWithActiveStatusNotFound
    | NoSuchHostedZone
    | CommonAwsError
  >;
  getAccountLimit(
    input: GetAccountLimitRequest,
  ): Effect.Effect<GetAccountLimitResponse, InvalidInput | CommonAwsError>;
  getChange(
    input: GetChangeRequest,
  ): Effect.Effect<
    GetChangeResponse,
    InvalidInput | NoSuchChange | CommonAwsError
  >;
  getCheckerIpRanges(
    input: GetCheckerIpRangesRequest,
  ): Effect.Effect<GetCheckerIpRangesResponse, CommonAwsError>;
  getDNSSEC(
    input: GetDNSSECRequest,
  ): Effect.Effect<
    GetDNSSECResponse,
    InvalidArgument | InvalidInput | NoSuchHostedZone | CommonAwsError
  >;
  getGeoLocation(
    input: GetGeoLocationRequest,
  ): Effect.Effect<
    GetGeoLocationResponse,
    InvalidInput | NoSuchGeoLocation | CommonAwsError
  >;
  getHealthCheck(
    input: GetHealthCheckRequest,
  ): Effect.Effect<
    GetHealthCheckResponse,
    IncompatibleVersion | InvalidInput | NoSuchHealthCheck | CommonAwsError
  >;
  getHealthCheckCount(
    input: GetHealthCheckCountRequest,
  ): Effect.Effect<GetHealthCheckCountResponse, CommonAwsError>;
  getHealthCheckLastFailureReason(
    input: GetHealthCheckLastFailureReasonRequest,
  ): Effect.Effect<
    GetHealthCheckLastFailureReasonResponse,
    InvalidInput | NoSuchHealthCheck | CommonAwsError
  >;
  getHealthCheckStatus(
    input: GetHealthCheckStatusRequest,
  ): Effect.Effect<
    GetHealthCheckStatusResponse,
    InvalidInput | NoSuchHealthCheck | CommonAwsError
  >;
  getHostedZone(
    input: GetHostedZoneRequest,
  ): Effect.Effect<
    GetHostedZoneResponse,
    InvalidInput | NoSuchHostedZone | CommonAwsError
  >;
  getHostedZoneCount(
    input: GetHostedZoneCountRequest,
  ): Effect.Effect<GetHostedZoneCountResponse, InvalidInput | CommonAwsError>;
  getHostedZoneLimit(
    input: GetHostedZoneLimitRequest,
  ): Effect.Effect<
    GetHostedZoneLimitResponse,
    HostedZoneNotPrivate | InvalidInput | NoSuchHostedZone | CommonAwsError
  >;
  getQueryLoggingConfig(
    input: GetQueryLoggingConfigRequest,
  ): Effect.Effect<
    GetQueryLoggingConfigResponse,
    InvalidInput | NoSuchQueryLoggingConfig | CommonAwsError
  >;
  getReusableDelegationSet(
    input: GetReusableDelegationSetRequest,
  ): Effect.Effect<
    GetReusableDelegationSetResponse,
    | DelegationSetNotReusable
    | InvalidInput
    | NoSuchDelegationSet
    | CommonAwsError
  >;
  getReusableDelegationSetLimit(
    input: GetReusableDelegationSetLimitRequest,
  ): Effect.Effect<
    GetReusableDelegationSetLimitResponse,
    InvalidInput | NoSuchDelegationSet | CommonAwsError
  >;
  getTrafficPolicy(
    input: GetTrafficPolicyRequest,
  ): Effect.Effect<
    GetTrafficPolicyResponse,
    InvalidInput | NoSuchTrafficPolicy | CommonAwsError
  >;
  getTrafficPolicyInstance(
    input: GetTrafficPolicyInstanceRequest,
  ): Effect.Effect<
    GetTrafficPolicyInstanceResponse,
    InvalidInput | NoSuchTrafficPolicyInstance | CommonAwsError
  >;
  getTrafficPolicyInstanceCount(
    input: GetTrafficPolicyInstanceCountRequest,
  ): Effect.Effect<GetTrafficPolicyInstanceCountResponse, CommonAwsError>;
  listCidrBlocks(
    input: ListCidrBlocksRequest,
  ): Effect.Effect<
    ListCidrBlocksResponse,
    | InvalidInput
    | NoSuchCidrCollectionException
    | NoSuchCidrLocationException
    | CommonAwsError
  >;
  listCidrCollections(
    input: ListCidrCollectionsRequest,
  ): Effect.Effect<ListCidrCollectionsResponse, InvalidInput | CommonAwsError>;
  listCidrLocations(
    input: ListCidrLocationsRequest,
  ): Effect.Effect<
    ListCidrLocationsResponse,
    InvalidInput | NoSuchCidrCollectionException | CommonAwsError
  >;
  listGeoLocations(
    input: ListGeoLocationsRequest,
  ): Effect.Effect<ListGeoLocationsResponse, InvalidInput | CommonAwsError>;
  listHealthChecks(
    input: ListHealthChecksRequest,
  ): Effect.Effect<
    ListHealthChecksResponse,
    IncompatibleVersion | InvalidInput | CommonAwsError
  >;
  listHostedZones(
    input: ListHostedZonesRequest,
  ): Effect.Effect<
    ListHostedZonesResponse,
    | DelegationSetNotReusable
    | InvalidInput
    | NoSuchDelegationSet
    | CommonAwsError
  >;
  listHostedZonesByName(
    input: ListHostedZonesByNameRequest,
  ): Effect.Effect<
    ListHostedZonesByNameResponse,
    InvalidDomainName | InvalidInput | CommonAwsError
  >;
  listHostedZonesByVPC(
    input: ListHostedZonesByVPCRequest,
  ): Effect.Effect<
    ListHostedZonesByVPCResponse,
    InvalidInput | InvalidPaginationToken | CommonAwsError
  >;
  listQueryLoggingConfigs(
    input: ListQueryLoggingConfigsRequest,
  ): Effect.Effect<
    ListQueryLoggingConfigsResponse,
    InvalidInput | InvalidPaginationToken | NoSuchHostedZone | CommonAwsError
  >;
  listResourceRecordSets(
    input: ListResourceRecordSetsRequest,
  ): Effect.Effect<
    ListResourceRecordSetsResponse,
    InvalidInput | NoSuchHostedZone | CommonAwsError
  >;
  listReusableDelegationSets(
    input: ListReusableDelegationSetsRequest,
  ): Effect.Effect<
    ListReusableDelegationSetsResponse,
    InvalidInput | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidInput
    | NoSuchHealthCheck
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResources(
    input: ListTagsForResourcesRequest,
  ): Effect.Effect<
    ListTagsForResourcesResponse,
    | InvalidInput
    | NoSuchHealthCheck
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | ThrottlingException
    | CommonAwsError
  >;
  listTrafficPolicies(
    input: ListTrafficPoliciesRequest,
  ): Effect.Effect<ListTrafficPoliciesResponse, InvalidInput | CommonAwsError>;
  listTrafficPolicyInstances(
    input: ListTrafficPolicyInstancesRequest,
  ): Effect.Effect<
    ListTrafficPolicyInstancesResponse,
    InvalidInput | NoSuchTrafficPolicyInstance | CommonAwsError
  >;
  listTrafficPolicyInstancesByHostedZone(
    input: ListTrafficPolicyInstancesByHostedZoneRequest,
  ): Effect.Effect<
    ListTrafficPolicyInstancesByHostedZoneResponse,
    | InvalidInput
    | NoSuchHostedZone
    | NoSuchTrafficPolicyInstance
    | CommonAwsError
  >;
  listTrafficPolicyInstancesByPolicy(
    input: ListTrafficPolicyInstancesByPolicyRequest,
  ): Effect.Effect<
    ListTrafficPolicyInstancesByPolicyResponse,
    | InvalidInput
    | NoSuchTrafficPolicy
    | NoSuchTrafficPolicyInstance
    | CommonAwsError
  >;
  listTrafficPolicyVersions(
    input: ListTrafficPolicyVersionsRequest,
  ): Effect.Effect<
    ListTrafficPolicyVersionsResponse,
    InvalidInput | NoSuchTrafficPolicy | CommonAwsError
  >;
  listVPCAssociationAuthorizations(
    input: ListVPCAssociationAuthorizationsRequest,
  ): Effect.Effect<
    ListVPCAssociationAuthorizationsResponse,
    InvalidInput | InvalidPaginationToken | NoSuchHostedZone | CommonAwsError
  >;
  testDNSAnswer(
    input: TestDNSAnswerRequest,
  ): Effect.Effect<
    TestDNSAnswerResponse,
    InvalidInput | NoSuchHostedZone | CommonAwsError
  >;
  updateHealthCheck(
    input: UpdateHealthCheckRequest,
  ): Effect.Effect<
    UpdateHealthCheckResponse,
    | HealthCheckVersionMismatch
    | InvalidInput
    | NoSuchHealthCheck
    | CommonAwsError
  >;
  updateHostedZoneComment(
    input: UpdateHostedZoneCommentRequest,
  ): Effect.Effect<
    UpdateHostedZoneCommentResponse,
    InvalidInput | NoSuchHostedZone | PriorRequestNotComplete | CommonAwsError
  >;
  updateTrafficPolicyComment(
    input: UpdateTrafficPolicyCommentRequest,
  ): Effect.Effect<
    UpdateTrafficPolicyCommentResponse,
    ConcurrentModification | InvalidInput | NoSuchTrafficPolicy | CommonAwsError
  >;
  updateTrafficPolicyInstance(
    input: UpdateTrafficPolicyInstanceRequest,
  ): Effect.Effect<
    UpdateTrafficPolicyInstanceResponse,
    | ConflictingTypes
    | InvalidInput
    | NoSuchTrafficPolicy
    | NoSuchTrafficPolicyInstance
    | PriorRequestNotComplete
    | CommonAwsError
  >;
}

export interface AccountLimit {
  Type: AccountLimitType;
  Value: number;
}
export type AccountLimitType =
  | "MAX_HEALTH_CHECKS_BY_OWNER"
  | "MAX_HOSTED_ZONES_BY_OWNER"
  | "MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER"
  | "MAX_REUSABLE_DELEGATION_SETS_BY_OWNER"
  | "MAX_TRAFFIC_POLICIES_BY_OWNER";
export interface ActivateKeySigningKeyRequest {
  HostedZoneId: string;
  Name: string;
}
export interface ActivateKeySigningKeyResponse {
  ChangeInfo: ChangeInfo;
}
export interface AlarmIdentifier {
  Region: CloudWatchRegion;
  Name: string;
}
export type AlarmName = string;

export type AliasHealthEnabled = boolean;

export interface AliasTarget {
  HostedZoneId: string;
  DNSName: string;
  EvaluateTargetHealth: boolean;
}
export type ARN = string;

export type AssociateVPCComment = string;

export interface AssociateVPCWithHostedZoneRequest {
  HostedZoneId: string;
  VPC: VPC;
  Comment?: string;
}
export interface AssociateVPCWithHostedZoneResponse {
  ChangeInfo: ChangeInfo;
}
export type AWSAccountID = string;

export type AWSRegion = string;

export type Bias = number;

export interface Change {
  Action: ChangeAction;
  ResourceRecordSet: ResourceRecordSet;
}
export type ChangeAction = "CREATE" | "DELETE" | "UPSERT";
export interface ChangeBatch {
  Comment?: string;
  Changes: Array<Change>;
}
export interface ChangeCidrCollectionRequest {
  Id: string;
  CollectionVersion?: number;
  Changes: Array<CidrCollectionChange>;
}
export interface ChangeCidrCollectionResponse {
  Id: string;
}
export type ChangeId = string;

export interface ChangeInfo {
  Id: string;
  Status: ChangeStatus;
  SubmittedAt: Date | string;
  Comment?: string;
}
export interface ChangeResourceRecordSetsRequest {
  HostedZoneId: string;
  ChangeBatch: ChangeBatch;
}
export interface ChangeResourceRecordSetsResponse {
  ChangeInfo: ChangeInfo;
}
export type Changes = Array<Change>;
export type ChangeStatus = "PENDING" | "INSYNC";
export interface ChangeTagsForResourceRequest {
  ResourceType: TagResourceType;
  ResourceId: string;
  AddTags?: Array<Tag>;
  RemoveTagKeys?: Array<string>;
}
export interface ChangeTagsForResourceResponse {}
export type CheckerIpRanges = Array<string>;
export type ChildHealthCheckList = Array<string>;
export type Cidr = string;

export declare class CidrBlockInUseException extends EffectData.TaggedError(
  "CidrBlockInUseException",
)<{
  readonly Message?: string;
}> {}
export type CidrBlockSummaries = Array<CidrBlockSummary>;
export interface CidrBlockSummary {
  CidrBlock?: string;
  LocationName?: string;
}
export interface CidrCollection {
  Arn?: string;
  Id?: string;
  Name?: string;
  Version?: number;
}
export declare class CidrCollectionAlreadyExistsException extends EffectData.TaggedError(
  "CidrCollectionAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export interface CidrCollectionChange {
  LocationName: string;
  Action: CidrCollectionChangeAction;
  CidrList: Array<string>;
}
export type CidrCollectionChangeAction = "PUT" | "DELETE_IF_EXISTS";
export type CidrCollectionChanges = Array<CidrCollectionChange>;
export declare class CidrCollectionInUseException extends EffectData.TaggedError(
  "CidrCollectionInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class CidrCollectionVersionMismatchException extends EffectData.TaggedError(
  "CidrCollectionVersionMismatchException",
)<{
  readonly Message?: string;
}> {}
export type CidrList = Array<string>;
export type CidrLocationNameDefaultAllowed = string;

export type CidrLocationNameDefaultNotAllowed = string;

export type CidrNonce = string;

export interface CidrRoutingConfig {
  CollectionId: string;
  LocationName: string;
}
export interface CloudWatchAlarmConfiguration {
  EvaluationPeriods: number;
  Threshold: number;
  ComparisonOperator: ComparisonOperator;
  Period: number;
  MetricName: string;
  Namespace: string;
  Statistic: Statistic;
  Dimensions?: Array<Dimension>;
}
export type CloudWatchLogsLogGroupArn = string;

export type CloudWatchRegion =
  | "us_east_1"
  | "us_east_2"
  | "us_west_1"
  | "us_west_2"
  | "ca_central_1"
  | "eu_central_1"
  | "eu_central_2"
  | "eu_west_1"
  | "eu_west_2"
  | "eu_west_3"
  | "ap_east_1"
  | "me_south_1"
  | "me_central_1"
  | "ap_south_1"
  | "ap_south_2"
  | "ap_southeast_1"
  | "ap_southeast_2"
  | "ap_southeast_3"
  | "ap_northeast_1"
  | "ap_northeast_2"
  | "ap_northeast_3"
  | "eu_north_1"
  | "sa_east_1"
  | "cn_northwest_1"
  | "cn_north_1"
  | "af_south_1"
  | "eu_south_1"
  | "eu_south_2"
  | "us_gov_west_1"
  | "us_gov_east_1"
  | "us_iso_east_1"
  | "us_iso_west_1"
  | "us_isob_east_1"
  | "ap_southeast_4"
  | "il_central_1"
  | "ca_west_1"
  | "ap_southeast_5"
  | "mx_central_1"
  | "us_isof_south_1"
  | "us_isof_east_1"
  | "ap_southeast_7"
  | "ap_east_2"
  | "eu_isoe_west_1";
export type CollectionName = string;

export type CollectionSummaries = Array<CollectionSummary>;
export interface CollectionSummary {
  Arn?: string;
  Id?: string;
  Name?: string;
  Version?: number;
}
export type CollectionVersion = number;

export type ComparisonOperator =
  | "GreaterThanOrEqualToThreshold"
  | "GreaterThanThreshold"
  | "LessThanThreshold"
  | "LessThanOrEqualToThreshold";
export declare class ConcurrentModification extends EffectData.TaggedError(
  "ConcurrentModification",
)<{
  readonly message?: string;
}> {}
export declare class ConflictingDomainExists extends EffectData.TaggedError(
  "ConflictingDomainExists",
)<{
  readonly message?: string;
}> {}
export declare class ConflictingTypes extends EffectData.TaggedError(
  "ConflictingTypes",
)<{
  readonly message?: string;
}> {}
export interface Coordinates {
  Latitude: string;
  Longitude: string;
}
export interface CreateCidrCollectionRequest {
  Name: string;
  CallerReference: string;
}
export interface CreateCidrCollectionResponse {
  Collection?: CidrCollection;
  Location?: string;
}
export interface CreateHealthCheckRequest {
  CallerReference: string;
  HealthCheckConfig: HealthCheckConfig;
}
export interface CreateHealthCheckResponse {
  HealthCheck: HealthCheck;
  Location: string;
}
export interface CreateHostedZoneRequest {
  Name: string;
  VPC?: VPC;
  CallerReference: string;
  HostedZoneConfig?: HostedZoneConfig;
  DelegationSetId?: string;
}
export interface CreateHostedZoneResponse {
  HostedZone: HostedZone;
  ChangeInfo: ChangeInfo;
  DelegationSet: DelegationSet;
  VPC?: VPC;
  Location: string;
}
export interface CreateKeySigningKeyRequest {
  CallerReference: string;
  HostedZoneId: string;
  KeyManagementServiceArn: string;
  Name: string;
  Status: string;
}
export interface CreateKeySigningKeyResponse {
  ChangeInfo: ChangeInfo;
  KeySigningKey: KeySigningKey;
  Location: string;
}
export interface CreateQueryLoggingConfigRequest {
  HostedZoneId: string;
  CloudWatchLogsLogGroupArn: string;
}
export interface CreateQueryLoggingConfigResponse {
  QueryLoggingConfig: QueryLoggingConfig;
  Location: string;
}
export interface CreateReusableDelegationSetRequest {
  CallerReference: string;
  HostedZoneId?: string;
}
export interface CreateReusableDelegationSetResponse {
  DelegationSet: DelegationSet;
  Location: string;
}
export interface CreateTrafficPolicyInstanceRequest {
  HostedZoneId: string;
  Name: string;
  TTL: number;
  TrafficPolicyId: string;
  TrafficPolicyVersion: number;
}
export interface CreateTrafficPolicyInstanceResponse {
  TrafficPolicyInstance: TrafficPolicyInstance;
  Location: string;
}
export interface CreateTrafficPolicyRequest {
  Name: string;
  Document: string;
  Comment?: string;
}
export interface CreateTrafficPolicyResponse {
  TrafficPolicy: TrafficPolicy;
  Location: string;
}
export interface CreateTrafficPolicyVersionRequest {
  Id: string;
  Document: string;
  Comment?: string;
}
export interface CreateTrafficPolicyVersionResponse {
  TrafficPolicy: TrafficPolicy;
  Location: string;
}
export interface CreateVPCAssociationAuthorizationRequest {
  HostedZoneId: string;
  VPC: VPC;
}
export interface CreateVPCAssociationAuthorizationResponse {
  HostedZoneId: string;
  VPC: VPC;
}
export interface DeactivateKeySigningKeyRequest {
  HostedZoneId: string;
  Name: string;
}
export interface DeactivateKeySigningKeyResponse {
  ChangeInfo: ChangeInfo;
}
export interface DelegationSet {
  Id?: string;
  CallerReference?: string;
  NameServers: Array<string>;
}
export declare class DelegationSetAlreadyCreated extends EffectData.TaggedError(
  "DelegationSetAlreadyCreated",
)<{
  readonly message?: string;
}> {}
export declare class DelegationSetAlreadyReusable extends EffectData.TaggedError(
  "DelegationSetAlreadyReusable",
)<{
  readonly message?: string;
}> {}
export declare class DelegationSetInUse extends EffectData.TaggedError(
  "DelegationSetInUse",
)<{
  readonly message?: string;
}> {}
export type DelegationSetNameServers = Array<string>;
export declare class DelegationSetNotAvailable extends EffectData.TaggedError(
  "DelegationSetNotAvailable",
)<{
  readonly message?: string;
}> {}
export declare class DelegationSetNotReusable extends EffectData.TaggedError(
  "DelegationSetNotReusable",
)<{
  readonly message?: string;
}> {}
export type DelegationSets = Array<DelegationSet>;
export interface DeleteCidrCollectionRequest {
  Id: string;
}
export interface DeleteCidrCollectionResponse {}
export interface DeleteHealthCheckRequest {
  HealthCheckId: string;
}
export interface DeleteHealthCheckResponse {}
export interface DeleteHostedZoneRequest {
  Id: string;
}
export interface DeleteHostedZoneResponse {
  ChangeInfo: ChangeInfo;
}
export interface DeleteKeySigningKeyRequest {
  HostedZoneId: string;
  Name: string;
}
export interface DeleteKeySigningKeyResponse {
  ChangeInfo: ChangeInfo;
}
export interface DeleteQueryLoggingConfigRequest {
  Id: string;
}
export interface DeleteQueryLoggingConfigResponse {}
export interface DeleteReusableDelegationSetRequest {
  Id: string;
}
export interface DeleteReusableDelegationSetResponse {}
export interface DeleteTrafficPolicyInstanceRequest {
  Id: string;
}
export interface DeleteTrafficPolicyInstanceResponse {}
export interface DeleteTrafficPolicyRequest {
  Id: string;
  Version: number;
}
export interface DeleteTrafficPolicyResponse {}
export interface DeleteVPCAssociationAuthorizationRequest {
  HostedZoneId: string;
  VPC: VPC;
}
export interface DeleteVPCAssociationAuthorizationResponse {}
export interface Dimension {
  Name: string;
  Value: string;
}
export type DimensionField = string;

export type DimensionList = Array<Dimension>;
export type Disabled = boolean;

export interface DisableHostedZoneDNSSECRequest {
  HostedZoneId: string;
}
export interface DisableHostedZoneDNSSECResponse {
  ChangeInfo: ChangeInfo;
}
export type DisassociateVPCComment = string;

export interface DisassociateVPCFromHostedZoneRequest {
  HostedZoneId: string;
  VPC: VPC;
  Comment?: string;
}
export interface DisassociateVPCFromHostedZoneResponse {
  ChangeInfo: ChangeInfo;
}
export type DNSName = string;

export type DNSRCode = string;

export declare class DNSSECNotFound extends EffectData.TaggedError(
  "DNSSECNotFound",
)<{
  readonly message?: string;
}> {}
export interface DNSSECStatus {
  ServeSignature?: string;
  StatusMessage?: string;
}
export interface EnableHostedZoneDNSSECRequest {
  HostedZoneId: string;
}
export interface EnableHostedZoneDNSSECResponse {
  ChangeInfo: ChangeInfo;
}
export type EnableSNI = boolean;

export type ErrorMessage = string;

export type ErrorMessages = Array<string>;
export type EvaluationPeriods = number;

export type FailureThreshold = number;

export type FullyQualifiedDomainName = string;

export interface GeoLocation {
  ContinentCode?: string;
  CountryCode?: string;
  SubdivisionCode?: string;
}
export type GeoLocationContinentCode = string;

export type GeoLocationContinentName = string;

export type GeoLocationCountryCode = string;

export type GeoLocationCountryName = string;

export interface GeoLocationDetails {
  ContinentCode?: string;
  ContinentName?: string;
  CountryCode?: string;
  CountryName?: string;
  SubdivisionCode?: string;
  SubdivisionName?: string;
}
export type GeoLocationDetailsList = Array<GeoLocationDetails>;
export type GeoLocationSubdivisionCode = string;

export type GeoLocationSubdivisionName = string;

export interface GeoProximityLocation {
  AWSRegion?: string;
  LocalZoneGroup?: string;
  Coordinates?: Coordinates;
  Bias?: number;
}
export interface GetAccountLimitRequest {
  Type: AccountLimitType;
}
export interface GetAccountLimitResponse {
  Limit: AccountLimit;
  Count: number;
}
export interface GetChangeRequest {
  Id: string;
}
export interface GetChangeResponse {
  ChangeInfo: ChangeInfo;
}
export interface GetCheckerIpRangesRequest {}
export interface GetCheckerIpRangesResponse {
  CheckerIpRanges: Array<string>;
}
export interface GetDNSSECRequest {
  HostedZoneId: string;
}
export interface GetDNSSECResponse {
  Status: DNSSECStatus;
  KeySigningKeys: Array<KeySigningKey>;
}
export interface GetGeoLocationRequest {
  ContinentCode?: string;
  CountryCode?: string;
  SubdivisionCode?: string;
}
export interface GetGeoLocationResponse {
  GeoLocationDetails: GeoLocationDetails;
}
export interface GetHealthCheckCountRequest {}
export interface GetHealthCheckCountResponse {
  HealthCheckCount: number;
}
export interface GetHealthCheckLastFailureReasonRequest {
  HealthCheckId: string;
}
export interface GetHealthCheckLastFailureReasonResponse {
  HealthCheckObservations: Array<HealthCheckObservation>;
}
export interface GetHealthCheckRequest {
  HealthCheckId: string;
}
export interface GetHealthCheckResponse {
  HealthCheck: HealthCheck;
}
export interface GetHealthCheckStatusRequest {
  HealthCheckId: string;
}
export interface GetHealthCheckStatusResponse {
  HealthCheckObservations: Array<HealthCheckObservation>;
}
export interface GetHostedZoneCountRequest {}
export interface GetHostedZoneCountResponse {
  HostedZoneCount: number;
}
export interface GetHostedZoneLimitRequest {
  Type: HostedZoneLimitType;
  HostedZoneId: string;
}
export interface GetHostedZoneLimitResponse {
  Limit: HostedZoneLimit;
  Count: number;
}
export interface GetHostedZoneRequest {
  Id: string;
}
export interface GetHostedZoneResponse {
  HostedZone: HostedZone;
  DelegationSet?: DelegationSet;
  VPCs?: Array<VPC>;
}
export interface GetQueryLoggingConfigRequest {
  Id: string;
}
export interface GetQueryLoggingConfigResponse {
  QueryLoggingConfig: QueryLoggingConfig;
}
export interface GetReusableDelegationSetLimitRequest {
  Type: ReusableDelegationSetLimitType;
  DelegationSetId: string;
}
export interface GetReusableDelegationSetLimitResponse {
  Limit: ReusableDelegationSetLimit;
  Count: number;
}
export interface GetReusableDelegationSetRequest {
  Id: string;
}
export interface GetReusableDelegationSetResponse {
  DelegationSet: DelegationSet;
}
export interface GetTrafficPolicyInstanceCountRequest {}
export interface GetTrafficPolicyInstanceCountResponse {
  TrafficPolicyInstanceCount: number;
}
export interface GetTrafficPolicyInstanceRequest {
  Id: string;
}
export interface GetTrafficPolicyInstanceResponse {
  TrafficPolicyInstance: TrafficPolicyInstance;
}
export interface GetTrafficPolicyRequest {
  Id: string;
  Version: number;
}
export interface GetTrafficPolicyResponse {
  TrafficPolicy: TrafficPolicy;
}
export interface HealthCheck {
  Id: string;
  CallerReference: string;
  LinkedService?: LinkedService;
  HealthCheckConfig: HealthCheckConfig;
  HealthCheckVersion: number;
  CloudWatchAlarmConfiguration?: CloudWatchAlarmConfiguration;
}
export declare class HealthCheckAlreadyExists extends EffectData.TaggedError(
  "HealthCheckAlreadyExists",
)<{
  readonly message?: string;
}> {}
export interface HealthCheckConfig {
  IPAddress?: string;
  Port?: number;
  Type: HealthCheckType;
  ResourcePath?: string;
  FullyQualifiedDomainName?: string;
  SearchString?: string;
  RequestInterval?: number;
  FailureThreshold?: number;
  MeasureLatency?: boolean;
  Inverted?: boolean;
  Disabled?: boolean;
  HealthThreshold?: number;
  ChildHealthChecks?: Array<string>;
  EnableSNI?: boolean;
  Regions?: Array<HealthCheckRegion>;
  AlarmIdentifier?: AlarmIdentifier;
  InsufficientDataHealthStatus?: InsufficientDataHealthStatus;
  RoutingControlArn?: string;
}
export type HealthCheckCount = number;

export type HealthCheckId = string;

export declare class HealthCheckInUse extends EffectData.TaggedError(
  "HealthCheckInUse",
)<{
  readonly message?: string;
}> {}
export type HealthCheckNonce = string;

export interface HealthCheckObservation {
  Region?: HealthCheckRegion;
  IPAddress?: string;
  StatusReport?: StatusReport;
}
export type HealthCheckObservations = Array<HealthCheckObservation>;
export type HealthCheckRegion =
  | "us_east_1"
  | "us_west_1"
  | "us_west_2"
  | "eu_west_1"
  | "ap_southeast_1"
  | "ap_southeast_2"
  | "ap_northeast_1"
  | "sa_east_1";
export type HealthCheckRegionList = Array<HealthCheckRegion>;
export type HealthChecks = Array<HealthCheck>;
export type HealthCheckType =
  | "HTTP"
  | "HTTPS"
  | "HTTP_STR_MATCH"
  | "HTTPS_STR_MATCH"
  | "TCP"
  | "CALCULATED"
  | "CLOUDWATCH_METRIC"
  | "RECOVERY_CONTROL";
export type HealthCheckVersion = number;

export declare class HealthCheckVersionMismatch extends EffectData.TaggedError(
  "HealthCheckVersionMismatch",
)<{
  readonly message?: string;
}> {}
export type HealthThreshold = number;

export interface HostedZone {
  Id: string;
  Name: string;
  CallerReference: string;
  Config?: HostedZoneConfig;
  ResourceRecordSetCount?: number;
  LinkedService?: LinkedService;
}
export declare class HostedZoneAlreadyExists extends EffectData.TaggedError(
  "HostedZoneAlreadyExists",
)<{
  readonly message?: string;
}> {}
export interface HostedZoneConfig {
  Comment?: string;
  PrivateZone?: boolean;
}
export type HostedZoneCount = number;

export interface HostedZoneLimit {
  Type: HostedZoneLimitType;
  Value: number;
}
export type HostedZoneLimitType =
  | "MAX_RRSETS_BY_ZONE"
  | "MAX_VPCS_ASSOCIATED_BY_ZONE";
export declare class HostedZoneNotEmpty extends EffectData.TaggedError(
  "HostedZoneNotEmpty",
)<{
  readonly message?: string;
}> {}
export declare class HostedZoneNotFound extends EffectData.TaggedError(
  "HostedZoneNotFound",
)<{
  readonly message?: string;
}> {}
export declare class HostedZoneNotPrivate extends EffectData.TaggedError(
  "HostedZoneNotPrivate",
)<{
  readonly message?: string;
}> {}
export interface HostedZoneOwner {
  OwningAccount?: string;
  OwningService?: string;
}
export type HostedZoneOwningService = string;

export declare class HostedZonePartiallyDelegated extends EffectData.TaggedError(
  "HostedZonePartiallyDelegated",
)<{
  readonly message?: string;
}> {}
export type HostedZoneRRSetCount = number;

export type HostedZones = Array<HostedZone>;
export type HostedZoneSummaries = Array<HostedZoneSummary>;
export interface HostedZoneSummary {
  HostedZoneId: string;
  Name: string;
  Owner: HostedZoneOwner;
}
export type HostedZoneType = "PRIVATE_HOSTED_ZONE";
export declare class IncompatibleVersion extends EffectData.TaggedError(
  "IncompatibleVersion",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientCloudWatchLogsResourcePolicy extends EffectData.TaggedError(
  "InsufficientCloudWatchLogsResourcePolicy",
)<{
  readonly message?: string;
}> {}
export type InsufficientDataHealthStatus =
  | "Healthy"
  | "Unhealthy"
  | "LastKnownStatus";
export declare class InvalidArgument extends EffectData.TaggedError(
  "InvalidArgument",
)<{
  readonly message?: string;
}> {}
export declare class InvalidChangeBatch extends EffectData.TaggedError(
  "InvalidChangeBatch",
)<{
  readonly messages?: Array<string>;
  readonly message?: string;
}> {}
export declare class InvalidDomainName extends EffectData.TaggedError(
  "InvalidDomainName",
)<{
  readonly message?: string;
}> {}
export declare class InvalidInput extends EffectData.TaggedError(
  "InvalidInput",
)<{
  readonly message?: string;
}> {}
export declare class InvalidKeySigningKeyName extends EffectData.TaggedError(
  "InvalidKeySigningKeyName",
)<{
  readonly message?: string;
}> {}
export declare class InvalidKeySigningKeyStatus extends EffectData.TaggedError(
  "InvalidKeySigningKeyStatus",
)<{
  readonly message?: string;
}> {}
export declare class InvalidKMSArn extends EffectData.TaggedError(
  "InvalidKMSArn",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPaginationToken extends EffectData.TaggedError(
  "InvalidPaginationToken",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSigningStatus extends EffectData.TaggedError(
  "InvalidSigningStatus",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTrafficPolicyDocument extends EffectData.TaggedError(
  "InvalidTrafficPolicyDocument",
)<{
  readonly message?: string;
}> {}
export declare class InvalidVPCId extends EffectData.TaggedError(
  "InvalidVPCId",
)<{
  readonly message?: string;
}> {}
export type Inverted = boolean;

export type IPAddress = string;

export type IPAddressCidr = string;

export type IsPrivateZone = boolean;

export interface KeySigningKey {
  Name?: string;
  KmsArn?: string;
  Flag?: number;
  SigningAlgorithmMnemonic?: string;
  SigningAlgorithmType?: number;
  DigestAlgorithmMnemonic?: string;
  DigestAlgorithmType?: number;
  KeyTag?: number;
  DigestValue?: string;
  PublicKey?: string;
  DSRecord?: string;
  DNSKEYRecord?: string;
  Status?: string;
  StatusMessage?: string;
  CreatedDate?: Date | string;
  LastModifiedDate?: Date | string;
}
export declare class KeySigningKeyAlreadyExists extends EffectData.TaggedError(
  "KeySigningKeyAlreadyExists",
)<{
  readonly message?: string;
}> {}
export declare class KeySigningKeyInParentDSRecord extends EffectData.TaggedError(
  "KeySigningKeyInParentDSRecord",
)<{
  readonly message?: string;
}> {}
export declare class KeySigningKeyInUse extends EffectData.TaggedError(
  "KeySigningKeyInUse",
)<{
  readonly message?: string;
}> {}
export type KeySigningKeys = Array<KeySigningKey>;
export declare class KeySigningKeyWithActiveStatusNotFound extends EffectData.TaggedError(
  "KeySigningKeyWithActiveStatusNotFound",
)<{
  readonly message?: string;
}> {}
export declare class LastVPCAssociation extends EffectData.TaggedError(
  "LastVPCAssociation",
)<{
  readonly message?: string;
}> {}
export type Latitude = string;

export declare class LimitsExceeded extends EffectData.TaggedError(
  "LimitsExceeded",
)<{
  readonly message?: string;
}> {}
export type LimitValue = number;

export interface LinkedService {
  ServicePrincipal?: string;
  Description?: string;
}
export interface ListCidrBlocksRequest {
  CollectionId: string;
  LocationName?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCidrBlocksResponse {
  NextToken?: string;
  CidrBlocks?: Array<CidrBlockSummary>;
}
export interface ListCidrCollectionsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCidrCollectionsResponse {
  NextToken?: string;
  CidrCollections?: Array<CollectionSummary>;
}
export interface ListCidrLocationsRequest {
  CollectionId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCidrLocationsResponse {
  NextToken?: string;
  CidrLocations?: Array<LocationSummary>;
}
export interface ListGeoLocationsRequest {
  StartContinentCode?: string;
  StartCountryCode?: string;
  StartSubdivisionCode?: string;
  MaxItems?: number;
}
export interface ListGeoLocationsResponse {
  GeoLocationDetailsList: Array<GeoLocationDetails>;
  IsTruncated: boolean;
  NextContinentCode?: string;
  NextCountryCode?: string;
  NextSubdivisionCode?: string;
  MaxItems: number;
}
export interface ListHealthChecksRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListHealthChecksResponse {
  HealthChecks: Array<HealthCheck>;
  Marker: string;
  IsTruncated: boolean;
  NextMarker?: string;
  MaxItems: number;
}
export interface ListHostedZonesByNameRequest {
  DNSName?: string;
  HostedZoneId?: string;
  MaxItems?: number;
}
export interface ListHostedZonesByNameResponse {
  HostedZones: Array<HostedZone>;
  DNSName?: string;
  HostedZoneId?: string;
  IsTruncated: boolean;
  NextDNSName?: string;
  NextHostedZoneId?: string;
  MaxItems: number;
}
export interface ListHostedZonesByVPCRequest {
  VPCId: string;
  VPCRegion: VPCRegion;
  MaxItems?: number;
  NextToken?: string;
}
export interface ListHostedZonesByVPCResponse {
  HostedZoneSummaries: Array<HostedZoneSummary>;
  MaxItems: number;
  NextToken?: string;
}
export interface ListHostedZonesRequest {
  Marker?: string;
  MaxItems?: number;
  DelegationSetId?: string;
  HostedZoneType?: HostedZoneType;
}
export interface ListHostedZonesResponse {
  HostedZones: Array<HostedZone>;
  Marker: string;
  IsTruncated: boolean;
  NextMarker?: string;
  MaxItems: number;
}
export interface ListQueryLoggingConfigsRequest {
  HostedZoneId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListQueryLoggingConfigsResponse {
  QueryLoggingConfigs: Array<QueryLoggingConfig>;
  NextToken?: string;
}
export interface ListResourceRecordSetsRequest {
  HostedZoneId: string;
  StartRecordName?: string;
  StartRecordType?: RRType;
  StartRecordIdentifier?: string;
  MaxItems?: number;
}
export interface ListResourceRecordSetsResponse {
  ResourceRecordSets: Array<ResourceRecordSet>;
  IsTruncated: boolean;
  NextRecordName?: string;
  NextRecordType?: RRType;
  NextRecordIdentifier?: string;
  MaxItems: number;
}
export interface ListReusableDelegationSetsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListReusableDelegationSetsResponse {
  DelegationSets: Array<DelegationSet>;
  Marker: string;
  IsTruncated: boolean;
  NextMarker?: string;
  MaxItems: number;
}
export interface ListTagsForResourceRequest {
  ResourceType: TagResourceType;
  ResourceId: string;
}
export interface ListTagsForResourceResponse {
  ResourceTagSet: ResourceTagSet;
}
export interface ListTagsForResourcesRequest {
  ResourceType: TagResourceType;
  ResourceIds: Array<string>;
}
export interface ListTagsForResourcesResponse {
  ResourceTagSets: Array<ResourceTagSet>;
}
export interface ListTrafficPoliciesRequest {
  TrafficPolicyIdMarker?: string;
  MaxItems?: number;
}
export interface ListTrafficPoliciesResponse {
  TrafficPolicySummaries: Array<TrafficPolicySummary>;
  IsTruncated: boolean;
  TrafficPolicyIdMarker: string;
  MaxItems: number;
}
export interface ListTrafficPolicyInstancesByHostedZoneRequest {
  HostedZoneId: string;
  TrafficPolicyInstanceNameMarker?: string;
  TrafficPolicyInstanceTypeMarker?: RRType;
  MaxItems?: number;
}
export interface ListTrafficPolicyInstancesByHostedZoneResponse {
  TrafficPolicyInstances: Array<TrafficPolicyInstance>;
  TrafficPolicyInstanceNameMarker?: string;
  TrafficPolicyInstanceTypeMarker?: RRType;
  IsTruncated: boolean;
  MaxItems: number;
}
export interface ListTrafficPolicyInstancesByPolicyRequest {
  TrafficPolicyId: string;
  TrafficPolicyVersion: number;
  HostedZoneIdMarker?: string;
  TrafficPolicyInstanceNameMarker?: string;
  TrafficPolicyInstanceTypeMarker?: RRType;
  MaxItems?: number;
}
export interface ListTrafficPolicyInstancesByPolicyResponse {
  TrafficPolicyInstances: Array<TrafficPolicyInstance>;
  HostedZoneIdMarker?: string;
  TrafficPolicyInstanceNameMarker?: string;
  TrafficPolicyInstanceTypeMarker?: RRType;
  IsTruncated: boolean;
  MaxItems: number;
}
export interface ListTrafficPolicyInstancesRequest {
  HostedZoneIdMarker?: string;
  TrafficPolicyInstanceNameMarker?: string;
  TrafficPolicyInstanceTypeMarker?: RRType;
  MaxItems?: number;
}
export interface ListTrafficPolicyInstancesResponse {
  TrafficPolicyInstances: Array<TrafficPolicyInstance>;
  HostedZoneIdMarker?: string;
  TrafficPolicyInstanceNameMarker?: string;
  TrafficPolicyInstanceTypeMarker?: RRType;
  IsTruncated: boolean;
  MaxItems: number;
}
export interface ListTrafficPolicyVersionsRequest {
  Id: string;
  TrafficPolicyVersionMarker?: string;
  MaxItems?: number;
}
export interface ListTrafficPolicyVersionsResponse {
  TrafficPolicies: Array<TrafficPolicy>;
  IsTruncated: boolean;
  TrafficPolicyVersionMarker: string;
  MaxItems: number;
}
export interface ListVPCAssociationAuthorizationsRequest {
  HostedZoneId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListVPCAssociationAuthorizationsResponse {
  HostedZoneId: string;
  NextToken?: string;
  VPCs: Array<VPC>;
}
export type LocalZoneGroup = string;

export type LocationSummaries = Array<LocationSummary>;
export interface LocationSummary {
  LocationName?: string;
}
export type Longitude = string;

export type MeasureLatency = boolean;

export type Message = string;

export type MetricName = string;

export type Nameserver = string;

export type Namespace = string;

export type Nonce = string;

export declare class NoSuchChange extends EffectData.TaggedError(
  "NoSuchChange",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchCidrCollectionException extends EffectData.TaggedError(
  "NoSuchCidrCollectionException",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchCidrLocationException extends EffectData.TaggedError(
  "NoSuchCidrLocationException",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchCloudWatchLogsLogGroup extends EffectData.TaggedError(
  "NoSuchCloudWatchLogsLogGroup",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchDelegationSet extends EffectData.TaggedError(
  "NoSuchDelegationSet",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchGeoLocation extends EffectData.TaggedError(
  "NoSuchGeoLocation",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchHealthCheck extends EffectData.TaggedError(
  "NoSuchHealthCheck",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchHostedZone extends EffectData.TaggedError(
  "NoSuchHostedZone",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchKeySigningKey extends EffectData.TaggedError(
  "NoSuchKeySigningKey",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchQueryLoggingConfig extends EffectData.TaggedError(
  "NoSuchQueryLoggingConfig",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchTrafficPolicy extends EffectData.TaggedError(
  "NoSuchTrafficPolicy",
)<{
  readonly message?: string;
}> {}
export declare class NoSuchTrafficPolicyInstance extends EffectData.TaggedError(
  "NoSuchTrafficPolicyInstance",
)<{
  readonly message?: string;
}> {}
export declare class NotAuthorizedException extends EffectData.TaggedError(
  "NotAuthorizedException",
)<{
  readonly message?: string;
}> {}
export type PageMarker = string;

export type PageTruncated = boolean;

export type PaginationToken = string;

export type Period = number;

export type Port = number;

export declare class PriorRequestNotComplete extends EffectData.TaggedError(
  "PriorRequestNotComplete",
)<{
  readonly message?: string;
}> {}
export declare class PublicZoneVPCAssociation extends EffectData.TaggedError(
  "PublicZoneVPCAssociation",
)<{
  readonly message?: string;
}> {}
export interface QueryLoggingConfig {
  Id: string;
  HostedZoneId: string;
  CloudWatchLogsLogGroupArn: string;
}
export declare class QueryLoggingConfigAlreadyExists extends EffectData.TaggedError(
  "QueryLoggingConfigAlreadyExists",
)<{
  readonly message?: string;
}> {}
export type QueryLoggingConfigId = string;

export type QueryLoggingConfigs = Array<QueryLoggingConfig>;
export type RData = string;

export type RecordData = Array<string>;
export type RecordDataEntry = string;

export type RequestInterval = number;

export type ResettableElementName =
  | "FullyQualifiedDomainName"
  | "Regions"
  | "ResourcePath"
  | "ChildHealthChecks";
export type ResettableElementNameList = Array<ResettableElementName>;
export type ResourceDescription = string;

export type ResourceId = string;

export type ResourcePath = string;

export interface ResourceRecord {
  Value: string;
}
export type ResourceRecords = Array<ResourceRecord>;
export interface ResourceRecordSet {
  Name: string;
  Type: RRType;
  SetIdentifier?: string;
  Weight?: number;
  Region?: ResourceRecordSetRegion;
  GeoLocation?: GeoLocation;
  Failover?: ResourceRecordSetFailover;
  MultiValueAnswer?: boolean;
  TTL?: number;
  ResourceRecords?: Array<ResourceRecord>;
  AliasTarget?: AliasTarget;
  HealthCheckId?: string;
  TrafficPolicyInstanceId?: string;
  CidrRoutingConfig?: CidrRoutingConfig;
  GeoProximityLocation?: GeoProximityLocation;
}
export type ResourceRecordSetFailover = "PRIMARY" | "SECONDARY";
export type ResourceRecordSetIdentifier = string;

export type ResourceRecordSetMultiValueAnswer = boolean;

export type ResourceRecordSetRegion =
  | "us_east_1"
  | "us_east_2"
  | "us_west_1"
  | "us_west_2"
  | "ca_central_1"
  | "eu_west_1"
  | "eu_west_2"
  | "eu_west_3"
  | "eu_central_1"
  | "eu_central_2"
  | "ap_southeast_1"
  | "ap_southeast_2"
  | "ap_southeast_3"
  | "ap_northeast_1"
  | "ap_northeast_2"
  | "ap_northeast_3"
  | "eu_north_1"
  | "sa_east_1"
  | "cn_north_1"
  | "cn_northwest_1"
  | "ap_east_1"
  | "me_south_1"
  | "me_central_1"
  | "ap_south_1"
  | "ap_south_2"
  | "af_south_1"
  | "eu_south_1"
  | "eu_south_2"
  | "ap_southeast_4"
  | "il_central_1"
  | "ca_west_1"
  | "ap_southeast_5"
  | "mx_central_1"
  | "ap_southeast_7"
  | "us_gov_east_1"
  | "us_gov_west_1"
  | "ap_east_2";
export type ResourceRecordSets = Array<ResourceRecordSet>;
export type ResourceRecordSetWeight = number;

export interface ResourceTagSet {
  ResourceType?: TagResourceType;
  ResourceId?: string;
  Tags?: Array<Tag>;
}
export type ResourceTagSetList = Array<ResourceTagSet>;
export type ResourceURI = string;

export interface ReusableDelegationSetLimit {
  Type: ReusableDelegationSetLimitType;
  Value: number;
}
export type ReusableDelegationSetLimitType =
  "MAX_ZONES_BY_REUSABLE_DELEGATION_SET";
export type RoutingControlArn = string;

export type RRType =
  | "SOA"
  | "A"
  | "TXT"
  | "NS"
  | "CNAME"
  | "MX"
  | "NAPTR"
  | "PTR"
  | "SRV"
  | "SPF"
  | "AAAA"
  | "CAA"
  | "DS"
  | "TLSA"
  | "SSHFP"
  | "SVCB"
  | "HTTPS";
export type SearchString = string;

export type ServeSignature = string;

export type ServicePrincipal = string;

export type SigningKeyInteger = number;

export type SigningKeyName = string;

export type SigningKeyStatus = string;

export type SigningKeyStatusMessage = string;

export type SigningKeyString = string;

export type SigningKeyTag = number;

export type Statistic =
  | "Average"
  | "Sum"
  | "SampleCount"
  | "Maximum"
  | "Minimum";
export type Status = string;

export interface StatusReport {
  Status?: string;
  CheckedTime?: Date | string;
}
export type SubnetMask = string;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagResourceId = string;

export type TagResourceIdList = Array<string>;
export type TagResourceType = "healthcheck" | "hostedzone";
export type TagValue = string;

export interface TestDNSAnswerRequest {
  HostedZoneId: string;
  RecordName: string;
  RecordType: RRType;
  ResolverIP?: string;
  EDNS0ClientSubnetIP?: string;
  EDNS0ClientSubnetMask?: string;
}
export interface TestDNSAnswerResponse {
  Nameserver: string;
  RecordName: string;
  RecordType: RRType;
  RecordData: Array<string>;
  ResponseCode: string;
  Protocol: string;
}
export type Threshold = number;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TimeStamp = Date | string;

export declare class TooManyHealthChecks extends EffectData.TaggedError(
  "TooManyHealthChecks",
)<{
  readonly message?: string;
}> {}
export declare class TooManyHostedZones extends EffectData.TaggedError(
  "TooManyHostedZones",
)<{
  readonly message?: string;
}> {}
export declare class TooManyKeySigningKeys extends EffectData.TaggedError(
  "TooManyKeySigningKeys",
)<{
  readonly message?: string;
}> {}
export declare class TooManyTrafficPolicies extends EffectData.TaggedError(
  "TooManyTrafficPolicies",
)<{
  readonly message?: string;
}> {}
export declare class TooManyTrafficPolicyInstances extends EffectData.TaggedError(
  "TooManyTrafficPolicyInstances",
)<{
  readonly message?: string;
}> {}
export declare class TooManyTrafficPolicyVersionsForCurrentPolicy extends EffectData.TaggedError(
  "TooManyTrafficPolicyVersionsForCurrentPolicy",
)<{
  readonly message?: string;
}> {}
export declare class TooManyVPCAssociationAuthorizations extends EffectData.TaggedError(
  "TooManyVPCAssociationAuthorizations",
)<{
  readonly message?: string;
}> {}
export type TrafficPolicies = Array<TrafficPolicy>;
export interface TrafficPolicy {
  Id: string;
  Version: number;
  Name: string;
  Type: RRType;
  Document: string;
  Comment?: string;
}
export declare class TrafficPolicyAlreadyExists extends EffectData.TaggedError(
  "TrafficPolicyAlreadyExists",
)<{
  readonly message?: string;
}> {}
export type TrafficPolicyComment = string;

export type TrafficPolicyDocument = string;

export type TrafficPolicyId = string;

export interface TrafficPolicyInstance {
  Id: string;
  HostedZoneId: string;
  Name: string;
  TTL: number;
  State: string;
  Message: string;
  TrafficPolicyId: string;
  TrafficPolicyVersion: number;
  TrafficPolicyType: RRType;
}
export declare class TrafficPolicyInstanceAlreadyExists extends EffectData.TaggedError(
  "TrafficPolicyInstanceAlreadyExists",
)<{
  readonly message?: string;
}> {}
export type TrafficPolicyInstanceCount = number;

export type TrafficPolicyInstanceId = string;

export type TrafficPolicyInstances = Array<TrafficPolicyInstance>;
export type TrafficPolicyInstanceState = string;

export declare class TrafficPolicyInUse extends EffectData.TaggedError(
  "TrafficPolicyInUse",
)<{
  readonly message?: string;
}> {}
export type TrafficPolicyName = string;

export type TrafficPolicySummaries = Array<TrafficPolicySummary>;
export interface TrafficPolicySummary {
  Id: string;
  Name: string;
  Type: RRType;
  LatestVersion: number;
  TrafficPolicyCount: number;
}
export type TrafficPolicyVersion = number;

export type TrafficPolicyVersionMarker = string;

export type TransportProtocol = string;

export type TTL = number;

export interface UpdateHealthCheckRequest {
  HealthCheckId: string;
  HealthCheckVersion?: number;
  IPAddress?: string;
  Port?: number;
  ResourcePath?: string;
  FullyQualifiedDomainName?: string;
  SearchString?: string;
  FailureThreshold?: number;
  Inverted?: boolean;
  Disabled?: boolean;
  HealthThreshold?: number;
  ChildHealthChecks?: Array<string>;
  EnableSNI?: boolean;
  Regions?: Array<HealthCheckRegion>;
  AlarmIdentifier?: AlarmIdentifier;
  InsufficientDataHealthStatus?: InsufficientDataHealthStatus;
  ResetElements?: Array<ResettableElementName>;
}
export interface UpdateHealthCheckResponse {
  HealthCheck: HealthCheck;
}
export interface UpdateHostedZoneCommentRequest {
  Id: string;
  Comment?: string;
}
export interface UpdateHostedZoneCommentResponse {
  HostedZone: HostedZone;
}
export interface UpdateTrafficPolicyCommentRequest {
  Id: string;
  Version: number;
  Comment: string;
}
export interface UpdateTrafficPolicyCommentResponse {
  TrafficPolicy: TrafficPolicy;
}
export interface UpdateTrafficPolicyInstanceRequest {
  Id: string;
  TTL: number;
  TrafficPolicyId: string;
  TrafficPolicyVersion: number;
}
export interface UpdateTrafficPolicyInstanceResponse {
  TrafficPolicyInstance: TrafficPolicyInstance;
}
export type UsageCount = number;

export type UUID = string;

export interface VPC {
  VPCRegion?: VPCRegion;
  VPCId?: string;
}
export declare class VPCAssociationAuthorizationNotFound extends EffectData.TaggedError(
  "VPCAssociationAuthorizationNotFound",
)<{
  readonly message?: string;
}> {}
export declare class VPCAssociationNotFound extends EffectData.TaggedError(
  "VPCAssociationNotFound",
)<{
  readonly message?: string;
}> {}
export type VPCId = string;

export type VPCRegion =
  | "us_east_1"
  | "us_east_2"
  | "us_west_1"
  | "us_west_2"
  | "eu_west_1"
  | "eu_west_2"
  | "eu_west_3"
  | "eu_central_1"
  | "eu_central_2"
  | "ap_east_1"
  | "me_south_1"
  | "us_gov_west_1"
  | "us_gov_east_1"
  | "us_iso_east_1"
  | "us_iso_west_1"
  | "us_isob_east_1"
  | "me_central_1"
  | "ap_southeast_1"
  | "ap_southeast_2"
  | "ap_southeast_3"
  | "ap_south_1"
  | "ap_south_2"
  | "ap_northeast_1"
  | "ap_northeast_2"
  | "ap_northeast_3"
  | "eu_north_1"
  | "sa_east_1"
  | "ca_central_1"
  | "cn_north_1"
  | "cn_northwest_1"
  | "af_south_1"
  | "eu_south_1"
  | "eu_south_2"
  | "ap_southeast_4"
  | "il_central_1"
  | "ca_west_1"
  | "ap_southeast_5"
  | "mx_central_1"
  | "us_isof_south_1"
  | "us_isof_east_1"
  | "ap_southeast_7"
  | "ap_east_2"
  | "eu_isoe_west_1";
export type VPCs = Array<VPC>;
export declare namespace ActivateKeySigningKey {
  export type Input = ActivateKeySigningKeyRequest;
  export type Output = ActivateKeySigningKeyResponse;
  export type Error =
    | ConcurrentModification
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | InvalidSigningStatus
    | NoSuchKeySigningKey
    | CommonAwsError;
}

export declare namespace AssociateVPCWithHostedZone {
  export type Input = AssociateVPCWithHostedZoneRequest;
  export type Output = AssociateVPCWithHostedZoneResponse;
  export type Error =
    | ConflictingDomainExists
    | InvalidInput
    | InvalidVPCId
    | LimitsExceeded
    | NoSuchHostedZone
    | NotAuthorizedException
    | PriorRequestNotComplete
    | PublicZoneVPCAssociation
    | CommonAwsError;
}

export declare namespace ChangeCidrCollection {
  export type Input = ChangeCidrCollectionRequest;
  export type Output = ChangeCidrCollectionResponse;
  export type Error =
    | CidrBlockInUseException
    | CidrCollectionVersionMismatchException
    | ConcurrentModification
    | InvalidInput
    | LimitsExceeded
    | NoSuchCidrCollectionException
    | CommonAwsError;
}

export declare namespace ChangeResourceRecordSets {
  export type Input = ChangeResourceRecordSetsRequest;
  export type Output = ChangeResourceRecordSetsResponse;
  export type Error =
    | InvalidChangeBatch
    | InvalidInput
    | NoSuchHealthCheck
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | CommonAwsError;
}

export declare namespace ChangeTagsForResource {
  export type Input = ChangeTagsForResourceRequest;
  export type Output = ChangeTagsForResourceResponse;
  export type Error =
    | InvalidInput
    | NoSuchHealthCheck
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateCidrCollection {
  export type Input = CreateCidrCollectionRequest;
  export type Output = CreateCidrCollectionResponse;
  export type Error =
    | CidrCollectionAlreadyExistsException
    | ConcurrentModification
    | InvalidInput
    | LimitsExceeded
    | CommonAwsError;
}

export declare namespace CreateHealthCheck {
  export type Input = CreateHealthCheckRequest;
  export type Output = CreateHealthCheckResponse;
  export type Error =
    | HealthCheckAlreadyExists
    | InvalidInput
    | TooManyHealthChecks
    | CommonAwsError;
}

export declare namespace CreateHostedZone {
  export type Input = CreateHostedZoneRequest;
  export type Output = CreateHostedZoneResponse;
  export type Error =
    | ConflictingDomainExists
    | DelegationSetNotAvailable
    | DelegationSetNotReusable
    | HostedZoneAlreadyExists
    | InvalidDomainName
    | InvalidInput
    | InvalidVPCId
    | NoSuchDelegationSet
    | TooManyHostedZones
    | CommonAwsError;
}

export declare namespace CreateKeySigningKey {
  export type Input = CreateKeySigningKeyRequest;
  export type Output = CreateKeySigningKeyResponse;
  export type Error =
    | ConcurrentModification
    | InvalidArgument
    | InvalidInput
    | InvalidKeySigningKeyName
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | InvalidSigningStatus
    | KeySigningKeyAlreadyExists
    | NoSuchHostedZone
    | TooManyKeySigningKeys
    | CommonAwsError;
}

export declare namespace CreateQueryLoggingConfig {
  export type Input = CreateQueryLoggingConfigRequest;
  export type Output = CreateQueryLoggingConfigResponse;
  export type Error =
    | ConcurrentModification
    | InsufficientCloudWatchLogsResourcePolicy
    | InvalidInput
    | NoSuchCloudWatchLogsLogGroup
    | NoSuchHostedZone
    | QueryLoggingConfigAlreadyExists
    | CommonAwsError;
}

export declare namespace CreateReusableDelegationSet {
  export type Input = CreateReusableDelegationSetRequest;
  export type Output = CreateReusableDelegationSetResponse;
  export type Error =
    | DelegationSetAlreadyCreated
    | DelegationSetAlreadyReusable
    | DelegationSetNotAvailable
    | HostedZoneNotFound
    | InvalidArgument
    | InvalidInput
    | LimitsExceeded
    | CommonAwsError;
}

export declare namespace CreateTrafficPolicy {
  export type Input = CreateTrafficPolicyRequest;
  export type Output = CreateTrafficPolicyResponse;
  export type Error =
    | InvalidInput
    | InvalidTrafficPolicyDocument
    | TooManyTrafficPolicies
    | TrafficPolicyAlreadyExists
    | CommonAwsError;
}

export declare namespace CreateTrafficPolicyInstance {
  export type Input = CreateTrafficPolicyInstanceRequest;
  export type Output = CreateTrafficPolicyInstanceResponse;
  export type Error =
    | InvalidInput
    | NoSuchHostedZone
    | NoSuchTrafficPolicy
    | TooManyTrafficPolicyInstances
    | TrafficPolicyInstanceAlreadyExists
    | CommonAwsError;
}

export declare namespace CreateTrafficPolicyVersion {
  export type Input = CreateTrafficPolicyVersionRequest;
  export type Output = CreateTrafficPolicyVersionResponse;
  export type Error =
    | ConcurrentModification
    | InvalidInput
    | InvalidTrafficPolicyDocument
    | NoSuchTrafficPolicy
    | TooManyTrafficPolicyVersionsForCurrentPolicy
    | CommonAwsError;
}

export declare namespace CreateVPCAssociationAuthorization {
  export type Input = CreateVPCAssociationAuthorizationRequest;
  export type Output = CreateVPCAssociationAuthorizationResponse;
  export type Error =
    | ConcurrentModification
    | InvalidInput
    | InvalidVPCId
    | NoSuchHostedZone
    | TooManyVPCAssociationAuthorizations
    | CommonAwsError;
}

export declare namespace DeactivateKeySigningKey {
  export type Input = DeactivateKeySigningKeyRequest;
  export type Output = DeactivateKeySigningKeyResponse;
  export type Error =
    | ConcurrentModification
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidSigningStatus
    | KeySigningKeyInParentDSRecord
    | KeySigningKeyInUse
    | NoSuchKeySigningKey
    | CommonAwsError;
}

export declare namespace DeleteCidrCollection {
  export type Input = DeleteCidrCollectionRequest;
  export type Output = DeleteCidrCollectionResponse;
  export type Error =
    | CidrCollectionInUseException
    | ConcurrentModification
    | InvalidInput
    | NoSuchCidrCollectionException
    | CommonAwsError;
}

export declare namespace DeleteHealthCheck {
  export type Input = DeleteHealthCheckRequest;
  export type Output = DeleteHealthCheckResponse;
  export type Error =
    | HealthCheckInUse
    | InvalidInput
    | NoSuchHealthCheck
    | CommonAwsError;
}

export declare namespace DeleteHostedZone {
  export type Input = DeleteHostedZoneRequest;
  export type Output = DeleteHostedZoneResponse;
  export type Error =
    | HostedZoneNotEmpty
    | InvalidDomainName
    | InvalidInput
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | CommonAwsError;
}

export declare namespace DeleteKeySigningKey {
  export type Input = DeleteKeySigningKeyRequest;
  export type Output = DeleteKeySigningKeyResponse;
  export type Error =
    | ConcurrentModification
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | InvalidSigningStatus
    | NoSuchKeySigningKey
    | CommonAwsError;
}

export declare namespace DeleteQueryLoggingConfig {
  export type Input = DeleteQueryLoggingConfigRequest;
  export type Output = DeleteQueryLoggingConfigResponse;
  export type Error =
    | ConcurrentModification
    | InvalidInput
    | NoSuchQueryLoggingConfig
    | CommonAwsError;
}

export declare namespace DeleteReusableDelegationSet {
  export type Input = DeleteReusableDelegationSetRequest;
  export type Output = DeleteReusableDelegationSetResponse;
  export type Error =
    | DelegationSetInUse
    | DelegationSetNotReusable
    | InvalidInput
    | NoSuchDelegationSet
    | CommonAwsError;
}

export declare namespace DeleteTrafficPolicy {
  export type Input = DeleteTrafficPolicyRequest;
  export type Output = DeleteTrafficPolicyResponse;
  export type Error =
    | ConcurrentModification
    | InvalidInput
    | NoSuchTrafficPolicy
    | TrafficPolicyInUse
    | CommonAwsError;
}

export declare namespace DeleteTrafficPolicyInstance {
  export type Input = DeleteTrafficPolicyInstanceRequest;
  export type Output = DeleteTrafficPolicyInstanceResponse;
  export type Error =
    | InvalidInput
    | NoSuchTrafficPolicyInstance
    | PriorRequestNotComplete
    | CommonAwsError;
}

export declare namespace DeleteVPCAssociationAuthorization {
  export type Input = DeleteVPCAssociationAuthorizationRequest;
  export type Output = DeleteVPCAssociationAuthorizationResponse;
  export type Error =
    | ConcurrentModification
    | InvalidInput
    | InvalidVPCId
    | NoSuchHostedZone
    | VPCAssociationAuthorizationNotFound
    | CommonAwsError;
}

export declare namespace DisableHostedZoneDNSSEC {
  export type Input = DisableHostedZoneDNSSECRequest;
  export type Output = DisableHostedZoneDNSSECResponse;
  export type Error =
    | ConcurrentModification
    | DNSSECNotFound
    | InvalidArgument
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | KeySigningKeyInParentDSRecord
    | NoSuchHostedZone
    | CommonAwsError;
}

export declare namespace DisassociateVPCFromHostedZone {
  export type Input = DisassociateVPCFromHostedZoneRequest;
  export type Output = DisassociateVPCFromHostedZoneResponse;
  export type Error =
    | InvalidInput
    | InvalidVPCId
    | LastVPCAssociation
    | NoSuchHostedZone
    | VPCAssociationNotFound
    | CommonAwsError;
}

export declare namespace EnableHostedZoneDNSSEC {
  export type Input = EnableHostedZoneDNSSECRequest;
  export type Output = EnableHostedZoneDNSSECResponse;
  export type Error =
    | ConcurrentModification
    | DNSSECNotFound
    | HostedZonePartiallyDelegated
    | InvalidArgument
    | InvalidInput
    | InvalidKeySigningKeyStatus
    | InvalidKMSArn
    | KeySigningKeyWithActiveStatusNotFound
    | NoSuchHostedZone
    | CommonAwsError;
}

export declare namespace GetAccountLimit {
  export type Input = GetAccountLimitRequest;
  export type Output = GetAccountLimitResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace GetChange {
  export type Input = GetChangeRequest;
  export type Output = GetChangeResponse;
  export type Error = InvalidInput | NoSuchChange | CommonAwsError;
}

export declare namespace GetCheckerIpRanges {
  export type Input = GetCheckerIpRangesRequest;
  export type Output = GetCheckerIpRangesResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetDNSSEC {
  export type Input = GetDNSSECRequest;
  export type Output = GetDNSSECResponse;
  export type Error =
    | InvalidArgument
    | InvalidInput
    | NoSuchHostedZone
    | CommonAwsError;
}

export declare namespace GetGeoLocation {
  export type Input = GetGeoLocationRequest;
  export type Output = GetGeoLocationResponse;
  export type Error = InvalidInput | NoSuchGeoLocation | CommonAwsError;
}

export declare namespace GetHealthCheck {
  export type Input = GetHealthCheckRequest;
  export type Output = GetHealthCheckResponse;
  export type Error =
    | IncompatibleVersion
    | InvalidInput
    | NoSuchHealthCheck
    | CommonAwsError;
}

export declare namespace GetHealthCheckCount {
  export type Input = GetHealthCheckCountRequest;
  export type Output = GetHealthCheckCountResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetHealthCheckLastFailureReason {
  export type Input = GetHealthCheckLastFailureReasonRequest;
  export type Output = GetHealthCheckLastFailureReasonResponse;
  export type Error = InvalidInput | NoSuchHealthCheck | CommonAwsError;
}

export declare namespace GetHealthCheckStatus {
  export type Input = GetHealthCheckStatusRequest;
  export type Output = GetHealthCheckStatusResponse;
  export type Error = InvalidInput | NoSuchHealthCheck | CommonAwsError;
}

export declare namespace GetHostedZone {
  export type Input = GetHostedZoneRequest;
  export type Output = GetHostedZoneResponse;
  export type Error = InvalidInput | NoSuchHostedZone | CommonAwsError;
}

export declare namespace GetHostedZoneCount {
  export type Input = GetHostedZoneCountRequest;
  export type Output = GetHostedZoneCountResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace GetHostedZoneLimit {
  export type Input = GetHostedZoneLimitRequest;
  export type Output = GetHostedZoneLimitResponse;
  export type Error =
    | HostedZoneNotPrivate
    | InvalidInput
    | NoSuchHostedZone
    | CommonAwsError;
}

export declare namespace GetQueryLoggingConfig {
  export type Input = GetQueryLoggingConfigRequest;
  export type Output = GetQueryLoggingConfigResponse;
  export type Error = InvalidInput | NoSuchQueryLoggingConfig | CommonAwsError;
}

export declare namespace GetReusableDelegationSet {
  export type Input = GetReusableDelegationSetRequest;
  export type Output = GetReusableDelegationSetResponse;
  export type Error =
    | DelegationSetNotReusable
    | InvalidInput
    | NoSuchDelegationSet
    | CommonAwsError;
}

export declare namespace GetReusableDelegationSetLimit {
  export type Input = GetReusableDelegationSetLimitRequest;
  export type Output = GetReusableDelegationSetLimitResponse;
  export type Error = InvalidInput | NoSuchDelegationSet | CommonAwsError;
}

export declare namespace GetTrafficPolicy {
  export type Input = GetTrafficPolicyRequest;
  export type Output = GetTrafficPolicyResponse;
  export type Error = InvalidInput | NoSuchTrafficPolicy | CommonAwsError;
}

export declare namespace GetTrafficPolicyInstance {
  export type Input = GetTrafficPolicyInstanceRequest;
  export type Output = GetTrafficPolicyInstanceResponse;
  export type Error =
    | InvalidInput
    | NoSuchTrafficPolicyInstance
    | CommonAwsError;
}

export declare namespace GetTrafficPolicyInstanceCount {
  export type Input = GetTrafficPolicyInstanceCountRequest;
  export type Output = GetTrafficPolicyInstanceCountResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListCidrBlocks {
  export type Input = ListCidrBlocksRequest;
  export type Output = ListCidrBlocksResponse;
  export type Error =
    | InvalidInput
    | NoSuchCidrCollectionException
    | NoSuchCidrLocationException
    | CommonAwsError;
}

export declare namespace ListCidrCollections {
  export type Input = ListCidrCollectionsRequest;
  export type Output = ListCidrCollectionsResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListCidrLocations {
  export type Input = ListCidrLocationsRequest;
  export type Output = ListCidrLocationsResponse;
  export type Error =
    | InvalidInput
    | NoSuchCidrCollectionException
    | CommonAwsError;
}

export declare namespace ListGeoLocations {
  export type Input = ListGeoLocationsRequest;
  export type Output = ListGeoLocationsResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListHealthChecks {
  export type Input = ListHealthChecksRequest;
  export type Output = ListHealthChecksResponse;
  export type Error = IncompatibleVersion | InvalidInput | CommonAwsError;
}

export declare namespace ListHostedZones {
  export type Input = ListHostedZonesRequest;
  export type Output = ListHostedZonesResponse;
  export type Error =
    | DelegationSetNotReusable
    | InvalidInput
    | NoSuchDelegationSet
    | CommonAwsError;
}

export declare namespace ListHostedZonesByName {
  export type Input = ListHostedZonesByNameRequest;
  export type Output = ListHostedZonesByNameResponse;
  export type Error = InvalidDomainName | InvalidInput | CommonAwsError;
}

export declare namespace ListHostedZonesByVPC {
  export type Input = ListHostedZonesByVPCRequest;
  export type Output = ListHostedZonesByVPCResponse;
  export type Error = InvalidInput | InvalidPaginationToken | CommonAwsError;
}

export declare namespace ListQueryLoggingConfigs {
  export type Input = ListQueryLoggingConfigsRequest;
  export type Output = ListQueryLoggingConfigsResponse;
  export type Error =
    | InvalidInput
    | InvalidPaginationToken
    | NoSuchHostedZone
    | CommonAwsError;
}

export declare namespace ListResourceRecordSets {
  export type Input = ListResourceRecordSetsRequest;
  export type Output = ListResourceRecordSetsResponse;
  export type Error = InvalidInput | NoSuchHostedZone | CommonAwsError;
}

export declare namespace ListReusableDelegationSets {
  export type Input = ListReusableDelegationSetsRequest;
  export type Output = ListReusableDelegationSetsResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidInput
    | NoSuchHealthCheck
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResources {
  export type Input = ListTagsForResourcesRequest;
  export type Output = ListTagsForResourcesResponse;
  export type Error =
    | InvalidInput
    | NoSuchHealthCheck
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTrafficPolicies {
  export type Input = ListTrafficPoliciesRequest;
  export type Output = ListTrafficPoliciesResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListTrafficPolicyInstances {
  export type Input = ListTrafficPolicyInstancesRequest;
  export type Output = ListTrafficPolicyInstancesResponse;
  export type Error =
    | InvalidInput
    | NoSuchTrafficPolicyInstance
    | CommonAwsError;
}

export declare namespace ListTrafficPolicyInstancesByHostedZone {
  export type Input = ListTrafficPolicyInstancesByHostedZoneRequest;
  export type Output = ListTrafficPolicyInstancesByHostedZoneResponse;
  export type Error =
    | InvalidInput
    | NoSuchHostedZone
    | NoSuchTrafficPolicyInstance
    | CommonAwsError;
}

export declare namespace ListTrafficPolicyInstancesByPolicy {
  export type Input = ListTrafficPolicyInstancesByPolicyRequest;
  export type Output = ListTrafficPolicyInstancesByPolicyResponse;
  export type Error =
    | InvalidInput
    | NoSuchTrafficPolicy
    | NoSuchTrafficPolicyInstance
    | CommonAwsError;
}

export declare namespace ListTrafficPolicyVersions {
  export type Input = ListTrafficPolicyVersionsRequest;
  export type Output = ListTrafficPolicyVersionsResponse;
  export type Error = InvalidInput | NoSuchTrafficPolicy | CommonAwsError;
}

export declare namespace ListVPCAssociationAuthorizations {
  export type Input = ListVPCAssociationAuthorizationsRequest;
  export type Output = ListVPCAssociationAuthorizationsResponse;
  export type Error =
    | InvalidInput
    | InvalidPaginationToken
    | NoSuchHostedZone
    | CommonAwsError;
}

export declare namespace TestDNSAnswer {
  export type Input = TestDNSAnswerRequest;
  export type Output = TestDNSAnswerResponse;
  export type Error = InvalidInput | NoSuchHostedZone | CommonAwsError;
}

export declare namespace UpdateHealthCheck {
  export type Input = UpdateHealthCheckRequest;
  export type Output = UpdateHealthCheckResponse;
  export type Error =
    | HealthCheckVersionMismatch
    | InvalidInput
    | NoSuchHealthCheck
    | CommonAwsError;
}

export declare namespace UpdateHostedZoneComment {
  export type Input = UpdateHostedZoneCommentRequest;
  export type Output = UpdateHostedZoneCommentResponse;
  export type Error =
    | InvalidInput
    | NoSuchHostedZone
    | PriorRequestNotComplete
    | CommonAwsError;
}

export declare namespace UpdateTrafficPolicyComment {
  export type Input = UpdateTrafficPolicyCommentRequest;
  export type Output = UpdateTrafficPolicyCommentResponse;
  export type Error =
    | ConcurrentModification
    | InvalidInput
    | NoSuchTrafficPolicy
    | CommonAwsError;
}

export declare namespace UpdateTrafficPolicyInstance {
  export type Input = UpdateTrafficPolicyInstanceRequest;
  export type Output = UpdateTrafficPolicyInstanceResponse;
  export type Error =
    | ConflictingTypes
    | InvalidInput
    | NoSuchTrafficPolicy
    | NoSuchTrafficPolicyInstance
    | PriorRequestNotComplete
    | CommonAwsError;
}
