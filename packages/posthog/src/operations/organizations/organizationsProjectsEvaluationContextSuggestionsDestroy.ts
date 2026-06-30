import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const OrganizationsProjectsEvaluationContextSuggestionsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
    context_name: Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/projects/{id}/evaluation_context_suggestions/",
    }),
  );
export type OrganizationsProjectsEvaluationContextSuggestionsDestroyInput =
  typeof OrganizationsProjectsEvaluationContextSuggestionsDestroyInput.Type;

// Output Schema
export const OrganizationsProjectsEvaluationContextSuggestionsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
    name: Schema.String,
    hidden_from_suggestions: Schema.Boolean,
  });
export type OrganizationsProjectsEvaluationContextSuggestionsDestroyOutput =
  typeof OrganizationsProjectsEvaluationContextSuggestionsDestroyOutput.Type;

// The operation
/**
 * Hide an evaluation context name from the flag editor's suggestion list, or restore it.
 * POST hides the name; DELETE restores it. The underlying context row and any flags already
 * using it are never modified — this only controls what gets suggested.
 *
 * @param context_name - Name of the evaluation context to restore to suggestions.
 * @param id - A unique value identifying this project.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const organizationsProjectsEvaluationContextSuggestionsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsProjectsEvaluationContextSuggestionsDestroyInput,
    outputSchema:
      OrganizationsProjectsEvaluationContextSuggestionsDestroyOutput,
  }));
