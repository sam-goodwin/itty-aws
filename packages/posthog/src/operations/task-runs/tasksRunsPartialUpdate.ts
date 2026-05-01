import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
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
    branch: Schema.optional(Schema.NullOr(Schema.String)),
    stage: Schema.optional(Schema.NullOr(Schema.String)),
    output: Schema.optional(Schema.NullOr(Schema.Unknown)),
    state: Schema.optional(Schema.Unknown),
    state_remove_keys: Schema.optional(Schema.Array(Schema.String)),
    error_message: Schema.optional(Schema.NullOr(Schema.String)),
    environment: Schema.optional(Schema.Literals(["local"])),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/",
    }),
  );
export type TasksRunsPartialUpdateInput =
  typeof TasksRunsPartialUpdateInput.Type;

// Output Schema
export const TasksRunsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    task: Schema.String,
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
    runtime_adapter: Schema.Unknown,
    provider: Schema.Unknown,
    model: Schema.NullOr(Schema.String),
    reasoning_effort: Schema.Unknown,
    log_url: Schema.NullOr(Schema.String),
    error_message: Schema.optional(Schema.NullOr(Schema.String)),
    output: Schema.optional(Schema.NullOr(Schema.Unknown)),
    state: Schema.optional(Schema.Unknown),
    artifacts: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.String,
        type: Schema.String,
        source: Schema.optional(Schema.String),
        size: Schema.optional(Schema.Number),
        content_type: Schema.optional(Schema.String),
        storage_path: Schema.String,
        uploaded_at: Schema.String,
      }),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
    completed_at: Schema.NullOr(Schema.String),
  });
export type TasksRunsPartialUpdateOutput =
  typeof TasksRunsPartialUpdateOutput.Type;

// The operation
/**
 * Update task run
 *
 * API for managing task runs. Each run represents an execution of a task.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksRunsPartialUpdateInput,
    outputSchema: TasksRunsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
