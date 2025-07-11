import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface MediaStore_20170901 {
  createContainer(
    input: CreateContainerInput,
  ): Effect.Effect<
    CreateContainerOutput,
    | ContainerInUseException
    | InternalServerError
    | LimitExceededException
    | CommonAwsError
  >;
  deleteContainer(
    input: DeleteContainerInput,
  ): Effect.Effect<
    DeleteContainerOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  deleteContainerPolicy(
    input: DeleteContainerPolicyInput,
  ): Effect.Effect<
    DeleteContainerPolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError
  >;
  deleteCorsPolicy(
    input: DeleteCorsPolicyInput,
  ): Effect.Effect<
    DeleteCorsPolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | CorsPolicyNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  deleteLifecyclePolicy(
    input: DeleteLifecyclePolicyInput,
  ): Effect.Effect<
    DeleteLifecyclePolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError
  >;
  deleteMetricPolicy(
    input: DeleteMetricPolicyInput,
  ): Effect.Effect<
    DeleteMetricPolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError
  >;
  describeContainer(
    input: DescribeContainerInput,
  ): Effect.Effect<
    DescribeContainerOutput,
    ContainerNotFoundException | InternalServerError | CommonAwsError
  >;
  getContainerPolicy(
    input: GetContainerPolicyInput,
  ): Effect.Effect<
    GetContainerPolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError
  >;
  getCorsPolicy(
    input: GetCorsPolicyInput,
  ): Effect.Effect<
    GetCorsPolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | CorsPolicyNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  getLifecyclePolicy(
    input: GetLifecyclePolicyInput,
  ): Effect.Effect<
    GetLifecyclePolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError
  >;
  getMetricPolicy(
    input: GetMetricPolicyInput,
  ): Effect.Effect<
    GetMetricPolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError
  >;
  listContainers(
    input: ListContainersInput,
  ): Effect.Effect<ListContainersOutput, InternalServerError | CommonAwsError>;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  putContainerPolicy(
    input: PutContainerPolicyInput,
  ): Effect.Effect<
    PutContainerPolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  putCorsPolicy(
    input: PutCorsPolicyInput,
  ): Effect.Effect<
    PutCorsPolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  putLifecyclePolicy(
    input: PutLifecyclePolicyInput,
  ): Effect.Effect<
    PutLifecyclePolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  putMetricPolicy(
    input: PutMetricPolicyInput,
  ): Effect.Effect<
    PutMetricPolicyOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  startAccessLogging(
    input: StartAccessLoggingInput,
  ): Effect.Effect<
    StartAccessLoggingOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  stopAccessLogging(
    input: StopAccessLoggingInput,
  ): Effect.Effect<
    StopAccessLoggingOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError
  >;
}

export type Mediastore = MediaStore_20170901;

export type AllowedHeaders = Array<string>;
export type AllowedMethods = Array<MethodName>;
export type AllowedOrigins = Array<string>;
export interface Container {
  Endpoint?: string;
  CreationTime?: Date | string;
  ARN?: string;
  Name?: string;
  Status?: ContainerStatus;
  AccessLoggingEnabled?: boolean;
}
export type ContainerAccessLoggingEnabled = boolean;

export type ContainerARN = string;

export declare class ContainerInUseException extends Data.TaggedError(
  "ContainerInUseException",
)<{
  readonly Message?: string;
}> {}
export type ContainerLevelMetrics = "ENABLED" | "DISABLED";
export type ContainerList = Array<Container>;
export type ContainerListLimit = number;

export type ContainerName = string;

export declare class ContainerNotFoundException extends Data.TaggedError(
  "ContainerNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ContainerPolicy = string;

export type ContainerStatus = "ACTIVE" | "CREATING" | "DELETING";
export type CorsPolicy = Array<CorsRule>;
export declare class CorsPolicyNotFoundException extends Data.TaggedError(
  "CorsPolicyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface CorsRule {
  AllowedOrigins: Array<string>;
  AllowedMethods?: Array<MethodName>;
  AllowedHeaders: Array<string>;
  MaxAgeSeconds?: number;
  ExposeHeaders?: Array<string>;
}
export interface CreateContainerInput {
  ContainerName: string;
  Tags?: Array<Tag>;
}
export interface CreateContainerOutput {
  Container: Container;
}
export interface DeleteContainerInput {
  ContainerName: string;
}
export interface DeleteContainerOutput {}
export interface DeleteContainerPolicyInput {
  ContainerName: string;
}
export interface DeleteContainerPolicyOutput {}
export interface DeleteCorsPolicyInput {
  ContainerName: string;
}
export interface DeleteCorsPolicyOutput {}
export interface DeleteLifecyclePolicyInput {
  ContainerName: string;
}
export interface DeleteLifecyclePolicyOutput {}
export interface DeleteMetricPolicyInput {
  ContainerName: string;
}
export interface DeleteMetricPolicyOutput {}
export interface DescribeContainerInput {
  ContainerName?: string;
}
export interface DescribeContainerOutput {
  Container?: Container;
}
export type Endpoint = string;

export type ErrorMessage = string;

export type ExposeHeaders = Array<string>;
export interface GetContainerPolicyInput {
  ContainerName: string;
}
export interface GetContainerPolicyOutput {
  Policy: string;
}
export interface GetCorsPolicyInput {
  ContainerName: string;
}
export interface GetCorsPolicyOutput {
  CorsPolicy: Array<CorsRule>;
}
export interface GetLifecyclePolicyInput {
  ContainerName: string;
}
export interface GetLifecyclePolicyOutput {
  LifecyclePolicy: string;
}
export interface GetMetricPolicyInput {
  ContainerName: string;
}
export interface GetMetricPolicyOutput {
  MetricPolicy: MetricPolicy;
}
export type Header = string;

export declare class InternalServerError extends Data.TaggedError(
  "InternalServerError",
)<{
  readonly Message?: string;
}> {}
export type LifecyclePolicy = string;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListContainersInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListContainersOutput {
  Containers: Array<Container>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  Resource: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Array<Tag>;
}
export type MaxAgeSeconds = number;

export type MethodName = "PUT" | "GET" | "DELETE" | "HEAD";
export interface MetricPolicy {
  ContainerLevelMetrics: ContainerLevelMetrics;
  MetricPolicyRules?: Array<MetricPolicyRule>;
}
export interface MetricPolicyRule {
  ObjectGroup: string;
  ObjectGroupName: string;
}
export type MetricPolicyRules = Array<MetricPolicyRule>;
export type ObjectGroup = string;

export type ObjectGroupName = string;

export type Origin = string;

export type PaginationToken = string;

export declare class PolicyNotFoundException extends Data.TaggedError(
  "PolicyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface PutContainerPolicyInput {
  ContainerName: string;
  Policy: string;
}
export interface PutContainerPolicyOutput {}
export interface PutCorsPolicyInput {
  ContainerName: string;
  CorsPolicy: Array<CorsRule>;
}
export interface PutCorsPolicyOutput {}
export interface PutLifecyclePolicyInput {
  ContainerName: string;
  LifecyclePolicy: string;
}
export interface PutLifecyclePolicyOutput {}
export interface PutMetricPolicyInput {
  ContainerName: string;
  MetricPolicy: MetricPolicy;
}
export interface PutMetricPolicyOutput {}
export interface StartAccessLoggingInput {
  ContainerName: string;
}
export interface StartAccessLoggingOutput {}
export interface StopAccessLoggingInput {
  ContainerName: string;
}
export interface StopAccessLoggingOutput {}
export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceInput {
  Resource: string;
  Tags: Array<Tag>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type TimeStamp = Date | string;

export interface UntagResourceInput {
  Resource: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export declare namespace CreateContainer {
  export type Input = CreateContainerInput;
  export type Output = CreateContainerOutput;
  export type Error =
    | ContainerInUseException
    | InternalServerError
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteContainer {
  export type Input = DeleteContainerInput;
  export type Output = DeleteContainerOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DeleteContainerPolicy {
  export type Input = DeleteContainerPolicyInput;
  export type Output = DeleteContainerPolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteCorsPolicy {
  export type Input = DeleteCorsPolicyInput;
  export type Output = DeleteCorsPolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | CorsPolicyNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DeleteLifecyclePolicy {
  export type Input = DeleteLifecyclePolicyInput;
  export type Output = DeleteLifecyclePolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteMetricPolicy {
  export type Input = DeleteMetricPolicyInput;
  export type Output = DeleteMetricPolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeContainer {
  export type Input = DescribeContainerInput;
  export type Output = DescribeContainerOutput;
  export type Error =
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetContainerPolicy {
  export type Input = GetContainerPolicyInput;
  export type Output = GetContainerPolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError;
}

export declare namespace GetCorsPolicy {
  export type Input = GetCorsPolicyInput;
  export type Output = GetCorsPolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | CorsPolicyNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetLifecyclePolicy {
  export type Input = GetLifecyclePolicyInput;
  export type Output = GetLifecyclePolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError;
}

export declare namespace GetMetricPolicy {
  export type Input = GetMetricPolicyInput;
  export type Output = GetMetricPolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | PolicyNotFoundException
    | CommonAwsError;
}

export declare namespace ListContainers {
  export type Input = ListContainersInput;
  export type Output = ListContainersOutput;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace PutContainerPolicy {
  export type Input = PutContainerPolicyInput;
  export type Output = PutContainerPolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace PutCorsPolicy {
  export type Input = PutCorsPolicyInput;
  export type Output = PutCorsPolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace PutLifecyclePolicy {
  export type Input = PutLifecyclePolicyInput;
  export type Output = PutLifecyclePolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace PutMetricPolicy {
  export type Input = PutMetricPolicyInput;
  export type Output = PutMetricPolicyOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace StartAccessLogging {
  export type Input = StartAccessLoggingInput;
  export type Output = StartAccessLoggingOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace StopAccessLogging {
  export type Input = StopAccessLoggingInput;
  export type Output = StopAccessLoggingOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | ContainerInUseException
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}
