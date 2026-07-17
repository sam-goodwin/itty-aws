import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SurveysPartialUpdateInput {
  id: string;
  project_id: string;
  name?: string;
  description?: string;
  type?: "popover" | "widget" | "external_survey" | "api";
  schedule?: "once" | "recurring" | "always" | null;
  linked_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  linked_flag_id?: number | null;
  linked_insight_id?: number | null;
  targeting_flag_id?: number;
  targeting_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  internal_targeting_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  targeting_flag_filters?: {
    groups?: {
      properties?: (
        | {
            key?: string;
            type?: "cohort" | "person" | "group";
            cohort_name?: string | null;
            group_type_index?: number | null;
            value?: unknown;
            operator?:
              | "exact"
              | "is_not"
              | "icontains"
              | "not_icontains"
              | "regex"
              | "not_regex"
              | "gt"
              | "gte"
              | "lt"
              | "lte";
          }
        | {
            key?: string;
            type?: "cohort" | "person" | "group";
            cohort_name?: string | null;
            group_type_index?: number | null;
            operator?: "is_set" | "is_not_set";
            value?: unknown;
          }
        | {
            key?: string;
            type?: "cohort" | "person" | "group";
            cohort_name?: string | null;
            group_type_index?: number | null;
            operator?: "is_date_exact" | "is_date_before" | "is_date_after";
            value?: string;
          }
        | {
            key?: string;
            type?: "cohort" | "person" | "group";
            cohort_name?: string | null;
            group_type_index?: number | null;
            operator?:
              | "semver_gt"
              | "semver_gte"
              | "semver_lt"
              | "semver_lte"
              | "semver_eq"
              | "semver_neq"
              | "semver_tilde"
              | "semver_caret"
              | "semver_wildcard";
            value?: string;
          }
        | {
            key?: string;
            type?: "cohort" | "person" | "group";
            cohort_name?: string | null;
            group_type_index?: number | null;
            operator?: "icontains_multi" | "not_icontains_multi";
            value?: string[];
          }
        | {
            key?: string;
            type?: "cohort";
            cohort_name?: string | null;
            group_type_index?: number | null;
            operator?: "in" | "not_in";
            value?: unknown;
          }
        | {
            key?: string;
            type?: "flag";
            cohort_name?: string | null;
            group_type_index?: number | null;
            operator?: "flag_evaluates_to";
            value?: unknown;
          }
      )[];
      rollout_percentage?: number;
      variant?: string | null;
      aggregation_group_type_index?: number | null;
    }[];
    multivariate?: {
      variants?: { key?: string; name?: string; rollout_percentage?: number }[];
    } | null;
    aggregation_group_type_index?: number | null;
    payloads?: Record<string, string>;
    feature_enrollment?: boolean | null;
    early_exit?: boolean;
  } | null;
  remove_targeting_flag?: boolean | null;
  questions?:
    | (
        | {
            id?: string;
            type?: "open";
            question?: string;
            description?: string;
            descriptionContentType?: "html" | "text";
            optional?: boolean;
            buttonText?: string;
          }
        | {
            id?: string;
            type?: "link";
            question?: string;
            description?: string;
            descriptionContentType?: "html" | "text";
            optional?: boolean;
            buttonText?: string;
            link?: string;
          }
        | {
            id?: string;
            type?: "rating";
            question?: string;
            description?: string;
            descriptionContentType?: "html" | "text";
            optional?: boolean;
            buttonText?: string;
            display?: "number" | "emoji";
            scale?: number;
            lowerBoundLabel?: string;
            upperBoundLabel?: string;
            branching?:
              | { type?: "next_question" }
              | { type?: "end" }
              | { type?: "specific_question"; index?: number }
              | {
                  type?: "response_based";
                  responseValues?: Record<string, number | "end">;
                }
              | null;
          }
        | {
            id?: string;
            type?: "single_choice";
            question?: string;
            description?: string;
            descriptionContentType?: "html" | "text";
            optional?: boolean;
            buttonText?: string;
            choices?: string[];
            shuffleOptions?: boolean;
            hasOpenChoice?: boolean;
            branching?:
              | { type?: "next_question" }
              | { type?: "end" }
              | { type?: "specific_question"; index?: number }
              | {
                  type?: "response_based";
                  responseValues?: Record<string, number | "end">;
                }
              | null;
          }
        | {
            id?: string;
            type?: "multiple_choice";
            question?: string;
            description?: string;
            descriptionContentType?: "html" | "text";
            optional?: boolean;
            buttonText?: string;
            choices?: string[];
            shuffleOptions?: boolean;
            hasOpenChoice?: boolean;
          }
      )[]
    | null;
  conditions?: {
    url?: string;
    selector?: string;
    seenSurveyWaitPeriodInDays?: number;
    urlMatchType?:
      | "exact"
      | "is_not"
      | "icontains"
      | "not_icontains"
      | "regex"
      | "not_regex";
    events?: { repeatedActivation?: boolean; values?: { name?: string }[] };
    deviceTypes?: ("Desktop" | "Mobile" | "Tablet")[];
    deviceTypesMatchType?:
      | "exact"
      | "is_not"
      | "icontains"
      | "not_icontains"
      | "regex"
      | "not_regex";
    linkedFlagVariant?: string;
  } | null;
  appearance?: {
    backgroundColor?: string;
    submitButtonColor?: string;
    textColor?: string;
    submitButtonText?: string;
    submitButtonTextColor?: string;
    descriptionTextColor?: string;
    ratingButtonColor?: string;
    ratingButtonActiveColor?: string;
    ratingButtonHoverColor?: string;
    whiteLabel?: boolean;
    autoDisappear?: boolean;
    displayThankYouMessage?: boolean;
    thankYouMessageHeader?: string;
    thankYouMessageDescription?: string;
    thankYouMessageDescriptionContentType?: "html" | "text";
    thankYouMessageCloseButtonText?: string;
    borderColor?: string;
    placeholder?: string;
    shuffleQuestions?: boolean;
    surveyPopupDelaySeconds?: number;
    allowGoBack?: boolean;
    backButtonText?: string;
    widgetType?: "button" | "tab" | "selector";
    widgetSelector?: string;
    widgetLabel?: string;
    widgetColor?: string;
    fontFamily?: string;
    maxWidth?: string;
    zIndex?: string;
    disabledButtonOpacity?: string;
    boxPadding?: string;
  } | null;
  created_at?: string;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  start_date?: string | null;
  end_date?: string | null;
  archived?: boolean;
  responses_limit?: number | null;
  iteration_count?: number | null;
  iteration_frequency_days?: number | null;
  iteration_start_dates?: (string | null)[] | null;
  current_iteration?: number | null;
  current_iteration_start_date?: string | null;
  response_sampling_start_date?: string | null;
  response_sampling_interval_type?: "day" | "week" | "month" | "" | null;
  response_sampling_interval?: number | null;
  response_sampling_limit?: number | null;
  response_sampling_daily_limits?: unknown;
  enable_partial_responses?: boolean | null;
  enable_iframe_embedding?: boolean | null;
  base_language?: string;
  translations?: unknown;
  _create_in_folder?: string;
  form_content?: unknown;
}
export const SurveysPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["popover", "widget", "external_survey", "api"]),
    ),
    schedule: Schema.optional(
      Schema.NullOr(Schema.Literals(["once", "recurring", "always"])),
    ),
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
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["server", "client", "all"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        bucketing_identifier: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["distinct_id", "device_id"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
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
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["server", "client", "all"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        bucketing_identifier: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["distinct_id", "device_id"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
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
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["server", "client", "all"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        bucketing_identifier: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["distinct_id", "device_id"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    targeting_flag_filters: Schema.optional(Schema.Unknown),
    remove_targeting_flag: Schema.optional(Schema.NullOr(Schema.Boolean)),
    questions: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Union([
            Schema.Struct({
              id: Schema.optional(Schema.String),
              type: Schema.optional(Schema.Literals(["open"])),
              question: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              descriptionContentType: Schema.optional(
                Schema.Literals(["html", "text"]),
              ),
              optional: Schema.optional(Schema.Boolean),
              buttonText: Schema.optional(Schema.String),
            }),
            Schema.Struct({
              id: Schema.optional(Schema.String),
              type: Schema.optional(Schema.Literals(["link"])),
              question: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              descriptionContentType: Schema.optional(
                Schema.Literals(["html", "text"]),
              ),
              optional: Schema.optional(Schema.Boolean),
              buttonText: Schema.optional(Schema.String),
              link: Schema.optional(Schema.String),
            }),
            Schema.Struct({
              id: Schema.optional(Schema.String),
              type: Schema.optional(Schema.Literals(["rating"])),
              question: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              descriptionContentType: Schema.optional(
                Schema.Literals(["html", "text"]),
              ),
              optional: Schema.optional(Schema.Boolean),
              buttonText: Schema.optional(Schema.String),
              display: Schema.optional(Schema.Literals(["number", "emoji"])),
              scale: Schema.optional(Schema.Number),
              lowerBoundLabel: Schema.optional(Schema.String),
              upperBoundLabel: Schema.optional(Schema.String),
              branching: Schema.optional(
                Schema.NullOr(
                  Schema.Union([
                    Schema.Struct({
                      type: Schema.optional(Schema.Literals(["next_question"])),
                    }),
                    Schema.Struct({
                      type: Schema.optional(Schema.Literals(["end"])),
                    }),
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals(["specific_question"]),
                      ),
                      index: Schema.optional(Schema.Number),
                    }),
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals(["response_based"]),
                      ),
                      responseValues: Schema.optional(
                        Schema.Record(
                          Schema.String,
                          Schema.Union([
                            Schema.Number,
                            Schema.Literals(["end"]),
                          ]),
                        ),
                      ),
                    }),
                  ]),
                ),
              ),
            }),
            Schema.Struct({
              id: Schema.optional(Schema.String),
              type: Schema.optional(Schema.Literals(["single_choice"])),
              question: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              descriptionContentType: Schema.optional(
                Schema.Literals(["html", "text"]),
              ),
              optional: Schema.optional(Schema.Boolean),
              buttonText: Schema.optional(Schema.String),
              choices: Schema.optional(Schema.Array(Schema.String)),
              shuffleOptions: Schema.optional(Schema.Boolean),
              hasOpenChoice: Schema.optional(Schema.Boolean),
              branching: Schema.optional(
                Schema.NullOr(
                  Schema.Union([
                    Schema.Struct({
                      type: Schema.optional(Schema.Literals(["next_question"])),
                    }),
                    Schema.Struct({
                      type: Schema.optional(Schema.Literals(["end"])),
                    }),
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals(["specific_question"]),
                      ),
                      index: Schema.optional(Schema.Number),
                    }),
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals(["response_based"]),
                      ),
                      responseValues: Schema.optional(
                        Schema.Record(
                          Schema.String,
                          Schema.Union([
                            Schema.Number,
                            Schema.Literals(["end"]),
                          ]),
                        ),
                      ),
                    }),
                  ]),
                ),
              ),
            }),
            Schema.Struct({
              id: Schema.optional(Schema.String),
              type: Schema.optional(Schema.Literals(["multiple_choice"])),
              question: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              descriptionContentType: Schema.optional(
                Schema.Literals(["html", "text"]),
              ),
              optional: Schema.optional(Schema.Boolean),
              buttonText: Schema.optional(Schema.String),
              choices: Schema.optional(Schema.Array(Schema.String)),
              shuffleOptions: Schema.optional(Schema.Boolean),
              hasOpenChoice: Schema.optional(Schema.Boolean),
            }),
          ]),
        ),
      ),
    ),
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
                    name: Schema.optional(Schema.String),
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
          allowGoBack: Schema.optional(Schema.Boolean),
          backButtonText: Schema.optional(Schema.String),
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
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
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
    response_sampling_interval_type: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["day", "week", "month"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    response_sampling_interval: Schema.optional(Schema.NullOr(Schema.Number)),
    response_sampling_limit: Schema.optional(Schema.NullOr(Schema.Number)),
    response_sampling_daily_limits: Schema.optional(Schema.Unknown),
    enable_partial_responses: Schema.optional(Schema.NullOr(Schema.Boolean)),
    enable_iframe_embedding: Schema.optional(Schema.NullOr(Schema.Boolean)),
    base_language: Schema.optional(Schema.String),
    translations: Schema.optional(Schema.Unknown),
    _create_in_folder: Schema.optional(Schema.String),
    form_content: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/surveys/{id}/",
    }),
  ) as unknown as Schema.Codec<SurveysPartialUpdateInput>;

// Output Schema
export interface SurveysPartialUpdateOutput {
  id?: string;
  name?: string;
  description?: string;
  type?: "popover" | "widget" | "external_survey" | "api";
  schedule?: string | null;
  linked_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  linked_flag_id?: number | null;
  linked_insight_id?: number | null;
  targeting_flag_id?: number;
  targeting_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  internal_targeting_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  targeting_flag_filters?: unknown;
  remove_targeting_flag?: boolean | null;
  questions?: unknown;
  conditions?: unknown;
  appearance?: unknown;
  created_at?: string;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  start_date?: string | null;
  end_date?: string | null;
  archived?: boolean;
  responses_limit?: number | null;
  iteration_count?: number | null;
  iteration_frequency_days?: number | null;
  iteration_start_dates?: (string | null)[] | null;
  current_iteration?: number | null;
  current_iteration_start_date?: string | null;
  response_sampling_start_date?: string | null;
  response_sampling_interval_type?: "day" | "week" | "month" | "" | null;
  response_sampling_interval?: number | null;
  response_sampling_limit?: number | null;
  response_sampling_daily_limits?: unknown;
  enable_partial_responses?: boolean | null;
  enable_iframe_embedding?: boolean | null;
  base_language?: string;
  translations?: unknown;
  _create_in_folder?: string;
  form_content?: unknown;
}
export const SurveysPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["server", "client", "all"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        bucketing_identifier: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["distinct_id", "device_id"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
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
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["server", "client", "all"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        bucketing_identifier: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["distinct_id", "device_id"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
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
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["server", "client", "all"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        bucketing_identifier: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["distinct_id", "device_id"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    targeting_flag_filters: Schema.optional(Schema.Unknown),
    remove_targeting_flag: Schema.optional(Schema.NullOr(Schema.Boolean)),
    questions: Schema.optional(Schema.Unknown),
    conditions: Schema.optional(Schema.Unknown),
    appearance: Schema.optional(Schema.Unknown),
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
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
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
    response_sampling_interval_type: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["day", "week", "month"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    response_sampling_interval: Schema.optional(Schema.NullOr(Schema.Number)),
    response_sampling_limit: Schema.optional(Schema.NullOr(Schema.Number)),
    response_sampling_daily_limits: Schema.optional(Schema.Unknown),
    enable_partial_responses: Schema.optional(Schema.NullOr(Schema.Boolean)),
    enable_iframe_embedding: Schema.optional(Schema.NullOr(Schema.Boolean)),
    base_language: Schema.optional(Schema.String),
    translations: Schema.optional(Schema.Unknown),
    _create_in_folder: Schema.optional(Schema.String),
    form_content: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<SurveysPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysPartialUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SurveysPartialUpdateInput,
  outputSchema: SurveysPartialUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
