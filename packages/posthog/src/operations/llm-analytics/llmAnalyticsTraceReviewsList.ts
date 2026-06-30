import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsTraceReviewsListInput {
  project_id: string;
  definition_id?: string;
  definition_id__in?: string;
  limit?: number;
  offset?: number;
  order_by?: string;
  search?: string;
  trace_id?: string;
  trace_id__in?: string;
}
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
      path: "/api/projects/{project_id}/llm_analytics/trace_reviews/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsTraceReviewsListInput>;

// Output Schema
export interface LlmAnalyticsTraceReviewsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    trace_id?: string;
    trace_url?: string;
    comment?: string | null;
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
    reviewed_by?: {
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
    scores?: {
      id?: string;
      definition_id?: string;
      definition_name?: string;
      definition_kind?: string;
      definition_archived?: boolean;
      definition_version_id?: string;
      definition_version?: number;
      definition_config?:
        | {
            options?: { key?: string; label?: string }[];
            selection_mode?: "single" | "multiple";
            min_selections?: number | null;
            max_selections?: number | null;
          }
        | { min?: number | null; max?: number | null; step?: number | null }
        | { true_label?: string; false_label?: string };
      categorical_values?: string[] | null;
      numeric_value?: string | null;
      boolean_value?: boolean | null;
      created_at?: string;
      updated_at?: string | null;
    }[];
    team?: number;
  }[];
}
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
          trace_url: Schema.optional(Schema.String),
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
                definition_config: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      options: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            key: Schema.optional(Schema.String),
                            label: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      selection_mode: Schema.optional(
                        Schema.Literals(["single", "multiple"]),
                      ),
                      min_selections: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                      max_selections: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                    }),
                    Schema.Struct({
                      min: Schema.optional(Schema.NullOr(Schema.Number)),
                      max: Schema.optional(Schema.NullOr(Schema.Number)),
                      step: Schema.optional(Schema.NullOr(Schema.Number)),
                    }),
                    Schema.Struct({
                      true_label: Schema.optional(Schema.String),
                      false_label: Schema.optional(Schema.String),
                    }),
                  ]),
                ),
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
  }) as unknown as Schema.Codec<LlmAnalyticsTraceReviewsListOutput>;

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
  }));
