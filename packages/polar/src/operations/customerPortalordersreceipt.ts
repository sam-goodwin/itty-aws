import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalordersreceiptInput {
  id: string;
}
export const CustomerPortalordersreceiptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/orders/{id}/receipt" }),
  ) as unknown as Schema.Codec<CustomerPortalordersreceiptInput>;

// Output Schema
export interface CustomerPortalordersreceiptOutput {
  url: string;
}
export const CustomerPortalordersreceiptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  }) as unknown as Schema.Codec<CustomerPortalordersreceiptOutput>;

// The operation
/**
 * Get Order Receipt
 *
 * Get a presigned URL to download an order's receipt PDF.
 *
 * @param id - The order ID.
 */
export const customerPortalordersreceipt = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerPortalordersreceiptInput,
    outputSchema: CustomerPortalordersreceiptOutput,
  }),
);
