import * as Schema from "effect/Schema";
import { SynonymItemSchemaSchema } from "./_schemas.ts";
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
    items: Schema.Array(Schema.suspend(() => SynonymItemSchemaSchema)),
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
