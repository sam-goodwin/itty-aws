import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListBranchesInput {
  organization: string;
  database: string;
  q?: string;
  production?: boolean;
  safe_migrations?: boolean;
  order?: "asc" | "desc";
  page?: number;
  per_page?: number;
}
export const ListBranchesInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  q: Schema.optional(Schema.String),
  production: Schema.optional(Schema.Boolean),
  safe_migrations: Schema.optional(Schema.Boolean),
  order: Schema.optional(Schema.Literals(["asc", "desc"])),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches",
  }),
) as unknown as Schema.Codec<ListBranchesInput>;

// Output Schema
export interface ListBranchesOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    restore_checklist_completed_at: string | null;
    schema_last_updated_at: string | null;
    kind: "mysql" | "postgresql";
    mysql_address?: string;
    mysql_edge_address?: string;
    state: "pending" | "sleep_in_progress" | "sleeping" | "awakening" | "ready";
    direct_vtgate?: boolean;
    vtgate_size?: string;
    vtgate_count?: number;
    cluster_name: string;
    cluster_iops: number | null;
    ready: boolean;
    schema_ready?: boolean;
    metal: boolean;
    production: boolean;
    safe_migrations: boolean;
    sharded?: boolean;
    shard_count?: number;
    keyspace_count?: number;
    stale_schema: boolean;
    actor: { id: string; display_name: string; avatar_url: string } | null;
    restored_from_branch: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    } | null;
    private_edge_connectivity: boolean;
    has_replicas: boolean;
    has_read_only_replicas: boolean;
    html_url: string;
    url: string;
    region: {
      id: string;
      provider: string;
      enabled: boolean;
      public_ip_addresses: ReadonlyArray<string>;
      display_name: string;
      location: string;
      slug: string;
      current_default: boolean;
      mysql_supported: boolean;
      postgresql_supported: boolean;
    };
    parent_branch: string | null;
    vtgate_options?: Record<string, unknown>;
    cluster_architecture?: string;
  }>;
}
export const ListBranchesOutput = /*@__PURE__*/ Schema.Struct({
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
      created_at: Schema.String,
      updated_at: Schema.String,
      deleted_at: Schema.NullOr(Schema.String),
      restore_checklist_completed_at: Schema.NullOr(Schema.String),
      schema_last_updated_at: Schema.NullOr(Schema.String),
      kind: Schema.Literals(["mysql", "postgresql"]),
      mysql_address: Schema.optional(Schema.String),
      mysql_edge_address: Schema.optional(Schema.String),
      state: Schema.Literals([
        "pending",
        "sleep_in_progress",
        "sleeping",
        "awakening",
        "ready",
      ]),
      direct_vtgate: Schema.optional(Schema.Boolean),
      vtgate_size: Schema.optional(Schema.String),
      vtgate_count: Schema.optional(Schema.Number),
      cluster_name: Schema.String,
      cluster_iops: Schema.NullOr(Schema.Number),
      ready: Schema.Boolean,
      schema_ready: Schema.optional(Schema.Boolean),
      metal: Schema.Boolean,
      production: Schema.Boolean,
      safe_migrations: Schema.Boolean,
      sharded: Schema.optional(Schema.Boolean),
      shard_count: Schema.optional(Schema.Number),
      keyspace_count: Schema.optional(Schema.Number),
      stale_schema: Schema.Boolean,
      actor: Schema.NullOr(
        Schema.Struct({
          id: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
        }),
      ),
      restored_from_branch: Schema.NullOr(
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          created_at: Schema.String,
          updated_at: Schema.String,
          deleted_at: Schema.NullOr(Schema.String),
        }),
      ),
      private_edge_connectivity: Schema.Boolean,
      has_replicas: Schema.Boolean,
      has_read_only_replicas: Schema.Boolean,
      html_url: Schema.String,
      url: Schema.String,
      region: Schema.Struct({
        id: Schema.String,
        provider: Schema.String,
        enabled: Schema.Boolean,
        public_ip_addresses: Schema.Array(Schema.String),
        display_name: Schema.String,
        location: Schema.String,
        slug: Schema.String,
        current_default: Schema.Boolean,
        mysql_supported: Schema.Boolean,
        postgresql_supported: Schema.Boolean,
      }),
      parent_branch: Schema.NullOr(Schema.String),
      vtgate_options: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      cluster_architecture: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ListBranchesOutput>;

// The operation
/**
 * List branches
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param q - Search branches by name
 * @param production - Filter branches by production status
 * @param safe_migrations - Filter branches by safe migrations (DDL protection)
 * @param order - Order branches by created_at time
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listBranches = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: ListBranchesInput,
  outputSchema: ListBranchesOutput,
  errors: [Forbidden, NotFound] as const,
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "next_page",
    items: "data",
  },
}));
