import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const OrganizationsProjectsDefaultEvaluationContextsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/projects/{id}/default_evaluation_contexts/",
    }),
  );
export type OrganizationsProjectsDefaultEvaluationContextsDestroyInput =
  typeof OrganizationsProjectsDefaultEvaluationContextsDestroyInput.Type;

// Output Schema
export const OrganizationsProjectsDefaultEvaluationContextsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrganizationsProjectsDefaultEvaluationContextsDestroyOutput =
  typeof OrganizationsProjectsDefaultEvaluationContextsDestroyOutput.Type;

// The operation
/**
 * Manage default evaluation contexts for a project.
 *
 * @param id - A unique value identifying this project.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const organizationsProjectsDefaultEvaluationContextsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsProjectsDefaultEvaluationContextsDestroyInput,
    outputSchema: OrganizationsProjectsDefaultEvaluationContextsDestroyOutput,
  }));
