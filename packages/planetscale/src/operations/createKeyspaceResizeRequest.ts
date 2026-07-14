import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface CreateKeyspaceResizeRequestInput {
  organization: string;
  database: string;
  branch: string;
  keyspace: string;
  cluster_size?: string;
  extra_replicas?: number;
}
export const CreateKeyspaceResizeRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    keyspace: Schema.String.pipe(T.PathParam()),
    cluster_size: Schema.optional(Schema.String),
    extra_replicas: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/keyspaces/{keyspace}/resizes",
    }),
  ) as unknown as Schema.Codec<CreateKeyspaceResizeRequestInput>;

// Output Schema
export interface CreateKeyspaceResizeRequestOutput {
  id: string;
  state: string;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
  replicas: number;
  extra_replicas: number;
  previous_replicas: number;
  cluster_name: string;
  cluster_display_name?: string;
  previous_cluster_name: string;
  previous_cluster_display_name?: string;
  rdonly_replicas?: number | null;
  previous_rdonly_replicas?: number | null;
  vector_pool_allocation?: number | null;
  previous_vector_pool_allocation?: number | null;
  actor?: { id: string; display_name: string; avatar_url: string };
}
export const CreateKeyspaceResizeRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    state: Schema.String,
    started_at: Schema.NullOr(Schema.String),
    completed_at: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    replicas: Schema.Number,
    extra_replicas: Schema.Number,
    previous_replicas: Schema.Number,
    cluster_name: Schema.String,
    cluster_display_name: Schema.optional(Schema.String),
    previous_cluster_name: Schema.String,
    previous_cluster_display_name: Schema.optional(Schema.String),
    rdonly_replicas: Schema.optional(Schema.NullOr(Schema.Number)),
    previous_rdonly_replicas: Schema.optional(Schema.NullOr(Schema.Number)),
    vector_pool_allocation: Schema.optional(Schema.NullOr(Schema.Number)),
    previous_vector_pool_allocation: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    actor: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<CreateKeyspaceResizeRequestOutput>;

// The operation
/**
 * Create a keyspace resize request
 *
 * Starts or queues an in-place resize of a branch keyspace's cluster size and/or replica count. Rejected with 422 while another resize is in progress or when the keyspace is already configured with the requested values.
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param keyspace - The name of the keyspace
 * @param cluster_size - The new cluster size for the keyspace: PS_10, PS_20,…
 * @param extra_replicas - The number of additional replicas per shard beyond the cluster size's included default (each production cluster includes 2 replicas)
 */
export const createKeyspaceResizeRequest = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateKeyspaceResizeRequestInput,
    outputSchema: CreateKeyspaceResizeRequestOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
