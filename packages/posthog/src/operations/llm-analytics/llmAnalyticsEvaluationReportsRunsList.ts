import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsEvaluationReportsRunsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/evaluation_reports/{id}/runs/",
    }),
  );
export type LlmAnalyticsEvaluationReportsRunsListInput =
  typeof LlmAnalyticsEvaluationReportsRunsListInput.Type;

// Output Schema
export const LlmAnalyticsEvaluationReportsRunsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          report: Schema.optional(Schema.String),
          content: Schema.optional(Schema.Unknown),
          metadata: Schema.optional(Schema.Unknown),
          period_start: Schema.optional(Schema.String),
          period_end: Schema.optional(Schema.String),
          delivery_status: Schema.optional(
            Schema.Literals([
              "pending",
              "delivered",
              "partial_failure",
              "failed",
            ]),
          ),
          delivery_errors: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type LlmAnalyticsEvaluationReportsRunsListOutput =
  typeof LlmAnalyticsEvaluationReportsRunsListOutput.Type;

// The operation
/**
 * List report runs (history) for this report.
 *
 * @param id - A UUID string identifying this evaluation report.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsEvaluationReportsRunsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsEvaluationReportsRunsListInput,
    outputSchema: LlmAnalyticsEvaluationReportsRunsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
