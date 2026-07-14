import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsScoreDefinitionsPartialUpdateInput {
  id: string;
  project_id: string;
  name?: string;
  description?: string | null;
  archived?: boolean;
}
export const LlmAnalyticsScoreDefinitionsPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    archived: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/llm_analytics/score_definitions/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsScoreDefinitionsPartialUpdateInput>;

// Output Schema
export interface LlmAnalyticsScoreDefinitionsPartialUpdateOutput {
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
}
export const LlmAnalyticsScoreDefinitionsPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    team: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<LlmAnalyticsScoreDefinitionsPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this score definition.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsScoreDefinitionsPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsScoreDefinitionsPartialUpdateInput,
    outputSchema: LlmAnalyticsScoreDefinitionsPartialUpdateOutput,
  }));
