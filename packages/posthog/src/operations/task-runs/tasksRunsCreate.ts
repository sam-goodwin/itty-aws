import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  task_id: Schema.String.pipe(T.PathParam()),
  environment: Schema.optional(Schema.Literals(["local", "cloud"])),
  mode: Schema.optional(Schema.Literals(["interactive", "background"])),
  branch: Schema.optional(Schema.NullOr(Schema.String)),
  sandbox_environment_id: Schema.optional(Schema.String),
  pr_authorship_mode: Schema.optional(Schema.Literals(["user", "bot"])),
  run_source: Schema.optional(Schema.Literals(["manual", "signal_report"])),
  signal_report_id: Schema.optional(Schema.String),
  runtime_adapter: Schema.optional(Schema.Literals(["claude", "codex"])),
  model: Schema.optional(Schema.String),
  reasoning_effort: Schema.optional(
    Schema.Literals(["low", "medium", "high", "max"]),
  ),
  github_user_token: Schema.optional(Schema.String),
  initial_permission_mode: Schema.optional(
    Schema.Literals([
      "default",
      "acceptEdits",
      "plan",
      "bypassPermissions",
      "auto",
      "read-only",
      "full-access",
    ]),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/projects/{project_id}/tasks/{task_id}/runs/",
  }),
);
export type TasksRunsCreateInput = typeof TasksRunsCreateInput.Type;

// Output Schema
export const TasksRunsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type TasksRunsCreateOutput = typeof TasksRunsCreateOutput.Type;

// The operation
/**
 * Create task run
 *
 * Create a new run for a specific task without starting execution.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksRunsCreateInput,
  outputSchema: TasksRunsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
