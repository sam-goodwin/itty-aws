import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TaskAutomationsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/task_automations/{id}/",
    }),
  );
export type TaskAutomationsRetrieveInput =
  typeof TaskAutomationsRetrieveInput.Type;

// Output Schema
export const TaskAutomationsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type TaskAutomationsRetrieveOutput =
  typeof TaskAutomationsRetrieveOutput.Type;

// The operation
/**
 * API for managing scheduled task automations.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const taskAutomationsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TaskAutomationsRetrieveInput,
    outputSchema: TaskAutomationsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
