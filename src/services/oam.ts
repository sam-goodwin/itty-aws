import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface oamservice {
  createLink(
    input: CreateLinkInput,
  ): Effect.Effect<
    CreateLinkOutput,
    | ConflictException
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createSink(
    input: CreateSinkInput,
  ): Effect.Effect<
    CreateSinkOutput,
    | ConflictException
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  deleteLink(
    input: DeleteLinkInput,
  ): Effect.Effect<
    DeleteLinkOutput,
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteSink(
    input: DeleteSinkInput,
  ): Effect.Effect<
    DeleteSinkOutput,
    | ConflictException
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getLink(
    input: GetLinkInput,
  ): Effect.Effect<
    GetLinkOutput,
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getSink(
    input: GetSinkInput,
  ): Effect.Effect<
    GetSinkOutput,
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getSinkPolicy(
    input: GetSinkPolicyInput,
  ): Effect.Effect<
    GetSinkPolicyOutput,
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listAttachedLinks(
    input: ListAttachedLinksInput,
  ): Effect.Effect<
    ListAttachedLinksOutput,
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listLinks(
    input: ListLinksInput,
  ): Effect.Effect<
    ListLinksOutput,
    | InternalServiceFault
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listSinks(
    input: ListSinksInput,
  ): Effect.Effect<
    ListSinksOutput,
    | InternalServiceFault
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  putSinkPolicy(
    input: PutSinkPolicyInput,
  ): Effect.Effect<
    PutSinkPolicyOutput,
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateLink(
    input: UpdateLinkInput,
  ): Effect.Effect<
    UpdateLinkOutput,
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Oam = oamservice;

export type Arn = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly amznErrorType?: string;
}> {}
export interface CreateLinkInput {
  LabelTemplate: string;
  ResourceTypes: Array<ResourceType>;
  SinkIdentifier: string;
  Tags?: Record<string, string>;
  LinkConfiguration?: LinkConfiguration;
}
export interface CreateLinkOutput {
  Arn?: string;
  Id?: string;
  Label?: string;
  LabelTemplate?: string;
  ResourceTypes?: Array<string>;
  SinkArn?: string;
  Tags?: Record<string, string>;
  LinkConfiguration?: LinkConfiguration;
}
export interface CreateSinkInput {
  Name: string;
  Tags?: Record<string, string>;
}
export interface CreateSinkOutput {
  Arn?: string;
  Id?: string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface DeleteLinkInput {
  Identifier: string;
}
export interface DeleteLinkOutput {}
export interface DeleteSinkInput {
  Identifier: string;
}
export interface DeleteSinkOutput {}
export interface GetLinkInput {
  Identifier: string;
  IncludeTags?: boolean;
}
export interface GetLinkOutput {
  Arn?: string;
  Id?: string;
  Label?: string;
  LabelTemplate?: string;
  ResourceTypes?: Array<string>;
  SinkArn?: string;
  Tags?: Record<string, string>;
  LinkConfiguration?: LinkConfiguration;
}
export interface GetSinkInput {
  Identifier: string;
  IncludeTags?: boolean;
}
export interface GetSinkOutput {
  Arn?: string;
  Id?: string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface GetSinkPolicyInput {
  SinkIdentifier: string;
}
export interface GetSinkPolicyOutput {
  SinkArn?: string;
  SinkId?: string;
  Policy?: string;
}
export type IncludeTags = boolean;

export declare class InternalServiceFault extends Data.TaggedError(
  "InternalServiceFault",
)<{
  readonly Message?: string;
  readonly amznErrorType?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
  readonly amznErrorType?: string;
}> {}
export type LabelTemplate = string;

export interface LinkConfiguration {
  LogGroupConfiguration?: LogGroupConfiguration;
  MetricConfiguration?: MetricConfiguration;
}
export interface ListAttachedLinksInput {
  MaxResults?: number;
  NextToken?: string;
  SinkIdentifier: string;
}
export interface ListAttachedLinksItem {
  Label?: string;
  LinkArn?: string;
  ResourceTypes?: Array<string>;
}
export type ListAttachedLinksItems = Array<ListAttachedLinksItem>;
export type ListAttachedLinksMaxResults = number;

export interface ListAttachedLinksOutput {
  Items: Array<ListAttachedLinksItem>;
  NextToken?: string;
}
export interface ListLinksInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLinksItem {
  Arn?: string;
  Id?: string;
  Label?: string;
  ResourceTypes?: Array<string>;
  SinkArn?: string;
}
export type ListLinksItems = Array<ListLinksItem>;
export type ListLinksMaxResults = number;

export interface ListLinksOutput {
  Items: Array<ListLinksItem>;
  NextToken?: string;
}
export interface ListSinksInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSinksItem {
  Arn?: string;
  Id?: string;
  Name?: string;
}
export type ListSinksItems = Array<ListSinksItem>;
export type ListSinksMaxResults = number;

export interface ListSinksOutput {
  Items: Array<ListSinksItem>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Record<string, string>;
}
export interface LogGroupConfiguration {
  Filter: string;
}
export type LogsFilter = string;

export interface MetricConfiguration {
  Filter: string;
}
export type MetricsFilter = string;

export declare class MissingRequiredParameterException extends Data.TaggedError(
  "MissingRequiredParameterException",
)<{
  readonly message?: string;
  readonly amznErrorType?: string;
}> {}
export type NextToken = string;

export interface PutSinkPolicyInput {
  SinkIdentifier: string;
  Policy: string;
}
export interface PutSinkPolicyOutput {
  SinkArn?: string;
  SinkId?: string;
  Policy?: string;
}
export type ResourceIdentifier = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly amznErrorType?: string;
}> {}
export type ResourceType =
  | "AWS_CLOUDWATCH_METRIC"
  | "AWS_LOGS_LOGGROUP"
  | "AWS_XRAY_TRACE"
  | "AWS_APPLICATIONINSIGHTS_APPLICATION"
  | "AWS_INTERNETMONITOR_MONITOR"
  | "AWS_APPLICATION_SIGNALS_SERVICE"
  | "AWS_APPLICATION_SIGNALS_SLO";
export type ResourceTypesInput = Array<ResourceType>;
export type ResourceTypesOutput = Array<string>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly amznErrorType?: string;
}> {}
export type SinkName = string;

export type SinkPolicy = string;

export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMapInput = Record<string, string>;
export type TagMapOutput = Record<string, string>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateLinkInput {
  Identifier: string;
  ResourceTypes: Array<ResourceType>;
  LinkConfiguration?: LinkConfiguration;
  IncludeTags?: boolean;
}
export interface UpdateLinkOutput {
  Arn?: string;
  Id?: string;
  Label?: string;
  LabelTemplate?: string;
  ResourceTypes?: Array<string>;
  SinkArn?: string;
  Tags?: Record<string, string>;
  LinkConfiguration?: LinkConfiguration;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace CreateLink {
  export type Input = CreateLinkInput;
  export type Output = CreateLinkOutput;
  export type Error =
    | ConflictException
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateSink {
  export type Input = CreateSinkInput;
  export type Output = CreateSinkOutput;
  export type Error =
    | ConflictException
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace DeleteLink {
  export type Input = DeleteLinkInput;
  export type Output = DeleteLinkOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSink {
  export type Input = DeleteSinkInput;
  export type Output = DeleteSinkOutput;
  export type Error =
    | ConflictException
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetLink {
  export type Input = GetLinkInput;
  export type Output = GetLinkOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSink {
  export type Input = GetSinkInput;
  export type Output = GetSinkOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSinkPolicy {
  export type Input = GetSinkPolicyInput;
  export type Output = GetSinkPolicyOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAttachedLinks {
  export type Input = ListAttachedLinksInput;
  export type Output = ListAttachedLinksOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListLinks {
  export type Input = ListLinksInput;
  export type Output = ListLinksOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListSinks {
  export type Input = ListSinksInput;
  export type Output = ListSinksOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutSinkPolicy {
  export type Input = PutSinkPolicyInput;
  export type Output = PutSinkPolicyOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLink {
  export type Input = UpdateLinkInput;
  export type Output = UpdateLinkOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}
