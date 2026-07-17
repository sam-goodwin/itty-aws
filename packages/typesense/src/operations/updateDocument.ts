import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface UpdateDocumentInput {
  collectionName: string;
  documentId: string;
  dirty_values?: string;
}
export const UpdateDocumentInput = /*@__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  documentId: Schema.String.pipe(T.PathParam()),
  dirty_values: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/collections/{collectionName}/documents/{documentId}",
  }),
) as unknown as Schema.Codec<UpdateDocumentInput>;

// Output Schema
export type UpdateDocumentOutput = unknown;
export const UpdateDocumentOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<UpdateDocumentOutput>;

// The operation
/**
 * Update a document
 *
 * Update an individual document from a collection by using its ID. The update can be partial.
 *
 * @param collectionName - The name of the collection to search for the document under
 * @param documentId - The Document ID
 * @param dirty_values - Dealing with Dirty Data
 */
export const updateDocument = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateDocumentInput,
  outputSchema: UpdateDocumentOutput,
  errors: [NotFound] as const,
}));
