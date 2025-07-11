import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonBedrockFrontendService {
  applyGuardrail(
    input: ApplyGuardrailRequest,
  ): Effect.Effect<
    ApplyGuardrailResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  converse(
    input: ConverseRequest,
  ): Effect.Effect<
    ConverseResponse,
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  converseStream(
    input: ConverseStreamRequest,
  ): Effect.Effect<
    ConverseStreamResponse,
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAsyncInvoke(
    input: GetAsyncInvokeRequest,
  ): Effect.Effect<
    GetAsyncInvokeResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  invokeModel(
    input: InvokeModelRequest,
  ): Effect.Effect<
    InvokeModelResponse,
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  invokeModelWithBidirectionalStream(
    input: InvokeModelWithBidirectionalStreamRequest,
  ): Effect.Effect<
    InvokeModelWithBidirectionalStreamResponse,
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelStreamErrorException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  invokeModelWithResponseStream(
    input: InvokeModelWithResponseStreamRequest,
  ): Effect.Effect<
    InvokeModelWithResponseStreamResponse,
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelStreamErrorException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAsyncInvokes(
    input: ListAsyncInvokesRequest,
  ): Effect.Effect<
    ListAsyncInvokesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startAsyncInvoke(
    input: StartAsyncInvokeRequest,
  ): Effect.Effect<
    StartAsyncInvokeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type BedrockRuntime = AmazonBedrockFrontendService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccountId = string;

export type AdditionalModelResponseFieldPaths = Array<string>;
export interface AnyToolChoice {}
export interface ApplyGuardrailRequest {
  guardrailIdentifier: string;
  guardrailVersion: string;
  source: GuardrailContentSource;
  content: Array<GuardrailContentBlock>;
  outputScope?: GuardrailOutputScope;
}
export interface ApplyGuardrailResponse {
  usage: GuardrailUsage;
  action: GuardrailAction;
  actionReason?: string;
  outputs: Array<GuardrailOutputContent>;
  assessments: Array<GuardrailAssessment>;
  guardrailCoverage?: GuardrailCoverage;
}
export type AsyncInvokeArn = string;

export type AsyncInvokeIdempotencyToken = string;

export type AsyncInvokeIdentifier = string;

export type AsyncInvokeMessage = string;

interface _AsyncInvokeOutputDataConfig {
  s3OutputDataConfig?: AsyncInvokeS3OutputDataConfig;
}

export type AsyncInvokeOutputDataConfig = _AsyncInvokeOutputDataConfig & {
  s3OutputDataConfig: AsyncInvokeS3OutputDataConfig;
};
export interface AsyncInvokeS3OutputDataConfig {
  s3Uri: string;
  kmsKeyId?: string;
  bucketOwner?: string;
}
export type AsyncInvokeStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type AsyncInvokeSummaries = Array<AsyncInvokeSummary>;
export interface AsyncInvokeSummary {
  invocationArn: string;
  modelArn: string;
  clientRequestToken?: string;
  status?: AsyncInvokeStatus;
  failureMessage?: string;
  submitTime: Date | string;
  lastModifiedTime?: Date | string;
  endTime?: Date | string;
  outputDataConfig: AsyncInvokeOutputDataConfig;
}
export interface AutoToolChoice {}
export interface BidirectionalInputPayloadPart {
  bytes?: Uint8Array | string;
}
export interface BidirectionalOutputPayloadPart {
  bytes?: Uint8Array | string;
}
export type Body = Uint8Array | string;

export interface CachePointBlock {
  type: CachePointType;
}
export type CachePointType = "DEFAULT";
export interface Citation {
  title?: string;
  sourceContent?: Array<CitationSourceContent>;
  location?: CitationLocation;
}
interface _CitationGeneratedContent {
  text?: string;
}

export type CitationGeneratedContent = _CitationGeneratedContent & {
  text: string;
};
export type CitationGeneratedContentList = Array<CitationGeneratedContent>;
interface _CitationLocation {
  documentChar?: DocumentCharLocation;
  documentPage?: DocumentPageLocation;
  documentChunk?: DocumentChunkLocation;
}

export type CitationLocation =
  | (_CitationLocation & { documentChar: DocumentCharLocation })
  | (_CitationLocation & { documentPage: DocumentPageLocation })
  | (_CitationLocation & { documentChunk: DocumentChunkLocation });
export type Citations = Array<Citation>;
export interface CitationsConfig {
  enabled: boolean;
}
export interface CitationsContentBlock {
  content?: Array<CitationGeneratedContent>;
  citations?: Array<Citation>;
}
export interface CitationsDelta {
  title?: string;
  sourceContent?: Array<CitationSourceContentDelta>;
  location?: CitationLocation;
}
interface _CitationSourceContent {
  text?: string;
}

export type CitationSourceContent = _CitationSourceContent & { text: string };
export interface CitationSourceContentDelta {
  text?: string;
}
export type CitationSourceContentList = Array<CitationSourceContent>;
export type CitationSourceContentListDelta = Array<CitationSourceContentDelta>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
interface _ContentBlock {
  text?: string;
  image?: ImageBlock;
  document?: DocumentBlock;
  video?: VideoBlock;
  toolUse?: ToolUseBlock;
  toolResult?: ToolResultBlock;
  guardContent?: GuardrailConverseContentBlock;
  cachePoint?: CachePointBlock;
  reasoningContent?: ReasoningContentBlock;
  citationsContent?: CitationsContentBlock;
}

export type ContentBlock =
  | (_ContentBlock & { text: string })
  | (_ContentBlock & { image: ImageBlock })
  | (_ContentBlock & { document: DocumentBlock })
  | (_ContentBlock & { video: VideoBlock })
  | (_ContentBlock & { toolUse: ToolUseBlock })
  | (_ContentBlock & { toolResult: ToolResultBlock })
  | (_ContentBlock & { guardContent: GuardrailConverseContentBlock })
  | (_ContentBlock & { cachePoint: CachePointBlock })
  | (_ContentBlock & { reasoningContent: ReasoningContentBlock })
  | (_ContentBlock & { citationsContent: CitationsContentBlock });
interface _ContentBlockDelta {
  text?: string;
  toolUse?: ToolUseBlockDelta;
  reasoningContent?: ReasoningContentBlockDelta;
  citation?: CitationsDelta;
}

export type ContentBlockDelta =
  | (_ContentBlockDelta & { text: string })
  | (_ContentBlockDelta & { toolUse: ToolUseBlockDelta })
  | (_ContentBlockDelta & { reasoningContent: ReasoningContentBlockDelta })
  | (_ContentBlockDelta & { citation: CitationsDelta });
export interface ContentBlockDeltaEvent {
  delta: ContentBlockDelta;
  contentBlockIndex: number;
}
export type ContentBlocks = Array<ContentBlock>;
interface _ContentBlockStart {
  toolUse?: ToolUseBlockStart;
}

export type ContentBlockStart = _ContentBlockStart & {
  toolUse: ToolUseBlockStart;
};
export interface ContentBlockStartEvent {
  start: ContentBlockStart;
  contentBlockIndex: number;
}
export interface ContentBlockStopEvent {
  contentBlockIndex: number;
}
export type ConversationalModelId = string;

export type ConversationRole = "USER" | "ASSISTANT";
export interface ConverseMetrics {
  latencyMs: number;
}
interface _ConverseOutput {
  message?: Message;
}

export type ConverseOutput = _ConverseOutput & { message: Message };
export interface ConverseRequest {
  modelId: string;
  messages?: Array<Message>;
  system?: Array<SystemContentBlock>;
  inferenceConfig?: InferenceConfiguration;
  toolConfig?: ToolConfiguration;
  guardrailConfig?: GuardrailConfiguration;
  additionalModelRequestFields?: unknown;
  promptVariables?: Record<string, PromptVariableValues>;
  additionalModelResponseFieldPaths?: Array<string>;
  requestMetadata?: Record<string, string>;
  performanceConfig?: PerformanceConfiguration;
}
export interface ConverseResponse {
  output: ConverseOutput;
  stopReason: StopReason;
  usage: TokenUsage;
  metrics: ConverseMetrics;
  additionalModelResponseFields?: unknown;
  trace?: ConverseTrace;
  performanceConfig?: PerformanceConfiguration;
}
export interface ConverseStreamMetadataEvent {
  usage: TokenUsage;
  metrics: ConverseStreamMetrics;
  trace?: ConverseStreamTrace;
  performanceConfig?: PerformanceConfiguration;
}
export interface ConverseStreamMetrics {
  latencyMs: number;
}
interface _ConverseStreamOutput {
  messageStart?: MessageStartEvent;
  contentBlockStart?: ContentBlockStartEvent;
  contentBlockDelta?: ContentBlockDeltaEvent;
  contentBlockStop?: ContentBlockStopEvent;
  messageStop?: MessageStopEvent;
  metadata?: ConverseStreamMetadataEvent;
  internalServerException?: InternalServerException;
  modelStreamErrorException?: ModelStreamErrorException;
  validationException?: ValidationException;
  throttlingException?: ThrottlingException;
  serviceUnavailableException?: ServiceUnavailableException;
}

export type ConverseStreamOutput =
  | (_ConverseStreamOutput & { messageStart: MessageStartEvent })
  | (_ConverseStreamOutput & { contentBlockStart: ContentBlockStartEvent })
  | (_ConverseStreamOutput & { contentBlockDelta: ContentBlockDeltaEvent })
  | (_ConverseStreamOutput & { contentBlockStop: ContentBlockStopEvent })
  | (_ConverseStreamOutput & { messageStop: MessageStopEvent })
  | (_ConverseStreamOutput & { metadata: ConverseStreamMetadataEvent })
  | (_ConverseStreamOutput & {
      internalServerException: InternalServerException;
    })
  | (_ConverseStreamOutput & {
      modelStreamErrorException: ModelStreamErrorException;
    })
  | (_ConverseStreamOutput & { validationException: ValidationException })
  | (_ConverseStreamOutput & { throttlingException: ThrottlingException })
  | (_ConverseStreamOutput & {
      serviceUnavailableException: ServiceUnavailableException;
    });
export interface ConverseStreamRequest {
  modelId: string;
  messages?: Array<Message>;
  system?: Array<SystemContentBlock>;
  inferenceConfig?: InferenceConfiguration;
  toolConfig?: ToolConfiguration;
  guardrailConfig?: GuardrailStreamConfiguration;
  additionalModelRequestFields?: unknown;
  promptVariables?: Record<string, PromptVariableValues>;
  additionalModelResponseFieldPaths?: Array<string>;
  requestMetadata?: Record<string, string>;
  performanceConfig?: PerformanceConfiguration;
}
export interface ConverseStreamResponse {
  stream?: ConverseStreamOutput;
}
export interface ConverseStreamTrace {
  guardrail?: GuardrailTraceAssessment;
  promptRouter?: PromptRouterTrace;
}
export interface ConverseTrace {
  guardrail?: GuardrailTraceAssessment;
  promptRouter?: PromptRouterTrace;
}
export interface DocumentBlock {
  format?: DocumentFormat;
  name: string;
  source: DocumentSource;
  context?: string;
  citations?: CitationsConfig;
}
export interface DocumentCharLocation {
  documentIndex?: number;
  start?: number;
  end?: number;
}
export interface DocumentChunkLocation {
  documentIndex?: number;
  start?: number;
  end?: number;
}
interface _DocumentContentBlock {
  text?: string;
}

export type DocumentContentBlock = _DocumentContentBlock & { text: string };
export type DocumentContentBlocks = Array<DocumentContentBlock>;
export type DocumentFormat =
  | "PDF"
  | "CSV"
  | "DOC"
  | "DOCX"
  | "XLS"
  | "XLSX"
  | "HTML"
  | "TXT"
  | "MD";
export interface DocumentPageLocation {
  documentIndex?: number;
  start?: number;
  end?: number;
}
interface _DocumentSource {
  bytes?: Uint8Array | string;
  s3Location?: S3Location;
  text?: string;
  content?: Array<DocumentContentBlock>;
}

export type DocumentSource =
  | (_DocumentSource & { bytes: Uint8Array | string })
  | (_DocumentSource & { s3Location: S3Location })
  | (_DocumentSource & { text: string })
  | (_DocumentSource & { content: Array<DocumentContentBlock> });
export interface GetAsyncInvokeRequest {
  invocationArn: string;
}
export interface GetAsyncInvokeResponse {
  invocationArn: string;
  modelArn: string;
  clientRequestToken?: string;
  status: AsyncInvokeStatus;
  failureMessage?: string;
  submitTime: Date | string;
  lastModifiedTime?: Date | string;
  endTime?: Date | string;
  outputDataConfig: AsyncInvokeOutputDataConfig;
}
export type GuardrailAction = "NONE" | "GUARDRAIL_INTERVENED";
export interface GuardrailAssessment {
  topicPolicy?: GuardrailTopicPolicyAssessment;
  contentPolicy?: GuardrailContentPolicyAssessment;
  wordPolicy?: GuardrailWordPolicyAssessment;
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment;
  contextualGroundingPolicy?: GuardrailContextualGroundingPolicyAssessment;
  invocationMetrics?: GuardrailInvocationMetrics;
}
export type GuardrailAssessmentList = Array<GuardrailAssessment>;
export type GuardrailAssessmentListMap = Record<
  string,
  Array<GuardrailAssessment>
>;
export type GuardrailAssessmentMap = Record<string, GuardrailAssessment>;
export interface GuardrailConfiguration {
  guardrailIdentifier: string;
  guardrailVersion: string;
  trace?: GuardrailTrace;
}
interface _GuardrailContentBlock {
  text?: GuardrailTextBlock;
  image?: GuardrailImageBlock;
}

export type GuardrailContentBlock =
  | (_GuardrailContentBlock & { text: GuardrailTextBlock })
  | (_GuardrailContentBlock & { image: GuardrailImageBlock });
export type GuardrailContentBlockList = Array<GuardrailContentBlock>;
export interface GuardrailContentFilter {
  type: GuardrailContentFilterType;
  confidence: GuardrailContentFilterConfidence;
  filterStrength?: GuardrailContentFilterStrength;
  action: GuardrailContentPolicyAction;
  detected?: boolean;
}
export type GuardrailContentFilterConfidence =
  | "NONE"
  | "LOW"
  | "MEDIUM"
  | "HIGH";
export type GuardrailContentFilterList = Array<GuardrailContentFilter>;
export type GuardrailContentFilterStrength = "NONE" | "LOW" | "MEDIUM" | "HIGH";
export type GuardrailContentFilterType =
  | "INSULTS"
  | "HATE"
  | "SEXUAL"
  | "VIOLENCE"
  | "MISCONDUCT"
  | "PROMPT_ATTACK";
export type GuardrailContentPolicyAction = "BLOCKED" | "NONE";
export interface GuardrailContentPolicyAssessment {
  filters: Array<GuardrailContentFilter>;
}
export type GuardrailContentPolicyImageUnitsProcessed = number;

export type GuardrailContentPolicyUnitsProcessed = number;

export type GuardrailContentQualifier =
  | "GROUNDING_SOURCE"
  | "QUERY"
  | "GUARD_CONTENT";
export type GuardrailContentQualifierList = Array<GuardrailContentQualifier>;
export type GuardrailContentSource = "INPUT" | "OUTPUT";
export interface GuardrailContextualGroundingFilter {
  type: GuardrailContextualGroundingFilterType;
  threshold: number;
  score: number;
  action: GuardrailContextualGroundingPolicyAction;
  detected?: boolean;
}
export type GuardrailContextualGroundingFilters =
  Array<GuardrailContextualGroundingFilter>;
export type GuardrailContextualGroundingFilterType = "GROUNDING" | "RELEVANCE";
export type GuardrailContextualGroundingPolicyAction = "BLOCKED" | "NONE";
export interface GuardrailContextualGroundingPolicyAssessment {
  filters?: Array<GuardrailContextualGroundingFilter>;
}
export type GuardrailContextualGroundingPolicyUnitsProcessed = number;

interface _GuardrailConverseContentBlock {
  text?: GuardrailConverseTextBlock;
  image?: GuardrailConverseImageBlock;
}

export type GuardrailConverseContentBlock =
  | (_GuardrailConverseContentBlock & { text: GuardrailConverseTextBlock })
  | (_GuardrailConverseContentBlock & { image: GuardrailConverseImageBlock });
export type GuardrailConverseContentQualifier =
  | "GROUNDING_SOURCE"
  | "QUERY"
  | "GUARD_CONTENT";
export type GuardrailConverseContentQualifierList =
  Array<GuardrailConverseContentQualifier>;
export interface GuardrailConverseImageBlock {
  format: GuardrailConverseImageFormat;
  source: GuardrailConverseImageSource;
}
export type GuardrailConverseImageFormat = "PNG" | "JPEG";
interface _GuardrailConverseImageSource {
  bytes?: Uint8Array | string;
}

export type GuardrailConverseImageSource = _GuardrailConverseImageSource & {
  bytes: Uint8Array | string;
};
export interface GuardrailConverseTextBlock {
  text: string;
  qualifiers?: Array<GuardrailConverseContentQualifier>;
}
export interface GuardrailCoverage {
  textCharacters?: GuardrailTextCharactersCoverage;
  images?: GuardrailImageCoverage;
}
export interface GuardrailCustomWord {
  match: string;
  action: GuardrailWordPolicyAction;
  detected?: boolean;
}
export type GuardrailCustomWordList = Array<GuardrailCustomWord>;
export type GuardrailIdentifier = string;

export interface GuardrailImageBlock {
  format: GuardrailImageFormat;
  source: GuardrailImageSource;
}
export interface GuardrailImageCoverage {
  guarded?: number;
  total?: number;
}
export type GuardrailImageFormat = "PNG" | "JPEG";
interface _GuardrailImageSource {
  bytes?: Uint8Array | string;
}

export type GuardrailImageSource = _GuardrailImageSource & {
  bytes: Uint8Array | string;
};
export interface GuardrailInvocationMetrics {
  guardrailProcessingLatency?: number;
  usage?: GuardrailUsage;
  guardrailCoverage?: GuardrailCoverage;
}
export interface GuardrailManagedWord {
  match: string;
  type: GuardrailManagedWordType;
  action: GuardrailWordPolicyAction;
  detected?: boolean;
}
export type GuardrailManagedWordList = Array<GuardrailManagedWord>;
export type GuardrailManagedWordType = "PROFANITY";
export interface GuardrailOutputContent {
  text?: string;
}
export type GuardrailOutputContentList = Array<GuardrailOutputContent>;
export type GuardrailOutputScope = "INTERVENTIONS" | "FULL";
export type GuardrailOutputText = string;

export interface GuardrailPiiEntityFilter {
  match: string;
  type: GuardrailPiiEntityType;
  action: GuardrailSensitiveInformationPolicyAction;
  detected?: boolean;
}
export type GuardrailPiiEntityFilterList = Array<GuardrailPiiEntityFilter>;
export type GuardrailPiiEntityType =
  | "ADDRESS"
  | "AGE"
  | "AWS_ACCESS_KEY"
  | "AWS_SECRET_KEY"
  | "CA_HEALTH_NUMBER"
  | "CA_SOCIAL_INSURANCE_NUMBER"
  | "CREDIT_DEBIT_CARD_CVV"
  | "CREDIT_DEBIT_CARD_EXPIRY"
  | "CREDIT_DEBIT_CARD_NUMBER"
  | "DRIVER_ID"
  | "EMAIL"
  | "INTERNATIONAL_BANK_ACCOUNT_NUMBER"
  | "IP_ADDRESS"
  | "LICENSE_PLATE"
  | "MAC_ADDRESS"
  | "NAME"
  | "PASSWORD"
  | "PHONE"
  | "PIN"
  | "SWIFT_CODE"
  | "UK_NATIONAL_HEALTH_SERVICE_NUMBER"
  | "UK_NATIONAL_INSURANCE_NUMBER"
  | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"
  | "URL"
  | "USERNAME"
  | "US_BANK_ACCOUNT_NUMBER"
  | "US_BANK_ROUTING_NUMBER"
  | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"
  | "US_PASSPORT_NUMBER"
  | "US_SOCIAL_SECURITY_NUMBER"
  | "VEHICLE_IDENTIFICATION_NUMBER";
export type GuardrailProcessingLatency = number;

export interface GuardrailRegexFilter {
  name?: string;
  match?: string;
  regex?: string;
  action: GuardrailSensitiveInformationPolicyAction;
  detected?: boolean;
}
export type GuardrailRegexFilterList = Array<GuardrailRegexFilter>;
export type GuardrailSensitiveInformationPolicyAction =
  | "ANONYMIZED"
  | "BLOCKED"
  | "NONE";
export interface GuardrailSensitiveInformationPolicyAssessment {
  piiEntities: Array<GuardrailPiiEntityFilter>;
  regexes: Array<GuardrailRegexFilter>;
}
export type GuardrailSensitiveInformationPolicyFreeUnitsProcessed = number;

export type GuardrailSensitiveInformationPolicyUnitsProcessed = number;

export interface GuardrailStreamConfiguration {
  guardrailIdentifier: string;
  guardrailVersion: string;
  trace?: GuardrailTrace;
  streamProcessingMode?: GuardrailStreamProcessingMode;
}
export type GuardrailStreamProcessingMode = "SYNC" | "ASYNC";
export interface GuardrailTextBlock {
  text: string;
  qualifiers?: Array<GuardrailContentQualifier>;
}
export interface GuardrailTextCharactersCoverage {
  guarded?: number;
  total?: number;
}
export interface GuardrailTopic {
  name: string;
  type: GuardrailTopicType;
  action: GuardrailTopicPolicyAction;
  detected?: boolean;
}
export type GuardrailTopicList = Array<GuardrailTopic>;
export type GuardrailTopicPolicyAction = "BLOCKED" | "NONE";
export interface GuardrailTopicPolicyAssessment {
  topics: Array<GuardrailTopic>;
}
export type GuardrailTopicPolicyUnitsProcessed = number;

export type GuardrailTopicType = "DENY";
export type GuardrailTrace = "ENABLED" | "DISABLED" | "ENABLED_FULL";
export interface GuardrailTraceAssessment {
  modelOutput?: Array<string>;
  inputAssessment?: Record<string, GuardrailAssessment>;
  outputAssessments?: Record<string, Array<GuardrailAssessment>>;
  actionReason?: string;
}
export interface GuardrailUsage {
  topicPolicyUnits: number;
  contentPolicyUnits: number;
  wordPolicyUnits: number;
  sensitiveInformationPolicyUnits: number;
  sensitiveInformationPolicyFreeUnits: number;
  contextualGroundingPolicyUnits: number;
  contentPolicyImageUnits?: number;
}
export type GuardrailVersion = string;

export type GuardrailWordPolicyAction = "BLOCKED" | "NONE";
export interface GuardrailWordPolicyAssessment {
  customWords: Array<GuardrailCustomWord>;
  managedWordLists: Array<GuardrailManagedWord>;
}
export type GuardrailWordPolicyUnitsProcessed = number;

export interface ImageBlock {
  format: ImageFormat;
  source: ImageSource;
}
export type ImageFormat = "PNG" | "JPEG" | "GIF" | "WEBP";
export type ImagesGuarded = number;

interface _ImageSource {
  bytes?: Uint8Array | string;
  s3Location?: S3Location;
}

export type ImageSource =
  | (_ImageSource & { bytes: Uint8Array | string })
  | (_ImageSource & { s3Location: S3Location });
export type ImagesTotal = number;

export interface InferenceConfiguration {
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  stopSequences?: Array<string>;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type InvocationArn = string;

export type InvokedModelId = string;

export type InvokeModelIdentifier = string;

export interface InvokeModelRequest {
  body?: Uint8Array | string;
  contentType?: string;
  accept?: string;
  modelId: string;
  trace?: Trace;
  guardrailIdentifier?: string;
  guardrailVersion?: string;
  performanceConfigLatency?: PerformanceConfigLatency;
}
export interface InvokeModelResponse {
  body: Uint8Array | string;
  contentType: string;
  performanceConfigLatency?: PerformanceConfigLatency;
}
interface _InvokeModelWithBidirectionalStreamInput {
  chunk?: BidirectionalInputPayloadPart;
}

export type InvokeModelWithBidirectionalStreamInput =
  _InvokeModelWithBidirectionalStreamInput & {
    chunk: BidirectionalInputPayloadPart;
  };
interface _InvokeModelWithBidirectionalStreamOutput {
  chunk?: BidirectionalOutputPayloadPart;
  internalServerException?: InternalServerException;
  modelStreamErrorException?: ModelStreamErrorException;
  validationException?: ValidationException;
  throttlingException?: ThrottlingException;
  modelTimeoutException?: ModelTimeoutException;
  serviceUnavailableException?: ServiceUnavailableException;
}

export type InvokeModelWithBidirectionalStreamOutput =
  | (_InvokeModelWithBidirectionalStreamOutput & {
      chunk: BidirectionalOutputPayloadPart;
    })
  | (_InvokeModelWithBidirectionalStreamOutput & {
      internalServerException: InternalServerException;
    })
  | (_InvokeModelWithBidirectionalStreamOutput & {
      modelStreamErrorException: ModelStreamErrorException;
    })
  | (_InvokeModelWithBidirectionalStreamOutput & {
      validationException: ValidationException;
    })
  | (_InvokeModelWithBidirectionalStreamOutput & {
      throttlingException: ThrottlingException;
    })
  | (_InvokeModelWithBidirectionalStreamOutput & {
      modelTimeoutException: ModelTimeoutException;
    })
  | (_InvokeModelWithBidirectionalStreamOutput & {
      serviceUnavailableException: ServiceUnavailableException;
    });
export interface InvokeModelWithBidirectionalStreamRequest {
  modelId: string;
  body: InvokeModelWithBidirectionalStreamInput;
}
export interface InvokeModelWithBidirectionalStreamResponse {
  body: InvokeModelWithBidirectionalStreamOutput;
}
export interface InvokeModelWithResponseStreamRequest {
  body?: Uint8Array | string;
  contentType?: string;
  accept?: string;
  modelId: string;
  trace?: Trace;
  guardrailIdentifier?: string;
  guardrailVersion?: string;
  performanceConfigLatency?: PerformanceConfigLatency;
}
export interface InvokeModelWithResponseStreamResponse {
  body: ResponseStream;
  contentType: string;
  performanceConfigLatency?: PerformanceConfigLatency;
}
export type KmsKeyId = string;

export interface ListAsyncInvokesRequest {
  submitTimeAfter?: Date | string;
  submitTimeBefore?: Date | string;
  statusEquals?: AsyncInvokeStatus;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortAsyncInvocationBy;
  sortOrder?: SortOrder;
}
export interface ListAsyncInvokesResponse {
  nextToken?: string;
  asyncInvokeSummaries?: Array<AsyncInvokeSummary>;
}
export type MaxResults = number;

export interface Message {
  role: ConversationRole;
  content: Array<ContentBlock>;
}
export type Messages = Array<Message>;
export interface MessageStartEvent {
  role: ConversationRole;
}
export interface MessageStopEvent {
  stopReason: StopReason;
  additionalModelResponseFields?: unknown;
}
export type MimeType = string;

export declare class ModelErrorException extends EffectData.TaggedError(
  "ModelErrorException",
)<{
  readonly message?: string;
  readonly originalStatusCode?: number;
  readonly resourceName?: string;
}> {}
export type ModelInputPayload = unknown;

export declare class ModelNotReadyException extends EffectData.TaggedError(
  "ModelNotReadyException",
)<{
  readonly message?: string;
}> {}
export type ModelOutputs = Array<string>;
export declare class ModelStreamErrorException extends EffectData.TaggedError(
  "ModelStreamErrorException",
)<{
  readonly message?: string;
  readonly originalStatusCode?: number;
  readonly originalMessage?: string;
}> {}
export declare class ModelTimeoutException extends EffectData.TaggedError(
  "ModelTimeoutException",
)<{
  readonly message?: string;
}> {}
export type NonBlankString = string;

export type NonEmptyString = string;

export type NonEmptyStringList = Array<string>;
export type NonNegativeInteger = number;

export type PaginationToken = string;

export type PartBody = Uint8Array | string;

export interface PayloadPart {
  bytes?: Uint8Array | string;
}
export type PerformanceConfigLatency = "STANDARD" | "OPTIMIZED";
export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
export interface PromptRouterTrace {
  invokedModelId?: string;
}
export type PromptVariableMap = Record<string, PromptVariableValues>;
interface _PromptVariableValues {
  text?: string;
}

export type PromptVariableValues = _PromptVariableValues & { text: string };
interface _ReasoningContentBlock {
  reasoningText?: ReasoningTextBlock;
  redactedContent?: Uint8Array | string;
}

export type ReasoningContentBlock =
  | (_ReasoningContentBlock & { reasoningText: ReasoningTextBlock })
  | (_ReasoningContentBlock & { redactedContent: Uint8Array | string });
interface _ReasoningContentBlockDelta {
  text?: string;
  redactedContent?: Uint8Array | string;
  signature?: string;
}

export type ReasoningContentBlockDelta =
  | (_ReasoningContentBlockDelta & { text: string })
  | (_ReasoningContentBlockDelta & { redactedContent: Uint8Array | string })
  | (_ReasoningContentBlockDelta & { signature: string });
export interface ReasoningTextBlock {
  text: string;
  signature?: string;
}
export type RequestMetadata = Record<string, string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
interface _ResponseStream {
  chunk?: PayloadPart;
  internalServerException?: InternalServerException;
  modelStreamErrorException?: ModelStreamErrorException;
  validationException?: ValidationException;
  throttlingException?: ThrottlingException;
  modelTimeoutException?: ModelTimeoutException;
  serviceUnavailableException?: ServiceUnavailableException;
}

export type ResponseStream =
  | (_ResponseStream & { chunk: PayloadPart })
  | (_ResponseStream & { internalServerException: InternalServerException })
  | (_ResponseStream & { modelStreamErrorException: ModelStreamErrorException })
  | (_ResponseStream & { validationException: ValidationException })
  | (_ResponseStream & { throttlingException: ThrottlingException })
  | (_ResponseStream & { modelTimeoutException: ModelTimeoutException })
  | (_ResponseStream & {
      serviceUnavailableException: ServiceUnavailableException;
    });
export interface S3Location {
  uri: string;
  bucketOwner?: string;
}
export type S3Uri = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type SortAsyncInvocationBy = "SUBMISSION_TIME";
export type SortOrder = "ASCENDING" | "DESCENDING";
export interface SpecificToolChoice {
  name: string;
}
export interface StartAsyncInvokeRequest {
  clientRequestToken?: string;
  modelId: string;
  modelInput: unknown;
  outputDataConfig: AsyncInvokeOutputDataConfig;
  tags?: Array<Tag>;
}
export interface StartAsyncInvokeResponse {
  invocationArn: string;
}
export type StatusCode = number;

export type StopReason =
  | "END_TURN"
  | "TOOL_USE"
  | "MAX_TOKENS"
  | "STOP_SEQUENCE"
  | "GUARDRAIL_INTERVENED"
  | "CONTENT_FILTERED";
interface _SystemContentBlock {
  text?: string;
  guardContent?: GuardrailConverseContentBlock;
  cachePoint?: CachePointBlock;
}

export type SystemContentBlock =
  | (_SystemContentBlock & { text: string })
  | (_SystemContentBlock & { guardContent: GuardrailConverseContentBlock })
  | (_SystemContentBlock & { cachePoint: CachePointBlock });
export type SystemContentBlocks = Array<SystemContentBlock>;
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export type TagValue = string;

export type TextCharactersGuarded = number;

export type TextCharactersTotal = number;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  cacheReadInputTokens?: number;
  cacheWriteInputTokens?: number;
}
interface _Tool {
  toolSpec?: ToolSpecification;
  cachePoint?: CachePointBlock;
}

export type Tool =
  | (_Tool & { toolSpec: ToolSpecification })
  | (_Tool & { cachePoint: CachePointBlock });
interface _ToolChoice {
  auto?: AutoToolChoice;
  any?: AnyToolChoice;
  tool?: SpecificToolChoice;
}

export type ToolChoice =
  | (_ToolChoice & { auto: AutoToolChoice })
  | (_ToolChoice & { any: AnyToolChoice })
  | (_ToolChoice & { tool: SpecificToolChoice });
export interface ToolConfiguration {
  tools: Array<Tool>;
  toolChoice?: ToolChoice;
}
interface _ToolInputSchema {
  json?: unknown;
}

export type ToolInputSchema = _ToolInputSchema & { json: unknown };
export type ToolName = string;

export interface ToolResultBlock {
  toolUseId: string;
  content: Array<ToolResultContentBlock>;
  status?: ToolResultStatus;
}
interface _ToolResultContentBlock {
  json?: unknown;
  text?: string;
  image?: ImageBlock;
  document?: DocumentBlock;
  video?: VideoBlock;
}

export type ToolResultContentBlock =
  | (_ToolResultContentBlock & { json: unknown })
  | (_ToolResultContentBlock & { text: string })
  | (_ToolResultContentBlock & { image: ImageBlock })
  | (_ToolResultContentBlock & { document: DocumentBlock })
  | (_ToolResultContentBlock & { video: VideoBlock });
export type ToolResultContentBlocks = Array<ToolResultContentBlock>;
export type ToolResultStatus = "SUCCESS" | "ERROR";
export type Tools = Array<Tool>;
export interface ToolSpecification {
  name: string;
  description?: string;
  inputSchema: ToolInputSchema;
}
export interface ToolUseBlock {
  toolUseId: string;
  name: string;
  input: unknown;
}
export interface ToolUseBlockDelta {
  input: string;
}
export interface ToolUseBlockStart {
  toolUseId: string;
  name: string;
}
export type ToolUseId = string;

export type Trace = "ENABLED" | "DISABLED" | "ENABLED_FULL";
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface VideoBlock {
  format: VideoFormat;
  source: VideoSource;
}
export type VideoFormat =
  | "MKV"
  | "MOV"
  | "MP4"
  | "WEBM"
  | "FLV"
  | "MPEG"
  | "MPG"
  | "WMV"
  | "THREE_GP";
interface _VideoSource {
  bytes?: Uint8Array | string;
  s3Location?: S3Location;
}

export type VideoSource =
  | (_VideoSource & { bytes: Uint8Array | string })
  | (_VideoSource & { s3Location: S3Location });
export declare namespace ApplyGuardrail {
  export type Input = ApplyGuardrailRequest;
  export type Output = ApplyGuardrailResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Converse {
  export type Input = ConverseRequest;
  export type Output = ConverseResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ConverseStream {
  export type Input = ConverseStreamRequest;
  export type Output = ConverseStreamResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAsyncInvoke {
  export type Input = GetAsyncInvokeRequest;
  export type Output = GetAsyncInvokeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InvokeModel {
  export type Input = InvokeModelRequest;
  export type Output = InvokeModelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InvokeModelWithBidirectionalStream {
  export type Input = InvokeModelWithBidirectionalStreamRequest;
  export type Output = InvokeModelWithBidirectionalStreamResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelStreamErrorException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InvokeModelWithResponseStream {
  export type Input = InvokeModelWithResponseStreamRequest;
  export type Output = InvokeModelWithResponseStreamResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ModelErrorException
    | ModelNotReadyException
    | ModelStreamErrorException
    | ModelTimeoutException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAsyncInvokes {
  export type Input = ListAsyncInvokesRequest;
  export type Output = ListAsyncInvokesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAsyncInvoke {
  export type Input = StartAsyncInvokeRequest;
  export type Output = StartAsyncInvokeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
