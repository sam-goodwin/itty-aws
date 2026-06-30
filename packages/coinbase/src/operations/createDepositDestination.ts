import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateDepositDestinationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/v2/deposit-destinations" }),
  );
export type CreateDepositDestinationInput =
  typeof CreateDepositDestinationInput.Type;

// Output Schema
export const CreateDepositDestinationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CreateDepositDestinationOutput =
  typeof CreateDepositDestinationOutput.Type;

// The operation
/**
 * Create deposit destination
 *
 * Create a new deposit destination for an account. A deposit destination is a cryptocurrency address that can be used to receive funds. The address will be generated for the specified network.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const createDepositDestination = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateDepositDestinationInput,
    outputSchema: CreateDepositDestinationOutput,
  }),
);
