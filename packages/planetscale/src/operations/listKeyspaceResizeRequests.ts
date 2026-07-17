import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListKeyspaceResizeRequestsInput {
  organization: string;
  database: string;
  branch: string;
  keyspace: string;
  page?: number;
  per_page?: number;
}
export const ListKeyspaceResizeRequestsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    keyspace: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/keyspaces/{keyspace}/resizes",
    }),
  ) as unknown as Schema.Codec<ListKeyspaceResizeRequestsInput>;

// Output Schema
export interface ListKeyspaceResizeRequestsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
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
  }>;
}
export const ListKeyspaceResizeRequestsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<ListKeyspaceResizeRequestsOutput>;

// The operation
/**
 * List keyspace resize requests
 *
 * Lists resize requests for a branch keyspace, most recent first.
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param keyspace - The name of the keyspace
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listKeyspaceResizeRequests =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListKeyspaceResizeRequestsInput,
    outputSchema: ListKeyspaceResizeRequestsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
