import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const SurveysGlobalStatsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/stats/",
    }),
  );
export type SurveysGlobalStatsRetrieveInput =
  typeof SurveysGlobalStatsRetrieveInput.Type;

// Output Schema
export const SurveysGlobalStatsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stats: Schema.Record(Schema.String, Schema.Unknown),
    rates: Schema.Record(Schema.String, Schema.Unknown),
  });
export type SurveysGlobalStatsRetrieveOutput =
  typeof SurveysGlobalStatsRetrieveOutput.Type;

// The operation
/**
 * Get aggregated response statistics across all surveys.
 * Args:
 * date_from: Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z)
 * date_to: Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z)
 * Returns:
 * Aggregated statistics across all surveys including total counts and rates
 *
 * @param date_from - Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z)
 * @param date_to - Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysGlobalStatsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SurveysGlobalStatsRetrieveInput,
    outputSchema: SurveysGlobalStatsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
