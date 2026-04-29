import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteSynonymSetItemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synonymSetName: Schema.String.pipe(T.PathParam()),
    itemId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/synonym_sets/{synonymSetName}/items/{itemId}",
    }),
  );
export type DeleteSynonymSetItemInput = typeof DeleteSynonymSetItemInput.Type;

// Output Schema
export const DeleteSynonymSetItemOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type DeleteSynonymSetItemOutput = typeof DeleteSynonymSetItemOutput.Type;

// The operation
/**
 * Delete a synonym set item
 *
 * Delete a specific synonym item by its id
 *
 * @param synonymSetName - The name of the synonym set
 * @param itemId - The id of the synonym item to delete
 */
export const deleteSynonymSetItem = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteSynonymSetItemInput,
    outputSchema: DeleteSynonymSetItemOutput,
    errors: [NotFound] as const,
  }),
);
