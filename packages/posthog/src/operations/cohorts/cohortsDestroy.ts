import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface CohortsDestroyInput {
  id: number;
  project_id: string;
}
export const CohortsDestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/cohorts/{id}/",
  }),
) as unknown as Schema.Codec<CohortsDestroyInput>;

// Output Schema
export type CohortsDestroyOutput = void;
export const CohortsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CohortsDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: CohortsDestroyInput,
  outputSchema: CohortsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
