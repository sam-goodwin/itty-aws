import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreateProjectInput {
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
    branch?: {
      name?: string;
      role_name?: string;
      database_name?: string;
      annotations?: Record<string, string>;
    };
    autoscaling_limit_min_cu?: number;
    autoscaling_limit_max_cu?: number;
    provisioner?: string;
    region_id?: string;
    default_endpoint_settings?: {
      pg_settings?: Record<string, string>;
      pgbouncer_settings?: Record<string, string>;
      autoscaling_limit_min_cu?: number;
      autoscaling_limit_max_cu?: number;
      suspend_timeout_seconds?: number;
    };
    pg_version?: number;
    store_passwords?: boolean;
    history_retention_seconds?: number;
    org_id?: string;
  };
}
export const CreateProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    branch: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        role_name: Schema.optional(Schema.String),
        database_name: Schema.optional(Schema.String),
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    autoscaling_limit_min_cu: Schema.optional(Schema.Number),
    autoscaling_limit_max_cu: Schema.optional(Schema.Number),
    provisioner: Schema.optional(Schema.String),
    region_id: Schema.optional(Schema.String),
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
    pg_version: Schema.optional(Schema.Number),
    store_passwords: Schema.optional(Schema.Boolean),
    history_retention_seconds: Schema.optional(Schema.Number),
    org_id: Schema.optional(Schema.String),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/projects" }),
) as unknown as Schema.Codec<CreateProjectInput>;

// Output Schema
export interface CreateProjectOutput {
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
  connection_uris: {
    connection_uri: Redacted.Redacted<string>;
    connection_parameters: {
      database: string;
      password: Redacted.Redacted<string>;
      role: string;
      host: string;
      pooler_host: string;
    };
  }[];
  roles: {
    branch_id: string;
    name: string;
    password?: Redacted.Redacted<string>;
    protected?: boolean;
    authentication_method?: string;
    created_at: string;
    updated_at: string;
  }[];
  databases: {
    id: number;
    branch_id: string;
    name: string;
    owner_name: string;
    created_at: string;
    updated_at: string;
  }[];
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
  branch: {
    id: string;
    project_id: string;
    parent_id?: string;
    parent_lsn?: string;
    parent_timestamp?: string;
    name: string;
    current_state: string;
    pending_state?: string;
    state_changed_at: string;
    logical_size?: number;
    creation_source: string;
    primary?: boolean;
    default: boolean;
    protected: boolean;
    cpu_used_sec: number;
    compute_time_seconds: number;
    active_time_seconds: number;
    written_data_bytes: number;
    data_transfer_bytes: number;
    created_at: string;
    updated_at: string;
    ttl_interval_seconds?: number;
    expires_at?: string;
    last_reset_at?: string;
    created_by?: { name?: string; image?: string };
    init_source?: string;
    restore_status?: string;
    restored_from?: string;
    restored_as?: string;
    restricted_actions?: { name: string; reason: string }[];
    recovery?: {
      deleted_at: string;
      recoverable_until: string;
      deletion_method: "user" | "ttl";
    };
  };
  endpoints: {
    host: string;
    id: string;
    name?: string;
    project_id: string;
    branch_id: string;
    autoscaling_limit_min_cu: number;
    autoscaling_limit_max_cu: number;
    region_id: string;
    type: "read_only" | "read_write";
    current_state: "init" | "active" | "idle";
    pending_state?: "init" | "active" | "idle";
    settings: {
      pg_settings?: Record<string, string>;
      pgbouncer_settings?: Record<string, string>;
      preload_libraries?: {
        use_defaults?: boolean;
        enabled_libraries?: string[];
      };
    };
    pooler_enabled: boolean;
    pooler_mode: "transaction";
    disabled: boolean;
    passwordless_access: boolean;
    last_active?: string;
    creation_source: string;
    created_at: string;
    updated_at: string;
    started_at?: string;
    suspended_at?: string;
    proxy_host: string;
    suspend_timeout_seconds: number;
    provisioner: string;
    compute_release_version?: string;
  }[];
}
export const CreateProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  connection_uris: Schema.Array(
    Schema.Struct({
      connection_uri: SensitiveOutputString,
      connection_parameters: Schema.Struct({
        database: Schema.String,
        password: SensitiveOutputString,
        role: Schema.String,
        host: Schema.String,
        pooler_host: Schema.String,
      }),
    }),
  ),
  roles: Schema.Array(
    Schema.Struct({
      branch_id: Schema.String,
      name: Schema.String,
      password: Schema.optional(SensitiveOutputString),
      protected: Schema.optional(Schema.Boolean),
      authentication_method: Schema.optional(Schema.String),
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
  ),
  databases: Schema.Array(
    Schema.Struct({
      id: Schema.Number,
      branch_id: Schema.String,
      name: Schema.String,
      owner_name: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
  ),
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
  branch: Schema.Struct({
    id: Schema.String,
    project_id: Schema.String,
    parent_id: Schema.optional(Schema.String),
    parent_lsn: Schema.optional(Schema.String),
    parent_timestamp: Schema.optional(Schema.String),
    name: Schema.String,
    current_state: Schema.String,
    pending_state: Schema.optional(Schema.String),
    state_changed_at: Schema.String,
    logical_size: Schema.optional(Schema.Number),
    creation_source: Schema.String,
    primary: Schema.optional(Schema.Boolean),
    default: Schema.Boolean,
    protected: Schema.Boolean,
    cpu_used_sec: Schema.Number,
    compute_time_seconds: Schema.Number,
    active_time_seconds: Schema.Number,
    written_data_bytes: Schema.Number,
    data_transfer_bytes: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.String,
    ttl_interval_seconds: Schema.optional(Schema.Number),
    expires_at: Schema.optional(Schema.String),
    last_reset_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        image: Schema.optional(Schema.String),
      }),
    ),
    init_source: Schema.optional(Schema.String),
    restore_status: Schema.optional(Schema.String),
    restored_from: Schema.optional(Schema.String),
    restored_as: Schema.optional(Schema.String),
    restricted_actions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          reason: Schema.String,
        }),
      ),
    ),
    recovery: Schema.optional(
      Schema.Struct({
        deleted_at: Schema.String,
        recoverable_until: Schema.String,
        deletion_method: Schema.Literals(["user", "ttl"]),
      }),
    ),
  }),
  endpoints: Schema.Array(
    Schema.Struct({
      host: Schema.String,
      id: Schema.String,
      name: Schema.optional(Schema.String),
      project_id: Schema.String,
      branch_id: Schema.String,
      autoscaling_limit_min_cu: Schema.Number,
      autoscaling_limit_max_cu: Schema.Number,
      region_id: Schema.String,
      type: Schema.Literals(["read_only", "read_write"]),
      current_state: Schema.Literals(["init", "active", "idle"]),
      pending_state: Schema.optional(
        Schema.Literals(["init", "active", "idle"]),
      ),
      settings: Schema.Struct({
        pg_settings: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        pgbouncer_settings: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        preload_libraries: Schema.optional(
          Schema.Struct({
            use_defaults: Schema.optional(Schema.Boolean),
            enabled_libraries: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
      pooler_enabled: Schema.Boolean,
      pooler_mode: Schema.Literals(["transaction"]),
      disabled: Schema.Boolean,
      passwordless_access: Schema.Boolean,
      last_active: Schema.optional(Schema.String),
      creation_source: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
      started_at: Schema.optional(Schema.String),
      suspended_at: Schema.optional(Schema.String),
      proxy_host: Schema.String,
      suspend_timeout_seconds: Schema.Number,
      provisioner: Schema.String,
      compute_release_version: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<CreateProjectOutput>;

// The operation
/**
 * Create project
 *
 * Creates a Neon project within an organization.
 * If using a personal API key, include the `org_id` parameter to specify which organization to create the project in.
 * If using an org API key, `org_id` is automatically inferred from the key.
 * Plan limits define how many projects you can create.
 * For more information, see [Manage projects](https://neon.com/docs/manage/projects/).
 * You can specify a region and Postgres version in the request body.
 * Neon currently supports PostgreSQL 14, 15, 16, 17, and 18.
 * For supported regions and `region_id` values, see [Regions](https://neon.com/docs/introduction/regions/).
 */
export const createProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateProjectInput,
  outputSchema: CreateProjectOutput,
}));
