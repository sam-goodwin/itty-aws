import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface ListProjectBranchEndpointsInput {
  project_id: string;
  branch_id: string;
}
export const ListProjectBranchEndpointsInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/endpoints",
    }),
  ) as unknown as Schema.Codec<ListProjectBranchEndpointsInput>;

// Output Schema
export interface ListProjectBranchEndpointsOutput {
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
export const ListProjectBranchEndpointsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ListProjectBranchEndpointsOutput>;

// The operation
/**
 * List branch endpoints
 *
 * Retrieves a list of compute endpoints for the specified branch.
 * Neon permits only one read-write compute endpoint per branch.
 * A branch can have multiple read-only compute endpoints.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const listProjectBranchEndpoints = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListProjectBranchEndpointsInput,
  outputSchema: ListProjectBranchEndpointsOutput,
  errors: [NotFound] as const,
}));
