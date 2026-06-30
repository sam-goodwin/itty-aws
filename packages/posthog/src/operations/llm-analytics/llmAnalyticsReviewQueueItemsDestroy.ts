import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsReviewQueueItemsDestroyInput {
  id: string;
  project_id: string;
}
export const LlmAnalyticsReviewQueueItemsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/llm_analytics/review_queue_items/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsReviewQueueItemsDestroyInput>;

// Output Schema
export type LlmAnalyticsReviewQueueItemsDestroyOutput = void;
export const LlmAnalyticsReviewQueueItemsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LlmAnalyticsReviewQueueItemsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this review queue item.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsReviewQueueItemsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueueItemsDestroyInput,
    outputSchema: LlmAnalyticsReviewQueueItemsDestroyOutput,
  }));
