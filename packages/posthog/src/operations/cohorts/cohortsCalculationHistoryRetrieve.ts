import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface CohortsCalculationHistoryRetrieveInput {
  id: number;
  project_id: string;
}
export const CohortsCalculationHistoryRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/cohorts/{id}/calculation_history/",
    }),
  ) as unknown as Schema.Codec<CohortsCalculationHistoryRetrieveInput>;

// Output Schema
export type CohortsCalculationHistoryRetrieveOutput = void;
export const CohortsCalculationHistoryRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CohortsCalculationHistoryRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsCalculationHistoryRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CohortsCalculationHistoryRetrieveInput,
    outputSchema: CohortsCalculationHistoryRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
