import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
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
  );
export type TaskAutomationsListInput = typeof TaskAutomationsListInput.Type;

// Output Schema
export const TaskAutomationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  });
export type TaskAutomationsListOutput = typeof TaskAutomationsListOutput.Type;

// The operation
/**
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
