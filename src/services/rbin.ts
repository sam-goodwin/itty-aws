import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonRecycleBin {
  createRule(
    input: CreateRuleRequest,
  ): Effect.Effect<
    CreateRuleResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteRule(
    input: DeleteRuleRequest,
  ): Effect.Effect<
    DeleteRuleResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getRule(
    input: GetRuleRequest,
  ): Effect.Effect<
    GetRuleResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listRules(
    input: ListRulesRequest,
  ): Effect.Effect<
    ListRulesResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  lockRule(
    input: LockRuleRequest,
  ): Effect.Effect<
    LockRuleResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  unlockRule(
    input: UnlockRuleRequest,
  ): Effect.Effect<
    UnlockRuleResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateRule(
    input: UpdateRuleRequest,
  ): Effect.Effect<
    UpdateRuleResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
}

export type Rbin = AmazonRecycleBin;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly Reason?: ConflictExceptionReason;
}> {}
export type ConflictExceptionReason = "INVALID_RULE_STATE";
export interface CreateRuleRequest {
  RetentionPeriod: RetentionPeriod;
  Description?: string;
  Tags?: Array<Tag>;
  ResourceType: ResourceType;
  ResourceTags?: Array<ResourceTag>;
  LockConfiguration?: LockConfiguration;
  ExcludeResourceTags?: Array<ResourceTag>;
}
export interface CreateRuleResponse {
  Identifier?: string;
  RetentionPeriod?: RetentionPeriod;
  Description?: string;
  Tags?: Array<Tag>;
  ResourceType?: ResourceType;
  ResourceTags?: Array<ResourceTag>;
  Status?: RuleStatus;
  LockConfiguration?: LockConfiguration;
  LockState?: LockState;
  RuleArn?: string;
  ExcludeResourceTags?: Array<ResourceTag>;
}
export interface DeleteRuleRequest {
  Identifier: string;
}
export interface DeleteRuleResponse {}
export type Description = string;

export type ErrorMessage = string;

export type ExcludeResourceTags = Array<ResourceTag>;
export interface GetRuleRequest {
  Identifier: string;
}
export interface GetRuleResponse {
  Identifier?: string;
  Description?: string;
  ResourceType?: ResourceType;
  RetentionPeriod?: RetentionPeriod;
  ResourceTags?: Array<ResourceTag>;
  Status?: RuleStatus;
  LockConfiguration?: LockConfiguration;
  LockState?: LockState;
  LockEndTime?: Date | string;
  RuleArn?: string;
  ExcludeResourceTags?: Array<ResourceTag>;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface ListRulesRequest {
  MaxResults?: number;
  NextToken?: string;
  ResourceType: ResourceType;
  ResourceTags?: Array<ResourceTag>;
  LockState?: LockState;
  ExcludeResourceTags?: Array<ResourceTag>;
}
export interface ListRulesResponse {
  Rules?: Array<RuleSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface LockConfiguration {
  UnlockDelay: UnlockDelay;
}
export interface LockRuleRequest {
  Identifier: string;
  LockConfiguration: LockConfiguration;
}
export interface LockRuleResponse {
  Identifier?: string;
  Description?: string;
  ResourceType?: ResourceType;
  RetentionPeriod?: RetentionPeriod;
  ResourceTags?: Array<ResourceTag>;
  Status?: RuleStatus;
  LockConfiguration?: LockConfiguration;
  LockState?: LockState;
  RuleArn?: string;
  ExcludeResourceTags?: Array<ResourceTag>;
}
export type LockState = "LOCKED" | "PENDING_UNLOCK" | "UNLOCKED";
export type MaxResults = number;

export type NextToken = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly Reason?: ResourceNotFoundExceptionReason;
}> {}
export type ResourceNotFoundExceptionReason = "RULE_NOT_FOUND";
export interface ResourceTag {
  ResourceTagKey: string;
  ResourceTagValue?: string;
}
export type ResourceTagKey = string;

export type ResourceTags = Array<ResourceTag>;
export type ResourceTagValue = string;

export type ResourceType = "EBS_SNAPSHOT" | "EC2_IMAGE";
export interface RetentionPeriod {
  RetentionPeriodValue: number;
  RetentionPeriodUnit: RetentionPeriodUnit;
}
export type RetentionPeriodUnit = "DAYS";
export type RetentionPeriodValue = number;

export type RuleArn = string;

export type RuleIdentifier = string;

export type RuleStatus = "PENDING" | "AVAILABLE";
export interface RuleSummary {
  Identifier?: string;
  Description?: string;
  RetentionPeriod?: RetentionPeriod;
  LockState?: LockState;
  RuleArn?: string;
}
export type RuleSummaryList = Array<RuleSummary>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly Reason?: ServiceQuotaExceededExceptionReason;
}> {}
export type ServiceQuotaExceededExceptionReason = "SERVICE_QUOTA_EXCEEDED";
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

export type TimeStamp = Date | string;

export interface UnlockDelay {
  UnlockDelayValue: number;
  UnlockDelayUnit: UnlockDelayUnit;
}
export type UnlockDelayUnit = "DAYS";
export type UnlockDelayValue = number;

export interface UnlockRuleRequest {
  Identifier: string;
}
export interface UnlockRuleResponse {
  Identifier?: string;
  Description?: string;
  ResourceType?: ResourceType;
  RetentionPeriod?: RetentionPeriod;
  ResourceTags?: Array<ResourceTag>;
  Status?: RuleStatus;
  LockConfiguration?: LockConfiguration;
  LockState?: LockState;
  LockEndTime?: Date | string;
  RuleArn?: string;
  ExcludeResourceTags?: Array<ResourceTag>;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateRuleRequest {
  Identifier: string;
  RetentionPeriod?: RetentionPeriod;
  Description?: string;
  ResourceType?: ResourceType;
  ResourceTags?: Array<ResourceTag>;
  ExcludeResourceTags?: Array<ResourceTag>;
}
export interface UpdateRuleResponse {
  Identifier?: string;
  RetentionPeriod?: RetentionPeriod;
  Description?: string;
  ResourceType?: ResourceType;
  ResourceTags?: Array<ResourceTag>;
  Status?: RuleStatus;
  LockState?: LockState;
  LockEndTime?: Date | string;
  RuleArn?: string;
  ExcludeResourceTags?: Array<ResourceTag>;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly Reason?: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason =
  | "INVALID_PAGE_TOKEN"
  | "INVALID_PARAMETER_VALUE";
export declare namespace CreateRule {
  export type Input = CreateRuleRequest;
  export type Output = CreateRuleResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRule {
  export type Input = DeleteRuleRequest;
  export type Output = DeleteRuleResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRule {
  export type Input = GetRuleRequest;
  export type Output = GetRuleResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRules {
  export type Input = ListRulesRequest;
  export type Output = ListRulesResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace LockRule {
  export type Input = LockRuleRequest;
  export type Output = LockRuleResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UnlockRule {
  export type Input = UnlockRuleRequest;
  export type Output = UnlockRuleResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRule {
  export type Input = UpdateRuleRequest;
  export type Output = UpdateRuleResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}
