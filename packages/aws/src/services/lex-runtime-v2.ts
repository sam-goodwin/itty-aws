import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as stream from "effect/Stream";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Lex Runtime V2",
  serviceShapeName: "AWSDeepSenseRunTimeServiceApi2_0",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "lex" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-08-07");
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
              `https://runtime-v2-lex-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://runtime-v2-lex-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://runtime-v2-lex.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://runtime-v2-lex.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class BadGatewayException
  extends /*@__PURE__*/ S.TaggedError<BadGatewayException>()(
    "BadGatewayException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(502),
  ).pipe(C.withServerError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DependencyFailedException
  extends /*@__PURE__*/ S.TaggedError<DependencyFailedException>()(
    "DependencyFailedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(424),
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
export type BotIdentifier = string;
export type BotAliasIdentifier = string;
export type LocaleId = string;
export type SessionId = string;
export interface DeleteSessionRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
}
const DeleteSessionRequest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<DeleteSessionRequest>;
export interface DeleteSessionResponse {
  botId?: string;
  botAliasId?: string;
  localeId?: string;
  sessionId?: string;
}
const DeleteSessionResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<DeleteSessionResponse>;
export interface GetSessionRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
}
const GetSessionRequest = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<GetSessionRequest>;
export type NonEmptyString = string;
export type Text = string | redacted.Redacted<string>;
export type MessageContentType =
  | "CustomPayload"
  | "ImageResponseCard"
  | "PlainText"
  | "SSML"
  | (string & {});
const MessageContentType = S.String;

export type AttachmentTitle = string;
export type AttachmentUrl = string;
export type ButtonText = string;
export type ButtonValue = string;
export interface Button {
  text: string;
  value: string;
}
const Button = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<Button>;
export type ButtonsList = Button[];
const ButtonsList = /*@__PURE__*/ __L.at(__c0, 4);
export interface ImageResponseCard {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  buttons?: Button[];
}
const ImageResponseCard = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<ImageResponseCard>;
export interface Message {
  content?: string | redacted.Redacted<string>;
  contentType: MessageContentType;
  imageResponseCard?: ImageResponseCard;
}
const Message = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<Message>;
export type Messages = Message[];
const Messages = /*@__PURE__*/ __L.at(__c0, 7);
export interface ConfidenceScore {
  score?: number;
}
const ConfidenceScore = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<ConfidenceScore>;
export type SentimentType = "MIXED" | "NEGATIVE" | "NEUTRAL" | "POSITIVE" | (string & {});
const SentimentType = S.String;

export interface SentimentScore {
  positive?: number;
  negative?: number;
  neutral?: number;
  mixed?: number;
}
const SentimentScore = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<SentimentScore>;
export interface SentimentResponse {
  sentiment?: SentimentType;
  sentimentScore?: SentimentScore;
}
const SentimentResponse = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<SentimentResponse>;
export type StringList = string[];
const StringList = /*@__PURE__*/ __L.at(__c1, 3);
export interface Value {
  originalValue?: string;
  interpretedValue: string;
  resolvedValues?: string[];
}
const Value = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<Value>;
export type Shape = "Scalar" | "List" | "Composite" | (string & {});
const Shape = S.String;

export type Values = Slot[];
const Values = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<Values>;
export interface Slot {
  value?: Value;
  shape?: Shape;
  values?: Slot[];
  subSlots?: { [key: string]: Slot | undefined };
}
const Slot = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<Slot>;
export type Slots = { [key: string]: Slot | undefined };
const Slots = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<Slots>;
export type IntentState =
  | "Failed"
  | "Fulfilled"
  | "InProgress"
  | "ReadyForFulfillment"
  | "Waiting"
  | "FulfillmentInProgress"
  | (string & {});
const IntentState = S.String;

export type ConfirmationState = "Confirmed" | "Denied" | "None" | (string & {});
const ConfirmationState = S.String;

export interface Intent {
  name: string;
  slots?: { [key: string]: Slot | undefined };
  state?: IntentState;
  confirmationState?: ConfirmationState;
}
const Intent = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<Intent>;
export type InterpretationSource = "Bedrock" | "Lex" | (string & {});
const InterpretationSource = S.String;

export interface Interpretation {
  nluConfidence?: ConfidenceScore;
  sentimentResponse?: SentimentResponse;
  intent?: Intent;
  interpretationSource?: InterpretationSource;
}
const Interpretation = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<Interpretation>;
export type Interpretations = Interpretation[];
const Interpretations = /*@__PURE__*/ __L.at(__c2, 2);
export type DialogActionType =
  | "Close"
  | "ConfirmIntent"
  | "Delegate"
  | "ElicitIntent"
  | "ElicitSlot"
  | "None"
  | (string & {});
const DialogActionType = S.String;

export type StyleType = "Default" | "SpellByLetter" | "SpellByWord" | (string & {});
const StyleType = S.String;

export interface ElicitSubSlot {
  name: string;
  subSlotToElicit?: ElicitSubSlot;
}
const ElicitSubSlot = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<ElicitSubSlot>;
export interface DialogAction {
  type: DialogActionType;
  slotToElicit?: string;
  slotElicitationStyle?: StyleType;
  subSlotToElicit?: ElicitSubSlot;
}
const DialogAction = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<DialogAction>;
export type ActiveContextName = string;
export type ActiveContextTimeToLiveInSeconds = number;
export type ActiveContextTurnsToLive = number;
export interface ActiveContextTimeToLive {
  timeToLiveInSeconds: number;
  turnsToLive: number;
}
const ActiveContextTimeToLive = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<ActiveContextTimeToLive>;
export type ParameterName = string;
export type ActiveContextParametersMap = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
const ActiveContextParametersMap = /*@__PURE__*/ __L.at(__c2, 6);
export interface ActiveContext {
  name: string;
  timeToLive: ActiveContextTimeToLive;
  contextAttributes: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const ActiveContext = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<ActiveContext>;
export type ActiveContextsList = ActiveContext[];
const ActiveContextsList = /*@__PURE__*/ __L.at(__c3, 0);
export type StringMap = { [key: string]: string | undefined };
const StringMap = /*@__PURE__*/ __L.at(__c3, 1);
export type Name = string;
export type RuntimeHintPhrase = string;
export interface RuntimeHintValue {
  phrase: string;
}
const RuntimeHintValue = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<RuntimeHintValue>;
export type RuntimeHintValuesList = RuntimeHintValue[];
const RuntimeHintValuesList = /*@__PURE__*/ __L.at(__c3, 3);
export interface RuntimeHintDetails {
  runtimeHintValues?: RuntimeHintValue[];
  subSlotHints?: { [key: string]: RuntimeHintDetails | undefined };
}
const RuntimeHintDetails = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<RuntimeHintDetails>;
export type SlotHintsSlotMap = { [key: string]: RuntimeHintDetails | undefined };
const SlotHintsSlotMap = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<SlotHintsSlotMap>;
export type SlotHintsIntentMap = {
  [key: string]: { [key: string]: RuntimeHintDetails | undefined } | undefined;
};
const SlotHintsIntentMap = /*@__PURE__*/ __L.at(__c3, 6);
export interface RuntimeHints {
  slotHints?: { [key: string]: { [key: string]: RuntimeHintDetails | undefined } | undefined };
}
const RuntimeHints = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<RuntimeHints>;
export interface SessionState {
  dialogAction?: DialogAction;
  intent?: Intent;
  activeContexts?: ActiveContext[];
  sessionAttributes?: { [key: string]: string | undefined };
  originatingRequestId?: string;
  runtimeHints?: RuntimeHints;
}
const SessionState = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<SessionState>;
export interface GetSessionResponse {
  sessionId?: string;
  messages?: Message[];
  interpretations?: Interpretation[];
  sessionState?: SessionState;
}
const GetSessionResponse = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<GetSessionResponse>;
export interface PutSessionRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  messages?: Message[];
  sessionState: SessionState;
  requestAttributes?: { [key: string]: string | undefined };
  responseContentType?: string;
}
const PutSessionRequest = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<PutSessionRequest>;
export interface PutSessionResponse {
  contentType?: string;
  messages?: string;
  sessionState?: string;
  requestAttributes?: string;
  sessionId?: string;
  audioStream?: T.StreamingOutputBody;
}
const PutSessionResponse = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<PutSessionResponse>;
export interface RecognizeTextRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  text: string | redacted.Redacted<string>;
  sessionState?: SessionState;
  requestAttributes?: { [key: string]: string | undefined };
}
const RecognizeTextRequest = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<RecognizeTextRequest>;
export interface RecognizedBotMember {
  botId: string;
  botName?: string;
}
const RecognizedBotMember = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<RecognizedBotMember>;
export interface RecognizeTextResponse {
  messages?: Message[];
  sessionState?: SessionState;
  interpretations?: Interpretation[];
  requestAttributes?: { [key: string]: string | undefined };
  sessionId?: string;
  recognizedBotMember?: RecognizedBotMember;
}
const RecognizeTextResponse = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<RecognizeTextResponse>;
export type SensitiveNonEmptyString = string | redacted.Redacted<string>;
export interface RecognizeUtteranceRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  sessionState?: string | redacted.Redacted<string>;
  requestAttributes?: string | redacted.Redacted<string>;
  requestContentType: string;
  responseContentType?: string;
  inputStream?: T.StreamingInputBody;
}
const RecognizeUtteranceRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<RecognizeUtteranceRequest>;
export interface RecognizeUtteranceResponse {
  inputMode?: string;
  contentType?: string;
  messages?: string;
  interpretations?: string;
  sessionState?: string;
  requestAttributes?: string;
  sessionId?: string;
  inputTranscript?: string;
  audioStream?: T.StreamingOutputBody;
  recognizedBotMember?: string;
}
const RecognizeUtteranceResponse = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<RecognizeUtteranceResponse>;
export type ConversationMode = "AUDIO" | "TEXT" | (string & {});
const ConversationMode = S.String;

export type EventId = string;
export type EpochMillis = number;
export interface ConfigurationEvent {
  requestAttributes?: { [key: string]: string | undefined };
  responseContentType: string;
  sessionState?: SessionState;
  welcomeMessages?: Message[];
  disablePlayback?: boolean;
  eventId?: string;
  clientTimestampMillis?: number;
}
const ConfigurationEvent = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<ConfigurationEvent>;
export type AudioChunk = Uint8Array;
export interface AudioInputEvent {
  audioChunk?: Uint8Array;
  contentType: string;
  eventId?: string;
  clientTimestampMillis?: number;
}
const AudioInputEvent = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<AudioInputEvent>;
export type DTMFRegex = string | redacted.Redacted<string>;
export interface DTMFInputEvent {
  inputCharacter: string | redacted.Redacted<string>;
  eventId?: string;
  clientTimestampMillis?: number;
}
const DTMFInputEvent = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<DTMFInputEvent>;
export interface TextInputEvent {
  text: string | redacted.Redacted<string>;
  eventId?: string;
  clientTimestampMillis?: number;
}
const TextInputEvent = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<TextInputEvent>;
export interface PlaybackCompletionEvent {
  eventId?: string;
  clientTimestampMillis?: number;
}
const PlaybackCompletionEvent = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<PlaybackCompletionEvent>;
export interface DisconnectionEvent {
  eventId?: string;
  clientTimestampMillis?: number;
}
const DisconnectionEvent = PlaybackCompletionEvent as any as S.Schema<DisconnectionEvent>;
export type StartConversationRequestEventStream =
  | {
      ConfigurationEvent: ConfigurationEvent;
      AudioInputEvent?: never;
      DTMFInputEvent?: never;
      TextInputEvent?: never;
      PlaybackCompletionEvent?: never;
      DisconnectionEvent?: never;
    }
  | {
      ConfigurationEvent?: never;
      AudioInputEvent: AudioInputEvent;
      DTMFInputEvent?: never;
      TextInputEvent?: never;
      PlaybackCompletionEvent?: never;
      DisconnectionEvent?: never;
    }
  | {
      ConfigurationEvent?: never;
      AudioInputEvent?: never;
      DTMFInputEvent: DTMFInputEvent;
      TextInputEvent?: never;
      PlaybackCompletionEvent?: never;
      DisconnectionEvent?: never;
    }
  | {
      ConfigurationEvent?: never;
      AudioInputEvent?: never;
      DTMFInputEvent?: never;
      TextInputEvent: TextInputEvent;
      PlaybackCompletionEvent?: never;
      DisconnectionEvent?: never;
    }
  | {
      ConfigurationEvent?: never;
      AudioInputEvent?: never;
      DTMFInputEvent?: never;
      TextInputEvent?: never;
      PlaybackCompletionEvent: PlaybackCompletionEvent;
      DisconnectionEvent?: never;
    }
  | {
      ConfigurationEvent?: never;
      AudioInputEvent?: never;
      DTMFInputEvent?: never;
      TextInputEvent?: never;
      PlaybackCompletionEvent?: never;
      DisconnectionEvent: DisconnectionEvent;
    };
const StartConversationRequestEventStream = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<
  stream.Stream<StartConversationRequestEventStream, Error, never>
>;
export interface StartConversationRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  conversationMode?: ConversationMode;
  requestEventStream: stream.Stream<StartConversationRequestEventStream, Error, never>;
}
const StartConversationRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<StartConversationRequest>;
export type PlaybackInterruptionReason =
  | "DTMF_START_DETECTED"
  | "TEXT_DETECTED"
  | "VOICE_START_DETECTED"
  | (string & {});
const PlaybackInterruptionReason = S.String;

export interface PlaybackInterruptionEvent {
  eventReason?: PlaybackInterruptionReason;
  causedByEventId?: string;
  eventId?: string;
}
const PlaybackInterruptionEvent = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<PlaybackInterruptionEvent>;
export interface TranscriptEvent {
  transcript?: string;
  eventId?: string;
}
const TranscriptEvent = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<TranscriptEvent>;
export type InputMode = "Text" | "Speech" | "DTMF" | (string & {});
const InputMode = S.String;

export interface IntentResultEvent {
  inputMode?: InputMode;
  interpretations?: Interpretation[];
  sessionState?: SessionState;
  requestAttributes?: { [key: string]: string | undefined };
  sessionId?: string;
  eventId?: string;
  recognizedBotMember?: RecognizedBotMember;
}
const IntentResultEvent = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<IntentResultEvent>;
export interface TextResponseEvent {
  messages?: Message[];
  eventId?: string;
}
const TextResponseEvent = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<TextResponseEvent>;
export interface AudioResponseEvent {
  audioChunk?: Uint8Array;
  contentType?: string;
  eventId?: string;
}
const AudioResponseEvent = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<AudioResponseEvent>;
export interface HeartbeatEvent {
  eventId?: string;
}
const HeartbeatEvent = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<HeartbeatEvent>;
export type StartConversationResponseEventStream =
  | {
      PlaybackInterruptionEvent: PlaybackInterruptionEvent;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent: TranscriptEvent;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent: IntentResultEvent;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent: TextResponseEvent;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent: AudioResponseEvent;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent: HeartbeatEvent;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException: AccessDeniedException;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException: ResourceNotFoundException;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException: ValidationException;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException: ThrottlingException;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException: InternalServerException;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException: ConflictException;
      DependencyFailedException?: never;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException: DependencyFailedException;
      BadGatewayException?: never;
    }
  | {
      PlaybackInterruptionEvent?: never;
      TranscriptEvent?: never;
      IntentResultEvent?: never;
      TextResponseEvent?: never;
      AudioResponseEvent?: never;
      HeartbeatEvent?: never;
      AccessDeniedException?: never;
      ResourceNotFoundException?: never;
      ValidationException?: never;
      ThrottlingException?: never;
      InternalServerException?: never;
      ConflictException?: never;
      DependencyFailedException?: never;
      BadGatewayException: BadGatewayException;
    };
const StartConversationResponseEventStream = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<
  stream.Stream<StartConversationResponseEventStream, Error, never>
>;
export interface StartConversationResponse {
  responseEventStream?: stream.Stream<StartConversationResponseEventStream, Error, never>;
}
const StartConversationResponse = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<StartConversationResponse>;
export type DeleteSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes session information for a specified bot, alias, and user ID.
 *
 * You can use this operation to restart a conversation with a bot.
 * When you remove a session, the entire history of the session is removed
 * so that you can start again.
 *
 * You don't need to delete a session. Sessions have a time limit and
 * will expire. Set the session time limit when you create the bot. The
 * default is 5 minutes, but you can specify anything between 1 minute and
 * 24 hours.
 *
 * If you specify a bot or alias ID that doesn't exist, you receive a
 * `BadRequestException.`
 *
 * If the locale doesn't exist in the bot, or if the locale hasn't been
 * enables for the alias, you receive a
 * `BadRequestException`.
 */
export const deleteSession: API.OperationMethod<
  DeleteSessionRequest,
  DeleteSessionResponse,
  DeleteSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSessionRequest,
  output: DeleteSessionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSession",
}));

export type GetSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns session information for a specified bot, alias, and
 * user.
 *
 * For example, you can use this operation to retrieve session
 * information for a user that has left a long-running session in
 * use.
 *
 * If the bot, alias, or session identifier doesn't exist, Amazon Lex V2
 * returns a `BadRequestException`. If the locale doesn't exist
 * or is not enabled for the alias, you receive a
 * `BadRequestException`.
 */
export const getSession: API.OperationMethod<
  GetSessionRequest,
  GetSessionResponse,
  GetSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSessionRequest,
  output: GetSessionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSession",
}));

export type PutSessionError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new session or modifies an existing session with an Amazon Lex V2
 * bot. Use this operation to enable your application to set the state of
 * the bot.
 */
export const putSession: API.OperationMethod<
  PutSessionRequest,
  PutSessionResponse,
  PutSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutSessionRequest,
  output: PutSessionResponse,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSession",
}));

export type RecognizeTextError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends user input to Amazon Lex V2. Client applications use this API to send
 * requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input
 * using the machine learning model that it build for the bot.
 *
 * In response, Amazon Lex V2 returns the next message to convey to the user
 * and an optional response card to display.
 *
 * If the optional post-fulfillment response is specified, the messages
 * are returned as follows. For more information, see PostFulfillmentStatusSpecification.
 *
 * - **Success message** - Returned if
 * the Lambda function completes successfully and the intent state is
 * fulfilled or ready fulfillment if the message is present.
 *
 * - **Failed message** - The failed
 * message is returned if the Lambda function throws an exception or
 * if the Lambda function returns a failed intent state without a
 * message.
 *
 * - **Timeout message** - If you
 * don't configure a timeout message and a timeout, and the Lambda
 * function doesn't return within 30 seconds, the timeout message is
 * returned. If you configure a timeout, the timeout message is
 * returned when the period times out.
 *
 * For more information, see Completion message.
 */
export const recognizeText: API.OperationMethod<
  RecognizeTextRequest,
  RecognizeTextResponse,
  RecognizeTextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RecognizeTextRequest,
  output: RecognizeTextResponse,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RecognizeText",
}));

export type RecognizeUtteranceError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends user input to Amazon Lex V2. You can send text or speech. Clients use
 * this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2
 * interprets the user input using the machine learning model built for
 * the bot.
 *
 * The following request fields must be compressed with gzip and then
 * base64 encoded before you send them to Amazon Lex V2.
 *
 * - requestAttributes
 *
 * - sessionState
 *
 * The following response fields are compressed using gzip and then
 * base64 encoded by Amazon Lex V2. Before you can use these fields, you must
 * decode and decompress them.
 *
 * - inputTranscript
 *
 * - interpretations
 *
 * - messages
 *
 * - requestAttributes
 *
 * - sessionState
 *
 * The example contains a Java application that compresses and encodes
 * a Java object to send to Amazon Lex V2, and a second that decodes and
 * decompresses a response from Amazon Lex V2.
 *
 * If the optional post-fulfillment response is specified, the messages
 * are returned as follows. For more information, see PostFulfillmentStatusSpecification.
 *
 * - **Success message** - Returned if
 * the Lambda function completes successfully and the intent state is
 * fulfilled or ready fulfillment if the message is present.
 *
 * - **Failed message** - The failed
 * message is returned if the Lambda function throws an exception or
 * if the Lambda function returns a failed intent state without a
 * message.
 *
 * - **Timeout message** - If you
 * don't configure a timeout message and a timeout, and the Lambda
 * function doesn't return within 30 seconds, the timeout message is
 * returned. If you configure a timeout, the timeout message is
 * returned when the period times out.
 *
 * For more information, see Completion message.
 */
export const recognizeUtterance: API.OperationMethod<
  RecognizeUtteranceRequest,
  RecognizeUtteranceResponse,
  RecognizeUtteranceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RecognizeUtteranceRequest,
  output: RecognizeUtteranceResponse,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RecognizeUtterance",
}));

export type StartConversationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts an HTTP/2 bidirectional event stream that enables you to send
 * audio, text, or DTMF input in real time. After your application starts
 * a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon Lex V2
 * processes the incoming events and responds with streaming text or audio
 * events.
 *
 * Audio input must be in the following format: audio/lpcm
 * sample-rate=8000 sample-size-bits=16 channel-count=1;
 * is-big-endian=false.
 *
 * If the optional post-fulfillment response is specified, the messages
 * are returned as follows. For more information, see PostFulfillmentStatusSpecification.
 *
 * - **Success message** - Returned if
 * the Lambda function completes successfully and the intent state is
 * fulfilled or ready fulfillment if the message is present.
 *
 * - **Failed message** - The failed
 * message is returned if the Lambda function throws an exception or
 * if the Lambda function returns a failed intent state without a
 * message.
 *
 * - **Timeout message** - If you
 * don't configure a timeout message and a timeout, and the Lambda
 * function doesn't return within 30 seconds, the timeout message is
 * returned. If you configure a timeout, the timeout message is
 * returned when the period times out.
 *
 * For more information, see Completion message.
 *
 * If the optional update message is configured, it is played at the
 * specified frequency while the Lambda function is running and the update
 * message state is active. If the fulfillment update message is not
 * active, the Lambda function runs with a 30 second timeout.
 *
 * For more information, see Update message
 *
 * The `StartConversation` operation is supported only in
 * the following SDKs:
 *
 * - AWS SDK for C++
 *
 * - AWS SDK for Java V2
 *
 * - AWS SDK for Ruby V3
 */
export const startConversation: API.OperationMethod<
  StartConversationRequest,
  StartConversationResponse,
  StartConversationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartConversationRequest,
  output: StartConversationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartConversation",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAliasId: S.String.pipe(T.HttpLabel("botAliasId")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSessionRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botAliasId: S.optional(S.String),
          localeId: S.optional(S.String),
          sessionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteSessionResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAliasId: S.String.pipe(T.HttpLabel("botAliasId")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSessionRequest" });
    case 3:
      return S.suspend(() => S.Struct({ text: S.String, value: S.String })).annotate({
        identifier: "Button",
      });
    case 4:
      return S.Array(Button);
    case 5:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          subtitle: S.optional(S.String),
          imageUrl: S.optional(S.String),
          buttons: S.optional(ButtonsList),
        }),
      ).annotate({ identifier: "ImageResponseCard" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          content: S.optional(SensitiveString),
          contentType: MessageContentType,
          imageResponseCard: S.optional(ImageResponseCard),
        }),
      ).annotate({ identifier: "Message" });
    case 7:
      return S.Array(Message);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ score: S.optional(S.Number) })).annotate({
        identifier: "ConfidenceScore",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          positive: S.optional(S.Number),
          negative: S.optional(S.Number),
          neutral: S.optional(S.Number),
          mixed: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SentimentScore" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sentiment: S.optional(SentimentType),
          sentimentScore: S.optional(SentimentScore),
        }),
      ).annotate({ identifier: "SentimentResponse" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          originalValue: S.optional(S.String),
          interpretedValue: S.String,
          resolvedValues: S.optional(StringList),
        }),
      ).annotate({ identifier: "Value" });
    case 5:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Slot> => Slot).annotate({ identifier: "Slot" }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(Value),
          shape: S.optional(Shape),
          values: S.optional(S.suspend(() => Values).annotate({ identifier: "Values" })),
          subSlots: S.optional(S.suspend(() => Slots).annotate({ identifier: "Slots" })),
        }),
      ).annotate({ identifier: "Slot" });
    case 7:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<Slot> => Slot)
          .annotate({ identifier: "Slot" })
          .pipe(S.optional),
      );
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          slots: S.optional(Slots),
          state: S.optional(IntentState),
          confirmationState: S.optional(ConfirmationState),
        }),
      ).annotate({ identifier: "Intent" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nluConfidence: S.optional(ConfidenceScore),
          sentimentResponse: S.optional(SentimentResponse),
          intent: S.optional(Intent),
          interpretationSource: S.optional(InterpretationSource),
        }),
      ).annotate({ identifier: "Interpretation" });
    case 2:
      return S.Array(Interpretation);
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          subSlotToElicit: S.optional(
            S.suspend((): S.Schema<ElicitSubSlot> => ElicitSubSlot).annotate({
              identifier: "ElicitSubSlot",
            }),
          ),
        }),
      ).annotate({ identifier: "ElicitSubSlot" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: DialogActionType,
          slotToElicit: S.optional(S.String),
          slotElicitationStyle: S.optional(StyleType),
          subSlotToElicit: S.optional(ElicitSubSlot),
        }),
      ).annotate({ identifier: "DialogAction" });
    case 5:
      return S.suspend(() =>
        S.Struct({ timeToLiveInSeconds: S.Number, turnsToLive: S.Number }),
      ).annotate({ identifier: "ActiveContextTimeToLive" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          timeToLive: ActiveContextTimeToLive,
          contextAttributes: ActiveContextParametersMap,
        }),
      ).annotate({ identifier: "ActiveContext" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ActiveContext);
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() => S.Struct({ phrase: S.String })).annotate({
        identifier: "RuntimeHintValue",
      });
    case 3:
      return S.Array(RuntimeHintValue);
    case 4:
      return S.suspend(() =>
        S.Struct({
          runtimeHintValues: S.optional(RuntimeHintValuesList),
          subSlotHints: S.optional(
            S.suspend(() => SlotHintsSlotMap).annotate({ identifier: "SlotHintsSlotMap" }),
          ),
        }),
      ).annotate({ identifier: "RuntimeHintDetails" });
    case 5:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<RuntimeHintDetails> => RuntimeHintDetails)
          .annotate({ identifier: "RuntimeHintDetails" })
          .pipe(S.optional),
      );
    case 6:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend(() => SlotHintsSlotMap)
          .annotate({ identifier: "SlotHintsSlotMap" })
          .pipe(S.optional),
      );
    case 7:
      return S.suspend(() => S.Struct({ slotHints: S.optional(SlotHintsIntentMap) })).annotate({
        identifier: "RuntimeHints",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dialogAction: S.optional(DialogAction),
          intent: S.optional(Intent),
          activeContexts: S.optional(ActiveContextsList),
          sessionAttributes: S.optional(StringMap),
          originatingRequestId: S.optional(S.String),
          runtimeHints: S.optional(RuntimeHints),
        }),
      ).annotate({ identifier: "SessionState" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          messages: S.optional(Messages),
          interpretations: S.optional(Interpretations),
          sessionState: S.optional(SessionState),
        }),
      ).annotate({ identifier: "GetSessionResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAliasId: S.String.pipe(T.HttpLabel("botAliasId")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          messages: S.optional(Messages),
          sessionState: SessionState,
          requestAttributes: S.optional(StringMap),
          responseContentType: S.optional(S.String).pipe(T.HttpHeader("ResponseContentType")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutSessionRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
          messages: S.optional(S.String).pipe(T.HttpHeader("x-amz-lex-messages")),
          sessionState: S.optional(S.String).pipe(T.HttpHeader("x-amz-lex-session-state")),
          requestAttributes: S.optional(S.String).pipe(
            T.HttpHeader("x-amz-lex-request-attributes"),
          ),
          sessionId: S.optional(S.String).pipe(T.HttpHeader("x-amz-lex-session-id")),
          audioStream: S.optional(T.StreamingOutput).pipe(T.HttpPayload()),
        }),
      ).annotate({ identifier: "PutSessionResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAliasId: S.String.pipe(T.HttpLabel("botAliasId")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          text: SensitiveString,
          sessionState: S.optional(SessionState),
          requestAttributes: S.optional(StringMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RecognizeTextRequest" });
    case 5:
      return S.suspend(() => S.Struct({ botId: S.String, botName: S.optional(S.String) })).annotate(
        { identifier: "RecognizedBotMember" },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          messages: S.optional(Messages),
          sessionState: S.optional(SessionState),
          interpretations: S.optional(Interpretations),
          requestAttributes: S.optional(StringMap),
          sessionId: S.optional(S.String),
          recognizedBotMember: S.optional(RecognizedBotMember),
        }),
      ).annotate({ identifier: "RecognizeTextResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAliasId: S.String.pipe(T.HttpLabel("botAliasId")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          sessionState: S.optional(SensitiveString).pipe(T.HttpHeader("x-amz-lex-session-state")),
          requestAttributes: S.optional(SensitiveString).pipe(
            T.HttpHeader("x-amz-lex-request-attributes"),
          ),
          requestContentType: S.String.pipe(T.HttpHeader("Content-Type")),
          responseContentType: S.optional(S.String).pipe(T.HttpHeader("Response-Content-Type")),
          inputStream: S.optional(T.StreamingInput).pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RecognizeUtteranceRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          inputMode: S.optional(S.String).pipe(T.HttpHeader("x-amz-lex-input-mode")),
          contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
          messages: S.optional(S.String).pipe(T.HttpHeader("x-amz-lex-messages")),
          interpretations: S.optional(S.String).pipe(T.HttpHeader("x-amz-lex-interpretations")),
          sessionState: S.optional(S.String).pipe(T.HttpHeader("x-amz-lex-session-state")),
          requestAttributes: S.optional(S.String).pipe(
            T.HttpHeader("x-amz-lex-request-attributes"),
          ),
          sessionId: S.optional(S.String).pipe(T.HttpHeader("x-amz-lex-session-id")),
          inputTranscript: S.optional(S.String).pipe(T.HttpHeader("x-amz-lex-input-transcript")),
          audioStream: S.optional(T.StreamingOutput).pipe(T.HttpPayload()),
          recognizedBotMember: S.optional(S.String).pipe(
            T.HttpHeader("x-amz-lex-recognized-bot-member"),
          ),
        }),
      ).annotate({
        identifier: "RecognizeUtteranceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          requestAttributes: S.optional(StringMap),
          responseContentType: S.String,
          sessionState: S.optional(SessionState),
          welcomeMessages: S.optional(Messages),
          disablePlayback: S.optional(S.Boolean),
          eventId: S.optional(S.String),
          clientTimestampMillis: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ConfigurationEvent" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          audioChunk: S.optional(T.Blob),
          contentType: S.String,
          eventId: S.optional(S.String),
          clientTimestampMillis: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AudioInputEvent" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          inputCharacter: SensitiveString,
          eventId: S.optional(S.String),
          clientTimestampMillis: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DTMFInputEvent" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          text: SensitiveString,
          eventId: S.optional(S.String),
          clientTimestampMillis: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TextInputEvent" });
    case 5:
      return S.suspend(() =>
        S.Struct({ eventId: S.optional(S.String), clientTimestampMillis: S.optional(S.Number) }),
      ).annotate({ identifier: "PlaybackCompletionEvent" });
    case 6:
      return T.InputEventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ ConfigurationEvent: ConfigurationEvent }),
          /*@__PURE__*/ S.Struct({ AudioInputEvent: AudioInputEvent }),
          /*@__PURE__*/ S.Struct({ DTMFInputEvent: DTMFInputEvent }),
          /*@__PURE__*/ S.Struct({ TextInputEvent: TextInputEvent }),
          /*@__PURE__*/ S.Struct({ PlaybackCompletionEvent: PlaybackCompletionEvent }),
          /*@__PURE__*/ S.Struct({ DisconnectionEvent: DisconnectionEvent }),
        ]),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAliasId: S.String.pipe(T.HttpLabel("botAliasId")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          conversationMode: S.optional(ConversationMode).pipe(
            T.HttpHeader("x-amz-lex-conversation-mode"),
          ),
          requestEventStream: StartConversationRequestEventStream.pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartConversationRequest" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          eventReason: S.optional(PlaybackInterruptionReason),
          causedByEventId: S.optional(S.String),
          eventId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PlaybackInterruptionEvent",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ transcript: S.optional(S.String), eventId: S.optional(S.String) }),
      ).annotate({ identifier: "TranscriptEvent" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          inputMode: S.optional(InputMode),
          interpretations: S.optional(Interpretations),
          sessionState: S.optional(SessionState),
          requestAttributes: S.optional(StringMap),
          sessionId: S.optional(S.String),
          eventId: S.optional(S.String),
          recognizedBotMember: S.optional(RecognizedBotMember),
        }),
      ).annotate({ identifier: "IntentResultEvent" });
    case 3:
      return S.suspend(() =>
        S.Struct({ messages: S.optional(Messages), eventId: S.optional(S.String) }),
      ).annotate({ identifier: "TextResponseEvent" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          audioChunk: S.optional(T.Blob),
          contentType: S.optional(S.String),
          eventId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AudioResponseEvent" });
    case 5:
      return S.suspend(() => S.Struct({ eventId: S.optional(S.String) })).annotate({
        identifier: "HeartbeatEvent",
      });
    case 6:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ PlaybackInterruptionEvent: PlaybackInterruptionEvent }),
          /*@__PURE__*/ S.Struct({ TranscriptEvent: TranscriptEvent }),
          /*@__PURE__*/ S.Struct({ IntentResultEvent: IntentResultEvent }),
          /*@__PURE__*/ S.Struct({ TextResponseEvent: TextResponseEvent }),
          /*@__PURE__*/ S.Struct({ AudioResponseEvent: AudioResponseEvent }),
          /*@__PURE__*/ S.Struct({ HeartbeatEvent: HeartbeatEvent }),
          /*@__PURE__*/ S.Struct({
            AccessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ResourceNotFoundException: /*@__PURE__*/ S.suspend(
              () => ResourceNotFoundException,
            ).annotate({
              identifier: "ResourceNotFoundException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ValidationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ThrottlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            InternalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ConflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            DependencyFailedException: /*@__PURE__*/ S.suspend(
              () => DependencyFailedException,
            ).annotate({
              identifier: "DependencyFailedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            BadGatewayException: /*@__PURE__*/ S.suspend(() => BadGatewayException).annotate({
              identifier: "BadGatewayException",
            }),
          }),
        ]),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          responseEventStream: S.optional(StartConversationResponseEventStream).pipe(
            T.HttpPayload(),
          ),
        }),
      ).annotate({
        identifier: "StartConversationResponse",
      });
  }
}
