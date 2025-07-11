import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSStepFunctions {
  createActivity(
    input: CreateActivityInput,
  ): Effect.Effect<
    CreateActivityOutput,
    | ActivityAlreadyExists
    | ActivityLimitExceeded
    | InvalidEncryptionConfiguration
    | InvalidName
    | KmsAccessDeniedException
    | KmsThrottlingException
    | TooManyTags
    | CommonAwsError
  >;
  createStateMachine(
    input: CreateStateMachineInput,
  ): Effect.Effect<
    CreateStateMachineOutput,
    | ConflictException
    | InvalidArn
    | InvalidDefinition
    | InvalidEncryptionConfiguration
    | InvalidLoggingConfiguration
    | InvalidName
    | InvalidTracingConfiguration
    | KmsAccessDeniedException
    | KmsThrottlingException
    | StateMachineAlreadyExists
    | StateMachineDeleting
    | StateMachineLimitExceeded
    | StateMachineTypeNotSupported
    | TooManyTags
    | ValidationException
    | CommonAwsError
  >;
  createStateMachineAlias(
    input: CreateStateMachineAliasInput,
  ): Effect.Effect<
    CreateStateMachineAliasOutput,
    | ConflictException
    | InvalidArn
    | InvalidName
    | ResourceNotFound
    | ServiceQuotaExceededException
    | StateMachineDeleting
    | ValidationException
    | CommonAwsError
  >;
  deleteActivity(
    input: DeleteActivityInput,
  ): Effect.Effect<DeleteActivityOutput, InvalidArn | CommonAwsError>;
  deleteStateMachine(
    input: DeleteStateMachineInput,
  ): Effect.Effect<
    DeleteStateMachineOutput,
    InvalidArn | ValidationException | CommonAwsError
  >;
  deleteStateMachineAlias(
    input: DeleteStateMachineAliasInput,
  ): Effect.Effect<
    DeleteStateMachineAliasOutput,
    | ConflictException
    | InvalidArn
    | ResourceNotFound
    | ValidationException
    | CommonAwsError
  >;
  deleteStateMachineVersion(
    input: DeleteStateMachineVersionInput,
  ): Effect.Effect<
    DeleteStateMachineVersionOutput,
    ConflictException | InvalidArn | ValidationException | CommonAwsError
  >;
  describeActivity(
    input: DescribeActivityInput,
  ): Effect.Effect<
    DescribeActivityOutput,
    ActivityDoesNotExist | InvalidArn | CommonAwsError
  >;
  describeExecution(
    input: DescribeExecutionInput,
  ): Effect.Effect<
    DescribeExecutionOutput,
    | ExecutionDoesNotExist
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | CommonAwsError
  >;
  describeMapRun(
    input: DescribeMapRunInput,
  ): Effect.Effect<
    DescribeMapRunOutput,
    InvalidArn | ResourceNotFound | CommonAwsError
  >;
  describeStateMachine(
    input: DescribeStateMachineInput,
  ): Effect.Effect<
    DescribeStateMachineOutput,
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | StateMachineDoesNotExist
    | CommonAwsError
  >;
  describeStateMachineAlias(
    input: DescribeStateMachineAliasInput,
  ): Effect.Effect<
    DescribeStateMachineAliasOutput,
    InvalidArn | ResourceNotFound | ValidationException | CommonAwsError
  >;
  describeStateMachineForExecution(
    input: DescribeStateMachineForExecutionInput,
  ): Effect.Effect<
    DescribeStateMachineForExecutionOutput,
    | ExecutionDoesNotExist
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | CommonAwsError
  >;
  getActivityTask(
    input: GetActivityTaskInput,
  ): Effect.Effect<
    GetActivityTaskOutput,
    | ActivityDoesNotExist
    | ActivityWorkerLimitExceeded
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | CommonAwsError
  >;
  getExecutionHistory(
    input: GetExecutionHistoryInput,
  ): Effect.Effect<
    GetExecutionHistoryOutput,
    | ExecutionDoesNotExist
    | InvalidArn
    | InvalidToken
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | CommonAwsError
  >;
  listActivities(
    input: ListActivitiesInput,
  ): Effect.Effect<ListActivitiesOutput, InvalidToken | CommonAwsError>;
  listExecutions(
    input: ListExecutionsInput,
  ): Effect.Effect<
    ListExecutionsOutput,
    | InvalidArn
    | InvalidToken
    | ResourceNotFound
    | StateMachineDoesNotExist
    | StateMachineTypeNotSupported
    | ValidationException
    | CommonAwsError
  >;
  listMapRuns(
    input: ListMapRunsInput,
  ): Effect.Effect<
    ListMapRunsOutput,
    ExecutionDoesNotExist | InvalidArn | InvalidToken | CommonAwsError
  >;
  listStateMachineAliases(
    input: ListStateMachineAliasesInput,
  ): Effect.Effect<
    ListStateMachineAliasesOutput,
    | InvalidArn
    | InvalidToken
    | ResourceNotFound
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | CommonAwsError
  >;
  listStateMachines(
    input: ListStateMachinesInput,
  ): Effect.Effect<ListStateMachinesOutput, InvalidToken | CommonAwsError>;
  listStateMachineVersions(
    input: ListStateMachineVersionsInput,
  ): Effect.Effect<
    ListStateMachineVersionsOutput,
    InvalidArn | InvalidToken | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    InvalidArn | ResourceNotFound | CommonAwsError
  >;
  publishStateMachineVersion(
    input: PublishStateMachineVersionInput,
  ): Effect.Effect<
    PublishStateMachineVersionOutput,
    | ConflictException
    | InvalidArn
    | ServiceQuotaExceededException
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | ValidationException
    | CommonAwsError
  >;
  redriveExecution(
    input: RedriveExecutionInput,
  ): Effect.Effect<
    RedriveExecutionOutput,
    | ExecutionDoesNotExist
    | ExecutionLimitExceeded
    | ExecutionNotRedrivable
    | InvalidArn
    | ValidationException
    | CommonAwsError
  >;
  sendTaskFailure(
    input: SendTaskFailureInput,
  ): Effect.Effect<
    SendTaskFailureOutput,
    | InvalidToken
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | TaskDoesNotExist
    | TaskTimedOut
    | CommonAwsError
  >;
  sendTaskHeartbeat(
    input: SendTaskHeartbeatInput,
  ): Effect.Effect<
    SendTaskHeartbeatOutput,
    InvalidToken | TaskDoesNotExist | TaskTimedOut | CommonAwsError
  >;
  sendTaskSuccess(
    input: SendTaskSuccessInput,
  ): Effect.Effect<
    SendTaskSuccessOutput,
    | InvalidOutput
    | InvalidToken
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | TaskDoesNotExist
    | TaskTimedOut
    | CommonAwsError
  >;
  startExecution(
    input: StartExecutionInput,
  ): Effect.Effect<
    StartExecutionOutput,
    | ExecutionAlreadyExists
    | ExecutionLimitExceeded
    | InvalidArn
    | InvalidExecutionInput
    | InvalidName
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | ValidationException
    | CommonAwsError
  >;
  startSyncExecution(
    input: StartSyncExecutionInput,
  ): Effect.Effect<
    StartSyncExecutionOutput,
    | InvalidArn
    | InvalidExecutionInput
    | InvalidName
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | StateMachineTypeNotSupported
    | CommonAwsError
  >;
  stopExecution(
    input: StopExecutionInput,
  ): Effect.Effect<
    StopExecutionOutput,
    | ExecutionDoesNotExist
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    InvalidArn | ResourceNotFound | TooManyTags | CommonAwsError
  >;
  testState(
    input: TestStateInput,
  ): Effect.Effect<
    TestStateOutput,
    | InvalidArn
    | InvalidDefinition
    | InvalidExecutionInput
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    InvalidArn | ResourceNotFound | CommonAwsError
  >;
  updateMapRun(
    input: UpdateMapRunInput,
  ): Effect.Effect<
    UpdateMapRunOutput,
    InvalidArn | ResourceNotFound | ValidationException | CommonAwsError
  >;
  updateStateMachine(
    input: UpdateStateMachineInput,
  ): Effect.Effect<
    UpdateStateMachineOutput,
    | ConflictException
    | InvalidArn
    | InvalidDefinition
    | InvalidEncryptionConfiguration
    | InvalidLoggingConfiguration
    | InvalidTracingConfiguration
    | KmsAccessDeniedException
    | KmsThrottlingException
    | MissingRequiredParameter
    | ServiceQuotaExceededException
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | ValidationException
    | CommonAwsError
  >;
  updateStateMachineAlias(
    input: UpdateStateMachineAliasInput,
  ): Effect.Effect<
    UpdateStateMachineAliasOutput,
    | ConflictException
    | InvalidArn
    | ResourceNotFound
    | StateMachineDeleting
    | ValidationException
    | CommonAwsError
  >;
  validateStateMachineDefinition(
    input: ValidateStateMachineDefinitionInput,
  ): Effect.Effect<
    ValidateStateMachineDefinitionOutput,
    ValidationException | CommonAwsError
  >;
}

export type Sfn = AWSStepFunctions;

export declare class ActivityAlreadyExists extends EffectData.TaggedError(
  "ActivityAlreadyExists",
)<{
  readonly message?: string;
}> {}
export declare class ActivityDoesNotExist extends EffectData.TaggedError(
  "ActivityDoesNotExist",
)<{
  readonly message?: string;
}> {}
export interface ActivityFailedEventDetails {
  error?: string;
  cause?: string;
}
export declare class ActivityLimitExceeded extends EffectData.TaggedError(
  "ActivityLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type ActivityList = Array<ActivityListItem>;
export interface ActivityListItem {
  activityArn: string;
  name: string;
  creationDate: Date | string;
}
export interface ActivityScheduledEventDetails {
  resource: string;
  input?: string;
  inputDetails?: HistoryEventExecutionDataDetails;
  timeoutInSeconds?: number;
  heartbeatInSeconds?: number;
}
export interface ActivityScheduleFailedEventDetails {
  error?: string;
  cause?: string;
}
export interface ActivityStartedEventDetails {
  workerName?: string;
}
export interface ActivitySucceededEventDetails {
  output?: string;
  outputDetails?: HistoryEventExecutionDataDetails;
}
export interface ActivityTimedOutEventDetails {
  error?: string;
  cause?: string;
}
export declare class ActivityWorkerLimitExceeded extends EffectData.TaggedError(
  "ActivityWorkerLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type AliasDescription = string;

export type Arn = string;

export type AssignedVariables = Record<string, string>;
export interface AssignedVariablesDetails {
  truncated?: boolean;
}
export type BilledDuration = number;

export type BilledMemoryUsed = number;

export interface BillingDetails {
  billedMemoryUsedInMB?: number;
  billedDurationInMilliseconds?: number;
}
export type CharacterRestrictedName = string;

export type ClientToken = string;

export interface CloudWatchEventsExecutionDataDetails {
  included?: boolean;
}
export interface CloudWatchLogsLogGroup {
  logGroupArn?: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ConnectorParameters = string;

export interface CreateActivityInput {
  name: string;
  tags?: Array<Tag>;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface CreateActivityOutput {
  activityArn: string;
  creationDate: Date | string;
}
export interface CreateStateMachineAliasInput {
  description?: string;
  name: string;
  routingConfiguration: Array<RoutingConfigurationListItem>;
}
export interface CreateStateMachineAliasOutput {
  stateMachineAliasArn: string;
  creationDate: Date | string;
}
export interface CreateStateMachineInput {
  name: string;
  definition: string;
  roleArn: string;
  type?: StateMachineType;
  loggingConfiguration?: LoggingConfiguration;
  tags?: Array<Tag>;
  tracingConfiguration?: TracingConfiguration;
  publish?: boolean;
  versionDescription?: string;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface CreateStateMachineOutput {
  stateMachineArn: string;
  creationDate: Date | string;
  stateMachineVersionArn?: string;
}
export type Definition = string;

export interface DeleteActivityInput {
  activityArn: string;
}
export interface DeleteActivityOutput {}
export interface DeleteStateMachineAliasInput {
  stateMachineAliasArn: string;
}
export interface DeleteStateMachineAliasOutput {}
export interface DeleteStateMachineInput {
  stateMachineArn: string;
}
export interface DeleteStateMachineOutput {}
export interface DeleteStateMachineVersionInput {
  stateMachineVersionArn: string;
}
export interface DeleteStateMachineVersionOutput {}
export interface DescribeActivityInput {
  activityArn: string;
}
export interface DescribeActivityOutput {
  activityArn: string;
  name: string;
  creationDate: Date | string;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface DescribeExecutionInput {
  executionArn: string;
  includedData?: IncludedData;
}
export interface DescribeExecutionOutput {
  executionArn: string;
  stateMachineArn: string;
  name?: string;
  status: ExecutionStatus;
  startDate: Date | string;
  stopDate?: Date | string;
  input?: string;
  inputDetails?: CloudWatchEventsExecutionDataDetails;
  output?: string;
  outputDetails?: CloudWatchEventsExecutionDataDetails;
  traceHeader?: string;
  mapRunArn?: string;
  error?: string;
  cause?: string;
  stateMachineVersionArn?: string;
  stateMachineAliasArn?: string;
  redriveCount?: number;
  redriveDate?: Date | string;
  redriveStatus?: ExecutionRedriveStatus;
  redriveStatusReason?: string;
}
export interface DescribeMapRunInput {
  mapRunArn: string;
}
export interface DescribeMapRunOutput {
  mapRunArn: string;
  executionArn: string;
  status: MapRunStatus;
  startDate: Date | string;
  stopDate?: Date | string;
  maxConcurrency: number;
  toleratedFailurePercentage: number;
  toleratedFailureCount: number;
  itemCounts: MapRunItemCounts;
  executionCounts: MapRunExecutionCounts;
  redriveCount?: number;
  redriveDate?: Date | string;
}
export interface DescribeStateMachineAliasInput {
  stateMachineAliasArn: string;
}
export interface DescribeStateMachineAliasOutput {
  stateMachineAliasArn?: string;
  name?: string;
  description?: string;
  routingConfiguration?: Array<RoutingConfigurationListItem>;
  creationDate?: Date | string;
  updateDate?: Date | string;
}
export interface DescribeStateMachineForExecutionInput {
  executionArn: string;
  includedData?: IncludedData;
}
export interface DescribeStateMachineForExecutionOutput {
  stateMachineArn: string;
  name: string;
  definition: string;
  roleArn: string;
  updateDate: Date | string;
  loggingConfiguration?: LoggingConfiguration;
  tracingConfiguration?: TracingConfiguration;
  mapRunArn?: string;
  label?: string;
  revisionId?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  variableReferences?: Record<string, Array<string>>;
}
export interface DescribeStateMachineInput {
  stateMachineArn: string;
  includedData?: IncludedData;
}
export interface DescribeStateMachineOutput {
  stateMachineArn: string;
  name: string;
  status?: StateMachineStatus;
  definition: string;
  roleArn: string;
  type: StateMachineType;
  creationDate: Date | string;
  loggingConfiguration?: LoggingConfiguration;
  tracingConfiguration?: TracingConfiguration;
  label?: string;
  revisionId?: string;
  description?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  variableReferences?: Record<string, Array<string>>;
}
export type Enabled = boolean;

export interface EncryptionConfiguration {
  kmsKeyId?: string;
  kmsDataKeyReusePeriodSeconds?: number;
  type: EncryptionType;
}
export type EncryptionType = "AWS_OWNED_KEY" | "CUSTOMER_MANAGED_KMS_KEY";
export type ErrorMessage = string;

export interface EvaluationFailedEventDetails {
  error?: string;
  cause?: string;
  location?: string;
  state: string;
}
export type EvaluationFailureLocation = string;

export type EventId = number;

export interface ExecutionAbortedEventDetails {
  error?: string;
  cause?: string;
}
export declare class ExecutionAlreadyExists extends EffectData.TaggedError(
  "ExecutionAlreadyExists",
)<{
  readonly message?: string;
}> {}
export declare class ExecutionDoesNotExist extends EffectData.TaggedError(
  "ExecutionDoesNotExist",
)<{
  readonly message?: string;
}> {}
export interface ExecutionFailedEventDetails {
  error?: string;
  cause?: string;
}
export declare class ExecutionLimitExceeded extends EffectData.TaggedError(
  "ExecutionLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type ExecutionList = Array<ExecutionListItem>;
export interface ExecutionListItem {
  executionArn: string;
  stateMachineArn: string;
  name: string;
  status: ExecutionStatus;
  startDate: Date | string;
  stopDate?: Date | string;
  mapRunArn?: string;
  itemCount?: number;
  stateMachineVersionArn?: string;
  stateMachineAliasArn?: string;
  redriveCount?: number;
  redriveDate?: Date | string;
}
export declare class ExecutionNotRedrivable extends EffectData.TaggedError(
  "ExecutionNotRedrivable",
)<{
  readonly message?: string;
}> {}
export type ExecutionRedriveFilter = "REDRIVEN" | "NOT_REDRIVEN";
export interface ExecutionRedrivenEventDetails {
  redriveCount?: number;
}
export type ExecutionRedriveStatus =
  | "REDRIVABLE"
  | "NOT_REDRIVABLE"
  | "REDRIVABLE_BY_MAP_RUN";
export interface ExecutionStartedEventDetails {
  input?: string;
  inputDetails?: HistoryEventExecutionDataDetails;
  roleArn?: string;
  stateMachineAliasArn?: string;
  stateMachineVersionArn?: string;
}
export type ExecutionStatus =
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | "ABORTED"
  | "PENDING_REDRIVE";
export interface ExecutionSucceededEventDetails {
  output?: string;
  outputDetails?: HistoryEventExecutionDataDetails;
}
export interface ExecutionTimedOutEventDetails {
  error?: string;
  cause?: string;
}
export interface GetActivityTaskInput {
  activityArn: string;
  workerName?: string;
}
export interface GetActivityTaskOutput {
  taskToken?: string;
  input?: string;
}
export interface GetExecutionHistoryInput {
  executionArn: string;
  maxResults?: number;
  reverseOrder?: boolean;
  nextToken?: string;
  includeExecutionData?: boolean;
}
export interface GetExecutionHistoryOutput {
  events: Array<HistoryEvent>;
  nextToken?: string;
}
export interface HistoryEvent {
  timestamp: Date | string;
  type: HistoryEventType;
  id: number;
  previousEventId?: number;
  activityFailedEventDetails?: ActivityFailedEventDetails;
  activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;
  activityScheduledEventDetails?: ActivityScheduledEventDetails;
  activityStartedEventDetails?: ActivityStartedEventDetails;
  activitySucceededEventDetails?: ActivitySucceededEventDetails;
  activityTimedOutEventDetails?: ActivityTimedOutEventDetails;
  taskFailedEventDetails?: TaskFailedEventDetails;
  taskScheduledEventDetails?: TaskScheduledEventDetails;
  taskStartFailedEventDetails?: TaskStartFailedEventDetails;
  taskStartedEventDetails?: TaskStartedEventDetails;
  taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails;
  taskSubmittedEventDetails?: TaskSubmittedEventDetails;
  taskSucceededEventDetails?: TaskSucceededEventDetails;
  taskTimedOutEventDetails?: TaskTimedOutEventDetails;
  executionFailedEventDetails?: ExecutionFailedEventDetails;
  executionStartedEventDetails?: ExecutionStartedEventDetails;
  executionSucceededEventDetails?: ExecutionSucceededEventDetails;
  executionAbortedEventDetails?: ExecutionAbortedEventDetails;
  executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;
  executionRedrivenEventDetails?: ExecutionRedrivenEventDetails;
  mapStateStartedEventDetails?: MapStateStartedEventDetails;
  mapIterationStartedEventDetails?: MapIterationEventDetails;
  mapIterationSucceededEventDetails?: MapIterationEventDetails;
  mapIterationFailedEventDetails?: MapIterationEventDetails;
  mapIterationAbortedEventDetails?: MapIterationEventDetails;
  lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;
  lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;
  lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;
  lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;
  lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;
  lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;
  stateEnteredEventDetails?: StateEnteredEventDetails;
  stateExitedEventDetails?: StateExitedEventDetails;
  mapRunStartedEventDetails?: MapRunStartedEventDetails;
  mapRunFailedEventDetails?: MapRunFailedEventDetails;
  mapRunRedrivenEventDetails?: MapRunRedrivenEventDetails;
  evaluationFailedEventDetails?: EvaluationFailedEventDetails;
}
export interface HistoryEventExecutionDataDetails {
  truncated?: boolean;
}
export type HistoryEventList = Array<HistoryEvent>;
export type HistoryEventType =
  | "ActivityFailed"
  | "ActivityScheduled"
  | "ActivityScheduleFailed"
  | "ActivityStarted"
  | "ActivitySucceeded"
  | "ActivityTimedOut"
  | "ChoiceStateEntered"
  | "ChoiceStateExited"
  | "ExecutionAborted"
  | "ExecutionFailed"
  | "ExecutionStarted"
  | "ExecutionSucceeded"
  | "ExecutionTimedOut"
  | "FailStateEntered"
  | "LambdaFunctionFailed"
  | "LambdaFunctionScheduled"
  | "LambdaFunctionScheduleFailed"
  | "LambdaFunctionStarted"
  | "LambdaFunctionStartFailed"
  | "LambdaFunctionSucceeded"
  | "LambdaFunctionTimedOut"
  | "MapIterationAborted"
  | "MapIterationFailed"
  | "MapIterationStarted"
  | "MapIterationSucceeded"
  | "MapStateAborted"
  | "MapStateEntered"
  | "MapStateExited"
  | "MapStateFailed"
  | "MapStateStarted"
  | "MapStateSucceeded"
  | "ParallelStateAborted"
  | "ParallelStateEntered"
  | "ParallelStateExited"
  | "ParallelStateFailed"
  | "ParallelStateStarted"
  | "ParallelStateSucceeded"
  | "PassStateEntered"
  | "PassStateExited"
  | "SucceedStateEntered"
  | "SucceedStateExited"
  | "TaskFailed"
  | "TaskScheduled"
  | "TaskStarted"
  | "TaskStartFailed"
  | "TaskStateAborted"
  | "TaskStateEntered"
  | "TaskStateExited"
  | "TaskSubmitFailed"
  | "TaskSubmitted"
  | "TaskSucceeded"
  | "TaskTimedOut"
  | "WaitStateAborted"
  | "WaitStateEntered"
  | "WaitStateExited"
  | "MapRunAborted"
  | "MapRunFailed"
  | "MapRunStarted"
  | "MapRunSucceeded"
  | "ExecutionRedriven"
  | "MapRunRedriven"
  | "EvaluationFailed";
export type HTTPBody = string;

export type HTTPHeaders = string;

export type HTTPMethod = string;

export type HTTPProtocol = string;

export type HTTPStatusCode = string;

export type HTTPStatusMessage = string;

export type Identity = string;

export type IncludedData = "ALL_DATA" | "METADATA_ONLY";
export type includedDetails = boolean;

export type IncludeExecutionData = boolean;

export type IncludeExecutionDataGetExecutionHistory = boolean;

export interface InspectionData {
  input?: string;
  afterArguments?: string;
  afterInputPath?: string;
  afterParameters?: string;
  result?: string;
  afterResultSelector?: string;
  afterResultPath?: string;
  request?: InspectionDataRequest;
  response?: InspectionDataResponse;
  variables?: string;
}
export interface InspectionDataRequest {
  protocol?: string;
  method?: string;
  url?: string;
  headers?: string;
  body?: string;
}
export interface InspectionDataResponse {
  protocol?: string;
  statusCode?: string;
  statusMessage?: string;
  headers?: string;
  body?: string;
}
export type InspectionLevel = "INFO" | "DEBUG" | "TRACE";
export declare class InvalidArn extends EffectData.TaggedError("InvalidArn")<{
  readonly message?: string;
}> {}
export declare class InvalidDefinition extends EffectData.TaggedError(
  "InvalidDefinition",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEncryptionConfiguration extends EffectData.TaggedError(
  "InvalidEncryptionConfiguration",
)<{
  readonly message?: string;
}> {}
export declare class InvalidExecutionInput extends EffectData.TaggedError(
  "InvalidExecutionInput",
)<{
  readonly message?: string;
}> {}
export declare class InvalidLoggingConfiguration extends EffectData.TaggedError(
  "InvalidLoggingConfiguration",
)<{
  readonly message?: string;
}> {}
export declare class InvalidName extends EffectData.TaggedError("InvalidName")<{
  readonly message?: string;
}> {}
export declare class InvalidOutput extends EffectData.TaggedError(
  "InvalidOutput",
)<{
  readonly message?: string;
}> {}
export declare class InvalidToken extends EffectData.TaggedError(
  "InvalidToken",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTracingConfiguration extends EffectData.TaggedError(
  "InvalidTracingConfiguration",
)<{
  readonly message?: string;
}> {}
export declare class KmsAccessDeniedException extends EffectData.TaggedError(
  "KmsAccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type KmsDataKeyReusePeriodSeconds = number;

export declare class KmsInvalidStateException extends EffectData.TaggedError(
  "KmsInvalidStateException",
)<{
  readonly kmsKeyState?: KmsKeyState;
  readonly message?: string;
}> {}
export type KmsKeyId = string;

export type KmsKeyState =
  | "DISABLED"
  | "PENDING_DELETION"
  | "PENDING_IMPORT"
  | "UNAVAILABLE"
  | "CREATING";
export declare class KmsThrottlingException extends EffectData.TaggedError(
  "KmsThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface LambdaFunctionFailedEventDetails {
  error?: string;
  cause?: string;
}
export interface LambdaFunctionScheduledEventDetails {
  resource: string;
  input?: string;
  inputDetails?: HistoryEventExecutionDataDetails;
  timeoutInSeconds?: number;
  taskCredentials?: TaskCredentials;
}
export interface LambdaFunctionScheduleFailedEventDetails {
  error?: string;
  cause?: string;
}
export interface LambdaFunctionStartFailedEventDetails {
  error?: string;
  cause?: string;
}
export interface LambdaFunctionSucceededEventDetails {
  output?: string;
  outputDetails?: HistoryEventExecutionDataDetails;
}
export interface LambdaFunctionTimedOutEventDetails {
  error?: string;
  cause?: string;
}
export interface ListActivitiesInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListActivitiesOutput {
  activities: Array<ActivityListItem>;
  nextToken?: string;
}
export interface ListExecutionsInput {
  stateMachineArn?: string;
  statusFilter?: ExecutionStatus;
  maxResults?: number;
  nextToken?: string;
  mapRunArn?: string;
  redriveFilter?: ExecutionRedriveFilter;
}
export interface ListExecutionsOutput {
  executions: Array<ExecutionListItem>;
  nextToken?: string;
}
export type ListExecutionsPageToken = string;

export interface ListMapRunsInput {
  executionArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListMapRunsOutput {
  mapRuns: Array<MapRunListItem>;
  nextToken?: string;
}
export interface ListStateMachineAliasesInput {
  stateMachineArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStateMachineAliasesOutput {
  stateMachineAliases: Array<StateMachineAliasListItem>;
  nextToken?: string;
}
export interface ListStateMachinesInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListStateMachinesOutput {
  stateMachines: Array<StateMachineListItem>;
  nextToken?: string;
}
export interface ListStateMachineVersionsInput {
  stateMachineArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStateMachineVersionsOutput {
  stateMachineVersions: Array<StateMachineVersionListItem>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Array<Tag>;
}
export interface LogDestination {
  cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}
export type LogDestinationList = Array<LogDestination>;
export interface LoggingConfiguration {
  level?: LogLevel;
  includeExecutionData?: boolean;
  destinations?: Array<LogDestination>;
}
export type LogLevel = "ALL" | "ERROR" | "FATAL" | "OFF";
export type LongArn = string;

export type LongObject = number;

export interface MapIterationEventDetails {
  name?: string;
  index?: number;
}
export interface MapRunExecutionCounts {
  pending: number;
  running: number;
  succeeded: number;
  failed: number;
  timedOut: number;
  aborted: number;
  total: number;
  resultsWritten: number;
  failuresNotRedrivable?: number;
  pendingRedrive?: number;
}
export interface MapRunFailedEventDetails {
  error?: string;
  cause?: string;
}
export interface MapRunItemCounts {
  pending: number;
  running: number;
  succeeded: number;
  failed: number;
  timedOut: number;
  aborted: number;
  total: number;
  resultsWritten: number;
  failuresNotRedrivable?: number;
  pendingRedrive?: number;
}
export type MapRunLabel = string;

export type MapRunList = Array<MapRunListItem>;
export interface MapRunListItem {
  executionArn: string;
  mapRunArn: string;
  stateMachineArn: string;
  startDate: Date | string;
  stopDate?: Date | string;
}
export interface MapRunRedrivenEventDetails {
  mapRunArn?: string;
  redriveCount?: number;
}
export interface MapRunStartedEventDetails {
  mapRunArn?: string;
}
export type MapRunStatus = "RUNNING" | "SUCCEEDED" | "FAILED" | "ABORTED";
export interface MapStateStartedEventDetails {
  length?: number;
}
export type MaxConcurrency = number;

export declare class MissingRequiredParameter extends EffectData.TaggedError(
  "MissingRequiredParameter",
)<{
  readonly message?: string;
}> {}
export type Name = string;

export type PageSize = number;

export type PageToken = string;

export type Publish = boolean;

export interface PublishStateMachineVersionInput {
  stateMachineArn: string;
  revisionId?: string;
  description?: string;
}
export interface PublishStateMachineVersionOutput {
  creationDate: Date | string;
  stateMachineVersionArn: string;
}
export type RedriveCount = number;

export interface RedriveExecutionInput {
  executionArn: string;
  clientToken?: string;
}
export interface RedriveExecutionOutput {
  redriveDate: Date | string;
}
export declare class ResourceNotFound extends EffectData.TaggedError(
  "ResourceNotFound",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export type RevealSecrets = boolean;

export type ReverseOrder = boolean;

export type RevisionId = string;

export type RoutingConfigurationList = Array<RoutingConfigurationListItem>;
export interface RoutingConfigurationListItem {
  stateMachineVersionArn: string;
  weight: number;
}
export interface SendTaskFailureInput {
  taskToken: string;
  error?: string;
  cause?: string;
}
export interface SendTaskFailureOutput {}
export interface SendTaskHeartbeatInput {
  taskToken: string;
}
export interface SendTaskHeartbeatOutput {}
export interface SendTaskSuccessInput {
  taskToken: string;
  output: string;
}
export interface SendTaskSuccessOutput {}
export type SensitiveCause = string;

export type SensitiveData = string;

export type SensitiveDataJobInput = string;

export type SensitiveError = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface StartExecutionInput {
  stateMachineArn: string;
  name?: string;
  input?: string;
  traceHeader?: string;
}
export interface StartExecutionOutput {
  executionArn: string;
  startDate: Date | string;
}
export interface StartSyncExecutionInput {
  stateMachineArn: string;
  name?: string;
  input?: string;
  traceHeader?: string;
  includedData?: IncludedData;
}
export interface StartSyncExecutionOutput {
  executionArn: string;
  stateMachineArn?: string;
  name?: string;
  startDate: Date | string;
  stopDate: Date | string;
  status: SyncExecutionStatus;
  error?: string;
  cause?: string;
  input?: string;
  inputDetails?: CloudWatchEventsExecutionDataDetails;
  output?: string;
  outputDetails?: CloudWatchEventsExecutionDataDetails;
  traceHeader?: string;
  billingDetails?: BillingDetails;
}
export interface StateEnteredEventDetails {
  name: string;
  input?: string;
  inputDetails?: HistoryEventExecutionDataDetails;
}
export interface StateExitedEventDetails {
  name: string;
  output?: string;
  outputDetails?: HistoryEventExecutionDataDetails;
  assignedVariables?: Record<string, string>;
  assignedVariablesDetails?: AssignedVariablesDetails;
}
export type StateMachineAliasList = Array<StateMachineAliasListItem>;
export interface StateMachineAliasListItem {
  stateMachineAliasArn: string;
  creationDate: Date | string;
}
export declare class StateMachineAlreadyExists extends EffectData.TaggedError(
  "StateMachineAlreadyExists",
)<{
  readonly message?: string;
}> {}
export declare class StateMachineDeleting extends EffectData.TaggedError(
  "StateMachineDeleting",
)<{
  readonly message?: string;
}> {}
export declare class StateMachineDoesNotExist extends EffectData.TaggedError(
  "StateMachineDoesNotExist",
)<{
  readonly message?: string;
}> {}
export declare class StateMachineLimitExceeded extends EffectData.TaggedError(
  "StateMachineLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type StateMachineList = Array<StateMachineListItem>;
export interface StateMachineListItem {
  stateMachineArn: string;
  name: string;
  type: StateMachineType;
  creationDate: Date | string;
}
export type StateMachineStatus = "ACTIVE" | "DELETING";
export type StateMachineType = "STANDARD" | "EXPRESS";
export declare class StateMachineTypeNotSupported extends EffectData.TaggedError(
  "StateMachineTypeNotSupported",
)<{
  readonly message?: string;
}> {}
export type StateMachineVersionList = Array<StateMachineVersionListItem>;
export interface StateMachineVersionListItem {
  stateMachineVersionArn: string;
  creationDate: Date | string;
}
export type StateName = string;

export interface StopExecutionInput {
  executionArn: string;
  error?: string;
  cause?: string;
}
export interface StopExecutionOutput {
  stopDate: Date | string;
}
export type SyncExecutionStatus = "SUCCEEDED" | "FAILED" | "TIMED_OUT";
export interface Tag {
  key?: string;
  value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export interface TaskCredentials {
  roleArn?: string;
}
export declare class TaskDoesNotExist extends EffectData.TaggedError(
  "TaskDoesNotExist",
)<{
  readonly message?: string;
}> {}
export interface TaskFailedEventDetails {
  resourceType: string;
  resource: string;
  error?: string;
  cause?: string;
}
export interface TaskScheduledEventDetails {
  resourceType: string;
  resource: string;
  region: string;
  parameters: string;
  timeoutInSeconds?: number;
  heartbeatInSeconds?: number;
  taskCredentials?: TaskCredentials;
}
export interface TaskStartedEventDetails {
  resourceType: string;
  resource: string;
}
export interface TaskStartFailedEventDetails {
  resourceType: string;
  resource: string;
  error?: string;
  cause?: string;
}
export interface TaskSubmitFailedEventDetails {
  resourceType: string;
  resource: string;
  error?: string;
  cause?: string;
}
export interface TaskSubmittedEventDetails {
  resourceType: string;
  resource: string;
  output?: string;
  outputDetails?: HistoryEventExecutionDataDetails;
}
export interface TaskSucceededEventDetails {
  resourceType: string;
  resource: string;
  output?: string;
  outputDetails?: HistoryEventExecutionDataDetails;
}
export declare class TaskTimedOut extends EffectData.TaggedError(
  "TaskTimedOut",
)<{
  readonly message?: string;
}> {}
export interface TaskTimedOutEventDetails {
  resourceType: string;
  resource: string;
  error?: string;
  cause?: string;
}
export type TaskToken = string;

export type TestExecutionStatus =
  | "SUCCEEDED"
  | "FAILED"
  | "RETRIABLE"
  | "CAUGHT_ERROR";
export interface TestStateInput {
  definition: string;
  roleArn?: string;
  input?: string;
  inspectionLevel?: InspectionLevel;
  revealSecrets?: boolean;
  variables?: string;
}
export interface TestStateOutput {
  output?: string;
  error?: string;
  cause?: string;
  inspectionData?: InspectionData;
  nextState?: string;
  status?: TestExecutionStatus;
}
export type TimeoutInSeconds = number;

export type Timestamp = Date | string;

export type ToleratedFailureCount = number;

export type ToleratedFailurePercentage = number;

export declare class TooManyTags extends EffectData.TaggedError("TooManyTags")<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export type TraceHeader = string;

export interface TracingConfiguration {
  enabled?: boolean;
}
export type truncated = boolean;

export type UnsignedInteger = number;

export type UnsignedLong = number;

export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateMapRunInput {
  mapRunArn: string;
  maxConcurrency?: number;
  toleratedFailurePercentage?: number;
  toleratedFailureCount?: number;
}
export interface UpdateMapRunOutput {}
export interface UpdateStateMachineAliasInput {
  stateMachineAliasArn: string;
  description?: string;
  routingConfiguration?: Array<RoutingConfigurationListItem>;
}
export interface UpdateStateMachineAliasOutput {
  updateDate: Date | string;
}
export interface UpdateStateMachineInput {
  stateMachineArn: string;
  definition?: string;
  roleArn?: string;
  loggingConfiguration?: LoggingConfiguration;
  tracingConfiguration?: TracingConfiguration;
  publish?: boolean;
  versionDescription?: string;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateStateMachineOutput {
  updateDate: Date | string;
  revisionId?: string;
  stateMachineVersionArn?: string;
}
export type URL = string;

export type ValidateStateMachineDefinitionCode = string;

export interface ValidateStateMachineDefinitionDiagnostic {
  severity: ValidateStateMachineDefinitionSeverity;
  code: string;
  message: string;
  location?: string;
}
export type ValidateStateMachineDefinitionDiagnosticList =
  Array<ValidateStateMachineDefinitionDiagnostic>;
export interface ValidateStateMachineDefinitionInput {
  definition: string;
  type?: StateMachineType;
  severity?: ValidateStateMachineDefinitionSeverity;
  maxResults?: number;
}
export type ValidateStateMachineDefinitionLocation = string;

export type ValidateStateMachineDefinitionMaxResult = number;

export type ValidateStateMachineDefinitionMessage = string;

export interface ValidateStateMachineDefinitionOutput {
  result: ValidateStateMachineDefinitionResultCode;
  diagnostics: Array<ValidateStateMachineDefinitionDiagnostic>;
  truncated?: boolean;
}
export type ValidateStateMachineDefinitionResultCode = "OK" | "FAIL";
export type ValidateStateMachineDefinitionSeverity = "ERROR" | "WARNING";
export type ValidateStateMachineDefinitionTruncated = boolean;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly reason?: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason =
  | "API_DOES_NOT_SUPPORT_LABELED_ARNS"
  | "MISSING_REQUIRED_PARAMETER"
  | "CANNOT_UPDATE_COMPLETED_MAP_RUN"
  | "INVALID_ROUTING_CONFIGURATION";
export type VariableName = string;

export type VariableNameList = Array<string>;
export type VariableReferences = Record<string, Array<string>>;
export type VariableValue = string;

export type VersionDescription = string;

export type VersionWeight = number;

export declare namespace CreateActivity {
  export type Input = CreateActivityInput;
  export type Output = CreateActivityOutput;
  export type Error =
    | ActivityAlreadyExists
    | ActivityLimitExceeded
    | InvalidEncryptionConfiguration
    | InvalidName
    | KmsAccessDeniedException
    | KmsThrottlingException
    | TooManyTags
    | CommonAwsError;
}

export declare namespace CreateStateMachine {
  export type Input = CreateStateMachineInput;
  export type Output = CreateStateMachineOutput;
  export type Error =
    | ConflictException
    | InvalidArn
    | InvalidDefinition
    | InvalidEncryptionConfiguration
    | InvalidLoggingConfiguration
    | InvalidName
    | InvalidTracingConfiguration
    | KmsAccessDeniedException
    | KmsThrottlingException
    | StateMachineAlreadyExists
    | StateMachineDeleting
    | StateMachineLimitExceeded
    | StateMachineTypeNotSupported
    | TooManyTags
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateStateMachineAlias {
  export type Input = CreateStateMachineAliasInput;
  export type Output = CreateStateMachineAliasOutput;
  export type Error =
    | ConflictException
    | InvalidArn
    | InvalidName
    | ResourceNotFound
    | ServiceQuotaExceededException
    | StateMachineDeleting
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteActivity {
  export type Input = DeleteActivityInput;
  export type Output = DeleteActivityOutput;
  export type Error = InvalidArn | CommonAwsError;
}

export declare namespace DeleteStateMachine {
  export type Input = DeleteStateMachineInput;
  export type Output = DeleteStateMachineOutput;
  export type Error = InvalidArn | ValidationException | CommonAwsError;
}

export declare namespace DeleteStateMachineAlias {
  export type Input = DeleteStateMachineAliasInput;
  export type Output = DeleteStateMachineAliasOutput;
  export type Error =
    | ConflictException
    | InvalidArn
    | ResourceNotFound
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStateMachineVersion {
  export type Input = DeleteStateMachineVersionInput;
  export type Output = DeleteStateMachineVersionOutput;
  export type Error =
    | ConflictException
    | InvalidArn
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeActivity {
  export type Input = DescribeActivityInput;
  export type Output = DescribeActivityOutput;
  export type Error = ActivityDoesNotExist | InvalidArn | CommonAwsError;
}

export declare namespace DescribeExecution {
  export type Input = DescribeExecutionInput;
  export type Output = DescribeExecutionOutput;
  export type Error =
    | ExecutionDoesNotExist
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeMapRun {
  export type Input = DescribeMapRunInput;
  export type Output = DescribeMapRunOutput;
  export type Error = InvalidArn | ResourceNotFound | CommonAwsError;
}

export declare namespace DescribeStateMachine {
  export type Input = DescribeStateMachineInput;
  export type Output = DescribeStateMachineOutput;
  export type Error =
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | StateMachineDoesNotExist
    | CommonAwsError;
}

export declare namespace DescribeStateMachineAlias {
  export type Input = DescribeStateMachineAliasInput;
  export type Output = DescribeStateMachineAliasOutput;
  export type Error =
    | InvalidArn
    | ResourceNotFound
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeStateMachineForExecution {
  export type Input = DescribeStateMachineForExecutionInput;
  export type Output = DescribeStateMachineForExecutionOutput;
  export type Error =
    | ExecutionDoesNotExist
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | CommonAwsError;
}

export declare namespace GetActivityTask {
  export type Input = GetActivityTaskInput;
  export type Output = GetActivityTaskOutput;
  export type Error =
    | ActivityDoesNotExist
    | ActivityWorkerLimitExceeded
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | CommonAwsError;
}

export declare namespace GetExecutionHistory {
  export type Input = GetExecutionHistoryInput;
  export type Output = GetExecutionHistoryOutput;
  export type Error =
    | ExecutionDoesNotExist
    | InvalidArn
    | InvalidToken
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | CommonAwsError;
}

export declare namespace ListActivities {
  export type Input = ListActivitiesInput;
  export type Output = ListActivitiesOutput;
  export type Error = InvalidToken | CommonAwsError;
}

export declare namespace ListExecutions {
  export type Input = ListExecutionsInput;
  export type Output = ListExecutionsOutput;
  export type Error =
    | InvalidArn
    | InvalidToken
    | ResourceNotFound
    | StateMachineDoesNotExist
    | StateMachineTypeNotSupported
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMapRuns {
  export type Input = ListMapRunsInput;
  export type Output = ListMapRunsOutput;
  export type Error =
    | ExecutionDoesNotExist
    | InvalidArn
    | InvalidToken
    | CommonAwsError;
}

export declare namespace ListStateMachineAliases {
  export type Input = ListStateMachineAliasesInput;
  export type Output = ListStateMachineAliasesOutput;
  export type Error =
    | InvalidArn
    | InvalidToken
    | ResourceNotFound
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | CommonAwsError;
}

export declare namespace ListStateMachines {
  export type Input = ListStateMachinesInput;
  export type Output = ListStateMachinesOutput;
  export type Error = InvalidToken | CommonAwsError;
}

export declare namespace ListStateMachineVersions {
  export type Input = ListStateMachineVersionsInput;
  export type Output = ListStateMachineVersionsOutput;
  export type Error =
    | InvalidArn
    | InvalidToken
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error = InvalidArn | ResourceNotFound | CommonAwsError;
}

export declare namespace PublishStateMachineVersion {
  export type Input = PublishStateMachineVersionInput;
  export type Output = PublishStateMachineVersionOutput;
  export type Error =
    | ConflictException
    | InvalidArn
    | ServiceQuotaExceededException
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | ValidationException
    | CommonAwsError;
}

export declare namespace RedriveExecution {
  export type Input = RedriveExecutionInput;
  export type Output = RedriveExecutionOutput;
  export type Error =
    | ExecutionDoesNotExist
    | ExecutionLimitExceeded
    | ExecutionNotRedrivable
    | InvalidArn
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendTaskFailure {
  export type Input = SendTaskFailureInput;
  export type Output = SendTaskFailureOutput;
  export type Error =
    | InvalidToken
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | TaskDoesNotExist
    | TaskTimedOut
    | CommonAwsError;
}

export declare namespace SendTaskHeartbeat {
  export type Input = SendTaskHeartbeatInput;
  export type Output = SendTaskHeartbeatOutput;
  export type Error =
    | InvalidToken
    | TaskDoesNotExist
    | TaskTimedOut
    | CommonAwsError;
}

export declare namespace SendTaskSuccess {
  export type Input = SendTaskSuccessInput;
  export type Output = SendTaskSuccessOutput;
  export type Error =
    | InvalidOutput
    | InvalidToken
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | TaskDoesNotExist
    | TaskTimedOut
    | CommonAwsError;
}

export declare namespace StartExecution {
  export type Input = StartExecutionInput;
  export type Output = StartExecutionOutput;
  export type Error =
    | ExecutionAlreadyExists
    | ExecutionLimitExceeded
    | InvalidArn
    | InvalidExecutionInput
    | InvalidName
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSyncExecution {
  export type Input = StartSyncExecutionInput;
  export type Output = StartSyncExecutionOutput;
  export type Error =
    | InvalidArn
    | InvalidExecutionInput
    | InvalidName
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | StateMachineTypeNotSupported
    | CommonAwsError;
}

export declare namespace StopExecution {
  export type Input = StopExecutionInput;
  export type Output = StopExecutionOutput;
  export type Error =
    | ExecutionDoesNotExist
    | InvalidArn
    | KmsAccessDeniedException
    | KmsInvalidStateException
    | KmsThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | InvalidArn
    | ResourceNotFound
    | TooManyTags
    | CommonAwsError;
}

export declare namespace TestState {
  export type Input = TestStateInput;
  export type Output = TestStateOutput;
  export type Error =
    | InvalidArn
    | InvalidDefinition
    | InvalidExecutionInput
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error = InvalidArn | ResourceNotFound | CommonAwsError;
}

export declare namespace UpdateMapRun {
  export type Input = UpdateMapRunInput;
  export type Output = UpdateMapRunOutput;
  export type Error =
    | InvalidArn
    | ResourceNotFound
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStateMachine {
  export type Input = UpdateStateMachineInput;
  export type Output = UpdateStateMachineOutput;
  export type Error =
    | ConflictException
    | InvalidArn
    | InvalidDefinition
    | InvalidEncryptionConfiguration
    | InvalidLoggingConfiguration
    | InvalidTracingConfiguration
    | KmsAccessDeniedException
    | KmsThrottlingException
    | MissingRequiredParameter
    | ServiceQuotaExceededException
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStateMachineAlias {
  export type Input = UpdateStateMachineAliasInput;
  export type Output = UpdateStateMachineAliasOutput;
  export type Error =
    | ConflictException
    | InvalidArn
    | ResourceNotFound
    | StateMachineDeleting
    | ValidationException
    | CommonAwsError;
}

export declare namespace ValidateStateMachineDefinition {
  export type Input = ValidateStateMachineDefinitionInput;
  export type Output = ValidateStateMachineDefinitionOutput;
  export type Error = ValidationException | CommonAwsError;
}
