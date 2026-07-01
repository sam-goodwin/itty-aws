import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TaskAutomationsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const TaskAutomationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/task_automations/",
    }),
  ) as unknown as Schema.Codec<TaskAutomationsListInput>;

// Output Schema
export interface TaskAutomationsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    name: string;
    prompt: string;
    repository: string | null;
    github_integration: number | null;
    cron_expression: string;
    timezone: string;
    template_id: string | null;
    enabled: boolean;
    last_run_at: string | null;
    last_run_status: string | null;
    last_task_id: string;
    last_task_run_id: string | null;
    last_error: string | null;
    created_at: string;
    updated_at: string;
  }[];
}
export const TaskAutomationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        prompt: Schema.String,
        repository: Schema.NullOr(Schema.String),
        github_integration: Schema.NullOr(Schema.Number),
        cron_expression: Schema.String,
        timezone: Schema.String,
        template_id: Schema.NullOr(Schema.String),
        enabled: Schema.Boolean,
        last_run_at: Schema.NullOr(Schema.String),
        last_run_status: Schema.NullOr(Schema.String),
        last_task_id: Schema.String,
        last_task_run_id: Schema.NullOr(Schema.String),
        last_error: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<TaskAutomationsListOutput>;

// The operation
/**
 * API for managing scheduled task automations.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const taskAutomationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TaskAutomationsListInput,
  outputSchema: TaskAutomationsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
