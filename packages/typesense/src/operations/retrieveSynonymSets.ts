import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RetrieveSynonymSetsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/synonym_sets" }),
  );
export type RetrieveSynonymSetsInput = typeof RetrieveSynonymSetsInput.Type;

// Output Schema
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
  );
export type RetrieveSynonymSetsOutput = typeof RetrieveSynonymSetsOutput.Type;

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
