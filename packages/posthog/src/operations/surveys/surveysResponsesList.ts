import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SurveysResponsesListInput {
  id: string;
  project_id: string;
  exclude_archived?: boolean;
  limit?: number;
  offset?: number;
  question_id?: string;
  score_gte?: number;
  score_lte?: number;
  since?: string;
  until?: string;
}
export const SurveysResponsesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    exclude_archived: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    question_id: Schema.optional(Schema.String),
    score_gte: Schema.optional(Schema.Number),
    score_lte: Schema.optional(Schema.Number),
    since: Schema.optional(Schema.String),
    until: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/{id}/responses/",
    }),
  ) as unknown as Schema.Codec<SurveysResponsesListInput>;

// Output Schema
export interface SurveysResponsesListOutput {
  results: {
    uuid: string;
    distinct_id: string;
    session_id: string | null;
    submitted_at: string;
    answers: {
      question_id: string;
      question_index: number;
      question_text: string;
      question_type: string;
      answer: unknown;
    }[];
    extra: {
      device_type?: string | null;
      browser?: string | null;
      os?: string | null;
      geoip_country_code?: string | null;
      geoip_country_name?: string | null;
      geoip_city_name?: string | null;
      current_url?: string | null;
      iteration?: string | null;
    };
  }[];
  has_more: boolean;
  limit: number;
  offset: number;
}
export const SurveysResponsesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        uuid: Schema.String,
        distinct_id: Schema.String,
        session_id: Schema.NullOr(Schema.String),
        submitted_at: Schema.String,
        answers: Schema.Array(
          Schema.Struct({
            question_id: Schema.String,
            question_index: Schema.Number,
            question_text: Schema.String,
            question_type: Schema.String,
            answer: Schema.Unknown,
          }),
        ),
        extra: Schema.Struct({
          device_type: Schema.optional(Schema.NullOr(Schema.String)),
          browser: Schema.optional(Schema.NullOr(Schema.String)),
          os: Schema.optional(Schema.NullOr(Schema.String)),
          geoip_country_code: Schema.optional(Schema.NullOr(Schema.String)),
          geoip_country_name: Schema.optional(Schema.NullOr(Schema.String)),
          geoip_city_name: Schema.optional(Schema.NullOr(Schema.String)),
          current_url: Schema.optional(Schema.NullOr(Schema.String)),
          iteration: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      }),
    ),
    has_more: Schema.Boolean,
    limit: Schema.Number,
    offset: Schema.Number,
  }) as unknown as Schema.Codec<SurveysResponsesListOutput>;

// The operation
/**
 * List survey responses for a specific survey, with question text resolved server-side so callers do not have to map opaque `$survey_response_<id>` keys. Each row carries `distinct_id`, `session_id`, `submitted_at`, and an `extra` block (device, browser, OS, geoip, current_url, iteration) so agents can cross-pivot to recordings, persons, or paths in a single follow-up call. For person properties at event time, follow up with `persons-get` using the returned `distinct_id` — keeps scopes scoped. Use `question_id` + `score_lte` to fetch NPS detractors and similar score-filtered cohorts.
 *
 * @param exclude_archived - When true, exclude responses that have been archived via the archive_response endpoint.
 * @param id - A UUID string identifying this survey.
 * @param limit - Maximum number of rows to return (1-500). Defaults to 100.
 * @param offset - Number of rows to skip for pagination. Combine with `limit` and the `has_more` field to paginate.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param question_id - If set, only return rows where this question has a non-empty answer, and only include that question's answer in each row. Required when using score_lte or score_gte.
 * @param score_gte - Filter to rows where the rating answer for `question_id` is >= this value. Common use: NPS promoters with score_gte=9. Requires question_id.
 * @param score_lte - Filter to rows where the rating answer for `question_id` is <= this value. Common use: NPS detractors with score_lte=6. Requires question_id.
 * @param since - Only return responses submitted on or after this ISO 8601 timestamp.
 * @param until - Only return responses submitted on or before this ISO 8601 timestamp.
 */
export const surveysResponsesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SurveysResponsesListInput,
    outputSchema: SurveysResponsesListOutput,
  }),
);
