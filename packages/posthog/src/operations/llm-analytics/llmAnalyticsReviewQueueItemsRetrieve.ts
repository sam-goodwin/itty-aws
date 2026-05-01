import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsReviewQueueItemsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/review_queue_items/{id}/",
    }),
  );
export type LlmAnalyticsReviewQueueItemsRetrieveInput =
  typeof LlmAnalyticsReviewQueueItemsRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsReviewQueueItemsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    team: Schema.optional(Schema.Number),
  });
export type LlmAnalyticsReviewQueueItemsRetrieveOutput =
  typeof LlmAnalyticsReviewQueueItemsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this review queue item.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsReviewQueueItemsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueueItemsRetrieveInput,
    outputSchema: LlmAnalyticsReviewQueueItemsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
