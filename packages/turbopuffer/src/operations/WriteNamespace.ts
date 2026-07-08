import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const WriteNamespaceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namespace: Schema.String.pipe(T.PathParam()),
  upsert_columns: Schema.optional(
    Schema.Struct({
      id: Schema.Array(Schema.Unknown),
      vector: Schema.optional(Schema.Unknown),
    }),
  ),
  upsert_rows: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.Unknown,
        vector: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  patch_columns: Schema.optional(
    Schema.Struct({
      id: Schema.Array(Schema.Unknown),
      vector: Schema.optional(Schema.Unknown),
    }),
  ),
  patch_rows: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.Unknown,
        vector: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  deletes: Schema.optional(Schema.Array(Schema.Unknown)),
  upsert_condition: Schema.optional(Schema.Unknown),
  patch_condition: Schema.optional(Schema.Unknown),
  delete_condition: Schema.optional(Schema.Unknown),
  distance_metric: Schema.optional(Schema.Unknown),
  schema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  branch_from_namespace: Schema.optional(Schema.Unknown),
  copy_from_namespace: Schema.optional(Schema.Unknown),
  delete_by_filter: Schema.optional(Schema.Unknown),
  delete_by_filter_allow_partial: Schema.optional(Schema.Boolean),
  patch_by_filter: Schema.optional(
    Schema.Struct({
      patch: Schema.Record(Schema.String, Schema.Unknown),
      filters: Schema.Unknown,
    }),
  ),
  patch_by_filter_allow_partial: Schema.optional(Schema.Boolean),
  return_affected_ids: Schema.optional(Schema.Boolean),
  encryption: Schema.optional(Schema.Unknown),
  disable_backpressure: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/v2/namespaces/{namespace}" }));
export type WriteNamespaceInput = typeof WriteNamespaceInput.Type;

// Output Schema
export const WriteNamespaceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.Unknown,
  message: Schema.String,
  rows_affected: Schema.Number,
  rows_upserted: Schema.optional(Schema.Number),
  rows_patched: Schema.optional(Schema.Number),
  rows_deleted: Schema.optional(Schema.Number),
  rows_remaining: Schema.optional(Schema.Boolean),
  upserted_ids: Schema.optional(Schema.Array(Schema.Unknown)),
  patched_ids: Schema.optional(Schema.Array(Schema.Unknown)),
  deleted_ids: Schema.optional(Schema.Array(Schema.Unknown)),
  billing: Schema.Struct({
    billable_logical_bytes_written: Schema.Number,
    query: Schema.optional(
      Schema.Struct({
        billable_logical_bytes_queried: Schema.Number,
        billable_logical_bytes_returned: Schema.Number,
      }),
    ),
  }),
  performance: Schema.optional(
    Schema.Struct({
      server_total_ms: Schema.Number,
    }),
  ),
});
export type WriteNamespaceOutput = typeof WriteNamespaceOutput.Type;

// The operation
/**
 * Create, update, or delete documents.
 *
 * @param namespace - The name of the namespace.
 */
export const WriteNamespace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WriteNamespaceInput,
  outputSchema: WriteNamespaceOutput,
}));
