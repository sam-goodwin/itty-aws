import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsTraceReviewsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    trace_id: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.NullOr(Schema.String)),
    scores: Schema.optional(
      Schema.Array(
        Schema.Struct({
          definition_id: Schema.String,
          definition_version_id: Schema.optional(Schema.NullOr(Schema.String)),
          categorical_values: Schema.optional(
            Schema.NullOr(Schema.Array(Schema.String)),
          ),
          numeric_value: Schema.optional(Schema.NullOr(Schema.String)),
          boolean_value: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    queue_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/llm_analytics/trace_reviews/{id}/",
    }),
  );
export type LlmAnalyticsTraceReviewsPartialUpdateInput =
  typeof LlmAnalyticsTraceReviewsPartialUpdateInput.Type;

// Output Schema
export const LlmAnalyticsTraceReviewsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    trace_id: Schema.String,
    comment: Schema.NullOr(Schema.String),
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
    reviewed_by: Schema.Struct({
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
    scores: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        definition_id: Schema.String,
        definition_name: Schema.String,
        definition_kind: Schema.String,
        definition_archived: Schema.Boolean,
        definition_version_id: Schema.String,
        definition_version: Schema.Number,
        definition_config: Schema.Unknown,
        categorical_values: Schema.NullOr(Schema.Array(Schema.String)),
        numeric_value: Schema.NullOr(Schema.String),
        boolean_value: Schema.NullOr(Schema.Boolean),
        created_at: Schema.String,
        updated_at: Schema.NullOr(Schema.String),
      }),
    ),
    team: Schema.Number,
  });
export type LlmAnalyticsTraceReviewsPartialUpdateOutput =
  typeof LlmAnalyticsTraceReviewsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this trace review.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsTraceReviewsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsTraceReviewsPartialUpdateInput,
    outputSchema: LlmAnalyticsTraceReviewsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
