import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const BillingCancelSubscriptionV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/billing/v1/subscriptions/{subscriptionId}",
    }),
  );
export type BillingCancelSubscriptionV1Input =
  typeof BillingCancelSubscriptionV1Input.Type;

// Output Schema
export const BillingCancelSubscriptionV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type BillingCancelSubscriptionV1Output =
  typeof BillingCancelSubscriptionV1Output.Type;

// The operation
/**
 * Cancel subscription
 *
 * Cancel a subscription. UNDOCUMENTED endpoint observed in Hostinger's official Terraform provider; cancelling the subscription of a VPS deprovisions the virtual machine.
 *
 * @param subscriptionId - Subscription ID
 */
export const billingCancelSubscriptionV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingCancelSubscriptionV1Input,
    outputSchema: BillingCancelSubscriptionV1Output,
  }),
);
