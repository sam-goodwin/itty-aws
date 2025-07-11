import type { Effect, Data } from "effect";
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

export declare class AccessDeniedException extends Data.TaggedError(
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

export type AsyncInvokeOutputDataConfig = {
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
export type CitationGeneratedContent = { text: string };
export type CitationGeneratedContentList = Array<CitationGeneratedContent>;
export type CitationLocation =
  | { documentChar: DocumentCharLocation }
  | { documentPage: DocumentPageLocation }
  | { documentChunk: DocumentChunkLocation };
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
export type CitationSourceContent = { text: string };
export interface CitationSourceContentDelta {
  text?: string;
}
export type CitationSourceContentList = Array<CitationSourceContent>;
export type CitationSourceContentListDelta = Array<CitationSourceContentDelta>;
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ContentBlock =
  | { text: string }
  | { image: ImageBlock }
  | { document: DocumentBlock }
  | { video: VideoBlock }
  | { toolUse: ToolUseBlock }
  | { toolResult: ToolResultBlock }
  | { guardContent: GuardrailConverseContentBlock }
  | { cachePoint: CachePointBlock }
  | { reasoningContent: ReasoningContentBlock }
  | { citationsContent: CitationsContentBlock };
export type ContentBlockDelta =
  | { text: string }
  | { toolUse: ToolUseBlockDelta }
  | { reasoningContent: ReasoningContentBlockDelta }
  | { citation: CitationsDelta };
export interface ContentBlockDeltaEvent {
  delta: ContentBlockDelta;
  contentBlockIndex: number;
}
export type ContentBlocks = Array<ContentBlock>;
export type ContentBlockStart = { toolUse: ToolUseBlockStart };
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
export type ConverseOutput = { message: Message };
export interface ConverseRequest {
  modelId: string;
  messages?: Array<Message>;
  system?: Array<SystemContentBlock>;
  inferenceConfig?: InferenceConfiguration;
  toolConfig?: ToolConfiguration;
  guardrailConfig?: GuardrailConfiguration;
  additionalModelRequestFields?: _opaque_Document;
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
  additionalModelResponseFields?: _opaque_Document;
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
export type ConverseStreamOutput =
  | { messageStart: MessageStartEvent }
  | { contentBlockStart: ContentBlockStartEvent }
  | { contentBlockDelta: ContentBlockDeltaEvent }
  | { contentBlockStop: ContentBlockStopEvent }
  | { messageStop: MessageStopEvent }
  | { metadata: ConverseStreamMetadataEvent }
  | { internalServerException: InternalServerException }
  | { modelStreamErrorException: ModelStreamErrorException }
  | { validationException: ValidationException }
  | { throttlingException: ThrottlingException }
  | { serviceUnavailableException: ServiceUnavailableException };
export interface ConverseStreamRequest {
  modelId: string;
  messages?: Array<Message>;
  system?: Array<SystemContentBlock>;
  inferenceConfig?: InferenceConfiguration;
  toolConfig?: ToolConfiguration;
  guardrailConfig?: GuardrailStreamConfiguration;
  additionalModelRequestFields?: _opaque_Document;
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
export type DocumentContentBlock = { text: string };
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
export type DocumentSource =
  | { bytes: Uint8Array | string }
  | { s3Location: S3Location }
  | { text: string }
  | { content: Array<DocumentContentBlock> };
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
export type GuardrailContentBlock =
  | { text: GuardrailTextBlock }
  | { image: GuardrailImageBlock };
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

export type GuardrailConverseContentBlock =
  | { text: GuardrailConverseTextBlock }
  | { image: GuardrailConverseImageBlock };
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
export type GuardrailConverseImageSource = { bytes: Uint8Array | string };
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
export type GuardrailImageSource = { bytes: Uint8Array | string };
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

export type ImageSource =
  | { bytes: Uint8Array | string }
  | { s3Location: S3Location };
export type ImagesTotal = number;

export interface InferenceConfiguration {
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  stopSequences?: Array<string>;
}
export declare class InternalServerException extends Data.TaggedError(
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
export type InvokeModelWithBidirectionalStreamInput = {
  chunk: BidirectionalInputPayloadPart;
};
export type InvokeModelWithBidirectionalStreamOutput =
  | { chunk: BidirectionalOutputPayloadPart }
  | { internalServerException: InternalServerException }
  | { modelStreamErrorException: ModelStreamErrorException }
  | { validationException: ValidationException }
  | { throttlingException: ThrottlingException }
  | { modelTimeoutException: ModelTimeoutException }
  | { serviceUnavailableException: ServiceUnavailableException };
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
  additionalModelResponseFields?: _opaque_Document;
}
export type MimeType = string;

export declare class ModelErrorException extends Data.TaggedError(
  "ModelErrorException",
)<{
  readonly message?: string;
  readonly originalStatusCode?: number;
  readonly resourceName?: string;
}> {}
export declare class ModelNotReadyException extends Data.TaggedError(
  "ModelNotReadyException",
)<{
  readonly message?: string;
}> {}
export type ModelOutputs = Array<string>;
export declare class ModelStreamErrorException extends Data.TaggedError(
  "ModelStreamErrorException",
)<{
  readonly message?: string;
  readonly originalStatusCode?: number;
  readonly originalMessage?: string;
}> {}
export declare class ModelTimeoutException extends Data.TaggedError(
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
export type PromptVariableValues = { text: string };
export type ReasoningContentBlock =
  | { reasoningText: ReasoningTextBlock }
  | { redactedContent: Uint8Array | string };
export type ReasoningContentBlockDelta =
  | { text: string }
  | { redactedContent: Uint8Array | string }
  | { signature: string };
export interface ReasoningTextBlock {
  text: string;
  signature?: string;
}
export type RequestMetadata = Record<string, string>;
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResponseStream =
  | { chunk: PayloadPart }
  | { internalServerException: InternalServerException }
  | { modelStreamErrorException: ModelStreamErrorException }
  | { validationException: ValidationException }
  | { throttlingException: ThrottlingException }
  | { modelTimeoutException: ModelTimeoutException }
  | { serviceUnavailableException: ServiceUnavailableException };
export interface S3Location {
  uri: string;
  bucketOwner?: string;
}
export type S3Uri = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceUnavailableException extends Data.TaggedError(
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
  modelInput: ModelInputPayload;
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
export type SystemContentBlock =
  | { text: string }
  | { guardContent: GuardrailConverseContentBlock }
  | { cachePoint: CachePointBlock };
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

export declare class ThrottlingException extends Data.TaggedError(
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
export type Tool =
  | { toolSpec: ToolSpecification }
  | { cachePoint: CachePointBlock };
export type ToolChoice =
  | { auto: AutoToolChoice }
  | { any: AnyToolChoice }
  | { tool: SpecificToolChoice };
export interface ToolConfiguration {
  tools: Array<Tool>;
  toolChoice?: ToolChoice;
}
export type ToolInputSchema = { json: _opaque_Document };
export type ToolName = string;

export interface ToolResultBlock {
  toolUseId: string;
  content: Array<ToolResultContentBlock>;
  status?: ToolResultStatus;
}
export type ToolResultContentBlock =
  | { json: _opaque_Document }
  | { text: string }
  | { image: ImageBlock }
  | { document: DocumentBlock }
  | { video: VideoBlock };
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
  input: _opaque_Document;
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
export declare class ValidationException extends Data.TaggedError(
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
export type VideoSource =
  | { bytes: Uint8Array | string }
  | { s3Location: S3Location };
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
