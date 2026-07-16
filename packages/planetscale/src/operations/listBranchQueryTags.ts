import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListBranchQueryTagsInput {
  organization: string;
  database: string;
  branch: string;
  q?: string;
  from?: string;
  to?: string;
  period?: string;
  fingerprint?: string;
  keyspace?: string;
  tablet_type?: "primary" | "replica" | "rdonly";
  values_limit?: number;
  literal_values_only?: boolean;
  page?: number;
  per_page?: number;
}
export const ListBranchQueryTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    q: Schema.optional(Schema.String),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
    period: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    keyspace: Schema.optional(Schema.String),
    tablet_type: Schema.optional(
      Schema.Literals(["primary", "replica", "rdonly"]),
    ),
    values_limit: Schema.optional(Schema.Number),
    literal_values_only: Schema.optional(Schema.Boolean),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/tags",
    }),
  ) as unknown as Schema.Codec<ListBranchQueryTagsInput>;

// Output Schema
export interface ListBranchQueryTagsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    name: string;
    source: "sql" | "system";
    query_count: number;
    values: ReadonlyArray<{
      name: string;
      query_count: number;
      kind: "literal" | "overflow" | "collapsed";
    }>;
  }>;
}
export const ListBranchQueryTagsOutput =
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
        name: Schema.String,
        source: Schema.Literals(["sql", "system"]),
        query_count: Schema.Number,
        values: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            query_count: Schema.Number,
            kind: Schema.Literals(["literal", "overflow", "collapsed"]),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ListBranchQueryTagsOutput>;

// The operation
/**
 * List query tags
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param q - Search tags by name
 * @param from - Start time for filtering tags (ISO 8601 timestamp)
 * @param to - End time for filtering tags (ISO 8601 timestamp)
 * @param period - Time period for filtering tags (e.g., '1h', '24h')
 * @param fingerprint - Filter to tags on queries with this fingerprint
 * @param keyspace - Filter by keyspace
 * @param tablet_type - Filter by tablet type
 * @param values_limit - Maximum number of values returned per tag (1-100)
 * @param literal_values_only - Only return literal tag values, excluding overflow and collapsed values
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listBranchQueryTags =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListBranchQueryTagsInput,
    outputSchema: ListBranchQueryTagsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
