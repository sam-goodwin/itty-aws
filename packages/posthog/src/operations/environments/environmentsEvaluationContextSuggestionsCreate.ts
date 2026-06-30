import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const EnvironmentsEvaluationContextSuggestionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    context_name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/environments/{id}/evaluation_context_suggestions/",
    }),
  );
export type EnvironmentsEvaluationContextSuggestionsCreateInput =
  typeof EnvironmentsEvaluationContextSuggestionsCreateInput.Type;

// Output Schema
export const EnvironmentsEvaluationContextSuggestionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
    name: Schema.String,
    hidden_from_suggestions: Schema.Boolean,
  });
export type EnvironmentsEvaluationContextSuggestionsCreateOutput =
  typeof EnvironmentsEvaluationContextSuggestionsCreateOutput.Type;

// The operation
/**
 * Hide an evaluation context name from the flag editor's suggestion list, or restore it.
 * POST hides the name; DELETE restores it. The underlying context row and any flags already
 * using it are never modified — this only controls what gets suggested.
 *
 * @param id - A unique integer value identifying this environment (aka team).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentsEvaluationContextSuggestionsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsEvaluationContextSuggestionsCreateInput,
    outputSchema: EnvironmentsEvaluationContextSuggestionsCreateOutput,
  }));
