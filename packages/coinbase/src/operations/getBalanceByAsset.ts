import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetBalanceByAssetInput {
  accountId: string;
  asset: string;
}
export const GetBalanceByAssetInput = /*@__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.PathParam()),
  asset: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/accounts/{accountId}/balances/{asset}" }),
) as unknown as Schema.Codec<GetBalanceByAssetInput>;

// Output Schema
export interface GetBalanceByAssetOutput {
  asset: {
    symbol: string;
    type: "fiat" | "crypto";
    name: string;
    decimals: number;
  };
  amount: Record<string, { available: string; total: string }>;
}
export const GetBalanceByAssetOutput =
  /*@__PURE__*/ Schema.Struct({
    asset: Schema.Struct({
      symbol: Schema.String,
      type: Schema.Literals(["fiat", "crypto"]),
      name: Schema.String,
      decimals: Schema.Number,
    }),
    amount: Schema.Record(
      Schema.String,
      Schema.Struct({
        available: Schema.String,
        total: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<GetBalanceByAssetOutput>;

// The operation
/**
 * Get balance for account
 *
 * Get the balance for an account by asset.
 *
 * @param accountId - The unique identifier of the account.
 * @param asset - The symbol of the asset.
 */
export const getBalanceByAsset = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetBalanceByAssetInput,
  outputSchema: GetBalanceByAssetOutput,
}));
