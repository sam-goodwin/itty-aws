import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface UpdateProjectInput {
  project_id: string;
  project: {
    settings?: {
      quota?: {
        active_time_seconds?: number;
        compute_time_seconds?: number;
        written_data_bytes?: number;
        data_transfer_bytes?: number;
        logical_size_bytes?: number;
      };
      allowed_ips?: { ips?: string[]; protected_branches_only?: boolean };
      enable_logical_replication?: boolean;
      maintenance_window?: {
        weekdays: number[];
        start_time: string;
        end_time: string;
      };
      block_public_connections?: boolean;
      block_vpc_connections?: boolean;
      audit_log_level?: "base" | "extended" | "full";
      hipaa?: boolean;
      preload_libraries?: {
        use_defaults?: boolean;
        enabled_libraries?: string[];
      };
    };
    name?: string;
    default_endpoint_settings?: {
      pg_settings?: Record<string, string>;
      pgbouncer_settings?: Record<string, string>;
      autoscaling_limit_min_cu?: number;
      autoscaling_limit_max_cu?: number;
      suspend_timeout_seconds?: number;
    };
    history_retention_seconds?: number;
  };
}
export const UpdateProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  project: Schema.Struct({
    settings: Schema.optional(
      Schema.Struct({
        quota: Schema.optional(
          Schema.Struct({
            active_time_seconds: Schema.optional(Schema.Number),
            compute_time_seconds: Schema.optional(Schema.Number),
            written_data_bytes: Schema.optional(Schema.Number),
            data_transfer_bytes: Schema.optional(Schema.Number),
            logical_size_bytes: Schema.optional(Schema.Number),
          }),
        ),
        allowed_ips: Schema.optional(
          Schema.Struct({
            ips: Schema.optional(Schema.Array(Schema.String)),
            protected_branches_only: Schema.optional(Schema.Boolean),
          }),
        ),
        enable_logical_replication: Schema.optional(Schema.Boolean),
        maintenance_window: Schema.optional(
          Schema.Struct({
            weekdays: Schema.Array(Schema.Number),
            start_time: Schema.String,
            end_time: Schema.String,
          }),
        ),
        block_public_connections: Schema.optional(Schema.Boolean),
        block_vpc_connections: Schema.optional(Schema.Boolean),
        audit_log_level: Schema.optional(
          Schema.Literals(["base", "extended", "full"]),
        ),
        hipaa: Schema.optional(Schema.Boolean),
        preload_libraries: Schema.optional(
          Schema.Struct({
            use_defaults: Schema.optional(Schema.Boolean),
            enabled_libraries: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
    name: Schema.optional(Schema.String),
    default_endpoint_settings: Schema.optional(
      Schema.Struct({
        pg_settings: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        pgbouncer_settings: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        autoscaling_limit_min_cu: Schema.optional(Schema.Number),
        autoscaling_limit_max_cu: Schema.optional(Schema.Number),
        suspend_timeout_seconds: Schema.optional(Schema.Number),
      }),
    ),
    history_retention_seconds: Schema.optional(Schema.Number),
  }),
}).pipe(
  T.Http({ method: "PATCH", path: "/projects/{project_id}" }),
) as unknown as Schema.Codec<UpdateProjectInput>;

// Output Schema
export interface UpdateProjectOutput {
  project: {
    data_storage_bytes_hour: number;
    data_transfer_bytes: number;
    written_data_bytes: number;
    compute_time_seconds: number;
    active_time_seconds: number;
    cpu_used_sec: number;
    id: string;
    platform_id: string;
    region_id: string;
    name: string;
    provisioner: string;
    default_endpoint_settings?: {
      pg_settings?: Record<string, string>;
      pgbouncer_settings?: Record<string, string>;
      autoscaling_limit_min_cu?: number;
      autoscaling_limit_max_cu?: number;
      suspend_timeout_seconds?: number;
    };
    settings?: {
      quota?: {
        active_time_seconds?: number;
        compute_time_seconds?: number;
        written_data_bytes?: number;
        data_transfer_bytes?: number;
        logical_size_bytes?: number;
      };
      allowed_ips?: { ips?: string[]; protected_branches_only?: boolean };
      enable_logical_replication?: boolean;
      maintenance_window?: {
        weekdays: number[];
        start_time: string;
        end_time: string;
      };
      block_public_connections?: boolean;
      block_vpc_connections?: boolean;
      audit_log_level?: "base" | "extended" | "full";
      hipaa?: boolean;
      preload_libraries?: {
        use_defaults?: boolean;
        enabled_libraries?: string[];
      };
    };
    pg_version: number;
    proxy_host: string;
    branch_logical_size_limit: number;
    branch_logical_size_limit_bytes: number;
    store_passwords: boolean;
    maintenance_starts_at?: string;
    creation_source: string;
    history_retention_seconds: number;
    created_at: string;
    updated_at: string;
    synthetic_storage_size?: number;
    consumption_period_start: string;
    consumption_period_end: string;
    quota_reset_at?: string;
    owner_id: string;
    owner?: {
      email: string;
      name: string;
      branches_limit: number;
      subscription_type:
        | "UNKNOWN"
        | "direct_sales"
        | "direct_sales_v3"
        | "aws_marketplace"
        | "free_v2"
        | "free_v3"
        | "launch"
        | "launch_v3"
        | "scale"
        | "scale_v3"
        | "business"
        | "vercel_pg_legacy";
    };
    compute_last_active_at?: string;
    org_id?: string;
    maintenance_scheduled_for?: string;
    hipaa_enabled_at?: string;
    effective_project_permission?:
      | "CAN_VIEW"
      | "CAN_EDIT"
      | "CAN_MANAGE"
      | null;
  };
  operations: {
    id: string;
    project_id: string;
    branch_id?: string;
    endpoint_id?: string;
    action:
      | "create_compute"
      | "create_timeline"
      | "start_compute"
      | "suspend_compute"
      | "apply_config"
      | "check_availability"
      | "delete_timeline"
      | "create_branch"
      | "import_data"
      | "tenant_ignore"
      | "tenant_attach"
      | "tenant_detach"
      | "tenant_reattach"
      | "replace_safekeeper"
      | "disable_maintenance"
      | "apply_storage_config"
      | "prepare_secondary_pageserver"
      | "switch_pageserver"
      | "detach_parent_branch"
      | "timeline_archive"
      | "timeline_unarchive"
      | "start_reserved_compute"
      | "sync_dbs_and_roles_from_compute"
      | "apply_schema_from_branch"
      | "timeline_mark_invisible"
      | "timeline_update_protected_config"
      | "prewarm_replica"
      | "promote_replica"
      | "set_storage_non_dirty"
      | "swap_binding_id"
      | "finalize_migration"
      | "mark_migration_prepared";
    status:
      | "scheduling"
      | "running"
      | "finished"
      | "failed"
      | "error"
      | "cancelling"
      | "cancelled"
      | "skipped";
    error?: string;
    failures_count: number;
    retry_at?: string;
    created_at: string;
    updated_at: string;
    total_duration_ms: number;
  }[];
}
export const UpdateProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.Struct({
    data_storage_bytes_hour: Schema.Number,
    data_transfer_bytes: Schema.Number,
    written_data_bytes: Schema.Number,
    compute_time_seconds: Schema.Number,
    active_time_seconds: Schema.Number,
    cpu_used_sec: Schema.Number,
    id: Schema.String,
    platform_id: Schema.String,
    region_id: Schema.String,
    name: Schema.String,
    provisioner: Schema.String,
    default_endpoint_settings: Schema.optional(
      Schema.Struct({
        pg_settings: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        pgbouncer_settings: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        autoscaling_limit_min_cu: Schema.optional(Schema.Number),
        autoscaling_limit_max_cu: Schema.optional(Schema.Number),
        suspend_timeout_seconds: Schema.optional(Schema.Number),
      }),
    ),
    settings: Schema.optional(
      Schema.Struct({
        quota: Schema.optional(
          Schema.Struct({
            active_time_seconds: Schema.optional(Schema.Number),
            compute_time_seconds: Schema.optional(Schema.Number),
            written_data_bytes: Schema.optional(Schema.Number),
            data_transfer_bytes: Schema.optional(Schema.Number),
            logical_size_bytes: Schema.optional(Schema.Number),
          }),
        ),
        allowed_ips: Schema.optional(
          Schema.Struct({
            ips: Schema.optional(Schema.Array(Schema.String)),
            protected_branches_only: Schema.optional(Schema.Boolean),
          }),
        ),
        enable_logical_replication: Schema.optional(Schema.Boolean),
        maintenance_window: Schema.optional(
          Schema.Struct({
            weekdays: Schema.Array(Schema.Number),
            start_time: Schema.String,
            end_time: Schema.String,
          }),
        ),
        block_public_connections: Schema.optional(Schema.Boolean),
        block_vpc_connections: Schema.optional(Schema.Boolean),
        audit_log_level: Schema.optional(
          Schema.Literals(["base", "extended", "full"]),
        ),
        hipaa: Schema.optional(Schema.Boolean),
        preload_libraries: Schema.optional(
          Schema.Struct({
            use_defaults: Schema.optional(Schema.Boolean),
            enabled_libraries: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
    pg_version: Schema.Number,
    proxy_host: Schema.String,
    branch_logical_size_limit: Schema.Number,
    branch_logical_size_limit_bytes: Schema.Number,
    store_passwords: Schema.Boolean,
    maintenance_starts_at: Schema.optional(Schema.String),
    creation_source: Schema.String,
    history_retention_seconds: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.String,
    synthetic_storage_size: Schema.optional(Schema.Number),
    consumption_period_start: Schema.String,
    consumption_period_end: Schema.String,
    quota_reset_at: Schema.optional(Schema.String),
    owner_id: Schema.String,
    owner: Schema.optional(
      Schema.Struct({
        email: Schema.String,
        name: Schema.String,
        branches_limit: Schema.Number,
        subscription_type: Schema.Literals([
          "UNKNOWN",
          "direct_sales",
          "direct_sales_v3",
          "aws_marketplace",
          "free_v2",
          "free_v3",
          "launch",
          "launch_v3",
          "scale",
          "scale_v3",
          "business",
          "vercel_pg_legacy",
        ]),
      }),
    ),
    compute_last_active_at: Schema.optional(Schema.String),
    org_id: Schema.optional(Schema.String),
    maintenance_scheduled_for: Schema.optional(Schema.String),
    hipaa_enabled_at: Schema.optional(Schema.String),
    effective_project_permission: Schema.optional(
      Schema.NullOr(Schema.Literals(["CAN_VIEW", "CAN_EDIT", "CAN_MANAGE"])),
    ),
  }),
  operations: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      project_id: Schema.String,
      branch_id: Schema.optional(Schema.String),
      endpoint_id: Schema.optional(Schema.String),
      action: Schema.Literals([
        "create_compute",
        "create_timeline",
        "start_compute",
        "suspend_compute",
        "apply_config",
        "check_availability",
        "delete_timeline",
        "create_branch",
        "import_data",
        "tenant_ignore",
        "tenant_attach",
        "tenant_detach",
        "tenant_reattach",
        "replace_safekeeper",
        "disable_maintenance",
        "apply_storage_config",
        "prepare_secondary_pageserver",
        "switch_pageserver",
        "detach_parent_branch",
        "timeline_archive",
        "timeline_unarchive",
        "start_reserved_compute",
        "sync_dbs_and_roles_from_compute",
        "apply_schema_from_branch",
        "timeline_mark_invisible",
        "timeline_update_protected_config",
        "prewarm_replica",
        "promote_replica",
        "set_storage_non_dirty",
        "swap_binding_id",
        "finalize_migration",
        "mark_migration_prepared",
      ]),
      status: Schema.Literals([
        "scheduling",
        "running",
        "finished",
        "failed",
        "error",
        "cancelling",
        "cancelled",
        "skipped",
      ]),
      error: Schema.optional(Schema.String),
      failures_count: Schema.Number,
      retry_at: Schema.optional(Schema.String),
      created_at: Schema.String,
      updated_at: Schema.String,
      total_duration_ms: Schema.Number,
    }),
  ),
}) as unknown as Schema.Codec<UpdateProjectOutput>;

// The operation
/**
 * Update project
 *
 * Updates the specified project.
 * Configurable properties include the project name, default compute settings, history retention period, and IP allowlist.
 *
 * @param project_id - The Neon project ID
 */
export const updateProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateProjectInput,
  outputSchema: UpdateProjectOutput,
  errors: [BadRequest, NotFound] as const,
}));
