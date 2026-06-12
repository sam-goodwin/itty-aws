import * as Schema from "effect/Schema";
import { SynonymSetSchemaSchema } from "./_schemas.ts";
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
    Schema.suspend(() => SynonymSetSchemaSchema),
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
