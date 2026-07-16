import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EnvironmentsDefaultEvaluationContextsDestroyInput {
  id: number;
  project_id: string;
}
export const EnvironmentsDefaultEvaluationContextsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/environments/{id}/default_evaluation_contexts/",
    }),
  ) as unknown as Schema.Codec<EnvironmentsDefaultEvaluationContextsDestroyInput>;

// Output Schema
export type EnvironmentsDefaultEvaluationContextsDestroyOutput = void;
export const EnvironmentsDefaultEvaluationContextsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentsDefaultEvaluationContextsDestroyOutput>;

// The operation
/**
 * Manage default evaluation contexts for a team.
 *
 * @param id - A unique integer value identifying this environment (aka team).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentsDefaultEvaluationContextsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsDefaultEvaluationContextsDestroyInput,
    outputSchema: EnvironmentsDefaultEvaluationContextsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
