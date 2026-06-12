import * as Schema from "effect/Schema";
import { SurveySchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SurveysListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  archived: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/api/projects/{project_id}/surveys/" }));
export type SurveysListInput = typeof SurveysListInput.Type;

// Output Schema
export const SurveysListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(Schema.Array(Schema.suspend(() => SurveySchema))),
});
export type SurveysListOutput = typeof SurveysListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const surveysList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SurveysListInput,
  outputSchema: SurveysListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
