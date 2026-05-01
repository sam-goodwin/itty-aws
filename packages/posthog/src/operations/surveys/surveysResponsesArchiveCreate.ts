import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SurveysResponsesArchiveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    response_uuid: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["popover", "widget", "external_survey", "api"]),
    ),
    schedule: Schema.optional(Schema.NullOr(Schema.String)),
    linked_flag: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        team_id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
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
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    linked_flag_id: Schema.optional(Schema.NullOr(Schema.Number)),
    linked_insight_id: Schema.optional(Schema.NullOr(Schema.Number)),
    targeting_flag_id: Schema.optional(Schema.Number),
    targeting_flag: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        team_id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
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
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    internal_targeting_flag: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        team_id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
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
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    targeting_flag_filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    remove_targeting_flag: Schema.optional(Schema.NullOr(Schema.Boolean)),
    questions: Schema.optional(Schema.NullOr(Schema.Unknown)),
    conditions: Schema.optional(Schema.NullOr(Schema.Unknown)),
    appearance: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    start_date: Schema.optional(Schema.NullOr(Schema.String)),
    end_date: Schema.optional(Schema.NullOr(Schema.String)),
    archived: Schema.optional(Schema.Boolean),
    responses_limit: Schema.optional(Schema.NullOr(Schema.Number)),
    iteration_count: Schema.optional(Schema.NullOr(Schema.Number)),
    iteration_frequency_days: Schema.optional(Schema.NullOr(Schema.Number)),
    iteration_start_dates: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.NullOr(Schema.String))),
    ),
    current_iteration: Schema.optional(Schema.NullOr(Schema.Number)),
    current_iteration_start_date: Schema.optional(Schema.NullOr(Schema.String)),
    response_sampling_start_date: Schema.optional(Schema.NullOr(Schema.String)),
    response_sampling_interval_type: Schema.optional(Schema.Unknown),
    response_sampling_interval: Schema.optional(Schema.NullOr(Schema.Number)),
    response_sampling_limit: Schema.optional(Schema.NullOr(Schema.Number)),
    response_sampling_daily_limits: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    enable_partial_responses: Schema.optional(Schema.NullOr(Schema.Boolean)),
    enable_iframe_embedding: Schema.optional(Schema.NullOr(Schema.Boolean)),
    translations: Schema.optional(Schema.NullOr(Schema.Unknown)),
    _create_in_folder: Schema.optional(Schema.String),
    form_content: Schema.optional(Schema.NullOr(Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/surveys/{id}/responses/{response_uuid}/archive/",
    }),
  );
export type SurveysResponsesArchiveCreateInput =
  typeof SurveysResponsesArchiveCreateInput.Type;

// Output Schema
export const SurveysResponsesArchiveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SurveysResponsesArchiveCreateOutput =
  typeof SurveysResponsesArchiveCreateOutput.Type;

// The operation
/**
 * Archive a single survey response.
 *
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysResponsesArchiveCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SurveysResponsesArchiveCreateInput,
    outputSchema: SurveysResponsesArchiveCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
