import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteRadarValueListItemsItemInput {
  item: string;
}
export const DeleteRadarValueListItemsItemInput =
  /*@__PURE__*/ Schema.Struct({
    item: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/radar/value_list_items/{item}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteRadarValueListItemsItemInput>;

// Output Schema
export interface DeleteRadarValueListItemsItemOutput {
  deleted: true;
  id: string;
  object: "radar.value_list_item";
}
export const DeleteRadarValueListItemsItemOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["radar.value_list_item"]),
  }) as unknown as Schema.Codec<DeleteRadarValueListItemsItemOutput>;

// The operation
/**
 * Delete a value list item
 *
 * <p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>
 */
export const DeleteRadarValueListItemsItem =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteRadarValueListItemsItemInput,
    outputSchema: DeleteRadarValueListItemsItemOutput,
  }));
