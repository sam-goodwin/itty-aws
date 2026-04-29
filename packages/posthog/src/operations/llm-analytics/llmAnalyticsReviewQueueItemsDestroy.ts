import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsReviewQueueItemsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/llm_analytics/review_queue_items/{id}/",
    }),
  );
export type LlmAnalyticsReviewQueueItemsDestroyInput =
  typeof LlmAnalyticsReviewQueueItemsDestroyInput.Type;

// Output Schema
export const LlmAnalyticsReviewQueueItemsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LlmAnalyticsReviewQueueItemsDestroyOutput =
  typeof LlmAnalyticsReviewQueueItemsDestroyOutput.Type;

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
    errors: [Forbidden, NotFound] as const,
  }));
