import * as Schema from "effect/Schema";
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
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      description: Schema.optional(Schema.String),
      type: Schema.Literals(["popover", "widget", "external_survey", "api"]),
      schedule: Schema.optional(Schema.NullOr(Schema.String)),
      linked_flag: Schema.Struct({
        id: Schema.Number,
        team_id: Schema.Number,
        name: Schema.optional(Schema.String),
        key: Schema.String,
        filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        deleted: Schema.optional(Schema.Boolean),
        active: Schema.optional(Schema.Boolean),
        ensure_experience_continuity: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(Schema.Unknown),
        bucketing_identifier: Schema.optional(Schema.Unknown),
        evaluation_contexts: Schema.Array(Schema.String),
      }),
      linked_flag_id: Schema.optional(Schema.NullOr(Schema.Number)),
      linked_insight_id: Schema.optional(Schema.NullOr(Schema.Number)),
      targeting_flag: Schema.Struct({
        id: Schema.Number,
        team_id: Schema.Number,
        name: Schema.optional(Schema.String),
        key: Schema.String,
        filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        deleted: Schema.optional(Schema.Boolean),
        active: Schema.optional(Schema.Boolean),
        ensure_experience_continuity: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(Schema.Unknown),
        bucketing_identifier: Schema.optional(Schema.Unknown),
        evaluation_contexts: Schema.Array(Schema.String),
      }),
      internal_targeting_flag: Schema.Struct({
        id: Schema.Number,
        team_id: Schema.Number,
        name: Schema.optional(Schema.String),
        key: Schema.String,
        filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        deleted: Schema.optional(Schema.Boolean),
        active: Schema.optional(Schema.Boolean),
        ensure_experience_continuity: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(Schema.Unknown),
        bucketing_identifier: Schema.optional(Schema.Unknown),
        evaluation_contexts: Schema.Array(Schema.String),
      }),
      questions: Schema.optional(Schema.NullOr(Schema.Unknown)),
      conditions: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      appearance: Schema.optional(Schema.NullOr(Schema.Unknown)),
      created_at: Schema.String,
      created_by: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      start_date: Schema.optional(Schema.NullOr(Schema.String)),
      end_date: Schema.optional(Schema.NullOr(Schema.String)),
      archived: Schema.optional(Schema.Boolean),
      responses_limit: Schema.optional(Schema.NullOr(Schema.Number)),
      feature_flag_keys: Schema.Array(
        Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
      ),
      iteration_count: Schema.optional(Schema.NullOr(Schema.Number)),
      iteration_frequency_days: Schema.optional(Schema.NullOr(Schema.Number)),
      iteration_start_dates: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.NullOr(Schema.String))),
      ),
      current_iteration: Schema.optional(Schema.NullOr(Schema.Number)),
      current_iteration_start_date: Schema.optional(
        Schema.NullOr(Schema.String),
      ),
      response_sampling_start_date: Schema.optional(
        Schema.NullOr(Schema.String),
      ),
      response_sampling_interval_type: Schema.optional(Schema.Unknown),
      response_sampling_interval: Schema.optional(Schema.NullOr(Schema.Number)),
      response_sampling_limit: Schema.optional(Schema.NullOr(Schema.Number)),
      response_sampling_daily_limits: Schema.optional(
        Schema.NullOr(Schema.Unknown),
      ),
      enable_partial_responses: Schema.optional(Schema.NullOr(Schema.Boolean)),
      enable_iframe_embedding: Schema.optional(Schema.NullOr(Schema.Boolean)),
      translations: Schema.optional(Schema.NullOr(Schema.Unknown)),
      user_access_level: Schema.NullOr(Schema.String),
      form_content: Schema.optional(Schema.NullOr(Schema.Unknown)),
    }),
  ),
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
