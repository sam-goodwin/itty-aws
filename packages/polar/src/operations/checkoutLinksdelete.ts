import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CheckoutLinksdeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/v1/checkout-links/{id}" }));
export type CheckoutLinksdeleteInput = typeof CheckoutLinksdeleteInput.Type;

// Output Schema
export const CheckoutLinksdeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CheckoutLinksdeleteOutput = typeof CheckoutLinksdeleteOutput.Type;

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
  errors: [NotFound, UnprocessableEntity] as const,
}));
