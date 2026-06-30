import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmAnalyticsParserRecipesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/llm_analytics/parser_recipes/{id}/",
    }),
  );
export type LlmAnalyticsParserRecipesDestroyInput =
  typeof LlmAnalyticsParserRecipesDestroyInput.Type;

// Output Schema
export const LlmAnalyticsParserRecipesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LlmAnalyticsParserRecipesDestroyOutput =
  typeof LlmAnalyticsParserRecipesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this parser recipe.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsParserRecipesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsParserRecipesDestroyInput,
    outputSchema: LlmAnalyticsParserRecipesDestroyOutput,
  }));
