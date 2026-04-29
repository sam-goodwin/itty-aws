import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateDocumentsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  updateDocumentsParameters: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "PATCH", path: "/collections/{collectionName}/documents" }),
);
export type UpdateDocumentsInput = typeof UpdateDocumentsInput.Type;

// Output Schema
export const UpdateDocumentsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  num_updated: Schema.Number,
});
export type UpdateDocumentsOutput = typeof UpdateDocumentsOutput.Type;

// The operation
/**
 * Update documents with conditional query
 *
 * The filter_by query parameter is used to filter to specify a condition against which the documents are matched. The request body contains the fields that should be updated for any documents that match the filter condition. This endpoint is only available if the Typesense server is version `0.25.0.rc12` or later.
 *
 * @param collectionName - The name of the collection to update documents in
 */
export const updateDocuments = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDocumentsInput,
  outputSchema: UpdateDocumentsOutput,
  errors: [BadRequest, NotFound] as const,
}));
