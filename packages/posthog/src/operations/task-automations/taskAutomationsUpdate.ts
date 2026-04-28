import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const TaskAutomationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    prompt: Schema.String,
    repository: Schema.String,
    github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
    cron_expression: Schema.String,
    timezone: Schema.optional(Schema.String),
    template_id: Schema.optional(Schema.NullOr(Schema.String)),
    enabled: Schema.optional(Schema.Boolean),
    last_run_at: Schema.NullOr(Schema.String),
    last_run_status: Schema.NullOr(Schema.String),
    last_task_id: Schema.NullOr(Schema.String),
    last_task_run_id: Schema.NullOr(Schema.String),
    last_error: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/task_automations/{id}/",
    }),
  );
export type TaskAutomationsUpdateInput = typeof TaskAutomationsUpdateInput.Type;

// Output Schema
export const TaskAutomationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    prompt: Schema.String,
    repository: Schema.String,
    github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
    cron_expression: Schema.String,
    timezone: Schema.optional(Schema.String),
    template_id: Schema.optional(Schema.NullOr(Schema.String)),
    enabled: Schema.optional(Schema.Boolean),
    last_run_at: Schema.NullOr(Schema.String),
    last_run_status: Schema.NullOr(Schema.String),
    last_task_id: Schema.NullOr(Schema.String),
    last_task_run_id: Schema.NullOr(Schema.String),
    last_error: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type TaskAutomationsUpdateOutput =
  typeof TaskAutomationsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this task automation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const taskAutomationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TaskAutomationsUpdateInput,
    outputSchema: TaskAutomationsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
