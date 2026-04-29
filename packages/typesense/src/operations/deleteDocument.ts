import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteDocumentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  documentId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/collections/{collectionName}/documents/{documentId}",
  }),
);
export type DeleteDocumentInput = typeof DeleteDocumentInput.Type;

// Output Schema
export const DeleteDocumentOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DeleteDocumentOutput = typeof DeleteDocumentOutput.Type;

// The operation
/**
 * Delete a document
 *
 * Delete an individual document from a collection by using its ID.
 *
 * @param collectionName - The name of the collection to search for the document under
 * @param documentId - The Document ID
 */
export const deleteDocument = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDocumentInput,
  outputSchema: DeleteDocumentOutput,
  errors: [NotFound] as const,
}));
