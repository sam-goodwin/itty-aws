import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetRadarValueListItemsInput {
  created?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
  value?: string;
  value_list: string;
}
export const GetRadarValueListItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    value_list: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/radar/value_list_items",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetRadarValueListItemsInput>;

// Output Schema
export interface GetRadarValueListItemsOutput {
  data: {
    created: number;
    created_by: string;
    id: string;
    livemode: boolean;
    object: "radar.value_list_item";
    value: string;
    value_list: string;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetRadarValueListItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        created: Schema.Number,
        created_by: Schema.String,
        id: Schema.String,
        livemode: Schema.Boolean,
        object: Schema.Literals(["radar.value_list_item"]),
        value: Schema.String,
        value_list: Schema.String,
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetRadarValueListItemsOutput>;

// The operation
/**
 * List all value list items
 *
 * <p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 *
 * @param created - Only return items that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param value - Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
 * @param value_list - Identifier for the parent value list this item belongs to.
 */
export const GetRadarValueListItems = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetRadarValueListItemsInput,
    outputSchema: GetRadarValueListItemsOutput,
  }),
);
