import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateFoundationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/accounts" }));
export type CreateFoundationAccountInput =
  typeof CreateFoundationAccountInput.Type;

// Output Schema
export const CreateFoundationAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String,
    type: Schema.Literals(["prime", "business", "cdp"]),
    owner: Schema.String,
    name: Schema.optional(Schema.String),
    createdAt: Schema.String,
    updatedAt: Schema.String,
  });
export type CreateFoundationAccountOutput =
  typeof CreateFoundationAccountOutput.Type;

// The operation
/**
 * Create account
 *
 * Create an account for your Entity. Support for creating Customer-owned accounts is in development.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const createFoundationAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateFoundationAccountInput,
    outputSchema: CreateFoundationAccountOutput,
  }),
);
