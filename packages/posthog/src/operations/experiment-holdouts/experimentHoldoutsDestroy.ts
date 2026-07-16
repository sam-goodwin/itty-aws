import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExperimentHoldoutsDestroyInput {
  id: number;
  project_id: string;
}
export const ExperimentHoldoutsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/experiment_holdouts/{id}/",
    }),
  ) as unknown as Schema.Codec<ExperimentHoldoutsDestroyInput>;

// Output Schema
export type ExperimentHoldoutsDestroyOutput = void;
export const ExperimentHoldoutsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExperimentHoldoutsDestroyOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this experiment holdout.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentHoldoutsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentHoldoutsDestroyInput,
  outputSchema: ExperimentHoldoutsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
