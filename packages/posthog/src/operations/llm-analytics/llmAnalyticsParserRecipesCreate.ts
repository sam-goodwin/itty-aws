import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmAnalyticsParserRecipesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    name: Schema.String,
    source: Schema.String,
    created_by: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_analytics/parser_recipes/",
    }),
  );
export type LlmAnalyticsParserRecipesCreateInput =
  typeof LlmAnalyticsParserRecipesCreateInput.Type;

// Output Schema
export const LlmAnalyticsParserRecipesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    source: Schema.String,
    created_by: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  });
export type LlmAnalyticsParserRecipesCreateOutput =
  typeof LlmAnalyticsParserRecipesCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsParserRecipesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsParserRecipesCreateInput,
    outputSchema: LlmAnalyticsParserRecipesCreateOutput,
  }));
