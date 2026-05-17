import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalordersreceiptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/orders/{id}/receipt" }),
  );
export type CustomerPortalordersreceiptInput =
  typeof CustomerPortalordersreceiptInput.Type;

// Output Schema
export const CustomerPortalordersreceiptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  });
export type CustomerPortalordersreceiptOutput =
  typeof CustomerPortalordersreceiptOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
