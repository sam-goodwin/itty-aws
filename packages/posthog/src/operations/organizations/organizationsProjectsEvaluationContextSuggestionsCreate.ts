import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const OrganizationsProjectsEvaluationContextSuggestionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
    context_name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/projects/{id}/evaluation_context_suggestions/",
    }),
  );
export type OrganizationsProjectsEvaluationContextSuggestionsCreateInput =
  typeof OrganizationsProjectsEvaluationContextSuggestionsCreateInput.Type;

// Output Schema
export const OrganizationsProjectsEvaluationContextSuggestionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
    name: Schema.String,
    hidden_from_suggestions: Schema.Boolean,
  });
export type OrganizationsProjectsEvaluationContextSuggestionsCreateOutput =
  typeof OrganizationsProjectsEvaluationContextSuggestionsCreateOutput.Type;

// The operation
/**
 * Hide an evaluation context name from the flag editor's suggestion list, or restore it.
 * POST hides the name; DELETE restores it. The underlying context row and any flags already
 * using it are never modified — this only controls what gets suggested.
 *
 * @param id - A unique value identifying this project.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const organizationsProjectsEvaluationContextSuggestionsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsProjectsEvaluationContextSuggestionsCreateInput,
    outputSchema: OrganizationsProjectsEvaluationContextSuggestionsCreateOutput,
  }));
