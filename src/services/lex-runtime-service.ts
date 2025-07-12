import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
import type { Buffer } from "node:buffer";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class LexRuntimeService extends AWSServiceClient {
  deleteSession(
    input: DeleteSessionRequest,
  ): Effect.Effect<
    DeleteSessionResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  getSession(
    input: GetSessionRequest,
  ): Effect.Effect<
    GetSessionResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  postContent(
    input: PostContentRequest,
  ): Effect.Effect<
    PostContentResponse,
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | DependencyFailedException
    | InternalFailureException
    | LimitExceededException
    | LoopDetectedException
    | NotAcceptableException
    | NotFoundException
    | RequestTimeoutException
    | UnsupportedMediaTypeException
    | CommonAwsError
  >;
  postText(
    input: PostTextRequest,
  ): Effect.Effect<
    PostTextResponse,
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | DependencyFailedException
    | InternalFailureException
    | LimitExceededException
    | LoopDetectedException
    | NotFoundException
    | CommonAwsError
  >;
  putSession(
    input: PutSessionRequest,
  ): Effect.Effect<
    PutSessionResponse,
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | DependencyFailedException
    | InternalFailureException
    | LimitExceededException
    | NotAcceptableException
    | NotFoundException
    | CommonAwsError
  >;
}

export type Accept = string;

export interface ActiveContext {
  name: string;
  timeToLive: ActiveContextTimeToLive;
  parameters: Record<string, string>;
}
export type ActiveContextName = string;

export type ActiveContextParametersMap = Record<string, string>;
export type ActiveContextsList = Array<ActiveContext>;
export interface ActiveContextTimeToLive {
  timeToLiveInSeconds?: number;
  turnsToLive?: number;
}
export type ActiveContextTimeToLiveInSeconds = number;

export type ActiveContextTurnsToLive = number;

export declare class BadGatewayException extends EffectData.TaggedError(
  "BadGatewayException",
)<{
  readonly Message?: string;
}> {}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export type BlobStream = Uint8Array | string;

export type BotAlias = string;

export type BotName = string;

export type BotVersion = string;

export interface Button {
  text: string;
  value: string;
}
export type ButtonTextStringWithLength = string;

export type ButtonValueStringWithLength = string;

export type ConfirmationStatus = "NONE" | "CONFIRMED" | "DENIED";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ContentType = "GENERIC";
export interface DeleteSessionRequest {
  botName: string;
  botAlias: string;
  userId: string;
}
export interface DeleteSessionResponse {
  botName?: string;
  botAlias?: string;
  userId?: string;
  sessionId?: string;
}
export declare class DependencyFailedException extends EffectData.TaggedError(
  "DependencyFailedException",
)<{
  readonly Message?: string;
}> {}
export interface DialogAction {
  type: DialogActionType;
  intentName?: string;
  slots?: Record<string, string>;
  slotToElicit?: string;
  fulfillmentState?: FulfillmentState;
  message?: string;
  messageFormat?: MessageFormatType;
}
export type DialogActionType =
  | "ELICIT_INTENT"
  | "CONFIRM_INTENT"
  | "ELICIT_SLOT"
  | "CLOSE"
  | "DELEGATE";
export type DialogState =
  | "ELICIT_INTENT"
  | "CONFIRM_INTENT"
  | "ELICIT_SLOT"
  | "FULFILLED"
  | "READY_FOR_FULFILLMENT"
  | "FAILED";
export type Double = number;

export type ErrorMessage = string;

export type FulfillmentState = "FULFILLED" | "FAILED" | "READY_FOR_FULFILLMENT";
export interface GenericAttachment {
  title?: string;
  subTitle?: string;
  attachmentLinkUrl?: string;
  imageUrl?: string;
  buttons?: Array<Button>;
}
export type genericAttachmentList = Array<GenericAttachment>;
export interface GetSessionRequest {
  botName: string;
  botAlias: string;
  userId: string;
  checkpointLabelFilter?: string;
}
export interface GetSessionResponse {
  recentIntentSummaryView?: Array<IntentSummary>;
  sessionAttributes?: Record<string, string>;
  sessionId?: string;
  dialogAction?: DialogAction;
  activeContexts?: Array<ActiveContext>;
}
export type HttpContentType = string;

export interface IntentConfidence {
  score?: number;
}
export type IntentList = Array<PredictedIntent>;
export type IntentName = string;

export interface IntentSummary {
  intentName?: string;
  checkpointLabel?: string;
  slots?: Record<string, string>;
  confirmationStatus?: ConfirmationStatus;
  dialogActionType: DialogActionType;
  fulfillmentState?: FulfillmentState;
  slotToElicit?: string;
}
export type IntentSummaryCheckpointLabel = string;

export type IntentSummaryList = Array<IntentSummary>;
export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly retryAfterSeconds?: string;
  readonly message?: string;
}> {}
export type listOfButtons = Array<Button>;
export declare class LoopDetectedException extends EffectData.TaggedError(
  "LoopDetectedException",
)<{
  readonly Message?: string;
}> {}
export type MessageFormatType =
  | "PLAIN_TEXT"
  | "CUSTOM_PAYLOAD"
  | "SSML"
  | "COMPOSITE";
export declare class NotAcceptableException extends EffectData.TaggedError(
  "NotAcceptableException",
)<{
  readonly message?: string;
}> {}
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type ParameterName = string;

export interface PostContentRequest {
  botName: string;
  botAlias: string;
  userId: string;
  sessionAttributes?: string;
  requestAttributes?: string;
  contentType: string;
  accept?: string;
  inputStream: Uint8Array | string | Buffer | Stream.Stream<Uint8Array>;
  activeContexts?: string;
}
export interface PostContentResponse {
  contentType?: string;
  intentName?: string;
  nluIntentConfidence?: string;
  alternativeIntents?: string;
  slots?: string;
  sessionAttributes?: string;
  sentimentResponse?: string;
  message?: string;
  encodedMessage?: string;
  messageFormat?: MessageFormatType;
  dialogState?: DialogState;
  slotToElicit?: string;
  inputTranscript?: string;
  encodedInputTranscript?: string;
  audioStream?: Stream.Stream<Uint8Array, ResponseError>;
  botVersion?: string;
  sessionId?: string;
  activeContexts?: string;
}
export interface PostTextRequest {
  botName: string;
  botAlias: string;
  userId: string;
  sessionAttributes?: Record<string, string>;
  requestAttributes?: Record<string, string>;
  inputText: string;
  activeContexts?: Array<ActiveContext>;
}
export interface PostTextResponse {
  intentName?: string;
  nluIntentConfidence?: IntentConfidence;
  alternativeIntents?: Array<PredictedIntent>;
  slots?: Record<string, string>;
  sessionAttributes?: Record<string, string>;
  message?: string;
  sentimentResponse?: SentimentResponse;
  messageFormat?: MessageFormatType;
  dialogState?: DialogState;
  slotToElicit?: string;
  responseCard?: ResponseCard;
  sessionId?: string;
  botVersion?: string;
  activeContexts?: Array<ActiveContext>;
}
export interface PredictedIntent {
  intentName?: string;
  nluIntentConfidence?: IntentConfidence;
  slots?: Record<string, string>;
}
export interface PutSessionRequest {
  botName: string;
  botAlias: string;
  userId: string;
  sessionAttributes?: Record<string, string>;
  dialogAction?: DialogAction;
  recentIntentSummaryView?: Array<IntentSummary>;
  accept?: string;
  activeContexts?: Array<ActiveContext>;
}
export interface PutSessionResponse {
  contentType?: string;
  intentName?: string;
  slots?: string;
  sessionAttributes?: string;
  message?: string;
  encodedMessage?: string;
  messageFormat?: MessageFormatType;
  dialogState?: DialogState;
  slotToElicit?: string;
  audioStream?: Stream.Stream<Uint8Array, ResponseError>;
  sessionId?: string;
  activeContexts?: string;
}
export declare class RequestTimeoutException extends EffectData.TaggedError(
  "RequestTimeoutException",
)<{
  readonly message?: string;
}> {}
export interface ResponseCard {
  version?: string;
  contentType?: ContentType;
  genericAttachments?: Array<GenericAttachment>;
}
export type SensitiveString = string;

export type SensitiveStringUnbounded = string;

export type SentimentLabel = string;

export interface SentimentResponse {
  sentimentLabel?: string;
  sentimentScore?: string;
}
export type SentimentScore = string;

export type LexRuntimeServiceString = string;

export type StringMap = Record<string, string>;
export type StringUrlWithLength = string;

export type StringWithLength = string;

export type SynthesizedJsonActiveContextsString = string;

export type SynthesizedJsonAttributesString = string;

export type SynthesizedJsonString = string;

export type Text = string;

export declare class UnsupportedMediaTypeException extends EffectData.TaggedError(
  "UnsupportedMediaTypeException",
)<{
  readonly message?: string;
}> {}
export type UserId = string;

export declare namespace DeleteSession {
  export type Input = DeleteSessionRequest;
  export type Output = DeleteSessionResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetSession {
  export type Input = GetSessionRequest;
  export type Output = GetSessionResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace PostContent {
  export type Input = PostContentRequest;
  export type Output = PostContentResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | DependencyFailedException
    | InternalFailureException
    | LimitExceededException
    | LoopDetectedException
    | NotAcceptableException
    | NotFoundException
    | RequestTimeoutException
    | UnsupportedMediaTypeException
    | CommonAwsError;
}

export declare namespace PostText {
  export type Input = PostTextRequest;
  export type Output = PostTextResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | DependencyFailedException
    | InternalFailureException
    | LimitExceededException
    | LoopDetectedException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace PutSession {
  export type Input = PutSessionRequest;
  export type Output = PutSessionResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | DependencyFailedException
    | InternalFailureException
    | LimitExceededException
    | NotAcceptableException
    | NotFoundException
    | CommonAwsError;
}
