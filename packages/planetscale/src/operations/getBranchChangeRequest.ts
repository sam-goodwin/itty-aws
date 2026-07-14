import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetBranchChangeRequestInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
}
export const GetBranchChangeRequestInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/changes/{id}",
    }),
  ) as unknown as Schema.Codec<GetBranchChangeRequestInput>;

// Output Schema
export interface GetBranchChangeRequestOutput {
  id: string;
  restart: number[];
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
export const GetBranchChangeRequestOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    restart: Schema.Array(Schema.Number),
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
  }) as unknown as Schema.Codec<GetBranchChangeRequestOutput>;

// The operation
/**
 * Get a branch change request
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param id - The ID of the change request
 */
export const getBranchChangeRequest = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetBranchChangeRequestInput,
  outputSchema: GetBranchChangeRequestOutput,
  errors: [Forbidden, NotFound] as const,
}));
