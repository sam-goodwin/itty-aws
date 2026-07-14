import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListProjectsInput {
  cursor?: string;
  limit?: number;
  search?: string;
  org_id?: string;
  timeout?: number;
  recoverable?: boolean;
}
export const ListProjectsInput = /*@__PURE__*/ Schema.Struct({
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
  org_id: Schema.optional(Schema.String),
  timeout: Schema.optional(Schema.Number),
  recoverable: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/projects" }),
) as unknown as Schema.Codec<ListProjectsInput>;

// Output Schema
export interface ListProjectsOutput {
  projects: {
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
    active_time: number;
    cpu_used_sec: number;
    maintenance_starts_at?: string;
    creation_source: string;
    created_at: string;
    updated_at: string;
    synthetic_storage_size?: number;
    quota_reset_at?: string;
    owner_id: string;
    compute_last_active_at?: string;
    org_id?: string;
    org_name?: string;
    history_retention_seconds?: number;
    hipaa_enabled_at?: string;
    deleted_at?: string;
    recoverable_until?: string;
    effective_project_permission?:
      | "CAN_VIEW"
      | "CAN_EDIT"
      | "CAN_MANAGE"
      | null;
  }[];
  unavailable_project_ids?: string[];
  pagination?: { cursor: string };
  applications: Record<
    string,
    ("vercel" | "github" | "datadog" | "opentelemetry")[]
  >;
  integrations: Record<
    string,
    ("vercel" | "github" | "datadog" | "opentelemetry")[]
  >;
}
export const ListProjectsOutput = /*@__PURE__*/ Schema.Struct({
  projects: Schema.Array(
    Schema.Struct({
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
      active_time: Schema.Number,
      cpu_used_sec: Schema.Number,
      maintenance_starts_at: Schema.optional(Schema.String),
      creation_source: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
      synthetic_storage_size: Schema.optional(Schema.Number),
      quota_reset_at: Schema.optional(Schema.String),
      owner_id: Schema.String,
      compute_last_active_at: Schema.optional(Schema.String),
      org_id: Schema.optional(Schema.String),
      org_name: Schema.optional(Schema.String),
      history_retention_seconds: Schema.optional(Schema.Number),
      hipaa_enabled_at: Schema.optional(Schema.String),
      deleted_at: Schema.optional(Schema.String),
      recoverable_until: Schema.optional(Schema.String),
      effective_project_permission: Schema.optional(
        Schema.NullOr(Schema.Literals(["CAN_VIEW", "CAN_EDIT", "CAN_MANAGE"])),
      ),
    }),
  ),
  unavailable_project_ids: Schema.optional(Schema.Array(Schema.String)),
  pagination: Schema.optional(
    Schema.Struct({
      cursor: Schema.String,
    }),
  ),
  applications: Schema.Record(
    Schema.String,
    Schema.Array(
      Schema.Literals(["vercel", "github", "datadog", "opentelemetry"]),
    ),
  ),
  integrations: Schema.Record(
    Schema.String,
    Schema.Array(
      Schema.Literals(["vercel", "github", "datadog", "opentelemetry"]),
    ),
  ),
}) as unknown as Schema.Codec<ListProjectsOutput>;

// The operation
/**
 * List projects
 *
 * Retrieves a list of projects for the specified organization.
 * If using a personal API key, include the `org_id` parameter to specify which organization to work with.
 * If using an org API key, `org_id` is automatically inferred from the key.
 * For more information, see [Manage organizations using the Neon API](https://neon.com/docs/manage/orgs-api)
 * and [Manage projects](https://neon.com/docs/manage/projects/).
 *
 * @param cursor - Specify the cursor value from the previous response to retrieve the next batch of projects.
 * @param limit - Specify a value from 1 to 400 to limit number of projects in the response.
 * @param search - Search by project `name` or `id`. You can specify partial `name` or `id` values to filter results.
 * @param org_id - Search for projects by `org_id`.
 * @param timeout - Specify an explicit timeout in milliseconds to limit response delay.
After timing out, the incomplete list of project data fetched so far will be returned.
Projects still being fetched when the timeout occurred are listed in the "unavailable" attribute of the response.
If not specified, an implicit implementation defined timeout is chosen with the same behaviour as above

 * @param recoverable - Show only deleted projects within the recovery window.

 */
export const listProjects = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: ListProjectsInput,
  outputSchema: ListProjectsOutput,
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "pagination.cursor",
    items: "projects",
  },
}));
