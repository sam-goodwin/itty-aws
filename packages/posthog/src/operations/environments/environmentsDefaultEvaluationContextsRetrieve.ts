import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EnvironmentsDefaultEvaluationContextsRetrieveInput {
  id: number;
  project_id: string;
}
export const EnvironmentsDefaultEvaluationContextsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/environments/{id}/default_evaluation_contexts/",
    }),
  ) as unknown as Schema.Codec<EnvironmentsDefaultEvaluationContextsRetrieveInput>;

// Output Schema
export type EnvironmentsDefaultEvaluationContextsRetrieveOutput = void;
export const EnvironmentsDefaultEvaluationContextsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentsDefaultEvaluationContextsRetrieveOutput>;

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
