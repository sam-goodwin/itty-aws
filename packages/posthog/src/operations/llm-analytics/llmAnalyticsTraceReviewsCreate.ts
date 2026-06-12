import * as Schema from "effect/Schema";
import {
  TraceReviewScoreSchema,
  TraceReviewScoreWriteSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsTraceReviewsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    trace_id: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.NullOr(Schema.String)),
    scores: Schema.optional(
      Schema.Array(Schema.suspend(() => TraceReviewScoreWriteSchema)),
    ),
    queue_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/trace_reviews/",
    }),
  );
export type LlmAnalyticsTraceReviewsCreateInput =
  typeof LlmAnalyticsTraceReviewsCreateInput.Type;

// Output Schema
export const LlmAnalyticsTraceReviewsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    trace_id: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.NullOr(Schema.String)),
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
    reviewed_by: Schema.optional(
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
    scores: Schema.optional(
      Schema.Array(Schema.suspend(() => TraceReviewScoreSchema)),
    ),
    team: Schema.optional(Schema.Number),
  });
export type LlmAnalyticsTraceReviewsCreateOutput =
  typeof LlmAnalyticsTraceReviewsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsTraceReviewsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsTraceReviewsCreateInput,
    outputSchema: LlmAnalyticsTraceReviewsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
