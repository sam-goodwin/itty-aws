import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExperimentSavedMetricsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
  search?: string;
}
export const ExperimentSavedMetricsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiment_saved_metrics/",
    }),
  ) as unknown as Schema.Codec<ExperimentSavedMetricsListInput>;

// Output Schema
export interface ExperimentSavedMetricsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: number;
    name?: string;
    description?: string | null;
    query?: unknown;
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
    created_at?: string;
    updated_at?: string;
    tags?: unknown[];
    user_access_level?: string | null;
  }[];
}
export const ExperimentSavedMetricsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.NullOr(Schema.String)),
          query: Schema.optional(Schema.Unknown),
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
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Array(Schema.Unknown)),
          user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ExperimentSavedMetricsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const experimentSavedMetricsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExperimentSavedMetricsListInput,
    outputSchema: ExperimentSavedMetricsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
