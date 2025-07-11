import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Scheduler extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type ActionAfterCompletion = string;

export type AssignPublicIp = string;

export interface AwsVpcConfiguration {
  Subnets: Array<string>;
  SecurityGroups?: Array<string>;
  AssignPublicIp?: string;
}
export type CapacityProvider = string;

export type CapacityProviderStrategy = Array<CapacityProviderStrategyItem>;
export interface CapacityProviderStrategyItem {
  capacityProvider: string;
  weight?: number;
  base?: number;
}
export type CapacityProviderStrategyItemBase = number;

export type CapacityProviderStrategyItemWeight = number;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export interface CreateScheduleGroupInput {
  Name: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateScheduleGroupOutput {
  ScheduleGroupArn: string;
}
export interface CreateScheduleInput {
  Name: string;
  GroupName?: string;
  ScheduleExpression: string;
  StartDate?: Date | string;
  EndDate?: Date | string;
  Description?: string;
  ScheduleExpressionTimezone?: string;
  State?: string;
  KmsKeyArn?: string;
  Target: Target;
  FlexibleTimeWindow: FlexibleTimeWindow;
  ClientToken?: string;
  ActionAfterCompletion?: string;
}
export interface CreateScheduleOutput {
  ScheduleArn: string;
}
export type CreationDate = Date | string;

export interface DeadLetterConfig {
  Arn?: string;
}
export interface DeleteScheduleGroupInput {
  Name: string;
  ClientToken?: string;
}
export interface DeleteScheduleGroupOutput {}
export interface DeleteScheduleInput {
  Name: string;
  GroupName?: string;
  ClientToken?: string;
}
export interface DeleteScheduleOutput {}
export type Description = string;

export type DetailType = string;

export interface EcsParameters {
  TaskDefinitionArn: string;
  TaskCount?: number;
  LaunchType?: string;
  NetworkConfiguration?: NetworkConfiguration;
  PlatformVersion?: string;
  Group?: string;
  CapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: Array<PlacementConstraint>;
  PlacementStrategy?: Array<PlacementStrategy>;
  PropagateTags?: string;
  ReferenceId?: string;
  Tags?: Array<Record<string, string>>;
}
export type EnableECSManagedTags = boolean;

export type EnableExecuteCommand = boolean;

export type EndDate = Date | string;

export interface EventBridgeParameters {
  DetailType: string;
  Source: string;
}
export interface FlexibleTimeWindow {
  Mode: string;
  MaximumWindowInMinutes?: number;
}
export type FlexibleTimeWindowMode = string;

export interface GetScheduleGroupInput {
  Name: string;
}
export interface GetScheduleGroupOutput {
  Arn?: string;
  Name?: string;
  State?: string;
  CreationDate?: Date | string;
  LastModificationDate?: Date | string;
}
export interface GetScheduleInput {
  Name: string;
  GroupName?: string;
}
export interface GetScheduleOutput {
  Arn?: string;
  GroupName?: string;
  Name?: string;
  ScheduleExpression?: string;
  StartDate?: Date | string;
  EndDate?: Date | string;
  Description?: string;
  ScheduleExpressionTimezone?: string;
  State?: string;
  CreationDate?: Date | string;
  LastModificationDate?: Date | string;
  KmsKeyArn?: string;
  Target?: Target;
  FlexibleTimeWindow?: FlexibleTimeWindow;
  ActionAfterCompletion?: string;
}
export type Group = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface KinesisParameters {
  PartitionKey: string;
}
export type KmsKeyArn = string;

export type LastModificationDate = Date | string;

export type LaunchType = string;

export interface ListScheduleGroupsInput {
  NamePrefix?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListScheduleGroupsOutput {
  NextToken?: string;
  ScheduleGroups: Array<ScheduleGroupSummary>;
}
export interface ListSchedulesInput {
  GroupName?: string;
  NamePrefix?: string;
  State?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSchedulesOutput {
  NextToken?: string;
  Schedules: Array<ScheduleSummary>;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Array<Tag>;
}
export type MaximumEventAgeInSeconds = number;

export type MaximumRetryAttempts = number;

export type MaximumWindowInMinutes = number;

export type MaxResults = number;

export type MessageGroupId = string;

export type Name = string;

export type NamePrefix = string;

export interface NetworkConfiguration {
  awsvpcConfiguration?: AwsVpcConfiguration;
}
export type NextToken = string;

export interface PlacementConstraint {
  type?: string;
  expression?: string;
}
export type PlacementConstraintExpression = string;

export type PlacementConstraints = Array<PlacementConstraint>;
export type PlacementConstraintType = string;

export type PlacementStrategies = Array<PlacementStrategy>;
export interface PlacementStrategy {
  type?: string;
  field?: string;
}
export type PlacementStrategyField = string;

export type PlacementStrategyType = string;

export type PlatformVersion = string;

export type PropagateTags = string;

export type ReferenceId = string;

export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
}> {}
export interface RetryPolicy {
  MaximumEventAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
}
export type RoleArn = string;

export interface SageMakerPipelineParameter {
  Name: string;
  Value: string;
}
export type SageMakerPipelineParameterList = Array<SageMakerPipelineParameter>;
export type SageMakerPipelineParameterName = string;

export interface SageMakerPipelineParameters {
  PipelineParameterList?: Array<SageMakerPipelineParameter>;
}
export type SageMakerPipelineParameterValue = string;

export type ScheduleArn = string;

export type ScheduleExpression = string;

export type ScheduleExpressionTimezone = string;

export type ScheduleGroupArn = string;

export type ScheduleGroupList = Array<ScheduleGroupSummary>;
export type ScheduleGroupName = string;

export type ScheduleGroupNamePrefix = string;

export type ScheduleGroupState = string;

export interface ScheduleGroupSummary {
  Arn?: string;
  Name?: string;
  State?: string;
  CreationDate?: Date | string;
  LastModificationDate?: Date | string;
}
export type ScheduleList = Array<ScheduleSummary>;
export type ScheduleState = string;

export interface ScheduleSummary {
  Arn?: string;
  Name?: string;
  GroupName?: string;
  State?: string;
  CreationDate?: Date | string;
  LastModificationDate?: Date | string;
  Target?: TargetSummary;
}
export type SecurityGroup = string;

export type SecurityGroups = Array<string>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
}> {}
export type Source = string;

export interface SqsParameters {
  MessageGroupId?: string;
}
export type StartDate = Date | string;

export type Subnet = string;

export type Subnets = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagMap = Record<string, string>;
export type TagResourceArn = string;

export interface TagResourceInput {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceOutput {}
export type Tags = Array<Record<string, string>>;
export type TagValue = string;

export interface Target {
  Arn: string;
  RoleArn: string;
  DeadLetterConfig?: DeadLetterConfig;
  RetryPolicy?: RetryPolicy;
  Input?: string;
  EcsParameters?: EcsParameters;
  EventBridgeParameters?: EventBridgeParameters;
  KinesisParameters?: KinesisParameters;
  SageMakerPipelineParameters?: SageMakerPipelineParameters;
  SqsParameters?: SqsParameters;
}
export type TargetArn = string;

export type TargetInput = string;

export type TargetPartitionKey = string;

export interface TargetSummary {
  Arn: string;
}
export type TaskCount = number;

export type TaskDefinitionArn = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateScheduleInput {
  Name: string;
  GroupName?: string;
  ScheduleExpression: string;
  StartDate?: Date | string;
  EndDate?: Date | string;
  Description?: string;
  ScheduleExpressionTimezone?: string;
  State?: string;
  KmsKeyArn?: string;
  Target: Target;
  FlexibleTimeWindow: FlexibleTimeWindow;
  ClientToken?: string;
  ActionAfterCompletion?: string;
}
export interface UpdateScheduleOutput {
  ScheduleArn: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
