import * as Schema from "effect/Schema";
import { ReviewQueueSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsReviewQueuesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/review_queues/",
    }),
  );
export type LlmAnalyticsReviewQueuesListInput =
  typeof LlmAnalyticsReviewQueuesListInput.Type;

// Output Schema
export const LlmAnalyticsReviewQueuesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ReviewQueueSchema)),
    ),
  });
export type LlmAnalyticsReviewQueuesListOutput =
  typeof LlmAnalyticsReviewQueuesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Order by `name`, `updated_at`, or `created_at`.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search review queue names.
 */
export const llmAnalyticsReviewQueuesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueuesListInput,
    outputSchema: LlmAnalyticsReviewQueuesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
