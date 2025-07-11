import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface CloudApiService {
  cancelResourceRequest(
    input: CancelResourceRequestInput,
  ): Effect.Effect<
    CancelResourceRequestOutput,
    | ConcurrentModificationException
    | RequestTokenNotFoundException
    | CommonAwsError
  >;
  createResource(
    input: CreateResourceInput,
  ): Effect.Effect<
    CreateResourceOutput,
    | AlreadyExistsException
    | ClientTokenConflictException
    | ConcurrentOperationException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError
  >;
  deleteResource(
    input: DeleteResourceInput,
  ): Effect.Effect<
    DeleteResourceOutput,
    | AlreadyExistsException
    | ClientTokenConflictException
    | ConcurrentOperationException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError
  >;
  getResource(
    input: GetResourceInput,
  ): Effect.Effect<
    GetResourceOutput,
    | AlreadyExistsException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError
  >;
  getResourceRequestStatus(
    input: GetResourceRequestStatusInput,
  ): Effect.Effect<
    GetResourceRequestStatusOutput,
    RequestTokenNotFoundException | CommonAwsError
  >;
  listResourceRequests(
    input: ListResourceRequestsInput,
  ): Effect.Effect<ListResourceRequestsOutput, CommonAwsError>;
  listResources(
    input: ListResourcesInput,
  ): Effect.Effect<
    ListResourcesOutput,
    | AlreadyExistsException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError
  >;
  updateResource(
    input: UpdateResourceInput,
  ): Effect.Effect<
    UpdateResourceOutput,
    | AlreadyExistsException
    | ClientTokenConflictException
    | ConcurrentOperationException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError
  >;
}

export type Cloudcontrol = CloudApiService;

export declare class AlreadyExistsException extends EffectData.TaggedError(
  "AlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export interface CancelResourceRequestInput {
  RequestToken: string;
}
export interface CancelResourceRequestOutput {
  ProgressEvent?: ProgressEvent;
}
export type ClientToken = string;

export declare class ClientTokenConflictException extends EffectData.TaggedError(
  "ClientTokenConflictException",
)<{
  readonly Message?: string;
}> {}
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConcurrentOperationException extends EffectData.TaggedError(
  "ConcurrentOperationException",
)<{
  readonly Message?: string;
}> {}
export interface CreateResourceInput {
  TypeName: string;
  TypeVersionId?: string;
  RoleArn?: string;
  ClientToken?: string;
  DesiredState: string;
}
export interface CreateResourceOutput {
  ProgressEvent?: ProgressEvent;
}
export interface DeleteResourceInput {
  TypeName: string;
  TypeVersionId?: string;
  RoleArn?: string;
  ClientToken?: string;
  Identifier: string;
}
export interface DeleteResourceOutput {
  ProgressEvent?: ProgressEvent;
}
export type ErrorMessage = string;

export declare class GeneralServiceException extends EffectData.TaggedError(
  "GeneralServiceException",
)<{
  readonly Message?: string;
}> {}
export interface GetResourceInput {
  TypeName: string;
  TypeVersionId?: string;
  RoleArn?: string;
  Identifier: string;
}
export interface GetResourceOutput {
  TypeName?: string;
  ResourceDescription?: ResourceDescription;
}
export interface GetResourceRequestStatusInput {
  RequestToken: string;
}
export interface GetResourceRequestStatusOutput {
  ProgressEvent?: ProgressEvent;
  HooksProgressEvent?: Array<HookProgressEvent>;
}
export type HandlerErrorCode = string;

export declare class HandlerFailureException extends EffectData.TaggedError(
  "HandlerFailureException",
)<{
  readonly Message?: string;
}> {}
export declare class HandlerInternalFailureException extends EffectData.TaggedError(
  "HandlerInternalFailureException",
)<{
  readonly Message?: string;
}> {}
export type HandlerNextToken = string;

export type HookFailureMode = string;

export type HookInvocationPoint = string;

export interface HookProgressEvent {
  HookTypeName?: string;
  HookTypeVersionId?: string;
  HookTypeArn?: string;
  InvocationPoint?: string;
  HookStatus?: string;
  HookEventTime?: Date | string;
  HookStatusMessage?: string;
  FailureMode?: string;
}
export type HooksProgressEvent = Array<HookProgressEvent>;
export type HookStatus = string;

export type HookTypeArn = string;

export type Identifier = string;

export declare class InvalidCredentialsException extends EffectData.TaggedError(
  "InvalidCredentialsException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export interface ListResourceRequestsInput {
  MaxResults?: number;
  NextToken?: string;
  ResourceRequestStatusFilter?: ResourceRequestStatusFilter;
}
export interface ListResourceRequestsOutput {
  ResourceRequestStatusSummaries?: Array<ProgressEvent>;
  NextToken?: string;
}
export interface ListResourcesInput {
  TypeName: string;
  TypeVersionId?: string;
  RoleArn?: string;
  NextToken?: string;
  MaxResults?: number;
  ResourceModel?: string;
}
export interface ListResourcesOutput {
  TypeName?: string;
  ResourceDescriptions?: Array<ResourceDescription>;
  NextToken?: string;
}
export type MaxResults = number;

export declare class NetworkFailureException extends EffectData.TaggedError(
  "NetworkFailureException",
)<{
  readonly Message?: string;
}> {}
export type NextToken = string;

export declare class NotStabilizedException extends EffectData.TaggedError(
  "NotStabilizedException",
)<{
  readonly Message?: string;
}> {}
export declare class NotUpdatableException extends EffectData.TaggedError(
  "NotUpdatableException",
)<{
  readonly Message?: string;
}> {}
export type Operation = string;

export type Operations = Array<string>;
export type OperationStatus = string;

export type OperationStatuses = Array<string>;
export type PatchDocument = string;

export declare class PrivateTypeException extends EffectData.TaggedError(
  "PrivateTypeException",
)<{
  readonly Message?: string;
}> {}
export interface ProgressEvent {
  TypeName?: string;
  Identifier?: string;
  RequestToken?: string;
  HooksRequestToken?: string;
  Operation?: string;
  OperationStatus?: string;
  EventTime?: Date | string;
  ResourceModel?: string;
  StatusMessage?: string;
  ErrorCode?: string;
  RetryAfter?: Date | string;
}
export type Properties = string;

export type RequestToken = string;

export declare class RequestTokenNotFoundException extends EffectData.TaggedError(
  "RequestTokenNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceConflictException extends EffectData.TaggedError(
  "ResourceConflictException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceDescription {
  Identifier?: string;
  Properties?: string;
}
export type ResourceDescriptions = Array<ResourceDescription>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceRequestStatusFilter {
  Operations?: Array<string>;
  OperationStatuses?: Array<string>;
}
export type ResourceRequestStatusSummaries = Array<ProgressEvent>;
export type RoleArn = string;

export declare class ServiceInternalErrorException extends EffectData.TaggedError(
  "ServiceInternalErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class ServiceLimitExceededException extends EffectData.TaggedError(
  "ServiceLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type StatusMessage = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export type TypeName = string;

export declare class TypeNotFoundException extends EffectData.TaggedError(
  "TypeNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type TypeVersionId = string;

export declare class UnsupportedActionException extends EffectData.TaggedError(
  "UnsupportedActionException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateResourceInput {
  TypeName: string;
  TypeVersionId?: string;
  RoleArn?: string;
  ClientToken?: string;
  Identifier: string;
  PatchDocument: string;
}
export interface UpdateResourceOutput {
  ProgressEvent?: ProgressEvent;
}
export declare namespace CancelResourceRequest {
  export type Input = CancelResourceRequestInput;
  export type Output = CancelResourceRequestOutput;
  export type Error =
    | ConcurrentModificationException
    | RequestTokenNotFoundException
    | CommonAwsError;
}

export declare namespace CreateResource {
  export type Input = CreateResourceInput;
  export type Output = CreateResourceOutput;
  export type Error =
    | AlreadyExistsException
    | ClientTokenConflictException
    | ConcurrentOperationException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError;
}

export declare namespace DeleteResource {
  export type Input = DeleteResourceInput;
  export type Output = DeleteResourceOutput;
  export type Error =
    | AlreadyExistsException
    | ClientTokenConflictException
    | ConcurrentOperationException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError;
}

export declare namespace GetResource {
  export type Input = GetResourceInput;
  export type Output = GetResourceOutput;
  export type Error =
    | AlreadyExistsException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError;
}

export declare namespace GetResourceRequestStatus {
  export type Input = GetResourceRequestStatusInput;
  export type Output = GetResourceRequestStatusOutput;
  export type Error = RequestTokenNotFoundException | CommonAwsError;
}

export declare namespace ListResourceRequests {
  export type Input = ListResourceRequestsInput;
  export type Output = ListResourceRequestsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListResources {
  export type Input = ListResourcesInput;
  export type Output = ListResourcesOutput;
  export type Error =
    | AlreadyExistsException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError;
}

export declare namespace UpdateResource {
  export type Input = UpdateResourceInput;
  export type Output = UpdateResourceOutput;
  export type Error =
    | AlreadyExistsException
    | ClientTokenConflictException
    | ConcurrentOperationException
    | GeneralServiceException
    | HandlerFailureException
    | HandlerInternalFailureException
    | InvalidCredentialsException
    | InvalidRequestException
    | NetworkFailureException
    | NotStabilizedException
    | NotUpdatableException
    | PrivateTypeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceInternalErrorException
    | ServiceLimitExceededException
    | ThrottlingException
    | TypeNotFoundException
    | UnsupportedActionException
    | CommonAwsError;
}
