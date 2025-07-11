import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface IotMoonrakerService {
  deleteThingShadow(
    input: DeleteThingShadowRequest,
  ): Effect.Effect<
    DeleteThingShadowResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError
  >;
  getRetainedMessage(
    input: GetRetainedMessageRequest,
  ): Effect.Effect<
    GetRetainedMessageResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getThingShadow(
    input: GetThingShadowRequest,
  ): Effect.Effect<
    GetThingShadowResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError
  >;
  listNamedShadowsForThing(
    input: ListNamedShadowsForThingRequest,
  ): Effect.Effect<
    ListNamedShadowsForThingResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listRetainedMessages(
    input: ListRetainedMessagesRequest,
  ): Effect.Effect<
    ListRetainedMessagesResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  publish(
    input: PublishRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateThingShadow(
    input: UpdateThingShadowRequest,
  ): Effect.Effect<
    UpdateThingShadowResponse,
    | ConflictException
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | RequestEntityTooLargeException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError
  >;
}

export type IotDataPlane = IotMoonrakerService;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ContentType = string;

export type CorrelationData = string;

export interface DeleteThingShadowRequest {
  thingName: string;
  shadowName?: string;
}
export interface DeleteThingShadowResponse {
  payload: Uint8Array | string;
}
export type errorMessage = string;

export interface GetRetainedMessageRequest {
  topic: string;
}
export interface GetRetainedMessageResponse {
  topic?: string;
  payload?: Uint8Array | string;
  qos?: number;
  lastModifiedTime?: number;
  userProperties?: Uint8Array | string;
}
export interface GetThingShadowRequest {
  thingName: string;
  shadowName?: string;
}
export interface GetThingShadowResponse {
  payload?: Uint8Array | string;
}
export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export type JsonDocument = Uint8Array | string;

export interface ListNamedShadowsForThingRequest {
  thingName: string;
  nextToken?: string;
  pageSize?: number;
}
export interface ListNamedShadowsForThingResponse {
  results?: Array<string>;
  nextToken?: string;
  timestamp?: number;
}
export interface ListRetainedMessagesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListRetainedMessagesResponse {
  retainedTopics?: Array<RetainedMessageSummary>;
  nextToken?: string;
}
export type MaxResults = number;

export type MessageExpiry = number;

export declare class MethodNotAllowedException extends EffectData.TaggedError(
  "MethodNotAllowedException",
)<{
  readonly message?: string;
}> {}
export type NamedShadowList = Array<string>;
export type NextToken = string;

export type PageSize = number;

export type Payload = Uint8Array | string;

export type PayloadFormatIndicator = "UNSPECIFIED_BYTES" | "UTF8_DATA";
export type PayloadSize = number;

export interface PublishRequest {
  topic: string;
  qos?: number;
  retain?: boolean;
  payload?: Uint8Array | string;
  userProperties?: string;
  payloadFormatIndicator?: PayloadFormatIndicator;
  contentType?: string;
  responseTopic?: string;
  correlationData?: string;
  messageExpiry?: number;
}
export type Qos = number;

export declare class RequestEntityTooLargeException extends EffectData.TaggedError(
  "RequestEntityTooLargeException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResponseTopic = string;

export type Retain = boolean;

export type RetainedMessageList = Array<RetainedMessageSummary>;
export interface RetainedMessageSummary {
  topic?: string;
  payloadSize?: number;
  qos?: number;
  lastModifiedTime?: number;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type ShadowName = string;

export type SynthesizedJsonUserProperties = string;

export type ThingName = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = number;

export type Topic = string;

export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedDocumentEncodingException extends EffectData.TaggedError(
  "UnsupportedDocumentEncodingException",
)<{
  readonly message?: string;
}> {}
export interface UpdateThingShadowRequest {
  thingName: string;
  shadowName?: string;
  payload: Uint8Array | string;
}
export interface UpdateThingShadowResponse {
  payload?: Uint8Array | string;
}
export type UserPropertiesBlob = Uint8Array | string;

export declare namespace DeleteThingShadow {
  export type Input = DeleteThingShadowRequest;
  export type Output = DeleteThingShadowResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError;
}

export declare namespace GetRetainedMessage {
  export type Input = GetRetainedMessageRequest;
  export type Output = GetRetainedMessageResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetThingShadow {
  export type Input = GetThingShadowRequest;
  export type Output = GetThingShadowResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError;
}

export declare namespace ListNamedShadowsForThing {
  export type Input = ListNamedShadowsForThingRequest;
  export type Output = ListNamedShadowsForThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListRetainedMessages {
  export type Input = ListRetainedMessagesRequest;
  export type Output = ListRetainedMessagesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace Publish {
  export type Input = PublishRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateThingShadow {
  export type Input = UpdateThingShadowRequest;
  export type Output = UpdateThingShadowResponse;
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | RequestEntityTooLargeException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError;
}
