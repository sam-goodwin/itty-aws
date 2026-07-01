import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ResetProjectBranchRolePasswordInput {
  project_id: string;
  branch_id: string;
  role_name: string;
}
export const ResetProjectBranchRolePasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    role_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password",
    }),
  ) as unknown as Schema.Codec<ResetProjectBranchRolePasswordInput>;

// Output Schema
export interface ResetProjectBranchRolePasswordOutput {
  role: {
    branch_id: string;
    name: string;
    password?: Redacted.Redacted<string>;
    protected?: boolean;
    authentication_method?: string;
    created_at: string;
    updated_at: string;
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
export const ResetProjectBranchRolePasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.Struct({
      branch_id: Schema.String,
      name: Schema.String,
      password: Schema.optional(SensitiveOutputString),
      protected: Schema.optional(Schema.Boolean),
      authentication_method: Schema.optional(Schema.String),
      created_at: Schema.String,
      updated_at: Schema.String,
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
  }) as unknown as Schema.Codec<ResetProjectBranchRolePasswordOutput>;

// The operation
/**
 * Reset role password
 *
 * Resets the password for the specified Postgres role.
 * Returns a new password and operations. The new password is ready to use when the last operation finishes.
 * The old password remains valid until last operation finishes.
 * Connections to the compute endpoint are dropped. If idle,
 * the compute endpoint becomes active for a short period of time.
 * For related information, see [Manage roles](https://neon.com/docs/manage/roles/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 * @param role_name - The role name
 */
export const resetProjectBranchRolePassword =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResetProjectBranchRolePasswordInput,
    outputSchema: ResetProjectBranchRolePasswordOutput,
    errors: [NotFound] as const,
  }));
