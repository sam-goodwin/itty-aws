import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostRadarValueListItemsInput {
  expand?: string[];
  value: string;
  value_list: string;
}
export const PostRadarValueListItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.Array(Schema.String)),
    value: Schema.String,
    value_list: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/radar/value_list_items",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostRadarValueListItemsInput>;

// Output Schema
export interface PostRadarValueListItemsOutput {
  created: number;
  created_by: string;
  id: string;
  livemode: boolean;
  object: "radar.value_list_item";
  value: string;
  value_list: string;
}
export const PostRadarValueListItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    created_by: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["radar.value_list_item"]),
    value: Schema.String,
    value_list: Schema.String,
  }) as unknown as Schema.Codec<PostRadarValueListItemsOutput>;

// The operation
/**
 * Create a value list item
 *
 * <p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>
 */
export const PostRadarValueListItems = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostRadarValueListItemsInput,
    outputSchema: PostRadarValueListItemsOutput,
  }),
);
