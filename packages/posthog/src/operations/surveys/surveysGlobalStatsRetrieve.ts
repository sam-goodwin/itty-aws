import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SurveysGlobalStatsRetrieveInput {
  project_id: string;
  date_from?: string;
  date_to?: string;
}
export const SurveysGlobalStatsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/stats/",
    }),
  ) as unknown as Schema.Codec<SurveysGlobalStatsRetrieveInput>;

// Output Schema
export interface SurveysGlobalStatsRetrieveOutput {
  stats?: Record<string, unknown>;
  rates?: Record<string, unknown>;
}
export const SurveysGlobalStatsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    stats: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    rates: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }) as unknown as Schema.Codec<SurveysGlobalStatsRetrieveOutput>;

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
export const surveysGlobalStatsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: SurveysGlobalStatsRetrieveInput,
  outputSchema: SurveysGlobalStatsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
