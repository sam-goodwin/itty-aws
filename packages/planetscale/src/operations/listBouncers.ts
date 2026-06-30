import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListBouncersInput {
  organization: string;
  database: string;
  branch: string;
  page?: number;
  per_page?: number;
}
export const ListBouncersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/bouncers",
  }),
) as unknown as Schema.Codec<ListBouncersInput>;

// Output Schema
export interface ListBouncersOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    name: string;
    sku: {
      name: string;
      display_name: string;
      cpu: string;
      ram: number;
      sort_order: number;
    };
    target: "primary" | "replica" | "replica_az_affinity";
    replicas_per_cell: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    actor: { id: string; display_name: string; avatar_url: string };
    branch: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    };
    parameters: {
      id: string;
      namespace: "pgbouncer";
      name: string;
      display_name: string;
      category: string;
      description: string;
      immutable: boolean;
      parameter_type: "array" | "integer" | "seconds" | "select" | "string";
      default_value: string;
      value: string;
      required: boolean;
      created_at: string;
      updated_at: string;
      restart: boolean;
      max: number;
      min: number;
      step: number;
      url: string;
      options: string[];
      actor: { id: string; display_name: string; avatar_url: string };
    }[];
  }[];
}
export const ListBouncersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      sku: Schema.Struct({
        name: Schema.String,
        display_name: Schema.String,
        cpu: Schema.String,
        ram: Schema.Number,
        sort_order: Schema.Number,
      }),
      target: Schema.Literals(["primary", "replica", "replica_az_affinity"]),
      replicas_per_cell: Schema.Number,
      created_at: Schema.String,
      updated_at: Schema.String,
      deleted_at: Schema.NullOr(Schema.String),
      actor: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      branch: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        deleted_at: Schema.NullOr(Schema.String),
      }),
      parameters: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          namespace: Schema.Literals(["pgbouncer"]),
          name: Schema.String,
          display_name: Schema.String,
          category: Schema.String,
          description: Schema.String,
          immutable: Schema.Boolean,
          parameter_type: Schema.Literals([
            "array",
            "integer",
            "seconds",
            "select",
            "string",
          ]),
          default_value: Schema.String,
          value: Schema.String,
          required: Schema.Boolean,
          created_at: Schema.String,
          updated_at: Schema.String,
          restart: Schema.Boolean,
          max: Schema.Number,
          min: Schema.Number,
          step: Schema.Number,
          url: Schema.String,
          options: Schema.Array(Schema.String),
          actor: Schema.Struct({
            id: Schema.String,
            display_name: Schema.String,
            avatar_url: Schema.String,
          }),
        }),
      ),
    }),
  ),
}) as unknown as Schema.Codec<ListBouncersOutput>;

// The operation
/**
 * List bouncers
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listBouncers = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: ListBouncersInput,
    outputSchema: ListBouncersOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }),
);
