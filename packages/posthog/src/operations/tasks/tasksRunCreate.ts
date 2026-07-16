import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRunCreateInput {
  id: string;
  project_id: string;
}
export const TasksRunCreateInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/projects/{project_id}/tasks/{id}/run/",
  }),
) as unknown as Schema.Codec<TasksRunCreateInput>;

// Output Schema
export interface TasksRunCreateOutput {
  id: string;
  task_number: number | null;
  slug: string;
  title: string;
  title_manually_set: boolean;
  description: string;
  origin_product: string;
  repository: string | null;
  github_integration: number | null;
  github_user_integration: string | null;
  signal_report: string | null;
  json_schema: Record<string, unknown> | null;
  internal: boolean;
  archived: boolean;
  archived_at: string | null;
  latest_run: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: {
    id: number;
    uuid: string;
    distinct_id: string;
    first_name: string;
    last_name: string;
    email: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?: string | null;
  } | null;
  ci_prompt: string | null;
}
export const TasksRunCreateOutput = /*@__PURE__*/ Schema.Struct({
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
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.String,
        first_name: Schema.String,
        last_name: Schema.String,
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
  ci_prompt: Schema.NullOr(Schema.String),
}) as unknown as Schema.Codec<TasksRunCreateOutput>;

// The operation
/**
 * Run task
 *
 * Create a new task run and kick off the workflow.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TasksRunCreateInput,
  outputSchema: TasksRunCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
