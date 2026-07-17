import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsTraceReviewsDestroyInput {
  id: string;
  project_id: string;
}
export const LlmAnalyticsTraceReviewsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/llm_analytics/trace_reviews/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsTraceReviewsDestroyInput>;

// Output Schema
export type LlmAnalyticsTraceReviewsDestroyOutput = void;
export const LlmAnalyticsTraceReviewsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LlmAnalyticsTraceReviewsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this trace review.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsTraceReviewsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsTraceReviewsDestroyInput,
    outputSchema: LlmAnalyticsTraceReviewsDestroyOutput,
  }));
