import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSDeepSenseRunTimeServiceApi2_0 {
  deleteSession(
    input: DeleteSessionRequest,
  ): Effect.Effect<
    DeleteSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSession(
    input: GetSessionRequest,
  ): Effect.Effect<
    GetSessionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putSession(
    input: PutSessionRequest,
  ): Effect.Effect<
    PutSessionResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  recognizeText(
    input: RecognizeTextRequest,
  ): Effect.Effect<
    RecognizeTextResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  recognizeUtterance(
    input: RecognizeUtteranceRequest,
  ): Effect.Effect<
    RecognizeUtteranceResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startConversation(
    input: StartConversationRequest,
  ): Effect.Effect<
    StartConversationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type LexRuntimeV2 = AWSDeepSenseRunTimeServiceApi2_0;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface ActiveContext {
  name: string;
  timeToLive: ActiveContextTimeToLive;
  contextAttributes: Record<string, string>;
}
export type ActiveContextName = string;

export type ActiveContextParametersMap = Record<string, string>;
export type ActiveContextsList = Array<ActiveContext>;
export interface ActiveContextTimeToLive {
  timeToLiveInSeconds: number;
  turnsToLive: number;
}
export type ActiveContextTimeToLiveInSeconds = number;

export type ActiveContextTurnsToLive = number;

export type AttachmentTitle = string;

export type AttachmentUrl = string;

export type AudioChunk = Uint8Array | string;

export interface AudioInputEvent {
  audioChunk?: Uint8Array | string;
  contentType: string;
  eventId?: string;
  clientTimestampMillis?: number;
}
export interface AudioResponseEvent {
  audioChunk?: Uint8Array | string;
  contentType?: string;
  eventId?: string;
}
export declare class BadGatewayException extends EffectData.TaggedError(
  "BadGatewayException",
)<{
  readonly message: string;
}> {}
export type BlobStream = Uint8Array | string;

export type BotAliasIdentifier = string;

export type BotIdentifier = string;

export interface Button {
  text: string;
  value: string;
}
export type ButtonsList = Array<Button>;
export type ButtonText = string;

export type ButtonValue = string;

export interface ConfidenceScore {
  score?: number;
}
export interface ConfigurationEvent {
  requestAttributes?: Record<string, string>;
  responseContentType: string;
  sessionState?: SessionState;
  welcomeMessages?: Array<Message>;
  disablePlayback?: boolean;
  eventId?: string;
  clientTimestampMillis?: number;
}
export type ConfirmationState = "CONFIRMED" | "DENIED" | "NONE";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export type ConversationMode = "AUDIO" | "TEXT";
export interface DeleteSessionRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
}
export interface DeleteSessionResponse {
  botId?: string;
  botAliasId?: string;
  localeId?: string;
  sessionId?: string;
}
export declare class DependencyFailedException extends EffectData.TaggedError(
  "DependencyFailedException",
)<{
  readonly message: string;
}> {}
export interface DialogAction {
  type: DialogActionType;
  slotToElicit?: string;
  slotElicitationStyle?: StyleType;
  subSlotToElicit?: ElicitSubSlot;
}
export type DialogActionType =
  | "CLOSE"
  | "CONFIRM_INTENT"
  | "DELEGATE"
  | "ELICIT_INTENT"
  | "ELICIT_SLOT"
  | "NONE";
export interface DisconnectionEvent {
  eventId?: string;
  clientTimestampMillis?: number;
}
export type Double = number;

export interface DTMFInputEvent {
  inputCharacter: string;
  eventId?: string;
  clientTimestampMillis?: number;
}
export type DTMFRegex = string;

export interface ElicitSubSlot {
  name: string;
  subSlotToElicit?: ElicitSubSlot;
}
export type EpochMillis = number;

export type EventId = string;

export interface GetSessionRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
}
export interface GetSessionResponse {
  sessionId?: string;
  messages?: Array<Message>;
  interpretations?: Array<Interpretation>;
  sessionState?: SessionState;
}
export interface HeartbeatEvent {
  eventId?: string;
}
export interface ImageResponseCard {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  buttons?: Array<Button>;
}
export type InputMode = "TEXT" | "SPEECH" | "DTMF";
export interface Intent {
  name: string;
  slots?: Record<string, Slot>;
  state?: IntentState;
  confirmationState?: ConfirmationState;
}
export interface IntentResultEvent {
  inputMode?: InputMode;
  interpretations?: Array<Interpretation>;
  sessionState?: SessionState;
  requestAttributes?: Record<string, string>;
  sessionId?: string;
  eventId?: string;
  recognizedBotMember?: RecognizedBotMember;
}
export type IntentState =
  | "FAILED"
  | "FULFILLED"
  | "IN_PROGRESS"
  | "READY_FOR_FULFILLMENT"
  | "WAITING"
  | "FULFILLMENT_IN_PROGRESS";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface Interpretation {
  nluConfidence?: ConfidenceScore;
  sentimentResponse?: SentimentResponse;
  intent?: Intent;
  interpretationSource?: InterpretationSource;
}
export type Interpretations = Array<Interpretation>;
export type InterpretationSource = "BEDROCK" | "LEX";
export type LocaleId = string;

export interface Message {
  content?: string;
  contentType: MessageContentType;
  imageResponseCard?: ImageResponseCard;
}
export type MessageContentType =
  | "CUSTOM_PAYLOAD"
  | "IMAGE_RESPONSE_CARD"
  | "PLAIN_TEXT"
  | "SSML";
export type Messages = Array<Message>;
export type Name = string;

export type NonEmptyString = string;

export type ParameterName = string;

export interface PlaybackCompletionEvent {
  eventId?: string;
  clientTimestampMillis?: number;
}
export interface PlaybackInterruptionEvent {
  eventReason?: PlaybackInterruptionReason;
  causedByEventId?: string;
  eventId?: string;
}
export type PlaybackInterruptionReason =
  | "DTMF_START_DETECTED"
  | "TEXT_DETECTED"
  | "VOICE_START_DETECTED";
export interface PutSessionRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  messages?: Array<Message>;
  sessionState: SessionState;
  requestAttributes?: Record<string, string>;
  responseContentType?: string;
}
export interface PutSessionResponse {
  contentType?: string;
  messages?: string;
  sessionState?: string;
  requestAttributes?: string;
  sessionId?: string;
  audioStream?: Uint8Array | string;
}
export interface RecognizedBotMember {
  botId: string;
  botName?: string;
}
export interface RecognizeTextRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  text: string;
  sessionState?: SessionState;
  requestAttributes?: Record<string, string>;
}
export interface RecognizeTextResponse {
  messages?: Array<Message>;
  sessionState?: SessionState;
  interpretations?: Array<Interpretation>;
  requestAttributes?: Record<string, string>;
  sessionId?: string;
  recognizedBotMember?: RecognizedBotMember;
}
export interface RecognizeUtteranceRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  sessionState?: string;
  requestAttributes?: string;
  requestContentType: string;
  responseContentType?: string;
  inputStream?: Uint8Array | string;
}
export interface RecognizeUtteranceResponse {
  inputMode?: string;
  contentType?: string;
  messages?: string;
  interpretations?: string;
  sessionState?: string;
  requestAttributes?: string;
  sessionId?: string;
  inputTranscript?: string;
  audioStream?: Uint8Array | string;
  recognizedBotMember?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface RuntimeHintDetails {
  runtimeHintValues?: Array<RuntimeHintValue>;
  subSlotHints?: Record<string, RuntimeHintDetails>;
}
export type RuntimeHintPhrase = string;

export interface RuntimeHints {
  slotHints?: Record<string, Record<string, RuntimeHintDetails>>;
}
export interface RuntimeHintValue {
  phrase: string;
}
export type RuntimeHintValuesList = Array<RuntimeHintValue>;
export type SensitiveNonEmptyString = string;

export interface SentimentResponse {
  sentiment?: SentimentType;
  sentimentScore?: SentimentScore;
}
export interface SentimentScore {
  positive?: number;
  negative?: number;
  neutral?: number;
  mixed?: number;
}
export type SentimentType = "MIXED" | "NEGATIVE" | "NEUTRAL" | "POSITIVE";
export type SessionId = string;

export interface SessionState {
  dialogAction?: DialogAction;
  intent?: Intent;
  activeContexts?: Array<ActiveContext>;
  sessionAttributes?: Record<string, string>;
  originatingRequestId?: string;
  runtimeHints?: RuntimeHints;
}
export type Shape = "SCALAR" | "LIST" | "COMPOSITE";
export interface Slot {
  value?: Value;
  shape?: Shape;
  values?: Array<Slot>;
  subSlots?: Record<string, Slot>;
}
export type SlotHintsIntentMap = Record<
  string,
  Record<string, RuntimeHintDetails>
>;
export type SlotHintsSlotMap = Record<string, RuntimeHintDetails>;
export type Slots = Record<string, Slot>;
export interface StartConversationRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  conversationMode?: ConversationMode;
  requestEventStream: StartConversationRequestEventStream;
}
export type StartConversationRequestEventStream =
  | { ConfigurationEvent: ConfigurationEvent }
  | { AudioInputEvent: AudioInputEvent }
  | { DTMFInputEvent: DTMFInputEvent }
  | { TextInputEvent: TextInputEvent }
  | { PlaybackCompletionEvent: PlaybackCompletionEvent }
  | { DisconnectionEvent: DisconnectionEvent };
export interface StartConversationResponse {
  responseEventStream?: StartConversationResponseEventStream;
}
export type StartConversationResponseEventStream =
  | { PlaybackInterruptionEvent: PlaybackInterruptionEvent }
  | { TranscriptEvent: TranscriptEvent }
  | { IntentResultEvent: IntentResultEvent }
  | { TextResponseEvent: TextResponseEvent }
  | { AudioResponseEvent: AudioResponseEvent }
  | { HeartbeatEvent: HeartbeatEvent }
  | { AccessDeniedException: AccessDeniedException }
  | { ResourceNotFoundException: ResourceNotFoundException }
  | { ValidationException: ValidationException }
  | { ThrottlingException: ThrottlingException }
  | { InternalServerException: InternalServerException }
  | { ConflictException: ConflictException }
  | { DependencyFailedException: DependencyFailedException }
  | { BadGatewayException: BadGatewayException };
export type StringList = Array<string>;
export type StringMap = Record<string, string>;
export type StyleType = "DEFAULT" | "SPELL_BY_LETTER" | "SPELL_BY_WORD";
export type Text = string;

export interface TextInputEvent {
  text: string;
  eventId?: string;
  clientTimestampMillis?: number;
}
export interface TextResponseEvent {
  messages?: Array<Message>;
  eventId?: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface TranscriptEvent {
  transcript?: string;
  eventId?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export interface Value {
  originalValue?: string;
  interpretedValue: string;
  resolvedValues?: Array<string>;
}
export type Values = Array<Slot>;
export declare namespace DeleteSession {
  export type Input = DeleteSessionRequest;
  export type Output = DeleteSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSession {
  export type Input = GetSessionRequest;
  export type Output = GetSessionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutSession {
  export type Input = PutSessionRequest;
  export type Output = PutSessionResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RecognizeText {
  export type Input = RecognizeTextRequest;
  export type Output = RecognizeTextResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RecognizeUtterance {
  export type Input = RecognizeUtteranceRequest;
  export type Output = RecognizeUtteranceResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartConversation {
  export type Input = StartConversationRequest;
  export type Output = StartConversationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
