import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsReviewQueueItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(Schema.String),
    queue_id: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
    trace_id: Schema.optional(Schema.String),
    trace_id__in: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/review_queue_items/",
    }),
  );
export type LlmAnalyticsReviewQueueItemsListInput =
  typeof LlmAnalyticsReviewQueueItemsListInput.Type;

// Output Schema
export const LlmAnalyticsReviewQueueItemsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          queue_id: Schema.optional(Schema.String),
          queue_name: Schema.optional(Schema.String),
          trace_id: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.NullOr(Schema.String)),
          created_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                uuid: Schema.optional(Schema.String),
                distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.String),
                last_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                hedgehog_config: Schema.optional(
                  Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                role_at_organization: Schema.optional(Schema.Unknown),
              }),
            ),
          ),
          team: Schema.optional(Schema.Number),
        }),
      ),
    ),
  });
export type LlmAnalyticsReviewQueueItemsListOutput =
  typeof LlmAnalyticsReviewQueueItemsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Order by `created_at` or `updated_at`.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param queue_id - Filter by a specific review queue ID.
 * @param search - Search pending trace IDs.
 * @param trace_id - Filter by an exact trace ID.
 * @param trace_id__in - Filter by multiple trace IDs separated by commas.
 */
export const llmAnalyticsReviewQueueItemsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueueItemsListInput,
    outputSchema: LlmAnalyticsReviewQueueItemsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
