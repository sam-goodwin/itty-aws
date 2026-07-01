import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface CohortsRemovePersonFromStaticCohortPartialUpdateInput {
  id: number;
  project_id: string;
  person_id?: string;
}
export const CohortsRemovePersonFromStaticCohortPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    person_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/cohorts/{id}/remove_person_from_static_cohort/",
    }),
  ) as unknown as Schema.Codec<CohortsRemovePersonFromStaticCohortPartialUpdateInput>;

// Output Schema
export type CohortsRemovePersonFromStaticCohortPartialUpdateOutput = void;
export const CohortsRemovePersonFromStaticCohortPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CohortsRemovePersonFromStaticCohortPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsRemovePersonFromStaticCohortPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CohortsRemovePersonFromStaticCohortPartialUpdateInput,
    outputSchema: CohortsRemovePersonFromStaticCohortPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
