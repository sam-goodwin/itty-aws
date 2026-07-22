import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface UpdateBranchChangeRequestInput {
  organization: string;
  database: string;
  branch: string;
  cluster_size?: string;
  replicas?: number;
  parameters?: Record<string, unknown>;
  storage?: {
    minimum_storage_bytes?: number;
    maximum_storage_bytes?: number;
    storage_autoscaling?: boolean;
    storage_iops?: number;
    storage_throughput_mibs?: number;
  };
}
export const UpdateBranchChangeRequestInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    cluster_size: Schema.optional(Schema.String),
    replicas: Schema.optional(Schema.Number),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    storage: Schema.optional(
      Schema.Struct({
        minimum_storage_bytes: Schema.optional(Schema.Number),
        maximum_storage_bytes: Schema.optional(Schema.Number),
        storage_autoscaling: Schema.optional(Schema.Boolean),
        storage_iops: Schema.optional(Schema.Number),
        storage_throughput_mibs: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/changes",
    }),
  ) as unknown as Schema.Codec<UpdateBranchChangeRequestInput>;

// Output Schema
export interface UpdateBranchChangeRequestOutput {
  id: string;
  restart?: ReadonlyArray<number>;
  state: "queued" | "pending" | "resizing" | "canceled" | "completed";
  started_at: string | null;
  completed_at?: string | null;
  created_at: string;
  updated_at: string;
  actor: { id: string; display_name: string; avatar_url: string };
  cluster_name: string;
  cluster_display_name: string;
  cluster_metal: boolean;
  replicas: number;
  parameters: Record<string, unknown>;
  previous_cluster_name: string;
  previous_cluster_display_name: string;
  previous_cluster_metal: boolean;
  previous_replicas: number;
  previous_parameters: Record<string, unknown>;
  minimum_storage_bytes: number;
  maximum_storage_bytes: number;
  storage_autoscaling: boolean;
  storage_shrinking: boolean;
  storage_type: "gp3" | "io2" | "pd_ssd";
  storage_iops: number;
  storage_throughput_mibs: number;
  previous_minimum_storage_bytes: number;
  previous_maximum_storage_bytes: number;
  previous_storage_autoscaling: boolean;
  previous_storage_shrinking: boolean;
  previous_storage_type: string;
  previous_storage_iops: number;
  previous_storage_throughput_mibs: number;
}
export const UpdateBranchChangeRequestOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    restart: Schema.optional(Schema.Array(Schema.Number)),
    state: Schema.Literals([
      "queued",
      "pending",
      "resizing",
      "canceled",
      "completed",
    ]),
    started_at: Schema.NullOr(Schema.String),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    updated_at: Schema.String,
    actor: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
    cluster_name: Schema.String,
    cluster_display_name: Schema.String,
    cluster_metal: Schema.Boolean,
    replicas: Schema.Number,
    parameters: Schema.Record(Schema.String, Schema.Unknown),
    previous_cluster_name: Schema.String,
    previous_cluster_display_name: Schema.String,
    previous_cluster_metal: Schema.Boolean,
    previous_replicas: Schema.Number,
    previous_parameters: Schema.Record(Schema.String, Schema.Unknown),
    minimum_storage_bytes: Schema.Number,
    maximum_storage_bytes: Schema.Number,
    storage_autoscaling: Schema.Boolean,
    storage_shrinking: Schema.Boolean,
    storage_type: Schema.Literals(["gp3", "io2", "pd_ssd"]),
    storage_iops: Schema.Number,
    storage_throughput_mibs: Schema.Number,
    previous_minimum_storage_bytes: Schema.Number,
    previous_maximum_storage_bytes: Schema.Number,
    previous_storage_autoscaling: Schema.Boolean,
    previous_storage_shrinking: Schema.Boolean,
    previous_storage_type: Schema.String,
    previous_storage_iops: Schema.Number,
    previous_storage_throughput_mibs: Schema.Number,
  }) as unknown as Schema.Codec<UpdateBranchChangeRequestOutput>;

// The operation
/**
 * Upsert a change request for cluster size, replicas, storage, or parameters
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param cluster_size - The size of the cluster. Available sizes can be found using the 'List cluster sizes' endpoint.
 * @param replicas - The total number of replicas
 * @param parameters - Cluster configuration parameters nested by namespace (e.g., {"pgconf": {"max_connections": "200"}}). Use the 'List cluster parameters' endpoint to retrieve available parameters. Supported namespaces include 'patroni', 'pgconf', and 'pgbouncer'.
 */
export const updateBranchChangeRequest = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateBranchChangeRequestInput,
  outputSchema: UpdateBranchChangeRequestOutput,
  errors: [Forbidden, NotFound] as const,
}));
