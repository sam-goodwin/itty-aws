import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface ElasticLoadBalancing_v10 {
  addListenerCertificates(
    input: AddListenerCertificatesInput,
  ): Effect.Effect<
    AddListenerCertificatesOutput,
    | CertificateNotFoundException
    | ListenerNotFoundException
    | TooManyCertificatesException
    | CommonAwsError
  >;
  addTags(
    input: AddTagsInput,
  ): Effect.Effect<
    AddTagsOutput,
    | DuplicateTagKeysException
    | ListenerNotFoundException
    | LoadBalancerNotFoundException
    | RuleNotFoundException
    | TargetGroupNotFoundException
    | TooManyTagsException
    | TrustStoreNotFoundException
    | CommonAwsError
  >;
  addTrustStoreRevocations(
    input: AddTrustStoreRevocationsInput,
  ): Effect.Effect<
    AddTrustStoreRevocationsOutput,
    | InvalidRevocationContentException
    | RevocationContentNotFoundException
    | TooManyTrustStoreRevocationEntriesException
    | TrustStoreNotFoundException
    | CommonAwsError
  >;
  createListener(
    input: CreateListenerInput,
  ): Effect.Effect<
    CreateListenerOutput,
    | ALPNPolicyNotSupportedException
    | CertificateNotFoundException
    | DuplicateListenerException
    | IncompatibleProtocolsException
    | InvalidConfigurationRequestException
    | InvalidLoadBalancerActionException
    | LoadBalancerNotFoundException
    | SSLPolicyNotFoundException
    | TargetGroupAssociationLimitException
    | TargetGroupNotFoundException
    | TooManyActionsException
    | TooManyCertificatesException
    | TooManyListenersException
    | TooManyRegistrationsForTargetIdException
    | TooManyTagsException
    | TooManyTargetsException
    | TooManyUniqueTargetGroupsPerLoadBalancerException
    | TrustStoreNotFoundException
    | TrustStoreNotReadyException
    | UnsupportedProtocolException
    | CommonAwsError
  >;
  createLoadBalancer(
    input: CreateLoadBalancerInput,
  ): Effect.Effect<
    CreateLoadBalancerOutput,
    | AllocationIdNotFoundException
    | AvailabilityZoneNotSupportedException
    | DuplicateLoadBalancerNameException
    | DuplicateTagKeysException
    | InvalidConfigurationRequestException
    | InvalidSchemeException
    | InvalidSecurityGroupException
    | InvalidSubnetException
    | OperationNotPermittedException
    | ResourceInUseException
    | SubnetNotFoundException
    | TooManyLoadBalancersException
    | TooManyTagsException
    | CommonAwsError
  >;
  createRule(
    input: CreateRuleInput,
  ): Effect.Effect<
    CreateRuleOutput,
    | IncompatibleProtocolsException
    | InvalidConfigurationRequestException
    | InvalidLoadBalancerActionException
    | ListenerNotFoundException
    | PriorityInUseException
    | TargetGroupAssociationLimitException
    | TargetGroupNotFoundException
    | TooManyActionsException
    | TooManyRegistrationsForTargetIdException
    | TooManyRulesException
    | TooManyTagsException
    | TooManyTargetGroupsException
    | TooManyTargetsException
    | TooManyUniqueTargetGroupsPerLoadBalancerException
    | UnsupportedProtocolException
    | CommonAwsError
  >;
  createTargetGroup(
    input: CreateTargetGroupInput,
  ): Effect.Effect<
    CreateTargetGroupOutput,
    | DuplicateTargetGroupNameException
    | InvalidConfigurationRequestException
    | TooManyTagsException
    | TooManyTargetGroupsException
    | CommonAwsError
  >;
  createTrustStore(
    input: CreateTrustStoreInput,
  ): Effect.Effect<
    CreateTrustStoreOutput,
    | CaCertificatesBundleNotFoundException
    | DuplicateTagKeysException
    | DuplicateTrustStoreNameException
    | InvalidCaCertificatesBundleException
    | TooManyTagsException
    | TooManyTrustStoresException
    | CommonAwsError
  >;
  deleteListener(
    input: DeleteListenerInput,
  ): Effect.Effect<
    DeleteListenerOutput,
    ListenerNotFoundException | ResourceInUseException | CommonAwsError
  >;
  deleteLoadBalancer(
    input: DeleteLoadBalancerInput,
  ): Effect.Effect<
    DeleteLoadBalancerOutput,
    | LoadBalancerNotFoundException
    | OperationNotPermittedException
    | ResourceInUseException
    | CommonAwsError
  >;
  deleteRule(
    input: DeleteRuleInput,
  ): Effect.Effect<
    DeleteRuleOutput,
    OperationNotPermittedException | RuleNotFoundException | CommonAwsError
  >;
  deleteSharedTrustStoreAssociation(
    input: DeleteSharedTrustStoreAssociationInput,
  ): Effect.Effect<
    DeleteSharedTrustStoreAssociationOutput,
    | DeleteAssociationSameAccountException
    | TrustStoreAssociationNotFoundException
    | TrustStoreNotFoundException
    | CommonAwsError
  >;
  deleteTargetGroup(
    input: DeleteTargetGroupInput,
  ): Effect.Effect<
    DeleteTargetGroupOutput,
    ResourceInUseException | CommonAwsError
  >;
  deleteTrustStore(
    input: DeleteTrustStoreInput,
  ): Effect.Effect<
    DeleteTrustStoreOutput,
    TrustStoreInUseException | TrustStoreNotFoundException | CommonAwsError
  >;
  deregisterTargets(
    input: DeregisterTargetsInput,
  ): Effect.Effect<
    DeregisterTargetsOutput,
    InvalidTargetException | TargetGroupNotFoundException | CommonAwsError
  >;
  describeAccountLimits(
    input: DescribeAccountLimitsInput,
  ): Effect.Effect<DescribeAccountLimitsOutput, CommonAwsError>;
  describeCapacityReservation(
    input: DescribeCapacityReservationInput,
  ): Effect.Effect<
    DescribeCapacityReservationOutput,
    LoadBalancerNotFoundException | CommonAwsError
  >;
  describeListenerAttributes(
    input: DescribeListenerAttributesInput,
  ): Effect.Effect<
    DescribeListenerAttributesOutput,
    ListenerNotFoundException | CommonAwsError
  >;
  describeListenerCertificates(
    input: DescribeListenerCertificatesInput,
  ): Effect.Effect<
    DescribeListenerCertificatesOutput,
    ListenerNotFoundException | CommonAwsError
  >;
  describeListeners(
    input: DescribeListenersInput,
  ): Effect.Effect<
    DescribeListenersOutput,
    | ListenerNotFoundException
    | LoadBalancerNotFoundException
    | UnsupportedProtocolException
    | CommonAwsError
  >;
  describeLoadBalancerAttributes(
    input: DescribeLoadBalancerAttributesInput,
  ): Effect.Effect<
    DescribeLoadBalancerAttributesOutput,
    LoadBalancerNotFoundException | CommonAwsError
  >;
  describeLoadBalancers(
    input: DescribeLoadBalancersInput,
  ): Effect.Effect<
    DescribeLoadBalancersOutput,
    LoadBalancerNotFoundException | CommonAwsError
  >;
  describeRules(
    input: DescribeRulesInput,
  ): Effect.Effect<
    DescribeRulesOutput,
    | ListenerNotFoundException
    | RuleNotFoundException
    | UnsupportedProtocolException
    | CommonAwsError
  >;
  describeSSLPolicies(
    input: DescribeSSLPoliciesInput,
  ): Effect.Effect<
    DescribeSSLPoliciesOutput,
    SSLPolicyNotFoundException | CommonAwsError
  >;
  describeTags(
    input: DescribeTagsInput,
  ): Effect.Effect<
    DescribeTagsOutput,
    | ListenerNotFoundException
    | LoadBalancerNotFoundException
    | RuleNotFoundException
    | TargetGroupNotFoundException
    | TrustStoreNotFoundException
    | CommonAwsError
  >;
  describeTargetGroupAttributes(
    input: DescribeTargetGroupAttributesInput,
  ): Effect.Effect<
    DescribeTargetGroupAttributesOutput,
    TargetGroupNotFoundException | CommonAwsError
  >;
  describeTargetGroups(
    input: DescribeTargetGroupsInput,
  ): Effect.Effect<
    DescribeTargetGroupsOutput,
    | LoadBalancerNotFoundException
    | TargetGroupNotFoundException
    | CommonAwsError
  >;
  describeTargetHealth(
    input: DescribeTargetHealthInput,
  ): Effect.Effect<
    DescribeTargetHealthOutput,
    | HealthUnavailableException
    | InvalidTargetException
    | TargetGroupNotFoundException
    | CommonAwsError
  >;
  describeTrustStoreAssociations(
    input: DescribeTrustStoreAssociationsInput,
  ): Effect.Effect<
    DescribeTrustStoreAssociationsOutput,
    TrustStoreNotFoundException | CommonAwsError
  >;
  describeTrustStoreRevocations(
    input: DescribeTrustStoreRevocationsInput,
  ): Effect.Effect<
    DescribeTrustStoreRevocationsOutput,
    RevocationIdNotFoundException | TrustStoreNotFoundException | CommonAwsError
  >;
  describeTrustStores(
    input: DescribeTrustStoresInput,
  ): Effect.Effect<
    DescribeTrustStoresOutput,
    TrustStoreNotFoundException | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyInput,
  ): Effect.Effect<
    GetResourcePolicyOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  getTrustStoreCaCertificatesBundle(
    input: GetTrustStoreCaCertificatesBundleInput,
  ): Effect.Effect<
    GetTrustStoreCaCertificatesBundleOutput,
    TrustStoreNotFoundException | CommonAwsError
  >;
  getTrustStoreRevocationContent(
    input: GetTrustStoreRevocationContentInput,
  ): Effect.Effect<
    GetTrustStoreRevocationContentOutput,
    RevocationIdNotFoundException | TrustStoreNotFoundException | CommonAwsError
  >;
  modifyCapacityReservation(
    input: ModifyCapacityReservationInput,
  ): Effect.Effect<
    ModifyCapacityReservationOutput,
    | CapacityDecreaseRequestsLimitExceededException
    | CapacityReservationPendingException
    | CapacityUnitsLimitExceededException
    | InsufficientCapacityException
    | InvalidConfigurationRequestException
    | LoadBalancerNotFoundException
    | OperationNotPermittedException
    | PriorRequestNotCompleteException
    | CommonAwsError
  >;
  modifyIpPools(
    input: ModifyIpPoolsInput,
  ): Effect.Effect<
    ModifyIpPoolsOutput,
    LoadBalancerNotFoundException | CommonAwsError
  >;
  modifyListener(
    input: ModifyListenerInput,
  ): Effect.Effect<
    ModifyListenerOutput,
    | ALPNPolicyNotSupportedException
    | CertificateNotFoundException
    | DuplicateListenerException
    | IncompatibleProtocolsException
    | InvalidConfigurationRequestException
    | InvalidLoadBalancerActionException
    | ListenerNotFoundException
    | SSLPolicyNotFoundException
    | TargetGroupAssociationLimitException
    | TargetGroupNotFoundException
    | TooManyActionsException
    | TooManyCertificatesException
    | TooManyListenersException
    | TooManyRegistrationsForTargetIdException
    | TooManyTargetsException
    | TooManyUniqueTargetGroupsPerLoadBalancerException
    | TrustStoreNotFoundException
    | TrustStoreNotReadyException
    | UnsupportedProtocolException
    | CommonAwsError
  >;
  modifyListenerAttributes(
    input: ModifyListenerAttributesInput,
  ): Effect.Effect<
    ModifyListenerAttributesOutput,
    | InvalidConfigurationRequestException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  modifyLoadBalancerAttributes(
    input: ModifyLoadBalancerAttributesInput,
  ): Effect.Effect<
    ModifyLoadBalancerAttributesOutput,
    | InvalidConfigurationRequestException
    | LoadBalancerNotFoundException
    | CommonAwsError
  >;
  modifyRule(
    input: ModifyRuleInput,
  ): Effect.Effect<
    ModifyRuleOutput,
    | IncompatibleProtocolsException
    | InvalidLoadBalancerActionException
    | OperationNotPermittedException
    | RuleNotFoundException
    | TargetGroupAssociationLimitException
    | TargetGroupNotFoundException
    | TooManyActionsException
    | TooManyRegistrationsForTargetIdException
    | TooManyTargetsException
    | TooManyUniqueTargetGroupsPerLoadBalancerException
    | UnsupportedProtocolException
    | CommonAwsError
  >;
  modifyTargetGroup(
    input: ModifyTargetGroupInput,
  ): Effect.Effect<
    ModifyTargetGroupOutput,
    | InvalidConfigurationRequestException
    | TargetGroupNotFoundException
    | CommonAwsError
  >;
  modifyTargetGroupAttributes(
    input: ModifyTargetGroupAttributesInput,
  ): Effect.Effect<
    ModifyTargetGroupAttributesOutput,
    | InvalidConfigurationRequestException
    | TargetGroupNotFoundException
    | CommonAwsError
  >;
  modifyTrustStore(
    input: ModifyTrustStoreInput,
  ): Effect.Effect<
    ModifyTrustStoreOutput,
    | CaCertificatesBundleNotFoundException
    | InvalidCaCertificatesBundleException
    | TrustStoreNotFoundException
    | CommonAwsError
  >;
  registerTargets(
    input: RegisterTargetsInput,
  ): Effect.Effect<
    RegisterTargetsOutput,
    | InvalidTargetException
    | TargetGroupNotFoundException
    | TooManyRegistrationsForTargetIdException
    | TooManyTargetsException
    | CommonAwsError
  >;
  removeListenerCertificates(
    input: RemoveListenerCertificatesInput,
  ): Effect.Effect<
    RemoveListenerCertificatesOutput,
    ListenerNotFoundException | OperationNotPermittedException | CommonAwsError
  >;
  removeTags(
    input: RemoveTagsInput,
  ): Effect.Effect<
    RemoveTagsOutput,
    | ListenerNotFoundException
    | LoadBalancerNotFoundException
    | RuleNotFoundException
    | TargetGroupNotFoundException
    | TooManyTagsException
    | TrustStoreNotFoundException
    | CommonAwsError
  >;
  removeTrustStoreRevocations(
    input: RemoveTrustStoreRevocationsInput,
  ): Effect.Effect<
    RemoveTrustStoreRevocationsOutput,
    RevocationIdNotFoundException | TrustStoreNotFoundException | CommonAwsError
  >;
  setIpAddressType(
    input: SetIpAddressTypeInput,
  ): Effect.Effect<
    SetIpAddressTypeOutput,
    | InvalidConfigurationRequestException
    | InvalidSubnetException
    | LoadBalancerNotFoundException
    | CommonAwsError
  >;
  setRulePriorities(
    input: SetRulePrioritiesInput,
  ): Effect.Effect<
    SetRulePrioritiesOutput,
    | OperationNotPermittedException
    | PriorityInUseException
    | RuleNotFoundException
    | CommonAwsError
  >;
  setSecurityGroups(
    input: SetSecurityGroupsInput,
  ): Effect.Effect<
    SetSecurityGroupsOutput,
    | InvalidConfigurationRequestException
    | InvalidSecurityGroupException
    | LoadBalancerNotFoundException
    | CommonAwsError
  >;
  setSubnets(
    input: SetSubnetsInput,
  ): Effect.Effect<
    SetSubnetsOutput,
    | AllocationIdNotFoundException
    | AvailabilityZoneNotSupportedException
    | CapacityReservationPendingException
    | InvalidConfigurationRequestException
    | InvalidSubnetException
    | LoadBalancerNotFoundException
    | SubnetNotFoundException
    | CommonAwsError
  >;
}

export type ElasticLoadBalancingV2 = ElasticLoadBalancing_v10;

export interface Action {
  Type: ActionTypeEnum;
  TargetGroupArn?: string;
  AuthenticateOidcConfig?: AuthenticateOidcActionConfig;
  AuthenticateCognitoConfig?: AuthenticateCognitoActionConfig;
  Order?: number;
  RedirectConfig?: RedirectActionConfig;
  FixedResponseConfig?: FixedResponseActionConfig;
  ForwardConfig?: ForwardActionConfig;
}
export type ActionOrder = number;

export type Actions = Array<Action>;
export type ActionTypeEnum =
  | "FORWARD"
  | "AUTHENTICATE_OIDC"
  | "AUTHENTICATE_COGNITO"
  | "REDIRECT"
  | "FIXED_RESPONSE";
export interface AddListenerCertificatesInput {
  ListenerArn: string;
  Certificates: Array<Certificate>;
}
export interface AddListenerCertificatesOutput {
  Certificates?: Array<Certificate>;
}
export interface AddTagsInput {
  ResourceArns: Array<string>;
  Tags: Array<Tag>;
}
export interface AddTagsOutput {}
export interface AddTrustStoreRevocationsInput {
  TrustStoreArn: string;
  RevocationContents?: Array<RevocationContent>;
}
export interface AddTrustStoreRevocationsOutput {
  TrustStoreRevocations?: Array<TrustStoreRevocation>;
}
export interface AdministrativeOverride {
  State?: TargetAdministrativeOverrideStateEnum;
  Reason?: TargetAdministrativeOverrideReasonEnum;
  Description?: string;
}
export type AdvertiseTrustStoreCaNamesEnum = "on" | "off";
export type AllocationId = string;

export declare class AllocationIdNotFoundException extends Data.TaggedError(
  "AllocationIdNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type AlpnPolicyName = Array<string>;
export declare class ALPNPolicyNotSupportedException extends Data.TaggedError(
  "ALPNPolicyNotSupportedException",
)<{
  readonly Message?: string;
}> {}
export type AlpnPolicyValue = string;

export interface AnomalyDetection {
  Result?: AnomalyResultEnum;
  MitigationInEffect?: MitigationInEffectEnum;
}
export type AnomalyResultEnum = "ANOMALOUS" | "NORMAL";
export type AuthenticateCognitoActionAuthenticationRequestExtraParams = Record<
  string,
  string
>;
export type AuthenticateCognitoActionAuthenticationRequestParamName = string;

export type AuthenticateCognitoActionAuthenticationRequestParamValue = string;

export type AuthenticateCognitoActionConditionalBehaviorEnum =
  | "DENY"
  | "ALLOW"
  | "AUTHENTICATE";
export interface AuthenticateCognitoActionConfig {
  UserPoolArn: string;
  UserPoolClientId: string;
  UserPoolDomain: string;
  SessionCookieName?: string;
  Scope?: string;
  SessionTimeout?: number;
  AuthenticationRequestExtraParams?: Record<string, string>;
  OnUnauthenticatedRequest?: AuthenticateCognitoActionConditionalBehaviorEnum;
}
export type AuthenticateCognitoActionScope = string;

export type AuthenticateCognitoActionSessionCookieName = string;

export type AuthenticateCognitoActionSessionTimeout = number;

export type AuthenticateCognitoActionUserPoolArn = string;

export type AuthenticateCognitoActionUserPoolClientId = string;

export type AuthenticateCognitoActionUserPoolDomain = string;

export type AuthenticateOidcActionAuthenticationRequestExtraParams = Record<
  string,
  string
>;
export type AuthenticateOidcActionAuthenticationRequestParamName = string;

export type AuthenticateOidcActionAuthenticationRequestParamValue = string;

export type AuthenticateOidcActionAuthorizationEndpoint = string;

export type AuthenticateOidcActionClientId = string;

export type AuthenticateOidcActionClientSecret = string;

export type AuthenticateOidcActionConditionalBehaviorEnum =
  | "DENY"
  | "ALLOW"
  | "AUTHENTICATE";
export interface AuthenticateOidcActionConfig {
  Issuer: string;
  AuthorizationEndpoint: string;
  TokenEndpoint: string;
  UserInfoEndpoint: string;
  ClientId: string;
  ClientSecret?: string;
  SessionCookieName?: string;
  Scope?: string;
  SessionTimeout?: number;
  AuthenticationRequestExtraParams?: Record<string, string>;
  OnUnauthenticatedRequest?: AuthenticateOidcActionConditionalBehaviorEnum;
  UseExistingClientSecret?: boolean;
}
export type AuthenticateOidcActionIssuer = string;

export type AuthenticateOidcActionScope = string;

export type AuthenticateOidcActionSessionCookieName = string;

export type AuthenticateOidcActionSessionTimeout = number;

export type AuthenticateOidcActionTokenEndpoint = string;

export type AuthenticateOidcActionUseExistingClientSecret = boolean;

export type AuthenticateOidcActionUserInfoEndpoint = string;

export interface AvailabilityZone {
  ZoneName?: string;
  SubnetId?: string;
  OutpostId?: string;
  LoadBalancerAddresses?: Array<LoadBalancerAddress>;
  SourceNatIpv6Prefixes?: Array<string>;
}
export declare class AvailabilityZoneNotSupportedException extends Data.TaggedError(
  "AvailabilityZoneNotSupportedException",
)<{
  readonly Message?: string;
}> {}
export type AvailabilityZones = Array<AvailabilityZone>;
export declare class CaCertificatesBundleNotFoundException extends Data.TaggedError(
  "CaCertificatesBundleNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type CanonicalHostedZoneId = string;

export declare class CapacityDecreaseRequestsLimitExceededException extends Data.TaggedError(
  "CapacityDecreaseRequestsLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class CapacityReservationPendingException extends Data.TaggedError(
  "CapacityReservationPendingException",
)<{
  readonly Message?: string;
}> {}
export type CapacityReservationStateEnum =
  | "PROVISIONED"
  | "PENDING"
  | "REBALANCING"
  | "FAILED";
export interface CapacityReservationStatus {
  Code?: CapacityReservationStateEnum;
  Reason?: string;
}
export type CapacityUnits = number;

export type CapacityUnitsDouble = number;

export declare class CapacityUnitsLimitExceededException extends Data.TaggedError(
  "CapacityUnitsLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface Certificate {
  CertificateArn?: string;
  IsDefault?: boolean;
}
export type CertificateArn = string;

export type CertificateList = Array<Certificate>;
export declare class CertificateNotFoundException extends Data.TaggedError(
  "CertificateNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface Cipher {
  Name?: string;
  Priority?: number;
}
export type CipherName = string;

export type CipherPriority = number;

export type Ciphers = Array<Cipher>;
export type ConditionFieldName = string;

export type CreatedTime = Date | string;

export interface CreateListenerInput {
  LoadBalancerArn: string;
  Protocol?: ProtocolEnum;
  Port?: number;
  SslPolicy?: string;
  Certificates?: Array<Certificate>;
  DefaultActions: Array<Action>;
  AlpnPolicy?: Array<string>;
  Tags?: Array<Tag>;
  MutualAuthentication?: MutualAuthenticationAttributes;
}
export interface CreateListenerOutput {
  Listeners?: Array<Listener>;
}
export interface CreateLoadBalancerInput {
  Name: string;
  Subnets?: Array<string>;
  SubnetMappings?: Array<SubnetMapping>;
  SecurityGroups?: Array<string>;
  Scheme?: LoadBalancerSchemeEnum;
  Tags?: Array<Tag>;
  Type?: LoadBalancerTypeEnum;
  IpAddressType?: IpAddressType;
  CustomerOwnedIpv4Pool?: string;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
  IpamPools?: IpamPools;
}
export interface CreateLoadBalancerOutput {
  LoadBalancers?: Array<LoadBalancer>;
}
export interface CreateRuleInput {
  ListenerArn: string;
  Conditions: Array<RuleCondition>;
  Priority: number;
  Actions: Array<Action>;
  Tags?: Array<Tag>;
}
export interface CreateRuleOutput {
  Rules?: Array<Rule>;
}
export interface CreateTargetGroupInput {
  Name: string;
  Protocol?: ProtocolEnum;
  ProtocolVersion?: string;
  Port?: number;
  VpcId?: string;
  HealthCheckProtocol?: ProtocolEnum;
  HealthCheckPort?: string;
  HealthCheckEnabled?: boolean;
  HealthCheckPath?: string;
  HealthCheckIntervalSeconds?: number;
  HealthCheckTimeoutSeconds?: number;
  HealthyThresholdCount?: number;
  UnhealthyThresholdCount?: number;
  Matcher?: Matcher;
  TargetType?: TargetTypeEnum;
  Tags?: Array<Tag>;
  IpAddressType?: TargetGroupIpAddressTypeEnum;
}
export interface CreateTargetGroupOutput {
  TargetGroups?: Array<TargetGroup>;
}
export interface CreateTrustStoreInput {
  Name: string;
  CaCertificatesBundleS3Bucket: string;
  CaCertificatesBundleS3Key: string;
  CaCertificatesBundleS3ObjectVersion?: string;
  Tags?: Array<Tag>;
}
export interface CreateTrustStoreOutput {
  TrustStores?: Array<TrustStore>;
}
export type CustomerOwnedIpv4Pool = string;

export type DecreaseRequestsRemaining = number;

export type Default = boolean;

export declare class DeleteAssociationSameAccountException extends Data.TaggedError(
  "DeleteAssociationSameAccountException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteListenerInput {
  ListenerArn: string;
}
export interface DeleteListenerOutput {}
export interface DeleteLoadBalancerInput {
  LoadBalancerArn: string;
}
export interface DeleteLoadBalancerOutput {}
export interface DeleteRuleInput {
  RuleArn: string;
}
export interface DeleteRuleOutput {}
export interface DeleteSharedTrustStoreAssociationInput {
  TrustStoreArn: string;
  ResourceArn: string;
}
export interface DeleteSharedTrustStoreAssociationOutput {}
export interface DeleteTargetGroupInput {
  TargetGroupArn: string;
}
export interface DeleteTargetGroupOutput {}
export interface DeleteTrustStoreInput {
  TrustStoreArn: string;
}
export interface DeleteTrustStoreOutput {}
export interface DeregisterTargetsInput {
  TargetGroupArn: string;
  Targets: Array<TargetDescription>;
}
export interface DeregisterTargetsOutput {}
export interface DescribeAccountLimitsInput {
  Marker?: string;
  PageSize?: number;
}
export interface DescribeAccountLimitsOutput {
  Limits?: Array<Limit>;
  NextMarker?: string;
}
export interface DescribeCapacityReservationInput {
  LoadBalancerArn: string;
}
export interface DescribeCapacityReservationOutput {
  LastModifiedTime?: Date | string;
  DecreaseRequestsRemaining?: number;
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity;
  CapacityReservationState?: Array<ZonalCapacityReservationState>;
}
export interface DescribeListenerAttributesInput {
  ListenerArn: string;
}
export interface DescribeListenerAttributesOutput {
  Attributes?: Array<ListenerAttribute>;
}
export interface DescribeListenerCertificatesInput {
  ListenerArn: string;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeListenerCertificatesOutput {
  Certificates?: Array<Certificate>;
  NextMarker?: string;
}
export interface DescribeListenersInput {
  LoadBalancerArn?: string;
  ListenerArns?: Array<string>;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeListenersOutput {
  Listeners?: Array<Listener>;
  NextMarker?: string;
}
export interface DescribeLoadBalancerAttributesInput {
  LoadBalancerArn: string;
}
export interface DescribeLoadBalancerAttributesOutput {
  Attributes?: Array<LoadBalancerAttribute>;
}
export interface DescribeLoadBalancersInput {
  LoadBalancerArns?: Array<string>;
  Names?: Array<string>;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeLoadBalancersOutput {
  LoadBalancers?: Array<LoadBalancer>;
  NextMarker?: string;
}
export interface DescribeRulesInput {
  ListenerArn?: string;
  RuleArns?: Array<string>;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeRulesOutput {
  Rules?: Array<Rule>;
  NextMarker?: string;
}
export interface DescribeSSLPoliciesInput {
  Names?: Array<string>;
  Marker?: string;
  PageSize?: number;
  LoadBalancerType?: LoadBalancerTypeEnum;
}
export interface DescribeSSLPoliciesOutput {
  SslPolicies?: Array<SslPolicy>;
  NextMarker?: string;
}
export interface DescribeTagsInput {
  ResourceArns: Array<string>;
}
export interface DescribeTagsOutput {
  TagDescriptions?: Array<TagDescription>;
}
export interface DescribeTargetGroupAttributesInput {
  TargetGroupArn: string;
}
export interface DescribeTargetGroupAttributesOutput {
  Attributes?: Array<TargetGroupAttribute>;
}
export interface DescribeTargetGroupsInput {
  LoadBalancerArn?: string;
  TargetGroupArns?: Array<string>;
  Names?: Array<string>;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeTargetGroupsOutput {
  TargetGroups?: Array<TargetGroup>;
  NextMarker?: string;
}
export interface DescribeTargetHealthInput {
  TargetGroupArn: string;
  Targets?: Array<TargetDescription>;
  Include?: Array<DescribeTargetHealthInputIncludeEnum>;
}
export type DescribeTargetHealthInputIncludeEnum = "ANOMALY" | "ALL";
export interface DescribeTargetHealthOutput {
  TargetHealthDescriptions?: Array<TargetHealthDescription>;
}
export interface DescribeTrustStoreAssociationsInput {
  TrustStoreArn: string;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeTrustStoreAssociationsOutput {
  TrustStoreAssociations?: Array<TrustStoreAssociation>;
  NextMarker?: string;
}
export interface DescribeTrustStoreRevocation {
  TrustStoreArn?: string;
  RevocationId?: number;
  RevocationType?: RevocationType;
  NumberOfRevokedEntries?: number;
}
export type DescribeTrustStoreRevocationResponse =
  Array<DescribeTrustStoreRevocation>;
export interface DescribeTrustStoreRevocationsInput {
  TrustStoreArn: string;
  RevocationIds?: Array<number>;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeTrustStoreRevocationsOutput {
  TrustStoreRevocations?: Array<DescribeTrustStoreRevocation>;
  NextMarker?: string;
}
export interface DescribeTrustStoresInput {
  TrustStoreArns?: Array<string>;
  Names?: Array<string>;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeTrustStoresOutput {
  TrustStores?: Array<TrustStore>;
  NextMarker?: string;
}
export type Description = string;

export type DNSName = string;

export declare class DuplicateListenerException extends Data.TaggedError(
  "DuplicateListenerException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateLoadBalancerNameException extends Data.TaggedError(
  "DuplicateLoadBalancerNameException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateTagKeysException extends Data.TaggedError(
  "DuplicateTagKeysException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateTargetGroupNameException extends Data.TaggedError(
  "DuplicateTargetGroupNameException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateTrustStoreNameException extends Data.TaggedError(
  "DuplicateTrustStoreNameException",
)<{
  readonly Message?: string;
}> {}
export type EnablePrefixForIpv6SourceNatEnum = "ON" | "OFF";
export type EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic = string;

export type EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum =
  | "on"
  | "off";
export type ErrorDescription = string;

export interface FixedResponseActionConfig {
  MessageBody?: string;
  StatusCode: string;
  ContentType?: string;
}
export type FixedResponseActionContentType = string;

export type FixedResponseActionMessage = string;

export type FixedResponseActionStatusCode = string;

export interface ForwardActionConfig {
  TargetGroups?: Array<TargetGroupTuple>;
  TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
}
export interface GetResourcePolicyInput {
  ResourceArn: string;
}
export interface GetResourcePolicyOutput {
  Policy?: string;
}
export interface GetTrustStoreCaCertificatesBundleInput {
  TrustStoreArn: string;
}
export interface GetTrustStoreCaCertificatesBundleOutput {
  Location?: string;
}
export interface GetTrustStoreRevocationContentInput {
  TrustStoreArn: string;
  RevocationId: number;
}
export interface GetTrustStoreRevocationContentOutput {
  Location?: string;
}
export type GrpcCode = string;

export type HealthCheckEnabled = boolean;

export type HealthCheckIntervalSeconds = number;

export type HealthCheckPort = string;

export type HealthCheckThresholdCount = number;

export type HealthCheckTimeoutSeconds = number;

export declare class HealthUnavailableException extends Data.TaggedError(
  "HealthUnavailableException",
)<{
  readonly Message?: string;
}> {}
export interface HostHeaderConditionConfig {
  Values?: Array<string>;
}
export type HttpCode = string;

export interface HttpHeaderConditionConfig {
  HttpHeaderName?: string;
  Values?: Array<string>;
}
export type HttpHeaderConditionName = string;

export interface HttpRequestMethodConditionConfig {
  Values?: Array<string>;
}
export type IgnoreClientCertificateExpiry = boolean;

export declare class IncompatibleProtocolsException extends Data.TaggedError(
  "IncompatibleProtocolsException",
)<{
  readonly Message?: string;
}> {}
export declare class InsufficientCapacityException extends Data.TaggedError(
  "InsufficientCapacityException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidCaCertificatesBundleException extends Data.TaggedError(
  "InvalidCaCertificatesBundleException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidConfigurationRequestException extends Data.TaggedError(
  "InvalidConfigurationRequestException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidLoadBalancerActionException extends Data.TaggedError(
  "InvalidLoadBalancerActionException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRevocationContentException extends Data.TaggedError(
  "InvalidRevocationContentException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidSchemeException extends Data.TaggedError(
  "InvalidSchemeException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidSecurityGroupException extends Data.TaggedError(
  "InvalidSecurityGroupException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidSubnetException extends Data.TaggedError(
  "InvalidSubnetException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTargetException extends Data.TaggedError(
  "InvalidTargetException",
)<{
  readonly Message?: string;
}> {}
export type IpAddress = string;

export type IpAddressType =
  | "IPV4"
  | "DUALSTACK"
  | "DUALSTACK_WITHOUT_PUBLIC_IPV4";
export type IpamPoolId = string;

export interface IpamPools {
  Ipv4IpamPoolId?: string;
}
export type IPv6Address = string;

export type IsDefault = boolean;

export type LastModifiedTime = Date | string;

export interface Limit {
  Name?: string;
  Max?: string;
}
export type Limits = Array<Limit>;
export interface Listener {
  ListenerArn?: string;
  LoadBalancerArn?: string;
  Port?: number;
  Protocol?: ProtocolEnum;
  Certificates?: Array<Certificate>;
  SslPolicy?: string;
  DefaultActions?: Array<Action>;
  AlpnPolicy?: Array<string>;
  MutualAuthentication?: MutualAuthenticationAttributes;
}
export type ListenerArn = string;

export type ListenerArns = Array<string>;
export interface ListenerAttribute {
  Key?: string;
  Value?: string;
}
export type ListenerAttributeKey = string;

export type ListenerAttributes = Array<ListenerAttribute>;
export type ListenerAttributeValue = string;

export declare class ListenerNotFoundException extends Data.TaggedError(
  "ListenerNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Listeners = Array<Listener>;
export type ListOfDescribeTargetHealthIncludeOptions =
  Array<DescribeTargetHealthInputIncludeEnum>;
export type ListOfString = Array<string>;
export interface LoadBalancer {
  LoadBalancerArn?: string;
  DNSName?: string;
  CanonicalHostedZoneId?: string;
  CreatedTime?: Date | string;
  LoadBalancerName?: string;
  Scheme?: LoadBalancerSchemeEnum;
  VpcId?: string;
  State?: LoadBalancerState;
  Type?: LoadBalancerTypeEnum;
  AvailabilityZones?: Array<AvailabilityZone>;
  SecurityGroups?: Array<string>;
  IpAddressType?: IpAddressType;
  CustomerOwnedIpv4Pool?: string;
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
  IpamPools?: IpamPools;
}
export interface LoadBalancerAddress {
  IpAddress?: string;
  AllocationId?: string;
  PrivateIPv4Address?: string;
  IPv6Address?: string;
}
export type LoadBalancerAddresses = Array<LoadBalancerAddress>;
export type LoadBalancerArn = string;

export type LoadBalancerArns = Array<string>;
export interface LoadBalancerAttribute {
  Key?: string;
  Value?: string;
}
export type LoadBalancerAttributeKey = string;

export type LoadBalancerAttributes = Array<LoadBalancerAttribute>;
export type LoadBalancerAttributeValue = string;

export type LoadBalancerName = string;

export type LoadBalancerNames = Array<string>;
export declare class LoadBalancerNotFoundException extends Data.TaggedError(
  "LoadBalancerNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type LoadBalancers = Array<LoadBalancer>;
export type LoadBalancerSchemeEnum = "INTERNET_FACING" | "INTERNAL";
export interface LoadBalancerState {
  Code?: LoadBalancerStateEnum;
  Reason?: string;
}
export type LoadBalancerStateEnum =
  | "ACTIVE"
  | "PROVISIONING"
  | "ACTIVE_IMPAIRED"
  | "FAILED";
export type LoadBalancerTypeEnum = "APPLICATION" | "NETWORK" | "GATEWAY";
export type Location = string;

export type Marker = string;

export interface Matcher {
  HttpCode?: string;
  GrpcCode?: string;
}
export type Max = string;

export interface MinimumLoadBalancerCapacity {
  CapacityUnits?: number;
}
export type MitigationInEffectEnum = "YES" | "NO";
export type Mode = string;

export interface ModifyCapacityReservationInput {
  LoadBalancerArn: string;
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity;
  ResetCapacityReservation?: boolean;
}
export interface ModifyCapacityReservationOutput {
  LastModifiedTime?: Date | string;
  DecreaseRequestsRemaining?: number;
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity;
  CapacityReservationState?: Array<ZonalCapacityReservationState>;
}
export interface ModifyIpPoolsInput {
  LoadBalancerArn: string;
  IpamPools?: IpamPools;
  RemoveIpamPools?: Array<RemoveIpamPoolEnum>;
}
export interface ModifyIpPoolsOutput {
  IpamPools?: IpamPools;
}
export interface ModifyListenerAttributesInput {
  ListenerArn: string;
  Attributes: Array<ListenerAttribute>;
}
export interface ModifyListenerAttributesOutput {
  Attributes?: Array<ListenerAttribute>;
}
export interface ModifyListenerInput {
  ListenerArn: string;
  Port?: number;
  Protocol?: ProtocolEnum;
  SslPolicy?: string;
  Certificates?: Array<Certificate>;
  DefaultActions?: Array<Action>;
  AlpnPolicy?: Array<string>;
  MutualAuthentication?: MutualAuthenticationAttributes;
}
export interface ModifyListenerOutput {
  Listeners?: Array<Listener>;
}
export interface ModifyLoadBalancerAttributesInput {
  LoadBalancerArn: string;
  Attributes: Array<LoadBalancerAttribute>;
}
export interface ModifyLoadBalancerAttributesOutput {
  Attributes?: Array<LoadBalancerAttribute>;
}
export interface ModifyRuleInput {
  RuleArn: string;
  Conditions?: Array<RuleCondition>;
  Actions?: Array<Action>;
}
export interface ModifyRuleOutput {
  Rules?: Array<Rule>;
}
export interface ModifyTargetGroupAttributesInput {
  TargetGroupArn: string;
  Attributes: Array<TargetGroupAttribute>;
}
export interface ModifyTargetGroupAttributesOutput {
  Attributes?: Array<TargetGroupAttribute>;
}
export interface ModifyTargetGroupInput {
  TargetGroupArn: string;
  HealthCheckProtocol?: ProtocolEnum;
  HealthCheckPort?: string;
  HealthCheckPath?: string;
  HealthCheckEnabled?: boolean;
  HealthCheckIntervalSeconds?: number;
  HealthCheckTimeoutSeconds?: number;
  HealthyThresholdCount?: number;
  UnhealthyThresholdCount?: number;
  Matcher?: Matcher;
}
export interface ModifyTargetGroupOutput {
  TargetGroups?: Array<TargetGroup>;
}
export interface ModifyTrustStoreInput {
  TrustStoreArn: string;
  CaCertificatesBundleS3Bucket: string;
  CaCertificatesBundleS3Key: string;
  CaCertificatesBundleS3ObjectVersion?: string;
}
export interface ModifyTrustStoreOutput {
  TrustStores?: Array<TrustStore>;
}
export interface MutualAuthenticationAttributes {
  Mode?: string;
  TrustStoreArn?: string;
  IgnoreClientCertificateExpiry?: boolean;
  TrustStoreAssociationStatus?: TrustStoreAssociationStatusEnum;
  AdvertiseTrustStoreCaNames?: AdvertiseTrustStoreCaNamesEnum;
}
export type Name = string;

export type NumberOfCaCertificates = number;

export type NumberOfRevokedEntries = number;

export declare class OperationNotPermittedException extends Data.TaggedError(
  "OperationNotPermittedException",
)<{
  readonly Message?: string;
}> {}
export type OutpostId = string;

export type PageSize = number;

export type Path = string;

export interface PathPatternConditionConfig {
  Values?: Array<string>;
}
export type Policy = string;

export type Port = number;

export declare class PriorityInUseException extends Data.TaggedError(
  "PriorityInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class PriorRequestNotCompleteException extends Data.TaggedError(
  "PriorRequestNotCompleteException",
)<{
  readonly Message?: string;
}> {}
export type PrivateIPv4Address = string;

export type ProtocolEnum =
  | "HTTP"
  | "HTTPS"
  | "TCP"
  | "TLS"
  | "UDP"
  | "TCP_UDP"
  | "GENEVE";
export type ProtocolVersion = string;

export interface QueryStringConditionConfig {
  Values?: Array<QueryStringKeyValuePair>;
}
export interface QueryStringKeyValuePair {
  Key?: string;
  Value?: string;
}
export type QueryStringKeyValuePairList = Array<QueryStringKeyValuePair>;
export interface RedirectActionConfig {
  Protocol?: string;
  Port?: string;
  Host?: string;
  Path?: string;
  Query?: string;
  StatusCode: RedirectActionStatusCodeEnum;
}
export type RedirectActionHost = string;

export type RedirectActionPath = string;

export type RedirectActionPort = string;

export type RedirectActionProtocol = string;

export type RedirectActionQuery = string;

export type RedirectActionStatusCodeEnum = "HTTP_301" | "HTTP_302";
export interface RegisterTargetsInput {
  TargetGroupArn: string;
  Targets: Array<TargetDescription>;
}
export interface RegisterTargetsOutput {}
export type RemoveIpamPoolEnum = "ipv4";
export type RemoveIpamPools = Array<RemoveIpamPoolEnum>;
export interface RemoveListenerCertificatesInput {
  ListenerArn: string;
  Certificates: Array<Certificate>;
}
export interface RemoveListenerCertificatesOutput {}
export interface RemoveTagsInput {
  ResourceArns: Array<string>;
  TagKeys: Array<string>;
}
export interface RemoveTagsOutput {}
export interface RemoveTrustStoreRevocationsInput {
  TrustStoreArn: string;
  RevocationIds: Array<number>;
}
export interface RemoveTrustStoreRevocationsOutput {}
export type ResetCapacityReservation = boolean;

export type ResourceArn = string;

export type ResourceArns = Array<string>;
export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface RevocationContent {
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  RevocationType?: RevocationType;
}
export declare class RevocationContentNotFoundException extends Data.TaggedError(
  "RevocationContentNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type RevocationContents = Array<RevocationContent>;
export type RevocationId = number;

export declare class RevocationIdNotFoundException extends Data.TaggedError(
  "RevocationIdNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type RevocationIds = Array<number>;
export type RevocationType = "CRL";
export interface Rule {
  RuleArn?: string;
  Priority?: string;
  Conditions?: Array<RuleCondition>;
  Actions?: Array<Action>;
  IsDefault?: boolean;
}
export type RuleArn = string;

export type RuleArns = Array<string>;
export interface RuleCondition {
  Field?: string;
  Values?: Array<string>;
  HostHeaderConfig?: HostHeaderConditionConfig;
  PathPatternConfig?: PathPatternConditionConfig;
  HttpHeaderConfig?: HttpHeaderConditionConfig;
  QueryStringConfig?: QueryStringConditionConfig;
  HttpRequestMethodConfig?: HttpRequestMethodConditionConfig;
  SourceIpConfig?: SourceIpConditionConfig;
}
export type RuleConditionList = Array<RuleCondition>;
export declare class RuleNotFoundException extends Data.TaggedError(
  "RuleNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type RulePriority = number;

export type RulePriorityList = Array<RulePriorityPair>;
export interface RulePriorityPair {
  RuleArn?: string;
  Priority?: number;
}
export type Rules = Array<Rule>;
export type S3Bucket = string;

export type S3Key = string;

export type S3ObjectVersion = string;

export type SecurityGroupId = string;

export type SecurityGroups = Array<string>;
export interface SetIpAddressTypeInput {
  LoadBalancerArn: string;
  IpAddressType: IpAddressType;
}
export interface SetIpAddressTypeOutput {
  IpAddressType?: IpAddressType;
}
export interface SetRulePrioritiesInput {
  RulePriorities: Array<RulePriorityPair>;
}
export interface SetRulePrioritiesOutput {
  Rules?: Array<Rule>;
}
export interface SetSecurityGroupsInput {
  LoadBalancerArn: string;
  SecurityGroups: Array<string>;
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum;
}
export interface SetSecurityGroupsOutput {
  SecurityGroupIds?: Array<string>;
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum;
}
export interface SetSubnetsInput {
  LoadBalancerArn: string;
  Subnets?: Array<string>;
  SubnetMappings?: Array<SubnetMapping>;
  IpAddressType?: IpAddressType;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
}
export interface SetSubnetsOutput {
  AvailabilityZones?: Array<AvailabilityZone>;
  IpAddressType?: IpAddressType;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
}
export interface SourceIpConditionConfig {
  Values?: Array<string>;
}
export type SourceNatIpv6Prefix = string;

export type SourceNatIpv6Prefixes = Array<string>;
export type SslPolicies = Array<SslPolicy>;
export interface SslPolicy {
  SslProtocols?: Array<string>;
  Ciphers?: Array<Cipher>;
  Name?: string;
  SupportedLoadBalancerTypes?: Array<string>;
}
export type SslPolicyName = string;

export type SslPolicyNames = Array<string>;
export declare class SSLPolicyNotFoundException extends Data.TaggedError(
  "SSLPolicyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type SslProtocol = string;

export type SslProtocols = Array<string>;
export type StateReason = string;

export type StringValue = string;

export type SubnetId = string;

export interface SubnetMapping {
  SubnetId?: string;
  AllocationId?: string;
  PrivateIPv4Address?: string;
  IPv6Address?: string;
  SourceNatIpv6Prefix?: string;
}
export type SubnetMappings = Array<SubnetMapping>;
export declare class SubnetNotFoundException extends Data.TaggedError(
  "SubnetNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Subnets = Array<string>;
export interface Tag {
  Key: string;
  Value?: string;
}
export interface TagDescription {
  ResourceArn?: string;
  Tags?: Array<Tag>;
}
export type TagDescriptions = Array<TagDescription>;
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagList = Array<Tag>;
export type TagValue = string;

export type TargetAdministrativeOverrideReasonEnum =
  | "INTERNAL_ERROR"
  | "NO_OVERRIDE_ENGAGED"
  | "ZONAL_SHIFT_ENGAGED"
  | "ZONAL_SHIFT_DELEGATED_TO_DNS";
export type TargetAdministrativeOverrideStateEnum =
  | "UNKNOWN"
  | "NO_OVERRIDE"
  | "ZONAL_SHIFT_ACTIVE"
  | "ZONAL_SHIFT_DELEGATED_TO_DNS";
export interface TargetDescription {
  Id: string;
  Port?: number;
  AvailabilityZone?: string;
}
export type TargetDescriptions = Array<TargetDescription>;
export interface TargetGroup {
  TargetGroupArn?: string;
  TargetGroupName?: string;
  Protocol?: ProtocolEnum;
  Port?: number;
  VpcId?: string;
  HealthCheckProtocol?: ProtocolEnum;
  HealthCheckPort?: string;
  HealthCheckEnabled?: boolean;
  HealthCheckIntervalSeconds?: number;
  HealthCheckTimeoutSeconds?: number;
  HealthyThresholdCount?: number;
  UnhealthyThresholdCount?: number;
  HealthCheckPath?: string;
  Matcher?: Matcher;
  LoadBalancerArns?: Array<string>;
  TargetType?: TargetTypeEnum;
  ProtocolVersion?: string;
  IpAddressType?: TargetGroupIpAddressTypeEnum;
}
export type TargetGroupArn = string;

export type TargetGroupArns = Array<string>;
export declare class TargetGroupAssociationLimitException extends Data.TaggedError(
  "TargetGroupAssociationLimitException",
)<{
  readonly Message?: string;
}> {}
export interface TargetGroupAttribute {
  Key?: string;
  Value?: string;
}
export type TargetGroupAttributeKey = string;

export type TargetGroupAttributes = Array<TargetGroupAttribute>;
export type TargetGroupAttributeValue = string;

export type TargetGroupIpAddressTypeEnum = "IPV4" | "IPV6";
export type TargetGroupList = Array<TargetGroupTuple>;
export type TargetGroupName = string;

export type TargetGroupNames = Array<string>;
export declare class TargetGroupNotFoundException extends Data.TaggedError(
  "TargetGroupNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type TargetGroups = Array<TargetGroup>;
export interface TargetGroupStickinessConfig {
  Enabled?: boolean;
  DurationSeconds?: number;
}
export type TargetGroupStickinessDurationSeconds = number;

export type TargetGroupStickinessEnabled = boolean;

export interface TargetGroupTuple {
  TargetGroupArn?: string;
  Weight?: number;
}
export type TargetGroupWeight = number;

export interface TargetHealth {
  State?: TargetHealthStateEnum;
  Reason?: TargetHealthReasonEnum;
  Description?: string;
}
export interface TargetHealthDescription {
  Target?: TargetDescription;
  HealthCheckPort?: string;
  TargetHealth?: TargetHealth;
  AnomalyDetection?: AnomalyDetection;
  AdministrativeOverride?: AdministrativeOverride;
}
export type TargetHealthDescriptions = Array<TargetHealthDescription>;
export type TargetHealthReasonEnum =
  | "REGISTRATION_IN_PROGRESS"
  | "INITIAL_HEALTH_CHECKING"
  | "RESPONSE_CODE_MISMATCH"
  | "TIMEOUT"
  | "FAILED_HEALTH_CHECKS"
  | "NOT_REGISTERED"
  | "NOT_IN_USE"
  | "DEREGISTRATION_IN_PROGRESS"
  | "INVALID_STATE"
  | "IP_UNUSABLE"
  | "HEALTH_CHECK_DISABLED"
  | "INTERNAL_ERROR";
export type TargetHealthStateEnum =
  | "INITIAL"
  | "HEALTHY"
  | "UNHEALTHY"
  | "UNHEALTHY_DRAINING"
  | "UNUSED"
  | "DRAINING"
  | "UNAVAILABLE";
export type TargetId = string;

export type TargetTypeEnum = "INSTANCE" | "IP" | "LAMBDA" | "ALB";
export declare class TooManyActionsException extends Data.TaggedError(
  "TooManyActionsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyCertificatesException extends Data.TaggedError(
  "TooManyCertificatesException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyListenersException extends Data.TaggedError(
  "TooManyListenersException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyLoadBalancersException extends Data.TaggedError(
  "TooManyLoadBalancersException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyRegistrationsForTargetIdException extends Data.TaggedError(
  "TooManyRegistrationsForTargetIdException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyRulesException extends Data.TaggedError(
  "TooManyRulesException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTargetGroupsException extends Data.TaggedError(
  "TooManyTargetGroupsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTargetsException extends Data.TaggedError(
  "TooManyTargetsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTrustStoreRevocationEntriesException extends Data.TaggedError(
  "TooManyTrustStoreRevocationEntriesException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTrustStoresException extends Data.TaggedError(
  "TooManyTrustStoresException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyUniqueTargetGroupsPerLoadBalancerException extends Data.TaggedError(
  "TooManyUniqueTargetGroupsPerLoadBalancerException",
)<{
  readonly Message?: string;
}> {}
export type TotalRevokedEntries = number;

export interface TrustStore {
  Name?: string;
  TrustStoreArn?: string;
  Status?: TrustStoreStatus;
  NumberOfCaCertificates?: number;
  TotalRevokedEntries?: number;
}
export type TrustStoreArn = string;

export type TrustStoreArns = Array<string>;
export interface TrustStoreAssociation {
  ResourceArn?: string;
}
export declare class TrustStoreAssociationNotFoundException extends Data.TaggedError(
  "TrustStoreAssociationNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type TrustStoreAssociationResourceArn = string;

export type TrustStoreAssociations = Array<TrustStoreAssociation>;
export type TrustStoreAssociationStatusEnum = "ACTIVE" | "REMOVED";
export declare class TrustStoreInUseException extends Data.TaggedError(
  "TrustStoreInUseException",
)<{
  readonly Message?: string;
}> {}
export type TrustStoreName = string;

export type TrustStoreNames = Array<string>;
export declare class TrustStoreNotFoundException extends Data.TaggedError(
  "TrustStoreNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class TrustStoreNotReadyException extends Data.TaggedError(
  "TrustStoreNotReadyException",
)<{
  readonly Message?: string;
}> {}
export interface TrustStoreRevocation {
  TrustStoreArn?: string;
  RevocationId?: number;
  RevocationType?: RevocationType;
  NumberOfRevokedEntries?: number;
}
export type TrustStoreRevocations = Array<TrustStoreRevocation>;
export type TrustStores = Array<TrustStore>;
export type TrustStoreStatus = "ACTIVE" | "CREATING";
export declare class UnsupportedProtocolException extends Data.TaggedError(
  "UnsupportedProtocolException",
)<{
  readonly Message?: string;
}> {}
export type VpcId = string;

export interface ZonalCapacityReservationState {
  State?: CapacityReservationStatus;
  AvailabilityZone?: string;
  EffectiveCapacityUnits?: number;
}
export type ZonalCapacityReservationStates =
  Array<ZonalCapacityReservationState>;
export type ZoneName = string;

export declare namespace AddListenerCertificates {
  export type Input = AddListenerCertificatesInput;
  export type Output = AddListenerCertificatesOutput;
  export type Error =
    | CertificateNotFoundException
    | ListenerNotFoundException
    | TooManyCertificatesException
    | CommonAwsError;
}

export declare namespace AddTags {
  export type Input = AddTagsInput;
  export type Output = AddTagsOutput;
  export type Error =
    | DuplicateTagKeysException
    | ListenerNotFoundException
    | LoadBalancerNotFoundException
    | RuleNotFoundException
    | TargetGroupNotFoundException
    | TooManyTagsException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace AddTrustStoreRevocations {
  export type Input = AddTrustStoreRevocationsInput;
  export type Output = AddTrustStoreRevocationsOutput;
  export type Error =
    | InvalidRevocationContentException
    | RevocationContentNotFoundException
    | TooManyTrustStoreRevocationEntriesException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace CreateListener {
  export type Input = CreateListenerInput;
  export type Output = CreateListenerOutput;
  export type Error =
    | ALPNPolicyNotSupportedException
    | CertificateNotFoundException
    | DuplicateListenerException
    | IncompatibleProtocolsException
    | InvalidConfigurationRequestException
    | InvalidLoadBalancerActionException
    | LoadBalancerNotFoundException
    | SSLPolicyNotFoundException
    | TargetGroupAssociationLimitException
    | TargetGroupNotFoundException
    | TooManyActionsException
    | TooManyCertificatesException
    | TooManyListenersException
    | TooManyRegistrationsForTargetIdException
    | TooManyTagsException
    | TooManyTargetsException
    | TooManyUniqueTargetGroupsPerLoadBalancerException
    | TrustStoreNotFoundException
    | TrustStoreNotReadyException
    | UnsupportedProtocolException
    | CommonAwsError;
}

export declare namespace CreateLoadBalancer {
  export type Input = CreateLoadBalancerInput;
  export type Output = CreateLoadBalancerOutput;
  export type Error =
    | AllocationIdNotFoundException
    | AvailabilityZoneNotSupportedException
    | DuplicateLoadBalancerNameException
    | DuplicateTagKeysException
    | InvalidConfigurationRequestException
    | InvalidSchemeException
    | InvalidSecurityGroupException
    | InvalidSubnetException
    | OperationNotPermittedException
    | ResourceInUseException
    | SubnetNotFoundException
    | TooManyLoadBalancersException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateRule {
  export type Input = CreateRuleInput;
  export type Output = CreateRuleOutput;
  export type Error =
    | IncompatibleProtocolsException
    | InvalidConfigurationRequestException
    | InvalidLoadBalancerActionException
    | ListenerNotFoundException
    | PriorityInUseException
    | TargetGroupAssociationLimitException
    | TargetGroupNotFoundException
    | TooManyActionsException
    | TooManyRegistrationsForTargetIdException
    | TooManyRulesException
    | TooManyTagsException
    | TooManyTargetGroupsException
    | TooManyTargetsException
    | TooManyUniqueTargetGroupsPerLoadBalancerException
    | UnsupportedProtocolException
    | CommonAwsError;
}

export declare namespace CreateTargetGroup {
  export type Input = CreateTargetGroupInput;
  export type Output = CreateTargetGroupOutput;
  export type Error =
    | DuplicateTargetGroupNameException
    | InvalidConfigurationRequestException
    | TooManyTagsException
    | TooManyTargetGroupsException
    | CommonAwsError;
}

export declare namespace CreateTrustStore {
  export type Input = CreateTrustStoreInput;
  export type Output = CreateTrustStoreOutput;
  export type Error =
    | CaCertificatesBundleNotFoundException
    | DuplicateTagKeysException
    | DuplicateTrustStoreNameException
    | InvalidCaCertificatesBundleException
    | TooManyTagsException
    | TooManyTrustStoresException
    | CommonAwsError;
}

export declare namespace DeleteListener {
  export type Input = DeleteListenerInput;
  export type Output = DeleteListenerOutput;
  export type Error =
    | ListenerNotFoundException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteLoadBalancer {
  export type Input = DeleteLoadBalancerInput;
  export type Output = DeleteLoadBalancerOutput;
  export type Error =
    | LoadBalancerNotFoundException
    | OperationNotPermittedException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteRule {
  export type Input = DeleteRuleInput;
  export type Output = DeleteRuleOutput;
  export type Error =
    | OperationNotPermittedException
    | RuleNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSharedTrustStoreAssociation {
  export type Input = DeleteSharedTrustStoreAssociationInput;
  export type Output = DeleteSharedTrustStoreAssociationOutput;
  export type Error =
    | DeleteAssociationSameAccountException
    | TrustStoreAssociationNotFoundException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTargetGroup {
  export type Input = DeleteTargetGroupInput;
  export type Output = DeleteTargetGroupOutput;
  export type Error = ResourceInUseException | CommonAwsError;
}

export declare namespace DeleteTrustStore {
  export type Input = DeleteTrustStoreInput;
  export type Output = DeleteTrustStoreOutput;
  export type Error =
    | TrustStoreInUseException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace DeregisterTargets {
  export type Input = DeregisterTargetsInput;
  export type Output = DeregisterTargetsOutput;
  export type Error =
    | InvalidTargetException
    | TargetGroupNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAccountLimits {
  export type Input = DescribeAccountLimitsInput;
  export type Output = DescribeAccountLimitsOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeCapacityReservation {
  export type Input = DescribeCapacityReservationInput;
  export type Output = DescribeCapacityReservationOutput;
  export type Error = LoadBalancerNotFoundException | CommonAwsError;
}

export declare namespace DescribeListenerAttributes {
  export type Input = DescribeListenerAttributesInput;
  export type Output = DescribeListenerAttributesOutput;
  export type Error = ListenerNotFoundException | CommonAwsError;
}

export declare namespace DescribeListenerCertificates {
  export type Input = DescribeListenerCertificatesInput;
  export type Output = DescribeListenerCertificatesOutput;
  export type Error = ListenerNotFoundException | CommonAwsError;
}

export declare namespace DescribeListeners {
  export type Input = DescribeListenersInput;
  export type Output = DescribeListenersOutput;
  export type Error =
    | ListenerNotFoundException
    | LoadBalancerNotFoundException
    | UnsupportedProtocolException
    | CommonAwsError;
}

export declare namespace DescribeLoadBalancerAttributes {
  export type Input = DescribeLoadBalancerAttributesInput;
  export type Output = DescribeLoadBalancerAttributesOutput;
  export type Error = LoadBalancerNotFoundException | CommonAwsError;
}

export declare namespace DescribeLoadBalancers {
  export type Input = DescribeLoadBalancersInput;
  export type Output = DescribeLoadBalancersOutput;
  export type Error = LoadBalancerNotFoundException | CommonAwsError;
}

export declare namespace DescribeRules {
  export type Input = DescribeRulesInput;
  export type Output = DescribeRulesOutput;
  export type Error =
    | ListenerNotFoundException
    | RuleNotFoundException
    | UnsupportedProtocolException
    | CommonAwsError;
}

export declare namespace DescribeSSLPolicies {
  export type Input = DescribeSSLPoliciesInput;
  export type Output = DescribeSSLPoliciesOutput;
  export type Error = SSLPolicyNotFoundException | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsInput;
  export type Output = DescribeTagsOutput;
  export type Error =
    | ListenerNotFoundException
    | LoadBalancerNotFoundException
    | RuleNotFoundException
    | TargetGroupNotFoundException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTargetGroupAttributes {
  export type Input = DescribeTargetGroupAttributesInput;
  export type Output = DescribeTargetGroupAttributesOutput;
  export type Error = TargetGroupNotFoundException | CommonAwsError;
}

export declare namespace DescribeTargetGroups {
  export type Input = DescribeTargetGroupsInput;
  export type Output = DescribeTargetGroupsOutput;
  export type Error =
    | LoadBalancerNotFoundException
    | TargetGroupNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTargetHealth {
  export type Input = DescribeTargetHealthInput;
  export type Output = DescribeTargetHealthOutput;
  export type Error =
    | HealthUnavailableException
    | InvalidTargetException
    | TargetGroupNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTrustStoreAssociations {
  export type Input = DescribeTrustStoreAssociationsInput;
  export type Output = DescribeTrustStoreAssociationsOutput;
  export type Error = TrustStoreNotFoundException | CommonAwsError;
}

export declare namespace DescribeTrustStoreRevocations {
  export type Input = DescribeTrustStoreRevocationsInput;
  export type Output = DescribeTrustStoreRevocationsOutput;
  export type Error =
    | RevocationIdNotFoundException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTrustStores {
  export type Input = DescribeTrustStoresInput;
  export type Output = DescribeTrustStoresOutput;
  export type Error = TrustStoreNotFoundException | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyInput;
  export type Output = GetResourcePolicyOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetTrustStoreCaCertificatesBundle {
  export type Input = GetTrustStoreCaCertificatesBundleInput;
  export type Output = GetTrustStoreCaCertificatesBundleOutput;
  export type Error = TrustStoreNotFoundException | CommonAwsError;
}

export declare namespace GetTrustStoreRevocationContent {
  export type Input = GetTrustStoreRevocationContentInput;
  export type Output = GetTrustStoreRevocationContentOutput;
  export type Error =
    | RevocationIdNotFoundException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyCapacityReservation {
  export type Input = ModifyCapacityReservationInput;
  export type Output = ModifyCapacityReservationOutput;
  export type Error =
    | CapacityDecreaseRequestsLimitExceededException
    | CapacityReservationPendingException
    | CapacityUnitsLimitExceededException
    | InsufficientCapacityException
    | InvalidConfigurationRequestException
    | LoadBalancerNotFoundException
    | OperationNotPermittedException
    | PriorRequestNotCompleteException
    | CommonAwsError;
}

export declare namespace ModifyIpPools {
  export type Input = ModifyIpPoolsInput;
  export type Output = ModifyIpPoolsOutput;
  export type Error = LoadBalancerNotFoundException | CommonAwsError;
}

export declare namespace ModifyListener {
  export type Input = ModifyListenerInput;
  export type Output = ModifyListenerOutput;
  export type Error =
    | ALPNPolicyNotSupportedException
    | CertificateNotFoundException
    | DuplicateListenerException
    | IncompatibleProtocolsException
    | InvalidConfigurationRequestException
    | InvalidLoadBalancerActionException
    | ListenerNotFoundException
    | SSLPolicyNotFoundException
    | TargetGroupAssociationLimitException
    | TargetGroupNotFoundException
    | TooManyActionsException
    | TooManyCertificatesException
    | TooManyListenersException
    | TooManyRegistrationsForTargetIdException
    | TooManyTargetsException
    | TooManyUniqueTargetGroupsPerLoadBalancerException
    | TrustStoreNotFoundException
    | TrustStoreNotReadyException
    | UnsupportedProtocolException
    | CommonAwsError;
}

export declare namespace ModifyListenerAttributes {
  export type Input = ModifyListenerAttributesInput;
  export type Output = ModifyListenerAttributesOutput;
  export type Error =
    | InvalidConfigurationRequestException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyLoadBalancerAttributes {
  export type Input = ModifyLoadBalancerAttributesInput;
  export type Output = ModifyLoadBalancerAttributesOutput;
  export type Error =
    | InvalidConfigurationRequestException
    | LoadBalancerNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyRule {
  export type Input = ModifyRuleInput;
  export type Output = ModifyRuleOutput;
  export type Error =
    | IncompatibleProtocolsException
    | InvalidLoadBalancerActionException
    | OperationNotPermittedException
    | RuleNotFoundException
    | TargetGroupAssociationLimitException
    | TargetGroupNotFoundException
    | TooManyActionsException
    | TooManyRegistrationsForTargetIdException
    | TooManyTargetsException
    | TooManyUniqueTargetGroupsPerLoadBalancerException
    | UnsupportedProtocolException
    | CommonAwsError;
}

export declare namespace ModifyTargetGroup {
  export type Input = ModifyTargetGroupInput;
  export type Output = ModifyTargetGroupOutput;
  export type Error =
    | InvalidConfigurationRequestException
    | TargetGroupNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyTargetGroupAttributes {
  export type Input = ModifyTargetGroupAttributesInput;
  export type Output = ModifyTargetGroupAttributesOutput;
  export type Error =
    | InvalidConfigurationRequestException
    | TargetGroupNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyTrustStore {
  export type Input = ModifyTrustStoreInput;
  export type Output = ModifyTrustStoreOutput;
  export type Error =
    | CaCertificatesBundleNotFoundException
    | InvalidCaCertificatesBundleException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace RegisterTargets {
  export type Input = RegisterTargetsInput;
  export type Output = RegisterTargetsOutput;
  export type Error =
    | InvalidTargetException
    | TargetGroupNotFoundException
    | TooManyRegistrationsForTargetIdException
    | TooManyTargetsException
    | CommonAwsError;
}

export declare namespace RemoveListenerCertificates {
  export type Input = RemoveListenerCertificatesInput;
  export type Output = RemoveListenerCertificatesOutput;
  export type Error =
    | ListenerNotFoundException
    | OperationNotPermittedException
    | CommonAwsError;
}

export declare namespace RemoveTags {
  export type Input = RemoveTagsInput;
  export type Output = RemoveTagsOutput;
  export type Error =
    | ListenerNotFoundException
    | LoadBalancerNotFoundException
    | RuleNotFoundException
    | TargetGroupNotFoundException
    | TooManyTagsException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace RemoveTrustStoreRevocations {
  export type Input = RemoveTrustStoreRevocationsInput;
  export type Output = RemoveTrustStoreRevocationsOutput;
  export type Error =
    | RevocationIdNotFoundException
    | TrustStoreNotFoundException
    | CommonAwsError;
}

export declare namespace SetIpAddressType {
  export type Input = SetIpAddressTypeInput;
  export type Output = SetIpAddressTypeOutput;
  export type Error =
    | InvalidConfigurationRequestException
    | InvalidSubnetException
    | LoadBalancerNotFoundException
    | CommonAwsError;
}

export declare namespace SetRulePriorities {
  export type Input = SetRulePrioritiesInput;
  export type Output = SetRulePrioritiesOutput;
  export type Error =
    | OperationNotPermittedException
    | PriorityInUseException
    | RuleNotFoundException
    | CommonAwsError;
}

export declare namespace SetSecurityGroups {
  export type Input = SetSecurityGroupsInput;
  export type Output = SetSecurityGroupsOutput;
  export type Error =
    | InvalidConfigurationRequestException
    | InvalidSecurityGroupException
    | LoadBalancerNotFoundException
    | CommonAwsError;
}

export declare namespace SetSubnets {
  export type Input = SetSubnetsInput;
  export type Output = SetSubnetsOutput;
  export type Error =
    | AllocationIdNotFoundException
    | AvailabilityZoneNotSupportedException
    | CapacityReservationPendingException
    | InvalidConfigurationRequestException
    | InvalidSubnetException
    | LoadBalancerNotFoundException
    | SubnetNotFoundException
    | CommonAwsError;
}
