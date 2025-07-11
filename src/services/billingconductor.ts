import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSBillingConductor {
  associateAccounts(
    input: AssociateAccountsInput,
  ): Effect.Effect<
    AssociateAccountsOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associatePricingRules(
    input: AssociatePricingRulesInput,
  ): Effect.Effect<
    AssociatePricingRulesOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchAssociateResourcesToCustomLineItem(
    input: BatchAssociateResourcesToCustomLineItemInput,
  ): Effect.Effect<
    BatchAssociateResourcesToCustomLineItemOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchDisassociateResourcesFromCustomLineItem(
    input: BatchDisassociateResourcesFromCustomLineItemInput,
  ): Effect.Effect<
    BatchDisassociateResourcesFromCustomLineItemOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createBillingGroup(
    input: CreateBillingGroupInput,
  ): Effect.Effect<
    CreateBillingGroupOutput,
    AccessDeniedException | ConflictException | InternalServerException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCustomLineItem(
    input: CreateCustomLineItemInput,
  ): Effect.Effect<
    CreateCustomLineItemOutput,
    AccessDeniedException | ConflictException | InternalServerException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createPricingPlan(
    input: CreatePricingPlanInput,
  ): Effect.Effect<
    CreatePricingPlanOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createPricingRule(
    input: CreatePricingRuleInput,
  ): Effect.Effect<
    CreatePricingRuleOutput,
    AccessDeniedException | ConflictException | InternalServerException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteBillingGroup(
    input: DeleteBillingGroupInput,
  ): Effect.Effect<
    DeleteBillingGroupOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCustomLineItem(
    input: DeleteCustomLineItemInput,
  ): Effect.Effect<
    DeleteCustomLineItemOutput,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deletePricingPlan(
    input: DeletePricingPlanInput,
  ): Effect.Effect<
    DeletePricingPlanOutput,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deletePricingRule(
    input: DeletePricingRuleInput,
  ): Effect.Effect<
    DeletePricingRuleOutput,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateAccounts(
    input: DisassociateAccountsInput,
  ): Effect.Effect<
    DisassociateAccountsOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociatePricingRules(
    input: DisassociatePricingRulesInput,
  ): Effect.Effect<
    DisassociatePricingRulesOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getBillingGroupCostReport(
    input: GetBillingGroupCostReportInput,
  ): Effect.Effect<
    GetBillingGroupCostReportOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAccountAssociations(
    input: ListAccountAssociationsInput,
  ): Effect.Effect<
    ListAccountAssociationsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listBillingGroupCostReports(
    input: ListBillingGroupCostReportsInput,
  ): Effect.Effect<
    ListBillingGroupCostReportsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listBillingGroups(
    input: ListBillingGroupsInput,
  ): Effect.Effect<
    ListBillingGroupsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCustomLineItemVersions(
    input: ListCustomLineItemVersionsInput,
  ): Effect.Effect<
    ListCustomLineItemVersionsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCustomLineItems(
    input: ListCustomLineItemsInput,
  ): Effect.Effect<
    ListCustomLineItemsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPricingPlans(
    input: ListPricingPlansInput,
  ): Effect.Effect<
    ListPricingPlansOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPricingPlansAssociatedWithPricingRule(
    input: ListPricingPlansAssociatedWithPricingRuleInput,
  ): Effect.Effect<
    ListPricingPlansAssociatedWithPricingRuleOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPricingRules(
    input: ListPricingRulesInput,
  ): Effect.Effect<
    ListPricingRulesOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPricingRulesAssociatedToPricingPlan(
    input: ListPricingRulesAssociatedToPricingPlanInput,
  ): Effect.Effect<
    ListPricingRulesAssociatedToPricingPlanOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listResourcesAssociatedToCustomLineItem(
    input: ListResourcesAssociatedToCustomLineItemInput,
  ): Effect.Effect<
    ListResourcesAssociatedToCustomLineItemOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateBillingGroup(
    input: UpdateBillingGroupInput,
  ): Effect.Effect<
    UpdateBillingGroupOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCustomLineItem(
    input: UpdateCustomLineItemInput,
  ): Effect.Effect<
    UpdateCustomLineItemOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updatePricingPlan(
    input: UpdatePricingPlanInput,
  ): Effect.Effect<
    UpdatePricingPlanOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updatePricingRule(
    input: UpdatePricingRuleInput,
  ): Effect.Effect<
    UpdatePricingRuleOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Billingconductor = AWSBillingConductor;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AccountAssociationsList = Array<AccountAssociationsListElement>;
export interface AccountAssociationsListElement {
  AccountId?: string;
  BillingGroupArn?: string;
  AccountName?: string;
  AccountEmail?: string;
}
export type AccountEmail = string;

export interface AccountGrouping {
  LinkedAccountIds: Array<string>;
  AutoAssociate?: boolean;
}
export type AccountId = string;

export type AccountIdFilterList = Array<string>;
export type AccountIdList = Array<string>;
export type AccountName = string;

export type Arn = string;

export interface AssociateAccountsInput {
  Arn: string;
  AccountIds: Array<string>;
}
export interface AssociateAccountsOutput {
  Arn?: string;
}
export interface AssociatePricingRulesInput {
  Arn: string;
  PricingRuleArns: Array<string>;
}
export interface AssociatePricingRulesOutput {
  Arn?: string;
}
export interface AssociateResourceError {
  Message?: string;
  Reason?: string;
}
export type AssociateResourceErrorReason = string;

export interface AssociateResourceResponseElement {
  Arn?: string;
  Error?: AssociateResourceError;
}
export type AssociateResourcesResponseList = Array<AssociateResourceResponseElement>;
export type Association = string;

export interface Attribute {
  Key?: string;
  Value?: string;
}
export type AttributesList = Array<Attribute>;
export type AWSCost = string;

export interface BatchAssociateResourcesToCustomLineItemInput {
  TargetArn: string;
  ResourceArns: Array<string>;
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}
export interface BatchAssociateResourcesToCustomLineItemOutput {
  SuccessfullyAssociatedResources?: Array<AssociateResourceResponseElement>;
  FailedAssociatedResources?: Array<AssociateResourceResponseElement>;
}
export interface BatchDisassociateResourcesFromCustomLineItemInput {
  TargetArn: string;
  ResourceArns: Array<string>;
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}
export interface BatchDisassociateResourcesFromCustomLineItemOutput {
  SuccessfullyDisassociatedResources?: Array<DisassociateResourceResponseElement>;
  FailedDisassociatedResources?: Array<DisassociateResourceResponseElement>;
}
export type BillingEntity = string;

export type BillingGroupArn = string;

export type BillingGroupArnList = Array<string>;
export interface BillingGroupCostReportElement {
  Arn?: string;
  AWSCost?: string;
  ProformaCost?: string;
  Margin?: string;
  MarginPercentage?: string;
  Currency?: string;
}
export type BillingGroupCostReportList = Array<BillingGroupCostReportElement>;
export interface BillingGroupCostReportResultElement {
  Arn?: string;
  AWSCost?: string;
  ProformaCost?: string;
  Margin?: string;
  MarginPercentage?: string;
  Currency?: string;
  Attributes?: Array<Attribute>;
}
export type BillingGroupCostReportResultsList = Array<BillingGroupCostReportResultElement>;
export type BillingGroupDescription = string;

export type BillingGroupFullArn = string;

export type BillingGroupList = Array<BillingGroupListElement>;
export interface BillingGroupListElement {
  Name?: string;
  Arn?: string;
  Description?: string;
  PrimaryAccountId?: string;
  ComputationPreference?: ComputationPreference;
  Size?: number;
  CreationTime?: number;
  LastModifiedTime?: number;
  Status?: string;
  StatusReason?: string;
  AccountGrouping?: ListBillingGroupAccountGrouping;
}
export type BillingGroupName = string;

export type BillingGroupStatus = string;

export type BillingGroupStatusList = Array<string>;
export type BillingGroupStatusReason = string;

export type BillingPeriod = string;

export interface BillingPeriodRange {
  InclusiveStartBillingPeriod: string;
  ExclusiveEndBillingPeriod: string;
}
export type ClientToken = string;

export interface ComputationPreference {
  PricingPlanArn: string;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly Reason?: string;
}> {}
export type ConflictExceptionReason = string;

export interface CreateBillingGroupInput {
  ClientToken?: string;
  Name: string;
  AccountGrouping: AccountGrouping;
  ComputationPreference: ComputationPreference;
  PrimaryAccountId?: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateBillingGroupOutput {
  Arn?: string;
}
export interface CreateCustomLineItemInput {
  ClientToken?: string;
  Name: string;
  Description: string;
  BillingGroupArn: string;
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
  Tags?: Record<string, string>;
  ChargeDetails: CustomLineItemChargeDetails;
  AccountId?: string;
}
export interface CreateCustomLineItemOutput {
  Arn?: string;
}
export interface CreateFreeTierConfig {
  Activated: boolean;
}
export interface CreatePricingPlanInput {
  ClientToken?: string;
  Name: string;
  Description?: string;
  PricingRuleArns?: Array<string>;
  Tags?: Record<string, string>;
}
export interface CreatePricingPlanOutput {
  Arn?: string;
}
export interface CreatePricingRuleInput {
  ClientToken?: string;
  Name: string;
  Description?: string;
  Scope: string;
  Type: string;
  ModifierPercentage?: number;
  Service?: string;
  Tags?: Record<string, string>;
  BillingEntity?: string;
  Tiering?: CreateTieringInput;
  UsageType?: string;
  Operation?: string;
}
export interface CreatePricingRuleOutput {
  Arn?: string;
}
export interface CreateTieringInput {
  FreeTier: CreateFreeTierConfig;
}
export type Currency = string;

export type CurrencyCode = string;

export type CustomLineItemArn = string;

export type CustomLineItemArns = Array<string>;
export type CustomLineItemAssociationElement = string;

export type CustomLineItemAssociationsList = Array<string>;
export type CustomLineItemBatchAssociationsList = Array<string>;
export type CustomLineItemBatchDisassociationsList = Array<string>;
export interface CustomLineItemBillingPeriodRange {
  InclusiveStartBillingPeriod: string;
  ExclusiveEndBillingPeriod?: string;
}
export interface CustomLineItemChargeDetails {
  Flat?: CustomLineItemFlatChargeDetails;
  Percentage?: CustomLineItemPercentageChargeDetails;
  Type: string;
  LineItemFilters?: Array<LineItemFilter>;
}
export type CustomLineItemChargeValue = number;

export type CustomLineItemDescription = string;

export interface CustomLineItemFlatChargeDetails {
  ChargeValue: number;
}
export type CustomLineItemList = Array<CustomLineItemListElement>;
export interface CustomLineItemListElement {
  Arn?: string;
  Name?: string;
  ChargeDetails?: ListCustomLineItemChargeDetails;
  CurrencyCode?: string;
  Description?: string;
  ProductCode?: string;
  BillingGroupArn?: string;
  CreationTime?: number;
  LastModifiedTime?: number;
  AssociationSize?: number;
  AccountId?: string;
}
export type CustomLineItemName = string;

export type CustomLineItemNameList = Array<string>;
export interface CustomLineItemPercentageChargeDetails {
  PercentageValue: number;
  AssociatedValues?: Array<string>;
}
export type CustomLineItemPercentageChargeValue = number;

export type CustomLineItemProductCode = string;

export type CustomLineItemRelationship = string;

export type CustomLineItemType = string;

export type CustomLineItemVersionList = Array<CustomLineItemVersionListElement>;
export interface CustomLineItemVersionListElement {
  Name?: string;
  ChargeDetails?: ListCustomLineItemChargeDetails;
  CurrencyCode?: string;
  Description?: string;
  ProductCode?: string;
  BillingGroupArn?: string;
  CreationTime?: number;
  LastModifiedTime?: number;
  AssociationSize?: number;
  StartBillingPeriod?: string;
  EndBillingPeriod?: string;
  Arn?: string;
  StartTime?: number;
  AccountId?: string;
}
export interface DeleteBillingGroupInput {
  Arn: string;
}
export interface DeleteBillingGroupOutput {
  Arn?: string;
}
export interface DeleteCustomLineItemInput {
  Arn: string;
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}
export interface DeleteCustomLineItemOutput {
  Arn?: string;
}
export interface DeletePricingPlanInput {
  Arn: string;
}
export interface DeletePricingPlanOutput {
  Arn?: string;
}
export interface DeletePricingRuleInput {
  Arn: string;
}
export interface DeletePricingRuleOutput {
  Arn?: string;
}
export interface DisassociateAccountsInput {
  Arn: string;
  AccountIds: Array<string>;
}
export interface DisassociateAccountsOutput {
  Arn?: string;
}
export interface DisassociatePricingRulesInput {
  Arn: string;
  PricingRuleArns: Array<string>;
}
export interface DisassociatePricingRulesOutput {
  Arn?: string;
}
export interface DisassociateResourceResponseElement {
  Arn?: string;
  Error?: AssociateResourceError;
}
export type DisassociateResourcesResponseList = Array<DisassociateResourceResponseElement>;
export interface FreeTierConfig {
  Activated: boolean;
}
export interface GetBillingGroupCostReportInput {
  Arn: string;
  BillingPeriodRange?: BillingPeriodRange;
  GroupBy?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetBillingGroupCostReportOutput {
  BillingGroupCostReportResults?: Array<BillingGroupCostReportResultElement>;
  NextToken?: string;
}
export type GroupByAttributeName = string;

export type GroupByAttributesList = Array<string>;
export type Instant = number;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export interface LineItemFilter {
  Attribute: string;
  MatchOption: string;
  Values: Array<string>;
}
export type LineItemFilterAttributeName = string;

export type LineItemFiltersList = Array<LineItemFilter>;
export type LineItemFilterValue = string;

export type LineItemFilterValuesList = Array<string>;
export interface ListAccountAssociationsFilter {
  Association?: string;
  AccountId?: string;
  AccountIds?: Array<string>;
}
export interface ListAccountAssociationsInput {
  BillingPeriod?: string;
  Filters?: ListAccountAssociationsFilter;
  NextToken?: string;
}
export interface ListAccountAssociationsOutput {
  LinkedAccounts?: Array<AccountAssociationsListElement>;
  NextToken?: string;
}
export interface ListBillingGroupAccountGrouping {
  AutoAssociate?: boolean;
}
export interface ListBillingGroupCostReportsFilter {
  BillingGroupArns?: Array<string>;
}
export interface ListBillingGroupCostReportsInput {
  BillingPeriod?: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: ListBillingGroupCostReportsFilter;
}
export interface ListBillingGroupCostReportsOutput {
  BillingGroupCostReports?: Array<BillingGroupCostReportElement>;
  NextToken?: string;
}
export interface ListBillingGroupsFilter {
  Arns?: Array<string>;
  PricingPlan?: string;
  Statuses?: Array<string>;
  AutoAssociate?: boolean;
}
export interface ListBillingGroupsInput {
  BillingPeriod?: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: ListBillingGroupsFilter;
}
export interface ListBillingGroupsOutput {
  BillingGroups?: Array<BillingGroupListElement>;
  NextToken?: string;
}
export interface ListCustomLineItemChargeDetails {
  Flat?: ListCustomLineItemFlatChargeDetails;
  Percentage?: ListCustomLineItemPercentageChargeDetails;
  Type: string;
  LineItemFilters?: Array<LineItemFilter>;
}
export interface ListCustomLineItemFlatChargeDetails {
  ChargeValue: number;
}
export interface ListCustomLineItemPercentageChargeDetails {
  PercentageValue: number;
}
export interface ListCustomLineItemsFilter {
  Names?: Array<string>;
  BillingGroups?: Array<string>;
  Arns?: Array<string>;
  AccountIds?: Array<string>;
}
export interface ListCustomLineItemsInput {
  BillingPeriod?: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: ListCustomLineItemsFilter;
}
export interface ListCustomLineItemsOutput {
  CustomLineItems?: Array<CustomLineItemListElement>;
  NextToken?: string;
}
export interface ListCustomLineItemVersionsBillingPeriodRangeFilter {
  StartBillingPeriod?: string;
  EndBillingPeriod?: string;
}
export interface ListCustomLineItemVersionsFilter {
  BillingPeriodRange?: ListCustomLineItemVersionsBillingPeriodRangeFilter;
}
export interface ListCustomLineItemVersionsInput {
  Arn: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: ListCustomLineItemVersionsFilter;
}
export interface ListCustomLineItemVersionsOutput {
  CustomLineItemVersions?: Array<CustomLineItemVersionListElement>;
  NextToken?: string;
}
export interface ListPricingPlansAssociatedWithPricingRuleInput {
  BillingPeriod?: string;
  PricingRuleArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPricingPlansAssociatedWithPricingRuleOutput {
  BillingPeriod?: string;
  PricingRuleArn?: string;
  PricingPlanArns?: Array<string>;
  NextToken?: string;
}
export interface ListPricingPlansFilter {
  Arns?: Array<string>;
}
export interface ListPricingPlansInput {
  BillingPeriod?: string;
  Filters?: ListPricingPlansFilter;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPricingPlansOutput {
  BillingPeriod?: string;
  PricingPlans?: Array<PricingPlanListElement>;
  NextToken?: string;
}
export interface ListPricingRulesAssociatedToPricingPlanInput {
  BillingPeriod?: string;
  PricingPlanArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPricingRulesAssociatedToPricingPlanOutput {
  BillingPeriod?: string;
  PricingPlanArn?: string;
  PricingRuleArns?: Array<string>;
  NextToken?: string;
}
export interface ListPricingRulesFilter {
  Arns?: Array<string>;
}
export interface ListPricingRulesInput {
  BillingPeriod?: string;
  Filters?: ListPricingRulesFilter;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPricingRulesOutput {
  BillingPeriod?: string;
  PricingRules?: Array<PricingRuleListElement>;
  NextToken?: string;
}
export interface ListResourcesAssociatedToCustomLineItemFilter {
  Relationship?: string;
}
export interface ListResourcesAssociatedToCustomLineItemInput {
  BillingPeriod?: string;
  Arn: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: ListResourcesAssociatedToCustomLineItemFilter;
}
export interface ListResourcesAssociatedToCustomLineItemOutput {
  Arn?: string;
  AssociatedResources?: Array<ListResourcesAssociatedToCustomLineItemResponseElement>;
  NextToken?: string;
}
export interface ListResourcesAssociatedToCustomLineItemResponseElement {
  Arn?: string;
  Relationship?: string;
  EndBillingPeriod?: string;
}
export type ListResourcesAssociatedToCustomLineItemResponseList = Array<ListResourcesAssociatedToCustomLineItemResponseElement>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type Margin = string;

export type MarginPercentage = string;

export type MatchOption = string;

export type MaxBillingGroupCostReportResults = number;

export type MaxBillingGroupResults = number;

export type MaxCustomLineItemResults = number;

export type MaxPricingPlanResults = number;

export type MaxPricingRuleResults = number;

export type ModifierPercentage = number;

export type NumberOfAccounts = number;

export type NumberOfAssociatedPricingRules = number;

export type NumberOfAssociations = number;

export type NumberOfPricingPlansAssociatedWith = number;

export type Operation = string;

export type PricingPlanArn = string;

export type PricingPlanArns = Array<string>;
export type PricingPlanDescription = string;

export type PricingPlanFullArn = string;

export type PricingPlanList = Array<PricingPlanListElement>;
export interface PricingPlanListElement {
  Name?: string;
  Arn?: string;
  Description?: string;
  Size?: number;
  CreationTime?: number;
  LastModifiedTime?: number;
}
export type PricingPlanName = string;

export type PricingRuleArn = string;

export type PricingRuleArns = Array<string>;
export type PricingRuleArnsInput = Array<string>;
export type PricingRuleArnsNonEmptyInput = Array<string>;
export type PricingRuleDescription = string;

export type PricingRuleList = Array<PricingRuleListElement>;
export interface PricingRuleListElement {
  Name?: string;
  Arn?: string;
  Description?: string;
  Scope?: string;
  Type?: string;
  ModifierPercentage?: number;
  Service?: string;
  AssociatedPricingPlanCount?: number;
  CreationTime?: number;
  LastModifiedTime?: number;
  BillingEntity?: string;
  Tiering?: Tiering;
  UsageType?: string;
  Operation?: string;
}
export type PricingRuleName = string;

export type PricingRuleScope = string;

export type PricingRuleType = string;

export type ProformaCost = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export type RetryAfterSeconds = number;

export type Service = string;

export declare class ServiceLimitExceededException extends Data.TaggedError(
  "ServiceLimitExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly LimitCode: string;
  readonly ServiceCode: string;
}> {}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export interface Tiering {
  FreeTier: FreeTierConfig;
}
export type TieringActivated = boolean;

export type Token = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateBillingGroupAccountGrouping {
  AutoAssociate?: boolean;
}
export interface UpdateBillingGroupInput {
  Arn: string;
  Name?: string;
  Status?: string;
  ComputationPreference?: ComputationPreference;
  Description?: string;
  AccountGrouping?: UpdateBillingGroupAccountGrouping;
}
export interface UpdateBillingGroupOutput {
  Arn?: string;
  Name?: string;
  Description?: string;
  PrimaryAccountId?: string;
  PricingPlanArn?: string;
  Size?: number;
  LastModifiedTime?: number;
  Status?: string;
  StatusReason?: string;
  AccountGrouping?: UpdateBillingGroupAccountGrouping;
}
export interface UpdateCustomLineItemChargeDetails {
  Flat?: UpdateCustomLineItemFlatChargeDetails;
  Percentage?: UpdateCustomLineItemPercentageChargeDetails;
  LineItemFilters?: Array<LineItemFilter>;
}
export interface UpdateCustomLineItemFlatChargeDetails {
  ChargeValue: number;
}
export interface UpdateCustomLineItemInput {
  Arn: string;
  Name?: string;
  Description?: string;
  ChargeDetails?: UpdateCustomLineItemChargeDetails;
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}
export interface UpdateCustomLineItemOutput {
  Arn?: string;
  BillingGroupArn?: string;
  Name?: string;
  Description?: string;
  ChargeDetails?: ListCustomLineItemChargeDetails;
  LastModifiedTime?: number;
  AssociationSize?: number;
}
export interface UpdateCustomLineItemPercentageChargeDetails {
  PercentageValue: number;
}
export interface UpdateFreeTierConfig {
  Activated: boolean;
}
export interface UpdatePricingPlanInput {
  Arn: string;
  Name?: string;
  Description?: string;
}
export interface UpdatePricingPlanOutput {
  Arn?: string;
  Name?: string;
  Description?: string;
  Size?: number;
  LastModifiedTime?: number;
}
export interface UpdatePricingRuleInput {
  Arn: string;
  Name?: string;
  Description?: string;
  Type?: string;
  ModifierPercentage?: number;
  Tiering?: UpdateTieringInput;
}
export interface UpdatePricingRuleOutput {
  Arn?: string;
  Name?: string;
  Description?: string;
  Scope?: string;
  Type?: string;
  ModifierPercentage?: number;
  Service?: string;
  AssociatedPricingPlanCount?: number;
  LastModifiedTime?: number;
  BillingEntity?: string;
  Tiering?: UpdateTieringInput;
  UsageType?: string;
  Operation?: string;
}
export interface UpdateTieringInput {
  FreeTier: UpdateFreeTierConfig;
}
export type UsageType = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: string;
  readonly Fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export declare namespace AssociateAccounts {
  export type Input = AssociateAccountsInput;
  export type Output = AssociateAccountsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociatePricingRules {
  export type Input = AssociatePricingRulesInput;
  export type Output = AssociatePricingRulesOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchAssociateResourcesToCustomLineItem {
  export type Input = BatchAssociateResourcesToCustomLineItemInput;
  export type Output = BatchAssociateResourcesToCustomLineItemOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDisassociateResourcesFromCustomLineItem {
  export type Input = BatchDisassociateResourcesFromCustomLineItemInput;
  export type Output = BatchDisassociateResourcesFromCustomLineItemOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBillingGroup {
  export type Input = CreateBillingGroupInput;
  export type Output = CreateBillingGroupOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCustomLineItem {
  export type Input = CreateCustomLineItemInput;
  export type Output = CreateCustomLineItemOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePricingPlan {
  export type Input = CreatePricingPlanInput;
  export type Output = CreatePricingPlanOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePricingRule {
  export type Input = CreatePricingRuleInput;
  export type Output = CreatePricingRuleOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBillingGroup {
  export type Input = DeleteBillingGroupInput;
  export type Output = DeleteBillingGroupOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCustomLineItem {
  export type Input = DeleteCustomLineItemInput;
  export type Output = DeleteCustomLineItemOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePricingPlan {
  export type Input = DeletePricingPlanInput;
  export type Output = DeletePricingPlanOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePricingRule {
  export type Input = DeletePricingRuleInput;
  export type Output = DeletePricingRuleOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateAccounts {
  export type Input = DisassociateAccountsInput;
  export type Output = DisassociateAccountsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociatePricingRules {
  export type Input = DisassociatePricingRulesInput;
  export type Output = DisassociatePricingRulesOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBillingGroupCostReport {
  export type Input = GetBillingGroupCostReportInput;
  export type Output = GetBillingGroupCostReportOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccountAssociations {
  export type Input = ListAccountAssociationsInput;
  export type Output = ListAccountAssociationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBillingGroupCostReports {
  export type Input = ListBillingGroupCostReportsInput;
  export type Output = ListBillingGroupCostReportsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBillingGroups {
  export type Input = ListBillingGroupsInput;
  export type Output = ListBillingGroupsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCustomLineItemVersions {
  export type Input = ListCustomLineItemVersionsInput;
  export type Output = ListCustomLineItemVersionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCustomLineItems {
  export type Input = ListCustomLineItemsInput;
  export type Output = ListCustomLineItemsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPricingPlans {
  export type Input = ListPricingPlansInput;
  export type Output = ListPricingPlansOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPricingPlansAssociatedWithPricingRule {
  export type Input = ListPricingPlansAssociatedWithPricingRuleInput;
  export type Output = ListPricingPlansAssociatedWithPricingRuleOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPricingRules {
  export type Input = ListPricingRulesInput;
  export type Output = ListPricingRulesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPricingRulesAssociatedToPricingPlan {
  export type Input = ListPricingRulesAssociatedToPricingPlanInput;
  export type Output = ListPricingRulesAssociatedToPricingPlanOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourcesAssociatedToCustomLineItem {
  export type Input = ListResourcesAssociatedToCustomLineItemInput;
  export type Output = ListResourcesAssociatedToCustomLineItemOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
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
    | ThrottlingException
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
    | ThrottlingException
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
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateBillingGroup {
  export type Input = UpdateBillingGroupInput;
  export type Output = UpdateBillingGroupOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCustomLineItem {
  export type Input = UpdateCustomLineItemInput;
  export type Output = UpdateCustomLineItemOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePricingPlan {
  export type Input = UpdatePricingPlanInput;
  export type Output = UpdatePricingPlanOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePricingRule {
  export type Input = UpdatePricingRuleInput;
  export type Output = UpdatePricingRuleOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

