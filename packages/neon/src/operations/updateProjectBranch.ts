import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface UpdateProjectBranchInput {
  project_id: string;
  branch_id: string;
  branch: { name?: string; protected?: boolean; expires_at?: string | null };
}
export const UpdateProjectBranchInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    branch: Schema.Struct({
      name: Schema.optional(Schema.String),
      protected: Schema.optional(Schema.Boolean),
      expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}",
    }),
  ) as unknown as Schema.Codec<UpdateProjectBranchInput>;

// Output Schema
export interface UpdateProjectBranchOutput {
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
export const UpdateProjectBranchOutput =
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
  }) as unknown as Schema.Codec<UpdateProjectBranchOutput>;

// The operation
/**
 * Update branch
 *
 * Updates the specified branch.
 * For more information, see [Manage branches](https://neon.com/docs/manage/branches/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const updateProjectBranch = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateProjectBranchInput,
  outputSchema: UpdateProjectBranchOutput,
  errors: [BadRequest, NotFound] as const,
}));
