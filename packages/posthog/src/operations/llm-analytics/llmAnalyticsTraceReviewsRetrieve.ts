import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsTraceReviewsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/trace_reviews/{id}/",
    }),
  );
export type LlmAnalyticsTraceReviewsRetrieveInput =
  typeof LlmAnalyticsTraceReviewsRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsTraceReviewsRetrieveOutput =
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
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          definition_id: Schema.optional(Schema.String),
          definition_name: Schema.optional(Schema.String),
          definition_kind: Schema.optional(Schema.String),
          definition_archived: Schema.optional(Schema.Boolean),
          definition_version_id: Schema.optional(Schema.String),
          definition_version: Schema.optional(Schema.Number),
          definition_config: Schema.optional(Schema.Unknown),
          categorical_values: Schema.optional(
            Schema.NullOr(Schema.Array(Schema.String)),
          ),
          numeric_value: Schema.optional(Schema.NullOr(Schema.String)),
          boolean_value: Schema.optional(Schema.NullOr(Schema.Boolean)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    team: Schema.optional(Schema.Number),
  });
export type LlmAnalyticsTraceReviewsRetrieveOutput =
  typeof LlmAnalyticsTraceReviewsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this trace review.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsTraceReviewsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsTraceReviewsRetrieveInput,
    outputSchema: LlmAnalyticsTraceReviewsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
