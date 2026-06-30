import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmAnalyticsParserRecipesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/parser_recipes/",
    }),
  );
export type LlmAnalyticsParserRecipesListInput =
  typeof LlmAnalyticsParserRecipesListInput.Type;

// Output Schema
export const LlmAnalyticsParserRecipesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        source: Schema.String,
        created_by: Schema.Unknown,
        created_at: Schema.String,
        updated_at: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type LlmAnalyticsParserRecipesListOutput =
  typeof LlmAnalyticsParserRecipesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsParserRecipesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsParserRecipesListInput,
    outputSchema: LlmAnalyticsParserRecipesListOutput,
  }));
