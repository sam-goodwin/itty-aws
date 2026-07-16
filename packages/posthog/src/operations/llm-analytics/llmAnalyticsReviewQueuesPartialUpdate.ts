import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsReviewQueuesPartialUpdateInput {
  id: string;
  project_id: string;
  name?: string;
}
export const LlmAnalyticsReviewQueuesPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/llm_analytics/review_queues/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsReviewQueuesPartialUpdateInput>;

// Output Schema
export interface LlmAnalyticsReviewQueuesPartialUpdateOutput {
  id?: string;
  name?: string;
  pending_item_count?: number;
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
export const LlmAnalyticsReviewQueuesPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    pending_item_count: Schema.optional(Schema.Number),
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
  }) as unknown as Schema.Codec<LlmAnalyticsReviewQueuesPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this review queue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsReviewQueuesPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsReviewQueuesPartialUpdateInput,
    outputSchema: LlmAnalyticsReviewQueuesPartialUpdateOutput,
  }));
