import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CohortsAddPersonsToStaticCohortPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    person_ids: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/cohorts/{id}/add_persons_to_static_cohort/",
    }),
  );
export type CohortsAddPersonsToStaticCohortPartialUpdateInput =
  typeof CohortsAddPersonsToStaticCohortPartialUpdateInput.Type;

// Output Schema
export const CohortsAddPersonsToStaticCohortPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CohortsAddPersonsToStaticCohortPartialUpdateOutput =
  typeof CohortsAddPersonsToStaticCohortPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsAddPersonsToStaticCohortPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CohortsAddPersonsToStaticCohortPartialUpdateInput,
    outputSchema: CohortsAddPersonsToStaticCohortPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
