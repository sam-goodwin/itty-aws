import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSStepFunctions {
  createActivity(
    input: CreateActivityInput,
  ): Effect.Effect<
    {},
    ActivityAlreadyExists | ActivityLimitExceeded | InvalidEncryptionConfiguration | InvalidName | KmsAccessDeniedException | KmsThrottlingException | TooManyTags | CommonAwsError
  >;
  createStateMachine(
    input: CreateStateMachineInput,
  ): Effect.Effect<
    {},
    ConflictException | InvalidArn | InvalidDefinition | InvalidEncryptionConfiguration | InvalidLoggingConfiguration | InvalidName | InvalidTracingConfiguration | KmsAccessDeniedException | KmsThrottlingException | StateMachineAlreadyExists | StateMachineDeleting | StateMachineLimitExceeded | StateMachineTypeNotSupported | TooManyTags | ValidationException | CommonAwsError
  >;
  createStateMachineAlias(
    input: CreateStateMachineAliasInput,
  ): Effect.Effect<
    {},
    ConflictException | InvalidArn | InvalidName | ResourceNotFound | ServiceQuotaExceededException | StateMachineDeleting | ValidationException | CommonAwsError
  >;
  deleteActivity(
    input: DeleteActivityInput,
  ): Effect.Effect<
    {},
    InvalidArn | CommonAwsError
  >;
  deleteStateMachine(
    input: DeleteStateMachineInput,
  ): Effect.Effect<
    {},
    InvalidArn | ValidationException | CommonAwsError
  >;
  deleteStateMachineAlias(
    input: DeleteStateMachineAliasInput,
  ): Effect.Effect<
    {},
    ConflictException | InvalidArn | ResourceNotFound | ValidationException | CommonAwsError
  >;
  deleteStateMachineVersion(
    input: DeleteStateMachineVersionInput,
  ): Effect.Effect<
    {},
    ConflictException | InvalidArn | ValidationException | CommonAwsError
  >;
  describeActivity(
    input: DescribeActivityInput,
  ): Effect.Effect<
    {},
    ActivityDoesNotExist | InvalidArn | CommonAwsError
  >;
  describeExecution(
    input: DescribeExecutionInput,
  ): Effect.Effect<
    {},
    ExecutionDoesNotExist | InvalidArn | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | CommonAwsError
  >;
  describeMapRun(
    input: DescribeMapRunInput,
  ): Effect.Effect<
    {},
    InvalidArn | ResourceNotFound | CommonAwsError
  >;
  describeStateMachine(
    input: DescribeStateMachineInput,
  ): Effect.Effect<
    {},
    InvalidArn | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | StateMachineDoesNotExist | CommonAwsError
  >;
  describeStateMachineAlias(
    input: DescribeStateMachineAliasInput,
  ): Effect.Effect<
    {},
    InvalidArn | ResourceNotFound | ValidationException | CommonAwsError
  >;
  describeStateMachineForExecution(
    input: DescribeStateMachineForExecutionInput,
  ): Effect.Effect<
    {},
    ExecutionDoesNotExist | InvalidArn | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | CommonAwsError
  >;
  getActivityTask(
    input: GetActivityTaskInput,
  ): Effect.Effect<
    {},
    ActivityDoesNotExist | ActivityWorkerLimitExceeded | InvalidArn | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | CommonAwsError
  >;
  getExecutionHistory(
    input: GetExecutionHistoryInput,
  ): Effect.Effect<
    {},
    ExecutionDoesNotExist | InvalidArn | InvalidToken | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | CommonAwsError
  >;
  listActivities(
    input: ListActivitiesInput,
  ): Effect.Effect<
    {},
    InvalidToken | CommonAwsError
  >;
  listExecutions(
    input: ListExecutionsInput,
  ): Effect.Effect<
    {},
    InvalidArn | InvalidToken | ResourceNotFound | StateMachineDoesNotExist | StateMachineTypeNotSupported | ValidationException | CommonAwsError
  >;
  listMapRuns(
    input: ListMapRunsInput,
  ): Effect.Effect<
    {},
    ExecutionDoesNotExist | InvalidArn | InvalidToken | CommonAwsError
  >;
  listStateMachineAliases(
    input: ListStateMachineAliasesInput,
  ): Effect.Effect<
    {},
    InvalidArn | InvalidToken | ResourceNotFound | StateMachineDeleting | StateMachineDoesNotExist | CommonAwsError
  >;
  listStateMachineVersions(
    input: ListStateMachineVersionsInput,
  ): Effect.Effect<
    {},
    InvalidArn | InvalidToken | ValidationException | CommonAwsError
  >;
  listStateMachines(
    input: ListStateMachinesInput,
  ): Effect.Effect<
    {},
    InvalidToken | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    {},
    InvalidArn | ResourceNotFound | CommonAwsError
  >;
  publishStateMachineVersion(
    input: PublishStateMachineVersionInput,
  ): Effect.Effect<
    {},
    ConflictException | InvalidArn | ServiceQuotaExceededException | StateMachineDeleting | StateMachineDoesNotExist | ValidationException | CommonAwsError
  >;
  redriveExecution(
    input: RedriveExecutionInput,
  ): Effect.Effect<
    {},
    ExecutionDoesNotExist | ExecutionLimitExceeded | ExecutionNotRedrivable | InvalidArn | ValidationException | CommonAwsError
  >;
  sendTaskFailure(
    input: SendTaskFailureInput,
  ): Effect.Effect<
    {},
    InvalidToken | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | TaskDoesNotExist | TaskTimedOut | CommonAwsError
  >;
  sendTaskHeartbeat(
    input: SendTaskHeartbeatInput,
  ): Effect.Effect<
    {},
    InvalidToken | TaskDoesNotExist | TaskTimedOut | CommonAwsError
  >;
  sendTaskSuccess(
    input: SendTaskSuccessInput,
  ): Effect.Effect<
    {},
    InvalidOutput | InvalidToken | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | TaskDoesNotExist | TaskTimedOut | CommonAwsError
  >;
  startExecution(
    input: StartExecutionInput,
  ): Effect.Effect<
    {},
    ExecutionAlreadyExists | ExecutionLimitExceeded | InvalidArn | InvalidExecutionInput | InvalidName | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | StateMachineDeleting | StateMachineDoesNotExist | ValidationException | CommonAwsError
  >;
  startSyncExecution(
    input: StartSyncExecutionInput,
  ): Effect.Effect<
    {},
    InvalidArn | InvalidExecutionInput | InvalidName | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | StateMachineDeleting | StateMachineDoesNotExist | StateMachineTypeNotSupported | CommonAwsError
  >;
  stopExecution(
    input: StopExecutionInput,
  ): Effect.Effect<
    {},
    ExecutionDoesNotExist | InvalidArn | KmsAccessDeniedException | KmsInvalidStateException | KmsThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    InvalidArn | ResourceNotFound | TooManyTags | CommonAwsError
  >;
  testState(
    input: TestStateInput,
  ): Effect.Effect<
    {},
    InvalidArn | InvalidDefinition | InvalidExecutionInput | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    InvalidArn | ResourceNotFound | CommonAwsError
  >;
  updateMapRun(
    input: UpdateMapRunInput,
  ): Effect.Effect<
    {},
    InvalidArn | ResourceNotFound | ValidationException | CommonAwsError
  >;
  updateStateMachine(
    input: UpdateStateMachineInput,
  ): Effect.Effect<
    {},
    ConflictException | InvalidArn | InvalidDefinition | InvalidEncryptionConfiguration | InvalidLoggingConfiguration | InvalidTracingConfiguration | KmsAccessDeniedException | KmsThrottlingException | MissingRequiredParameter | ServiceQuotaExceededException | StateMachineDeleting | StateMachineDoesNotExist | ValidationException | CommonAwsError
  >;
  updateStateMachineAlias(
    input: UpdateStateMachineAliasInput,
  ): Effect.Effect<
    {},
    ConflictException | InvalidArn | ResourceNotFound | StateMachineDeleting | ValidationException | CommonAwsError
  >;
  validateStateMachineDefinition(
    input: ValidateStateMachineDefinitionInput,
  ): Effect.Effect<
    {},
    ValidationException | CommonAwsError
  >;
}

export type Sfn = AWSStepFunctions;

export interface ActivityAlreadyExists {
}
export interface ActivityDoesNotExist {
}
export interface ActivityFailedEventDetails {
}
export interface ActivityLimitExceeded {
}
export type ActivityList = Array<unknown>;
export interface ActivityListItem {
}
export interface ActivityScheduledEventDetails {
}
export interface ActivityScheduleFailedEventDetails {
}
export interface ActivityStartedEventDetails {
}
export interface ActivitySucceededEventDetails {
}
export interface ActivityTimedOutEventDetails {
}
export interface ActivityWorkerLimitExceeded {
}
export type AliasDescription = string;

export type Arn = string;

export type AssignedVariables = Record<string, unknown>;
export interface AssignedVariablesDetails {
}
export type BilledDuration = number;

export type BilledMemoryUsed = number;

export interface BillingDetails {
}
export type CharacterRestrictedName = string;

export type ClientToken = string;

export interface CloudWatchEventsExecutionDataDetails {
}
export interface CloudWatchLogsLogGroup {
}
export interface ConflictException {
}
export type ConnectorParameters = string;

export interface CreateActivityInput {
}
export interface CreateActivityOutput {
}
export interface CreateStateMachineAliasInput {
}
export interface CreateStateMachineAliasOutput {
}
export interface CreateStateMachineInput {
}
export interface CreateStateMachineOutput {
}
export type Definition = string;

export interface DeleteActivityInput {
}
export interface DeleteActivityOutput {
}
export interface DeleteStateMachineAliasInput {
}
export interface DeleteStateMachineAliasOutput {
}
export interface DeleteStateMachineInput {
}
export interface DeleteStateMachineOutput {
}
export interface DeleteStateMachineVersionInput {
}
export interface DeleteStateMachineVersionOutput {
}
export interface DescribeActivityInput {
}
export interface DescribeActivityOutput {
}
export interface DescribeExecutionInput {
}
export interface DescribeExecutionOutput {
}
export interface DescribeMapRunInput {
}
export interface DescribeMapRunOutput {
}
export interface DescribeStateMachineAliasInput {
}
export interface DescribeStateMachineAliasOutput {
}
export interface DescribeStateMachineForExecutionInput {
}
export interface DescribeStateMachineForExecutionOutput {
}
export interface DescribeStateMachineInput {
}
export interface DescribeStateMachineOutput {
}
export type Enabled = boolean;

export interface EncryptionConfiguration {
}
export type EncryptionType = never;
export type ErrorMessage = string;

export interface EvaluationFailedEventDetails {
}
export type EvaluationFailureLocation = string;

export type EventId = number;

export interface ExecutionAbortedEventDetails {
}
export interface ExecutionAlreadyExists {
}
export interface ExecutionDoesNotExist {
}
export interface ExecutionFailedEventDetails {
}
export interface ExecutionLimitExceeded {
}
export type ExecutionList = Array<unknown>;
export interface ExecutionListItem {
}
export interface ExecutionNotRedrivable {
}
export type ExecutionRedriveFilter = never;
export interface ExecutionRedrivenEventDetails {
}
export type ExecutionRedriveStatus = never;
export interface ExecutionStartedEventDetails {
}
export type ExecutionStatus = never;
export interface ExecutionSucceededEventDetails {
}
export interface ExecutionTimedOutEventDetails {
}
export interface GetActivityTaskInput {
}
export interface GetActivityTaskOutput {
}
export interface GetExecutionHistoryInput {
}
export interface GetExecutionHistoryOutput {
}
export interface HistoryEvent {
}
export interface HistoryEventExecutionDataDetails {
}
export type HistoryEventList = Array<unknown>;
export type HistoryEventType = never;
export type HTTPBody = string;

export type HTTPHeaders = string;

export type HTTPMethod = string;

export type HTTPProtocol = string;

export type HTTPStatusCode = string;

export type HTTPStatusMessage = string;

export type Identity = string;

export type IncludedData = never;
export type includedDetails = boolean;

export type IncludeExecutionData = boolean;

export type IncludeExecutionDataGetExecutionHistory = boolean;

export interface InspectionData {
}
export interface InspectionDataRequest {
}
export interface InspectionDataResponse {
}
export type InspectionLevel = never;
export interface InvalidArn {
}
export interface InvalidDefinition {
}
export interface InvalidEncryptionConfiguration {
}
export interface InvalidExecutionInput {
}
export interface InvalidLoggingConfiguration {
}
export interface InvalidName {
}
export interface InvalidOutput {
}
export interface InvalidToken {
}
export interface InvalidTracingConfiguration {
}
export interface KmsAccessDeniedException {
}
export type KmsDataKeyReusePeriodSeconds = number;

export interface KmsInvalidStateException {
}
export type KmsKeyId = string;

export type KmsKeyState = never;
export interface KmsThrottlingException {
}
export interface LambdaFunctionFailedEventDetails {
}
export interface LambdaFunctionScheduledEventDetails {
}
export interface LambdaFunctionScheduleFailedEventDetails {
}
export interface LambdaFunctionStartFailedEventDetails {
}
export interface LambdaFunctionSucceededEventDetails {
}
export interface LambdaFunctionTimedOutEventDetails {
}
export interface ListActivitiesInput {
}
export interface ListActivitiesOutput {
}
export interface ListExecutionsInput {
}
export interface ListExecutionsOutput {
}
export type ListExecutionsPageToken = string;

export interface ListMapRunsInput {
}
export interface ListMapRunsOutput {
}
export interface ListStateMachineAliasesInput {
}
export interface ListStateMachineAliasesOutput {
}
export interface ListStateMachinesInput {
}
export interface ListStateMachinesOutput {
}
export interface ListStateMachineVersionsInput {
}
export interface ListStateMachineVersionsOutput {
}
export interface ListTagsForResourceInput {
}
export interface ListTagsForResourceOutput {
}
export interface LogDestination {
}
export type LogDestinationList = Array<unknown>;
export interface LoggingConfiguration {
}
export type LogLevel = never;
export type LongArn = string;

export type LongObject = number;

export interface MapIterationEventDetails {
}
export interface MapRunExecutionCounts {
}
export interface MapRunFailedEventDetails {
}
export interface MapRunItemCounts {
}
export type MapRunLabel = string;

export type MapRunList = Array<unknown>;
export interface MapRunListItem {
}
export interface MapRunRedrivenEventDetails {
}
export interface MapRunStartedEventDetails {
}
export type MapRunStatus = never;
export interface MapStateStartedEventDetails {
}
export type MaxConcurrency = number;

export interface MissingRequiredParameter {
}
export type Name = string;

export type PageSize = number;

export type PageToken = string;

export type Publish = boolean;

export interface PublishStateMachineVersionInput {
}
export interface PublishStateMachineVersionOutput {
}
export type RedriveCount = number;

export interface RedriveExecutionInput {
}
export interface RedriveExecutionOutput {
}
export interface ResourceNotFound {
}
export type RevealSecrets = boolean;

export type ReverseOrder = boolean;

export type RevisionId = string;

export type RoutingConfigurationList = Array<unknown>;
export interface RoutingConfigurationListItem {
}
export interface SendTaskFailureInput {
}
export interface SendTaskFailureOutput {
}
export interface SendTaskHeartbeatInput {
}
export interface SendTaskHeartbeatOutput {
}
export interface SendTaskSuccessInput {
}
export interface SendTaskSuccessOutput {
}
export type SensitiveCause = string;

export type SensitiveData = string;

export type SensitiveDataJobInput = string;

export type SensitiveError = string;

export interface ServiceQuotaExceededException {
}
export interface StartExecutionInput {
}
export interface StartExecutionOutput {
}
export interface StartSyncExecutionInput {
}
export interface StartSyncExecutionOutput {
}
export interface StateEnteredEventDetails {
}
export interface StateExitedEventDetails {
}
export type StateMachineAliasList = Array<unknown>;
export interface StateMachineAliasListItem {
}
export interface StateMachineAlreadyExists {
}
export interface StateMachineDeleting {
}
export interface StateMachineDoesNotExist {
}
export interface StateMachineLimitExceeded {
}
export type StateMachineList = Array<unknown>;
export interface StateMachineListItem {
}
export type StateMachineStatus = never;
export type StateMachineType = never;
export interface StateMachineTypeNotSupported {
}
export type StateMachineVersionList = Array<unknown>;
export interface StateMachineVersionListItem {
}
export type StateName = string;

export interface StopExecutionInput {
}
export interface StopExecutionOutput {
}
export type SyncExecutionStatus = never;
export interface Tag {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagList = Array<unknown>;
export interface TagResourceInput {
}
export interface TagResourceOutput {
}
export type TagValue = string;

export interface TaskCredentials {
}
export interface TaskDoesNotExist {
}
export interface TaskFailedEventDetails {
}
export interface TaskScheduledEventDetails {
}
export interface TaskStartedEventDetails {
}
export interface TaskStartFailedEventDetails {
}
export interface TaskSubmitFailedEventDetails {
}
export interface TaskSubmittedEventDetails {
}
export interface TaskSucceededEventDetails {
}
export interface TaskTimedOut {
}
export interface TaskTimedOutEventDetails {
}
export type TaskToken = string;

export type TestExecutionStatus = never;
export interface TestStateInput {
}
export interface TestStateOutput {
}
export type TimeoutInSeconds = number;

export type Timestamp = Date | string;

export type ToleratedFailureCount = number;

export type ToleratedFailurePercentage = number;

export interface TooManyTags {
}
export type TraceHeader = string;

export interface TracingConfiguration {
}
export type truncated = boolean;

export type UnsignedInteger = number;

export type UnsignedLong = number;

export interface UntagResourceInput {
}
export interface UntagResourceOutput {
}
export interface UpdateMapRunInput {
}
export interface UpdateMapRunOutput {
}
export interface UpdateStateMachineAliasInput {
}
export interface UpdateStateMachineAliasOutput {
}
export interface UpdateStateMachineInput {
}
export interface UpdateStateMachineOutput {
}
export type URL = string;

export type ValidateStateMachineDefinitionCode = string;

export interface ValidateStateMachineDefinitionDiagnostic {
}
export type ValidateStateMachineDefinitionDiagnosticList = Array<unknown>;
export interface ValidateStateMachineDefinitionInput {
}
export type ValidateStateMachineDefinitionLocation = string;

export type ValidateStateMachineDefinitionMaxResult = number;

export type ValidateStateMachineDefinitionMessage = string;

export interface ValidateStateMachineDefinitionOutput {
}
export type ValidateStateMachineDefinitionResultCode = never;
export type ValidateStateMachineDefinitionSeverity = never;
export type ValidateStateMachineDefinitionTruncated = boolean;

export interface ValidationException {
}
export type ValidationExceptionReason = never;
export type VariableName = string;

export type VariableNameList = Array<unknown>;
export type VariableReferences = Record<string, unknown>;
export type VariableValue = string;

export type VersionDescription = string;

export type VersionWeight = number;

export declare namespace CreateActivity {
  export type Input = CreateActivityInput;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidArn
    | CommonAwsError;
}

export declare namespace DeleteStateMachine {
  export type Input = DeleteStateMachineInput;
  export type Output = {};
  export type Error =
    | InvalidArn
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStateMachineAlias {
  export type Input = DeleteStateMachineAliasInput;
  export type Output = {};
  export type Error =
    | ConflictException
    | InvalidArn
    | ResourceNotFound
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStateMachineVersion {
  export type Input = DeleteStateMachineVersionInput;
  export type Output = {};
  export type Error =
    | ConflictException
    | InvalidArn
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeActivity {
  export type Input = DescribeActivityInput;
  export type Output = {};
  export type Error =
    | ActivityDoesNotExist
    | InvalidArn
    | CommonAwsError;
}

export declare namespace DescribeExecution {
  export type Input = DescribeExecutionInput;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidArn
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeStateMachine {
  export type Input = DescribeStateMachineInput;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidArn
    | ResourceNotFound
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeStateMachineForExecution {
  export type Input = DescribeStateMachineForExecutionInput;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidToken
    | CommonAwsError;
}

export declare namespace ListExecutions {
  export type Input = ListExecutionsInput;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | ExecutionDoesNotExist
    | InvalidArn
    | InvalidToken
    | CommonAwsError;
}

export declare namespace ListStateMachineAliases {
  export type Input = ListStateMachineAliasesInput;
  export type Output = {};
  export type Error =
    | InvalidArn
    | InvalidToken
    | ResourceNotFound
    | StateMachineDeleting
    | StateMachineDoesNotExist
    | CommonAwsError;
}

export declare namespace ListStateMachineVersions {
  export type Input = ListStateMachineVersionsInput;
  export type Output = {};
  export type Error =
    | InvalidArn
    | InvalidToken
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStateMachines {
  export type Input = ListStateMachinesInput;
  export type Output = {};
  export type Error =
    | InvalidToken
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = {};
  export type Error =
    | InvalidArn
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace PublishStateMachineVersion {
  export type Input = PublishStateMachineVersionInput;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidToken
    | TaskDoesNotExist
    | TaskTimedOut
    | CommonAwsError;
}

export declare namespace SendTaskSuccess {
  export type Input = SendTaskSuccessInput;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidArn
    | ResourceNotFound
    | TooManyTags
    | CommonAwsError;
}

export declare namespace TestState {
  export type Input = TestStateInput;
  export type Output = {};
  export type Error =
    | InvalidArn
    | InvalidDefinition
    | InvalidExecutionInput
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | InvalidArn
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateMapRun {
  export type Input = UpdateMapRunInput;
  export type Output = {};
  export type Error =
    | InvalidArn
    | ResourceNotFound
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStateMachine {
  export type Input = UpdateStateMachineInput;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | ValidationException
    | CommonAwsError;
}

