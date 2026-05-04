import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const PaymentsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/payments/{id}" }));
export type PaymentsgetInput = typeof PaymentsgetInput.Type;

// Output Schema
export const PaymentsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type PaymentsgetOutput = typeof PaymentsgetOutput.Type;

// The operation
/**
 * Get Payment
 *
 * Get a payment by ID.
 * **Scopes**: `payments:read`
 *
 * @param id - The payment ID.
 */
export const paymentsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PaymentsgetInput,
  outputSchema: PaymentsgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
