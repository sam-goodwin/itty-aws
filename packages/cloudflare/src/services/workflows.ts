/**
 * Cloudflare WORKFLOWS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service workflows
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class InstanceAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InstanceAlreadyExists>()("InstanceAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10405 }],
) {}

export class InstanceCannotTerminate extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InstanceCannotTerminate>()(
    "InstanceCannotTerminate",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10401 }],
) {}

export class InstanceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InstanceNotFound>()("InstanceNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10201 }, { code: 10400 }],
) {}

export class InvalidBody extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidBody>()("InvalidBody", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10002 }],
) {}

export class InvalidRoute extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRoute>()("InvalidRoute", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class VersionNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<VersionNotFound>()("VersionNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10300 }],
) {}

export class WorkflowInternalError extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WorkflowInternalError>()("WorkflowInternalError", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10001 }],
) {}

export class WorkflowNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WorkflowNotFound>()("WorkflowNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10200 }],
) {}

// =============================================================================
// Instance
// =============================================================================

export interface GetInstanceRequest {
  workflowName: string;
  instanceId: string;
  /** Path param */
  accountId: string;
  /** Query param: Step ordering: "asc" (default, oldest first) or "desc" (newest first). */
  order?: "asc" | "desc" | (string & {});
  /** Query param: When true, omits step details and returns only metadata with step_count. */
  simple?: true | false;
}

export const GetInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      instanceId: Schema.String.pipe(T.HttpPath("instanceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      order: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("order")),
      simple: Schema.optional(Schema.Literals([true, false])).pipe(
        T.HttpQuery("simple"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workflows/{workflowName}/instances/{instanceId}",
      }),
    ),
) as unknown as Schema.Schema<GetInstanceRequest>;

export interface GetInstanceResponse {
  end: string | null;
  error: { message: string; name: string } | null;
  output: string | number | null;
  params: unknown;
  queued: string;
  rollback: {
    error: { message: string; name: string } | null;
    outcome: "complete" | "failed" | (string & {});
  } | null;
  start: string | null;
  status:
    | "queued"
    | "running"
    | "paused"
    | "errored"
    | "terminated"
    | "complete"
    | "waitingForPause"
    | "waiting"
    | "rollingBack"
    | (string & {});
  stepCount: number;
  steps: (
    | {
        attempts: {
          end: string | null;
          error: { message: string; name: string } | null;
          start: string;
          success: boolean | null;
        }[];
        config: {
          retries: {
            delay: string | number;
            limit: number;
            backoff?:
              | "constant"
              | "linear"
              | "exponential"
              | (string & {})
              | null;
          };
          timeout: unknown;
          sensitive?: "output" | null;
        };
        end: string | null;
        name: string;
        output: string | null;
        start: string;
        success: boolean | null;
        type: "step" | "rollback" | (string & {});
      }
    | {
        end: string;
        error: { message: string; name: string } | null;
        finished: boolean;
        name: string;
        start: string;
        type: "sleep";
      }
    | { trigger: { source: string }; type: "termination" }
    | {
        end: string;
        error: { message: string; name: string } | null;
        finished: boolean;
        name: string;
        start: string;
        type: "waitForEvent";
        output?: string | null;
      }
  )[];
  success: boolean | null;
  trigger: {
    source: "unknown" | "api" | "binding" | "event" | "cron" | (string & {});
  };
  versionId: string;
  schedule?: { cron: string; scheduledTime: number } | null;
}

export const GetInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      end: Schema.Union([Schema.String, Schema.Null]),
      error: Schema.Union([
        Schema.Struct({
          message: Schema.String,
          name: Schema.String,
        }),
        Schema.Null,
      ]),
      output: Schema.Union([Schema.String, Schema.Number, Schema.Null]),
      params: Schema.Unknown,
      queued: Schema.String,
      rollback: Schema.Union([
        Schema.Struct({
          error: Schema.Union([
            Schema.Struct({
              message: Schema.String,
              name: Schema.String,
            }),
            Schema.Null,
          ]),
          outcome: Schema.Union([
            Schema.Literals(["complete", "failed"]),
            Schema.String,
          ]),
        }),
        Schema.Null,
      ]),
      start: Schema.Union([Schema.String, Schema.Null]),
      status: Schema.Union([
        Schema.Literals([
          "queued",
          "running",
          "paused",
          "errored",
          "terminated",
          "complete",
          "waitingForPause",
          "waiting",
          "rollingBack",
        ]),
        Schema.String,
      ]),
      stepCount: Schema.Number,
      steps: Schema.Array(
        Schema.Union([
          Schema.Struct({
            attempts: Schema.Array(
              Schema.Struct({
                end: Schema.Union([Schema.String, Schema.Null]),
                error: Schema.Union([
                  Schema.Struct({
                    message: Schema.String,
                    name: Schema.String,
                  }),
                  Schema.Null,
                ]),
                start: Schema.String,
                success: Schema.Union([Schema.Boolean, Schema.Null]),
              }),
            ),
            config: Schema.Struct({
              retries: Schema.Struct({
                delay: Schema.Union([Schema.String, Schema.Number]),
                limit: Schema.Number,
                backoff: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["constant", "linear", "exponential"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
              }),
              timeout: Schema.Unknown,
              sensitive: Schema.optional(
                Schema.Union([Schema.Literal("output"), Schema.Null]),
              ),
            }),
            end: Schema.Union([Schema.String, Schema.Null]),
            name: Schema.String,
            output: Schema.Union([Schema.String, Schema.Null]),
            start: Schema.String,
            success: Schema.Union([Schema.Boolean, Schema.Null]),
            type: Schema.Union([
              Schema.Literals(["step", "rollback"]),
              Schema.String,
            ]),
          }),
          Schema.Struct({
            end: Schema.String,
            error: Schema.Union([
              Schema.Struct({
                message: Schema.String,
                name: Schema.String,
              }),
              Schema.Null,
            ]),
            finished: Schema.Boolean,
            name: Schema.String,
            start: Schema.String,
            type: Schema.Literal("sleep"),
          }),
          Schema.Struct({
            end: Schema.String,
            error: Schema.Union([
              Schema.Struct({
                message: Schema.String,
                name: Schema.String,
              }),
              Schema.Null,
            ]),
            finished: Schema.Boolean,
            name: Schema.String,
            start: Schema.String,
            type: Schema.Literal("waitForEvent"),
            output: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Struct({
            trigger: Schema.Struct({
              source: Schema.String,
            }),
            type: Schema.Literal("termination"),
          }),
        ]),
      ),
      success: Schema.Union([Schema.Boolean, Schema.Null]),
      trigger: Schema.Struct({
        source: Schema.Union([
          Schema.Literals(["unknown", "api", "binding", "event", "cron"]),
          Schema.String,
        ]),
      }),
      versionId: Schema.String,
      schedule: Schema.optional(
        Schema.Union([
          Schema.Struct({
            cron: Schema.String,
            scheduledTime: Schema.Number,
          }),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          end: "end",
          error: "error",
          output: "output",
          params: "params",
          queued: "queued",
          rollback: "rollback",
          start: "start",
          status: "status",
          stepCount: "step_count",
          steps: "steps",
          success: "success",
          trigger: "trigger",
          versionId: "versionId",
          schedule: "schedule",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetInstanceResponse>;

export type GetInstanceError =
  | DefaultErrors
  | WorkflowNotFound
  | InvalidRoute
  | InstanceNotFound;

export const getInstance: API.OperationMethod<
  GetInstanceRequest,
  GetInstanceResponse,
  GetInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInstanceRequest,
  output: GetInstanceResponse,
  errors: [WorkflowNotFound, InvalidRoute, InstanceNotFound],
}));

export interface ListInstancesRequest {
  workflowName: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Opaque token for cursor-based pagination. Mutually exclusive with `page`. */
  cursor?: string;
  /** Query param: Accepts ISO 8601 with no timezone offsets and in UTC. */
  dateEnd?: string;
  /** Query param: Accepts ISO 8601 with no timezone offsets and in UTC. */
  dateStart?: string;
  /** Query param: Defines the direction for cursor-based pagination. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param */
  status?:
    | "queued"
    | "running"
    | "paused"
    | "errored"
    | "terminated"
    | "complete"
    | "waitingForPause"
    | "waiting"
    | "rollingBack"
    | (string & {});
}

export const ListInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      dateEnd: Schema.optional(Schema.String).pipe(T.HttpQuery("date_end")),
      dateStart: Schema.optional(Schema.String).pipe(T.HttpQuery("date_start")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "queued",
            "running",
            "paused",
            "errored",
            "terminated",
            "complete",
            "waitingForPause",
            "waiting",
            "rollingBack",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workflows/{workflowName}/instances",
      }),
    ),
) as unknown as Schema.Schema<ListInstancesRequest>;

export interface ListInstancesResponse {
  result: {
    id: string;
    createdOn: string;
    endedOn: string | null;
    modifiedOn: string;
    startedOn: string | null;
    status:
      | "queued"
      | "running"
      | "paused"
      | "errored"
      | "terminated"
      | "complete"
      | "waitingForPause"
      | "waiting"
      | "rollingBack"
      | (string & {});
    versionId: string;
    workflowId: string;
    triggerSource?:
      | "unknown"
      | "api"
      | "binding"
      | "event"
      | "cron"
      | (string & {})
      | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdOn: Schema.String,
          endedOn: Schema.Union([Schema.String, Schema.Null]),
          modifiedOn: Schema.String,
          startedOn: Schema.Union([Schema.String, Schema.Null]),
          status: Schema.Union([
            Schema.Literals([
              "queued",
              "running",
              "paused",
              "errored",
              "terminated",
              "complete",
              "waitingForPause",
              "waiting",
              "rollingBack",
            ]),
            Schema.String,
          ]),
          versionId: Schema.String,
          workflowId: Schema.String,
          triggerSource: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["unknown", "api", "binding", "event", "cron"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdOn: "created_on",
            endedOn: "ended_on",
            modifiedOn: "modified_on",
            startedOn: "started_on",
            status: "status",
            versionId: "version_id",
            workflowId: "workflow_id",
            triggerSource: "trigger_source",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Schema<ListInstancesResponse>;

export type ListInstancesError =
  | DefaultErrors
  | WorkflowNotFound
  | WorkflowInternalError
  | InvalidRoute
  | InvalidBody;

export const listInstances: API.PaginatedOperationMethod<
  ListInstancesRequest,
  ListInstancesResponse,
  ListInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInstancesRequest,
  output: ListInstancesResponse,
  errors: [WorkflowNotFound, WorkflowInternalError, InvalidRoute, InvalidBody],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateInstanceRequest {
  workflowName: string;
  /** Path param */
  accountId: string;
  /** Body param */
  instanceId?: string;
  /** Body param */
  instanceRetention?: {
    errorRetention?: number | string;
    successRetention?: number | string;
  };
  /** Body param */
  params?: unknown;
}

export const CreateInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      instanceId: Schema.optional(Schema.String),
      instanceRetention: Schema.optional(
        Schema.Struct({
          errorRetention: Schema.optional(
            Schema.Union([Schema.Number, Schema.String]),
          ),
          successRetention: Schema.optional(
            Schema.Union([Schema.Number, Schema.String]),
          ),
        }).pipe(
          Schema.encodeKeys({
            errorRetention: "error_retention",
            successRetention: "success_retention",
          }),
        ),
      ),
      params: Schema.optional(Schema.Unknown),
    }).pipe(
      Schema.encodeKeys({
        instanceId: "instance_id",
        instanceRetention: "instance_retention",
        params: "params",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workflows/{workflowName}/instances",
      }),
    ),
) as unknown as Schema.Schema<CreateInstanceRequest>;

export interface CreateInstanceResponse {
  id: string;
  status:
    | "queued"
    | "running"
    | "paused"
    | "errored"
    | "terminated"
    | "complete"
    | "waitingForPause"
    | "waiting"
    | "rollingBack"
    | (string & {});
  versionId: string;
  workflowId: string;
  triggerSource?:
    | "unknown"
    | "api"
    | "binding"
    | "event"
    | "cron"
    | (string & {})
    | null;
}

export const CreateInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      status: Schema.Union([
        Schema.Literals([
          "queued",
          "running",
          "paused",
          "errored",
          "terminated",
          "complete",
          "waitingForPause",
          "waiting",
          "rollingBack",
        ]),
        Schema.String,
      ]),
      versionId: Schema.String,
      workflowId: Schema.String,
      triggerSource: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["unknown", "api", "binding", "event", "cron"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          status: "status",
          versionId: "version_id",
          workflowId: "workflow_id",
          triggerSource: "trigger_source",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateInstanceResponse>;

export type CreateInstanceError =
  | DefaultErrors
  | WorkflowNotFound
  | InstanceAlreadyExists
  | InvalidRoute
  | InvalidBody;

export const createInstance: API.OperationMethod<
  CreateInstanceRequest,
  CreateInstanceResponse,
  CreateInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInstanceRequest,
  output: CreateInstanceResponse,
  errors: [WorkflowNotFound, InstanceAlreadyExists, InvalidRoute, InvalidBody],
}));

export interface BulkInstanceRequest {
  workflowName: string;
  /** Path param */
  accountId: string;
  /** Body param */
  body?: {
    instanceId?: string;
    instanceRetention?: {
      errorRetention?: number | string;
      successRetention?: number | string;
    };
    params?: unknown;
  }[];
}

export const BulkInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.optional(
        Schema.Array(
          Schema.Struct({
            instanceId: Schema.optional(Schema.String),
            instanceRetention: Schema.optional(
              Schema.Struct({
                errorRetention: Schema.optional(
                  Schema.Union([Schema.Number, Schema.String]),
                ),
                successRetention: Schema.optional(
                  Schema.Union([Schema.Number, Schema.String]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  errorRetention: "error_retention",
                  successRetention: "success_retention",
                }),
              ),
            ),
            params: Schema.optional(Schema.Unknown),
          }).pipe(
            Schema.encodeKeys({
              instanceId: "instance_id",
              instanceRetention: "instance_retention",
              params: "params",
            }),
          ),
        ),
      ).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workflows/{workflowName}/instances/batch",
      }),
    ),
) as unknown as Schema.Schema<BulkInstanceRequest>;

export interface BulkInstanceResponse {
  result: {
    id: string;
    status:
      | "queued"
      | "running"
      | "paused"
      | "errored"
      | "terminated"
      | "complete"
      | "waitingForPause"
      | "waiting"
      | "rollingBack"
      | (string & {});
    versionId: string;
    workflowId: string;
    triggerSource?:
      | "unknown"
      | "api"
      | "binding"
      | "event"
      | "cron"
      | (string & {})
      | null;
  }[];
}

export const BulkInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          status: Schema.Union([
            Schema.Literals([
              "queued",
              "running",
              "paused",
              "errored",
              "terminated",
              "complete",
              "waitingForPause",
              "waiting",
              "rollingBack",
            ]),
            Schema.String,
          ]),
          versionId: Schema.String,
          workflowId: Schema.String,
          triggerSource: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["unknown", "api", "binding", "event", "cron"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            status: "status",
            versionId: "version_id",
            workflowId: "workflow_id",
            triggerSource: "trigger_source",
          }),
        ),
      ),
    }),
) as unknown as Schema.Schema<BulkInstanceResponse>;

export type BulkInstanceError =
  | DefaultErrors
  | WorkflowNotFound
  | InstanceAlreadyExists
  | InvalidRoute
  | InvalidBody;

export const bulkInstance: API.PaginatedOperationMethod<
  BulkInstanceRequest,
  BulkInstanceResponse,
  BulkInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: BulkInstanceRequest,
  output: BulkInstanceResponse,
  errors: [WorkflowNotFound, InstanceAlreadyExists, InvalidRoute, InvalidBody],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface StepInstanceRequest {
  workflowName: string;
  instanceId: string;
  /** Path param */
  accountId: string;
  /** Query param: Exact step name from the instance logs response, including the generated counter suffix. */
  name: string;
  /** Query param: Step type to disambiguate step.do and waitForEvent entries that share the same name. */
  type: "step" | "waitForEvent" | (string & {});
  /** Query param: Specific attempt number to retrieve output or error for. */
  attempt?: number;
}

export const StepInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      instanceId: Schema.String.pipe(T.HttpPath("instanceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String.pipe(T.HttpQuery("name")),
      type: Schema.Union([
        Schema.Literals(["step", "waitForEvent"]),
        Schema.String,
      ]).pipe(T.HttpQuery("type")),
      attempt: Schema.optional(Schema.Number).pipe(T.HttpQuery("attempt")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workflows/{workflowName}/instances/{instanceId}/step",
      }),
    ),
) as unknown as Schema.Schema<StepInstanceRequest>;

export interface StepInstanceResponse {
  /** Error details when status='errored'; null otherwise. */
  error: { message: string; name: string } | null;
  status:
    | "queued"
    | "running"
    | "paused"
    | "errored"
    | "terminated"
    | "complete"
    | "waitingForPause"
    | "waiting"
    | "rollingBack"
    | (string & {});
  /** Full step output or waitForEvent payload without truncation. Sensitive outputs are returned as '[REDACTED]'. Populated when status='complete'. May be a ReadableStream when the step returned one from s */
  output?: unknown | null;
}

export const StepInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      error: Schema.Union([
        Schema.Struct({
          message: Schema.String,
          name: Schema.String,
        }),
        Schema.Null,
      ]),
      status: Schema.Union([
        Schema.Literals([
          "queued",
          "running",
          "paused",
          "errored",
          "terminated",
          "complete",
          "waitingForPause",
          "waiting",
          "rollingBack",
        ]),
        Schema.String,
      ]),
      output: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<StepInstanceResponse>;

export type StepInstanceError = DefaultErrors;

export const stepInstance: API.OperationMethod<
  StepInstanceRequest,
  StepInstanceResponse,
  StepInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StepInstanceRequest,
  output: StepInstanceResponse,
  errors: [],
}));

// =============================================================================
// InstanceEvent
// =============================================================================

export interface CreateInstanceEventRequest {
  workflowName: string;
  instanceId: string;
  eventType: string;
  /** Path param */
  accountId: string;
  /** Body param */
  body?: unknown;
}

export const CreateInstanceEventRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      instanceId: Schema.String.pipe(T.HttpPath("instanceId")),
      eventType: Schema.String.pipe(T.HttpPath("eventType")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.optional(Schema.Unknown).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workflows/{workflowName}/instances/{instanceId}/events/{eventType}",
      }),
    ),
  ) as unknown as Schema.Schema<CreateInstanceEventRequest>;

export type CreateInstanceEventResponse = unknown;

export const CreateInstanceEventResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateInstanceEventResponse>;

export type CreateInstanceEventError =
  | DefaultErrors
  | WorkflowNotFound
  | InvalidRoute
  | InstanceNotFound
  | InvalidBody;

export const createInstanceEvent: API.OperationMethod<
  CreateInstanceEventRequest,
  CreateInstanceEventResponse,
  CreateInstanceEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInstanceEventRequest,
  output: CreateInstanceEventResponse,
  errors: [WorkflowNotFound, InvalidRoute, InstanceNotFound, InvalidBody],
}));

// =============================================================================
// InstanceStatus
// =============================================================================

export interface PatchInstanceStatusRequest {
  workflowName: string;
  instanceId: string;
  /** Path param */
  accountId: string;
  /** Body param */
  status: "pause" | "resume" | "terminate" | "restart" | (string & {});
  /** Body param: Run rollback before terminating. */
  rollback?: boolean;
  /** Body param: Step to restart from. */
  from?: {
    name: string;
    count?: number;
    type?: "do" | "sleep" | "waitForEvent" | (string & {});
  };
}

export const PatchInstanceStatusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      instanceId: Schema.String.pipe(T.HttpPath("instanceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      status: Schema.Union([
        Schema.Literals(["pause", "resume", "terminate", "restart"]),
        Schema.String,
      ]),
      rollback: Schema.optional(Schema.Boolean),
      from: Schema.optional(
        Schema.Struct({
          name: Schema.String,
          count: Schema.optional(Schema.Number),
          type: Schema.optional(
            Schema.Union([
              Schema.Literals(["do", "sleep", "waitForEvent"]),
              Schema.String,
            ]),
          ),
        }),
      ),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/workflows/{workflowName}/instances/{instanceId}/status",
      }),
    ),
  ) as unknown as Schema.Schema<PatchInstanceStatusRequest>;

export interface PatchInstanceStatusResponse {
  status:
    | "queued"
    | "running"
    | "paused"
    | "errored"
    | "terminated"
    | "complete"
    | "waitingForPause"
    | "waiting"
    | "rollingBack"
    | (string & {});
  /** Accepts ISO 8601 with no timezone offsets and in UTC. */
  timestamp: string;
}

export const PatchInstanceStatusResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      status: Schema.Union([
        Schema.Literals([
          "queued",
          "running",
          "paused",
          "errored",
          "terminated",
          "complete",
          "waitingForPause",
          "waiting",
          "rollingBack",
        ]),
        Schema.String,
      ]),
      timestamp: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchInstanceStatusResponse>;

export type PatchInstanceStatusError =
  | DefaultErrors
  | WorkflowNotFound
  | InvalidRoute
  | InstanceNotFound
  | InstanceCannotTerminate;

export const patchInstanceStatus: API.OperationMethod<
  PatchInstanceStatusRequest,
  PatchInstanceStatusResponse,
  PatchInstanceStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchInstanceStatusRequest,
  output: PatchInstanceStatusResponse,
  errors: [
    WorkflowNotFound,
    InvalidRoute,
    InstanceNotFound,
    InstanceCannotTerminate,
  ],
}));

// =============================================================================
// Version
// =============================================================================

export interface GetVersionRequest {
  workflowName: string;
  versionId: string;
  accountId: string;
}

export const GetVersionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      versionId: Schema.String.pipe(T.HttpPath("versionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workflows/{workflowName}/versions/{versionId}",
      }),
    ),
) as unknown as Schema.Schema<GetVersionRequest>;

export interface GetVersionResponse {
  id: string;
  className: string;
  createdOn: string;
  hasDag: boolean;
  /** The programming language of the workflow implementation */
  language: "javascript" | "python" | (string & {});
  modifiedOn: string;
  workflowId: string;
  limits?: { steps?: number | null } | null;
}

export const GetVersionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      className: Schema.String,
      createdOn: Schema.String,
      hasDag: Schema.Boolean,
      language: Schema.Union([
        Schema.Literals(["javascript", "python"]),
        Schema.String,
      ]),
      modifiedOn: Schema.String,
      workflowId: Schema.String,
      limits: Schema.optional(
        Schema.Union([
          Schema.Struct({
            steps: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          className: "class_name",
          createdOn: "created_on",
          hasDag: "has_dag",
          language: "language",
          modifiedOn: "modified_on",
          workflowId: "workflow_id",
          limits: "limits",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetVersionResponse>;

export type GetVersionError =
  | DefaultErrors
  | WorkflowNotFound
  | InvalidRoute
  | VersionNotFound;

export const getVersion: API.OperationMethod<
  GetVersionRequest,
  GetVersionResponse,
  GetVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVersionRequest,
  output: GetVersionResponse,
  errors: [WorkflowNotFound, InvalidRoute, VersionNotFound],
}));

export interface ListVersionsRequest {
  workflowName: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
}

export const ListVersionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workflows/{workflowName}/versions",
      }),
    ),
) as unknown as Schema.Schema<ListVersionsRequest>;

export interface ListVersionsResponse {
  result: {
    id: string;
    className: string;
    createdOn: string;
    hasDag: boolean;
    language: "javascript" | "python" | (string & {});
    modifiedOn: string;
    workflowId: string;
    limits?: { steps?: number | null } | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListVersionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          className: Schema.String,
          createdOn: Schema.String,
          hasDag: Schema.Boolean,
          language: Schema.Union([
            Schema.Literals(["javascript", "python"]),
            Schema.String,
          ]),
          modifiedOn: Schema.String,
          workflowId: Schema.String,
          limits: Schema.optional(
            Schema.Union([
              Schema.Struct({
                steps: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            className: "class_name",
            createdOn: "created_on",
            hasDag: "has_dag",
            language: "language",
            modifiedOn: "modified_on",
            workflowId: "workflow_id",
            limits: "limits",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Schema<ListVersionsResponse>;

export type ListVersionsError = DefaultErrors | WorkflowNotFound | InvalidRoute;

export const listVersions: API.PaginatedOperationMethod<
  ListVersionsRequest,
  ListVersionsResponse,
  ListVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListVersionsRequest,
  output: ListVersionsResponse,
  errors: [WorkflowNotFound, InvalidRoute],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface GraphVersionRequest {
  workflowName: string;
  versionId: string;
  accountId: string;
}

export const GraphVersionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      versionId: Schema.String.pipe(T.HttpPath("versionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workflows/{workflowName}/versions/{versionId}/graph",
      }),
    ),
) as unknown as Schema.Schema<GraphVersionRequest>;

export interface GraphVersionResponse {
  id: string;
  className: string;
  createdOn: string;
  /** Versioned workflow graph payload. */
  graph: {
    version: number;
    workflow: {
      className: string;
      functions: Record<string, unknown>;
      nodes: (
        | {
            duration: number | string;
            name: string;
            type: "step_sleep";
            resolves?: number | null;
            starts?: number | null;
          }
        | {
            config: {
              retries: {
                backoff: "constant" | "linear" | "exponential" | (string & {});
                delay: number | string;
                limit: number;
              };
              timeout: number | string;
            };
            name: string;
            nodes: unknown[];
            type: "step_do";
            resolves?: number | null;
            starts?: number | null;
          }
        | {
            name: string;
            options: { eventType: string; timeout: number | string } | null;
            type: "step_wait_for_event";
            payload?:
              | { type: "unknown" }
              | { fields: Record<string, unknown>; type: "object" }
              | null;
            resolves?: number | null;
            starts?: number | null;
          }
        | {
            name: string;
            timestamp: string;
            type: "step_sleep_until";
            resolves?: number | null;
            starts?: number | null;
          }
        | { nodes: unknown[]; type: "loop" }
        | {
            kind: "all" | "any" | "all_settled" | "race" | (string & {});
            nodes: unknown[];
            type: "parallel";
          }
        | {
            catchBlock: { nodes: unknown[]; type: "block" } | null;
            finallyBlock: { nodes: unknown[]; type: "block" } | null;
            tryBlock: { nodes: unknown[]; type: "block" } | null;
            type: "try";
          }
        | { nodes: unknown[]; type: "block" }
        | {
            branches: { condition: string | null; nodes: unknown[] }[];
            type: "if";
          }
        | {
            branches: { condition: string | null; nodes: unknown[] }[];
            discriminant: string;
            type: "switch";
          }
        | {
            className: string;
            functions: Record<string, unknown>;
            nodes: unknown[];
            type: "start";
            payload?:
              | { type: "unknown" }
              | { fields: Record<string, unknown>; type: "object" }
              | null;
          }
        | {
            name: string;
            type: "function_call";
            resolves?: number | null;
            starts?: number | null;
          }
        | { name: string; nodes: unknown[]; type: "function_def" }
        | { kind: "break" | "return" | (string & {}); type: "break" }
      )[];
      payload?:
        | { type: "unknown" }
        | { fields: Record<string, unknown>; type: "object" }
        | null;
    };
  } | null;
  modifiedOn: string;
  workflowId: string;
}

export const GraphVersionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      className: Schema.String,
      createdOn: Schema.String,
      graph: Schema.Union([
        Schema.Struct({
          version: Schema.Number,
          workflow: Schema.Struct({
            className: Schema.String,
            functions: Schema.Record(Schema.String, Schema.Unknown),
            nodes: Schema.Array(
              Schema.Union([
                Schema.Struct({
                  config: Schema.Struct({
                    retries: Schema.Struct({
                      backoff: Schema.Union([
                        Schema.Literals(["constant", "linear", "exponential"]),
                        Schema.String,
                      ]),
                      delay: Schema.Union([Schema.Number, Schema.String]),
                      limit: Schema.Number,
                    }),
                    timeout: Schema.Union([Schema.Number, Schema.String]),
                  }),
                  name: Schema.String,
                  nodes: Schema.Array(Schema.Unknown),
                  type: Schema.Literal("step_do"),
                  resolves: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  starts: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                }),
                Schema.Struct({
                  catchBlock: Schema.Union([
                    Schema.Struct({
                      nodes: Schema.Array(Schema.Unknown),
                      type: Schema.Literal("block"),
                    }),
                    Schema.Null,
                  ]),
                  finallyBlock: Schema.Union([
                    Schema.Struct({
                      nodes: Schema.Array(Schema.Unknown),
                      type: Schema.Literal("block"),
                    }),
                    Schema.Null,
                  ]),
                  tryBlock: Schema.Union([
                    Schema.Struct({
                      nodes: Schema.Array(Schema.Unknown),
                      type: Schema.Literal("block"),
                    }),
                    Schema.Null,
                  ]),
                  type: Schema.Literal("try"),
                }).pipe(
                  Schema.encodeKeys({
                    catchBlock: "catch_block",
                    finallyBlock: "finally_block",
                    tryBlock: "try_block",
                    type: "type",
                  }),
                ),
                Schema.Struct({
                  className: Schema.String,
                  functions: Schema.Record(Schema.String, Schema.Unknown),
                  nodes: Schema.Array(Schema.Unknown),
                  type: Schema.Literal("start"),
                  payload: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Struct({
                          fields: Schema.Record(Schema.String, Schema.Unknown),
                          type: Schema.Literal("object"),
                        }),
                        Schema.Struct({
                          type: Schema.Literal("unknown"),
                        }),
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    className: "class_name",
                    functions: "functions",
                    nodes: "nodes",
                    type: "type",
                    payload: "payload",
                  }),
                ),
                Schema.Struct({
                  duration: Schema.Union([Schema.Number, Schema.String]),
                  name: Schema.String,
                  type: Schema.Literal("step_sleep"),
                  resolves: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  starts: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                }),
                Schema.Struct({
                  name: Schema.String,
                  options: Schema.Union([
                    Schema.Struct({
                      eventType: Schema.String,
                      timeout: Schema.Union([Schema.Number, Schema.String]),
                    }).pipe(
                      Schema.encodeKeys({
                        eventType: "event_type",
                        timeout: "timeout",
                      }),
                    ),
                    Schema.Null,
                  ]),
                  type: Schema.Literal("step_wait_for_event"),
                  payload: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Struct({
                          fields: Schema.Record(Schema.String, Schema.Unknown),
                          type: Schema.Literal("object"),
                        }),
                        Schema.Struct({
                          type: Schema.Literal("unknown"),
                        }),
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  resolves: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  starts: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                }),
                Schema.Struct({
                  name: Schema.String,
                  timestamp: Schema.String,
                  type: Schema.Literal("step_sleep_until"),
                  resolves: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  starts: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                }),
                Schema.Struct({
                  kind: Schema.Union([
                    Schema.Literals(["all", "any", "all_settled", "race"]),
                    Schema.String,
                  ]),
                  nodes: Schema.Array(Schema.Unknown),
                  type: Schema.Literal("parallel"),
                }),
                Schema.Struct({
                  branches: Schema.Array(
                    Schema.Struct({
                      condition: Schema.Union([Schema.String, Schema.Null]),
                      nodes: Schema.Array(Schema.Unknown),
                    }),
                  ),
                  discriminant: Schema.String,
                  type: Schema.Literal("switch"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  nodes: Schema.Array(Schema.Unknown),
                  type: Schema.Literal("function_def"),
                }),
                Schema.Struct({
                  nodes: Schema.Array(Schema.Unknown),
                  type: Schema.Literal("loop"),
                }),
                Schema.Struct({
                  nodes: Schema.Array(Schema.Unknown),
                  type: Schema.Literal("block"),
                }),
                Schema.Struct({
                  branches: Schema.Array(
                    Schema.Struct({
                      condition: Schema.Union([Schema.String, Schema.Null]),
                      nodes: Schema.Array(Schema.Unknown),
                    }),
                  ),
                  type: Schema.Literal("if"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("function_call"),
                  resolves: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  starts: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                }),
                Schema.Struct({
                  kind: Schema.Union([
                    Schema.Literals(["break", "return"]),
                    Schema.String,
                  ]),
                  type: Schema.Literal("break"),
                }),
              ]),
            ),
            payload: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Struct({
                    fields: Schema.Record(Schema.String, Schema.Unknown),
                    type: Schema.Literal("object"),
                  }),
                  Schema.Struct({
                    type: Schema.Literal("unknown"),
                  }),
                ]),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              className: "class_name",
              functions: "functions",
              nodes: "nodes",
              payload: "payload",
            }),
          ),
        }),
        Schema.Null,
      ]),
      modifiedOn: Schema.String,
      workflowId: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          className: "class_name",
          createdOn: "created_on",
          graph: "graph",
          modifiedOn: "modified_on",
          workflowId: "workflow_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GraphVersionResponse>;

export type GraphVersionError = DefaultErrors;

export const graphVersion: API.OperationMethod<
  GraphVersionRequest,
  GraphVersionResponse,
  GraphVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GraphVersionRequest,
  output: GraphVersionResponse,
  errors: [],
}));

// =============================================================================
// Workflow
// =============================================================================

export interface GetWorkflowRequest {
  workflowName: string;
  accountId: string;
}

export const GetWorkflowRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workflows/{workflowName}",
      }),
    ),
) as unknown as Schema.Schema<GetWorkflowRequest>;

export interface GetWorkflowResponse {
  id: string;
  className: string;
  createdOn: string;
  instances: {
    complete?: number | null;
    errored?: number | null;
    paused?: number | null;
    queued?: number | null;
    rollingBack?: number | null;
    running?: number | null;
    terminated?: number | null;
    waiting?: number | null;
    waitingForPause?: number | null;
  };
  modifiedOn: string;
  name: string;
  scriptName: string;
  triggeredOn: string | null;
  schedules?: { cron: string; nextInstance: string }[] | null;
}

export const GetWorkflowResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      className: Schema.String,
      createdOn: Schema.String,
      instances: Schema.Struct({
        complete: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        errored: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        paused: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        queued: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        rollingBack: Schema.optional(
          Schema.Union([Schema.Number, Schema.Null]),
        ),
        running: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        terminated: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        waiting: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        waitingForPause: Schema.optional(
          Schema.Union([Schema.Number, Schema.Null]),
        ),
      }),
      modifiedOn: Schema.String,
      name: Schema.String,
      scriptName: Schema.String,
      triggeredOn: Schema.Union([Schema.String, Schema.Null]),
      schedules: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              cron: Schema.String,
              nextInstance: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                cron: "cron",
                nextInstance: "next_instance",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          className: "class_name",
          createdOn: "created_on",
          instances: "instances",
          modifiedOn: "modified_on",
          name: "name",
          scriptName: "script_name",
          triggeredOn: "triggered_on",
          schedules: "schedules",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetWorkflowResponse>;

export type GetWorkflowError = DefaultErrors | WorkflowNotFound | InvalidRoute;

export const getWorkflow: API.OperationMethod<
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetWorkflowRequest,
  output: GetWorkflowResponse,
  errors: [WorkflowNotFound, InvalidRoute],
}));

export interface ListWorkflowsRequest {
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Allows filtering workflows` name. */
  search?: string;
}

export const ListWorkflowsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/workflows" }),
    ),
) as unknown as Schema.Schema<ListWorkflowsRequest>;

export interface ListWorkflowsResponse {
  result: {
    id: string;
    className?: string | null;
    createdOn: string;
    instances?: {
      complete?: number | null;
      errored?: number | null;
      paused?: number | null;
      queued?: number | null;
      rollingBack?: number | null;
      running?: number | null;
      terminated?: number | null;
      waiting?: number | null;
      waitingForPause?: number | null;
    } | null;
    modifiedOn: string;
    name: string;
    scriptName: string;
    triggeredOn: string | null;
    schedules?: { cron: string; nextInstance: string }[] | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListWorkflowsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          className: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          createdOn: Schema.String,
          instances: Schema.optional(
            Schema.Union([
              Schema.Struct({
                complete: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                errored: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                paused: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                queued: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                rollingBack: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                running: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                terminated: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                waiting: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                waitingForPause: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          modifiedOn: Schema.String,
          name: Schema.String,
          scriptName: Schema.String,
          triggeredOn: Schema.Union([Schema.String, Schema.Null]),
          schedules: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  cron: Schema.String,
                  nextInstance: Schema.String,
                }).pipe(
                  Schema.encodeKeys({
                    cron: "cron",
                    nextInstance: "next_instance",
                  }),
                ),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            className: "class_name",
            createdOn: "created_on",
            instances: "instances",
            modifiedOn: "modified_on",
            name: "name",
            scriptName: "script_name",
            triggeredOn: "triggered_on",
            schedules: "schedules",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Schema<ListWorkflowsResponse>;

export type ListWorkflowsError = DefaultErrors;

export const listWorkflows: API.PaginatedOperationMethod<
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  ListWorkflowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListWorkflowsRequest,
  output: ListWorkflowsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface PutWorkflowRequest {
  workflowName: string;
  /** Path param */
  accountId: string;
  /** Body param */
  className: string;
  /** Body param */
  scriptName: string;
  /** Body param */
  limits?: { steps?: number };
  /** Body param */
  schedules?: { cron: string }[];
}

export const PutWorkflowRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      className: Schema.String,
      scriptName: Schema.String,
      limits: Schema.optional(
        Schema.Struct({
          steps: Schema.optional(Schema.Number),
        }),
      ),
      schedules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            cron: Schema.String,
          }),
        ),
      ),
    }).pipe(
      Schema.encodeKeys({
        className: "class_name",
        scriptName: "script_name",
        limits: "limits",
        schedules: "schedules",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/workflows/{workflowName}",
      }),
    ),
) as unknown as Schema.Schema<PutWorkflowRequest>;

export interface PutWorkflowResponse {
  id: string;
  className: string;
  createdOn: string;
  isDeleted?: number | null;
  modifiedOn: string;
  name: string;
  scriptName: string;
  terminatorRunning?: number | null;
  triggeredOn?: string | null;
  versionId: string;
}

export const PutWorkflowResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      className: Schema.String,
      createdOn: Schema.String,
      isDeleted: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedOn: Schema.String,
      name: Schema.String,
      scriptName: Schema.String,
      terminatorRunning: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      triggeredOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      versionId: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          className: "class_name",
          createdOn: "created_on",
          isDeleted: "is_deleted",
          modifiedOn: "modified_on",
          name: "name",
          scriptName: "script_name",
          terminatorRunning: "terminator_running",
          triggeredOn: "triggered_on",
          versionId: "version_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<PutWorkflowResponse>;

export type PutWorkflowError =
  | DefaultErrors
  | WorkflowInternalError
  | InvalidRoute;

export const putWorkflow: API.OperationMethod<
  PutWorkflowRequest,
  PutWorkflowResponse,
  PutWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutWorkflowRequest,
  output: PutWorkflowResponse,
  errors: [WorkflowInternalError, InvalidRoute],
}));

export interface DeleteWorkflowRequest {
  workflowName: string;
  accountId: string;
}

export const DeleteWorkflowRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      workflowName: Schema.String.pipe(T.HttpPath("workflowName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workflows/{workflowName}",
      }),
    ),
) as unknown as Schema.Schema<DeleteWorkflowRequest>;

export interface DeleteWorkflowResponse {
  status: "ok";
  success?: boolean | null;
}

export const DeleteWorkflowResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      status: Schema.Literal("ok"),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteWorkflowResponse>;

export type DeleteWorkflowError =
  | DefaultErrors
  | WorkflowNotFound
  | InvalidRoute;

export const deleteWorkflow: API.OperationMethod<
  DeleteWorkflowRequest,
  DeleteWorkflowResponse,
  DeleteWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteWorkflowRequest,
  output: DeleteWorkflowResponse,
  errors: [WorkflowNotFound, InvalidRoute],
}));
