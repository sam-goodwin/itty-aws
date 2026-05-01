import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsTraceReviewsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    definition_id: Schema.optional(Schema.String),
    definition_id__in: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
    trace_id: Schema.optional(Schema.String),
    trace_id__in: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/trace_reviews/",
    }),
  );
export type LlmAnalyticsTraceReviewsListInput =
  typeof LlmAnalyticsTraceReviewsListInput.Type;

// Output Schema
export const LlmAnalyticsTraceReviewsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
          reviewed_by: Schema.optional(
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
        }),
      ),
    ),
  });
export type LlmAnalyticsTraceReviewsListOutput =
  typeof LlmAnalyticsTraceReviewsListOutput.Type;

// The operation
/**
 *
 * @param definition_id - Filter by a stable scorer definition ID.
 * @param definition_id__in - Filter by multiple scorer definition IDs separated by commas.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Order by `updated_at` or `created_at`.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search trace IDs and comments.
 * @param trace_id - Filter by an exact trace ID.
 * @param trace_id__in - Filter by multiple trace IDs separated by commas.
 */
export const llmAnalyticsTraceReviewsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsTraceReviewsListInput,
    outputSchema: LlmAnalyticsTraceReviewsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
