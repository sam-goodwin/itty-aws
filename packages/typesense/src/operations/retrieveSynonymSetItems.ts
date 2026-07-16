import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface RetrieveSynonymSetItemsInput {
  synonymSetName: string;
}
export const RetrieveSynonymSetItemsInput =
  /*@__PURE__*/ Schema.Struct({
    synonymSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/synonym_sets/{synonymSetName}/items" }),
  ) as unknown as Schema.Codec<RetrieveSynonymSetItemsInput>;

// Output Schema
export type RetrieveSynonymSetItemsOutput = {
  id: string;
  synonyms: string[];
  root?: string;
  locale?: string;
  symbols_to_index?: string[];
}[];
export const RetrieveSynonymSetItemsOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      synonyms: Schema.Array(Schema.String),
      root: Schema.optional(Schema.String),
      locale: Schema.optional(Schema.String),
      symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
    }),
  ) as unknown as Schema.Codec<RetrieveSynonymSetItemsOutput>;

// The operation
/**
 * List items in a synonym set
 *
 * Retrieve all synonym items in a set
 *
 * @param synonymSetName - The name of the synonym set to retrieve items for
 */
export const retrieveSynonymSetItems = /*@__PURE__*/ API.make(() => ({
  inputSchema: RetrieveSynonymSetItemsInput,
  outputSchema: RetrieveSynonymSetItemsOutput,
  errors: [NotFound] as const,
}));
