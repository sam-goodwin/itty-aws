import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ExportDocumentsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  exportDocumentsParameters: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/collections/{collectionName}/documents/export",
  }),
);
export type ExportDocumentsInput = typeof ExportDocumentsInput.Type;

// Output Schema
export const ExportDocumentsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExportDocumentsOutput = typeof ExportDocumentsOutput.Type;

// The operation
/**
 * Export all documents in a collection
 *
 * Export all documents in a collection in JSON lines format.
 *
 * @param collectionName - The name of the collection
 */
export const exportDocuments = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExportDocumentsInput,
  outputSchema: ExportDocumentsOutput,
  errors: [NotFound] as const,
}));
