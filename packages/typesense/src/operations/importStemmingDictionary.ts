import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface ImportStemmingDictionaryInput {
  id: string;
}
export const ImportStemmingDictionaryInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/stemming/dictionaries/import" }),
  ) as unknown as Schema.Codec<ImportStemmingDictionaryInput>;

// Output Schema
export type ImportStemmingDictionaryOutput = void;
export const ImportStemmingDictionaryOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ImportStemmingDictionaryOutput>;

// The operation
/**
 * Import a stemming dictionary
 *
 * Upload a JSONL file containing word mappings to create or update a stemming dictionary.
 *
 * @param id - The ID to assign to the dictionary
 */
export const importStemmingDictionary = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImportStemmingDictionaryInput,
  outputSchema: ImportStemmingDictionaryOutput,
  errors: [BadRequest] as const,
}));
