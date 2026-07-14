import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListBranchBouncerResizeRequestsInput {
  organization: string;
  database: string;
  branch: string;
  page?: number;
  per_page?: number;
}
export const ListBranchBouncerResizeRequestsInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/bouncer-resizes",
    }),
  ) as unknown as Schema.Codec<ListBranchBouncerResizeRequestsInput>;

// Output Schema
export interface ListBranchBouncerResizeRequestsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    state: "pending" | "resizing" | "canceled" | "completed";
    replicas_per_cell: number;
    parameters: Record<string, unknown>;
    previous_replicas_per_cell: number;
    previous_parameters: Record<string, unknown>;
    started_at: string | null;
    completed_at: string | null;
    created_at: string;
    updated_at: string;
    actor: { id: string; display_name: string; avatar_url: string };
    bouncer: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    };
    sku: {
      name: string;
      display_name: string;
      cpu: string;
      ram: number;
      sort_order: number;
    };
    previous_sku: {
      name: string;
      display_name: string;
      cpu: string;
      ram: number;
      sort_order: number;
    };
  }[];
}
export const ListBranchBouncerResizeRequestsOutput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        state: Schema.Literals([
          "pending",
          "resizing",
          "canceled",
          "completed",
        ]),
        replicas_per_cell: Schema.Number,
        parameters: Schema.Record(Schema.String, Schema.Unknown),
        previous_replicas_per_cell: Schema.Number,
        previous_parameters: Schema.Record(Schema.String, Schema.Unknown),
        started_at: Schema.NullOr(Schema.String),
        completed_at: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
        actor: Schema.Struct({
          id: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
        }),
        bouncer: Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          created_at: Schema.String,
          updated_at: Schema.String,
          deleted_at: Schema.NullOr(Schema.String),
        }),
        sku: Schema.Struct({
          name: Schema.String,
          display_name: Schema.String,
          cpu: Schema.String,
          ram: Schema.Number,
          sort_order: Schema.Number,
        }),
        previous_sku: Schema.Struct({
          name: Schema.String,
          display_name: Schema.String,
          cpu: Schema.String,
          ram: Schema.Number,
          sort_order: Schema.Number,
        }),
      }),
    ),
  }) as unknown as Schema.Codec<ListBranchBouncerResizeRequestsOutput>;

// The operation
/**
 * Get bouncer resize requests
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listBranchBouncerResizeRequests =
  /*@__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListBranchBouncerResizeRequestsInput,
    outputSchema: ListBranchBouncerResizeRequestsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
