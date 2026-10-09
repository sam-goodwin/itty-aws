import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Lex Models V2",
  serviceShapeName: "LexModelBuildingServiceV2",
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
              `https://models-v2-lex-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://models-v2-lex-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://models-v2-lex.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://models-v2-lex.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class PreconditionFailedException
  extends /*@__PURE__*/ S.TaggedError<PreconditionFailedException>()(
    "PreconditionFailedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(412),
  ) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Id = string;
export type BotVersion = string;
export type LocaleId = string;
export type Phrase = string;
export type Weight = number;
export interface NewCustomVocabularyItem {
  phrase: string;
  weight?: number;
  displayAs?: string;
}
export type CreateCustomVocabularyItemsList = NewCustomVocabularyItem[];
export interface BatchCreateCustomVocabularyItemRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  customVocabularyItemList: NewCustomVocabularyItem[];
}
export type ItemId = string;
export type ErrorMessage = string;
export type ErrorCode =
  | "DUPLICATE_INPUT"
  | "RESOURCE_DOES_NOT_EXIST"
  | "RESOURCE_ALREADY_EXISTS"
  | "INTERNAL_SERVER_FAILURE"
  | (string & {});
export interface FailedCustomVocabularyItem {
  itemId?: string;
  errorMessage?: string;
  errorCode?: ErrorCode;
}
export type FailedCustomVocabularyItems = FailedCustomVocabularyItem[];
export interface CustomVocabularyItem {
  itemId: string;
  phrase: string;
  weight?: number;
  displayAs?: string;
}
export type CustomVocabularyItems = CustomVocabularyItem[];
export interface BatchCreateCustomVocabularyItemResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  errors?: FailedCustomVocabularyItem[];
  resources?: CustomVocabularyItem[];
}
export interface CustomVocabularyEntryId {
  itemId: string;
}
export type DeleteCustomVocabularyItemsList = CustomVocabularyEntryId[];
export interface BatchDeleteCustomVocabularyItemRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  customVocabularyItemList: CustomVocabularyEntryId[];
}
export interface BatchDeleteCustomVocabularyItemResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  errors?: FailedCustomVocabularyItem[];
  resources?: CustomVocabularyItem[];
}
export type UpdateCustomVocabularyItemsList = CustomVocabularyItem[];
export interface BatchUpdateCustomVocabularyItemRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  customVocabularyItemList: CustomVocabularyItem[];
}
export interface BatchUpdateCustomVocabularyItemResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  errors?: FailedCustomVocabularyItem[];
  resources?: CustomVocabularyItem[];
}
export type DraftBotVersion = string;
export interface BuildBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export type BotLocaleStatus =
  | "Creating"
  | "Building"
  | "Built"
  | "ReadyExpressTesting"
  | "Failed"
  | "Deleting"
  | "NotBuilt"
  | "Importing"
  | "Processing"
  | (string & {});
export interface BuildBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botLocaleStatus?: BotLocaleStatus;
  lastBuildSubmittedDateTime?: Date;
}
export type Name = string;
export type Description = string;
export type RoleArn = string;
export type ChildDirected = boolean;
export interface DataPrivacy {
  childDirected: boolean;
}
export type SessionTTL = number;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type BotType = "Bot" | "BotNetwork" | (string & {});
export type BotAliasId = string;
export type BotAliasName = string;
export interface BotMember {
  botMemberId: string;
  botMemberName: string;
  botMemberAliasId: string;
  botMemberAliasName: string;
  botMemberVersion: string;
}
export type BotMembers = BotMember[];
export type BoxedBoolean = boolean;
export interface ErrorLogSettings {
  enabled: boolean;
}
export interface CreateBotRequest {
  botName: string;
  description?: string;
  roleArn: string;
  dataPrivacy: DataPrivacy;
  idleSessionTTLInSeconds: number;
  botTags?: { [key: string]: string | undefined };
  testBotAliasTags?: { [key: string]: string | undefined };
  botType?: BotType;
  botMembers?: BotMember[];
  errorLogSettings?: ErrorLogSettings;
}
export type BotStatus =
  | "Creating"
  | "Available"
  | "Inactive"
  | "Deleting"
  | "Failed"
  | "Versioning"
  | "Importing"
  | "Updating"
  | (string & {});
export interface CreateBotResponse {
  botId?: string;
  botName?: string;
  description?: string;
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  idleSessionTTLInSeconds?: number;
  botStatus?: BotStatus;
  creationDateTime?: Date;
  botTags?: { [key: string]: string | undefined };
  testBotAliasTags?: { [key: string]: string | undefined };
  botType?: BotType;
  botMembers?: BotMember[];
  errorLogSettings?: ErrorLogSettings;
}
export type NumericalBotVersion = string;
export type LambdaARN = string;
export type CodeHookInterfaceVersion = string;
export interface LambdaCodeHook {
  lambdaARN: string;
  codeHookInterfaceVersion: string;
}
export interface CodeHookSpecification {
  lambdaCodeHook: LambdaCodeHook;
}
export interface BotAliasLocaleSettings {
  enabled: boolean;
  codeHookSpecification?: CodeHookSpecification;
}
export type BotAliasLocaleSettingsMap = { [key: string]: BotAliasLocaleSettings | undefined };
export type CloudWatchLogGroupArn = string;
export type LogPrefix = string;
export interface CloudWatchLogGroupLogDestination {
  cloudWatchLogGroupArn: string;
  logPrefix: string;
}
export interface TextLogDestination {
  cloudWatch: CloudWatchLogGroupLogDestination;
}
export interface TextLogSetting {
  enabled: boolean;
  destination: TextLogDestination;
  selectiveLoggingEnabled?: boolean;
}
export type TextLogSettingsList = TextLogSetting[];
export type KmsKeyArn = string;
export type S3BucketArn = string;
export interface S3BucketLogDestination {
  kmsKeyArn?: string;
  s3BucketArn: string;
  logPrefix: string;
}
export interface AudioLogDestination {
  s3Bucket: S3BucketLogDestination;
}
export interface AudioLogSetting {
  enabled: boolean;
  destination: AudioLogDestination;
  selectiveLoggingEnabled?: boolean;
}
export type AudioLogSettingsList = AudioLogSetting[];
export interface ConversationLogSettings {
  textLogSettings?: TextLogSetting[];
  audioLogSettings?: AudioLogSetting[];
}
export interface SentimentAnalysisSettings {
  detectSentiment: boolean;
}
export interface CreateBotAliasRequest {
  botAliasName: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | undefined };
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botId: string;
  tags?: { [key: string]: string | undefined };
}
export type BotAliasStatus = "Creating" | "Available" | "Deleting" | "Failed" | (string & {});
export interface CreateBotAliasResponse {
  botAliasId?: string;
  botAliasName?: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | undefined };
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botAliasStatus?: BotAliasStatus;
  botId?: string;
  creationDateTime?: Date;
  tags?: { [key: string]: string | undefined };
}
export type ConfidenceThreshold = number;
export type VoiceEngine = "standard" | "neural" | "long-form" | "generative" | (string & {});
export type VoiceId = string;
export interface VoiceSettings {
  engine?: VoiceEngine;
  voiceId: string;
}
export type BedrockModelArn = string;
export interface SpeechFoundationModel {
  modelArn: string;
  voiceId?: string;
}
export interface UnifiedSpeechSettings {
  speechFoundationModel: SpeechFoundationModel;
}
export type AudioFillerType =
  | "MELODY_CHIPPER_CHIME"
  | "MELODY_CURIOUS_CRAWL"
  | "MELODY_RISING_RIPPLE"
  | "MELODY_PATIENT_PING"
  | "MELODY_PONDERING_PONG"
  | "TYPING_KINETIC_KEYS"
  | "TYPING_QUIET_QWERTY"
  | (string & {});
export type AudioFillerDelayInMilliseconds = number;
export type AudioFillerDurationInMilliseconds = number;
export type AudioFillerDeliveryDelayInMilliseconds = number;
export interface AudioFillerSettings {
  enabled?: boolean;
  audioType?: AudioFillerType;
  startDelayInMilliseconds?: number;
  minimumPlayDurationInMilliseconds?: number;
  responseDeliveryDelayInMilliseconds?: number;
}
export type SpeechModelPreference = "Standard" | "Neural" | "Deepgram" | "Advanced" | (string & {});
export type SecretsManagerSecretArn = string;
export type DeepgramModelId = string;
export interface DeepgramSpeechModelConfig {
  apiTokenSecretArn: string;
  modelId?: string;
}
export interface SpeechModelConfig {
  deepgramConfig?: DeepgramSpeechModelConfig;
}
export interface SpeechRecognitionSettings {
  speechModelPreference?: SpeechModelPreference;
  speechModelConfig?: SpeechModelConfig;
}
export type Enabled = boolean;
export type BedrockGuardrailIdentifier = string;
export type BedrockGuardrailVersion = string;
export interface BedrockGuardrailConfiguration {
  identifier: string;
  version: string;
}
export type BedrockTraceStatus = "ENABLED" | "DISABLED" | (string & {});
export type BedrockModelCustomPrompt = string;
export interface BedrockModelSpecification {
  modelArn: string;
  guardrail?: BedrockGuardrailConfiguration;
  traceStatus?: BedrockTraceStatus;
  customPrompt?: string;
}
export interface SlotResolutionImprovementSpecification {
  enabled: boolean;
  bedrockModelSpecification?: BedrockModelSpecification;
}
export type AssistedNluMode = "Primary" | "Fallback" | (string & {});
export type MaxDisambiguationIntents = number;
export type CustomDisambiguationMessage = string;
export interface IntentDisambiguationSettings {
  enabled: boolean;
  maxDisambiguationIntents?: number;
  customDisambiguationMessage?: string;
}
export interface NluImprovementSpecification {
  enabled: boolean;
  assistedNluMode?: AssistedNluMode;
  intentDisambiguationSettings?: IntentDisambiguationSettings;
}
export interface RuntimeSettings {
  slotResolutionImprovement?: SlotResolutionImprovementSpecification;
  nluImprovement?: NluImprovementSpecification;
}
export interface DescriptiveBotBuilderSpecification {
  enabled: boolean;
  bedrockModelSpecification?: BedrockModelSpecification;
}
export interface SampleUtteranceGenerationSpecification {
  enabled: boolean;
  bedrockModelSpecification?: BedrockModelSpecification;
}
export interface BuildtimeSettings {
  descriptiveBotBuilder?: DescriptiveBotBuilderSpecification;
  sampleUtteranceGeneration?: SampleUtteranceGenerationSpecification;
}
export interface GenerativeAISettings {
  runtimeSettings?: RuntimeSettings;
  buildtimeSettings?: BuildtimeSettings;
}
export type SpeechDetectionSensitivity =
  | "Default"
  | "HighNoiseTolerance"
  | "MaximumNoiseTolerance"
  | (string & {});
export interface SpeakerDiarizationSettings {
  enabled: boolean;
}
export interface CreateBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  description?: string;
  nluIntentConfidenceThreshold: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  generativeAISettings?: GenerativeAISettings;
  speechDetectionSensitivity?: SpeechDetectionSensitivity;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
}
export type LocaleName = string;
export interface CreateBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeName?: string;
  localeId?: string;
  description?: string;
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  botLocaleStatus?: BotLocaleStatus;
  creationDateTime?: Date;
  generativeAISettings?: GenerativeAISettings;
  speechDetectionSensitivity?: SpeechDetectionSensitivity;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
}
export type ReplicaRegion = string;
export interface CreateBotReplicaRequest {
  botId: string;
  replicaRegion: string;
}
export type BotReplicaStatus = "Enabling" | "Enabled" | "Deleting" | "Failed" | (string & {});
export interface CreateBotReplicaResponse {
  botId?: string;
  replicaRegion?: string;
  sourceRegion?: string;
  creationDateTime?: Date;
  botReplicaStatus?: BotReplicaStatus;
}
export interface BotVersionLocaleDetails {
  sourceBotVersion: string;
}
export type BotVersionLocaleSpecification = { [key: string]: BotVersionLocaleDetails | undefined };
export interface CreateBotVersionRequest {
  botId: string;
  description?: string;
  botVersionLocaleSpecification: { [key: string]: BotVersionLocaleDetails | undefined };
}
export interface CreateBotVersionResponse {
  botId?: string;
  description?: string;
  botVersion?: string;
  botVersionLocaleSpecification?: { [key: string]: BotVersionLocaleDetails | undefined };
  botStatus?: BotStatus;
  creationDateTime?: Date;
}
export interface BotExportSpecification {
  botId: string;
  botVersion: string;
}
export interface BotLocaleExportSpecification {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface CustomVocabularyExportSpecification {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface TestSetExportSpecification {
  testSetId: string;
}
export interface ExportResourceSpecification {
  botExportSpecification?: BotExportSpecification;
  botLocaleExportSpecification?: BotLocaleExportSpecification;
  customVocabularyExportSpecification?: CustomVocabularyExportSpecification;
  testSetExportSpecification?: TestSetExportSpecification;
}
export type ImportExportFileFormat = "LexJson" | "TSV" | "CSV" | (string & {});
export type ImportExportFilePassword = string | redacted.Redacted<string>;
export interface CreateExportRequest {
  resourceSpecification: ExportResourceSpecification;
  fileFormat: ImportExportFileFormat;
  filePassword?: string | redacted.Redacted<string>;
}
export type ExportStatus = "InProgress" | "Completed" | "Failed" | "Deleting" | (string & {});
export interface CreateExportResponse {
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  fileFormat?: ImportExportFileFormat;
  exportStatus?: ExportStatus;
  creationDateTime?: Date;
}
export type DisplayName = string;
export type IntentSignature = string;
export type Utterance = string;
export interface SampleUtterance {
  utterance: string;
}
export type SampleUtterancesList = SampleUtterance[];
export interface DialogCodeHookSettings {
  enabled: boolean;
}
export type PlainTextMessageValue = string;
export interface PlainTextMessage {
  value: string;
}
export type CustomPayloadValue = string;
export interface CustomPayload {
  value: string;
}
export type SSMLMessageValue = string;
export interface SSMLMessage {
  value: string;
}
export type AttachmentTitle = string;
export type AttachmentUrl = string;
export type ButtonText = string;
export type ButtonValue = string;
export interface Button {
  text: string;
  value: string;
}
export type ButtonsList = Button[];
export interface ImageResponseCard {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  buttons?: Button[];
}
export interface Message {
  plainTextMessage?: PlainTextMessage;
  customPayload?: CustomPayload;
  ssmlMessage?: SSMLMessage;
  imageResponseCard?: ImageResponseCard;
}
export type MessageVariationsList = Message[];
export interface MessageGroup {
  message: Message;
  variations?: Message[];
}
export type MessageGroupsList = MessageGroup[];
export interface ResponseSpecification {
  messageGroups: MessageGroup[];
  allowInterrupt?: boolean;
}
export type DialogActionType =
  | "ElicitIntent"
  | "StartIntent"
  | "ElicitSlot"
  | "EvaluateConditional"
  | "InvokeDialogCodeHook"
  | "ConfirmIntent"
  | "FulfillIntent"
  | "CloseIntent"
  | "EndConversation"
  | (string & {});
export interface DialogAction {
  type: DialogActionType;
  slotToElicit?: string;
  suppressNextMessage?: boolean;
}
export type SlotShape = "Scalar" | "List" | (string & {});
export type NonEmptyString = string;
export interface SlotValue {
  interpretedValue?: string;
}
export type SlotValues = SlotValueOverride[];
export interface SlotValueOverride {
  shape?: SlotShape;
  value?: SlotValue;
  values?: SlotValueOverride[];
}
export type SlotValueOverrideMap = { [key: string]: SlotValueOverride | undefined };
export interface IntentOverride {
  name?: string;
  slots?: { [key: string]: SlotValueOverride | undefined };
}
export type StringMap = { [key: string]: string | undefined };
export interface DialogState {
  dialogAction?: DialogAction;
  intent?: IntentOverride;
  sessionAttributes?: { [key: string]: string | undefined };
}
export type ConditionExpression = string;
export interface Condition {
  expressionString: string;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  nextStep: DialogState;
  response?: ResponseSpecification;
}
export type ConditionalBranches = ConditionalBranch[];
export interface DefaultConditionalBranch {
  nextStep?: DialogState;
  response?: ResponseSpecification;
}
export interface ConditionalSpecification {
  active: boolean;
  conditionalBranches: ConditionalBranch[];
  defaultBranch: DefaultConditionalBranch;
}
export interface PostFulfillmentStatusSpecification {
  successResponse?: ResponseSpecification;
  failureResponse?: ResponseSpecification;
  timeoutResponse?: ResponseSpecification;
  successNextStep?: DialogState;
  successConditional?: ConditionalSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  timeoutNextStep?: DialogState;
  timeoutConditional?: ConditionalSpecification;
}
export type FulfillmentStartResponseDelay = number;
export interface FulfillmentStartResponseSpecification {
  delayInSeconds: number;
  messageGroups: MessageGroup[];
  allowInterrupt?: boolean;
}
export type FulfillmentUpdateResponseFrequency = number;
export interface FulfillmentUpdateResponseSpecification {
  frequencyInSeconds: number;
  messageGroups: MessageGroup[];
  allowInterrupt?: boolean;
}
export type FulfillmentTimeout = number;
export interface FulfillmentUpdatesSpecification {
  active: boolean;
  startResponse?: FulfillmentStartResponseSpecification;
  updateResponse?: FulfillmentUpdateResponseSpecification;
  timeoutInSeconds?: number;
}
export interface FulfillmentCodeHookSettings {
  enabled: boolean;
  postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
  fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
  active?: boolean;
}
export type PromptMaxRetries = number;
export type MessageSelectionStrategy = "Random" | "Ordered" | (string & {});
export type PromptAttempt =
  | "Initial"
  | "Retry1"
  | "Retry2"
  | "Retry3"
  | "Retry4"
  | "Retry5"
  | (string & {});
export interface AllowedInputTypes {
  allowAudioInput: boolean;
  allowDTMFInput: boolean;
}
export type TimeInMilliSeconds = number;
export interface AudioSpecification {
  maxLengthMs: number;
  endTimeoutMs: number;
}
export type MaxUtteranceDigits = number;
export type DTMFCharacter = string;
export interface DTMFSpecification {
  maxLength: number;
  endTimeoutMs: number;
  deletionCharacter: string;
  endCharacter: string;
}
export interface AudioAndDTMFInputSpecification {
  startTimeoutMs: number;
  audioSpecification?: AudioSpecification;
  dtmfSpecification?: DTMFSpecification;
}
export interface TextInputSpecification {
  startTimeoutMs: number;
}
export interface PromptAttemptSpecification {
  allowInterrupt?: boolean;
  allowedInputTypes: AllowedInputTypes;
  audioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification;
  textInputSpecification?: TextInputSpecification;
}
export type PromptAttemptsSpecificationMap = {
  [key in PromptAttempt]?: PromptAttemptSpecification;
};
export interface PromptSpecification {
  messageGroups: MessageGroup[];
  maxRetries: number;
  allowInterrupt?: boolean;
  messageSelectionStrategy?: MessageSelectionStrategy;
  promptAttemptsSpecification?: { [key: string]: PromptAttemptSpecification | undefined };
}
export interface PostDialogCodeHookInvocationSpecification {
  successResponse?: ResponseSpecification;
  successNextStep?: DialogState;
  successConditional?: ConditionalSpecification;
  failureResponse?: ResponseSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  timeoutResponse?: ResponseSpecification;
  timeoutNextStep?: DialogState;
  timeoutConditional?: ConditionalSpecification;
}
export interface DialogCodeHookInvocationSetting {
  enableCodeHookInvocation: boolean;
  active: boolean;
  invocationLabel?: string;
  postCodeHookSpecification: PostDialogCodeHookInvocationSpecification;
}
export interface ElicitationCodeHookInvocationSetting {
  enableCodeHookInvocation: boolean;
  invocationLabel?: string;
}
export interface IntentConfirmationSetting {
  promptSpecification: PromptSpecification;
  declinationResponse?: ResponseSpecification;
  active?: boolean;
  confirmationResponse?: ResponseSpecification;
  confirmationNextStep?: DialogState;
  confirmationConditional?: ConditionalSpecification;
  declinationNextStep?: DialogState;
  declinationConditional?: ConditionalSpecification;
  failureResponse?: ResponseSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  codeHook?: DialogCodeHookInvocationSetting;
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
}
export interface IntentClosingSetting {
  closingResponse?: ResponseSpecification;
  active?: boolean;
  nextStep?: DialogState;
  conditional?: ConditionalSpecification;
}
export interface InputContext {
  name: string;
}
export type InputContextsList = InputContext[];
export type ContextTimeToLiveInSeconds = number;
export type ContextTurnsToLive = number;
export interface OutputContext {
  name: string;
  timeToLiveInSeconds: number;
  turnsToLive: number;
}
export type OutputContextsList = OutputContext[];
export type KendraIndexArn = string;
export type QueryFilterString = string;
export interface KendraConfiguration {
  kendraIndex: string;
  queryFilterStringEnabled?: boolean;
  queryFilterString?: string;
}
export interface InitialResponseSetting {
  initialResponse?: ResponseSpecification;
  nextStep?: DialogState;
  conditional?: ConditionalSpecification;
  codeHook?: DialogCodeHookInvocationSetting;
}
export type DomainEndpoint = string;
export type OSIndexName = string;
export type QuestionField = string;
export type AnswerField = string;
export interface ExactResponseFields {
  questionField: string;
  answerField: string;
}
export type IncludeField = string;
export type OSIncludeFields = string[];
export interface OpensearchConfiguration {
  domainEndpoint: string;
  indexName: string;
  exactResponse?: boolean;
  exactResponseFields?: ExactResponseFields;
  includeFields?: string[];
}
export interface QnAKendraConfiguration {
  kendraIndex: string;
  queryFilterStringEnabled?: boolean;
  queryFilterString?: string;
  exactResponse?: boolean;
}
export type BedrockKnowledgeBaseArn = string;
export interface BedrockKnowledgeStoreExactResponseFields {
  answerField?: string;
}
export interface BedrockKnowledgeStoreConfiguration {
  bedrockKnowledgeBaseArn: string;
  exactResponse?: boolean;
  exactResponseFields?: BedrockKnowledgeStoreExactResponseFields;
}
export interface DataSourceConfiguration {
  opensearchConfiguration?: OpensearchConfiguration;
  kendraConfiguration?: QnAKendraConfiguration;
  bedrockKnowledgeStoreConfiguration?: BedrockKnowledgeStoreConfiguration;
}
export interface QnAIntentConfiguration {
  dataSourceConfiguration?: DataSourceConfiguration;
  bedrockModelConfiguration?: BedrockModelSpecification;
}
export type QInConnectAssistantARN = string;
export interface QInConnectAssistantConfiguration {
  assistantArn: string;
}
export interface QInConnectIntentConfiguration {
  qInConnectAssistantConfiguration?: QInConnectAssistantConfiguration;
}
export interface CreateIntentRequest {
  intentName: string;
  intentDisplayName?: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: SampleUtterance[];
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: InputContext[];
  outputContexts?: OutputContext[];
  kendraConfiguration?: KendraConfiguration;
  botId: string;
  botVersion: string;
  localeId: string;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export interface CreateIntentResponse {
  intentId?: string;
  intentName?: string;
  intentDisplayName?: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: SampleUtterance[];
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: InputContext[];
  outputContexts?: OutputContext[];
  kendraConfiguration?: KendraConfiguration;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export type AmazonResourceName = string;
export type Policy = string;
export interface CreateResourcePolicyRequest {
  resourceArn: string;
  policy: string;
}
export type RevisionId = string;
export interface CreateResourcePolicyResponse {
  resourceArn?: string;
  revisionId?: string;
}
export type Effect = "Allow" | "Deny" | (string & {});
export type ServicePrincipal = string;
export type PrincipalArn = string;
export interface Principal {
  service?: string;
  arn?: string;
}
export type PrincipalList = Principal[];
export type Operation = string;
export type OperationList = string[];
export type ConditionOperator = string;
export type ConditionKey = string;
export type ConditionValue = string;
export type ConditionKeyValueMap = { [key: string]: string | undefined };
export type ConditionMap = { [key: string]: { [key: string]: string | undefined } | undefined };
export interface CreateResourcePolicyStatementRequest {
  resourceArn: string;
  statementId: string;
  effect: Effect;
  principal: Principal[];
  action: string[];
  condition?: { [key: string]: { [key: string]: string | undefined } | undefined };
  expectedRevisionId?: string;
}
export interface CreateResourcePolicyStatementResponse {
  resourceArn?: string;
  revisionId?: string;
}
export type BuiltInOrCustomSlotTypeId = string;
export type SlotDefaultValueString = string;
export interface SlotDefaultValue {
  defaultValue: string;
}
export type SlotDefaultValueList = SlotDefaultValue[];
export interface SlotDefaultValueSpecification {
  defaultValueList: SlotDefaultValue[];
}
export type SlotConstraint = "Required" | "Optional" | (string & {});
export type StillWaitingResponseFrequency = number;
export type StillWaitingResponseTimeout = number;
export interface StillWaitingResponseSpecification {
  messageGroups: MessageGroup[];
  frequencyInSeconds: number;
  timeoutInSeconds: number;
  allowInterrupt?: boolean;
}
export interface WaitAndContinueSpecification {
  waitingResponse: ResponseSpecification;
  continueResponse: ResponseSpecification;
  stillWaitingResponse?: StillWaitingResponseSpecification;
  active?: boolean;
}
export interface SlotCaptureSetting {
  captureResponse?: ResponseSpecification;
  captureNextStep?: DialogState;
  captureConditional?: ConditionalSpecification;
  failureResponse?: ResponseSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  codeHook?: DialogCodeHookInvocationSetting;
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
}
export type SlotResolutionStrategy = "EnhancedFallback" | "Default" | (string & {});
export interface SlotResolutionSetting {
  slotResolutionStrategy: SlotResolutionStrategy;
}
export interface SlotValueElicitationSetting {
  defaultValueSpecification?: SlotDefaultValueSpecification;
  slotConstraint: SlotConstraint;
  promptSpecification?: PromptSpecification;
  sampleUtterances?: SampleUtterance[];
  waitAndContinueSpecification?: WaitAndContinueSpecification;
  slotCaptureSetting?: SlotCaptureSetting;
  slotResolutionSetting?: SlotResolutionSetting;
}
export type ObfuscationSettingType = "None" | "DefaultObfuscation" | (string & {});
export interface ObfuscationSetting {
  obfuscationSettingType: ObfuscationSettingType;
}
export interface MultipleValuesSetting {
  allowMultipleValues?: boolean;
}
export type SubSlotExpression = string;
export interface SubSlotValueElicitationSetting {
  defaultValueSpecification?: SlotDefaultValueSpecification;
  promptSpecification: PromptSpecification;
  sampleUtterances?: SampleUtterance[];
  waitAndContinueSpecification?: WaitAndContinueSpecification;
}
export interface Specifications {
  slotTypeId: string;
  valueElicitationSetting: SubSlotValueElicitationSetting;
}
export type SubSlotSpecificationMap = { [key: string]: Specifications | undefined };
export interface SubSlotSetting {
  expression?: string;
  slotSpecifications?: { [key: string]: Specifications | undefined };
}
export interface CreateSlotRequest {
  slotName: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export interface CreateSlotResponse {
  slotId?: string;
  slotName?: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting?: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  creationDateTime?: Date;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export type Value = string;
export interface SampleValue {
  value: string;
}
export type SynonymList = SampleValue[];
export interface SlotTypeValue {
  sampleValue?: SampleValue;
  synonyms?: SampleValue[];
}
export type SlotTypeValues = SlotTypeValue[];
export type SlotValueResolutionStrategy =
  | "OriginalValue"
  | "TopResolution"
  | "Concatenation"
  | (string & {});
export type RegexPattern = string;
export interface SlotValueRegexFilter {
  pattern: string;
}
export type AudioRecognitionStrategy = "UseSlotValuesAsCustomVocabulary" | (string & {});
export interface AdvancedRecognitionSetting {
  audioRecognitionStrategy?: AudioRecognitionStrategy;
}
export interface SlotValueSelectionSetting {
  resolutionStrategy: SlotValueResolutionStrategy;
  regexFilter?: SlotValueRegexFilter;
  advancedRecognitionSetting?: AdvancedRecognitionSetting;
}
export type SlotTypeSignature = string;
export type S3BucketName = string;
export type S3ObjectPath = string;
export interface GrammarSlotTypeSource {
  s3BucketName: string;
  s3ObjectKey: string;
  kmsKeyArn?: string;
}
export interface GrammarSlotTypeSetting {
  source?: GrammarSlotTypeSource;
}
export interface ExternalSourceSetting {
  grammarSlotTypeSetting?: GrammarSlotTypeSetting;
}
export interface SubSlotTypeComposition {
  name: string;
  slotTypeId: string;
}
export type SubSlotTypeList = SubSlotTypeComposition[];
export interface CompositeSlotTypeSetting {
  subSlots?: SubSlotTypeComposition[];
}
export interface CreateSlotTypeRequest {
  slotTypeName: string;
  description?: string;
  slotTypeValues?: SlotTypeValue[];
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId: string;
  botVersion: string;
  localeId: string;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface CreateSlotTypeResponse {
  slotTypeId?: string;
  slotTypeName?: string;
  description?: string;
  slotTypeValues?: SlotTypeValue[];
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface TestSetDiscrepancyReportBotAliasTarget {
  botId: string;
  botAliasId: string;
  localeId: string;
}
export interface TestSetDiscrepancyReportResourceTarget {
  botAliasTarget?: TestSetDiscrepancyReportBotAliasTarget;
}
export interface CreateTestSetDiscrepancyReportRequest {
  testSetId: string;
  target: TestSetDiscrepancyReportResourceTarget;
}
export interface CreateTestSetDiscrepancyReportResponse {
  testSetDiscrepancyReportId?: string;
  creationDateTime?: Date;
  testSetId?: string;
  target?: TestSetDiscrepancyReportResourceTarget;
}
export interface CreateUploadUrlRequest {}
export type PresignedS3Url = string;
export interface CreateUploadUrlResponse {
  importId?: string;
  uploadUrl?: string;
}
export type SkipResourceInUseCheck = boolean;
export interface DeleteBotRequest {
  botId: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteBotResponse {
  botId?: string;
  botStatus?: BotStatus;
}
export interface DeleteBotAliasRequest {
  botAliasId: string;
  botId: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteBotAliasResponse {
  botAliasId?: string;
  botId?: string;
  botAliasStatus?: BotAliasStatus;
}
export type UUID = string;
export interface DeleteBotAnalyzerRecommendationRequest {
  botId: string;
  botAnalyzerRequestId: string;
}
export interface DeleteBotAnalyzerRecommendationResponse {}
export interface DeleteBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DeleteBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botLocaleStatus?: BotLocaleStatus;
}
export interface DeleteBotReplicaRequest {
  botId: string;
  replicaRegion: string;
}
export interface DeleteBotReplicaResponse {
  botId?: string;
  replicaRegion?: string;
  botReplicaStatus?: BotReplicaStatus;
}
export interface DeleteBotVersionRequest {
  botId: string;
  botVersion: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteBotVersionResponse {
  botId?: string;
  botVersion?: string;
  botStatus?: BotStatus;
}
export interface DeleteCustomVocabularyRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export type CustomVocabularyStatus =
  | "Ready"
  | "Deleting"
  | "Exporting"
  | "Importing"
  | "Creating"
  | (string & {});
export interface DeleteCustomVocabularyResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  customVocabularyStatus?: CustomVocabularyStatus;
}
export interface DeleteExportRequest {
  exportId: string;
}
export interface DeleteExportResponse {
  exportId?: string;
  exportStatus?: ExportStatus;
}
export interface DeleteImportRequest {
  importId: string;
}
export type ImportStatus = "InProgress" | "Completed" | "Failed" | "Deleting" | (string & {});
export interface DeleteImportResponse {
  importId?: string;
  importStatus?: ImportStatus;
}
export interface DeleteIntentRequest {
  intentId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DeleteIntentResponse {}
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
  expectedRevisionId?: string;
}
export interface DeleteResourcePolicyResponse {
  resourceArn?: string;
  revisionId?: string;
}
export interface DeleteResourcePolicyStatementRequest {
  resourceArn: string;
  statementId: string;
  expectedRevisionId?: string;
}
export interface DeleteResourcePolicyStatementResponse {
  resourceArn?: string;
  revisionId?: string;
}
export interface DeleteSlotRequest {
  slotId: string;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
}
export interface DeleteSlotResponse {}
export interface DeleteSlotTypeRequest {
  slotTypeId: string;
  botId: string;
  botVersion: string;
  localeId: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteSlotTypeResponse {}
export interface DeleteTestSetRequest {
  testSetId: string;
}
export interface DeleteTestSetResponse {}
export type SessionId = string;
export interface DeleteUtterancesRequest {
  botId: string;
  localeId?: string;
  sessionId?: string;
}
export interface DeleteUtterancesResponse {}
export interface DescribeBotRequest {
  botId: string;
}
export type FailureReason = string;
export type FailureReasons = string[];
export interface DescribeBotResponse {
  botId?: string;
  botName?: string;
  description?: string;
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  idleSessionTTLInSeconds?: number;
  botStatus?: BotStatus;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  botType?: BotType;
  botMembers?: BotMember[];
  failureReasons?: string[];
  errorLogSettings?: ErrorLogSettings;
}
export interface DescribeBotAliasRequest {
  botAliasId: string;
  botId: string;
}
export interface BotAliasHistoryEvent {
  botVersion?: string;
  startDate?: Date;
  endDate?: Date;
}
export type BotAliasHistoryEventsList = BotAliasHistoryEvent[];
export interface ParentBotNetwork {
  botId: string;
  botVersion: string;
}
export type ParentBotNetworks = ParentBotNetwork[];
export interface DescribeBotAliasResponse {
  botAliasId?: string;
  botAliasName?: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | undefined };
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botAliasHistoryEvents?: BotAliasHistoryEvent[];
  botAliasStatus?: BotAliasStatus;
  botId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  parentBotNetworks?: ParentBotNetwork[];
}
export type NextToken = string;
export type MaxResults = number;
export interface DescribeBotAnalyzerRecommendationRequest {
  botId: string;
  botAnalyzerRequestId: string;
  nextToken?: string;
  maxResults?: number;
}
export type BotAnalyzerStatus =
  | "Processing"
  | "Available"
  | "Failed"
  | "Stopping"
  | "Stopped"
  | (string & {});
export interface IssueLocation {
  botLocale?: string;
  intentId?: string;
  slotId?: string;
}
export type Priority = "High" | "Medium" | "Low" | (string & {});
export interface BotAnalyzerRecommendation {
  issueLocation: IssueLocation;
  priority: Priority;
  issueDescription: string;
  proposedFix: string;
}
export type BotAnalyzerRecommendationList = BotAnalyzerRecommendation[];
export interface DescribeBotAnalyzerRecommendationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botAnalyzerStatus?: BotAnalyzerStatus;
  creationDateTime?: Date;
  botAnalyzerRecommendationList?: BotAnalyzerRecommendation[];
  nextToken?: string;
}
export interface DescribeBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export type ResourceCount = number;
export type BotLocaleHistoryEventDescription = string;
export interface BotLocaleHistoryEvent {
  event: string;
  eventDate: Date;
}
export type BotLocaleHistoryEventsList = BotLocaleHistoryEvent[];
export type RecommendedAction = string;
export type RecommendedActions = string[];
export interface DescribeBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  localeName?: string;
  description?: string;
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  intentsCount?: number;
  slotTypesCount?: number;
  botLocaleStatus?: BotLocaleStatus;
  failureReasons?: string[];
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  lastBuildSubmittedDateTime?: Date;
  botLocaleHistoryEvents?: BotLocaleHistoryEvent[];
  recommendedActions?: string[];
  generativeAISettings?: GenerativeAISettings;
  speechDetectionSensitivity?: SpeechDetectionSensitivity;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
}
export interface DescribeBotRecommendationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
}
export type BotRecommendationStatus =
  | "Processing"
  | "Deleting"
  | "Deleted"
  | "Downloading"
  | "Updating"
  | "Available"
  | "Failed"
  | "Stopping"
  | "Stopped"
  | (string & {});
export type ObjectPrefix = string;
export type ObjectPrefixes = string[];
export interface PathFormat {
  objectPrefixes?: string[];
}
export type TranscriptFormat = "Lex" | (string & {});
export interface DateRangeFilter {
  startDateTime: Date;
  endDateTime: Date;
}
export interface LexTranscriptFilter {
  dateRangeFilter?: DateRangeFilter;
}
export interface TranscriptFilter {
  lexTranscriptFilter?: LexTranscriptFilter;
}
export interface S3BucketTranscriptSource {
  s3BucketName: string;
  pathFormat?: PathFormat;
  transcriptFormat: TranscriptFormat;
  transcriptFilter?: TranscriptFilter;
  kmsKeyArn?: string;
}
export interface TranscriptSourceSetting {
  s3BucketTranscriptSource?: S3BucketTranscriptSource;
}
export type FilePassword = string | redacted.Redacted<string>;
export interface EncryptionSetting {
  kmsKeyArn?: string;
  botLocaleExportPassword?: string | redacted.Redacted<string>;
  associatedTranscriptsPassword?: string | redacted.Redacted<string>;
}
export type Count = number;
export interface IntentStatistics {
  discoveredIntentCount?: number;
}
export interface SlotTypeStatistics {
  discoveredSlotTypeCount?: number;
}
export interface BotRecommendationResultStatistics {
  intents?: IntentStatistics;
  slotTypes?: SlotTypeStatistics;
}
export interface BotRecommendationResults {
  botLocaleExportUrl?: string;
  associatedTranscriptsUrl?: string;
  statistics?: BotRecommendationResultStatistics;
}
export interface DescribeBotRecommendationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationStatus?: BotRecommendationStatus;
  botRecommendationId?: string;
  failureReasons?: string[];
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  transcriptSourceSetting?: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
  botRecommendationResults?: BotRecommendationResults;
}
export interface DescribeBotReplicaRequest {
  botId: string;
  replicaRegion: string;
}
export interface DescribeBotReplicaResponse {
  botId?: string;
  replicaRegion?: string;
  sourceRegion?: string;
  creationDateTime?: Date;
  botReplicaStatus?: BotReplicaStatus;
  failureReasons?: string[];
}
export interface DescribeBotResourceGenerationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  generationId: string;
}
export type GenerationStatus = "Failed" | "Complete" | "InProgress" | (string & {});
export type GenerationInput = string;
export interface DescribeBotResourceGenerationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  generationId?: string;
  failureReasons?: string[];
  generationStatus?: GenerationStatus;
  generationInputPrompt?: string;
  generatedBotLocaleUrl?: string;
  creationDateTime?: Date;
  modelArn?: string;
  lastUpdatedDateTime?: Date;
}
export interface DescribeBotVersionRequest {
  botId: string;
  botVersion: string;
}
export interface DescribeBotVersionResponse {
  botId?: string;
  botName?: string;
  botVersion?: string;
  description?: string;
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  idleSessionTTLInSeconds?: number;
  botStatus?: BotStatus;
  failureReasons?: string[];
  creationDateTime?: Date;
  parentBotNetworks?: ParentBotNetwork[];
  botType?: BotType;
  botMembers?: BotMember[];
}
export interface DescribeCustomVocabularyMetadataRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DescribeCustomVocabularyMetadataResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  customVocabularyStatus?: CustomVocabularyStatus;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export interface DescribeExportRequest {
  exportId: string;
}
export interface DescribeExportResponse {
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  fileFormat?: ImportExportFileFormat;
  exportStatus?: ExportStatus;
  failureReasons?: string[];
  downloadUrl?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export interface DescribeImportRequest {
  importId: string;
}
export interface BotImportSpecification {
  botName: string;
  roleArn: string;
  dataPrivacy: DataPrivacy;
  errorLogSettings?: ErrorLogSettings;
  idleSessionTTLInSeconds?: number;
  botTags?: { [key: string]: string | undefined };
  testBotAliasTags?: { [key: string]: string | undefined };
}
export interface BotLocaleImportSpecification {
  botId: string;
  botVersion: string;
  localeId: string;
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  speechDetectionSensitivity?: SpeechDetectionSensitivity;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
}
export interface CustomVocabularyImportSpecification {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface TestSetStorageLocation {
  s3BucketName: string;
  s3Path: string;
  kmsKeyArn?: string;
}
export interface TestSetImportInputLocation {
  s3BucketName: string;
  s3Path: string;
}
export type TestSetModality = "Text" | "Audio" | (string & {});
export interface TestSetImportResourceSpecification {
  testSetName: string;
  description?: string;
  roleArn: string;
  storageLocation: TestSetStorageLocation;
  importInputLocation: TestSetImportInputLocation;
  modality: TestSetModality;
  testSetTags?: { [key: string]: string | undefined };
}
export interface ImportResourceSpecification {
  botImportSpecification?: BotImportSpecification;
  botLocaleImportSpecification?: BotLocaleImportSpecification;
  customVocabularyImportSpecification?: CustomVocabularyImportSpecification;
  testSetImportResourceSpecification?: TestSetImportResourceSpecification;
}
export type ImportedResourceId = string;
export type MergeStrategy = "Overwrite" | "FailOnConflict" | "Append" | (string & {});
export interface DescribeImportResponse {
  importId?: string;
  resourceSpecification?: ImportResourceSpecification;
  importedResourceId?: string;
  importedResourceName?: string;
  mergeStrategy?: MergeStrategy;
  importStatus?: ImportStatus;
  failureReasons?: string[];
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export interface DescribeIntentRequest {
  intentId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export type PriorityValue = number;
export interface SlotPriority {
  priority: number;
  slotId: string;
}
export type SlotPrioritiesList = SlotPriority[];
export interface DescribeIntentResponse {
  intentId?: string;
  intentName?: string;
  intentDisplayName?: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: SampleUtterance[];
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  slotPriorities?: SlotPriority[];
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: InputContext[];
  outputContexts?: OutputContext[];
  kendraConfiguration?: KendraConfiguration;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export interface DescribeResourcePolicyRequest {
  resourceArn: string;
}
export interface DescribeResourcePolicyResponse {
  resourceArn?: string;
  policy?: string;
  revisionId?: string;
}
export interface DescribeSlotRequest {
  slotId: string;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
}
export interface DescribeSlotResponse {
  slotId?: string;
  slotName?: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting?: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export interface DescribeSlotTypeRequest {
  slotTypeId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DescribeSlotTypeResponse {
  slotTypeId?: string;
  slotTypeName?: string;
  description?: string;
  slotTypeValues?: SlotTypeValue[];
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface DescribeTestExecutionRequest {
  testExecutionId: string;
}
export type TestExecutionStatus =
  | "Pending"
  | "Waiting"
  | "InProgress"
  | "Completed"
  | "Failed"
  | "Stopping"
  | "Stopped"
  | (string & {});
export interface BotAliasTestExecutionTarget {
  botId: string;
  botAliasId: string;
  localeId: string;
}
export interface TestExecutionTarget {
  botAliasTarget?: BotAliasTestExecutionTarget;
}
export type TestExecutionApiMode = "Streaming" | "NonStreaming" | (string & {});
export type TestExecutionModality = "Text" | "Audio" | (string & {});
export interface DescribeTestExecutionResponse {
  testExecutionId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  testExecutionStatus?: TestExecutionStatus;
  testSetId?: string;
  testSetName?: string;
  target?: TestExecutionTarget;
  apiMode?: TestExecutionApiMode;
  testExecutionModality?: TestExecutionModality;
  failureReasons?: string[];
}
export interface DescribeTestSetRequest {
  testSetId: string;
}
export type TestSetStatus =
  | "Importing"
  | "PendingAnnotation"
  | "Deleting"
  | "ValidationError"
  | "Ready"
  | (string & {});
export interface DescribeTestSetResponse {
  testSetId?: string;
  testSetName?: string;
  description?: string;
  modality?: TestSetModality;
  status?: TestSetStatus;
  roleArn?: string;
  numTurns?: number;
  storageLocation?: TestSetStorageLocation;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export interface DescribeTestSetDiscrepancyReportRequest {
  testSetDiscrepancyReportId: string;
}
export type TestSetDiscrepancyReportStatus = "InProgress" | "Completed" | "Failed" | (string & {});
export interface TestSetIntentDiscrepancyItem {
  intentName: string;
  errorMessage: string;
}
export type TestSetIntentDiscrepancyList = TestSetIntentDiscrepancyItem[];
export interface TestSetSlotDiscrepancyItem {
  intentName: string;
  slotName: string;
  errorMessage: string;
}
export type TestSetSlotDiscrepancyList = TestSetSlotDiscrepancyItem[];
export interface TestSetDiscrepancyErrors {
  intentDiscrepancies: TestSetIntentDiscrepancyItem[];
  slotDiscrepancies: TestSetSlotDiscrepancyItem[];
}
export interface DescribeTestSetDiscrepancyReportResponse {
  testSetDiscrepancyReportId?: string;
  testSetId?: string;
  creationDateTime?: Date;
  target?: TestSetDiscrepancyReportResourceTarget;
  testSetDiscrepancyReportStatus?: TestSetDiscrepancyReportStatus;
  lastUpdatedDataTime?: Date;
  testSetDiscrepancyTopErrors?: TestSetDiscrepancyErrors;
  testSetDiscrepancyRawOutputUrl?: string;
  failureReasons?: string[];
}
export interface DescribeTestSetGenerationRequest {
  testSetGenerationId: string;
}
export type TestSetGenerationStatus = "Generating" | "Ready" | "Failed" | "Pending" | (string & {});
export type ConversationLogsInputModeFilter = "Speech" | "Text" | (string & {});
export interface ConversationLogsDataSourceFilterBy {
  startTime: Date;
  endTime: Date;
  inputMode: ConversationLogsInputModeFilter;
}
export interface ConversationLogsDataSource {
  botId: string;
  botAliasId: string;
  localeId: string;
  filter: ConversationLogsDataSourceFilterBy;
}
export interface TestSetGenerationDataSource {
  conversationLogsDataSource?: ConversationLogsDataSource;
}
export interface DescribeTestSetGenerationResponse {
  testSetGenerationId?: string;
  testSetGenerationStatus?: TestSetGenerationStatus;
  failureReasons?: string[];
  testSetId?: string;
  testSetName?: string;
  description?: string;
  storageLocation?: TestSetStorageLocation;
  generationDataSource?: TestSetGenerationDataSource;
  roleArn?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export interface GenerateBotElementRequest {
  intentId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface GenerateBotElementResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  sampleUtterances?: SampleUtterance[];
}
export interface GetTestExecutionArtifactsUrlRequest {
  testExecutionId: string;
}
export interface GetTestExecutionArtifactsUrlResponse {
  testExecutionId?: string;
  downloadArtifactsUrl?: string;
}
export type TimeDimension = "Hours" | "Days" | "Weeks" | (string & {});
export type TimeValue = number;
export interface RelativeAggregationDuration {
  timeDimension: TimeDimension;
  timeValue: number;
}
export interface UtteranceAggregationDuration {
  relativeAggregationDuration: RelativeAggregationDuration;
}
export type AggregatedUtterancesSortAttribute = "HitCount" | "MissedCount" | (string & {});
export type SortOrder = "Ascending" | "Descending" | (string & {});
export interface AggregatedUtterancesSortBy {
  attribute: AggregatedUtterancesSortAttribute;
  order: SortOrder;
}
export type AggregatedUtterancesFilterName = "Utterance" | (string & {});
export type FilterValue = string;
export type FilterValues = string[];
export type AggregatedUtterancesFilterOperator = "CO" | "EQ" | (string & {});
export interface AggregatedUtterancesFilter {
  name: AggregatedUtterancesFilterName;
  values: string[];
  operator: AggregatedUtterancesFilterOperator;
}
export type AggregatedUtterancesFilters = AggregatedUtterancesFilter[];
export interface ListAggregatedUtterancesRequest {
  botId: string;
  botAliasId?: string;
  botVersion?: string;
  localeId: string;
  aggregationDuration: UtteranceAggregationDuration;
  sortBy?: AggregatedUtterancesSortBy;
  filters?: AggregatedUtterancesFilter[];
  maxResults?: number;
  nextToken?: string;
}
export type HitCount = number;
export type MissedCount = number;
export interface AggregatedUtterancesSummary {
  utterance?: string;
  hitCount?: number;
  missedCount?: number;
  utteranceFirstRecordedInAggregationDuration?: Date;
  utteranceLastRecordedInAggregationDuration?: Date;
  containsDataFromDeletedResources?: boolean;
}
export type AggregatedUtterancesSummaryList = AggregatedUtterancesSummary[];
export interface ListAggregatedUtterancesResponse {
  botId?: string;
  botAliasId?: string;
  botVersion?: string;
  localeId?: string;
  aggregationDuration?: UtteranceAggregationDuration;
  aggregationWindowStartTime?: Date;
  aggregationWindowEndTime?: Date;
  aggregationLastRefreshedDateTime?: Date;
  aggregatedUtterancesSummaries?: AggregatedUtterancesSummary[];
  nextToken?: string;
}
export interface ListBotAliasesRequest {
  botId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface BotAliasSummary {
  botAliasId?: string;
  botAliasName?: string;
  description?: string;
  botVersion?: string;
  botAliasStatus?: BotAliasStatus;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export type BotAliasSummaryList = BotAliasSummary[];
export interface ListBotAliasesResponse {
  botAliasSummaries?: BotAliasSummary[];
  nextToken?: string;
  botId?: string;
}
export interface ListBotAliasReplicasRequest {
  botId: string;
  replicaRegion: string;
  maxResults?: number;
  nextToken?: string;
}
export type BotAliasReplicationStatus =
  | "Creating"
  | "Updating"
  | "Available"
  | "Deleting"
  | "Failed"
  | (string & {});
export interface BotAliasReplicaSummary {
  botAliasId?: string;
  botAliasReplicationStatus?: BotAliasReplicationStatus;
  botVersion?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  failureReasons?: string[];
}
export type BotAliasReplicaSummaryList = BotAliasReplicaSummary[];
export interface ListBotAliasReplicasResponse {
  botId?: string;
  sourceRegion?: string;
  replicaRegion?: string;
  botAliasReplicaSummaries?: BotAliasReplicaSummary[];
  nextToken?: string;
}
export interface ListBotAnalyzerHistoryRequest {
  botId: string;
  localeId?: string;
  botVersion?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface BotAnalyzerHistorySummary {
  botAnalyzerStatus: BotAnalyzerStatus;
  creationDateTime?: Date;
  botAnalyzerRequestId: string;
}
export type BotAnalyzerHistoryList = BotAnalyzerHistorySummary[];
export interface ListBotAnalyzerHistoryResponse {
  botId?: string;
  localeId?: string;
  botVersion?: string;
  botAnalyzerHistoryList?: BotAnalyzerHistorySummary[];
  nextToken?: string;
}
export type BotLocaleSortAttribute = "BotLocaleName" | (string & {});
export interface BotLocaleSortBy {
  attribute: BotLocaleSortAttribute;
  order: SortOrder;
}
export type BotLocaleFilterName = "BotLocaleName" | (string & {});
export type BotLocaleFilterOperator = "CO" | "EQ" | (string & {});
export interface BotLocaleFilter {
  name: BotLocaleFilterName;
  values: string[];
  operator: BotLocaleFilterOperator;
}
export type BotLocaleFilters = BotLocaleFilter[];
export interface ListBotLocalesRequest {
  botId: string;
  botVersion: string;
  sortBy?: BotLocaleSortBy;
  filters?: BotLocaleFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface BotLocaleSummary {
  localeId?: string;
  localeName?: string;
  description?: string;
  botLocaleStatus?: BotLocaleStatus;
  lastUpdatedDateTime?: Date;
  lastBuildSubmittedDateTime?: Date;
}
export type BotLocaleSummaryList = BotLocaleSummary[];
export interface ListBotLocalesResponse {
  botId?: string;
  botVersion?: string;
  nextToken?: string;
  botLocaleSummaries?: BotLocaleSummary[];
}
export interface ListBotRecommendationsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface BotRecommendationSummary {
  botRecommendationStatus: BotRecommendationStatus;
  botRecommendationId: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export type BotRecommendationSummaryList = BotRecommendationSummary[];
export interface ListBotRecommendationsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationSummaries?: BotRecommendationSummary[];
  nextToken?: string;
}
export interface ListBotReplicasRequest {
  botId: string;
}
export interface BotReplicaSummary {
  replicaRegion?: string;
  creationDateTime?: Date;
  botReplicaStatus?: BotReplicaStatus;
  failureReasons?: string[];
}
export type BotReplicaSummaryList = BotReplicaSummary[];
export interface ListBotReplicasResponse {
  botId?: string;
  sourceRegion?: string;
  botReplicaSummaries?: BotReplicaSummary[];
}
export type GenerationSortByAttribute = "creationStartTime" | "lastUpdatedTime" | (string & {});
export interface GenerationSortBy {
  attribute: GenerationSortByAttribute;
  order: SortOrder;
}
export interface ListBotResourceGenerationsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  sortBy?: GenerationSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface GenerationSummary {
  generationId?: string;
  generationStatus?: GenerationStatus;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export type GenerationSummaryList = GenerationSummary[];
export interface ListBotResourceGenerationsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  generationSummaries?: GenerationSummary[];
  nextToken?: string;
}
export type BotSortAttribute = "BotName" | (string & {});
export interface BotSortBy {
  attribute: BotSortAttribute;
  order: SortOrder;
}
export type BotFilterName = "BotName" | "BotType" | (string & {});
export type BotFilterOperator = "CO" | "EQ" | "NE" | (string & {});
export interface BotFilter {
  name: BotFilterName;
  values: string[];
  operator: BotFilterOperator;
}
export type BotFilters = BotFilter[];
export interface ListBotsRequest {
  sortBy?: BotSortBy;
  filters?: BotFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface BotSummary {
  botId?: string;
  botName?: string;
  description?: string;
  botStatus?: BotStatus;
  latestBotVersion?: string;
  lastUpdatedDateTime?: Date;
  botType?: BotType;
}
export type BotSummaryList = BotSummary[];
export interface ListBotsResponse {
  botSummaries?: BotSummary[];
  nextToken?: string;
}
export type BotVersionReplicaSortAttribute = "BotVersion" | (string & {});
export interface BotVersionReplicaSortBy {
  attribute: BotVersionReplicaSortAttribute;
  order: SortOrder;
}
export interface ListBotVersionReplicasRequest {
  botId: string;
  replicaRegion: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: BotVersionReplicaSortBy;
}
export type BotVersionReplicationStatus =
  | "Creating"
  | "Available"
  | "Deleting"
  | "Failed"
  | (string & {});
export interface BotVersionReplicaSummary {
  botVersion?: string;
  botVersionReplicationStatus?: BotVersionReplicationStatus;
  creationDateTime?: Date;
  failureReasons?: string[];
}
export type BotVersionReplicaSummaryList = BotVersionReplicaSummary[];
export interface ListBotVersionReplicasResponse {
  botId?: string;
  sourceRegion?: string;
  replicaRegion?: string;
  botVersionReplicaSummaries?: BotVersionReplicaSummary[];
  nextToken?: string;
}
export type BotVersionSortAttribute = "BotVersion" | (string & {});
export interface BotVersionSortBy {
  attribute: BotVersionSortAttribute;
  order: SortOrder;
}
export interface ListBotVersionsRequest {
  botId: string;
  sortBy?: BotVersionSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface BotVersionSummary {
  botName?: string;
  botVersion?: string;
  description?: string;
  botStatus?: BotStatus;
  creationDateTime?: Date;
}
export type BotVersionSummaryList = BotVersionSummary[];
export interface ListBotVersionsResponse {
  botId?: string;
  botVersionSummaries?: BotVersionSummary[];
  nextToken?: string;
}
export type BuiltInIntentSortAttribute = "IntentSignature" | (string & {});
export interface BuiltInIntentSortBy {
  attribute: BuiltInIntentSortAttribute;
  order: SortOrder;
}
export type BuiltInsMaxResults = number;
export interface ListBuiltInIntentsRequest {
  localeId: string;
  sortBy?: BuiltInIntentSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface BuiltInIntentSummary {
  intentSignature?: string;
  description?: string;
}
export type BuiltInIntentSummaryList = BuiltInIntentSummary[];
export interface ListBuiltInIntentsResponse {
  builtInIntentSummaries?: BuiltInIntentSummary[];
  nextToken?: string;
  localeId?: string;
}
export type BuiltInSlotTypeSortAttribute = "SlotTypeSignature" | (string & {});
export interface BuiltInSlotTypeSortBy {
  attribute: BuiltInSlotTypeSortAttribute;
  order: SortOrder;
}
export interface ListBuiltInSlotTypesRequest {
  localeId: string;
  sortBy?: BuiltInSlotTypeSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface BuiltInSlotTypeSummary {
  slotTypeSignature?: string;
  description?: string;
}
export type BuiltInSlotTypeSummaryList = BuiltInSlotTypeSummary[];
export interface ListBuiltInSlotTypesResponse {
  builtInSlotTypeSummaries?: BuiltInSlotTypeSummary[];
  nextToken?: string;
  localeId?: string;
}
export interface ListCustomVocabularyItemsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListCustomVocabularyItemsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  customVocabularyItems?: CustomVocabularyItem[];
  nextToken?: string;
}
export type ExportSortAttribute = "LastUpdatedDateTime" | (string & {});
export interface ExportSortBy {
  attribute: ExportSortAttribute;
  order: SortOrder;
}
export type ExportFilterName = "ExportResourceType" | (string & {});
export type ExportFilterOperator = "CO" | "EQ" | (string & {});
export interface ExportFilter {
  name: ExportFilterName;
  values: string[];
  operator: ExportFilterOperator;
}
export type ExportFilters = ExportFilter[];
export interface ListExportsRequest {
  botId?: string;
  botVersion?: string;
  sortBy?: ExportSortBy;
  filters?: ExportFilter[];
  maxResults?: number;
  nextToken?: string;
  localeId?: string;
}
export interface ExportSummary {
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  fileFormat?: ImportExportFileFormat;
  exportStatus?: ExportStatus;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export type ExportSummaryList = ExportSummary[];
export interface ListExportsResponse {
  botId?: string;
  botVersion?: string;
  exportSummaries?: ExportSummary[];
  nextToken?: string;
  localeId?: string;
}
export type ImportSortAttribute = "LastUpdatedDateTime" | (string & {});
export interface ImportSortBy {
  attribute: ImportSortAttribute;
  order: SortOrder;
}
export type ImportFilterName = "ImportResourceType" | (string & {});
export type ImportFilterOperator = "CO" | "EQ" | (string & {});
export interface ImportFilter {
  name: ImportFilterName;
  values: string[];
  operator: ImportFilterOperator;
}
export type ImportFilters = ImportFilter[];
export interface ListImportsRequest {
  botId?: string;
  botVersion?: string;
  sortBy?: ImportSortBy;
  filters?: ImportFilter[];
  maxResults?: number;
  nextToken?: string;
  localeId?: string;
}
export type ImportResourceType =
  | "Bot"
  | "BotLocale"
  | "CustomVocabulary"
  | "TestSet"
  | (string & {});
export interface ImportSummary {
  importId?: string;
  importedResourceId?: string;
  importedResourceName?: string;
  importStatus?: ImportStatus;
  mergeStrategy?: MergeStrategy;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  importedResourceType?: ImportResourceType;
}
export type ImportSummaryList = ImportSummary[];
export interface ListImportsResponse {
  botId?: string;
  botVersion?: string;
  importSummaries?: ImportSummary[];
  nextToken?: string;
  localeId?: string;
}
export type AnalyticsIntentMetricName =
  | "Count"
  | "Success"
  | "Failure"
  | "Switched"
  | "Dropped"
  | (string & {});
export type AnalyticsMetricStatistic = "Sum" | "Avg" | "Max" | (string & {});
export type AnalyticsSortOrder = "Ascending" | "Descending" | (string & {});
export interface AnalyticsIntentMetric {
  name: AnalyticsIntentMetricName;
  statistic: AnalyticsMetricStatistic;
  order?: AnalyticsSortOrder;
}
export type AnalyticsIntentMetrics = AnalyticsIntentMetric[];
export type AnalyticsBinByName = "ConversationStartTime" | "UtteranceTimestamp" | (string & {});
export type AnalyticsInterval = "OneHour" | "OneDay" | (string & {});
export interface AnalyticsBinBySpecification {
  name: AnalyticsBinByName;
  interval: AnalyticsInterval;
  order?: AnalyticsSortOrder;
}
export type AnalyticsBinByList = AnalyticsBinBySpecification[];
export type AnalyticsIntentField = "IntentName" | "IntentEndState" | "IntentLevel" | (string & {});
export interface AnalyticsIntentGroupBySpecification {
  name: AnalyticsIntentField;
}
export type AnalyticsIntentGroupByList = AnalyticsIntentGroupBySpecification[];
export type AnalyticsIntentFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel"
  | "SessionId"
  | "OriginatingRequestId"
  | "IntentName"
  | "IntentEndState"
  | (string & {});
export type AnalyticsFilterOperator = "EQ" | "GT" | "LT" | (string & {});
export type AnalyticsFilterValue = string;
export type AnalyticsFilterValues = string[];
export interface AnalyticsIntentFilter {
  name: AnalyticsIntentFilterName;
  operator: AnalyticsFilterOperator;
  values: string[];
}
export type AnalyticsIntentFilters = AnalyticsIntentFilter[];
export interface ListIntentMetricsRequest {
  botId: string;
  startDateTime: Date;
  endDateTime: Date;
  metrics: AnalyticsIntentMetric[];
  binBy?: AnalyticsBinBySpecification[];
  groupBy?: AnalyticsIntentGroupBySpecification[];
  filters?: AnalyticsIntentFilter[];
  maxResults?: number;
  nextToken?: string;
}
export type AnalyticsBinValue = number;
export interface AnalyticsBinKey {
  name?: AnalyticsBinByName;
  value?: number;
}
export type AnalyticsBinKeys = AnalyticsBinKey[];
export type AnalyticsGroupByValue = string;
export interface AnalyticsIntentGroupByKey {
  name?: AnalyticsIntentField;
  value?: string;
}
export type AnalyticsIntentGroupByKeys = AnalyticsIntentGroupByKey[];
export type AnalyticsMetricValue = number;
export interface AnalyticsIntentMetricResult {
  name?: AnalyticsIntentMetricName;
  statistic?: AnalyticsMetricStatistic;
  value?: number;
}
export type AnalyticsIntentMetricResults = AnalyticsIntentMetricResult[];
export interface AnalyticsIntentResult {
  binKeys?: AnalyticsBinKey[];
  groupByKeys?: AnalyticsIntentGroupByKey[];
  metricsResults?: AnalyticsIntentMetricResult[];
}
export type AnalyticsIntentResults = AnalyticsIntentResult[];
export interface ListIntentMetricsResponse {
  botId?: string;
  results?: AnalyticsIntentResult[];
  nextToken?: string;
}
export type AnalyticsPath = string;
export type AnalyticsCommonFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel"
  | (string & {});
export interface AnalyticsPathFilter {
  name: AnalyticsCommonFilterName;
  operator: AnalyticsFilterOperator;
  values: string[];
}
export type AnalyticsPathFilters = AnalyticsPathFilter[];
export interface ListIntentPathsRequest {
  botId: string;
  startDateTime: Date;
  endDateTime: Date;
  intentPath: string;
  filters?: AnalyticsPathFilter[];
}
export type AnalyticsNodeCount = number;
export type AnalyticsNodeLevel = number;
export type AnalyticsNodeType = "Inner" | "Exit" | (string & {});
export interface AnalyticsIntentNodeSummary {
  intentName?: string;
  intentPath?: string;
  intentCount?: number;
  intentLevel?: number;
  nodeType?: AnalyticsNodeType;
}
export type AnalyticsIntentNodeSummaries = AnalyticsIntentNodeSummary[];
export interface ListIntentPathsResponse {
  nodeSummaries?: AnalyticsIntentNodeSummary[];
}
export type IntentSortAttribute = "IntentName" | "LastUpdatedDateTime" | (string & {});
export interface IntentSortBy {
  attribute: IntentSortAttribute;
  order: SortOrder;
}
export type IntentFilterName = "IntentName" | (string & {});
export type IntentFilterOperator = "CO" | "EQ" | (string & {});
export interface IntentFilter {
  name: IntentFilterName;
  values: string[];
  operator: IntentFilterOperator;
}
export type IntentFilters = IntentFilter[];
export interface ListIntentsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  sortBy?: IntentSortBy;
  filters?: IntentFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface IntentSummary {
  intentId?: string;
  intentName?: string;
  intentDisplayName?: string;
  description?: string;
  parentIntentSignature?: string;
  inputContexts?: InputContext[];
  outputContexts?: OutputContext[];
  lastUpdatedDateTime?: Date;
}
export type IntentSummaryList = IntentSummary[];
export interface ListIntentsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentSummaries?: IntentSummary[];
  nextToken?: string;
}
export type AnalyticsIntentStageMetricName =
  | "Count"
  | "Success"
  | "Failed"
  | "Dropped"
  | "Retry"
  | (string & {});
export interface AnalyticsIntentStageMetric {
  name: AnalyticsIntentStageMetricName;
  statistic: AnalyticsMetricStatistic;
  order?: AnalyticsSortOrder;
}
export type AnalyticsIntentStageMetrics = AnalyticsIntentStageMetric[];
export type AnalyticsIntentStageField = "IntentStageName" | "SwitchedToIntent" | (string & {});
export interface AnalyticsIntentStageGroupBySpecification {
  name: AnalyticsIntentStageField;
}
export type AnalyticsIntentStageGroupByList = AnalyticsIntentStageGroupBySpecification[];
export type AnalyticsIntentStageFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel"
  | "SessionId"
  | "OriginatingRequestId"
  | "IntentName"
  | "IntentStageName"
  | (string & {});
export interface AnalyticsIntentStageFilter {
  name: AnalyticsIntentStageFilterName;
  operator: AnalyticsFilterOperator;
  values: string[];
}
export type AnalyticsIntentStageFilters = AnalyticsIntentStageFilter[];
export interface ListIntentStageMetricsRequest {
  botId: string;
  startDateTime: Date;
  endDateTime: Date;
  metrics: AnalyticsIntentStageMetric[];
  binBy?: AnalyticsBinBySpecification[];
  groupBy?: AnalyticsIntentStageGroupBySpecification[];
  filters?: AnalyticsIntentStageFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface AnalyticsIntentStageGroupByKey {
  name?: AnalyticsIntentStageField;
  value?: string;
}
export type AnalyticsIntentStageGroupByKeys = AnalyticsIntentStageGroupByKey[];
export interface AnalyticsIntentStageMetricResult {
  name?: AnalyticsIntentStageMetricName;
  statistic?: AnalyticsMetricStatistic;
  value?: number;
}
export type AnalyticsIntentStageMetricResults = AnalyticsIntentStageMetricResult[];
export interface AnalyticsIntentStageResult {
  binKeys?: AnalyticsBinKey[];
  groupByKeys?: AnalyticsIntentStageGroupByKey[];
  metricsResults?: AnalyticsIntentStageMetricResult[];
}
export type AnalyticsIntentStageResults = AnalyticsIntentStageResult[];
export interface ListIntentStageMetricsResponse {
  botId?: string;
  results?: AnalyticsIntentStageResult[];
  nextToken?: string;
}
export interface ListRecommendedIntentsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
  nextToken?: string;
  maxResults?: number;
}
export type SampleUtterancesCount = number;
export interface RecommendedIntentSummary {
  intentId?: string;
  intentName?: string;
  sampleUtterancesCount?: number;
}
export type RecommendedIntentSummaryList = RecommendedIntentSummary[];
export interface ListRecommendedIntentsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationId?: string;
  summaryList?: RecommendedIntentSummary[];
  nextToken?: string;
}
export type AnalyticsSessionSortByName =
  | "ConversationStartTime"
  | "NumberOfTurns"
  | "Duration"
  | (string & {});
export interface SessionDataSortBy {
  name: AnalyticsSessionSortByName;
  order: AnalyticsSortOrder;
}
export type AnalyticsSessionFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel"
  | "Duration"
  | "ConversationEndState"
  | "SessionId"
  | "OriginatingRequestId"
  | "IntentPath"
  | (string & {});
export interface AnalyticsSessionFilter {
  name: AnalyticsSessionFilterName;
  operator: AnalyticsFilterOperator;
  values: string[];
}
export type AnalyticsSessionFilters = AnalyticsSessionFilter[];
export interface ListSessionAnalyticsDataRequest {
  botId: string;
  startDateTime: Date;
  endDateTime: Date;
  sortBy?: SessionDataSortBy;
  filters?: AnalyticsSessionFilter[];
  maxResults?: number;
  nextToken?: string;
}
export type AnalyticsChannel = string;
export type AnalyticsSessionId = string;
export type AnalyticsLongValue = number;
export type ConversationEndState = "Success" | "Failure" | "Dropped" | (string & {});
export type AnalyticsModality = "Speech" | "Text" | "DTMF" | "MultiMode" | (string & {});
export interface InvokedIntentSample {
  intentName?: string;
}
export type InvokedIntentSamples = InvokedIntentSample[];
export type AnalyticsOriginatingRequestId = string;
export interface SessionSpecification {
  botAliasId?: string;
  botVersion?: string;
  localeId?: string;
  channel?: string;
  sessionId?: string;
  conversationStartTime?: Date;
  conversationEndTime?: Date;
  conversationDurationSeconds?: number;
  conversationEndState?: ConversationEndState;
  mode?: AnalyticsModality;
  numberOfTurns?: number;
  invokedIntentSamples?: InvokedIntentSample[];
  originatingRequestId?: string;
}
export type SessionSpecifications = SessionSpecification[];
export interface ListSessionAnalyticsDataResponse {
  botId?: string;
  nextToken?: string;
  sessions?: SessionSpecification[];
}
export type AnalyticsSessionMetricName =
  | "Count"
  | "Success"
  | "Failure"
  | "Dropped"
  | "Duration"
  | "TurnsPerConversation"
  | "Concurrency"
  | (string & {});
export interface AnalyticsSessionMetric {
  name: AnalyticsSessionMetricName;
  statistic: AnalyticsMetricStatistic;
  order?: AnalyticsSortOrder;
}
export type AnalyticsSessionMetrics = AnalyticsSessionMetric[];
export type AnalyticsSessionField = "ConversationEndState" | "LocaleId" | (string & {});
export interface AnalyticsSessionGroupBySpecification {
  name: AnalyticsSessionField;
}
export type AnalyticsSessionGroupByList = AnalyticsSessionGroupBySpecification[];
export interface ListSessionMetricsRequest {
  botId: string;
  startDateTime: Date;
  endDateTime: Date;
  metrics: AnalyticsSessionMetric[];
  binBy?: AnalyticsBinBySpecification[];
  groupBy?: AnalyticsSessionGroupBySpecification[];
  filters?: AnalyticsSessionFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface AnalyticsSessionGroupByKey {
  name?: AnalyticsSessionField;
  value?: string;
}
export type AnalyticsSessionGroupByKeys = AnalyticsSessionGroupByKey[];
export interface AnalyticsSessionMetricResult {
  name?: AnalyticsSessionMetricName;
  statistic?: AnalyticsMetricStatistic;
  value?: number;
}
export type AnalyticsSessionMetricResults = AnalyticsSessionMetricResult[];
export interface AnalyticsSessionResult {
  binKeys?: AnalyticsBinKey[];
  groupByKeys?: AnalyticsSessionGroupByKey[];
  metricsResults?: AnalyticsSessionMetricResult[];
}
export type AnalyticsSessionResults = AnalyticsSessionResult[];
export interface ListSessionMetricsResponse {
  botId?: string;
  results?: AnalyticsSessionResult[];
  nextToken?: string;
}
export type SlotSortAttribute = "SlotName" | "LastUpdatedDateTime" | (string & {});
export interface SlotSortBy {
  attribute: SlotSortAttribute;
  order: SortOrder;
}
export type SlotFilterName = "SlotName" | (string & {});
export type SlotFilterOperator = "CO" | "EQ" | (string & {});
export interface SlotFilter {
  name: SlotFilterName;
  values: string[];
  operator: SlotFilterOperator;
}
export type SlotFilters = SlotFilter[];
export interface ListSlotsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
  sortBy?: SlotSortBy;
  filters?: SlotFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface SlotSummary {
  slotId?: string;
  slotName?: string;
  description?: string;
  slotConstraint?: SlotConstraint;
  slotTypeId?: string;
  valueElicitationPromptSpecification?: PromptSpecification;
  lastUpdatedDateTime?: Date;
}
export type SlotSummaryList = SlotSummary[];
export interface ListSlotsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  slotSummaries?: SlotSummary[];
  nextToken?: string;
}
export type SlotTypeSortAttribute = "SlotTypeName" | "LastUpdatedDateTime" | (string & {});
export interface SlotTypeSortBy {
  attribute: SlotTypeSortAttribute;
  order: SortOrder;
}
export type SlotTypeFilterName = "SlotTypeName" | "ExternalSourceType" | (string & {});
export type SlotTypeFilterOperator = "CO" | "EQ" | (string & {});
export interface SlotTypeFilter {
  name: SlotTypeFilterName;
  values: string[];
  operator: SlotTypeFilterOperator;
}
export type SlotTypeFilters = SlotTypeFilter[];
export interface ListSlotTypesRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  sortBy?: SlotTypeSortBy;
  filters?: SlotTypeFilter[];
  maxResults?: number;
  nextToken?: string;
}
export type SlotTypeCategory =
  | "Custom"
  | "Extended"
  | "ExternalGrammar"
  | "Composite"
  | (string & {});
export interface SlotTypeSummary {
  slotTypeId?: string;
  slotTypeName?: string;
  description?: string;
  parentSlotTypeSignature?: string;
  lastUpdatedDateTime?: Date;
  slotTypeCategory?: SlotTypeCategory;
}
export type SlotTypeSummaryList = SlotTypeSummary[];
export interface ListSlotTypesResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  slotTypeSummaries?: SlotTypeSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export type TestResultTypeFilter =
  | "OverallTestResults"
  | "ConversationLevelTestResults"
  | "IntentClassificationTestResults"
  | "SlotResolutionTestResults"
  | "UtteranceLevelResults"
  | (string & {});
export type TestResultMatchStatus = "Matched" | "Mismatched" | "ExecutionError" | (string & {});
export interface ConversationLevelTestResultsFilterBy {
  endToEndResult?: TestResultMatchStatus;
}
export interface TestExecutionResultFilterBy {
  resultTypeFilter: TestResultTypeFilter;
  conversationLevelTestResultsFilterBy?: ConversationLevelTestResultsFilterBy;
}
export interface ListTestExecutionResultItemsRequest {
  testExecutionId: string;
  resultFilterBy: TestExecutionResultFilterBy;
  maxResults?: number;
  nextToken?: string;
}
export type TestResultMatchStatusCountMap = { [key in TestResultMatchStatus]?: number };
export interface OverallTestResultItem {
  multiTurnConversation: boolean;
  totalResultCount: number;
  speechTranscriptionResultCounts?: { [key: string]: number | undefined };
  endToEndResultCounts: { [key: string]: number | undefined };
}
export type OverallTestResultItemList = OverallTestResultItem[];
export interface OverallTestResults {
  items: OverallTestResultItem[];
}
export type TestSetConversationId = string;
export interface ConversationLevelIntentClassificationResultItem {
  intentName: string;
  matchResult: TestResultMatchStatus;
}
export type ConversationLevelIntentClassificationResults =
  ConversationLevelIntentClassificationResultItem[];
export type TestResultSlotName = string;
export interface ConversationLevelSlotResolutionResultItem {
  intentName: string;
  slotName: string;
  matchResult: TestResultMatchStatus;
}
export type ConversationLevelSlotResolutionResults = ConversationLevelSlotResolutionResultItem[];
export interface ConversationLevelTestResultItem {
  conversationId: string;
  endToEndResult: TestResultMatchStatus;
  speechTranscriptionResult?: TestResultMatchStatus;
  intentClassificationResults: ConversationLevelIntentClassificationResultItem[];
  slotResolutionResults: ConversationLevelSlotResolutionResultItem[];
}
export type ConversationLevelTestResultItemList = ConversationLevelTestResultItem[];
export interface ConversationLevelTestResults {
  items: ConversationLevelTestResultItem[];
}
export interface IntentClassificationTestResultItemCounts {
  totalResultCount: number;
  speechTranscriptionResultCounts?: { [key: string]: number | undefined };
  intentMatchResultCounts: { [key: string]: number | undefined };
}
export interface IntentClassificationTestResultItem {
  intentName: string;
  multiTurnConversation: boolean;
  resultCounts: IntentClassificationTestResultItemCounts;
}
export type IntentClassificationTestResultItemList = IntentClassificationTestResultItem[];
export interface IntentClassificationTestResults {
  items: IntentClassificationTestResultItem[];
}
export interface SlotResolutionTestResultItemCounts {
  totalResultCount: number;
  speechTranscriptionResultCounts?: { [key: string]: number | undefined };
  slotMatchResultCounts: { [key: string]: number | undefined };
}
export interface SlotResolutionTestResultItem {
  slotName: string;
  resultCounts: SlotResolutionTestResultItemCounts;
}
export type SlotResolutionTestResultItems = SlotResolutionTestResultItem[];
export interface IntentLevelSlotResolutionTestResultItem {
  intentName: string;
  multiTurnConversation: boolean;
  slotResolutionResults: SlotResolutionTestResultItem[];
}
export type IntentLevelSlotResolutionTestResultItemList = IntentLevelSlotResolutionTestResultItem[];
export interface IntentLevelSlotResolutionTestResults {
  items: IntentLevelSlotResolutionTestResultItem[];
}
export type RecordNumber = number;
export type TestSetAgentPrompt = string;
export interface ExecutionErrorDetails {
  errorCode: string;
  errorMessage: string;
}
export interface AgentTurnResult {
  expectedAgentPrompt: string;
  actualAgentPrompt?: string;
  errorDetails?: ExecutionErrorDetails;
  actualElicitedSlot?: string;
  actualIntent?: string;
}
export type TestSetUtteranceText = string;
export type AudioFileS3Location = string;
export interface UtteranceAudioInputSpecification {
  audioFileS3Location: string;
}
export interface UtteranceInputSpecification {
  textInput?: string;
  audioInput?: UtteranceAudioInputSpecification;
}
export type ActiveContextName = string;
export interface ActiveContext {
  name: string;
}
export type ActiveContextList = ActiveContext[];
export type RuntimeHintPhrase = string;
export interface RuntimeHintValue {
  phrase: string;
}
export type RuntimeHintValuesList = RuntimeHintValue[];
export interface RuntimeHintDetails {
  runtimeHintValues?: RuntimeHintValue[];
  subSlotHints?: { [key: string]: RuntimeHintDetails | undefined };
}
export type SlotHintsSlotMap = { [key: string]: RuntimeHintDetails | undefined };
export type SlotHintsIntentMap = {
  [key: string]: { [key: string]: RuntimeHintDetails | undefined } | undefined;
};
export interface RuntimeHints {
  slotHints?: { [key: string]: { [key: string]: RuntimeHintDetails | undefined } | undefined };
}
export interface InputSessionStateSpecification {
  sessionAttributes?: { [key: string]: string | undefined };
  activeContexts?: ActiveContext[];
  runtimeHints?: RuntimeHints;
}
export interface UserTurnInputSpecification {
  utteranceInput: UtteranceInputSpecification;
  requestAttributes?: { [key: string]: string | undefined };
  sessionState?: InputSessionStateSpecification;
}
export type UserTurnSlotOutputList = UserTurnSlotOutput[];
export interface UserTurnSlotOutput {
  value?: string;
  values?: UserTurnSlotOutput[];
  subSlots?: { [key: string]: UserTurnSlotOutput | undefined };
}
export type UserTurnSlotOutputMap = { [key: string]: UserTurnSlotOutput | undefined };
export interface UserTurnIntentOutput {
  name: string;
  slots?: { [key: string]: UserTurnSlotOutput | undefined };
}
export interface UserTurnOutputSpecification {
  intent: UserTurnIntentOutput;
  activeContexts?: ActiveContext[];
  transcript?: string;
}
export interface ConversationLevelResultDetail {
  endToEndResult: TestResultMatchStatus;
  speechTranscriptionResult?: TestResultMatchStatus;
}
export interface UserTurnResult {
  input: UserTurnInputSpecification;
  expectedOutput: UserTurnOutputSpecification;
  actualOutput?: UserTurnOutputSpecification;
  errorDetails?: ExecutionErrorDetails;
  endToEndResult?: TestResultMatchStatus;
  intentMatchResult?: TestResultMatchStatus;
  slotMatchResult?: TestResultMatchStatus;
  speechTranscriptionResult?: TestResultMatchStatus;
  conversationLevelResult?: ConversationLevelResultDetail;
}
export interface TestSetTurnResult {
  agent?: AgentTurnResult;
  user?: UserTurnResult;
}
export interface UtteranceLevelTestResultItem {
  recordNumber: number;
  conversationId?: string;
  turnResult: TestSetTurnResult;
}
export type UtteranceLevelTestResultItemList = UtteranceLevelTestResultItem[];
export interface UtteranceLevelTestResults {
  items: UtteranceLevelTestResultItem[];
}
export interface TestExecutionResultItems {
  overallTestResults?: OverallTestResults;
  conversationLevelTestResults?: ConversationLevelTestResults;
  intentClassificationTestResults?: IntentClassificationTestResults;
  intentLevelSlotResolutionTestResults?: IntentLevelSlotResolutionTestResults;
  utteranceLevelTestResults?: UtteranceLevelTestResults;
}
export interface ListTestExecutionResultItemsResponse {
  testExecutionResults?: TestExecutionResultItems;
  nextToken?: string;
}
export type TestExecutionSortAttribute = "TestSetName" | "CreationDateTime" | (string & {});
export interface TestExecutionSortBy {
  attribute: TestExecutionSortAttribute;
  order: SortOrder;
}
export interface ListTestExecutionsRequest {
  sortBy?: TestExecutionSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface TestExecutionSummary {
  testExecutionId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  testExecutionStatus?: TestExecutionStatus;
  testSetId?: string;
  testSetName?: string;
  target?: TestExecutionTarget;
  apiMode?: TestExecutionApiMode;
  testExecutionModality?: TestExecutionModality;
}
export type TestExecutionSummaryList = TestExecutionSummary[];
export interface ListTestExecutionsResponse {
  testExecutions?: TestExecutionSummary[];
  nextToken?: string;
}
export interface ListTestSetRecordsRequest {
  testSetId: string;
  maxResults?: number;
  nextToken?: string;
}
export type TurnNumber = number;
export interface AgentTurnSpecification {
  agentPrompt: string;
}
export interface UserTurnSpecification {
  input: UserTurnInputSpecification;
  expected: UserTurnOutputSpecification;
}
export interface TurnSpecification {
  agentTurn?: AgentTurnSpecification;
  userTurn?: UserTurnSpecification;
}
export interface TestSetTurnRecord {
  recordNumber: number;
  conversationId?: string;
  turnNumber?: number;
  turnSpecification: TurnSpecification;
}
export type TestSetTurnRecordList = TestSetTurnRecord[];
export interface ListTestSetRecordsResponse {
  testSetRecords?: TestSetTurnRecord[];
  nextToken?: string;
}
export type TestSetSortAttribute = "TestSetName" | "LastUpdatedDateTime" | (string & {});
export interface TestSetSortBy {
  attribute: TestSetSortAttribute;
  order: SortOrder;
}
export interface ListTestSetsRequest {
  sortBy?: TestSetSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface TestSetSummary {
  testSetId?: string;
  testSetName?: string;
  description?: string;
  modality?: TestSetModality;
  status?: TestSetStatus;
  roleArn?: string;
  numTurns?: number;
  storageLocation?: TestSetStorageLocation;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export type TestSetSummaryList = TestSetSummary[];
export interface ListTestSetsResponse {
  testSets?: TestSetSummary[];
  nextToken?: string;
}
export type AnalyticsUtteranceSortByName = "UtteranceTimestamp" | (string & {});
export interface UtteranceDataSortBy {
  name: AnalyticsUtteranceSortByName;
  order: AnalyticsSortOrder;
}
export type AnalyticsUtteranceFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel"
  | "SessionId"
  | "OriginatingRequestId"
  | "UtteranceState"
  | "UtteranceText"
  | (string & {});
export interface AnalyticsUtteranceFilter {
  name: AnalyticsUtteranceFilterName;
  operator: AnalyticsFilterOperator;
  values: string[];
}
export type AnalyticsUtteranceFilters = AnalyticsUtteranceFilter[];
export interface ListUtteranceAnalyticsDataRequest {
  botId: string;
  startDateTime: Date;
  endDateTime: Date;
  sortBy?: UtteranceDataSortBy;
  filters?: AnalyticsUtteranceFilter[];
  maxResults?: number;
  nextToken?: string;
}
export type UtteranceUnderstood = boolean;
export type IntentState =
  | "Failed"
  | "Fulfilled"
  | "InProgress"
  | "ReadyForFulfillment"
  | "Waiting"
  | "FulfillmentInProgress"
  | (string & {});
export type UtteranceContentType =
  | "PlainText"
  | "CustomPayload"
  | "SSML"
  | "ImageResponseCard"
  | (string & {});
export interface UtteranceBotResponse {
  content?: string;
  contentType?: UtteranceContentType;
  imageResponseCard?: ImageResponseCard;
}
export type UtteranceBotResponses = UtteranceBotResponse[];
export interface UtteranceSpecification {
  botAliasId?: string;
  botVersion?: string;
  localeId?: string;
  sessionId?: string;
  channel?: string;
  mode?: AnalyticsModality;
  conversationStartTime?: Date;
  conversationEndTime?: Date;
  utterance?: string;
  utteranceTimestamp?: Date;
  audioVoiceDurationMillis?: number;
  utteranceUnderstood?: boolean;
  inputType?: string;
  outputType?: string;
  associatedIntentName?: string;
  associatedSlotName?: string;
  intentState?: IntentState;
  dialogActionType?: string;
  botResponseAudioVoiceId?: string;
  slotsFilledInSession?: string;
  utteranceRequestId?: string;
  botResponses?: UtteranceBotResponse[];
}
export type UtteranceSpecifications = UtteranceSpecification[];
export interface ListUtteranceAnalyticsDataResponse {
  botId?: string;
  nextToken?: string;
  utterances?: UtteranceSpecification[];
}
export type AnalyticsUtteranceMetricName =
  | "Count"
  | "Missed"
  | "Detected"
  | "UtteranceTimestamp"
  | (string & {});
export interface AnalyticsUtteranceMetric {
  name: AnalyticsUtteranceMetricName;
  statistic: AnalyticsMetricStatistic;
  order?: AnalyticsSortOrder;
}
export type AnalyticsUtteranceMetrics = AnalyticsUtteranceMetric[];
export type AnalyticsUtteranceField = "UtteranceText" | "UtteranceState" | (string & {});
export interface AnalyticsUtteranceGroupBySpecification {
  name: AnalyticsUtteranceField;
}
export type AnalyticsUtteranceGroupByList = AnalyticsUtteranceGroupBySpecification[];
export type AnalyticsUtteranceAttributeName = "LastUsedIntent" | (string & {});
export interface AnalyticsUtteranceAttribute {
  name: AnalyticsUtteranceAttributeName;
}
export type AnalyticsUtteranceAttributes = AnalyticsUtteranceAttribute[];
export interface ListUtteranceMetricsRequest {
  botId: string;
  startDateTime: Date;
  endDateTime: Date;
  metrics: AnalyticsUtteranceMetric[];
  binBy?: AnalyticsBinBySpecification[];
  groupBy?: AnalyticsUtteranceGroupBySpecification[];
  attributes?: AnalyticsUtteranceAttribute[];
  filters?: AnalyticsUtteranceFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface AnalyticsUtteranceGroupByKey {
  name?: AnalyticsUtteranceField;
  value?: string;
}
export type AnalyticsUtteranceGroupByKeys = AnalyticsUtteranceGroupByKey[];
export interface AnalyticsUtteranceMetricResult {
  name?: AnalyticsUtteranceMetricName;
  statistic?: AnalyticsMetricStatistic;
  value?: number;
}
export type AnalyticsUtteranceMetricResults = AnalyticsUtteranceMetricResult[];
export interface AnalyticsUtteranceAttributeResult {
  lastUsedIntent?: string;
}
export type AnalyticsUtteranceAttributeResults = AnalyticsUtteranceAttributeResult[];
export interface AnalyticsUtteranceResult {
  binKeys?: AnalyticsBinKey[];
  groupByKeys?: AnalyticsUtteranceGroupByKey[];
  metricsResults?: AnalyticsUtteranceMetricResult[];
  attributeResults?: AnalyticsUtteranceAttributeResult[];
}
export type AnalyticsUtteranceResults = AnalyticsUtteranceResult[];
export interface ListUtteranceMetricsResponse {
  botId?: string;
  results?: AnalyticsUtteranceResult[];
  nextToken?: string;
}
export type SearchOrder = "Ascending" | "Descending" | (string & {});
export type AssociatedTranscriptFilterName = "IntentId" | "SlotTypeId" | (string & {});
export interface AssociatedTranscriptFilter {
  name: AssociatedTranscriptFilterName;
  values: string[];
}
export type AssociatedTranscriptFilters = AssociatedTranscriptFilter[];
export type NextIndex = number;
export interface SearchAssociatedTranscriptsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
  searchOrder?: SearchOrder;
  filters: AssociatedTranscriptFilter[];
  maxResults?: number;
  nextIndex?: number;
}
export type Transcript = string;
export interface AssociatedTranscript {
  transcript?: string;
}
export type AssociatedTranscriptList = AssociatedTranscript[];
export interface SearchAssociatedTranscriptsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationId?: string;
  nextIndex?: number;
  associatedTranscripts?: AssociatedTranscript[];
  totalResults?: number;
}
export type AnalysisScope = "BotLocale" | (string & {});
export interface StartBotAnalyzerRequest {
  botId: string;
  analysisScope: AnalysisScope;
  localeId?: string;
  botVersion?: string;
}
export interface StartBotAnalyzerResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botAnalyzerStatus?: BotAnalyzerStatus;
  botAnalyzerRequestId?: string;
  creationDateTime?: Date;
}
export interface StartBotRecommendationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  transcriptSourceSetting: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
}
export interface StartBotRecommendationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationStatus?: BotRecommendationStatus;
  botRecommendationId?: string;
  creationDateTime?: Date;
  transcriptSourceSetting?: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
}
export interface StartBotResourceGenerationRequest {
  generationInputPrompt: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface StartBotResourceGenerationResponse {
  generationInputPrompt?: string;
  generationId?: string;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  generationStatus?: GenerationStatus;
  creationDateTime?: Date;
}
export interface StartImportRequest {
  importId: string;
  resourceSpecification: ImportResourceSpecification;
  mergeStrategy: MergeStrategy;
  filePassword?: string | redacted.Redacted<string>;
}
export interface StartImportResponse {
  importId?: string;
  resourceSpecification?: ImportResourceSpecification;
  mergeStrategy?: MergeStrategy;
  importStatus?: ImportStatus;
  creationDateTime?: Date;
}
export interface StartTestExecutionRequest {
  testSetId: string;
  target: TestExecutionTarget;
  apiMode: TestExecutionApiMode;
  testExecutionModality?: TestExecutionModality;
}
export interface StartTestExecutionResponse {
  testExecutionId?: string;
  creationDateTime?: Date;
  testSetId?: string;
  target?: TestExecutionTarget;
  apiMode?: TestExecutionApiMode;
  testExecutionModality?: TestExecutionModality;
}
export interface StartTestSetGenerationRequest {
  testSetName: string;
  description?: string;
  storageLocation: TestSetStorageLocation;
  generationDataSource: TestSetGenerationDataSource;
  roleArn: string;
  testSetTags?: { [key: string]: string | undefined };
}
export interface StartTestSetGenerationResponse {
  testSetGenerationId?: string;
  creationDateTime?: Date;
  testSetGenerationStatus?: TestSetGenerationStatus;
  testSetName?: string;
  description?: string;
  storageLocation?: TestSetStorageLocation;
  generationDataSource?: TestSetGenerationDataSource;
  roleArn?: string;
  testSetTags?: { [key: string]: string | undefined };
}
export interface StopBotAnalyzerRequest {
  botId: string;
  botAnalyzerRequestId: string;
}
export interface StopBotAnalyzerResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botAnalyzerStatus?: BotAnalyzerStatus;
  botAnalyzerRequestId?: string;
}
export interface StopBotRecommendationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
}
export interface StopBotRecommendationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationStatus?: BotRecommendationStatus;
  botRecommendationId?: string;
}
export interface TagResourceRequest {
  resourceARN: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateBotRequest {
  botId: string;
  botName: string;
  description?: string;
  roleArn: string;
  dataPrivacy: DataPrivacy;
  idleSessionTTLInSeconds: number;
  botType?: BotType;
  botMembers?: BotMember[];
  errorLogSettings?: ErrorLogSettings;
}
export interface UpdateBotResponse {
  botId?: string;
  botName?: string;
  description?: string;
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  idleSessionTTLInSeconds?: number;
  botStatus?: BotStatus;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  botType?: BotType;
  botMembers?: BotMember[];
  errorLogSettings?: ErrorLogSettings;
}
export interface UpdateBotAliasRequest {
  botAliasId: string;
  botAliasName: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | undefined };
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botId: string;
}
export interface UpdateBotAliasResponse {
  botAliasId?: string;
  botAliasName?: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | undefined };
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botAliasStatus?: BotAliasStatus;
  botId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export interface UpdateBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  description?: string;
  nluIntentConfidenceThreshold: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  generativeAISettings?: GenerativeAISettings;
  speechDetectionSensitivity?: SpeechDetectionSensitivity;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
}
export interface UpdateBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  localeName?: string;
  description?: string;
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  botLocaleStatus?: BotLocaleStatus;
  failureReasons?: string[];
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  recommendedActions?: string[];
  generativeAISettings?: GenerativeAISettings;
  speechDetectionSensitivity?: SpeechDetectionSensitivity;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
}
export interface UpdateBotRecommendationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
  encryptionSetting: EncryptionSetting;
}
export interface UpdateBotRecommendationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationStatus?: BotRecommendationStatus;
  botRecommendationId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  transcriptSourceSetting?: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
}
export interface UpdateExportRequest {
  exportId: string;
  filePassword?: string | redacted.Redacted<string>;
}
export interface UpdateExportResponse {
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  fileFormat?: ImportExportFileFormat;
  exportStatus?: ExportStatus;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export interface UpdateIntentRequest {
  intentId: string;
  intentName: string;
  intentDisplayName?: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: SampleUtterance[];
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  slotPriorities?: SlotPriority[];
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: InputContext[];
  outputContexts?: OutputContext[];
  kendraConfiguration?: KendraConfiguration;
  botId: string;
  botVersion: string;
  localeId: string;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export interface UpdateIntentResponse {
  intentId?: string;
  intentName?: string;
  intentDisplayName?: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: SampleUtterance[];
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  slotPriorities?: SlotPriority[];
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: InputContext[];
  outputContexts?: OutputContext[];
  kendraConfiguration?: KendraConfiguration;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export interface UpdateResourcePolicyRequest {
  resourceArn: string;
  policy: string;
  expectedRevisionId?: string;
}
export interface UpdateResourcePolicyResponse {
  resourceArn?: string;
  revisionId?: string;
}
export interface UpdateSlotRequest {
  slotId: string;
  slotName: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export interface UpdateSlotResponse {
  slotId?: string;
  slotName?: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting?: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export interface UpdateSlotTypeRequest {
  slotTypeId: string;
  slotTypeName: string;
  description?: string;
  slotTypeValues?: SlotTypeValue[];
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId: string;
  botVersion: string;
  localeId: string;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface UpdateSlotTypeResponse {
  slotTypeId?: string;
  slotTypeName?: string;
  description?: string;
  slotTypeValues?: SlotTypeValue[];
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface UpdateTestSetRequest {
  testSetId: string;
  testSetName: string;
  description?: string;
}
export interface UpdateTestSetResponse {
  testSetId?: string;
  testSetName?: string;
  description?: string;
  modality?: TestSetModality;
  status?: TestSetStatus;
  roleArn?: string;
  numTurns?: number;
  storageLocation?: TestSetStorageLocation;
  creationDateTime?: Date;
  lastUpdatedDateTime?: Date;
}
export type ExceptionMessage = string;
export type RetryAfterSeconds = number;
export type BatchCreateCustomVocabularyItemError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a batch of custom vocabulary items for a given bot locale's
 * custom vocabulary.
 */
export const batchCreateCustomVocabularyItem: API.OperationMethod<
  BatchCreateCustomVocabularyItemRequest,
  BatchCreateCustomVocabularyItemResponse,
  BatchCreateCustomVocabularyItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<BatchCreateCustomVocabularyItemRequest>,
  output: __S(7, __c0, 7) as any as S.Schema<BatchCreateCustomVocabularyItemResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateCustomVocabularyItem",
}));

export type BatchDeleteCustomVocabularyItemError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a batch of custom vocabulary items for a given bot locale's
 * custom vocabulary.
 */
export const batchDeleteCustomVocabularyItem: API.OperationMethod<
  BatchDeleteCustomVocabularyItemRequest,
  BatchDeleteCustomVocabularyItemResponse,
  BatchDeleteCustomVocabularyItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<BatchDeleteCustomVocabularyItemRequest>,
  output: __S(7, __c0, 7) as any as S.Schema<BatchDeleteCustomVocabularyItemResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteCustomVocabularyItem",
}));

export type BatchUpdateCustomVocabularyItemError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a batch of custom vocabulary items for a given bot locale's custom
 * vocabulary.
 */
export const batchUpdateCustomVocabularyItem: API.OperationMethod<
  BatchUpdateCustomVocabularyItemRequest,
  BatchUpdateCustomVocabularyItemResponse,
  BatchUpdateCustomVocabularyItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11, __c1, 3) as any as S.Schema<BatchUpdateCustomVocabularyItemRequest>,
  output: __S(7, __c0, 7) as any as S.Schema<BatchUpdateCustomVocabularyItemResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateCustomVocabularyItem",
}));

export type BuildBotLocaleError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Builds a bot, its intents, and its slot types into a specific
 * locale. A bot can be built into multiple locales. At runtime the locale
 * is used to choose a specific build of the bot.
 */
export const buildBotLocale: API.OperationMethod<
  BuildBotLocaleRequest,
  BuildBotLocaleResponse,
  BuildBotLocaleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<BuildBotLocaleRequest>,
  output: __S(13, __c1, 5) as any as S.Schema<BuildBotLocaleResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BuildBotLocale",
}));

export type CreateBotError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Lex conversational bot.
 */
export const createBot: API.OperationMethod<
  CreateBotRequest,
  CreateBotResponse,
  CreateBotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<CreateBotRequest>,
  output: __S(20, __c2, 4) as any as S.Schema<CreateBotResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBot",
}));

export type CreateBotAliasError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an alias for the specified version of a bot. Use an alias to
 * enable you to change the version of a bot without updating applications
 * that use the bot.
 *
 * For example, you can create an alias called "PROD" that your
 * applications use to call the Amazon Lex bot.
 */
export const createBotAlias: API.OperationMethod<
  CreateBotAliasRequest,
  CreateBotAliasResponse,
  CreateBotAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35, __c4, 3) as any as S.Schema<CreateBotAliasRequest>,
  output: __S(36, __c4, 4) as any as S.Schema<CreateBotAliasResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBotAlias",
}));

export type CreateBotLocaleError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a locale in the bot. The locale contains the intents and
 * slot types that the bot uses in conversations with users in the
 * specified language and locale. You must add a locale to a bot before
 * you can add intents and slot types to the bot.
 */
export const createBotLocale: API.OperationMethod<
  CreateBotLocaleRequest,
  CreateBotLocaleResponse,
  CreateBotLocaleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<CreateBotLocaleRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<CreateBotLocaleResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBotLocale",
}));

export type CreateBotReplicaError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Action to create a replication of the source bot in the secondary region.
 */
export const createBotReplica: API.OperationMethod<
  CreateBotReplicaRequest,
  CreateBotReplicaResponse,
  CreateBotReplicaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<CreateBotReplicaRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<CreateBotReplicaResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBotReplica",
}));

export type CreateBotVersionError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an immutable version of the bot. When you create the first
 * version of a bot, Amazon Lex sets the version number to 1. Subsequent bot versions increase
 * in an increment of 1. The version number will always represent the total number
 * of versions created of the bot, not the current number of versions. If a bot version
 * is deleted, that bot version number will not be reused.
 */
export const createBotVersion: API.OperationMethod<
  CreateBotVersionRequest,
  CreateBotVersionResponse,
  CreateBotVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<CreateBotVersionRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<CreateBotVersionResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBotVersion",
}));

export type CreateExportError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a zip archive containing the contents of a bot or a bot
 * locale. The archive contains a directory structure that contains JSON
 * files that define the bot.
 *
 * You can create an archive that contains the complete definition of a
 * bot, or you can specify that the archive contain only the definition of
 * a single bot locale.
 *
 * For more information about exporting bots, and about the structure
 * of the export archive, see Importing and
 * exporting bots
 */
export const createExport: API.OperationMethod<
  CreateExportRequest,
  CreateExportResponse,
  CreateExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<CreateExportRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<CreateExportResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExport",
}));

export type CreateIntentError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an intent.
 *
 * To define the interaction between the user and your bot, you define
 * one or more intents. For example, for a pizza ordering bot you would
 * create an `OrderPizza` intent.
 *
 * When you create an intent, you must provide a name. You can
 * optionally provide the following:
 *
 * - Sample utterances. For example, "I want to order a pizza" and
 * "Can I order a pizza." You can't provide utterances for built-in
 * intents.
 *
 * - Information to be gathered. You specify slots for the
 * information that you bot requests from the user. You can specify
 * standard slot types, such as date and time, or custom slot types
 * for your application.
 *
 * - How the intent is fulfilled. You can provide a Lambda function
 * or configure the intent to return the intent information to your
 * client application. If you use a Lambda function, Amazon Lex invokes
 * the function when all of the intent information is
 * available.
 *
 * - A confirmation prompt to send to the user to confirm an
 * intent. For example, "Shall I order your pizza?"
 *
 * - A conclusion statement to send to the user after the intent is
 * fulfilled. For example, "I ordered your pizza."
 *
 * - A follow-up prompt that asks the user for additional activity.
 * For example, "Do you want a drink with your pizza?"
 */
export const createIntent: API.OperationMethod<
  CreateIntentRequest,
  CreateIntentResponse,
  CreateIntentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125, __c15, 5) as any as S.Schema<CreateIntentRequest>,
  output: __S(126, __c15, 6) as any as S.Schema<CreateIntentResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIntent",
}));

export type CreateResourcePolicyError =
  | InternalServerException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new resource policy with the specified policy
 * statements.
 */
export const createResourcePolicy: API.OperationMethod<
  CreateResourcePolicyRequest,
  CreateResourcePolicyResponse,
  CreateResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<CreateResourcePolicyRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<CreateResourcePolicyResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateResourcePolicy",
}));

export type CreateResourcePolicyStatementError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a new resource policy statement to a bot or bot alias. If a
 * resource policy exists, the statement is added to the current resource
 * policy. If a policy doesn't exist, a new policy is created.
 *
 * You can't create a resource policy statement that allows
 * cross-account access.
 *
 * You need to add the `CreateResourcePolicy` or `UpdateResourcePolicy`
 * action to the bot role in order to call the API.
 */
export const createResourcePolicyStatement: API.OperationMethod<
  CreateResourcePolicyStatementRequest,
  CreateResourcePolicyStatementResponse,
  CreateResourcePolicyStatementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133, __c16, 5) as any as S.Schema<CreateResourcePolicyStatementRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<CreateResourcePolicyStatementResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateResourcePolicyStatement",
}));

export type CreateSlotError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a slot in an intent. A slot is a variable needed to fulfill
 * an intent. For example, an `OrderPizza` intent might need
 * slots for size, crust, and number of pizzas. For each slot, you define
 * one or more utterances that Amazon Lex uses to elicit a response from the
 * user.
 */
export const createSlot: API.OperationMethod<
  CreateSlotRequest,
  CreateSlotResponse,
  CreateSlotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(148, __c18, 4) as any as S.Schema<CreateSlotRequest>,
  output: __S(149, __c18, 5) as any as S.Schema<CreateSlotResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSlot",
}));

export type CreateSlotTypeError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom slot type
 *
 * To create a custom slot type, specify a name for the slot type and
 * a set of enumeration values, the values that a slot of this type can
 * assume.
 */
export const createSlotType: API.OperationMethod<
  CreateSlotTypeRequest,
  CreateSlotTypeResponse,
  CreateSlotTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(162, __c20, 2) as any as S.Schema<CreateSlotTypeRequest>,
  output: __S(163, __c20, 3) as any as S.Schema<CreateSlotTypeResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSlotType",
}));

export type CreateTestSetDiscrepancyReportError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a report that describes the differences between the bot and the test set.
 */
export const createTestSetDiscrepancyReport: API.OperationMethod<
  CreateTestSetDiscrepancyReportRequest,
  CreateTestSetDiscrepancyReportResponse,
  CreateTestSetDiscrepancyReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166, __c20, 6) as any as S.Schema<CreateTestSetDiscrepancyReportRequest>,
  output: __S(167, __c20, 7) as any as S.Schema<CreateTestSetDiscrepancyReportResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTestSetDiscrepancyReport",
}));

export type CreateUploadUrlError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a pre-signed S3 write URL that you use to upload the zip
 * archive when importing a bot or a bot locale.
 */
export const createUploadUrl: API.OperationMethod<
  CreateUploadUrlRequest,
  CreateUploadUrlResponse,
  CreateUploadUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(168, __c21, 0) as any as S.Schema<CreateUploadUrlRequest>,
  output: __S(169, __c21, 1) as any as S.Schema<CreateUploadUrlResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUploadUrl",
}));

export type DeleteBotError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes all versions of a bot, including the `Draft`
 * version. To delete a specific version, use the
 * `DeleteBotVersion` operation.
 *
 * When you delete a bot, all of the resources contained in the bot are
 * also deleted. Deleting a bot removes all locales, intents, slot, and
 * slot types defined for the bot.
 *
 * If a bot has an alias, the `DeleteBot` operation returns
 * a `ResourceInUseException` exception. If you want to delete
 * the bot and the alias, set the `skipResourceInUseCheck`
 * parameter to `true`.
 */
export const deleteBot: API.OperationMethod<
  DeleteBotRequest,
  DeleteBotResponse,
  DeleteBotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(170, __c21, 2) as any as S.Schema<DeleteBotRequest>,
  output: __S(171, __c21, 3) as any as S.Schema<DeleteBotResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBot",
}));

export type DeleteBotAliasError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified bot alias.
 */
export const deleteBotAlias: API.OperationMethod<
  DeleteBotAliasRequest,
  DeleteBotAliasResponse,
  DeleteBotAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(172, __c21, 4) as any as S.Schema<DeleteBotAliasRequest>,
  output: __S(173, __c21, 5) as any as S.Schema<DeleteBotAliasResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBotAlias",
}));

export type DeleteBotAnalyzerRecommendationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Permanently deletes the recommendations and analysis results for a specific bot analysis request. This operation is provided for GDPR compliance and cannot be undone.
 *
 * After deletion, the analysis results cannot be retrieved. The analysis request ID will still appear in the history list, but attempting to describe the recommendations will return a `ResourceNotFoundException`.
 */
export const deleteBotAnalyzerRecommendation: API.OperationMethod<
  DeleteBotAnalyzerRecommendationRequest,
  DeleteBotAnalyzerRecommendationResponse,
  DeleteBotAnalyzerRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(174, __c21, 6) as any as S.Schema<DeleteBotAnalyzerRecommendationRequest>,
  output: __S(175, __c21, 7) as any as S.Schema<DeleteBotAnalyzerRecommendationResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBotAnalyzerRecommendation",
}));

export type DeleteBotLocaleError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a locale from a bot.
 *
 * When you delete a locale, all intents, slots, and slot types defined
 * for the locale are also deleted.
 */
export const deleteBotLocale: API.OperationMethod<
  DeleteBotLocaleRequest,
  DeleteBotLocaleResponse,
  DeleteBotLocaleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<DeleteBotLocaleRequest>,
  output: __S(177, __c22, 1) as any as S.Schema<DeleteBotLocaleResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBotLocale",
}));

export type DeleteBotReplicaError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The action to delete the replicated bot in the secondary region.
 */
export const deleteBotReplica: API.OperationMethod<
  DeleteBotReplicaRequest,
  DeleteBotReplicaResponse,
  DeleteBotReplicaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178, __c22, 2) as any as S.Schema<DeleteBotReplicaRequest>,
  output: __S(179, __c22, 3) as any as S.Schema<DeleteBotReplicaResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBotReplica",
}));

export type DeleteBotVersionError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specific version of a bot. To delete all versions of a bot,
 * use the DeleteBot operation.
 */
export const deleteBotVersion: API.OperationMethod<
  DeleteBotVersionRequest,
  DeleteBotVersionResponse,
  DeleteBotVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180, __c22, 4) as any as S.Schema<DeleteBotVersionRequest>,
  output: __S(181, __c22, 5) as any as S.Schema<DeleteBotVersionResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBotVersion",
}));

export type DeleteCustomVocabularyError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a custom vocabulary from the specified locale
 * in the specified bot.
 */
export const deleteCustomVocabulary: API.OperationMethod<
  DeleteCustomVocabularyRequest,
  DeleteCustomVocabularyResponse,
  DeleteCustomVocabularyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<DeleteCustomVocabularyRequest>,
  output: __S(183, __c22, 7) as any as S.Schema<DeleteCustomVocabularyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomVocabulary",
}));

export type DeleteExportError =
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a previous export and the associated files stored in an S3
 * bucket.
 */
export const deleteExport: API.OperationMethod<
  DeleteExportRequest,
  DeleteExportResponse,
  DeleteExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184, __c23, 0) as any as S.Schema<DeleteExportRequest>,
  output: __S(185, __c23, 1) as any as S.Schema<DeleteExportResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExport",
}));

export type DeleteImportError =
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a previous import and the associated file stored in an S3
 * bucket.
 */
export const deleteImport: API.OperationMethod<
  DeleteImportRequest,
  DeleteImportResponse,
  DeleteImportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186, __c23, 2) as any as S.Schema<DeleteImportRequest>,
  output: __S(187, __c23, 3) as any as S.Schema<DeleteImportResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteImport",
}));

export type DeleteIntentError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified intent.
 *
 * Deleting an intent also deletes the slots associated with the
 * intent.
 */
export const deleteIntent: API.OperationMethod<
  DeleteIntentRequest,
  DeleteIntentResponse,
  DeleteIntentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188, __c23, 4) as any as S.Schema<DeleteIntentRequest>,
  output: __S(189, __c23, 5) as any as S.Schema<DeleteIntentResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIntent",
}));

export type DeleteResourcePolicyError =
  | InternalServerException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes an existing policy from a bot or bot alias. If the resource
 * doesn't have a policy attached, Amazon Lex returns an exception.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190, __c23, 6) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<DeleteResourcePolicyResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteResourcePolicyStatementError =
  | InternalServerException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a policy statement from a resource policy. If you delete the
 * last statement from a policy, the policy is deleted. If you specify a
 * statement ID that doesn't exist in the policy, or if the bot or bot
 * alias doesn't have a policy attached, Amazon Lex returns an
 * exception.
 *
 * You need to add the `DeleteResourcePolicy` or `UpdateResourcePolicy`
 * action to the bot role in order to call the API.
 */
export const deleteResourcePolicyStatement: API.OperationMethod<
  DeleteResourcePolicyStatementRequest,
  DeleteResourcePolicyStatementResponse,
  DeleteResourcePolicyStatementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191, __c23, 7) as any as S.Schema<DeleteResourcePolicyStatementRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<DeleteResourcePolicyStatementResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicyStatement",
}));

export type DeleteSlotError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified slot from an intent.
 */
export const deleteSlot: API.OperationMethod<
  DeleteSlotRequest,
  DeleteSlotResponse,
  DeleteSlotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192, __c24, 0) as any as S.Schema<DeleteSlotRequest>,
  output: __S(189, __c23, 5) as any as S.Schema<DeleteSlotResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSlot",
}));

export type DeleteSlotTypeError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a slot type from a bot locale.
 *
 * If a slot is using the slot type, Amazon Lex throws a
 * `ResourceInUseException` exception. To avoid the
 * exception, set the `skipResourceInUseCheck` parameter to
 * `true`.
 */
export const deleteSlotType: API.OperationMethod<
  DeleteSlotTypeRequest,
  DeleteSlotTypeResponse,
  DeleteSlotTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<DeleteSlotTypeRequest>,
  output: __S(189, __c23, 5) as any as S.Schema<DeleteSlotTypeResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSlotType",
}));

export type DeleteTestSetError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The action to delete the selected test set.
 */
export const deleteTestSet: API.OperationMethod<
  DeleteTestSetRequest,
  DeleteTestSetResponse,
  DeleteTestSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194, __c24, 2) as any as S.Schema<DeleteTestSetRequest>,
  output: __S(189, __c23, 5) as any as S.Schema<DeleteTestSetResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTestSet",
}));

export type DeleteUtterancesError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes stored utterances.
 *
 * Amazon Lex stores the utterances that users send to your bot. Utterances
 * are stored for 15 days for use with the ListAggregatedUtterances operation, and
 * then stored indefinitely for use in improving the ability of your bot
 * to respond to user input..
 *
 * Use the `DeleteUtterances` operation to manually delete
 * utterances for a specific session. When you use the
 * `DeleteUtterances` operation, utterances stored for
 * improving your bot's ability to respond to user input are deleted
 * immediately. Utterances stored for use with the
 * `ListAggregatedUtterances` operation are deleted after 15
 * days.
 */
export const deleteUtterances: API.OperationMethod<
  DeleteUtterancesRequest,
  DeleteUtterancesResponse,
  DeleteUtterancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(195, __c24, 3) as any as S.Schema<DeleteUtterancesRequest>,
  output: __S(189, __c23, 5) as any as S.Schema<DeleteUtterancesResponse>,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUtterances",
}));

export type DescribeBotError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides metadata information about a bot.
 */
export const describeBot: API.OperationMethod<
  DescribeBotRequest,
  DescribeBotResponse,
  DescribeBotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196, __c24, 4) as any as S.Schema<DescribeBotRequest>,
  output: __S(197, __c24, 5) as any as S.Schema<DescribeBotResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBot",
}));

export type DescribeBotAliasError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get information about a specific bot alias.
 */
export const describeBotAlias: API.OperationMethod<
  DescribeBotAliasRequest,
  DescribeBotAliasResponse,
  DescribeBotAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198, __c24, 6) as any as S.Schema<DescribeBotAliasRequest>,
  output: __S(202, __c25, 2) as any as S.Schema<DescribeBotAliasResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBotAlias",
}));

export type DescribeBotAnalyzerRecommendationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the analysis results and recommendations for bot optimization. The analysis must be in `Available` status before recommendations can be retrieved.
 *
 * Recommendations are returned with pagination support. Each recommendation includes the issue location, priority level, detailed description, and proposed fix.
 */
export const describeBotAnalyzerRecommendation: API.PaginatedOperationMethod<
  DescribeBotAnalyzerRecommendationRequest,
  DescribeBotAnalyzerRecommendationResponse,
  DescribeBotAnalyzerRecommendationError,
  Credentials | HttpClient.HttpClient,
  BotAnalyzerRecommendation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(203, __c25, 3) as any as S.Schema<DescribeBotAnalyzerRecommendationRequest>,
  output: __S(207, __c25, 7) as any as S.Schema<DescribeBotAnalyzerRecommendationResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBotAnalyzerRecommendation",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "botAnalyzerRecommendationList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeBotLocaleError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the settings that a bot has for a specific locale.
 */
export const describeBotLocale: API.OperationMethod<
  DescribeBotLocaleRequest,
  DescribeBotLocaleResponse,
  DescribeBotLocaleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208, __c26, 0) as any as S.Schema<DescribeBotLocaleRequest>,
  output: __S(211, __c26, 3) as any as S.Schema<DescribeBotLocaleResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBotLocale",
}));

export type DescribeBotRecommendationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides metadata information about a bot recommendation. This
 * information will enable you to get a description on the request inputs,
 * to download associated transcripts after processing is complete, and to
 * download intents and slot-types generated by the bot
 * recommendation.
 */
export const describeBotRecommendation: API.OperationMethod<
  DescribeBotRecommendationRequest,
  DescribeBotRecommendationResponse,
  DescribeBotRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(212, __c26, 4) as any as S.Schema<DescribeBotRecommendationRequest>,
  output: __S(224, __c28, 0) as any as S.Schema<DescribeBotRecommendationResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBotRecommendation",
}));

export type DescribeBotReplicaError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Monitors the bot replication status through the UI console.
 */
export const describeBotReplica: API.OperationMethod<
  DescribeBotReplicaRequest,
  DescribeBotReplicaResponse,
  DescribeBotReplicaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(225, __c28, 1) as any as S.Schema<DescribeBotReplicaRequest>,
  output: __S(226, __c28, 2) as any as S.Schema<DescribeBotReplicaResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBotReplica",
}));

export type DescribeBotResourceGenerationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a request to generate a bot through natural language description, made through
 * the `StartBotResource` API. Use the `generatedBotLocaleUrl`
 * to retrieve the Amazon S3 object containing the bot locale configuration. You can
 * then modify and import this configuration.
 */
export const describeBotResourceGeneration: API.OperationMethod<
  DescribeBotResourceGenerationRequest,
  DescribeBotResourceGenerationResponse,
  DescribeBotResourceGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(227, __c28, 3) as any as S.Schema<DescribeBotResourceGenerationRequest>,
  output: __S(228, __c28, 4) as any as S.Schema<DescribeBotResourceGenerationResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBotResourceGeneration",
}));

export type DescribeBotVersionError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides metadata about a version of a bot.
 */
export const describeBotVersion: API.OperationMethod<
  DescribeBotVersionRequest,
  DescribeBotVersionResponse,
  DescribeBotVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(229, __c28, 5) as any as S.Schema<DescribeBotVersionRequest>,
  output: __S(230, __c28, 6) as any as S.Schema<DescribeBotVersionResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBotVersion",
}));

export type DescribeCustomVocabularyMetadataError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides metadata information about a custom vocabulary.
 */
export const describeCustomVocabularyMetadata: API.OperationMethod<
  DescribeCustomVocabularyMetadataRequest,
  DescribeCustomVocabularyMetadataResponse,
  DescribeCustomVocabularyMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(231, __c28, 7) as any as S.Schema<DescribeCustomVocabularyMetadataRequest>,
  output: __S(232, __c29, 0) as any as S.Schema<DescribeCustomVocabularyMetadataResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCustomVocabularyMetadata",
}));

export type DescribeExportError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specific export.
 */
export const describeExport: API.OperationMethod<
  DescribeExportRequest,
  DescribeExportResponse,
  DescribeExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(233, __c29, 1) as any as S.Schema<DescribeExportRequest>,
  output: __S(234, __c29, 2) as any as S.Schema<DescribeExportResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExport",
}));

export type DescribeImportError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specific import.
 */
export const describeImport: API.OperationMethod<
  DescribeImportRequest,
  DescribeImportResponse,
  DescribeImportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(235, __c29, 3) as any as S.Schema<DescribeImportRequest>,
  output: __S(242, __c30, 2) as any as S.Schema<DescribeImportResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImport",
}));

export type DescribeIntentError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns metadata about an intent.
 */
export const describeIntent: API.OperationMethod<
  DescribeIntentRequest,
  DescribeIntentResponse,
  DescribeIntentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243, __c30, 3) as any as S.Schema<DescribeIntentRequest>,
  output: __S(246, __c30, 6) as any as S.Schema<DescribeIntentResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeIntent",
}));

export type DescribeResourcePolicyError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the resource policy and policy revision for a bot or bot
 * alias.
 */
export const describeResourcePolicy: API.OperationMethod<
  DescribeResourcePolicyRequest,
  DescribeResourcePolicyResponse,
  DescribeResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(247, __c30, 7) as any as S.Schema<DescribeResourcePolicyRequest>,
  output: __S(248, __c31, 0) as any as S.Schema<DescribeResourcePolicyResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourcePolicy",
}));

export type DescribeSlotError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets metadata information about a slot.
 */
export const describeSlot: API.OperationMethod<
  DescribeSlotRequest,
  DescribeSlotResponse,
  DescribeSlotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(249, __c31, 1) as any as S.Schema<DescribeSlotRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<DescribeSlotResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSlot",
}));

export type DescribeSlotTypeError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets metadata information about a slot type.
 */
export const describeSlotType: API.OperationMethod<
  DescribeSlotTypeRequest,
  DescribeSlotTypeResponse,
  DescribeSlotTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(251, __c31, 3) as any as S.Schema<DescribeSlotTypeRequest>,
  output: __S(252, __c31, 4) as any as S.Schema<DescribeSlotTypeResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSlotType",
}));

export type DescribeTestExecutionError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets metadata information about the test execution.
 */
export const describeTestExecution: API.OperationMethod<
  DescribeTestExecutionRequest,
  DescribeTestExecutionResponse,
  DescribeTestExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(253, __c31, 5) as any as S.Schema<DescribeTestExecutionRequest>,
  output: __S(255, __c31, 7) as any as S.Schema<DescribeTestExecutionResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTestExecution",
}));

export type DescribeTestSetError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets metadata information about the test set.
 */
export const describeTestSet: API.OperationMethod<
  DescribeTestSetRequest,
  DescribeTestSetResponse,
  DescribeTestSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(256, __c32, 0) as any as S.Schema<DescribeTestSetRequest>,
  output: __S(257, __c32, 1) as any as S.Schema<DescribeTestSetResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTestSet",
}));

export type DescribeTestSetDiscrepancyReportError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets metadata information about the test set discrepancy report.
 */
export const describeTestSetDiscrepancyReport: API.OperationMethod<
  DescribeTestSetDiscrepancyReportRequest,
  DescribeTestSetDiscrepancyReportResponse,
  DescribeTestSetDiscrepancyReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(258, __c32, 2) as any as S.Schema<DescribeTestSetDiscrepancyReportRequest>,
  output: __S(264, __c33, 0) as any as S.Schema<DescribeTestSetDiscrepancyReportResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTestSetDiscrepancyReport",
}));

export type DescribeTestSetGenerationError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets metadata information about the test set generation.
 */
export const describeTestSetGeneration: API.OperationMethod<
  DescribeTestSetGenerationRequest,
  DescribeTestSetGenerationResponse,
  DescribeTestSetGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(265, __c33, 1) as any as S.Schema<DescribeTestSetGenerationRequest>,
  output: __S(269, __c33, 5) as any as S.Schema<DescribeTestSetGenerationResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTestSetGeneration",
}));

export type GenerateBotElementError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Generates sample utterances for an intent.
 */
export const generateBotElement: API.OperationMethod<
  GenerateBotElementRequest,
  GenerateBotElementResponse,
  GenerateBotElementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(270, __c33, 6) as any as S.Schema<GenerateBotElementRequest>,
  output: __S(271, __c33, 7) as any as S.Schema<GenerateBotElementResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateBotElement",
}));

export type GetTestExecutionArtifactsUrlError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The pre-signed Amazon S3 URL to download the test execution result artifacts.
 */
export const getTestExecutionArtifactsUrl: API.OperationMethod<
  GetTestExecutionArtifactsUrlRequest,
  GetTestExecutionArtifactsUrlResponse,
  GetTestExecutionArtifactsUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(272, __c34, 0) as any as S.Schema<GetTestExecutionArtifactsUrlRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<GetTestExecutionArtifactsUrlResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTestExecutionArtifactsUrl",
}));

export type ListAggregatedUtterancesError =
  | InternalServerException
  | PreconditionFailedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides a list of utterances that users have sent to the
 * bot.
 *
 * Utterances are aggregated by the text of the utterance. For example,
 * all instances where customers used the phrase "I want to order pizza"
 * are aggregated into the same line in the response.
 *
 * You can see both detected utterances and missed utterances. A
 * detected utterance is where the bot properly recognized the utterance
 * and activated the associated intent. A missed utterance was not
 * recognized by the bot and didn't activate an intent.
 *
 * Utterances can be aggregated for a bot alias or for a bot version,
 * but not both at the same time.
 *
 * Utterances statistics are not generated under the following
 * conditions:
 *
 * - The `childDirected` field was set to true when the
 * bot was created.
 *
 * - You are using slot obfuscation with one or more slots.
 *
 * - You opted out of participating in improving Amazon Lex.
 */
export const listAggregatedUtterances: API.PaginatedOperationMethod<
  ListAggregatedUtterancesRequest,
  ListAggregatedUtterancesResponse,
  ListAggregatedUtterancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(279, __c34, 7) as any as S.Schema<ListAggregatedUtterancesRequest>,
  output: __S(282, __c35, 2) as any as S.Schema<ListAggregatedUtterancesResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAggregatedUtterances",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBotAliasesError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets a list of aliases for the specified bot.
 */
export const listBotAliases: API.PaginatedOperationMethod<
  ListBotAliasesRequest,
  ListBotAliasesResponse,
  ListBotAliasesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<ListBotAliasesRequest>,
  output: __S(286, __c35, 6) as any as S.Schema<ListBotAliasesResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBotAliases",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBotAliasReplicasError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The action to list the replicated bots created from the source bot alias.
 */
export const listBotAliasReplicas: API.PaginatedOperationMethod<
  ListBotAliasReplicasRequest,
  ListBotAliasReplicasResponse,
  ListBotAliasReplicasError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(287, __c35, 7) as any as S.Schema<ListBotAliasReplicasRequest>,
  output: __S(290, __c36, 2) as any as S.Schema<ListBotAliasReplicasResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBotAliasReplicas",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBotAnalyzerHistoryError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of historical bot analysis executions for a specific bot. You can filter the results by locale and bot version.
 *
 * The history includes all analysis executions regardless of their status, allowing you to track past analyses and their outcomes.
 */
export const listBotAnalyzerHistory: API.PaginatedOperationMethod<
  ListBotAnalyzerHistoryRequest,
  ListBotAnalyzerHistoryResponse,
  ListBotAnalyzerHistoryError,
  Credentials | HttpClient.HttpClient,
  BotAnalyzerHistorySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(291, __c36, 3) as any as S.Schema<ListBotAnalyzerHistoryRequest>,
  output: __S(294, __c36, 6) as any as S.Schema<ListBotAnalyzerHistoryResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBotAnalyzerHistory",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "botAnalyzerHistoryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBotLocalesError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of locales for the specified bot.
 */
export const listBotLocales: API.PaginatedOperationMethod<
  ListBotLocalesRequest,
  ListBotLocalesResponse,
  ListBotLocalesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(298, __c37, 2) as any as S.Schema<ListBotLocalesRequest>,
  output: __S(301, __c37, 5) as any as S.Schema<ListBotLocalesResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBotLocales",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBotRecommendationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a list of bot recommendations that meet the specified
 * criteria.
 */
export const listBotRecommendations: API.PaginatedOperationMethod<
  ListBotRecommendationsRequest,
  ListBotRecommendationsResponse,
  ListBotRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(302, __c37, 6) as any as S.Schema<ListBotRecommendationsRequest>,
  output: __S(305, __c38, 1) as any as S.Schema<ListBotRecommendationsResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBotRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBotReplicasError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The action to list the replicated bots.
 */
export const listBotReplicas: API.OperationMethod<
  ListBotReplicasRequest,
  ListBotReplicasResponse,
  ListBotReplicasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(306, __c38, 2) as any as S.Schema<ListBotReplicasRequest>,
  output: __S(309, __c38, 5) as any as S.Schema<ListBotReplicasResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBotReplicas",
}));

export type ListBotResourceGenerationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the generation requests made for a bot locale.
 */
export const listBotResourceGenerations: API.PaginatedOperationMethod<
  ListBotResourceGenerationsRequest,
  ListBotResourceGenerationsResponse,
  ListBotResourceGenerationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(310, __c38, 6) as any as S.Schema<ListBotResourceGenerationsRequest>,
  output: __S(313, __c39, 1) as any as S.Schema<ListBotResourceGenerationsResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBotResourceGenerations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBotsError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of available bots.
 */
export const listBots: API.PaginatedOperationMethod<
  ListBotsRequest,
  ListBotsResponse,
  ListBotsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(314, __c39, 2) as any as S.Schema<ListBotsRequest>,
  output: __S(317, __c39, 5) as any as S.Schema<ListBotsResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBots",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBotVersionReplicasError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Contains information about all the versions replication statuses applicable for Global Resiliency.
 */
export const listBotVersionReplicas: API.PaginatedOperationMethod<
  ListBotVersionReplicasRequest,
  ListBotVersionReplicasResponse,
  ListBotVersionReplicasError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(318, __c39, 6) as any as S.Schema<ListBotVersionReplicasRequest>,
  output: __S(321, __c40, 1) as any as S.Schema<ListBotVersionReplicasResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBotVersionReplicas",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBotVersionsError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about all of the versions of a bot.
 *
 * The `ListBotVersions` operation returns a summary of each
 * version of a bot. For example, if a bot has three numbered versions,
 * the `ListBotVersions` operation returns for summaries, one
 * for each numbered version and one for the `DRAFT`
 * version.
 *
 * The `ListBotVersions` operation always returns at least
 * one version, the `DRAFT` version.
 */
export const listBotVersions: API.PaginatedOperationMethod<
  ListBotVersionsRequest,
  ListBotVersionsResponse,
  ListBotVersionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(322, __c40, 2) as any as S.Schema<ListBotVersionsRequest>,
  output: __S(325, __c40, 5) as any as S.Schema<ListBotVersionsResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBotVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBuiltInIntentsError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of built-in intents provided by Amazon Lex that you can use
 * in your bot.
 *
 * To use a built-in intent as a the base for your own intent, include
 * the built-in intent signature in the `parentIntentSignature`
 * parameter when you call the `CreateIntent` operation. For
 * more information, see CreateIntent.
 */
export const listBuiltInIntents: API.PaginatedOperationMethod<
  ListBuiltInIntentsRequest,
  ListBuiltInIntentsResponse,
  ListBuiltInIntentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(326, __c40, 6) as any as S.Schema<ListBuiltInIntentsRequest>,
  output: __S(329, __c41, 1) as any as S.Schema<ListBuiltInIntentsResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBuiltInIntents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBuiltInSlotTypesError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of built-in slot types that meet the specified
 * criteria.
 */
export const listBuiltInSlotTypes: API.PaginatedOperationMethod<
  ListBuiltInSlotTypesRequest,
  ListBuiltInSlotTypesResponse,
  ListBuiltInSlotTypesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(330, __c41, 2) as any as S.Schema<ListBuiltInSlotTypesRequest>,
  output: __S(333, __c41, 5) as any as S.Schema<ListBuiltInSlotTypesResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBuiltInSlotTypes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCustomVocabularyItemsError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Paginated list of custom vocabulary items for a given bot locale's
 * custom vocabulary.
 */
export const listCustomVocabularyItems: API.PaginatedOperationMethod<
  ListCustomVocabularyItemsRequest,
  ListCustomVocabularyItemsResponse,
  ListCustomVocabularyItemsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(334, __c41, 6) as any as S.Schema<ListCustomVocabularyItemsRequest>,
  output: __S(335, __c41, 7) as any as S.Schema<ListCustomVocabularyItemsResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomVocabularyItems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExportsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the exports for a bot, bot locale, or custom vocabulary.
 * Exports are kept in the list for 7 days.
 */
export const listExports: API.PaginatedOperationMethod<
  ListExportsRequest,
  ListExportsResponse,
  ListExportsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(336, __c42, 0) as any as S.Schema<ListExportsRequest>,
  output: __S(339, __c42, 3) as any as S.Schema<ListExportsResponse>,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImportsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the imports for a bot, bot locale, or custom vocabulary.
 * Imports are kept in the list for 7 days.
 */
export const listImports: API.PaginatedOperationMethod<
  ListImportsRequest,
  ListImportsResponse,
  ListImportsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(340, __c42, 4) as any as S.Schema<ListImportsRequest>,
  output: __S(343, __c42, 7) as any as S.Schema<ListImportsResponse>,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIntentMetricsError =
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves summary metrics for the intents in your bot. The following fields are required:
 *
 * - `metrics` - A list of AnalyticsIntentMetric objects. In each object, use the `name` field to specify the metric to calculate, the `statistic` field to specify whether to calculate the `Sum`, `Average`, or `Max` number, and the `order` field to specify whether to sort the results in `Ascending` or `Descending` order.
 *
 * - `startDateTime` and `endDateTime` - Define a time range for which you want to retrieve results.
 *
 * Of the optional fields, you can organize the results in the following ways:
 *
 * - Use the `filters` field to filter the results, the `groupBy` field to specify categories by which to group the results, and the `binBy` field to specify time intervals by which to group the results.
 *
 * - Use the `maxResults` field to limit the number of results to return in a single response and the `nextToken` field to return the next batch of results if the response does not return the full set of results.
 *
 * Note that an `order` field exists in both `binBy` and `metrics`. You can specify only one `order` in a given request.
 */
export const listIntentMetrics: API.PaginatedOperationMethod<
  ListIntentMetricsRequest,
  ListIntentMetricsResponse,
  ListIntentMetricsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(352, __c44, 0) as any as S.Schema<ListIntentMetricsRequest>,
  output: __S(361, __c45, 1) as any as S.Schema<ListIntentMetricsResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntentMetrics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIntentPathsError =
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following fields are required:
 *
 * - `startDateTime` and `endDateTime` - Define a time range for which you want to retrieve results.
 *
 * - `intentPath` - Define an order of intents for which you want to retrieve metrics. Separate intents in the path with a forward slash. For example, populate the `intentPath` field with `/BookCar/BookHotel` to see details about how many times users invoked the `BookCar` and `BookHotel` intents in that order.
 *
 * Use the optional `filters` field to filter the results.
 */
export const listIntentPaths: API.OperationMethod<
  ListIntentPathsRequest,
  ListIntentPathsResponse,
  ListIntentPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(362, __c45, 2) as any as S.Schema<ListIntentPathsRequest>,
  output: __S(365, __c45, 5) as any as S.Schema<ListIntentPathsResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntentPaths",
}));

export type ListIntentsError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Get a list of intents that meet the specified criteria.
 */
export const listIntents: API.PaginatedOperationMethod<
  ListIntentsRequest,
  ListIntentsResponse,
  ListIntentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(366, __c45, 6) as any as S.Schema<ListIntentsRequest>,
  output: __S(369, __c46, 1) as any as S.Schema<ListIntentsResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIntentStageMetricsError =
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves summary metrics for the stages within intents in your bot. The following fields are required:
 *
 * - `metrics` - A list of AnalyticsIntentStageMetric objects. In each object, use the `name` field to specify the metric to calculate, the `statistic` field to specify whether to calculate the `Sum`, `Average`, or `Max` number, and the `order` field to specify whether to sort the results in `Ascending` or `Descending` order.
 *
 * - `startDateTime` and `endDateTime` - Define a time range for which you want to retrieve results.
 *
 * Of the optional fields, you can organize the results in the following ways:
 *
 * - Use the `filters` field to filter the results, the `groupBy` field to specify categories by which to group the results, and the `binBy` field to specify time intervals by which to group the results.
 *
 * - Use the `maxResults` field to limit the number of results to return in a single response and the `nextToken` field to return the next batch of results if the response does not return the full set of results.
 *
 * Note that an `order` field exists in both `binBy` and `metrics`. You can only specify one `order` in a given request.
 */
export const listIntentStageMetrics: API.PaginatedOperationMethod<
  ListIntentStageMetricsRequest,
  ListIntentStageMetricsResponse,
  ListIntentStageMetricsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(374, __c46, 6) as any as S.Schema<ListIntentStageMetricsRequest>,
  output: __S(379, __c47, 3) as any as S.Schema<ListIntentStageMetricsResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntentStageMetrics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecommendedIntentsError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of recommended intents provided by the bot
 * recommendation that you can use in your bot. Intents in the
 * response are ordered by relevance.
 */
export const listRecommendedIntents: API.PaginatedOperationMethod<
  ListRecommendedIntentsRequest,
  ListRecommendedIntentsResponse,
  ListRecommendedIntentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(380, __c47, 4) as any as S.Schema<ListRecommendedIntentsRequest>,
  output: __S(383, __c47, 7) as any as S.Schema<ListRecommendedIntentsResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendedIntents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSessionAnalyticsDataError =
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of metadata for individual user sessions with your bot. The `startDateTime` and `endDateTime` fields are required. These fields define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways:
 *
 * - Use the `filters` field to filter the results and the `sortBy` field to specify the values by which to sort the results.
 *
 * - Use the `maxResults` field to limit the number of results to return in a single response and the `nextToken` field to return the next batch of results if the response does not return the full set of results.
 */
export const listSessionAnalyticsData: API.PaginatedOperationMethod<
  ListSessionAnalyticsDataRequest,
  ListSessionAnalyticsDataResponse,
  ListSessionAnalyticsDataError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(385, __c48, 1) as any as S.Schema<ListSessionAnalyticsDataRequest>,
  output: __S(390, __c48, 6) as any as S.Schema<ListSessionAnalyticsDataResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessionAnalyticsData",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSessionMetricsError =
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves summary metrics for the user sessions with your bot. The following fields are required:
 *
 * - `metrics` - A list of AnalyticsSessionMetric objects. In each object, use the `name` field to specify the metric to calculate, the `statistic` field to specify whether to calculate the `Sum`, `Average`, or `Max` number, and the `order` field to specify whether to sort the results in `Ascending` or `Descending` order.
 *
 * - `startDateTime` and `endDateTime` - Define a time range for which you want to retrieve results.
 *
 * Of the optional fields, you can organize the results in the following ways:
 *
 * - Use the `filters` field to filter the results, the `groupBy` field to specify categories by which to group the results, and the `binBy` field to specify time intervals by which to group the results.
 *
 * - Use the `maxResults` field to limit the number of results to return in a single response and the `nextToken` field to return the next batch of results if the response does not return the full set of results.
 *
 * Note that an `order` field exists in both `binBy` and `metrics`. Currently, you can specify it in either field, but not in both.
 */
export const listSessionMetrics: API.PaginatedOperationMethod<
  ListSessionMetricsRequest,
  ListSessionMetricsResponse,
  ListSessionMetricsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(391, __c48, 7) as any as S.Schema<ListSessionMetricsRequest>,
  output: __S(361, __c45, 1) as any as S.Schema<ListSessionMetricsResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessionMetrics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSlotsError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of slots that match the specified criteria.
 */
export const listSlots: API.PaginatedOperationMethod<
  ListSlotsRequest,
  ListSlotsResponse,
  ListSlotsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(392, __c49, 0) as any as S.Schema<ListSlotsRequest>,
  output: __S(395, __c49, 3) as any as S.Schema<ListSlotsResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSlots",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSlotTypesError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets a list of slot types that match the specified criteria.
 */
export const listSlotTypes: API.PaginatedOperationMethod<
  ListSlotTypesRequest,
  ListSlotTypesResponse,
  ListSlotTypesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(396, __c49, 4) as any as S.Schema<ListSlotTypesRequest>,
  output: __S(399, __c49, 7) as any as S.Schema<ListSlotTypesResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSlotTypes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of tags associated with a resource. Only bots, bot
 * aliases, and bot channels can have tags associated with them.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(400, __c50, 0) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(401, __c50, 1) as any as S.Schema<ListTagsForResourceResponse>,
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

export type ListTestExecutionResultItemsError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of test execution result items.
 */
export const listTestExecutionResultItems: API.PaginatedOperationMethod<
  ListTestExecutionResultItemsRequest,
  ListTestExecutionResultItemsResponse,
  ListTestExecutionResultItemsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(404, __c50, 4) as any as S.Schema<ListTestExecutionResultItemsRequest>,
  output: __S(450, __c56, 2) as any as S.Schema<ListTestExecutionResultItemsResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTestExecutionResultItems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTestExecutionsError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The list of test set executions.
 */
export const listTestExecutions: API.PaginatedOperationMethod<
  ListTestExecutionsRequest,
  ListTestExecutionsResponse,
  ListTestExecutionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(451, __c56, 3) as any as S.Schema<ListTestExecutionsRequest>,
  output: __S(454, __c56, 6) as any as S.Schema<ListTestExecutionsResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTestExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTestSetRecordsError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The list of test set records.
 */
export const listTestSetRecords: API.PaginatedOperationMethod<
  ListTestSetRecordsRequest,
  ListTestSetRecordsResponse,
  ListTestSetRecordsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(455, __c56, 7) as any as S.Schema<ListTestSetRecordsRequest>,
  output: __S(461, __c57, 5) as any as S.Schema<ListTestSetRecordsResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTestSetRecords",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTestSetsError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The list of the test sets
 */
export const listTestSets: API.PaginatedOperationMethod<
  ListTestSetsRequest,
  ListTestSetsResponse,
  ListTestSetsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(462, __c57, 6) as any as S.Schema<ListTestSetsRequest>,
  output: __S(464, __c58, 0) as any as S.Schema<ListTestSetsResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTestSets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListUtteranceAnalyticsDataError =
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * To use this API operation, your IAM role must have permissions to
 * perform the ListAggregatedUtterances operation, which provides access to
 * utterance-related analytics. See Viewing utterance
 * statistics for the IAM policy to apply to the IAM role.
 *
 * Retrieves a list of metadata for individual user utterances to your bot. The following fields are required:
 *
 * - `startDateTime` and `endDateTime` - Define a time range for which you want to retrieve results.
 *
 * Of the optional fields, you can organize the results in the following ways:
 *
 * - Use the `filters` field to filter the results and the `sortBy` field to specify the values by which to sort the results.
 *
 * - Use the `maxResults` field to limit the number of results to return in a single response and the `nextToken` field to return the next batch of results if the response does not return the full set of results.
 */
export const listUtteranceAnalyticsData: API.PaginatedOperationMethod<
  ListUtteranceAnalyticsDataRequest,
  ListUtteranceAnalyticsDataResponse,
  ListUtteranceAnalyticsDataError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(465, __c58, 1) as any as S.Schema<ListUtteranceAnalyticsDataRequest>,
  output: __S(470, __c58, 6) as any as S.Schema<ListUtteranceAnalyticsDataResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUtteranceAnalyticsData",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListUtteranceMetricsError =
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * To use this API operation, your IAM role must have permissions to
 * perform the ListAggregatedUtterances operation, which provides access to
 * utterance-related analytics. See Viewing utterance
 * statistics for the IAM policy to apply to the IAM role.
 *
 * Retrieves summary metrics for the utterances in your bot. The following fields are required:
 *
 * - `metrics` - A list of AnalyticsUtteranceMetric objects. In each object, use the `name` field to specify the metric to calculate, the `statistic` field to specify whether to calculate the `Sum`, `Average`, or `Max` number, and the `order` field to specify whether to sort the results in `Ascending` or `Descending` order.
 *
 * - `startDateTime` and `endDateTime` - Define a time range for which you want to retrieve results.
 *
 * Of the optional fields, you can organize the results in the following ways:
 *
 * - Use the `filters` field to filter the results, the `groupBy` field to specify categories by which to group the results, and the `binBy` field to specify time intervals by which to group the results.
 *
 * - Use the `maxResults` field to limit the number of results to return in a single response and the `nextToken` field to return the next batch of results if the response does not return the full set of results.
 *
 * Note that an `order` field exists in both `binBy` and `metrics`. Currently, you can specify it in either field, but not in both.
 */
export const listUtteranceMetrics: API.PaginatedOperationMethod<
  ListUtteranceMetricsRequest,
  ListUtteranceMetricsResponse,
  ListUtteranceMetricsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(472, __c59, 0) as any as S.Schema<ListUtteranceMetricsRequest>,
  output: __S(477, __c59, 5) as any as S.Schema<ListUtteranceMetricsResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUtteranceMetrics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchAssociatedTranscriptsError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Search for associated transcripts that meet the specified
 * criteria.
 */
export const searchAssociatedTranscripts: API.OperationMethod<
  SearchAssociatedTranscriptsRequest,
  SearchAssociatedTranscriptsResponse,
  SearchAssociatedTranscriptsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(480, __c60, 0) as any as S.Schema<SearchAssociatedTranscriptsRequest>,
  output: __S(483, __c60, 3) as any as S.Schema<SearchAssociatedTranscriptsResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchAssociatedTranscripts",
}));

export type StartBotAnalyzerError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential issues and recommend improvements based on AWS best practices.
 *
 * The analysis examines your bot's configuration, including intents, utterances, slots, and conversation flows, to provide actionable recommendations for optimization.
 */
export const startBotAnalyzer: API.OperationMethod<
  StartBotAnalyzerRequest,
  StartBotAnalyzerResponse,
  StartBotAnalyzerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(484, __c60, 4) as any as S.Schema<StartBotAnalyzerRequest>,
  output: __S(485, __c60, 5) as any as S.Schema<StartBotAnalyzerResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartBotAnalyzer",
}));

export type StartBotRecommendationError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this to provide your transcript data, and to start the bot
 * recommendation process.
 */
export const startBotRecommendation: API.OperationMethod<
  StartBotRecommendationRequest,
  StartBotRecommendationResponse,
  StartBotRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(486, __c60, 6) as any as S.Schema<StartBotRecommendationRequest>,
  output: __S(487, __c60, 7) as any as S.Schema<StartBotRecommendationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartBotRecommendation",
}));

export type StartBotResourceGenerationError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a request for the descriptive bot builder to generate a bot locale configuration
 * based on the prompt you provide it. After you make this call, use the `DescribeBotResourceGeneration`
 * operation to check on the status of the generation and for the `generatedBotLocaleUrl` when the
 * generation is complete. Use that value to retrieve the Amazon S3 object containing the bot locale configuration. You can
 * then modify and import this configuration.
 */
export const startBotResourceGeneration: API.OperationMethod<
  StartBotResourceGenerationRequest,
  StartBotResourceGenerationResponse,
  StartBotResourceGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(488, __c61, 0) as any as S.Schema<StartBotResourceGenerationRequest>,
  output: __S(489, __c61, 1) as any as S.Schema<StartBotResourceGenerationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartBotResourceGeneration",
}));

export type StartImportError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts importing a bot, bot locale, or custom vocabulary from a zip
 * archive that you uploaded to an S3 bucket.
 */
export const startImport: API.OperationMethod<
  StartImportRequest,
  StartImportResponse,
  StartImportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(490, __c61, 2) as any as S.Schema<StartImportRequest>,
  output: __S(491, __c61, 3) as any as S.Schema<StartImportResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartImport",
}));

export type StartTestExecutionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The action to start test set execution.
 */
export const startTestExecution: API.OperationMethod<
  StartTestExecutionRequest,
  StartTestExecutionResponse,
  StartTestExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(492, __c61, 4) as any as S.Schema<StartTestExecutionRequest>,
  output: __S(493, __c61, 5) as any as S.Schema<StartTestExecutionResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTestExecution",
}));

export type StartTestSetGenerationError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The action to start the generation of test set.
 */
export const startTestSetGeneration: API.OperationMethod<
  StartTestSetGenerationRequest,
  StartTestSetGenerationResponse,
  StartTestSetGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(494, __c61, 6) as any as S.Schema<StartTestSetGenerationRequest>,
  output: __S(495, __c61, 7) as any as S.Schema<StartTestSetGenerationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTestSetGeneration",
}));

export type StopBotAnalyzerError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no recommendations will be generated.
 */
export const stopBotAnalyzer: API.OperationMethod<
  StopBotAnalyzerRequest,
  StopBotAnalyzerResponse,
  StopBotAnalyzerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(496, __c62, 0) as any as S.Schema<StopBotAnalyzerRequest>,
  output: __S(497, __c62, 1) as any as S.Schema<StopBotAnalyzerResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopBotAnalyzer",
}));

export type StopBotRecommendationError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stop an already running Bot Recommendation request.
 */
export const stopBotRecommendation: API.OperationMethod<
  StopBotRecommendationRequest,
  StopBotRecommendationResponse,
  StopBotRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(498, __c62, 2) as any as S.Schema<StopBotRecommendationRequest>,
  output: __S(499, __c62, 3) as any as S.Schema<StopBotRecommendationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopBotRecommendation",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds the specified tags to the specified resource. If a tag key
 * already exists, the existing value is replaced with the new
 * value.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(500, __c62, 4) as any as S.Schema<TagResourceRequest>,
  output: __S(189, __c23, 5) as any as S.Schema<TagResourceResponse>,
  errors: [
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
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a bot, bot alias, or bot channel.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(501, __c62, 5) as any as S.Schema<UntagResourceRequest>,
  output: __S(189, __c23, 5) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateBotError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an existing bot.
 */
export const updateBot: API.OperationMethod<
  UpdateBotRequest,
  UpdateBotResponse,
  UpdateBotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(502, __c62, 6) as any as S.Schema<UpdateBotRequest>,
  output: __S(503, __c62, 7) as any as S.Schema<UpdateBotResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBot",
}));

export type UpdateBotAliasError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an existing bot alias.
 */
export const updateBotAlias: API.OperationMethod<
  UpdateBotAliasRequest,
  UpdateBotAliasResponse,
  UpdateBotAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(504, __c63, 0) as any as S.Schema<UpdateBotAliasRequest>,
  output: __S(505, __c63, 1) as any as S.Schema<UpdateBotAliasResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBotAlias",
}));

export type UpdateBotLocaleError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the settings that a bot has for a specific locale.
 */
export const updateBotLocale: API.OperationMethod<
  UpdateBotLocaleRequest,
  UpdateBotLocaleResponse,
  UpdateBotLocaleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(506, __c63, 2) as any as S.Schema<UpdateBotLocaleRequest>,
  output: __S(507, __c63, 3) as any as S.Schema<UpdateBotLocaleResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBotLocale",
}));

export type UpdateBotRecommendationError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing bot recommendation request.
 */
export const updateBotRecommendation: API.OperationMethod<
  UpdateBotRecommendationRequest,
  UpdateBotRecommendationResponse,
  UpdateBotRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(508, __c63, 4) as any as S.Schema<UpdateBotRecommendationRequest>,
  output: __S(509, __c63, 5) as any as S.Schema<UpdateBotRecommendationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBotRecommendation",
}));

export type UpdateExportError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the password used to protect an export zip archive.
 *
 * The password is not required. If you don't supply a password, Amazon Lex
 * generates a zip file that is not protected by a password. This is the
 * archive that is available at the pre-signed S3 URL provided by the
 * DescribeExport operation.
 */
export const updateExport: API.OperationMethod<
  UpdateExportRequest,
  UpdateExportResponse,
  UpdateExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(510, __c63, 6) as any as S.Schema<UpdateExportRequest>,
  output: __S(337, __c42, 1) as any as S.Schema<UpdateExportResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateExport",
}));

export type UpdateIntentError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the settings for an intent.
 */
export const updateIntent: API.OperationMethod<
  UpdateIntentRequest,
  UpdateIntentResponse,
  UpdateIntentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(511, __c63, 7) as any as S.Schema<UpdateIntentRequest>,
  output: __S(246, __c30, 6) as any as S.Schema<UpdateIntentResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIntent",
}));

export type UpdateResourcePolicyError =
  | InternalServerException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Replaces the existing resource policy for a bot or bot alias with a
 * new one. If the policy doesn't exist, Amazon Lex returns an
 * exception.
 */
export const updateResourcePolicy: API.OperationMethod<
  UpdateResourcePolicyRequest,
  UpdateResourcePolicyResponse,
  UpdateResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(512, __c64, 0) as any as S.Schema<UpdateResourcePolicyRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<UpdateResourcePolicyResponse>,
  errors: [
    InternalServerException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResourcePolicy",
}));

export type UpdateSlotError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the settings for a slot.
 */
export const updateSlot: API.OperationMethod<
  UpdateSlotRequest,
  UpdateSlotResponse,
  UpdateSlotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(513, __c64, 1) as any as S.Schema<UpdateSlotRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<UpdateSlotResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSlot",
}));

export type UpdateSlotTypeError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an existing slot type.
 */
export const updateSlotType: API.OperationMethod<
  UpdateSlotTypeRequest,
  UpdateSlotTypeResponse,
  UpdateSlotTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(514, __c64, 2) as any as S.Schema<UpdateSlotTypeRequest>,
  output: __S(252, __c31, 4) as any as S.Schema<UpdateSlotTypeResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSlotType",
}));

export type UpdateTestSetError =
  | ConflictException
  | InternalServerException
  | PreconditionFailedException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The action to update the test set.
 */
export const updateTestSet: API.OperationMethod<
  UpdateTestSetRequest,
  UpdateTestSetResponse,
  UpdateTestSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(515, __c64, 3) as any as S.Schema<UpdateTestSetRequest>,
  output: __S(257, __c32, 1) as any as S.Schema<UpdateTestSetResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    PreconditionFailedException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTestSet",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          phrase: S.String,
          weight: S.optional(S.Number),
          displayAs: S.optional(S.String),
        }),
      ).annotate({ identifier: "NewCustomVocabularyItem" });
    case 1:
      return S.Array(__S(0, __c0, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          customVocabularyItemList: __S(1, __c0, 1),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchCreateCustomVocabularyItemRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          itemId: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FailedCustomVocabularyItem",
      });
    case 4:
      return S.Array(__S(3, __c0, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          itemId: S.String,
          phrase: S.String,
          weight: S.optional(S.Number),
          displayAs: S.optional(S.String),
        }),
      ).annotate({ identifier: "CustomVocabularyItem" });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          errors: S.optional(__S(4, __c0, 4)),
          resources: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({
        identifier: "BatchCreateCustomVocabularyItemResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ itemId: S.String })).annotate({
        identifier: "CustomVocabularyEntryId",
      });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          customVocabularyItemList: __S(9, __c1, 1),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteCustomVocabularyItemRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          customVocabularyItemList: __S(6, __c0, 6),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateCustomVocabularyItemRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BuildBotLocaleRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botLocaleStatus: S.optional(S.String),
          lastBuildSubmittedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BuildBotLocaleResponse" });
    case 6:
      return S.suspend(() => S.Struct({ childDirected: S.Boolean })).annotate({
        identifier: "DataPrivacy",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botMemberId: S.String,
          botMemberName: S.String,
          botMemberAliasId: S.String,
          botMemberAliasName: S.String,
          botMemberVersion: S.String,
        }),
      ).annotate({ identifier: "BotMember" });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() => S.Struct({ enabled: S.Boolean })).annotate({
        identifier: "ErrorLogSettings",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botName: S.String,
          description: S.optional(S.String),
          roleArn: S.String,
          dataPrivacy: __S(14, __c1, 6),
          idleSessionTTLInSeconds: S.Number,
          botTags: S.optional(__S(15, __c1, 7)),
          testBotAliasTags: S.optional(__S(15, __c1, 7)),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17, __c2, 1)),
          errorLogSettings: S.optional(__S(18, __c2, 2)),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/bots" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateBotRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botName: S.optional(S.String),
          description: S.optional(S.String),
          roleArn: S.optional(S.String),
          dataPrivacy: S.optional(__S(14, __c1, 6)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botTags: S.optional(__S(15, __c1, 7)),
          testBotAliasTags: S.optional(__S(15, __c1, 7)),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17, __c2, 1)),
          errorLogSettings: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({ identifier: "CreateBotResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ lambdaARN: S.String, codeHookInterfaceVersion: S.String }),
      ).annotate({ identifier: "LambdaCodeHook" });
    case 6:
      return S.suspend(() => S.Struct({ lambdaCodeHook: __S(21, __c2, 5) })).annotate({
        identifier: "CodeHookSpecification",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ enabled: S.Boolean, codeHookSpecification: S.optional(__S(22, __c2, 6)) }),
      ).annotate({ identifier: "BotAliasLocaleSettings" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(23, __c2, 7).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({ cloudWatchLogGroupArn: S.String, logPrefix: S.String }),
      ).annotate({
        identifier: "CloudWatchLogGroupLogDestination",
      });
    case 2:
      return S.suspend(() => S.Struct({ cloudWatch: __S(25, __c3, 1) })).annotate({
        identifier: "TextLogDestination",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          destination: __S(26, __c3, 2),
          selectiveLoggingEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TextLogSetting" });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ kmsKeyArn: S.optional(S.String), s3BucketArn: S.String, logPrefix: S.String }),
      ).annotate({ identifier: "S3BucketLogDestination" });
    case 6:
      return S.suspend(() => S.Struct({ s3Bucket: __S(29, __c3, 5) })).annotate({
        identifier: "AudioLogDestination",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          destination: __S(30, __c3, 6),
          selectiveLoggingEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AudioLogSetting" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31, __c3, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          textLogSettings: S.optional(__S(28, __c3, 4)),
          audioLogSettings: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({ identifier: "ConversationLogSettings" });
    case 2:
      return S.suspend(() => S.Struct({ detectSentiment: S.Boolean })).annotate({
        identifier: "SentimentAnalysisSettings",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botAliasName: S.String,
          description: S.optional(S.String),
          botVersion: S.optional(S.String),
          botAliasLocaleSettings: S.optional(__S(24, __c3, 0)),
          conversationLogSettings: S.optional(__S(33, __c4, 1)),
          sentimentAnalysisSettings: S.optional(__S(34, __c4, 2)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          tags: S.optional(__S(15, __c1, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/bots/{botId}/botaliases" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateBotAliasRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.optional(S.String),
          botAliasName: S.optional(S.String),
          description: S.optional(S.String),
          botVersion: S.optional(S.String),
          botAliasLocaleSettings: S.optional(__S(24, __c3, 0)),
          conversationLogSettings: S.optional(__S(33, __c4, 1)),
          sentimentAnalysisSettings: S.optional(__S(34, __c4, 2)),
          botAliasStatus: S.optional(S.String),
          botId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "CreateBotAliasResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ engine: S.optional(S.String), voiceId: S.String }),
      ).annotate({ identifier: "VoiceSettings" });
    case 6:
      return S.suspend(() =>
        S.Struct({ modelArn: S.String, voiceId: S.optional(S.String) }),
      ).annotate({ identifier: "SpeechFoundationModel" });
    case 7:
      return S.suspend(() => S.Struct({ speechFoundationModel: __S(38, __c4, 6) })).annotate({
        identifier: "UnifiedSpeechSettings",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          audioType: S.optional(S.String),
          startDelayInMilliseconds: S.optional(S.Number),
          minimumPlayDurationInMilliseconds: S.optional(S.Number),
          responseDeliveryDelayInMilliseconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AudioFillerSettings" });
    case 1:
      return S.suspend(() =>
        S.Struct({ apiTokenSecretArn: S.String, modelId: S.optional(S.String) }),
      ).annotate({
        identifier: "DeepgramSpeechModelConfig",
      });
    case 2:
      return S.suspend(() => S.Struct({ deepgramConfig: S.optional(__S(41, __c5, 1)) })).annotate({
        identifier: "SpeechModelConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          speechModelPreference: S.optional(S.String),
          speechModelConfig: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({
        identifier: "SpeechRecognitionSettings",
      });
    case 4:
      return S.suspend(() => S.Struct({ identifier: S.String, version: S.String })).annotate({
        identifier: "BedrockGuardrailConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          modelArn: S.String,
          guardrail: S.optional(__S(44, __c5, 4)),
          traceStatus: S.optional(S.String),
          customPrompt: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BedrockModelSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          bedrockModelSpecification: S.optional(__S(45, __c5, 5)),
        }),
      ).annotate({
        identifier: "SlotResolutionImprovementSpecification",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          maxDisambiguationIntents: S.optional(S.Number),
          customDisambiguationMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IntentDisambiguationSettings",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          assistedNluMode: S.optional(S.String),
          intentDisambiguationSettings: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({
        identifier: "NluImprovementSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          slotResolutionImprovement: S.optional(__S(46, __c5, 6)),
          nluImprovement: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({ identifier: "RuntimeSettings" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          descriptiveBotBuilder: S.optional(__S(46, __c5, 6)),
          sampleUtteranceGeneration: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({ identifier: "BuildtimeSettings" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          runtimeSettings: S.optional(__S(49, __c6, 1)),
          buildtimeSettings: S.optional(__S(50, __c6, 2)),
        }),
      ).annotate({ identifier: "GenerativeAISettings" });
    case 4:
      return S.suspend(() => S.Struct({ enabled: S.Boolean })).annotate({
        identifier: "SpeakerDiarizationSettings",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String,
          description: S.optional(S.String),
          nluIntentConfidenceThreshold: S.Number,
          voiceSettings: S.optional(__S(37, __c4, 5)),
          unifiedSpeechSettings: S.optional(__S(39, __c4, 7)),
          audioFillerSettings: S.optional(__S(40, __c5, 0)),
          speechRecognitionSettings: S.optional(__S(43, __c5, 3)),
          generativeAISettings: S.optional(__S(51, __c6, 3)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52, __c6, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/bots/{botId}/botversions/{botVersion}/botlocales" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateBotLocaleRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeName: S.optional(S.String),
          localeId: S.optional(S.String),
          description: S.optional(S.String),
          nluIntentConfidenceThreshold: S.optional(S.Number),
          voiceSettings: S.optional(__S(37, __c4, 5)),
          unifiedSpeechSettings: S.optional(__S(39, __c4, 7)),
          audioFillerSettings: S.optional(__S(40, __c5, 0)),
          speechRecognitionSettings: S.optional(__S(43, __c5, 3)),
          botLocaleStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          generativeAISettings: S.optional(__S(51, __c6, 3)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({ identifier: "CreateBotLocaleResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ botId: S.String.pipe(T.HttpLabel("botId")), replicaRegion: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/bots/{botId}/replicas" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateBotReplicaRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          replicaRegion: S.optional(S.String),
          sourceRegion: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botReplicaStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateBotReplicaResponse" });
    case 1:
      return S.suspend(() => S.Struct({ sourceBotVersion: S.String })).annotate({
        identifier: "BotVersionLocaleDetails",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(57, __c7, 1).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          description: S.optional(S.String),
          botVersionLocaleSpecification: __S(58, __c7, 2),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/bots/{botId}/botversions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateBotVersionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          description: S.optional(S.String),
          botVersion: S.optional(S.String),
          botVersionLocaleSpecification: S.optional(__S(58, __c7, 2)),
          botStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CreateBotVersionResponse" });
    case 5:
      return S.suspend(() => S.Struct({ botId: S.String, botVersion: S.String })).annotate({
        identifier: "BotExportSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ botId: S.String, botVersion: S.String, localeId: S.String }),
      ).annotate({
        identifier: "BotLocaleExportSpecification",
      });
    case 7:
      return S.suspend(() => S.Struct({ testSetId: S.String })).annotate({
        identifier: "TestSetExportSpecification",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botExportSpecification: S.optional(__S(61, __c7, 5)),
          botLocaleExportSpecification: S.optional(__S(62, __c7, 6)),
          customVocabularyExportSpecification: S.optional(__S(62, __c7, 6)),
          testSetExportSpecification: S.optional(__S(63, __c7, 7)),
        }),
      ).annotate({
        identifier: "ExportResourceSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceSpecification: __S(64, __c8, 0),
          fileFormat: S.String,
          filePassword: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/exports" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateExportRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          exportId: S.optional(S.String),
          resourceSpecification: S.optional(__S(64, __c8, 0)),
          fileFormat: S.optional(S.String),
          exportStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CreateExportResponse" });
    case 3:
      return S.suspend(() => S.Struct({ utterance: S.String })).annotate({
        identifier: "SampleUtterance",
      });
    case 4:
      return S.Array(__S(67, __c8, 3));
    case 5:
      return S.suspend(() => S.Struct({ value: S.String })).annotate({
        identifier: "PlainTextMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({ value: S.String })).annotate({
        identifier: "CustomPayload",
      });
    case 7:
      return S.suspend(() => S.Struct({ text: S.String, value: S.String })).annotate({
        identifier: "Button",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          subtitle: S.optional(S.String),
          imageUrl: S.optional(S.String),
          buttons: S.optional(__S(72, __c9, 0)),
        }),
      ).annotate({ identifier: "ImageResponseCard" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          plainTextMessage: S.optional(__S(69, __c8, 5)),
          customPayload: S.optional(__S(70, __c8, 6)),
          ssmlMessage: S.optional(__S(70, __c8, 6)),
          imageResponseCard: S.optional(__S(73, __c9, 1)),
        }),
      ).annotate({ identifier: "Message" });
    case 3:
      return S.Array(__S(74, __c9, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ message: __S(74, __c9, 2), variations: S.optional(__S(75, __c9, 3)) }),
      ).annotate({ identifier: "MessageGroup" });
    case 5:
      return S.Array(__S(76, __c9, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ messageGroups: __S(77, __c9, 5), allowInterrupt: S.optional(S.Boolean) }),
      ).annotate({ identifier: "ResponseSpecification" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          slotToElicit: S.optional(S.String),
          suppressNextMessage: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DialogAction" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ interpretedValue: S.optional(S.String) })).annotate({
        identifier: "SlotValue",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<SlotValueOverride> => __S(82, __c10, 2)).annotate({
          identifier: "SlotValueOverride",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          shape: S.optional(S.String),
          value: S.optional(__S(80, __c10, 0)),
          values: S.optional(
            S.suspend(() => __S(81, __c10, 1)).annotate({ identifier: "SlotValues" }),
          ),
        }),
      ).annotate({ identifier: "SlotValueOverride" });
    case 3:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<SlotValueOverride> => __S(82, __c10, 2))
          .annotate({ identifier: "SlotValueOverride" })
          .pipe(S.optional),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), slots: S.optional(__S(83, __c10, 3)) }),
      ).annotate({ identifier: "IntentOverride" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          dialogAction: S.optional(__S(79, __c9, 7)),
          intent: S.optional(__S(84, __c10, 4)),
          sessionAttributes: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "DialogState" });
    case 6:
      return S.suspend(() => S.Struct({ expressionString: S.String })).annotate({
        identifier: "Condition",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          condition: __S(86, __c10, 6),
          nextStep: __S(85, __c10, 5),
          response: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({ identifier: "ConditionalBranch" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextStep: S.optional(__S(85, __c10, 5)),
          response: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({ identifier: "DefaultConditionalBranch" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          active: S.Boolean,
          conditionalBranches: __S(88, __c11, 0),
          defaultBranch: __S(89, __c11, 1),
        }),
      ).annotate({ identifier: "ConditionalSpecification" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          successResponse: S.optional(__S(78, __c9, 6)),
          failureResponse: S.optional(__S(78, __c9, 6)),
          timeoutResponse: S.optional(__S(78, __c9, 6)),
          successNextStep: S.optional(__S(85, __c10, 5)),
          successConditional: S.optional(__S(90, __c11, 2)),
          failureNextStep: S.optional(__S(85, __c10, 5)),
          failureConditional: S.optional(__S(90, __c11, 2)),
          timeoutNextStep: S.optional(__S(85, __c10, 5)),
          timeoutConditional: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({
        identifier: "PostFulfillmentStatusSpecification",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          delayInSeconds: S.Number,
          messageGroups: __S(77, __c9, 5),
          allowInterrupt: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "FulfillmentStartResponseSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          frequencyInSeconds: S.Number,
          messageGroups: __S(77, __c9, 5),
          allowInterrupt: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "FulfillmentUpdateResponseSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          active: S.Boolean,
          startResponse: S.optional(__S(92, __c11, 4)),
          updateResponse: S.optional(__S(93, __c11, 5)),
          timeoutInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "FulfillmentUpdatesSpecification",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          postFulfillmentStatusSpecification: S.optional(__S(91, __c11, 3)),
          fulfillmentUpdatesSpecification: S.optional(__S(94, __c11, 6)),
          active: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "FulfillmentCodeHookSettings",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ allowAudioInput: S.Boolean, allowDTMFInput: S.Boolean }),
      ).annotate({ identifier: "AllowedInputTypes" });
    case 1:
      return S.suspend(() => S.Struct({ maxLengthMs: S.Number, endTimeoutMs: S.Number })).annotate({
        identifier: "AudioSpecification",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxLength: S.Number,
          endTimeoutMs: S.Number,
          deletionCharacter: S.String,
          endCharacter: S.String,
        }),
      ).annotate({ identifier: "DTMFSpecification" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          startTimeoutMs: S.Number,
          audioSpecification: S.optional(__S(97, __c12, 1)),
          dtmfSpecification: S.optional(__S(98, __c12, 2)),
        }),
      ).annotate({
        identifier: "AudioAndDTMFInputSpecification",
      });
    case 4:
      return S.suspend(() => S.Struct({ startTimeoutMs: S.Number })).annotate({
        identifier: "TextInputSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          allowInterrupt: S.optional(S.Boolean),
          allowedInputTypes: __S(96, __c12, 0),
          audioAndDTMFInputSpecification: S.optional(__S(99, __c12, 3)),
          textInputSpecification: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({
        identifier: "PromptAttemptSpecification",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(101, __c12, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          messageGroups: __S(77, __c9, 5),
          maxRetries: S.Number,
          allowInterrupt: S.optional(S.Boolean),
          messageSelectionStrategy: S.optional(S.String),
          promptAttemptsSpecification: S.optional(__S(102, __c12, 6)),
        }),
      ).annotate({ identifier: "PromptSpecification" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          successResponse: S.optional(__S(78, __c9, 6)),
          successNextStep: S.optional(__S(85, __c10, 5)),
          successConditional: S.optional(__S(90, __c11, 2)),
          failureResponse: S.optional(__S(78, __c9, 6)),
          failureNextStep: S.optional(__S(85, __c10, 5)),
          failureConditional: S.optional(__S(90, __c11, 2)),
          timeoutResponse: S.optional(__S(78, __c9, 6)),
          timeoutNextStep: S.optional(__S(85, __c10, 5)),
          timeoutConditional: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({
        identifier: "PostDialogCodeHookInvocationSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          enableCodeHookInvocation: S.Boolean,
          active: S.Boolean,
          invocationLabel: S.optional(S.String),
          postCodeHookSpecification: __S(104, __c13, 0),
        }),
      ).annotate({
        identifier: "DialogCodeHookInvocationSetting",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ enableCodeHookInvocation: S.Boolean, invocationLabel: S.optional(S.String) }),
      ).annotate({
        identifier: "ElicitationCodeHookInvocationSetting",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          promptSpecification: __S(103, __c12, 7),
          declinationResponse: S.optional(__S(78, __c9, 6)),
          active: S.optional(S.Boolean),
          confirmationResponse: S.optional(__S(78, __c9, 6)),
          confirmationNextStep: S.optional(__S(85, __c10, 5)),
          confirmationConditional: S.optional(__S(90, __c11, 2)),
          declinationNextStep: S.optional(__S(85, __c10, 5)),
          declinationConditional: S.optional(__S(90, __c11, 2)),
          failureResponse: S.optional(__S(78, __c9, 6)),
          failureNextStep: S.optional(__S(85, __c10, 5)),
          failureConditional: S.optional(__S(90, __c11, 2)),
          codeHook: S.optional(__S(105, __c13, 1)),
          elicitationCodeHook: S.optional(__S(106, __c13, 2)),
        }),
      ).annotate({
        identifier: "IntentConfirmationSetting",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          closingResponse: S.optional(__S(78, __c9, 6)),
          active: S.optional(S.Boolean),
          nextStep: S.optional(__S(85, __c10, 5)),
          conditional: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({ identifier: "IntentClosingSetting" });
    case 5:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "InputContext",
      });
    case 6:
      return S.Array(__S(109, __c13, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.String, timeToLiveInSeconds: S.Number, turnsToLive: S.Number }),
      ).annotate({ identifier: "OutputContext" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111, __c13, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          kendraIndex: S.String,
          queryFilterStringEnabled: S.optional(S.Boolean),
          queryFilterString: S.optional(S.String),
        }),
      ).annotate({ identifier: "KendraConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          initialResponse: S.optional(__S(78, __c9, 6)),
          nextStep: S.optional(__S(85, __c10, 5)),
          conditional: S.optional(__S(90, __c11, 2)),
          codeHook: S.optional(__S(105, __c13, 1)),
        }),
      ).annotate({ identifier: "InitialResponseSetting" });
    case 3:
      return S.suspend(() => S.Struct({ questionField: S.String, answerField: S.String })).annotate(
        { identifier: "ExactResponseFields" },
      );
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainEndpoint: S.String,
          indexName: S.String,
          exactResponse: S.optional(S.Boolean),
          exactResponseFields: S.optional(__S(115, __c14, 3)),
          includeFields: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({ identifier: "OpensearchConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          kendraIndex: S.String,
          queryFilterStringEnabled: S.optional(S.Boolean),
          queryFilterString: S.optional(S.String),
          exactResponse: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "QnAKendraConfiguration" });
    case 7:
      return S.suspend(() => S.Struct({ answerField: S.optional(S.String) })).annotate({
        identifier: "BedrockKnowledgeStoreExactResponseFields",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          bedrockKnowledgeBaseArn: S.String,
          exactResponse: S.optional(S.Boolean),
          exactResponseFields: S.optional(__S(119, __c14, 7)),
        }),
      ).annotate({
        identifier: "BedrockKnowledgeStoreConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          opensearchConfiguration: S.optional(__S(117, __c14, 5)),
          kendraConfiguration: S.optional(__S(118, __c14, 6)),
          bedrockKnowledgeStoreConfiguration: S.optional(__S(120, __c15, 0)),
        }),
      ).annotate({ identifier: "DataSourceConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          dataSourceConfiguration: S.optional(__S(121, __c15, 1)),
          bedrockModelConfiguration: S.optional(__S(45, __c5, 5)),
        }),
      ).annotate({ identifier: "QnAIntentConfiguration" });
    case 3:
      return S.suspend(() => S.Struct({ assistantArn: S.String })).annotate({
        identifier: "QInConnectAssistantConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          qInConnectAssistantConfiguration: S.optional(__S(123, __c15, 3)),
        }),
      ).annotate({
        identifier: "QInConnectIntentConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          intentName: S.String,
          intentDisplayName: S.optional(S.String),
          description: S.optional(S.String),
          parentIntentSignature: S.optional(S.String),
          sampleUtterances: S.optional(__S(68, __c8, 4)),
          dialogCodeHook: S.optional(__S(18, __c2, 2)),
          fulfillmentCodeHook: S.optional(__S(95, __c11, 7)),
          intentConfirmationSetting: S.optional(__S(107, __c13, 3)),
          intentClosingSetting: S.optional(__S(108, __c13, 4)),
          inputContexts: S.optional(__S(110, __c13, 6)),
          outputContexts: S.optional(__S(112, __c14, 0)),
          kendraConfiguration: S.optional(__S(113, __c14, 1)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          initialResponseSetting: S.optional(__S(114, __c14, 2)),
          qnAIntentConfiguration: S.optional(__S(122, __c15, 2)),
          qInConnectIntentConfiguration: S.optional(__S(124, __c15, 4)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateIntentRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          intentId: S.optional(S.String),
          intentName: S.optional(S.String),
          intentDisplayName: S.optional(S.String),
          description: S.optional(S.String),
          parentIntentSignature: S.optional(S.String),
          sampleUtterances: S.optional(__S(68, __c8, 4)),
          dialogCodeHook: S.optional(__S(18, __c2, 2)),
          fulfillmentCodeHook: S.optional(__S(95, __c11, 7)),
          intentConfirmationSetting: S.optional(__S(107, __c13, 3)),
          intentClosingSetting: S.optional(__S(108, __c13, 4)),
          inputContexts: S.optional(__S(110, __c13, 6)),
          outputContexts: S.optional(__S(112, __c14, 0)),
          kendraConfiguration: S.optional(__S(113, __c14, 1)),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          initialResponseSetting: S.optional(__S(114, __c14, 2)),
          qnAIntentConfiguration: S.optional(__S(122, __c15, 2)),
          qInConnectIntentConfiguration: S.optional(__S(124, __c15, 4)),
        }),
      ).annotate({ identifier: "CreateIntentResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), policy: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateResourcePolicyRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.optional(S.String), revisionId: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateResourcePolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ service: S.optional(S.String), arn: S.optional(S.String) }),
      ).annotate({ identifier: "Principal" });
    case 2:
      return S.Array(__S(129, __c16, 1));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(131, __c16, 3).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          statementId: S.String,
          effect: S.String,
          principal: __S(130, __c16, 2),
          action: __S(116, __c14, 4),
          condition: S.optional(__S(132, __c16, 4)),
          expectedRevisionId: S.optional(S.String).pipe(T.HttpQuery("expectedRevisionId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policy/{resourceArn}/statements" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateResourcePolicyStatementRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ defaultValue: S.String })).annotate({
        identifier: "SlotDefaultValue",
      });
    case 7:
      return S.Array(__S(134, __c16, 6));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ defaultValueList: __S(135, __c16, 7) })).annotate({
        identifier: "SlotDefaultValueSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          messageGroups: __S(77, __c9, 5),
          frequencyInSeconds: S.Number,
          timeoutInSeconds: S.Number,
          allowInterrupt: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "StillWaitingResponseSpecification",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          waitingResponse: __S(78, __c9, 6),
          continueResponse: __S(78, __c9, 6),
          stillWaitingResponse: S.optional(__S(137, __c17, 1)),
          active: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "WaitAndContinueSpecification",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          captureResponse: S.optional(__S(78, __c9, 6)),
          captureNextStep: S.optional(__S(85, __c10, 5)),
          captureConditional: S.optional(__S(90, __c11, 2)),
          failureResponse: S.optional(__S(78, __c9, 6)),
          failureNextStep: S.optional(__S(85, __c10, 5)),
          failureConditional: S.optional(__S(90, __c11, 2)),
          codeHook: S.optional(__S(105, __c13, 1)),
          elicitationCodeHook: S.optional(__S(106, __c13, 2)),
        }),
      ).annotate({ identifier: "SlotCaptureSetting" });
    case 4:
      return S.suspend(() => S.Struct({ slotResolutionStrategy: S.String })).annotate({
        identifier: "SlotResolutionSetting",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          defaultValueSpecification: S.optional(__S(136, __c17, 0)),
          slotConstraint: S.String,
          promptSpecification: S.optional(__S(103, __c12, 7)),
          sampleUtterances: S.optional(__S(68, __c8, 4)),
          waitAndContinueSpecification: S.optional(__S(138, __c17, 2)),
          slotCaptureSetting: S.optional(__S(139, __c17, 3)),
          slotResolutionSetting: S.optional(__S(140, __c17, 4)),
        }),
      ).annotate({
        identifier: "SlotValueElicitationSetting",
      });
    case 6:
      return S.suspend(() => S.Struct({ obfuscationSettingType: S.String })).annotate({
        identifier: "ObfuscationSetting",
      });
    case 7:
      return S.suspend(() => S.Struct({ allowMultipleValues: S.optional(S.Boolean) })).annotate({
        identifier: "MultipleValuesSetting",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          defaultValueSpecification: S.optional(__S(136, __c17, 0)),
          promptSpecification: __S(103, __c12, 7),
          sampleUtterances: S.optional(__S(68, __c8, 4)),
          waitAndContinueSpecification: S.optional(__S(138, __c17, 2)),
        }),
      ).annotate({
        identifier: "SubSlotValueElicitationSetting",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ slotTypeId: S.String, valueElicitationSetting: __S(144, __c18, 0) }),
      ).annotate({ identifier: "Specifications" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(145, __c18, 1).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          expression: S.optional(S.String),
          slotSpecifications: S.optional(__S(146, __c18, 2)),
        }),
      ).annotate({ identifier: "SubSlotSetting" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          slotName: S.String,
          description: S.optional(S.String),
          slotTypeId: S.optional(S.String),
          valueElicitationSetting: __S(141, __c17, 5),
          obfuscationSetting: S.optional(__S(142, __c17, 6)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          intentId: S.String.pipe(T.HttpLabel("intentId")),
          multipleValuesSetting: S.optional(__S(143, __c17, 7)),
          subSlotSetting: S.optional(__S(147, __c18, 3)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSlotRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          slotId: S.optional(S.String),
          slotName: S.optional(S.String),
          description: S.optional(S.String),
          slotTypeId: S.optional(S.String),
          valueElicitationSetting: S.optional(__S(141, __c17, 5)),
          obfuscationSetting: S.optional(__S(142, __c17, 6)),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          intentId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          multipleValuesSetting: S.optional(__S(143, __c17, 7)),
          subSlotSetting: S.optional(__S(147, __c18, 3)),
        }),
      ).annotate({ identifier: "CreateSlotResponse" });
    case 6:
      return S.Array(__S(70, __c8, 6));
    case 7:
      return S.suspend(() =>
        S.Struct({
          sampleValue: S.optional(__S(70, __c8, 6)),
          synonyms: S.optional(__S(150, __c18, 6)),
        }),
      ).annotate({ identifier: "SlotTypeValue" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151, __c18, 7));
    case 1:
      return S.suspend(() => S.Struct({ pattern: S.String })).annotate({
        identifier: "SlotValueRegexFilter",
      });
    case 2:
      return S.suspend(() => S.Struct({ audioRecognitionStrategy: S.optional(S.String) })).annotate(
        {
          identifier: "AdvancedRecognitionSetting",
        },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          resolutionStrategy: S.String,
          regexFilter: S.optional(__S(153, __c19, 1)),
          advancedRecognitionSetting: S.optional(__S(154, __c19, 2)),
        }),
      ).annotate({
        identifier: "SlotValueSelectionSetting",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          s3BucketName: S.String,
          s3ObjectKey: S.String,
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GrammarSlotTypeSource" });
    case 5:
      return S.suspend(() => S.Struct({ source: S.optional(__S(156, __c19, 4)) })).annotate({
        identifier: "GrammarSlotTypeSetting",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ grammarSlotTypeSetting: S.optional(__S(157, __c19, 5)) }),
      ).annotate({ identifier: "ExternalSourceSetting" });
    case 7:
      return S.suspend(() => S.Struct({ name: S.String, slotTypeId: S.String })).annotate({
        identifier: "SubSlotTypeComposition",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(159, __c19, 7));
    case 1:
      return S.suspend(() => S.Struct({ subSlots: S.optional(__S(160, __c20, 0)) })).annotate({
        identifier: "CompositeSlotTypeSetting",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          slotTypeName: S.String,
          description: S.optional(S.String),
          slotTypeValues: S.optional(__S(152, __c19, 0)),
          valueSelectionSetting: S.optional(__S(155, __c19, 3)),
          parentSlotTypeSignature: S.optional(S.String),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          externalSourceSetting: S.optional(__S(158, __c19, 6)),
          compositeSlotTypeSetting: S.optional(__S(161, __c20, 1)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSlotTypeRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          slotTypeId: S.optional(S.String),
          slotTypeName: S.optional(S.String),
          description: S.optional(S.String),
          slotTypeValues: S.optional(__S(152, __c19, 0)),
          valueSelectionSetting: S.optional(__S(155, __c19, 3)),
          parentSlotTypeSignature: S.optional(S.String),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          externalSourceSetting: S.optional(__S(158, __c19, 6)),
          compositeSlotTypeSetting: S.optional(__S(161, __c20, 1)),
        }),
      ).annotate({ identifier: "CreateSlotTypeResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ botId: S.String, botAliasId: S.String, localeId: S.String }),
      ).annotate({
        identifier: "TestSetDiscrepancyReportBotAliasTarget",
      });
    case 5:
      return S.suspend(() => S.Struct({ botAliasTarget: S.optional(__S(164, __c20, 4)) })).annotate(
        {
          identifier: "TestSetDiscrepancyReportResourceTarget",
        },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          testSetId: S.String.pipe(T.HttpLabel("testSetId")),
          target: __S(165, __c20, 5),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/testsets/{testSetId}/testsetdiscrepancy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateTestSetDiscrepancyReportRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          testSetDiscrepancyReportId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          testSetId: S.optional(S.String),
          target: S.optional(__S(165, __c20, 5)),
        }),
      ).annotate({
        identifier: "CreateTestSetDiscrepancyReportResponse",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/createuploadurl" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateUploadUrlRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ importId: S.optional(S.String), uploadUrl: S.optional(S.String) }),
      ).annotate({ identifier: "CreateUploadUrlResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          skipResourceInUseCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipResourceInUseCheck")),
        }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/bots/{botId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteBotRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ botId: S.optional(S.String), botStatus: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteBotResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.String.pipe(T.HttpLabel("botAliasId")),
          botId: S.String.pipe(T.HttpLabel("botId")),
          skipResourceInUseCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipResourceInUseCheck")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/bots/{botId}/botaliases/{botAliasId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBotAliasRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.optional(S.String),
          botId: S.optional(S.String),
          botAliasStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteBotAliasResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAnalyzerRequestId: S.String.pipe(T.HttpLabel("botAnalyzerRequestId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/bots/{botId}/botanalyzer/{botAnalyzerRequestId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteBotAnalyzerRecommendationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteBotAnalyzerRecommendationResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBotLocaleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botLocaleStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteBotLocaleResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          replicaRegion: S.String.pipe(T.HttpLabel("replicaRegion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/bots/{botId}/replicas/{replicaRegion}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBotReplicaRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          replicaRegion: S.optional(S.String),
          botReplicaStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteBotReplicaResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          skipResourceInUseCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipResourceInUseCheck")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/bots/{botId}/botversions/{botVersion}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBotVersionRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          botStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteBotVersionResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCustomVocabularyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          customVocabularyStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteCustomVocabularyResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ exportId: S.String.pipe(T.HttpLabel("exportId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/exports/{exportId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteExportRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ exportId: S.optional(S.String), exportStatus: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteExportResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ importId: S.String.pipe(T.HttpLabel("importId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/imports/{importId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteImportRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ importId: S.optional(S.String), importStatus: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteImportResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          intentId: S.String.pipe(T.HttpLabel("intentId")),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteIntentRequest" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteIntentResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          expectedRevisionId: S.optional(S.String).pipe(T.HttpQuery("expectedRevisionId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/policy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          statementId: S.String.pipe(T.HttpLabel("statementId")),
          expectedRevisionId: S.optional(S.String).pipe(T.HttpQuery("expectedRevisionId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/policy/{resourceArn}/statements/{statementId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyStatementRequest",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          slotId: S.String.pipe(T.HttpLabel("slotId")),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          intentId: S.String.pipe(T.HttpLabel("intentId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSlotRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          slotTypeId: S.String.pipe(T.HttpLabel("slotTypeId")),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          skipResourceInUseCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipResourceInUseCheck")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSlotTypeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ testSetId: S.String.pipe(T.HttpLabel("testSetId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/testsets/{testSetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTestSetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          localeId: S.optional(S.String).pipe(T.HttpQuery("localeId")),
          sessionId: S.optional(S.String).pipe(T.HttpQuery("sessionId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/bots/{botId}/utterances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteUtterancesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ botId: S.String.pipe(T.HttpLabel("botId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/bots/{botId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeBotRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botName: S.optional(S.String),
          description: S.optional(S.String),
          roleArn: S.optional(S.String),
          dataPrivacy: S.optional(__S(14, __c1, 6)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17, __c2, 1)),
          failureReasons: S.optional(__S(116, __c14, 4)),
          errorLogSettings: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({ identifier: "DescribeBotResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.String.pipe(T.HttpLabel("botAliasId")),
          botId: S.String.pipe(T.HttpLabel("botId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/bots/{botId}/botaliases/{botAliasId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeBotAliasRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botVersion: S.optional(S.String),
          startDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BotAliasHistoryEvent" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(199, __c24, 7));
    case 1:
      return S.Array(__S(61, __c7, 5));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.optional(S.String),
          botAliasName: S.optional(S.String),
          description: S.optional(S.String),
          botVersion: S.optional(S.String),
          botAliasLocaleSettings: S.optional(__S(24, __c3, 0)),
          conversationLogSettings: S.optional(__S(33, __c4, 1)),
          sentimentAnalysisSettings: S.optional(__S(34, __c4, 2)),
          botAliasHistoryEvents: S.optional(__S(200, __c25, 0)),
          botAliasStatus: S.optional(S.String),
          botId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          parentBotNetworks: S.optional(__S(201, __c25, 1)),
        }),
      ).annotate({ identifier: "DescribeBotAliasResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAnalyzerRequestId: S.String.pipe(T.HttpLabel("botAnalyzerRequestId")),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botanalyzer/describe/{botAnalyzerRequestId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeBotAnalyzerRecommendationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botLocale: S.optional(S.String),
          intentId: S.optional(S.String),
          slotId: S.optional(S.String),
        }),
      ).annotate({ identifier: "IssueLocation" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          issueLocation: __S(204, __c25, 4),
          priority: S.String,
          issueDescription: S.String,
          proposedFix: S.String,
        }),
      ).annotate({
        identifier: "BotAnalyzerRecommendation",
      });
    case 6:
      return S.Array(__S(205, __c25, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botAnalyzerStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botAnalyzerRecommendationList: S.optional(__S(206, __c25, 6)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeBotAnalyzerRecommendationResponse",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeBotLocaleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ event: S.String, eventDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")) }),
      ).annotate({ identifier: "BotLocaleHistoryEvent" });
    case 2:
      return S.Array(__S(209, __c26, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          localeName: S.optional(S.String),
          description: S.optional(S.String),
          nluIntentConfidenceThreshold: S.optional(S.Number),
          voiceSettings: S.optional(__S(37, __c4, 5)),
          unifiedSpeechSettings: S.optional(__S(39, __c4, 7)),
          audioFillerSettings: S.optional(__S(40, __c5, 0)),
          speechRecognitionSettings: S.optional(__S(43, __c5, 3)),
          intentsCount: S.optional(S.Number),
          slotTypesCount: S.optional(S.Number),
          botLocaleStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastBuildSubmittedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botLocaleHistoryEvents: S.optional(__S(210, __c26, 2)),
          recommendedActions: S.optional(__S(116, __c14, 4)),
          generativeAISettings: S.optional(__S(51, __c6, 3)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "DescribeBotLocaleResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          botRecommendationId: S.String.pipe(T.HttpLabel("botRecommendationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeBotRecommendationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ objectPrefixes: S.optional(__S(116, __c14, 4)) })).annotate(
        {
          identifier: "PathFormat",
        },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DateRangeFilter" });
    case 7:
      return S.suspend(() =>
        S.Struct({ dateRangeFilter: S.optional(__S(214, __c26, 6)) }),
      ).annotate({
        identifier: "LexTranscriptFilter",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ lexTranscriptFilter: S.optional(__S(215, __c26, 7)) }),
      ).annotate({ identifier: "TranscriptFilter" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          s3BucketName: S.String,
          pathFormat: S.optional(__S(213, __c26, 5)),
          transcriptFormat: S.String,
          transcriptFilter: S.optional(__S(216, __c27, 0)),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3BucketTranscriptSource" });
    case 2:
      return S.suspend(() =>
        S.Struct({ s3BucketTranscriptSource: S.optional(__S(217, __c27, 1)) }),
      ).annotate({ identifier: "TranscriptSourceSetting" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          kmsKeyArn: S.optional(S.String),
          botLocaleExportPassword: S.optional(SensitiveString),
          associatedTranscriptsPassword: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "EncryptionSetting" });
    case 4:
      return S.suspend(() => S.Struct({ discoveredIntentCount: S.optional(S.Number) })).annotate({
        identifier: "IntentStatistics",
      });
    case 5:
      return S.suspend(() => S.Struct({ discoveredSlotTypeCount: S.optional(S.Number) })).annotate({
        identifier: "SlotTypeStatistics",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          intents: S.optional(__S(220, __c27, 4)),
          slotTypes: S.optional(__S(221, __c27, 5)),
        }),
      ).annotate({
        identifier: "BotRecommendationResultStatistics",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botLocaleExportUrl: S.optional(S.String),
          associatedTranscriptsUrl: S.optional(S.String),
          statistics: S.optional(__S(222, __c27, 6)),
        }),
      ).annotate({ identifier: "BotRecommendationResults" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationStatus: S.optional(S.String),
          botRecommendationId: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          transcriptSourceSetting: S.optional(__S(218, __c27, 2)),
          encryptionSetting: S.optional(__S(219, __c27, 3)),
          botRecommendationResults: S.optional(__S(223, __c27, 7)),
        }),
      ).annotate({
        identifier: "DescribeBotRecommendationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          replicaRegion: S.String.pipe(T.HttpLabel("replicaRegion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/bots/{botId}/replicas/{replicaRegion}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeBotReplicaRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          replicaRegion: S.optional(S.String),
          sourceRegion: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botReplicaStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({
        identifier: "DescribeBotReplicaResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          generationId: S.String.pipe(T.HttpLabel("generationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeBotResourceGenerationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          generationId: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
          generationStatus: S.optional(S.String),
          generationInputPrompt: S.optional(S.String),
          generatedBotLocaleUrl: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modelArn: S.optional(S.String),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeBotResourceGenerationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/bots/{botId}/botversions/{botVersion}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeBotVersionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botName: S.optional(S.String),
          botVersion: S.optional(S.String),
          description: S.optional(S.String),
          roleArn: S.optional(S.String),
          dataPrivacy: S.optional(__S(14, __c1, 6)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          parentBotNetworks: S.optional(__S(201, __c25, 1)),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({
        identifier: "DescribeBotVersionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCustomVocabularyMetadataRequest",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          customVocabularyStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeCustomVocabularyMetadataResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ exportId: S.String.pipe(T.HttpLabel("exportId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/exports/{exportId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeExportRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          exportId: S.optional(S.String),
          resourceSpecification: S.optional(__S(64, __c8, 0)),
          fileFormat: S.optional(S.String),
          exportStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
          downloadUrl: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DescribeExportResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ importId: S.String.pipe(T.HttpLabel("importId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/imports/{importId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeImportRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botName: S.String,
          roleArn: S.String,
          dataPrivacy: __S(14, __c1, 6),
          errorLogSettings: S.optional(__S(18, __c2, 2)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botTags: S.optional(__S(15, __c1, 7)),
          testBotAliasTags: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "BotImportSpecification" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.String,
          botVersion: S.String,
          localeId: S.String,
          nluIntentConfidenceThreshold: S.optional(S.Number),
          voiceSettings: S.optional(__S(37, __c4, 5)),
          speechRecognitionSettings: S.optional(__S(43, __c5, 3)),
          speechDetectionSensitivity: S.optional(S.String),
          unifiedSpeechSettings: S.optional(__S(39, __c4, 7)),
          audioFillerSettings: S.optional(__S(40, __c5, 0)),
          speakerDiarizationSettings: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "BotLocaleImportSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ s3BucketName: S.String, s3Path: S.String, kmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "TestSetStorageLocation" });
    case 7:
      return S.suspend(() => S.Struct({ s3BucketName: S.String, s3Path: S.String })).annotate({
        identifier: "TestSetImportInputLocation",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          testSetName: S.String,
          description: S.optional(S.String),
          roleArn: S.String,
          storageLocation: __S(238, __c29, 6),
          importInputLocation: __S(239, __c29, 7),
          modality: S.String,
          testSetTags: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({
        identifier: "TestSetImportResourceSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botImportSpecification: S.optional(__S(236, __c29, 4)),
          botLocaleImportSpecification: S.optional(__S(237, __c29, 5)),
          customVocabularyImportSpecification: S.optional(__S(62, __c7, 6)),
          testSetImportResourceSpecification: S.optional(__S(240, __c30, 0)),
        }),
      ).annotate({
        identifier: "ImportResourceSpecification",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          importId: S.optional(S.String),
          resourceSpecification: S.optional(__S(241, __c30, 1)),
          importedResourceId: S.optional(S.String),
          importedResourceName: S.optional(S.String),
          mergeStrategy: S.optional(S.String),
          importStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DescribeImportResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          intentId: S.String.pipe(T.HttpLabel("intentId")),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeIntentRequest" });
    case 4:
      return S.suspend(() => S.Struct({ priority: S.Number, slotId: S.String })).annotate({
        identifier: "SlotPriority",
      });
    case 5:
      return S.Array(__S(244, __c30, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          intentId: S.optional(S.String),
          intentName: S.optional(S.String),
          intentDisplayName: S.optional(S.String),
          description: S.optional(S.String),
          parentIntentSignature: S.optional(S.String),
          sampleUtterances: S.optional(__S(68, __c8, 4)),
          dialogCodeHook: S.optional(__S(18, __c2, 2)),
          fulfillmentCodeHook: S.optional(__S(95, __c11, 7)),
          slotPriorities: S.optional(__S(245, __c30, 5)),
          intentConfirmationSetting: S.optional(__S(107, __c13, 3)),
          intentClosingSetting: S.optional(__S(108, __c13, 4)),
          inputContexts: S.optional(__S(110, __c13, 6)),
          outputContexts: S.optional(__S(112, __c14, 0)),
          kendraConfiguration: S.optional(__S(113, __c14, 1)),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          initialResponseSetting: S.optional(__S(114, __c14, 2)),
          qnAIntentConfiguration: S.optional(__S(122, __c15, 2)),
          qInConnectIntentConfiguration: S.optional(__S(124, __c15, 4)),
        }),
      ).annotate({ identifier: "DescribeIntentResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeResourcePolicyRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.optional(S.String),
          policy: S.optional(S.String),
          revisionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeResourcePolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          slotId: S.String.pipe(T.HttpLabel("slotId")),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          intentId: S.String.pipe(T.HttpLabel("intentId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeSlotRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          slotId: S.optional(S.String),
          slotName: S.optional(S.String),
          description: S.optional(S.String),
          slotTypeId: S.optional(S.String),
          valueElicitationSetting: S.optional(__S(141, __c17, 5)),
          obfuscationSetting: S.optional(__S(142, __c17, 6)),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          intentId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          multipleValuesSetting: S.optional(__S(143, __c17, 7)),
          subSlotSetting: S.optional(__S(147, __c18, 3)),
        }),
      ).annotate({ identifier: "DescribeSlotResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          slotTypeId: S.String.pipe(T.HttpLabel("slotTypeId")),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeSlotTypeRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          slotTypeId: S.optional(S.String),
          slotTypeName: S.optional(S.String),
          description: S.optional(S.String),
          slotTypeValues: S.optional(__S(152, __c19, 0)),
          valueSelectionSetting: S.optional(__S(155, __c19, 3)),
          parentSlotTypeSignature: S.optional(S.String),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          externalSourceSetting: S.optional(__S(158, __c19, 6)),
          compositeSlotTypeSetting: S.optional(__S(161, __c20, 1)),
        }),
      ).annotate({ identifier: "DescribeSlotTypeResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ testExecutionId: S.String.pipe(T.HttpLabel("testExecutionId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/testexecutions/{testExecutionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeTestExecutionRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ botAliasTarget: S.optional(__S(164, __c20, 4)) })).annotate(
        { identifier: "TestExecutionTarget" },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          testExecutionId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          testExecutionStatus: S.optional(S.String),
          testSetId: S.optional(S.String),
          testSetName: S.optional(S.String),
          target: S.optional(__S(254, __c31, 6)),
          apiMode: S.optional(S.String),
          testExecutionModality: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({
        identifier: "DescribeTestExecutionResponse",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ testSetId: S.String.pipe(T.HttpLabel("testSetId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/testsets/{testSetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeTestSetRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          testSetId: S.optional(S.String),
          testSetName: S.optional(S.String),
          description: S.optional(S.String),
          modality: S.optional(S.String),
          status: S.optional(S.String),
          roleArn: S.optional(S.String),
          numTurns: S.optional(S.Number),
          storageLocation: S.optional(__S(238, __c29, 6)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DescribeTestSetResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          testSetDiscrepancyReportId: S.String.pipe(T.HttpLabel("testSetDiscrepancyReportId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/testsetdiscrepancy/{testSetDiscrepancyReportId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeTestSetDiscrepancyReportRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ intentName: S.String, errorMessage: S.String })).annotate({
        identifier: "TestSetIntentDiscrepancyItem",
      });
    case 4:
      return S.Array(__S(259, __c32, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ intentName: S.String, slotName: S.String, errorMessage: S.String }),
      ).annotate({
        identifier: "TestSetSlotDiscrepancyItem",
      });
    case 6:
      return S.Array(__S(261, __c32, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          intentDiscrepancies: __S(260, __c32, 4),
          slotDiscrepancies: __S(262, __c32, 6),
        }),
      ).annotate({ identifier: "TestSetDiscrepancyErrors" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          testSetDiscrepancyReportId: S.optional(S.String),
          testSetId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          target: S.optional(__S(165, __c20, 5)),
          testSetDiscrepancyReportStatus: S.optional(S.String),
          lastUpdatedDataTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          testSetDiscrepancyTopErrors: S.optional(__S(263, __c32, 7)),
          testSetDiscrepancyRawOutputUrl: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({
        identifier: "DescribeTestSetDiscrepancyReportResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ testSetGenerationId: S.String.pipe(T.HttpLabel("testSetGenerationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/testsetgenerations/{testSetGenerationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeTestSetGenerationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          inputMode: S.String,
        }),
      ).annotate({
        identifier: "ConversationLogsDataSourceFilterBy",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.String,
          botAliasId: S.String,
          localeId: S.String,
          filter: __S(266, __c33, 2),
        }),
      ).annotate({
        identifier: "ConversationLogsDataSource",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ conversationLogsDataSource: S.optional(__S(267, __c33, 3)) }),
      ).annotate({
        identifier: "TestSetGenerationDataSource",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          testSetGenerationId: S.optional(S.String),
          testSetGenerationStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
          testSetId: S.optional(S.String),
          testSetName: S.optional(S.String),
          description: S.optional(S.String),
          storageLocation: S.optional(__S(238, __c29, 6)),
          generationDataSource: S.optional(__S(268, __c33, 4)),
          roleArn: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeTestSetGenerationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          intentId: S.String,
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GenerateBotElementRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          intentId: S.optional(S.String),
          sampleUtterances: S.optional(__S(68, __c8, 4)),
        }),
      ).annotate({
        identifier: "GenerateBotElementResponse",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ testExecutionId: S.String.pipe(T.HttpLabel("testExecutionId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/testexecutions/{testExecutionId}/artifacturl" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTestExecutionArtifactsUrlRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          testExecutionId: S.optional(S.String),
          downloadArtifactsUrl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetTestExecutionArtifactsUrlResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ timeDimension: S.String, timeValue: S.Number })).annotate({
        identifier: "RelativeAggregationDuration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ relativeAggregationDuration: __S(274, __c34, 2) }),
      ).annotate({
        identifier: "UtteranceAggregationDuration",
      });
    case 4:
      return S.suspend(() => S.Struct({ attribute: S.String, order: S.String })).annotate({
        identifier: "AggregatedUtterancesSortBy",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          values: __S(116, __c14, 4),
          operator: S.String,
        }),
      ).annotate({
        identifier: "AggregatedUtterancesFilter",
      });
    case 6:
      return S.Array(__S(277, __c34, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAliasId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.String,
          aggregationDuration: __S(275, __c34, 3),
          sortBy: S.optional(__S(276, __c34, 4)),
          filters: S.optional(__S(278, __c34, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/aggregatedutterances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAggregatedUtterancesRequest",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          utterance: S.optional(S.String),
          hitCount: S.optional(S.Number),
          missedCount: S.optional(S.Number),
          utteranceFirstRecordedInAggregationDuration: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          utteranceLastRecordedInAggregationDuration: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          containsDataFromDeletedResources: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AggregatedUtterancesSummary",
      });
    case 1:
      return S.Array(__S(280, __c35, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botAliasId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          aggregationDuration: S.optional(__S(275, __c34, 3)),
          aggregationWindowStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          aggregationWindowEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          aggregationLastRefreshedDateTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          aggregatedUtterancesSummaries: S.optional(__S(281, __c35, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAggregatedUtterancesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/botaliases" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListBotAliasesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.optional(S.String),
          botAliasName: S.optional(S.String),
          description: S.optional(S.String),
          botVersion: S.optional(S.String),
          botAliasStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BotAliasSummary" });
    case 5:
      return S.Array(__S(284, __c35, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botAliasSummaries: S.optional(__S(285, __c35, 5)),
          nextToken: S.optional(S.String),
          botId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListBotAliasesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          replicaRegion: S.String.pipe(T.HttpLabel("replicaRegion")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/replicas/{replicaRegion}/botaliases" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBotAliasReplicasRequest",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.optional(S.String),
          botAliasReplicationStatus: S.optional(S.String),
          botVersion: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          failureReasons: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({ identifier: "BotAliasReplicaSummary" });
    case 1:
      return S.Array(__S(288, __c36, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          sourceRegion: S.optional(S.String),
          replicaRegion: S.optional(S.String),
          botAliasReplicaSummaries: S.optional(__S(289, __c36, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBotAliasReplicasResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          localeId: S.optional(S.String),
          botVersion: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/botanalyzer/history" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBotAnalyzerHistoryRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botAnalyzerStatus: S.String,
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botAnalyzerRequestId: S.String,
        }),
      ).annotate({
        identifier: "BotAnalyzerHistorySummary",
      });
    case 5:
      return S.Array(__S(292, __c36, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          localeId: S.optional(S.String),
          botVersion: S.optional(S.String),
          botAnalyzerHistoryList: S.optional(__S(293, __c36, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBotAnalyzerHistoryResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ attribute: S.String, order: S.String })).annotate({
        identifier: "BotLocaleSortBy",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          values: __S(116, __c14, 4),
          operator: S.String,
        }),
      ).annotate({ identifier: "BotLocaleFilter" });
    case 1:
      return S.Array(__S(296, __c37, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          sortBy: S.optional(__S(295, __c36, 7)),
          filters: S.optional(__S(297, __c37, 1)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/botversions/{botVersion}/botlocales" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListBotLocalesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          localeId: S.optional(S.String),
          localeName: S.optional(S.String),
          description: S.optional(S.String),
          botLocaleStatus: S.optional(S.String),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastBuildSubmittedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BotLocaleSummary" });
    case 4:
      return S.Array(__S(299, __c37, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          nextToken: S.optional(S.String),
          botLocaleSummaries: S.optional(__S(300, __c37, 4)),
        }),
      ).annotate({ identifier: "ListBotLocalesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBotRecommendationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botRecommendationStatus: S.String,
          botRecommendationId: S.String,
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BotRecommendationSummary" });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(303, __c37, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationSummaries: S.optional(__S(304, __c38, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBotRecommendationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ botId: S.String.pipe(T.HttpLabel("botId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/replicas" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListBotReplicasRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          replicaRegion: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botReplicaStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({ identifier: "BotReplicaSummary" });
    case 4:
      return S.Array(__S(307, __c38, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          sourceRegion: S.optional(S.String),
          botReplicaSummaries: S.optional(__S(308, __c38, 4)),
        }),
      ).annotate({ identifier: "ListBotReplicasResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sortBy: S.optional(__S(295, __c36, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBotResourceGenerationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          generationId: S.optional(S.String),
          generationStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GenerationSummary" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(311, __c38, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          generationSummaries: S.optional(__S(312, __c39, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBotResourceGenerationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sortBy: S.optional(__S(295, __c36, 7)),
          filters: S.optional(__S(297, __c37, 1)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/bots" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListBotsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botName: S.optional(S.String),
          description: S.optional(S.String),
          botStatus: S.optional(S.String),
          latestBotVersion: S.optional(S.String),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botType: S.optional(S.String),
        }),
      ).annotate({ identifier: "BotSummary" });
    case 4:
      return S.Array(__S(315, __c39, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ botSummaries: S.optional(__S(316, __c39, 4)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListBotsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          replicaRegion: S.String.pipe(T.HttpLabel("replicaRegion")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortBy: S.optional(__S(295, __c36, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/replicas/{replicaRegion}/botversions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBotVersionReplicasRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botVersion: S.optional(S.String),
          botVersionReplicationStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          failureReasons: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({ identifier: "BotVersionReplicaSummary" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(319, __c39, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          sourceRegion: S.optional(S.String),
          replicaRegion: S.optional(S.String),
          botVersionReplicaSummaries: S.optional(__S(320, __c40, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBotVersionReplicasResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          sortBy: S.optional(__S(295, __c36, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/botversions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListBotVersionsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botName: S.optional(S.String),
          botVersion: S.optional(S.String),
          description: S.optional(S.String),
          botStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BotVersionSummary" });
    case 4:
      return S.Array(__S(323, __c40, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersionSummaries: S.optional(__S(324, __c40, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListBotVersionsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sortBy: S.optional(__S(295, __c36, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/builtins/locales/{localeId}/intents" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBuiltInIntentsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ intentSignature: S.optional(S.String), description: S.optional(S.String) }),
      ).annotate({ identifier: "BuiltInIntentSummary" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(327, __c40, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          builtInIntentSummaries: S.optional(__S(328, __c41, 0)),
          nextToken: S.optional(S.String),
          localeId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBuiltInIntentsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sortBy: S.optional(__S(295, __c36, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/builtins/locales/{localeId}/slottypes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBuiltInSlotTypesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ slotTypeSignature: S.optional(S.String), description: S.optional(S.String) }),
      ).annotate({ identifier: "BuiltInSlotTypeSummary" });
    case 4:
      return S.Array(__S(331, __c41, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          builtInSlotTypeSummaries: S.optional(__S(332, __c41, 4)),
          nextToken: S.optional(S.String),
          localeId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBuiltInSlotTypesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCustomVocabularyItemsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          customVocabularyItems: S.optional(__S(6, __c0, 6)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCustomVocabularyItemsResponse",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          sortBy: S.optional(__S(295, __c36, 7)),
          filters: S.optional(__S(297, __c37, 1)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          localeId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/exports" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListExportsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          exportId: S.optional(S.String),
          resourceSpecification: S.optional(__S(64, __c8, 0)),
          fileFormat: S.optional(S.String),
          exportStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ExportSummary" });
    case 2:
      return S.Array(__S(337, __c42, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          exportSummaries: S.optional(__S(338, __c42, 2)),
          nextToken: S.optional(S.String),
          localeId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListExportsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          sortBy: S.optional(__S(295, __c36, 7)),
          filters: S.optional(__S(297, __c37, 1)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          localeId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/imports" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListImportsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          importId: S.optional(S.String),
          importedResourceId: S.optional(S.String),
          importedResourceName: S.optional(S.String),
          importStatus: S.optional(S.String),
          mergeStrategy: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          importedResourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportSummary" });
    case 6:
      return S.Array(__S(341, __c42, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          importSummaries: S.optional(__S(342, __c42, 6)),
          nextToken: S.optional(S.String),
          localeId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListImportsResponse" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          statistic: S.String,
          order: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalyticsIntentMetric" });
    case 1:
      return S.Array(__S(344, __c43, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          interval: S.String,
          order: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AnalyticsBinBySpecification",
      });
    case 3:
      return S.Array(__S(346, __c43, 2));
    case 4:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "AnalyticsIntentGroupBySpecification",
      });
    case 5:
      return S.Array(__S(348, __c43, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          operator: S.String,
          values: __S(116, __c14, 4),
        }),
      ).annotate({ identifier: "AnalyticsIntentFilter" });
    case 7:
      return S.Array(__S(350, __c43, 6));
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          metrics: __S(345, __c43, 1),
          binBy: S.optional(__S(347, __c43, 3)),
          groupBy: S.optional(__S(349, __c43, 5)),
          filters: S.optional(__S(351, __c43, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/analytics/intentmetrics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIntentMetricsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.Number) }),
      ).annotate({ identifier: "AnalyticsBinKey" });
    case 2:
      return S.Array(__S(353, __c44, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({
        identifier: "AnalyticsIntentGroupByKey",
      });
    case 4:
      return S.Array(__S(355, __c44, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          statistic: S.optional(S.String),
          value: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AnalyticsIntentMetricResult",
      });
    case 6:
      return S.Array(__S(357, __c44, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          binKeys: S.optional(__S(354, __c44, 2)),
          groupByKeys: S.optional(__S(356, __c44, 4)),
          metricsResults: S.optional(__S(358, __c44, 6)),
        }),
      ).annotate({ identifier: "AnalyticsIntentResult" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(359, __c44, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          results: S.optional(__S(360, __c45, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIntentMetricsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          intentPath: S.String,
          filters: S.optional(__S(351, __c43, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/analytics/intentpaths" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIntentPathsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          intentName: S.optional(S.String),
          intentPath: S.optional(S.String),
          intentCount: S.optional(S.Number),
          intentLevel: S.optional(S.Number),
          nodeType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AnalyticsIntentNodeSummary",
      });
    case 4:
      return S.Array(__S(363, __c45, 3));
    case 5:
      return S.suspend(() => S.Struct({ nodeSummaries: S.optional(__S(364, __c45, 4)) })).annotate({
        identifier: "ListIntentPathsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sortBy: S.optional(__S(295, __c36, 7)),
          filters: S.optional(__S(297, __c37, 1)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIntentsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          intentId: S.optional(S.String),
          intentName: S.optional(S.String),
          intentDisplayName: S.optional(S.String),
          description: S.optional(S.String),
          parentIntentSignature: S.optional(S.String),
          inputContexts: S.optional(__S(110, __c13, 6)),
          outputContexts: S.optional(__S(112, __c14, 0)),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "IntentSummary" });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(367, __c45, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          intentSummaries: S.optional(__S(368, __c46, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListIntentsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          statistic: S.String,
          order: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AnalyticsIntentStageMetric",
      });
    case 3:
      return S.Array(__S(370, __c46, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          operator: S.String,
          values: __S(116, __c14, 4),
        }),
      ).annotate({
        identifier: "AnalyticsIntentStageFilter",
      });
    case 5:
      return S.Array(__S(372, __c46, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          metrics: __S(371, __c46, 3),
          binBy: S.optional(__S(347, __c43, 3)),
          groupBy: S.optional(__S(349, __c43, 5)),
          filters: S.optional(__S(373, __c46, 5)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/analytics/intentstagemetrics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIntentStageMetricsRequest",
      });
    case 7:
      return S.Array(__S(355, __c44, 3));
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(357, __c44, 5));
    case 1:
      return S.suspend(() =>
        S.Struct({
          binKeys: S.optional(__S(354, __c44, 2)),
          groupByKeys: S.optional(__S(375, __c46, 7)),
          metricsResults: S.optional(__S(376, __c47, 0)),
        }),
      ).annotate({
        identifier: "AnalyticsIntentStageResult",
      });
    case 2:
      return S.Array(__S(377, __c47, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          results: S.optional(__S(378, __c47, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIntentStageMetricsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          botRecommendationId: S.String.pipe(T.HttpLabel("botRecommendationId")),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecommendedIntentsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          intentId: S.optional(S.String),
          intentName: S.optional(S.String),
          sampleUtterancesCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RecommendedIntentSummary" });
    case 6:
      return S.Array(__S(381, __c47, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationId: S.optional(S.String),
          summaryList: S.optional(__S(382, __c47, 6)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecommendedIntentsResponse",
      });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, order: S.String })).annotate({
        identifier: "SessionDataSortBy",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          sortBy: S.optional(__S(384, __c48, 0)),
          filters: S.optional(__S(351, __c43, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/analytics/sessions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSessionAnalyticsDataRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ intentName: S.optional(S.String) })).annotate({
        identifier: "InvokedIntentSample",
      });
    case 3:
      return S.Array(__S(386, __c48, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          channel: S.optional(S.String),
          sessionId: S.optional(S.String),
          conversationStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          conversationEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          conversationDurationSeconds: S.optional(S.Number),
          conversationEndState: S.optional(S.String),
          mode: S.optional(S.String),
          numberOfTurns: S.optional(S.Number),
          invokedIntentSamples: S.optional(__S(387, __c48, 3)),
          originatingRequestId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SessionSpecification" });
    case 5:
      return S.Array(__S(388, __c48, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          nextToken: S.optional(S.String),
          sessions: S.optional(__S(389, __c48, 5)),
        }),
      ).annotate({
        identifier: "ListSessionAnalyticsDataResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          metrics: __S(345, __c43, 1),
          binBy: S.optional(__S(347, __c43, 3)),
          groupBy: S.optional(__S(349, __c43, 5)),
          filters: S.optional(__S(351, __c43, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/analytics/sessionmetrics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSessionMetricsRequest",
      });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          intentId: S.String.pipe(T.HttpLabel("intentId")),
          sortBy: S.optional(__S(295, __c36, 7)),
          filters: S.optional(__S(297, __c37, 1)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSlotsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          slotId: S.optional(S.String),
          slotName: S.optional(S.String),
          description: S.optional(S.String),
          slotConstraint: S.optional(S.String),
          slotTypeId: S.optional(S.String),
          valueElicitationPromptSpecification: S.optional(__S(103, __c12, 7)),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SlotSummary" });
    case 2:
      return S.Array(__S(393, __c49, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          intentId: S.optional(S.String),
          slotSummaries: S.optional(__S(394, __c49, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListSlotsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sortBy: S.optional(__S(295, __c36, 7)),
          filters: S.optional(__S(297, __c37, 1)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSlotTypesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          slotTypeId: S.optional(S.String),
          slotTypeName: S.optional(S.String),
          description: S.optional(S.String),
          parentSlotTypeSignature: S.optional(S.String),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          slotTypeCategory: S.optional(S.String),
        }),
      ).annotate({ identifier: "SlotTypeSummary" });
    case 6:
      return S.Array(__S(397, __c49, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          slotTypeSummaries: S.optional(__S(398, __c49, 6)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListSlotTypesResponse" });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String.pipe(T.HttpLabel("resourceARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(15, __c1, 7)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ endToEndResult: S.optional(S.String) })).annotate({
        identifier: "ConversationLevelTestResultsFilterBy",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resultTypeFilter: S.String,
          conversationLevelTestResultsFilterBy: S.optional(__S(402, __c50, 2)),
        }),
      ).annotate({
        identifier: "TestExecutionResultFilterBy",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          testExecutionId: S.String.pipe(T.HttpLabel("testExecutionId")),
          resultFilterBy: __S(403, __c50, 3),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/testexecutions/{testExecutionId}/results" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTestExecutionResultItemsRequest",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          multiTurnConversation: S.Boolean,
          totalResultCount: S.Number,
          speechTranscriptionResultCounts: S.optional(__S(405, __c50, 5)),
          endToEndResultCounts: __S(405, __c50, 5),
        }),
      ).annotate({ identifier: "OverallTestResultItem" });
    case 7:
      return S.Array(__S(406, __c50, 6));
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ items: __S(407, __c50, 7) })).annotate({
        identifier: "OverallTestResults",
      });
    case 1:
      return S.suspend(() => S.Struct({ intentName: S.String, matchResult: S.String })).annotate({
        identifier: "ConversationLevelIntentClassificationResultItem",
      });
    case 2:
      return S.Array(__S(409, __c51, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ intentName: S.String, slotName: S.String, matchResult: S.String }),
      ).annotate({
        identifier: "ConversationLevelSlotResolutionResultItem",
      });
    case 4:
      return S.Array(__S(411, __c51, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.String,
          endToEndResult: S.String,
          speechTranscriptionResult: S.optional(S.String),
          intentClassificationResults: __S(410, __c51, 2),
          slotResolutionResults: __S(412, __c51, 4),
        }),
      ).annotate({
        identifier: "ConversationLevelTestResultItem",
      });
    case 6:
      return S.Array(__S(413, __c51, 5));
    case 7:
      return S.suspend(() => S.Struct({ items: __S(414, __c51, 6) })).annotate({
        identifier: "ConversationLevelTestResults",
      });
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          totalResultCount: S.Number,
          speechTranscriptionResultCounts: S.optional(__S(405, __c50, 5)),
          intentMatchResultCounts: __S(405, __c50, 5),
        }),
      ).annotate({
        identifier: "IntentClassificationTestResultItemCounts",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          intentName: S.String,
          multiTurnConversation: S.Boolean,
          resultCounts: __S(416, __c52, 0),
        }),
      ).annotate({
        identifier: "IntentClassificationTestResultItem",
      });
    case 2:
      return S.Array(__S(417, __c52, 1));
    case 3:
      return S.suspend(() => S.Struct({ items: __S(418, __c52, 2) })).annotate({
        identifier: "IntentClassificationTestResults",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          totalResultCount: S.Number,
          speechTranscriptionResultCounts: S.optional(__S(405, __c50, 5)),
          slotMatchResultCounts: __S(405, __c50, 5),
        }),
      ).annotate({
        identifier: "SlotResolutionTestResultItemCounts",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ slotName: S.String, resultCounts: __S(420, __c52, 4) }),
      ).annotate({
        identifier: "SlotResolutionTestResultItem",
      });
    case 6:
      return S.Array(__S(421, __c52, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          intentName: S.String,
          multiTurnConversation: S.Boolean,
          slotResolutionResults: __S(422, __c52, 6),
        }),
      ).annotate({
        identifier: "IntentLevelSlotResolutionTestResultItem",
      });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(423, __c52, 7));
    case 1:
      return S.suspend(() => S.Struct({ items: __S(424, __c53, 0) })).annotate({
        identifier: "IntentLevelSlotResolutionTestResults",
      });
    case 2:
      return S.suspend(() => S.Struct({ errorCode: S.String, errorMessage: S.String })).annotate({
        identifier: "ExecutionErrorDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          expectedAgentPrompt: S.String,
          actualAgentPrompt: S.optional(S.String),
          errorDetails: S.optional(__S(426, __c53, 2)),
          actualElicitedSlot: S.optional(S.String),
          actualIntent: S.optional(S.String),
        }),
      ).annotate({ identifier: "AgentTurnResult" });
    case 4:
      return S.suspend(() => S.Struct({ audioFileS3Location: S.String })).annotate({
        identifier: "UtteranceAudioInputSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          textInput: S.optional(S.String),
          audioInput: S.optional(__S(428, __c53, 4)),
        }),
      ).annotate({
        identifier: "UtteranceInputSpecification",
      });
    case 6:
      return S.suspend(() => S.Struct({ phrase: S.String })).annotate({
        identifier: "RuntimeHintValue",
      });
    case 7:
      return S.Array(__S(430, __c53, 6));
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          runtimeHintValues: S.optional(__S(431, __c53, 7)),
          subSlotHints: S.optional(
            S.suspend(() => __S(433, __c54, 1)).annotate({ identifier: "SlotHintsSlotMap" }),
          ),
        }),
      ).annotate({ identifier: "RuntimeHintDetails" });
    case 1:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<RuntimeHintDetails> => __S(432, __c54, 0))
          .annotate({ identifier: "RuntimeHintDetails" })
          .pipe(S.optional),
      );
    case 2:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend(() => __S(433, __c54, 1))
          .annotate({ identifier: "SlotHintsSlotMap" })
          .pipe(S.optional),
      );
    case 3:
      return S.suspend(() => S.Struct({ slotHints: S.optional(__S(434, __c54, 2)) })).annotate({
        identifier: "RuntimeHints",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sessionAttributes: S.optional(__S(15, __c1, 7)),
          activeContexts: S.optional(__S(110, __c13, 6)),
          runtimeHints: S.optional(__S(435, __c54, 3)),
        }),
      ).annotate({
        identifier: "InputSessionStateSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          utteranceInput: __S(429, __c53, 5),
          requestAttributes: S.optional(__S(15, __c1, 7)),
          sessionState: S.optional(__S(436, __c54, 4)),
        }),
      ).annotate({
        identifier: "UserTurnInputSpecification",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<UserTurnSlotOutput> => __S(439, __c54, 7)).annotate({
          identifier: "UserTurnSlotOutput",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(S.String),
          values: S.optional(
            S.suspend(() => __S(438, __c54, 6)).annotate({
              identifier: "UserTurnSlotOutputList",
            }),
          ),
          subSlots: S.optional(
            S.suspend(() => __S(440, __c55, 0)).annotate({
              identifier: "UserTurnSlotOutputMap",
            }),
          ),
        }),
      ).annotate({ identifier: "UserTurnSlotOutput" });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<UserTurnSlotOutput> => __S(439, __c54, 7))
          .annotate({ identifier: "UserTurnSlotOutput" })
          .pipe(S.optional),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String, slots: S.optional(__S(440, __c55, 0)) }),
      ).annotate({ identifier: "UserTurnIntentOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          intent: __S(441, __c55, 1),
          activeContexts: S.optional(__S(110, __c13, 6)),
          transcript: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UserTurnOutputSpecification",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          endToEndResult: S.String,
          speechTranscriptionResult: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConversationLevelResultDetail",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          input: __S(437, __c54, 5) as any as S.Schema<UserTurnInputSpecification>,
          expectedOutput: __S(442, __c55, 2),
          actualOutput: S.optional(__S(442, __c55, 2)),
          errorDetails: S.optional(__S(426, __c53, 2)),
          endToEndResult: S.optional(S.String),
          intentMatchResult: S.optional(S.String),
          slotMatchResult: S.optional(S.String),
          speechTranscriptionResult: S.optional(S.String),
          conversationLevelResult: S.optional(__S(443, __c55, 3)),
        }),
      ).annotate({ identifier: "UserTurnResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ agent: S.optional(__S(427, __c53, 3)), user: S.optional(__S(444, __c55, 4)) }),
      ).annotate({ identifier: "TestSetTurnResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          recordNumber: S.Number,
          conversationId: S.optional(S.String),
          turnResult: __S(445, __c55, 5),
        }),
      ).annotate({
        identifier: "UtteranceLevelTestResultItem",
      });
    case 7:
      return S.Array(__S(446, __c55, 6));
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ items: __S(447, __c55, 7) })).annotate({
        identifier: "UtteranceLevelTestResults",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          overallTestResults: S.optional(__S(408, __c51, 0)),
          conversationLevelTestResults: S.optional(__S(415, __c51, 7)),
          intentClassificationTestResults: S.optional(__S(419, __c52, 3)),
          intentLevelSlotResolutionTestResults: S.optional(__S(425, __c53, 1)),
          utteranceLevelTestResults: S.optional(__S(448, __c56, 0)),
        }),
      ).annotate({ identifier: "TestExecutionResultItems" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          testExecutionResults: S.optional(__S(449, __c56, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTestExecutionResultItemsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sortBy: S.optional(__S(295, __c36, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/testexecutions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTestExecutionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          testExecutionId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          testExecutionStatus: S.optional(S.String),
          testSetId: S.optional(S.String),
          testSetName: S.optional(S.String),
          target: S.optional(__S(254, __c31, 6)),
          apiMode: S.optional(S.String),
          testExecutionModality: S.optional(S.String),
        }),
      ).annotate({ identifier: "TestExecutionSummary" });
    case 5:
      return S.Array(__S(452, __c56, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          testExecutions: S.optional(__S(453, __c56, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTestExecutionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          testSetId: S.String.pipe(T.HttpLabel("testSetId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/testsets/{testSetId}/records" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTestSetRecordsRequest",
      });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ agentPrompt: S.String })).annotate({
        identifier: "AgentTurnSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          input: __S(437, __c54, 5) as any as S.Schema<UserTurnInputSpecification>,
          expected: __S(442, __c55, 2),
        }),
      ).annotate({ identifier: "UserTurnSpecification" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentTurn: S.optional(__S(456, __c57, 0)),
          userTurn: S.optional(__S(457, __c57, 1)),
        }),
      ).annotate({ identifier: "TurnSpecification" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          recordNumber: S.Number,
          conversationId: S.optional(S.String),
          turnNumber: S.optional(S.Number),
          turnSpecification: __S(458, __c57, 2),
        }),
      ).annotate({ identifier: "TestSetTurnRecord" });
    case 4:
      return S.Array(__S(459, __c57, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          testSetRecords: S.optional(__S(460, __c57, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTestSetRecordsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          sortBy: S.optional(__S(295, __c36, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/testsets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTestSetsRequest" });
    case 7:
      return S.Array(__S(257, __c32, 1));
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ testSets: S.optional(__S(463, __c57, 7)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTestSetsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          sortBy: S.optional(__S(384, __c48, 0)),
          filters: S.optional(__S(351, __c43, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/analytics/utterances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListUtteranceAnalyticsDataRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          content: S.optional(S.String),
          contentType: S.optional(S.String),
          imageResponseCard: S.optional(__S(73, __c9, 1)),
        }),
      ).annotate({ identifier: "UtteranceBotResponse" });
    case 3:
      return S.Array(__S(466, __c58, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          sessionId: S.optional(S.String),
          channel: S.optional(S.String),
          mode: S.optional(S.String),
          conversationStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          conversationEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          utterance: S.optional(S.String),
          utteranceTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          audioVoiceDurationMillis: S.optional(S.Number),
          utteranceUnderstood: S.optional(S.Boolean),
          inputType: S.optional(S.String),
          outputType: S.optional(S.String),
          associatedIntentName: S.optional(S.String),
          associatedSlotName: S.optional(S.String),
          intentState: S.optional(S.String),
          dialogActionType: S.optional(S.String),
          botResponseAudioVoiceId: S.optional(S.String),
          slotsFilledInSession: S.optional(S.String),
          utteranceRequestId: S.optional(S.String),
          botResponses: S.optional(__S(467, __c58, 3)),
        }),
      ).annotate({ identifier: "UtteranceSpecification" });
    case 5:
      return S.Array(__S(468, __c58, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          nextToken: S.optional(S.String),
          utterances: S.optional(__S(469, __c58, 5)),
        }),
      ).annotate({
        identifier: "ListUtteranceAnalyticsDataResponse",
      });
    case 7:
      return S.Array(__S(348, __c43, 4));
  }
}
function __c59(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          metrics: __S(345, __c43, 1),
          binBy: S.optional(__S(347, __c43, 3)),
          groupBy: S.optional(__S(349, __c43, 5)),
          attributes: S.optional(__S(471, __c58, 7)),
          filters: S.optional(__S(351, __c43, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/analytics/utterancemetrics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListUtteranceMetricsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ lastUsedIntent: S.optional(S.String) })).annotate({
        identifier: "AnalyticsUtteranceAttributeResult",
      });
    case 2:
      return S.Array(__S(473, __c59, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          binKeys: S.optional(__S(354, __c44, 2)),
          groupByKeys: S.optional(__S(356, __c44, 4)),
          metricsResults: S.optional(__S(376, __c47, 0)),
          attributeResults: S.optional(__S(474, __c59, 2)),
        }),
      ).annotate({ identifier: "AnalyticsUtteranceResult" });
    case 4:
      return S.Array(__S(475, __c59, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          results: S.optional(__S(476, __c59, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListUtteranceMetricsResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, values: __S(116, __c14, 4) })).annotate({
        identifier: "AssociatedTranscriptFilter",
      });
    case 7:
      return S.Array(__S(478, __c59, 6));
  }
}
function __c60(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          botRecommendationId: S.String.pipe(T.HttpLabel("botRecommendationId")),
          searchOrder: S.optional(S.String),
          filters: __S(479, __c59, 7),
          maxResults: S.optional(S.Number),
          nextIndex: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchAssociatedTranscriptsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ transcript: S.optional(S.String) })).annotate({
        identifier: "AssociatedTranscript",
      });
    case 2:
      return S.Array(__S(481, __c60, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationId: S.optional(S.String),
          nextIndex: S.optional(S.Number),
          associatedTranscripts: S.optional(__S(482, __c60, 2)),
          totalResults: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SearchAssociatedTranscriptsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          analysisScope: S.String,
          localeId: S.optional(S.String),
          botVersion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/bots/{botId}/botanalyzer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartBotAnalyzerRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botAnalyzerStatus: S.optional(S.String),
          botAnalyzerRequestId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "StartBotAnalyzerResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          transcriptSourceSetting: __S(218, __c27, 2),
          encryptionSetting: S.optional(__S(219, __c27, 3)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartBotRecommendationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationStatus: S.optional(S.String),
          botRecommendationId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          transcriptSourceSetting: S.optional(__S(218, __c27, 2)),
          encryptionSetting: S.optional(__S(219, __c27, 3)),
        }),
      ).annotate({
        identifier: "StartBotRecommendationResponse",
      });
  }
}
function __c61(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          generationInputPrompt: S.String,
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartBotResourceGenerationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          generationInputPrompt: S.optional(S.String),
          generationId: S.optional(S.String),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          generationStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "StartBotResourceGenerationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          importId: S.String,
          resourceSpecification: __S(241, __c30, 1),
          mergeStrategy: S.String,
          filePassword: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/imports" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartImportRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          importId: S.optional(S.String),
          resourceSpecification: S.optional(__S(241, __c30, 1)),
          mergeStrategy: S.optional(S.String),
          importStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "StartImportResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          testSetId: S.String.pipe(T.HttpLabel("testSetId")),
          target: __S(254, __c31, 6),
          apiMode: S.String,
          testExecutionModality: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/testsets/{testSetId}/testexecutions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartTestExecutionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          testExecutionId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          testSetId: S.optional(S.String),
          target: S.optional(__S(254, __c31, 6)),
          apiMode: S.optional(S.String),
          testExecutionModality: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartTestExecutionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          testSetName: S.String,
          description: S.optional(S.String),
          storageLocation: __S(238, __c29, 6),
          generationDataSource: __S(268, __c33, 4),
          roleArn: S.String,
          testSetTags: S.optional(__S(15, __c1, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/testsetgenerations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartTestSetGenerationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          testSetGenerationId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          testSetGenerationStatus: S.optional(S.String),
          testSetName: S.optional(S.String),
          description: S.optional(S.String),
          storageLocation: S.optional(__S(238, __c29, 6)),
          generationDataSource: S.optional(__S(268, __c33, 4)),
          roleArn: S.optional(S.String),
          testSetTags: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({
        identifier: "StartTestSetGenerationResponse",
      });
  }
}
function __c62(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAnalyzerRequestId: S.String.pipe(T.HttpLabel("botAnalyzerRequestId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/bots/{botId}/botanalyzer/{botAnalyzerRequestId}/stop" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopBotAnalyzerRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botAnalyzerStatus: S.optional(S.String),
          botAnalyzerRequestId: S.optional(S.String),
        }),
      ).annotate({ identifier: "StopBotAnalyzerResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          botRecommendationId: S.String.pipe(T.HttpLabel("botRecommendationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopBotRecommendationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationStatus: S.optional(S.String),
          botRecommendationId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StopBotRecommendationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceARN: S.String.pipe(T.HttpLabel("resourceARN")),
          tags: __S(15, __c1, 7),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceARN: S.String.pipe(T.HttpLabel("resourceARN")),
          tagKeys: __S(116, __c14, 4).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botName: S.String,
          description: S.optional(S.String),
          roleArn: S.String,
          dataPrivacy: __S(14, __c1, 6),
          idleSessionTTLInSeconds: S.Number,
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17, __c2, 1)),
          errorLogSettings: S.optional(__S(18, __c2, 2)),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/bots/{botId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateBotRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botName: S.optional(S.String),
          description: S.optional(S.String),
          roleArn: S.optional(S.String),
          dataPrivacy: S.optional(__S(14, __c1, 6)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17, __c2, 1)),
          errorLogSettings: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({ identifier: "UpdateBotResponse" });
  }
}
function __c63(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.String.pipe(T.HttpLabel("botAliasId")),
          botAliasName: S.String,
          description: S.optional(S.String),
          botVersion: S.optional(S.String),
          botAliasLocaleSettings: S.optional(__S(24, __c3, 0)),
          conversationLogSettings: S.optional(__S(33, __c4, 1)),
          sentimentAnalysisSettings: S.optional(__S(34, __c4, 2)),
          botId: S.String.pipe(T.HttpLabel("botId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/bots/{botId}/botaliases/{botAliasId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateBotAliasRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.optional(S.String),
          botAliasName: S.optional(S.String),
          description: S.optional(S.String),
          botVersion: S.optional(S.String),
          botAliasLocaleSettings: S.optional(__S(24, __c3, 0)),
          conversationLogSettings: S.optional(__S(33, __c4, 1)),
          sentimentAnalysisSettings: S.optional(__S(34, __c4, 2)),
          botAliasStatus: S.optional(S.String),
          botId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "UpdateBotAliasResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          description: S.optional(S.String),
          nluIntentConfidenceThreshold: S.Number,
          voiceSettings: S.optional(__S(37, __c4, 5)),
          unifiedSpeechSettings: S.optional(__S(39, __c4, 7)),
          audioFillerSettings: S.optional(__S(40, __c5, 0)),
          speechRecognitionSettings: S.optional(__S(43, __c5, 3)),
          generativeAISettings: S.optional(__S(51, __c6, 3)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52, __c6, 4)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateBotLocaleRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          localeName: S.optional(S.String),
          description: S.optional(S.String),
          nluIntentConfidenceThreshold: S.optional(S.Number),
          voiceSettings: S.optional(__S(37, __c4, 5)),
          unifiedSpeechSettings: S.optional(__S(39, __c4, 7)),
          audioFillerSettings: S.optional(__S(40, __c5, 0)),
          speechRecognitionSettings: S.optional(__S(43, __c5, 3)),
          botLocaleStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116, __c14, 4)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          recommendedActions: S.optional(__S(116, __c14, 4)),
          generativeAISettings: S.optional(__S(51, __c6, 3)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({ identifier: "UpdateBotLocaleResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          botRecommendationId: S.String.pipe(T.HttpLabel("botRecommendationId")),
          encryptionSetting: __S(219, __c27, 3),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateBotRecommendationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationStatus: S.optional(S.String),
          botRecommendationId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          transcriptSourceSetting: S.optional(__S(218, __c27, 2)),
          encryptionSetting: S.optional(__S(219, __c27, 3)),
        }),
      ).annotate({
        identifier: "UpdateBotRecommendationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          exportId: S.String.pipe(T.HttpLabel("exportId")),
          filePassword: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/exports/{exportId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateExportRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          intentId: S.String.pipe(T.HttpLabel("intentId")),
          intentName: S.String,
          intentDisplayName: S.optional(S.String),
          description: S.optional(S.String),
          parentIntentSignature: S.optional(S.String),
          sampleUtterances: S.optional(__S(68, __c8, 4)),
          dialogCodeHook: S.optional(__S(18, __c2, 2)),
          fulfillmentCodeHook: S.optional(__S(95, __c11, 7)),
          slotPriorities: S.optional(__S(245, __c30, 5)),
          intentConfirmationSetting: S.optional(__S(107, __c13, 3)),
          intentClosingSetting: S.optional(__S(108, __c13, 4)),
          inputContexts: S.optional(__S(110, __c13, 6)),
          outputContexts: S.optional(__S(112, __c14, 0)),
          kendraConfiguration: S.optional(__S(113, __c14, 1)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          initialResponseSetting: S.optional(__S(114, __c14, 2)),
          qnAIntentConfiguration: S.optional(__S(122, __c15, 2)),
          qInConnectIntentConfiguration: S.optional(__S(124, __c15, 4)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateIntentRequest" });
  }
}
function __c64(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          policy: S.String,
          expectedRevisionId: S.optional(S.String).pipe(T.HttpQuery("expectedRevisionId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/policy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResourcePolicyRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          slotId: S.String.pipe(T.HttpLabel("slotId")),
          slotName: S.String,
          description: S.optional(S.String),
          slotTypeId: S.optional(S.String),
          valueElicitationSetting: __S(141, __c17, 5),
          obfuscationSetting: S.optional(__S(142, __c17, 6)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          intentId: S.String.pipe(T.HttpLabel("intentId")),
          multipleValuesSetting: S.optional(__S(143, __c17, 7)),
          subSlotSetting: S.optional(__S(147, __c18, 3)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSlotRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          slotTypeId: S.String.pipe(T.HttpLabel("slotTypeId")),
          slotTypeName: S.String,
          description: S.optional(S.String),
          slotTypeValues: S.optional(__S(152, __c19, 0)),
          valueSelectionSetting: S.optional(__S(155, __c19, 3)),
          parentSlotTypeSignature: S.optional(S.String),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          externalSourceSetting: S.optional(__S(158, __c19, 6)),
          compositeSlotTypeSetting: S.optional(__S(161, __c20, 1)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSlotTypeRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          testSetId: S.String.pipe(T.HttpLabel("testSetId")),
          testSetName: S.String,
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/testsets/{testSetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTestSetRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
