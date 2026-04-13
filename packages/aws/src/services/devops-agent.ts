import * as HttpClient from "effect/unstable/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as S from "effect/Schema";
import * as stream from "effect/Stream";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import type { Region } from "../region.ts";
import { SensitiveString } from "../sensitive.ts";
const svc = T.AwsApiService({
  sdkId: "DevOps Agent",
  serviceShapeName: "DevOpsAgent",
});
const auth = T.AwsAuthSigv4({ name: "aidevops" });
const ver = T.ServiceVersion("2026-01-01");
const proto = T.AwsProtocolsRestJson1();
const rules = T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
      return err(
        "Invalid Configuration: FIPS and custom endpoint are not supported",
      );
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://aidevops-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://aidevops.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

//# Newtypes
export type AgentSpaceId = string;
export type ResourceId = string;
export type BacklogTaskTitle = string;
export type BacklogTaskDescription = string;
export type BackLogTimestamp = Date;
export type NextToken = string;
export type JournalTimestamp = Date;
export type TagKey = string;
export type TagValue = string;
export type MessageContent = string;
export type AgentSpaceName = string;
export type Description = string | redacted.Redacted<string>;
export type Locale = string;
export type KmsKeyArn = string;
export type RoleArn = string;
export type IdpClientId = string;
export type IdpClientSecret = string | redacted.Redacted<string>;
export type ServiceId = string;
export type EmailAddress = string | redacted.Redacted<string>;
export type AssociationId = string;
export type WebhookSecret = string | redacted.Redacted<string>;
export type ApiKeyValue = string | redacted.Redacted<string>;
export type PrivateConnectionName = string;
export type IpAddressOrDnsName = string;
export type VpcId = string;
export type SubnetId = string;
export type SecurityGroupId = string;
export type MaxIpv4AddressesPerEni = number;
export type PortRange = string;
export type CertificateString = string;
export type ResourceConfigurationArn = string;
export type ResourceGatewayArn = string;
export type ClientId = string | redacted.Redacted<string>;
export type ExchangeParameterValue = string | redacted.Redacted<string>;
export type ClientSecret = string | redacted.Redacted<string>;
export type ServiceNowInstanceUrl = string;
export type TokenValue = string | redacted.Redacted<string>;
export type Guid = string;
export type ServiceName = string;

//# Schemas
export interface AllowVendedLogDeliveryForResourceInput {
  resourceArnBeingAuthorized: string;
  deliverySourceArn: string;
  logType?: string;
}
export const AllowVendedLogDeliveryForResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      resourceArnBeingAuthorized: S.String,
      deliverySourceArn: S.String,
      logType: S.optional(S.String),
    }).pipe(
      T.all(
        T.Http({
          method: "POST",
          uri: "/allow-vended-log-delivery-for-resource",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "AllowVendedLogDeliveryForResourceInput",
  }) as any as S.Schema<AllowVendedLogDeliveryForResourceInput>;
export interface AllowVendedLogDeliveryForResourceOutput {
  message?: string;
}
export const AllowVendedLogDeliveryForResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ message: S.optional(S.String) }),
  ).annotate({
    identifier: "AllowVendedLogDeliveryForResourceOutput",
  }) as any as S.Schema<AllowVendedLogDeliveryForResourceOutput>;
export interface ReferenceInput {
  system: string;
  title?: string;
  referenceId: string;
  referenceUrl: string;
  associationId: string;
}
export const ReferenceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    system: S.String,
    title: S.optional(S.String),
    referenceId: S.String,
    referenceUrl: S.String,
    associationId: S.String,
  }),
).annotate({ identifier: "ReferenceInput" }) as any as S.Schema<ReferenceInput>;
export type TaskType = "INVESTIGATION" | "EVALUATION" | (string & {});
export const TaskType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type Priority =
  | "CRITICAL"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "MINIMAL"
  | (string & {});
export const Priority = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface CreateBacklogTaskRequest {
  agentSpaceId: string;
  reference?: ReferenceInput;
  taskType: TaskType;
  title: string;
  description?: string;
  priority: Priority;
  clientToken?: string;
}
export const CreateBacklogTaskRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      reference: S.optional(ReferenceInput),
      taskType: TaskType,
      title: S.String,
      description: S.optional(S.String),
      priority: Priority,
      clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    }).pipe(
      T.all(
        T.Http({
          method: "POST",
          uri: "/backlog/agent-space/{agentSpaceId}/tasks",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "CreateBacklogTaskRequest",
}) as any as S.Schema<CreateBacklogTaskRequest>;
export interface ReferenceOutput {
  system: string;
  title?: string;
  referenceId: string;
  referenceUrl: string;
  associationId: string;
}
export const ReferenceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    system: S.String,
    title: S.optional(S.String),
    referenceId: S.String,
    referenceUrl: S.String,
    associationId: S.String,
  }),
).annotate({
  identifier: "ReferenceOutput",
}) as any as S.Schema<ReferenceOutput>;
export type TaskStatus =
  | "PENDING_TRIAGE"
  | "LINKED"
  | "PENDING_START"
  | "IN_PROGRESS"
  | "PENDING_CUSTOMER_APPROVAL"
  | "COMPLETED"
  | "FAILED"
  | "TIMED_OUT"
  | "CANCELED"
  | (string & {});
export const TaskStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface Task {
  agentSpaceId: string;
  taskId: string;
  executionId?: string;
  title: string;
  description?: string;
  reference?: ReferenceOutput;
  taskType: TaskType;
  priority: Priority;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  supportMetadata?: any;
  metadata?: any;
  primaryTaskId?: string;
  statusReason?: string;
  hasLinkedTasks?: boolean;
}
export const Task = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    taskId: S.String,
    executionId: S.optional(S.String),
    title: S.String,
    description: S.optional(S.String),
    reference: S.optional(ReferenceOutput),
    taskType: TaskType,
    priority: Priority,
    status: TaskStatus,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    version: S.Number,
    supportMetadata: S.optional(S.Any),
    metadata: S.optional(S.Any),
    primaryTaskId: S.optional(S.String),
    statusReason: S.optional(S.String),
    hasLinkedTasks: S.optional(S.Boolean),
  }),
).annotate({ identifier: "Task" }) as any as S.Schema<Task>;
export interface CreateBacklogTaskResponse {
  task: Task;
}
export const CreateBacklogTaskResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ task: Task }),
).annotate({
  identifier: "CreateBacklogTaskResponse",
}) as any as S.Schema<CreateBacklogTaskResponse>;
export interface ValidationExceptionField {
  path: string;
  message: string;
}
export const ValidationExceptionField = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ path: S.String, message: S.String }),
).annotate({
  identifier: "ValidationExceptionField",
}) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
export const ValidationExceptionFieldList = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  ValidationExceptionField,
);
export type UserType = "IAM" | "IDC" | "IDP" | (string & {});
export const UserType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface CreateChatRequest {
  agentSpaceId: string;
  userId: string;
  userType?: UserType;
}
export const CreateChatRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    userId: S.String.pipe(T.HttpQuery("userId")),
    userType: S.optional(UserType).pipe(T.HttpQuery("userType")),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/agents/agent-space/{agentSpaceId}/chat/create",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateChatRequest",
}) as any as S.Schema<CreateChatRequest>;
export interface CreateChatResponse {
  executionId: string;
  createdAt: Date;
}
export const CreateChatResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    executionId: S.String,
    createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
  }),
).annotate({
  identifier: "CreateChatResponse",
}) as any as S.Schema<CreateChatResponse>;
export interface GetAccountUsageInput {}
export const GetAccountUsageInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/usage/account" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetAccountUsageInput",
}) as any as S.Schema<GetAccountUsageInput>;
export interface UsageMetric {
  limit: number;
  usage: number;
}
export const UsageMetric = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ limit: S.Number, usage: S.Number }),
).annotate({ identifier: "UsageMetric" }) as any as S.Schema<UsageMetric>;
export interface GetAccountUsageOutput {
  monthlyAccountInvestigationHours?: UsageMetric;
  monthlyAccountEvaluationHours?: UsageMetric;
  monthlyAccountSystemLearningHours?: UsageMetric;
  monthlyAccountOnDemandHours?: UsageMetric;
  usagePeriodStartTime: Date;
  usagePeriodEndTime: Date;
}
export const GetAccountUsageOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    monthlyAccountInvestigationHours: S.optional(UsageMetric),
    monthlyAccountEvaluationHours: S.optional(UsageMetric),
    monthlyAccountSystemLearningHours: S.optional(UsageMetric),
    monthlyAccountOnDemandHours: S.optional(UsageMetric),
    usagePeriodStartTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    usagePeriodEndTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
  }),
).annotate({
  identifier: "GetAccountUsageOutput",
}) as any as S.Schema<GetAccountUsageOutput>;
export interface GetBacklogTaskRequest {
  agentSpaceId: string;
  taskId: string;
}
export const GetBacklogTaskRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    taskId: S.String.pipe(T.HttpLabel("taskId")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/backlog/agent-space/{agentSpaceId}/tasks/{taskId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetBacklogTaskRequest",
}) as any as S.Schema<GetBacklogTaskRequest>;
export interface GetBacklogTaskResponse {
  task: Task;
}
export const GetBacklogTaskResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ task: Task }),
).annotate({
  identifier: "GetBacklogTaskResponse",
}) as any as S.Schema<GetBacklogTaskResponse>;
export interface GetRecommendationRequest {
  agentSpaceId: string;
  recommendationId: string;
  recommendationVersion?: number;
}
export const GetRecommendationRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      recommendationId: S.String.pipe(T.HttpLabel("recommendationId")),
      recommendationVersion: S.optional(S.Number).pipe(
        T.HttpQuery("recommendationVersion"),
      ),
    }).pipe(
      T.all(
        T.Http({
          method: "GET",
          uri: "/backlog/agent-space/{agentSpaceId}/recommendations/{recommendationId}",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "GetRecommendationRequest",
}) as any as S.Schema<GetRecommendationRequest>;
export interface RecommendationContent {
  summary: string;
  spec?: string;
}
export const RecommendationContent = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ summary: S.String, spec: S.optional(S.String) }),
).annotate({
  identifier: "RecommendationContent",
}) as any as S.Schema<RecommendationContent>;
export type RecommendationStatus =
  | "PROPOSED"
  | "ACCEPTED"
  | "REJECTED"
  | "CLOSED"
  | "COMPLETED"
  | "UPDATE_IN_PROGRESS"
  | (string & {});
export const RecommendationStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type RecommendationPriority = "HIGH" | "MEDIUM" | "LOW" | (string & {});
export const RecommendationPriority = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface Recommendation {
  agentSpaceArn: string;
  recommendationId: string;
  taskId: string;
  goalId?: string;
  title: string;
  content: RecommendationContent;
  status: RecommendationStatus;
  priority: RecommendationPriority;
  goalVersion?: number;
  additionalContext?: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}
export const Recommendation = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceArn: S.String,
    recommendationId: S.String,
    taskId: S.String,
    goalId: S.optional(S.String),
    title: S.String,
    content: RecommendationContent,
    status: RecommendationStatus,
    priority: RecommendationPriority,
    goalVersion: S.optional(S.Number),
    additionalContext: S.optional(S.String),
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    version: S.Number,
  }),
).annotate({ identifier: "Recommendation" }) as any as S.Schema<Recommendation>;
export interface GetRecommendationResponse {
  recommendation: Recommendation;
}
export const GetRecommendationResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ recommendation: Recommendation }),
).annotate({
  identifier: "GetRecommendationResponse",
}) as any as S.Schema<GetRecommendationResponse>;
export type PriorityList = Priority[];
export const PriorityList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Priority);
export type TaskStatusList = TaskStatus[];
export const TaskStatusList = /*@__PURE__*/ /*#__PURE__*/ S.Array(TaskStatus);
export type TaskTypeList = TaskType[];
export const TaskTypeList = /*@__PURE__*/ /*#__PURE__*/ S.Array(TaskType);
export interface TaskFilter {
  createdAfter?: Date;
  createdBefore?: Date;
  priority?: Priority[];
  status?: TaskStatus[];
  taskType?: TaskType[];
  primaryTaskId?: string;
}
export const TaskFilter = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    createdAfter: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    createdBefore: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    priority: S.optional(PriorityList),
    status: S.optional(TaskStatusList),
    taskType: S.optional(TaskTypeList),
    primaryTaskId: S.optional(S.String),
  }),
).annotate({ identifier: "TaskFilter" }) as any as S.Schema<TaskFilter>;
export type TaskSortField = "CREATED_AT" | "PRIORITY" | (string & {});
export const TaskSortField = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type TaskSortOrder = "ASC" | "DESC" | (string & {});
export const TaskSortOrder = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface ListBacklogTasksRequest {
  agentSpaceId: string;
  filter?: TaskFilter;
  limit?: number;
  nextToken?: string;
  sortField?: TaskSortField;
  order?: TaskSortOrder;
}
export const ListBacklogTasksRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      filter: S.optional(TaskFilter),
      limit: S.optional(S.Number),
      nextToken: S.optional(S.String),
      sortField: S.optional(TaskSortField),
      order: S.optional(TaskSortOrder),
    }).pipe(
      T.all(
        T.Http({
          method: "POST",
          uri: "/backlog/agent-space/{agentSpaceId}/tasks/list",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "ListBacklogTasksRequest",
}) as any as S.Schema<ListBacklogTasksRequest>;
export type TaskList = Task[];
export const TaskList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Task);
export interface ListBacklogTasksResponse {
  tasks: Task[];
  nextToken?: string;
}
export const ListBacklogTasksResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ tasks: TaskList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListBacklogTasksResponse",
}) as any as S.Schema<ListBacklogTasksResponse>;
export interface ListChatsRequest {
  agentSpaceId: string;
  userId: string;
  maxResults?: number;
  nextToken?: string;
}
export const ListChatsRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    userId: S.String.pipe(T.HttpQuery("userId")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/agents/agent-space/{agentSpaceId}/chat/list",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListChatsRequest",
}) as any as S.Schema<ListChatsRequest>;
export interface ChatExecution {
  executionId: string;
  createdAt: Date;
  updatedAt?: Date;
  summary?: string;
}
export const ChatExecution = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    executionId: S.String,
    createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    summary: S.optional(S.String),
  }),
).annotate({ identifier: "ChatExecution" }) as any as S.Schema<ChatExecution>;
export type ChatExecutionList = ChatExecution[];
export const ChatExecutionList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(ChatExecution);
export interface ListChatsResponse {
  executions: ChatExecution[];
  nextToken?: string;
}
export const ListChatsResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ executions: ChatExecutionList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListChatsResponse",
}) as any as S.Schema<ListChatsResponse>;
export interface ListExecutionsRequest {
  agentSpaceId: string;
  taskId: string;
  limit?: number;
  nextToken?: string;
}
export const ListExecutionsRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    taskId: S.String,
    limit: S.optional(S.Number),
    nextToken: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/journal/agent-space/{agentSpaceId}/executions",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListExecutionsRequest",
}) as any as S.Schema<ListExecutionsRequest>;
export type ExecutionStatus =
  | "FAILED"
  | "RUNNING"
  | "STOPPED"
  | "CANCELED"
  | "TIMED_OUT"
  | (string & {});
export const ExecutionStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface Execution {
  agentSpaceId: string;
  executionId: string;
  parentExecutionId?: string;
  agentSubTask: string;
  createdAt: Date;
  updatedAt: Date;
  executionStatus: ExecutionStatus;
  agentType?: string;
  uid?: string;
}
export const Execution = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    executionId: S.String,
    parentExecutionId: S.optional(S.String),
    agentSubTask: S.String,
    createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    executionStatus: ExecutionStatus,
    agentType: S.optional(S.String),
    uid: S.optional(S.String),
  }),
).annotate({ identifier: "Execution" }) as any as S.Schema<Execution>;
export type ExecutionList = Execution[];
export const ExecutionList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Execution);
export interface ListExecutionsResponse {
  executions: Execution[];
  nextToken?: string;
}
export const ListExecutionsResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ executions: ExecutionList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListExecutionsResponse",
}) as any as S.Schema<ListExecutionsResponse>;
export type GoalStatus = "ACTIVE" | "PAUSED" | "COMPLETE" | (string & {});
export const GoalStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type GoalType = "CUSTOMER_DEFINED" | "ONCALL_REPORT" | (string & {});
export const GoalType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface ListGoalsRequest {
  agentSpaceId: string;
  status?: GoalStatus;
  goalType?: GoalType;
  limit?: number;
  nextToken?: string;
}
export const ListGoalsRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    status: S.optional(GoalStatus),
    goalType: S.optional(GoalType),
    limit: S.optional(S.Number),
    nextToken: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/backlog/agent-space/{agentSpaceId}/goals/list",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListGoalsRequest",
}) as any as S.Schema<ListGoalsRequest>;
export interface GoalContent {
  description: string;
  objectives: string;
}
export const GoalContent = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ description: S.String, objectives: S.String }),
).annotate({ identifier: "GoalContent" }) as any as S.Schema<GoalContent>;
export type SchedulerState = "ENABLED" | "DISABLED" | (string & {});
export const SchedulerState = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface GoalSchedule {
  state: SchedulerState;
  expression?: string;
}
export const GoalSchedule = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ state: SchedulerState, expression: S.optional(S.String) }),
).annotate({ identifier: "GoalSchedule" }) as any as S.Schema<GoalSchedule>;
export interface Goal {
  agentSpaceArn: string;
  goalId: string;
  title: string;
  content: GoalContent;
  status: GoalStatus;
  goalType: GoalType;
  createdAt: Date;
  updatedAt: Date;
  lastEvaluatedAt?: Date;
  lastTaskId?: string;
  lastSuccessfulTaskId?: string;
  version: number;
  evaluationSchedule?: GoalSchedule;
}
export const Goal = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceArn: S.String,
    goalId: S.String,
    title: S.String,
    content: GoalContent,
    status: GoalStatus,
    goalType: GoalType,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastEvaluatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    lastTaskId: S.optional(S.String),
    lastSuccessfulTaskId: S.optional(S.String),
    version: S.Number,
    evaluationSchedule: S.optional(GoalSchedule),
  }),
).annotate({ identifier: "Goal" }) as any as S.Schema<Goal>;
export type GoalList = Goal[];
export const GoalList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Goal);
export interface ListGoalsResponse {
  goals: Goal[];
  nextToken?: string;
}
export const ListGoalsResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ goals: GoalList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListGoalsResponse",
}) as any as S.Schema<ListGoalsResponse>;
export type OrderType = "ASC" | "DESC" | (string & {});
export const OrderType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface ListJournalRecordsRequest {
  agentSpaceId: string;
  executionId: string;
  limit?: number;
  nextToken?: string;
  recordType?: string;
  order?: OrderType;
}
export const ListJournalRecordsRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      executionId: S.String,
      limit: S.optional(S.Number),
      nextToken: S.optional(S.String),
      recordType: S.optional(S.String),
      order: S.optional(OrderType),
    }).pipe(
      T.all(
        T.Http({
          method: "POST",
          uri: "/journal/agent-space/{agentSpaceId}/journalRecords",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "ListJournalRecordsRequest",
}) as any as S.Schema<ListJournalRecordsRequest>;
export interface UserReference {
  userId: string;
  userType: UserType;
}
export const UserReference = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ userId: S.String, userType: UserType }),
).annotate({ identifier: "UserReference" }) as any as S.Schema<UserReference>;
export interface JournalRecord {
  agentSpaceId: string;
  executionId: string;
  recordId: string;
  content: any;
  createdAt: Date;
  recordType: string;
  userReference?: UserReference;
}
export const JournalRecord = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    executionId: S.String,
    recordId: S.String,
    content: S.Any,
    createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    recordType: S.String,
    userReference: S.optional(UserReference),
  }),
).annotate({ identifier: "JournalRecord" }) as any as S.Schema<JournalRecord>;
export type JournalRecordList = JournalRecord[];
export const JournalRecordList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(JournalRecord);
export interface ListJournalRecordsResponse {
  records: JournalRecord[];
  nextToken?: string;
}
export const ListJournalRecordsResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ records: JournalRecordList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListJournalRecordsResponse",
}) as any as S.Schema<ListJournalRecordsResponse>;
export interface ListPendingMessagesRequest {
  agentSpaceId: string;
  executionId: string;
}
export const ListPendingMessagesRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      executionId: S.String,
    }).pipe(
      T.all(
        T.Http({
          method: "POST",
          uri: "/agents/agent-space/{agentSpaceId}/pendingMessages",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "ListPendingMessagesRequest",
}) as any as S.Schema<ListPendingMessagesRequest>;
export type UserMessageBlock =
  | { text: string; toolResult?: never }
  | { text?: never; toolResult: any };
export const UserMessageBlock = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ text: S.String }),
  S.Struct({ toolResult: S.Any }),
]);
export type UserMessage = UserMessageBlock[];
export const UserMessage =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(UserMessageBlock);
export type AssistantMessageBlock =
  | { text: string; toolUse?: never }
  | { text?: never; toolUse: any };
export const AssistantMessageBlock = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ text: S.String }),
  S.Struct({ toolUse: S.Any }),
]);
export type AssistantMessage = AssistantMessageBlock[];
export const AssistantMessage = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  AssistantMessageBlock,
);
export type Message =
  | { userMessage: UserMessageBlock[]; assistantMessage?: never }
  | { userMessage?: never; assistantMessage: AssistantMessageBlock[] };
export const Message = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ userMessage: UserMessage }),
  S.Struct({ assistantMessage: AssistantMessage }),
]);
export interface PendingMessage {
  messageId: string;
  message: Message;
}
export const PendingMessage = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ messageId: S.String, message: Message }),
).annotate({ identifier: "PendingMessage" }) as any as S.Schema<PendingMessage>;
export type PendingMessages = PendingMessage[];
export const PendingMessages =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(PendingMessage);
export interface ListPendingMessagesResponse {
  agentSpaceId: string;
  executionId: string;
  messages: PendingMessage[];
  createdAt: Date;
}
export const ListPendingMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      agentSpaceId: S.String,
      executionId: S.String,
      messages: PendingMessages,
      createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    }),
  ).annotate({
    identifier: "ListPendingMessagesResponse",
  }) as any as S.Schema<ListPendingMessagesResponse>;
export interface ListRecommendationsRequest {
  agentSpaceId: string;
  taskId?: string;
  goalId?: string;
  status?: RecommendationStatus;
  priority?: RecommendationPriority;
  limit?: number;
  nextToken?: string;
}
export const ListRecommendationsRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      taskId: S.optional(S.String),
      goalId: S.optional(S.String),
      status: S.optional(RecommendationStatus),
      priority: S.optional(RecommendationPriority),
      limit: S.optional(S.Number),
      nextToken: S.optional(S.String),
    }).pipe(
      T.all(
        T.Http({
          method: "POST",
          uri: "/backlog/agent-space/{agentSpaceId}/recommendations/list",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "ListRecommendationsRequest",
}) as any as S.Schema<ListRecommendationsRequest>;
export type RecommendationList = Recommendation[];
export const RecommendationList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(Recommendation);
export interface ListRecommendationsResponse {
  recommendations: Recommendation[];
  nextToken?: string;
}
export const ListRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      recommendations: RecommendationList,
      nextToken: S.optional(S.String),
    }),
  ).annotate({
    identifier: "ListRecommendationsResponse",
  }) as any as S.Schema<ListRecommendationsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export const ListTagsForResourceRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
      T.all(
        T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export type Tags = { [key: string]: string | undefined };
export const Tags = /*@__PURE__*/ /*#__PURE__*/ S.Record(
  S.String,
  S.String.pipe(S.optional),
);
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
export const ListTagsForResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ tags: Tags }),
  ).annotate({
    identifier: "ListTagsForResourceResponse",
  }) as any as S.Schema<ListTagsForResourceResponse>;
export interface SendMessageContext {
  currentPage?: string;
  lastMessage?: string;
  userActionResponse?: string;
}
export const SendMessageContext = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    currentPage: S.optional(S.String),
    lastMessage: S.optional(S.String),
    userActionResponse: S.optional(S.String),
  }),
).annotate({
  identifier: "SendMessageContext",
}) as any as S.Schema<SendMessageContext>;
export interface SendMessageRequest {
  agentSpaceId: string;
  executionId: string;
  content: string;
  context?: SendMessageContext;
  userId: string;
}
export const SendMessageRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    executionId: S.String,
    content: S.String,
    context: S.optional(SendMessageContext),
    userId: S.String,
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/agents/agent-space/{agentSpaceId}/chat/sendMessage",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "SendMessageRequest",
}) as any as S.Schema<SendMessageRequest>;
export interface SendMessageResponseCreatedEvent {
  responseId?: string;
  sequenceNumber?: number;
}
export const SendMessageResponseCreatedEvent =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      responseId: S.optional(S.String),
      sequenceNumber: S.optional(S.Number),
    }),
  ).annotate({
    identifier: "SendMessageResponseCreatedEvent",
  }) as any as S.Schema<SendMessageResponseCreatedEvent>;
export interface SendMessageResponseInProgressEvent {
  responseId?: string;
  sequenceNumber?: number;
}
export const SendMessageResponseInProgressEvent =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      responseId: S.optional(S.String),
      sequenceNumber: S.optional(S.Number),
    }),
  ).annotate({
    identifier: "SendMessageResponseInProgressEvent",
  }) as any as S.Schema<SendMessageResponseInProgressEvent>;
export interface SendMessageUsageInfo {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
}
export const SendMessageUsageInfo = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    inputTokens: S.optional(S.Number),
    outputTokens: S.optional(S.Number),
    totalTokens: S.optional(S.Number),
  }),
).annotate({
  identifier: "SendMessageUsageInfo",
}) as any as S.Schema<SendMessageUsageInfo>;
export interface SendMessageResponseCompletedEvent {
  responseId?: string;
  usage?: SendMessageUsageInfo;
  sequenceNumber?: number;
}
export const SendMessageResponseCompletedEvent =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      responseId: S.optional(S.String),
      usage: S.optional(SendMessageUsageInfo),
      sequenceNumber: S.optional(S.Number),
    }),
  ).annotate({
    identifier: "SendMessageResponseCompletedEvent",
  }) as any as S.Schema<SendMessageResponseCompletedEvent>;
export interface SendMessageResponseFailedEvent {
  responseId?: string;
  errorCode?: string;
  errorMessage?: string;
  sequenceNumber?: number;
}
export const SendMessageResponseFailedEvent =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      responseId: S.optional(S.String),
      errorCode: S.optional(S.String),
      errorMessage: S.optional(S.String),
      sequenceNumber: S.optional(S.Number),
    }),
  ).annotate({
    identifier: "SendMessageResponseFailedEvent",
  }) as any as S.Schema<SendMessageResponseFailedEvent>;
export interface SendMessageSummaryEvent {
  content?: string;
  sequenceNumber?: number;
}
export const SendMessageSummaryEvent = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      content: S.optional(S.String),
      sequenceNumber: S.optional(S.Number),
    }),
).annotate({
  identifier: "SendMessageSummaryEvent",
}) as any as S.Schema<SendMessageSummaryEvent>;
export interface SendMessageHeartbeatEvent {}
export const SendMessageHeartbeatEvent = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "SendMessageHeartbeatEvent",
}) as any as S.Schema<SendMessageHeartbeatEvent>;
export interface SendMessageContentBlockStartEvent {
  index?: number;
  type?: string;
  id?: string;
  parentId?: string;
  sequenceNumber?: number;
}
export const SendMessageContentBlockStartEvent =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      index: S.optional(S.Number),
      type: S.optional(S.String),
      id: S.optional(S.String),
      parentId: S.optional(S.String),
      sequenceNumber: S.optional(S.Number),
    }),
  ).annotate({
    identifier: "SendMessageContentBlockStartEvent",
  }) as any as S.Schema<SendMessageContentBlockStartEvent>;
export interface SendMessageTextDelta {
  text?: string;
}
export const SendMessageTextDelta = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.optional(S.String) }),
).annotate({
  identifier: "SendMessageTextDelta",
}) as any as S.Schema<SendMessageTextDelta>;
export interface SendMessageJsonDelta {
  partialJson?: string;
}
export const SendMessageJsonDelta = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ partialJson: S.optional(S.String) }),
).annotate({
  identifier: "SendMessageJsonDelta",
}) as any as S.Schema<SendMessageJsonDelta>;
export type SendMessageContentBlockDelta =
  | { textDelta: SendMessageTextDelta; jsonDelta?: never }
  | { textDelta?: never; jsonDelta: SendMessageJsonDelta };
export const SendMessageContentBlockDelta = /*@__PURE__*/ /*#__PURE__*/ S.Union(
  [
    S.Struct({ textDelta: SendMessageTextDelta }),
    S.Struct({ jsonDelta: SendMessageJsonDelta }),
  ],
);
export interface SendMessageContentBlockDeltaEvent {
  index?: number;
  delta?: SendMessageContentBlockDelta;
  sequenceNumber?: number;
}
export const SendMessageContentBlockDeltaEvent =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      index: S.optional(S.Number),
      delta: S.optional(SendMessageContentBlockDelta),
      sequenceNumber: S.optional(S.Number),
    }),
  ).annotate({
    identifier: "SendMessageContentBlockDeltaEvent",
  }) as any as S.Schema<SendMessageContentBlockDeltaEvent>;
export interface SendMessageContentBlockStopEvent {
  index?: number;
  type?: string;
  text?: string;
  last?: boolean;
  sequenceNumber?: number;
}
export const SendMessageContentBlockStopEvent =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      index: S.optional(S.Number),
      type: S.optional(S.String),
      text: S.optional(S.String),
      last: S.optional(S.Boolean),
      sequenceNumber: S.optional(S.Number),
    }),
  ).annotate({
    identifier: "SendMessageContentBlockStopEvent",
  }) as any as S.Schema<SendMessageContentBlockStopEvent>;
export type SendMessageEvents =
  | {
      responseCreated: SendMessageResponseCreatedEvent;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress: SendMessageResponseInProgressEvent;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted: SendMessageResponseCompletedEvent;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed: SendMessageResponseFailedEvent;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary: SendMessageSummaryEvent;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat: SendMessageHeartbeatEvent;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart: SendMessageContentBlockStartEvent;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta: SendMessageContentBlockDeltaEvent;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop: SendMessageContentBlockStopEvent;
    };
export const SendMessageEvents = /*@__PURE__*/ /*#__PURE__*/ T.EventStream(
  S.Union([
    S.Struct({ responseCreated: SendMessageResponseCreatedEvent }),
    S.Struct({ responseInProgress: SendMessageResponseInProgressEvent }),
    S.Struct({ responseCompleted: SendMessageResponseCompletedEvent }),
    S.Struct({ responseFailed: SendMessageResponseFailedEvent }),
    S.Struct({ summary: SendMessageSummaryEvent }),
    S.Struct({ heartbeat: SendMessageHeartbeatEvent }),
    S.Struct({ contentBlockStart: SendMessageContentBlockStartEvent }),
    S.Struct({ contentBlockDelta: SendMessageContentBlockDeltaEvent }),
    S.Struct({ contentBlockStop: SendMessageContentBlockStopEvent }),
  ]),
) as any as S.Schema<stream.Stream<SendMessageEvents, Error, never>>;
export interface SendMessageResponse {
  events: stream.Stream<SendMessageEvents, Error, never>;
}
export const SendMessageResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ events: SendMessageEvents.pipe(T.HttpPayload()) }),
).annotate({
  identifier: "SendMessageResponse",
}) as any as S.Schema<SendMessageResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export const TagResourceRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
    tags: Tags,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "TagResourceRequest",
}) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
export const TagResourceResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "TagResourceResponse",
}) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
export const TagKeyList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export const UntagResourceRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
    tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UntagResourceRequest",
}) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
export const UntagResourceResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "UntagResourceResponse",
}) as any as S.Schema<UntagResourceResponse>;
export interface UpdateBacklogTaskRequest {
  agentSpaceId: string;
  taskId: string;
  taskStatus?: TaskStatus;
  clientToken?: string;
}
export const UpdateBacklogTaskRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      taskId: S.String.pipe(T.HttpLabel("taskId")),
      taskStatus: S.optional(TaskStatus),
      clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    }).pipe(
      T.all(
        T.Http({
          method: "PATCH",
          uri: "/backlog/agent-space/{agentSpaceId}/tasks/{taskId}",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "UpdateBacklogTaskRequest",
}) as any as S.Schema<UpdateBacklogTaskRequest>;
export interface UpdateBacklogTaskResponse {
  task: Task;
}
export const UpdateBacklogTaskResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ task: Task }),
).annotate({
  identifier: "UpdateBacklogTaskResponse",
}) as any as S.Schema<UpdateBacklogTaskResponse>;
export interface GoalScheduleInput {
  state: SchedulerState;
}
export const GoalScheduleInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ state: SchedulerState }),
).annotate({
  identifier: "GoalScheduleInput",
}) as any as S.Schema<GoalScheduleInput>;
export interface UpdateGoalRequest {
  agentSpaceId: string;
  goalId: string;
  evaluationSchedule?: GoalScheduleInput;
  clientToken?: string;
}
export const UpdateGoalRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    goalId: S.String.pipe(T.HttpLabel("goalId")),
    evaluationSchedule: S.optional(GoalScheduleInput),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({
        method: "PATCH",
        uri: "/backlog/agent-space/{agentSpaceId}/goals/{goalId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateGoalRequest",
}) as any as S.Schema<UpdateGoalRequest>;
export interface UpdateGoalResponse {
  goal: Goal;
}
export const UpdateGoalResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ goal: Goal }),
).annotate({
  identifier: "UpdateGoalResponse",
}) as any as S.Schema<UpdateGoalResponse>;
export interface UpdateRecommendationRequest {
  agentSpaceId: string;
  recommendationId: string;
  status?: RecommendationStatus;
  additionalContext?: string;
  clientToken?: string;
}
export const UpdateRecommendationRequest =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      recommendationId: S.String.pipe(T.HttpLabel("recommendationId")),
      status: S.optional(RecommendationStatus),
      additionalContext: S.optional(S.String),
      clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    }).pipe(
      T.all(
        T.Http({
          method: "PATCH",
          uri: "/backlog/agent-space/{agentSpaceId}/recommendations/{recommendationId}",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "UpdateRecommendationRequest",
  }) as any as S.Schema<UpdateRecommendationRequest>;
export interface UpdateRecommendationResponse {
  recommendation: Recommendation;
}
export const UpdateRecommendationResponse =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ recommendation: Recommendation }),
  ).annotate({
    identifier: "UpdateRecommendationResponse",
  }) as any as S.Schema<UpdateRecommendationResponse>;
export interface CreateAgentSpaceInput {
  name: string;
  description?: string | redacted.Redacted<string>;
  locale?: string;
  kmsKeyArn?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export const CreateAgentSpaceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    description: S.optional(SensitiveString),
    locale: S.optional(S.String),
    kmsKeyArn: S.optional(S.String),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(Tags),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v1/agentspaces" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateAgentSpaceInput",
}) as any as S.Schema<CreateAgentSpaceInput>;
export interface AgentSpace {
  name: string;
  description?: string | redacted.Redacted<string>;
  locale?: string;
  createdAt: Date;
  updatedAt: Date;
  kmsKeyArn?: string;
  agentSpaceId: string;
}
export const AgentSpace = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    description: S.optional(SensitiveString),
    locale: S.optional(S.String),
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    kmsKeyArn: S.optional(S.String),
    agentSpaceId: S.String,
  }),
).annotate({ identifier: "AgentSpace" }) as any as S.Schema<AgentSpace>;
export interface CreateAgentSpaceOutput {
  agentSpace: AgentSpace;
  tags?: { [key: string]: string | undefined };
}
export const CreateAgentSpaceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ agentSpace: AgentSpace, tags: S.optional(Tags) }),
).annotate({
  identifier: "CreateAgentSpaceOutput",
}) as any as S.Schema<CreateAgentSpaceOutput>;
export interface GetAgentSpaceInput {
  agentSpaceId: string;
}
export const GetAgentSpaceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/v1/agentspaces/{agentSpaceId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetAgentSpaceInput",
}) as any as S.Schema<GetAgentSpaceInput>;
export interface GetAgentSpaceOutput {
  agentSpace: AgentSpace;
  tags?: { [key: string]: string | undefined };
}
export const GetAgentSpaceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ agentSpace: AgentSpace, tags: S.optional(Tags) }),
).annotate({
  identifier: "GetAgentSpaceOutput",
}) as any as S.Schema<GetAgentSpaceOutput>;
export interface UpdateAgentSpaceInput {
  agentSpaceId: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  locale?: string;
}
export const UpdateAgentSpaceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    name: S.optional(S.String),
    description: S.optional(SensitiveString),
    locale: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "PATCH", uri: "/v1/agentspaces/{agentSpaceId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateAgentSpaceInput",
}) as any as S.Schema<UpdateAgentSpaceInput>;
export interface UpdateAgentSpaceOutput {
  agentSpace: AgentSpace;
}
export const UpdateAgentSpaceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ agentSpace: AgentSpace }),
).annotate({
  identifier: "UpdateAgentSpaceOutput",
}) as any as S.Schema<UpdateAgentSpaceOutput>;
export interface DeleteAgentSpaceInput {
  agentSpaceId: string;
}
export const DeleteAgentSpaceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/v1/agentspaces/{agentSpaceId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteAgentSpaceInput",
}) as any as S.Schema<DeleteAgentSpaceInput>;
export interface DeleteAgentSpaceOutput {}
export const DeleteAgentSpaceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "DeleteAgentSpaceOutput",
}) as any as S.Schema<DeleteAgentSpaceOutput>;
export type AuthFlow = "iam" | "idc" | "idp" | (string & {});
export const AuthFlow = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface DisableOperatorAppInput {
  agentSpaceId: string;
  authFlow?: AuthFlow;
}
export const DisableOperatorAppInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      authFlow: S.optional(AuthFlow).pipe(T.HttpHeader("x-amzn-app-auth-flow")),
    }).pipe(
      T.all(
        T.Http({
          method: "DELETE",
          uri: "/v1/agentspaces/{agentSpaceId}/operator",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "DisableOperatorAppInput",
}) as any as S.Schema<DisableOperatorAppInput>;
export interface DisableOperatorAppResponse {}
export const DisableOperatorAppResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "DisableOperatorAppResponse",
}) as any as S.Schema<DisableOperatorAppResponse>;
export interface EnableOperatorAppInput {
  agentSpaceId: string;
  authFlow: AuthFlow;
  operatorAppRoleArn: string;
  idcInstanceArn?: string;
  issuerUrl?: string;
  idpClientId?: string;
  idpClientSecret?: string | redacted.Redacted<string>;
  provider?: string;
}
export const EnableOperatorAppInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      authFlow: AuthFlow,
      operatorAppRoleArn: S.String,
      idcInstanceArn: S.optional(S.String),
      issuerUrl: S.optional(S.String),
      idpClientId: S.optional(S.String),
      idpClientSecret: S.optional(SensitiveString),
      provider: S.optional(S.String),
    }).pipe(
      T.all(
        T.Http({
          method: "POST",
          uri: "/v1/agentspaces/{agentSpaceId}/operator",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "EnableOperatorAppInput",
}) as any as S.Schema<EnableOperatorAppInput>;
export interface IamAuthConfiguration {
  operatorAppRoleArn: string;
  createdAt: Date;
  updatedAt?: Date;
}
export const IamAuthConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    operatorAppRoleArn: S.String,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({
  identifier: "IamAuthConfiguration",
}) as any as S.Schema<IamAuthConfiguration>;
export interface IdcAuthConfiguration {
  operatorAppRoleArn: string;
  idcInstanceArn: string;
  idcApplicationArn?: string;
  createdAt: Date;
  updatedAt?: Date;
}
export const IdcAuthConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    operatorAppRoleArn: S.String,
    idcInstanceArn: S.String,
    idcApplicationArn: S.optional(S.String),
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({
  identifier: "IdcAuthConfiguration",
}) as any as S.Schema<IdcAuthConfiguration>;
export interface IdpAuthConfiguration {
  issuerUrl: string;
  clientId: string;
  operatorAppRoleArn: string;
  provider: string;
  createdAt: Date;
  updatedAt?: Date;
}
export const IdpAuthConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    issuerUrl: S.String,
    clientId: S.String,
    operatorAppRoleArn: S.String,
    provider: S.String,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({
  identifier: "IdpAuthConfiguration",
}) as any as S.Schema<IdpAuthConfiguration>;
export interface EnableOperatorAppOutput {
  agentSpaceId: string;
  iam?: IamAuthConfiguration;
  idc?: IdcAuthConfiguration;
  idp?: IdpAuthConfiguration;
}
export const EnableOperatorAppOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String,
      iam: S.optional(IamAuthConfiguration),
      idc: S.optional(IdcAuthConfiguration),
      idp: S.optional(IdpAuthConfiguration),
    }),
).annotate({
  identifier: "EnableOperatorAppOutput",
}) as any as S.Schema<EnableOperatorAppOutput>;
export interface GetOperatorAppInput {
  agentSpaceId: string;
}
export const GetOperatorAppInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/v2/agentspaces/{agentSpaceId}/operator" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetOperatorAppInput",
}) as any as S.Schema<GetOperatorAppInput>;
export interface GetOperatorAppOutput {
  iam?: IamAuthConfiguration;
  idc?: IdcAuthConfiguration;
  idp?: IdpAuthConfiguration;
}
export const GetOperatorAppOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    iam: S.optional(IamAuthConfiguration),
    idc: S.optional(IdcAuthConfiguration),
    idp: S.optional(IdpAuthConfiguration),
  }),
).annotate({
  identifier: "GetOperatorAppOutput",
}) as any as S.Schema<GetOperatorAppOutput>;
export interface UpdateOperatorAppIdpConfigInput {
  agentSpaceId: string;
  idpClientSecret?: string | redacted.Redacted<string>;
}
export const UpdateOperatorAppIdpConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      idpClientSecret: S.optional(SensitiveString),
    }).pipe(
      T.all(
        T.Http({
          method: "PATCH",
          uri: "/v1/agentspaces/{agentSpaceId}/operator/idp",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "UpdateOperatorAppIdpConfigInput",
  }) as any as S.Schema<UpdateOperatorAppIdpConfigInput>;
export interface UpdateOperatorAppIdpConfigOutput {
  agentSpaceId: string;
  idp: IdpAuthConfiguration;
}
export const UpdateOperatorAppIdpConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ agentSpaceId: S.String, idp: IdpAuthConfiguration }),
  ).annotate({
    identifier: "UpdateOperatorAppIdpConfigOutput",
  }) as any as S.Schema<UpdateOperatorAppIdpConfigOutput>;
export interface ListAgentSpacesInput {
  maxResults?: number;
  nextToken?: string;
}
export const ListAgentSpacesInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v1/agentspaces/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAgentSpacesInput",
}) as any as S.Schema<ListAgentSpacesInput>;
export type AgentSpaceList = AgentSpace[];
export const AgentSpaceList = /*@__PURE__*/ /*#__PURE__*/ S.Array(AgentSpace);
export interface ListAgentSpacesOutput {
  nextToken?: string;
  agentSpaces: AgentSpace[];
}
export const ListAgentSpacesOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ nextToken: S.optional(S.String), agentSpaces: AgentSpaceList }),
).annotate({
  identifier: "ListAgentSpacesOutput",
}) as any as S.Schema<ListAgentSpacesOutput>;
export type SourceAccountType = "source" | (string & {});
export const SourceAccountType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface SourceAwsConfiguration {
  accountId: string;
  accountType: SourceAccountType;
  assumableRoleArn: string;
  externalId?: string;
}
export const SourceAwsConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      accountId: S.String,
      accountType: SourceAccountType,
      assumableRoleArn: S.String,
      externalId: S.optional(S.String),
    }),
).annotate({
  identifier: "SourceAwsConfiguration",
}) as any as S.Schema<SourceAwsConfiguration>;
export type MonitorAccountType = "monitor" | (string & {});
export const MonitorAccountType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface AWSConfiguration {
  assumableRoleArn: string;
  accountId: string;
  accountType: MonitorAccountType;
}
export const AWSConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    assumableRoleArn: S.String,
    accountId: S.String,
    accountType: MonitorAccountType,
  }),
).annotate({
  identifier: "AWSConfiguration",
}) as any as S.Schema<AWSConfiguration>;
export type GithubRepoOwnerType = "organization" | "user" | (string & {});
export const GithubRepoOwnerType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface GitHubConfiguration {
  repoName: string;
  repoId: string;
  owner: string;
  ownerType: GithubRepoOwnerType;
  instanceIdentifier?: string;
}
export const GitHubConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    repoName: S.String,
    repoId: S.String,
    owner: S.String,
    ownerType: GithubRepoOwnerType,
    instanceIdentifier: S.optional(S.String),
  }),
).annotate({
  identifier: "GitHubConfiguration",
}) as any as S.Schema<GitHubConfiguration>;
export interface SlackChannel {
  channelName?: string;
  channelId: string;
}
export const SlackChannel = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ channelName: S.optional(S.String), channelId: S.String }),
).annotate({ identifier: "SlackChannel" }) as any as S.Schema<SlackChannel>;
export interface SlackTransmissionTarget {
  opsOncallTarget: SlackChannel;
  opsSRETarget?: SlackChannel;
}
export const SlackTransmissionTarget = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      opsOncallTarget: SlackChannel,
      opsSRETarget: S.optional(SlackChannel),
    }),
).annotate({
  identifier: "SlackTransmissionTarget",
}) as any as S.Schema<SlackTransmissionTarget>;
export interface SlackConfiguration {
  workspaceId: string;
  workspaceName: string;
  transmissionTarget: SlackTransmissionTarget;
}
export const SlackConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    workspaceId: S.String,
    workspaceName: S.String,
    transmissionTarget: SlackTransmissionTarget,
  }),
).annotate({
  identifier: "SlackConfiguration",
}) as any as S.Schema<SlackConfiguration>;
export type DynatraceResourceList = string[];
export const DynatraceResourceList = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  S.String,
);
export interface DynatraceConfiguration {
  envId: string;
  resources?: string[];
}
export const DynatraceConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ envId: S.String, resources: S.optional(DynatraceResourceList) }),
).annotate({
  identifier: "DynatraceConfiguration",
}) as any as S.Schema<DynatraceConfiguration>;
export type ServiceNowAuthenticationScopeList = string[];
export const ServiceNowAuthenticationScopeList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface ServiceNowConfiguration {
  instanceId?: string;
  authScopes?: string[];
}
export const ServiceNowConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      instanceId: S.optional(S.String),
      authScopes: S.optional(ServiceNowAuthenticationScopeList),
    }),
).annotate({
  identifier: "ServiceNowConfiguration",
}) as any as S.Schema<ServiceNowConfiguration>;
export interface MCPServerNewRelicConfiguration {
  accountId: string;
  endpoint: string;
}
export const MCPServerNewRelicConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ accountId: S.String, endpoint: S.String }),
  ).annotate({
    identifier: "MCPServerNewRelicConfiguration",
  }) as any as S.Schema<MCPServerNewRelicConfiguration>;
export interface MCPServerDatadogConfiguration {}
export const MCPServerDatadogConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() => S.Struct({})).annotate({
    identifier: "MCPServerDatadogConfiguration",
  }) as any as S.Schema<MCPServerDatadogConfiguration>;
export type MCPToolsList = string[];
export const MCPToolsList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface MCPServerConfiguration {
  tools: string[];
}
export const MCPServerConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ tools: MCPToolsList }),
).annotate({
  identifier: "MCPServerConfiguration",
}) as any as S.Schema<MCPServerConfiguration>;
export interface GitLabConfiguration {
  projectId: string;
  projectPath: string;
  instanceIdentifier?: string;
}
export const GitLabConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    projectId: S.String,
    projectPath: S.String,
    instanceIdentifier: S.optional(S.String),
  }),
).annotate({
  identifier: "GitLabConfiguration",
}) as any as S.Schema<GitLabConfiguration>;
export interface MCPServerSplunkConfiguration {}
export const MCPServerSplunkConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() => S.Struct({})).annotate({
    identifier: "MCPServerSplunkConfiguration",
  }) as any as S.Schema<MCPServerSplunkConfiguration>;
export interface EventChannelConfiguration {}
export const EventChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "EventChannelConfiguration",
}) as any as S.Schema<EventChannelConfiguration>;
export interface AzureConfiguration {
  subscriptionId: string;
}
export const AzureConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ subscriptionId: S.String }),
).annotate({
  identifier: "AzureConfiguration",
}) as any as S.Schema<AzureConfiguration>;
export interface AzureDevOpsConfiguration {
  organizationName: string;
  projectId: string;
  projectName: string;
}
export const AzureDevOpsConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      organizationName: S.String,
      projectId: S.String,
      projectName: S.String,
    }),
).annotate({
  identifier: "AzureDevOpsConfiguration",
}) as any as S.Schema<AzureDevOpsConfiguration>;
export interface MCPServerGrafanaConfiguration {
  endpoint: string;
  organizationId?: string;
  tools?: string[];
}
export const MCPServerGrafanaConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      endpoint: S.String,
      organizationId: S.optional(S.String),
      tools: S.optional(MCPToolsList),
    }),
  ).annotate({
    identifier: "MCPServerGrafanaConfiguration",
  }) as any as S.Schema<MCPServerGrafanaConfiguration>;
export type PagerDutyServicesList = string[];
export const PagerDutyServicesList = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  S.String,
);
export interface PagerDutyConfiguration {
  services: string[];
  customerEmail: string | redacted.Redacted<string>;
}
export const PagerDutyConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      services: PagerDutyServicesList,
      customerEmail: SensitiveString,
    }),
).annotate({
  identifier: "PagerDutyConfiguration",
}) as any as S.Schema<PagerDutyConfiguration>;
export type ServiceConfiguration =
  | {
      sourceAws: SourceAwsConfiguration;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws: AWSConfiguration;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github: GitHubConfiguration;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack: SlackConfiguration;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace: DynatraceConfiguration;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow: ServiceNowConfiguration;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic: MCPServerNewRelicConfiguration;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog: MCPServerDatadogConfiguration;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver: MCPServerConfiguration;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab: GitLabConfiguration;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk: MCPServerSplunkConfiguration;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel: EventChannelConfiguration;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure: AzureConfiguration;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops: AzureDevOpsConfiguration;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana: MCPServerGrafanaConfiguration;
      pagerduty?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty: PagerDutyConfiguration;
    };
export const ServiceConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ sourceAws: SourceAwsConfiguration }),
  S.Struct({ aws: AWSConfiguration }),
  S.Struct({ github: GitHubConfiguration }),
  S.Struct({ slack: SlackConfiguration }),
  S.Struct({ dynatrace: DynatraceConfiguration }),
  S.Struct({ servicenow: ServiceNowConfiguration }),
  S.Struct({ mcpservernewrelic: MCPServerNewRelicConfiguration }),
  S.Struct({ mcpserverdatadog: MCPServerDatadogConfiguration }),
  S.Struct({ mcpserver: MCPServerConfiguration }),
  S.Struct({ gitlab: GitLabConfiguration }),
  S.Struct({ mcpserversplunk: MCPServerSplunkConfiguration }),
  S.Struct({ eventChannel: EventChannelConfiguration }),
  S.Struct({ azure: AzureConfiguration }),
  S.Struct({ azuredevops: AzureDevOpsConfiguration }),
  S.Struct({ mcpservergrafana: MCPServerGrafanaConfiguration }),
  S.Struct({ pagerduty: PagerDutyConfiguration }),
]);
export interface AssociateServiceInput {
  agentSpaceId: string;
  serviceId: string;
  configuration: ServiceConfiguration;
}
export const AssociateServiceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    serviceId: S.String,
    configuration: ServiceConfiguration,
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/v1/agentspaces/{agentSpaceId}/associations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "AssociateServiceInput",
}) as any as S.Schema<AssociateServiceInput>;
export type ValidationStatus =
  | "valid"
  | "invalid"
  | "pending-confirmation"
  | (string & {});
export const ValidationStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface Association {
  agentSpaceId: string;
  createdAt: Date;
  updatedAt: Date;
  status?: ValidationStatus;
  associationId: string;
  serviceId: string;
  configuration: ServiceConfiguration;
}
export const Association = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    status: S.optional(ValidationStatus),
    associationId: S.String,
    serviceId: S.String,
    configuration: ServiceConfiguration,
  }),
).annotate({ identifier: "Association" }) as any as S.Schema<Association>;
export type WebhookType =
  | "hmac"
  | "apikey"
  | "gitlab"
  | "pagerduty"
  | (string & {});
export const WebhookType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface GenericWebhook {
  webhookUrl?: string;
  webhookId?: string;
  webhookType?: WebhookType;
  webhookSecret?: string | redacted.Redacted<string>;
  apiKey?: string | redacted.Redacted<string>;
}
export const GenericWebhook = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    webhookUrl: S.optional(S.String),
    webhookId: S.optional(S.String),
    webhookType: S.optional(WebhookType),
    webhookSecret: S.optional(SensitiveString),
    apiKey: S.optional(SensitiveString),
  }),
).annotate({ identifier: "GenericWebhook" }) as any as S.Schema<GenericWebhook>;
export interface AssociateServiceOutput {
  association: Association;
  webhook?: GenericWebhook;
}
export const AssociateServiceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ association: Association, webhook: S.optional(GenericWebhook) }),
).annotate({
  identifier: "AssociateServiceOutput",
}) as any as S.Schema<AssociateServiceOutput>;
export interface GetAssociationInput {
  agentSpaceId: string;
  associationId: string;
}
export const GetAssociationInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    associationId: S.String.pipe(T.HttpLabel("associationId")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/v1/agentspaces/{agentSpaceId}/associations/{associationId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetAssociationInput",
}) as any as S.Schema<GetAssociationInput>;
export interface GetAssociationOutput {
  association: Association;
}
export const GetAssociationOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ association: Association }),
).annotate({
  identifier: "GetAssociationOutput",
}) as any as S.Schema<GetAssociationOutput>;
export interface UpdateAssociationInput {
  agentSpaceId: string;
  associationId: string;
  configuration: ServiceConfiguration;
}
export const UpdateAssociationInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      associationId: S.String.pipe(T.HttpLabel("associationId")),
      configuration: ServiceConfiguration,
    }).pipe(
      T.all(
        T.Http({
          method: "PATCH",
          uri: "/v1/agentspaces/{agentSpaceId}/associations/{associationId}",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "UpdateAssociationInput",
}) as any as S.Schema<UpdateAssociationInput>;
export interface UpdateAssociationOutput {
  association: Association;
  webhook?: GenericWebhook;
}
export const UpdateAssociationOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ association: Association, webhook: S.optional(GenericWebhook) }),
).annotate({
  identifier: "UpdateAssociationOutput",
}) as any as S.Schema<UpdateAssociationOutput>;
export interface DisassociateServiceInput {
  agentSpaceId: string;
  associationId: string;
}
export const DisassociateServiceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
      associationId: S.String.pipe(T.HttpLabel("associationId")),
    }).pipe(
      T.all(
        T.Http({
          method: "DELETE",
          uri: "/v1/agentspaces/{agentSpaceId}/associations/{associationId}",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "DisassociateServiceInput",
}) as any as S.Schema<DisassociateServiceInput>;
export interface DisassociateServiceOutput {}
export const DisassociateServiceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "DisassociateServiceOutput",
}) as any as S.Schema<DisassociateServiceOutput>;
export interface ListWebhooksInput {
  agentSpaceId: string;
  associationId: string;
}
export const ListWebhooksInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    associationId: S.String.pipe(T.HttpLabel("associationId")),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/v1/agentspaces/{agentSpaceId}/associations/{associationId}/webhooks/list",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListWebhooksInput",
}) as any as S.Schema<ListWebhooksInput>;
export interface Webhook {
  webhookUrl: string;
  webhookType?: WebhookType;
  webhookId: string;
}
export const Webhook = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    webhookUrl: S.String,
    webhookType: S.optional(WebhookType),
    webhookId: S.String,
  }),
).annotate({ identifier: "Webhook" }) as any as S.Schema<Webhook>;
export type WebhooksList = Webhook[];
export const WebhooksList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Webhook);
export interface ListWebhooksOutput {
  webhooks: Webhook[];
}
export const ListWebhooksOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ webhooks: WebhooksList }),
).annotate({
  identifier: "ListWebhooksOutput",
}) as any as S.Schema<ListWebhooksOutput>;
export interface ListAssociationsInput {
  agentSpaceId: string;
  maxResults?: number;
  nextToken?: string;
  filterServiceTypes?: string;
}
export const ListAssociationsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    filterServiceTypes: S.optional(S.String).pipe(
      T.HttpQuery("filterServiceTypes"),
    ),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/v1/agentspaces/{agentSpaceId}/associations/list",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAssociationsInput",
}) as any as S.Schema<ListAssociationsInput>;
export type AssociationsList = Association[];
export const AssociationsList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(Association);
export interface ListAssociationsOutput {
  nextToken?: string;
  associations: Association[];
}
export const ListAssociationsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      nextToken: S.optional(S.String),
      associations: AssociationsList,
    }),
).annotate({
  identifier: "ListAssociationsOutput",
}) as any as S.Schema<ListAssociationsOutput>;
export interface ValidateAwsAssociationsInput {
  agentSpaceId: string;
}
export const ValidateAwsAssociationsInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")) }).pipe(
      T.all(
        T.Http({
          method: "POST",
          uri: "/v1/agentspaces/{agentSpaceId}/associations/validate",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "ValidateAwsAssociationsInput",
  }) as any as S.Schema<ValidateAwsAssociationsInput>;
export interface ValidateAwsAssociationsOutput {}
export const ValidateAwsAssociationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() => S.Struct({})).annotate({
    identifier: "ValidateAwsAssociationsOutput",
  }) as any as S.Schema<ValidateAwsAssociationsOutput>;
export type ListOfSubnetIds = string[];
export const ListOfSubnetIds = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export type ListOfSecurityGroupIds = string[];
export const ListOfSecurityGroupIds = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  S.String,
);
export type IpAddressType = "IPV4" | "IPV6" | "DUAL_STACK" | (string & {});
export const IpAddressType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type PortRanges = string[];
export const PortRanges = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface ServiceManagedInput {
  hostAddress: string;
  vpcId: string;
  subnetIds: string[];
  securityGroupIds?: string[];
  ipAddressType?: IpAddressType;
  ipv4AddressesPerEni?: number;
  portRanges?: string[];
  certificate?: string;
}
export const ServiceManagedInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    hostAddress: S.String,
    vpcId: S.String,
    subnetIds: ListOfSubnetIds,
    securityGroupIds: S.optional(ListOfSecurityGroupIds),
    ipAddressType: S.optional(IpAddressType),
    ipv4AddressesPerEni: S.optional(S.Number),
    portRanges: S.optional(PortRanges),
    certificate: S.optional(S.String),
  }),
).annotate({
  identifier: "ServiceManagedInput",
}) as any as S.Schema<ServiceManagedInput>;
export interface SelfManagedInput {
  resourceConfigurationId: string;
  certificate?: string;
}
export const SelfManagedInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceConfigurationId: S.String,
    certificate: S.optional(S.String),
  }),
).annotate({
  identifier: "SelfManagedInput",
}) as any as S.Schema<SelfManagedInput>;
export type PrivateConnectionMode =
  | { serviceManaged: ServiceManagedInput; selfManaged?: never }
  | { serviceManaged?: never; selfManaged: SelfManagedInput };
export const PrivateConnectionMode = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ serviceManaged: ServiceManagedInput }),
  S.Struct({ selfManaged: SelfManagedInput }),
]);
export interface CreatePrivateConnectionInput {
  name: string;
  mode: PrivateConnectionMode;
  tags?: { [key: string]: string | undefined };
}
export const CreatePrivateConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      name: S.String,
      mode: PrivateConnectionMode,
      tags: S.optional(Tags),
    }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/v1/private-connections" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "CreatePrivateConnectionInput",
  }) as any as S.Schema<CreatePrivateConnectionInput>;
export type PrivateConnectionType =
  | "SELF_MANAGED"
  | "SERVICE_MANAGED"
  | (string & {});
export const PrivateConnectionType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type PrivateConnectionStatus =
  | "ACTIVE"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
export const PrivateConnectionStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface CreatePrivateConnectionOutput {
  name: string;
  type: PrivateConnectionType;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  status: PrivateConnectionStatus;
  certificateExpiryTime?: Date;
  tags?: { [key: string]: string | undefined };
}
export const CreatePrivateConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      name: S.String,
      type: PrivateConnectionType,
      resourceGatewayId: S.optional(S.String),
      hostAddress: S.optional(S.String),
      vpcId: S.optional(S.String),
      resourceConfigurationId: S.optional(S.String),
      status: PrivateConnectionStatus,
      certificateExpiryTime: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
      tags: S.optional(Tags),
    }),
  ).annotate({
    identifier: "CreatePrivateConnectionOutput",
  }) as any as S.Schema<CreatePrivateConnectionOutput>;
export interface DescribePrivateConnectionInput {
  name: string;
}
export const DescribePrivateConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
      T.all(
        T.Http({ method: "GET", uri: "/v1/private-connections/{name}" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "DescribePrivateConnectionInput",
  }) as any as S.Schema<DescribePrivateConnectionInput>;
export interface DescribePrivateConnectionOutput {
  name: string;
  type: PrivateConnectionType;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  status: PrivateConnectionStatus;
  certificateExpiryTime?: Date;
  tags?: { [key: string]: string | undefined };
}
export const DescribePrivateConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      name: S.String,
      type: PrivateConnectionType,
      resourceGatewayId: S.optional(S.String),
      hostAddress: S.optional(S.String),
      vpcId: S.optional(S.String),
      resourceConfigurationId: S.optional(S.String),
      status: PrivateConnectionStatus,
      certificateExpiryTime: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
      tags: S.optional(Tags),
    }),
  ).annotate({
    identifier: "DescribePrivateConnectionOutput",
  }) as any as S.Schema<DescribePrivateConnectionOutput>;
export interface DeletePrivateConnectionInput {
  name: string;
}
export const DeletePrivateConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
      T.all(
        T.Http({ method: "DELETE", uri: "/v1/private-connections/{name}" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "DeletePrivateConnectionInput",
  }) as any as S.Schema<DeletePrivateConnectionInput>;
export interface DeletePrivateConnectionOutput {
  name: string;
  status: PrivateConnectionStatus;
}
export const DeletePrivateConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ name: S.String, status: PrivateConnectionStatus }),
  ).annotate({
    identifier: "DeletePrivateConnectionOutput",
  }) as any as S.Schema<DeletePrivateConnectionOutput>;
export interface ListPrivateConnectionsInput {}
export const ListPrivateConnectionsInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({}).pipe(
      T.all(
        T.Http({ method: "GET", uri: "/v1/private-connections" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "ListPrivateConnectionsInput",
  }) as any as S.Schema<ListPrivateConnectionsInput>;
export interface PrivateConnectionSummary {
  name: string;
  type: PrivateConnectionType;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  status: PrivateConnectionStatus;
  certificateExpiryTime?: Date;
}
export const PrivateConnectionSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      name: S.String,
      type: PrivateConnectionType,
      resourceGatewayId: S.optional(S.String),
      hostAddress: S.optional(S.String),
      vpcId: S.optional(S.String),
      resourceConfigurationId: S.optional(S.String),
      status: PrivateConnectionStatus,
      certificateExpiryTime: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
    }),
).annotate({
  identifier: "PrivateConnectionSummary",
}) as any as S.Schema<PrivateConnectionSummary>;
export type PrivateConnectionSummaryList = PrivateConnectionSummary[];
export const PrivateConnectionSummaryList = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  PrivateConnectionSummary,
);
export interface ListPrivateConnectionsOutput {
  privateConnections: PrivateConnectionSummary[];
}
export const ListPrivateConnectionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ privateConnections: PrivateConnectionSummaryList }),
  ).annotate({
    identifier: "ListPrivateConnectionsOutput",
  }) as any as S.Schema<ListPrivateConnectionsOutput>;
export interface UpdatePrivateConnectionCertificateInput {
  name: string;
  certificate: string;
}
export const UpdatePrivateConnectionCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      name: S.String.pipe(T.HttpLabel("name")),
      certificate: S.String,
    }).pipe(
      T.all(
        T.Http({
          method: "POST",
          uri: "/v1/private-connections/{name}/certificate",
        }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "UpdatePrivateConnectionCertificateInput",
  }) as any as S.Schema<UpdatePrivateConnectionCertificateInput>;
export interface UpdatePrivateConnectionCertificateOutput {
  name: string;
  type: PrivateConnectionType;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  status: PrivateConnectionStatus;
  certificateExpiryTime?: Date;
}
export const UpdatePrivateConnectionCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      name: S.String,
      type: PrivateConnectionType,
      resourceGatewayId: S.optional(S.String),
      hostAddress: S.optional(S.String),
      vpcId: S.optional(S.String),
      resourceConfigurationId: S.optional(S.String),
      status: PrivateConnectionStatus,
      certificateExpiryTime: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
    }),
  ).annotate({
    identifier: "UpdatePrivateConnectionCertificateOutput",
  }) as any as S.Schema<UpdatePrivateConnectionCertificateOutput>;
export type PostRegisterServiceSupportedService =
  | "dynatrace"
  | "servicenow"
  | "pagerduty"
  | "gitlab"
  | "eventChannel"
  | "mcpservernewrelic"
  | "mcpservergrafana"
  | "mcpserverdatadog"
  | "mcpserver"
  | "mcpserversplunk"
  | "azureidentity"
  | (string & {});
export const PostRegisterServiceSupportedService =
  /*@__PURE__*/ /*#__PURE__*/ S.String;
export type ExchangeParameters = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
export const ExchangeParameters = /*@__PURE__*/ /*#__PURE__*/ S.Record(
  S.String,
  SensitiveString.pipe(S.optional),
);
export interface DynatraceOAuthClientCredentialsConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: {
    [key: string]: string | redacted.Redacted<string> | undefined;
  };
  clientSecret: string | redacted.Redacted<string>;
}
export const DynatraceOAuthClientCredentialsConfig =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      clientName: S.optional(S.String),
      clientId: SensitiveString,
      exchangeParameters: S.optional(ExchangeParameters),
      clientSecret: SensitiveString,
    }),
  ).annotate({
    identifier: "DynatraceOAuthClientCredentialsConfig",
  }) as any as S.Schema<DynatraceOAuthClientCredentialsConfig>;
export type DynatraceServiceAuthorizationConfig = {
  oAuthClientCredentials: DynatraceOAuthClientCredentialsConfig;
};
export const DynatraceServiceAuthorizationConfig =
  /*@__PURE__*/ /*#__PURE__*/ S.Union([
    S.Struct({ oAuthClientCredentials: DynatraceOAuthClientCredentialsConfig }),
  ]);
export interface DynatraceServiceDetails {
  accountUrn: string;
  authorizationConfig?: DynatraceServiceAuthorizationConfig;
}
export const DynatraceServiceDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      accountUrn: S.String,
      authorizationConfig: S.optional(DynatraceServiceAuthorizationConfig),
    }),
).annotate({
  identifier: "DynatraceServiceDetails",
}) as any as S.Schema<DynatraceServiceDetails>;
export interface ServiceNowOAuthClientCredentialsConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: {
    [key: string]: string | redacted.Redacted<string> | undefined;
  };
  clientSecret: string | redacted.Redacted<string>;
}
export const ServiceNowOAuthClientCredentialsConfig =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      clientName: S.optional(S.String),
      clientId: SensitiveString,
      exchangeParameters: S.optional(ExchangeParameters),
      clientSecret: SensitiveString,
    }),
  ).annotate({
    identifier: "ServiceNowOAuthClientCredentialsConfig",
  }) as any as S.Schema<ServiceNowOAuthClientCredentialsConfig>;
export type ServiceNowServiceAuthorizationConfig = {
  oAuthClientCredentials: ServiceNowOAuthClientCredentialsConfig;
};
export const ServiceNowServiceAuthorizationConfig =
  /*@__PURE__*/ /*#__PURE__*/ S.Union([
    S.Struct({
      oAuthClientCredentials: ServiceNowOAuthClientCredentialsConfig,
    }),
  ]);
export interface ServiceNowServiceDetails {
  instanceUrl: string;
  authorizationConfig?: ServiceNowServiceAuthorizationConfig;
}
export const ServiceNowServiceDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      instanceUrl: S.String,
      authorizationConfig: S.optional(ServiceNowServiceAuthorizationConfig),
    }),
).annotate({
  identifier: "ServiceNowServiceDetails",
}) as any as S.Schema<ServiceNowServiceDetails>;
export interface MCPServerAuthorizationDiscoveryConfig {
  returnToEndpoint: string;
}
export const MCPServerAuthorizationDiscoveryConfig =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ returnToEndpoint: S.String }),
  ).annotate({
    identifier: "MCPServerAuthorizationDiscoveryConfig",
  }) as any as S.Schema<MCPServerAuthorizationDiscoveryConfig>;
export type DatadogAuthorizationConfig = {
  authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig;
};
export const DatadogAuthorizationConfig = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig }),
]);
export interface DatadogServiceDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationConfig: DatadogAuthorizationConfig;
}
export const DatadogServiceDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    endpoint: S.String,
    description: S.optional(SensitiveString),
    authorizationConfig: DatadogAuthorizationConfig,
  }),
).annotate({
  identifier: "DatadogServiceDetails",
}) as any as S.Schema<DatadogServiceDetails>;
export type Scopes = string[];
export const Scopes = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface MCPServerOAuthClientCredentialsConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: {
    [key: string]: string | redacted.Redacted<string> | undefined;
  };
  clientSecret: string | redacted.Redacted<string>;
  exchangeUrl: string;
  scopes?: string[];
}
export const MCPServerOAuthClientCredentialsConfig =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      clientName: S.optional(S.String),
      clientId: SensitiveString,
      exchangeParameters: S.optional(ExchangeParameters),
      clientSecret: SensitiveString,
      exchangeUrl: S.String,
      scopes: S.optional(Scopes),
    }),
  ).annotate({
    identifier: "MCPServerOAuthClientCredentialsConfig",
  }) as any as S.Schema<MCPServerOAuthClientCredentialsConfig>;
export interface MCPServerOAuth3LOConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: {
    [key: string]: string | redacted.Redacted<string> | undefined;
  };
  returnToEndpoint: string;
  authorizationUrl: string;
  exchangeUrl: string;
  clientSecret?: string | redacted.Redacted<string>;
  supportCodeChallenge?: boolean;
  scopes?: string[];
}
export const MCPServerOAuth3LOConfig = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      clientName: S.optional(S.String),
      clientId: SensitiveString,
      exchangeParameters: S.optional(ExchangeParameters),
      returnToEndpoint: S.String,
      authorizationUrl: S.String,
      exchangeUrl: S.String,
      clientSecret: S.optional(SensitiveString),
      supportCodeChallenge: S.optional(S.Boolean),
      scopes: S.optional(Scopes),
    }),
).annotate({
  identifier: "MCPServerOAuth3LOConfig",
}) as any as S.Schema<MCPServerOAuth3LOConfig>;
export interface MCPServerAPIKeyConfig {
  apiKeyName: string;
  apiKeyValue: string | redacted.Redacted<string>;
  apiKeyHeader: string;
}
export const MCPServerAPIKeyConfig = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    apiKeyName: S.String,
    apiKeyValue: SensitiveString,
    apiKeyHeader: S.String,
  }),
).annotate({
  identifier: "MCPServerAPIKeyConfig",
}) as any as S.Schema<MCPServerAPIKeyConfig>;
export interface MCPServerBearerTokenConfig {
  tokenName: string;
  tokenValue: string | redacted.Redacted<string>;
  authorizationHeader?: string;
}
export const MCPServerBearerTokenConfig = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      tokenName: S.String,
      tokenValue: SensitiveString,
      authorizationHeader: S.optional(S.String),
    }),
).annotate({
  identifier: "MCPServerBearerTokenConfig",
}) as any as S.Schema<MCPServerBearerTokenConfig>;
export type MCPServerAuthorizationConfig =
  | {
      oAuthClientCredentials: MCPServerOAuthClientCredentialsConfig;
      oAuth3LO?: never;
      apiKey?: never;
      bearerToken?: never;
      authorizationDiscovery?: never;
    }
  | {
      oAuthClientCredentials?: never;
      oAuth3LO: MCPServerOAuth3LOConfig;
      apiKey?: never;
      bearerToken?: never;
      authorizationDiscovery?: never;
    }
  | {
      oAuthClientCredentials?: never;
      oAuth3LO?: never;
      apiKey: MCPServerAPIKeyConfig;
      bearerToken?: never;
      authorizationDiscovery?: never;
    }
  | {
      oAuthClientCredentials?: never;
      oAuth3LO?: never;
      apiKey?: never;
      bearerToken: MCPServerBearerTokenConfig;
      authorizationDiscovery?: never;
    }
  | {
      oAuthClientCredentials?: never;
      oAuth3LO?: never;
      apiKey?: never;
      bearerToken?: never;
      authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig;
    };
export const MCPServerAuthorizationConfig = /*@__PURE__*/ /*#__PURE__*/ S.Union(
  [
    S.Struct({ oAuthClientCredentials: MCPServerOAuthClientCredentialsConfig }),
    S.Struct({ oAuth3LO: MCPServerOAuth3LOConfig }),
    S.Struct({ apiKey: MCPServerAPIKeyConfig }),
    S.Struct({ bearerToken: MCPServerBearerTokenConfig }),
    S.Struct({ authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig }),
  ],
);
export interface MCPServerDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationConfig: MCPServerAuthorizationConfig;
}
export const MCPServerDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    endpoint: S.String,
    description: S.optional(SensitiveString),
    authorizationConfig: MCPServerAuthorizationConfig,
  }),
).annotate({
  identifier: "MCPServerDetails",
}) as any as S.Schema<MCPServerDetails>;
export type GitLabTokenType = "personal" | "group" | (string & {});
export const GitLabTokenType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface GitLabDetails {
  targetUrl: string;
  tokenType: GitLabTokenType;
  tokenValue: string | redacted.Redacted<string>;
  groupId?: string;
}
export const GitLabDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    targetUrl: S.String,
    tokenType: GitLabTokenType,
    tokenValue: SensitiveString,
    groupId: S.optional(S.String),
  }),
).annotate({ identifier: "GitLabDetails" }) as any as S.Schema<GitLabDetails>;
export type NewRelicRegion = "US" | "EU" | (string & {});
export const NewRelicRegion = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type NewRelicApplicationIds = string[];
export const NewRelicApplicationIds = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  S.String,
);
export type NewRelicEntityGuids = string[];
export const NewRelicEntityGuids = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  S.String,
);
export type NewRelicAlertPolicyIds = string[];
export const NewRelicAlertPolicyIds = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  S.String,
);
export interface NewRelicApiKeyConfig {
  apiKey: string | redacted.Redacted<string>;
  accountId: string;
  region: NewRelicRegion;
  applicationIds?: string[];
  entityGuids?: string[];
  alertPolicyIds?: string[];
}
export const NewRelicApiKeyConfig = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    apiKey: SensitiveString,
    accountId: S.String,
    region: NewRelicRegion,
    applicationIds: S.optional(NewRelicApplicationIds),
    entityGuids: S.optional(NewRelicEntityGuids),
    alertPolicyIds: S.optional(NewRelicAlertPolicyIds),
  }),
).annotate({
  identifier: "NewRelicApiKeyConfig",
}) as any as S.Schema<NewRelicApiKeyConfig>;
export type NewRelicServiceAuthorizationConfig = {
  apiKey: NewRelicApiKeyConfig;
};
export const NewRelicServiceAuthorizationConfig =
  /*@__PURE__*/ /*#__PURE__*/ S.Union([
    S.Struct({ apiKey: NewRelicApiKeyConfig }),
  ]);
export interface NewRelicServiceDetails {
  authorizationConfig: NewRelicServiceAuthorizationConfig;
}
export const NewRelicServiceDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ authorizationConfig: NewRelicServiceAuthorizationConfig }),
).annotate({
  identifier: "NewRelicServiceDetails",
}) as any as S.Schema<NewRelicServiceDetails>;
export type EventChannelType = "webhook" | (string & {});
export const EventChannelType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface EventChannelDetails {
  type?: EventChannelType;
}
export const EventChannelDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ type: S.optional(EventChannelType) }),
).annotate({
  identifier: "EventChannelDetails",
}) as any as S.Schema<EventChannelDetails>;
export interface GrafanaServiceDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationConfig: MCPServerAuthorizationConfig;
}
export const GrafanaServiceDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    endpoint: S.String,
    description: S.optional(SensitiveString),
    authorizationConfig: MCPServerAuthorizationConfig,
  }),
).annotate({
  identifier: "GrafanaServiceDetails",
}) as any as S.Schema<GrafanaServiceDetails>;
export type PagerDutyScopes = string[];
export const PagerDutyScopes = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface PagerDutyOAuthClientCredentialsConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: {
    [key: string]: string | redacted.Redacted<string> | undefined;
  };
  clientSecret: string | redacted.Redacted<string>;
}
export const PagerDutyOAuthClientCredentialsConfig =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      clientName: S.optional(S.String),
      clientId: SensitiveString,
      exchangeParameters: S.optional(ExchangeParameters),
      clientSecret: SensitiveString,
    }),
  ).annotate({
    identifier: "PagerDutyOAuthClientCredentialsConfig",
  }) as any as S.Schema<PagerDutyOAuthClientCredentialsConfig>;
export type PagerDutyAuthorizationConfig = {
  oAuthClientCredentials: PagerDutyOAuthClientCredentialsConfig;
};
export const PagerDutyAuthorizationConfig = /*@__PURE__*/ /*#__PURE__*/ S.Union(
  [S.Struct({ oAuthClientCredentials: PagerDutyOAuthClientCredentialsConfig })],
);
export interface PagerDutyDetails {
  scopes: string[];
  authorizationConfig: PagerDutyAuthorizationConfig;
}
export const PagerDutyDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    scopes: PagerDutyScopes,
    authorizationConfig: PagerDutyAuthorizationConfig,
  }),
).annotate({
  identifier: "PagerDutyDetails",
}) as any as S.Schema<PagerDutyDetails>;
export type WebIdentityTokenAudienceList = string[];
export const WebIdentityTokenAudienceList = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  S.String,
);
export interface RegisteredAzureIdentityDetails {
  tenantId: string;
  clientId: string;
  webIdentityRoleArn: string;
  webIdentityTokenAudiences: string[];
}
export const RegisteredAzureIdentityDetails =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      tenantId: S.String,
      clientId: S.String,
      webIdentityRoleArn: S.String,
      webIdentityTokenAudiences: WebIdentityTokenAudienceList,
    }),
  ).annotate({
    identifier: "RegisteredAzureIdentityDetails",
  }) as any as S.Schema<RegisteredAzureIdentityDetails>;
export type ServiceDetails =
  | {
      dynatrace: DynatraceServiceDetails;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow: ServiceNowServiceDetails;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog: DatadogServiceDetails;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver: MCPServerDetails;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab: GitLabDetails;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk: MCPServerDetails;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic: NewRelicServiceDetails;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel: EventChannelDetails;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana: GrafanaServiceDetails;
      pagerduty?: never;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty: PagerDutyDetails;
      azureidentity?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity: RegisteredAzureIdentityDetails;
    };
export const ServiceDetails = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ dynatrace: DynatraceServiceDetails }),
  S.Struct({ servicenow: ServiceNowServiceDetails }),
  S.Struct({ mcpserverdatadog: DatadogServiceDetails }),
  S.Struct({ mcpserver: MCPServerDetails }),
  S.Struct({ gitlab: GitLabDetails }),
  S.Struct({ mcpserversplunk: MCPServerDetails }),
  S.Struct({ mcpservernewrelic: NewRelicServiceDetails }),
  S.Struct({ eventChannel: EventChannelDetails }),
  S.Struct({ mcpservergrafana: GrafanaServiceDetails }),
  S.Struct({ pagerduty: PagerDutyDetails }),
  S.Struct({ azureidentity: RegisteredAzureIdentityDetails }),
]);
export interface RegisterServiceInput {
  service: PostRegisterServiceSupportedService;
  serviceDetails: ServiceDetails;
  kmsKeyArn?: string;
  privateConnectionName?: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export const RegisterServiceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    service: PostRegisterServiceSupportedService.pipe(T.HttpLabel("service")),
    serviceDetails: ServiceDetails,
    kmsKeyArn: S.optional(S.String),
    privateConnectionName: S.optional(S.String),
    name: S.optional(S.String),
    tags: S.optional(Tags),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v1/register/{service}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "RegisterServiceInput",
}) as any as S.Schema<RegisterServiceInput>;
export interface OAuthAdditionalStepDetails {
  authorizationUrl: string;
}
export const OAuthAdditionalStepDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ authorizationUrl: S.String }),
).annotate({
  identifier: "OAuthAdditionalStepDetails",
}) as any as S.Schema<OAuthAdditionalStepDetails>;
export type AdditionalServiceRegistrationStep = {
  oauth: OAuthAdditionalStepDetails;
};
export const AdditionalServiceRegistrationStep =
  /*@__PURE__*/ /*#__PURE__*/ S.Union([
    S.Struct({ oauth: OAuthAdditionalStepDetails }),
  ]);
export interface RegisterServiceOutput {
  serviceId?: string;
  additionalStep?: AdditionalServiceRegistrationStep;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
}
export const RegisterServiceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    serviceId: S.optional(S.String),
    additionalStep: S.optional(AdditionalServiceRegistrationStep),
    kmsKeyArn: S.optional(S.String),
    tags: S.optional(Tags),
  }),
).annotate({
  identifier: "RegisterServiceOutput",
}) as any as S.Schema<RegisterServiceOutput>;
export interface GetServiceInput {
  serviceId: string;
}
export const GetServiceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ serviceId: S.String.pipe(T.HttpLabel("serviceId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/v1/services/{serviceId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetServiceInput",
}) as any as S.Schema<GetServiceInput>;
export type Service =
  | "github"
  | "slack"
  | "azure"
  | "azuredevops"
  | "dynatrace"
  | "servicenow"
  | "pagerduty"
  | "gitlab"
  | "eventChannel"
  | "mcpservernewrelic"
  | "mcpservergrafana"
  | "mcpserverdatadog"
  | "mcpserver"
  | "mcpserversplunk"
  | "azureidentity"
  | (string & {});
export const Service = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type DocumentList = any[];
export const DocumentList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.Any);
export interface RegisteredGithubServiceDetails {
  owner: string;
  ownerType: GithubRepoOwnerType;
  targetUrl?: string;
}
export const RegisteredGithubServiceDetails =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      owner: S.String,
      ownerType: GithubRepoOwnerType,
      targetUrl: S.optional(S.String),
    }),
  ).annotate({
    identifier: "RegisteredGithubServiceDetails",
  }) as any as S.Schema<RegisteredGithubServiceDetails>;
export interface RegisteredSlackServiceDetails {
  teamId: string;
  teamName: string;
}
export const RegisteredSlackServiceDetails =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ teamId: S.String, teamName: S.String }),
  ).annotate({
    identifier: "RegisteredSlackServiceDetails",
  }) as any as S.Schema<RegisteredSlackServiceDetails>;
export type MCPServerAuthorizationMethod =
  | "oauth-client-credentials"
  | "oauth-3lo"
  | "api-key"
  | "bearer-token"
  | (string & {});
export const MCPServerAuthorizationMethod =
  /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface RegisteredMCPServerDetails {
  name: string;
  endpoint: string;
  authorizationMethod: MCPServerAuthorizationMethod;
  description?: string | redacted.Redacted<string>;
  apiKeyHeader?: string;
}
export const RegisteredMCPServerDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      name: S.String,
      endpoint: S.String,
      authorizationMethod: MCPServerAuthorizationMethod,
      description: S.optional(SensitiveString),
      apiKeyHeader: S.optional(S.String),
    }),
).annotate({
  identifier: "RegisteredMCPServerDetails",
}) as any as S.Schema<RegisteredMCPServerDetails>;
export interface RegisteredServiceNowDetails {
  instanceUrl?: string;
}
export const RegisteredServiceNowDetails =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ instanceUrl: S.optional(S.String) }),
  ).annotate({
    identifier: "RegisteredServiceNowDetails",
  }) as any as S.Schema<RegisteredServiceNowDetails>;
export interface RegisteredGitLabServiceDetails {
  targetUrl: string;
  tokenType: GitLabTokenType;
  groupId?: string;
}
export const RegisteredGitLabServiceDetails =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      targetUrl: S.String,
      tokenType: GitLabTokenType,
      groupId: S.optional(S.String),
    }),
  ).annotate({
    identifier: "RegisteredGitLabServiceDetails",
  }) as any as S.Schema<RegisteredGitLabServiceDetails>;
export interface RegisteredNewRelicDetails {
  accountId: string;
  region: NewRelicRegion;
  description?: string | redacted.Redacted<string>;
}
export const RegisteredNewRelicDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      accountId: S.String,
      region: NewRelicRegion,
      description: S.optional(SensitiveString),
    }),
).annotate({
  identifier: "RegisteredNewRelicDetails",
}) as any as S.Schema<RegisteredNewRelicDetails>;
export interface RegisteredAzureDevOpsServiceDetails {
  organizationName: string;
}
export const RegisteredAzureDevOpsServiceDetails =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ organizationName: S.String }),
  ).annotate({
    identifier: "RegisteredAzureDevOpsServiceDetails",
  }) as any as S.Schema<RegisteredAzureDevOpsServiceDetails>;
export interface RegisteredGrafanaServerDetails {
  endpoint: string;
  authorizationMethod: MCPServerAuthorizationMethod;
}
export const RegisteredGrafanaServerDetails =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      endpoint: S.String,
      authorizationMethod: MCPServerAuthorizationMethod,
    }),
  ).annotate({
    identifier: "RegisteredGrafanaServerDetails",
  }) as any as S.Schema<RegisteredGrafanaServerDetails>;
export type PagerDutyScopesList = string[];
export const PagerDutyScopesList = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  S.String,
);
export interface RegisteredPagerDutyDetails {
  scopes: string[];
}
export const RegisteredPagerDutyDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ scopes: PagerDutyScopesList }),
).annotate({
  identifier: "RegisteredPagerDutyDetails",
}) as any as S.Schema<RegisteredPagerDutyDetails>;
export type AdditionalServiceDetails =
  | {
      github: RegisteredGithubServiceDetails;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack: RegisteredSlackServiceDetails;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog: RegisteredMCPServerDetails;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver: RegisteredMCPServerDetails;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow: RegisteredServiceNowDetails;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab: RegisteredGitLabServiceDetails;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk: RegisteredMCPServerDetails;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic: RegisteredNewRelicDetails;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops: RegisteredAzureDevOpsServiceDetails;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity: RegisteredAzureIdentityDetails;
      mcpservergrafana?: never;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana: RegisteredGrafanaServerDetails;
      pagerduty?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty: RegisteredPagerDutyDetails;
    };
export const AdditionalServiceDetails = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ github: RegisteredGithubServiceDetails }),
  S.Struct({ slack: RegisteredSlackServiceDetails }),
  S.Struct({ mcpserverdatadog: RegisteredMCPServerDetails }),
  S.Struct({ mcpserver: RegisteredMCPServerDetails }),
  S.Struct({ servicenow: RegisteredServiceNowDetails }),
  S.Struct({ gitlab: RegisteredGitLabServiceDetails }),
  S.Struct({ mcpserversplunk: RegisteredMCPServerDetails }),
  S.Struct({ mcpservernewrelic: RegisteredNewRelicDetails }),
  S.Struct({ azuredevops: RegisteredAzureDevOpsServiceDetails }),
  S.Struct({ azureidentity: RegisteredAzureIdentityDetails }),
  S.Struct({ mcpservergrafana: RegisteredGrafanaServerDetails }),
  S.Struct({ pagerduty: RegisteredPagerDutyDetails }),
]);
export interface RegisteredService {
  serviceId: string;
  serviceType: Service;
  name?: string;
  accessibleResources?: any[];
  additionalServiceDetails?: AdditionalServiceDetails;
  kmsKeyArn?: string;
  privateConnectionName?: string;
}
export const RegisteredService = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    serviceId: S.String,
    serviceType: Service,
    name: S.optional(S.String),
    accessibleResources: S.optional(DocumentList),
    additionalServiceDetails: S.optional(AdditionalServiceDetails),
    kmsKeyArn: S.optional(S.String),
    privateConnectionName: S.optional(S.String),
  }),
).annotate({
  identifier: "RegisteredService",
}) as any as S.Schema<RegisteredService>;
export interface GetServiceOutput {
  service: RegisteredService;
  tags?: { [key: string]: string | undefined };
}
export const GetServiceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ service: RegisteredService, tags: S.optional(Tags) }),
).annotate({
  identifier: "GetServiceOutput",
}) as any as S.Schema<GetServiceOutput>;
export interface DeregisterServiceInput {
  serviceId: string;
}
export const DeregisterServiceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ serviceId: S.String.pipe(T.HttpLabel("serviceId")) }).pipe(
      T.all(
        T.Http({ method: "DELETE", uri: "/v1/services/{serviceId}" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "DeregisterServiceInput",
}) as any as S.Schema<DeregisterServiceInput>;
export interface DeregisterServiceOutput {}
export const DeregisterServiceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "DeregisterServiceOutput",
}) as any as S.Schema<DeregisterServiceOutput>;
export interface ListServicesInput {
  maxResults?: number;
  nextToken?: string;
  filterServiceType?: Service;
}
export const ListServicesInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    filterServiceType: S.optional(Service).pipe(
      T.HttpQuery("filterServiceType"),
    ),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v1/services/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListServicesInput",
}) as any as S.Schema<ListServicesInput>;
export type RegisteredServicesList = RegisteredService[];
export const RegisteredServicesList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(RegisteredService);
export interface ListServicesOutput {
  nextToken?: string;
  services: RegisteredService[];
}
export const ListServicesOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    services: RegisteredServicesList,
  }),
).annotate({
  identifier: "ListServicesOutput",
}) as any as S.Schema<ListServicesOutput>;

//# Errors
export class AccessDeniedException extends S.TaggedErrorClass<AccessDeniedException>()(
  "AccessDeniedException",
  { message: S.String },
).pipe(C.withAuthError) {}
export class ConflictException extends S.TaggedErrorClass<ConflictException>()(
  "ConflictException",
  { message: S.String },
).pipe(C.withConflictError) {}
export class InternalServerException extends S.TaggedErrorClass<InternalServerException>()(
  "InternalServerException",
  { message: S.String },
  T.Retryable(),
).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException extends S.TaggedErrorClass<ResourceNotFoundException>()(
  "ResourceNotFoundException",
  { message: S.String },
).pipe(C.withBadRequestError) {}
export class ThrottlingException extends S.TaggedErrorClass<ThrottlingException>()(
  "ThrottlingException",
  { message: S.String },
  T.Retryable(),
).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException extends S.TaggedErrorClass<ValidationException>()(
  "ValidationException",
  { message: S.String, fieldList: S.optional(ValidationExceptionFieldList) },
) {}
export class ServiceQuotaExceededException extends S.TaggedErrorClass<ServiceQuotaExceededException>()(
  "ServiceQuotaExceededException",
  { message: S.String },
).pipe(C.withQuotaError) {}
export class InvalidParameterException extends S.TaggedErrorClass<InvalidParameterException>()(
  "InvalidParameterException",
  { message: S.String },
).pipe(C.withBadRequestError) {}
export class IdentityCenterServiceException extends S.TaggedErrorClass<IdentityCenterServiceException>()(
  "IdentityCenterServiceException",
  { message: S.String, underlyingErrorCode: S.optional(S.String) },
).pipe(C.withBadRequestError) {}

//# Operations
export type AllowVendedLogDeliveryForResourceError = CommonErrors;
/**
 * Authorize Ingestion Hub subscription operation.
 */
export const allowVendedLogDeliveryForResource: API.OperationMethod<
  AllowVendedLogDeliveryForResourceInput,
  AllowVendedLogDeliveryForResourceOutput,
  AllowVendedLogDeliveryForResourceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AllowVendedLogDeliveryForResourceInput,
  output: AllowVendedLogDeliveryForResourceOutput,
  errors: [],
}));
export type CreateBacklogTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new backlog task in the specified agent space
 */
export const createBacklogTask: API.OperationMethod<
  CreateBacklogTaskRequest,
  CreateBacklogTaskResponse,
  CreateBacklogTaskError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBacklogTaskRequest,
  output: CreateBacklogTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type CreateChatError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new chat execution in the specified agent space
 */
export const createChat: API.OperationMethod<
  CreateChatRequest,
  CreateChatResponse,
  CreateChatError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateChatRequest,
  output: CreateChatResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type GetAccountUsageError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves monthly account usage metrics and limits for the AWS account.
 */
export const getAccountUsage: API.OperationMethod<
  GetAccountUsageInput,
  GetAccountUsageOutput,
  GetAccountUsageError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountUsageInput,
  output: GetAccountUsageOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type GetBacklogTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a backlog task for the specified agent space and task id
 */
export const getBacklogTask: API.OperationMethod<
  GetBacklogTaskRequest,
  GetBacklogTaskResponse,
  GetBacklogTaskError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBacklogTaskRequest,
  output: GetBacklogTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type GetRecommendationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a specific recommendation by its ID
 */
export const getRecommendation: API.OperationMethod<
  GetRecommendationRequest,
  GetRecommendationResponse,
  GetRecommendationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRecommendationRequest,
  output: GetRecommendationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListBacklogTasksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists backlog tasks in the specified agent space with optional filtering and sorting
 */
export const listBacklogTasks: API.OperationMethod<
  ListBacklogTasksRequest,
  ListBacklogTasksResponse,
  ListBacklogTasksError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListBacklogTasksRequest,
  ) => stream.Stream<
    ListBacklogTasksResponse,
    ListBacklogTasksError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListBacklogTasksRequest,
  ) => stream.Stream<
    Task,
    ListBacklogTasksError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBacklogTasksRequest,
  output: ListBacklogTasksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tasks",
    pageSize: "limit",
  } as const,
}));
export type ListChatsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of the user's recent chat executions
 */
export const listChats: API.OperationMethod<
  ListChatsRequest,
  ListChatsResponse,
  ListChatsError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListChatsRequest,
  output: ListChatsResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListExecutionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List executions
 */
export const listExecutions: API.OperationMethod<
  ListExecutionsRequest,
  ListExecutionsResponse,
  ListExecutionsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListExecutionsRequest,
  ) => stream.Stream<
    ListExecutionsResponse,
    ListExecutionsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListExecutionsRequest,
  ) => stream.Stream<
    Execution,
    ListExecutionsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListExecutionsRequest,
  output: ListExecutionsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "executions",
    pageSize: "limit",
  } as const,
}));
export type ListGoalsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists goals in the specified agent space with optional filtering
 */
export const listGoals: API.OperationMethod<
  ListGoalsRequest,
  ListGoalsResponse,
  ListGoalsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListGoalsRequest,
  ) => stream.Stream<
    ListGoalsResponse,
    ListGoalsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListGoalsRequest,
  ) => stream.Stream<
    Goal,
    ListGoalsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListGoalsRequest,
  output: ListGoalsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "goals",
    pageSize: "limit",
  } as const,
}));
export type ListJournalRecordsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List journal records for a specific execution
 */
export const listJournalRecords: API.OperationMethod<
  ListJournalRecordsRequest,
  ListJournalRecordsResponse,
  ListJournalRecordsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListJournalRecordsRequest,
  ) => stream.Stream<
    ListJournalRecordsResponse,
    ListJournalRecordsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListJournalRecordsRequest,
  ) => stream.Stream<
    JournalRecord,
    ListJournalRecordsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListJournalRecordsRequest,
  output: ListJournalRecordsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "records",
    pageSize: "limit",
  } as const,
}));
export type ListPendingMessagesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List pending messages for a specific execution.
 */
export const listPendingMessages: API.OperationMethod<
  ListPendingMessagesRequest,
  ListPendingMessagesResponse,
  ListPendingMessagesError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPendingMessagesRequest,
  output: ListPendingMessagesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists recommendations for the specified agent space
 */
export const listRecommendations: API.OperationMethod<
  ListRecommendationsRequest,
  ListRecommendationsResponse,
  ListRecommendationsError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListRecommendationsRequest,
  output: ListRecommendationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists tags for the specified AWS DevOps Agent resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
}));
export type SendMessageError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a chat message and streams the response for the specified agent space execution
 */
export const sendMessage: API.OperationMethod<
  SendMessageRequest,
  SendMessageResponse,
  SendMessageError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendMessageRequest,
  output: SendMessageResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds or overwrites tags for the specified AWS DevOps Agent resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
}));
export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from the specified AWS DevOps Agent resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
}));
export type UpdateBacklogTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update an existing backlog task.
 */
export const updateBacklogTask: API.OperationMethod<
  UpdateBacklogTaskRequest,
  UpdateBacklogTaskResponse,
  UpdateBacklogTaskError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateBacklogTaskRequest,
  output: UpdateBacklogTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type UpdateGoalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update an existing goal
 */
export const updateGoal: API.OperationMethod<
  UpdateGoalRequest,
  UpdateGoalResponse,
  UpdateGoalError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGoalRequest,
  output: UpdateGoalResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type UpdateRecommendationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing recommendation with new content, status, or metadata
 */
export const updateRecommendation: API.OperationMethod<
  UpdateRecommendationRequest,
  UpdateRecommendationResponse,
  UpdateRecommendationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRecommendationRequest,
  output: UpdateRecommendationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type CreateAgentSpaceError =
  | ConflictException
  | InternalServerException
  | InvalidParameterException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new AgentSpace with the specified name and description. Duplicate space names are allowed.
 */
export const createAgentSpace: API.OperationMethod<
  CreateAgentSpaceInput,
  CreateAgentSpaceOutput,
  CreateAgentSpaceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAgentSpaceInput,
  output: CreateAgentSpaceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    InvalidParameterException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type GetAgentSpaceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific AgentSpace.
 */
export const getAgentSpace: API.OperationMethod<
  GetAgentSpaceInput,
  GetAgentSpaceOutput,
  GetAgentSpaceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAgentSpaceInput,
  output: GetAgentSpaceOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type UpdateAgentSpaceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the information of an existing AgentSpace.
 */
export const updateAgentSpace: API.OperationMethod<
  UpdateAgentSpaceInput,
  UpdateAgentSpaceOutput,
  UpdateAgentSpaceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAgentSpaceInput,
  output: UpdateAgentSpaceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type DeleteAgentSpaceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an AgentSpace. This operation is idempotent and returns a 204 No Content response on success.
 */
export const deleteAgentSpace: API.OperationMethod<
  DeleteAgentSpaceInput,
  DeleteAgentSpaceOutput,
  DeleteAgentSpaceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAgentSpaceInput,
  output: DeleteAgentSpaceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type DisableOperatorAppError =
  | IdentityCenterServiceException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disable the Operator App for the specified AgentSpace
 */
export const disableOperatorApp: API.OperationMethod<
  DisableOperatorAppInput,
  DisableOperatorAppResponse,
  DisableOperatorAppError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableOperatorAppInput,
  output: DisableOperatorAppResponse,
  errors: [
    IdentityCenterServiceException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type EnableOperatorAppError =
  | IdentityCenterServiceException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enable the Operator App to access the given AgentSpace
 */
export const enableOperatorApp: API.OperationMethod<
  EnableOperatorAppInput,
  EnableOperatorAppOutput,
  EnableOperatorAppError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableOperatorAppInput,
  output: EnableOperatorAppOutput,
  errors: [
    IdentityCenterServiceException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type GetOperatorAppError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the full auth configuration of operator including any enabled auth flow
 */
export const getOperatorApp: API.OperationMethod<
  GetOperatorAppInput,
  GetOperatorAppOutput,
  GetOperatorAppError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperatorAppInput,
  output: GetOperatorAppOutput,
  errors: [InternalServerException, ThrottlingException, ValidationException],
}));
export type UpdateOperatorAppIdpConfigError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the external Identity Provider configuration for the Operator App
 */
export const updateOperatorAppIdpConfig: API.OperationMethod<
  UpdateOperatorAppIdpConfigInput,
  UpdateOperatorAppIdpConfigOutput,
  UpdateOperatorAppIdpConfigError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOperatorAppIdpConfigInput,
  output: UpdateOperatorAppIdpConfigOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListAgentSpacesError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all AgentSpaces with optional pagination.
 */
export const listAgentSpaces: API.OperationMethod<
  ListAgentSpacesInput,
  ListAgentSpacesOutput,
  ListAgentSpacesError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListAgentSpacesInput,
  ) => stream.Stream<
    ListAgentSpacesOutput,
    ListAgentSpacesError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListAgentSpacesInput,
  ) => stream.Stream<
    AgentSpace,
    ListAgentSpacesError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAgentSpacesInput,
  output: ListAgentSpacesOutput,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentSpaces",
    pageSize: "maxResults",
  } as const,
}));
export type AssociateServiceError =
  | ConflictException
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a specific service association to an AgentSpace. It overwrites the existing association of the same service. Returns 201 Created on success.
 */
export const associateService: API.OperationMethod<
  AssociateServiceInput,
  AssociateServiceOutput,
  AssociateServiceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AssociateServiceInput,
  output: AssociateServiceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type GetAssociationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves given associations configured for a specific AgentSpace.
 */
export const getAssociation: API.OperationMethod<
  GetAssociationInput,
  GetAssociationOutput,
  GetAssociationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAssociationInput,
  output: GetAssociationOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type UpdateAssociationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Partially updates the configuration of an existing service association for an AgentSpace. Present fields are fully replaced; absent fields are left unchanged. Returns 200 OK on success.
 */
export const updateAssociation: API.OperationMethod<
  UpdateAssociationInput,
  UpdateAssociationOutput,
  UpdateAssociationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAssociationInput,
  output: UpdateAssociationOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type DisassociateServiceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specific service association from an AgentSpace. This operation is idempotent and returns a 204 No Content response on success.
 */
export const disassociateService: API.OperationMethod<
  DisassociateServiceInput,
  DisassociateServiceOutput,
  DisassociateServiceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisassociateServiceInput,
  output: DisassociateServiceOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListWebhooksError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all webhooks for given Association
 */
export const listWebhooks: API.OperationMethod<
  ListWebhooksInput,
  ListWebhooksOutput,
  ListWebhooksError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListWebhooksInput,
  output: ListWebhooksOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListAssociationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all associations for given AgentSpace
 */
export const listAssociations: API.OperationMethod<
  ListAssociationsInput,
  ListAssociationsOutput,
  ListAssociationsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListAssociationsInput,
  ) => stream.Stream<
    ListAssociationsOutput,
    ListAssociationsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListAssociationsInput,
  ) => stream.Stream<
    Association,
    ListAssociationsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAssociationsInput,
  output: ListAssociationsOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "associations",
    pageSize: "maxResults",
  } as const,
}));
export type ValidateAwsAssociationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Validates an aws association and set status and returns a 204 No Content response on success.
 */
export const validateAwsAssociations: API.OperationMethod<
  ValidateAwsAssociationsInput,
  ValidateAwsAssociationsOutput,
  ValidateAwsAssociationsError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateAwsAssociationsInput,
  output: ValidateAwsAssociationsOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type CreatePrivateConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Private Connection to a target resource.
 */
export const createPrivateConnection: API.OperationMethod<
  CreatePrivateConnectionInput,
  CreatePrivateConnectionOutput,
  CreatePrivateConnectionError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePrivateConnectionInput,
  output: CreatePrivateConnectionOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type DescribePrivateConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details of an existing Private Connection.
 */
export const describePrivateConnection: API.OperationMethod<
  DescribePrivateConnectionInput,
  DescribePrivateConnectionOutput,
  DescribePrivateConnectionError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DescribePrivateConnectionInput,
  output: DescribePrivateConnectionOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type DeletePrivateConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Private Connection. The deletion is asynchronous and returns DELETE_IN_PROGRESS status.
 */
export const deletePrivateConnection: API.OperationMethod<
  DeletePrivateConnectionInput,
  DeletePrivateConnectionOutput,
  DeletePrivateConnectionError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePrivateConnectionInput,
  output: DeletePrivateConnectionOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListPrivateConnectionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Private Connections in the caller's account.
 */
export const listPrivateConnections: API.OperationMethod<
  ListPrivateConnectionsInput,
  ListPrivateConnectionsOutput,
  ListPrivateConnectionsError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPrivateConnectionsInput,
  output: ListPrivateConnectionsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type UpdatePrivateConnectionCertificateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the certificate associated with a Private Connection.
 */
export const updatePrivateConnectionCertificate: API.OperationMethod<
  UpdatePrivateConnectionCertificateInput,
  UpdatePrivateConnectionCertificateOutput,
  UpdatePrivateConnectionCertificateError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePrivateConnectionCertificateInput,
  output: UpdatePrivateConnectionCertificateOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type RegisterServiceError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * This operation registers the specified service
 */
export const registerService: API.OperationMethod<
  RegisterServiceInput,
  RegisterServiceOutput,
  RegisterServiceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RegisterServiceInput,
  output: RegisterServiceOutput,
  errors: [
    InternalServerException,
    InvalidParameterException,
    ResourceNotFoundException,
    ValidationException,
  ],
}));
export type GetServiceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves given service by it's unique identifier
 */
export const getService: API.OperationMethod<
  GetServiceInput,
  GetServiceOutput,
  GetServiceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetServiceInput,
  output: GetServiceOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type DeregisterServiceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deregister a service
 */
export const deregisterService: API.OperationMethod<
  DeregisterServiceInput,
  DeregisterServiceOutput,
  DeregisterServiceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeregisterServiceInput,
  output: DeregisterServiceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListServicesError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List a list of registered service on the account level.
 */
export const listServices: API.OperationMethod<
  ListServicesInput,
  ListServicesOutput,
  ListServicesError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListServicesInput,
  ) => stream.Stream<
    ListServicesOutput,
    ListServicesError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListServicesInput,
  ) => stream.Stream<
    RegisteredService,
    ListServicesError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListServicesInput,
  output: ListServicesOutput,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "services",
    pageSize: "maxResults",
  } as const,
}));
