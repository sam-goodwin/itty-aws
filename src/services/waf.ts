import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSWAF_20150824 {
  createByteMatchSet(
    input: CreateByteMatchSetRequest,
  ): Effect.Effect<
    CreateByteMatchSetResponse,
    WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidParameterException | WAFLimitsExceededException | WAFStaleDataException | CommonAwsError
  >;
  createGeoMatchSet(
    input: CreateGeoMatchSetRequest,
  ): Effect.Effect<
    CreateGeoMatchSetResponse,
    WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidParameterException | WAFLimitsExceededException | WAFStaleDataException | CommonAwsError
  >;
  createIPSet(
    input: CreateIPSetRequest,
  ): Effect.Effect<
    CreateIPSetResponse,
    WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidParameterException | WAFLimitsExceededException | WAFStaleDataException | CommonAwsError
  >;
  createRateBasedRule(
    input: CreateRateBasedRuleRequest,
  ): Effect.Effect<
    CreateRateBasedRuleResponse,
    WAFBadRequestException | WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidParameterException | WAFLimitsExceededException | WAFStaleDataException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  createRegexMatchSet(
    input: CreateRegexMatchSetRequest,
  ): Effect.Effect<
    CreateRegexMatchSetResponse,
    WAFDisallowedNameException | WAFInternalErrorException | WAFLimitsExceededException | WAFStaleDataException | CommonAwsError
  >;
  createRegexPatternSet(
    input: CreateRegexPatternSetRequest,
  ): Effect.Effect<
    CreateRegexPatternSetResponse,
    WAFDisallowedNameException | WAFInternalErrorException | WAFLimitsExceededException | WAFStaleDataException | CommonAwsError
  >;
  createRule(
    input: CreateRuleRequest,
  ): Effect.Effect<
    CreateRuleResponse,
    WAFBadRequestException | WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidParameterException | WAFLimitsExceededException | WAFStaleDataException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  createRuleGroup(
    input: CreateRuleGroupRequest,
  ): Effect.Effect<
    CreateRuleGroupResponse,
    WAFBadRequestException | WAFDisallowedNameException | WAFInternalErrorException | WAFLimitsExceededException | WAFStaleDataException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  createSizeConstraintSet(
    input: CreateSizeConstraintSetRequest,
  ): Effect.Effect<
    CreateSizeConstraintSetResponse,
    WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidParameterException | WAFLimitsExceededException | WAFStaleDataException | CommonAwsError
  >;
  createSqlInjectionMatchSet(
    input: CreateSqlInjectionMatchSetRequest,
  ): Effect.Effect<
    CreateSqlInjectionMatchSetResponse,
    WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidParameterException | WAFLimitsExceededException | WAFStaleDataException | CommonAwsError
  >;
  createWebACL(
    input: CreateWebACLRequest,
  ): Effect.Effect<
    CreateWebACLResponse,
    WAFBadRequestException | WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidParameterException | WAFLimitsExceededException | WAFStaleDataException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  createWebACLMigrationStack(
    input: CreateWebACLMigrationStackRequest,
  ): Effect.Effect<
    CreateWebACLMigrationStackResponse,
    WAFEntityMigrationException | WAFInternalErrorException | WAFInvalidOperationException | WAFInvalidParameterException | WAFNonexistentItemException | CommonAwsError
  >;
  createXssMatchSet(
    input: CreateXssMatchSetRequest,
  ): Effect.Effect<
    CreateXssMatchSetResponse,
    WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidParameterException | WAFLimitsExceededException | WAFStaleDataException | CommonAwsError
  >;
  deleteByteMatchSet(
    input: DeleteByteMatchSetRequest,
  ): Effect.Effect<
    DeleteByteMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  deleteGeoMatchSet(
    input: DeleteGeoMatchSetRequest,
  ): Effect.Effect<
    DeleteGeoMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  deleteIPSet(
    input: DeleteIPSetRequest,
  ): Effect.Effect<
    DeleteIPSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  deleteLoggingConfiguration(
    input: DeleteLoggingConfigurationRequest,
  ): Effect.Effect<
    DeleteLoggingConfigurationResponse,
    WAFInternalErrorException | WAFNonexistentItemException | WAFStaleDataException | CommonAwsError
  >;
  deletePermissionPolicy(
    input: DeletePermissionPolicyRequest,
  ): Effect.Effect<
    DeletePermissionPolicyResponse,
    WAFInternalErrorException | WAFNonexistentItemException | WAFStaleDataException | CommonAwsError
  >;
  deleteRateBasedRule(
    input: DeleteRateBasedRuleRequest,
  ): Effect.Effect<
    DeleteRateBasedRuleResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  deleteRegexMatchSet(
    input: DeleteRegexMatchSetRequest,
  ): Effect.Effect<
    DeleteRegexMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  deleteRegexPatternSet(
    input: DeleteRegexPatternSetRequest,
  ): Effect.Effect<
    DeleteRegexPatternSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  deleteRule(
    input: DeleteRuleRequest,
  ): Effect.Effect<
    DeleteRuleResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  deleteRuleGroup(
    input: DeleteRuleGroupRequest,
  ): Effect.Effect<
    DeleteRuleGroupResponse,
    WAFInternalErrorException | WAFInvalidOperationException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  deleteSizeConstraintSet(
    input: DeleteSizeConstraintSetRequest,
  ): Effect.Effect<
    DeleteSizeConstraintSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  deleteSqlInjectionMatchSet(
    input: DeleteSqlInjectionMatchSetRequest,
  ): Effect.Effect<
    DeleteSqlInjectionMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  deleteWebACL(
    input: DeleteWebACLRequest,
  ): Effect.Effect<
    DeleteWebACLResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  deleteXssMatchSet(
    input: DeleteXssMatchSetRequest,
  ): Effect.Effect<
    DeleteXssMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonEmptyEntityException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  getByteMatchSet(
    input: GetByteMatchSetRequest,
  ): Effect.Effect<
    GetByteMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getChangeToken(
    input: GetChangeTokenRequest,
  ): Effect.Effect<
    GetChangeTokenResponse,
    WAFInternalErrorException | CommonAwsError
  >;
  getChangeTokenStatus(
    input: GetChangeTokenStatusRequest,
  ): Effect.Effect<
    GetChangeTokenStatusResponse,
    WAFInternalErrorException | WAFNonexistentItemException | CommonAwsError
  >;
  getGeoMatchSet(
    input: GetGeoMatchSetRequest,
  ): Effect.Effect<
    GetGeoMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getIPSet(
    input: GetIPSetRequest,
  ): Effect.Effect<
    GetIPSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getLoggingConfiguration(
    input: GetLoggingConfigurationRequest,
  ): Effect.Effect<
    GetLoggingConfigurationResponse,
    WAFInternalErrorException | WAFNonexistentItemException | CommonAwsError
  >;
  getPermissionPolicy(
    input: GetPermissionPolicyRequest,
  ): Effect.Effect<
    GetPermissionPolicyResponse,
    WAFInternalErrorException | WAFNonexistentItemException | CommonAwsError
  >;
  getRateBasedRule(
    input: GetRateBasedRuleRequest,
  ): Effect.Effect<
    GetRateBasedRuleResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getRateBasedRuleManagedKeys(
    input: GetRateBasedRuleManagedKeysRequest,
  ): Effect.Effect<
    GetRateBasedRuleManagedKeysResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidParameterException | WAFNonexistentItemException | CommonAwsError
  >;
  getRegexMatchSet(
    input: GetRegexMatchSetRequest,
  ): Effect.Effect<
    GetRegexMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getRegexPatternSet(
    input: GetRegexPatternSetRequest,
  ): Effect.Effect<
    GetRegexPatternSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getRule(
    input: GetRuleRequest,
  ): Effect.Effect<
    GetRuleResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getRuleGroup(
    input: GetRuleGroupRequest,
  ): Effect.Effect<
    GetRuleGroupResponse,
    WAFInternalErrorException | WAFNonexistentItemException | CommonAwsError
  >;
  getSampledRequests(
    input: GetSampledRequestsRequest,
  ): Effect.Effect<
    GetSampledRequestsResponse,
    WAFInternalErrorException | WAFNonexistentItemException | CommonAwsError
  >;
  getSizeConstraintSet(
    input: GetSizeConstraintSetRequest,
  ): Effect.Effect<
    GetSizeConstraintSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getSqlInjectionMatchSet(
    input: GetSqlInjectionMatchSetRequest,
  ): Effect.Effect<
    GetSqlInjectionMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getWebACL(
    input: GetWebACLRequest,
  ): Effect.Effect<
    GetWebACLResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  getXssMatchSet(
    input: GetXssMatchSetRequest,
  ): Effect.Effect<
    GetXssMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFNonexistentItemException | CommonAwsError
  >;
  listActivatedRulesInRuleGroup(
    input: ListActivatedRulesInRuleGroupRequest,
  ): Effect.Effect<
    ListActivatedRulesInRuleGroupResponse,
    WAFInternalErrorException | WAFInvalidParameterException | WAFNonexistentItemException | CommonAwsError
  >;
  listByteMatchSets(
    input: ListByteMatchSetsRequest,
  ): Effect.Effect<
    ListByteMatchSetsResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listGeoMatchSets(
    input: ListGeoMatchSetsRequest,
  ): Effect.Effect<
    ListGeoMatchSetsResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listIPSets(
    input: ListIPSetsRequest,
  ): Effect.Effect<
    ListIPSetsResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listLoggingConfigurations(
    input: ListLoggingConfigurationsRequest,
  ): Effect.Effect<
    ListLoggingConfigurationsResponse,
    WAFInternalErrorException | WAFInvalidParameterException | WAFNonexistentItemException | CommonAwsError
  >;
  listRateBasedRules(
    input: ListRateBasedRulesRequest,
  ): Effect.Effect<
    ListRateBasedRulesResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listRegexMatchSets(
    input: ListRegexMatchSetsRequest,
  ): Effect.Effect<
    ListRegexMatchSetsResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listRegexPatternSets(
    input: ListRegexPatternSetsRequest,
  ): Effect.Effect<
    ListRegexPatternSetsResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listRuleGroups(
    input: ListRuleGroupsRequest,
  ): Effect.Effect<
    ListRuleGroupsResponse,
    WAFInternalErrorException | CommonAwsError
  >;
  listRules(
    input: ListRulesRequest,
  ): Effect.Effect<
    ListRulesResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listSizeConstraintSets(
    input: ListSizeConstraintSetsRequest,
  ): Effect.Effect<
    ListSizeConstraintSetsResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listSqlInjectionMatchSets(
    input: ListSqlInjectionMatchSetsRequest,
  ): Effect.Effect<
    ListSqlInjectionMatchSetsResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listSubscribedRuleGroups(
    input: ListSubscribedRuleGroupsRequest,
  ): Effect.Effect<
    ListSubscribedRuleGroupsResponse,
    WAFInternalErrorException | WAFNonexistentItemException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    WAFBadRequestException | WAFInternalErrorException | WAFInvalidParameterException | WAFNonexistentItemException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  listWebACLs(
    input: ListWebACLsRequest,
  ): Effect.Effect<
    ListWebACLsResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  listXssMatchSets(
    input: ListXssMatchSetsRequest,
  ): Effect.Effect<
    ListXssMatchSetsResponse,
    WAFInternalErrorException | WAFInvalidAccountException | CommonAwsError
  >;
  putLoggingConfiguration(
    input: PutLoggingConfigurationRequest,
  ): Effect.Effect<
    PutLoggingConfigurationResponse,
    WAFInternalErrorException | WAFNonexistentItemException | WAFServiceLinkedRoleErrorException | WAFStaleDataException | CommonAwsError
  >;
  putPermissionPolicy(
    input: PutPermissionPolicyRequest,
  ): Effect.Effect<
    PutPermissionPolicyResponse,
    WAFInternalErrorException | WAFInvalidPermissionPolicyException | WAFNonexistentItemException | WAFStaleDataException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    WAFBadRequestException | WAFInternalErrorException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentItemException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    WAFBadRequestException | WAFInternalErrorException | WAFInvalidParameterException | WAFNonexistentItemException | WAFTagOperationException | WAFTagOperationInternalErrorException | CommonAwsError
  >;
  updateByteMatchSet(
    input: UpdateByteMatchSetRequest,
  ): Effect.Effect<
    UpdateByteMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFStaleDataException | CommonAwsError
  >;
  updateGeoMatchSet(
    input: UpdateGeoMatchSetRequest,
  ): Effect.Effect<
    UpdateGeoMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  updateIPSet(
    input: UpdateIPSetRequest,
  ): Effect.Effect<
    UpdateIPSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  updateRateBasedRule(
    input: UpdateRateBasedRuleRequest,
  ): Effect.Effect<
    UpdateRateBasedRuleResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  updateRegexMatchSet(
    input: UpdateRegexMatchSetRequest,
  ): Effect.Effect<
    UpdateRegexMatchSetResponse,
    WAFDisallowedNameException | WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFStaleDataException | CommonAwsError
  >;
  updateRegexPatternSet(
    input: UpdateRegexPatternSetRequest,
  ): Effect.Effect<
    UpdateRegexPatternSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidRegexPatternException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFStaleDataException | CommonAwsError
  >;
  updateRule(
    input: UpdateRuleRequest,
  ): Effect.Effect<
    UpdateRuleResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  updateRuleGroup(
    input: UpdateRuleGroupRequest,
  ): Effect.Effect<
    UpdateRuleGroupResponse,
    WAFInternalErrorException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFStaleDataException | CommonAwsError
  >;
  updateSizeConstraintSet(
    input: UpdateSizeConstraintSetRequest,
  ): Effect.Effect<
    UpdateSizeConstraintSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | CommonAwsError
  >;
  updateSqlInjectionMatchSet(
    input: UpdateSqlInjectionMatchSetRequest,
  ): Effect.Effect<
    UpdateSqlInjectionMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFStaleDataException | CommonAwsError
  >;
  updateWebACL(
    input: UpdateWebACLRequest,
  ): Effect.Effect<
    UpdateWebACLResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFReferencedItemException | WAFStaleDataException | WAFSubscriptionNotFoundException | CommonAwsError
  >;
  updateXssMatchSet(
    input: UpdateXssMatchSetRequest,
  ): Effect.Effect<
    UpdateXssMatchSetResponse,
    WAFInternalErrorException | WAFInvalidAccountException | WAFInvalidOperationException | WAFInvalidParameterException | WAFLimitsExceededException | WAFNonexistentContainerException | WAFNonexistentItemException | WAFStaleDataException | CommonAwsError
  >;
}

export type Waf = AWSWAF_20150824;

export type Action = string;

export interface ActivatedRule {
  Priority: number;
  RuleId: string;
  Action?: WafAction;
  OverrideAction?: WafOverrideAction;
  Type?: WafRuleType;
  ExcludedRules?: Array<ExcludedRule>;
}
export type ActivatedRules = Array<ActivatedRule>;
export interface ByteMatchSet {
  ByteMatchSetId: string;
  Name?: string;
  ByteMatchTuples: Array<ByteMatchTuple>;
}
export type ByteMatchSetSummaries = Array<ByteMatchSetSummary>;
export interface ByteMatchSetSummary {
  ByteMatchSetId: string;
  Name: string;
}
export interface ByteMatchSetUpdate {
  Action: ChangeAction;
  ByteMatchTuple: ByteMatchTuple;
}
export type ByteMatchSetUpdates = Array<ByteMatchSetUpdate>;
export type ByteMatchTargetString = Uint8Array | string;

export interface ByteMatchTuple {
  FieldToMatch: FieldToMatch;
  TargetString: Uint8Array | string;
  TextTransformation: TextTransformation;
  PositionalConstraint: PositionalConstraint;
}
export type ByteMatchTuples = Array<ByteMatchTuple>;
export type ChangeAction = "INSERT" | "DELETE";
export type ChangeToken = string;

export type ChangeTokenStatus = "PROVISIONED" | "PENDING" | "INSYNC";
export type ComparisonOperator = "EQ" | "NE" | "LE" | "LT" | "GE" | "GT";
export type Country = string;

export interface CreateByteMatchSetRequest {
  Name: string;
  ChangeToken: string;
}
export interface CreateByteMatchSetResponse {
  ByteMatchSet?: ByteMatchSet;
  ChangeToken?: string;
}
export interface CreateGeoMatchSetRequest {
  Name: string;
  ChangeToken: string;
}
export interface CreateGeoMatchSetResponse {
  GeoMatchSet?: GeoMatchSet;
  ChangeToken?: string;
}
export interface CreateIPSetRequest {
  Name: string;
  ChangeToken: string;
}
export interface CreateIPSetResponse {
  IPSet?: IPSet;
  ChangeToken?: string;
}
export interface CreateRateBasedRuleRequest {
  Name: string;
  MetricName: string;
  RateKey: RateKey;
  RateLimit: number;
  ChangeToken: string;
  Tags?: Array<Tag>;
}
export interface CreateRateBasedRuleResponse {
  Rule?: RateBasedRule;
  ChangeToken?: string;
}
export interface CreateRegexMatchSetRequest {
  Name: string;
  ChangeToken: string;
}
export interface CreateRegexMatchSetResponse {
  RegexMatchSet?: RegexMatchSet;
  ChangeToken?: string;
}
export interface CreateRegexPatternSetRequest {
  Name: string;
  ChangeToken: string;
}
export interface CreateRegexPatternSetResponse {
  RegexPatternSet?: RegexPatternSet;
  ChangeToken?: string;
}
export interface CreateRuleGroupRequest {
  Name: string;
  MetricName: string;
  ChangeToken: string;
  Tags?: Array<Tag>;
}
export interface CreateRuleGroupResponse {
  RuleGroup?: RuleGroup;
  ChangeToken?: string;
}
export interface CreateRuleRequest {
  Name: string;
  MetricName: string;
  ChangeToken: string;
  Tags?: Array<Tag>;
}
export interface CreateRuleResponse {
  Rule?: Rule;
  ChangeToken?: string;
}
export interface CreateSizeConstraintSetRequest {
  Name: string;
  ChangeToken: string;
}
export interface CreateSizeConstraintSetResponse {
  SizeConstraintSet?: SizeConstraintSet;
  ChangeToken?: string;
}
export interface CreateSqlInjectionMatchSetRequest {
  Name: string;
  ChangeToken: string;
}
export interface CreateSqlInjectionMatchSetResponse {
  SqlInjectionMatchSet?: SqlInjectionMatchSet;
  ChangeToken?: string;
}
export interface CreateWebACLMigrationStackRequest {
  WebACLId: string;
  S3BucketName: string;
  IgnoreUnsupportedType: boolean;
}
export interface CreateWebACLMigrationStackResponse {
  S3ObjectUrl: string;
}
export interface CreateWebACLRequest {
  Name: string;
  MetricName: string;
  DefaultAction: WafAction;
  ChangeToken: string;
  Tags?: Array<Tag>;
}
export interface CreateWebACLResponse {
  WebACL?: WebACL;
  ChangeToken?: string;
}
export interface CreateXssMatchSetRequest {
  Name: string;
  ChangeToken: string;
}
export interface CreateXssMatchSetResponse {
  XssMatchSet?: XssMatchSet;
  ChangeToken?: string;
}
export interface DeleteByteMatchSetRequest {
  ByteMatchSetId: string;
  ChangeToken: string;
}
export interface DeleteByteMatchSetResponse {
  ChangeToken?: string;
}
export interface DeleteGeoMatchSetRequest {
  GeoMatchSetId: string;
  ChangeToken: string;
}
export interface DeleteGeoMatchSetResponse {
  ChangeToken?: string;
}
export interface DeleteIPSetRequest {
  IPSetId: string;
  ChangeToken: string;
}
export interface DeleteIPSetResponse {
  ChangeToken?: string;
}
export interface DeleteLoggingConfigurationRequest {
  ResourceArn: string;
}
export interface DeleteLoggingConfigurationResponse {
}
export interface DeletePermissionPolicyRequest {
  ResourceArn: string;
}
export interface DeletePermissionPolicyResponse {
}
export interface DeleteRateBasedRuleRequest {
  RuleId: string;
  ChangeToken: string;
}
export interface DeleteRateBasedRuleResponse {
  ChangeToken?: string;
}
export interface DeleteRegexMatchSetRequest {
  RegexMatchSetId: string;
  ChangeToken: string;
}
export interface DeleteRegexMatchSetResponse {
  ChangeToken?: string;
}
export interface DeleteRegexPatternSetRequest {
  RegexPatternSetId: string;
  ChangeToken: string;
}
export interface DeleteRegexPatternSetResponse {
  ChangeToken?: string;
}
export interface DeleteRuleGroupRequest {
  RuleGroupId: string;
  ChangeToken: string;
}
export interface DeleteRuleGroupResponse {
  ChangeToken?: string;
}
export interface DeleteRuleRequest {
  RuleId: string;
  ChangeToken: string;
}
export interface DeleteRuleResponse {
  ChangeToken?: string;
}
export interface DeleteSizeConstraintSetRequest {
  SizeConstraintSetId: string;
  ChangeToken: string;
}
export interface DeleteSizeConstraintSetResponse {
  ChangeToken?: string;
}
export interface DeleteSqlInjectionMatchSetRequest {
  SqlInjectionMatchSetId: string;
  ChangeToken: string;
}
export interface DeleteSqlInjectionMatchSetResponse {
  ChangeToken?: string;
}
export interface DeleteWebACLRequest {
  WebACLId: string;
  ChangeToken: string;
}
export interface DeleteWebACLResponse {
  ChangeToken?: string;
}
export interface DeleteXssMatchSetRequest {
  XssMatchSetId: string;
  ChangeToken: string;
}
export interface DeleteXssMatchSetResponse {
  ChangeToken?: string;
}
export type errorMessage = string;

export type ErrorReason = string;

export interface ExcludedRule {
  RuleId: string;
}
export type ExcludedRules = Array<ExcludedRule>;
export interface FieldToMatch {
  Type: MatchFieldType;
  Data?: string;
}
export interface GeoMatchConstraint {
  Type: GeoMatchConstraintType;
  Value: GeoMatchConstraintValue;
}
export type GeoMatchConstraints = Array<GeoMatchConstraint>;
export type GeoMatchConstraintType = "Country";
export type GeoMatchConstraintValue = "AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BQ" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CG" | "CD" | "CK" | "CR" | "CI" | "HR" | "CU" | "CW" | "CY" | "CZ" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | "KP" | "KR" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "RE" | "RO" | "RU" | "RW" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SZ" | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | "WF" | "EH" | "YE" | "ZM" | "ZW";
export interface GeoMatchSet {
  GeoMatchSetId: string;
  Name?: string;
  GeoMatchConstraints: Array<GeoMatchConstraint>;
}
export type GeoMatchSetSummaries = Array<GeoMatchSetSummary>;
export interface GeoMatchSetSummary {
  GeoMatchSetId: string;
  Name: string;
}
export interface GeoMatchSetUpdate {
  Action: ChangeAction;
  GeoMatchConstraint: GeoMatchConstraint;
}
export type GeoMatchSetUpdates = Array<GeoMatchSetUpdate>;
export interface GetByteMatchSetRequest {
  ByteMatchSetId: string;
}
export interface GetByteMatchSetResponse {
  ByteMatchSet?: ByteMatchSet;
}
export interface GetChangeTokenRequest {
}
export interface GetChangeTokenResponse {
  ChangeToken?: string;
}
export interface GetChangeTokenStatusRequest {
  ChangeToken: string;
}
export interface GetChangeTokenStatusResponse {
  ChangeTokenStatus?: ChangeTokenStatus;
}
export interface GetGeoMatchSetRequest {
  GeoMatchSetId: string;
}
export interface GetGeoMatchSetResponse {
  GeoMatchSet?: GeoMatchSet;
}
export interface GetIPSetRequest {
  IPSetId: string;
}
export interface GetIPSetResponse {
  IPSet?: IPSet;
}
export interface GetLoggingConfigurationRequest {
  ResourceArn: string;
}
export interface GetLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface GetPermissionPolicyRequest {
  ResourceArn: string;
}
export interface GetPermissionPolicyResponse {
  Policy?: string;
}
export interface GetRateBasedRuleManagedKeysRequest {
  RuleId: string;
  NextMarker?: string;
}
export interface GetRateBasedRuleManagedKeysResponse {
  ManagedKeys?: Array<string>;
  NextMarker?: string;
}
export interface GetRateBasedRuleRequest {
  RuleId: string;
}
export interface GetRateBasedRuleResponse {
  Rule?: RateBasedRule;
}
export interface GetRegexMatchSetRequest {
  RegexMatchSetId: string;
}
export interface GetRegexMatchSetResponse {
  RegexMatchSet?: RegexMatchSet;
}
export interface GetRegexPatternSetRequest {
  RegexPatternSetId: string;
}
export interface GetRegexPatternSetResponse {
  RegexPatternSet?: RegexPatternSet;
}
export interface GetRuleGroupRequest {
  RuleGroupId: string;
}
export interface GetRuleGroupResponse {
  RuleGroup?: RuleGroup;
}
export interface GetRuleRequest {
  RuleId: string;
}
export interface GetRuleResponse {
  Rule?: Rule;
}
export type GetSampledRequestsMaxItems = number;

export interface GetSampledRequestsRequest {
  WebAclId: string;
  RuleId: string;
  TimeWindow: TimeWindow;
  MaxItems: number;
}
export interface GetSampledRequestsResponse {
  SampledRequests?: Array<SampledHTTPRequest>;
  PopulationSize?: number;
  TimeWindow?: TimeWindow;
}
export interface GetSizeConstraintSetRequest {
  SizeConstraintSetId: string;
}
export interface GetSizeConstraintSetResponse {
  SizeConstraintSet?: SizeConstraintSet;
}
export interface GetSqlInjectionMatchSetRequest {
  SqlInjectionMatchSetId: string;
}
export interface GetSqlInjectionMatchSetResponse {
  SqlInjectionMatchSet?: SqlInjectionMatchSet;
}
export interface GetWebACLRequest {
  WebACLId: string;
}
export interface GetWebACLResponse {
  WebACL?: WebACL;
}
export interface GetXssMatchSetRequest {
  XssMatchSetId: string;
}
export interface GetXssMatchSetResponse {
  XssMatchSet?: XssMatchSet;
}
export type HeaderName = string;

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

export type IgnoreUnsupportedType = boolean;

export interface IPSet {
  IPSetId: string;
  Name?: string;
  IPSetDescriptors: Array<IPSetDescriptor>;
}
export interface IPSetDescriptor {
  Type: IPSetDescriptorType;
  Value: string;
}
export type IPSetDescriptors = Array<IPSetDescriptor>;
export type IPSetDescriptorType = "IPV4" | "IPV6";
export type IPSetDescriptorValue = string;

export type IPSetSummaries = Array<IPSetSummary>;
export interface IPSetSummary {
  IPSetId: string;
  Name: string;
}
export interface IPSetUpdate {
  Action: ChangeAction;
  IPSetDescriptor: IPSetDescriptor;
}
export type IPSetUpdates = Array<IPSetUpdate>;
export type IPString = string;

export interface ListActivatedRulesInRuleGroupRequest {
  RuleGroupId?: string;
  NextMarker?: string;
  Limit?: number;
}
export interface ListActivatedRulesInRuleGroupResponse {
  NextMarker?: string;
  ActivatedRules?: Array<ActivatedRule>;
}
export interface ListByteMatchSetsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListByteMatchSetsResponse {
  NextMarker?: string;
  ByteMatchSets?: Array<ByteMatchSetSummary>;
}
export interface ListGeoMatchSetsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListGeoMatchSetsResponse {
  NextMarker?: string;
  GeoMatchSets?: Array<GeoMatchSetSummary>;
}
export interface ListIPSetsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListIPSetsResponse {
  NextMarker?: string;
  IPSets?: Array<IPSetSummary>;
}
export interface ListLoggingConfigurationsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListLoggingConfigurationsResponse {
  LoggingConfigurations?: Array<LoggingConfiguration>;
  NextMarker?: string;
}
export interface ListRateBasedRulesRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListRateBasedRulesResponse {
  NextMarker?: string;
  Rules?: Array<RuleSummary>;
}
export interface ListRegexMatchSetsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListRegexMatchSetsResponse {
  NextMarker?: string;
  RegexMatchSets?: Array<RegexMatchSetSummary>;
}
export interface ListRegexPatternSetsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListRegexPatternSetsResponse {
  NextMarker?: string;
  RegexPatternSets?: Array<RegexPatternSetSummary>;
}
export interface ListRuleGroupsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListRuleGroupsResponse {
  NextMarker?: string;
  RuleGroups?: Array<RuleGroupSummary>;
}
export interface ListRulesRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListRulesResponse {
  NextMarker?: string;
  Rules?: Array<RuleSummary>;
}
export interface ListSizeConstraintSetsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListSizeConstraintSetsResponse {
  NextMarker?: string;
  SizeConstraintSets?: Array<SizeConstraintSetSummary>;
}
export interface ListSqlInjectionMatchSetsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListSqlInjectionMatchSetsResponse {
  NextMarker?: string;
  SqlInjectionMatchSets?: Array<SqlInjectionMatchSetSummary>;
}
export interface ListSubscribedRuleGroupsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListSubscribedRuleGroupsResponse {
  NextMarker?: string;
  RuleGroups?: Array<SubscribedRuleGroupSummary>;
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
  NextMarker?: string;
  Limit?: number;
}
export interface ListWebACLsResponse {
  NextMarker?: string;
  WebACLs?: Array<WebACLSummary>;
}
export interface ListXssMatchSetsRequest {
  NextMarker?: string;
  Limit?: number;
}
export interface ListXssMatchSetsResponse {
  NextMarker?: string;
  XssMatchSets?: Array<XssMatchSetSummary>;
}
export type LogDestinationConfigs = Array<string>;
export interface LoggingConfiguration {
  ResourceArn: string;
  LogDestinationConfigs: Array<string>;
  RedactedFields?: Array<FieldToMatch>;
}
export type LoggingConfigurations = Array<LoggingConfiguration>;
export type ManagedKey = string;

export type ManagedKeys = Array<string>;
export type MatchFieldData = string;

export type MatchFieldType = "URI" | "QUERY_STRING" | "HEADER" | "METHOD" | "BODY" | "SINGLE_QUERY_ARG" | "ALL_QUERY_ARGS";
export type MetricName = string;

export type MigrationErrorType = "ENTITY_NOT_SUPPORTED" | "ENTITY_NOT_FOUND" | "S3_BUCKET_NO_PERMISSION" | "S3_BUCKET_NOT_ACCESSIBLE" | "S3_BUCKET_NOT_FOUND" | "S3_BUCKET_INVALID_REGION" | "S3_INTERNAL_ERROR";
export type Negated = boolean;

export type NextMarker = string;

export type PaginationLimit = number;

export type ParameterExceptionField = "CHANGE_ACTION" | "WAF_ACTION" | "WAF_OVERRIDE_ACTION" | "PREDICATE_TYPE" | "IPSET_TYPE" | "BYTE_MATCH_FIELD_TYPE" | "SQL_INJECTION_MATCH_FIELD_TYPE" | "BYTE_MATCH_TEXT_TRANSFORMATION" | "BYTE_MATCH_POSITIONAL_CONSTRAINT" | "SIZE_CONSTRAINT_COMPARISON_OPERATOR" | "GEO_MATCH_LOCATION_TYPE" | "GEO_MATCH_LOCATION_VALUE" | "RATE_KEY" | "RULE_TYPE" | "NEXT_MARKER" | "RESOURCE_ARN" | "TAGS" | "TAG_KEYS";
export type ParameterExceptionParameter = string;

export type ParameterExceptionReason = "INVALID_OPTION" | "ILLEGAL_COMBINATION" | "ILLEGAL_ARGUMENT" | "INVALID_TAG_KEY";
export type PolicyString = string;

export type PopulationSize = number;

export type PositionalConstraint = "EXACTLY" | "STARTS_WITH" | "ENDS_WITH" | "CONTAINS" | "CONTAINS_WORD";
export interface Predicate {
  Negated: boolean;
  Type: PredicateType;
  DataId: string;
}
export type Predicates = Array<Predicate>;
export type PredicateType = "IP_MATCH" | "BYTE_MATCH" | "SQL_INJECTION_MATCH" | "GEO_MATCH" | "SIZE_CONSTRAINT" | "XSS_MATCH" | "REGEX_MATCH";
export interface PutLoggingConfigurationRequest {
  LoggingConfiguration: LoggingConfiguration;
}
export interface PutLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface PutPermissionPolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutPermissionPolicyResponse {
}
export interface RateBasedRule {
  RuleId: string;
  Name?: string;
  MetricName?: string;
  MatchPredicates: Array<Predicate>;
  RateKey: RateKey;
  RateLimit: number;
}
export type RateKey = "IP";
export type RateLimit = number;

export type RedactedFields = Array<FieldToMatch>;
export interface RegexMatchSet {
  RegexMatchSetId?: string;
  Name?: string;
  RegexMatchTuples?: Array<RegexMatchTuple>;
}
export type RegexMatchSetSummaries = Array<RegexMatchSetSummary>;
export interface RegexMatchSetSummary {
  RegexMatchSetId: string;
  Name: string;
}
export interface RegexMatchSetUpdate {
  Action: ChangeAction;
  RegexMatchTuple: RegexMatchTuple;
}
export type RegexMatchSetUpdates = Array<RegexMatchSetUpdate>;
export interface RegexMatchTuple {
  FieldToMatch: FieldToMatch;
  TextTransformation: TextTransformation;
  RegexPatternSetId: string;
}
export type RegexMatchTuples = Array<RegexMatchTuple>;
export interface RegexPatternSet {
  RegexPatternSetId: string;
  Name?: string;
  RegexPatternStrings: Array<string>;
}
export type RegexPatternSetSummaries = Array<RegexPatternSetSummary>;
export interface RegexPatternSetSummary {
  RegexPatternSetId: string;
  Name: string;
}
export interface RegexPatternSetUpdate {
  Action: ChangeAction;
  RegexPatternString: string;
}
export type RegexPatternSetUpdates = Array<RegexPatternSetUpdate>;
export type RegexPatternString = string;

export type RegexPatternStrings = Array<string>;
export type ResourceArn = string;

export type ResourceId = string;

export type ResourceName = string;

export interface Rule {
  RuleId: string;
  Name?: string;
  MetricName?: string;
  Predicates: Array<Predicate>;
}
export interface RuleGroup {
  RuleGroupId: string;
  Name?: string;
  MetricName?: string;
}
export type RuleGroupSummaries = Array<RuleGroupSummary>;
export interface RuleGroupSummary {
  RuleGroupId: string;
  Name: string;
}
export interface RuleGroupUpdate {
  Action: ChangeAction;
  ActivatedRule: ActivatedRule;
}
export type RuleGroupUpdates = Array<RuleGroupUpdate>;
export type RulePriority = number;

export type RuleSummaries = Array<RuleSummary>;
export interface RuleSummary {
  RuleId: string;
  Name: string;
}
export interface RuleUpdate {
  Action: ChangeAction;
  Predicate: Predicate;
}
export type RuleUpdates = Array<RuleUpdate>;
export type S3BucketName = string;

export type S3ObjectUrl = string;

export interface SampledHTTPRequest {
  Request: HTTPRequest;
  Weight: number;
  Timestamp?: Date | string;
  Action?: string;
  RuleWithinRuleGroup?: string;
}
export type SampledHTTPRequests = Array<SampledHTTPRequest>;
export type SampleWeight = number;

export type Size = number;

export interface SizeConstraint {
  FieldToMatch: FieldToMatch;
  TextTransformation: TextTransformation;
  ComparisonOperator: ComparisonOperator;
  Size: number;
}
export type SizeConstraints = Array<SizeConstraint>;
export interface SizeConstraintSet {
  SizeConstraintSetId: string;
  Name?: string;
  SizeConstraints: Array<SizeConstraint>;
}
export type SizeConstraintSetSummaries = Array<SizeConstraintSetSummary>;
export interface SizeConstraintSetSummary {
  SizeConstraintSetId: string;
  Name: string;
}
export interface SizeConstraintSetUpdate {
  Action: ChangeAction;
  SizeConstraint: SizeConstraint;
}
export type SizeConstraintSetUpdates = Array<SizeConstraintSetUpdate>;
export interface SqlInjectionMatchSet {
  SqlInjectionMatchSetId: string;
  Name?: string;
  SqlInjectionMatchTuples: Array<SqlInjectionMatchTuple>;
}
export type SqlInjectionMatchSetSummaries = Array<SqlInjectionMatchSetSummary>;
export interface SqlInjectionMatchSetSummary {
  SqlInjectionMatchSetId: string;
  Name: string;
}
export interface SqlInjectionMatchSetUpdate {
  Action: ChangeAction;
  SqlInjectionMatchTuple: SqlInjectionMatchTuple;
}
export type SqlInjectionMatchSetUpdates = Array<SqlInjectionMatchSetUpdate>;
export interface SqlInjectionMatchTuple {
  FieldToMatch: FieldToMatch;
  TextTransformation: TextTransformation;
}
export type SqlInjectionMatchTuples = Array<SqlInjectionMatchTuple>;
export type SubscribedRuleGroupSummaries = Array<SubscribedRuleGroupSummary>;
export interface SubscribedRuleGroupSummary {
  RuleGroupId: string;
  Name: string;
  MetricName: string;
}
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
export interface TagResourceResponse {
}
export type TagValue = string;

export type TextTransformation = "NONE" | "COMPRESS_WHITE_SPACE" | "HTML_ENTITY_DECODE" | "LOWERCASE" | "CMD_LINE" | "URL_DECODE";
export type Timestamp = Date | string;

export interface TimeWindow {
  StartTime: Date | string;
  EndTime: Date | string;
}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateByteMatchSetRequest {
  ByteMatchSetId: string;
  ChangeToken: string;
  Updates: Array<ByteMatchSetUpdate>;
}
export interface UpdateByteMatchSetResponse {
  ChangeToken?: string;
}
export interface UpdateGeoMatchSetRequest {
  GeoMatchSetId: string;
  ChangeToken: string;
  Updates: Array<GeoMatchSetUpdate>;
}
export interface UpdateGeoMatchSetResponse {
  ChangeToken?: string;
}
export interface UpdateIPSetRequest {
  IPSetId: string;
  ChangeToken: string;
  Updates: Array<IPSetUpdate>;
}
export interface UpdateIPSetResponse {
  ChangeToken?: string;
}
export interface UpdateRateBasedRuleRequest {
  RuleId: string;
  ChangeToken: string;
  Updates: Array<RuleUpdate>;
  RateLimit: number;
}
export interface UpdateRateBasedRuleResponse {
  ChangeToken?: string;
}
export interface UpdateRegexMatchSetRequest {
  RegexMatchSetId: string;
  Updates: Array<RegexMatchSetUpdate>;
  ChangeToken: string;
}
export interface UpdateRegexMatchSetResponse {
  ChangeToken?: string;
}
export interface UpdateRegexPatternSetRequest {
  RegexPatternSetId: string;
  Updates: Array<RegexPatternSetUpdate>;
  ChangeToken: string;
}
export interface UpdateRegexPatternSetResponse {
  ChangeToken?: string;
}
export interface UpdateRuleGroupRequest {
  RuleGroupId: string;
  Updates: Array<RuleGroupUpdate>;
  ChangeToken: string;
}
export interface UpdateRuleGroupResponse {
  ChangeToken?: string;
}
export interface UpdateRuleRequest {
  RuleId: string;
  ChangeToken: string;
  Updates: Array<RuleUpdate>;
}
export interface UpdateRuleResponse {
  ChangeToken?: string;
}
export interface UpdateSizeConstraintSetRequest {
  SizeConstraintSetId: string;
  ChangeToken: string;
  Updates: Array<SizeConstraintSetUpdate>;
}
export interface UpdateSizeConstraintSetResponse {
  ChangeToken?: string;
}
export interface UpdateSqlInjectionMatchSetRequest {
  SqlInjectionMatchSetId: string;
  ChangeToken: string;
  Updates: Array<SqlInjectionMatchSetUpdate>;
}
export interface UpdateSqlInjectionMatchSetResponse {
  ChangeToken?: string;
}
export interface UpdateWebACLRequest {
  WebACLId: string;
  ChangeToken: string;
  Updates?: Array<WebACLUpdate>;
  DefaultAction?: WafAction;
}
export interface UpdateWebACLResponse {
  ChangeToken?: string;
}
export interface UpdateXssMatchSetRequest {
  XssMatchSetId: string;
  ChangeToken: string;
  Updates: Array<XssMatchSetUpdate>;
}
export interface UpdateXssMatchSetResponse {
  ChangeToken?: string;
}
export type URIString = string;

export interface WafAction {
  Type: WafActionType;
}
export type WafActionType = "BLOCK" | "ALLOW" | "COUNT";
export declare class WAFBadRequestException extends Data.TaggedError(
  "WAFBadRequestException",
)<{
  readonly message?: string;
}> {}
export declare class WAFDisallowedNameException extends Data.TaggedError(
  "WAFDisallowedNameException",
)<{
  readonly message?: string;
}> {}
export declare class WAFEntityMigrationException extends Data.TaggedError(
  "WAFEntityMigrationException",
)<{
  readonly message?: string;
  readonly MigrationErrorType?: MigrationErrorType;
  readonly MigrationErrorReason?: string;
}> {}
export declare class WAFInternalErrorException extends Data.TaggedError(
  "WAFInternalErrorException",
)<{
  readonly message?: string;
}> {}
export declare class WAFInvalidAccountException extends Data.TaggedError(
  "WAFInvalidAccountException",
)<{
}> {}
export declare class WAFInvalidOperationException extends Data.TaggedError(
  "WAFInvalidOperationException",
)<{
  readonly message?: string;
}> {}
export declare class WAFInvalidParameterException extends Data.TaggedError(
  "WAFInvalidParameterException",
)<{
  readonly field?: ParameterExceptionField;
  readonly parameter?: string;
  readonly reason?: ParameterExceptionReason;
}> {}
export declare class WAFInvalidPermissionPolicyException extends Data.TaggedError(
  "WAFInvalidPermissionPolicyException",
)<{
  readonly message?: string;
}> {}
export declare class WAFInvalidRegexPatternException extends Data.TaggedError(
  "WAFInvalidRegexPatternException",
)<{
  readonly message?: string;
}> {}
export declare class WAFLimitsExceededException extends Data.TaggedError(
  "WAFLimitsExceededException",
)<{
  readonly message?: string;
}> {}
export declare class WAFNonEmptyEntityException extends Data.TaggedError(
  "WAFNonEmptyEntityException",
)<{
  readonly message?: string;
}> {}
export declare class WAFNonexistentContainerException extends Data.TaggedError(
  "WAFNonexistentContainerException",
)<{
  readonly message?: string;
}> {}
export declare class WAFNonexistentItemException extends Data.TaggedError(
  "WAFNonexistentItemException",
)<{
  readonly message?: string;
}> {}
export interface WafOverrideAction {
  Type: WafOverrideActionType;
}
export type WafOverrideActionType = "NONE" | "COUNT";
export declare class WAFReferencedItemException extends Data.TaggedError(
  "WAFReferencedItemException",
)<{
  readonly message?: string;
}> {}
export type WafRuleType = "REGULAR" | "RATE_BASED" | "GROUP";
export declare class WAFServiceLinkedRoleErrorException extends Data.TaggedError(
  "WAFServiceLinkedRoleErrorException",
)<{
  readonly message?: string;
}> {}
export declare class WAFStaleDataException extends Data.TaggedError(
  "WAFStaleDataException",
)<{
  readonly message?: string;
}> {}
export declare class WAFSubscriptionNotFoundException extends Data.TaggedError(
  "WAFSubscriptionNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class WAFTagOperationException extends Data.TaggedError(
  "WAFTagOperationException",
)<{
  readonly message?: string;
}> {}
export declare class WAFTagOperationInternalErrorException extends Data.TaggedError(
  "WAFTagOperationInternalErrorException",
)<{
  readonly message?: string;
}> {}
export interface WebACL {
  WebACLId: string;
  Name?: string;
  MetricName?: string;
  DefaultAction: WafAction;
  Rules: Array<ActivatedRule>;
  WebACLArn?: string;
}
export type WebACLSummaries = Array<WebACLSummary>;
export interface WebACLSummary {
  WebACLId: string;
  Name: string;
}
export interface WebACLUpdate {
  Action: ChangeAction;
  ActivatedRule: ActivatedRule;
}
export type WebACLUpdates = Array<WebACLUpdate>;
export interface XssMatchSet {
  XssMatchSetId: string;
  Name?: string;
  XssMatchTuples: Array<XssMatchTuple>;
}
export type XssMatchSetSummaries = Array<XssMatchSetSummary>;
export interface XssMatchSetSummary {
  XssMatchSetId: string;
  Name: string;
}
export interface XssMatchSetUpdate {
  Action: ChangeAction;
  XssMatchTuple: XssMatchTuple;
}
export type XssMatchSetUpdates = Array<XssMatchSetUpdate>;
export interface XssMatchTuple {
  FieldToMatch: FieldToMatch;
  TextTransformation: TextTransformation;
}
export type XssMatchTuples = Array<XssMatchTuple>;
export declare namespace CreateByteMatchSet {
  export type Input = CreateByteMatchSetRequest;
  export type Output = CreateByteMatchSetResponse;
  export type Error =
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace CreateGeoMatchSet {
  export type Input = CreateGeoMatchSetRequest;
  export type Output = CreateGeoMatchSetResponse;
  export type Error =
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace CreateIPSet {
  export type Input = CreateIPSetRequest;
  export type Output = CreateIPSetResponse;
  export type Error =
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace CreateRateBasedRule {
  export type Input = CreateRateBasedRuleRequest;
  export type Output = CreateRateBasedRuleResponse;
  export type Error =
    | WAFBadRequestException
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace CreateRegexMatchSet {
  export type Input = CreateRegexMatchSetRequest;
  export type Output = CreateRegexMatchSetResponse;
  export type Error =
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace CreateRegexPatternSet {
  export type Input = CreateRegexPatternSetRequest;
  export type Output = CreateRegexPatternSetResponse;
  export type Error =
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace CreateRule {
  export type Input = CreateRuleRequest;
  export type Output = CreateRuleResponse;
  export type Error =
    | WAFBadRequestException
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace CreateRuleGroup {
  export type Input = CreateRuleGroupRequest;
  export type Output = CreateRuleGroupResponse;
  export type Error =
    | WAFBadRequestException
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace CreateSizeConstraintSet {
  export type Input = CreateSizeConstraintSetRequest;
  export type Output = CreateSizeConstraintSetResponse;
  export type Error =
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace CreateSqlInjectionMatchSet {
  export type Input = CreateSqlInjectionMatchSetRequest;
  export type Output = CreateSqlInjectionMatchSetResponse;
  export type Error =
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace CreateWebACL {
  export type Input = CreateWebACLRequest;
  export type Output = CreateWebACLResponse;
  export type Error =
    | WAFBadRequestException
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace CreateWebACLMigrationStack {
  export type Input = CreateWebACLMigrationStackRequest;
  export type Output = CreateWebACLMigrationStackResponse;
  export type Error =
    | WAFEntityMigrationException
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace CreateXssMatchSet {
  export type Input = CreateXssMatchSetRequest;
  export type Output = CreateXssMatchSetResponse;
  export type Error =
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeleteByteMatchSet {
  export type Input = DeleteByteMatchSetRequest;
  export type Output = DeleteByteMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeleteGeoMatchSet {
  export type Input = DeleteGeoMatchSetRequest;
  export type Output = DeleteGeoMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeleteIPSet {
  export type Input = DeleteIPSetRequest;
  export type Output = DeleteIPSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeleteLoggingConfiguration {
  export type Input = DeleteLoggingConfigurationRequest;
  export type Output = DeleteLoggingConfigurationResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFNonexistentItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeletePermissionPolicy {
  export type Input = DeletePermissionPolicyRequest;
  export type Output = DeletePermissionPolicyResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFNonexistentItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeleteRateBasedRule {
  export type Input = DeleteRateBasedRuleRequest;
  export type Output = DeleteRateBasedRuleResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace DeleteRegexMatchSet {
  export type Input = DeleteRegexMatchSetRequest;
  export type Output = DeleteRegexMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeleteRegexPatternSet {
  export type Input = DeleteRegexPatternSetRequest;
  export type Output = DeleteRegexPatternSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeleteRule {
  export type Input = DeleteRuleRequest;
  export type Output = DeleteRuleResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace DeleteRuleGroup {
  export type Input = DeleteRuleGroupRequest;
  export type Output = DeleteRuleGroupResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace DeleteSizeConstraintSet {
  export type Input = DeleteSizeConstraintSetRequest;
  export type Output = DeleteSizeConstraintSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeleteSqlInjectionMatchSet {
  export type Input = DeleteSqlInjectionMatchSetRequest;
  export type Output = DeleteSqlInjectionMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace DeleteWebACL {
  export type Input = DeleteWebACLRequest;
  export type Output = DeleteWebACLResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace DeleteXssMatchSet {
  export type Input = DeleteXssMatchSetRequest;
  export type Output = DeleteXssMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonEmptyEntityException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace GetByteMatchSet {
  export type Input = GetByteMatchSetRequest;
  export type Output = GetByteMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetChangeToken {
  export type Input = GetChangeTokenRequest;
  export type Output = GetChangeTokenResponse;
  export type Error =
    | WAFInternalErrorException
    | CommonAwsError;
}

export declare namespace GetChangeTokenStatus {
  export type Input = GetChangeTokenStatusRequest;
  export type Output = GetChangeTokenStatusResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetGeoMatchSet {
  export type Input = GetGeoMatchSetRequest;
  export type Output = GetGeoMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetIPSet {
  export type Input = GetIPSetRequest;
  export type Output = GetIPSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetLoggingConfiguration {
  export type Input = GetLoggingConfigurationRequest;
  export type Output = GetLoggingConfigurationResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetPermissionPolicy {
  export type Input = GetPermissionPolicyRequest;
  export type Output = GetPermissionPolicyResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetRateBasedRule {
  export type Input = GetRateBasedRuleRequest;
  export type Output = GetRateBasedRuleResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetRateBasedRuleManagedKeys {
  export type Input = GetRateBasedRuleManagedKeysRequest;
  export type Output = GetRateBasedRuleManagedKeysResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetRegexMatchSet {
  export type Input = GetRegexMatchSetRequest;
  export type Output = GetRegexMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetRegexPatternSet {
  export type Input = GetRegexPatternSetRequest;
  export type Output = GetRegexPatternSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetRule {
  export type Input = GetRuleRequest;
  export type Output = GetRuleResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetRuleGroup {
  export type Input = GetRuleGroupRequest;
  export type Output = GetRuleGroupResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetSampledRequests {
  export type Input = GetSampledRequestsRequest;
  export type Output = GetSampledRequestsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetSizeConstraintSet {
  export type Input = GetSizeConstraintSetRequest;
  export type Output = GetSizeConstraintSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetSqlInjectionMatchSet {
  export type Input = GetSqlInjectionMatchSetRequest;
  export type Output = GetSqlInjectionMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetWebACL {
  export type Input = GetWebACLRequest;
  export type Output = GetWebACLResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace GetXssMatchSet {
  export type Input = GetXssMatchSetRequest;
  export type Output = GetXssMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace ListActivatedRulesInRuleGroup {
  export type Input = ListActivatedRulesInRuleGroupRequest;
  export type Output = ListActivatedRulesInRuleGroupResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace ListByteMatchSets {
  export type Input = ListByteMatchSetsRequest;
  export type Output = ListByteMatchSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListGeoMatchSets {
  export type Input = ListGeoMatchSetsRequest;
  export type Output = ListGeoMatchSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListIPSets {
  export type Input = ListIPSetsRequest;
  export type Output = ListIPSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListLoggingConfigurations {
  export type Input = ListLoggingConfigurationsRequest;
  export type Output = ListLoggingConfigurationsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace ListRateBasedRules {
  export type Input = ListRateBasedRulesRequest;
  export type Output = ListRateBasedRulesResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListRegexMatchSets {
  export type Input = ListRegexMatchSetsRequest;
  export type Output = ListRegexMatchSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListRegexPatternSets {
  export type Input = ListRegexPatternSetsRequest;
  export type Output = ListRegexPatternSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListRuleGroups {
  export type Input = ListRuleGroupsRequest;
  export type Output = ListRuleGroupsResponse;
  export type Error =
    | WAFInternalErrorException
    | CommonAwsError;
}

export declare namespace ListRules {
  export type Input = ListRulesRequest;
  export type Output = ListRulesResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListSizeConstraintSets {
  export type Input = ListSizeConstraintSetsRequest;
  export type Output = ListSizeConstraintSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListSqlInjectionMatchSets {
  export type Input = ListSqlInjectionMatchSetsRequest;
  export type Output = ListSqlInjectionMatchSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListSubscribedRuleGroups {
  export type Input = ListSubscribedRuleGroupsRequest;
  export type Output = ListSubscribedRuleGroupsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFNonexistentItemException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | WAFBadRequestException
    | WAFInternalErrorException
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
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace ListXssMatchSets {
  export type Input = ListXssMatchSetsRequest;
  export type Output = ListXssMatchSetsResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | CommonAwsError;
}

export declare namespace PutLoggingConfiguration {
  export type Input = PutLoggingConfigurationRequest;
  export type Output = PutLoggingConfigurationResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFNonexistentItemException
    | WAFServiceLinkedRoleErrorException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace PutPermissionPolicy {
  export type Input = PutPermissionPolicyRequest;
  export type Output = PutPermissionPolicyResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidPermissionPolicyException
    | WAFNonexistentItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | WAFBadRequestException
    | WAFInternalErrorException
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
    | WAFBadRequestException
    | WAFInternalErrorException
    | WAFInvalidParameterException
    | WAFNonexistentItemException
    | WAFTagOperationException
    | WAFTagOperationInternalErrorException
    | CommonAwsError;
}

export declare namespace UpdateByteMatchSet {
  export type Input = UpdateByteMatchSetRequest;
  export type Output = UpdateByteMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateGeoMatchSet {
  export type Input = UpdateGeoMatchSetRequest;
  export type Output = UpdateGeoMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateIPSet {
  export type Input = UpdateIPSetRequest;
  export type Output = UpdateIPSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateRateBasedRule {
  export type Input = UpdateRateBasedRuleRequest;
  export type Output = UpdateRateBasedRuleResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateRegexMatchSet {
  export type Input = UpdateRegexMatchSetRequest;
  export type Output = UpdateRegexMatchSetResponse;
  export type Error =
    | WAFDisallowedNameException
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateRegexPatternSet {
  export type Input = UpdateRegexPatternSetRequest;
  export type Output = UpdateRegexPatternSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidRegexPatternException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateRule {
  export type Input = UpdateRuleRequest;
  export type Output = UpdateRuleResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateRuleGroup {
  export type Input = UpdateRuleGroupRequest;
  export type Output = UpdateRuleGroupResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateSizeConstraintSet {
  export type Input = UpdateSizeConstraintSetRequest;
  export type Output = UpdateSizeConstraintSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateSqlInjectionMatchSet {
  export type Input = UpdateSqlInjectionMatchSetRequest;
  export type Output = UpdateSqlInjectionMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFStaleDataException
    | CommonAwsError;
}

export declare namespace UpdateWebACL {
  export type Input = UpdateWebACLRequest;
  export type Output = UpdateWebACLResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFReferencedItemException
    | WAFStaleDataException
    | WAFSubscriptionNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateXssMatchSet {
  export type Input = UpdateXssMatchSetRequest;
  export type Output = UpdateXssMatchSetResponse;
  export type Error =
    | WAFInternalErrorException
    | WAFInvalidAccountException
    | WAFInvalidOperationException
    | WAFInvalidParameterException
    | WAFLimitsExceededException
    | WAFNonexistentContainerException
    | WAFNonexistentItemException
    | WAFStaleDataException
    | CommonAwsError;
}

