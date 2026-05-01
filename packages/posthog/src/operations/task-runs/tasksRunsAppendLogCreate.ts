import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsAppendLogCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    entries: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/append_log/",
    }),
  );
export type TasksRunsAppendLogCreateInput =
  typeof TasksRunsAppendLogCreateInput.Type;

// Output Schema
export const TasksRunsAppendLogCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    task: Schema.optional(Schema.String),
    stage: Schema.optional(Schema.NullOr(Schema.String)),
    branch: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(
      Schema.Literals([
        "not_started",
        "queued",
        "in_progress",
        "completed",
        "failed",
        "cancelled",
      ]),
    ),
    environment: Schema.optional(Schema.Literals(["local", "cloud"])),
    runtime_adapter: Schema.optional(Schema.Unknown),
    provider: Schema.optional(Schema.Unknown),
    model: Schema.optional(Schema.NullOr(Schema.String)),
    reasoning_effort: Schema.optional(Schema.Unknown),
    log_url: Schema.optional(Schema.NullOr(Schema.String)),
    error_message: Schema.optional(Schema.NullOr(Schema.String)),
    output: Schema.optional(Schema.NullOr(Schema.Unknown)),
    state: Schema.optional(Schema.Unknown),
    artifacts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          source: Schema.optional(Schema.String),
          size: Schema.optional(Schema.Number),
          content_type: Schema.optional(Schema.String),
          storage_path: Schema.optional(Schema.String),
          uploaded_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type TasksRunsAppendLogCreateOutput =
  typeof TasksRunsAppendLogCreateOutput.Type;

// The operation
/**
 * Append log entries
 *
 * Append one or more log entries to the task run log array
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsAppendLogCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksRunsAppendLogCreateInput,
    outputSchema: TasksRunsAppendLogCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
