import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteSubscriptionItemsItemInput {
  item: string;
  clear_usage?: boolean;
  payment_behavior?:
    | "allow_incomplete"
    | "default_incomplete"
    | "error_if_incomplete"
    | "pending_if_incomplete";
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  proration_date?: number;
}
export const DeleteSubscriptionItemsItemInput =
  /*@__PURE__*/ Schema.Struct({
    item: Schema.String.pipe(T.PathParam()),
    clear_usage: Schema.optional(Schema.Boolean),
    payment_behavior: Schema.optional(
      Schema.Literals([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ]),
    ),
    proration_behavior: Schema.optional(
      Schema.Literals(["always_invoice", "create_prorations", "none"]),
    ),
    proration_date: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/subscription_items/{item}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteSubscriptionItemsItemInput>;

// Output Schema
export interface DeleteSubscriptionItemsItemOutput {
  deleted: true;
  id: string;
  object: "subscription_item";
}
export const DeleteSubscriptionItemsItemOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["subscription_item"]),
  }) as unknown as Schema.Codec<DeleteSubscriptionItemsItemOutput>;

// The operation
/**
 * Delete a subscription item
 *
 * <p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>
 */
export const DeleteSubscriptionItemsItem = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteSubscriptionItemsItemInput,
  outputSchema: DeleteSubscriptionItemsItemOutput,
}));
