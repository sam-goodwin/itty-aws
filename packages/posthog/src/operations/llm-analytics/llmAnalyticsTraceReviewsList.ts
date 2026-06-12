import * as Schema from "effect/Schema";
import { TraceReviewSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsTraceReviewsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    definition_id: Schema.optional(Schema.String),
    definition_id__in: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
    trace_id: Schema.optional(Schema.String),
    trace_id__in: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/trace_reviews/",
    }),
  );
export type LlmAnalyticsTraceReviewsListInput =
  typeof LlmAnalyticsTraceReviewsListInput.Type;

// Output Schema
export const LlmAnalyticsTraceReviewsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => TraceReviewSchema)),
    ),
  });
export type LlmAnalyticsTraceReviewsListOutput =
  typeof LlmAnalyticsTraceReviewsListOutput.Type;

// The operation
/**
 *
 * @param definition_id - Filter by a stable scorer definition ID.
 * @param definition_id__in - Filter by multiple scorer definition IDs separated by commas.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Order by `updated_at` or `created_at`.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search trace IDs and comments.
 * @param trace_id - Filter by an exact trace ID.
 * @param trace_id__in - Filter by multiple trace IDs separated by commas.
 */
export const llmAnalyticsTraceReviewsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsTraceReviewsListInput,
    outputSchema: LlmAnalyticsTraceReviewsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
