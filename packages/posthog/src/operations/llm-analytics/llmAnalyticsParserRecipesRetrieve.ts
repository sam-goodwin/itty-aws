import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsParserRecipesRetrieveInput {
  id: string;
  project_id: string;
}
export const LlmAnalyticsParserRecipesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/parser_recipes/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsParserRecipesRetrieveInput>;

// Output Schema
export interface LlmAnalyticsParserRecipesRetrieveOutput {
  id: string;
  name: string;
  source: string;
  created_by: {
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
  created_at: string;
  updated_at: string | null;
}
export const LlmAnalyticsParserRecipesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    source: Schema.String,
    created_by: Schema.NullOr(
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
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<LlmAnalyticsParserRecipesRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this parser recipe.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsParserRecipesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsParserRecipesRetrieveInput,
    outputSchema: LlmAnalyticsParserRecipesRetrieveOutput,
  }));
