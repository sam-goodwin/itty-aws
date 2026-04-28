import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const CohortsActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/cohorts/{id}/activity/",
    }),
  );
export type CohortsActivityRetrieveInput =
  typeof CohortsActivityRetrieveInput.Type;

// Output Schema
export const CohortsActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CohortsActivityRetrieveOutput =
  typeof CohortsActivityRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsActivityRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CohortsActivityRetrieveInput,
    outputSchema: CohortsActivityRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
