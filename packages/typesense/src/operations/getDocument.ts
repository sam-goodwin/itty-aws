import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetDocumentInput {
  collectionName: string;
  documentId: string;
}
export const GetDocumentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  documentId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/collections/{collectionName}/documents/{documentId}",
  }),
) as unknown as Schema.Codec<GetDocumentInput>;

// Output Schema
export type GetDocumentOutput = unknown;
export const GetDocumentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<GetDocumentOutput>;

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
