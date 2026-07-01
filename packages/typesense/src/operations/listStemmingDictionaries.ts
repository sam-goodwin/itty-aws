import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListStemmingDictionariesInput {}
export const ListStemmingDictionariesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/stemming/dictionaries" }),
  ) as unknown as Schema.Codec<ListStemmingDictionariesInput>;

// Output Schema
export interface ListStemmingDictionariesOutput {
  dictionaries?: string[];
}
export const ListStemmingDictionariesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dictionaries: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ListStemmingDictionariesOutput>;

// The operation
/**
 * List all stemming dictionaries
 *
 * Retrieve a list of all available stemming dictionaries.
 */
export const listStemmingDictionaries = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListStemmingDictionariesInput,
    outputSchema: ListStemmingDictionariesOutput,
  }),
);
