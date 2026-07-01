import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RetrieveSynonymSetsInput {}
export const RetrieveSynonymSetsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/synonym_sets" }),
  ) as unknown as Schema.Codec<RetrieveSynonymSetsInput>;

// Output Schema
export type RetrieveSynonymSetsOutput = {
  items: {
    id: string;
    synonyms: string[];
    root?: string;
    locale?: string;
    symbols_to_index?: string[];
  }[];
  name: string;
}[];
export const RetrieveSynonymSetsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      items: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          synonyms: Schema.Array(Schema.String),
          root: Schema.optional(Schema.String),
          locale: Schema.optional(Schema.String),
          symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      name: Schema.String,
    }),
  ) as unknown as Schema.Codec<RetrieveSynonymSetsOutput>;

// The operation
/**
 * List all synonym sets
 *
 * Retrieve all synonym sets
 */
export const retrieveSynonymSets = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RetrieveSynonymSetsInput,
  outputSchema: RetrieveSynonymSetsOutput,
}));
