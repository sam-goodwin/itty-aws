import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface UpdateBouncerResizeRequestInput {
  organization: string;
  database: string;
  branch: string;
  bouncer: string;
  bouncer_size?: string;
  replicas_per_cell?: number;
  parameters?: Record<string, unknown>;
}
export const UpdateBouncerResizeRequestInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    bouncer: Schema.String.pipe(T.PathParam()),
    bouncer_size: Schema.optional(Schema.String),
    replicas_per_cell: Schema.optional(Schema.Number),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/bouncers/{bouncer}/resizes",
    }),
  ) as unknown as Schema.Codec<UpdateBouncerResizeRequestInput>;

// Output Schema
export interface UpdateBouncerResizeRequestOutput {
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
}
export const UpdateBouncerResizeRequestOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    state: Schema.Literals(["pending", "resizing", "canceled", "completed"]),
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
  }) as unknown as Schema.Codec<UpdateBouncerResizeRequestOutput>;

// The operation
/**
 * Upsert a bouncer resize request
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param bouncer - The name of the bouncer
 * @param bouncer_size - The bouncer size SKU name (e.g., 'PGB_5', 'PGB_10', 'PGB_20', 'PGB_40', 'PGB_80', 'PGB_160'). Defaults to 'PGB_5'.
 * @param replicas_per_cell - The number of PgBouncers per availability zone. Defaults to 1.
 * @param parameters - Bouncer configuration parameters nested by namespace (e.g., {"pgbouncer": {"default_pool_size": "100"}}). Use the 'List cluster parameters' endpoint to retrieve available parameters. Only parameters with namespace 'pgbouncer' can be updated.
 */
export const updateBouncerResizeRequest = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateBouncerResizeRequestInput,
  outputSchema: UpdateBouncerResizeRequestOutput,
  errors: [Forbidden, NotFound] as const,
}));
