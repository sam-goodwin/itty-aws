import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SurveysDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/surveys/{id}/",
  }),
);
export type SurveysDestroyInput = typeof SurveysDestroyInput.Type;

// Output Schema
export const SurveysDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SurveysDestroyOutput = typeof SurveysDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SurveysDestroyInput,
  outputSchema: SurveysDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
