import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SurveysPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["popover", "widget", "external_survey", "api"]),
    ),
    schedule: Schema.optional(Schema.Unknown),
    linked_flag: Schema.optional(
      Schema.Struct({
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
    ),
    linked_flag_id: Schema.optional(Schema.NullOr(Schema.Number)),
    linked_insight_id: Schema.optional(Schema.NullOr(Schema.Number)),
    targeting_flag_id: Schema.optional(Schema.Number),
    targeting_flag: Schema.optional(
      Schema.Struct({
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
    ),
    internal_targeting_flag: Schema.optional(
      Schema.Struct({
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
    ),
    targeting_flag_filters: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          groups: Schema.optional(
            Schema.Array(
              Schema.Struct({
                properties: Schema.optional(Schema.Array(Schema.Unknown)),
                rollout_percentage: Schema.optional(Schema.Number),
                variant: Schema.optional(Schema.NullOr(Schema.String)),
                aggregation_group_type_index: Schema.optional(
                  Schema.NullOr(Schema.Number),
                ),
              }),
            ),
          ),
          multivariate: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                variants: Schema.Array(
                  Schema.Struct({
                    key: Schema.String,
                    name: Schema.optional(Schema.String),
                    rollout_percentage: Schema.Number,
                  }),
                ),
              }),
            ),
          ),
          aggregation_group_type_index: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
          payloads: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          super_groups: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          feature_enrollment: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    remove_targeting_flag: Schema.optional(Schema.NullOr(Schema.Boolean)),
    questions: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
    conditions: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          url: Schema.optional(Schema.String),
          selector: Schema.optional(Schema.String),
          seenSurveyWaitPeriodInDays: Schema.optional(Schema.Number),
          urlMatchType: Schema.optional(
            Schema.Literals([
              "exact",
              "is_not",
              "icontains",
              "not_icontains",
              "regex",
              "not_regex",
            ]),
          ),
          events: Schema.optional(
            Schema.Struct({
              repeatedActivation: Schema.optional(Schema.Boolean),
              values: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                  }),
                ),
              ),
            }),
          ),
          deviceTypes: Schema.optional(
            Schema.Array(Schema.Literals(["Desktop", "Mobile", "Tablet"])),
          ),
          deviceTypesMatchType: Schema.optional(
            Schema.Literals([
              "exact",
              "is_not",
              "icontains",
              "not_icontains",
              "regex",
              "not_regex",
            ]),
          ),
          linkedFlagVariant: Schema.optional(Schema.String),
        }),
      ),
    ),
    appearance: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          backgroundColor: Schema.optional(Schema.String),
          submitButtonColor: Schema.optional(Schema.String),
          textColor: Schema.optional(Schema.String),
          submitButtonText: Schema.optional(Schema.String),
          submitButtonTextColor: Schema.optional(Schema.String),
          descriptionTextColor: Schema.optional(Schema.String),
          ratingButtonColor: Schema.optional(Schema.String),
          ratingButtonActiveColor: Schema.optional(Schema.String),
          ratingButtonHoverColor: Schema.optional(Schema.String),
          whiteLabel: Schema.optional(Schema.Boolean),
          autoDisappear: Schema.optional(Schema.Boolean),
          displayThankYouMessage: Schema.optional(Schema.Boolean),
          thankYouMessageHeader: Schema.optional(Schema.String),
          thankYouMessageDescription: Schema.optional(Schema.String),
          thankYouMessageDescriptionContentType: Schema.optional(
            Schema.Literals(["html", "text"]),
          ),
          thankYouMessageCloseButtonText: Schema.optional(Schema.String),
          borderColor: Schema.optional(Schema.String),
          placeholder: Schema.optional(Schema.String),
          shuffleQuestions: Schema.optional(Schema.Boolean),
          surveyPopupDelaySeconds: Schema.optional(Schema.Number),
          widgetType: Schema.optional(
            Schema.Literals(["button", "tab", "selector"]),
          ),
          widgetSelector: Schema.optional(Schema.String),
          widgetLabel: Schema.optional(Schema.String),
          widgetColor: Schema.optional(Schema.String),
          fontFamily: Schema.optional(Schema.String),
          maxWidth: Schema.optional(Schema.String),
          zIndex: Schema.optional(Schema.String),
          disabledButtonOpacity: Schema.optional(Schema.String),
          boxPadding: Schema.optional(Schema.String),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.Struct({
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
      method: "PATCH",
      path: "/api/projects/{project_id}/surveys/{id}/",
    }),
  );
export type SurveysPartialUpdateInput = typeof SurveysPartialUpdateInput.Type;

// Output Schema
export const SurveysPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    targeting_flag_id: Schema.optional(Schema.Number),
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
    targeting_flag_filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    remove_targeting_flag: Schema.optional(Schema.NullOr(Schema.Boolean)),
    questions: Schema.optional(Schema.NullOr(Schema.Unknown)),
    conditions: Schema.optional(Schema.NullOr(Schema.Unknown)),
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
  });
export type SurveysPartialUpdateOutput = typeof SurveysPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SurveysPartialUpdateInput,
    outputSchema: SurveysPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
