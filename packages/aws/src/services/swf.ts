import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://swf.amazonaws.com/doc/2012-01-25");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "SWF",
  serviceShapeName: "SimpleWorkflowService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "swf" });
const ver = /*@__PURE__*/ T.ServiceVersion("2012-01-25");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
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
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://swf.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(
            `https://swf-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://swf-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://swf-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://swf.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://swf.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class DefaultUndefinedFault
  extends /*@__PURE__*/ S.TaggedError<DefaultUndefinedFault>()("DefaultUndefinedFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class DomainAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<DomainAlreadyExistsFault>()("DomainAlreadyExistsFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAlreadyExistsError) {}
export class DomainDeprecatedFault
  extends /*@__PURE__*/ S.TaggedError<DomainDeprecatedFault>()("DomainDeprecatedFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LimitExceededFault
  extends /*@__PURE__*/ S.TaggedError<LimitExceededFault>()("LimitExceededFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class OperationNotPermittedFault
  extends /*@__PURE__*/ S.TaggedError<OperationNotPermittedFault>()("OperationNotPermittedFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class TooManyTagsFault
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsFault>()(
    "TooManyTagsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TypeAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<TypeAlreadyExistsFault>()("TypeAlreadyExistsFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAlreadyExistsError) {}
export class TypeDeprecatedFault
  extends /*@__PURE__*/ S.TaggedError<TypeDeprecatedFault>()("TypeDeprecatedFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class TypeNotDeprecatedFault
  extends /*@__PURE__*/ S.TaggedError<TypeNotDeprecatedFault>()("TypeNotDeprecatedFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class UnknownResourceFault
  extends /*@__PURE__*/ S.TaggedError<UnknownResourceFault>()("UnknownResourceFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class WorkflowExecutionAlreadyStartedFault
  extends /*@__PURE__*/ S.TaggedError<WorkflowExecutionAlreadyStartedFault>()(
    "WorkflowExecutionAlreadyStartedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export type DomainName = string;
export interface ExecutionTimeFilter {
  oldestDate: Date;
  latestDate?: Date;
}
export type WorkflowId = string;
export interface WorkflowExecutionFilter {
  workflowId: string;
}
export type Name = string;
export type VersionOptional = string;
export interface WorkflowTypeFilter {
  name: string;
  version?: string;
}
export type Tag = string;
export interface TagFilter {
  tag: string;
}
export type CloseStatus =
  | "COMPLETED"
  | "FAILED"
  | "CANCELED"
  | "TERMINATED"
  | "CONTINUED_AS_NEW"
  | "TIMED_OUT"
  | (string & {});
export interface CloseStatusFilter {
  status: CloseStatus;
}
export interface CountClosedWorkflowExecutionsInput {
  domain: string;
  startTimeFilter?: ExecutionTimeFilter;
  closeTimeFilter?: ExecutionTimeFilter;
  executionFilter?: WorkflowExecutionFilter;
  typeFilter?: WorkflowTypeFilter;
  tagFilter?: TagFilter;
  closeStatusFilter?: CloseStatusFilter;
}
export type Count = number;
export type Truncated = boolean;
export interface WorkflowExecutionCount {
  count: number;
  truncated?: boolean;
}
export interface CountOpenWorkflowExecutionsInput {
  domain: string;
  startTimeFilter: ExecutionTimeFilter;
  typeFilter?: WorkflowTypeFilter;
  tagFilter?: TagFilter;
  executionFilter?: WorkflowExecutionFilter;
}
export interface TaskList {
  name: string;
}
export interface CountPendingActivityTasksInput {
  domain: string;
  taskList: TaskList;
}
export interface PendingTaskCount {
  count: number;
  truncated?: boolean;
}
export interface CountPendingDecisionTasksInput {
  domain: string;
  taskList: TaskList;
}
export type Version = string;
export interface ActivityType {
  name: string;
  version: string;
}
export interface DeleteActivityTypeInput {
  domain: string;
  activityType: ActivityType;
}
export interface DeleteActivityTypeResponse {}
export interface WorkflowType {
  name: string;
  version: string;
}
export interface DeleteWorkflowTypeInput {
  domain: string;
  workflowType: WorkflowType;
}
export interface DeleteWorkflowTypeResponse {}
export interface DeprecateActivityTypeInput {
  domain: string;
  activityType: ActivityType;
}
export interface DeprecateActivityTypeResponse {}
export interface DeprecateDomainInput {
  name: string;
}
export interface DeprecateDomainResponse {}
export interface DeprecateWorkflowTypeInput {
  domain: string;
  workflowType: WorkflowType;
}
export interface DeprecateWorkflowTypeResponse {}
export interface DescribeActivityTypeInput {
  domain: string;
  activityType: ActivityType;
}
export type RegistrationStatus = "REGISTERED" | "DEPRECATED" | (string & {});
export type Description = string;
export interface ActivityTypeInfo {
  activityType: ActivityType;
  status: RegistrationStatus;
  description?: string;
  creationDate: Date;
  deprecationDate?: Date;
}
export type DurationInSecondsOptional = string;
export type TaskPriority = string;
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
export interface DescribeDomainInput {
  name: string;
}
export type Arn = string;
export interface DomainInfo {
  name: string;
  status: RegistrationStatus;
  description?: string;
  arn?: string;
}
export type DurationInDays = string;
export interface DomainConfiguration {
  workflowExecutionRetentionPeriodInDays: string;
}
export interface DomainDetail {
  domainInfo: DomainInfo;
  configuration: DomainConfiguration;
}
export type WorkflowRunId = string;
export interface WorkflowExecution {
  workflowId: string;
  runId: string;
}
export interface DescribeWorkflowExecutionInput {
  domain: string;
  execution: WorkflowExecution;
}
export type ExecutionStatus = "OPEN" | "CLOSED" | (string & {});
export type TagList = string[];
export type Canceled = boolean;
export interface WorkflowExecutionInfo {
  execution: WorkflowExecution;
  workflowType: WorkflowType;
  startTimestamp: Date;
  closeTimestamp?: Date;
  executionStatus: ExecutionStatus;
  closeStatus?: CloseStatus;
  parent?: WorkflowExecution;
  tagList?: string[];
  cancelRequested?: boolean;
}
export type DurationInSeconds = string;
export type ChildPolicy = "TERMINATE" | "REQUEST_CANCEL" | "ABANDON" | (string & {});
export interface WorkflowExecutionConfiguration {
  taskStartToCloseTimeout: string;
  executionStartToCloseTimeout: string;
  taskList: TaskList;
  taskPriority?: string;
  childPolicy: ChildPolicy;
  lambdaRole?: string;
}
export type OpenDecisionTasksCount = number;
export interface WorkflowExecutionOpenCounts {
  openActivityTasks: number;
  openDecisionTasks: number;
  openTimers: number;
  openChildWorkflowExecutions: number;
  openLambdaFunctions?: number;
}
export type Data = string;
export interface WorkflowExecutionDetail {
  executionInfo: WorkflowExecutionInfo;
  executionConfiguration: WorkflowExecutionConfiguration;
  openCounts: WorkflowExecutionOpenCounts;
  latestActivityTaskTimestamp?: Date;
  latestExecutionContext?: string;
}
export interface DescribeWorkflowTypeInput {
  domain: string;
  workflowType: WorkflowType;
}
export interface WorkflowTypeInfo {
  workflowType: WorkflowType;
  status: RegistrationStatus;
  description?: string;
  creationDate: Date;
  deprecationDate?: Date;
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
export type PageToken = string;
export type PageSize = number;
export type ReverseOrder = boolean;
export interface GetWorkflowExecutionHistoryInput {
  domain: string;
  execution: WorkflowExecution;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
}
export type EventType =
  | "WorkflowExecutionStarted"
  | "WorkflowExecutionCancelRequested"
  | "WorkflowExecutionCompleted"
  | "CompleteWorkflowExecutionFailed"
  | "WorkflowExecutionFailed"
  | "FailWorkflowExecutionFailed"
  | "WorkflowExecutionTimedOut"
  | "WorkflowExecutionCanceled"
  | "CancelWorkflowExecutionFailed"
  | "WorkflowExecutionContinuedAsNew"
  | "ContinueAsNewWorkflowExecutionFailed"
  | "WorkflowExecutionTerminated"
  | "DecisionTaskScheduled"
  | "DecisionTaskStarted"
  | "DecisionTaskCompleted"
  | "DecisionTaskTimedOut"
  | "ActivityTaskScheduled"
  | "ScheduleActivityTaskFailed"
  | "ActivityTaskStarted"
  | "ActivityTaskCompleted"
  | "ActivityTaskFailed"
  | "ActivityTaskTimedOut"
  | "ActivityTaskCanceled"
  | "ActivityTaskCancelRequested"
  | "RequestCancelActivityTaskFailed"
  | "WorkflowExecutionSignaled"
  | "MarkerRecorded"
  | "RecordMarkerFailed"
  | "TimerStarted"
  | "StartTimerFailed"
  | "TimerFired"
  | "TimerCanceled"
  | "CancelTimerFailed"
  | "StartChildWorkflowExecutionInitiated"
  | "StartChildWorkflowExecutionFailed"
  | "ChildWorkflowExecutionStarted"
  | "ChildWorkflowExecutionCompleted"
  | "ChildWorkflowExecutionFailed"
  | "ChildWorkflowExecutionTimedOut"
  | "ChildWorkflowExecutionCanceled"
  | "ChildWorkflowExecutionTerminated"
  | "SignalExternalWorkflowExecutionInitiated"
  | "SignalExternalWorkflowExecutionFailed"
  | "ExternalWorkflowExecutionSignaled"
  | "RequestCancelExternalWorkflowExecutionInitiated"
  | "RequestCancelExternalWorkflowExecutionFailed"
  | "ExternalWorkflowExecutionCancelRequested"
  | "LambdaFunctionScheduled"
  | "LambdaFunctionStarted"
  | "LambdaFunctionCompleted"
  | "LambdaFunctionFailed"
  | "LambdaFunctionTimedOut"
  | "ScheduleLambdaFunctionFailed"
  | "StartLambdaFunctionFailed"
  | (string & {});
export type EventId = number;
export type WorkflowRunIdOptional = string;
export interface WorkflowExecutionStartedEventAttributes {
  input?: string;
  executionStartToCloseTimeout?: string;
  taskStartToCloseTimeout?: string;
  childPolicy: ChildPolicy;
  taskList: TaskList;
  taskPriority?: string;
  workflowType: WorkflowType;
  tagList?: string[];
  continuedExecutionRunId?: string;
  parentWorkflowExecution?: WorkflowExecution;
  parentInitiatedEventId?: number;
  lambdaRole?: string;
}
export interface WorkflowExecutionCompletedEventAttributes {
  result?: string;
  decisionTaskCompletedEventId: number;
}
export type CompleteWorkflowExecutionFailedCause =
  | "UNHANDLED_DECISION"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface CompleteWorkflowExecutionFailedEventAttributes {
  cause: CompleteWorkflowExecutionFailedCause;
  decisionTaskCompletedEventId: number;
}
export type FailureReason = string;
export interface WorkflowExecutionFailedEventAttributes {
  reason?: string;
  details?: string;
  decisionTaskCompletedEventId: number;
}
export type FailWorkflowExecutionFailedCause =
  | "UNHANDLED_DECISION"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface FailWorkflowExecutionFailedEventAttributes {
  cause: FailWorkflowExecutionFailedCause;
  decisionTaskCompletedEventId: number;
}
export type WorkflowExecutionTimeoutType = "START_TO_CLOSE" | (string & {});
export interface WorkflowExecutionTimedOutEventAttributes {
  timeoutType: WorkflowExecutionTimeoutType;
  childPolicy: ChildPolicy;
}
export interface WorkflowExecutionCanceledEventAttributes {
  details?: string;
  decisionTaskCompletedEventId: number;
}
export type CancelWorkflowExecutionFailedCause =
  | "UNHANDLED_DECISION"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface CancelWorkflowExecutionFailedEventAttributes {
  cause: CancelWorkflowExecutionFailedCause;
  decisionTaskCompletedEventId: number;
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
  tagList?: string[];
  workflowType: WorkflowType;
  lambdaRole?: string;
}
export type ContinueAsNewWorkflowExecutionFailedCause =
  | "UNHANDLED_DECISION"
  | "WORKFLOW_TYPE_DEPRECATED"
  | "WORKFLOW_TYPE_DOES_NOT_EXIST"
  | "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_TASK_LIST_UNDEFINED"
  | "DEFAULT_CHILD_POLICY_UNDEFINED"
  | "CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
  cause: ContinueAsNewWorkflowExecutionFailedCause;
  decisionTaskCompletedEventId: number;
}
export type TerminateReason = string;
export type WorkflowExecutionTerminatedCause =
  | "CHILD_POLICY_APPLIED"
  | "EVENT_LIMIT_EXCEEDED"
  | "OPERATOR_INITIATED"
  | (string & {});
export interface WorkflowExecutionTerminatedEventAttributes {
  reason?: string;
  details?: string;
  childPolicy: ChildPolicy;
  cause?: WorkflowExecutionTerminatedCause;
}
export type WorkflowExecutionCancelRequestedCause = "CHILD_POLICY_APPLIED" | (string & {});
export interface WorkflowExecutionCancelRequestedEventAttributes {
  externalWorkflowExecution?: WorkflowExecution;
  externalInitiatedEventId?: number;
  cause?: WorkflowExecutionCancelRequestedCause;
}
export interface DecisionTaskScheduledEventAttributes {
  taskList: TaskList;
  taskPriority?: string;
  startToCloseTimeout?: string;
  scheduleToStartTimeout?: string;
}
export type Identity = string;
export interface DecisionTaskStartedEventAttributes {
  identity?: string;
  scheduledEventId: number;
}
export interface DecisionTaskCompletedEventAttributes {
  executionContext?: string;
  scheduledEventId: number;
  startedEventId: number;
  taskList?: TaskList;
  taskListScheduleToStartTimeout?: string;
}
export type DecisionTaskTimeoutType = "START_TO_CLOSE" | "SCHEDULE_TO_START" | (string & {});
export interface DecisionTaskTimedOutEventAttributes {
  timeoutType: DecisionTaskTimeoutType;
  scheduledEventId: number;
  startedEventId: number;
}
export type ActivityId = string;
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
export type ActivityTaskTimeoutType =
  | "START_TO_CLOSE"
  | "SCHEDULE_TO_START"
  | "SCHEDULE_TO_CLOSE"
  | "HEARTBEAT"
  | (string & {});
export type LimitedData = string;
export interface ActivityTaskTimedOutEventAttributes {
  timeoutType: ActivityTaskTimeoutType;
  scheduledEventId: number;
  startedEventId: number;
  details?: string;
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
export type SignalName = string;
export interface WorkflowExecutionSignaledEventAttributes {
  signalName: string;
  input?: string;
  externalWorkflowExecution?: WorkflowExecution;
  externalInitiatedEventId?: number;
}
export type MarkerName = string;
export interface MarkerRecordedEventAttributes {
  markerName: string;
  details?: string;
  decisionTaskCompletedEventId: number;
}
export type RecordMarkerFailedCause = "OPERATION_NOT_PERMITTED" | (string & {});
export interface RecordMarkerFailedEventAttributes {
  markerName: string;
  cause: RecordMarkerFailedCause;
  decisionTaskCompletedEventId: number;
}
export type TimerId = string;
export interface TimerStartedEventAttributes {
  timerId: string;
  control?: string;
  startToFireTimeout: string;
  decisionTaskCompletedEventId: number;
}
export interface TimerFiredEventAttributes {
  timerId: string;
  startedEventId: number;
}
export interface TimerCanceledEventAttributes {
  timerId: string;
  startedEventId: number;
  decisionTaskCompletedEventId: number;
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
  tagList?: string[];
  lambdaRole?: string;
}
export interface ChildWorkflowExecutionStartedEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  initiatedEventId: number;
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
export interface ChildWorkflowExecutionTimedOutEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  timeoutType: WorkflowExecutionTimeoutType;
  initiatedEventId: number;
  startedEventId: number;
}
export interface ChildWorkflowExecutionCanceledEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  details?: string;
  initiatedEventId: number;
  startedEventId: number;
}
export interface ChildWorkflowExecutionTerminatedEventAttributes {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  initiatedEventId: number;
  startedEventId: number;
}
export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
  workflowId: string;
  runId?: string;
  signalName: string;
  input?: string;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export interface ExternalWorkflowExecutionSignaledEventAttributes {
  workflowExecution: WorkflowExecution;
  initiatedEventId: number;
}
export type SignalExternalWorkflowExecutionFailedCause =
  | "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"
  | "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface SignalExternalWorkflowExecutionFailedEventAttributes {
  workflowId: string;
  runId?: string;
  cause: SignalExternalWorkflowExecutionFailedCause;
  initiatedEventId: number;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
  workflowExecution: WorkflowExecution;
  initiatedEventId: number;
}
export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  workflowId: string;
  runId?: string;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export type RequestCancelExternalWorkflowExecutionFailedCause =
  | "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"
  | "REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
  workflowId: string;
  runId?: string;
  cause: RequestCancelExternalWorkflowExecutionFailedCause;
  initiatedEventId: number;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export type ScheduleActivityTaskFailedCause =
  | "ACTIVITY_TYPE_DEPRECATED"
  | "ACTIVITY_TYPE_DOES_NOT_EXIST"
  | "ACTIVITY_ID_ALREADY_IN_USE"
  | "OPEN_ACTIVITIES_LIMIT_EXCEEDED"
  | "ACTIVITY_CREATION_RATE_EXCEEDED"
  | "DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_TASK_LIST_UNDEFINED"
  | "DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED"
  | "DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface ScheduleActivityTaskFailedEventAttributes {
  activityType: ActivityType;
  activityId: string;
  cause: ScheduleActivityTaskFailedCause;
  decisionTaskCompletedEventId: number;
}
export type RequestCancelActivityTaskFailedCause =
  | "ACTIVITY_ID_UNKNOWN"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface RequestCancelActivityTaskFailedEventAttributes {
  activityId: string;
  cause: RequestCancelActivityTaskFailedCause;
  decisionTaskCompletedEventId: number;
}
export type StartTimerFailedCause =
  | "TIMER_ID_ALREADY_IN_USE"
  | "OPEN_TIMERS_LIMIT_EXCEEDED"
  | "TIMER_CREATION_RATE_EXCEEDED"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface StartTimerFailedEventAttributes {
  timerId: string;
  cause: StartTimerFailedCause;
  decisionTaskCompletedEventId: number;
}
export type CancelTimerFailedCause = "TIMER_ID_UNKNOWN" | "OPERATION_NOT_PERMITTED" | (string & {});
export interface CancelTimerFailedEventAttributes {
  timerId: string;
  cause: CancelTimerFailedCause;
  decisionTaskCompletedEventId: number;
}
export type StartChildWorkflowExecutionFailedCause =
  | "WORKFLOW_TYPE_DOES_NOT_EXIST"
  | "WORKFLOW_TYPE_DEPRECATED"
  | "OPEN_CHILDREN_LIMIT_EXCEEDED"
  | "OPEN_WORKFLOWS_LIMIT_EXCEEDED"
  | "CHILD_CREATION_RATE_EXCEEDED"
  | "WORKFLOW_ALREADY_RUNNING"
  | "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_TASK_LIST_UNDEFINED"
  | "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_CHILD_POLICY_UNDEFINED"
  | "OPERATION_NOT_PERMITTED"
  | (string & {});
export interface StartChildWorkflowExecutionFailedEventAttributes {
  workflowType: WorkflowType;
  cause: StartChildWorkflowExecutionFailedCause;
  workflowId: string;
  initiatedEventId: number;
  decisionTaskCompletedEventId: number;
  control?: string;
}
export type FunctionId = string;
export type FunctionName = string;
export type FunctionInput = string;
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
export type LambdaFunctionTimeoutType = "START_TO_CLOSE" | (string & {});
export interface LambdaFunctionTimedOutEventAttributes {
  scheduledEventId: number;
  startedEventId: number;
  timeoutType?: LambdaFunctionTimeoutType;
}
export type ScheduleLambdaFunctionFailedCause =
  | "ID_ALREADY_IN_USE"
  | "OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED"
  | "LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED"
  | "LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION"
  | (string & {});
export interface ScheduleLambdaFunctionFailedEventAttributes {
  id: string;
  name: string;
  cause: ScheduleLambdaFunctionFailedCause;
  decisionTaskCompletedEventId: number;
}
export type StartLambdaFunctionFailedCause = "ASSUME_ROLE_FAILED" | (string & {});
export type CauseMessage = string;
export interface StartLambdaFunctionFailedEventAttributes {
  scheduledEventId?: number;
  cause?: StartLambdaFunctionFailedCause;
  message?: string;
}
export interface HistoryEvent {
  eventTimestamp: Date;
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
export type HistoryEventList = HistoryEvent[];
export interface History {
  events: HistoryEvent[];
  nextPageToken?: string;
}
export interface ListActivityTypesInput {
  domain: string;
  name?: string;
  registrationStatus: RegistrationStatus;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
}
export type ActivityTypeInfoList = ActivityTypeInfo[];
export interface ActivityTypeInfos {
  typeInfos: ActivityTypeInfo[];
  nextPageToken?: string;
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
export type WorkflowExecutionInfoList = WorkflowExecutionInfo[];
export interface WorkflowExecutionInfos {
  executionInfos: WorkflowExecutionInfo[];
  nextPageToken?: string;
}
export interface ListDomainsInput {
  nextPageToken?: string;
  registrationStatus: RegistrationStatus;
  maximumPageSize?: number;
  reverseOrder?: boolean;
}
export type DomainInfoList = DomainInfo[];
export interface DomainInfos {
  domainInfos: DomainInfo[];
  nextPageToken?: string;
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
export type ResourceTagKey = string;
export type ResourceTagValue = string;
export interface ResourceTag {
  key: string;
  value?: string;
}
export type ResourceTagList = ResourceTag[];
export interface ListTagsForResourceOutput {
  tags?: ResourceTag[];
}
export interface ListWorkflowTypesInput {
  domain: string;
  name?: string;
  registrationStatus: RegistrationStatus;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
}
export type WorkflowTypeInfoList = WorkflowTypeInfo[];
export interface WorkflowTypeInfos {
  typeInfos: WorkflowTypeInfo[];
  nextPageToken?: string;
}
export interface PollForActivityTaskInput {
  domain: string;
  taskList: TaskList;
  identity?: string;
}
export type TaskToken = string;
export interface ActivityTask {
  taskToken: string;
  activityId: string;
  startedEventId: number;
  workflowExecution: WorkflowExecution;
  activityType: ActivityType;
  input?: string;
}
export type StartAtPreviousStartedEvent = boolean;
export interface PollForDecisionTaskInput {
  domain: string;
  taskList: TaskList;
  identity?: string;
  nextPageToken?: string;
  maximumPageSize?: number;
  reverseOrder?: boolean;
  startAtPreviousStartedEvent?: boolean;
}
export interface DecisionTask {
  taskToken: string;
  startedEventId: number;
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  events: HistoryEvent[];
  nextPageToken?: string;
  previousStartedEventId?: number;
}
export interface RecordActivityTaskHeartbeatInput {
  taskToken: string;
  details?: string;
}
export interface ActivityTaskStatus {
  cancelRequested: boolean;
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
export interface RegisterActivityTypeResponse {}
export interface RegisterDomainInput {
  name: string;
  description?: string;
  workflowExecutionRetentionPeriodInDays: string;
  tags?: ResourceTag[];
}
export interface RegisterDomainResponse {}
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
export interface RegisterWorkflowTypeResponse {}
export interface RequestCancelWorkflowExecutionInput {
  domain: string;
  workflowId: string;
  runId?: string;
}
export interface RequestCancelWorkflowExecutionResponse {}
export interface RespondActivityTaskCanceledInput {
  taskToken: string;
  details?: string;
}
export interface RespondActivityTaskCanceledResponse {}
export interface RespondActivityTaskCompletedInput {
  taskToken: string;
  result?: string;
}
export interface RespondActivityTaskCompletedResponse {}
export interface RespondActivityTaskFailedInput {
  taskToken: string;
  reason?: string;
  details?: string;
}
export interface RespondActivityTaskFailedResponse {}
export type DecisionType =
  | "ScheduleActivityTask"
  | "RequestCancelActivityTask"
  | "CompleteWorkflowExecution"
  | "FailWorkflowExecution"
  | "CancelWorkflowExecution"
  | "ContinueAsNewWorkflowExecution"
  | "RecordMarker"
  | "StartTimer"
  | "CancelTimer"
  | "SignalExternalWorkflowExecution"
  | "RequestCancelExternalWorkflowExecution"
  | "StartChildWorkflowExecution"
  | "ScheduleLambdaFunction"
  | (string & {});
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
export interface RequestCancelActivityTaskDecisionAttributes {
  activityId: string;
}
export interface CompleteWorkflowExecutionDecisionAttributes {
  result?: string;
}
export interface FailWorkflowExecutionDecisionAttributes {
  reason?: string;
  details?: string;
}
export interface CancelWorkflowExecutionDecisionAttributes {
  details?: string;
}
export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
  input?: string;
  executionStartToCloseTimeout?: string;
  taskList?: TaskList;
  taskPriority?: string;
  taskStartToCloseTimeout?: string;
  childPolicy?: ChildPolicy;
  tagList?: string[];
  workflowTypeVersion?: string;
  lambdaRole?: string;
}
export interface RecordMarkerDecisionAttributes {
  markerName: string;
  details?: string;
}
export interface StartTimerDecisionAttributes {
  timerId: string;
  control?: string;
  startToFireTimeout: string;
}
export interface CancelTimerDecisionAttributes {
  timerId: string;
}
export interface SignalExternalWorkflowExecutionDecisionAttributes {
  workflowId: string;
  runId?: string;
  signalName: string;
  input?: string;
  control?: string;
}
export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
  workflowId: string;
  runId?: string;
  control?: string;
}
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
  tagList?: string[];
  lambdaRole?: string;
}
export interface ScheduleLambdaFunctionDecisionAttributes {
  id: string;
  name: string;
  control?: string;
  input?: string;
  startToCloseTimeout?: string;
}
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
export type DecisionList = Decision[];
export interface RespondDecisionTaskCompletedInput {
  taskToken: string;
  decisions?: Decision[];
  executionContext?: string;
  taskList?: TaskList;
  taskListScheduleToStartTimeout?: string;
}
export interface RespondDecisionTaskCompletedResponse {}
export interface SignalWorkflowExecutionInput {
  domain: string;
  workflowId: string;
  runId?: string;
  signalName: string;
  input?: string;
}
export interface SignalWorkflowExecutionResponse {}
export interface StartWorkflowExecutionInput {
  domain: string;
  workflowId: string;
  workflowType: WorkflowType;
  taskList?: TaskList;
  taskPriority?: string;
  input?: string;
  executionStartToCloseTimeout?: string;
  tagList?: string[];
  taskStartToCloseTimeout?: string;
  childPolicy?: ChildPolicy;
  lambdaRole?: string;
}
export interface Run {
  runId?: string;
}
export interface TagResourceInput {
  resourceArn: string;
  tags: ResourceTag[];
}
export interface TagResourceResponse {}
export interface TerminateWorkflowExecutionInput {
  domain: string;
  workflowId: string;
  runId?: string;
  reason?: string;
  details?: string;
  childPolicy?: ChildPolicy;
}
export interface TerminateWorkflowExecutionResponse {}
export interface UndeprecateActivityTypeInput {
  domain: string;
  activityType: ActivityType;
}
export interface UndeprecateActivityTypeResponse {}
export interface UndeprecateDomainInput {
  name: string;
}
export interface UndeprecateDomainResponse {}
export interface UndeprecateWorkflowTypeInput {
  domain: string;
  workflowType: WorkflowType;
}
export interface UndeprecateWorkflowTypeResponse {}
export type ResourceTagKeyList = string[];
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export type ErrorMessage = string;
export type CountClosedWorkflowExecutionsError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns the number of closed workflow executions within the given domain that meet the
 * specified filtering criteria.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `tagFilter.tag`: String constraint. The key is
 * `swf:tagFilter.tag`.
 *
 * - `typeFilter.name`: String constraint. The key is
 * `swf:typeFilter.name`.
 *
 * - `typeFilter.version`: String constraint. The key is
 * `swf:typeFilter.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const countClosedWorkflowExecutions: API.OperationMethod<
  CountClosedWorkflowExecutionsInput,
  WorkflowExecutionCount,
  CountClosedWorkflowExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5, __c0, 5) as any as S.Schema<CountClosedWorkflowExecutionsInput>,
  output: __S(6, __c0, 6) as any as S.Schema<WorkflowExecutionCount>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CountClosedWorkflowExecutions",
}));

export type CountOpenWorkflowExecutionsError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns the number of open workflow executions within the given domain that meet the
 * specified filtering criteria.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `tagFilter.tag`: String constraint. The key is
 * `swf:tagFilter.tag`.
 *
 * - `typeFilter.name`: String constraint. The key is
 * `swf:typeFilter.name`.
 *
 * - `typeFilter.version`: String constraint. The key is
 * `swf:typeFilter.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const countOpenWorkflowExecutions: API.OperationMethod<
  CountOpenWorkflowExecutionsInput,
  WorkflowExecutionCount,
  CountOpenWorkflowExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<CountOpenWorkflowExecutionsInput>,
  output: __S(6, __c0, 6) as any as S.Schema<WorkflowExecutionCount>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CountOpenWorkflowExecutions",
}));

export type CountPendingActivityTasksError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns the estimated number of activity tasks in the specified task list. The count
 * returned is an approximation and isn't guaranteed to be exact. If you specify a task list that
 * no activity task was ever scheduled in then `0` is returned.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the `taskList.name` parameter by using a
 * `Condition` element with the `swf:taskList.name` key to allow the
 * action to access only certain task lists.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const countPendingActivityTasks: API.OperationMethod<
  CountPendingActivityTasksInput,
  PendingTaskCount,
  CountPendingActivityTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<CountPendingActivityTasksInput>,
  output: __S(6, __c0, 6) as any as S.Schema<PendingTaskCount>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CountPendingActivityTasks",
}));

export type CountPendingDecisionTasksError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns the estimated number of decision tasks in the specified task list. The count
 * returned is an approximation and isn't guaranteed to be exact. If you specify a task list that
 * no decision task was ever scheduled in then `0` is returned.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the `taskList.name` parameter by using a
 * `Condition` element with the `swf:taskList.name` key to allow the
 * action to access only certain task lists.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const countPendingDecisionTasks: API.OperationMethod<
  CountPendingDecisionTasksInput,
  PendingTaskCount,
  CountPendingDecisionTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<CountPendingDecisionTasksInput>,
  output: __S(6, __c0, 6) as any as S.Schema<PendingTaskCount>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CountPendingDecisionTasks",
}));

export type DeleteActivityTypeError =
  | OperationNotPermittedFault
  | TypeNotDeprecatedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Deletes the specified *activity type*.
 *
 * Note: Prior to deletion, activity types must first be **deprecated**.
 *
 * After an activity type has been deleted, you cannot schedule new activities of that type. Activities that started before the type was deleted will continue to run.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `activityType.name`: String constraint. The key is
 * `swf:activityType.name`.
 *
 * - `activityType.version`: String constraint. The key is
 * `swf:activityType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const deleteActivityType: API.OperationMethod<
  DeleteActivityTypeInput,
  DeleteActivityTypeResponse,
  DeleteActivityTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<DeleteActivityTypeInput>,
  output: __S(13, __c1, 5) as any as S.Schema<DeleteActivityTypeResponse>,
  errors: [OperationNotPermittedFault, TypeNotDeprecatedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteActivityType",
}));

export type DeleteWorkflowTypeError =
  | OperationNotPermittedFault
  | TypeNotDeprecatedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Deletes the specified *workflow type*.
 *
 * Note: Prior to deletion, workflow types must first be **deprecated**.
 *
 * After a workflow type has been deleted, you cannot create new executions of that type. Executions that
 * started before the type was deleted will continue to run.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `workflowType.name`: String constraint. The key is
 * `swf:workflowType.name`.
 *
 * - `workflowType.version`: String constraint. The key is
 * `swf:workflowType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const deleteWorkflowType: API.OperationMethod<
  DeleteWorkflowTypeInput,
  DeleteWorkflowTypeResponse,
  DeleteWorkflowTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<DeleteWorkflowTypeInput>,
  output: __S(13, __c1, 5) as any as S.Schema<DeleteWorkflowTypeResponse>,
  errors: [OperationNotPermittedFault, TypeNotDeprecatedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkflowType",
}));

export type DeprecateActivityTypeError =
  | OperationNotPermittedFault
  | TypeDeprecatedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Deprecates the specified *activity type*. After an activity type has
 * been deprecated, you cannot create new tasks of that activity type. Tasks of this type that
 * were scheduled before the type was deprecated continue to run.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `activityType.name`: String constraint. The key is
 * `swf:activityType.name`.
 *
 * - `activityType.version`: String constraint. The key is
 * `swf:activityType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const deprecateActivityType: API.OperationMethod<
  DeprecateActivityTypeInput,
  DeprecateActivityTypeResponse,
  DeprecateActivityTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<DeprecateActivityTypeInput>,
  output: __S(13, __c1, 5) as any as S.Schema<DeprecateActivityTypeResponse>,
  errors: [OperationNotPermittedFault, TypeDeprecatedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeprecateActivityType",
}));

export type DeprecateDomainError =
  | DomainDeprecatedFault
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Deprecates the specified domain. After a domain has been deprecated it cannot be used
 * to create new workflow executions or register new types. However, you can still use visibility
 * actions on this domain. Deprecating a domain also deprecates all activity and workflow types
 * registered in the domain. Executions that were started before the domain was deprecated
 * continues to run.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const deprecateDomain: API.OperationMethod<
  DeprecateDomainInput,
  DeprecateDomainResponse,
  DeprecateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<DeprecateDomainInput>,
  output: __S(17, __c2, 1) as any as S.Schema<DeprecateDomainResponse>,
  errors: [DomainDeprecatedFault, OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeprecateDomain",
}));

export type DeprecateWorkflowTypeError =
  | OperationNotPermittedFault
  | TypeDeprecatedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Deprecates the specified *workflow type*. After a workflow type has
 * been deprecated, you cannot create new executions of that type. Executions that were started
 * before the type was deprecated continues to run. A deprecated workflow type may still be used
 * when calling visibility actions.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `workflowType.name`: String constraint. The key is
 * `swf:workflowType.name`.
 *
 * - `workflowType.version`: String constraint. The key is
 * `swf:workflowType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const deprecateWorkflowType: API.OperationMethod<
  DeprecateWorkflowTypeInput,
  DeprecateWorkflowTypeResponse,
  DeprecateWorkflowTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18, __c2, 2) as any as S.Schema<DeprecateWorkflowTypeInput>,
  output: __S(13, __c1, 5) as any as S.Schema<DeprecateWorkflowTypeResponse>,
  errors: [OperationNotPermittedFault, TypeDeprecatedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeprecateWorkflowType",
}));

export type DescribeActivityTypeError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns information about the specified activity type. This includes configuration
 * settings provided when the type was registered and other general information about the
 * type.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `activityType.name`: String constraint. The key is
 * `swf:activityType.name`.
 *
 * - `activityType.version`: String constraint. The key is
 * `swf:activityType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const describeActivityType: API.OperationMethod<
  DescribeActivityTypeInput,
  ActivityTypeDetail,
  DescribeActivityTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<DescribeActivityTypeInput>,
  output: __S(22, __c2, 6) as any as S.Schema<ActivityTypeDetail>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeActivityType",
}));

export type DescribeDomainError = OperationNotPermittedFault | UnknownResourceFault | CommonErrors;
/**
 * Returns information about the specified domain, including description and
 * status.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const describeDomain: API.OperationMethod<
  DescribeDomainInput,
  DomainDetail,
  DescribeDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<DescribeDomainInput>,
  output: __S(26, __c3, 2) as any as S.Schema<DomainDetail>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomain",
}));

export type DescribeWorkflowExecutionError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns information about the specified workflow execution including its type and some
 * statistics.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const describeWorkflowExecution: API.OperationMethod<
  DescribeWorkflowExecutionInput,
  WorkflowExecutionDetail,
  DescribeWorkflowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<DescribeWorkflowExecutionInput>,
  output: __S(33, __c4, 1) as any as S.Schema<WorkflowExecutionDetail>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkflowExecution",
}));

export type DescribeWorkflowTypeError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns information about the specified *workflow type*. This
 * includes configuration settings specified when the type was registered and other information
 * such as creation date, current status, etc.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `workflowType.name`: String constraint. The key is
 * `swf:workflowType.name`.
 *
 * - `workflowType.version`: String constraint. The key is
 * `swf:workflowType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const describeWorkflowType: API.OperationMethod<
  DescribeWorkflowTypeInput,
  WorkflowTypeDetail,
  DescribeWorkflowTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<DescribeWorkflowTypeInput>,
  output: __S(37, __c4, 5) as any as S.Schema<WorkflowTypeDetail>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkflowType",
}));

export type GetWorkflowExecutionHistoryError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns the history of the specified workflow execution. The results may be split into
 * multiple pages. To retrieve subsequent pages, make the call again using the
 * `nextPageToken` returned by the initial call.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const getWorkflowExecutionHistory: API.PaginatedOperationMethod<
  GetWorkflowExecutionHistoryInput,
  History,
  GetWorkflowExecutionHistoryError,
  Credentials | HttpClient.HttpClient,
  HistoryEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<GetWorkflowExecutionHistoryInput>,
  output: __S(90, __c11, 2) as any as S.Schema<History>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflowExecutionHistory",
  pagination: {
    inputToken: "nextPageToken",
    outputToken: "nextPageToken",
    items: "events",
    pageSize: "maximumPageSize",
  } as const,
})) as any;

export type ListActivityTypesError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns information about all activities registered in the specified domain that match
 * the specified name and registration status. The result includes information like creation
 * date, current status of the activity, etc. The results may be split into multiple pages. To
 * retrieve subsequent pages, make the call again using the `nextPageToken` returned
 * by the initial call.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const listActivityTypes: API.PaginatedOperationMethod<
  ListActivityTypesInput,
  ActivityTypeInfos,
  ListActivityTypesError,
  Credentials | HttpClient.HttpClient,
  ActivityTypeInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<ListActivityTypesInput>,
  output: __S(93, __c11, 5) as any as S.Schema<ActivityTypeInfos>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListActivityTypes",
  pagination: {
    inputToken: "nextPageToken",
    outputToken: "nextPageToken",
    items: "typeInfos",
    pageSize: "maximumPageSize",
  } as const,
})) as any;

export type ListClosedWorkflowExecutionsError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns a list of closed workflow executions in the specified domain that meet the
 * filtering criteria. The results may be split into multiple pages. To retrieve subsequent
 * pages, make the call again using the nextPageToken returned by the initial call.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `tagFilter.tag`: String constraint. The key is
 * `swf:tagFilter.tag`.
 *
 * - `typeFilter.name`: String constraint. The key is
 * `swf:typeFilter.name`.
 *
 * - `typeFilter.version`: String constraint. The key is
 * `swf:typeFilter.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const listClosedWorkflowExecutions: API.PaginatedOperationMethod<
  ListClosedWorkflowExecutionsInput,
  WorkflowExecutionInfos,
  ListClosedWorkflowExecutionsError,
  Credentials | HttpClient.HttpClient,
  WorkflowExecutionInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<ListClosedWorkflowExecutionsInput>,
  output: __S(96, __c12, 0) as any as S.Schema<WorkflowExecutionInfos>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListClosedWorkflowExecutions",
  pagination: {
    inputToken: "nextPageToken",
    outputToken: "nextPageToken",
    items: "executionInfos",
    pageSize: "maximumPageSize",
  } as const,
})) as any;

export type ListDomainsError = OperationNotPermittedFault | CommonErrors;
/**
 * Returns the list of domains registered in the account. The results may be split into
 * multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken
 * returned by the initial call.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains. The element must be set to
 * `arn:aws:swf::AccountID:domain/*`, where *AccountID* is
 * the account ID, with no dashes.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const listDomains: API.PaginatedOperationMethod<
  ListDomainsInput,
  DomainInfos,
  ListDomainsError,
  Credentials | HttpClient.HttpClient,
  DomainInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(97, __c12, 1) as any as S.Schema<ListDomainsInput>,
  output: __S(99, __c12, 3) as any as S.Schema<DomainInfos>,
  errors: [OperationNotPermittedFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomains",
  pagination: {
    inputToken: "nextPageToken",
    outputToken: "nextPageToken",
    items: "domainInfos",
    pageSize: "maximumPageSize",
  } as const,
})) as any;

export type ListOpenWorkflowExecutionsError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns a list of open workflow executions in the specified domain that meet the
 * filtering criteria. The results may be split into multiple pages. To retrieve subsequent
 * pages, make the call again using the nextPageToken returned by the initial call.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `tagFilter.tag`: String constraint. The key is
 * `swf:tagFilter.tag`.
 *
 * - `typeFilter.name`: String constraint. The key is
 * `swf:typeFilter.name`.
 *
 * - `typeFilter.version`: String constraint. The key is
 * `swf:typeFilter.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const listOpenWorkflowExecutions: API.PaginatedOperationMethod<
  ListOpenWorkflowExecutionsInput,
  WorkflowExecutionInfos,
  ListOpenWorkflowExecutionsError,
  Credentials | HttpClient.HttpClient,
  WorkflowExecutionInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<ListOpenWorkflowExecutionsInput>,
  output: __S(96, __c12, 0) as any as S.Schema<WorkflowExecutionInfos>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOpenWorkflowExecutions",
  pagination: {
    inputToken: "nextPageToken",
    outputToken: "nextPageToken",
    items: "executionInfos",
    pageSize: "maximumPageSize",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | LimitExceededFault
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * List tags for a given domain.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(104, __c13, 0) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [LimitExceededFault, OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWorkflowTypesError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Returns information about workflow types in the specified domain. The results may be
 * split into multiple pages that can be retrieved by making the call repeatedly.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const listWorkflowTypes: API.PaginatedOperationMethod<
  ListWorkflowTypesInput,
  WorkflowTypeInfos,
  ListWorkflowTypesError,
  Credentials | HttpClient.HttpClient,
  WorkflowTypeInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<ListWorkflowTypesInput>,
  output: __S(107, __c13, 3) as any as S.Schema<WorkflowTypeInfos>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflowTypes",
  pagination: {
    inputToken: "nextPageToken",
    outputToken: "nextPageToken",
    items: "typeInfos",
    pageSize: "maximumPageSize",
  } as const,
})) as any;

export type PollForActivityTaskError =
  | LimitExceededFault
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Used by workers to get an ActivityTask from the specified activity
 * `taskList`. This initiates a long poll, where the service holds the HTTP
 * connection open and responds as soon as a task becomes available. The maximum time the service
 * holds on to the request before responding is 60 seconds. If no task is available within 60
 * seconds, the poll returns an empty result. An empty result, in this context, means that an
 * ActivityTask is returned, but that the value of taskToken is an empty string. If a task is
 * returned, the worker should use its type to identify and process it correctly.
 *
 * Workers should set their client side socket timeout to at least 70 seconds (10
 * seconds higher than the maximum time service may hold the poll request).
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the `taskList.name` parameter by using a
 * `Condition` element with the `swf:taskList.name` key to allow the
 * action to access only certain task lists.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const pollForActivityTask: API.OperationMethod<
  PollForActivityTaskInput,
  ActivityTask,
  PollForActivityTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108, __c13, 4) as any as S.Schema<PollForActivityTaskInput>,
  output: __S(109, __c13, 5) as any as S.Schema<ActivityTask>,
  errors: [LimitExceededFault, OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PollForActivityTask",
}));

export type PollForDecisionTaskError =
  | LimitExceededFault
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Used by deciders to get a DecisionTask from the specified decision
 * `taskList`. A decision task may be returned for any open workflow execution that
 * is using the specified task list. The task includes a paginated view of the history of the
 * workflow execution. The decider should use the workflow type and the history to determine how
 * to properly handle the task.
 *
 * This action initiates a long poll, where the service holds the HTTP connection open and
 * responds as soon a task becomes available. If no decision task is available in the specified
 * task list before the timeout of 60 seconds expires, an empty result is returned. An empty
 * result, in this context, means that a DecisionTask is returned, but that the value of
 * taskToken is an empty string.
 *
 * Deciders should set their client side socket timeout to at least 70 seconds (10
 * seconds higher than the timeout).
 *
 * Because the number of workflow history events for a single workflow execution might
 * be very large, the result returned might be split up across a number of pages. To retrieve
 * subsequent pages, make additional calls to `PollForDecisionTask` using the
 * `nextPageToken` returned by the initial call. Note that you do
 * *not* call `GetWorkflowExecutionHistory` with this
 * `nextPageToken`. Instead, call `PollForDecisionTask`
 * again.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the `taskList.name` parameter by using a
 * `Condition` element with the `swf:taskList.name` key to allow the
 * action to access only certain task lists.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const pollForDecisionTask: API.PaginatedOperationMethod<
  PollForDecisionTaskInput,
  DecisionTask,
  PollForDecisionTaskError,
  Credentials | HttpClient.HttpClient,
  HistoryEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<PollForDecisionTaskInput>,
  output: __S(111, __c13, 7) as any as S.Schema<DecisionTask>,
  errors: [LimitExceededFault, OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PollForDecisionTask",
  pagination: {
    inputToken: "nextPageToken",
    outputToken: "nextPageToken",
    items: "events",
    pageSize: "maximumPageSize",
  } as const,
})) as any;

export type RecordActivityTaskHeartbeatError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Used by activity workers to report to the service that the ActivityTask represented by the specified `taskToken` is still making progress. The worker
 * can also specify details of the progress, for example percent complete, using the
 * `details` parameter. This action can also be used by the worker as a mechanism to
 * check if cancellation is being requested for the activity task. If a cancellation is being
 * attempted for the specified task, then the boolean `cancelRequested` flag returned
 * by the service is set to `true`.
 *
 * This action resets the `taskHeartbeatTimeout` clock. The
 * `taskHeartbeatTimeout` is specified in RegisterActivityType.
 *
 * This action doesn't in itself create an event in the workflow execution history.
 * However, if the task times out, the workflow execution history contains a
 * `ActivityTaskTimedOut` event that contains the information from the last
 * heartbeat generated by the activity worker.
 *
 * The `taskStartToCloseTimeout` of an activity type is the maximum duration
 * of an activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The `taskStartToCloseTimeout` is also specified in RegisterActivityType.
 *
 * This operation is only useful for long-lived activities to report liveliness of the
 * task and to determine if a cancellation is being attempted.
 *
 * If the `cancelRequested` flag returns `true`, a cancellation is
 * being attempted. If the worker can cancel the activity, it should respond with RespondActivityTaskCanceled. Otherwise, it should ignore the cancellation
 * request.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const recordActivityTaskHeartbeat: API.OperationMethod<
  RecordActivityTaskHeartbeatInput,
  ActivityTaskStatus,
  RecordActivityTaskHeartbeatError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112, __c14, 0) as any as S.Schema<RecordActivityTaskHeartbeatInput>,
  output: __S(113, __c14, 1) as any as S.Schema<ActivityTaskStatus>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RecordActivityTaskHeartbeat",
}));

export type RegisterActivityTypeError =
  | LimitExceededFault
  | OperationNotPermittedFault
  | TypeAlreadyExistsFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Registers a new *activity type* along with its configuration
 * settings in the specified domain.
 *
 * A `TypeAlreadyExists` fault is returned if the type already exists in the
 * domain. You cannot change any configuration settings of the type after its registration, and
 * it must be registered as a new version.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `defaultTaskList.name`: String constraint. The key is
 * `swf:defaultTaskList.name`.
 *
 * - `name`: String constraint. The key is `swf:name`.
 *
 * - `version`: String constraint. The key is
 * `swf:version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const registerActivityType: API.OperationMethod<
  RegisterActivityTypeInput,
  RegisterActivityTypeResponse,
  RegisterActivityTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<RegisterActivityTypeInput>,
  output: __S(13, __c1, 5) as any as S.Schema<RegisterActivityTypeResponse>,
  errors: [
    LimitExceededFault,
    OperationNotPermittedFault,
    TypeAlreadyExistsFault,
    UnknownResourceFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterActivityType",
}));

export type RegisterDomainError =
  | DomainAlreadyExistsFault
  | LimitExceededFault
  | OperationNotPermittedFault
  | TooManyTagsFault
  | CommonErrors;
/**
 * Registers a new domain.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - You cannot use an IAM policy to control domain access for this action. The name of
 * the domain being registered is available as the resource of this action.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const registerDomain: API.OperationMethod<
  RegisterDomainInput,
  RegisterDomainResponse,
  RegisterDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<RegisterDomainInput>,
  output: __S(116, __c14, 4) as any as S.Schema<RegisterDomainResponse>,
  errors: [
    DomainAlreadyExistsFault,
    LimitExceededFault,
    OperationNotPermittedFault,
    TooManyTagsFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterDomain",
}));

export type RegisterWorkflowTypeError =
  | LimitExceededFault
  | OperationNotPermittedFault
  | TypeAlreadyExistsFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Registers a new *workflow type* and its configuration settings in
 * the specified domain.
 *
 * The retention period for the workflow history is set by the RegisterDomain action.
 *
 * If the type already exists, then a `TypeAlreadyExists` fault is returned.
 * You cannot change the configuration settings of a workflow type once it is registered and it
 * must be registered as a new version.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `defaultTaskList.name`: String constraint. The key is
 * `swf:defaultTaskList.name`.
 *
 * - `name`: String constraint. The key is `swf:name`.
 *
 * - `version`: String constraint. The key is
 * `swf:version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const registerWorkflowType: API.OperationMethod<
  RegisterWorkflowTypeInput,
  RegisterWorkflowTypeResponse,
  RegisterWorkflowTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<RegisterWorkflowTypeInput>,
  output: __S(13, __c1, 5) as any as S.Schema<RegisterWorkflowTypeResponse>,
  errors: [
    LimitExceededFault,
    OperationNotPermittedFault,
    TypeAlreadyExistsFault,
    UnknownResourceFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterWorkflowType",
}));

export type RequestCancelWorkflowExecutionError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Records a `WorkflowExecutionCancelRequested` event in the currently running
 * workflow execution identified by the given domain, workflowId, and runId. This logically
 * requests the cancellation of the workflow execution as a whole. It is up to the decider to
 * take appropriate actions when it receives an execution history with this event.
 *
 * If the runId isn't specified, the `WorkflowExecutionCancelRequested` event
 * is recorded in the history of the current open workflow execution with the specified
 * workflowId in the domain.
 *
 * Because this action allows the workflow to properly clean up and gracefully close, it
 * should be used instead of TerminateWorkflowExecution when
 * possible.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const requestCancelWorkflowExecution: API.OperationMethod<
  RequestCancelWorkflowExecutionInput,
  RequestCancelWorkflowExecutionResponse,
  RequestCancelWorkflowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<RequestCancelWorkflowExecutionInput>,
  output: __S(13, __c1, 5) as any as S.Schema<RequestCancelWorkflowExecutionResponse>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RequestCancelWorkflowExecution",
}));

export type RespondActivityTaskCanceledError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Used by workers to tell the service that the ActivityTask identified
 * by the `taskToken` was successfully canceled. Additional `details` can
 * be provided using the `details` argument.
 *
 * These `details` (if provided) appear in the
 * `ActivityTaskCanceled` event added to the workflow history.
 *
 * Only use this operation if the `canceled` flag of a RecordActivityTaskHeartbeat request returns `true` and if the
 * activity can be safely undone or abandoned.
 *
 * A task is considered open from the time that it is scheduled until it is closed.
 * Therefore a task is reported as open while a worker is processing it. A task is closed after
 * it has been specified in a call to RespondActivityTaskCompleted,
 * RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has
 * timed
 * out.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const respondActivityTaskCanceled: API.OperationMethod<
  RespondActivityTaskCanceledInput,
  RespondActivityTaskCanceledResponse,
  RespondActivityTaskCanceledError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119, __c14, 7) as any as S.Schema<RespondActivityTaskCanceledInput>,
  output: __S(13, __c1, 5) as any as S.Schema<RespondActivityTaskCanceledResponse>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RespondActivityTaskCanceled",
}));

export type RespondActivityTaskCompletedError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Used by workers to tell the service that the ActivityTask identified
 * by the `taskToken` completed successfully with a `result` (if provided).
 * The `result` appears in the `ActivityTaskCompleted` event in the
 * workflow history.
 *
 * If the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds that the task is
 * canceled through the `canceled` flag returned by RecordActivityTaskHeartbeat, it should cancel the task, clean up and then call
 * RespondActivityTaskCanceled.
 *
 * A task is considered open from the time that it is scheduled until it is closed.
 * Therefore a task is reported as open while a worker is processing it. A task is closed after
 * it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the
 * task has timed
 * out.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const respondActivityTaskCompleted: API.OperationMethod<
  RespondActivityTaskCompletedInput,
  RespondActivityTaskCompletedResponse,
  RespondActivityTaskCompletedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<RespondActivityTaskCompletedInput>,
  output: __S(13, __c1, 5) as any as S.Schema<RespondActivityTaskCompletedResponse>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RespondActivityTaskCompleted",
}));

export type RespondActivityTaskFailedError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Used by workers to tell the service that the ActivityTask identified
 * by the `taskToken` has failed with `reason` (if specified). The
 * `reason` and `details` appear in the `ActivityTaskFailed`
 * event added to the workflow history.
 *
 * A task is considered open from the time that it is scheduled until it is closed.
 * Therefore a task is reported as open while a worker is processing it. A task is closed after
 * it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed
 * out.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const respondActivityTaskFailed: API.OperationMethod<
  RespondActivityTaskFailedInput,
  RespondActivityTaskFailedResponse,
  RespondActivityTaskFailedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121, __c15, 1) as any as S.Schema<RespondActivityTaskFailedInput>,
  output: __S(13, __c1, 5) as any as S.Schema<RespondActivityTaskFailedResponse>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RespondActivityTaskFailed",
}));

export type RespondDecisionTaskCompletedError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Used by deciders to tell the service that the DecisionTask identified
 * by the `taskToken` has successfully completed. The `decisions` argument
 * specifies the list of decisions made while processing the task.
 *
 * A `DecisionTaskCompleted` event is added to the workflow history. The
 * `executionContext` specified is attached to the event in the workflow execution
 * history.
 *
 * **Access Control**
 *
 * If an IAM policy grants permission to use `RespondDecisionTaskCompleted`, it
 * can express permissions for the list of decisions in the `decisions` parameter.
 * Each of the decisions has one or more parameters, much like a regular API call. To allow for
 * policies to be as readable as possible, you can express permissions on decisions as if they
 * were actual API calls, including applying conditions to some parameters. For more information,
 * see Using
 * IAM to Manage Access to Amazon SWF Workflows in the
 * *Amazon SWF Developer Guide*.
 */
export const respondDecisionTaskCompleted: API.OperationMethod<
  RespondDecisionTaskCompletedInput,
  RespondDecisionTaskCompletedResponse,
  RespondDecisionTaskCompletedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<RespondDecisionTaskCompletedInput>,
  output: __S(13, __c1, 5) as any as S.Schema<RespondDecisionTaskCompletedResponse>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RespondDecisionTaskCompleted",
}));

export type SignalWorkflowExecutionError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Records a `WorkflowExecutionSignaled` event in the workflow execution
 * history and creates a decision task for the workflow execution identified by the given domain,
 * workflowId and runId. The event is recorded with the specified user defined signalName and
 * input (if provided).
 *
 * If a runId isn't specified, then the `WorkflowExecutionSignaled` event is
 * recorded in the history of the current open workflow with the matching workflowId in the
 * domain.
 *
 * If the specified workflow execution isn't open, this method fails with
 * `UnknownResource`.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const signalWorkflowExecution: API.OperationMethod<
  SignalWorkflowExecutionInput,
  SignalWorkflowExecutionResponse,
  SignalWorkflowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(138, __c17, 2) as any as S.Schema<SignalWorkflowExecutionInput>,
  output: __S(13, __c1, 5) as any as S.Schema<SignalWorkflowExecutionResponse>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SignalWorkflowExecution",
}));

export type StartWorkflowExecutionError =
  | DefaultUndefinedFault
  | LimitExceededFault
  | OperationNotPermittedFault
  | TypeDeprecatedFault
  | UnknownResourceFault
  | WorkflowExecutionAlreadyStartedFault
  | CommonErrors;
/**
 * Starts an execution of the workflow type in the specified domain using the provided
 * `workflowId` and input data.
 *
 * This action returns the newly started workflow execution.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `tagList.member.0`: The key is `swf:tagList.member.0`.
 *
 * - `tagList.member.1`: The key is `swf:tagList.member.1`.
 *
 * - `tagList.member.2`: The key is `swf:tagList.member.2`.
 *
 * - `tagList.member.3`: The key is `swf:tagList.member.3`.
 *
 * - `tagList.member.4`: The key is `swf:tagList.member.4`.
 *
 * - `taskList`: String constraint. The key is
 * `swf:taskList.name`.
 *
 * - `workflowType.name`: String constraint. The key is
 * `swf:workflowType.name`.
 *
 * - `workflowType.version`: String constraint. The key is
 * `swf:workflowType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const startWorkflowExecution: API.OperationMethod<
  StartWorkflowExecutionInput,
  Run,
  StartWorkflowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139, __c17, 3) as any as S.Schema<StartWorkflowExecutionInput>,
  output: __S(140, __c17, 4) as any as S.Schema<Run>,
  errors: [
    DefaultUndefinedFault,
    LimitExceededFault,
    OperationNotPermittedFault,
    TypeDeprecatedFault,
    UnknownResourceFault,
    WorkflowExecutionAlreadyStartedFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartWorkflowExecution",
}));

export type TagResourceError =
  | LimitExceededFault
  | OperationNotPermittedFault
  | TooManyTagsFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Add a tag to a Amazon SWF domain.
 *
 * Amazon SWF supports a maximum of 50 tags per resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(141, __c17, 5) as any as S.Schema<TagResourceInput>,
  output: __S(142, __c17, 6) as any as S.Schema<TagResourceResponse>,
  errors: [LimitExceededFault, OperationNotPermittedFault, TooManyTagsFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TerminateWorkflowExecutionError =
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Records a `WorkflowExecutionTerminated` event and forces closure of the
 * workflow execution identified by the given domain, runId, and workflowId. The child policy,
 * registered with the workflow type or specified when starting this execution, is applied to any
 * open child workflow executions of this workflow execution.
 *
 * If the identified workflow execution was in progress, it is terminated
 * immediately.
 *
 * If a runId isn't specified, then the `WorkflowExecutionTerminated` event
 * is recorded in the history of the current open workflow with the matching workflowId in the
 * domain.
 *
 * You should consider using RequestCancelWorkflowExecution action
 * instead because it allows the workflow to gracefully close while TerminateWorkflowExecution doesn't.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const terminateWorkflowExecution: API.OperationMethod<
  TerminateWorkflowExecutionInput,
  TerminateWorkflowExecutionResponse,
  TerminateWorkflowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143, __c17, 7) as any as S.Schema<TerminateWorkflowExecutionInput>,
  output: __S(13, __c1, 5) as any as S.Schema<TerminateWorkflowExecutionResponse>,
  errors: [OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateWorkflowExecution",
}));

export type UndeprecateActivityTypeError =
  | OperationNotPermittedFault
  | TypeAlreadyExistsFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Undeprecates a previously deprecated *activity type*. After an activity type has
 * been undeprecated, you can create new tasks of that activity type.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `activityType.name`: String constraint. The key is
 * `swf:activityType.name`.
 *
 * - `activityType.version`: String constraint. The key is
 * `swf:activityType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const undeprecateActivityType: API.OperationMethod<
  UndeprecateActivityTypeInput,
  UndeprecateActivityTypeResponse,
  UndeprecateActivityTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(144, __c18, 0) as any as S.Schema<UndeprecateActivityTypeInput>,
  output: __S(13, __c1, 5) as any as S.Schema<UndeprecateActivityTypeResponse>,
  errors: [OperationNotPermittedFault, TypeAlreadyExistsFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UndeprecateActivityType",
}));

export type UndeprecateDomainError =
  | DomainAlreadyExistsFault
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used
 * to create new workflow executions or register new types.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const undeprecateDomain: API.OperationMethod<
  UndeprecateDomainInput,
  UndeprecateDomainResponse,
  UndeprecateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<UndeprecateDomainInput>,
  output: __S(13, __c1, 5) as any as S.Schema<UndeprecateDomainResponse>,
  errors: [DomainAlreadyExistsFault, OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UndeprecateDomain",
}));

export type UndeprecateWorkflowTypeError =
  | OperationNotPermittedFault
  | TypeAlreadyExistsFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Undeprecates a previously deprecated *workflow type*. After a workflow type has
 * been undeprecated, you can create new executions of that type.
 *
 * This operation is eventually consistent. The results are best effort and may not
 * exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as
 * follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to
 * only specified domains.
 *
 * - Use an `Action` element to allow or deny permission to call this
 * action.
 *
 * - Constrain the following parameters by using a `Condition` element with
 * the appropriate keys.
 *
 * - `workflowType.name`: String constraint. The key is
 * `swf:workflowType.name`.
 *
 * - `workflowType.version`: String constraint. The key is
 * `swf:workflowType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the
 * parameter values fall outside the specified constraints, the action fails. The associated
 * event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`.
 * For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF
 * Workflows in the *Amazon SWF Developer Guide*.
 */
export const undeprecateWorkflowType: API.OperationMethod<
  UndeprecateWorkflowTypeInput,
  UndeprecateWorkflowTypeResponse,
  UndeprecateWorkflowTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(146, __c18, 2) as any as S.Schema<UndeprecateWorkflowTypeInput>,
  output: __S(13, __c1, 5) as any as S.Schema<UndeprecateWorkflowTypeResponse>,
  errors: [OperationNotPermittedFault, TypeAlreadyExistsFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UndeprecateWorkflowType",
}));

export type UntagResourceError =
  | LimitExceededFault
  | OperationNotPermittedFault
  | UnknownResourceFault
  | CommonErrors;
/**
 * Remove a tag from a Amazon SWF domain.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<UntagResourceInput>,
  output: __S(142, __c17, 6) as any as S.Schema<UntagResourceResponse>,
  errors: [LimitExceededFault, OperationNotPermittedFault, UnknownResourceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          oldestDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          latestDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ExecutionTimeFilter" });
    case 1:
      return S.suspend(() => S.Struct({ workflowId: S.String })).annotate({
        identifier: "WorkflowExecutionFilter",
      });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, version: S.optional(S.String) })).annotate({
        identifier: "WorkflowTypeFilter",
      });
    case 3:
      return S.suspend(() => S.Struct({ tag: S.String })).annotate({
        identifier: "TagFilter",
      });
    case 4:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "CloseStatusFilter",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          startTimeFilter: S.optional(__S(0, __c0, 0)),
          closeTimeFilter: S.optional(__S(0, __c0, 0)),
          executionFilter: S.optional(__S(1, __c0, 1)),
          typeFilter: S.optional(__S(2, __c0, 2)),
          tagFilter: S.optional(__S(3, __c0, 3)),
          closeStatusFilter: S.optional(__S(4, __c0, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CountClosedWorkflowExecutionsInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ count: S.Number, truncated: S.optional(S.Boolean) }).pipe(ns),
      ).annotate({ identifier: "WorkflowExecutionCount" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          startTimeFilter: __S(0, __c0, 0),
          typeFilter: S.optional(__S(2, __c0, 2)),
          tagFilter: S.optional(__S(3, __c0, 3)),
          executionFilter: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CountOpenWorkflowExecutionsInput",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "TaskList",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ domain: S.String, taskList: __S(8, __c1, 0) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CountPendingActivityTasksInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ domain: S.String, taskList: __S(8, __c1, 0) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CountPendingDecisionTasksInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, version: S.String })).annotate({
        identifier: "ActivityType",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ domain: S.String, activityType: __S(11, __c1, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteActivityTypeInput" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteActivityTypeResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ domain: S.String, workflowType: __S(11, __c1, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWorkflowTypeInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ domain: S.String, activityType: __S(11, __c1, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeprecateActivityTypeInput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeprecateDomainInput" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeprecateDomainResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ domain: S.String, workflowType: __S(11, __c1, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeprecateWorkflowTypeInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ domain: S.String, activityType: __S(11, __c1, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeActivityTypeInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          activityType: __S(11, __c1, 3),
          status: S.String,
          description: S.optional(S.String),
          creationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          deprecationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ActivityTypeInfo" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          defaultTaskStartToCloseTimeout: S.optional(S.String),
          defaultTaskHeartbeatTimeout: S.optional(S.String),
          defaultTaskList: S.optional(__S(8, __c1, 0)),
          defaultTaskPriority: S.optional(S.String),
          defaultTaskScheduleToStartTimeout: S.optional(S.String),
          defaultTaskScheduleToCloseTimeout: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ActivityTypeConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ typeInfo: __S(20, __c2, 4), configuration: __S(21, __c2, 5) }).pipe(ns),
      ).annotate({ identifier: "ActivityTypeDetail" });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeDomainInput" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          status: S.String,
          description: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DomainInfo" });
    case 1:
      return S.suspend(() =>
        S.Struct({ workflowExecutionRetentionPeriodInDays: S.String }),
      ).annotate({ identifier: "DomainConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({ domainInfo: __S(24, __c3, 0), configuration: __S(25, __c3, 1) }).pipe(ns),
      ).annotate({ identifier: "DomainDetail" });
    case 3:
      return S.suspend(() => S.Struct({ workflowId: S.String, runId: S.String })).annotate({
        identifier: "WorkflowExecution",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ domain: S.String, execution: __S(27, __c3, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeWorkflowExecutionInput",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          execution: __S(27, __c3, 3),
          workflowType: __S(11, __c1, 3),
          startTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          closeTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          executionStatus: S.String,
          closeStatus: S.optional(S.String),
          parent: S.optional(__S(27, __c3, 3)),
          tagList: S.optional(__S(29, __c3, 5)),
          cancelRequested: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "WorkflowExecutionInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskStartToCloseTimeout: S.String,
          executionStartToCloseTimeout: S.String,
          taskList: __S(8, __c1, 0),
          taskPriority: S.optional(S.String),
          childPolicy: S.String,
          lambdaRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkflowExecutionConfiguration",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          openActivityTasks: S.Number,
          openDecisionTasks: S.Number,
          openTimers: S.Number,
          openChildWorkflowExecutions: S.Number,
          openLambdaFunctions: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "WorkflowExecutionOpenCounts",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          executionInfo: __S(30, __c3, 6),
          executionConfiguration: __S(31, __c3, 7),
          openCounts: __S(32, __c4, 0),
          latestActivityTaskTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          latestExecutionContext: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "WorkflowExecutionDetail" });
    case 2:
      return S.suspend(() =>
        S.Struct({ domain: S.String, workflowType: __S(11, __c1, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeWorkflowTypeInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowType: __S(11, __c1, 3),
          status: S.String,
          description: S.optional(S.String),
          creationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          deprecationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "WorkflowTypeInfo" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          defaultTaskStartToCloseTimeout: S.optional(S.String),
          defaultExecutionStartToCloseTimeout: S.optional(S.String),
          defaultTaskList: S.optional(__S(8, __c1, 0)),
          defaultTaskPriority: S.optional(S.String),
          defaultChildPolicy: S.optional(S.String),
          defaultLambdaRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkflowTypeConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ typeInfo: __S(35, __c4, 3), configuration: __S(36, __c4, 4) }).pipe(ns),
      ).annotate({ identifier: "WorkflowTypeDetail" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          execution: __S(27, __c3, 3),
          nextPageToken: S.optional(S.String),
          maximumPageSize: S.optional(S.Number),
          reverseOrder: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetWorkflowExecutionHistoryInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          input: S.optional(S.String),
          executionStartToCloseTimeout: S.optional(S.String),
          taskStartToCloseTimeout: S.optional(S.String),
          childPolicy: S.String,
          taskList: __S(8, __c1, 0),
          taskPriority: S.optional(S.String),
          workflowType: __S(11, __c1, 3),
          tagList: S.optional(__S(29, __c3, 5)),
          continuedExecutionRunId: S.optional(S.String),
          parentWorkflowExecution: S.optional(__S(27, __c3, 3)),
          parentInitiatedEventId: S.optional(S.Number),
          lambdaRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkflowExecutionStartedEventAttributes",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ result: S.optional(S.String), decisionTaskCompletedEventId: S.Number }),
      ).annotate({
        identifier: "WorkflowExecutionCompletedEventAttributes",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cause: S.String,
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "CompleteWorkflowExecutionFailedEventAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          reason: S.optional(S.String),
          details: S.optional(S.String),
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "WorkflowExecutionFailedEventAttributes",
      });
    case 3:
      return S.suspend(() => S.Struct({ timeoutType: S.String, childPolicy: S.String })).annotate({
        identifier: "WorkflowExecutionTimedOutEventAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ details: S.optional(S.String), decisionTaskCompletedEventId: S.Number }),
      ).annotate({
        identifier: "WorkflowExecutionCanceledEventAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          input: S.optional(S.String),
          decisionTaskCompletedEventId: S.Number,
          newExecutionRunId: S.String,
          executionStartToCloseTimeout: S.optional(S.String),
          taskList: __S(8, __c1, 0),
          taskPriority: S.optional(S.String),
          taskStartToCloseTimeout: S.optional(S.String),
          childPolicy: S.String,
          tagList: S.optional(__S(29, __c3, 5)),
          workflowType: __S(11, __c1, 3),
          lambdaRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkflowExecutionContinuedAsNewEventAttributes",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          cause: S.String,
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ContinueAsNewWorkflowExecutionFailedEventAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          reason: S.optional(S.String),
          details: S.optional(S.String),
          childPolicy: S.String,
          cause: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkflowExecutionTerminatedEventAttributes",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          externalWorkflowExecution: S.optional(__S(27, __c3, 3)),
          externalInitiatedEventId: S.optional(S.Number),
          cause: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkflowExecutionCancelRequestedEventAttributes",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskList: __S(8, __c1, 0),
          taskPriority: S.optional(S.String),
          startToCloseTimeout: S.optional(S.String),
          scheduleToStartTimeout: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DecisionTaskScheduledEventAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ identity: S.optional(S.String), scheduledEventId: S.Number }),
      ).annotate({
        identifier: "DecisionTaskStartedEventAttributes",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          executionContext: S.optional(S.String),
          scheduledEventId: S.Number,
          startedEventId: S.Number,
          taskList: S.optional(__S(8, __c1, 0)),
          taskListScheduleToStartTimeout: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DecisionTaskCompletedEventAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          timeoutType: S.String,
          scheduledEventId: S.Number,
          startedEventId: S.Number,
        }),
      ).annotate({
        identifier: "DecisionTaskTimedOutEventAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          activityType: __S(11, __c1, 3),
          activityId: S.String,
          input: S.optional(S.String),
          control: S.optional(S.String),
          scheduleToStartTimeout: S.optional(S.String),
          scheduleToCloseTimeout: S.optional(S.String),
          startToCloseTimeout: S.optional(S.String),
          taskList: __S(8, __c1, 0),
          taskPriority: S.optional(S.String),
          decisionTaskCompletedEventId: S.Number,
          heartbeatTimeout: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ActivityTaskScheduledEventAttributes",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          result: S.optional(S.String),
          scheduledEventId: S.Number,
          startedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ActivityTaskCompletedEventAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          reason: S.optional(S.String),
          details: S.optional(S.String),
          scheduledEventId: S.Number,
          startedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ActivityTaskFailedEventAttributes",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          timeoutType: S.String,
          scheduledEventId: S.Number,
          startedEventId: S.Number,
          details: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ActivityTaskTimedOutEventAttributes",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          details: S.optional(S.String),
          scheduledEventId: S.Number,
          startedEventId: S.Number,
          latestCancelRequestedEventId: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ActivityTaskCanceledEventAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ decisionTaskCompletedEventId: S.Number, activityId: S.String }),
      ).annotate({
        identifier: "ActivityTaskCancelRequestedEventAttributes",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          signalName: S.String,
          input: S.optional(S.String),
          externalWorkflowExecution: S.optional(__S(27, __c3, 3)),
          externalInitiatedEventId: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "WorkflowExecutionSignaledEventAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          markerName: S.String,
          details: S.optional(S.String),
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "MarkerRecordedEventAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          markerName: S.String,
          cause: S.String,
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "RecordMarkerFailedEventAttributes",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          timerId: S.String,
          control: S.optional(S.String),
          startToFireTimeout: S.String,
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "TimerStartedEventAttributes",
      });
    case 7:
      return S.suspend(() => S.Struct({ timerId: S.String, startedEventId: S.Number })).annotate({
        identifier: "TimerFiredEventAttributes",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          timerId: S.String,
          startedEventId: S.Number,
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "TimerCanceledEventAttributes",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String,
          workflowType: __S(11, __c1, 3),
          control: S.optional(S.String),
          input: S.optional(S.String),
          executionStartToCloseTimeout: S.optional(S.String),
          taskList: __S(8, __c1, 0),
          taskPriority: S.optional(S.String),
          decisionTaskCompletedEventId: S.Number,
          childPolicy: S.String,
          taskStartToCloseTimeout: S.optional(S.String),
          tagList: S.optional(__S(29, __c3, 5)),
          lambdaRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartChildWorkflowExecutionInitiatedEventAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workflowExecution: __S(27, __c3, 3),
          workflowType: __S(11, __c1, 3),
          initiatedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ChildWorkflowExecutionStartedEventAttributes",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowExecution: __S(27, __c3, 3),
          workflowType: __S(11, __c1, 3),
          result: S.optional(S.String),
          initiatedEventId: S.Number,
          startedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ChildWorkflowExecutionCompletedEventAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workflowExecution: __S(27, __c3, 3),
          workflowType: __S(11, __c1, 3),
          reason: S.optional(S.String),
          details: S.optional(S.String),
          initiatedEventId: S.Number,
          startedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ChildWorkflowExecutionFailedEventAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowExecution: __S(27, __c3, 3),
          workflowType: __S(11, __c1, 3),
          timeoutType: S.String,
          initiatedEventId: S.Number,
          startedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ChildWorkflowExecutionTimedOutEventAttributes",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workflowExecution: __S(27, __c3, 3),
          workflowType: __S(11, __c1, 3),
          details: S.optional(S.String),
          initiatedEventId: S.Number,
          startedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ChildWorkflowExecutionCanceledEventAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowExecution: __S(27, __c3, 3),
          workflowType: __S(11, __c1, 3),
          initiatedEventId: S.Number,
          startedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ChildWorkflowExecutionTerminatedEventAttributes",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String,
          runId: S.optional(S.String),
          signalName: S.String,
          input: S.optional(S.String),
          decisionTaskCompletedEventId: S.Number,
          control: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SignalExternalWorkflowExecutionInitiatedEventAttributes",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ workflowExecution: __S(27, __c3, 3), initiatedEventId: S.Number }),
      ).annotate({
        identifier: "ExternalWorkflowExecutionSignaledEventAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String,
          runId: S.optional(S.String),
          cause: S.String,
          initiatedEventId: S.Number,
          decisionTaskCompletedEventId: S.Number,
          control: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SignalExternalWorkflowExecutionFailedEventAttributes",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String,
          runId: S.optional(S.String),
          decisionTaskCompletedEventId: S.Number,
          control: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RequestCancelExternalWorkflowExecutionInitiatedEventAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String,
          runId: S.optional(S.String),
          cause: S.String,
          initiatedEventId: S.Number,
          decisionTaskCompletedEventId: S.Number,
          control: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RequestCancelExternalWorkflowExecutionFailedEventAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          activityType: __S(11, __c1, 3),
          activityId: S.String,
          cause: S.String,
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ScheduleActivityTaskFailedEventAttributes",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          activityId: S.String,
          cause: S.String,
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "RequestCancelActivityTaskFailedEventAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          timerId: S.String,
          cause: S.String,
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "StartTimerFailedEventAttributes",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workflowType: __S(11, __c1, 3),
          cause: S.String,
          workflowId: S.String,
          initiatedEventId: S.Number,
          decisionTaskCompletedEventId: S.Number,
          control: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartChildWorkflowExecutionFailedEventAttributes",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          control: S.optional(S.String),
          input: S.optional(S.String),
          startToCloseTimeout: S.optional(S.String),
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "LambdaFunctionScheduledEventAttributes",
      });
    case 2:
      return S.suspend(() => S.Struct({ scheduledEventId: S.Number })).annotate({
        identifier: "LambdaFunctionStartedEventAttributes",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          scheduledEventId: S.Number,
          startedEventId: S.Number,
          result: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LambdaFunctionCompletedEventAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          scheduledEventId: S.Number,
          startedEventId: S.Number,
          reason: S.optional(S.String),
          details: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LambdaFunctionFailedEventAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scheduledEventId: S.Number,
          startedEventId: S.Number,
          timeoutType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LambdaFunctionTimedOutEventAttributes",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          cause: S.String,
          decisionTaskCompletedEventId: S.Number,
        }),
      ).annotate({
        identifier: "ScheduleLambdaFunctionFailedEventAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          scheduledEventId: S.optional(S.Number),
          cause: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartLambdaFunctionFailedEventAttributes",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          eventTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          eventType: S.String,
          eventId: S.Number,
          workflowExecutionStartedEventAttributes: S.optional(__S(39, __c4, 7)),
          workflowExecutionCompletedEventAttributes: S.optional(__S(40, __c5, 0)),
          completeWorkflowExecutionFailedEventAttributes: S.optional(__S(41, __c5, 1)),
          workflowExecutionFailedEventAttributes: S.optional(__S(42, __c5, 2)),
          failWorkflowExecutionFailedEventAttributes: S.optional(__S(41, __c5, 1)),
          workflowExecutionTimedOutEventAttributes: S.optional(__S(43, __c5, 3)),
          workflowExecutionCanceledEventAttributes: S.optional(__S(44, __c5, 4)),
          cancelWorkflowExecutionFailedEventAttributes: S.optional(__S(41, __c5, 1)),
          workflowExecutionContinuedAsNewEventAttributes: S.optional(__S(45, __c5, 5)),
          continueAsNewWorkflowExecutionFailedEventAttributes: S.optional(__S(46, __c5, 6)),
          workflowExecutionTerminatedEventAttributes: S.optional(__S(47, __c5, 7)),
          workflowExecutionCancelRequestedEventAttributes: S.optional(__S(48, __c6, 0)),
          decisionTaskScheduledEventAttributes: S.optional(__S(49, __c6, 1)),
          decisionTaskStartedEventAttributes: S.optional(__S(50, __c6, 2)),
          decisionTaskCompletedEventAttributes: S.optional(__S(51, __c6, 3)),
          decisionTaskTimedOutEventAttributes: S.optional(__S(52, __c6, 4)),
          activityTaskScheduledEventAttributes: S.optional(__S(53, __c6, 5)),
          activityTaskStartedEventAttributes: S.optional(__S(50, __c6, 2)),
          activityTaskCompletedEventAttributes: S.optional(__S(54, __c6, 6)),
          activityTaskFailedEventAttributes: S.optional(__S(55, __c6, 7)),
          activityTaskTimedOutEventAttributes: S.optional(__S(56, __c7, 0)),
          activityTaskCanceledEventAttributes: S.optional(__S(57, __c7, 1)),
          activityTaskCancelRequestedEventAttributes: S.optional(__S(58, __c7, 2)),
          workflowExecutionSignaledEventAttributes: S.optional(__S(59, __c7, 3)),
          markerRecordedEventAttributes: S.optional(__S(60, __c7, 4)),
          recordMarkerFailedEventAttributes: S.optional(__S(61, __c7, 5)),
          timerStartedEventAttributes: S.optional(__S(62, __c7, 6)),
          timerFiredEventAttributes: S.optional(__S(63, __c7, 7)),
          timerCanceledEventAttributes: S.optional(__S(64, __c8, 0)),
          startChildWorkflowExecutionInitiatedEventAttributes: S.optional(__S(65, __c8, 1)),
          childWorkflowExecutionStartedEventAttributes: S.optional(__S(66, __c8, 2)),
          childWorkflowExecutionCompletedEventAttributes: S.optional(__S(67, __c8, 3)),
          childWorkflowExecutionFailedEventAttributes: S.optional(__S(68, __c8, 4)),
          childWorkflowExecutionTimedOutEventAttributes: S.optional(__S(69, __c8, 5)),
          childWorkflowExecutionCanceledEventAttributes: S.optional(__S(70, __c8, 6)),
          childWorkflowExecutionTerminatedEventAttributes: S.optional(__S(71, __c8, 7)),
          signalExternalWorkflowExecutionInitiatedEventAttributes: S.optional(__S(72, __c9, 0)),
          externalWorkflowExecutionSignaledEventAttributes: S.optional(__S(73, __c9, 1)),
          signalExternalWorkflowExecutionFailedEventAttributes: S.optional(__S(74, __c9, 2)),
          externalWorkflowExecutionCancelRequestedEventAttributes: S.optional(__S(73, __c9, 1)),
          requestCancelExternalWorkflowExecutionInitiatedEventAttributes: S.optional(
            __S(75, __c9, 3),
          ),
          requestCancelExternalWorkflowExecutionFailedEventAttributes: S.optional(__S(76, __c9, 4)),
          scheduleActivityTaskFailedEventAttributes: S.optional(__S(77, __c9, 5)),
          requestCancelActivityTaskFailedEventAttributes: S.optional(__S(78, __c9, 6)),
          startTimerFailedEventAttributes: S.optional(__S(79, __c9, 7)),
          cancelTimerFailedEventAttributes: S.optional(__S(79, __c9, 7)),
          startChildWorkflowExecutionFailedEventAttributes: S.optional(__S(80, __c10, 0)),
          lambdaFunctionScheduledEventAttributes: S.optional(__S(81, __c10, 1)),
          lambdaFunctionStartedEventAttributes: S.optional(__S(82, __c10, 2)),
          lambdaFunctionCompletedEventAttributes: S.optional(__S(83, __c10, 3)),
          lambdaFunctionFailedEventAttributes: S.optional(__S(84, __c10, 4)),
          lambdaFunctionTimedOutEventAttributes: S.optional(__S(85, __c10, 5)),
          scheduleLambdaFunctionFailedEventAttributes: S.optional(__S(86, __c10, 6)),
          startLambdaFunctionFailedEventAttributes: S.optional(__S(87, __c10, 7)),
        }),
      ).annotate({ identifier: "HistoryEvent" });
    case 1:
      return S.Array(__S(88, __c11, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ events: __S(89, __c11, 1), nextPageToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "History" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          name: S.optional(S.String),
          registrationStatus: S.String,
          nextPageToken: S.optional(S.String),
          maximumPageSize: S.optional(S.Number),
          reverseOrder: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListActivityTypesInput" });
    case 4:
      return S.Array(__S(20, __c2, 4));
    case 5:
      return S.suspend(() =>
        S.Struct({ typeInfos: __S(92, __c11, 4), nextPageToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ActivityTypeInfos" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          startTimeFilter: S.optional(__S(0, __c0, 0)),
          closeTimeFilter: S.optional(__S(0, __c0, 0)),
          executionFilter: S.optional(__S(1, __c0, 1)),
          closeStatusFilter: S.optional(__S(4, __c0, 4)),
          typeFilter: S.optional(__S(2, __c0, 2)),
          tagFilter: S.optional(__S(3, __c0, 3)),
          nextPageToken: S.optional(S.String),
          maximumPageSize: S.optional(S.Number),
          reverseOrder: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListClosedWorkflowExecutionsInput",
      });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          executionInfos: __S(95, __c11, 7),
          nextPageToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "WorkflowExecutionInfos" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextPageToken: S.optional(S.String),
          registrationStatus: S.String,
          maximumPageSize: S.optional(S.Number),
          reverseOrder: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDomainsInput" });
    case 2:
      return S.Array(__S(24, __c3, 0));
    case 3:
      return S.suspend(() =>
        S.Struct({ domainInfos: __S(98, __c12, 2), nextPageToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DomainInfos" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          startTimeFilter: __S(0, __c0, 0),
          typeFilter: S.optional(__S(2, __c0, 2)),
          tagFilter: S.optional(__S(3, __c0, 3)),
          nextPageToken: S.optional(S.String),
          maximumPageSize: S.optional(S.Number),
          reverseOrder: S.optional(S.Boolean),
          executionFilter: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListOpenWorkflowExecutionsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 6:
      return S.suspend(() => S.Struct({ key: S.String, value: S.optional(S.String) })).annotate({
        identifier: "ResourceTag",
      });
    case 7:
      return S.Array(__S(102, __c12, 6));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(103, __c12, 7)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          name: S.optional(S.String),
          registrationStatus: S.String,
          nextPageToken: S.optional(S.String),
          maximumPageSize: S.optional(S.Number),
          reverseOrder: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWorkflowTypesInput" });
    case 2:
      return S.Array(__S(35, __c4, 3));
    case 3:
      return S.suspend(() =>
        S.Struct({ typeInfos: __S(106, __c13, 2), nextPageToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "WorkflowTypeInfos" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          taskList: __S(8, __c1, 0),
          identity: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PollForActivityTaskInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          taskToken: S.String,
          activityId: S.String,
          startedEventId: S.Number,
          workflowExecution: __S(27, __c3, 3),
          activityType: __S(11, __c1, 3),
          input: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ActivityTask" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          taskList: __S(8, __c1, 0),
          identity: S.optional(S.String),
          nextPageToken: S.optional(S.String),
          maximumPageSize: S.optional(S.Number),
          reverseOrder: S.optional(S.Boolean),
          startAtPreviousStartedEvent: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PollForDecisionTaskInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskToken: S.String,
          startedEventId: S.Number,
          workflowExecution: __S(27, __c3, 3),
          workflowType: __S(11, __c1, 3),
          events: __S(89, __c11, 1),
          nextPageToken: S.optional(S.String),
          previousStartedEventId: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "DecisionTask" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ taskToken: S.String, details: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RecordActivityTaskHeartbeatInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ cancelRequested: S.Boolean }).pipe(ns)).annotate({
        identifier: "ActivityTaskStatus",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          name: S.String,
          version: S.String,
          description: S.optional(S.String),
          defaultTaskStartToCloseTimeout: S.optional(S.String),
          defaultTaskHeartbeatTimeout: S.optional(S.String),
          defaultTaskList: S.optional(__S(8, __c1, 0)),
          defaultTaskPriority: S.optional(S.String),
          defaultTaskScheduleToStartTimeout: S.optional(S.String),
          defaultTaskScheduleToCloseTimeout: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RegisterActivityTypeInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          workflowExecutionRetentionPeriodInDays: S.String,
          tags: S.optional(__S(103, __c12, 7)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RegisterDomainInput" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RegisterDomainResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          name: S.String,
          version: S.String,
          description: S.optional(S.String),
          defaultTaskStartToCloseTimeout: S.optional(S.String),
          defaultExecutionStartToCloseTimeout: S.optional(S.String),
          defaultTaskList: S.optional(__S(8, __c1, 0)),
          defaultTaskPriority: S.optional(S.String),
          defaultChildPolicy: S.optional(S.String),
          defaultLambdaRole: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RegisterWorkflowTypeInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ domain: S.String, workflowId: S.String, runId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RequestCancelWorkflowExecutionInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ taskToken: S.String, details: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RespondActivityTaskCanceledInput",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ taskToken: S.String, result: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RespondActivityTaskCompletedInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskToken: S.String,
          reason: S.optional(S.String),
          details: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RespondActivityTaskFailedInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          activityType: __S(11, __c1, 3),
          activityId: S.String,
          control: S.optional(S.String),
          input: S.optional(S.String),
          scheduleToCloseTimeout: S.optional(S.String),
          taskList: S.optional(__S(8, __c1, 0)),
          taskPriority: S.optional(S.String),
          scheduleToStartTimeout: S.optional(S.String),
          startToCloseTimeout: S.optional(S.String),
          heartbeatTimeout: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ScheduleActivityTaskDecisionAttributes",
      });
    case 3:
      return S.suspend(() => S.Struct({ activityId: S.String })).annotate({
        identifier: "RequestCancelActivityTaskDecisionAttributes",
      });
    case 4:
      return S.suspend(() => S.Struct({ result: S.optional(S.String) })).annotate({
        identifier: "CompleteWorkflowExecutionDecisionAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ reason: S.optional(S.String), details: S.optional(S.String) }),
      ).annotate({
        identifier: "FailWorkflowExecutionDecisionAttributes",
      });
    case 6:
      return S.suspend(() => S.Struct({ details: S.optional(S.String) })).annotate({
        identifier: "CancelWorkflowExecutionDecisionAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          input: S.optional(S.String),
          executionStartToCloseTimeout: S.optional(S.String),
          taskList: S.optional(__S(8, __c1, 0)),
          taskPriority: S.optional(S.String),
          taskStartToCloseTimeout: S.optional(S.String),
          childPolicy: S.optional(S.String),
          tagList: S.optional(__S(29, __c3, 5)),
          workflowTypeVersion: S.optional(S.String),
          lambdaRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ContinueAsNewWorkflowExecutionDecisionAttributes",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ markerName: S.String, details: S.optional(S.String) }),
      ).annotate({
        identifier: "RecordMarkerDecisionAttributes",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          timerId: S.String,
          control: S.optional(S.String),
          startToFireTimeout: S.String,
        }),
      ).annotate({
        identifier: "StartTimerDecisionAttributes",
      });
    case 2:
      return S.suspend(() => S.Struct({ timerId: S.String })).annotate({
        identifier: "CancelTimerDecisionAttributes",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String,
          runId: S.optional(S.String),
          signalName: S.String,
          input: S.optional(S.String),
          control: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SignalExternalWorkflowExecutionDecisionAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String,
          runId: S.optional(S.String),
          control: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RequestCancelExternalWorkflowExecutionDecisionAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowType: __S(11, __c1, 3),
          workflowId: S.String,
          control: S.optional(S.String),
          input: S.optional(S.String),
          executionStartToCloseTimeout: S.optional(S.String),
          taskList: S.optional(__S(8, __c1, 0)),
          taskPriority: S.optional(S.String),
          taskStartToCloseTimeout: S.optional(S.String),
          childPolicy: S.optional(S.String),
          tagList: S.optional(__S(29, __c3, 5)),
          lambdaRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartChildWorkflowExecutionDecisionAttributes",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          control: S.optional(S.String),
          input: S.optional(S.String),
          startToCloseTimeout: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ScheduleLambdaFunctionDecisionAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          decisionType: S.String,
          scheduleActivityTaskDecisionAttributes: S.optional(__S(122, __c15, 2)),
          requestCancelActivityTaskDecisionAttributes: S.optional(__S(123, __c15, 3)),
          completeWorkflowExecutionDecisionAttributes: S.optional(__S(124, __c15, 4)),
          failWorkflowExecutionDecisionAttributes: S.optional(__S(125, __c15, 5)),
          cancelWorkflowExecutionDecisionAttributes: S.optional(__S(126, __c15, 6)),
          continueAsNewWorkflowExecutionDecisionAttributes: S.optional(__S(127, __c15, 7)),
          recordMarkerDecisionAttributes: S.optional(__S(128, __c16, 0)),
          startTimerDecisionAttributes: S.optional(__S(129, __c16, 1)),
          cancelTimerDecisionAttributes: S.optional(__S(130, __c16, 2)),
          signalExternalWorkflowExecutionDecisionAttributes: S.optional(__S(131, __c16, 3)),
          requestCancelExternalWorkflowExecutionDecisionAttributes: S.optional(__S(132, __c16, 4)),
          startChildWorkflowExecutionDecisionAttributes: S.optional(__S(133, __c16, 5)),
          scheduleLambdaFunctionDecisionAttributes: S.optional(__S(134, __c16, 6)),
        }),
      ).annotate({ identifier: "Decision" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135, __c16, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskToken: S.String,
          decisions: S.optional(__S(136, __c17, 0)),
          executionContext: S.optional(S.String),
          taskList: S.optional(__S(8, __c1, 0)),
          taskListScheduleToStartTimeout: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RespondDecisionTaskCompletedInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          workflowId: S.String,
          runId: S.optional(S.String),
          signalName: S.String,
          input: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SignalWorkflowExecutionInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          workflowId: S.String,
          workflowType: __S(11, __c1, 3),
          taskList: S.optional(__S(8, __c1, 0)),
          taskPriority: S.optional(S.String),
          input: S.optional(S.String),
          executionStartToCloseTimeout: S.optional(S.String),
          tagList: S.optional(__S(29, __c3, 5)),
          taskStartToCloseTimeout: S.optional(S.String),
          childPolicy: S.optional(S.String),
          lambdaRole: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartWorkflowExecutionInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ runId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "Run",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: __S(103, __c12, 7) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domain: S.String,
          workflowId: S.String,
          runId: S.optional(S.String),
          reason: S.optional(S.String),
          details: S.optional(S.String),
          childPolicy: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "TerminateWorkflowExecutionInput",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ domain: S.String, activityType: __S(11, __c1, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UndeprecateActivityTypeInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UndeprecateDomainInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ domain: S.String, workflowType: __S(11, __c1, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UndeprecateWorkflowTypeInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: __S(29, __c3, 5) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
