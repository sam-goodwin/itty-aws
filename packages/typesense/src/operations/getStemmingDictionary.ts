import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetStemmingDictionaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dictionaryId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/stemming/dictionaries/{dictionaryId}" }),
  );
export type GetStemmingDictionaryInput = typeof GetStemmingDictionaryInput.Type;

// Output Schema
export const GetStemmingDictionaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    words: Schema.Array(
      Schema.Struct({
        word: Schema.String,
        root: Schema.String,
      }),
    ),
  });
export type GetStemmingDictionaryOutput =
  typeof GetStemmingDictionaryOutput.Type;

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
