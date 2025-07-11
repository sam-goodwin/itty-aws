import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface oamservice {
  createLink(
    input: CreateLinkInput,
  ): Effect.Effect<
    {},
    ConflictException | InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ServiceQuotaExceededException | CommonAwsError
  >;
  createSink(
    input: CreateSinkInput,
  ): Effect.Effect<
    {},
    ConflictException | InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ServiceQuotaExceededException | CommonAwsError
  >;
  deleteLink(
    input: DeleteLinkInput,
  ): Effect.Effect<
    {},
    InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ResourceNotFoundException | CommonAwsError
  >;
  deleteSink(
    input: DeleteSinkInput,
  ): Effect.Effect<
    {},
    ConflictException | InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getLink(
    input: GetLinkInput,
  ): Effect.Effect<
    {},
    InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getSink(
    input: GetSinkInput,
  ): Effect.Effect<
    {},
    InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getSinkPolicy(
    input: GetSinkPolicyInput,
  ): Effect.Effect<
    {},
    InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listAttachedLinks(
    input: ListAttachedLinksInput,
  ): Effect.Effect<
    {},
    InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listLinks(
    input: ListLinksInput,
  ): Effect.Effect<
    {},
    InternalServiceFault | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listSinks(
    input: ListSinksInput,
  ): Effect.Effect<
    {},
    InternalServiceFault | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  putSinkPolicy(
    input: PutSinkPolicyInput,
  ): Effect.Effect<
    {},
    InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | TooManyTagsException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateLink(
    input: UpdateLinkInput,
  ): Effect.Effect<
    {},
    InternalServiceFault | InvalidParameterException | MissingRequiredParameterException | ResourceNotFoundException | CommonAwsError
  >;
}

export type Oam = oamservice;

export type Arn = string;

export interface ConflictException {
}
export interface CreateLinkInput {
}
export interface CreateLinkOutput {
}
export interface CreateSinkInput {
}
export interface CreateSinkOutput {
}
export interface DeleteLinkInput {
}
export interface DeleteLinkOutput {
}
export interface DeleteSinkInput {
}
export interface DeleteSinkOutput {
}
export interface GetLinkInput {
}
export interface GetLinkOutput {
}
export interface GetSinkInput {
}
export interface GetSinkOutput {
}
export interface GetSinkPolicyInput {
}
export interface GetSinkPolicyOutput {
}
export type IncludeTags = boolean;

export interface InternalServiceFault {
}
export interface InvalidParameterException {
}
export type LabelTemplate = string;

export interface LinkConfiguration {
}
export interface ListAttachedLinksInput {
}
export interface ListAttachedLinksItem {
}
export type ListAttachedLinksItems = Array<unknown>;
export type ListAttachedLinksMaxResults = number;

export interface ListAttachedLinksOutput {
}
export interface ListLinksInput {
}
export interface ListLinksItem {
}
export type ListLinksItems = Array<unknown>;
export type ListLinksMaxResults = number;

export interface ListLinksOutput {
}
export interface ListSinksInput {
}
export interface ListSinksItem {
}
export type ListSinksItems = Array<unknown>;
export type ListSinksMaxResults = number;

export interface ListSinksOutput {
}
export interface ListTagsForResourceInput {
}
export interface ListTagsForResourceOutput {
}
export interface LogGroupConfiguration {
}
export type LogsFilter = string;

export interface MetricConfiguration {
}
export type MetricsFilter = string;

export interface MissingRequiredParameterException {
}
export type NextToken = string;

export interface PutSinkPolicyInput {
}
export interface PutSinkPolicyOutput {
}
export type ResourceIdentifier = string;

export interface ResourceNotFoundException {
}
export type ResourceType = never;
export type ResourceTypesInput = Array<unknown>;
export type ResourceTypesOutput = Array<unknown>;
export interface ServiceQuotaExceededException {
}
export type SinkName = string;

export type SinkPolicy = string;

export type TagKey = string;

export type TagKeys = Array<unknown>;
export type TagMapInput = Record<string, unknown>;
export type TagMapOutput = Record<string, unknown>;
export interface TagResourceInput {
}
export interface TagResourceOutput {
}
export type TagValue = string;

export interface TooManyTagsException {
}
export interface UntagResourceInput {
}
export interface UntagResourceOutput {
}
export interface UpdateLinkInput {
}
export interface UpdateLinkOutput {
}
export interface ValidationException {
}
export declare namespace CreateLink {
  export type Input = CreateLinkInput;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSink {
  export type Input = DeleteSinkInput;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSink {
  export type Input = GetSinkInput;
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSinkPolicy {
  export type Input = GetSinkPolicyInput;
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAttachedLinks {
  export type Input = ListAttachedLinksInput;
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListLinks {
  export type Input = ListLinksInput;
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListSinks {
  export type Input = ListSinksInput;
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutSinkPolicy {
  export type Input = PutSinkPolicyInput;
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLink {
  export type Input = UpdateLinkInput;
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

