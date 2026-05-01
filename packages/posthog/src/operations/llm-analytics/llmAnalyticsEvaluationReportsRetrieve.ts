import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsEvaluationReportsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/evaluation_reports/{id}/",
    }),
  );
export type LlmAnalyticsEvaluationReportsRetrieveInput =
  typeof LlmAnalyticsEvaluationReportsRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsEvaluationReportsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type LlmAnalyticsEvaluationReportsRetrieveOutput =
  typeof LlmAnalyticsEvaluationReportsRetrieveOutput.Type;

// The operation
/**
 * CRUD for evaluation report configurations + report run history.
 *
 * @param id - A UUID string identifying this evaluation report.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsEvaluationReportsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsEvaluationReportsRetrieveInput,
    outputSchema: LlmAnalyticsEvaluationReportsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
