import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetQueryStatisticsInput {
  organization: string;
  database: string;
  branch: string;
  fingerprint: string;
  keyspace?: string;
  from?: string;
  to?: string;
  period?: string;
  page?: number;
  per_page?: number;
}
export const GetQueryStatisticsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    fingerprint: Schema.String.pipe(T.PathParam()),
    keyspace: Schema.optional(Schema.String),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
    period: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/{fingerprint}",
    }),
  ) as unknown as Schema.Codec<GetQueryStatisticsInput>;

// Output Schema
export interface GetQueryStatisticsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    password: Record<string, unknown>;
    tags: ReadonlyArray<Record<string, unknown>>;
    fingerprint: string;
    started_at: string | null;
    statement_type: string;
    keyspace: string;
    tables: ReadonlyArray<string>;
    username: string;
    remote_address: string;
    shard_queries: number;
    rows_read: number;
    rows_affected: number;
    rows_returned: number;
    total_duration_millis: number;
    error_message: string;
    normalized_sql: string;
    syntax_highlighted_sql: string;
    created_at: string;
    updated_at: string;
    explainable: boolean;
    truncated: boolean;
  }>;
}
export const GetQueryStatisticsOutput =
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
        password: Schema.Record(Schema.String, Schema.Unknown),
        tags: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        fingerprint: Schema.String,
        started_at: Schema.NullOr(Schema.String),
        statement_type: Schema.String,
        keyspace: Schema.String,
        tables: Schema.Array(Schema.String),
        username: Schema.String,
        remote_address: Schema.String,
        shard_queries: Schema.Number,
        rows_read: Schema.Number,
        rows_affected: Schema.Number,
        rows_returned: Schema.Number,
        total_duration_millis: Schema.Number,
        error_message: Schema.String,
        normalized_sql: Schema.String,
        syntax_highlighted_sql: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        explainable: Schema.Boolean,
        truncated: Schema.Boolean,
      }),
    ),
  }) as unknown as Schema.Codec<GetQueryStatisticsOutput>;

// The operation
/**
 * Retrieve query statistics
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param fingerprint - The query fingerprint
 * @param keyspace - The keyspace to filter by
 * @param from - Start time for filtering query statistics (ISO 8601 timestamp)
 * @param to - End time for filtering query statistics (ISO 8601 timestamp)
 * @param period - Time period for filtering query statistics (e.g., '1h', '24h')
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const getQueryStatistics = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: GetQueryStatisticsInput,
    outputSchema: GetQueryStatisticsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }),
);
