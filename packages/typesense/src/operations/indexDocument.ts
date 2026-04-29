import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const IndexDocumentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  action: Schema.optional(Schema.String),
  dirty_values: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/collections/{collectionName}/documents" }),
);
export type IndexDocumentInput = typeof IndexDocumentInput.Type;

// Output Schema
export const IndexDocumentOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type IndexDocumentOutput = typeof IndexDocumentOutput.Type;

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
export const indexDocument = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IndexDocumentInput,
  outputSchema: IndexDocumentOutput,
  errors: [NotFound] as const,
}));
