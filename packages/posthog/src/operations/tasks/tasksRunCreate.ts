import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/projects/{project_id}/tasks/{id}/run/",
  }),
);
export type TasksRunCreateInput = typeof TasksRunCreateInput.Type;

// Output Schema
export const TasksRunCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type TasksRunCreateOutput = typeof TasksRunCreateOutput.Type;

// The operation
/**
 * Run task
 *
 * Create a new task run and kick off the workflow.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksRunCreateInput,
  outputSchema: TasksRunCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
