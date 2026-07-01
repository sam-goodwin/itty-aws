import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetRadarValueListItemsItemInput {
  item: string;
  expand?: string;
}
export const GetRadarValueListItemsItemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/radar/value_list_items/{item}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetRadarValueListItemsItemInput>;

// Output Schema
export interface GetRadarValueListItemsItemOutput {
  created: number;
  created_by: string;
  id: string;
  livemode: boolean;
  object: "radar.value_list_item";
  value: string;
  value_list: string;
}
export const GetRadarValueListItemsItemOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    created_by: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["radar.value_list_item"]),
    value: Schema.String,
    value_list: Schema.String,
  }) as unknown as Schema.Codec<GetRadarValueListItemsItemOutput>;

// The operation
/**
 * Retrieve a value list item
 *
 * <p>Retrieves a <code>ValueListItem</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetRadarValueListItemsItem = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetRadarValueListItemsItemInput,
    outputSchema: GetRadarValueListItemsItemOutput,
  }),
);
