import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonBedrockAgentRunTimeService {
  createInvocation(
    input: CreateInvocationRequest,
  ): Effect.Effect<
    CreateInvocationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSession(
    input: CreateSessionRequest,
  ): Effect.Effect<
    CreateSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAgentMemory(
    input: DeleteAgentMemoryRequest,
  ): Effect.Effect<
    DeleteAgentMemoryResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
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
  endSession(
    input: EndSessionRequest,
  ): Effect.Effect<
    EndSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  generateQuery(
    input: GenerateQueryRequest,
  ): Effect.Effect<
    GenerateQueryResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAgentMemory(
    input: GetAgentMemoryRequest,
  ): Effect.Effect<
    GetAgentMemoryResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getExecutionFlowSnapshot(
    input: GetExecutionFlowSnapshotRequest,
  ): Effect.Effect<
    GetExecutionFlowSnapshotResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFlowExecution(
    input: GetFlowExecutionRequest,
  ): Effect.Effect<
    GetFlowExecutionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getInvocationStep(
    input: GetInvocationStepRequest,
  ): Effect.Effect<
    GetInvocationStepResponse,
    | AccessDeniedException
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
  invokeAgent(
    input: InvokeAgentRequest,
  ): Effect.Effect<
    InvokeAgentResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ModelNotReadyException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  invokeFlow(
    input: InvokeFlowRequest,
  ): Effect.Effect<
    InvokeFlowResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  invokeInlineAgent(
    input: InvokeInlineAgentRequest,
  ): Effect.Effect<
    InvokeInlineAgentResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFlowExecutionEvents(
    input: ListFlowExecutionEventsRequest,
  ): Effect.Effect<
    ListFlowExecutionEventsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFlowExecutions(
    input: ListFlowExecutionsRequest,
  ): Effect.Effect<
    ListFlowExecutionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInvocationSteps(
    input: ListInvocationStepsRequest,
  ): Effect.Effect<
    ListInvocationStepsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInvocations(
    input: ListInvocationsRequest,
  ): Effect.Effect<
    ListInvocationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSessions(
    input: ListSessionsRequest,
  ): Effect.Effect<
    ListSessionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  optimizePrompt(
    input: OptimizePromptRequest,
  ): Effect.Effect<
    OptimizePromptResponse,
    | AccessDeniedException
    | BadGatewayException
    | DependencyFailedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putInvocationStep(
    input: PutInvocationStepRequest,
  ): Effect.Effect<
    PutInvocationStepResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  rerank(
    input: RerankRequest,
  ): Effect.Effect<
    RerankResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  retrieve(
    input: RetrieveRequest,
  ): Effect.Effect<
    RetrieveResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  retrieveAndGenerate(
    input: RetrieveAndGenerateRequest,
  ): Effect.Effect<
    RetrieveAndGenerateResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  retrieveAndGenerateStream(
    input: RetrieveAndGenerateStreamRequest,
  ): Effect.Effect<
    RetrieveAndGenerateStreamResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startFlowExecution(
    input: StartFlowExecutionRequest,
  ): Effect.Effect<
    StartFlowExecutionResponse,
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopFlowExecution(
    input: StopFlowExecutionRequest,
  ): Effect.Effect<
    StopFlowExecutionResponse,
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
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSession(
    input: UpdateSessionRequest,
  ): Effect.Effect<
    UpdateSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type BedrockAgentRuntime = AmazonBedrockAgentRunTimeService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
interface _ActionGroupExecutor {
  lambda?: string;
  customControl?: CustomControlMethod;
}

export type ActionGroupExecutor =
  | (_ActionGroupExecutor & { lambda: string })
  | (_ActionGroupExecutor & { customControl: CustomControlMethod });
export interface ActionGroupInvocationInput {
  actionGroupName?: string;
  verb?: string;
  apiPath?: string;
  parameters?: Array<Parameter>;
  requestBody?: RequestBody;
  function?: string;
  executionType?: ExecutionType;
  invocationId?: string;
}
export interface ActionGroupInvocationOutput {
  text?: string;
  metadata?: Metadata;
}
export type ActionGroupName = string;

export type ActionGroupOutputString = string;

export type ActionGroupSignature =
  | "AMAZON_USERINPUT"
  | "AMAZON_CODEINTERPRETER"
  | "ANTHROPIC_COMPUTER"
  | "ANTHROPIC_BASH"
  | "ANTHROPIC_TEXTEDITOR";
export type ActionGroupSignatureParams = Record<string, string>;
export type ActionInvocationType =
  | "RESULT"
  | "USER_CONFIRMATION"
  | "USER_CONFIRMATION_AND_RESULT";
export type AdditionalModelRequestFields = Record<string, unknown>;
export type AdditionalModelRequestFieldsKey = string;

export type AdditionalModelRequestFieldsValue = unknown;

export interface AgentActionGroup {
  actionGroupName: string;
  description?: string;
  parentActionGroupSignature?: ActionGroupSignature;
  actionGroupExecutor?: ActionGroupExecutor;
  apiSchema?: APISchema;
  functionSchema?: FunctionSchema;
  parentActionGroupSignatureParams?: Record<string, string>;
}
export type AgentActionGroups = Array<AgentActionGroup>;
export type AgentAliasArn = string;

export type AgentAliasId = string;

export type AgentCollaboration =
  | "SUPERVISOR"
  | "SUPERVISOR_ROUTER"
  | "DISABLED";
export interface AgentCollaboratorInputPayload {
  type?: PayloadType;
  text?: string;
  returnControlResults?: ReturnControlResults;
}
export interface AgentCollaboratorInvocationInput {
  agentCollaboratorName?: string;
  agentCollaboratorAliasArn?: string;
  input?: AgentCollaboratorInputPayload;
}
export interface AgentCollaboratorInvocationOutput {
  agentCollaboratorName?: string;
  agentCollaboratorAliasArn?: string;
  output?: AgentCollaboratorOutputPayload;
  metadata?: Metadata;
}
export interface AgentCollaboratorOutputPayload {
  type?: PayloadType;
  text?: string;
  returnControlPayload?: ReturnControlPayload;
}
export type AgentCollaboratorPayloadString = string;

export type AgentId = string;

export type AgentVersion = string;

export interface AnalyzePromptEvent {
  message?: string;
}
export type ApiContentMap = Record<string, PropertyParameters>;
export interface ApiInvocationInput {
  actionGroup: string;
  httpMethod?: string;
  apiPath?: string;
  parameters?: Array<ApiParameter>;
  requestBody?: ApiRequestBody;
  actionInvocationType?: ActionInvocationType;
  agentId?: string;
  collaboratorName?: string;
}
export interface ApiParameter {
  name?: string;
  type?: string;
  value?: string;
}
export type ApiParameters = Array<ApiParameter>;
export type ApiPath = string;

export interface ApiRequestBody {
  content?: Record<string, PropertyParameters>;
}
export interface ApiResult {
  actionGroup: string;
  httpMethod?: string;
  apiPath?: string;
  confirmationState?: ConfirmationState;
  responseState?: ResponseState;
  httpStatusCode?: number;
  responseBody?: Record<string, ContentBody>;
  agentId?: string;
}
interface _APISchema {
  s3?: S3Identifier;
  payload?: string;
}

export type APISchema =
  | (_APISchema & { s3: S3Identifier })
  | (_APISchema & { payload: string });
export type AttributeType = "STRING" | "NUMBER" | "BOOLEAN" | "STRING_LIST";
export interface Attribution {
  citations?: Array<Citation>;
}
export type AWSResourceARN = string;

export declare class BadGatewayException extends EffectData.TaggedError(
  "BadGatewayException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export type BasePromptTemplate = string;

export type BedrockModelArn = string;

export interface BedrockModelConfigurations {
  performanceConfig?: PerformanceConfiguration;
}
export interface BedrockRerankingConfiguration {
  numberOfResults?: number;
  modelConfiguration: BedrockRerankingModelConfiguration;
}
export type BedrockRerankingModelArn = string;

export interface BedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: Record<string, unknown>;
}
interface _BedrockSessionContentBlock {
  text?: string;
  image?: ImageBlock;
}

export type BedrockSessionContentBlock =
  | (_BedrockSessionContentBlock & { text: string })
  | (_BedrockSessionContentBlock & { image: ImageBlock });
export type BedrockSessionContentBlocks = Array<BedrockSessionContentBlock>;
export type ByteContentBlob = Uint8Array | string;

export interface ByteContentDoc {
  identifier: string;
  contentType: string;
  data: Uint8Array | string;
}
export interface ByteContentFile {
  mediaType: string;
  data: Uint8Array | string;
}
interface _Caller {
  agentAliasArn?: string;
}

export type Caller = _Caller & { agentAliasArn: string };
export type CallerChain = Array<Caller>;
export interface Citation {
  generatedResponsePart?: GeneratedResponsePart;
  retrievedReferences?: Array<RetrievedReference>;
}
export interface CitationEvent {
  citation?: Citation;
  generatedResponsePart?: GeneratedResponsePart;
  retrievedReferences?: Array<RetrievedReference>;
}
export type Citations = Array<Citation>;
export interface CodeInterpreterInvocationInput {
  code?: string;
  files?: Array<string>;
}
export interface CodeInterpreterInvocationOutput {
  executionOutput?: string;
  executionError?: string;
  files?: Array<string>;
  executionTimeout?: boolean;
  metadata?: Metadata;
}
export type CollaborationInstruction = string;

export interface Collaborator {
  customerEncryptionKeyArn?: string;
  foundationModel: string;
  instruction: string;
  idleSessionTTLInSeconds?: number;
  actionGroups?: Array<AgentActionGroup>;
  knowledgeBases?: Array<KnowledgeBase>;
  guardrailConfiguration?: GuardrailConfigurationWithArn;
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  agentCollaboration?: AgentCollaboration;
  collaboratorConfigurations?: Array<CollaboratorConfiguration>;
  agentName?: string;
}
export interface CollaboratorConfiguration {
  collaboratorName: string;
  collaboratorInstruction: string;
  agentAliasArn?: string;
  relayConversationHistory?: RelayConversationHistory;
}
export type CollaboratorConfigurations = Array<CollaboratorConfiguration>;
export type Collaborators = Array<Collaborator>;
export interface ConditionResultEvent {
  nodeName: string;
  timestamp: Date | string;
  satisfiedConditions: Array<SatisfiedCondition>;
}
export type ConfirmationState = "CONFIRM" | "DENY";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
interface _ContentBlock {
  text?: string;
}

export type ContentBlock = _ContentBlock & { text: string };
export type ContentBlocks = Array<ContentBlock>;
export interface ContentBody {
  body?: string;
  images?: Array<ImageInput>;
}
export type ContentMap = Record<string, Array<Parameter>>;
export type ContentType = string;

export interface ConversationHistory {
  messages?: Array<Message>;
}
export type ConversationRole = "USER" | "ASSISTANT";
export interface CreateInvocationRequest {
  invocationId?: string;
  description?: string;
  sessionIdentifier: string;
}
export interface CreateInvocationResponse {
  sessionId: string;
  invocationId: string;
  createdAt: Date | string;
}
export interface CreateSessionRequest {
  sessionMetadata?: Record<string, string>;
  encryptionKeyArn?: string;
  tags?: Record<string, string>;
}
export interface CreateSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date | string;
}
export type CreationMode = "DEFAULT" | "OVERRIDDEN";
export type CustomControlMethod = "RETURN_CONTROL";
export interface CustomOrchestration {
  executor?: OrchestrationExecutor;
}
export interface CustomOrchestrationTrace {
  traceId?: string;
  event?: CustomOrchestrationTraceEvent;
}
export interface CustomOrchestrationTraceEvent {
  text?: string;
}
export type DateTimestamp = Date | string;

export interface DeleteAgentMemoryRequest {
  agentId: string;
  agentAliasId: string;
  memoryId?: string;
  sessionId?: string;
}
export interface DeleteAgentMemoryResponse {}
export interface DeleteSessionRequest {
  sessionIdentifier: string;
}
export interface DeleteSessionResponse {}
export declare class DependencyFailedException extends EffectData.TaggedError(
  "DependencyFailedException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface EndSessionRequest {
  sessionIdentifier: string;
}
export interface EndSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
}
export type ExecutionType = "LAMBDA" | "RETURN_CONTROL";
export interface ExternalSource {
  sourceType: ExternalSourceType;
  s3Location?: S3ObjectDoc;
  byteContent?: ByteContentDoc;
}
export type ExternalSources = Array<ExternalSource>;
export interface ExternalSourcesGenerationConfiguration {
  promptTemplate?: PromptTemplate;
  guardrailConfiguration?: GuardrailConfiguration;
  inferenceConfig?: InferenceConfig;
  additionalModelRequestFields?: Record<string, unknown>;
  performanceConfig?: PerformanceConfiguration;
}
export interface ExternalSourcesRetrieveAndGenerateConfiguration {
  modelArn: string;
  sources: Array<ExternalSource>;
  generationConfiguration?: ExternalSourcesGenerationConfiguration;
}
export type ExternalSourceType = "S3" | "BYTE_CONTENT";
export type FailureReasonString = string;

export interface FailureTrace {
  traceId?: string;
  failureReason?: string;
  failureCode?: number;
  metadata?: Metadata;
}
export interface FieldForReranking {
  fieldName: string;
}
export type FieldsForReranking = Array<FieldForReranking>;
export type FileBody = Uint8Array | string;

export interface FilePart {
  files?: Array<OutputFile>;
}
export type Files = Array<string>;
export interface FileSource {
  sourceType: FileSourceType;
  s3Location?: S3ObjectFile;
  byteContent?: ByteContentFile;
}
export type FileSourceType = "S3" | "BYTE_CONTENT";
export type FileUseCase = "CODE_INTERPRETER" | "CHAT";
export interface FilterAttribute {
  key: string;
  value: unknown;
}
export type FilterKey = string;

export type FilterValue = unknown;

export interface FinalResponse {
  text?: string;
  metadata?: Metadata;
}
export type FinalResponseString = string;

export type FlowAliasIdentifier = string;

export interface FlowCompletionEvent {
  completionReason: FlowCompletionReason;
}
export type FlowCompletionReason = "SUCCESS" | "INPUT_REQUIRED";
export type FlowErrorCode =
  | "VALIDATION"
  | "INTERNAL_SERVER"
  | "NODE_EXECUTION_FAILED";
interface _FlowExecutionContent {
  document?: unknown;
}

export type FlowExecutionContent = _FlowExecutionContent & {
  document: unknown;
};
export interface FlowExecutionError {
  nodeName?: string;
  error?: FlowExecutionErrorType;
  message?: string;
}
export type FlowExecutionErrors = Array<FlowExecutionError>;
export type FlowExecutionErrorType = "TIMED_OUT";
interface _FlowExecutionEvent {
  flowInputEvent?: FlowExecutionInputEvent;
  flowOutputEvent?: FlowExecutionOutputEvent;
  nodeInputEvent?: NodeInputEvent;
  nodeOutputEvent?: NodeOutputEvent;
  conditionResultEvent?: ConditionResultEvent;
  nodeFailureEvent?: NodeFailureEvent;
  flowFailureEvent?: FlowFailureEvent;
}

export type FlowExecutionEvent =
  | (_FlowExecutionEvent & { flowInputEvent: FlowExecutionInputEvent })
  | (_FlowExecutionEvent & { flowOutputEvent: FlowExecutionOutputEvent })
  | (_FlowExecutionEvent & { nodeInputEvent: NodeInputEvent })
  | (_FlowExecutionEvent & { nodeOutputEvent: NodeOutputEvent })
  | (_FlowExecutionEvent & { conditionResultEvent: ConditionResultEvent })
  | (_FlowExecutionEvent & { nodeFailureEvent: NodeFailureEvent })
  | (_FlowExecutionEvent & { flowFailureEvent: FlowFailureEvent });
export type FlowExecutionEvents = Array<FlowExecutionEvent>;
export type FlowExecutionEventType = "NODE" | "FLOW";
export type FlowExecutionId = string;

export type FlowExecutionIdentifier = string;

export interface FlowExecutionInputEvent {
  nodeName: string;
  timestamp: Date | string;
  fields: Array<FlowInputField>;
}
export type FlowExecutionName = string;

export interface FlowExecutionOutputEvent {
  nodeName: string;
  timestamp: Date | string;
  fields: Array<FlowOutputField>;
}
export type FlowExecutionRoleArn = string;

export type FlowExecutionStatus =
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | "ABORTED";
export type FlowExecutionSummaries = Array<FlowExecutionSummary>;
export interface FlowExecutionSummary {
  executionArn: string;
  flowAliasIdentifier: string;
  flowIdentifier: string;
  flowVersion: string;
  status: FlowExecutionStatus;
  createdAt: Date | string;
  endedAt?: Date | string;
}
export interface FlowFailureEvent {
  timestamp: Date | string;
  errorCode: FlowErrorCode;
  errorMessage: string;
}
export type FlowIdentifier = string;

export interface FlowInput {
  nodeName: string;
  nodeOutputName?: string;
  content: FlowInputContent;
  nodeInputName?: string;
}
interface _FlowInputContent {
  document?: unknown;
}

export type FlowInputContent = _FlowInputContent & { document: unknown };
export interface FlowInputField {
  name: string;
  content: FlowExecutionContent;
}
export type FlowInputFields = Array<FlowInputField>;
export type FlowInputs = Array<FlowInput>;
interface _FlowMultiTurnInputContent {
  document?: unknown;
}

export type FlowMultiTurnInputContent = _FlowMultiTurnInputContent & {
  document: unknown;
};
export interface FlowMultiTurnInputRequestEvent {
  nodeName: string;
  nodeType: NodeType;
  content: FlowMultiTurnInputContent;
}
interface _FlowOutputContent {
  document?: unknown;
}

export type FlowOutputContent = _FlowOutputContent & { document: unknown };
export interface FlowOutputEvent {
  nodeName: string;
  nodeType: NodeType;
  content: FlowOutputContent;
}
export interface FlowOutputField {
  name: string;
  content: FlowExecutionContent;
}
export type FlowOutputFields = Array<FlowOutputField>;
interface _FlowResponseStream {
  flowOutputEvent?: FlowOutputEvent;
  flowCompletionEvent?: FlowCompletionEvent;
  flowTraceEvent?: FlowTraceEvent;
  internalServerException?: InternalServerException;
  validationException?: ValidationException;
  resourceNotFoundException?: ResourceNotFoundException;
  serviceQuotaExceededException?: ServiceQuotaExceededException;
  throttlingException?: ThrottlingException;
  accessDeniedException?: AccessDeniedException;
  conflictException?: ConflictException;
  dependencyFailedException?: DependencyFailedException;
  badGatewayException?: BadGatewayException;
  flowMultiTurnInputRequestEvent?: FlowMultiTurnInputRequestEvent;
}

export type FlowResponseStream =
  | (_FlowResponseStream & { flowOutputEvent: FlowOutputEvent })
  | (_FlowResponseStream & { flowCompletionEvent: FlowCompletionEvent })
  | (_FlowResponseStream & { flowTraceEvent: FlowTraceEvent })
  | (_FlowResponseStream & { internalServerException: InternalServerException })
  | (_FlowResponseStream & { validationException: ValidationException })
  | (_FlowResponseStream & {
      resourceNotFoundException: ResourceNotFoundException;
    })
  | (_FlowResponseStream & {
      serviceQuotaExceededException: ServiceQuotaExceededException;
    })
  | (_FlowResponseStream & { throttlingException: ThrottlingException })
  | (_FlowResponseStream & { accessDeniedException: AccessDeniedException })
  | (_FlowResponseStream & { conflictException: ConflictException })
  | (_FlowResponseStream & {
      dependencyFailedException: DependencyFailedException;
    })
  | (_FlowResponseStream & { badGatewayException: BadGatewayException })
  | (_FlowResponseStream & {
      flowMultiTurnInputRequestEvent: FlowMultiTurnInputRequestEvent;
    });
interface _FlowTrace {
  nodeInputTrace?: FlowTraceNodeInputEvent;
  nodeOutputTrace?: FlowTraceNodeOutputEvent;
  conditionNodeResultTrace?: FlowTraceConditionNodeResultEvent;
  nodeActionTrace?: FlowTraceNodeActionEvent;
}

export type FlowTrace =
  | (_FlowTrace & { nodeInputTrace: FlowTraceNodeInputEvent })
  | (_FlowTrace & { nodeOutputTrace: FlowTraceNodeOutputEvent })
  | (_FlowTrace & {
      conditionNodeResultTrace: FlowTraceConditionNodeResultEvent;
    })
  | (_FlowTrace & { nodeActionTrace: FlowTraceNodeActionEvent });
export interface FlowTraceCondition {
  conditionName: string;
}
export interface FlowTraceConditionNodeResultEvent {
  nodeName: string;
  timestamp: Date | string;
  satisfiedConditions: Array<FlowTraceCondition>;
}
export type FlowTraceConditions = Array<FlowTraceCondition>;
export interface FlowTraceEvent {
  trace: FlowTrace;
}
export interface FlowTraceNodeActionEvent {
  nodeName: string;
  timestamp: Date | string;
  requestId: string;
  serviceName: string;
  operationName: string;
}
interface _FlowTraceNodeInputContent {
  document?: unknown;
}

export type FlowTraceNodeInputContent = _FlowTraceNodeInputContent & {
  document: unknown;
};
export interface FlowTraceNodeInputEvent {
  nodeName: string;
  timestamp: Date | string;
  fields: Array<FlowTraceNodeInputField>;
}
export interface FlowTraceNodeInputField {
  nodeInputName: string;
  content: FlowTraceNodeInputContent;
}
export type FlowTraceNodeInputFields = Array<FlowTraceNodeInputField>;
interface _FlowTraceNodeOutputContent {
  document?: unknown;
}

export type FlowTraceNodeOutputContent = _FlowTraceNodeOutputContent & {
  document: unknown;
};
export interface FlowTraceNodeOutputEvent {
  nodeName: string;
  timestamp: Date | string;
  fields: Array<FlowTraceNodeOutputField>;
}
export interface FlowTraceNodeOutputField {
  nodeOutputName: string;
  content: FlowTraceNodeOutputContent;
}
export type FlowTraceNodeOutputFields = Array<FlowTraceNodeOutputField>;
export type BedrockAgentRuntimeFunction = string;

export interface FunctionDefinition {
  name: string;
  description?: string;
  parameters?: Record<string, ParameterDetail>;
  requireConfirmation?: RequireConfirmation;
}
export type FunctionDescription = string;

export interface FunctionInvocationInput {
  actionGroup: string;
  parameters?: Array<FunctionParameter>;
  function?: string;
  actionInvocationType?: ActionInvocationType;
  agentId?: string;
  collaboratorName?: string;
}
export interface FunctionParameter {
  name?: string;
  type?: string;
  value?: string;
}
export type FunctionParameters = Array<FunctionParameter>;
export interface FunctionResult {
  actionGroup: string;
  confirmationState?: ConfirmationState;
  function?: string;
  responseBody?: Record<string, ContentBody>;
  responseState?: ResponseState;
  agentId?: string;
}
export type Functions = Array<FunctionDefinition>;
interface _FunctionSchema {
  functions?: Array<FunctionDefinition>;
}

export type FunctionSchema = _FunctionSchema & {
  functions: Array<FunctionDefinition>;
};
export type GeneratedQueries = Array<GeneratedQuery>;
export interface GeneratedQuery {
  type?: GeneratedQueryType;
  sql?: string;
}
export type GeneratedQueryType = "REDSHIFT_SQL";
export interface GeneratedResponsePart {
  textResponsePart?: TextResponsePart;
}
export interface GenerateQueryRequest {
  queryGenerationInput: QueryGenerationInput;
  transformationConfiguration: TransformationConfiguration;
}
export interface GenerateQueryResponse {
  queries?: Array<GeneratedQuery>;
}
export interface GenerationConfiguration {
  promptTemplate?: PromptTemplate;
  guardrailConfiguration?: GuardrailConfiguration;
  inferenceConfig?: InferenceConfig;
  additionalModelRequestFields?: Record<string, unknown>;
  performanceConfig?: PerformanceConfiguration;
}
export interface GetAgentMemoryRequest {
  nextToken?: string;
  maxItems?: number;
  agentId: string;
  agentAliasId: string;
  memoryType: MemoryType;
  memoryId: string;
}
export interface GetAgentMemoryResponse {
  nextToken?: string;
  memoryContents?: Array<Memory>;
}
export interface GetExecutionFlowSnapshotRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
}
export interface GetExecutionFlowSnapshotResponse {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  flowVersion: string;
  executionRoleArn: string;
  definition: string;
  customerEncryptionKeyArn?: string;
}
export interface GetFlowExecutionRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
}
export interface GetFlowExecutionResponse {
  executionArn: string;
  status: FlowExecutionStatus;
  startedAt: Date | string;
  endedAt?: Date | string;
  errors?: Array<FlowExecutionError>;
  flowAliasIdentifier: string;
  flowIdentifier: string;
  flowVersion: string;
}
export interface GetInvocationStepRequest {
  invocationIdentifier: string;
  invocationStepId: string;
  sessionIdentifier: string;
}
export interface GetInvocationStepResponse {
  invocationStep: InvocationStep;
}
export interface GetSessionRequest {
  sessionIdentifier: string;
}
export interface GetSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
  sessionMetadata?: Record<string, string>;
  encryptionKeyArn?: string;
}
export type GuadrailAction = "INTERVENED" | "NONE";
export type GuardrailAction = "INTERVENED" | "NONE";
export interface GuardrailAssessment {
  topicPolicy?: GuardrailTopicPolicyAssessment;
  contentPolicy?: GuardrailContentPolicyAssessment;
  wordPolicy?: GuardrailWordPolicyAssessment;
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment;
}
export type GuardrailAssessmentList = Array<GuardrailAssessment>;
export interface GuardrailConfiguration {
  guardrailId: string;
  guardrailVersion: string;
}
export interface GuardrailConfigurationWithArn {
  guardrailIdentifier: string;
  guardrailVersion: string;
}
export interface GuardrailContentFilter {
  type?: GuardrailContentFilterType;
  confidence?: GuardrailContentFilterConfidence;
  action?: GuardrailContentPolicyAction;
}
export type GuardrailContentFilterConfidence =
  | "NONE"
  | "LOW"
  | "MEDIUM"
  | "HIGH";
export type GuardrailContentFilterList = Array<GuardrailContentFilter>;
export type GuardrailContentFilterType =
  | "INSULTS"
  | "HATE"
  | "SEXUAL"
  | "VIOLENCE"
  | "MISCONDUCT"
  | "PROMPT_ATTACK";
export type GuardrailContentPolicyAction = "BLOCKED";
export interface GuardrailContentPolicyAssessment {
  filters?: Array<GuardrailContentFilter>;
}
export interface GuardrailCustomWord {
  match?: string;
  action?: GuardrailWordPolicyAction;
}
export type GuardrailCustomWordList = Array<GuardrailCustomWord>;
export interface GuardrailEvent {
  action?: GuadrailAction;
}
export type GuardrailIdentifierWithArn = string;

export interface GuardrailManagedWord {
  match?: string;
  type?: GuardrailManagedWordType;
  action?: GuardrailWordPolicyAction;
}
export type GuardrailManagedWordList = Array<GuardrailManagedWord>;
export type GuardrailManagedWordType = "PROFANITY";
export interface GuardrailPiiEntityFilter {
  type?: GuardrailPiiEntityType;
  match?: string;
  action?: GuardrailSensitiveInformationPolicyAction;
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
export interface GuardrailRegexFilter {
  name?: string;
  regex?: string;
  match?: string;
  action?: GuardrailSensitiveInformationPolicyAction;
}
export type GuardrailRegexFilterList = Array<GuardrailRegexFilter>;
export type GuardrailSensitiveInformationPolicyAction =
  | "BLOCKED"
  | "ANONYMIZED";
export interface GuardrailSensitiveInformationPolicyAssessment {
  piiEntities?: Array<GuardrailPiiEntityFilter>;
  regexes?: Array<GuardrailRegexFilter>;
}
export interface GuardrailTopic {
  name?: string;
  type?: GuardrailTopicType;
  action?: GuardrailTopicPolicyAction;
}
export type GuardrailTopicList = Array<GuardrailTopic>;
export type GuardrailTopicPolicyAction = "BLOCKED";
export interface GuardrailTopicPolicyAssessment {
  topics?: Array<GuardrailTopic>;
}
export type GuardrailTopicType = "DENY";
export interface GuardrailTrace {
  action?: GuardrailAction;
  traceId?: string;
  inputAssessments?: Array<GuardrailAssessment>;
  outputAssessments?: Array<GuardrailAssessment>;
  metadata?: Metadata;
}
export type GuardrailVersion = string;

export type GuardrailWordPolicyAction = "BLOCKED";
export interface GuardrailWordPolicyAssessment {
  customWords?: Array<GuardrailCustomWord>;
  managedWordLists?: Array<GuardrailManagedWord>;
}
export type Identifier = string;

export interface ImageBlock {
  format: ImageFormat;
  source: ImageSource;
}
export type ImageFormat = "PNG" | "JPEG" | "GIF" | "WEBP";
export interface ImageInput {
  format: ImageInputFormat;
  source: ImageInputSource;
}
export type ImageInputFormat = "PNG" | "JPEG" | "GIF" | "WEBP";
export type ImageInputs = Array<ImageInput>;
interface _ImageInputSource {
  bytes?: Uint8Array | string;
}

export type ImageInputSource = _ImageInputSource & {
  bytes: Uint8Array | string;
};
interface _ImageSource {
  bytes?: Uint8Array | string;
  s3Location?: S3Location;
}

export type ImageSource =
  | (_ImageSource & { bytes: Uint8Array | string })
  | (_ImageSource & { s3Location: S3Location });
export interface ImplicitFilterConfiguration {
  metadataAttributes: Array<MetadataAttributeSchema>;
  modelArn: string;
}
export interface InferenceConfig {
  textInferenceConfig?: TextInferenceConfig;
}
export interface InferenceConfiguration {
  temperature?: number;
  topP?: number;
  topK?: number;
  maximumLength?: number;
  stopSequences?: Array<string>;
}
export interface InlineAgentFilePart {
  files?: Array<OutputFile>;
}
export interface InlineAgentPayloadPart {
  bytes?: Uint8Array | string;
  attribution?: Attribution;
}
interface _InlineAgentResponseStream {
  chunk?: InlineAgentPayloadPart;
  trace?: InlineAgentTracePart;
  returnControl?: InlineAgentReturnControlPayload;
  internalServerException?: InternalServerException;
  validationException?: ValidationException;
  resourceNotFoundException?: ResourceNotFoundException;
  serviceQuotaExceededException?: ServiceQuotaExceededException;
  throttlingException?: ThrottlingException;
  accessDeniedException?: AccessDeniedException;
  conflictException?: ConflictException;
  dependencyFailedException?: DependencyFailedException;
  badGatewayException?: BadGatewayException;
  files?: InlineAgentFilePart;
}

export type InlineAgentResponseStream =
  | (_InlineAgentResponseStream & { chunk: InlineAgentPayloadPart })
  | (_InlineAgentResponseStream & { trace: InlineAgentTracePart })
  | (_InlineAgentResponseStream & {
      returnControl: InlineAgentReturnControlPayload;
    })
  | (_InlineAgentResponseStream & {
      internalServerException: InternalServerException;
    })
  | (_InlineAgentResponseStream & { validationException: ValidationException })
  | (_InlineAgentResponseStream & {
      resourceNotFoundException: ResourceNotFoundException;
    })
  | (_InlineAgentResponseStream & {
      serviceQuotaExceededException: ServiceQuotaExceededException;
    })
  | (_InlineAgentResponseStream & { throttlingException: ThrottlingException })
  | (_InlineAgentResponseStream & {
      accessDeniedException: AccessDeniedException;
    })
  | (_InlineAgentResponseStream & { conflictException: ConflictException })
  | (_InlineAgentResponseStream & {
      dependencyFailedException: DependencyFailedException;
    })
  | (_InlineAgentResponseStream & { badGatewayException: BadGatewayException })
  | (_InlineAgentResponseStream & { files: InlineAgentFilePart });
export interface InlineAgentReturnControlPayload {
  invocationInputs?: Array<InvocationInputMember>;
  invocationId?: string;
}
export interface InlineAgentTracePart {
  sessionId?: string;
  trace?: Trace;
  callerChain?: Array<Caller>;
  eventTime?: Date | string;
  collaboratorName?: string;
}
export interface InlineBedrockModelConfigurations {
  performanceConfig?: PerformanceConfiguration;
}
export interface InlineSessionState {
  sessionAttributes?: Record<string, string>;
  promptSessionAttributes?: Record<string, string>;
  returnControlInvocationResults?: Array<InvocationResultMember>;
  invocationId?: string;
  files?: Array<InputFile>;
  conversationHistory?: ConversationHistory;
}
export interface InputFile {
  name: string;
  source: FileSource;
  useCase: FileUseCase;
}
export type InputFiles = Array<InputFile>;
interface _InputPrompt {
  textPrompt?: TextPrompt;
}

export type InputPrompt = _InputPrompt & { textPrompt: TextPrompt };
export type InputQueryType = "TEXT";
export type InputText = string;

export type Instruction = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
  readonly reason?: string;
}> {}
export type InvocationDescription = string;

export type InvocationIdentifier = string;

export interface InvocationInput {
  traceId?: string;
  invocationType?: InvocationType;
  actionGroupInvocationInput?: ActionGroupInvocationInput;
  knowledgeBaseLookupInput?: KnowledgeBaseLookupInput;
  codeInterpreterInvocationInput?: CodeInterpreterInvocationInput;
  agentCollaboratorInvocationInput?: AgentCollaboratorInvocationInput;
}
interface _InvocationInputMember {
  apiInvocationInput?: ApiInvocationInput;
  functionInvocationInput?: FunctionInvocationInput;
}

export type InvocationInputMember =
  | (_InvocationInputMember & { apiInvocationInput: ApiInvocationInput })
  | (_InvocationInputMember & {
      functionInvocationInput: FunctionInvocationInput;
    });
export type InvocationInputs = Array<InvocationInputMember>;
interface _InvocationResultMember {
  apiResult?: ApiResult;
  functionResult?: FunctionResult;
}

export type InvocationResultMember =
  | (_InvocationResultMember & { apiResult: ApiResult })
  | (_InvocationResultMember & { functionResult: FunctionResult });
export interface InvocationStep {
  sessionId: string;
  invocationId: string;
  invocationStepId: string;
  invocationStepTime: Date | string;
  payload: InvocationStepPayload;
}
interface _InvocationStepPayload {
  contentBlocks?: Array<BedrockSessionContentBlock>;
}

export type InvocationStepPayload = _InvocationStepPayload & {
  contentBlocks: Array<BedrockSessionContentBlock>;
};
export type InvocationStepSummaries = Array<InvocationStepSummary>;
export interface InvocationStepSummary {
  sessionId: string;
  invocationId: string;
  invocationStepId: string;
  invocationStepTime: Date | string;
}
export type InvocationSummaries = Array<InvocationSummary>;
export interface InvocationSummary {
  sessionId: string;
  invocationId: string;
  createdAt: Date | string;
}
export type InvocationType =
  | "ACTION_GROUP"
  | "KNOWLEDGE_BASE"
  | "FINISH"
  | "ACTION_GROUP_CODE_INTERPRETER"
  | "AGENT_COLLABORATOR";
export interface InvokeAgentRequest {
  sessionState?: SessionState;
  agentId: string;
  agentAliasId: string;
  sessionId: string;
  endSession?: boolean;
  enableTrace?: boolean;
  inputText?: string;
  memoryId?: string;
  bedrockModelConfigurations?: BedrockModelConfigurations;
  streamingConfigurations?: StreamingConfigurations;
  promptCreationConfigurations?: PromptCreationConfigurations;
  sourceArn?: string;
}
export interface InvokeAgentResponse {
  completion: ResponseStream;
  contentType: string;
  sessionId: string;
  memoryId?: string;
}
export interface InvokeFlowRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  inputs: Array<FlowInput>;
  enableTrace?: boolean;
  modelPerformanceConfiguration?: ModelPerformanceConfiguration;
  executionId?: string;
}
export interface InvokeFlowResponse {
  responseStream: FlowResponseStream;
  executionId?: string;
}
export interface InvokeInlineAgentRequest {
  customerEncryptionKeyArn?: string;
  foundationModel: string;
  instruction: string;
  idleSessionTTLInSeconds?: number;
  actionGroups?: Array<AgentActionGroup>;
  knowledgeBases?: Array<KnowledgeBase>;
  guardrailConfiguration?: GuardrailConfigurationWithArn;
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  agentCollaboration?: AgentCollaboration;
  collaboratorConfigurations?: Array<CollaboratorConfiguration>;
  agentName?: string;
  sessionId: string;
  endSession?: boolean;
  enableTrace?: boolean;
  inputText?: string;
  streamingConfigurations?: StreamingConfigurations;
  promptCreationConfigurations?: PromptCreationConfigurations;
  inlineSessionState?: InlineSessionState;
  collaborators?: Array<Collaborator>;
  bedrockModelConfigurations?: InlineBedrockModelConfigurations;
  orchestrationType?: OrchestrationType;
  customOrchestration?: CustomOrchestration;
}
export interface InvokeInlineAgentResponse {
  completion: InlineAgentResponseStream;
  contentType: string;
  sessionId: string;
}
export type KmsKeyArn = string;

export interface KnowledgeBase {
  knowledgeBaseId: string;
  description: string;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
}
export type KnowledgeBaseArn = string;

export interface KnowledgeBaseConfiguration {
  knowledgeBaseId: string;
  retrievalConfiguration: KnowledgeBaseRetrievalConfiguration;
}
export type KnowledgeBaseConfigurations = Array<KnowledgeBaseConfiguration>;
export type KnowledgeBaseId = string;

export interface KnowledgeBaseLookupInput {
  text?: string;
  knowledgeBaseId?: string;
}
export type KnowledgeBaseLookupInputString = string;

export interface KnowledgeBaseLookupOutput {
  retrievedReferences?: Array<RetrievedReference>;
  metadata?: Metadata;
}
export interface KnowledgeBaseQuery {
  text: string;
}
export interface KnowledgeBaseRetrievalConfiguration {
  vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration;
}
export interface KnowledgeBaseRetrievalResult {
  content: RetrievalResultContent;
  location?: RetrievalResultLocation;
  score?: number;
  metadata?: Record<string, unknown>;
}
export type KnowledgeBaseRetrievalResults = Array<KnowledgeBaseRetrievalResult>;
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  knowledgeBaseId: string;
  modelArn: string;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
  generationConfiguration?: GenerationConfiguration;
  orchestrationConfiguration?: OrchestrationConfiguration;
}
export type KnowledgeBases = Array<KnowledgeBase>;
export interface KnowledgeBaseVectorSearchConfiguration {
  numberOfResults?: number;
  overrideSearchType?: SearchType;
  filter?: RetrievalFilter;
  rerankingConfiguration?: VectorSearchRerankingConfiguration;
  implicitFilterConfiguration?: ImplicitFilterConfiguration;
}
export type LambdaArn = string;

export type LambdaResourceArn = string;

export interface ListFlowExecutionEventsRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  eventType: FlowExecutionEventType;
}
export interface ListFlowExecutionEventsResponse {
  flowExecutionEvents: Array<FlowExecutionEvent>;
  nextToken?: string;
}
export interface ListFlowExecutionsRequest {
  flowIdentifier: string;
  flowAliasIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListFlowExecutionsResponse {
  flowExecutionSummaries: Array<FlowExecutionSummary>;
  nextToken?: string;
}
export interface ListInvocationsRequest {
  nextToken?: string;
  maxResults?: number;
  sessionIdentifier: string;
}
export interface ListInvocationsResponse {
  invocationSummaries: Array<InvocationSummary>;
  nextToken?: string;
}
export interface ListInvocationStepsRequest {
  invocationIdentifier?: string;
  nextToken?: string;
  maxResults?: number;
  sessionIdentifier: string;
}
export interface ListInvocationStepsResponse {
  invocationStepSummaries: Array<InvocationStepSummary>;
  nextToken?: string;
}
export interface ListSessionsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSessionsResponse {
  sessionSummaries: Array<SessionSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaximumLength = number;

export type MaxResults = number;

export type MaxTokens = number;

export type Memories = Array<Memory>;
interface _Memory {
  sessionSummary?: MemorySessionSummary;
}

export type Memory = _Memory & { sessionSummary: MemorySessionSummary };
export type MemoryId = string;

export interface MemorySessionSummary {
  memoryId?: string;
  sessionId?: string;
  sessionStartTime?: Date | string;
  sessionExpiryTime?: Date | string;
  summaryText?: string;
}
export type MemoryType = "SESSION_SUMMARY";
export interface Message {
  role: ConversationRole;
  content: Array<ContentBlock>;
}
export type Messages = Array<Message>;
export interface Metadata {
  startTime?: Date | string;
  endTime?: Date | string;
  totalTimeMs?: number;
  operationTotalTimeMs?: number;
  clientRequestId?: string;
  usage?: Usage;
}
export interface MetadataAttributeSchema {
  key: string;
  type: AttributeType;
  description: string;
}
export type MetadataAttributeSchemaList = Array<MetadataAttributeSchema>;
export interface MetadataConfigurationForReranking {
  selectionMode: RerankingMetadataSelectionMode;
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration;
}
export type MimeType = string;

export type ModelIdentifier = string;

export interface ModelInvocationInput {
  traceId?: string;
  text?: string;
  type?: PromptType;
  overrideLambda?: string;
  promptCreationMode?: CreationMode;
  inferenceConfiguration?: InferenceConfiguration;
  parserMode?: CreationMode;
  foundationModel?: string;
}
export declare class ModelNotReadyException extends EffectData.TaggedError(
  "ModelNotReadyException",
)<{
  readonly message?: string;
}> {}
export interface ModelPerformanceConfiguration {
  performanceConfig?: PerformanceConfiguration;
}
export type Name = string;

export type NextToken = string;

export type NodeErrorCode =
  | "VALIDATION"
  | "DEPENDENCY_FAILED"
  | "BAD_GATEWAY"
  | "INTERNAL_SERVER";
interface _NodeExecutionContent {
  document?: unknown;
}

export type NodeExecutionContent = _NodeExecutionContent & {
  document: unknown;
};
export interface NodeFailureEvent {
  nodeName: string;
  timestamp: Date | string;
  errorCode: NodeErrorCode;
  errorMessage: string;
}
export interface NodeInputEvent {
  nodeName: string;
  timestamp: Date | string;
  fields: Array<NodeInputField>;
}
export interface NodeInputField {
  name: string;
  content: NodeExecutionContent;
}
export type NodeInputFields = Array<NodeInputField>;
export type NodeInputName = string;

export type NodeName = string;

export interface NodeOutputEvent {
  nodeName: string;
  timestamp: Date | string;
  fields: Array<NodeOutputField>;
}
export interface NodeOutputField {
  name: string;
  content: NodeExecutionContent;
}
export type NodeOutputFields = Array<NodeOutputField>;
export type NodeOutputName = string;

export type NodeType =
  | "FLOW_INPUT_NODE"
  | "FLOW_OUTPUT_NODE"
  | "LAMBDA_FUNCTION_NODE"
  | "KNOWLEDGE_BASE_NODE"
  | "PROMPT_NODE"
  | "CONDITION_NODE"
  | "LEX_NODE";
export type NonBlankString = string;

export interface Observation {
  traceId?: string;
  type?: Type;
  actionGroupInvocationOutput?: ActionGroupInvocationOutput;
  agentCollaboratorInvocationOutput?: AgentCollaboratorInvocationOutput;
  knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput;
  finalResponse?: FinalResponse;
  repromptResponse?: RepromptResponse;
  codeInterpreterInvocationOutput?: CodeInterpreterInvocationOutput;
}
interface _OptimizedPrompt {
  textPrompt?: TextPrompt;
}

export type OptimizedPrompt = _OptimizedPrompt & { textPrompt: TextPrompt };
export interface OptimizedPromptEvent {
  optimizedPrompt?: OptimizedPrompt;
}
interface _OptimizedPromptStream {
  optimizedPromptEvent?: OptimizedPromptEvent;
  analyzePromptEvent?: AnalyzePromptEvent;
  internalServerException?: InternalServerException;
  throttlingException?: ThrottlingException;
  validationException?: ValidationException;
  dependencyFailedException?: DependencyFailedException;
  accessDeniedException?: AccessDeniedException;
  badGatewayException?: BadGatewayException;
}

export type OptimizedPromptStream =
  | (_OptimizedPromptStream & { optimizedPromptEvent: OptimizedPromptEvent })
  | (_OptimizedPromptStream & { analyzePromptEvent: AnalyzePromptEvent })
  | (_OptimizedPromptStream & {
      internalServerException: InternalServerException;
    })
  | (_OptimizedPromptStream & { throttlingException: ThrottlingException })
  | (_OptimizedPromptStream & { validationException: ValidationException })
  | (_OptimizedPromptStream & {
      dependencyFailedException: DependencyFailedException;
    })
  | (_OptimizedPromptStream & { accessDeniedException: AccessDeniedException })
  | (_OptimizedPromptStream & { badGatewayException: BadGatewayException });
export interface OptimizePromptRequest {
  input: InputPrompt;
  targetModelId: string;
}
export interface OptimizePromptResponse {
  optimizedPrompt: OptimizedPromptStream;
}
export interface OrchestrationConfiguration {
  promptTemplate?: PromptTemplate;
  inferenceConfig?: InferenceConfig;
  additionalModelRequestFields?: Record<string, unknown>;
  queryTransformationConfiguration?: QueryTransformationConfiguration;
  performanceConfig?: PerformanceConfiguration;
}
interface _OrchestrationExecutor {
  lambda?: string;
}

export type OrchestrationExecutor = _OrchestrationExecutor & { lambda: string };
export interface OrchestrationModelInvocationOutput {
  traceId?: string;
  rawResponse?: RawResponse;
  metadata?: Metadata;
  reasoningContent?: ReasoningContentBlock;
}
interface _OrchestrationTrace {
  rationale?: Rationale;
  invocationInput?: InvocationInput;
  observation?: Observation;
  modelInvocationInput?: ModelInvocationInput;
  modelInvocationOutput?: OrchestrationModelInvocationOutput;
}

export type OrchestrationTrace =
  | (_OrchestrationTrace & { rationale: Rationale })
  | (_OrchestrationTrace & { invocationInput: InvocationInput })
  | (_OrchestrationTrace & { observation: Observation })
  | (_OrchestrationTrace & { modelInvocationInput: ModelInvocationInput })
  | (_OrchestrationTrace & {
      modelInvocationOutput: OrchestrationModelInvocationOutput;
    });
export type OrchestrationType = "DEFAULT" | "CUSTOM_ORCHESTRATION";
export interface OutputFile {
  name?: string;
  type?: string;
  bytes?: Uint8Array | string;
}
export type OutputFiles = Array<OutputFile>;
export type OutputString = string;

export interface Parameter {
  name?: string;
  type?: string;
  value?: string;
}
export type ParameterDescription = string;

export interface ParameterDetail {
  description?: string;
  type: ParameterType;
  required?: boolean;
}
export type ParameterList = Array<Parameter>;
export type ParameterMap = Record<string, ParameterDetail>;
export type ParameterName = string;

export type Parameters = Array<Parameter>;
export type ParameterType =
  | "STRING"
  | "NUMBER"
  | "INTEGER"
  | "BOOLEAN"
  | "ARRAY";
export type PartBody = Uint8Array | string;

export type Payload = string;

export interface PayloadPart {
  bytes?: Uint8Array | string;
  attribution?: Attribution;
}
export type PayloadType = "TEXT" | "RETURN_CONTROL";
export type PerformanceConfigLatency = "STANDARD" | "OPTIMIZED";
export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
export interface PostProcessingModelInvocationOutput {
  traceId?: string;
  parsedResponse?: PostProcessingParsedResponse;
  rawResponse?: RawResponse;
  metadata?: Metadata;
  reasoningContent?: ReasoningContentBlock;
}
export interface PostProcessingParsedResponse {
  text?: string;
}
interface _PostProcessingTrace {
  modelInvocationInput?: ModelInvocationInput;
  modelInvocationOutput?: PostProcessingModelInvocationOutput;
}

export type PostProcessingTrace =
  | (_PostProcessingTrace & { modelInvocationInput: ModelInvocationInput })
  | (_PostProcessingTrace & {
      modelInvocationOutput: PostProcessingModelInvocationOutput;
    });
export interface PreProcessingModelInvocationOutput {
  traceId?: string;
  parsedResponse?: PreProcessingParsedResponse;
  rawResponse?: RawResponse;
  metadata?: Metadata;
  reasoningContent?: ReasoningContentBlock;
}
export interface PreProcessingParsedResponse {
  rationale?: string;
  isValid?: boolean;
}
interface _PreProcessingTrace {
  modelInvocationInput?: ModelInvocationInput;
  modelInvocationOutput?: PreProcessingModelInvocationOutput;
}

export type PreProcessingTrace =
  | (_PreProcessingTrace & { modelInvocationInput: ModelInvocationInput })
  | (_PreProcessingTrace & {
      modelInvocationOutput: PreProcessingModelInvocationOutput;
    });
export interface PromptConfiguration {
  promptType?: PromptType;
  promptCreationMode?: CreationMode;
  promptState?: PromptState;
  basePromptTemplate?: string;
  inferenceConfiguration?: InferenceConfiguration;
  parserMode?: CreationMode;
  foundationModel?: string;
  additionalModelRequestFields?: unknown;
}
export type PromptConfigurations = Array<PromptConfiguration>;
export interface PromptCreationConfigurations {
  previousConversationTurnsToInclude?: number;
  excludePreviousThinkingSteps?: boolean;
}
export interface PromptOverrideConfiguration {
  promptConfigurations: Array<PromptConfiguration>;
  overrideLambda?: string;
}
export type PromptSessionAttributesMap = Record<string, string>;
export type PromptState = "ENABLED" | "DISABLED";
export interface PromptTemplate {
  textPromptTemplate?: string;
}
export type PromptText = string;

export type PromptType =
  | "PRE_PROCESSING"
  | "ORCHESTRATION"
  | "KNOWLEDGE_BASE_RESPONSE_GENERATION"
  | "POST_PROCESSING"
  | "ROUTING_CLASSIFIER";
export interface PropertyParameters {
  properties?: Array<Parameter>;
}
export interface PutInvocationStepRequest {
  sessionIdentifier: string;
  invocationIdentifier: string;
  invocationStepTime: Date | string;
  payload: InvocationStepPayload;
  invocationStepId?: string;
}
export interface PutInvocationStepResponse {
  invocationStepId: string;
}
export interface QueryGenerationInput {
  type: InputQueryType;
  text: string;
}
export interface QueryTransformationConfiguration {
  type: QueryTransformationType;
}
export type QueryTransformationMode = "TEXT_TO_SQL";
export type QueryTransformationType = "QUERY_DECOMPOSITION";
export type RAGStopSequences = Array<string>;
export interface Rationale {
  traceId?: string;
  text?: string;
}
export type RationaleString = string;

export interface RawResponse {
  content?: string;
}
interface _ReasoningContentBlock {
  reasoningText?: ReasoningTextBlock;
  redactedContent?: Uint8Array | string;
}

export type ReasoningContentBlock =
  | (_ReasoningContentBlock & { reasoningText: ReasoningTextBlock })
  | (_ReasoningContentBlock & { redactedContent: Uint8Array | string });
export interface ReasoningTextBlock {
  text: string;
  signature?: string;
}
export type RelayConversationHistory = "TO_COLLABORATOR" | "DISABLED";
export interface RepromptResponse {
  text?: string;
  source?: Source;
}
export interface RequestBody {
  content?: Record<string, Array<Parameter>>;
}
export type RequireConfirmation = "ENABLED" | "DISABLED";
export interface RerankDocument {
  type: RerankDocumentType;
  textDocument?: RerankTextDocument;
  jsonDocument?: unknown;
}
export type RerankDocumentType = "TEXT" | "JSON";
export interface RerankingConfiguration {
  type: RerankingConfigurationType;
  bedrockRerankingConfiguration: BedrockRerankingConfiguration;
}
export type RerankingConfigurationType = "BEDROCK_RERANKING_MODEL";
export type RerankingMetadataSelectionMode = "SELECTIVE" | "ALL";
interface _RerankingMetadataSelectiveModeConfiguration {
  fieldsToInclude?: Array<FieldForReranking>;
  fieldsToExclude?: Array<FieldForReranking>;
}

export type RerankingMetadataSelectiveModeConfiguration =
  | (_RerankingMetadataSelectiveModeConfiguration & {
      fieldsToInclude: Array<FieldForReranking>;
    })
  | (_RerankingMetadataSelectiveModeConfiguration & {
      fieldsToExclude: Array<FieldForReranking>;
    });
export type RerankQueriesList = Array<RerankQuery>;
export interface RerankQuery {
  type: RerankQueryContentType;
  textQuery: RerankTextDocument;
}
export type RerankQueryContentType = "TEXT";
export interface RerankRequest {
  queries: Array<RerankQuery>;
  sources: Array<RerankSource>;
  rerankingConfiguration: RerankingConfiguration;
  nextToken?: string;
}
export interface RerankResponse {
  results: Array<RerankResult>;
  nextToken?: string;
}
export interface RerankResult {
  index: number;
  relevanceScore: number;
  document?: RerankDocument;
}
export type RerankResultsList = Array<RerankResult>;
export interface RerankSource {
  type: RerankSourceType;
  inlineDocumentSource: RerankDocument;
}
export type RerankSourcesList = Array<RerankSource>;
export type RerankSourceType = "INLINE";
export interface RerankTextDocument {
  text?: string;
}
export type ResourceDescription = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResponseBody = Record<string, ContentBody>;
export type ResponseState = "FAILURE" | "REPROMPT";
interface _ResponseStream {
  chunk?: PayloadPart;
  trace?: TracePart;
  returnControl?: ReturnControlPayload;
  internalServerException?: InternalServerException;
  validationException?: ValidationException;
  resourceNotFoundException?: ResourceNotFoundException;
  serviceQuotaExceededException?: ServiceQuotaExceededException;
  throttlingException?: ThrottlingException;
  accessDeniedException?: AccessDeniedException;
  conflictException?: ConflictException;
  dependencyFailedException?: DependencyFailedException;
  badGatewayException?: BadGatewayException;
  modelNotReadyException?: ModelNotReadyException;
  files?: FilePart;
}

export type ResponseStream =
  | (_ResponseStream & { chunk: PayloadPart })
  | (_ResponseStream & { trace: TracePart })
  | (_ResponseStream & { returnControl: ReturnControlPayload })
  | (_ResponseStream & { internalServerException: InternalServerException })
  | (_ResponseStream & { validationException: ValidationException })
  | (_ResponseStream & { resourceNotFoundException: ResourceNotFoundException })
  | (_ResponseStream & {
      serviceQuotaExceededException: ServiceQuotaExceededException;
    })
  | (_ResponseStream & { throttlingException: ThrottlingException })
  | (_ResponseStream & { accessDeniedException: AccessDeniedException })
  | (_ResponseStream & { conflictException: ConflictException })
  | (_ResponseStream & { dependencyFailedException: DependencyFailedException })
  | (_ResponseStream & { badGatewayException: BadGatewayException })
  | (_ResponseStream & { modelNotReadyException: ModelNotReadyException })
  | (_ResponseStream & { files: FilePart });
interface _RetrievalFilter {
  equals?: FilterAttribute;
  notEquals?: FilterAttribute;
  greaterThan?: FilterAttribute;
  greaterThanOrEquals?: FilterAttribute;
  lessThan?: FilterAttribute;
  lessThanOrEquals?: FilterAttribute;
  in?: FilterAttribute;
  notIn?: FilterAttribute;
  startsWith?: FilterAttribute;
  listContains?: FilterAttribute;
  stringContains?: FilterAttribute;
  andAll?: Array<RetrievalFilter>;
  orAll?: Array<RetrievalFilter>;
}

export type RetrievalFilter =
  | (_RetrievalFilter & { equals: FilterAttribute })
  | (_RetrievalFilter & { notEquals: FilterAttribute })
  | (_RetrievalFilter & { greaterThan: FilterAttribute })
  | (_RetrievalFilter & { greaterThanOrEquals: FilterAttribute })
  | (_RetrievalFilter & { lessThan: FilterAttribute })
  | (_RetrievalFilter & { lessThanOrEquals: FilterAttribute })
  | (_RetrievalFilter & { in: FilterAttribute })
  | (_RetrievalFilter & { notIn: FilterAttribute })
  | (_RetrievalFilter & { startsWith: FilterAttribute })
  | (_RetrievalFilter & { listContains: FilterAttribute })
  | (_RetrievalFilter & { stringContains: FilterAttribute })
  | (_RetrievalFilter & { andAll: Array<RetrievalFilter> })
  | (_RetrievalFilter & { orAll: Array<RetrievalFilter> });
export type RetrievalFilterList = Array<RetrievalFilter>;
export interface RetrievalResultConfluenceLocation {
  url?: string;
}
export interface RetrievalResultContent {
  type?: RetrievalResultContentType;
  text?: string;
  byteContent?: string;
  row?: Array<RetrievalResultContentColumn>;
}
export interface RetrievalResultContentColumn {
  columnName?: string;
  columnValue?: string;
  type?: RetrievalResultContentColumnType;
}
export type RetrievalResultContentColumnType =
  | "BLOB"
  | "BOOLEAN"
  | "DOUBLE"
  | "NULL"
  | "LONG"
  | "STRING";
export type RetrievalResultContentRow = Array<RetrievalResultContentColumn>;
export type RetrievalResultContentType = "TEXT" | "IMAGE" | "ROW";
export interface RetrievalResultCustomDocumentLocation {
  id?: string;
}
export interface RetrievalResultKendraDocumentLocation {
  uri?: string;
}
export interface RetrievalResultLocation {
  type: RetrievalResultLocationType;
  s3Location?: RetrievalResultS3Location;
  webLocation?: RetrievalResultWebLocation;
  confluenceLocation?: RetrievalResultConfluenceLocation;
  salesforceLocation?: RetrievalResultSalesforceLocation;
  sharePointLocation?: RetrievalResultSharePointLocation;
  customDocumentLocation?: RetrievalResultCustomDocumentLocation;
  kendraDocumentLocation?: RetrievalResultKendraDocumentLocation;
  sqlLocation?: RetrievalResultSqlLocation;
}
export type RetrievalResultLocationType =
  | "S3"
  | "WEB"
  | "CONFLUENCE"
  | "SALESFORCE"
  | "SHAREPOINT"
  | "CUSTOM"
  | "KENDRA"
  | "SQL";
export type RetrievalResultMetadata = Record<string, unknown>;
export type RetrievalResultMetadataKey = string;

export type RetrievalResultMetadataValue = unknown;

export interface RetrievalResultS3Location {
  uri?: string;
}
export interface RetrievalResultSalesforceLocation {
  url?: string;
}
export interface RetrievalResultSharePointLocation {
  url?: string;
}
export interface RetrievalResultSqlLocation {
  query?: string;
}
export interface RetrievalResultWebLocation {
  url?: string;
}
export interface RetrieveAndGenerateConfiguration {
  type: RetrieveAndGenerateType;
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration;
  externalSourcesConfiguration?: ExternalSourcesRetrieveAndGenerateConfiguration;
}
export interface RetrieveAndGenerateInput {
  text: string;
}
export interface RetrieveAndGenerateOutput {
  text: string;
}
export interface RetrieveAndGenerateOutputEvent {
  text: string;
}
export interface RetrieveAndGenerateRequest {
  sessionId?: string;
  input: RetrieveAndGenerateInput;
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
}
export interface RetrieveAndGenerateResponse {
  sessionId: string;
  output: RetrieveAndGenerateOutput;
  citations?: Array<Citation>;
  guardrailAction?: GuadrailAction;
}
export interface RetrieveAndGenerateSessionConfiguration {
  kmsKeyArn: string;
}
export interface RetrieveAndGenerateStreamRequest {
  sessionId?: string;
  input: RetrieveAndGenerateInput;
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
}
export interface RetrieveAndGenerateStreamResponse {
  stream: RetrieveAndGenerateStreamResponseOutput;
  sessionId: string;
}
interface _RetrieveAndGenerateStreamResponseOutput {
  output?: RetrieveAndGenerateOutputEvent;
  citation?: CitationEvent;
  guardrail?: GuardrailEvent;
  internalServerException?: InternalServerException;
  validationException?: ValidationException;
  resourceNotFoundException?: ResourceNotFoundException;
  serviceQuotaExceededException?: ServiceQuotaExceededException;
  throttlingException?: ThrottlingException;
  accessDeniedException?: AccessDeniedException;
  conflictException?: ConflictException;
  dependencyFailedException?: DependencyFailedException;
  badGatewayException?: BadGatewayException;
}

export type RetrieveAndGenerateStreamResponseOutput =
  | (_RetrieveAndGenerateStreamResponseOutput & {
      output: RetrieveAndGenerateOutputEvent;
    })
  | (_RetrieveAndGenerateStreamResponseOutput & { citation: CitationEvent })
  | (_RetrieveAndGenerateStreamResponseOutput & { guardrail: GuardrailEvent })
  | (_RetrieveAndGenerateStreamResponseOutput & {
      internalServerException: InternalServerException;
    })
  | (_RetrieveAndGenerateStreamResponseOutput & {
      validationException: ValidationException;
    })
  | (_RetrieveAndGenerateStreamResponseOutput & {
      resourceNotFoundException: ResourceNotFoundException;
    })
  | (_RetrieveAndGenerateStreamResponseOutput & {
      serviceQuotaExceededException: ServiceQuotaExceededException;
    })
  | (_RetrieveAndGenerateStreamResponseOutput & {
      throttlingException: ThrottlingException;
    })
  | (_RetrieveAndGenerateStreamResponseOutput & {
      accessDeniedException: AccessDeniedException;
    })
  | (_RetrieveAndGenerateStreamResponseOutput & {
      conflictException: ConflictException;
    })
  | (_RetrieveAndGenerateStreamResponseOutput & {
      dependencyFailedException: DependencyFailedException;
    })
  | (_RetrieveAndGenerateStreamResponseOutput & {
      badGatewayException: BadGatewayException;
    });
export type RetrieveAndGenerateType = "KNOWLEDGE_BASE" | "EXTERNAL_SOURCES";
export interface RetrievedReference {
  content?: RetrievalResultContent;
  location?: RetrievalResultLocation;
  metadata?: Record<string, unknown>;
}
export type RetrievedReferences = Array<RetrievedReference>;
export interface RetrieveRequest {
  knowledgeBaseId: string;
  retrievalQuery: KnowledgeBaseQuery;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  nextToken?: string;
}
export interface RetrieveResponse {
  retrievalResults: Array<KnowledgeBaseRetrievalResult>;
  guardrailAction?: GuadrailAction;
  nextToken?: string;
}
export type ReturnControlInvocationResults = Array<InvocationResultMember>;
export interface ReturnControlPayload {
  invocationInputs?: Array<InvocationInputMember>;
  invocationId?: string;
}
export interface ReturnControlResults {
  invocationId?: string;
  returnControlInvocationResults?: Array<InvocationResultMember>;
}
export interface RoutingClassifierModelInvocationOutput {
  traceId?: string;
  rawResponse?: RawResponse;
  metadata?: Metadata;
}
interface _RoutingClassifierTrace {
  invocationInput?: InvocationInput;
  observation?: Observation;
  modelInvocationInput?: ModelInvocationInput;
  modelInvocationOutput?: RoutingClassifierModelInvocationOutput;
}

export type RoutingClassifierTrace =
  | (_RoutingClassifierTrace & { invocationInput: InvocationInput })
  | (_RoutingClassifierTrace & { observation: Observation })
  | (_RoutingClassifierTrace & { modelInvocationInput: ModelInvocationInput })
  | (_RoutingClassifierTrace & {
      modelInvocationOutput: RoutingClassifierModelInvocationOutput;
    });
export type S3BucketName = string;

export interface S3Identifier {
  s3BucketName?: string;
  s3ObjectKey?: string;
}
export interface S3Location {
  uri: string;
}
export interface S3ObjectDoc {
  uri: string;
}
export interface S3ObjectFile {
  uri: string;
}
export type S3ObjectKey = string;

export type S3Uri = string;

export interface SatisfiedCondition {
  conditionName: string;
}
export type SatisfiedConditions = Array<SatisfiedCondition>;
export type SearchType = "HYBRID" | "SEMANTIC";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type SessionArn = string;

export type SessionAttributesMap = Record<string, string>;
export type SessionId = string;

export type SessionIdentifier = string;

export type SessionMetadataKey = string;

export type SessionMetadataMap = Record<string, string>;
export type SessionMetadataValue = string;

export interface SessionState {
  sessionAttributes?: Record<string, string>;
  promptSessionAttributes?: Record<string, string>;
  returnControlInvocationResults?: Array<InvocationResultMember>;
  invocationId?: string;
  files?: Array<InputFile>;
  knowledgeBaseConfigurations?: Array<KnowledgeBaseConfiguration>;
  conversationHistory?: ConversationHistory;
}
export type SessionStatus = "ACTIVE" | "EXPIRED" | "ENDED";
export type SessionSummaries = Array<SessionSummary>;
export interface SessionSummary {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export type SessionTTL = number;

export type Source = "ACTION_GROUP" | "KNOWLEDGE_BASE" | "PARSER";
export interface Span {
  start?: number;
  end?: number;
}
export interface StartFlowExecutionRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  flowExecutionName?: string;
  inputs: Array<FlowInput>;
  modelPerformanceConfiguration?: ModelPerformanceConfiguration;
}
export interface StartFlowExecutionResponse {
  executionArn?: string;
}
export interface StopFlowExecutionRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
}
export interface StopFlowExecutionResponse {
  executionArn?: string;
  status: FlowExecutionStatus;
}
export type StopSequences = Array<string>;
export interface StreamingConfigurations {
  streamFinalResponse?: boolean;
  applyGuardrailInterval?: number;
}
export type SummaryText = string;

export type TaggableResourcesArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagsMap = Record<string, string>;
export type TagValue = string;

export type Temperature = number;

export interface TextInferenceConfig {
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  stopSequences?: Array<string>;
}
export interface TextPrompt {
  text: string;
}
export type TextPromptTemplate = string;

export interface TextResponsePart {
  text?: string;
  span?: Span;
}
export interface TextToSqlConfiguration {
  type: TextToSqlConfigurationType;
  knowledgeBaseConfiguration?: TextToSqlKnowledgeBaseConfiguration;
}
export type TextToSqlConfigurationType = "KNOWLEDGE_BASE";
export interface TextToSqlKnowledgeBaseConfiguration {
  knowledgeBaseArn: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TopK = number;

export type TopP = number;

interface _Trace {
  guardrailTrace?: GuardrailTrace;
  preProcessingTrace?: PreProcessingTrace;
  orchestrationTrace?: OrchestrationTrace;
  postProcessingTrace?: PostProcessingTrace;
  routingClassifierTrace?: RoutingClassifierTrace;
  failureTrace?: FailureTrace;
  customOrchestrationTrace?: CustomOrchestrationTrace;
}

export type Trace =
  | (_Trace & { guardrailTrace: GuardrailTrace })
  | (_Trace & { preProcessingTrace: PreProcessingTrace })
  | (_Trace & { orchestrationTrace: OrchestrationTrace })
  | (_Trace & { postProcessingTrace: PostProcessingTrace })
  | (_Trace & { routingClassifierTrace: RoutingClassifierTrace })
  | (_Trace & { failureTrace: FailureTrace })
  | (_Trace & { customOrchestrationTrace: CustomOrchestrationTrace });
export type TraceId = string;

export type TraceKnowledgeBaseId = string;

export interface TracePart {
  sessionId?: string;
  trace?: Trace;
  callerChain?: Array<Caller>;
  eventTime?: Date | string;
  collaboratorName?: string;
  agentId?: string;
  agentAliasId?: string;
  agentVersion?: string;
}
export interface TransformationConfiguration {
  mode: QueryTransformationMode;
  textToSqlConfiguration?: TextToSqlConfiguration;
}
export type Type =
  | "ACTION_GROUP"
  | "AGENT_COLLABORATOR"
  | "KNOWLEDGE_BASE"
  | "FINISH"
  | "ASK_USER"
  | "REPROMPT";
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateSessionRequest {
  sessionMetadata?: Record<string, string>;
  sessionIdentifier: string;
}
export interface UpdateSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface Usage {
  inputTokens?: number;
  outputTokens?: number;
}
export type Uuid = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface VectorSearchBedrockRerankingConfiguration {
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration;
  numberOfRerankedResults?: number;
  metadataConfiguration?: MetadataConfigurationForReranking;
}
export interface VectorSearchBedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: Record<string, unknown>;
}
export interface VectorSearchRerankingConfiguration {
  type: VectorSearchRerankingConfigurationType;
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration;
}
export type VectorSearchRerankingConfigurationType = "BEDROCK_RERANKING_MODEL";
export type Verb = string;

export type Version = string;

export declare namespace CreateInvocation {
  export type Input = CreateInvocationRequest;
  export type Output = CreateInvocationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSession {
  export type Input = CreateSessionRequest;
  export type Output = CreateSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAgentMemory {
  export type Input = DeleteAgentMemoryRequest;
  export type Output = DeleteAgentMemoryResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

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

export declare namespace EndSession {
  export type Input = EndSessionRequest;
  export type Output = EndSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GenerateQuery {
  export type Input = GenerateQueryRequest;
  export type Output = GenerateQueryResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAgentMemory {
  export type Input = GetAgentMemoryRequest;
  export type Output = GetAgentMemoryResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExecutionFlowSnapshot {
  export type Input = GetExecutionFlowSnapshotRequest;
  export type Output = GetExecutionFlowSnapshotResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFlowExecution {
  export type Input = GetFlowExecutionRequest;
  export type Output = GetFlowExecutionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInvocationStep {
  export type Input = GetInvocationStepRequest;
  export type Output = GetInvocationStepResponse;
  export type Error =
    | AccessDeniedException
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

export declare namespace InvokeAgent {
  export type Input = InvokeAgentRequest;
  export type Output = InvokeAgentResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ModelNotReadyException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InvokeFlow {
  export type Input = InvokeFlowRequest;
  export type Output = InvokeFlowResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InvokeInlineAgent {
  export type Input = InvokeInlineAgentRequest;
  export type Output = InvokeInlineAgentResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFlowExecutionEvents {
  export type Input = ListFlowExecutionEventsRequest;
  export type Output = ListFlowExecutionEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFlowExecutions {
  export type Input = ListFlowExecutionsRequest;
  export type Output = ListFlowExecutionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInvocationSteps {
  export type Input = ListInvocationStepsRequest;
  export type Output = ListInvocationStepsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInvocations {
  export type Input = ListInvocationsRequest;
  export type Output = ListInvocationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSessions {
  export type Input = ListSessionsRequest;
  export type Output = ListSessionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace OptimizePrompt {
  export type Input = OptimizePromptRequest;
  export type Output = OptimizePromptResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | DependencyFailedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutInvocationStep {
  export type Input = PutInvocationStepRequest;
  export type Output = PutInvocationStepResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Rerank {
  export type Input = RerankRequest;
  export type Output = RerankResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Retrieve {
  export type Input = RetrieveRequest;
  export type Output = RetrieveResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RetrieveAndGenerate {
  export type Input = RetrieveAndGenerateRequest;
  export type Output = RetrieveAndGenerateResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RetrieveAndGenerateStream {
  export type Input = RetrieveAndGenerateStreamRequest;
  export type Output = RetrieveAndGenerateStreamResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartFlowExecution {
  export type Input = StartFlowExecutionRequest;
  export type Output = StartFlowExecutionResponse;
  export type Error =
    | AccessDeniedException
    | BadGatewayException
    | ConflictException
    | DependencyFailedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopFlowExecution {
  export type Input = StopFlowExecutionRequest;
  export type Output = StopFlowExecutionResponse;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSession {
  export type Input = UpdateSessionRequest;
  export type Output = UpdateSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
