import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const UpsertSynonymSetItemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synonymSetName: Schema.String.pipe(T.PathParam()),
    itemId: Schema.String.pipe(T.PathParam()),
    synonyms: Schema.Array(Schema.String),
    root: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/synonym_sets/{synonymSetName}/items/{itemId}",
    }),
  );
export type UpsertSynonymSetItemInput = typeof UpsertSynonymSetItemInput.Type;

// Output Schema
export const UpsertSynonymSetItemOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    synonyms: Schema.Array(Schema.String),
    root: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
  });
export type UpsertSynonymSetItemOutput = typeof UpsertSynonymSetItemOutput.Type;

// The operation
/**
 * Create or update a synonym set item
 *
 * Create or update a synonym set item with the given id
 *
 * @param synonymSetName - The name of the synonym set
 * @param itemId - The id of the synonym item to upsert
 */
export const upsertSynonymSetItem = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpsertSynonymSetItemInput,
    outputSchema: UpsertSynonymSetItemOutput,
    errors: [BadRequest] as const,
  }),
);
