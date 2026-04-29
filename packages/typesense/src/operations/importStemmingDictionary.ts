import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ImportStemmingDictionaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/stemming/dictionaries/import" }));
export type ImportStemmingDictionaryInput =
  typeof ImportStemmingDictionaryInput.Type;

// Output Schema
export const ImportStemmingDictionaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ImportStemmingDictionaryOutput =
  typeof ImportStemmingDictionaryOutput.Type;

// The operation
/**
 * Import a stemming dictionary
 *
 * Upload a JSONL file containing word mappings to create or update a stemming dictionary.
 *
 * @param id - The ID to assign to the dictionary
 */
export const importStemmingDictionary = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImportStemmingDictionaryInput,
    outputSchema: ImportStemmingDictionaryOutput,
    errors: [BadRequest] as const,
  }),
);
