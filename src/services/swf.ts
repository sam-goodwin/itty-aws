import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface SimpleWorkflowService {
  countClosedWorkflowExecutions(
    input: CountClosedWorkflowExecutionsInput,
  ): Effect.Effect<
    WorkflowExecutionCount,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  countOpenWorkflowExecutions(
    input: CountOpenWorkflowExecutionsInput,
  ): Effect.Effect<
    WorkflowExecutionCount,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  countPendingActivityTasks(
    input: CountPendingActivityTasksInput,
  ): Effect.Effect<
    PendingTaskCount,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  countPendingDecisionTasks(
    input: CountPendingDecisionTasksInput,
  ): Effect.Effect<
    PendingTaskCount,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  deleteActivityType(
    input: DeleteActivityTypeInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | TypeNotDeprecatedFault | UnknownResourceFault | CommonAwsError
  >;
  deleteWorkflowType(
    input: DeleteWorkflowTypeInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | TypeNotDeprecatedFault | UnknownResourceFault | CommonAwsError
  >;
  deprecateActivityType(
    input: DeprecateActivityTypeInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | TypeDeprecatedFault | UnknownResourceFault | CommonAwsError
  >;
  deprecateDomain(
    input: DeprecateDomainInput,
  ): Effect.Effect<
    {},
    DomainDeprecatedFault | OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  deprecateWorkflowType(
    input: DeprecateWorkflowTypeInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | TypeDeprecatedFault | UnknownResourceFault | CommonAwsError
  >;
  describeActivityType(
    input: DescribeActivityTypeInput,
  ): Effect.Effect<
    ActivityTypeDetail,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  describeDomain(
    input: DescribeDomainInput,
  ): Effect.Effect<
    DomainDetail,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  describeWorkflowExecution(
    input: DescribeWorkflowExecutionInput,
  ): Effect.Effect<
    WorkflowExecutionDetail,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  describeWorkflowType(
    input: DescribeWorkflowTypeInput,
  ): Effect.Effect<
    WorkflowTypeDetail,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  getWorkflowExecutionHistory(
    input: GetWorkflowExecutionHistoryInput,
  ): Effect.Effect<
    History,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  listActivityTypes(
    input: ListActivityTypesInput,
  ): Effect.Effect<
    ActivityTypeInfos,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  listClosedWorkflowExecutions(
    input: ListClosedWorkflowExecutionsInput,
  ): Effect.Effect<
    WorkflowExecutionInfos,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  listDomains(
    input: ListDomainsInput,
  ): Effect.Effect<
    DomainInfos,
    OperationNotPermittedFault | CommonAwsError
  >;
  listOpenWorkflowExecutions(
    input: ListOpenWorkflowExecutionsInput,
  ): Effect.Effect<
    WorkflowExecutionInfos,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    LimitExceededFault | OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  listWorkflowTypes(
    input: ListWorkflowTypesInput,
  ): Effect.Effect<
    WorkflowTypeInfos,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  pollForActivityTask(
    input: PollForActivityTaskInput,
  ): Effect.Effect<
    ActivityTask,
    LimitExceededFault | OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  pollForDecisionTask(
    input: PollForDecisionTaskInput,
  ): Effect.Effect<
    DecisionTask,
    LimitExceededFault | OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  recordActivityTaskHeartbeat(
    input: RecordActivityTaskHeartbeatInput,
  ): Effect.Effect<
    ActivityTaskStatus,
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  registerActivityType(
    input: RegisterActivityTypeInput,
  ): Effect.Effect<
    {},
    LimitExceededFault | OperationNotPermittedFault | TypeAlreadyExistsFault | UnknownResourceFault | CommonAwsError
  >;
  registerDomain(
    input: RegisterDomainInput,
  ): Effect.Effect<
    {},
    DomainAlreadyExistsFault | LimitExceededFault | OperationNotPermittedFault | TooManyTagsFault | CommonAwsError
  >;
  registerWorkflowType(
    input: RegisterWorkflowTypeInput,
  ): Effect.Effect<
    {},
    LimitExceededFault | OperationNotPermittedFault | TypeAlreadyExistsFault | UnknownResourceFault | CommonAwsError
  >;
  requestCancelWorkflowExecution(
    input: RequestCancelWorkflowExecutionInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  respondActivityTaskCanceled(
    input: RespondActivityTaskCanceledInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  respondActivityTaskCompleted(
    input: RespondActivityTaskCompletedInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  respondActivityTaskFailed(
    input: RespondActivityTaskFailedInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  respondDecisionTaskCompleted(
    input: RespondDecisionTaskCompletedInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  signalWorkflowExecution(
    input: SignalWorkflowExecutionInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  startWorkflowExecution(
    input: StartWorkflowExecutionInput,
  ): Effect.Effect<
    Run,
    DefaultUndefinedFault | LimitExceededFault | OperationNotPermittedFault | TypeDeprecatedFault | UnknownResourceFault | WorkflowExecutionAlreadyStartedFault | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    LimitExceededFault | OperationNotPermittedFault | TooManyTagsFault | UnknownResourceFault | CommonAwsError
  >;
  terminateWorkflowExecution(
    input: TerminateWorkflowExecutionInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  undeprecateActivityType(
    input: UndeprecateActivityTypeInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | TypeAlreadyExistsFault | UnknownResourceFault | CommonAwsError
  >;
  undeprecateDomain(
    input: UndeprecateDomainInput,
  ): Effect.Effect<
    {},
    DomainAlreadyExistsFault | OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
  undeprecateWorkflowType(
    input: UndeprecateWorkflowTypeInput,
  ): Effect.Effect<
    {},
    OperationNotPermittedFault | TypeAlreadyExistsFault | UnknownResourceFault | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    LimitExceededFault | OperationNotPermittedFault | UnknownResourceFault | CommonAwsError
  >;
}

export type Swf = SimpleWorkflowService;

export type ActivityId = string;

export interface ActivityTask {
  taskToken: string;
  activityId: string;
  startedEventId: number;
  workflowExecution: WorkflowExecution;
  activityType: ActivityType;
  input?: string;
}
export interface ActivityTaskCanceledEventAttributes {
  details?: string;
  scheduledEventId: number;
  startedEventId: number;
  latestCancelRequestedEventId?: number;
}
export interface ActivityTaskCancelRequestedEventAttributes {
  decisionTaskCompletedEventId: number;
  activityId: string;
}
export interface ActivityTaskCompletedEventAttributes {
  result?: string;
  scheduledEventId: number;
  startedEventId: number;
}
export interface ActivityTaskFailedEventAttributes {
  reason?: string;
  details?: string;
  scheduledEventId: number;
  startedEventId: number;
}
export interface ActivityTaskScheduledEventAttributes {
  activityType: ActivityType;
  activityId: string;
  input?: string;
  control?: string;
  scheduleToStartTimeout?: string;
  scheduleToCloseTimeout?: string;
  startToCloseTimeout?: string;
  taskList: TaskList;
  taskPriority?: string;
  decisionTaskCompletedEventId: number;
  heartbeatTimeout?: string;
}
export interface ActivityTaskStartedEventAttributes {
  identity?: string;
  scheduledEventId: number;
}
export interface ActivityTaskStatus {
  cancelRequested: boolean;
}
export interface ActivityTaskTimedOutEventAttributes {
  timeoutType: ActivityTaskTimeoutType;
  scheduledEventId: number;
  startedEventId: number;
  details?: string;
}
export type ActivityTaskTimeoutType = "START_TO_CLOSE" | "SCHEDULE_TO_START" | "SCHEDULE_TO_CLOSE" | "HEARTBEAT";
export interface ActivityType {
  name: string;
  version: string;
}
export interface ActivityTypeConfiguration {
  defaultTaskStartToCloseTimeout?: string;
  defaultTaskHeartbeatTimeout?: string;
  defaultTaskList?: TaskList;
  defaultTaskPriority?: string;
  defaultTaskScheduleToStartTimeout?: string;
  defaultTaskScheduleToCloseTimeout?: string;
}
export interface ActivityTypeDetail {
  typeInfo: ActivityTypeInfo;
  configuration: ActivityTypeConfiguration;
}
export interface ActivityTypeInfo {
  activityType: ActivityType;
  status: RegistrationStatus;
  description?: string;
  creationDate: Date | string;
  deprecationDate?: Date | string;
}
export type ActivityTypeInfoList = Array<ActivityTypeInfo>;
export interface ActivityTypeInfos {
  typeInfos: Array<ActivityTypeInfo>;
  nextPageToken?: string;
}
export type Arn = string;

export type Canceled = boolean;

export interface CancelTimerDecisionAttributes {
  timerId: string;
}
export type CancelTimerFailedCause = "TIMER_ID_UNKNOWN" | "OPERATION_NOT_PERMITTED";
export interface CancelTimerFailedEventAttributes {
  timerId: string;
  cause: CancelTimerFailedCause;
  decisionTaskCompletedEventId: number;
}
export interface CancelWorkflowExecutionDecisionAttributes {
  details?: string;
}
export type CancelWorkflowExecutionFailedCause = "UNHANDLED_DECISION" | "OPERATION_NOT_PERMITTED";
export interface CancelWorkflowExecutionFailedEventAttributes {
  cause: CancelWorkflowExecutionFailedCause;
  decisionTaskCompletedEventId: number;
}
export type CauseMessage = string;

export type ChildPolicy = "TERMINATE" | "REQUEST_CANCEL" | "ABANDON";
export interface ChildWorkflowExecutionCanceledEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  details?: string;
  initiatedEventId: number;
  startedEventId: number;
}
export interface ChildWorkflowExecutionCompletedEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  result?: string;
  initiatedEventId: number;
  startedEventId: number;
}
export interface ChildWorkflowExecutionFailedEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  reason?: string;
  details?: string;
  initiatedEventId: number;
  startedEventId: number;
}
export interface ChildWorkflowExecutionStartedEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  initiatedEventId: number;
}
export interface ChildWorkflowExecutionTerminatedEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  initiatedEventId: number;
  startedEventId: number;
}
export interface ChildWorkflowExecutionTimedOutEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  timeoutType: WorkflowExecutionTimeoutType;
  initiatedEventId: number;
  startedEventId: number;
}
export type CloseStatus = "COMPLETED" | "FAILED" | "CANCELED" | "TERMINATED" | "CONTINUED_AS_NEW" | "TIMED_OUT";
export interface CloseStatusFilter {
  status: CloseStatus;
}
export interface CompleteWorkflowExecutionDecisionAttributes {
  result?: string;
}
export type CompleteWorkflowExecutionFailedCause = "UNHANDLED_DECISION" | "OPERATION_NOT_PERMITTED";
export interface CompleteWorkflowExecutionFailedEventAttributes {
  cause: CompleteWorkflowExecutionFailedCause;
  decisionTaskCompletedEventId: number;
}
export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
  input?: string;
  executionStartToCloseTimeout?: string;
  taskList?: TaskList;
  taskPriority?: string;
  taskStartToCloseTimeout?: string;
  childPolicy?: ChildPolicy;
  tagList?: Array<string>;
  workflowTypeVersion?: string;
  lambdaRole?: string;
}
export type ContinueAsNewWorkflowExecutionFailedCause = "UNHANDLED_DECISION" | "WORKFLOW_TYPE_DEPRECATED" | "WORKFLOW_TYPE_DOES_NOT_EXIST" | "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED" | "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED" | "DEFAULT_TASK_LIST_UNDEFINED" | "DEFAULT_CHILD_POLICY_UNDEFINED" | "CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED" | "OPERATION_NOT_PERMITTED";
export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
  cause: ContinueAsNewWorkflowExecutionFailedCause;
  decisionTaskCompletedEventId: number;
}
export type Count = number;

export interface CountClosedWorkflowExecutionsInput {
  domain: string;
  startTimeFilter?: ExecutionTimeFilter;
  closeTimeFilter?: ExecutionTimeFilter;
  executionFilter?: WorkflowExecutionFilter;
  typeFilter?: WorkflowTypeFilter;
  tagFilter?: TagFilter;
  closeStatusFilter?: CloseStatusFilter;
}
export interface CountOpenWorkflowExecutionsInput {
  domain: string;
  startTimeFilter: ExecutionTimeFilter;
  typeFilter?: WorkflowTypeFilter;
  tagFilter?: TagFilter;
  executionFilter?: WorkflowExecutionFilter;
}
export interface CountPendingActivityTasksInput {
  domain: string;
  taskList: TaskList;
}
export interface CountPendingDecisionTasksInput {
  domain: string;
  taskList: TaskList;
}
export type Data = string;

export interface Decision {
  decisionType: DecisionType;
  scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;
  requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;
  completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;
  failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;
  cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;
  continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;
  recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;
  startTimerDecisionAttributes?: StartTimerDecisionAttributes;
  cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;
  signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;
  requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;
  startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;
  scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes;
}
export type DecisionList = Array<Decision>;
export interface DecisionTask {
  taskToken: string;
  startedEventId: number;
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  events: Array<HistoryEvent>;
  nextPageToken?: string;
  previousStartedEventId?: number;
}
export interface DecisionTaskCompletedEventAttributes {
  executionContext?: string;
  scheduledEventId: number;
  startedEventId: number;
  taskList?: TaskList;
  taskListScheduleToStartTimeout?: string;
}
export interface DecisionTaskScheduledEventAttributes {
  taskList: TaskList;
  taskPriority?: string;
  startToCloseTimeout?: string;
  scheduleToStartTimeout?: string;
}
export interface DecisionTaskStartedEventAttributes {
  identity?: string;
  scheduledEventId: number;
}
export interface DecisionTaskTimedOutEventAttributes {
  timeoutType: DecisionTaskTimeoutType;
  scheduledEventId: number;
  startedEventId: number;
}
export type DecisionTaskTimeoutType = "START_TO_CLOSE" | "SCHEDULE_TO_START";
export type DecisionType = "ScheduleActivityTask" | "RequestCancelActivityTask" | "CompleteWorkflowExecution" | "FailWorkflowExecution" | "CancelWorkflowExecution" | "ContinueAsNewWorkflowExecution" | "RecordMarker" | "StartTimer" | "CancelTimer" | "SignalExternalWorkflowExecution" | "RequestCancelExternalWorkflowExecution" | "StartChildWorkflowExecution" | "ScheduleLambdaFunction";
export declare class DefaultUndefinedFault extends Data.TaggedError(
  "DefaultUndefinedFault",
)<{
  readonly message?: string;
}> {}
export interface DeleteActivityTypeInput {
  domain: string;
  activityType: ActivityType;
}
export interface DeleteWorkflowTypeInput {
  domain: string;
  workflowType: WorkflowType;
}
export interface DeprecateActivityTypeInput {
  domain: string;
  activityType: ActivityType;
}
export interface DeprecateDomainInput {
  name: string;
}
export interface DeprecateWorkflowTypeInput {
  domain: string;
  workflowType: WorkflowType;
}
export interface DescribeActivityTypeInput {
  domain: string;
  activityType: ActivityType;
}
export interface DescribeDomainInput {
  name: string;
}
export interface DescribeWorkflowExecutionInput {
  domain: string;
  execution: WorkflowExecution;
}
export interface DescribeWorkflowTypeInput {
  domain: string;
  workflowType: WorkflowType;
}
export type Description = string;

export declare class DomainAlreadyExistsFault extends Data.TaggedError(
  "DomainAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface DomainConfiguration {
  workflowExecutionRetentionPeriodInDays: string;
}
export declare class DomainDeprecatedFault extends Data.TaggedError(
  "DomainDeprecatedFault",
)<{
  readonly message?: string;
}> {}
export interface DomainDetail {
  domainInfo: DomainInfo;
  configuration: DomainConfiguration;
}
export interface DomainInfo {
  name: string;
  status: RegistrationStatus;
  description?: string;
  arn?: string;
}
export type DomainInfoList = Array<DomainInfo>;
export interface DomainInfos {
  domainInfos: Array<DomainInfo>;
  nextPageToken?: string;
}
export type DomainName = string;

export type DurationInDays = string;

export type DurationInSeconds = string;

export type DurationInSecondsOptional = string;

export type ErrorMessage = string;

export type EventId = number;

export type EventType = "WorkflowExecutionStarted" | "WorkflowExecutionCancelRequested" | "WorkflowExecutionCompleted" | "CompleteWorkflowExecutionFailed" | "WorkflowExecutionFailed" | "FailWorkflowExecutionFailed" | "WorkflowExecutionTimedOut" | "WorkflowExecutionCanceled" | "CancelWorkflowExecutionFailed" | "WorkflowExecutionContinuedAsNew" | "ContinueAsNewWorkflowExecutionFailed" | "WorkflowExecutionTerminated" | "DecisionTaskScheduled" | "DecisionTaskStarted" | "DecisionTaskCompleted" | "DecisionTaskTimedOut" | "ActivityTaskScheduled" | "ScheduleActivityTaskFailed" | "ActivityTaskStarted" | "ActivityTaskCompleted" | "ActivityTaskFailed" | "ActivityTaskTimedOut" | "ActivityTaskCanceled" | "ActivityTaskCancelRequested" | "RequestCancelActivityTaskFailed" | "WorkflowExecutionSignaled" | "MarkerRecorded" | "RecordMarkerFailed" | "TimerStarted" | "StartTimerFailed" | "TimerFired" | "TimerCanceled" | "CancelTimerFailed" | "StartChildWorkflowExecutionInitiated" | "StartChildWorkflowExecutionFailed" | "ChildWorkflowExecutionStarted" | "ChildWorkflowExecutionCompleted" | "ChildWorkflowExecutionFailed" | "ChildWorkflowExecutionTimedOut" | "ChildWorkflowExecutionCanceled" | "ChildWorkflowExecutionTerminated" | "SignalExternalWorkflowExecutionInitiated" | "SignalExternalWorkflowExecutionFailed" | "ExternalWorkflowExecutionSignaled" | "RequestCancelExternalWorkflowExecutionInitiated" | "RequestCancelExternalWorkflowExecutionFailed" | "ExternalWorkflowExecutionCancelRequested" | "LambdaFunctionScheduled" | "LambdaFunctionStarted" | "LambdaFunctionCompleted" | "LambdaFunctionFailed" | "LambdaFunctionTimedOut" | "ScheduleLambdaFunctionFailed" | "StartLambdaFunctionFailed";
export type ExecutionStatus = "OPEN" | "CLOSED";
export interface ExecutionTimeFilter {
  oldestDate: Date | string;
  latestDate?: Date | string;
}
export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
  workflowExecution: WorkflowExecution;
  initiatedEventId: number;
}
export interface ExternalWorkflowExecutionSignaledEventAttributes {
  workflowExecution: WorkflowExecution;
  initiatedEventId: number;
}
export type FailureReason = string;

export interface FailWorkflowExecutionDecisionAttributes {
  reason?: string;
  details?: string;
}
export type FailWorkflowExecutionFailedCause = "UNHANDLED_DECISION" | "OPERATION_NOT_PERMITTED";
export interface FailWorkflowExecutionFailedEventAttributes {
  cause: FailWorkflowExecutionFailedCause;
  decisionTaskCompletedEventId: number;
}
export type FunctionId = string;

export type FunctionInput = string;

export type FunctionName = string;

export interface GetWorkflowExecutionHistoryInput {
  domain: string;
  execution: WorkflowExecution;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
}
export interface History {
  events: Array<HistoryEvent>;
  nextPageToken?: string;
}
export interface HistoryEvent {
  eventTimestamp: Date | string;
  eventType: EventType;
  eventId: number;
  workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;
  workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;
  completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;
  workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;
  failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;
  workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;
  workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;
  cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;
  workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;
  continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;
  workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;
  workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;
  decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;
  decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;
  decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;
  decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;
  activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;
  activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;
  activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;
  activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;
  activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;
  activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;
  activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;
  workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;
  markerRecordedEventAttributes?: MarkerRecordedEventAttributes;
  recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;
  timerStartedEventAttributes?: TimerStartedEventAttributes;
  timerFiredEventAttributes?: TimerFiredEventAttributes;
  timerCanceledEventAttributes?: TimerCanceledEventAttributes;
  startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;
  childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;
  childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;
  childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;
  childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;
  childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;
  childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;
  signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;
  externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;
  signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;
  externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;
  requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
  requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;
  scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;
  requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;
  startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;
  cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;
  startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;
  lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;
  lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;
  lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;
  lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;
  lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;
  scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;
  startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;
}
export type HistoryEventList = Array<HistoryEvent>;
export type Identity = string;

export interface LambdaFunctionCompletedEventAttributes {
  scheduledEventId: number;
  startedEventId: number;
  result?: string;
}
export interface LambdaFunctionFailedEventAttributes {
  scheduledEventId: number;
  startedEventId: number;
  reason?: string;
  details?: string;
}
export interface LambdaFunctionScheduledEventAttributes {
  id: string;
  name: string;
  control?: string;
  input?: string;
  startToCloseTimeout?: string;
  decisionTaskCompletedEventId: number;
}
export interface LambdaFunctionStartedEventAttributes {
  scheduledEventId: number;
}
export interface LambdaFunctionTimedOutEventAttributes {
  scheduledEventId: number;
  startedEventId: number;
  timeoutType?: LambdaFunctionTimeoutType;
}
export type LambdaFunctionTimeoutType = "START_TO_CLOSE";
export type LimitedData = string;

export declare class LimitExceededFault extends Data.TaggedError(
  "LimitExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ListActivityTypesInput {
  domain: string;
  name?: string;
  registrationStatus: RegistrationStatus;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
}
export interface ListClosedWorkflowExecutionsInput {
  domain: string;
  startTimeFilter?: ExecutionTimeFilter;
  closeTimeFilter?: ExecutionTimeFilter;
  executionFilter?: WorkflowExecutionFilter;
  closeStatusFilter?: CloseStatusFilter;
  typeFilter?: WorkflowTypeFilter;
  tagFilter?: TagFilter;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
}
export interface ListDomainsInput {
  nextPageToken?: string;
  registrationStatus: RegistrationStatus;
  maximumPageSize?: number;
  reverseOrder?: boolean;
}
export interface ListOpenWorkflowExecutionsInput {
  domain: string;
  startTimeFilter: ExecutionTimeFilter;
  typeFilter?: WorkflowTypeFilter;
  tagFilter?: TagFilter;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
  executionFilter?: WorkflowExecutionFilter;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Array<ResourceTag>;
}
export interface ListWorkflowTypesInput {
  domain: string;
  name?: string;
  registrationStatus: RegistrationStatus;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
}
export type MarkerName = string;

export interface MarkerRecordedEventAttributes {
  markerName: string;
  details?: string;
  decisionTaskCompletedEventId: number;
}
export type Name = string;

export type OpenDecisionTasksCount = number;

export declare class OperationNotPermittedFault extends Data.TaggedError(
  "OperationNotPermittedFault",
)<{
  readonly message?: string;
}> {}
export type PageSize = number;

export type PageToken = string;

export interface PendingTaskCount {
  count: number;
  truncated?: boolean;
}
export interface PollForActivityTaskInput {
  domain: string;
  taskList: TaskList;
  identity?: string;
}
export interface PollForDecisionTaskInput {
  domain: string;
  taskList: TaskList;
  identity?: string;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
  startAtPreviousStartedEvent?: boolean;
}
export interface RecordActivityTaskHeartbeatInput {
  taskToken: string;
  details?: string;
}
export interface RecordMarkerDecisionAttributes {
  markerName: string;
  details?: string;
}
export type RecordMarkerFailedCause = "OPERATION_NOT_PERMITTED";
export interface RecordMarkerFailedEventAttributes {
  markerName: string;
  cause: RecordMarkerFailedCause;
  decisionTaskCompletedEventId: number;
}
export interface RegisterActivityTypeInput {
  domain: string;
  name: string;
  version: string;
  description?: string;
  defaultTaskStartToCloseTimeout?: string;
  defaultTaskHeartbeatTimeout?: string;
  defaultTaskList?: TaskList;
  defaultTaskPriority?: string;
  defaultTaskScheduleToStartTimeout?: string;
  defaultTaskScheduleToCloseTimeout?: string;
}
export interface RegisterDomainInput {
  name: string;
  description?: string;
  workflowExecutionRetentionPeriodInDays: string;
  tags?: Array<ResourceTag>;
}
export interface RegisterWorkflowTypeInput {
  domain: string;
  name: string;
  version: string;
  description?: string;
  defaultTaskStartToCloseTimeout?: string;
  defaultExecutionStartToCloseTimeout?: string;
  defaultTaskList?: TaskList;
  defaultTaskPriority?: string;
  defaultChildPolicy?: ChildPolicy;
  defaultLambdaRole?: string;
}
export type RegistrationStatus = "REGISTERED" | "DEPRECATED";
export interface RequestCancelActivityTaskDecisionAttributes {
  activityId: string;
}
export type RequestCancelActivityTaskFailedCause = "ACTIVITY_ID_UNKNOWN" | "OPERATION_NOT_PERMITTED";
export interface RequestCancelActivityTaskFailedEventAttributes {
  activityId: string;
  cause: RequestCancelActivityTaskFailedCause;
  decisionTaskCompletedEventId: number;
}
export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
  workflowId: string;
  runId?: string;
  control?: string;
}
export type RequestCancelExternalWorkflowExecutionFailedCause = "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION" | "REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED" | "OPERATION_NOT_PERMITTED";
export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
  workflowId: string;
  runId?: string;
  cause: RequestCancelExternalWorkflowExecutionFailedCause;
  initiatedEventId: number;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  workflowId: string;
  runId?: string;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export interface RequestCancelWorkflowExecutionInput {
  domain: string;
  workflowId: string;
  runId?: string;
}
export interface ResourceTag {
  key: string;
  value?: string;
}
export type ResourceTagKey = string;

export type ResourceTagKeyList = Array<string>;
export type ResourceTagList = Array<ResourceTag>;
export type ResourceTagValue = string;

export interface RespondActivityTaskCanceledInput {
  taskToken: string;
  details?: string;
}
export interface RespondActivityTaskCompletedInput {
  taskToken: string;
  result?: string;
}
export interface RespondActivityTaskFailedInput {
  taskToken: string;
  reason?: string;
  details?: string;
}
export interface RespondDecisionTaskCompletedInput {
  taskToken: string;
  decisions?: Array<Decision>;
  executionContext?: string;
  taskList?: TaskList;
  taskListScheduleToStartTimeout?: string;
}
export type ReverseOrder = boolean;

export interface Run {
  runId?: string;
}
export interface ScheduleActivityTaskDecisionAttributes {
  activityType: ActivityType;
  activityId: string;
  control?: string;
  input?: string;
  scheduleToCloseTimeout?: string;
  taskList?: TaskList;
  taskPriority?: string;
  scheduleToStartTimeout?: string;
  startToCloseTimeout?: string;
  heartbeatTimeout?: string;
}
export type ScheduleActivityTaskFailedCause = "ACTIVITY_TYPE_DEPRECATED" | "ACTIVITY_TYPE_DOES_NOT_EXIST" | "ACTIVITY_ID_ALREADY_IN_USE" | "OPEN_ACTIVITIES_LIMIT_EXCEEDED" | "ACTIVITY_CREATION_RATE_EXCEEDED" | "DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED" | "DEFAULT_TASK_LIST_UNDEFINED" | "DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED" | "DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED" | "DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED" | "OPERATION_NOT_PERMITTED";
export interface ScheduleActivityTaskFailedEventAttributes {
  activityType: ActivityType;
  activityId: string;
  cause: ScheduleActivityTaskFailedCause;
  decisionTaskCompletedEventId: number;
}
export interface ScheduleLambdaFunctionDecisionAttributes {
  id: string;
  name: string;
  control?: string;
  input?: string;
  startToCloseTimeout?: string;
}
export type ScheduleLambdaFunctionFailedCause = "ID_ALREADY_IN_USE" | "OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED" | "LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED" | "LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION";
export interface ScheduleLambdaFunctionFailedEventAttributes {
  id: string;
  name: string;
  cause: ScheduleLambdaFunctionFailedCause;
  decisionTaskCompletedEventId: number;
}
export interface SignalExternalWorkflowExecutionDecisionAttributes {
  workflowId: string;
  runId?: string;
  signalName: string;
  input?: string;
  control?: string;
}
export type SignalExternalWorkflowExecutionFailedCause = "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION" | "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED" | "OPERATION_NOT_PERMITTED";
export interface SignalExternalWorkflowExecutionFailedEventAttributes {
  workflowId: string;
  runId?: string;
  cause: SignalExternalWorkflowExecutionFailedCause;
  initiatedEventId: number;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
  workflowId: string;
  runId?: string;
  signalName: string;
  input?: string;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export type SignalName = string;

export interface SignalWorkflowExecutionInput {
  domain: string;
  workflowId: string;
  runId?: string;
  signalName: string;
  input?: string;
}
export type StartAtPreviousStartedEvent = boolean;

export interface StartChildWorkflowExecutionDecisionAttributes {
  workflowType: WorkflowType;
  workflowId: string;
  control?: string;
  input?: string;
  executionStartToCloseTimeout?: string;
  taskList?: TaskList;
  taskPriority?: string;
  taskStartToCloseTimeout?: string;
  childPolicy?: ChildPolicy;
  tagList?: Array<string>;
  lambdaRole?: string;
}
export type StartChildWorkflowExecutionFailedCause = "WORKFLOW_TYPE_DOES_NOT_EXIST" | "WORKFLOW_TYPE_DEPRECATED" | "OPEN_CHILDREN_LIMIT_EXCEEDED" | "OPEN_WORKFLOWS_LIMIT_EXCEEDED" | "CHILD_CREATION_RATE_EXCEEDED" | "WORKFLOW_ALREADY_RUNNING" | "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED" | "DEFAULT_TASK_LIST_UNDEFINED" | "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED" | "DEFAULT_CHILD_POLICY_UNDEFINED" | "OPERATION_NOT_PERMITTED";
export interface StartChildWorkflowExecutionFailedEventAttributes {
  workflowType: WorkflowType;
  cause: StartChildWorkflowExecutionFailedCause;
  workflowId: string;
  initiatedEventId: number;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export interface StartChildWorkflowExecutionInitiatedEventAttributes {
  workflowId: string;
  workflowType: WorkflowType;
  control?: string;
  input?: string;
  executionStartToCloseTimeout?: string;
  taskList: TaskList;
  taskPriority?: string;
  decisionTaskCompletedEventId: number;
  childPolicy: ChildPolicy;
  taskStartToCloseTimeout?: string;
  tagList?: Array<string>;
  lambdaRole?: string;
}
export type StartLambdaFunctionFailedCause = "ASSUME_ROLE_FAILED";
export interface StartLambdaFunctionFailedEventAttributes {
  scheduledEventId?: number;
  cause?: StartLambdaFunctionFailedCause;
  message?: string;
}
export interface StartTimerDecisionAttributes {
  timerId: string;
  control?: string;
  startToFireTimeout: string;
}
export type StartTimerFailedCause = "TIMER_ID_ALREADY_IN_USE" | "OPEN_TIMERS_LIMIT_EXCEEDED" | "TIMER_CREATION_RATE_EXCEEDED" | "OPERATION_NOT_PERMITTED";
export interface StartTimerFailedEventAttributes {
  timerId: string;
  cause: StartTimerFailedCause;
  decisionTaskCompletedEventId: number;
}
export interface StartWorkflowExecutionInput {
  domain: string;
  workflowId: string;
  workflowType: WorkflowType;
  taskList?: TaskList;
  taskPriority?: string;
  input?: string;
  executionStartToCloseTimeout?: string;
  tagList?: Array<string>;
  taskStartToCloseTimeout?: string;
  childPolicy?: ChildPolicy;
  lambdaRole?: string;
}
export type Tag = string;

export interface TagFilter {
  tag: string;
}
export type TagList = Array<string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Array<ResourceTag>;
}
export interface TaskList {
  name: string;
}
export type TaskPriority = string;

export type TaskToken = string;

export type TerminateReason = string;

export interface TerminateWorkflowExecutionInput {
  domain: string;
  workflowId: string;
  runId?: string;
  reason?: string;
  details?: string;
  childPolicy?: ChildPolicy;
}
export interface TimerCanceledEventAttributes {
  timerId: string;
  startedEventId: number;
  decisionTaskCompletedEventId: number;
}
export interface TimerFiredEventAttributes {
  timerId: string;
  startedEventId: number;
}
export type TimerId = string;

export interface TimerStartedEventAttributes {
  timerId: string;
  control?: string;
  startToFireTimeout: string;
  decisionTaskCompletedEventId: number;
}
export type Timestamp = Date | string;

export declare class TooManyTagsFault extends Data.TaggedError(
  "TooManyTagsFault",
)<{
  readonly message?: string;
}> {}
export type Truncated = boolean;

export declare class TypeAlreadyExistsFault extends Data.TaggedError(
  "TypeAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class TypeDeprecatedFault extends Data.TaggedError(
  "TypeDeprecatedFault",
)<{
  readonly message?: string;
}> {}
export declare class TypeNotDeprecatedFault extends Data.TaggedError(
  "TypeNotDeprecatedFault",
)<{
  readonly message?: string;
}> {}
export interface UndeprecateActivityTypeInput {
  domain: string;
  activityType: ActivityType;
}
export interface UndeprecateDomainInput {
  name: string;
}
export interface UndeprecateWorkflowTypeInput {
  domain: string;
  workflowType: WorkflowType;
}
export declare class UnknownResourceFault extends Data.TaggedError(
  "UnknownResourceFault",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export type Version = string;

export type VersionOptional = string;

export interface WorkflowExecution {
  workflowId: string;
  runId: string;
}
export declare class WorkflowExecutionAlreadyStartedFault extends Data.TaggedError(
  "WorkflowExecutionAlreadyStartedFault",
)<{
  readonly message?: string;
}> {}
export interface WorkflowExecutionCanceledEventAttributes {
  details?: string;
  decisionTaskCompletedEventId: number;
}
export type WorkflowExecutionCancelRequestedCause = "CHILD_POLICY_APPLIED";
export interface WorkflowExecutionCancelRequestedEventAttributes {
  externalWorkflowExecution?: WorkflowExecution;
  externalInitiatedEventId?: number;
  cause?: WorkflowExecutionCancelRequestedCause;
}
export interface WorkflowExecutionCompletedEventAttributes {
  result?: string;
  decisionTaskCompletedEventId: number;
}
export interface WorkflowExecutionConfiguration {
  taskStartToCloseTimeout: string;
  executionStartToCloseTimeout: string;
  taskList: TaskList;
  taskPriority?: string;
  childPolicy: ChildPolicy;
  lambdaRole?: string;
}
export interface WorkflowExecutionContinuedAsNewEventAttributes {
  input?: string;
  decisionTaskCompletedEventId: number;
  newExecutionRunId: string;
  executionStartToCloseTimeout?: string;
  taskList: TaskList;
  taskPriority?: string;
  taskStartToCloseTimeout?: string;
  childPolicy: ChildPolicy;
  tagList?: Array<string>;
  workflowType: WorkflowType;
  lambdaRole?: string;
}
export interface WorkflowExecutionCount {
  count: number;
  truncated?: boolean;
}
export interface WorkflowExecutionDetail {
  executionInfo: WorkflowExecutionInfo;
  executionConfiguration: WorkflowExecutionConfiguration;
  openCounts: WorkflowExecutionOpenCounts;
  latestActivityTaskTimestamp?: Date | string;
  latestExecutionContext?: string;
}
export interface WorkflowExecutionFailedEventAttributes {
  reason?: string;
  details?: string;
  decisionTaskCompletedEventId: number;
}
export interface WorkflowExecutionFilter {
  workflowId: string;
}
export interface WorkflowExecutionInfo {
  execution: WorkflowExecution;
  workflowType: WorkflowType;
  startTimestamp: Date | string;
  closeTimestamp?: Date | string;
  executionStatus: ExecutionStatus;
  closeStatus?: CloseStatus;
  parent?: WorkflowExecution;
  tagList?: Array<string>;
  cancelRequested?: boolean;
}
export type WorkflowExecutionInfoList = Array<WorkflowExecutionInfo>;
export interface WorkflowExecutionInfos {
  executionInfos: Array<WorkflowExecutionInfo>;
  nextPageToken?: string;
}
export interface WorkflowExecutionOpenCounts {
  openActivityTasks: number;
  openDecisionTasks: number;
  openTimers: number;
  openChildWorkflowExecutions: number;
  openLambdaFunctions?: number;
}
export interface WorkflowExecutionSignaledEventAttributes {
  signalName: string;
  input?: string;
  externalWorkflowExecution?: WorkflowExecution;
  externalInitiatedEventId?: number;
}
export interface WorkflowExecutionStartedEventAttributes {
  input?: string;
  executionStartToCloseTimeout?: string;
  taskStartToCloseTimeout?: string;
  childPolicy: ChildPolicy;
  taskList: TaskList;
  taskPriority?: string;
  workflowType: WorkflowType;
  tagList?: Array<string>;
  continuedExecutionRunId?: string;
  parentWorkflowExecution?: WorkflowExecution;
  parentInitiatedEventId?: number;
  lambdaRole?: string;
}
export type WorkflowExecutionTerminatedCause = "CHILD_POLICY_APPLIED" | "EVENT_LIMIT_EXCEEDED" | "OPERATOR_INITIATED";
export interface WorkflowExecutionTerminatedEventAttributes {
  reason?: string;
  details?: string;
  childPolicy: ChildPolicy;
  cause?: WorkflowExecutionTerminatedCause;
}
export interface WorkflowExecutionTimedOutEventAttributes {
  timeoutType: WorkflowExecutionTimeoutType;
  childPolicy: ChildPolicy;
}
export type WorkflowExecutionTimeoutType = "START_TO_CLOSE";
export type WorkflowId = string;

export type WorkflowRunId = string;

export type WorkflowRunIdOptional = string;

export interface WorkflowType {
  name: string;
  version: string;
}
export interface WorkflowTypeConfiguration {
  defaultTaskStartToCloseTimeout?: string;
  defaultExecutionStartToCloseTimeout?: string;
  defaultTaskList?: TaskList;
  defaultTaskPriority?: string;
  defaultChildPolicy?: ChildPolicy;
  defaultLambdaRole?: string;
}
export interface WorkflowTypeDetail {
  typeInfo: WorkflowTypeInfo;
  configuration: WorkflowTypeConfiguration;
}
export interface WorkflowTypeFilter {
  name: string;
  version?: string;
}
export interface WorkflowTypeInfo {
  workflowType: WorkflowType;
  status: RegistrationStatus;
  description?: string;
  creationDate: Date | string;
  deprecationDate?: Date | string;
}
export type WorkflowTypeInfoList = Array<WorkflowTypeInfo>;
export interface WorkflowTypeInfos {
  typeInfos: Array<WorkflowTypeInfo>;
  nextPageToken?: string;
}
export declare namespace CountClosedWorkflowExecutions {
  export type Input = CountClosedWorkflowExecutionsInput;
  export type Output = WorkflowExecutionCount;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace CountOpenWorkflowExecutions {
  export type Input = CountOpenWorkflowExecutionsInput;
  export type Output = WorkflowExecutionCount;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace CountPendingActivityTasks {
  export type Input = CountPendingActivityTasksInput;
  export type Output = PendingTaskCount;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace CountPendingDecisionTasks {
  export type Input = CountPendingDecisionTasksInput;
  export type Output = PendingTaskCount;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace DeleteActivityType {
  export type Input = DeleteActivityTypeInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | TypeNotDeprecatedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace DeleteWorkflowType {
  export type Input = DeleteWorkflowTypeInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | TypeNotDeprecatedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace DeprecateActivityType {
  export type Input = DeprecateActivityTypeInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | TypeDeprecatedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace DeprecateDomain {
  export type Input = DeprecateDomainInput;
  export type Output = {};
  export type Error =
    | DomainDeprecatedFault
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace DeprecateWorkflowType {
  export type Input = DeprecateWorkflowTypeInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | TypeDeprecatedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace DescribeActivityType {
  export type Input = DescribeActivityTypeInput;
  export type Output = ActivityTypeDetail;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace DescribeDomain {
  export type Input = DescribeDomainInput;
  export type Output = DomainDetail;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace DescribeWorkflowExecution {
  export type Input = DescribeWorkflowExecutionInput;
  export type Output = WorkflowExecutionDetail;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace DescribeWorkflowType {
  export type Input = DescribeWorkflowTypeInput;
  export type Output = WorkflowTypeDetail;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace GetWorkflowExecutionHistory {
  export type Input = GetWorkflowExecutionHistoryInput;
  export type Output = History;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace ListActivityTypes {
  export type Input = ListActivityTypesInput;
  export type Output = ActivityTypeInfos;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace ListClosedWorkflowExecutions {
  export type Input = ListClosedWorkflowExecutionsInput;
  export type Output = WorkflowExecutionInfos;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace ListDomains {
  export type Input = ListDomainsInput;
  export type Output = DomainInfos;
  export type Error =
    | OperationNotPermittedFault
    | CommonAwsError;
}

export declare namespace ListOpenWorkflowExecutions {
  export type Input = ListOpenWorkflowExecutionsInput;
  export type Output = WorkflowExecutionInfos;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | LimitExceededFault
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace ListWorkflowTypes {
  export type Input = ListWorkflowTypesInput;
  export type Output = WorkflowTypeInfos;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace PollForActivityTask {
  export type Input = PollForActivityTaskInput;
  export type Output = ActivityTask;
  export type Error =
    | LimitExceededFault
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace PollForDecisionTask {
  export type Input = PollForDecisionTaskInput;
  export type Output = DecisionTask;
  export type Error =
    | LimitExceededFault
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace RecordActivityTaskHeartbeat {
  export type Input = RecordActivityTaskHeartbeatInput;
  export type Output = ActivityTaskStatus;
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace RegisterActivityType {
  export type Input = RegisterActivityTypeInput;
  export type Output = {};
  export type Error =
    | LimitExceededFault
    | OperationNotPermittedFault
    | TypeAlreadyExistsFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace RegisterDomain {
  export type Input = RegisterDomainInput;
  export type Output = {};
  export type Error =
    | DomainAlreadyExistsFault
    | LimitExceededFault
    | OperationNotPermittedFault
    | TooManyTagsFault
    | CommonAwsError;
}

export declare namespace RegisterWorkflowType {
  export type Input = RegisterWorkflowTypeInput;
  export type Output = {};
  export type Error =
    | LimitExceededFault
    | OperationNotPermittedFault
    | TypeAlreadyExistsFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace RequestCancelWorkflowExecution {
  export type Input = RequestCancelWorkflowExecutionInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace RespondActivityTaskCanceled {
  export type Input = RespondActivityTaskCanceledInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace RespondActivityTaskCompleted {
  export type Input = RespondActivityTaskCompletedInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace RespondActivityTaskFailed {
  export type Input = RespondActivityTaskFailedInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace RespondDecisionTaskCompleted {
  export type Input = RespondDecisionTaskCompletedInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace SignalWorkflowExecution {
  export type Input = SignalWorkflowExecutionInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace StartWorkflowExecution {
  export type Input = StartWorkflowExecutionInput;
  export type Output = Run;
  export type Error =
    | DefaultUndefinedFault
    | LimitExceededFault
    | OperationNotPermittedFault
    | TypeDeprecatedFault
    | UnknownResourceFault
    | WorkflowExecutionAlreadyStartedFault
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | LimitExceededFault
    | OperationNotPermittedFault
    | TooManyTagsFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace TerminateWorkflowExecution {
  export type Input = TerminateWorkflowExecutionInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace UndeprecateActivityType {
  export type Input = UndeprecateActivityTypeInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | TypeAlreadyExistsFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace UndeprecateDomain {
  export type Input = UndeprecateDomainInput;
  export type Output = {};
  export type Error =
    | DomainAlreadyExistsFault
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace UndeprecateWorkflowType {
  export type Input = UndeprecateWorkflowTypeInput;
  export type Output = {};
  export type Error =
    | OperationNotPermittedFault
    | TypeAlreadyExistsFault
    | UnknownResourceFault
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | LimitExceededFault
    | OperationNotPermittedFault
    | UnknownResourceFault
    | CommonAwsError;
}

