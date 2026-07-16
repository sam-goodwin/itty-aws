import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ListRolesInput {
  organization: string;
  database: string;
  branch: string;
  page?: number;
  per_page?: number;
  status?: string;
  q?: string;
}
export const ListRolesInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.String),
  q: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/roles",
  }),
) as unknown as Schema.Codec<ListRolesInput>;

// Output Schema
export interface ListRolesOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    name: string;
    access_host_url: string;
    private_access_host_url: string;
    private_connection_service_name: string;
    username: string;
    base_username: string;
    password: Redacted.Redacted<string> | null;
    database_name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    expires_at: string | null;
    dropped_at: string | null;
    disabled_at: string | null;
    drop_failed: string | null;
    expired: boolean;
    default: boolean;
    ttl: number | null;
    inherited_roles: ReadonlyArray<
      | "pscale_managed"
      | "pg_checkpoint"
      | "pg_create_subscription"
      | "pg_maintain"
      | "pg_monitor"
      | "pg_read_all_data"
      | "pg_read_all_settings"
      | "pg_read_all_stats"
      | "pg_signal_backend"
      | "pg_stat_scan_tables"
      | "pg_use_reserved_connections"
      | "pg_write_all_data"
      | "postgres"
    >;
    with_replication: boolean;
    branch: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    };
    actor: { id: string; display_name: string; avatar_url: string };
    query_safety_settings: {
      require_where_on_delete: "off" | "warn" | "on";
      require_where_on_update: "off" | "warn" | "on";
    };
  }>;
}
export const ListRolesOutput = /*@__PURE__*/ Schema.Struct({
  type: Schema.String,
  current_page: Schema.Number,
  next_page: Schema.NullOr(Schema.Number),
  next_page_url: Schema.NullOr(Schema.String),
  prev_page: Schema.NullOr(Schema.Number),
  prev_page_url: Schema.NullOr(Schema.String),
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      access_host_url: Schema.String,
      private_access_host_url: Schema.String,
      private_connection_service_name: Schema.String,
      username: Schema.String,
      base_username: Schema.String,
      password: SensitiveOutputNullableString,
      database_name: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
      deleted_at: Schema.NullOr(Schema.String),
      expires_at: Schema.NullOr(Schema.String),
      dropped_at: Schema.NullOr(Schema.String),
      disabled_at: Schema.NullOr(Schema.String),
      drop_failed: Schema.NullOr(Schema.String),
      expired: Schema.Boolean,
      default: Schema.Boolean,
      ttl: Schema.NullOr(Schema.Number),
      inherited_roles: Schema.Array(
        Schema.Literals([
          "pscale_managed",
          "pg_checkpoint",
          "pg_create_subscription",
          "pg_maintain",
          "pg_monitor",
          "pg_read_all_data",
          "pg_read_all_settings",
          "pg_read_all_stats",
          "pg_signal_backend",
          "pg_stat_scan_tables",
          "pg_use_reserved_connections",
          "pg_write_all_data",
          "postgres",
        ]),
      ),
      with_replication: Schema.Boolean,
      branch: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        deleted_at: Schema.NullOr(Schema.String),
      }),
      actor: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      query_safety_settings: Schema.Struct({
        require_where_on_delete: Schema.Literals(["off", "warn", "on"]),
        require_where_on_update: Schema.Literals(["off", "warn", "on"]),
      }),
    }),
  ),
}) as unknown as Schema.Codec<ListRolesOutput>;

// The operation
/**
 * List roles
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 * @param status - Filter roles by status
 * @param q - Search roles by name or username
 */
export const listRoles = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: ListRolesInput,
  outputSchema: ListRolesOutput,
  errors: [Forbidden, NotFound] as const,
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "next_page",
    items: "data",
  },
}));
