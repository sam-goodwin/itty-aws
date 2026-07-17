import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface IndexDocumentInput {
  collectionName: string;
  action?: string;
  dirty_values?: string;
}
export const IndexDocumentInput = /*@__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  action: Schema.optional(Schema.String),
  dirty_values: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/collections/{collectionName}/documents" }),
) as unknown as Schema.Codec<IndexDocumentInput>;

// Output Schema
export type IndexDocumentOutput = unknown;
export const IndexDocumentOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<IndexDocumentOutput>;

// The operation
/**
 * Index a document
 *
 * A document to be indexed in a given collection must conform to the schema of the collection.
 *
 * @param collectionName - The name of the collection to add the document to
 * @param action - Additional action to perform
 * @param dirty_values - Dealing with Dirty Data
 */
export const indexDocument = /*@__PURE__*/ API.make(() => ({
  inputSchema: IndexDocumentInput,
  outputSchema: IndexDocumentOutput,
  errors: [NotFound] as const,
}));
