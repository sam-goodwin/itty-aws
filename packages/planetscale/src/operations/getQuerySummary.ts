import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetQuerySummaryInput {
  organization: string;
  database: string;
  branch: string;
  fingerprint: string;
  keyspace?: string;
  from?: string;
  to?: string;
  period?: string;
}
export const GetQuerySummaryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  fingerprint: Schema.String.pipe(T.PathParam()),
  keyspace: Schema.optional(Schema.String),
  from: Schema.optional(Schema.String),
  to: Schema.optional(Schema.String),
  period: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/{fingerprint}/summary",
  }),
) as unknown as Schema.Codec<GetQuerySummaryInput>;

// Output Schema
export interface GetQuerySummaryOutput {
  id: string;
  fingerprint: string;
  statement_type: string;
  keyspace: string;
  normalized_sql: string;
  syntax_highlighted_sql: string;
  multishard: boolean;
  query_count: number;
  error_count: number;
  tables: ReadonlyArray<string>;
  qualified_tables: ReadonlyArray<string>;
  table_keyspaces: ReadonlyArray<Record<string, unknown>>;
  index_usages: ReadonlyArray<Record<string, unknown>>;
  routing_index_usages: ReadonlyArray<Record<string, unknown>>;
  sum_shard_queries: number;
  max_shard_queries: number;
  avg_shard_queries: number;
  sum_rows_read: number;
  sum_rows_affected: number;
  sum_rows_returned: number;
  rows_read_per_returned: number;
  rows_read_per_query: number;
  rows_returned_per_query: number;
  rows_affected_per_query: number;
  sum_total_duration_millis: number;
  sum_total_duration_percent: number;
  sum_cpu_duration_millis: number;
  sum_cpu_duration_percent: number;
  sum_io_duration_millis: number;
  sum_io_duration_percent: number;
  last_run_at: string | null;
  time_per_query: number;
  p50_latency: number;
  p99_latency: number;
  max_latency: number;
  egress_bytes: number;
  egress_bytes_per_query: number;
  max_egress_bytes: number;
  ingress_bytes: number;
  ingress_bytes_per_query: number;
  max_ingress_bytes: number;
  blocks_read: number;
  blocks_hit: number;
  block_cache_hit_ratio: number;
  blocks_dirtied: number;
  blocks_written: number;
  traffic_control_warnings: number;
  traffic_control_throttled: number;
  traffic_control_checked: number;
}
export const GetQuerySummaryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  fingerprint: Schema.String,
  statement_type: Schema.String,
  keyspace: Schema.String,
  normalized_sql: Schema.String,
  syntax_highlighted_sql: Schema.String,
  multishard: Schema.Boolean,
  query_count: Schema.Number,
  error_count: Schema.Number,
  tables: Schema.Array(Schema.String),
  qualified_tables: Schema.Array(Schema.String),
  table_keyspaces: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  index_usages: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  routing_index_usages: Schema.Array(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  sum_shard_queries: Schema.Number,
  max_shard_queries: Schema.Number,
  avg_shard_queries: Schema.Number,
  sum_rows_read: Schema.Number,
  sum_rows_affected: Schema.Number,
  sum_rows_returned: Schema.Number,
  rows_read_per_returned: Schema.Number,
  rows_read_per_query: Schema.Number,
  rows_returned_per_query: Schema.Number,
  rows_affected_per_query: Schema.Number,
  sum_total_duration_millis: Schema.Number,
  sum_total_duration_percent: Schema.Number,
  sum_cpu_duration_millis: Schema.Number,
  sum_cpu_duration_percent: Schema.Number,
  sum_io_duration_millis: Schema.Number,
  sum_io_duration_percent: Schema.Number,
  last_run_at: Schema.NullOr(Schema.String),
  time_per_query: Schema.Number,
  p50_latency: Schema.Number,
  p99_latency: Schema.Number,
  max_latency: Schema.Number,
  egress_bytes: Schema.Number,
  egress_bytes_per_query: Schema.Number,
  max_egress_bytes: Schema.Number,
  ingress_bytes: Schema.Number,
  ingress_bytes_per_query: Schema.Number,
  max_ingress_bytes: Schema.Number,
  blocks_read: Schema.Number,
  blocks_hit: Schema.Number,
  block_cache_hit_ratio: Schema.Number,
  blocks_dirtied: Schema.Number,
  blocks_written: Schema.Number,
  traffic_control_warnings: Schema.Number,
  traffic_control_throttled: Schema.Number,
  traffic_control_checked: Schema.Number,
}) as unknown as Schema.Codec<GetQuerySummaryOutput>;

// The operation
/**
 * Retrieve a summary of query statistics
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param fingerprint - The query fingerprint
 * @param keyspace - The keyspace to filter by
 * @param from - Start time for filtering query statistics (ISO 8601 timestamp)
 * @param to - End time for filtering query statistics (ISO 8601 timestamp)
 * @param period - Time period for filtering query statistics (e.g., '1h', '24h')
 */
export const getQuerySummary = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetQuerySummaryInput,
  outputSchema: GetQuerySummaryOutput,
  errors: [Forbidden, NotFound] as const,
}));
