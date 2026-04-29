import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsTraceReviewsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/llm_analytics/trace_reviews/{id}/",
    }),
  );
export type LlmAnalyticsTraceReviewsDestroyInput =
  typeof LlmAnalyticsTraceReviewsDestroyInput.Type;

// Output Schema
export const LlmAnalyticsTraceReviewsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LlmAnalyticsTraceReviewsDestroyOutput =
  typeof LlmAnalyticsTraceReviewsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this trace review.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsTraceReviewsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsTraceReviewsDestroyInput,
    outputSchema: LlmAnalyticsTraceReviewsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
