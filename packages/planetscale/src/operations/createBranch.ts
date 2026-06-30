import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface CreateBranchInput {
  organization: string;
  database: string;
  name: string;
  parent_branch?: string;
  backup_id?: string;
  region?: string;
  restore_point?: string;
  seed_data?: "last_successful_backup";
  cluster_size?: string;
  storage?: { minimum_storage_bytes?: number; maximum_storage_bytes?: number };
  major_version?: string;
  create_database_if_missing?: boolean;
  kind?: "mysql" | "postgresql";
}
export const CreateBranchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
  parent_branch: Schema.optional(Schema.String),
  backup_id: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  restore_point: Schema.optional(Schema.String),
  seed_data: Schema.optional(Schema.Literals(["last_successful_backup"])),
  cluster_size: Schema.optional(Schema.String),
  storage: Schema.optional(
    Schema.Struct({
      minimum_storage_bytes: Schema.optional(Schema.Number),
      maximum_storage_bytes: Schema.optional(Schema.Number),
    }),
  ),
  major_version: Schema.optional(Schema.String),
  create_database_if_missing: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.Literals(["mysql", "postgresql"])),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization}/databases/{database}/branches",
  }),
) as unknown as Schema.Codec<CreateBranchInput>;

// Output Schema
export interface CreateBranchOutput {
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
    public_ip_addresses: string[];
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
}
export const CreateBranchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  vtgate_options: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  cluster_architecture: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CreateBranchOutput>;

// The operation
/**
 * Create a branch
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param name - The name of the branch to create
 * @param parent_branch - The name of the parent branch. Defaults to the database's default branch if not provided.
 * @param backup_id - If provided, restores the backup's schema and data to the new branch. Must have `restore_production_branch_backup(s)` or `restore_backup(s)` access to do this.
 * @param region - The region to create the branch in. If not provided, the branch will be created in the default region for its database.
 * @param restore_point - Restore from a point-in-time recovery timestamp (e.g. 2023-01-01T00:00:00Z). Available only for PostgreSQL databases.
 * @param seed_data - If provided, restores the last successful backup's schema and data to the new branch. Must have `restore_production_branch_backup(s)` or `restore_backup(s)` access to do this, in addition to Data Branching™ being enabled for the branch.
 * @param cluster_size - The database cluster size. Required if a backup_id is provided, optional otherwise. Options: PS_10, PS_20, PS_40, ..., PS_2800
 * @param major_version - For PostgreSQL databases, the PostgreSQL major version to use for the branch. Defaults to the major version of the parent branch if it exists or the database's default branch major version. Ignored for branches restored from backups.
 * @param create_database_if_missing - Create a new database for the branch if the database does not exist. Defaults to false.
 * @param kind - The kind of branch to create. Required when create_database_if_missing is set.
 */
export const createBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateBranchInput,
  outputSchema: CreateBranchOutput,
  errors: [Forbidden, NotFound] as const,
}));
