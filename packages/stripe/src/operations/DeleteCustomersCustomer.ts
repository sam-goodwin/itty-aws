import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteCustomersCustomerInput {
  customer: string;
}
export const DeleteCustomersCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/customers/{customer}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteCustomersCustomerInput>;

// Output Schema
export interface DeleteCustomersCustomerOutput {
  deleted: true;
  id: string;
  object: "customer";
}
export const DeleteCustomersCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["customer"]),
  }) as unknown as Schema.Codec<DeleteCustomersCustomerOutput>;

// The operation
/**
 * Delete a customer
 *
 * <p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>
 */
export const DeleteCustomersCustomer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteCustomersCustomerInput,
    outputSchema: DeleteCustomersCustomerOutput,
  }),
);
