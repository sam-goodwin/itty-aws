import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SurveysAllActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/activity/",
    }),
  );
export type SurveysAllActivityRetrieveInput =
  typeof SurveysAllActivityRetrieveInput.Type;

// Output Schema
export const SurveysAllActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SurveysAllActivityRetrieveOutput =
  typeof SurveysAllActivityRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysAllActivityRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SurveysAllActivityRetrieveInput,
    outputSchema: SurveysAllActivityRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
