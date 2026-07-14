import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteDocumentInput {
  collectionName: string;
  documentId: string;
}
export const DeleteDocumentInput = /*@__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  documentId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/collections/{collectionName}/documents/{documentId}",
  }),
) as unknown as Schema.Codec<DeleteDocumentInput>;

// Output Schema
export type DeleteDocumentOutput = unknown;
export const DeleteDocumentOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<DeleteDocumentOutput>;

// The operation
/**
 * Delete a document
 *
 * Delete an individual document from a collection by using its ID.
 *
 * @param collectionName - The name of the collection to search for the document under
 * @param documentId - The Document ID
 */
export const deleteDocument = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteDocumentInput,
  outputSchema: DeleteDocumentOutput,
  errors: [NotFound] as const,
}));
