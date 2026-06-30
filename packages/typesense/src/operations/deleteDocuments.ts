import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteDocumentsInput {
  collectionName: string;
  deleteDocumentsParameters?: string;
}
export const DeleteDocumentsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  deleteDocumentsParameters: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "DELETE", path: "/collections/{collectionName}/documents" }),
) as unknown as Schema.Codec<DeleteDocumentsInput>;

// Output Schema
export interface DeleteDocumentsOutput {
  num_deleted: number;
}
export const DeleteDocumentsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  num_deleted: Schema.Number,
}) as unknown as Schema.Codec<DeleteDocumentsOutput>;

// The operation
/**
 * Delete a bunch of documents
 *
 * Delete a bunch of documents that match a specific filter condition. Use the `batch_size` parameter to control the number of documents that should deleted at a time. A larger value will speed up deletions, but will impact performance of other operations running on the server.
 *
 * @param collectionName - The name of the collection to delete documents from
 */
export const deleteDocuments = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDocumentsInput,
  outputSchema: DeleteDocumentsOutput,
  errors: [NotFound] as const,
}));
