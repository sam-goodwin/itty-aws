import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSWAF_20190729 {
  associateWebACL(
    input: AssociateWebACLRequest,
  ): Effect.Effect<
    AssociateWebACLResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFUnavailableEntityException
    | CommonAwsError
  >;
  checkCapacity(
    input: CheckCapacityRequest,
  ): Effect.Effect<
    CheckCapacityResponse,
    | WAFExpiredManagedRuleGroupVersionException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFSubscriptionNotFoundException
    | WAFUnavailableEntityException
    | CommonAwsError
  >;
  createAPIKey(
    input: CreateAPIKeyRequest,
  ): Effect.Effect<
    CreateAPIKeyResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | CommonAwsError
  >;
  createIPSet(
    input: CreateIPSetRequest,
  ): Effect.Effect<
    CreateIPSetResponse,
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError
  >;
  createRegexPatternSet(
    input: CreateRegexPatternSetRequest,
  ): Effect.Effect<
    CreateRegexPatternSetResponse,
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError
  >;
  createRuleGroup(
    input: CreateRuleGroupRequest,
  ): Effect.Effect<
    CreateRuleGroupResponse,
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFSubscriptionNotFoundException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | WAFUnavailableEntityException
    | CommonAwsError
  >;
  createWebACL(
    input: CreateWebACLRequest,
  ): Effect.Effect<
    CreateWebACLResponse,
    | WAFConfigurationWarningException
    | WAFDuplicateItemException
    | WAFExpiredManagedRuleGroupVersionException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFSubscriptionNotFoundException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | WAFUnavailableEntityException
    | CommonAwsError
  >;
  deleteAPIKey(
    input: DeleteAPIKeyRequest,
  ): Effect.Effect<
    DeleteAPIKeyResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError
  >;
  deleteFirewallManagerRuleGroups(
    input: DeleteFirewallManagerRuleGroupsRequest,
  ): Effect.Effect<
    DeleteFirewallManagerRuleGroupsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError
  >;
  deleteIPSet(
    input: DeleteIPSetRequest,
  ): Effect.Effect<
    DeleteIPSetResponse,
    | WAFAssociatedItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError
  >;
  deleteLoggingConfiguration(
    input: DeleteLoggingConfigurationRequest,
  ): Effect.Effect<
    DeleteLoggingConfigurationResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError
  >;
  deletePermissionPolicy(
    input: DeletePermissionPolicyRequest,
  ): Effect.Effect<
    DeletePermissionPolicyResponse,
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  deleteRegexPatternSet(
    input: DeleteRegexPatternSetRequest,
  ): Effect.Effect<
    DeleteRegexPatternSetResponse,
    | WAFAssociatedItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError
  >;
  deleteRuleGroup(
    input: DeleteRuleGroupRequest,
  ): Effect.Effect<
    DeleteRuleGroupResponse,
    | WAFAssociatedItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError
  >;
  deleteWebACL(
    input: DeleteWebACLRequest,
  ): Effect.Effect<
    DeleteWebACLResponse,
    | WAFAssociatedItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError
  >;
  describeAllManagedProducts(
    input: DescribeAllManagedProductsRequest,
  ): Effect.Effect<
    DescribeAllManagedProductsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  describeManagedProductsByVendor(
    input: DescribeManagedProductsByVendorRequest,
  ): Effect.Effect<
    DescribeManagedProductsByVendorResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  describeManagedRuleGroup(
    input: DescribeManagedRuleGroupRequest,
  ): Effect.Effect<
    DescribeManagedRuleGroupResponse,
    | WAFExpiredManagedRuleGroupVersionException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  disassociateWebACL(
    input: DisassociateWebACLRequest,
  ): Effect.Effect<
    DisassociateWebACLResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  generateMobileSdkReleaseUrl(
    input: GenerateMobileSdkReleaseUrlRequest,
  ): Effect.Effect<
    GenerateMobileSdkReleaseUrlResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getDecryptedAPIKey(
    input: GetDecryptedAPIKeyRequest,
  ): Effect.Effect<
    GetDecryptedAPIKeyResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getIPSet(
    input: GetIPSetRequest,
  ): Effect.Effect<
    GetIPSetResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getLoggingConfiguration(
    input: GetLoggingConfigurationRequest,
  ): Effect.Effect<
    GetLoggingConfigurationResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getManagedRuleSet(
    input: GetManagedRuleSetRequest,
  ): Effect.Effect<
    GetManagedRuleSetResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getMobileSdkRelease(
    input: GetMobileSdkReleaseRequest,
  ): Effect.Effect<
    GetMobileSdkReleaseResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getPermissionPolicy(
    input: GetPermissionPolicyRequest,
  ): Effect.Effect<
    GetPermissionPolicyResponse,
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getRateBasedStatementManagedKeys(
    input: GetRateBasedStatementManagedKeysRequest,
  ): Effect.Effect<
    GetRateBasedStatementManagedKeysResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFUnsupportedAggregateKeyTypeException
    | CommonAwsError
  >;
  getRegexPatternSet(
    input: GetRegexPatternSetRequest,
  ): Effect.Effect<
    GetRegexPatternSetResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getRuleGroup(
    input: GetRuleGroupRequest,
  ): Effect.Effect<
    GetRuleGroupResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getSampledRequests(
    input: GetSampledRequestsRequest,
  ): Effect.Effect<
    GetSampledRequestsResponse,
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getWebACL(
    input: GetWebACLRequest,
  ): Effect.Effect<
    GetWebACLResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  getWebACLForResource(
    input: GetWebACLForResourceRequest,
  ): Effect.Effect<
    GetWebACLForResourceResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFUnavailableEntityException
    | CommonAwsError
  >;
  listAPIKeys(
    input: ListAPIKeysRequest,
  ): Effect.Effect<
    ListAPIKeysResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | CommonAwsError
  >;
  listAvailableManagedRuleGroups(
    input: ListAvailableManagedRuleGroupsRequest,
  ): Effect.Effect<
    ListAvailableManagedRuleGroupsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  listAvailableManagedRuleGroupVersions(
    input: ListAvailableManagedRuleGroupVersionsRequest,
  ): Effect.Effect<
    ListAvailableManagedRuleGroupVersionsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  listIPSets(
    input: ListIPSetsRequest,
  ): Effect.Effect<
    ListIPSetsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  listLoggingConfigurations(
    input: ListLoggingConfigurationsRequest,
  ): Effect.Effect<
    ListLoggingConfigurationsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  listManagedRuleSets(
    input: ListManagedRuleSetsRequest,
  ): Effect.Effect<
    ListManagedRuleSetsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  listMobileSdkReleases(
    input: ListMobileSdkReleasesRequest,
  ): Effect.Effect<
    ListMobileSdkReleasesResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  listRegexPatternSets(
    input: ListRegexPatternSetsRequest,
  ): Effect.Effect<
    ListRegexPatternSetsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  listResourcesForWebACL(
    input: ListResourcesForWebACLRequest,
  ): Effect.Effect<
    ListResourcesForWebACLResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  listRuleGroups(
    input: ListRuleGroupsRequest,
  ): Effect.Effect<
    ListRuleGroupsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError
  >;
  listWebACLs(
    input: ListWebACLsRequest,
  ): Effect.Effect<
    ListWebACLsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError
  >;
  putLoggingConfiguration(
    input: PutLoggingConfigurationRequest,
  ): Effect.Effect<
    PutLoggingConfigurationResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFLogDestinationPermissionIssueException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFServiceLinkedRoleErrorException
    | CommonAwsError
  >;
  putManagedRuleSetVersions(
    input: PutManagedRuleSetVersionsRequest,
  ): Effect.Effect<
    PutManagedRuleSetVersionsResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError
  >;
  putPermissionPolicy(
    input: PutPermissionPolicyRequest,
  ): Effect.Effect<
    PutPermissionPolicyResponse,
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFInvalidPermissionPolicyException
    | WAFNonexistentItemException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError
  >;
  updateIPSet(
    input: UpdateIPSetRequest,
  ): Effect.Effect<
    UpdateIPSetResponse,
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError
  >;
  updateManagedRuleSetVersionExpiryDate(
    input: UpdateManagedRuleSetVersionExpiryDateRequest,
  ): Effect.Effect<
    UpdateManagedRuleSetVersionExpiryDateResponse,
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError
  >;
  updateRegexPatternSet(
    input: UpdateRegexPatternSetRequest,
  ): Effect.Effect<
    UpdateRegexPatternSetResponse,
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError
  >;
  updateRuleGroup(
    input: UpdateRuleGroupRequest,
  ): Effect.Effect<
    UpdateRuleGroupResponse,
    | WAFConfigurationWarningException
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFSubscriptionNotFoundException
    | WAFUnavailableEntityException
    | CommonAwsError
  >;
  updateWebACL(
    input: UpdateWebACLRequest,
  ): Effect.Effect<
    UpdateWebACLResponse,
    | WAFConfigurationWarningException
    | WAFDuplicateItemException
    | WAFExpiredManagedRuleGroupVersionException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFSubscriptionNotFoundException
    | WAFUnavailableEntityException
    | CommonAwsError
  >;
}

export type Wafv2 = AWSWAF_20190729;

export type Action = string;

export interface ActionCondition {
  Action: ActionValue;
}
export type ActionValue =
  | "ALLOW"
  | "BLOCK"
  | "COUNT"
  | "CAPTCHA"
  | "CHALLENGE"
  | "EXCLUDED_AS_COUNT";
export interface AddressField {
  Identifier: string;
}
export type AddressFields = Array<AddressField>;
export interface All {}
export interface AllowAction {
  CustomRequestHandling?: CustomRequestHandling;
}
export interface AllQueryArguments {}
export interface AndStatement {
  Statements: Array<Statement>;
}
export type APIKey = string;

export type APIKeySummaries = Array<APIKeySummary>;
export interface APIKeySummary {
  TokenDomains?: Array<string>;
  APIKey?: string;
  CreationTimestamp?: Date | string;
  Version?: number;
}
export type APIKeyTokenDomains = Array<string>;
export type APIKeyVersion = number;

export interface ApplicationAttribute {
  Name?: string;
  Values?: Array<string>;
}
export type ApplicationAttributes = Array<ApplicationAttribute>;
export interface ApplicationConfig {
  Attributes?: Array<ApplicationAttribute>;
}
export type ASN = number;

export type AsnList = Array<number>;
export interface AsnMatchStatement {
  AsnList: Array<number>;
  ForwardedIPConfig?: ForwardedIPConfig;
}
export type AssociatedResourceType =
  | "CLOUDFRONT"
  | "API_GATEWAY"
  | "COGNITO_USER_POOL"
  | "APP_RUNNER_SERVICE"
  | "VERIFIED_ACCESS_INSTANCE";
export interface AssociateWebACLRequest {
  WebACLArn: string;
  ResourceArn: string;
}
export interface AssociateWebACLResponse {}
export interface AssociationConfig {
  RequestBody?: Record<
    AssociatedResourceType,
    RequestBodyAssociatedResourceTypeConfig
  >;
}
export type AttributeName = string;

export type AttributeValue = string;

export type AttributeValues = Array<string>;
export interface AWSManagedRulesACFPRuleSet {
  CreationPath: string;
  RegistrationPagePath: string;
  RequestInspection: RequestInspectionACFP;
  ResponseInspection?: ResponseInspection;
  EnableRegexInPath?: boolean;
}
export interface AWSManagedRulesAntiDDoSRuleSet {
  ClientSideActionConfig: ClientSideActionConfig;
  SensitivityToBlock?: SensitivityToAct;
}
export interface AWSManagedRulesATPRuleSet {
  LoginPath: string;
  RequestInspection?: RequestInspection;
  ResponseInspection?: ResponseInspection;
  EnableRegexInPath?: boolean;
}
export interface AWSManagedRulesBotControlRuleSet {
  InspectionLevel: InspectionLevel;
  EnableMachineLearning?: boolean;
}
export interface BlockAction {
  CustomResponse?: CustomResponse;
}
export interface Body {
  OversizeHandling?: OversizeHandling;
}
export type BodyParsingFallbackBehavior =
  | "MATCH"
  | "NO_MATCH"
  | "EVALUATE_AS_STRING";
export interface ByteMatchStatement {
  SearchString: Uint8Array | string;
  FieldToMatch: FieldToMatch;
  TextTransformations: Array<TextTransformation>;
  PositionalConstraint: PositionalConstraint;
}
export type CapacityUnit = number;

export interface CaptchaAction {
  CustomRequestHandling?: CustomRequestHandling;
}
export interface CaptchaConfig {
  ImmunityTimeProperty?: ImmunityTimeProperty;
}
export interface CaptchaResponse {
  ResponseCode?: number;
  SolveTimestamp?: number;
  FailureReason?: FailureReason;
}
export interface ChallengeAction {
  CustomRequestHandling?: CustomRequestHandling;
}
export interface ChallengeConfig {
  ImmunityTimeProperty?: ImmunityTimeProperty;
}
export interface ChallengeResponse {
  ResponseCode?: number;
  SolveTimestamp?: number;
  FailureReason?: FailureReason;
}
export interface CheckCapacityRequest {
  Scope: Scope;
  Rules: Array<Rule>;
}
export interface CheckCapacityResponse {
  Capacity?: number;
}
export interface ClientSideAction {
  UsageOfAction: UsageOfAction;
  Sensitivity?: SensitivityToAct;
  ExemptUriRegularExpressions?: Array<Regex>;
}
export interface ClientSideActionConfig {
  Challenge: ClientSideAction;
}
export type ComparisonOperator = "EQ" | "NE" | "LE" | "LT" | "GE" | "GT";
export interface Condition {
  ActionCondition?: ActionCondition;
  LabelNameCondition?: LabelNameCondition;
}
export type Conditions = Array<Condition>;
export type ConsumedCapacity = number;

export interface CookieMatchPattern {
  All?: All;
  IncludedCookies?: Array<string>;
  ExcludedCookies?: Array<string>;
}
export type CookieNames = Array<string>;
export interface Cookies {
  MatchPattern: CookieMatchPattern;
  MatchScope: MapMatchScope;
  OversizeHandling: OversizeHandling;
}
export interface CountAction {
  CustomRequestHandling?: CustomRequestHandling;
}
export type Country = string;

export type CountryCode =
  | "AF"
  | "AX"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BS"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BQ"
  | "BA"
  | "BW"
  | "BV"
  | "BR"
  | "IO"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "KH"
  | "CM"
  | "CA"
  | "CV"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CG"
  | "CD"
  | "CK"
  | "CR"
  | "CI"
  | "HR"
  | "CU"
  | "CW"
  | "CY"
  | "CZ"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "GF"
  | "PF"
  | "TF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GP"
  | "GU"
  | "GT"
  | "GG"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HM"
  | "VA"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IM"
  | "IL"
  | "IT"
  | "JM"
  | "JP"
  | "JE"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "KP"
  | "KR"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MK"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MQ"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "ME"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "NF"
  | "MP"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PS"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "RE"
  | "RO"
  | "RU"
  | "RW"
  | "BL"
  | "SH"
  | "KN"
  | "LC"
  | "MF"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "RS"
  | "SC"
  | "SL"
  | "SG"
  | "SX"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "GS"
  | "SS"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SZ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TL"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "US"
  | "UM"
  | "UY"
  | "UZ"
  | "VU"
  | "VE"
  | "VN"
  | "VG"
  | "VI"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW"
  | "XK";
export type CountryCodes = Array<CountryCode>;
export interface CreateAPIKeyRequest {
  Scope: Scope;
  TokenDomains: Array<string>;
}
export interface CreateAPIKeyResponse {
  APIKey?: string;
}
export interface CreateIPSetRequest {
  Name: string;
  Scope: Scope;
  Description?: string;
  IPAddressVersion: IPAddressVersion;
  Addresses: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateIPSetResponse {
  Summary?: IPSetSummary;
}
export interface CreateRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Description?: string;
  RegularExpressionList: Array<Regex>;
  Tags?: Array<Tag>;
}
export interface CreateRegexPatternSetResponse {
  Summary?: RegexPatternSetSummary;
}
export interface CreateRuleGroupRequest {
  Name: string;
  Scope: Scope;
  Capacity: number;
  Description?: string;
  Rules?: Array<Rule>;
  VisibilityConfig: VisibilityConfig;
  Tags?: Array<Tag>;
  CustomResponseBodies?: Record<string, CustomResponseBody>;
}
export interface CreateRuleGroupResponse {
  Summary?: RuleGroupSummary;
}
export interface CreateWebACLRequest {
  Name: string;
  Scope: Scope;
  DefaultAction: DefaultAction;
  Description?: string;
  Rules?: Array<Rule>;
  VisibilityConfig: VisibilityConfig;
  DataProtectionConfig?: DataProtectionConfig;
  Tags?: Array<Tag>;
  CustomResponseBodies?: Record<string, CustomResponseBody>;
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
  TokenDomains?: Array<string>;
  AssociationConfig?: AssociationConfig;
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig;
  ApplicationConfig?: ApplicationConfig;
}
export interface CreateWebACLResponse {
  Summary?: WebACLSummary;
}
export type CreationPathString = string;

export interface CustomHTTPHeader {
  Name: string;
  Value: string;
}
export type CustomHTTPHeaderName = string;

export type CustomHTTPHeaders = Array<CustomHTTPHeader>;
export type CustomHTTPHeaderValue = string;

export interface CustomRequestHandling {
  InsertHeaders: Array<CustomHTTPHeader>;
}
export interface CustomResponse {
  ResponseCode: number;
  CustomResponseBodyKey?: string;
  ResponseHeaders?: Array<CustomHTTPHeader>;
}
export type CustomResponseBodies = Record<string, CustomResponseBody>;
export interface CustomResponseBody {
  ContentType: ResponseContentType;
  Content: string;
}
export interface DataProtection {
  Field: FieldToProtect;
  Action: DataProtectionAction;
  ExcludeRuleMatchDetails?: boolean;
  ExcludeRateBasedDetails?: boolean;
}
export type DataProtectionAction = "SUBSTITUTION" | "HASH";
export interface DataProtectionConfig {
  DataProtections: Array<DataProtection>;
}
export type DataProtections = Array<DataProtection>;
export interface DefaultAction {
  Block?: BlockAction;
  Allow?: AllowAction;
}
export interface DeleteAPIKeyRequest {
  Scope: Scope;
  APIKey: string;
}
export interface DeleteAPIKeyResponse {}
export interface DeleteFirewallManagerRuleGroupsRequest {
  WebACLArn: string;
  WebACLLockToken: string;
}
export interface DeleteFirewallManagerRuleGroupsResponse {
  NextWebACLLockToken?: string;
}
export interface DeleteIPSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
export interface DeleteIPSetResponse {}
export interface DeleteLoggingConfigurationRequest {
  ResourceArn: string;
  LogType?: LogType;
  LogScope?: LogScope;
}
export interface DeleteLoggingConfigurationResponse {}
export interface DeletePermissionPolicyRequest {
  ResourceArn: string;
}
export interface DeletePermissionPolicyResponse {}
export interface DeleteRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
export interface DeleteRegexPatternSetResponse {}
export interface DeleteRuleGroupRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
export interface DeleteRuleGroupResponse {}
export interface DeleteWebACLRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
export interface DeleteWebACLResponse {}
export interface DescribeAllManagedProductsRequest {
  Scope: Scope;
}
export interface DescribeAllManagedProductsResponse {
  ManagedProducts?: Array<ManagedProductDescriptor>;
}
export interface DescribeManagedProductsByVendorRequest {
  VendorName: string;
  Scope: Scope;
}
export interface DescribeManagedProductsByVendorResponse {
  ManagedProducts?: Array<ManagedProductDescriptor>;
}
export interface DescribeManagedRuleGroupRequest {
  VendorName: string;
  Name: string;
  Scope: Scope;
  VersionName?: string;
}
export interface DescribeManagedRuleGroupResponse {
  VersionName?: string;
  SnsTopicArn?: string;
  Capacity?: number;
  Rules?: Array<RuleSummary>;
  LabelNamespace?: string;
  AvailableLabels?: Array<LabelSummary>;
  ConsumedLabels?: Array<LabelSummary>;
}
export interface DisassociateWebACLRequest {
  ResourceArn: string;
}
export interface DisassociateWebACLResponse {}
export type DownloadUrl = string;

export interface EmailField {
  Identifier: string;
}
export type EnableMachineLearning = boolean;

export type EntityDescription = string;

export type EntityId = string;

export type EntityName = string;

export type ErrorMessage = string;

export type ErrorReason = string;

export type EvaluationWindowSec = number;

export interface ExcludedRule {
  Name: string;
}
export type ExcludedRules = Array<ExcludedRule>;
export type FailureCode = number;

export type FailureReason =
  | "TOKEN_MISSING"
  | "TOKEN_EXPIRED"
  | "TOKEN_INVALID"
  | "TOKEN_DOMAIN_MISMATCH";
export type FailureValue = string;

export type FallbackBehavior = "MATCH" | "NO_MATCH";
export type FieldIdentifier = string;

export interface FieldToMatch {
  SingleHeader?: SingleHeader;
  SingleQueryArgument?: SingleQueryArgument;
  AllQueryArguments?: AllQueryArguments;
  UriPath?: UriPath;
  QueryString?: QueryString;
  Body?: Body;
  Method?: Method;
  JsonBody?: JsonBody;
  Headers?: Headers;
  Cookies?: Cookies;
  HeaderOrder?: HeaderOrder;
  JA3Fingerprint?: JA3Fingerprint;
  JA4Fingerprint?: JA4Fingerprint;
  UriFragment?: UriFragment;
}
export type FieldToMatchData = string;

export interface FieldToProtect {
  FieldType: FieldToProtectType;
  FieldKeys?: Array<string>;
}
export type FieldToProtectKeyName = string;

export type FieldToProtectKeys = Array<string>;
export type FieldToProtectType =
  | "SINGLE_HEADER"
  | "SINGLE_COOKIE"
  | "SINGLE_QUERY_ARGUMENT"
  | "QUERY_STRING"
  | "BODY";
export interface Filter {
  Behavior: FilterBehavior;
  Requirement: FilterRequirement;
  Conditions: Array<Condition>;
}
export type FilterBehavior = "KEEP" | "DROP";
export type FilterRequirement = "MEETS_ALL" | "MEETS_ANY";
export type Filters = Array<Filter>;
export interface FirewallManagerRuleGroup {
  Name: string;
  Priority: number;
  FirewallManagerStatement: FirewallManagerStatement;
  OverrideAction: OverrideAction;
  VisibilityConfig: VisibilityConfig;
}
export type FirewallManagerRuleGroups = Array<FirewallManagerRuleGroup>;
export interface FirewallManagerStatement {
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
}
export interface ForwardedIPConfig {
  HeaderName: string;
  FallbackBehavior: FallbackBehavior;
}
export type ForwardedIPHeaderName = string;

export type ForwardedIPPosition = "FIRST" | "LAST" | "ANY";
export interface GenerateMobileSdkReleaseUrlRequest {
  Platform: Platform;
  ReleaseVersion: string;
}
export interface GenerateMobileSdkReleaseUrlResponse {
  Url?: string;
}
export interface GeoMatchStatement {
  CountryCodes?: Array<CountryCode>;
  ForwardedIPConfig?: ForwardedIPConfig;
}
export interface GetDecryptedAPIKeyRequest {
  Scope: Scope;
  APIKey: string;
}
export interface GetDecryptedAPIKeyResponse {
  TokenDomains?: Array<string>;
  CreationTimestamp?: Date | string;
}
export interface GetIPSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
}
export interface GetIPSetResponse {
  IPSet?: IPSet;
  LockToken?: string;
}
export interface GetLoggingConfigurationRequest {
  ResourceArn: string;
  LogType?: LogType;
  LogScope?: LogScope;
}
export interface GetLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface GetManagedRuleSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
}
export interface GetManagedRuleSetResponse {
  ManagedRuleSet?: ManagedRuleSet;
  LockToken?: string;
}
export interface GetMobileSdkReleaseRequest {
  Platform: Platform;
  ReleaseVersion: string;
}
export interface GetMobileSdkReleaseResponse {
  MobileSdkRelease?: MobileSdkRelease;
}
export interface GetPermissionPolicyRequest {
  ResourceArn: string;
}
export interface GetPermissionPolicyResponse {
  Policy?: string;
}
export interface GetRateBasedStatementManagedKeysRequest {
  Scope: Scope;
  WebACLName: string;
  WebACLId: string;
  RuleGroupRuleName?: string;
  RuleName: string;
}
export interface GetRateBasedStatementManagedKeysResponse {
  ManagedKeysIPV4?: RateBasedStatementManagedKeysIPSet;
  ManagedKeysIPV6?: RateBasedStatementManagedKeysIPSet;
}
export interface GetRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
}
export interface GetRegexPatternSetResponse {
  RegexPatternSet?: RegexPatternSet;
  LockToken?: string;
}
export interface GetRuleGroupRequest {
  Name?: string;
  Scope?: Scope;
  Id?: string;
  ARN?: string;
}
export interface GetRuleGroupResponse {
  RuleGroup?: RuleGroup;
  LockToken?: string;
}
export interface GetSampledRequestsRequest {
  WebAclArn: string;
  RuleMetricName: string;
  Scope: Scope;
  TimeWindow: TimeWindow;
  MaxItems: number;
}
export interface GetSampledRequestsResponse {
  SampledRequests?: Array<SampledHTTPRequest>;
  PopulationSize?: number;
  TimeWindow?: TimeWindow;
}
export interface GetWebACLForResourceRequest {
  ResourceArn: string;
}
export interface GetWebACLForResourceResponse {
  WebACL?: WebACL;
}
export interface GetWebACLRequest {
  Name?: string;
  Scope?: Scope;
  Id?: string;
  ARN?: string;
}
export interface GetWebACLResponse {
  WebACL?: WebACL;
  LockToken?: string;
  ApplicationIntegrationURL?: string;
}
export interface HeaderMatchPattern {
  All?: All;
  IncludedHeaders?: Array<string>;
  ExcludedHeaders?: Array<string>;
}
export type HeaderName = string;

export type HeaderNames = Array<string>;
export interface HeaderOrder {
  OversizeHandling: OversizeHandling;
}
export interface Headers {
  MatchPattern: HeaderMatchPattern;
  MatchScope: MapMatchScope;
  OversizeHandling: OversizeHandling;
}
export type HeaderValue = string;

export interface HTTPHeader {
  Name?: string;
  Value?: string;
}
export type HTTPHeaders = Array<HTTPHeader>;
export type HTTPMethod = string;

export interface HTTPRequest {
  ClientIP?: string;
  Country?: string;
  URI?: string;
  Method?: string;
  HTTPVersion?: string;
  Headers?: Array<HTTPHeader>;
}
export type HTTPVersion = string;

export interface ImmunityTimeProperty {
  ImmunityTime: number;
}
export type InspectionLevel = "COMMON" | "TARGETED";
export type IPAddress = string;

export type IPAddresses = Array<string>;
export type IPAddressVersion = "IPV4" | "IPV6";
export interface IPSet {
  Name: string;
  Id: string;
  ARN: string;
  Description?: string;
  IPAddressVersion: IPAddressVersion;
  Addresses: Array<string>;
}
export interface IPSetForwardedIPConfig {
  HeaderName: string;
  FallbackBehavior: FallbackBehavior;
  Position: ForwardedIPPosition;
}
export interface IPSetReferenceStatement {
  ARN: string;
  IPSetForwardedIPConfig?: IPSetForwardedIPConfig;
}
export type IPSetSummaries = Array<IPSetSummary>;
export interface IPSetSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
export type IPString = string;

export interface JA3Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
export interface JA4Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
export interface JsonBody {
  MatchPattern: JsonMatchPattern;
  MatchScope: JsonMatchScope;
  InvalidFallbackBehavior?: BodyParsingFallbackBehavior;
  OversizeHandling?: OversizeHandling;
}
export interface JsonMatchPattern {
  All?: All;
  IncludedPaths?: Array<string>;
}
export type JsonMatchScope = "ALL" | "KEY" | "VALUE";
export type JsonPointerPath = string;

export type JsonPointerPaths = Array<string>;
export interface Label {
  Name: string;
}
export type LabelMatchKey = string;

export type LabelMatchScope = "LABEL" | "NAMESPACE";
export interface LabelMatchStatement {
  Scope: LabelMatchScope;
  Key: string;
}
export type LabelName = string;

export interface LabelNameCondition {
  LabelName: string;
}
export type LabelNamespace = string;

export type Labels = Array<Label>;
export type LabelSummaries = Array<LabelSummary>;
export interface LabelSummary {
  Name?: string;
}
export interface ListAPIKeysRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ListAPIKeysResponse {
  NextMarker?: string;
  APIKeySummaries?: Array<APIKeySummary>;
  ApplicationIntegrationURL?: string;
}
export interface ListAvailableManagedRuleGroupsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ListAvailableManagedRuleGroupsResponse {
  NextMarker?: string;
  ManagedRuleGroups?: Array<ManagedRuleGroupSummary>;
}
export interface ListAvailableManagedRuleGroupVersionsRequest {
  VendorName: string;
  Name: string;
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ListAvailableManagedRuleGroupVersionsResponse {
  NextMarker?: string;
  Versions?: Array<ManagedRuleGroupVersion>;
  CurrentDefaultVersion?: string;
}
export interface ListIPSetsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ListIPSetsResponse {
  NextMarker?: string;
  IPSets?: Array<IPSetSummary>;
}
export interface ListLoggingConfigurationsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
  LogScope?: LogScope;
}
export interface ListLoggingConfigurationsResponse {
  LoggingConfigurations?: Array<LoggingConfiguration>;
  NextMarker?: string;
}
export interface ListManagedRuleSetsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ListManagedRuleSetsResponse {
  NextMarker?: string;
  ManagedRuleSets?: Array<ManagedRuleSetSummary>;
}
export type ListMaxItems = number;

export interface ListMobileSdkReleasesRequest {
  Platform: Platform;
  NextMarker?: string;
  Limit?: number;
}
export interface ListMobileSdkReleasesResponse {
  ReleaseSummaries?: Array<ReleaseSummary>;
  NextMarker?: string;
}
export interface ListRegexPatternSetsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ListRegexPatternSetsResponse {
  NextMarker?: string;
  RegexPatternSets?: Array<RegexPatternSetSummary>;
}
export interface ListResourcesForWebACLRequest {
  WebACLArn: string;
  ResourceType?: ResourceType;
}
export interface ListResourcesForWebACLResponse {
  ResourceArns?: Array<string>;
}
export interface ListRuleGroupsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ListRuleGroupsResponse {
  NextMarker?: string;
  RuleGroups?: Array<RuleGroupSummary>;
}
export interface ListTagsForResourceRequest {
  NextMarker?: string;
  Limit?: number;
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  NextMarker?: string;
  TagInfoForResource?: TagInfoForResource;
}
export interface ListWebACLsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ListWebACLsResponse {
  NextMarker?: string;
  WebACLs?: Array<WebACLSummary>;
}
export type LockToken = string;

export type LogDestinationConfigs = Array<string>;
export interface LoggingConfiguration {
  ResourceArn: string;
  LogDestinationConfigs: Array<string>;
  RedactedFields?: Array<FieldToMatch>;
  ManagedByFirewallManager?: boolean;
  LoggingFilter?: LoggingFilter;
  LogType?: LogType;
  LogScope?: LogScope;
}
export type LoggingConfigurations = Array<LoggingConfiguration>;
export interface LoggingFilter {
  Filters: Array<Filter>;
  DefaultBehavior: FilterBehavior;
}
export type LoginPathString = string;

export type LogScope = "CUSTOMER" | "SECURITY_LAKE";
export type LogType = "WAF_LOGS";
export type LowReputationMode = "ACTIVE_UNDER_DDOS" | "ALWAYS_ON";
export interface ManagedProductDescriptor {
  VendorName?: string;
  ManagedRuleSetName?: string;
  ProductId?: string;
  ProductLink?: string;
  ProductTitle?: string;
  ProductDescription?: string;
  SnsTopicArn?: string;
  IsVersioningSupported?: boolean;
  IsAdvancedManagedRuleSet?: boolean;
}
export type ManagedProductDescriptors = Array<ManagedProductDescriptor>;
export interface ManagedRuleGroupConfig {
  LoginPath?: string;
  PayloadType?: PayloadType;
  UsernameField?: UsernameField;
  PasswordField?: PasswordField;
  AWSManagedRulesBotControlRuleSet?: AWSManagedRulesBotControlRuleSet;
  AWSManagedRulesATPRuleSet?: AWSManagedRulesATPRuleSet;
  AWSManagedRulesACFPRuleSet?: AWSManagedRulesACFPRuleSet;
  AWSManagedRulesAntiDDoSRuleSet?: AWSManagedRulesAntiDDoSRuleSet;
}
export type ManagedRuleGroupConfigs = Array<ManagedRuleGroupConfig>;
export interface ManagedRuleGroupStatement {
  VendorName: string;
  Name: string;
  Version?: string;
  ExcludedRules?: Array<ExcludedRule>;
  ScopeDownStatement?: Statement;
  ManagedRuleGroupConfigs?: Array<ManagedRuleGroupConfig>;
  RuleActionOverrides?: Array<RuleActionOverride>;
}
export type ManagedRuleGroupSummaries = Array<ManagedRuleGroupSummary>;
export interface ManagedRuleGroupSummary {
  VendorName?: string;
  Name?: string;
  VersioningSupported?: boolean;
  Description?: string;
}
export interface ManagedRuleGroupVersion {
  Name?: string;
  LastUpdateTimestamp?: Date | string;
}
export type ManagedRuleGroupVersions = Array<ManagedRuleGroupVersion>;
export interface ManagedRuleSet {
  Name: string;
  Id: string;
  ARN: string;
  Description?: string;
  PublishedVersions?: Record<string, ManagedRuleSetVersion>;
  RecommendedVersion?: string;
  LabelNamespace?: string;
}
export type ManagedRuleSetSummaries = Array<ManagedRuleSetSummary>;
export interface ManagedRuleSetSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
  LabelNamespace?: string;
}
export interface ManagedRuleSetVersion {
  AssociatedRuleGroupArn?: string;
  Capacity?: number;
  ForecastedLifetime?: number;
  PublishTimestamp?: Date | string;
  LastUpdateTimestamp?: Date | string;
  ExpiryTimestamp?: Date | string;
}
export type MapMatchScope = "ALL" | "KEY" | "VALUE";
export interface Method {}
export type MetricName = string;

export interface MobileSdkRelease {
  ReleaseVersion?: string;
  Timestamp?: Date | string;
  ReleaseNotes?: string;
  Tags?: Array<Tag>;
}
export type NextMarker = string;

export interface NoneAction {}
export interface NotStatement {
  Statement: Statement;
}
export interface OnSourceDDoSProtectionConfig {
  ALBLowReputationMode: LowReputationMode;
}
export interface OrStatement {
  Statements: Array<Statement>;
}
export type OutputUrl = string;

export interface OverrideAction {
  Count?: CountAction;
  None?: NoneAction;
}
export type OversizeHandling = "CONTINUE" | "MATCH" | "NO_MATCH";
export type PaginationLimit = number;

export type ParameterExceptionField =
  | "WEB_ACL"
  | "RULE_GROUP"
  | "REGEX_PATTERN_SET"
  | "IP_SET"
  | "MANAGED_RULE_SET"
  | "RULE"
  | "EXCLUDED_RULE"
  | "STATEMENT"
  | "BYTE_MATCH_STATEMENT"
  | "SQLI_MATCH_STATEMENT"
  | "XSS_MATCH_STATEMENT"
  | "SIZE_CONSTRAINT_STATEMENT"
  | "GEO_MATCH_STATEMENT"
  | "RATE_BASED_STATEMENT"
  | "RULE_GROUP_REFERENCE_STATEMENT"
  | "REGEX_PATTERN_REFERENCE_STATEMENT"
  | "IP_SET_REFERENCE_STATEMENT"
  | "MANAGED_RULE_SET_STATEMENT"
  | "LABEL_MATCH_STATEMENT"
  | "AND_STATEMENT"
  | "OR_STATEMENT"
  | "NOT_STATEMENT"
  | "IP_ADDRESS"
  | "IP_ADDRESS_VERSION"
  | "FIELD_TO_MATCH"
  | "TEXT_TRANSFORMATION"
  | "SINGLE_QUERY_ARGUMENT"
  | "SINGLE_HEADER"
  | "DEFAULT_ACTION"
  | "RULE_ACTION"
  | "ENTITY_LIMIT"
  | "OVERRIDE_ACTION"
  | "SCOPE_VALUE"
  | "RESOURCE_ARN"
  | "RESOURCE_TYPE"
  | "TAGS"
  | "TAG_KEYS"
  | "METRIC_NAME"
  | "FIREWALL_MANAGER_STATEMENT"
  | "FALLBACK_BEHAVIOR"
  | "POSITION"
  | "FORWARDED_IP_CONFIG"
  | "IP_SET_FORWARDED_IP_CONFIG"
  | "HEADER_NAME"
  | "CUSTOM_REQUEST_HANDLING"
  | "RESPONSE_CONTENT_TYPE"
  | "CUSTOM_RESPONSE"
  | "CUSTOM_RESPONSE_BODY"
  | "JSON_MATCH_PATTERN"
  | "JSON_MATCH_SCOPE"
  | "BODY_PARSING_FALLBACK_BEHAVIOR"
  | "LOGGING_FILTER"
  | "FILTER_CONDITION"
  | "EXPIRE_TIMESTAMP"
  | "CHANGE_PROPAGATION_STATUS"
  | "ASSOCIABLE_RESOURCE"
  | "LOG_DESTINATION"
  | "MANAGED_RULE_GROUP_CONFIG"
  | "PAYLOAD_TYPE"
  | "HEADER_MATCH_PATTERN"
  | "COOKIE_MATCH_PATTERN"
  | "MAP_MATCH_SCOPE"
  | "OVERSIZE_HANDLING"
  | "CHALLENGE_CONFIG"
  | "TOKEN_DOMAIN"
  | "ATP_RULE_SET_RESPONSE_INSPECTION"
  | "ASSOCIATED_RESOURCE_TYPE"
  | "SCOPE_DOWN"
  | "CUSTOM_KEYS"
  | "ACP_RULE_SET_RESPONSE_INSPECTION"
  | "DATA_PROTECTION_CONFIG"
  | "LOW_REPUTATION_MODE";
export type ParameterExceptionParameter = string;

export interface PasswordField {
  Identifier: string;
}
export type PayloadType = "JSON" | "FORM_ENCODED";
export interface PhoneNumberField {
  Identifier: string;
}
export type PhoneNumberFields = Array<PhoneNumberField>;
export type Platform = "IOS" | "ANDROID";
export type PolicyString = string;

export type PopulationSize = number;

export type PositionalConstraint =
  | "EXACTLY"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "CONTAINS_WORD";
export type ProductDescription = string;

export type ProductId = string;

export type ProductLink = string;

export type ProductTitle = string;

export type PublishedVersions = Record<string, ManagedRuleSetVersion>;
export interface PutLoggingConfigurationRequest {
  LoggingConfiguration: LoggingConfiguration;
}
export interface PutLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface PutManagedRuleSetVersionsRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
  RecommendedVersion?: string;
  VersionsToPublish?: Record<string, VersionToPublish>;
}
export interface PutManagedRuleSetVersionsResponse {
  NextLockToken?: string;
}
export interface PutPermissionPolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutPermissionPolicyResponse {}
export interface QueryString {}
export interface RateBasedStatement {
  Limit: number;
  EvaluationWindowSec?: number;
  AggregateKeyType: RateBasedStatementAggregateKeyType;
  ScopeDownStatement?: Statement;
  ForwardedIPConfig?: ForwardedIPConfig;
  CustomKeys?: Array<RateBasedStatementCustomKey>;
}
export type RateBasedStatementAggregateKeyType =
  | "IP"
  | "FORWARDED_IP"
  | "CUSTOM_KEYS"
  | "CONSTANT";
export interface RateBasedStatementCustomKey {
  Header?: RateLimitHeader;
  Cookie?: RateLimitCookie;
  QueryArgument?: RateLimitQueryArgument;
  QueryString?: RateLimitQueryString;
  HTTPMethod?: RateLimitHTTPMethod;
  ForwardedIP?: RateLimitForwardedIP;
  IP?: RateLimitIP;
  LabelNamespace?: RateLimitLabelNamespace;
  UriPath?: RateLimitUriPath;
  JA3Fingerprint?: RateLimitJA3Fingerprint;
  JA4Fingerprint?: RateLimitJA4Fingerprint;
  ASN?: RateLimitAsn;
}
export type RateBasedStatementCustomKeys = Array<RateBasedStatementCustomKey>;
export interface RateBasedStatementManagedKeysIPSet {
  IPAddressVersion?: IPAddressVersion;
  Addresses?: Array<string>;
}
export type RateLimit = number;

export interface RateLimitAsn {}
export interface RateLimitCookie {
  Name: string;
  TextTransformations: Array<TextTransformation>;
}
export interface RateLimitForwardedIP {}
export interface RateLimitHeader {
  Name: string;
  TextTransformations: Array<TextTransformation>;
}
export interface RateLimitHTTPMethod {}
export interface RateLimitIP {}
export interface RateLimitJA3Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
export interface RateLimitJA4Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
export interface RateLimitLabelNamespace {
  Namespace: string;
}
export interface RateLimitQueryArgument {
  Name: string;
  TextTransformations: Array<TextTransformation>;
}
export interface RateLimitQueryString {
  TextTransformations: Array<TextTransformation>;
}
export interface RateLimitUriPath {
  TextTransformations: Array<TextTransformation>;
}
export type RedactedFields = Array<FieldToMatch>;
export interface Regex {
  RegexString?: string;
}
export interface RegexMatchStatement {
  RegexString: string;
  FieldToMatch: FieldToMatch;
  TextTransformations: Array<TextTransformation>;
}
export interface RegexPatternSet {
  Name?: string;
  Id?: string;
  ARN?: string;
  Description?: string;
  RegularExpressionList?: Array<Regex>;
}
export interface RegexPatternSetReferenceStatement {
  ARN: string;
  FieldToMatch: FieldToMatch;
  TextTransformations: Array<TextTransformation>;
}
export type RegexPatternSetSummaries = Array<RegexPatternSetSummary>;
export interface RegexPatternSetSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
export type RegexPatternString = string;

export type RegistrationPagePathString = string;

export type RegularExpressionList = Array<Regex>;
export type ReleaseNotes = string;

export type ReleaseSummaries = Array<ReleaseSummary>;
export interface ReleaseSummary {
  ReleaseVersion?: string;
  Timestamp?: Date | string;
}
export type RequestBody = Record<
  AssociatedResourceType,
  RequestBodyAssociatedResourceTypeConfig
>;
export interface RequestBodyAssociatedResourceTypeConfig {
  DefaultSizeInspectionLimit: SizeInspectionLimit;
}
export interface RequestInspection {
  PayloadType: PayloadType;
  UsernameField: UsernameField;
  PasswordField: PasswordField;
}
export interface RequestInspectionACFP {
  PayloadType: PayloadType;
  UsernameField?: UsernameField;
  PasswordField?: PasswordField;
  EmailField?: EmailField;
  PhoneNumberFields?: Array<PhoneNumberField>;
  AddressFields?: Array<AddressField>;
}
export type ResourceArn = string;

export type ResourceArns = Array<string>;
export type ResourceType =
  | "APPLICATION_LOAD_BALANCER"
  | "API_GATEWAY"
  | "APPSYNC"
  | "COGNITIO_USER_POOL"
  | "APP_RUNNER_SERVICE"
  | "VERIFIED_ACCESS_INSTANCE"
  | "AMPLIFY";
export type ResponseCode = number;

export type ResponseContent = string;

export type ResponseContentType =
  | "TEXT_PLAIN"
  | "TEXT_HTML"
  | "APPLICATION_JSON";
export interface ResponseInspection {
  StatusCode?: ResponseInspectionStatusCode;
  Header?: ResponseInspectionHeader;
  BodyContains?: ResponseInspectionBodyContains;
  Json?: ResponseInspectionJson;
}
export interface ResponseInspectionBodyContains {
  SuccessStrings: Array<string>;
  FailureStrings: Array<string>;
}
export type ResponseInspectionBodyContainsFailureStrings = Array<string>;
export type ResponseInspectionBodyContainsSuccessStrings = Array<string>;
export interface ResponseInspectionHeader {
  Name: string;
  SuccessValues: Array<string>;
  FailureValues: Array<string>;
}
export type ResponseInspectionHeaderFailureValues = Array<string>;
export type ResponseInspectionHeaderName = string;

export type ResponseInspectionHeaderSuccessValues = Array<string>;
export interface ResponseInspectionJson {
  Identifier: string;
  SuccessValues: Array<string>;
  FailureValues: Array<string>;
}
export type ResponseInspectionJsonFailureValues = Array<string>;
export type ResponseInspectionJsonSuccessValues = Array<string>;
export interface ResponseInspectionStatusCode {
  SuccessCodes: Array<number>;
  FailureCodes: Array<number>;
}
export type ResponseInspectionStatusCodeFailureCodes = Array<number>;
export type ResponseInspectionStatusCodeSuccessCodes = Array<number>;
export type ResponseStatusCode = number;

export interface Rule {
  Name: string;
  Priority: number;
  Statement: Statement;
  Action?: RuleAction;
  OverrideAction?: OverrideAction;
  RuleLabels?: Array<Label>;
  VisibilityConfig: VisibilityConfig;
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
}
export interface RuleAction {
  Block?: BlockAction;
  Allow?: AllowAction;
  Count?: CountAction;
  Captcha?: CaptchaAction;
  Challenge?: ChallengeAction;
}
export interface RuleActionOverride {
  Name: string;
  ActionToUse: RuleAction;
}
export type RuleActionOverrides = Array<RuleActionOverride>;
export interface RuleGroup {
  Name: string;
  Id: string;
  Capacity: number;
  ARN: string;
  Description?: string;
  Rules?: Array<Rule>;
  VisibilityConfig: VisibilityConfig;
  LabelNamespace?: string;
  CustomResponseBodies?: Record<string, CustomResponseBody>;
  AvailableLabels?: Array<LabelSummary>;
  ConsumedLabels?: Array<LabelSummary>;
}
export interface RuleGroupReferenceStatement {
  ARN: string;
  ExcludedRules?: Array<ExcludedRule>;
  RuleActionOverrides?: Array<RuleActionOverride>;
}
export type RuleGroupSummaries = Array<RuleGroupSummary>;
export interface RuleGroupSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
export type RulePriority = number;

export type Rules = Array<Rule>;
export type RuleSummaries = Array<RuleSummary>;
export interface RuleSummary {
  Name?: string;
  Action?: RuleAction;
}
export interface SampledHTTPRequest {
  Request: HTTPRequest;
  Weight: number;
  Timestamp?: Date | string;
  Action?: string;
  RuleNameWithinRuleGroup?: string;
  RequestHeadersInserted?: Array<HTTPHeader>;
  ResponseCodeSent?: number;
  Labels?: Array<Label>;
  CaptchaResponse?: CaptchaResponse;
  ChallengeResponse?: ChallengeResponse;
  OverriddenAction?: string;
}
export type SampledHTTPRequests = Array<SampledHTTPRequest>;
export type SampleWeight = number;

export type Scope = "CLOUDFRONT" | "REGIONAL";
export type SearchString = Uint8Array | string;

export type SensitivityLevel = "LOW" | "HIGH";
export type SensitivityToAct = "LOW" | "MEDIUM" | "HIGH";
export type SingleCookieName = string;

export interface SingleHeader {
  Name: string;
}
export interface SingleQueryArgument {
  Name: string;
}
export type Size = number;

export interface SizeConstraintStatement {
  FieldToMatch: FieldToMatch;
  ComparisonOperator: ComparisonOperator;
  Size: number;
  TextTransformations: Array<TextTransformation>;
}
export type SizeInspectionLimit = "KB_16" | "KB_32" | "KB_48" | "KB_64";
export type SolveTimestamp = number;

export type SourceType = string;

export interface SqliMatchStatement {
  FieldToMatch: FieldToMatch;
  TextTransformations: Array<TextTransformation>;
  SensitivityLevel?: SensitivityLevel;
}
export interface Statement {
  ByteMatchStatement?: ByteMatchStatement;
  SqliMatchStatement?: SqliMatchStatement;
  XssMatchStatement?: XssMatchStatement;
  SizeConstraintStatement?: SizeConstraintStatement;
  GeoMatchStatement?: GeoMatchStatement;
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
  IPSetReferenceStatement?: IPSetReferenceStatement;
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
  RateBasedStatement?: RateBasedStatement;
  AndStatement?: AndStatement;
  OrStatement?: OrStatement;
  NotStatement?: NotStatement;
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
  LabelMatchStatement?: LabelMatchStatement;
  RegexMatchStatement?: RegexMatchStatement;
  AsnMatchStatement?: AsnMatchStatement;
}
export type Statements = Array<Statement>;
export type SuccessCode = number;

export type SuccessValue = string;

export interface Tag {
  Key: string;
  Value: string;
}
export interface TagInfoForResource {
  ResourceARN?: string;
  TagList?: Array<Tag>;
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

export interface TextTransformation {
  Priority: number;
  Type: TextTransformationType;
}
export type TextTransformationPriority = number;

export type TextTransformations = Array<TextTransformation>;
export type TextTransformationType =
  | "NONE"
  | "COMPRESS_WHITE_SPACE"
  | "HTML_ENTITY_DECODE"
  | "LOWERCASE"
  | "CMD_LINE"
  | "URL_DECODE"
  | "BASE64_DECODE"
  | "HEX_DECODE"
  | "MD5"
  | "REPLACE_COMMENTS"
  | "ESCAPE_SEQ_DECODE"
  | "SQL_HEX_DECODE"
  | "CSS_DECODE"
  | "JS_DECODE"
  | "NORMALIZE_PATH"
  | "NORMALIZE_PATH_WIN"
  | "REMOVE_NULLS"
  | "REPLACE_NULLS"
  | "BASE64_DECODE_EXT"
  | "URL_DECODE_UNI"
  | "UTF8_TO_UNICODE";
export type Timestamp = Date | string;

export interface TimeWindow {
  StartTime: Date | string;
  EndTime: Date | string;
}
export type TimeWindowDay = number;

export type TimeWindowSecond = number;

export type TokenDomain = string;

export type TokenDomains = Array<string>;
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateIPSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  Description?: string;
  Addresses: Array<string>;
  LockToken: string;
}
export interface UpdateIPSetResponse {
  NextLockToken?: string;
}
export interface UpdateManagedRuleSetVersionExpiryDateRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
  VersionToExpire: string;
  ExpiryTimestamp: Date | string;
}
export interface UpdateManagedRuleSetVersionExpiryDateResponse {
  ExpiringVersion?: string;
  ExpiryTimestamp?: Date | string;
  NextLockToken?: string;
}
export interface UpdateRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  Description?: string;
  RegularExpressionList: Array<Regex>;
  LockToken: string;
}
export interface UpdateRegexPatternSetResponse {
  NextLockToken?: string;
}
export interface UpdateRuleGroupRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  Description?: string;
  Rules?: Array<Rule>;
  VisibilityConfig: VisibilityConfig;
  LockToken: string;
  CustomResponseBodies?: Record<string, CustomResponseBody>;
}
export interface UpdateRuleGroupResponse {
  NextLockToken?: string;
}
export interface UpdateWebACLRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  DefaultAction: DefaultAction;
  Description?: string;
  Rules?: Array<Rule>;
  VisibilityConfig: VisibilityConfig;
  DataProtectionConfig?: DataProtectionConfig;
  LockToken: string;
  CustomResponseBodies?: Record<string, CustomResponseBody>;
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
  TokenDomains?: Array<string>;
  AssociationConfig?: AssociationConfig;
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig;
}
export interface UpdateWebACLResponse {
  NextLockToken?: string;
}
export interface UriFragment {
  FallbackBehavior?: FallbackBehavior;
}
export interface UriPath {}
export type URIString = string;

export type UsageOfAction = "ENABLED" | "DISABLED";
export interface UsernameField {
  Identifier: string;
}
export type VendorName = string;

export type VersionKeyString = string;

export type VersionsToPublish = Record<string, VersionToPublish>;
export interface VersionToPublish {
  AssociatedRuleGroupArn?: string;
  ForecastedLifetime?: number;
}
export interface VisibilityConfig {
  SampledRequestsEnabled: boolean;
  CloudWatchMetricsEnabled: boolean;
  MetricName: string;
}
export declare class WAFAssociatedItemException extends EffectData.TaggedError(
  "WAFAssociatedItemException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFConfigurationWarningException extends EffectData.TaggedError(
  "WAFConfigurationWarningException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFDuplicateItemException extends EffectData.TaggedError(
  "WAFDuplicateItemException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFExpiredManagedRuleGroupVersionException extends EffectData.TaggedError(
  "WAFExpiredManagedRuleGroupVersionException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFInternalErrorException extends EffectData.TaggedError(
  "WAFInternalErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFInvalidOperationException extends EffectData.TaggedError(
  "WAFInvalidOperationException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFInvalidParameterException extends EffectData.TaggedError(
  "WAFInvalidParameterException",
)<{
  readonly message?: string;
  readonly Field?: ParameterExceptionField;
  readonly Parameter?: string;
  readonly Reason?: string;
}> {}
export declare class WAFInvalidPermissionPolicyException extends EffectData.TaggedError(
  "WAFInvalidPermissionPolicyException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFInvalidResourceException extends EffectData.TaggedError(
  "WAFInvalidResourceException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFLimitsExceededException extends EffectData.TaggedError(
  "WAFLimitsExceededException",
)<{
  readonly Message?: string;
  readonly SourceType?: string;
}> {}
export declare class WAFLogDestinationPermissionIssueException extends EffectData.TaggedError(
  "WAFLogDestinationPermissionIssueException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFNonexistentItemException extends EffectData.TaggedError(
  "WAFNonexistentItemException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFOptimisticLockException extends EffectData.TaggedError(
  "WAFOptimisticLockException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFServiceLinkedRoleErrorException extends EffectData.TaggedError(
  "WAFServiceLinkedRoleErrorException",
)<{
  readonly message?: string;
}> {}
export declare class WAFSubscriptionNotFoundException extends EffectData.TaggedError(
  "WAFSubscriptionNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFTagOperationException extends EffectData.TaggedError(
  "WAFTagOperationException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFTagOperationInternalErrorException extends EffectData.TaggedError(
  "WAFTagOperationInternalErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFUnavailableEntityException extends EffectData.TaggedError(
  "WAFUnavailableEntityException",
)<{
  readonly Message?: string;
}> {}
export declare class WAFUnsupportedAggregateKeyTypeException extends EffectData.TaggedError(
  "WAFUnsupportedAggregateKeyTypeException",
)<{
  readonly Message?: string;
}> {}
export interface WebACL {
  Name: string;
  Id: string;
  ARN: string;
  DefaultAction: DefaultAction;
  Description?: string;
  Rules?: Array<Rule>;
  VisibilityConfig: VisibilityConfig;
  DataProtectionConfig?: DataProtectionConfig;
  Capacity?: number;
  PreProcessFirewallManagerRuleGroups?: Array<FirewallManagerRuleGroup>;
  PostProcessFirewallManagerRuleGroups?: Array<FirewallManagerRuleGroup>;
  ManagedByFirewallManager?: boolean;
  LabelNamespace?: string;
  CustomResponseBodies?: Record<string, CustomResponseBody>;
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
  TokenDomains?: Array<string>;
  AssociationConfig?: AssociationConfig;
  RetrofittedByFirewallManager?: boolean;
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig;
  ApplicationConfig?: ApplicationConfig;
}
export type WebACLSummaries = Array<WebACLSummary>;
export interface WebACLSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
export interface XssMatchStatement {
  FieldToMatch: FieldToMatch;
  TextTransformations: Array<TextTransformation>;
}
export declare namespace AssociateWebACL {
  export type Input = AssociateWebACLRequest;
  export type Output = AssociateWebACLResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFUnavailableEntityException
    | CommonAwsError;
}

export declare namespace CheckCapacity {
  export type Input = CheckCapacityRequest;
  export type Output = CheckCapacityResponse;
  export type Error =
    | WAFExpiredManagedRuleGroupVersionException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFSubscriptionNotFoundException
    | WAFUnavailableEntityException
    | CommonAwsError;
}

export declare namespace CreateAPIKey {
  export type Input = CreateAPIKeyRequest;
  export type Output = CreateAPIKeyResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | CommonAwsError;
}

export declare namespace CreateIPSet {
  export type Input = CreateIPSetRequest;
  export type Output = CreateIPSetResponse;
  export type Error =
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace CreateRegexPatternSet {
  export type Input = CreateRegexPatternSetRequest;
  export type Output = CreateRegexPatternSetResponse;
  export type Error =
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace CreateRuleGroup {
  export type Input = CreateRuleGroupRequest;
  export type Output = CreateRuleGroupResponse;
  export type Error =
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFSubscriptionNotFoundException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | WAFUnavailableEntityException
    | CommonAwsError;
}

export declare namespace CreateWebACL {
  export type Input = CreateWebACLRequest;
  export type Output = CreateWebACLResponse;
  export type Error =
    | WAFConfigurationWarningException
    | WAFDuplicateItemException
    | WAFExpiredManagedRuleGroupVersionException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFSubscriptionNotFoundException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | WAFUnavailableEntityException
    | CommonAwsError;
}

export declare namespace DeleteAPIKey {
  export type Input = DeleteAPIKeyRequest;
  export type Output = DeleteAPIKeyResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError;
}

export declare namespace DeleteFirewallManagerRuleGroups {
  export type Input = DeleteFirewallManagerRuleGroupsRequest;
  export type Output = DeleteFirewallManagerRuleGroupsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError;
}

export declare namespace DeleteIPSet {
  export type Input = DeleteIPSetRequest;
  export type Output = DeleteIPSetResponse;
  export type Error =
    | WAFAssociatedItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace DeleteLoggingConfiguration {
  export type Input = DeleteLoggingConfigurationRequest;
  export type Output = DeleteLoggingConfigurationResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError;
}

export declare namespace DeletePermissionPolicy {
  export type Input = DeletePermissionPolicyRequest;
  export type Output = DeletePermissionPolicyResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace DeleteRegexPatternSet {
  export type Input = DeleteRegexPatternSetRequest;
  export type Output = DeleteRegexPatternSetResponse;
  export type Error =
    | WAFAssociatedItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace DeleteRuleGroup {
  export type Input = DeleteRuleGroupRequest;
  export type Output = DeleteRuleGroupResponse;
  export type Error =
    | WAFAssociatedItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace DeleteWebACL {
  export type Input = DeleteWebACLRequest;
  export type Output = DeleteWebACLResponse;
  export type Error =
    | WAFAssociatedItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeAllManagedProducts {
  export type Input = DescribeAllManagedProductsRequest;
  export type Output = DescribeAllManagedProductsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace DescribeManagedProductsByVendor {
  export type Input = DescribeManagedProductsByVendorRequest;
  export type Output = DescribeManagedProductsByVendorResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace DescribeManagedRuleGroup {
  export type Input = DescribeManagedRuleGroupRequest;
  export type Output = DescribeManagedRuleGroupResponse;
  export type Error =
    | WAFExpiredManagedRuleGroupVersionException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace DisassociateWebACL {
  export type Input = DisassociateWebACLRequest;
  export type Output = DisassociateWebACLResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GenerateMobileSdkReleaseUrl {
  export type Input = GenerateMobileSdkReleaseUrlRequest;
  export type Output = GenerateMobileSdkReleaseUrlResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetDecryptedAPIKey {
  export type Input = GetDecryptedAPIKeyRequest;
  export type Output = GetDecryptedAPIKeyResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetIPSet {
  export type Input = GetIPSetRequest;
  export type Output = GetIPSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetLoggingConfiguration {
  export type Input = GetLoggingConfigurationRequest;
  export type Output = GetLoggingConfigurationResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetManagedRuleSet {
  export type Input = GetManagedRuleSetRequest;
  export type Output = GetManagedRuleSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetMobileSdkRelease {
  export type Input = GetMobileSdkReleaseRequest;
  export type Output = GetMobileSdkReleaseResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetPermissionPolicy {
  export type Input = GetPermissionPolicyRequest;
  export type Output = GetPermissionPolicyResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetRateBasedStatementManagedKeys {
  export type Input = GetRateBasedStatementManagedKeysRequest;
  export type Output = GetRateBasedStatementManagedKeysResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFUnsupportedAggregateKeyTypeException
    | CommonAwsError;
}

export declare namespace GetRegexPatternSet {
  export type Input = GetRegexPatternSetRequest;
  export type Output = GetRegexPatternSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetRuleGroup {
  export type Input = GetRuleGroupRequest;
  export type Output = GetRuleGroupResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetSampledRequests {
  export type Input = GetSampledRequestsRequest;
  export type Output = GetSampledRequestsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetWebACL {
  export type Input = GetWebACLRequest;
  export type Output = GetWebACLResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetWebACLForResource {
  export type Input = GetWebACLForResourceRequest;
  export type Output = GetWebACLForResourceResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFUnavailableEntityException
    | CommonAwsError;
}

export declare namespace ListAPIKeys {
  export type Input = ListAPIKeysRequest;
  export type Output = ListAPIKeysResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | CommonAwsError;
}

export declare namespace ListAvailableManagedRuleGroups {
  export type Input = ListAvailableManagedRuleGroupsRequest;
  export type Output = ListAvailableManagedRuleGroupsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace ListAvailableManagedRuleGroupVersions {
  export type Input = ListAvailableManagedRuleGroupVersionsRequest;
  export type Output = ListAvailableManagedRuleGroupVersionsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace ListIPSets {
  export type Input = ListIPSetsRequest;
  export type Output = ListIPSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace ListLoggingConfigurations {
  export type Input = ListLoggingConfigurationsRequest;
  export type Output = ListLoggingConfigurationsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace ListManagedRuleSets {
  export type Input = ListManagedRuleSetsRequest;
  export type Output = ListManagedRuleSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace ListMobileSdkReleases {
  export type Input = ListMobileSdkReleasesRequest;
  export type Output = ListMobileSdkReleasesResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace ListRegexPatternSets {
  export type Input = ListRegexPatternSetsRequest;
  export type Output = ListRegexPatternSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace ListResourcesForWebACL {
  export type Input = ListResourcesForWebACLRequest;
  export type Output = ListResourcesForWebACLResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace ListRuleGroups {
  export type Input = ListRuleGroupsRequest;
  export type Output = ListRuleGroupsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace ListWebACLs {
  export type Input = ListWebACLsRequest;
  export type Output = ListWebACLsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | CommonAwsError;
}

export declare namespace PutLoggingConfiguration {
  export type Input = PutLoggingConfigurationRequest;
  export type Output = PutLoggingConfigurationResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFLogDestinationPermissionIssueException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFServiceLinkedRoleErrorException
    | CommonAwsError;
}

export declare namespace PutManagedRuleSetVersions {
  export type Input = PutManagedRuleSetVersionsRequest;
  export type Output = PutManagedRuleSetVersionsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError;
}

export declare namespace PutPermissionPolicy {
  export type Input = PutPermissionPolicyRequest;
  export type Output = PutPermissionPolicyResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFInvalidPermissionPolicyException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace UpdateIPSet {
  export type Input = UpdateIPSetRequest;
  export type Output = UpdateIPSetResponse;
  export type Error =
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError;
}

export declare namespace UpdateManagedRuleSetVersionExpiryDate {
  export type Input = UpdateManagedRuleSetVersionExpiryDateRequest;
  export type Output = UpdateManagedRuleSetVersionExpiryDateResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError;
}

export declare namespace UpdateRegexPatternSet {
  export type Input = UpdateRegexPatternSetRequest;
  export type Output = UpdateRegexPatternSetResponse;
  export type Error =
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | CommonAwsError;
}

export declare namespace UpdateRuleGroup {
  export type Input = UpdateRuleGroupRequest;
  export type Output = UpdateRuleGroupResponse;
  export type Error =
    | WAFConfigurationWarningException
    | WAFDuplicateItemException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFSubscriptionNotFoundException
    | WAFUnavailableEntityException
    | CommonAwsError;
}

export declare namespace UpdateWebACL {
  export type Input = UpdateWebACLRequest;
  export type Output = UpdateWebACLResponse;
  export type Error =
    | WAFConfigurationWarningException
    | WAFDuplicateItemException
    | WAFExpiredManagedRuleGroupVersionException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFInvalidResourceException
    | WAFLimitsExceededException
    | WAFNonexistentItemException
    | WAFOptimisticLockException
    | WAFSubscriptionNotFoundException
    | WAFUnavailableEntityException
    | CommonAwsError;
}
