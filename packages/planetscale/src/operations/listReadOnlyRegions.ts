import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListReadOnlyRegionsInput {
  organization: string;
  database: string;
  page?: number;
  per_page?: number;
}
export const ListReadOnlyRegionsInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/read-only-regions",
    }),
  ) as unknown as Schema.Codec<ListReadOnlyRegionsInput>;

// Output Schema
export interface ListReadOnlyRegionsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    display_name: string;
    created_at: string;
    updated_at: string;
    ready_at: string | null;
    ready: boolean;
    actor: { id: string; display_name: string; avatar_url: string };
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
  }[];
}
export const ListReadOnlyRegionsOutput =
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
        display_name: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        ready_at: Schema.NullOr(Schema.String),
        ready: Schema.Boolean,
        actor: Schema.Struct({
          id: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
        }),
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
      }),
    ),
  }) as unknown as Schema.Codec<ListReadOnlyRegionsOutput>;

// The operation
/**
 * List read-only regions
 *
 * List read-only regions for the database's default branch
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listReadOnlyRegions =
  /*@__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListReadOnlyRegionsInput,
    outputSchema: ListReadOnlyRegionsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
