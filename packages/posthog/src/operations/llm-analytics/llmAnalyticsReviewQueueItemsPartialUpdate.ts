import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsReviewQueueItemsPartialUpdateInput {
  id: string;
  project_id: string;
  queue_id?: string;
}
export const LlmAnalyticsReviewQueueItemsPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    queue_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/llm_analytics/review_queue_items/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsReviewQueueItemsPartialUpdateInput>;

// Output Schema
export interface LlmAnalyticsReviewQueueItemsPartialUpdateOutput {
  id?: string;
  queue_id?: string;
  queue_name?: string;
  trace_id?: string;
  created_at?: string;
  updated_at?: string | null;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  team?: number;
}
export const LlmAnalyticsReviewQueueItemsPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    team: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<LlmAnalyticsReviewQueueItemsPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this review queue item.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsReviewQueueItemsPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueueItemsPartialUpdateInput,
    outputSchema: LlmAnalyticsReviewQueueItemsPartialUpdateOutput,
  }));
