import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateBranchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  new_name: Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}",
  }),
);
export type UpdateBranchInput = typeof UpdateBranchInput.Type;

// Output Schema
export const UpdateBranchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type UpdateBranchOutput = typeof UpdateBranchOutput.Type;

// The operation
/**
 * Update a branch
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param new_name - The name to update the branch
 */
export const updateBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateBranchInput,
  outputSchema: UpdateBranchOutput,
  errors: [Forbidden, NotFound] as const,
}));
