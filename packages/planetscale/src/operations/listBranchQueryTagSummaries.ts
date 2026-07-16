import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListBranchQueryTagSummariesInput {
  organization: string;
  database: string;
  branch: string;
  tags?: string;
  q?: string;
  from?: string;
  to?: string;
  period?: string;
  sort?:
    | "dimensions"
    | "lastRun"
    | "count"
    | "errorCount"
    | "rowsRead"
    | "rowsAffected"
    | "rowsReturned"
    | "rowsReadPerReturned"
    | "rowsReadPerQuery"
    | "rowsReturnedPerQuery"
    | "rowsAffectedPerQuery"
    | "totalTime"
    | "cpuTime"
    | "ioTime"
    | "sumShardQueries"
    | "maxShardQueries"
    | "avgShardQueries"
    | "table"
    | "qualifiedTable"
    | "tableKeyspace"
    | "indexes"
    | "routingIndexes"
    | "p50Latency"
    | "p99Latency"
    | "maxLatency"
    | "percentTime"
    | "percentCpuTime"
    | "percentIoTime"
    | "egressBytes"
    | "egressBytesPerQuery"
    | "maxEgressBytes"
    | "ingressBytes"
    | "ingressBytesPerQuery"
    | "maxIngressBytes"
    | "blocksRead"
    | "blocksHit"
    | "blockCacheHitRatio"
    | "blocksDirtied"
    | "blocksWritten"
    | "trafficControlWarnings"
    | "trafficControlThrottled"
    | "trafficControlChecked"
    | "trafficControlBudgetsUsed";
  dir?: "asc" | "desc";
  tablet_type?: "primary" | "replica" | "rdonly";
  type?: "SELECT" | "INSERT" | "UPDATE" | "DELETE";
  fields?: string;
  page?: number;
  per_page?: number;
}
export const ListBranchQueryTagSummariesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.String),
    q: Schema.optional(Schema.String),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
    period: Schema.optional(Schema.String),
    sort: Schema.optional(
      Schema.Literals([
        "dimensions",
        "lastRun",
        "count",
        "errorCount",
        "rowsRead",
        "rowsAffected",
        "rowsReturned",
        "rowsReadPerReturned",
        "rowsReadPerQuery",
        "rowsReturnedPerQuery",
        "rowsAffectedPerQuery",
        "totalTime",
        "cpuTime",
        "ioTime",
        "sumShardQueries",
        "maxShardQueries",
        "avgShardQueries",
        "table",
        "qualifiedTable",
        "tableKeyspace",
        "indexes",
        "routingIndexes",
        "p50Latency",
        "p99Latency",
        "maxLatency",
        "percentTime",
        "percentCpuTime",
        "percentIoTime",
        "egressBytes",
        "egressBytesPerQuery",
        "maxEgressBytes",
        "ingressBytes",
        "ingressBytesPerQuery",
        "maxIngressBytes",
        "blocksRead",
        "blocksHit",
        "blockCacheHitRatio",
        "blocksDirtied",
        "blocksWritten",
        "trafficControlWarnings",
        "trafficControlThrottled",
        "trafficControlChecked",
        "trafficControlBudgetsUsed",
      ]),
    ),
    dir: Schema.optional(Schema.Literals(["asc", "desc"])),
    tablet_type: Schema.optional(
      Schema.Literals(["primary", "replica", "rdonly"]),
    ),
    type: Schema.optional(
      Schema.Literals(["SELECT", "INSERT", "UPDATE", "DELETE"]),
    ),
    fields: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/tags/summaries",
    }),
  ) as unknown as Schema.Codec<ListBranchQueryTagSummariesInput>;

// Output Schema
export interface ListBranchQueryTagSummariesOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    dimensions: Record<string, unknown>;
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
  }>;
}
export const ListBranchQueryTagSummariesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        dimensions: Schema.Record(Schema.String, Schema.Unknown),
        query_count: Schema.Number,
        error_count: Schema.Number,
        tables: Schema.Array(Schema.String),
        qualified_tables: Schema.Array(Schema.String),
        table_keyspaces: Schema.Array(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        index_usages: Schema.Array(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
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
      }),
    ),
  }) as unknown as Schema.Codec<ListBranchQueryTagSummariesOutput>;

// The operation
/**
 * List query statistics grouped by tag
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param tags - Tag names to group query statistics by
 * @param q - Search query statistics by SQL pattern
 * @param from - Start time for filtering query statistics (ISO 8601 timestamp)
 * @param to - End time for filtering query statistics (ISO 8601 timestamp)
 * @param period - Time period for filtering query statistics (e.g., '1h', '24h')
 * @param sort - Field to sort by
 * @param dir - Sort direction
 * @param tablet_type - Filter by tablet type
 * @param type - Filter by statement type
 * @param fields - Specific fields to include in the response
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listBranchQueryTagSummaries =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListBranchQueryTagSummariesInput,
    outputSchema: ListBranchQueryTagSummariesOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
