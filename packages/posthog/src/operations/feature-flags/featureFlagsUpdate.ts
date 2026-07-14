import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsUpdateInput {
  id: number;
  project_id: string;
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
export const FeatureFlagsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/feature_flags/{id}/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsUpdateInput>;

// Output Schema
export interface FeatureFlagsUpdateOutput {
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
export const FeatureFlagsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<FeatureFlagsUpdateOutput>;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param id - A unique integer value identifying this feature flag.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FeatureFlagsUpdateInput,
  outputSchema: FeatureFlagsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
