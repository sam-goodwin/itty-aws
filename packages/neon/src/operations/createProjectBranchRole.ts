import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreateProjectBranchRoleInput {
  project_id: string;
  branch_id: string;
  role: { name: string; no_login?: boolean };
}
export const CreateProjectBranchRoleInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    role: Schema.Struct({
      name: Schema.String,
      no_login: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/roles",
    }),
  ) as unknown as Schema.Codec<CreateProjectBranchRoleInput>;

// Output Schema
export interface CreateProjectBranchRoleOutput {
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
export const CreateProjectBranchRoleOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CreateProjectBranchRoleOutput>;

// The operation
/**
 * Create role
 *
 * Creates a Postgres role in the specified branch.
 * For related information, see [Manage roles](https://neon.com/docs/manage/roles/).
 * Connections established to the active compute endpoint will be dropped.
 * If the compute endpoint is idle, the endpoint becomes active for a short period of time and is suspended afterward.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const createProjectBranchRole = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateProjectBranchRoleInput,
  outputSchema: CreateProjectBranchRoleOutput,
  errors: [NotFound, Conflict] as const,
}));
