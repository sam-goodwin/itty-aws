import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const CohortsPersonsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/cohorts/{id}/persons/",
    }),
  );
export type CohortsPersonsRetrieveInput =
  typeof CohortsPersonsRetrieveInput.Type;

// Output Schema
export const CohortsPersonsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CohortsPersonsRetrieveOutput =
  typeof CohortsPersonsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsPersonsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CohortsPersonsRetrieveInput,
    outputSchema: CohortsPersonsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
