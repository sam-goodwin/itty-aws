import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreateProjectBranchInput {
  project_id: string;
  endpoints?: {
    type: "read_only" | "read_write";
    settings?: {
      pg_settings?: Record<string, string>;
      pgbouncer_settings?: Record<string, string>;
      preload_libraries?: {
        use_defaults?: boolean;
        enabled_libraries?: string[];
      };
    };
    autoscaling_limit_min_cu?: number;
    autoscaling_limit_max_cu?: number;
    provisioner?: string;
    suspend_timeout_seconds?: number;
  }[];
  branch?: {
    parent_id?: string;
    name?: string;
    parent_lsn?: string;
    parent_timestamp?: string;
    protected?: boolean;
    archived?: boolean;
    init_source?: string;
    expires_at?: string;
  };
  annotation_value?: Record<string, string>;
}
export const CreateProjectBranchInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    endpoints: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.Literals(["read_only", "read_write"]),
          settings: Schema.optional(
            Schema.Struct({
              pg_settings: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              pgbouncer_settings: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              preload_libraries: Schema.optional(
                Schema.Struct({
                  use_defaults: Schema.optional(Schema.Boolean),
                  enabled_libraries: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                }),
              ),
            }),
          ),
          autoscaling_limit_min_cu: Schema.optional(Schema.Number),
          autoscaling_limit_max_cu: Schema.optional(Schema.Number),
          provisioner: Schema.optional(Schema.String),
          suspend_timeout_seconds: Schema.optional(Schema.Number),
        }),
      ),
    ),
    branch: Schema.optional(
      Schema.Struct({
        parent_id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        parent_lsn: Schema.optional(Schema.String),
        parent_timestamp: Schema.optional(Schema.String),
        protected: Schema.optional(Schema.Boolean),
        archived: Schema.optional(Schema.Boolean),
        init_source: Schema.optional(Schema.String),
        expires_at: Schema.optional(Schema.String),
      }),
    ),
    annotation_value: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/projects/{project_id}/branches" }),
  ) as unknown as Schema.Codec<CreateProjectBranchInput>;

// Output Schema
export interface CreateProjectBranchOutput {
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
  connection_uris?: {
    connection_uri: Redacted.Redacted<string>;
    connection_parameters: {
      database: string;
      password: Redacted.Redacted<string>;
      role: string;
      host: string;
      pooler_host: string;
    };
  }[];
}
export const CreateProjectBranchOutput =
  /*@__PURE__*/ Schema.Struct({
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
    connection_uris: Schema.optional(
      Schema.Array(
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
    ),
  }) as unknown as Schema.Codec<CreateProjectBranchOutput>;

// The operation
/**
 * Create branch
 *
 * Creates a branch in the specified project.
 * No request body is required, but you can specify one to create a compute endpoint or select a non-default parent branch.
 * By default, the branch is created from the project's default branch with no compute endpoint, and the branch name is auto-generated.
 * To access the branch, add a `read_write` endpoint.
 * Each branch supports one read-write endpoint and multiple read-only endpoints.
 * For related information, see [Manage branches](https://neon.com/docs/manage/branches/).
 *
 * @param project_id - The Neon project ID
 */
export const createProjectBranch = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateProjectBranchInput,
  outputSchema: CreateProjectBranchOutput,
}));
