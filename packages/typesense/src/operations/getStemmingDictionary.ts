import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetStemmingDictionaryInput {
  dictionaryId: string;
}
export const GetStemmingDictionaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dictionaryId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/stemming/dictionaries/{dictionaryId}" }),
  ) as unknown as Schema.Codec<GetStemmingDictionaryInput>;

// Output Schema
export interface GetStemmingDictionaryOutput {
  id: string;
  words: { word: string; root: string }[];
}
export const GetStemmingDictionaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    words: Schema.Array(
      Schema.Struct({
        word: Schema.String,
        root: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<GetStemmingDictionaryOutput>;

// The operation
/**
 * Retrieve a stemming dictionary
 *
 * Fetch details of a specific stemming dictionary.
 *
 * @param dictionaryId - The ID of the dictionary to retrieve
 */
export const getStemmingDictionary = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetStemmingDictionaryInput,
    outputSchema: GetStemmingDictionaryOutput,
    errors: [NotFound] as const,
  }),
);
