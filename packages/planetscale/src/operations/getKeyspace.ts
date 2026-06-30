import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetKeyspaceInput {
  organization: string;
  database: string;
  branch: string;
  keyspace: string;
}
export const GetKeyspaceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  keyspace: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/keyspaces/{keyspace}",
  }),
) as unknown as Schema.Codec<GetKeyspaceInput>;

// Output Schema
export interface GetKeyspaceOutput {
  id: string;
  name: string;
  shards: number;
  sharded: boolean;
  replicas: number;
  extra_replicas: number;
  created_at: string;
  updated_at: string;
  cluster_name: string;
  cluster_display_name: string;
  resizing: boolean;
  resize_pending: boolean;
  config_change_in_progress: boolean;
  ready: boolean;
  metal: boolean;
  default: boolean;
  imported: boolean;
  vector_pool_allocation: number | null;
  node_ttl_strategy:
    | "node_ttl_follow_maintenance"
    | "node_ttl_always"
    | "node_ttl_off";
  replication_durability_constraints: {
    strategy?: "available" | "lag" | "always" | null;
  };
  vreplication_flags: {
    optimize_inserts: boolean;
    allow_no_blob_binlog_row_image: boolean;
    vplayer_batching: boolean;
  };
  mysqld_options: Record<string, unknown>;
  vttablet_options: Record<string, unknown>;
}
export const GetKeyspaceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  shards: Schema.Number,
  sharded: Schema.Boolean,
  replicas: Schema.Number,
  extra_replicas: Schema.Number,
  created_at: Schema.String,
  updated_at: Schema.String,
  cluster_name: Schema.String,
  cluster_display_name: Schema.String,
  resizing: Schema.Boolean,
  resize_pending: Schema.Boolean,
  config_change_in_progress: Schema.Boolean,
  ready: Schema.Boolean,
  metal: Schema.Boolean,
  default: Schema.Boolean,
  imported: Schema.Boolean,
  vector_pool_allocation: Schema.NullOr(Schema.Number),
  node_ttl_strategy: Schema.Literals([
    "node_ttl_follow_maintenance",
    "node_ttl_always",
    "node_ttl_off",
  ]),
  replication_durability_constraints: Schema.Struct({
    strategy: Schema.optional(
      Schema.NullOr(Schema.Literals(["available", "lag", "always"])),
    ),
  }),
  vreplication_flags: Schema.Struct({
    optimize_inserts: Schema.Boolean,
    allow_no_blob_binlog_row_image: Schema.Boolean,
    vplayer_batching: Schema.Boolean,
  }),
  mysqld_options: Schema.Record(Schema.String, Schema.Unknown),
  vttablet_options: Schema.Record(Schema.String, Schema.Unknown),
}) as unknown as Schema.Codec<GetKeyspaceOutput>;

// The operation
/**
 * Get a keyspace
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param keyspace - The name of the keyspace
 */
export const getKeyspace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetKeyspaceInput,
  outputSchema: GetKeyspaceOutput,
  errors: [Forbidden, NotFound] as const,
}));
