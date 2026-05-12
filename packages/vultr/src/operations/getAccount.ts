import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAccountInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/account" }));
export type GetAccountInput = typeof GetAccountInput.Type;

// Output Schema
export const GetAccountOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      acls: Schema.optional(Schema.Array(Schema.String)),
      balance: Schema.optional(Schema.Number),
      pending_charges: Schema.optional(Schema.Number),
      last_payment_date: Schema.optional(Schema.String),
      last_payment_amount: Schema.optional(Schema.Number),
    }),
  ),
});
export type GetAccountOutput = typeof GetAccountOutput.Type;

// The operation
/**
 * Get Account Info
 *
 * Get your Vultr account, permission, and billing information.
 */
export const getAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAccountInput,
  outputSchema: GetAccountOutput,
}));
