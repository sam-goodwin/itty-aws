import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateNamespaceMetadataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pinning: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/namespaces/{namespace}/metadata" }),
  );
export type UpdateNamespaceMetadataInput =
  typeof UpdateNamespaceMetadataInput.Type;

// Output Schema
export const UpdateNamespaceMetadataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.Record(
      Schema.String,
      Schema.Struct({
        type: Schema.String,
        filterable: Schema.optional(Schema.Boolean),
        regex: Schema.optional(Schema.Boolean),
        glob: Schema.optional(Schema.Boolean),
        fuzzy: Schema.optional(Schema.Boolean),
        full_text_search: Schema.optional(Schema.Unknown),
        ann: Schema.optional(Schema.Unknown),
        sparse_knn: Schema.optional(
          Schema.Struct({
            distance_metric: Schema.Unknown,
          }),
        ),
        embed: Schema.optional(Schema.Unknown),
      }),
    ),
    approx_row_count: Schema.Number,
    approx_logical_bytes: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.String,
    encryption: Schema.Unknown,
    index: Schema.Unknown,
    pinning: Schema.optional(
      Schema.Struct({
        replicas: Schema.optional(Schema.Number),
        status: Schema.optional(
          Schema.Struct({
            updated_at: Schema.String,
            ready_replicas: Schema.Number,
            utilization: Schema.Number,
          }),
        ),
      }),
    ),
  });
export type UpdateNamespaceMetadataOutput =
  typeof UpdateNamespaceMetadataOutput.Type;

// The operation
/**
 * Update metadata configuration for a namespace.
 *
 * @param namespace - The name of the namespace.
 */
export const UpdateNamespaceMetadata = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateNamespaceMetadataInput,
    outputSchema: UpdateNamespaceMetadataOutput,
  }),
);
