import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const QueryNamespaceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namespace: Schema.String.pipe(T.PathParam()),
  vector_encoding: Schema.optional(Schema.Unknown),
  consistency: Schema.optional(
    Schema.Struct({
      level: Schema.optional(Schema.Unknown),
    }),
  ),
  rank_by: Schema.optional(Schema.Unknown),
  top_k: Schema.optional(Schema.Number),
  filters: Schema.optional(Schema.Unknown),
  include_attributes: Schema.optional(Schema.Unknown),
  exclude_attributes: Schema.optional(Schema.Array(Schema.String)),
  aggregate_by: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  group_by: Schema.optional(Schema.Array(Schema.Unknown)),
  distance_metric: Schema.optional(Schema.Unknown),
  limit: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/v2/namespaces/{namespace}/query" }));
export type QueryNamespaceInput = typeof QueryNamespaceInput.Type;

// Output Schema
export const QueryNamespaceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aggregations: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  aggregation_groups: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  rows: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.Unknown,
        vector: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  performance: Schema.Struct({
    cache_hit_ratio: Schema.Number,
    cache_temperature: Schema.String,
    server_total_ms: Schema.Number,
    query_execution_ms: Schema.Number,
    exhaustive_search_count: Schema.Number,
    approx_namespace_size: Schema.Number,
  }),
  billing: Schema.Struct({
    billable_logical_bytes_queried: Schema.Number,
    billable_logical_bytes_returned: Schema.Number,
  }),
});
export type QueryNamespaceOutput = typeof QueryNamespaceOutput.Type;

// The operation
/**
 * Query, filter, full-text search and vector search documents.
 *
 * @param namespace - The name of the namespace.
 */
export const QueryNamespace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryNamespaceInput,
  outputSchema: QueryNamespaceOutput,
}));
