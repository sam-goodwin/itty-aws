import * as Schema from "effect/Schema";
import { SynonymItemSchemaSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveSynonymSetItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synonymSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/synonym_sets/{synonymSetName}/items" }),
  );
export type RetrieveSynonymSetItemsInput =
  typeof RetrieveSynonymSetItemsInput.Type;

// Output Schema
export const RetrieveSynonymSetItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => SynonymItemSchemaSchema),
  );
export type RetrieveSynonymSetItemsOutput =
  typeof RetrieveSynonymSetItemsOutput.Type;

// The operation
/**
 * List items in a synonym set
 *
 * Retrieve all synonym items in a set
 *
 * @param synonymSetName - The name of the synonym set to retrieve items for
 */
export const retrieveSynonymSetItems = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveSynonymSetItemsInput,
    outputSchema: RetrieveSynonymSetItemsOutput,
    errors: [NotFound] as const,
  }),
);
