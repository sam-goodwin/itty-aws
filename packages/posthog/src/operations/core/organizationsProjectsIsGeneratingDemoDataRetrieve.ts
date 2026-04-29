import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const OrganizationsProjectsIsGeneratingDemoDataRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/projects/{id}/is_generating_demo_data/",
    }),
  );
export type OrganizationsProjectsIsGeneratingDemoDataRetrieveInput =
  typeof OrganizationsProjectsIsGeneratingDemoDataRetrieveInput.Type;

// Output Schema
export const OrganizationsProjectsIsGeneratingDemoDataRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    organization: Schema.String,
    name: Schema.optional(Schema.String),
    product_description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    effective_membership_level: Schema.Struct({}),
    has_group_types: Schema.Boolean,
    group_types: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    live_events_token: Schema.NullOr(Schema.String),
    updated_at: Schema.String,
    uuid: Schema.String,
    api_token: SensitiveString,
    app_urls: Schema.optional(Schema.Array(Schema.NullOr(Schema.String))),
    anonymize_ips: Schema.optional(Schema.Boolean),
    completed_snippet_onboarding: Schema.optional(Schema.Boolean),
    ingested_event: Schema.Boolean,
    test_account_filters: Schema.optional(Schema.Unknown),
    test_account_filters_default_checked: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    path_cleaning_filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    is_demo: Schema.optional(Schema.Boolean),
    timezone: Schema.optional(Schema.Struct({})),
    data_attributes: Schema.optional(Schema.Unknown),
    person_display_name_properties: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    correlation_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
    autocapture_opt_out: Schema.optional(Schema.NullOr(Schema.Boolean)),
    autocapture_exceptions_opt_in: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    autocapture_web_vitals_opt_in: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    autocapture_web_vitals_allowed_metrics: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    autocapture_exceptions_errors_to_ignore: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    capture_console_log_opt_in: Schema.optional(Schema.NullOr(Schema.Boolean)),
    capture_performance_opt_in: Schema.optional(Schema.NullOr(Schema.Boolean)),
    session_recording_opt_in: Schema.optional(Schema.Boolean),
    session_recording_sample_rate: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    session_recording_minimum_duration_milliseconds: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    session_recording_linked_flag: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    session_recording_network_payload_capture_config: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    session_recording_masking_config: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    session_recording_url_trigger_config: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.NullOr(Schema.Unknown))),
    ),
    session_recording_url_blocklist_config: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.NullOr(Schema.Unknown))),
    ),
    session_recording_event_trigger_config: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.NullOr(Schema.String))),
    ),
    session_recording_trigger_match_type_config: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    session_recording_trigger_groups: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    session_recording_retention_period: Schema.optional(Schema.Struct({})),
    session_replay_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
    survey_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
    access_control: Schema.optional(Schema.Boolean),
    week_start_day: Schema.optional(Schema.Unknown),
    primary_dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
    live_events_columns: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    recording_domains: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.NullOr(Schema.String))),
    ),
    person_on_events_querying_enabled: Schema.Boolean,
    inject_web_apps: Schema.optional(Schema.NullOr(Schema.Boolean)),
    extra_settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
    modifiers: Schema.optional(Schema.NullOr(Schema.Unknown)),
    default_modifiers: Schema.Record(Schema.String, Schema.Unknown),
    has_completed_onboarding_for: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    surveys_opt_in: Schema.optional(Schema.NullOr(Schema.Boolean)),
    heatmaps_opt_in: Schema.optional(Schema.NullOr(Schema.Boolean)),
    product_intents: Schema.Array(
      Schema.Struct({
        product_type: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        onboarding_completed_at: Schema.optional(Schema.NullOr(Schema.String)),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
    flags_persistence_default: Schema.optional(Schema.NullOr(Schema.Boolean)),
    secret_api_token: Schema.NullOr(Schema.String),
    secret_api_token_backup: Schema.NullOr(Schema.String),
    receive_org_level_activity_logs: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    business_model: Schema.optional(Schema.Unknown),
    conversations_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    conversations_settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
    logs_settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
    proactive_tasks_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    available_setup_task_ids: Schema.Array(
      Schema.Literals([
        "ingest_first_event",
        "set_up_reverse_proxy",
        "create_first_insight",
        "create_first_dashboard",
        "track_custom_events",
        "define_actions",
        "set_up_cohorts",
        "explore_trends_insight",
        "create_funnel",
        "explore_retention_insight",
        "explore_paths_insight",
        "explore_stickiness_insight",
        "explore_lifecycle_insight",
        "add_authorized_domain",
        "set_up_web_vitals",
        "review_web_analytics_dashboard",
        "filter_web_analytics",
        "set_up_web_analytics_conversion_goals",
        "visit_web_vitals_dashboard",
        "setup_session_recordings",
        "watch_session_recording",
        "configure_recording_settings",
        "create_recording_playlist",
        "enable_console_logs",
        "create_feature_flag",
        "implement_flag_in_code",
        "update_feature_flag_release_conditions",
        "create_multivariate_flag",
        "set_up_flag_payloads",
        "set_up_flag_evaluation_runtimes",
        "create_experiment",
        "implement_experiment_variants",
        "launch_experiment",
        "review_experiment_results",
        "create_survey",
        "launch_survey",
        "collect_survey_responses",
        "connect_source",
        "run_first_query",
        "join_external_data",
        "create_saved_view",
        "enable_error_tracking",
        "upload_source_maps",
        "view_first_error",
        "resolve_first_error",
        "ingest_first_llm_event",
        "view_first_trace",
        "track_costs",
        "set_up_llm_evaluation",
        "run_ai_playground",
        "enable_revenue_analytics_viewset",
        "connect_revenue_source",
        "set_up_revenue_goal",
        "enable_log_capture",
        "view_first_logs",
        "create_first_workflow",
        "set_up_first_workflow_channel",
        "configure_workflow_trigger",
        "add_workflow_action",
        "launch_workflow",
        "create_first_endpoint",
        "configure_endpoint",
        "test_endpoint",
        "create_early_access_feature",
        "update_feature_stage",
      ]),
    ),
  });
export type OrganizationsProjectsIsGeneratingDemoDataRetrieveOutput =
  typeof OrganizationsProjectsIsGeneratingDemoDataRetrieveOutput.Type;

// The operation
/**
 * Projects for the current organization.
 *
 * @param id - A unique value identifying this project.
 */
export const organizationsProjectsIsGeneratingDemoDataRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsProjectsIsGeneratingDemoDataRetrieveInput,
    outputSchema: OrganizationsProjectsIsGeneratingDemoDataRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
