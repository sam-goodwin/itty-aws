import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SurveysStatsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/{id}/stats/",
    }),
  );
export type SurveysStatsRetrieveInput = typeof SurveysStatsRetrieveInput.Type;

// Output Schema
export const SurveysStatsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    survey_id: Schema.String,
    start_date: Schema.NullOr(Schema.String),
    end_date: Schema.NullOr(Schema.String),
    stats: Schema.Record(Schema.String, Schema.Unknown),
    rates: Schema.Record(Schema.String, Schema.Unknown),
  });
export type SurveysStatsRetrieveOutput = typeof SurveysStatsRetrieveOutput.Type;

// The operation
/**
 * Get survey response statistics for a specific survey.
 * Args:
 * date_from: Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z)
 * date_to: Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z)
 * exclude_archived: Optional boolean to exclude archived responses (default: false, includes archived)
 * Returns:
 * Survey statistics including event counts, unique respondents, and conversion rates
 *
 * @param date_from - Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z)
 * @param date_to - Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z)
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysStatsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SurveysStatsRetrieveInput,
    outputSchema: SurveysStatsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
