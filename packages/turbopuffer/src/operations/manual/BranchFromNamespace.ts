// Hand-authored: this operation is exposed in the turbopuffer spec only as the
// Stainless virtual path `POST /v2/namespaces/{namespace}?stainless_overload=branchFrom`,
// which the shared generator can't model (multiple body variants on one real
// method+path). Body: BranchFromNamespaceConfig. Response: WriteResult.
import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const BranchFromNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    source_namespace: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/namespaces/{namespace}" }));
export type BranchFromNamespaceInput = typeof BranchFromNamespaceInput.Type;

// Output Schema
export const BranchFromNamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BranchFromNamespaceOutput = typeof BranchFromNamespaceOutput.Type;

// The operation
/**
 * Creates an instant, copy-on-write clone of a namespace.
 *
 * @param namespace - The name of the namespace.
 * @param source_namespace - The namespace to create an instant, copy-on-write clone of.
 */
export const BranchFromNamespace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BranchFromNamespaceInput,
  outputSchema: BranchFromNamespaceOutput,
}));
