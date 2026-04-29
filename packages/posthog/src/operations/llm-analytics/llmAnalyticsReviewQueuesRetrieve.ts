import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsReviewQueuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/review_queues/{id}/",
    }),
  );
export type LlmAnalyticsReviewQueuesRetrieveInput =
  typeof LlmAnalyticsReviewQueuesRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsReviewQueuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    pending_item_count: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
    created_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    team: Schema.Number,
  });
export type LlmAnalyticsReviewQueuesRetrieveOutput =
  typeof LlmAnalyticsReviewQueuesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this review queue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsReviewQueuesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueuesRetrieveInput,
    outputSchema: LlmAnalyticsReviewQueuesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
