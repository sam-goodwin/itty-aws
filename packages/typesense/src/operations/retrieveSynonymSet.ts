import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveSynonymSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synonymSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/synonym_sets/{synonymSetName}" }));
export type RetrieveSynonymSetInput = typeof RetrieveSynonymSetInput.Type;

// Output Schema
export const RetrieveSynonymSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RetrieveSynonymSetOutput = typeof RetrieveSynonymSetOutput.Type;

// The operation
/**
 * Retrieve a synonym set
 *
 * Retrieve a specific synonym set by its name
 *
 * @param synonymSetName - The name of the synonym set to retrieve
 */
export const retrieveSynonymSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RetrieveSynonymSetInput,
  outputSchema: RetrieveSynonymSetOutput,
  errors: [NotFound] as const,
}));
