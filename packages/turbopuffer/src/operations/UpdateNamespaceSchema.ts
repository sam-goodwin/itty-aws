import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateNamespaceSchemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/namespaces/{namespace}/schema" }),
  );
export type UpdateNamespaceSchemaInput = typeof UpdateNamespaceSchemaInput.Type;

// Output Schema
export const UpdateNamespaceSchemaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
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
  );
export type UpdateNamespaceSchemaOutput =
  typeof UpdateNamespaceSchemaOutput.Type;

// The operation
/**
 * Update namespace schema.
 *
 * @param namespace - The name of the namespace.
 */
export const UpdateNamespaceSchema = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateNamespaceSchemaInput,
    outputSchema: UpdateNamespaceSchemaOutput,
  }),
);
