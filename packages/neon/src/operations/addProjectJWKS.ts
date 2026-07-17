import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AddProjectJWKSInput {
  project_id: string;
  jwks_url: string;
  provider_name: string;
  branch_id?: string;
  jwt_audience?: string;
  role_names?: string[];
  skip_role_creation?: boolean;
}
export const AddProjectJWKSInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  jwks_url: Schema.String,
  provider_name: Schema.String,
  branch_id: Schema.optional(Schema.String),
  jwt_audience: Schema.optional(Schema.String),
  role_names: Schema.optional(Schema.Array(Schema.String)),
  skip_role_creation: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/projects/{project_id}/jwks" }),
) as unknown as Schema.Codec<AddProjectJWKSInput>;

// Output Schema
export interface AddProjectJWKSOutput {
  jwks: {
    id: string;
    project_id: string;
    branch_id?: string;
    jwks_url: string;
    provider_name: string;
    created_at: string;
    updated_at: string;
    jwt_audience?: string;
    role_names?: string[];
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
export const AddProjectJWKSOutput = /*@__PURE__*/ Schema.Struct({
  jwks: Schema.Struct({
    id: Schema.String,
    project_id: Schema.String,
    branch_id: Schema.optional(Schema.String),
    jwks_url: Schema.String,
    provider_name: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
    jwt_audience: Schema.optional(Schema.String),
    role_names: Schema.optional(Schema.Array(Schema.String)),
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
}) as unknown as Schema.Codec<AddProjectJWKSOutput>;

// The operation
/**
 * Add JWKS URL
 *
 * Adds a JWKS URL to the specified project for verifying JWTs used as the authentication mechanism.
 * The URL must be a valid HTTPS URL that returns a JSON Web Key Set.
 * The `provider_name` field allows you to specify which authentication provider you're using (e.g., Clerk, Auth0, AWS Cognito).
 * The `branch_id` scopes the JWKS URL to specific branches; if not specified, it applies to all branches.
 * The `role_names` scopes the URL to specific roles; if not specified, default roles are used (`authenticator`, `authenticated`, `anonymous`).
 * The `jwt_audience` specifies which `aud` values are accepted in JWTs.
 *
 * @param project_id - The Neon project ID
 */
export const addProjectJWKS = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddProjectJWKSInput,
  outputSchema: AddProjectJWKSOutput,
}));
