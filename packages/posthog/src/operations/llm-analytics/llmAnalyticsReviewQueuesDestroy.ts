import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsReviewQueuesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/llm_analytics/review_queues/{id}/",
    }),
  );
export type LlmAnalyticsReviewQueuesDestroyInput =
  typeof LlmAnalyticsReviewQueuesDestroyInput.Type;

// Output Schema
export const LlmAnalyticsReviewQueuesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LlmAnalyticsReviewQueuesDestroyOutput =
  typeof LlmAnalyticsReviewQueuesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this review queue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsReviewQueuesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueuesDestroyInput,
    outputSchema: LlmAnalyticsReviewQueuesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
