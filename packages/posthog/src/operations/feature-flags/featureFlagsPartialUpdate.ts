import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsPartialUpdateInput {
  id: number;
  project_id: string;
  key?: string;
  name?: string;
  filters?: {
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
  };
  active?: boolean;
  archived?: boolean;
  tags?: string[];
  evaluation_contexts?: string[];
  is_remote_configuration?: boolean | null;
  ensure_experience_continuity?: boolean | null;
  evaluation_runtime?: "server" | "client" | "all" | null;
  bucketing_identifier?: "distinct_id" | "device_id" | null;
}
export const FeatureFlagsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    key: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.Struct({
        groups: Schema.optional(
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
        multivariate: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              variants: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    key: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    rollout_percentage: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        ),
        aggregation_group_type_index: Schema.optional(
          Schema.NullOr(Schema.Number),
        ),
        payloads: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        feature_enrollment: Schema.optional(Schema.NullOr(Schema.Boolean)),
        early_exit: Schema.optional(Schema.Boolean),
      }),
    ),
    active: Schema.optional(Schema.Boolean),
    archived: Schema.optional(Schema.Boolean),
    tags: Schema.optional(Schema.Array(Schema.String)),
    evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
    is_remote_configuration: Schema.optional(Schema.NullOr(Schema.Boolean)),
    ensure_experience_continuity: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    evaluation_runtime: Schema.optional(
      Schema.NullOr(Schema.Literals(["server", "client", "all"])),
    ),
    bucketing_identifier: Schema.optional(
      Schema.NullOr(Schema.Literals(["distinct_id", "device_id"])),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/feature_flags/{id}/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsPartialUpdateInput>;

// Output Schema
export interface FeatureFlagsPartialUpdateOutput {
  id?: number;
  name?: string;
  key?: string;
  filters?: Record<string, unknown>;
  deleted?: boolean;
  active?: boolean;
  archived?: boolean;
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
  updated_at?: string | null;
  version?: number;
  last_modified_by?: {
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
  ensure_experience_continuity?: boolean | null;
  experiment_set?: number[];
  experiment_set_metadata?: { id: number; name: string; is_running: boolean }[];
  surveys?: Record<string, unknown>;
  features?: Record<string, unknown>;
  rollback_conditions?: unknown;
  performed_rollback?: boolean | null;
  can_edit?: boolean;
  tags?: unknown[];
  evaluation_contexts?: unknown[];
  usage_dashboard?: number;
  analytics_dashboards?: number[];
  has_enriched_analytics?: boolean | null;
  user_access_level?: string | null;
  creation_context?:
    | "feature_flags"
    | "experiments"
    | "surveys"
    | "early_access_features"
    | "web_experiments"
    | "product_tours";
  is_remote_configuration?: boolean | null;
  has_encrypted_payloads?: boolean | null;
  status?: string;
  evaluation_runtime?: "server" | "client" | "all" | "" | null;
  bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
  last_called_at?: string | null;
  _create_in_folder?: string;
  _should_create_usage_dashboard?: boolean;
  is_used_in_replay_settings?: boolean;
}
export const FeatureFlagsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    deleted: Schema.optional(Schema.Boolean),
    active: Schema.optional(Schema.Boolean),
    archived: Schema.optional(Schema.Boolean),
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
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    version: Schema.optional(Schema.Number),
    last_modified_by: Schema.optional(
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
    ensure_experience_continuity: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    experiment_set: Schema.optional(Schema.Array(Schema.Number)),
    experiment_set_metadata: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.Number,
          name: Schema.String,
          is_running: Schema.Boolean,
        }),
      ),
    ),
    surveys: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    features: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    rollback_conditions: Schema.optional(Schema.Unknown),
    performed_rollback: Schema.optional(Schema.NullOr(Schema.Boolean)),
    can_edit: Schema.optional(Schema.Boolean),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    evaluation_contexts: Schema.optional(Schema.Array(Schema.Unknown)),
    usage_dashboard: Schema.optional(Schema.Number),
    analytics_dashboards: Schema.optional(Schema.Array(Schema.Number)),
    has_enriched_analytics: Schema.optional(Schema.NullOr(Schema.Boolean)),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
    creation_context: Schema.optional(
      Schema.Literals([
        "feature_flags",
        "experiments",
        "surveys",
        "early_access_features",
        "web_experiments",
        "product_tours",
      ]),
    ),
    is_remote_configuration: Schema.optional(Schema.NullOr(Schema.Boolean)),
    has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
    status: Schema.optional(Schema.String),
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
    last_called_at: Schema.optional(Schema.NullOr(Schema.String)),
    _create_in_folder: Schema.optional(Schema.String),
    _should_create_usage_dashboard: Schema.optional(Schema.Boolean),
    is_used_in_replay_settings: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<FeatureFlagsPartialUpdateOutput>;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param id - A unique integer value identifying this feature flag.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FeatureFlagsPartialUpdateInput,
    outputSchema: FeatureFlagsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
