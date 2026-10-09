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
  input: __S(2) as any as S.Schema<BatchCreateCustomVocabularyItemRequest>,
  output: __S(7) as any as S.Schema<BatchCreateCustomVocabularyItemResponse>,
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
  input: __S(10) as any as S.Schema<BatchDeleteCustomVocabularyItemRequest>,
  output: __S(7) as any as S.Schema<BatchDeleteCustomVocabularyItemResponse>,
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
  input: __S(11) as any as S.Schema<BatchUpdateCustomVocabularyItemRequest>,
  output: __S(7) as any as S.Schema<BatchUpdateCustomVocabularyItemResponse>,
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
  input: __S(12) as any as S.Schema<BuildBotLocaleRequest>,
  output: __S(13) as any as S.Schema<BuildBotLocaleResponse>,
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
  input: __S(19) as any as S.Schema<CreateBotRequest>,
  output: __S(20) as any as S.Schema<CreateBotResponse>,
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
  input: __S(35) as any as S.Schema<CreateBotAliasRequest>,
  output: __S(36) as any as S.Schema<CreateBotAliasResponse>,
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
  input: __S(53) as any as S.Schema<CreateBotLocaleRequest>,
  output: __S(54) as any as S.Schema<CreateBotLocaleResponse>,
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
  input: __S(55) as any as S.Schema<CreateBotReplicaRequest>,
  output: __S(56) as any as S.Schema<CreateBotReplicaResponse>,
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
  input: __S(59) as any as S.Schema<CreateBotVersionRequest>,
  output: __S(60) as any as S.Schema<CreateBotVersionResponse>,
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
  input: __S(65) as any as S.Schema<CreateExportRequest>,
  output: __S(66) as any as S.Schema<CreateExportResponse>,
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
  input: __S(125) as any as S.Schema<CreateIntentRequest>,
  output: __S(126) as any as S.Schema<CreateIntentResponse>,
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
  input: __S(127) as any as S.Schema<CreateResourcePolicyRequest>,
  output: __S(128) as any as S.Schema<CreateResourcePolicyResponse>,
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
  input: __S(133) as any as S.Schema<CreateResourcePolicyStatementRequest>,
  output: __S(128) as any as S.Schema<CreateResourcePolicyStatementResponse>,
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
  input: __S(148) as any as S.Schema<CreateSlotRequest>,
  output: __S(149) as any as S.Schema<CreateSlotResponse>,
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
  input: __S(162) as any as S.Schema<CreateSlotTypeRequest>,
  output: __S(163) as any as S.Schema<CreateSlotTypeResponse>,
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
  input: __S(166) as any as S.Schema<CreateTestSetDiscrepancyReportRequest>,
  output: __S(167) as any as S.Schema<CreateTestSetDiscrepancyReportResponse>,
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
  input: __S(168) as any as S.Schema<CreateUploadUrlRequest>,
  output: __S(169) as any as S.Schema<CreateUploadUrlResponse>,
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
  input: __S(170) as any as S.Schema<DeleteBotRequest>,
  output: __S(171) as any as S.Schema<DeleteBotResponse>,
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
  input: __S(172) as any as S.Schema<DeleteBotAliasRequest>,
  output: __S(173) as any as S.Schema<DeleteBotAliasResponse>,
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
  input: __S(174) as any as S.Schema<DeleteBotAnalyzerRecommendationRequest>,
  output: __S(175) as any as S.Schema<DeleteBotAnalyzerRecommendationResponse>,
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
  input: __S(176) as any as S.Schema<DeleteBotLocaleRequest>,
  output: __S(177) as any as S.Schema<DeleteBotLocaleResponse>,
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
  input: __S(178) as any as S.Schema<DeleteBotReplicaRequest>,
  output: __S(179) as any as S.Schema<DeleteBotReplicaResponse>,
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
  input: __S(180) as any as S.Schema<DeleteBotVersionRequest>,
  output: __S(181) as any as S.Schema<DeleteBotVersionResponse>,
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
  input: __S(182) as any as S.Schema<DeleteCustomVocabularyRequest>,
  output: __S(183) as any as S.Schema<DeleteCustomVocabularyResponse>,
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
  input: __S(184) as any as S.Schema<DeleteExportRequest>,
  output: __S(185) as any as S.Schema<DeleteExportResponse>,
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
  input: __S(186) as any as S.Schema<DeleteImportRequest>,
  output: __S(187) as any as S.Schema<DeleteImportResponse>,
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
  input: __S(188) as any as S.Schema<DeleteIntentRequest>,
  output: __S(189) as any as S.Schema<DeleteIntentResponse>,
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
  input: __S(190) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(128) as any as S.Schema<DeleteResourcePolicyResponse>,
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
  input: __S(191) as any as S.Schema<DeleteResourcePolicyStatementRequest>,
  output: __S(128) as any as S.Schema<DeleteResourcePolicyStatementResponse>,
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
  input: __S(192) as any as S.Schema<DeleteSlotRequest>,
  output: __S(189) as any as S.Schema<DeleteSlotResponse>,
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
  input: __S(193) as any as S.Schema<DeleteSlotTypeRequest>,
  output: __S(189) as any as S.Schema<DeleteSlotTypeResponse>,
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
  input: __S(194) as any as S.Schema<DeleteTestSetRequest>,
  output: __S(189) as any as S.Schema<DeleteTestSetResponse>,
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
  input: __S(195) as any as S.Schema<DeleteUtterancesRequest>,
  output: __S(189) as any as S.Schema<DeleteUtterancesResponse>,
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
  input: __S(196) as any as S.Schema<DescribeBotRequest>,
  output: __S(197) as any as S.Schema<DescribeBotResponse>,
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
  input: __S(198) as any as S.Schema<DescribeBotAliasRequest>,
  output: __S(202) as any as S.Schema<DescribeBotAliasResponse>,
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
  input: __S(203) as any as S.Schema<DescribeBotAnalyzerRecommendationRequest>,
  output: __S(207) as any as S.Schema<DescribeBotAnalyzerRecommendationResponse>,
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
  input: __S(208) as any as S.Schema<DescribeBotLocaleRequest>,
  output: __S(211) as any as S.Schema<DescribeBotLocaleResponse>,
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
  input: __S(212) as any as S.Schema<DescribeBotRecommendationRequest>,
  output: __S(224) as any as S.Schema<DescribeBotRecommendationResponse>,
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
  input: __S(225) as any as S.Schema<DescribeBotReplicaRequest>,
  output: __S(226) as any as S.Schema<DescribeBotReplicaResponse>,
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
  input: __S(227) as any as S.Schema<DescribeBotResourceGenerationRequest>,
  output: __S(228) as any as S.Schema<DescribeBotResourceGenerationResponse>,
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
  input: __S(229) as any as S.Schema<DescribeBotVersionRequest>,
  output: __S(230) as any as S.Schema<DescribeBotVersionResponse>,
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
  input: __S(231) as any as S.Schema<DescribeCustomVocabularyMetadataRequest>,
  output: __S(232) as any as S.Schema<DescribeCustomVocabularyMetadataResponse>,
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
  input: __S(233) as any as S.Schema<DescribeExportRequest>,
  output: __S(234) as any as S.Schema<DescribeExportResponse>,
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
  input: __S(235) as any as S.Schema<DescribeImportRequest>,
  output: __S(242) as any as S.Schema<DescribeImportResponse>,
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
  input: __S(243) as any as S.Schema<DescribeIntentRequest>,
  output: __S(246) as any as S.Schema<DescribeIntentResponse>,
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
  input: __S(247) as any as S.Schema<DescribeResourcePolicyRequest>,
  output: __S(248) as any as S.Schema<DescribeResourcePolicyResponse>,
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
  input: __S(249) as any as S.Schema<DescribeSlotRequest>,
  output: __S(250) as any as S.Schema<DescribeSlotResponse>,
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
  input: __S(251) as any as S.Schema<DescribeSlotTypeRequest>,
  output: __S(252) as any as S.Schema<DescribeSlotTypeResponse>,
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
  input: __S(253) as any as S.Schema<DescribeTestExecutionRequest>,
  output: __S(255) as any as S.Schema<DescribeTestExecutionResponse>,
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
  input: __S(256) as any as S.Schema<DescribeTestSetRequest>,
  output: __S(257) as any as S.Schema<DescribeTestSetResponse>,
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
  input: __S(258) as any as S.Schema<DescribeTestSetDiscrepancyReportRequest>,
  output: __S(264) as any as S.Schema<DescribeTestSetDiscrepancyReportResponse>,
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
  input: __S(265) as any as S.Schema<DescribeTestSetGenerationRequest>,
  output: __S(269) as any as S.Schema<DescribeTestSetGenerationResponse>,
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
  input: __S(270) as any as S.Schema<GenerateBotElementRequest>,
  output: __S(271) as any as S.Schema<GenerateBotElementResponse>,
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
  input: __S(272) as any as S.Schema<GetTestExecutionArtifactsUrlRequest>,
  output: __S(273) as any as S.Schema<GetTestExecutionArtifactsUrlResponse>,
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
  input: __S(279) as any as S.Schema<ListAggregatedUtterancesRequest>,
  output: __S(282) as any as S.Schema<ListAggregatedUtterancesResponse>,
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
  input: __S(283) as any as S.Schema<ListBotAliasesRequest>,
  output: __S(286) as any as S.Schema<ListBotAliasesResponse>,
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
  input: __S(287) as any as S.Schema<ListBotAliasReplicasRequest>,
  output: __S(290) as any as S.Schema<ListBotAliasReplicasResponse>,
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
  input: __S(291) as any as S.Schema<ListBotAnalyzerHistoryRequest>,
  output: __S(294) as any as S.Schema<ListBotAnalyzerHistoryResponse>,
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
  input: __S(298) as any as S.Schema<ListBotLocalesRequest>,
  output: __S(301) as any as S.Schema<ListBotLocalesResponse>,
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
  input: __S(302) as any as S.Schema<ListBotRecommendationsRequest>,
  output: __S(305) as any as S.Schema<ListBotRecommendationsResponse>,
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
  input: __S(306) as any as S.Schema<ListBotReplicasRequest>,
  output: __S(309) as any as S.Schema<ListBotReplicasResponse>,
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
  input: __S(310) as any as S.Schema<ListBotResourceGenerationsRequest>,
  output: __S(313) as any as S.Schema<ListBotResourceGenerationsResponse>,
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
  input: __S(314) as any as S.Schema<ListBotsRequest>,
  output: __S(317) as any as S.Schema<ListBotsResponse>,
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
  input: __S(318) as any as S.Schema<ListBotVersionReplicasRequest>,
  output: __S(321) as any as S.Schema<ListBotVersionReplicasResponse>,
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
  input: __S(322) as any as S.Schema<ListBotVersionsRequest>,
  output: __S(325) as any as S.Schema<ListBotVersionsResponse>,
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
  input: __S(326) as any as S.Schema<ListBuiltInIntentsRequest>,
  output: __S(329) as any as S.Schema<ListBuiltInIntentsResponse>,
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
  input: __S(330) as any as S.Schema<ListBuiltInSlotTypesRequest>,
  output: __S(333) as any as S.Schema<ListBuiltInSlotTypesResponse>,
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
  input: __S(334) as any as S.Schema<ListCustomVocabularyItemsRequest>,
  output: __S(335) as any as S.Schema<ListCustomVocabularyItemsResponse>,
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
  input: __S(336) as any as S.Schema<ListExportsRequest>,
  output: __S(339) as any as S.Schema<ListExportsResponse>,
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
  input: __S(340) as any as S.Schema<ListImportsRequest>,
  output: __S(343) as any as S.Schema<ListImportsResponse>,
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
  input: __S(352) as any as S.Schema<ListIntentMetricsRequest>,
  output: __S(361) as any as S.Schema<ListIntentMetricsResponse>,
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
  input: __S(362) as any as S.Schema<ListIntentPathsRequest>,
  output: __S(365) as any as S.Schema<ListIntentPathsResponse>,
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
  input: __S(366) as any as S.Schema<ListIntentsRequest>,
  output: __S(369) as any as S.Schema<ListIntentsResponse>,
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
  input: __S(374) as any as S.Schema<ListIntentStageMetricsRequest>,
  output: __S(379) as any as S.Schema<ListIntentStageMetricsResponse>,
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
  input: __S(380) as any as S.Schema<ListRecommendedIntentsRequest>,
  output: __S(383) as any as S.Schema<ListRecommendedIntentsResponse>,
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
  input: __S(385) as any as S.Schema<ListSessionAnalyticsDataRequest>,
  output: __S(390) as any as S.Schema<ListSessionAnalyticsDataResponse>,
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
  input: __S(391) as any as S.Schema<ListSessionMetricsRequest>,
  output: __S(361) as any as S.Schema<ListSessionMetricsResponse>,
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
  input: __S(392) as any as S.Schema<ListSlotsRequest>,
  output: __S(395) as any as S.Schema<ListSlotsResponse>,
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
  input: __S(396) as any as S.Schema<ListSlotTypesRequest>,
  output: __S(399) as any as S.Schema<ListSlotTypesResponse>,
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
  input: __S(400) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(401) as any as S.Schema<ListTagsForResourceResponse>,
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
  input: __S(404) as any as S.Schema<ListTestExecutionResultItemsRequest>,
  output: __S(450) as any as S.Schema<ListTestExecutionResultItemsResponse>,
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
  input: __S(451) as any as S.Schema<ListTestExecutionsRequest>,
  output: __S(454) as any as S.Schema<ListTestExecutionsResponse>,
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
  input: __S(455) as any as S.Schema<ListTestSetRecordsRequest>,
  output: __S(461) as any as S.Schema<ListTestSetRecordsResponse>,
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
  input: __S(462) as any as S.Schema<ListTestSetsRequest>,
  output: __S(464) as any as S.Schema<ListTestSetsResponse>,
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
  input: __S(465) as any as S.Schema<ListUtteranceAnalyticsDataRequest>,
  output: __S(470) as any as S.Schema<ListUtteranceAnalyticsDataResponse>,
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
  input: __S(472) as any as S.Schema<ListUtteranceMetricsRequest>,
  output: __S(477) as any as S.Schema<ListUtteranceMetricsResponse>,
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
  input: __S(480) as any as S.Schema<SearchAssociatedTranscriptsRequest>,
  output: __S(483) as any as S.Schema<SearchAssociatedTranscriptsResponse>,
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
  input: __S(484) as any as S.Schema<StartBotAnalyzerRequest>,
  output: __S(485) as any as S.Schema<StartBotAnalyzerResponse>,
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
  input: __S(486) as any as S.Schema<StartBotRecommendationRequest>,
  output: __S(487) as any as S.Schema<StartBotRecommendationResponse>,
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
  input: __S(488) as any as S.Schema<StartBotResourceGenerationRequest>,
  output: __S(489) as any as S.Schema<StartBotResourceGenerationResponse>,
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
  input: __S(490) as any as S.Schema<StartImportRequest>,
  output: __S(491) as any as S.Schema<StartImportResponse>,
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
  input: __S(492) as any as S.Schema<StartTestExecutionRequest>,
  output: __S(493) as any as S.Schema<StartTestExecutionResponse>,
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
  input: __S(494) as any as S.Schema<StartTestSetGenerationRequest>,
  output: __S(495) as any as S.Schema<StartTestSetGenerationResponse>,
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
  input: __S(496) as any as S.Schema<StopBotAnalyzerRequest>,
  output: __S(497) as any as S.Schema<StopBotAnalyzerResponse>,
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
  input: __S(498) as any as S.Schema<StopBotRecommendationRequest>,
  output: __S(499) as any as S.Schema<StopBotRecommendationResponse>,
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
  input: __S(500) as any as S.Schema<TagResourceRequest>,
  output: __S(189) as any as S.Schema<TagResourceResponse>,
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
  input: __S(501) as any as S.Schema<UntagResourceRequest>,
  output: __S(189) as any as S.Schema<UntagResourceResponse>,
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
  input: __S(502) as any as S.Schema<UpdateBotRequest>,
  output: __S(503) as any as S.Schema<UpdateBotResponse>,
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
  input: __S(504) as any as S.Schema<UpdateBotAliasRequest>,
  output: __S(505) as any as S.Schema<UpdateBotAliasResponse>,
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
  input: __S(506) as any as S.Schema<UpdateBotLocaleRequest>,
  output: __S(507) as any as S.Schema<UpdateBotLocaleResponse>,
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
  input: __S(508) as any as S.Schema<UpdateBotRecommendationRequest>,
  output: __S(509) as any as S.Schema<UpdateBotRecommendationResponse>,
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
  input: __S(510) as any as S.Schema<UpdateExportRequest>,
  output: __S(337) as any as S.Schema<UpdateExportResponse>,
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
  input: __S(511) as any as S.Schema<UpdateIntentRequest>,
  output: __S(246) as any as S.Schema<UpdateIntentResponse>,
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
  input: __S(512) as any as S.Schema<UpdateResourcePolicyRequest>,
  output: __S(128) as any as S.Schema<UpdateResourcePolicyResponse>,
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
  input: __S(513) as any as S.Schema<UpdateSlotRequest>,
  output: __S(250) as any as S.Schema<UpdateSlotResponse>,
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
  input: __S(514) as any as S.Schema<UpdateSlotTypeRequest>,
  output: __S(252) as any as S.Schema<UpdateSlotTypeResponse>,
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
  input: __S(515) as any as S.Schema<UpdateTestSetRequest>,
  output: __S(257) as any as S.Schema<UpdateTestSetResponse>,
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
      return S.Array(__S(0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          customVocabularyItemList: __S(1),
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
      return S.Array(__S(3));
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
      return S.Array(__S(5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          errors: S.optional(__S(4)),
          resources: S.optional(__S(6)),
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
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          customVocabularyItemList: __S(9),
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
          customVocabularyItemList: __S(6),
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
      return S.Array(__S(16));
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
          dataPrivacy: __S(14),
          idleSessionTTLInSeconds: S.Number,
          botTags: S.optional(__S(15)),
          testBotAliasTags: S.optional(__S(15)),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17)),
          errorLogSettings: S.optional(__S(18)),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/bots" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateBotRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botName: S.optional(S.String),
          description: S.optional(S.String),
          roleArn: S.optional(S.String),
          dataPrivacy: S.optional(__S(14)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botTags: S.optional(__S(15)),
          testBotAliasTags: S.optional(__S(15)),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17)),
          errorLogSettings: S.optional(__S(18)),
        }),
      ).annotate({ identifier: "CreateBotResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ lambdaARN: S.String, codeHookInterfaceVersion: S.String }),
      ).annotate({ identifier: "LambdaCodeHook" });
    case 6:
      return S.suspend(() => S.Struct({ lambdaCodeHook: __S(21) })).annotate({
        identifier: "CodeHookSpecification",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ enabled: S.Boolean, codeHookSpecification: S.optional(__S(22)) }),
      ).annotate({ identifier: "BotAliasLocaleSettings" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(23).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({ cloudWatchLogGroupArn: S.String, logPrefix: S.String }),
      ).annotate({
        identifier: "CloudWatchLogGroupLogDestination",
      });
    case 2:
      return S.suspend(() => S.Struct({ cloudWatch: __S(25) })).annotate({
        identifier: "TextLogDestination",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          destination: __S(26),
          selectiveLoggingEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TextLogSetting" });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() =>
        S.Struct({ kmsKeyArn: S.optional(S.String), s3BucketArn: S.String, logPrefix: S.String }),
      ).annotate({ identifier: "S3BucketLogDestination" });
    case 6:
      return S.suspend(() => S.Struct({ s3Bucket: __S(29) })).annotate({
        identifier: "AudioLogDestination",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          destination: __S(30),
          selectiveLoggingEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AudioLogSetting" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31));
    case 1:
      return S.suspend(() =>
        S.Struct({
          textLogSettings: S.optional(__S(28)),
          audioLogSettings: S.optional(__S(32)),
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
          botAliasLocaleSettings: S.optional(__S(24)),
          conversationLogSettings: S.optional(__S(33)),
          sentimentAnalysisSettings: S.optional(__S(34)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          tags: S.optional(__S(15)),
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
          botAliasLocaleSettings: S.optional(__S(24)),
          conversationLogSettings: S.optional(__S(33)),
          sentimentAnalysisSettings: S.optional(__S(34)),
          botAliasStatus: S.optional(S.String),
          botId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(15)),
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
      return S.suspend(() => S.Struct({ speechFoundationModel: __S(38) })).annotate({
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
      return S.suspend(() => S.Struct({ deepgramConfig: S.optional(__S(41)) })).annotate({
        identifier: "SpeechModelConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          speechModelPreference: S.optional(S.String),
          speechModelConfig: S.optional(__S(42)),
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
          guardrail: S.optional(__S(44)),
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
          bedrockModelSpecification: S.optional(__S(45)),
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
          intentDisambiguationSettings: S.optional(__S(47)),
        }),
      ).annotate({
        identifier: "NluImprovementSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          slotResolutionImprovement: S.optional(__S(46)),
          nluImprovement: S.optional(__S(48)),
        }),
      ).annotate({ identifier: "RuntimeSettings" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          descriptiveBotBuilder: S.optional(__S(46)),
          sampleUtteranceGeneration: S.optional(__S(46)),
        }),
      ).annotate({ identifier: "BuildtimeSettings" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          runtimeSettings: S.optional(__S(49)),
          buildtimeSettings: S.optional(__S(50)),
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
          voiceSettings: S.optional(__S(37)),
          unifiedSpeechSettings: S.optional(__S(39)),
          audioFillerSettings: S.optional(__S(40)),
          speechRecognitionSettings: S.optional(__S(43)),
          generativeAISettings: S.optional(__S(51)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52)),
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
          voiceSettings: S.optional(__S(37)),
          unifiedSpeechSettings: S.optional(__S(39)),
          audioFillerSettings: S.optional(__S(40)),
          speechRecognitionSettings: S.optional(__S(43)),
          botLocaleStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          generativeAISettings: S.optional(__S(51)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52)),
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
      return S.Record(S.String, /*@__PURE__*/ __S(57).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          description: S.optional(S.String),
          botVersionLocaleSpecification: __S(58),
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
          botVersionLocaleSpecification: S.optional(__S(58)),
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
          botExportSpecification: S.optional(__S(61)),
          botLocaleExportSpecification: S.optional(__S(62)),
          customVocabularyExportSpecification: S.optional(__S(62)),
          testSetExportSpecification: S.optional(__S(63)),
        }),
      ).annotate({
        identifier: "ExportResourceSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceSpecification: __S(64),
          fileFormat: S.String,
          filePassword: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/exports" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateExportRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          exportId: S.optional(S.String),
          resourceSpecification: S.optional(__S(64)),
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
      return S.Array(__S(67));
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
      return S.Array(__S(71));
    case 1:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          subtitle: S.optional(S.String),
          imageUrl: S.optional(S.String),
          buttons: S.optional(__S(72)),
        }),
      ).annotate({ identifier: "ImageResponseCard" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          plainTextMessage: S.optional(__S(69)),
          customPayload: S.optional(__S(70)),
          ssmlMessage: S.optional(__S(70)),
          imageResponseCard: S.optional(__S(73)),
        }),
      ).annotate({ identifier: "Message" });
    case 3:
      return S.Array(__S(74));
    case 4:
      return S.suspend(() =>
        S.Struct({ message: __S(74), variations: S.optional(__S(75)) }),
      ).annotate({ identifier: "MessageGroup" });
    case 5:
      return S.Array(__S(76));
    case 6:
      return S.suspend(() =>
        S.Struct({ messageGroups: __S(77), allowInterrupt: S.optional(S.Boolean) }),
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
        /*@__PURE__*/ S.suspend((): S.Schema<SlotValueOverride> => __S(82)).annotate({
          identifier: "SlotValueOverride",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          shape: S.optional(S.String),
          value: S.optional(__S(80)),
          values: S.optional(S.suspend(() => __S(81)).annotate({ identifier: "SlotValues" })),
        }),
      ).annotate({ identifier: "SlotValueOverride" });
    case 3:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<SlotValueOverride> => __S(82))
          .annotate({ identifier: "SlotValueOverride" })
          .pipe(S.optional),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), slots: S.optional(__S(83)) }),
      ).annotate({ identifier: "IntentOverride" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          dialogAction: S.optional(__S(79)),
          intent: S.optional(__S(84)),
          sessionAttributes: S.optional(__S(15)),
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
          condition: __S(86),
          nextStep: __S(85),
          response: S.optional(__S(78)),
        }),
      ).annotate({ identifier: "ConditionalBranch" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextStep: S.optional(__S(85)),
          response: S.optional(__S(78)),
        }),
      ).annotate({ identifier: "DefaultConditionalBranch" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          active: S.Boolean,
          conditionalBranches: __S(88),
          defaultBranch: __S(89),
        }),
      ).annotate({ identifier: "ConditionalSpecification" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          successResponse: S.optional(__S(78)),
          failureResponse: S.optional(__S(78)),
          timeoutResponse: S.optional(__S(78)),
          successNextStep: S.optional(__S(85)),
          successConditional: S.optional(__S(90)),
          failureNextStep: S.optional(__S(85)),
          failureConditional: S.optional(__S(90)),
          timeoutNextStep: S.optional(__S(85)),
          timeoutConditional: S.optional(__S(90)),
        }),
      ).annotate({
        identifier: "PostFulfillmentStatusSpecification",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          delayInSeconds: S.Number,
          messageGroups: __S(77),
          allowInterrupt: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "FulfillmentStartResponseSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          frequencyInSeconds: S.Number,
          messageGroups: __S(77),
          allowInterrupt: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "FulfillmentUpdateResponseSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          active: S.Boolean,
          startResponse: S.optional(__S(92)),
          updateResponse: S.optional(__S(93)),
          timeoutInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "FulfillmentUpdatesSpecification",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          postFulfillmentStatusSpecification: S.optional(__S(91)),
          fulfillmentUpdatesSpecification: S.optional(__S(94)),
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
          audioSpecification: S.optional(__S(97)),
          dtmfSpecification: S.optional(__S(98)),
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
          allowedInputTypes: __S(96),
          audioAndDTMFInputSpecification: S.optional(__S(99)),
          textInputSpecification: S.optional(__S(100)),
        }),
      ).annotate({
        identifier: "PromptAttemptSpecification",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(101).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          messageGroups: __S(77),
          maxRetries: S.Number,
          allowInterrupt: S.optional(S.Boolean),
          messageSelectionStrategy: S.optional(S.String),
          promptAttemptsSpecification: S.optional(__S(102)),
        }),
      ).annotate({ identifier: "PromptSpecification" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          successResponse: S.optional(__S(78)),
          successNextStep: S.optional(__S(85)),
          successConditional: S.optional(__S(90)),
          failureResponse: S.optional(__S(78)),
          failureNextStep: S.optional(__S(85)),
          failureConditional: S.optional(__S(90)),
          timeoutResponse: S.optional(__S(78)),
          timeoutNextStep: S.optional(__S(85)),
          timeoutConditional: S.optional(__S(90)),
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
          postCodeHookSpecification: __S(104),
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
          promptSpecification: __S(103),
          declinationResponse: S.optional(__S(78)),
          active: S.optional(S.Boolean),
          confirmationResponse: S.optional(__S(78)),
          confirmationNextStep: S.optional(__S(85)),
          confirmationConditional: S.optional(__S(90)),
          declinationNextStep: S.optional(__S(85)),
          declinationConditional: S.optional(__S(90)),
          failureResponse: S.optional(__S(78)),
          failureNextStep: S.optional(__S(85)),
          failureConditional: S.optional(__S(90)),
          codeHook: S.optional(__S(105)),
          elicitationCodeHook: S.optional(__S(106)),
        }),
      ).annotate({
        identifier: "IntentConfirmationSetting",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          closingResponse: S.optional(__S(78)),
          active: S.optional(S.Boolean),
          nextStep: S.optional(__S(85)),
          conditional: S.optional(__S(90)),
        }),
      ).annotate({ identifier: "IntentClosingSetting" });
    case 5:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "InputContext",
      });
    case 6:
      return S.Array(__S(109));
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.String, timeToLiveInSeconds: S.Number, turnsToLive: S.Number }),
      ).annotate({ identifier: "OutputContext" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111));
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
          initialResponse: S.optional(__S(78)),
          nextStep: S.optional(__S(85)),
          conditional: S.optional(__S(90)),
          codeHook: S.optional(__S(105)),
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
          exactResponseFields: S.optional(__S(115)),
          includeFields: S.optional(__S(116)),
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
          exactResponseFields: S.optional(__S(119)),
        }),
      ).annotate({
        identifier: "BedrockKnowledgeStoreConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          opensearchConfiguration: S.optional(__S(117)),
          kendraConfiguration: S.optional(__S(118)),
          bedrockKnowledgeStoreConfiguration: S.optional(__S(120)),
        }),
      ).annotate({ identifier: "DataSourceConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          dataSourceConfiguration: S.optional(__S(121)),
          bedrockModelConfiguration: S.optional(__S(45)),
        }),
      ).annotate({ identifier: "QnAIntentConfiguration" });
    case 3:
      return S.suspend(() => S.Struct({ assistantArn: S.String })).annotate({
        identifier: "QInConnectAssistantConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          qInConnectAssistantConfiguration: S.optional(__S(123)),
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
          sampleUtterances: S.optional(__S(68)),
          dialogCodeHook: S.optional(__S(18)),
          fulfillmentCodeHook: S.optional(__S(95)),
          intentConfirmationSetting: S.optional(__S(107)),
          intentClosingSetting: S.optional(__S(108)),
          inputContexts: S.optional(__S(110)),
          outputContexts: S.optional(__S(112)),
          kendraConfiguration: S.optional(__S(113)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          initialResponseSetting: S.optional(__S(114)),
          qnAIntentConfiguration: S.optional(__S(122)),
          qInConnectIntentConfiguration: S.optional(__S(124)),
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
          sampleUtterances: S.optional(__S(68)),
          dialogCodeHook: S.optional(__S(18)),
          fulfillmentCodeHook: S.optional(__S(95)),
          intentConfirmationSetting: S.optional(__S(107)),
          intentClosingSetting: S.optional(__S(108)),
          inputContexts: S.optional(__S(110)),
          outputContexts: S.optional(__S(112)),
          kendraConfiguration: S.optional(__S(113)),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          initialResponseSetting: S.optional(__S(114)),
          qnAIntentConfiguration: S.optional(__S(122)),
          qInConnectIntentConfiguration: S.optional(__S(124)),
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
      return S.Array(__S(129));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(131).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          statementId: S.String,
          effect: S.String,
          principal: __S(130),
          action: __S(116),
          condition: S.optional(__S(132)),
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
      return S.Array(__S(134));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ defaultValueList: __S(135) })).annotate({
        identifier: "SlotDefaultValueSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          messageGroups: __S(77),
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
          waitingResponse: __S(78),
          continueResponse: __S(78),
          stillWaitingResponse: S.optional(__S(137)),
          active: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "WaitAndContinueSpecification",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          captureResponse: S.optional(__S(78)),
          captureNextStep: S.optional(__S(85)),
          captureConditional: S.optional(__S(90)),
          failureResponse: S.optional(__S(78)),
          failureNextStep: S.optional(__S(85)),
          failureConditional: S.optional(__S(90)),
          codeHook: S.optional(__S(105)),
          elicitationCodeHook: S.optional(__S(106)),
        }),
      ).annotate({ identifier: "SlotCaptureSetting" });
    case 4:
      return S.suspend(() => S.Struct({ slotResolutionStrategy: S.String })).annotate({
        identifier: "SlotResolutionSetting",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          defaultValueSpecification: S.optional(__S(136)),
          slotConstraint: S.String,
          promptSpecification: S.optional(__S(103)),
          sampleUtterances: S.optional(__S(68)),
          waitAndContinueSpecification: S.optional(__S(138)),
          slotCaptureSetting: S.optional(__S(139)),
          slotResolutionSetting: S.optional(__S(140)),
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
          defaultValueSpecification: S.optional(__S(136)),
          promptSpecification: __S(103),
          sampleUtterances: S.optional(__S(68)),
          waitAndContinueSpecification: S.optional(__S(138)),
        }),
      ).annotate({
        identifier: "SubSlotValueElicitationSetting",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ slotTypeId: S.String, valueElicitationSetting: __S(144) }),
      ).annotate({ identifier: "Specifications" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(145).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          expression: S.optional(S.String),
          slotSpecifications: S.optional(__S(146)),
        }),
      ).annotate({ identifier: "SubSlotSetting" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          slotName: S.String,
          description: S.optional(S.String),
          slotTypeId: S.optional(S.String),
          valueElicitationSetting: __S(141),
          obfuscationSetting: S.optional(__S(142)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          intentId: S.String.pipe(T.HttpLabel("intentId")),
          multipleValuesSetting: S.optional(__S(143)),
          subSlotSetting: S.optional(__S(147)),
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
          valueElicitationSetting: S.optional(__S(141)),
          obfuscationSetting: S.optional(__S(142)),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          intentId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          multipleValuesSetting: S.optional(__S(143)),
          subSlotSetting: S.optional(__S(147)),
        }),
      ).annotate({ identifier: "CreateSlotResponse" });
    case 6:
      return S.Array(__S(70));
    case 7:
      return S.suspend(() =>
        S.Struct({ sampleValue: S.optional(__S(70)), synonyms: S.optional(__S(150)) }),
      ).annotate({ identifier: "SlotTypeValue" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151));
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
          regexFilter: S.optional(__S(153)),
          advancedRecognitionSetting: S.optional(__S(154)),
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
      return S.suspend(() => S.Struct({ source: S.optional(__S(156)) })).annotate({
        identifier: "GrammarSlotTypeSetting",
      });
    case 6:
      return S.suspend(() => S.Struct({ grammarSlotTypeSetting: S.optional(__S(157)) })).annotate({
        identifier: "ExternalSourceSetting",
      });
    case 7:
      return S.suspend(() => S.Struct({ name: S.String, slotTypeId: S.String })).annotate({
        identifier: "SubSlotTypeComposition",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(159));
    case 1:
      return S.suspend(() => S.Struct({ subSlots: S.optional(__S(160)) })).annotate({
        identifier: "CompositeSlotTypeSetting",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          slotTypeName: S.String,
          description: S.optional(S.String),
          slotTypeValues: S.optional(__S(152)),
          valueSelectionSetting: S.optional(__S(155)),
          parentSlotTypeSignature: S.optional(S.String),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          externalSourceSetting: S.optional(__S(158)),
          compositeSlotTypeSetting: S.optional(__S(161)),
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
          slotTypeValues: S.optional(__S(152)),
          valueSelectionSetting: S.optional(__S(155)),
          parentSlotTypeSignature: S.optional(S.String),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          externalSourceSetting: S.optional(__S(158)),
          compositeSlotTypeSetting: S.optional(__S(161)),
        }),
      ).annotate({ identifier: "CreateSlotTypeResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ botId: S.String, botAliasId: S.String, localeId: S.String }),
      ).annotate({
        identifier: "TestSetDiscrepancyReportBotAliasTarget",
      });
    case 5:
      return S.suspend(() => S.Struct({ botAliasTarget: S.optional(__S(164)) })).annotate({
        identifier: "TestSetDiscrepancyReportResourceTarget",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          testSetId: S.String.pipe(T.HttpLabel("testSetId")),
          target: __S(165),
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
          target: S.optional(__S(165)),
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
          dataPrivacy: S.optional(__S(14)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17)),
          failureReasons: S.optional(__S(116)),
          errorLogSettings: S.optional(__S(18)),
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
      return S.Array(__S(199));
    case 1:
      return S.Array(__S(61));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botAliasId: S.optional(S.String),
          botAliasName: S.optional(S.String),
          description: S.optional(S.String),
          botVersion: S.optional(S.String),
          botAliasLocaleSettings: S.optional(__S(24)),
          conversationLogSettings: S.optional(__S(33)),
          sentimentAnalysisSettings: S.optional(__S(34)),
          botAliasHistoryEvents: S.optional(__S(200)),
          botAliasStatus: S.optional(S.String),
          botId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          parentBotNetworks: S.optional(__S(201)),
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
          issueLocation: __S(204),
          priority: S.String,
          issueDescription: S.String,
          proposedFix: S.String,
        }),
      ).annotate({
        identifier: "BotAnalyzerRecommendation",
      });
    case 6:
      return S.Array(__S(205));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botAnalyzerStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botAnalyzerRecommendationList: S.optional(__S(206)),
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
      return S.Array(__S(209));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          localeName: S.optional(S.String),
          description: S.optional(S.String),
          nluIntentConfidenceThreshold: S.optional(S.Number),
          voiceSettings: S.optional(__S(37)),
          unifiedSpeechSettings: S.optional(__S(39)),
          audioFillerSettings: S.optional(__S(40)),
          speechRecognitionSettings: S.optional(__S(43)),
          intentsCount: S.optional(S.Number),
          slotTypesCount: S.optional(S.Number),
          botLocaleStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastBuildSubmittedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botLocaleHistoryEvents: S.optional(__S(210)),
          recommendedActions: S.optional(__S(116)),
          generativeAISettings: S.optional(__S(51)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52)),
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
      return S.suspend(() => S.Struct({ objectPrefixes: S.optional(__S(116)) })).annotate({
        identifier: "PathFormat",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DateRangeFilter" });
    case 7:
      return S.suspend(() => S.Struct({ dateRangeFilter: S.optional(__S(214)) })).annotate({
        identifier: "LexTranscriptFilter",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ lexTranscriptFilter: S.optional(__S(215)) })).annotate({
        identifier: "TranscriptFilter",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          s3BucketName: S.String,
          pathFormat: S.optional(__S(213)),
          transcriptFormat: S.String,
          transcriptFilter: S.optional(__S(216)),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3BucketTranscriptSource" });
    case 2:
      return S.suspend(() => S.Struct({ s3BucketTranscriptSource: S.optional(__S(217)) })).annotate(
        { identifier: "TranscriptSourceSetting" },
      );
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
          intents: S.optional(__S(220)),
          slotTypes: S.optional(__S(221)),
        }),
      ).annotate({
        identifier: "BotRecommendationResultStatistics",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          botLocaleExportUrl: S.optional(S.String),
          associatedTranscriptsUrl: S.optional(S.String),
          statistics: S.optional(__S(222)),
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
          failureReasons: S.optional(__S(116)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          transcriptSourceSetting: S.optional(__S(218)),
          encryptionSetting: S.optional(__S(219)),
          botRecommendationResults: S.optional(__S(223)),
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
          failureReasons: S.optional(__S(116)),
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
          failureReasons: S.optional(__S(116)),
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
          dataPrivacy: S.optional(__S(14)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          parentBotNetworks: S.optional(__S(201)),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17)),
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
          resourceSpecification: S.optional(__S(64)),
          fileFormat: S.optional(S.String),
          exportStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116)),
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
          dataPrivacy: __S(14),
          errorLogSettings: S.optional(__S(18)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botTags: S.optional(__S(15)),
          testBotAliasTags: S.optional(__S(15)),
        }),
      ).annotate({ identifier: "BotImportSpecification" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.String,
          botVersion: S.String,
          localeId: S.String,
          nluIntentConfidenceThreshold: S.optional(S.Number),
          voiceSettings: S.optional(__S(37)),
          speechRecognitionSettings: S.optional(__S(43)),
          speechDetectionSensitivity: S.optional(S.String),
          unifiedSpeechSettings: S.optional(__S(39)),
          audioFillerSettings: S.optional(__S(40)),
          speakerDiarizationSettings: S.optional(__S(52)),
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
          storageLocation: __S(238),
          importInputLocation: __S(239),
          modality: S.String,
          testSetTags: S.optional(__S(15)),
        }),
      ).annotate({
        identifier: "TestSetImportResourceSpecification",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botImportSpecification: S.optional(__S(236)),
          botLocaleImportSpecification: S.optional(__S(237)),
          customVocabularyImportSpecification: S.optional(__S(62)),
          testSetImportResourceSpecification: S.optional(__S(240)),
        }),
      ).annotate({
        identifier: "ImportResourceSpecification",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          importId: S.optional(S.String),
          resourceSpecification: S.optional(__S(241)),
          importedResourceId: S.optional(S.String),
          importedResourceName: S.optional(S.String),
          mergeStrategy: S.optional(S.String),
          importStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116)),
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
      return S.Array(__S(244));
    case 6:
      return S.suspend(() =>
        S.Struct({
          intentId: S.optional(S.String),
          intentName: S.optional(S.String),
          intentDisplayName: S.optional(S.String),
          description: S.optional(S.String),
          parentIntentSignature: S.optional(S.String),
          sampleUtterances: S.optional(__S(68)),
          dialogCodeHook: S.optional(__S(18)),
          fulfillmentCodeHook: S.optional(__S(95)),
          slotPriorities: S.optional(__S(245)),
          intentConfirmationSetting: S.optional(__S(107)),
          intentClosingSetting: S.optional(__S(108)),
          inputContexts: S.optional(__S(110)),
          outputContexts: S.optional(__S(112)),
          kendraConfiguration: S.optional(__S(113)),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          initialResponseSetting: S.optional(__S(114)),
          qnAIntentConfiguration: S.optional(__S(122)),
          qInConnectIntentConfiguration: S.optional(__S(124)),
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
          valueElicitationSetting: S.optional(__S(141)),
          obfuscationSetting: S.optional(__S(142)),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          intentId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          multipleValuesSetting: S.optional(__S(143)),
          subSlotSetting: S.optional(__S(147)),
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
          slotTypeValues: S.optional(__S(152)),
          valueSelectionSetting: S.optional(__S(155)),
          parentSlotTypeSignature: S.optional(S.String),
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          externalSourceSetting: S.optional(__S(158)),
          compositeSlotTypeSetting: S.optional(__S(161)),
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
      return S.suspend(() => S.Struct({ botAliasTarget: S.optional(__S(164)) })).annotate({
        identifier: "TestExecutionTarget",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          testExecutionId: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          testExecutionStatus: S.optional(S.String),
          testSetId: S.optional(S.String),
          testSetName: S.optional(S.String),
          target: S.optional(__S(254)),
          apiMode: S.optional(S.String),
          testExecutionModality: S.optional(S.String),
          failureReasons: S.optional(__S(116)),
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
          storageLocation: S.optional(__S(238)),
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
      return S.Array(__S(259));
    case 5:
      return S.suspend(() =>
        S.Struct({ intentName: S.String, slotName: S.String, errorMessage: S.String }),
      ).annotate({
        identifier: "TestSetSlotDiscrepancyItem",
      });
    case 6:
      return S.Array(__S(261));
    case 7:
      return S.suspend(() =>
        S.Struct({
          intentDiscrepancies: __S(260),
          slotDiscrepancies: __S(262),
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
          target: S.optional(__S(165)),
          testSetDiscrepancyReportStatus: S.optional(S.String),
          lastUpdatedDataTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          testSetDiscrepancyTopErrors: S.optional(__S(263)),
          testSetDiscrepancyRawOutputUrl: S.optional(S.String),
          failureReasons: S.optional(__S(116)),
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
          filter: __S(266),
        }),
      ).annotate({
        identifier: "ConversationLogsDataSource",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ conversationLogsDataSource: S.optional(__S(267)) }),
      ).annotate({
        identifier: "TestSetGenerationDataSource",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          testSetGenerationId: S.optional(S.String),
          testSetGenerationStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116)),
          testSetId: S.optional(S.String),
          testSetName: S.optional(S.String),
          description: S.optional(S.String),
          storageLocation: S.optional(__S(238)),
          generationDataSource: S.optional(__S(268)),
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
          sampleUtterances: S.optional(__S(68)),
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
      return S.suspend(() => S.Struct({ relativeAggregationDuration: __S(274) })).annotate({
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
          values: __S(116),
          operator: S.String,
        }),
      ).annotate({
        identifier: "AggregatedUtterancesFilter",
      });
    case 6:
      return S.Array(__S(277));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botAliasId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.String,
          aggregationDuration: __S(275),
          sortBy: S.optional(__S(276)),
          filters: S.optional(__S(278)),
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
      return S.Array(__S(280));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botAliasId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          aggregationDuration: S.optional(__S(275)),
          aggregationWindowStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          aggregationWindowEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          aggregationLastRefreshedDateTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          aggregatedUtterancesSummaries: S.optional(__S(281)),
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
      return S.Array(__S(284));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botAliasSummaries: S.optional(__S(285)),
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
          failureReasons: S.optional(__S(116)),
        }),
      ).annotate({ identifier: "BotAliasReplicaSummary" });
    case 1:
      return S.Array(__S(288));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          sourceRegion: S.optional(S.String),
          replicaRegion: S.optional(S.String),
          botAliasReplicaSummaries: S.optional(__S(289)),
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
      return S.Array(__S(292));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          localeId: S.optional(S.String),
          botVersion: S.optional(S.String),
          botAnalyzerHistoryList: S.optional(__S(293)),
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
          values: __S(116),
          operator: S.String,
        }),
      ).annotate({ identifier: "BotLocaleFilter" });
    case 1:
      return S.Array(__S(296));
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          sortBy: S.optional(__S(295)),
          filters: S.optional(__S(297)),
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
      return S.Array(__S(299));
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          nextToken: S.optional(S.String),
          botLocaleSummaries: S.optional(__S(300)),
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
      return S.Array(__S(303));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationSummaries: S.optional(__S(304)),
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
          failureReasons: S.optional(__S(116)),
        }),
      ).annotate({ identifier: "BotReplicaSummary" });
    case 4:
      return S.Array(__S(307));
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          sourceRegion: S.optional(S.String),
          botReplicaSummaries: S.optional(__S(308)),
        }),
      ).annotate({ identifier: "ListBotReplicasResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sortBy: S.optional(__S(295)),
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
      return S.Array(__S(311));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          generationSummaries: S.optional(__S(312)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBotResourceGenerationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sortBy: S.optional(__S(295)),
          filters: S.optional(__S(297)),
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
      return S.Array(__S(315));
    case 5:
      return S.suspend(() =>
        S.Struct({ botSummaries: S.optional(__S(316)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListBotsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          replicaRegion: S.String.pipe(T.HttpLabel("replicaRegion")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortBy: S.optional(__S(295)),
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
          failureReasons: S.optional(__S(116)),
        }),
      ).annotate({ identifier: "BotVersionReplicaSummary" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(319));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          sourceRegion: S.optional(S.String),
          replicaRegion: S.optional(S.String),
          botVersionReplicaSummaries: S.optional(__S(320)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBotVersionReplicasResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          sortBy: S.optional(__S(295)),
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
      return S.Array(__S(323));
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersionSummaries: S.optional(__S(324)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListBotVersionsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sortBy: S.optional(__S(295)),
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
      return S.Array(__S(327));
    case 1:
      return S.suspend(() =>
        S.Struct({
          builtInIntentSummaries: S.optional(__S(328)),
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
          sortBy: S.optional(__S(295)),
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
      return S.Array(__S(331));
    case 5:
      return S.suspend(() =>
        S.Struct({
          builtInSlotTypeSummaries: S.optional(__S(332)),
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
          customVocabularyItems: S.optional(__S(6)),
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
          sortBy: S.optional(__S(295)),
          filters: S.optional(__S(297)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          localeId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/exports" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListExportsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          exportId: S.optional(S.String),
          resourceSpecification: S.optional(__S(64)),
          fileFormat: S.optional(S.String),
          exportStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ExportSummary" });
    case 2:
      return S.Array(__S(337));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          exportSummaries: S.optional(__S(338)),
          nextToken: S.optional(S.String),
          localeId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListExportsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          sortBy: S.optional(__S(295)),
          filters: S.optional(__S(297)),
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
      return S.Array(__S(341));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          importSummaries: S.optional(__S(342)),
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
      return S.Array(__S(344));
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
      return S.Array(__S(346));
    case 4:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "AnalyticsIntentGroupBySpecification",
      });
    case 5:
      return S.Array(__S(348));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          operator: S.String,
          values: __S(116),
        }),
      ).annotate({ identifier: "AnalyticsIntentFilter" });
    case 7:
      return S.Array(__S(350));
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
          metrics: __S(345),
          binBy: S.optional(__S(347)),
          groupBy: S.optional(__S(349)),
          filters: S.optional(__S(351)),
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
      return S.Array(__S(353));
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({
        identifier: "AnalyticsIntentGroupByKey",
      });
    case 4:
      return S.Array(__S(355));
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
      return S.Array(__S(357));
    case 7:
      return S.suspend(() =>
        S.Struct({
          binKeys: S.optional(__S(354)),
          groupByKeys: S.optional(__S(356)),
          metricsResults: S.optional(__S(358)),
        }),
      ).annotate({ identifier: "AnalyticsIntentResult" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(359));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          results: S.optional(__S(360)),
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
          filters: S.optional(__S(351)),
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
      return S.Array(__S(363));
    case 5:
      return S.suspend(() => S.Struct({ nodeSummaries: S.optional(__S(364)) })).annotate({
        identifier: "ListIntentPathsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sortBy: S.optional(__S(295)),
          filters: S.optional(__S(297)),
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
          inputContexts: S.optional(__S(110)),
          outputContexts: S.optional(__S(112)),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "IntentSummary" });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(367));
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          intentSummaries: S.optional(__S(368)),
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
      return S.Array(__S(370));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          operator: S.String,
          values: __S(116),
        }),
      ).annotate({
        identifier: "AnalyticsIntentStageFilter",
      });
    case 5:
      return S.Array(__S(372));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          metrics: __S(371),
          binBy: S.optional(__S(347)),
          groupBy: S.optional(__S(349)),
          filters: S.optional(__S(373)),
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
      return S.Array(__S(355));
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(357));
    case 1:
      return S.suspend(() =>
        S.Struct({
          binKeys: S.optional(__S(354)),
          groupByKeys: S.optional(__S(375)),
          metricsResults: S.optional(__S(376)),
        }),
      ).annotate({
        identifier: "AnalyticsIntentStageResult",
      });
    case 2:
      return S.Array(__S(377));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          results: S.optional(__S(378)),
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
      return S.Array(__S(381));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationId: S.optional(S.String),
          summaryList: S.optional(__S(382)),
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
          sortBy: S.optional(__S(384)),
          filters: S.optional(__S(351)),
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
      return S.Array(__S(386));
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
          invokedIntentSamples: S.optional(__S(387)),
          originatingRequestId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SessionSpecification" });
    case 5:
      return S.Array(__S(388));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          nextToken: S.optional(S.String),
          sessions: S.optional(__S(389)),
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
          metrics: __S(345),
          binBy: S.optional(__S(347)),
          groupBy: S.optional(__S(349)),
          filters: S.optional(__S(351)),
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
          sortBy: S.optional(__S(295)),
          filters: S.optional(__S(297)),
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
          valueElicitationPromptSpecification: S.optional(__S(103)),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SlotSummary" });
    case 2:
      return S.Array(__S(393));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          intentId: S.optional(S.String),
          slotSummaries: S.optional(__S(394)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListSlotsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          sortBy: S.optional(__S(295)),
          filters: S.optional(__S(297)),
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
      return S.Array(__S(397));
    case 7:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          slotTypeSummaries: S.optional(__S(398)),
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(15)) })).annotate({
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
          conversationLevelTestResultsFilterBy: S.optional(__S(402)),
        }),
      ).annotate({
        identifier: "TestExecutionResultFilterBy",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          testExecutionId: S.String.pipe(T.HttpLabel("testExecutionId")),
          resultFilterBy: __S(403),
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
          speechTranscriptionResultCounts: S.optional(__S(405)),
          endToEndResultCounts: __S(405),
        }),
      ).annotate({ identifier: "OverallTestResultItem" });
    case 7:
      return S.Array(__S(406));
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ items: __S(407) })).annotate({
        identifier: "OverallTestResults",
      });
    case 1:
      return S.suspend(() => S.Struct({ intentName: S.String, matchResult: S.String })).annotate({
        identifier: "ConversationLevelIntentClassificationResultItem",
      });
    case 2:
      return S.Array(__S(409));
    case 3:
      return S.suspend(() =>
        S.Struct({ intentName: S.String, slotName: S.String, matchResult: S.String }),
      ).annotate({
        identifier: "ConversationLevelSlotResolutionResultItem",
      });
    case 4:
      return S.Array(__S(411));
    case 5:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.String,
          endToEndResult: S.String,
          speechTranscriptionResult: S.optional(S.String),
          intentClassificationResults: __S(410),
          slotResolutionResults: __S(412),
        }),
      ).annotate({
        identifier: "ConversationLevelTestResultItem",
      });
    case 6:
      return S.Array(__S(413));
    case 7:
      return S.suspend(() => S.Struct({ items: __S(414) })).annotate({
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
          speechTranscriptionResultCounts: S.optional(__S(405)),
          intentMatchResultCounts: __S(405),
        }),
      ).annotate({
        identifier: "IntentClassificationTestResultItemCounts",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          intentName: S.String,
          multiTurnConversation: S.Boolean,
          resultCounts: __S(416),
        }),
      ).annotate({
        identifier: "IntentClassificationTestResultItem",
      });
    case 2:
      return S.Array(__S(417));
    case 3:
      return S.suspend(() => S.Struct({ items: __S(418) })).annotate({
        identifier: "IntentClassificationTestResults",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          totalResultCount: S.Number,
          speechTranscriptionResultCounts: S.optional(__S(405)),
          slotMatchResultCounts: __S(405),
        }),
      ).annotate({
        identifier: "SlotResolutionTestResultItemCounts",
      });
    case 5:
      return S.suspend(() => S.Struct({ slotName: S.String, resultCounts: __S(420) })).annotate({
        identifier: "SlotResolutionTestResultItem",
      });
    case 6:
      return S.Array(__S(421));
    case 7:
      return S.suspend(() =>
        S.Struct({
          intentName: S.String,
          multiTurnConversation: S.Boolean,
          slotResolutionResults: __S(422),
        }),
      ).annotate({
        identifier: "IntentLevelSlotResolutionTestResultItem",
      });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(423));
    case 1:
      return S.suspend(() => S.Struct({ items: __S(424) })).annotate({
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
          errorDetails: S.optional(__S(426)),
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
          audioInput: S.optional(__S(428)),
        }),
      ).annotate({
        identifier: "UtteranceInputSpecification",
      });
    case 6:
      return S.suspend(() => S.Struct({ phrase: S.String })).annotate({
        identifier: "RuntimeHintValue",
      });
    case 7:
      return S.Array(__S(430));
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          runtimeHintValues: S.optional(__S(431)),
          subSlotHints: S.optional(
            S.suspend(() => __S(433)).annotate({ identifier: "SlotHintsSlotMap" }),
          ),
        }),
      ).annotate({ identifier: "RuntimeHintDetails" });
    case 1:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<RuntimeHintDetails> => __S(432))
          .annotate({ identifier: "RuntimeHintDetails" })
          .pipe(S.optional),
      );
    case 2:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend(() => __S(433))
          .annotate({ identifier: "SlotHintsSlotMap" })
          .pipe(S.optional),
      );
    case 3:
      return S.suspend(() => S.Struct({ slotHints: S.optional(__S(434)) })).annotate({
        identifier: "RuntimeHints",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sessionAttributes: S.optional(__S(15)),
          activeContexts: S.optional(__S(110)),
          runtimeHints: S.optional(__S(435)),
        }),
      ).annotate({
        identifier: "InputSessionStateSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          utteranceInput: __S(429),
          requestAttributes: S.optional(__S(15)),
          sessionState: S.optional(__S(436)),
        }),
      ).annotate({
        identifier: "UserTurnInputSpecification",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<UserTurnSlotOutput> => __S(439)).annotate({
          identifier: "UserTurnSlotOutput",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(S.String),
          values: S.optional(
            S.suspend(() => __S(438)).annotate({
              identifier: "UserTurnSlotOutputList",
            }),
          ),
          subSlots: S.optional(
            S.suspend(() => __S(440)).annotate({
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
        /*@__PURE__*/ S.suspend((): S.Schema<UserTurnSlotOutput> => __S(439))
          .annotate({ identifier: "UserTurnSlotOutput" })
          .pipe(S.optional),
      );
    case 1:
      return S.suspend(() => S.Struct({ name: S.String, slots: S.optional(__S(440)) })).annotate({
        identifier: "UserTurnIntentOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          intent: __S(441),
          activeContexts: S.optional(__S(110)),
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
          input: __S(437) as any as S.Schema<UserTurnInputSpecification>,
          expectedOutput: __S(442),
          actualOutput: S.optional(__S(442)),
          errorDetails: S.optional(__S(426)),
          endToEndResult: S.optional(S.String),
          intentMatchResult: S.optional(S.String),
          slotMatchResult: S.optional(S.String),
          speechTranscriptionResult: S.optional(S.String),
          conversationLevelResult: S.optional(__S(443)),
        }),
      ).annotate({ identifier: "UserTurnResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ agent: S.optional(__S(427)), user: S.optional(__S(444)) }),
      ).annotate({ identifier: "TestSetTurnResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          recordNumber: S.Number,
          conversationId: S.optional(S.String),
          turnResult: __S(445),
        }),
      ).annotate({
        identifier: "UtteranceLevelTestResultItem",
      });
    case 7:
      return S.Array(__S(446));
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ items: __S(447) })).annotate({
        identifier: "UtteranceLevelTestResults",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          overallTestResults: S.optional(__S(408)),
          conversationLevelTestResults: S.optional(__S(415)),
          intentClassificationTestResults: S.optional(__S(419)),
          intentLevelSlotResolutionTestResults: S.optional(__S(425)),
          utteranceLevelTestResults: S.optional(__S(448)),
        }),
      ).annotate({ identifier: "TestExecutionResultItems" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          testExecutionResults: S.optional(__S(449)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTestExecutionResultItemsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sortBy: S.optional(__S(295)),
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
          target: S.optional(__S(254)),
          apiMode: S.optional(S.String),
          testExecutionModality: S.optional(S.String),
        }),
      ).annotate({ identifier: "TestExecutionSummary" });
    case 5:
      return S.Array(__S(452));
    case 6:
      return S.suspend(() =>
        S.Struct({
          testExecutions: S.optional(__S(453)),
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
          input: __S(437) as any as S.Schema<UserTurnInputSpecification>,
          expected: __S(442),
        }),
      ).annotate({ identifier: "UserTurnSpecification" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentTurn: S.optional(__S(456)),
          userTurn: S.optional(__S(457)),
        }),
      ).annotate({ identifier: "TurnSpecification" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          recordNumber: S.Number,
          conversationId: S.optional(S.String),
          turnNumber: S.optional(S.Number),
          turnSpecification: __S(458),
        }),
      ).annotate({ identifier: "TestSetTurnRecord" });
    case 4:
      return S.Array(__S(459));
    case 5:
      return S.suspend(() =>
        S.Struct({
          testSetRecords: S.optional(__S(460)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTestSetRecordsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          sortBy: S.optional(__S(295)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/testsets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTestSetsRequest" });
    case 7:
      return S.Array(__S(257));
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ testSets: S.optional(__S(463)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTestSetsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          startDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          sortBy: S.optional(__S(384)),
          filters: S.optional(__S(351)),
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
          imageResponseCard: S.optional(__S(73)),
        }),
      ).annotate({ identifier: "UtteranceBotResponse" });
    case 3:
      return S.Array(__S(466));
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
          botResponses: S.optional(__S(467)),
        }),
      ).annotate({ identifier: "UtteranceSpecification" });
    case 5:
      return S.Array(__S(468));
    case 6:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          nextToken: S.optional(S.String),
          utterances: S.optional(__S(469)),
        }),
      ).annotate({
        identifier: "ListUtteranceAnalyticsDataResponse",
      });
    case 7:
      return S.Array(__S(348));
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
          metrics: __S(345),
          binBy: S.optional(__S(347)),
          groupBy: S.optional(__S(349)),
          attributes: S.optional(__S(471)),
          filters: S.optional(__S(351)),
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
      return S.Array(__S(473));
    case 3:
      return S.suspend(() =>
        S.Struct({
          binKeys: S.optional(__S(354)),
          groupByKeys: S.optional(__S(356)),
          metricsResults: S.optional(__S(376)),
          attributeResults: S.optional(__S(474)),
        }),
      ).annotate({ identifier: "AnalyticsUtteranceResult" });
    case 4:
      return S.Array(__S(475));
    case 5:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          results: S.optional(__S(476)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListUtteranceMetricsResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, values: __S(116) })).annotate({
        identifier: "AssociatedTranscriptFilter",
      });
    case 7:
      return S.Array(__S(478));
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
          filters: __S(479),
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
      return S.Array(__S(481));
    case 3:
      return S.suspend(() =>
        S.Struct({
          botId: S.optional(S.String),
          botVersion: S.optional(S.String),
          localeId: S.optional(S.String),
          botRecommendationId: S.optional(S.String),
          nextIndex: S.optional(S.Number),
          associatedTranscripts: S.optional(__S(482)),
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
          transcriptSourceSetting: __S(218),
          encryptionSetting: S.optional(__S(219)),
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
          transcriptSourceSetting: S.optional(__S(218)),
          encryptionSetting: S.optional(__S(219)),
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
          resourceSpecification: __S(241),
          mergeStrategy: S.String,
          filePassword: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/imports" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartImportRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          importId: S.optional(S.String),
          resourceSpecification: S.optional(__S(241)),
          mergeStrategy: S.optional(S.String),
          importStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "StartImportResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          testSetId: S.String.pipe(T.HttpLabel("testSetId")),
          target: __S(254),
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
          target: S.optional(__S(254)),
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
          storageLocation: __S(238),
          generationDataSource: __S(268),
          roleArn: S.String,
          testSetTags: S.optional(__S(15)),
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
          storageLocation: S.optional(__S(238)),
          generationDataSource: S.optional(__S(268)),
          roleArn: S.optional(S.String),
          testSetTags: S.optional(__S(15)),
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
        S.Struct({ resourceARN: S.String.pipe(T.HttpLabel("resourceARN")), tags: __S(15) }).pipe(
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
          tagKeys: __S(116).pipe(T.HttpQuery("tagKeys")),
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
          dataPrivacy: __S(14),
          idleSessionTTLInSeconds: S.Number,
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17)),
          errorLogSettings: S.optional(__S(18)),
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
          dataPrivacy: S.optional(__S(14)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          botStatus: S.optional(S.String),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          botType: S.optional(S.String),
          botMembers: S.optional(__S(17)),
          errorLogSettings: S.optional(__S(18)),
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
          botAliasLocaleSettings: S.optional(__S(24)),
          conversationLogSettings: S.optional(__S(33)),
          sentimentAnalysisSettings: S.optional(__S(34)),
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
          botAliasLocaleSettings: S.optional(__S(24)),
          conversationLogSettings: S.optional(__S(33)),
          sentimentAnalysisSettings: S.optional(__S(34)),
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
          voiceSettings: S.optional(__S(37)),
          unifiedSpeechSettings: S.optional(__S(39)),
          audioFillerSettings: S.optional(__S(40)),
          speechRecognitionSettings: S.optional(__S(43)),
          generativeAISettings: S.optional(__S(51)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52)),
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
          voiceSettings: S.optional(__S(37)),
          unifiedSpeechSettings: S.optional(__S(39)),
          audioFillerSettings: S.optional(__S(40)),
          speechRecognitionSettings: S.optional(__S(43)),
          botLocaleStatus: S.optional(S.String),
          failureReasons: S.optional(__S(116)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          recommendedActions: S.optional(__S(116)),
          generativeAISettings: S.optional(__S(51)),
          speechDetectionSensitivity: S.optional(S.String),
          speakerDiarizationSettings: S.optional(__S(52)),
        }),
      ).annotate({ identifier: "UpdateBotLocaleResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          botRecommendationId: S.String.pipe(T.HttpLabel("botRecommendationId")),
          encryptionSetting: __S(219),
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
          transcriptSourceSetting: S.optional(__S(218)),
          encryptionSetting: S.optional(__S(219)),
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
          sampleUtterances: S.optional(__S(68)),
          dialogCodeHook: S.optional(__S(18)),
          fulfillmentCodeHook: S.optional(__S(95)),
          slotPriorities: S.optional(__S(245)),
          intentConfirmationSetting: S.optional(__S(107)),
          intentClosingSetting: S.optional(__S(108)),
          inputContexts: S.optional(__S(110)),
          outputContexts: S.optional(__S(112)),
          kendraConfiguration: S.optional(__S(113)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          initialResponseSetting: S.optional(__S(114)),
          qnAIntentConfiguration: S.optional(__S(122)),
          qInConnectIntentConfiguration: S.optional(__S(124)),
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
          valueElicitationSetting: __S(141),
          obfuscationSetting: S.optional(__S(142)),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          intentId: S.String.pipe(T.HttpLabel("intentId")),
          multipleValuesSetting: S.optional(__S(143)),
          subSlotSetting: S.optional(__S(147)),
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
          slotTypeValues: S.optional(__S(152)),
          valueSelectionSetting: S.optional(__S(155)),
          parentSlotTypeSignature: S.optional(S.String),
          botId: S.String.pipe(T.HttpLabel("botId")),
          botVersion: S.String.pipe(T.HttpLabel("botVersion")),
          localeId: S.String.pipe(T.HttpLabel("localeId")),
          externalSourceSetting: S.optional(__S(158)),
          compositeSlotTypeSetting: S.optional(__S(161)),
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

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
    case 35:
      return __c35(i & 7);
    case 36:
      return __c36(i & 7);
    case 37:
      return __c37(i & 7);
    case 38:
      return __c38(i & 7);
    case 39:
      return __c39(i & 7);
    case 40:
      return __c40(i & 7);
    case 41:
      return __c41(i & 7);
    case 42:
      return __c42(i & 7);
    case 43:
      return __c43(i & 7);
    case 44:
      return __c44(i & 7);
    case 45:
      return __c45(i & 7);
    case 46:
      return __c46(i & 7);
    case 47:
      return __c47(i & 7);
    case 48:
      return __c48(i & 7);
    case 49:
      return __c49(i & 7);
    case 50:
      return __c50(i & 7);
    case 51:
      return __c51(i & 7);
    case 52:
      return __c52(i & 7);
    case 53:
      return __c53(i & 7);
    case 54:
      return __c54(i & 7);
    case 55:
      return __c55(i & 7);
    case 56:
      return __c56(i & 7);
    case 57:
      return __c57(i & 7);
    case 58:
      return __c58(i & 7);
    case 59:
      return __c59(i & 7);
    case 60:
      return __c60(i & 7);
    case 61:
      return __c61(i & 7);
    case 62:
      return __c62(i & 7);
    case 63:
      return __c63(i & 7);
    case 64:
      return __c64(i & 7);
  }
}
