import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetDocumentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  documentId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/collections/{collectionName}/documents/{documentId}",
  }),
);
export type GetDocumentInput = typeof GetDocumentInput.Type;

// Output Schema
export const GetDocumentOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetDocumentOutput = typeof GetDocumentOutput.Type;

// The operation
/**
 * Retrieve a document
 *
 * Fetch an individual document from a collection by using its ID.
 *
 * @param collectionName - The name of the collection to search for the document under
 * @param documentId - The Document ID
 */
export const getDocument = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDocumentInput,
  outputSchema: GetDocumentOutput,
  errors: [NotFound] as const,
}));
