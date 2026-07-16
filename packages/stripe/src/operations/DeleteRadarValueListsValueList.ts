import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteRadarValueListsValueListInput {
  value_list: string;
}
export const DeleteRadarValueListsValueListInput =
  /*@__PURE__*/ Schema.Struct({
    value_list: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/radar/value_lists/{value_list}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteRadarValueListsValueListInput>;

// Output Schema
export interface DeleteRadarValueListsValueListOutput {
  deleted: true;
  id: string;
  object: "radar.value_list";
}
export const DeleteRadarValueListsValueListOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["radar.value_list"]),
  }) as unknown as Schema.Codec<DeleteRadarValueListsValueListOutput>;

// The operation
/**
 * Delete a value list
 *
 * <p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>
 */
export const DeleteRadarValueListsValueList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteRadarValueListsValueListInput,
    outputSchema: DeleteRadarValueListsValueListOutput,
  }));
