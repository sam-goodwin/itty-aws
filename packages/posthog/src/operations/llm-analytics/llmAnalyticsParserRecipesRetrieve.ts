import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmAnalyticsParserRecipesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/parser_recipes/{id}/",
    }),
  );
export type LlmAnalyticsParserRecipesRetrieveInput =
  typeof LlmAnalyticsParserRecipesRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsParserRecipesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    source: Schema.String,
    created_by: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  });
export type LlmAnalyticsParserRecipesRetrieveOutput =
  typeof LlmAnalyticsParserRecipesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this parser recipe.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsParserRecipesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsParserRecipesRetrieveInput,
    outputSchema: LlmAnalyticsParserRecipesRetrieveOutput,
  }));
