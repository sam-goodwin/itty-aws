import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsReviewQueueItemsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    queue_id: Schema.String,
    trace_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/review_queue_items/",
    }),
  );
export type LlmAnalyticsReviewQueueItemsCreateInput =
  typeof LlmAnalyticsReviewQueueItemsCreateInput.Type;

// Output Schema
export const LlmAnalyticsReviewQueueItemsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    queue_id: Schema.String,
    queue_name: Schema.String,
    trace_id: Schema.String,
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
export type LlmAnalyticsReviewQueueItemsCreateOutput =
  typeof LlmAnalyticsReviewQueueItemsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsReviewQueueItemsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueueItemsCreateInput,
    outputSchema: LlmAnalyticsReviewQueueItemsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
