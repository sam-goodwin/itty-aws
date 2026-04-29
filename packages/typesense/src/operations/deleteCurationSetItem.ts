import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteCurationSetItemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curationSetName: Schema.String.pipe(T.PathParam()),
    itemId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/curation_sets/{curationSetName}/items/{itemId}",
    }),
  );
export type DeleteCurationSetItemInput = typeof DeleteCurationSetItemInput.Type;

// Output Schema
export const DeleteCurationSetItemOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type DeleteCurationSetItemOutput =
  typeof DeleteCurationSetItemOutput.Type;

// The operation
/**
 * Delete a curation set item
 *
 * Delete a specific curation item by its id
 *
 * @param curationSetName - The name of the curation set
 * @param itemId - The id of the curation item to delete
 */
export const deleteCurationSetItem = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteCurationSetItemInput,
    outputSchema: DeleteCurationSetItemOutput,
    errors: [NotFound] as const,
  }),
);
