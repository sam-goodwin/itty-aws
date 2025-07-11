import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface dlm_20180112 {
  createLifecyclePolicy(
    input: CreateLifecyclePolicyRequest,
  ): Effect.Effect<
    CreateLifecyclePolicyResponse,
    InternalServerException | InvalidRequestException | LimitExceededException | CommonAwsError
  >;
  deleteLifecyclePolicy(
    input: DeleteLifecyclePolicyRequest,
  ): Effect.Effect<
    DeleteLifecyclePolicyResponse,
    InternalServerException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getLifecyclePolicies(
    input: GetLifecyclePoliciesRequest,
  ): Effect.Effect<
    GetLifecyclePoliciesResponse,
    InternalServerException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getLifecyclePolicy(
    input: GetLifecyclePolicyRequest,
  ): Effect.Effect<
    GetLifecyclePolicyResponse,
    InternalServerException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  updateLifecyclePolicy(
    input: UpdateLifecyclePolicyRequest,
  ): Effect.Effect<
    UpdateLifecyclePolicyResponse,
    InternalServerException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
}

export type Dlm = dlm_20180112;

export interface Action {
  Name: string;
  CrossRegionCopy: Array<CrossRegionCopyAction>;
}
export type ActionList = Array<Action>;
export type ActionName = string;

export interface ArchiveRetainRule {
  RetentionArchiveTier: RetentionArchiveTier;
}
export interface ArchiveRule {
  RetainRule: ArchiveRetainRule;
}
export type AvailabilityZone = string;

export type AvailabilityZoneList = Array<string>;
export type AwsAccountId = string;

export type CmkArn = string;

export type CopyTags = boolean;

export type CopyTagsNullable = boolean;

export type Count = number;

export type CreateInterval = number;

export interface CreateLifecyclePolicyRequest {
  ExecutionRoleArn: string;
  Description: string;
  State: SettablePolicyStateValues;
  PolicyDetails?: PolicyDetails;
  Tags?: Record<string, string>;
  DefaultPolicy?: DefaultPolicyTypeValues;
  CreateInterval?: number;
  RetainInterval?: number;
  CopyTags?: boolean;
  ExtendDeletion?: boolean;
  CrossRegionCopyTargets?: Array<CrossRegionCopyTarget>;
  Exclusions?: Exclusions;
}
export interface CreateLifecyclePolicyResponse {
  PolicyId?: string;
}
export interface CreateRule {
  Location?: LocationValues;
  Interval?: number;
  IntervalUnit?: IntervalUnitValues;
  Times?: Array<string>;
  CronExpression?: string;
  Scripts?: Array<Script>;
}
export type CronExpression = string;

export interface CrossRegionCopyAction {
  Target: string;
  EncryptionConfiguration: EncryptionConfiguration;
  RetainRule?: CrossRegionCopyRetainRule;
}
export type CrossRegionCopyActionList = Array<CrossRegionCopyAction>;
export interface CrossRegionCopyDeprecateRule {
  Interval?: number;
  IntervalUnit?: RetentionIntervalUnitValues;
}
export interface CrossRegionCopyRetainRule {
  Interval?: number;
  IntervalUnit?: RetentionIntervalUnitValues;
}
export interface CrossRegionCopyRule {
  TargetRegion?: string;
  Target?: string;
  Encrypted: boolean;
  CmkArn?: string;
  CopyTags?: boolean;
  RetainRule?: CrossRegionCopyRetainRule;
  DeprecateRule?: CrossRegionCopyDeprecateRule;
}
export type CrossRegionCopyRules = Array<CrossRegionCopyRule>;
export interface CrossRegionCopyTarget {
  TargetRegion?: string;
}
export type CrossRegionCopyTargetList = Array<CrossRegionCopyTarget>;
export type DefaultPoliciesTypeValues = "VOLUME" | "INSTANCE" | "ALL";
export type DefaultPolicy = boolean;

export type DefaultPolicyTypeValues = "VOLUME" | "INSTANCE";
export interface DeleteLifecyclePolicyRequest {
  PolicyId: string;
}
export interface DeleteLifecyclePolicyResponse {
}
export interface DeprecateRule {
  Count?: number;
  Interval?: number;
  IntervalUnit?: RetentionIntervalUnitValues;
}
export type DescriptionRegex = string;

export type Encrypted = boolean;

export interface EncryptionConfiguration {
  Encrypted: boolean;
  CmkArn?: string;
}
export type ErrorCode = string;

export type ErrorMessage = string;

export interface EventParameters {
  EventType: EventTypeValues;
  SnapshotOwner: Array<string>;
  DescriptionRegex: string;
}
export interface EventSource {
  Type: EventSourceValues;
  Parameters?: EventParameters;
}
export type EventSourceValues = "MANAGED_CWE";
export type EventTypeValues = "SHARE_SNAPSHOT";
export type ExcludeBootVolume = boolean;

export type ExcludeBootVolumes = boolean;

export type ExcludeDataVolumeTagList = Array<Tag>;
export type ExcludeTagsList = Array<Tag>;
export type ExcludeVolumeTypesList = Array<string>;
export interface Exclusions {
  ExcludeBootVolumes?: boolean;
  ExcludeVolumeTypes?: Array<string>;
  ExcludeTags?: Array<Tag>;
}
export type ExecuteOperationOnScriptFailure = boolean;

export type ExecutionHandler = string;

export type ExecutionHandlerServiceValues = "AWS_SYSTEMS_MANAGER";
export type ExecutionRoleArn = string;

export type ExtendDeletion = boolean;

export interface FastRestoreRule {
  Count?: number;
  Interval?: number;
  IntervalUnit?: RetentionIntervalUnitValues;
  AvailabilityZones: Array<string>;
}
export interface GetLifecyclePoliciesRequest {
  PolicyIds?: Array<string>;
  State?: GettablePolicyStateValues;
  ResourceTypes?: Array<ResourceTypeValues>;
  TargetTags?: Array<string>;
  TagsToAdd?: Array<string>;
  DefaultPolicyType?: DefaultPoliciesTypeValues;
}
export interface GetLifecyclePoliciesResponse {
  Policies?: Array<LifecyclePolicySummary>;
}
export interface GetLifecyclePolicyRequest {
  PolicyId: string;
}
export interface GetLifecyclePolicyResponse {
  Policy?: LifecyclePolicy;
}
export type GettablePolicyStateValues = "ENABLED" | "DISABLED" | "ERROR";
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type Interval = number;

export type IntervalUnitValues = "HOURS";
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly RequiredParameters?: Array<string>;
  readonly MutuallyExclusiveParameters?: Array<string>;
}> {}
export interface LifecyclePolicy {
  PolicyId?: string;
  Description?: string;
  State?: GettablePolicyStateValues;
  StatusMessage?: string;
  ExecutionRoleArn?: string;
  DateCreated?: Date | string;
  DateModified?: Date | string;
  PolicyDetails?: PolicyDetails;
  Tags?: Record<string, string>;
  PolicyArn?: string;
  DefaultPolicy?: boolean;
}
export interface LifecyclePolicySummary {
  PolicyId?: string;
  Description?: string;
  State?: GettablePolicyStateValues;
  Tags?: Record<string, string>;
  PolicyType?: PolicyTypeValues;
  DefaultPolicy?: boolean;
}
export type LifecyclePolicySummaryList = Array<LifecyclePolicySummary>;
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly ResourceType?: string;
}> {}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type LocationValues = "CLOUD" | "OUTPOST_LOCAL" | "LOCAL_ZONE";
export type NoReboot = boolean;

export type Parameter = string;

export type ParameterList = Array<string>;
export interface Parameters {
  ExcludeBootVolume?: boolean;
  NoReboot?: boolean;
  ExcludeDataVolumeTags?: Array<Tag>;
}
export type PolicyArn = string;

export type PolicyDescription = string;

export interface PolicyDetails {
  PolicyType?: PolicyTypeValues;
  ResourceTypes?: Array<ResourceTypeValues>;
  ResourceLocations?: Array<ResourceLocationValues>;
  TargetTags?: Array<Tag>;
  Schedules?: Array<Schedule>;
  Parameters?: Parameters;
  EventSource?: EventSource;
  Actions?: Array<Action>;
  PolicyLanguage?: PolicyLanguageValues;
  ResourceType?: ResourceTypeValues;
  CreateInterval?: number;
  RetainInterval?: number;
  CopyTags?: boolean;
  CrossRegionCopyTargets?: Array<CrossRegionCopyTarget>;
  ExtendDeletion?: boolean;
  Exclusions?: Exclusions;
}
export type PolicyId = string;

export type PolicyIdList = Array<string>;
export type PolicyLanguageValues = "SIMPLIFIED" | "STANDARD";
export type PolicyTypeValues = "EBS_SNAPSHOT_MANAGEMENT" | "IMAGE_MANAGEMENT" | "EVENT_BASED_POLICY";
export type ResourceLocationList = Array<ResourceLocationValues>;
export type ResourceLocationValues = "CLOUD" | "OUTPOST" | "LOCAL_ZONE";
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly ResourceType?: string;
  readonly ResourceIds?: Array<string>;
}> {}
export type ResourceTypeValues = "VOLUME" | "INSTANCE";
export type ResourceTypeValuesList = Array<ResourceTypeValues>;
export type RetainInterval = number;

export interface RetainRule {
  Count?: number;
  Interval?: number;
  IntervalUnit?: RetentionIntervalUnitValues;
}
export interface RetentionArchiveTier {
  Count?: number;
  Interval?: number;
  IntervalUnit?: RetentionIntervalUnitValues;
}
export type RetentionIntervalUnitValues = "DAYS" | "WEEKS" | "MONTHS" | "YEARS";
export interface Schedule {
  Name?: string;
  CopyTags?: boolean;
  TagsToAdd?: Array<Tag>;
  VariableTags?: Array<Tag>;
  CreateRule?: CreateRule;
  RetainRule?: RetainRule;
  FastRestoreRule?: FastRestoreRule;
  CrossRegionCopyRules?: Array<CrossRegionCopyRule>;
  ShareRules?: Array<ShareRule>;
  DeprecateRule?: DeprecateRule;
  ArchiveRule?: ArchiveRule;
}
export type ScheduleList = Array<Schedule>;
export type ScheduleName = string;

export interface Script {
  Stages?: Array<StageValues>;
  ExecutionHandlerService?: ExecutionHandlerServiceValues;
  ExecutionHandler: string;
  ExecuteOperationOnScriptFailure?: boolean;
  ExecutionTimeout?: number;
  MaximumRetryCount?: number;
}
export type ScriptExecutionTimeout = number;

export type ScriptMaximumRetryCount = number;

export type ScriptsList = Array<Script>;
export type SettablePolicyStateValues = "ENABLED" | "DISABLED";
export interface ShareRule {
  TargetAccounts: Array<string>;
  UnshareInterval?: number;
  UnshareIntervalUnit?: RetentionIntervalUnitValues;
}
export type ShareRules = Array<ShareRule>;
export type ShareTargetAccountList = Array<string>;
export type SnapshotOwnerList = Array<string>;
export type StagesList = Array<StageValues>;
export type StageValues = "PRE" | "POST";
export type StandardTierRetainRuleCount = number;

export type StandardTierRetainRuleInterval = number;

export type StatusMessage = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagFilter = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagsToAddFilterList = Array<string>;
export type TagsToAddList = Array<Tag>;
export type TagValue = string;

export type Target = string;

export type TargetRegion = string;

export type TargetTagList = Array<Tag>;
export type TargetTagsFilterList = Array<string>;
export type Time = string;

export type TimesList = Array<string>;
export type Timestamp = Date | string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateLifecyclePolicyRequest {
  PolicyId: string;
  ExecutionRoleArn?: string;
  State?: SettablePolicyStateValues;
  Description?: string;
  PolicyDetails?: PolicyDetails;
  CreateInterval?: number;
  RetainInterval?: number;
  CopyTags?: boolean;
  ExtendDeletion?: boolean;
  CrossRegionCopyTargets?: Array<CrossRegionCopyTarget>;
  Exclusions?: Exclusions;
}
export interface UpdateLifecyclePolicyResponse {
}
export type VariableTagsList = Array<Tag>;
export type VolumeTypeValues = string;

export declare namespace CreateLifecyclePolicy {
  export type Input = CreateLifecyclePolicyRequest;
  export type Output = CreateLifecyclePolicyResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteLifecyclePolicy {
  export type Input = DeleteLifecyclePolicyRequest;
  export type Output = DeleteLifecyclePolicyResponse;
  export type Error =
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetLifecyclePolicies {
  export type Input = GetLifecyclePoliciesRequest;
  export type Output = GetLifecyclePoliciesResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetLifecyclePolicy {
  export type Input = GetLifecyclePolicyRequest;
  export type Output = GetLifecyclePolicyResponse;
  export type Error =
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateLifecyclePolicy {
  export type Input = UpdateLifecyclePolicyRequest;
  export type Output = UpdateLifecyclePolicyResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

