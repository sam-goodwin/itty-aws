import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface SuspendProjectEndpointInput {
  project_id: string;
  endpoint_id: string;
}
export const SuspendProjectEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    endpoint_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/endpoints/{endpoint_id}/suspend",
    }),
  ) as unknown as Schema.Codec<SuspendProjectEndpointInput>;

// Output Schema
export interface SuspendProjectEndpointOutput {
  endpoint: {
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
export const SuspendProjectEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoint: Schema.Struct({
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
  }) as unknown as Schema.Codec<SuspendProjectEndpointOutput>;

// The operation
/**
 * Suspend compute endpoint
 *
 * Suspends the specified compute endpoint.
 * An `endpoint_id` has an `ep-` prefix.
 * For information about compute endpoints, see [Manage computes](https://neon.com/docs/manage/endpoints/).
 *
 * @param project_id - The Neon project ID
 * @param endpoint_id - The endpoint ID
 */
export const suspendProjectEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SuspendProjectEndpointInput,
    outputSchema: SuspendProjectEndpointOutput,
    errors: [NotFound] as const,
  }),
);
