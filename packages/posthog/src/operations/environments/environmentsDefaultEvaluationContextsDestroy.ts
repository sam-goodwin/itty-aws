import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const EnvironmentsDefaultEvaluationContextsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/environments/{id}/default_evaluation_contexts/",
    }),
  );
export type EnvironmentsDefaultEvaluationContextsDestroyInput =
  typeof EnvironmentsDefaultEvaluationContextsDestroyInput.Type;

// Output Schema
export const EnvironmentsDefaultEvaluationContextsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EnvironmentsDefaultEvaluationContextsDestroyOutput =
  typeof EnvironmentsDefaultEvaluationContextsDestroyOutput.Type;

// The operation
/**
 * Manage default evaluation contexts for a team.
 *
 * @param id - A unique integer value identifying this environment (aka team).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentsDefaultEvaluationContextsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsDefaultEvaluationContextsDestroyInput,
    outputSchema: EnvironmentsDefaultEvaluationContextsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
