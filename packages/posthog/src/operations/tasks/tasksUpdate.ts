import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  title: Schema.optional(Schema.String),
  title_manually_set: Schema.optional(Schema.Boolean),
  description: Schema.optional(Schema.String),
  origin_product: Schema.optional(
    Schema.Literals([
      "error_tracking",
      "eval_clusters",
      "user_created",
      "automation",
      "slack",
      "support_queue",
      "session_summaries",
      "posthog_ai",
      "signal_report",
      "signals_scout",
      "support_reply",
    ]),
  ),
  repository: Schema.optional(Schema.NullOr(Schema.String)),
  github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
  github_user_integration: Schema.optional(Schema.NullOr(Schema.String)),
  signal_report: Schema.optional(Schema.NullOr(Schema.String)),
  signal_report_task_relationship: Schema.optional(
    Schema.Literals(["implementation"]),
  ),
  json_schema: Schema.optional(Schema.Unknown),
  internal: Schema.optional(Schema.Boolean),
  archived: Schema.optional(Schema.Boolean),
  ci_prompt: Schema.optional(Schema.NullOr(Schema.String)),
  branch: Schema.optional(Schema.NullOr(Schema.String)),
  runtime_adapter: Schema.optional(Schema.Unknown),
  model: Schema.optional(Schema.NullOr(Schema.String)),
  reasoning_effort: Schema.optional(Schema.Unknown),
}).pipe(
  T.Http({ method: "PUT", path: "/api/projects/{project_id}/tasks/{id}/" }),
);
export type TasksUpdateInput = typeof TasksUpdateInput.Type;

// Output Schema
export const TasksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  task_number: Schema.NullOr(Schema.Number),
  slug: Schema.String,
  title: Schema.String,
  title_manually_set: Schema.Boolean,
  description: Schema.String,
  origin_product: Schema.String,
  repository: Schema.NullOr(Schema.String),
  github_integration: Schema.NullOr(Schema.Number),
  github_user_integration: Schema.NullOr(Schema.String),
  signal_report: Schema.NullOr(Schema.String),
  json_schema: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  internal: Schema.Boolean,
  archived: Schema.Boolean,
  archived_at: Schema.NullOr(Schema.String),
  latest_run: Schema.NullOr(Schema.String),
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  created_by: Schema.optional(Schema.Unknown),
  ci_prompt: Schema.NullOr(Schema.String),
});
export type TasksUpdateOutput = typeof TasksUpdateOutput.Type;

// The operation
/**
 * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksUpdateInput,
  outputSchema: TasksUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
