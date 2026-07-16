import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsReviewQueuesDestroyInput {
  id: string;
  project_id: string;
}
export const LlmAnalyticsReviewQueuesDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/llm_analytics/review_queues/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsReviewQueuesDestroyInput>;

// Output Schema
export type LlmAnalyticsReviewQueuesDestroyOutput = void;
export const LlmAnalyticsReviewQueuesDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LlmAnalyticsReviewQueuesDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this review queue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsReviewQueuesDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueuesDestroyInput,
    outputSchema: LlmAnalyticsReviewQueuesDestroyOutput,
  }));
