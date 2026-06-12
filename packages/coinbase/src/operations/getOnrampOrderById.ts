import * as Schema from "effect/Schema";
import { OnrampOrderSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetOnrampOrderByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v2/onramp/orders/{orderId}" }));
export type GetOnrampOrderByIdInput = typeof GetOnrampOrderByIdInput.Type;

// Output Schema
export const GetOnrampOrderByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order: Schema.suspend(() => OnrampOrderSchema),
  });
export type GetOnrampOrderByIdOutput = typeof GetOnrampOrderByIdOutput.Type;

// The operation
/**
 * Get an onramp order by ID
 *
 * Get an onramp order by ID.
 *
 * @param orderId - The ID of the onramp order to retrieve.
 */
export const getOnrampOrderById = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOnrampOrderByIdInput,
  outputSchema: GetOnrampOrderByIdOutput,
}));
