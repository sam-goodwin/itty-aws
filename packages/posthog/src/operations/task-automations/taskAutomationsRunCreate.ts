import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TaskAutomationsRunCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    prompt: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
    github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
    cron_expression: Schema.optional(Schema.String),
    timezone: Schema.optional(Schema.String),
    template_id: Schema.optional(Schema.NullOr(Schema.String)),
    enabled: Schema.optional(Schema.Boolean),
    last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_run_status: Schema.optional(Schema.NullOr(Schema.String)),
    last_task_id: Schema.optional(Schema.NullOr(Schema.String)),
    last_task_run_id: Schema.optional(Schema.NullOr(Schema.String)),
    last_error: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/task_automations/{id}/run/",
    }),
  );
export type TaskAutomationsRunCreateInput =
  typeof TaskAutomationsRunCreateInput.Type;

// Output Schema
export const TaskAutomationsRunCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    prompt: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
    github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
    cron_expression: Schema.optional(Schema.String),
    timezone: Schema.optional(Schema.String),
    template_id: Schema.optional(Schema.NullOr(Schema.String)),
    enabled: Schema.optional(Schema.Boolean),
    last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_run_status: Schema.optional(Schema.NullOr(Schema.String)),
    last_task_id: Schema.optional(Schema.NullOr(Schema.String)),
    last_task_run_id: Schema.optional(Schema.NullOr(Schema.String)),
    last_error: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type TaskAutomationsRunCreateOutput =
  typeof TaskAutomationsRunCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this task automation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const taskAutomationsRunCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TaskAutomationsRunCreateInput,
    outputSchema: TaskAutomationsRunCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
