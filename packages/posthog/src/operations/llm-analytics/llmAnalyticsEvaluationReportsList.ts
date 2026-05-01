import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsEvaluationReportsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/evaluation_reports/",
    }),
  );
export type LlmAnalyticsEvaluationReportsListInput =
  typeof LlmAnalyticsEvaluationReportsListInput.Type;

// Output Schema
export const LlmAnalyticsEvaluationReportsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        evaluation: Schema.String,
        frequency: Schema.optional(Schema.Literals(["scheduled", "every_n"])),
        rrule: Schema.optional(Schema.String),
        starts_at: Schema.optional(Schema.NullOr(Schema.String)),
        timezone_name: Schema.optional(Schema.String),
        next_delivery_date: Schema.NullOr(Schema.String),
        delivery_targets: Schema.optional(Schema.Unknown),
        max_sample_size: Schema.optional(Schema.Number),
        enabled: Schema.optional(Schema.Boolean),
        deleted: Schema.optional(Schema.Boolean),
        last_delivered_at: Schema.NullOr(Schema.String),
        report_prompt_guidance: Schema.optional(Schema.String),
        trigger_threshold: Schema.optional(Schema.NullOr(Schema.Number)),
        cooldown_minutes: Schema.optional(Schema.Number),
        daily_run_cap: Schema.optional(Schema.Number),
        created_by: Schema.NullOr(Schema.Number),
        created_at: Schema.String,
      }),
    ),
  });
export type LlmAnalyticsEvaluationReportsListOutput =
  typeof LlmAnalyticsEvaluationReportsListOutput.Type;

// The operation
/**
 * CRUD for evaluation report configurations + report run history.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsEvaluationReportsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsEvaluationReportsListInput,
    outputSchema: LlmAnalyticsEvaluationReportsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
