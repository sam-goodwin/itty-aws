import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListStemmingDictionariesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/stemming/dictionaries" }),
  );
export type ListStemmingDictionariesInput =
  typeof ListStemmingDictionariesInput.Type;

// Output Schema
export const ListStemmingDictionariesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dictionaries: Schema.optional(Schema.Array(Schema.String)),
  });
export type ListStemmingDictionariesOutput =
  typeof ListStemmingDictionariesOutput.Type;

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
