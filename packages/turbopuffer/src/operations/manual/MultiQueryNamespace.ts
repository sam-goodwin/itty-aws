// Hand-authored: this operation is exposed in the turbopuffer spec only as the
// Stainless virtual path `POST /v2/namespaces/{namespace}/query?stainless_overload=multiQuery`,
// which the shared generator can't model (multiple body variants on one real
// method+path). Body: QueryConfig + { queries: Query[], rerank_by }.
// Response: MultiQueryResult.
import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MultiQueryNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    vector_encoding: Schema.optional(Schema.Unknown),
    consistency: Schema.optional(
      Schema.Struct({
        level: Schema.optional(Schema.Unknown),
      }),
    ),
    queries: Schema.Array(
      Schema.Struct({
        rank_by: Schema.optional(Schema.Unknown),
        top_k: Schema.optional(Schema.Number),
        filters: Schema.optional(Schema.Unknown),
        include_attributes: Schema.optional(Schema.Unknown),
        exclude_attributes: Schema.optional(Schema.Array(Schema.String)),
        aggregate_by: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        group_by: Schema.optional(Schema.Array(Schema.Unknown)),
        distance_metric: Schema.optional(Schema.Unknown),
        limit: Schema.optional(Schema.Unknown),
      }),
    ),
    rerank_by: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "POST", path: "/v2/namespaces/{namespace}/query" }));
export type MultiQueryNamespaceInput = typeof MultiQueryNamespaceInput.Type;

// Output Schema
export const MultiQueryNamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        aggregations: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
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
      }),
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
export type MultiQueryNamespaceOutput = typeof MultiQueryNamespaceOutput.Type;

// The operation
/**
 * Issue multiple concurrent queries filter or search documents.
 *
 * @param namespace - The name of the namespace.
 */
export const MultiQueryNamespace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MultiQueryNamespaceInput,
  outputSchema: MultiQueryNamespaceOutput,
}));
