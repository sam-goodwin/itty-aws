import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteCurationSetItemInput {
  curationSetName: string;
  itemId: string;
}
export const DeleteCurationSetItemInput =
  /*@__PURE__*/ Schema.Struct({
    curationSetName: Schema.String.pipe(T.PathParam()),
    itemId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/curation_sets/{curationSetName}/items/{itemId}",
    }),
  ) as unknown as Schema.Codec<DeleteCurationSetItemInput>;

// Output Schema
export interface DeleteCurationSetItemOutput {
  id: string;
}
export const DeleteCurationSetItemOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<DeleteCurationSetItemOutput>;

// The operation
/**
 * Delete a curation set item
 *
 * Delete a specific curation item by its id
 *
 * @param curationSetName - The name of the curation set
 * @param itemId - The id of the curation item to delete
 */
export const deleteCurationSetItem = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteCurationSetItemInput,
  outputSchema: DeleteCurationSetItemOutput,
  errors: [NotFound] as const,
}));
