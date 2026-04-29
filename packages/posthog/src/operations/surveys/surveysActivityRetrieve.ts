import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SurveysActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/{id}/activity/",
    }),
  );
export type SurveysActivityRetrieveInput =
  typeof SurveysActivityRetrieveInput.Type;

// Output Schema
export const SurveysActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SurveysActivityRetrieveOutput =
  typeof SurveysActivityRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysActivityRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SurveysActivityRetrieveInput,
    outputSchema: SurveysActivityRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
