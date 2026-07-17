import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface RetrieveSynonymSetItemInput {
  synonymSetName: string;
  itemId: string;
}
export const RetrieveSynonymSetItemInput =
  /*@__PURE__*/ Schema.Struct({
    synonymSetName: Schema.String.pipe(T.PathParam()),
    itemId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/synonym_sets/{synonymSetName}/items/{itemId}",
    }),
  ) as unknown as Schema.Codec<RetrieveSynonymSetItemInput>;

// Output Schema
export interface RetrieveSynonymSetItemOutput {
  id: string;
  synonyms: string[];
  root?: string;
  locale?: string;
  symbols_to_index?: string[];
}
export const RetrieveSynonymSetItemOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    synonyms: Schema.Array(Schema.String),
    root: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<RetrieveSynonymSetItemOutput>;

// The operation
/**
 * Retrieve a synonym set item
 *
 * Retrieve a specific synonym item by its id
 *
 * @param synonymSetName - The name of the synonym set
 * @param itemId - The id of the synonym item to retrieve
 */
export const retrieveSynonymSetItem = /*@__PURE__*/ API.make(() => ({
  inputSchema: RetrieveSynonymSetItemInput,
  outputSchema: RetrieveSynonymSetItemOutput,
  errors: [NotFound] as const,
}));
