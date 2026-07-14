import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RunSQLQueryInput {
  sql: string;
  cache?: { maxAgeMs?: number };
}
export const RunSQLQueryInput = /*@__PURE__*/ Schema.Struct({
  sql: Schema.String,
  cache: Schema.optional(
    Schema.Struct({
      maxAgeMs: Schema.optional(Schema.Number),
    }),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/v2/data/query/run" }),
) as unknown as Schema.Codec<RunSQLQueryInput>;

// Output Schema
export interface RunSQLQueryOutput {
  result?: Record<string, unknown>[];
  schema?: {
    columns?: {
      name?: string;
      type?:
        | "String"
        | "UInt8"
        | "UInt16"
        | "UInt32"
        | "UInt64"
        | "UInt128"
        | "UInt256"
        | "Int8"
        | "Int16"
        | "Int32"
        | "Int64"
        | "Int128"
        | "Int256"
        | "Float32"
        | "Float64"
        | "Bool"
        | "Date"
        | "DateTime"
        | "DateTime64"
        | "UUID";
    }[];
  };
  metadata?: {
    cached?: boolean;
    executionTimestamp?: string;
    executionTimeMs?: number;
    rowCount?: number;
  };
}
export const RunSQLQueryOutput = /*@__PURE__*/ Schema.Struct({
  result: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  schema: Schema.optional(
    Schema.Struct({
      columns: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals([
                "String",
                "UInt8",
                "UInt16",
                "UInt32",
                "UInt64",
                "UInt128",
                "UInt256",
                "Int8",
                "Int16",
                "Int32",
                "Int64",
                "Int128",
                "Int256",
                "Float32",
                "Float64",
                "Bool",
                "Date",
                "DateTime",
                "DateTime64",
                "UUID",
              ]),
            ),
          }),
        ),
      ),
    }),
  ),
  metadata: Schema.optional(
    Schema.Struct({
      cached: Schema.optional(Schema.Boolean),
      executionTimestamp: Schema.optional(Schema.String),
      executionTimeMs: Schema.optional(Schema.Number),
      rowCount: Schema.optional(Schema.Number),
    }),
  ),
}) as unknown as Schema.Codec<RunSQLQueryOutput>;

// The operation
/**
 * Run SQL Query
 *
 * Run a read-only SQL query against indexed blockchain data including transactions, events, and decoded logs.
 * This endpoint provides direct SQL access to comprehensive blockchain data across supported networks.
 * Queries are executed against optimized data structures for high-performance analytics.
 * ### Allowed Queries
 * - Standard SQL syntax (CoinbaSeQL dialect, based on ClickHouse dialect)
 * - Read-only queries (SELECT statements)
 * - No DDL or DML operations
 * - Query that follow limits (defined below)
 * ### Supported Networks
 * - Base Mainnet: `base`
 * - Base Sepolia: `base_sepolia`
 * - Solana Mainnet: `solana`
 * - Hyperevm Mainnet: `hyperevm`
 * ### Supported Tables
 * The below tables are supported for `base` and `base_sepolia` networks.
 * Following the above, the valid tables on Base Mainnet are `base.events`, `base.transactions`, `base.blocks`, `base.encoded_logs`, `base.decoded_user_operations`, and `base.transaction_attributions`.
 * Separately, there is a limited set of tables supported for `solana` and `hyperevm` networks:
 * ### Query Limits
 * - Maximum result set: 50,000 rows
 * - Maximum query length: 10,000 characters
 * - Maximum on-disk data to read: 100GB
 * - Maximum memory usage: 15GB
 * - Query timeout: 30 seconds
 * - Maximum JOINs: 12
 * ### Query Caching
 * By default, each query result is returned from cache so long as the result is from an identical query and less than 750ms old. This freshness tolerance can be modified upwards, to a maximum of 900000ms (i.e. 900s, 15m).
 * This can be helpful for users who wish to reduce expensive calls to the SQL API by reusing cached results.
 */
export const runSQLQuery = /*@__PURE__*/ API.make(() => ({
  inputSchema: RunSQLQueryInput,
  outputSchema: RunSQLQueryOutput,
}));
