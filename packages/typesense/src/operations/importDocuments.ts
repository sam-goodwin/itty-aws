import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface ImportDocumentsInput {
  collectionName: string;
  importDocumentsParameters?: string;
}
export const ImportDocumentsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  importDocumentsParameters: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/collections/{collectionName}/documents/import",
  }),
) as unknown as Schema.Codec<ImportDocumentsInput>;

// Output Schema
export type ImportDocumentsOutput = void;
export const ImportDocumentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ImportDocumentsOutput>;

// The operation
/**
 * Import documents into a collection
 *
 * The documents to be imported must be formatted in a newline delimited JSON structure. You can feed the output file from a Typesense export operation directly as import.
 *
 * @param collectionName - The name of the collection
 */
export const importDocuments = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImportDocumentsInput,
  outputSchema: ImportDocumentsOutput,
  errors: [BadRequest, NotFound] as const,
}));
