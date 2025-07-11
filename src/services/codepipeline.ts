import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface CodePipeline_20150709 {
  acknowledgeJob(
    input: AcknowledgeJobInput,
  ): Effect.Effect<
    AcknowledgeJobOutput,
    InvalidNonceException | JobNotFoundException | ValidationException | CommonAwsError
  >;
  acknowledgeThirdPartyJob(
    input: AcknowledgeThirdPartyJobInput,
  ): Effect.Effect<
    AcknowledgeThirdPartyJobOutput,
    InvalidClientTokenException | InvalidNonceException | JobNotFoundException | ValidationException | CommonAwsError
  >;
  createCustomActionType(
    input: CreateCustomActionTypeInput,
  ): Effect.Effect<
    CreateCustomActionTypeOutput,
    ConcurrentModificationException | InvalidTagsException | LimitExceededException | TooManyTagsException | ValidationException | CommonAwsError
  >;
  createPipeline(
    input: CreatePipelineInput,
  ): Effect.Effect<
    CreatePipelineOutput,
    ConcurrentModificationException | InvalidActionDeclarationException | InvalidBlockerDeclarationException | InvalidStageDeclarationException | InvalidStructureException | InvalidTagsException | LimitExceededException | PipelineNameInUseException | TooManyTagsException | ValidationException | CommonAwsError
  >;
  deleteCustomActionType(
    input: DeleteCustomActionTypeInput,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | ValidationException | CommonAwsError
  >;
  deletePipeline(
    input: DeletePipelineInput,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | ValidationException | CommonAwsError
  >;
  deleteWebhook(
    input: DeleteWebhookInput,
  ): Effect.Effect<
    DeleteWebhookOutput,
    ConcurrentModificationException | ValidationException | CommonAwsError
  >;
  deregisterWebhookWithThirdParty(
    input: DeregisterWebhookWithThirdPartyInput,
  ): Effect.Effect<
    DeregisterWebhookWithThirdPartyOutput,
    ValidationException | WebhookNotFoundException | CommonAwsError
  >;
  disableStageTransition(
    input: DisableStageTransitionInput,
  ): Effect.Effect<
    {},
    PipelineNotFoundException | StageNotFoundException | ValidationException | CommonAwsError
  >;
  enableStageTransition(
    input: EnableStageTransitionInput,
  ): Effect.Effect<
    {},
    PipelineNotFoundException | StageNotFoundException | ValidationException | CommonAwsError
  >;
  getActionType(
    input: GetActionTypeInput,
  ): Effect.Effect<
    GetActionTypeOutput,
    ActionTypeNotFoundException | ValidationException | CommonAwsError
  >;
  getJobDetails(
    input: GetJobDetailsInput,
  ): Effect.Effect<
    GetJobDetailsOutput,
    JobNotFoundException | ValidationException | CommonAwsError
  >;
  getPipeline(
    input: GetPipelineInput,
  ): Effect.Effect<
    GetPipelineOutput,
    PipelineNotFoundException | PipelineVersionNotFoundException | ValidationException | CommonAwsError
  >;
  getPipelineExecution(
    input: GetPipelineExecutionInput,
  ): Effect.Effect<
    GetPipelineExecutionOutput,
    PipelineExecutionNotFoundException | PipelineNotFoundException | ValidationException | CommonAwsError
  >;
  getPipelineState(
    input: GetPipelineStateInput,
  ): Effect.Effect<
    GetPipelineStateOutput,
    PipelineNotFoundException | ValidationException | CommonAwsError
  >;
  getThirdPartyJobDetails(
    input: GetThirdPartyJobDetailsInput,
  ): Effect.Effect<
    GetThirdPartyJobDetailsOutput,
    InvalidClientTokenException | InvalidJobException | JobNotFoundException | ValidationException | CommonAwsError
  >;
  listActionExecutions(
    input: ListActionExecutionsInput,
  ): Effect.Effect<
    ListActionExecutionsOutput,
    InvalidNextTokenException | PipelineExecutionNotFoundException | PipelineNotFoundException | ValidationException | CommonAwsError
  >;
  listActionTypes(
    input: ListActionTypesInput,
  ): Effect.Effect<
    ListActionTypesOutput,
    InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  listDeployActionExecutionTargets(
    input: ListDeployActionExecutionTargetsInput,
  ): Effect.Effect<
    ListDeployActionExecutionTargetsOutput,
    ActionExecutionNotFoundException | InvalidNextTokenException | PipelineNotFoundException | ValidationException | CommonAwsError
  >;
  listPipelineExecutions(
    input: ListPipelineExecutionsInput,
  ): Effect.Effect<
    ListPipelineExecutionsOutput,
    InvalidNextTokenException | PipelineNotFoundException | ValidationException | CommonAwsError
  >;
  listPipelines(
    input: ListPipelinesInput,
  ): Effect.Effect<
    ListPipelinesOutput,
    InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  listRuleExecutions(
    input: ListRuleExecutionsInput,
  ): Effect.Effect<
    ListRuleExecutionsOutput,
    InvalidNextTokenException | PipelineExecutionNotFoundException | PipelineNotFoundException | ValidationException | CommonAwsError
  >;
  listRuleTypes(
    input: ListRuleTypesInput,
  ): Effect.Effect<
    ListRuleTypesOutput,
    InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    InvalidArnException | InvalidNextTokenException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listWebhooks(
    input: ListWebhooksInput,
  ): Effect.Effect<
    ListWebhooksOutput,
    InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  overrideStageCondition(
    input: OverrideStageConditionInput,
  ): Effect.Effect<
    {},
    ConcurrentPipelineExecutionsLimitExceededException | ConditionNotOverridableException | ConflictException | NotLatestPipelineExecutionException | PipelineNotFoundException | StageNotFoundException | ValidationException | CommonAwsError
  >;
  pollForJobs(
    input: PollForJobsInput,
  ): Effect.Effect<
    PollForJobsOutput,
    ActionTypeNotFoundException | ValidationException | CommonAwsError
  >;
  pollForThirdPartyJobs(
    input: PollForThirdPartyJobsInput,
  ): Effect.Effect<
    PollForThirdPartyJobsOutput,
    ActionTypeNotFoundException | ValidationException | CommonAwsError
  >;
  putActionRevision(
    input: PutActionRevisionInput,
  ): Effect.Effect<
    PutActionRevisionOutput,
    ActionNotFoundException | ConcurrentPipelineExecutionsLimitExceededException | PipelineNotFoundException | StageNotFoundException | ValidationException | CommonAwsError
  >;
  putApprovalResult(
    input: PutApprovalResultInput,
  ): Effect.Effect<
    PutApprovalResultOutput,
    ActionNotFoundException | ApprovalAlreadyCompletedException | InvalidApprovalTokenException | PipelineNotFoundException | StageNotFoundException | ValidationException | CommonAwsError
  >;
  putJobFailureResult(
    input: PutJobFailureResultInput,
  ): Effect.Effect<
    {},
    InvalidJobStateException | JobNotFoundException | ValidationException | CommonAwsError
  >;
  putJobSuccessResult(
    input: PutJobSuccessResultInput,
  ): Effect.Effect<
    {},
    InvalidJobStateException | JobNotFoundException | OutputVariablesSizeExceededException | ValidationException | CommonAwsError
  >;
  putThirdPartyJobFailureResult(
    input: PutThirdPartyJobFailureResultInput,
  ): Effect.Effect<
    {},
    InvalidClientTokenException | InvalidJobStateException | JobNotFoundException | ValidationException | CommonAwsError
  >;
  putThirdPartyJobSuccessResult(
    input: PutThirdPartyJobSuccessResultInput,
  ): Effect.Effect<
    {},
    InvalidClientTokenException | InvalidJobStateException | JobNotFoundException | ValidationException | CommonAwsError
  >;
  putWebhook(
    input: PutWebhookInput,
  ): Effect.Effect<
    PutWebhookOutput,
    ConcurrentModificationException | InvalidTagsException | InvalidWebhookAuthenticationParametersException | InvalidWebhookFilterPatternException | LimitExceededException | PipelineNotFoundException | TooManyTagsException | ValidationException | CommonAwsError
  >;
  registerWebhookWithThirdParty(
    input: RegisterWebhookWithThirdPartyInput,
  ): Effect.Effect<
    RegisterWebhookWithThirdPartyOutput,
    ValidationException | WebhookNotFoundException | CommonAwsError
  >;
  retryStageExecution(
    input: RetryStageExecutionInput,
  ): Effect.Effect<
    RetryStageExecutionOutput,
    ConcurrentPipelineExecutionsLimitExceededException | ConflictException | NotLatestPipelineExecutionException | PipelineNotFoundException | StageNotFoundException | StageNotRetryableException | ValidationException | CommonAwsError
  >;
  rollbackStage(
    input: RollbackStageInput,
  ): Effect.Effect<
    RollbackStageOutput,
    ConflictException | PipelineExecutionNotFoundException | PipelineExecutionOutdatedException | PipelineNotFoundException | StageNotFoundException | UnableToRollbackStageException | ValidationException | CommonAwsError
  >;
  startPipelineExecution(
    input: StartPipelineExecutionInput,
  ): Effect.Effect<
    StartPipelineExecutionOutput,
    ConcurrentPipelineExecutionsLimitExceededException | ConflictException | PipelineNotFoundException | ValidationException | CommonAwsError
  >;
  stopPipelineExecution(
    input: StopPipelineExecutionInput,
  ): Effect.Effect<
    StopPipelineExecutionOutput,
    ConflictException | DuplicatedStopRequestException | PipelineExecutionNotStoppableException | PipelineNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    ConcurrentModificationException | InvalidArnException | InvalidTagsException | ResourceNotFoundException | TooManyTagsException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    ConcurrentModificationException | InvalidArnException | InvalidTagsException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateActionType(
    input: UpdateActionTypeInput,
  ): Effect.Effect<
    {},
    ActionTypeNotFoundException | RequestFailedException | ValidationException | CommonAwsError
  >;
  updatePipeline(
    input: UpdatePipelineInput,
  ): Effect.Effect<
    UpdatePipelineOutput,
    InvalidActionDeclarationException | InvalidBlockerDeclarationException | InvalidStageDeclarationException | InvalidStructureException | LimitExceededException | ValidationException | CommonAwsError
  >;
}

export type Codepipeline = CodePipeline_20150709;

export type AccessKeyId = string;

export type AccountId = string;

export interface AcknowledgeJobInput {
  jobId: string;
  nonce: string;
}
export interface AcknowledgeJobOutput {
  status?: JobStatus;
}
export interface AcknowledgeThirdPartyJobInput {
  jobId: string;
  nonce: string;
  clientToken: string;
}
export interface AcknowledgeThirdPartyJobOutput {
  status?: JobStatus;
}
export type ActionCategory = "Source" | "Build" | "Deploy" | "Test" | "Invoke" | "Approval" | "Compute";
export interface ActionConfiguration {
  configuration?: Record<string, string>;
}
export type ActionConfigurationKey = string;

export type ActionConfigurationMap = Record<string, string>;
export interface ActionConfigurationProperty {
  name: string;
  required: boolean;
  key: boolean;
  secret: boolean;
  queryable?: boolean;
  description?: string;
  type?: ActionConfigurationPropertyType;
}
export type ActionConfigurationPropertyList = Array<ActionConfigurationProperty>;
export type ActionConfigurationPropertyType = "String" | "Number" | "Boolean";
export type ActionConfigurationQueryableValue = string;

export type ActionConfigurationValue = string;

export interface ActionContext {
  name?: string;
  actionExecutionId?: string;
}
export interface ActionDeclaration {
  name: string;
  actionTypeId: ActionTypeId;
  runOrder?: number;
  configuration?: Record<string, string>;
  commands?: Array<string>;
  outputArtifacts?: Array<OutputArtifact>;
  inputArtifacts?: Array<InputArtifact>;
  outputVariables?: Array<string>;
  roleArn?: string;
  region?: string;
  namespace?: string;
  timeoutInMinutes?: number;
  environmentVariables?: Array<EnvironmentVariable>;
}
export interface ActionExecution {
  actionExecutionId?: string;
  status?: ActionExecutionStatus;
  summary?: string;
  lastStatusChange?: Date | string;
  token?: string;
  lastUpdatedBy?: string;
  externalExecutionId?: string;
  externalExecutionUrl?: string;
  percentComplete?: number;
  errorDetails?: ErrorDetails;
  logStreamARN?: string;
}
export interface ActionExecutionDetail {
  pipelineExecutionId?: string;
  actionExecutionId?: string;
  pipelineVersion?: number;
  stageName?: string;
  actionName?: string;
  startTime?: Date | string;
  lastUpdateTime?: Date | string;
  updatedBy?: string;
  status?: ActionExecutionStatus;
  input?: ActionExecutionInput;
  output?: ActionExecutionOutput;
}
export type ActionExecutionDetailList = Array<ActionExecutionDetail>;
export interface ActionExecutionFilter {
  pipelineExecutionId?: string;
  latestInPipelineExecution?: LatestInPipelineExecutionFilter;
}
export type ActionExecutionId = string;

export interface ActionExecutionInput {
  actionTypeId?: ActionTypeId;
  configuration?: Record<string, string>;
  resolvedConfiguration?: Record<string, string>;
  roleArn?: string;
  region?: string;
  inputArtifacts?: Array<ArtifactDetail>;
  namespace?: string;
}
export declare class ActionExecutionNotFoundException extends Data.TaggedError(
  "ActionExecutionNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface ActionExecutionOutput {
  outputArtifacts?: Array<ArtifactDetail>;
  executionResult?: ActionExecutionResult;
  outputVariables?: Record<string, string>;
}
export interface ActionExecutionResult {
  externalExecutionId?: string;
  externalExecutionSummary?: string;
  externalExecutionUrl?: string;
  errorDetails?: ErrorDetails;
  logStreamARN?: string;
}
export type ActionExecutionStatus = "InProgress" | "Abandoned" | "Succeeded" | "Failed";
export type ActionExecutionToken = string;

export type ActionName = string;

export type ActionNamespace = string;

export declare class ActionNotFoundException extends Data.TaggedError(
  "ActionNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ActionOwner = "AWS" | "ThirdParty" | "Custom";
export type ActionProvider = string;

export interface ActionRevision {
  revisionId: string;
  revisionChangeId: string;
  created: Date | string;
}
export type ActionRunOrder = number;

export interface ActionState {
  actionName?: string;
  currentRevision?: ActionRevision;
  latestExecution?: ActionExecution;
  entityUrl?: string;
  revisionUrl?: string;
}
export type ActionStateList = Array<ActionState>;
export type ActionTimeout = number;

export interface ActionType {
  id: ActionTypeId;
  settings?: ActionTypeSettings;
  actionConfigurationProperties?: Array<ActionConfigurationProperty>;
  inputArtifactDetails: ArtifactDetails;
  outputArtifactDetails: ArtifactDetails;
}
export interface ActionTypeArtifactDetails {
  minimumCount: number;
  maximumCount: number;
}
export interface ActionTypeDeclaration {
  description?: string;
  executor: ActionTypeExecutor;
  id: ActionTypeIdentifier;
  inputArtifactDetails: ActionTypeArtifactDetails;
  outputArtifactDetails: ActionTypeArtifactDetails;
  permissions?: ActionTypePermissions;
  properties?: Array<ActionTypeProperty>;
  urls?: ActionTypeUrls;
}
export type ActionTypeDescription = string;

export interface ActionTypeExecutor {
  configuration: ExecutorConfiguration;
  type: ExecutorType;
  policyStatementsTemplate?: string;
  jobTimeout?: number;
}
export interface ActionTypeId {
  category: ActionCategory;
  owner: ActionOwner;
  provider: string;
  version: string;
}
export interface ActionTypeIdentifier {
  category: ActionCategory;
  owner: string;
  provider: string;
  version: string;
}
export type ActionTypeList = Array<ActionType>;
export declare class ActionTypeNotFoundException extends Data.TaggedError(
  "ActionTypeNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ActionTypeOwner = string;

export interface ActionTypePermissions {
  allowedAccounts: Array<string>;
}
export type ActionTypeProperties = Array<ActionTypeProperty>;
export interface ActionTypeProperty {
  name: string;
  optional: boolean;
  key: boolean;
  noEcho: boolean;
  queryable?: boolean;
  description?: string;
}
export interface ActionTypeSettings {
  thirdPartyConfigurationUrl?: string;
  entityUrlTemplate?: string;
  executionUrlTemplate?: string;
  revisionUrlTemplate?: string;
}
export interface ActionTypeUrls {
  configurationUrl?: string;
  entityUrlTemplate?: string;
  executionUrlTemplate?: string;
  revisionUrlTemplate?: string;
}
export type AllowedAccount = string;

export type AllowedAccounts = Array<string>;
export declare class ApprovalAlreadyCompletedException extends Data.TaggedError(
  "ApprovalAlreadyCompletedException",
)<{
  readonly message?: string;
}> {}
export interface ApprovalResult {
  summary: string;
  status: ApprovalStatus;
}
export type ApprovalStatus = "Approved" | "Rejected";
export type ApprovalSummary = string;

export type ApprovalToken = string;

export interface Artifact {
  name?: string;
  revision?: string;
  location?: ArtifactLocation;
}
export interface ArtifactDetail {
  name?: string;
  s3location?: S3Location;
}
export type ArtifactDetailList = Array<ArtifactDetail>;
export interface ArtifactDetails {
  minimumCount: number;
  maximumCount: number;
}
export type ArtifactList = Array<Artifact>;
export interface ArtifactLocation {
  type?: ArtifactLocationType;
  s3Location?: S3ArtifactLocation;
}
export type ArtifactLocationType = "S3";
export type ArtifactName = string;

export interface ArtifactRevision {
  name?: string;
  revisionId?: string;
  revisionChangeIdentifier?: string;
  revisionSummary?: string;
  created?: Date | string;
  revisionUrl?: string;
}
export type ArtifactRevisionList = Array<ArtifactRevision>;
export interface ArtifactStore {
  type: ArtifactStoreType;
  location: string;
  encryptionKey?: EncryptionKey;
}
export type ArtifactStoreLocation = string;

export type ArtifactStoreMap = Record<string, ArtifactStore>;
export type ArtifactStoreType = "S3";
export type AWSRegionName = string;

export interface AWSSessionCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
}
export interface BeforeEntryConditions {
  conditions: Array<Condition>;
}
export interface BlockerDeclaration {
  name: string;
  type: BlockerType;
}
export type BlockerName = string;

export type BlockerType = "Schedule";
export type ClientId = string;

export type ClientRequestToken = string;

export type ClientToken = string;

export type Code = string;

export type Command = string;

export type CommandList = Array<string>;
export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export declare class ConcurrentPipelineExecutionsLimitExceededException extends Data.TaggedError(
  "ConcurrentPipelineExecutionsLimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface Condition {
  result?: Result;
  rules?: Array<RuleDeclaration>;
}
export interface ConditionExecution {
  status?: ConditionExecutionStatus;
  summary?: string;
  lastStatusChange?: Date | string;
}
export type ConditionExecutionStatus = "InProgress" | "Failed" | "Errored" | "Succeeded" | "Cancelled" | "Abandoned" | "Overridden";
export type ConditionList = Array<Condition>;
export declare class ConditionNotOverridableException extends Data.TaggedError(
  "ConditionNotOverridableException",
)<{
  readonly message?: string;
}> {}
export interface ConditionState {
  latestExecution?: ConditionExecution;
  ruleStates?: Array<RuleState>;
}
export type ConditionStateList = Array<ConditionState>;
export type ConditionType = "BEFORE_ENTRY" | "ON_SUCCESS";
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ContinuationToken = string;

export interface CreateCustomActionTypeInput {
  category: ActionCategory;
  provider: string;
  version: string;
  settings?: ActionTypeSettings;
  configurationProperties?: Array<ActionConfigurationProperty>;
  inputArtifactDetails: ArtifactDetails;
  outputArtifactDetails: ArtifactDetails;
  tags?: Array<Tag>;
}
export interface CreateCustomActionTypeOutput {
  actionType: ActionType;
  tags?: Array<Tag>;
}
export interface CreatePipelineInput {
  pipeline: PipelineDeclaration;
  tags?: Array<Tag>;
}
export interface CreatePipelineOutput {
  pipeline?: PipelineDeclaration;
  tags?: Array<Tag>;
}
export interface CurrentRevision {
  revision: string;
  changeIdentifier: string;
  created?: Date | string;
  revisionSummary?: string;
}
export interface DeleteCustomActionTypeInput {
  category: ActionCategory;
  provider: string;
  version: string;
}
export interface DeletePipelineInput {
  name: string;
}
export interface DeleteWebhookInput {
  name: string;
}
export interface DeleteWebhookOutput {
}
export interface DeployActionExecutionTarget {
  targetId?: string;
  targetType?: string;
  status?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  events?: Array<DeployTargetEvent>;
}
export type DeployActionExecutionTargetList = Array<DeployActionExecutionTarget>;
export interface DeployTargetEvent {
  name?: string;
  status?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  context?: DeployTargetEventContext;
}
export interface DeployTargetEventContext {
  ssmCommandId?: string;
  message?: string;
}
export type DeployTargetEventList = Array<DeployTargetEvent>;
export interface DeregisterWebhookWithThirdPartyInput {
  webhookName?: string;
}
export interface DeregisterWebhookWithThirdPartyOutput {
}
export type Description = string;

export type DisabledReason = string;

export interface DisableStageTransitionInput {
  pipelineName: string;
  stageName: string;
  transitionType: StageTransitionType;
  reason: string;
}
export declare class DuplicatedStopRequestException extends Data.TaggedError(
  "DuplicatedStopRequestException",
)<{
  readonly message?: string;
}> {}
export type Enabled = boolean;

export interface EnableStageTransitionInput {
  pipelineName: string;
  stageName: string;
  transitionType: StageTransitionType;
}
export interface EncryptionKey {
  id: string;
  type: EncryptionKeyType;
}
export type EncryptionKeyId = string;

export type EncryptionKeyType = "KMS";
export interface EnvironmentVariable {
  name: string;
  value: string;
  type?: EnvironmentVariableType;
}
export type EnvironmentVariableList = Array<EnvironmentVariable>;
export type EnvironmentVariableName = string;

export type EnvironmentVariableType = "PLAINTEXT" | "SECRETS_MANAGER";
export type EnvironmentVariableValue = string;

export interface ErrorDetails {
  code?: string;
  message?: string;
}
export interface ExecutionDetails {
  summary?: string;
  externalExecutionId?: string;
  percentComplete?: number;
}
export type ExecutionId = string;

export type ExecutionMode = "QUEUED" | "SUPERSEDED" | "PARALLEL";
export type ExecutionSummary = string;

export interface ExecutionTrigger {
  triggerType?: TriggerType;
  triggerDetail?: string;
}
export type ExecutionType = "STANDARD" | "ROLLBACK";
export interface ExecutorConfiguration {
  lambdaExecutorConfiguration?: LambdaExecutorConfiguration;
  jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration;
}
export type ExecutorType = "JobWorker" | "Lambda";
export type ExternalExecutionId = string;

export type ExternalExecutionSummary = string;

export interface FailureConditions {
  result?: Result;
  retryConfiguration?: RetryConfiguration;
  conditions?: Array<Condition>;
}
export interface FailureDetails {
  type: FailureType;
  message: string;
  externalExecutionId?: string;
}
export type FailureType = "JobFailed" | "ConfigurationError" | "PermissionError" | "RevisionOutOfSync" | "RevisionUnavailable" | "SystemUnavailable";
export type FilePath = string;

export type FilePathList = Array<string>;
export interface GetActionTypeInput {
  category: ActionCategory;
  owner: string;
  provider: string;
  version: string;
}
export interface GetActionTypeOutput {
  actionType?: ActionTypeDeclaration;
}
export interface GetJobDetailsInput {
  jobId: string;
}
export interface GetJobDetailsOutput {
  jobDetails?: JobDetails;
}
export interface GetPipelineExecutionInput {
  pipelineName: string;
  pipelineExecutionId: string;
}
export interface GetPipelineExecutionOutput {
  pipelineExecution?: PipelineExecution;
}
export interface GetPipelineInput {
  name: string;
  version?: number;
}
export interface GetPipelineOutput {
  pipeline?: PipelineDeclaration;
  metadata?: PipelineMetadata;
}
export interface GetPipelineStateInput {
  name: string;
}
export interface GetPipelineStateOutput {
  pipelineName?: string;
  pipelineVersion?: number;
  stageStates?: Array<StageState>;
  created?: Date | string;
  updated?: Date | string;
}
export interface GetThirdPartyJobDetailsInput {
  jobId: string;
  clientToken: string;
}
export interface GetThirdPartyJobDetailsOutput {
  jobDetails?: ThirdPartyJobDetails;
}
export interface GitBranchFilterCriteria {
  includes?: Array<string>;
  excludes?: Array<string>;
}
export type GitBranchNamePattern = string;

export type GitBranchPatternList = Array<string>;
export interface GitConfiguration {
  sourceActionName: string;
  push?: Array<GitPushFilter>;
  pullRequest?: Array<GitPullRequestFilter>;
}
export interface GitFilePathFilterCriteria {
  includes?: Array<string>;
  excludes?: Array<string>;
}
export type GitFilePathPattern = string;

export type GitFilePathPatternList = Array<string>;
export type GitPullRequestEventType = "OPEN" | "UPDATED" | "CLOSED";
export type GitPullRequestEventTypeList = Array<GitPullRequestEventType>;
export interface GitPullRequestFilter {
  events?: Array<GitPullRequestEventType>;
  branches?: GitBranchFilterCriteria;
  filePaths?: GitFilePathFilterCriteria;
}
export type GitPullRequestFilterList = Array<GitPullRequestFilter>;
export interface GitPushFilter {
  tags?: GitTagFilterCriteria;
  branches?: GitBranchFilterCriteria;
  filePaths?: GitFilePathFilterCriteria;
}
export type GitPushFilterList = Array<GitPushFilter>;
export interface GitTagFilterCriteria {
  includes?: Array<string>;
  excludes?: Array<string>;
}
export type GitTagNamePattern = string;

export type GitTagPatternList = Array<string>;
export interface InputArtifact {
  name: string;
}
export type InputArtifactList = Array<InputArtifact>;
export declare class InvalidActionDeclarationException extends Data.TaggedError(
  "InvalidActionDeclarationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidApprovalTokenException extends Data.TaggedError(
  "InvalidApprovalTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidArnException extends Data.TaggedError(
  "InvalidArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidBlockerDeclarationException extends Data.TaggedError(
  "InvalidBlockerDeclarationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClientTokenException extends Data.TaggedError(
  "InvalidClientTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidJobException extends Data.TaggedError(
  "InvalidJobException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidJobStateException extends Data.TaggedError(
  "InvalidJobStateException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNextTokenException extends Data.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNonceException extends Data.TaggedError(
  "InvalidNonceException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidStageDeclarationException extends Data.TaggedError(
  "InvalidStageDeclarationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidStructureException extends Data.TaggedError(
  "InvalidStructureException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagsException extends Data.TaggedError(
  "InvalidTagsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidWebhookAuthenticationParametersException extends Data.TaggedError(
  "InvalidWebhookAuthenticationParametersException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidWebhookFilterPatternException extends Data.TaggedError(
  "InvalidWebhookFilterPatternException",
)<{
  readonly message?: string;
}> {}
export interface Job {
  id?: string;
  data?: JobData;
  nonce?: string;
  accountId?: string;
}
export interface JobData {
  actionTypeId?: ActionTypeId;
  actionConfiguration?: ActionConfiguration;
  pipelineContext?: PipelineContext;
  inputArtifacts?: Array<Artifact>;
  outputArtifacts?: Array<Artifact>;
  artifactCredentials?: AWSSessionCredentials;
  continuationToken?: string;
  encryptionKey?: EncryptionKey;
}
export interface JobDetails {
  id?: string;
  data?: JobData;
  accountId?: string;
}
export type JobId = string;

export type JobList = Array<Job>;
export declare class JobNotFoundException extends Data.TaggedError(
  "JobNotFoundException",
)<{
  readonly message?: string;
}> {}
export type JobStatus = "Created" | "Queued" | "Dispatched" | "InProgress" | "TimedOut" | "Succeeded" | "Failed";
export type JobTimeout = number;

export interface JobWorkerExecutorConfiguration {
  pollingAccounts?: Array<string>;
  pollingServicePrincipals?: Array<string>;
}
export type JsonPath = string;

export interface LambdaExecutorConfiguration {
  lambdaFunctionArn: string;
}
export type LambdaFunctionArn = string;

export type LastChangedAt = Date | string;

export type LastChangedBy = string;

export type LastUpdatedBy = string;

export interface LatestInPipelineExecutionFilter {
  pipelineExecutionId: string;
  startTimeRange: StartTimeRange;
}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListActionExecutionsInput {
  pipelineName: string;
  filter?: ActionExecutionFilter;
  maxResults?: number;
  nextToken?: string;
}
export interface ListActionExecutionsOutput {
  actionExecutionDetails?: Array<ActionExecutionDetail>;
  nextToken?: string;
}
export interface ListActionTypesInput {
  actionOwnerFilter?: ActionOwner;
  nextToken?: string;
  regionFilter?: string;
}
export interface ListActionTypesOutput {
  actionTypes: Array<ActionType>;
  nextToken?: string;
}
export interface ListDeployActionExecutionTargetsInput {
  pipelineName?: string;
  actionExecutionId: string;
  filters?: Array<TargetFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDeployActionExecutionTargetsOutput {
  targets?: Array<DeployActionExecutionTarget>;
  nextToken?: string;
}
export interface ListPipelineExecutionsInput {
  pipelineName: string;
  maxResults?: number;
  filter?: PipelineExecutionFilter;
  nextToken?: string;
}
export interface ListPipelineExecutionsOutput {
  pipelineExecutionSummaries?: Array<PipelineExecutionSummary>;
  nextToken?: string;
}
export interface ListPipelinesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPipelinesOutput {
  pipelines?: Array<PipelineSummary>;
  nextToken?: string;
}
export interface ListRuleExecutionsInput {
  pipelineName: string;
  filter?: RuleExecutionFilter;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRuleExecutionsOutput {
  ruleExecutionDetails?: Array<RuleExecutionDetail>;
  nextToken?: string;
}
export interface ListRuleTypesInput {
  ruleOwnerFilter?: RuleOwner;
  regionFilter?: string;
}
export interface ListRuleTypesOutput {
  ruleTypes: Array<RuleType>;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTagsForResourceOutput {
  tags?: Array<Tag>;
  nextToken?: string;
}
export interface ListWebhookItem {
  definition: WebhookDefinition;
  url: string;
  errorMessage?: string;
  errorCode?: string;
  lastTriggered?: Date | string;
  arn?: string;
  tags?: Array<Tag>;
}
export interface ListWebhooksInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWebhooksOutput {
  webhooks?: Array<ListWebhookItem>;
  NextToken?: string;
}
export type LogStreamARN = string;

export type MatchEquals = string;

export type MaxBatchSize = number;

export type MaximumActionTypeArtifactCount = number;

export type MaximumArtifactCount = number;

export type MaxPipelines = number;

export type MaxResults = number;

export type Message = string;

export type MinimumActionTypeArtifactCount = number;

export type MinimumArtifactCount = number;

export type NextToken = string;

export type Nonce = string;

export declare class NotLatestPipelineExecutionException extends Data.TaggedError(
  "NotLatestPipelineExecutionException",
)<{
  readonly message?: string;
}> {}
export interface OutputArtifact {
  name: string;
  files?: Array<string>;
}
export type OutputArtifactList = Array<OutputArtifact>;
export type OutputVariable = string;

export type OutputVariableList = Array<string>;
export type OutputVariablesKey = string;

export type OutputVariablesMap = Record<string, string>;
export declare class OutputVariablesSizeExceededException extends Data.TaggedError(
  "OutputVariablesSizeExceededException",
)<{
  readonly message?: string;
}> {}
export type OutputVariablesValue = string;

export interface OverrideStageConditionInput {
  pipelineName: string;
  stageName: string;
  pipelineExecutionId: string;
  conditionType: ConditionType;
}
export type Percentage = number;

export type PipelineArn = string;

export interface PipelineContext {
  pipelineName?: string;
  stage?: StageContext;
  action?: ActionContext;
  pipelineArn?: string;
  pipelineExecutionId?: string;
}
export interface PipelineDeclaration {
  name: string;
  roleArn: string;
  artifactStore?: ArtifactStore;
  artifactStores?: Record<string, ArtifactStore>;
  stages: Array<StageDeclaration>;
  version?: number;
  executionMode?: ExecutionMode;
  pipelineType?: PipelineType;
  variables?: Array<PipelineVariableDeclaration>;
  triggers?: Array<PipelineTriggerDeclaration>;
}
export interface PipelineExecution {
  pipelineName?: string;
  pipelineVersion?: number;
  pipelineExecutionId?: string;
  status?: PipelineExecutionStatus;
  statusSummary?: string;
  artifactRevisions?: Array<ArtifactRevision>;
  variables?: Array<ResolvedPipelineVariable>;
  trigger?: ExecutionTrigger;
  executionMode?: ExecutionMode;
  executionType?: ExecutionType;
  rollbackMetadata?: PipelineRollbackMetadata;
}
export interface PipelineExecutionFilter {
  succeededInStage?: SucceededInStageFilter;
}
export type PipelineExecutionId = string;

export declare class PipelineExecutionNotFoundException extends Data.TaggedError(
  "PipelineExecutionNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class PipelineExecutionNotStoppableException extends Data.TaggedError(
  "PipelineExecutionNotStoppableException",
)<{
  readonly message?: string;
}> {}
export declare class PipelineExecutionOutdatedException extends Data.TaggedError(
  "PipelineExecutionOutdatedException",
)<{
  readonly message?: string;
}> {}
export type PipelineExecutionStatus = "Cancelled" | "InProgress" | "Stopped" | "Stopping" | "Succeeded" | "Superseded" | "Failed";
export type PipelineExecutionStatusSummary = string;

export interface PipelineExecutionSummary {
  pipelineExecutionId?: string;
  status?: PipelineExecutionStatus;
  statusSummary?: string;
  startTime?: Date | string;
  lastUpdateTime?: Date | string;
  sourceRevisions?: Array<SourceRevision>;
  trigger?: ExecutionTrigger;
  stopTrigger?: StopExecutionTrigger;
  executionMode?: ExecutionMode;
  executionType?: ExecutionType;
  rollbackMetadata?: PipelineRollbackMetadata;
}
export type PipelineExecutionSummaryList = Array<PipelineExecutionSummary>;
export type PipelineList = Array<PipelineSummary>;
export interface PipelineMetadata {
  pipelineArn?: string;
  created?: Date | string;
  updated?: Date | string;
  pollingDisabledAt?: Date | string;
}
export type PipelineName = string;

export declare class PipelineNameInUseException extends Data.TaggedError(
  "PipelineNameInUseException",
)<{
  readonly message?: string;
}> {}
export declare class PipelineNotFoundException extends Data.TaggedError(
  "PipelineNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface PipelineRollbackMetadata {
  rollbackTargetPipelineExecutionId?: string;
}
export type PipelineStageDeclarationList = Array<StageDeclaration>;
export interface PipelineSummary {
  name?: string;
  version?: number;
  pipelineType?: PipelineType;
  executionMode?: ExecutionMode;
  created?: Date | string;
  updated?: Date | string;
}
export interface PipelineTriggerDeclaration {
  providerType: PipelineTriggerProviderType;
  gitConfiguration: GitConfiguration;
}
export type PipelineTriggerDeclarationList = Array<PipelineTriggerDeclaration>;
export type PipelineTriggerProviderType = "CodeStarSourceConnection";
export type PipelineType = "V1" | "V2";
export interface PipelineVariable {
  name: string;
  value: string;
}
export interface PipelineVariableDeclaration {
  name: string;
  defaultValue?: string;
  description?: string;
}
export type PipelineVariableDeclarationList = Array<PipelineVariableDeclaration>;
export type PipelineVariableDescription = string;

export type PipelineVariableList = Array<PipelineVariable>;
export type PipelineVariableName = string;

export type PipelineVariableValue = string;

export type PipelineVersion = number;

export declare class PipelineVersionNotFoundException extends Data.TaggedError(
  "PipelineVersionNotFoundException",
)<{
  readonly message?: string;
}> {}
export type PolicyStatementsTemplate = string;

export interface PollForJobsInput {
  actionTypeId: ActionTypeId;
  maxBatchSize?: number;
  queryParam?: Record<string, string>;
}
export interface PollForJobsOutput {
  jobs?: Array<Job>;
}
export interface PollForThirdPartyJobsInput {
  actionTypeId: ActionTypeId;
  maxBatchSize?: number;
}
export interface PollForThirdPartyJobsOutput {
  jobs?: Array<ThirdPartyJob>;
}
export type PollingAccountList = Array<string>;
export type PollingServicePrincipalList = Array<string>;
export type PropertyDescription = string;

export interface PutActionRevisionInput {
  pipelineName: string;
  stageName: string;
  actionName: string;
  actionRevision: ActionRevision;
}
export interface PutActionRevisionOutput {
  newRevision?: boolean;
  pipelineExecutionId?: string;
}
export interface PutApprovalResultInput {
  pipelineName: string;
  stageName: string;
  actionName: string;
  result: ApprovalResult;
  token: string;
}
export interface PutApprovalResultOutput {
  approvedAt?: Date | string;
}
export interface PutJobFailureResultInput {
  jobId: string;
  failureDetails: FailureDetails;
}
export interface PutJobSuccessResultInput {
  jobId: string;
  currentRevision?: CurrentRevision;
  continuationToken?: string;
  executionDetails?: ExecutionDetails;
  outputVariables?: Record<string, string>;
}
export interface PutThirdPartyJobFailureResultInput {
  jobId: string;
  clientToken: string;
  failureDetails: FailureDetails;
}
export interface PutThirdPartyJobSuccessResultInput {
  jobId: string;
  clientToken: string;
  currentRevision?: CurrentRevision;
  continuationToken?: string;
  executionDetails?: ExecutionDetails;
}
export interface PutWebhookInput {
  webhook: WebhookDefinition;
  tags?: Array<Tag>;
}
export interface PutWebhookOutput {
  webhook?: ListWebhookItem;
}
export type QueryParamMap = Record<string, string>;
export interface RegisterWebhookWithThirdPartyInput {
  webhookName?: string;
}
export interface RegisterWebhookWithThirdPartyOutput {
}
export declare class RequestFailedException extends Data.TaggedError(
  "RequestFailedException",
)<{
  readonly message?: string;
}> {}
export type ResolvedActionConfigurationMap = Record<string, string>;
export interface ResolvedPipelineVariable {
  name?: string;
  resolvedValue?: string;
}
export type ResolvedPipelineVariableList = Array<ResolvedPipelineVariable>;
export type ResolvedRuleConfigurationMap = Record<string, string>;
export type ResourceArn = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type Result = "ROLLBACK" | "FAIL" | "RETRY" | "SKIP";
export type RetryAttempt = number;

export interface RetryConfiguration {
  retryMode?: StageRetryMode;
}
export interface RetryStageExecutionInput {
  pipelineName: string;
  stageName: string;
  pipelineExecutionId: string;
  retryMode: StageRetryMode;
}
export interface RetryStageExecutionOutput {
  pipelineExecutionId?: string;
}
export interface RetryStageMetadata {
  autoStageRetryAttempt?: number;
  manualStageRetryAttempt?: number;
  latestRetryTrigger?: RetryTrigger;
}
export type RetryTrigger = "AutomatedStageRetry" | "ManualStageRetry";
export type Revision = string;

export type RevisionChangeIdentifier = string;

export type RevisionSummary = string;

export type RoleArn = string;

export interface RollbackStageInput {
  pipelineName: string;
  stageName: string;
  targetPipelineExecutionId: string;
}
export interface RollbackStageOutput {
  pipelineExecutionId: string;
}
export type RuleCategory = "Rule";
export type RuleConfigurationKey = string;

export type RuleConfigurationMap = Record<string, string>;
export interface RuleConfigurationProperty {
  name: string;
  required: boolean;
  key: boolean;
  secret: boolean;
  queryable?: boolean;
  description?: string;
  type?: RuleConfigurationPropertyType;
}
export type RuleConfigurationPropertyList = Array<RuleConfigurationProperty>;
export type RuleConfigurationPropertyType = "String" | "Number" | "Boolean";
export type RuleConfigurationValue = string;

export interface RuleDeclaration {
  name: string;
  ruleTypeId: RuleTypeId;
  configuration?: Record<string, string>;
  commands?: Array<string>;
  inputArtifacts?: Array<InputArtifact>;
  roleArn?: string;
  region?: string;
  timeoutInMinutes?: number;
}
export type RuleDeclarationList = Array<RuleDeclaration>;
export interface RuleExecution {
  ruleExecutionId?: string;
  status?: RuleExecutionStatus;
  summary?: string;
  lastStatusChange?: Date | string;
  token?: string;
  lastUpdatedBy?: string;
  externalExecutionId?: string;
  externalExecutionUrl?: string;
  errorDetails?: ErrorDetails;
}
export interface RuleExecutionDetail {
  pipelineExecutionId?: string;
  ruleExecutionId?: string;
  pipelineVersion?: number;
  stageName?: string;
  ruleName?: string;
  startTime?: Date | string;
  lastUpdateTime?: Date | string;
  updatedBy?: string;
  status?: RuleExecutionStatus;
  input?: RuleExecutionInput;
  output?: RuleExecutionOutput;
}
export type RuleExecutionDetailList = Array<RuleExecutionDetail>;
export interface RuleExecutionFilter {
  pipelineExecutionId?: string;
  latestInPipelineExecution?: LatestInPipelineExecutionFilter;
}
export type RuleExecutionId = string;

export interface RuleExecutionInput {
  ruleTypeId?: RuleTypeId;
  configuration?: Record<string, string>;
  resolvedConfiguration?: Record<string, string>;
  roleArn?: string;
  region?: string;
  inputArtifacts?: Array<ArtifactDetail>;
}
export interface RuleExecutionOutput {
  executionResult?: RuleExecutionResult;
}
export interface RuleExecutionResult {
  externalExecutionId?: string;
  externalExecutionSummary?: string;
  externalExecutionUrl?: string;
  errorDetails?: ErrorDetails;
}
export type RuleExecutionStatus = "InProgress" | "Abandoned" | "Succeeded" | "Failed";
export type RuleExecutionToken = string;

export type RuleName = string;

export type RuleOwner = "AWS";
export type RuleProvider = string;

export interface RuleRevision {
  revisionId: string;
  revisionChangeId: string;
  created: Date | string;
}
export interface RuleState {
  ruleName?: string;
  currentRevision?: RuleRevision;
  latestExecution?: RuleExecution;
  entityUrl?: string;
  revisionUrl?: string;
}
export type RuleStateList = Array<RuleState>;
export type RuleTimeout = number;

export interface RuleType {
  id: RuleTypeId;
  settings?: RuleTypeSettings;
  ruleConfigurationProperties?: Array<RuleConfigurationProperty>;
  inputArtifactDetails: ArtifactDetails;
}
export interface RuleTypeId {
  category: RuleCategory;
  owner?: RuleOwner;
  provider: string;
  version?: string;
}
export type RuleTypeList = Array<RuleType>;
export interface RuleTypeSettings {
  thirdPartyConfigurationUrl?: string;
  entityUrlTemplate?: string;
  executionUrlTemplate?: string;
  revisionUrlTemplate?: string;
}
export interface S3ArtifactLocation {
  bucketName: string;
  objectKey: string;
}
export type S3Bucket = string;

export type S3BucketName = string;

export type S3Key = string;

export interface S3Location {
  bucket?: string;
  key?: string;
}
export type S3ObjectKey = string;

export type SecretAccessKey = string;

export type ServicePrincipal = string;

export type SessionToken = string;

export interface SourceRevision {
  actionName: string;
  revisionId?: string;
  revisionSummary?: string;
  revisionUrl?: string;
}
export type SourceRevisionList = Array<SourceRevision>;
export interface SourceRevisionOverride {
  actionName: string;
  revisionType: SourceRevisionType;
  revisionValue: string;
}
export type SourceRevisionOverrideList = Array<SourceRevisionOverride>;
export type SourceRevisionType = "COMMIT_ID" | "IMAGE_DIGEST" | "S3_OBJECT_VERSION_ID" | "S3_OBJECT_KEY";
export type StageActionDeclarationList = Array<ActionDeclaration>;
export type StageBlockerDeclarationList = Array<BlockerDeclaration>;
export interface StageConditionsExecution {
  status?: ConditionExecutionStatus;
  summary?: string;
}
export interface StageConditionState {
  latestExecution?: StageConditionsExecution;
  conditionStates?: Array<ConditionState>;
}
export interface StageContext {
  name?: string;
}
export interface StageDeclaration {
  name: string;
  blockers?: Array<BlockerDeclaration>;
  actions: Array<ActionDeclaration>;
  onFailure?: FailureConditions;
  onSuccess?: SuccessConditions;
  beforeEntry?: BeforeEntryConditions;
}
export interface StageExecution {
  pipelineExecutionId: string;
  status: StageExecutionStatus;
  type?: ExecutionType;
}
export type StageExecutionList = Array<StageExecution>;
export type StageExecutionStatus = "Cancelled" | "InProgress" | "Failed" | "Stopped" | "Stopping" | "Succeeded" | "Skipped";
export type StageName = string;

export declare class StageNotFoundException extends Data.TaggedError(
  "StageNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class StageNotRetryableException extends Data.TaggedError(
  "StageNotRetryableException",
)<{
  readonly message?: string;
}> {}
export type StageRetryMode = "FAILED_ACTIONS" | "ALL_ACTIONS";
export interface StageState {
  stageName?: string;
  inboundExecution?: StageExecution;
  inboundExecutions?: Array<StageExecution>;
  inboundTransitionState?: TransitionState;
  actionStates?: Array<ActionState>;
  latestExecution?: StageExecution;
  beforeEntryConditionState?: StageConditionState;
  onSuccessConditionState?: StageConditionState;
  onFailureConditionState?: StageConditionState;
  retryStageMetadata?: RetryStageMetadata;
}
export type StageStateList = Array<StageState>;
export type StageTransitionType = "Inbound" | "Outbound";
export interface StartPipelineExecutionInput {
  name: string;
  variables?: Array<PipelineVariable>;
  clientRequestToken?: string;
  sourceRevisions?: Array<SourceRevisionOverride>;
}
export interface StartPipelineExecutionOutput {
  pipelineExecutionId?: string;
}
export type StartTimeRange = "Latest" | "All";
export interface StopExecutionTrigger {
  reason?: string;
}
export interface StopPipelineExecutionInput {
  pipelineName: string;
  pipelineExecutionId: string;
  abandon?: boolean;
  reason?: string;
}
export interface StopPipelineExecutionOutput {
  pipelineExecutionId?: string;
}
export type StopPipelineExecutionReason = string;

export interface SucceededInStageFilter {
  stageName?: string;
}
export interface SuccessConditions {
  conditions: Array<Condition>;
}
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceOutput {
}
export type TagValue = string;

export interface TargetFilter {
  name?: TargetFilterName;
  values?: Array<string>;
}
export type TargetFilterList = Array<TargetFilter>;
export type TargetFilterName = "TARGET_STATUS";
export type TargetFilterValue = string;

export type TargetFilterValueList = Array<string>;
export interface ThirdPartyJob {
  clientId?: string;
  jobId?: string;
}
export interface ThirdPartyJobData {
  actionTypeId?: ActionTypeId;
  actionConfiguration?: ActionConfiguration;
  pipelineContext?: PipelineContext;
  inputArtifacts?: Array<Artifact>;
  outputArtifacts?: Array<Artifact>;
  artifactCredentials?: AWSSessionCredentials;
  continuationToken?: string;
  encryptionKey?: EncryptionKey;
}
export interface ThirdPartyJobDetails {
  id?: string;
  data?: ThirdPartyJobData;
  nonce?: string;
}
export type ThirdPartyJobId = string;

export type ThirdPartyJobList = Array<ThirdPartyJob>;
export type Time = Date | string;

export type Timestamp = Date | string;

export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export interface TransitionState {
  enabled?: boolean;
  lastChangedBy?: string;
  lastChangedAt?: Date | string;
  disabledReason?: string;
}
export type TriggerDetail = string;

export type TriggerType = "CreatePipeline" | "StartPipelineExecution" | "PollForSourceChanges" | "Webhook" | "CloudWatchEvent" | "PutActionRevision" | "WebhookV2" | "ManualRollback" | "AutomatedRollback";
export declare class UnableToRollbackStageException extends Data.TaggedError(
  "UnableToRollbackStageException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {
}
export interface UpdateActionTypeInput {
  actionType: ActionTypeDeclaration;
}
export interface UpdatePipelineInput {
  pipeline: PipelineDeclaration;
}
export interface UpdatePipelineOutput {
  pipeline?: PipelineDeclaration;
}
export type Url = string;

export type UrlTemplate = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type Version = string;

export type WebhookArn = string;

export interface WebhookAuthConfiguration {
  AllowedIPRange?: string;
  SecretToken?: string;
}
export type WebhookAuthConfigurationAllowedIPRange = string;

export type WebhookAuthConfigurationSecretToken = string;

export type WebhookAuthenticationType = "GITHUB_HMAC" | "IP" | "UNAUTHENTICATED";
export interface WebhookDefinition {
  name: string;
  targetPipeline: string;
  targetAction: string;
  filters: Array<WebhookFilterRule>;
  authentication: WebhookAuthenticationType;
  authenticationConfiguration: WebhookAuthConfiguration;
}
export type WebhookErrorCode = string;

export type WebhookErrorMessage = string;

export interface WebhookFilterRule {
  jsonPath: string;
  matchEquals?: string;
}
export type WebhookFilters = Array<WebhookFilterRule>;
export type WebhookLastTriggered = Date | string;

export type WebhookList = Array<ListWebhookItem>;
export type WebhookName = string;

export declare class WebhookNotFoundException extends Data.TaggedError(
  "WebhookNotFoundException",
)<{
}> {}
export type WebhookUrl = string;

export declare namespace AcknowledgeJob {
  export type Input = AcknowledgeJobInput;
  export type Output = AcknowledgeJobOutput;
  export type Error =
    | InvalidNonceException
    | JobNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AcknowledgeThirdPartyJob {
  export type Input = AcknowledgeThirdPartyJobInput;
  export type Output = AcknowledgeThirdPartyJobOutput;
  export type Error =
    | InvalidClientTokenException
    | InvalidNonceException
    | JobNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCustomActionType {
  export type Input = CreateCustomActionTypeInput;
  export type Output = CreateCustomActionTypeOutput;
  export type Error =
    | ConcurrentModificationException
    | InvalidTagsException
    | LimitExceededException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePipeline {
  export type Input = CreatePipelineInput;
  export type Output = CreatePipelineOutput;
  export type Error =
    | ConcurrentModificationException
    | InvalidActionDeclarationException
    | InvalidBlockerDeclarationException
    | InvalidStageDeclarationException
    | InvalidStructureException
    | InvalidTagsException
    | LimitExceededException
    | PipelineNameInUseException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCustomActionType {
  export type Input = DeleteCustomActionTypeInput;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePipeline {
  export type Input = DeletePipelineInput;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWebhook {
  export type Input = DeleteWebhookInput;
  export type Output = DeleteWebhookOutput;
  export type Error =
    | ConcurrentModificationException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterWebhookWithThirdParty {
  export type Input = DeregisterWebhookWithThirdPartyInput;
  export type Output = DeregisterWebhookWithThirdPartyOutput;
  export type Error =
    | ValidationException
    | WebhookNotFoundException
    | CommonAwsError;
}

export declare namespace DisableStageTransition {
  export type Input = DisableStageTransitionInput;
  export type Output = {};
  export type Error =
    | PipelineNotFoundException
    | StageNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableStageTransition {
  export type Input = EnableStageTransitionInput;
  export type Output = {};
  export type Error =
    | PipelineNotFoundException
    | StageNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetActionType {
  export type Input = GetActionTypeInput;
  export type Output = GetActionTypeOutput;
  export type Error =
    | ActionTypeNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetJobDetails {
  export type Input = GetJobDetailsInput;
  export type Output = GetJobDetailsOutput;
  export type Error =
    | JobNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPipeline {
  export type Input = GetPipelineInput;
  export type Output = GetPipelineOutput;
  export type Error =
    | PipelineNotFoundException
    | PipelineVersionNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPipelineExecution {
  export type Input = GetPipelineExecutionInput;
  export type Output = GetPipelineExecutionOutput;
  export type Error =
    | PipelineExecutionNotFoundException
    | PipelineNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPipelineState {
  export type Input = GetPipelineStateInput;
  export type Output = GetPipelineStateOutput;
  export type Error =
    | PipelineNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetThirdPartyJobDetails {
  export type Input = GetThirdPartyJobDetailsInput;
  export type Output = GetThirdPartyJobDetailsOutput;
  export type Error =
    | InvalidClientTokenException
    | InvalidJobException
    | JobNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListActionExecutions {
  export type Input = ListActionExecutionsInput;
  export type Output = ListActionExecutionsOutput;
  export type Error =
    | InvalidNextTokenException
    | PipelineExecutionNotFoundException
    | PipelineNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListActionTypes {
  export type Input = ListActionTypesInput;
  export type Output = ListActionTypesOutput;
  export type Error =
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeployActionExecutionTargets {
  export type Input = ListDeployActionExecutionTargetsInput;
  export type Output = ListDeployActionExecutionTargetsOutput;
  export type Error =
    | ActionExecutionNotFoundException
    | InvalidNextTokenException
    | PipelineNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPipelineExecutions {
  export type Input = ListPipelineExecutionsInput;
  export type Output = ListPipelineExecutionsOutput;
  export type Error =
    | InvalidNextTokenException
    | PipelineNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPipelines {
  export type Input = ListPipelinesInput;
  export type Output = ListPipelinesOutput;
  export type Error =
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRuleExecutions {
  export type Input = ListRuleExecutionsInput;
  export type Output = ListRuleExecutionsOutput;
  export type Error =
    | InvalidNextTokenException
    | PipelineExecutionNotFoundException
    | PipelineNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRuleTypes {
  export type Input = ListRuleTypesInput;
  export type Output = ListRuleTypesOutput;
  export type Error =
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InvalidArnException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWebhooks {
  export type Input = ListWebhooksInput;
  export type Output = ListWebhooksOutput;
  export type Error =
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace OverrideStageCondition {
  export type Input = OverrideStageConditionInput;
  export type Output = {};
  export type Error =
    | ConcurrentPipelineExecutionsLimitExceededException
    | ConditionNotOverridableException
    | ConflictException
    | NotLatestPipelineExecutionException
    | PipelineNotFoundException
    | StageNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PollForJobs {
  export type Input = PollForJobsInput;
  export type Output = PollForJobsOutput;
  export type Error =
    | ActionTypeNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PollForThirdPartyJobs {
  export type Input = PollForThirdPartyJobsInput;
  export type Output = PollForThirdPartyJobsOutput;
  export type Error =
    | ActionTypeNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutActionRevision {
  export type Input = PutActionRevisionInput;
  export type Output = PutActionRevisionOutput;
  export type Error =
    | ActionNotFoundException
    | ConcurrentPipelineExecutionsLimitExceededException
    | PipelineNotFoundException
    | StageNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutApprovalResult {
  export type Input = PutApprovalResultInput;
  export type Output = PutApprovalResultOutput;
  export type Error =
    | ActionNotFoundException
    | ApprovalAlreadyCompletedException
    | InvalidApprovalTokenException
    | PipelineNotFoundException
    | StageNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutJobFailureResult {
  export type Input = PutJobFailureResultInput;
  export type Output = {};
  export type Error =
    | InvalidJobStateException
    | JobNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutJobSuccessResult {
  export type Input = PutJobSuccessResultInput;
  export type Output = {};
  export type Error =
    | InvalidJobStateException
    | JobNotFoundException
    | OutputVariablesSizeExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutThirdPartyJobFailureResult {
  export type Input = PutThirdPartyJobFailureResultInput;
  export type Output = {};
  export type Error =
    | InvalidClientTokenException
    | InvalidJobStateException
    | JobNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutThirdPartyJobSuccessResult {
  export type Input = PutThirdPartyJobSuccessResultInput;
  export type Output = {};
  export type Error =
    | InvalidClientTokenException
    | InvalidJobStateException
    | JobNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutWebhook {
  export type Input = PutWebhookInput;
  export type Output = PutWebhookOutput;
  export type Error =
    | ConcurrentModificationException
    | InvalidTagsException
    | InvalidWebhookAuthenticationParametersException
    | InvalidWebhookFilterPatternException
    | LimitExceededException
    | PipelineNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterWebhookWithThirdParty {
  export type Input = RegisterWebhookWithThirdPartyInput;
  export type Output = RegisterWebhookWithThirdPartyOutput;
  export type Error =
    | ValidationException
    | WebhookNotFoundException
    | CommonAwsError;
}

export declare namespace RetryStageExecution {
  export type Input = RetryStageExecutionInput;
  export type Output = RetryStageExecutionOutput;
  export type Error =
    | ConcurrentPipelineExecutionsLimitExceededException
    | ConflictException
    | NotLatestPipelineExecutionException
    | PipelineNotFoundException
    | StageNotFoundException
    | StageNotRetryableException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RollbackStage {
  export type Input = RollbackStageInput;
  export type Output = RollbackStageOutput;
  export type Error =
    | ConflictException
    | PipelineExecutionNotFoundException
    | PipelineExecutionOutdatedException
    | PipelineNotFoundException
    | StageNotFoundException
    | UnableToRollbackStageException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartPipelineExecution {
  export type Input = StartPipelineExecutionInput;
  export type Output = StartPipelineExecutionOutput;
  export type Error =
    | ConcurrentPipelineExecutionsLimitExceededException
    | ConflictException
    | PipelineNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopPipelineExecution {
  export type Input = StopPipelineExecutionInput;
  export type Output = StopPipelineExecutionOutput;
  export type Error =
    | ConflictException
    | DuplicatedStopRequestException
    | PipelineExecutionNotStoppableException
    | PipelineNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidTagsException
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidTagsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateActionType {
  export type Input = UpdateActionTypeInput;
  export type Output = {};
  export type Error =
    | ActionTypeNotFoundException
    | RequestFailedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePipeline {
  export type Input = UpdatePipelineInput;
  export type Output = UpdatePipelineOutput;
  export type Error =
    | InvalidActionDeclarationException
    | InvalidBlockerDeclarationException
    | InvalidStageDeclarationException
    | InvalidStructureException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

