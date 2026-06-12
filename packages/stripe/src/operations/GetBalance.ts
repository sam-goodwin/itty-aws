import * as Schema from "effect/Schema";
import {
  balance_amountSchema,
  balance_amount_netSchema,
  balance_detailSchema,
  balance_detail_ungatedSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetBalanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/balance",
    contentType: "form-urlencoded",
  }),
);
export type GetBalanceInput = typeof GetBalanceInput.Type;

// Output Schema
export const GetBalanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  available: Schema.Array(Schema.suspend(() => balance_amountSchema)),
  connect_reserved: Schema.optional(
    Schema.Array(Schema.suspend(() => balance_amountSchema)),
  ),
  instant_available: Schema.optional(
    Schema.Array(Schema.suspend(() => balance_amount_netSchema)),
  ),
  issuing: Schema.optional(Schema.suspend(() => balance_detailSchema)),
  livemode: Schema.Boolean,
  object: Schema.Literals(["balance"]),
  pending: Schema.Array(Schema.suspend(() => balance_amountSchema)),
  refund_and_dispute_prefunding: Schema.optional(
    Schema.suspend(() => balance_detail_ungatedSchema),
  ),
});
export type GetBalanceOutput = typeof GetBalanceOutput.Type;

// The operation
/**
 * Retrieve balance
 *
 * <p>Retrieves the current account balance, based on the authentication that was used to make the request.
 * For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetBalance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBalanceInput,
  outputSchema: GetBalanceOutput,
}));
