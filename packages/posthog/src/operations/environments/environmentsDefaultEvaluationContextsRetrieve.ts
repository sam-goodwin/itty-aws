import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const EnvironmentsDefaultEvaluationContextsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/environments/{id}/default_evaluation_contexts/",
    }),
  );
export type EnvironmentsDefaultEvaluationContextsRetrieveInput =
  typeof EnvironmentsDefaultEvaluationContextsRetrieveInput.Type;

// Output Schema
export const EnvironmentsDefaultEvaluationContextsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EnvironmentsDefaultEvaluationContextsRetrieveOutput =
  typeof EnvironmentsDefaultEvaluationContextsRetrieveOutput.Type;

// The operation
/**
 * Manage default evaluation contexts for a team.
 *
 * @param id - A unique integer value identifying this environment (aka team).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentsDefaultEvaluationContextsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsDefaultEvaluationContextsRetrieveInput,
    outputSchema: EnvironmentsDefaultEvaluationContextsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
