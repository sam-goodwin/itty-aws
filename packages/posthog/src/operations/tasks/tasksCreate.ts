import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  id: Schema.String,
  task_number: Schema.NullOr(Schema.Number),
  slug: Schema.String,
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
      "signal_report",
    ]),
  ),
  repository: Schema.optional(Schema.NullOr(Schema.String)),
  github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
  signal_report: Schema.optional(Schema.NullOr(Schema.String)),
  signal_report_task_relationship: Schema.optional(
    Schema.Literals(["implementation"]),
  ),
  json_schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
  internal: Schema.optional(Schema.Boolean),
  latest_run: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  created_at: Schema.String,
  updated_at: Schema.String,
  created_by: Schema.Struct({
    id: Schema.Number,
    uuid: Schema.String,
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.String,
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    hedgehog_config: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role_at_organization: Schema.optional(Schema.Unknown),
  }),
  ci_prompt: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/api/projects/{project_id}/tasks/" }));
export type TasksCreateInput = typeof TasksCreateInput.Type;

// Output Schema
export const TasksCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  task_number: Schema.NullOr(Schema.Number),
  slug: Schema.String,
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
      "signal_report",
    ]),
  ),
  repository: Schema.optional(Schema.NullOr(Schema.String)),
  github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
  signal_report: Schema.optional(Schema.NullOr(Schema.String)),
  signal_report_task_relationship: Schema.optional(
    Schema.Literals(["implementation"]),
  ),
  json_schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
  internal: Schema.optional(Schema.Boolean),
  latest_run: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  created_at: Schema.String,
  updated_at: Schema.String,
  created_by: Schema.Struct({
    id: Schema.Number,
    uuid: Schema.String,
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.String,
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    hedgehog_config: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role_at_organization: Schema.optional(Schema.Unknown),
  }),
  ci_prompt: Schema.optional(Schema.NullOr(Schema.String)),
});
export type TasksCreateOutput = typeof TasksCreateOutput.Type;

// The operation
/**
 * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksCreateInput,
  outputSchema: TasksCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
