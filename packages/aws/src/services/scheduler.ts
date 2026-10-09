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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Scheduler",
  serviceShapeName: "AWSChronosService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "scheduler" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-06-30");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://scheduler-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://scheduler-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://scheduler.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://scheduler.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class ExecutionRoleNotAssumable
  extends /*@__PURE__*/ S.TaggedError<ExecutionRoleNotAssumable>()(
    "ExecutionRoleNotAssumable",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationException",
      message: { includes: "must allow AWS EventBridge Scheduler to assume the role" },
    }),
  ) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Name = string;
export type ScheduleGroupName = string;
export type ScheduleExpression = string;
export type StartDate = Date;
export type EndDate = Date;
export type Description = string;
export type ScheduleExpressionTimezone = string;
export type ScheduleState = string;
export type KmsKeyArn = string;
export type TargetArn = string;
export type RoleArn = string;
export type ResourceArn = string;
export interface DeadLetterConfig {
  Arn?: string;
}
const DeadLetterConfig = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<DeadLetterConfig>;
export type MaximumEventAgeInSeconds = number;
export type MaximumRetryAttempts = number;
export interface RetryPolicy {
  MaximumEventAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
}
const RetryPolicy = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<RetryPolicy>;
export type TargetInput = string;
export type TaskDefinitionArn = string;
export type TaskCount = number;
export type LaunchType = string;
export type Subnet = string;
export type Subnets = string[];
const Subnets = /*@__PURE__*/ __L.at(__c0, 2);
export type SecurityGroup = string;
export type SecurityGroups = string[];
const SecurityGroups = Subnets as any as S.Schema<SecurityGroups>;
export type AssignPublicIp = string;
export interface AwsVpcConfiguration {
  Subnets: string[];
  SecurityGroups?: string[];
  AssignPublicIp?: string;
}
const AwsVpcConfiguration = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<AwsVpcConfiguration>;
export interface NetworkConfiguration {
  awsvpcConfiguration?: AwsVpcConfiguration;
}
const NetworkConfiguration = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<NetworkConfiguration>;
export type PlatformVersion = string;
export type Group = string;
export type CapacityProvider = string;
export type CapacityProviderStrategyItemWeight = number;
export type CapacityProviderStrategyItemBase = number;
export interface CapacityProviderStrategyItem {
  capacityProvider: string;
  weight?: number;
  base?: number;
}
const CapacityProviderStrategyItem = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<CapacityProviderStrategyItem>;
export type CapacityProviderStrategy = CapacityProviderStrategyItem[];
const CapacityProviderStrategy = /*@__PURE__*/ __L.at(__c0, 6);
export type EnableECSManagedTags = boolean;
export type EnableExecuteCommand = boolean;
export type PlacementConstraintType = string;
export type PlacementConstraintExpression = string;
export interface PlacementConstraint {
  type?: string;
  expression?: string;
}
const PlacementConstraint = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<PlacementConstraint>;
export type PlacementConstraints = PlacementConstraint[];
const PlacementConstraints = /*@__PURE__*/ __L.at(__c1, 0);
export type PlacementStrategyType = string;
export type PlacementStrategyField = string;
export interface PlacementStrategy {
  type?: string;
  field?: string;
}
const PlacementStrategy = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<PlacementStrategy>;
export type PlacementStrategies = PlacementStrategy[];
const PlacementStrategies = /*@__PURE__*/ __L.at(__c1, 2);
export type PropagateTags = string;
export type ReferenceId = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c1, 3);
export type Tags = { [key: string]: string | undefined }[];
const Tags = /*@__PURE__*/ __L.at(__c1, 4);
export interface EcsParameters {
  TaskDefinitionArn: string;
  TaskCount?: number;
  LaunchType?: string;
  NetworkConfiguration?: NetworkConfiguration;
  PlatformVersion?: string;
  Group?: string;
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: PlacementConstraint[];
  PlacementStrategy?: PlacementStrategy[];
  PropagateTags?: string;
  ReferenceId?: string;
  Tags?: { [key: string]: string | undefined }[];
}
const EcsParameters = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<EcsParameters>;
export type DetailType = string;
export type Source = string;
export interface EventBridgeParameters {
  DetailType: string;
  Source: string;
}
const EventBridgeParameters = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<EventBridgeParameters>;
export type TargetPartitionKey = string;
export interface KinesisParameters {
  PartitionKey: string;
}
const KinesisParameters = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<KinesisParameters>;
export type SageMakerPipelineParameterName = string;
export type SageMakerPipelineParameterValue = string;
export interface SageMakerPipelineParameter {
  Name: string;
  Value: string;
}
const SageMakerPipelineParameter = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<SageMakerPipelineParameter>;
export type SageMakerPipelineParameterList = SageMakerPipelineParameter[];
const SageMakerPipelineParameterList = /*@__PURE__*/ __L.at(__c2, 1);
export interface SageMakerPipelineParameters {
  PipelineParameterList?: SageMakerPipelineParameter[];
}
const SageMakerPipelineParameters = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<SageMakerPipelineParameters>;
export type MessageGroupId = string;
export interface SqsParameters {
  MessageGroupId?: string;
}
const SqsParameters = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<SqsParameters>;
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
const Target = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<Target>;
export type FlexibleTimeWindowMode = string;
export type MaximumWindowInMinutes = number;
export interface FlexibleTimeWindow {
  Mode: string;
  MaximumWindowInMinutes?: number;
}
const FlexibleTimeWindow = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<FlexibleTimeWindow>;
export type ClientToken = string;
export type ActionAfterCompletion = string;
export interface CreateScheduleInput {
  Name: string;
  GroupName?: string;
  ScheduleExpression: string;
  StartDate?: Date;
  EndDate?: Date;
  Description?: string;
  ScheduleExpressionTimezone?: string;
  State?: string;
  KmsKeyArn?: string;
  Target: Target;
  FlexibleTimeWindow: FlexibleTimeWindow;
  ClientToken?: string;
  ActionAfterCompletion?: string;
}
const CreateScheduleInput = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<CreateScheduleInput>;
export type ScheduleArn = string;
export interface CreateScheduleOutput {
  ScheduleArn: string;
}
const CreateScheduleOutput = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<CreateScheduleOutput>;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c3, 1);
export interface CreateScheduleGroupInput {
  Name: string;
  Tags?: Tag[];
  ClientToken?: string;
}
const CreateScheduleGroupInput = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateScheduleGroupInput>;
export type ScheduleGroupArn = string;
export interface CreateScheduleGroupOutput {
  ScheduleGroupArn: string;
}
const CreateScheduleGroupOutput = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateScheduleGroupOutput>;
export interface DeleteScheduleInput {
  Name: string;
  GroupName?: string;
  ClientToken?: string;
}
const DeleteScheduleInput = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<DeleteScheduleInput>;
export interface DeleteScheduleOutput {}
const DeleteScheduleOutput = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<DeleteScheduleOutput>;
export interface DeleteScheduleGroupInput {
  Name: string;
  ClientToken?: string;
}
const DeleteScheduleGroupInput = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DeleteScheduleGroupInput>;
export interface DeleteScheduleGroupOutput {}
const DeleteScheduleGroupOutput =
  DeleteScheduleOutput as any as S.Schema<DeleteScheduleGroupOutput>;
export interface GetScheduleInput {
  Name: string;
  GroupName?: string;
}
const GetScheduleInput = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<GetScheduleInput>;
export type CreationDate = Date;
export type LastModificationDate = Date;
export interface GetScheduleOutput {
  Arn?: string;
  GroupName?: string;
  Name?: string;
  ScheduleExpression?: string;
  StartDate?: Date;
  EndDate?: Date;
  Description?: string;
  ScheduleExpressionTimezone?: string;
  State?: string;
  CreationDate?: Date;
  LastModificationDate?: Date;
  KmsKeyArn?: string;
  Target?: Target;
  FlexibleTimeWindow?: FlexibleTimeWindow;
  ActionAfterCompletion?: string;
}
const GetScheduleOutput = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<GetScheduleOutput>;
export interface GetScheduleGroupInput {
  Name: string;
}
const GetScheduleGroupInput = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<GetScheduleGroupInput>;
export type ScheduleGroupState = string;
export interface GetScheduleGroupOutput {
  Arn?: string;
  Name?: string;
  State?: string;
  CreationDate?: Date;
  LastModificationDate?: Date;
}
const GetScheduleGroupOutput = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<GetScheduleGroupOutput>;
export type ScheduleGroupNamePrefix = string;
export type NextToken = string;
export type MaxResults = number;
export interface ListScheduleGroupsInput {
  NamePrefix?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListScheduleGroupsInput = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<ListScheduleGroupsInput>;
export interface ScheduleGroupSummary {
  Arn?: string;
  Name?: string;
  State?: string;
  CreationDate?: Date;
  LastModificationDate?: Date;
}
const ScheduleGroupSummary = GetScheduleGroupOutput as any as S.Schema<ScheduleGroupSummary>;
export type ScheduleGroupList = ScheduleGroupSummary[];
const ScheduleGroupList = /*@__PURE__*/ __L.at(__c4, 4);
export interface ListScheduleGroupsOutput {
  NextToken?: string;
  ScheduleGroups: ScheduleGroupSummary[];
}
const ListScheduleGroupsOutput = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ListScheduleGroupsOutput>;
export type NamePrefix = string;
export interface ListSchedulesInput {
  GroupName?: string;
  NamePrefix?: string;
  State?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListSchedulesInput = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<ListSchedulesInput>;
export interface TargetSummary {
  Arn: string;
}
const TargetSummary = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<TargetSummary>;
export interface ScheduleSummary {
  Arn?: string;
  Name?: string;
  GroupName?: string;
  State?: string;
  CreationDate?: Date;
  LastModificationDate?: Date;
  Target?: TargetSummary;
}
const ScheduleSummary = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ScheduleSummary>;
export type ScheduleList = ScheduleSummary[];
const ScheduleList = /*@__PURE__*/ __L.at(__c5, 1);
export interface ListSchedulesOutput {
  NextToken?: string;
  Schedules: ScheduleSummary[];
}
const ListSchedulesOutput = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<ListSchedulesOutput>;
export type TagResourceArn = string;
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  Tags?: Tag[];
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ListTagsForResourceOutput>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Tag[];
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = DeleteScheduleOutput as any as S.Schema<TagResourceOutput>;
export type TagKeyList = string[];
const TagKeyList = Subnets as any as S.Schema<TagKeyList>;
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = DeleteScheduleOutput as any as S.Schema<UntagResourceOutput>;
export interface UpdateScheduleInput {
  Name: string;
  GroupName?: string;
  ScheduleExpression: string;
  StartDate?: Date;
  EndDate?: Date;
  Description?: string;
  ScheduleExpressionTimezone?: string;
  State?: string;
  KmsKeyArn?: string;
  Target: Target;
  FlexibleTimeWindow: FlexibleTimeWindow;
  ClientToken?: string;
  ActionAfterCompletion?: string;
}
const UpdateScheduleInput = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<UpdateScheduleInput>;
export interface UpdateScheduleOutput {
  ScheduleArn: string;
}
const UpdateScheduleOutput = CreateScheduleOutput as any as S.Schema<UpdateScheduleOutput>;
export type CreateScheduleError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ExecutionRoleNotAssumable
  | CommonErrors;
/**
 * Creates the specified schedule.
 */
export const createSchedule: API.OperationMethod<
  CreateScheduleInput,
  CreateScheduleOutput,
  CreateScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScheduleInput,
  output: CreateScheduleOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ExecutionRoleNotAssumable,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSchedule",
}));

export type CreateScheduleGroupError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates the specified schedule group.
 */
export const createScheduleGroup: API.OperationMethod<
  CreateScheduleGroupInput,
  CreateScheduleGroupOutput,
  CreateScheduleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScheduleGroupInput,
  output: CreateScheduleGroupOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateScheduleGroup",
}));

export type DeleteScheduleError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified schedule.
 */
export const deleteSchedule: API.OperationMethod<
  DeleteScheduleInput,
  DeleteScheduleOutput,
  DeleteScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScheduleInput,
  output: DeleteScheduleOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSchedule",
}));

export type DeleteScheduleGroupError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group.
 * When you delete a group, it remains in a `DELETING` state until all of its associated schedules are deleted.
 * Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets
 * until the schedule group and its associated schedules are deleted.
 *
 * This operation is eventually consistent.
 */
export const deleteScheduleGroup: API.OperationMethod<
  DeleteScheduleGroupInput,
  DeleteScheduleGroupOutput,
  DeleteScheduleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScheduleGroupInput,
  output: DeleteScheduleGroupOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteScheduleGroup",
}));

export type GetScheduleError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified schedule.
 */
export const getSchedule: API.OperationMethod<
  GetScheduleInput,
  GetScheduleOutput,
  GetScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScheduleInput,
  output: GetScheduleOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSchedule",
}));

export type GetScheduleGroupError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified schedule group.
 */
export const getScheduleGroup: API.OperationMethod<
  GetScheduleGroupInput,
  GetScheduleGroupOutput,
  GetScheduleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScheduleGroupInput,
  output: GetScheduleGroupOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetScheduleGroup",
}));

export type ListScheduleGroupsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of your schedule groups.
 */
export const listScheduleGroups: API.PaginatedOperationMethod<
  ListScheduleGroupsInput,
  ListScheduleGroupsOutput,
  ListScheduleGroupsError,
  Credentials | HttpClient.HttpClient,
  ScheduleGroupSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListScheduleGroupsInput,
  output: ListScheduleGroupsOutput,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScheduleGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ScheduleGroups",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSchedulesError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of your EventBridge Scheduler schedules.
 */
export const listSchedules: API.PaginatedOperationMethod<
  ListSchedulesInput,
  ListSchedulesOutput,
  ListSchedulesError,
  Credentials | HttpClient.HttpClient,
  ScheduleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSchedulesInput,
  output: ListSchedulesOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSchedules",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Schedules",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags associated with the Scheduler resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceInput,
  output: TagResourceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes one or more tags from the specified EventBridge Scheduler schedule group.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceInput,
  output: UntagResourceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateScheduleError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ExecutionRoleNotAssumable
  | CommonErrors;
/**
 * Updates the specified schedule. When you call `UpdateSchedule`, EventBridge Scheduler uses all values, including empty values, specified in the request and
 * overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to
 * its system-default value after the update.
 *
 * Before calling this operation, we recommend that you call the `GetSchedule` API operation and make a note of all optional parameters
 * for your `UpdateSchedule` call.
 */
export const updateSchedule: API.OperationMethod<
  UpdateScheduleInput,
  UpdateScheduleOutput,
  UpdateScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateScheduleInput,
  output: UpdateScheduleOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ExecutionRoleNotAssumable,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSchedule",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "DeadLetterConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaximumEventAgeInSeconds: S.optional(S.Number),
          MaximumRetryAttempts: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RetryPolicy" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Subnets: Subnets,
          SecurityGroups: S.optional(SecurityGroups),
          AssignPublicIp: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsVpcConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ awsvpcConfiguration: S.optional(AwsVpcConfiguration) }),
      ).annotate({ identifier: "NetworkConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          capacityProvider: S.String,
          weight: S.optional(S.Number),
          base: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CapacityProviderStrategyItem",
      });
    case 6:
      return S.Array(CapacityProviderStrategyItem);
    case 7:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), expression: S.optional(S.String) }),
      ).annotate({ identifier: "PlacementConstraint" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PlacementConstraint);
    case 1:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), field: S.optional(S.String) }),
      ).annotate({ identifier: "PlacementStrategy" });
    case 2:
      return S.Array(PlacementStrategy);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.Array(TagMap);
    case 5:
      return S.suspend(() =>
        S.Struct({
          TaskDefinitionArn: S.String,
          TaskCount: S.optional(S.Number),
          LaunchType: S.optional(S.String),
          NetworkConfiguration: S.optional(NetworkConfiguration),
          PlatformVersion: S.optional(S.String),
          Group: S.optional(S.String),
          CapacityProviderStrategy: S.optional(CapacityProviderStrategy),
          EnableECSManagedTags: S.optional(S.Boolean),
          EnableExecuteCommand: S.optional(S.Boolean),
          PlacementConstraints: S.optional(PlacementConstraints),
          PlacementStrategy: S.optional(PlacementStrategies),
          PropagateTags: S.optional(S.String),
          ReferenceId: S.optional(S.String),
          Tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "EcsParameters" });
    case 6:
      return S.suspend(() => S.Struct({ DetailType: S.String, Source: S.String })).annotate({
        identifier: "EventBridgeParameters",
      });
    case 7:
      return S.suspend(() => S.Struct({ PartitionKey: S.String })).annotate({
        identifier: "KinesisParameters",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "SageMakerPipelineParameter",
      });
    case 1:
      return S.Array(SageMakerPipelineParameter);
    case 2:
      return S.suspend(() =>
        S.Struct({ PipelineParameterList: S.optional(SageMakerPipelineParameterList) }),
      ).annotate({
        identifier: "SageMakerPipelineParameters",
      });
    case 3:
      return S.suspend(() => S.Struct({ MessageGroupId: S.optional(S.String) })).annotate({
        identifier: "SqsParameters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          RoleArn: S.String,
          DeadLetterConfig: S.optional(DeadLetterConfig),
          RetryPolicy: S.optional(RetryPolicy),
          Input: S.optional(S.String),
          EcsParameters: S.optional(EcsParameters),
          EventBridgeParameters: S.optional(EventBridgeParameters),
          KinesisParameters: S.optional(KinesisParameters),
          SageMakerPipelineParameters: S.optional(SageMakerPipelineParameters),
          SqsParameters: S.optional(SqsParameters),
        }),
      ).annotate({ identifier: "Target" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Mode: S.String, MaximumWindowInMinutes: S.optional(S.Number) }),
      ).annotate({ identifier: "FlexibleTimeWindow" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          GroupName: S.optional(S.String),
          ScheduleExpression: S.String,
          StartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          ScheduleExpressionTimezone: S.optional(S.String),
          State: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          Target: Target,
          FlexibleTimeWindow: FlexibleTimeWindow,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ActionAfterCompletion: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/schedules/{Name}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateScheduleInput" });
    case 7:
      return S.suspend(() => S.Struct({ ScheduleArn: S.String })).annotate({
        identifier: "CreateScheduleOutput",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(Tag);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          Tags: S.optional(TagList),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/schedule-groups/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateScheduleGroupInput" });
    case 3:
      return S.suspend(() => S.Struct({ ScheduleGroupArn: S.String })).annotate({
        identifier: "CreateScheduleGroupOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          GroupName: S.optional(S.String).pipe(T.HttpQuery("groupName")),
          ClientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/schedules/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteScheduleInput" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteScheduleOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          ClientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/schedule-groups/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteScheduleGroupInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          GroupName: S.optional(S.String).pipe(T.HttpQuery("groupName")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/schedules/{Name}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetScheduleInput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          GroupName: S.optional(S.String),
          Name: S.optional(S.String),
          ScheduleExpression: S.optional(S.String),
          StartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          ScheduleExpressionTimezone: S.optional(S.String),
          State: S.optional(S.String),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModificationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          KmsKeyArn: S.optional(S.String),
          Target: S.optional(Target),
          FlexibleTimeWindow: S.optional(FlexibleTimeWindow),
          ActionAfterCompletion: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetScheduleOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.String.pipe(T.HttpLabel("Name")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/schedule-groups/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetScheduleGroupInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          State: S.optional(S.String),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModificationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetScheduleGroupOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String).pipe(T.HttpQuery("NamePrefix")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/schedule-groups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListScheduleGroupsInput" });
    case 4:
      return S.Array(ScheduleGroupSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), ScheduleGroups: ScheduleGroupList }),
      ).annotate({ identifier: "ListScheduleGroupsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String).pipe(T.HttpQuery("ScheduleGroup")),
          NamePrefix: S.optional(S.String).pipe(T.HttpQuery("NamePrefix")),
          State: S.optional(S.String).pipe(T.HttpQuery("State")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/schedules" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSchedulesInput" });
    case 7:
      return S.suspend(() => S.Struct({ Arn: S.String })).annotate({
        identifier: "TargetSummary",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          GroupName: S.optional(S.String),
          State: S.optional(S.String),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModificationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Target: S.optional(TargetSummary),
        }),
      ).annotate({ identifier: "ScheduleSummary" });
    case 1:
      return S.Array(ScheduleSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Schedules: ScheduleList }),
      ).annotate({ identifier: "ListSchedulesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 4:
      return S.suspend(() => S.Struct({ Tags: S.optional(TagList) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: TagList }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: TagKeyList.pipe(T.HttpQuery("TagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          GroupName: S.optional(S.String),
          ScheduleExpression: S.String,
          StartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          ScheduleExpressionTimezone: S.optional(S.String),
          State: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          Target: Target,
          FlexibleTimeWindow: FlexibleTimeWindow,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ActionAfterCompletion: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/schedules/{Name}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateScheduleInput" });
  }
}
