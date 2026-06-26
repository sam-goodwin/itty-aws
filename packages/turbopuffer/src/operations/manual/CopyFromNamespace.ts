// Hand-authored: this operation is exposed in the turbopuffer spec only as the
// Stainless virtual path `POST /v2/namespaces/{namespace}?stainless_overload=copyFrom`,
// which the shared generator can't model (multiple body variants on one real
// method+path). Body: CopyFromNamespaceConfig + dest_encryption (Encryption).
// Response: WriteResult.
import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const CopyFromNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    source_namespace: Schema.String,
    source_api_key: Schema.optional(Schema.String),
    source_region: Schema.optional(Schema.String),
    dest_encryption: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "POST", path: "/v2/namespaces/{namespace}" }));
export type CopyFromNamespaceInput = typeof CopyFromNamespaceInput.Type;

// Output Schema
export const CopyFromNamespaceOutput =
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
export type CopyFromNamespaceOutput = typeof CopyFromNamespaceOutput.Type;

// The operation
/**
 * Copy all documents from another namespace into this one.
 *
 * @param namespace - The name of the namespace.
 * @param source_namespace - The namespace to copy documents from.
 * @param source_api_key - (Optional) An API key for the organization containing the source namespace
 * @param source_region - (Optional) The region of the source namespace.
 * @param dest_encryption - (Optional) The encryption configuration for the destination namespace.
 */
export const CopyFromNamespace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CopyFromNamespaceInput,
  outputSchema: CopyFromNamespaceOutput,
}));
