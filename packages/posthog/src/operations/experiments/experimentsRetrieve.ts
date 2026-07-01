import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExperimentsRetrieveInput {
  id: number;
  project_id: string;
}
export const ExperimentsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiments/{id}/",
    }),
  ) as unknown as Schema.Codec<ExperimentsRetrieveInput>;

// Output Schema
export interface ExperimentsRetrieveOutput {
  id?: number;
  name?: string;
  description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  feature_flag_key?: string;
  feature_flag?: {
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
  holdout?: {
    id?: number;
    name?: string;
    description?: string | null;
    filters?: {
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
    created_at?: string;
    updated_at?: string;
    user_access_level?: string | null;
  };
  holdout_id?: number | null;
  exposure_cohort?: number | null;
  parameters?: {
    feature_flag_variants?:
      | {
          key?: string;
          name?: string | null;
          rollout_percentage?: number | null;
          split_percent?: number | null;
        }[]
      | null;
    minimum_detectable_effect?: number | null;
    rollout_percentage?: number | null;
    variant_notes?: Record<string, string> | null;
  } | null;
  running_time_calculation?: {
    exposure_estimate_config?: {
      conversionRateInputType: "manual" | "automatic";
      manualBaselineValue?: number | null;
      manualExposureRate?: number | null;
      manualMetricType?: "funnel" | "mean_count" | "mean_sum_or_avg" | null;
    } | null;
    minimum_detectable_effect?: number | null;
    recommended_running_time?: number | null;
    recommended_sample_size?: number | null;
  } | null;
  excluded_variants?: string[] | null;
  secondary_metrics?: unknown;
  saved_metrics?: {
    id?: number;
    experiment?: number;
    saved_metric?: number;
    metadata?: unknown;
    created_at?: string;
    query?: unknown;
    name?: string;
  }[];
  saved_metrics_ids?: unknown[] | null;
  filters?: unknown;
  archived?: boolean;
  deleted?: boolean | null;
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
  created_at?: string;
  updated_at?: string;
  type?: "web" | "product" | null;
  exposure_criteria?: {
    exposure_config?: {
      event?: string | null;
      id?: number | null;
      kind?: "ExperimentEventExposureConfig" | "ActionsNode" | null;
      properties?: {
        key?: string;
        label?: string | null;
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
          | "lte"
          | "is_set"
          | "is_not_set"
          | "is_date_exact"
          | "is_date_before"
          | "is_date_after"
          | "between"
          | "not_between"
          | "min"
          | "max"
          | "in"
          | "not_in"
          | "is_cleaned_path_exact"
          | "flag_evaluates_to"
          | "semver_eq"
          | "semver_neq"
          | "semver_gt"
          | "semver_gte"
          | "semver_lt"
          | "semver_lte"
          | "semver_tilde"
          | "semver_caret"
          | "semver_wildcard"
          | "icontains_multi"
          | "not_icontains_multi"
          | null;
        type?: string;
        value?:
          | (string | number | boolean)[]
          | string
          | number
          | boolean
          | null;
      }[];
    } | null;
    filterTestAccounts?: boolean | null;
    multiple_variant_handling?: "exclude" | "first_seen" | null;
  } | null;
  metrics?: unknown;
  metrics_secondary?: unknown;
  stats_config?: unknown;
  scheduling_config?: unknown;
  allow_unknown_events?: boolean;
  _create_in_folder?: string;
  conclusion?:
    | "won"
    | "lost"
    | "inconclusive"
    | "stopped_early"
    | "invalid"
    | null;
  conclusion_comment?: string | null;
  primary_metrics_ordered_uuids?: unknown;
  secondary_metrics_ordered_uuids?: unknown;
  only_count_matured_users?: boolean;
  update_feature_flag_params?: boolean;
  status?: "draft" | "running" | "paused" | "stopped";
  is_legacy?: boolean;
  user_access_level?: string | null;
}
export const ExperimentsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    start_date: Schema.optional(Schema.NullOr(Schema.String)),
    end_date: Schema.optional(Schema.NullOr(Schema.String)),
    feature_flag_key: Schema.optional(Schema.String),
    feature_flag: Schema.optional(
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
    holdout: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        filters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(
                Schema.Array(
                  Schema.Union([
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["cohort", "person", "group"]),
                      ),
                      cohort_name: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      group_type_index: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                      value: Schema.optional(Schema.Unknown),
                      operator: Schema.optional(
                        Schema.Literals([
                          "exact",
                          "is_not",
                          "icontains",
                          "not_icontains",
                          "regex",
                          "not_regex",
                          "gt",
                          "gte",
                          "lt",
                          "lte",
                        ]),
                      ),
                    }),
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["cohort", "person", "group"]),
                      ),
                      cohort_name: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      group_type_index: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                      operator: Schema.optional(
                        Schema.Literals(["is_set", "is_not_set"]),
                      ),
                      value: Schema.optional(Schema.Unknown),
                    }),
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["cohort", "person", "group"]),
                      ),
                      cohort_name: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      group_type_index: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                      operator: Schema.optional(
                        Schema.Literals([
                          "is_date_exact",
                          "is_date_before",
                          "is_date_after",
                        ]),
                      ),
                      value: Schema.optional(Schema.String),
                    }),
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["cohort", "person", "group"]),
                      ),
                      cohort_name: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      group_type_index: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                      operator: Schema.optional(
                        Schema.Literals([
                          "semver_gt",
                          "semver_gte",
                          "semver_lt",
                          "semver_lte",
                          "semver_eq",
                          "semver_neq",
                          "semver_tilde",
                          "semver_caret",
                          "semver_wildcard",
                        ]),
                      ),
                      value: Schema.optional(Schema.String),
                    }),
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["cohort", "person", "group"]),
                      ),
                      cohort_name: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      group_type_index: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                      operator: Schema.optional(
                        Schema.Literals([
                          "icontains_multi",
                          "not_icontains_multi",
                        ]),
                      ),
                      value: Schema.optional(Schema.Array(Schema.String)),
                    }),
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      type: Schema.optional(Schema.Literals(["cohort"])),
                      cohort_name: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      group_type_index: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                      operator: Schema.optional(
                        Schema.Literals(["in", "not_in"]),
                      ),
                      value: Schema.optional(Schema.Unknown),
                    }),
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      type: Schema.optional(Schema.Literals(["flag"])),
                      cohort_name: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      group_type_index: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                      operator: Schema.optional(
                        Schema.Literals(["flag_evaluates_to"]),
                      ),
                      value: Schema.optional(Schema.Unknown),
                    }),
                  ]),
                ),
              ),
              rollout_percentage: Schema.optional(Schema.Number),
              variant: Schema.optional(Schema.NullOr(Schema.String)),
              aggregation_group_type_index: Schema.optional(
                Schema.NullOr(Schema.Number),
              ),
            }),
          ),
        ),
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
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    holdout_id: Schema.optional(Schema.NullOr(Schema.Number)),
    exposure_cohort: Schema.optional(Schema.NullOr(Schema.Number)),
    parameters: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          feature_flag_variants: Schema.optional(
            Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.NullOr(Schema.String)),
                  rollout_percentage: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  split_percent: Schema.optional(Schema.NullOr(Schema.Number)),
                }),
              ),
            ),
          ),
          minimum_detectable_effect: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
          rollout_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
          variant_notes: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          ),
        }),
      ),
    ),
    running_time_calculation: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          exposure_estimate_config: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                conversionRateInputType: Schema.Literals([
                  "manual",
                  "automatic",
                ]),
                manualBaselineValue: Schema.optional(
                  Schema.NullOr(Schema.Number),
                ),
                manualExposureRate: Schema.optional(
                  Schema.NullOr(Schema.Number),
                ),
                manualMetricType: Schema.optional(
                  Schema.NullOr(
                    Schema.Literals([
                      "funnel",
                      "mean_count",
                      "mean_sum_or_avg",
                    ]),
                  ),
                ),
              }),
            ),
          ),
          minimum_detectable_effect: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
          recommended_running_time: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
          recommended_sample_size: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
        }),
      ),
    ),
    excluded_variants: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    secondary_metrics: Schema.optional(Schema.Unknown),
    saved_metrics: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          experiment: Schema.optional(Schema.Number),
          saved_metric: Schema.optional(Schema.Number),
          metadata: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.String),
          query: Schema.optional(Schema.Unknown),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    saved_metrics_ids: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.Unknown)),
    ),
    filters: Schema.optional(Schema.Unknown),
    archived: Schema.optional(Schema.Boolean),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
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
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    type: Schema.optional(Schema.NullOr(Schema.Literals(["web", "product"]))),
    exposure_criteria: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          exposure_config: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                event: Schema.optional(Schema.NullOr(Schema.String)),
                id: Schema.optional(Schema.NullOr(Schema.Number)),
                kind: Schema.optional(
                  Schema.NullOr(
                    Schema.Literals([
                      "ExperimentEventExposureConfig",
                      "ActionsNode",
                    ]),
                  ),
                ),
                properties: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      label: Schema.optional(Schema.NullOr(Schema.String)),
                      operator: Schema.optional(
                        Schema.NullOr(
                          Schema.Literals([
                            "exact",
                            "is_not",
                            "icontains",
                            "not_icontains",
                            "regex",
                            "not_regex",
                            "gt",
                            "gte",
                            "lt",
                            "lte",
                            "is_set",
                            "is_not_set",
                            "is_date_exact",
                            "is_date_before",
                            "is_date_after",
                            "between",
                            "not_between",
                            "min",
                            "max",
                            "in",
                            "not_in",
                            "is_cleaned_path_exact",
                            "flag_evaluates_to",
                            "semver_eq",
                            "semver_neq",
                            "semver_gt",
                            "semver_gte",
                            "semver_lt",
                            "semver_lte",
                            "semver_tilde",
                            "semver_caret",
                            "semver_wildcard",
                            "icontains_multi",
                            "not_icontains_multi",
                          ]),
                        ),
                      ),
                      type: Schema.optional(Schema.String),
                      value: Schema.optional(
                        Schema.NullOr(
                          Schema.Union([
                            Schema.Array(
                              Schema.Union([
                                Schema.String,
                                Schema.Number,
                                Schema.Boolean,
                              ]),
                            ),
                            Schema.String,
                            Schema.Number,
                            Schema.Boolean,
                          ]),
                        ),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
          filterTestAccounts: Schema.optional(Schema.NullOr(Schema.Boolean)),
          multiple_variant_handling: Schema.optional(
            Schema.NullOr(Schema.Literals(["exclude", "first_seen"])),
          ),
        }),
      ),
    ),
    metrics: Schema.optional(Schema.Unknown),
    metrics_secondary: Schema.optional(Schema.Unknown),
    stats_config: Schema.optional(Schema.Unknown),
    scheduling_config: Schema.optional(Schema.Unknown),
    allow_unknown_events: Schema.optional(Schema.Boolean),
    _create_in_folder: Schema.optional(Schema.String),
    conclusion: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "won",
          "lost",
          "inconclusive",
          "stopped_early",
          "invalid",
        ]),
      ),
    ),
    conclusion_comment: Schema.optional(Schema.NullOr(Schema.String)),
    primary_metrics_ordered_uuids: Schema.optional(Schema.Unknown),
    secondary_metrics_ordered_uuids: Schema.optional(Schema.Unknown),
    only_count_matured_users: Schema.optional(Schema.Boolean),
    update_feature_flag_params: Schema.optional(Schema.Boolean),
    status: Schema.optional(
      Schema.Literals(["draft", "running", "paused", "stopped"]),
    ),
    is_legacy: Schema.optional(Schema.Boolean),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ExperimentsRetrieveOutput>;

// The operation
/**
 * Retrieve a single experiment by ID, including its current status, metrics, feature flag, and results metadata.
 *
 * @param id - A unique integer value identifying this experiment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsRetrieveInput,
  outputSchema: ExperimentsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
