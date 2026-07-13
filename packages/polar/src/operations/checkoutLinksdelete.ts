import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CheckoutLinksdeleteInput {
  id: string;
}
export const CheckoutLinksdeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/checkout-links/{id}" }),
  ) as unknown as Schema.Codec<CheckoutLinksdeleteInput>;

// Output Schema
export type CheckoutLinksdeleteOutput = void;
export const CheckoutLinksdeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CheckoutLinksdeleteOutput>;

// The operation
/**
 * Delete Checkout Link
 *
 * Delete a checkout link.
 * **Scopes**: `checkout_links:write`
 *
 * @param id - The checkout link ID.
 */
export const checkoutLinksdelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CheckoutLinksdeleteInput,
  outputSchema: CheckoutLinksdeleteOutput,
}));
