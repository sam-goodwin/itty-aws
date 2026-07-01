import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsScoreDefinitionsListInput {
  project_id: string;
  archived?: boolean;
  kind?: string;
  limit?: number;
  offset?: number;
  order_by?: string;
  search?: string;
}
export const LlmAnalyticsScoreDefinitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    archived: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/score_definitions/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsScoreDefinitionsListInput>;

// Output Schema
export interface LlmAnalyticsScoreDefinitionsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string;
    description?: string;
    kind?: "categorical" | "numeric" | "boolean";
    archived?: boolean;
    current_version?: number;
    current_version_id?: string | null;
    config?:
      | {
          options?: { key?: string; label?: string }[];
          selection_mode?: "single" | "multiple";
          min_selections?: number | null;
          max_selections?: number | null;
        }
      | { min?: number | null; max?: number | null; step?: number | null }
      | { true_label?: string; false_label?: string };
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
    updated_at?: string | null;
    team?: number;
  }[];
}
export const LlmAnalyticsScoreDefinitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          kind: Schema.optional(
            Schema.Literals(["categorical", "numeric", "boolean"]),
          ),
          archived: Schema.optional(Schema.Boolean),
          current_version: Schema.optional(Schema.Number),
          current_version_id: Schema.optional(Schema.NullOr(Schema.String)),
          config: Schema.optional(
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
                min_selections: Schema.optional(Schema.NullOr(Schema.Number)),
                max_selections: Schema.optional(Schema.NullOr(Schema.Number)),
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
          updated_at: Schema.optional(Schema.NullOr(Schema.String)),
          team: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LlmAnalyticsScoreDefinitionsListOutput>;

// The operation
/**
 *
 * @param archived - Filter by archived state.
 * @param kind - Filter by scorer kind.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Sort by name, kind, created_at, updated_at, or current_version.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search scorers by name or description.
 */
export const llmAnalyticsScoreDefinitionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsScoreDefinitionsListInput,
    outputSchema: LlmAnalyticsScoreDefinitionsListOutput,
  }));
