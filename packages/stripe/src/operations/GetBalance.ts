import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetBalanceInput {
  expand?: string;
}
export const GetBalanceInput = /*@__PURE__*/ Schema.Struct({
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/balance",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetBalanceInput>;

// Output Schema
export interface GetBalanceOutput {
  available: {
    amount: number;
    currency: string;
    source_types?: { bank_account?: number; card?: number; fpx?: number };
  }[];
  connect_reserved?: {
    amount: number;
    currency: string;
    source_types?: { bank_account?: number; card?: number; fpx?: number };
  }[];
  instant_available?: {
    amount: number;
    currency: string;
    net_available?: {
      amount: number;
      destination: string;
      source_types?: { bank_account?: number; card?: number; fpx?: number };
    }[];
    source_types?: { bank_account?: number; card?: number; fpx?: number };
  }[];
  issuing?: {
    available: {
      amount: number;
      currency: string;
      source_types?: { bank_account?: number; card?: number; fpx?: number };
    }[];
  };
  livemode: boolean;
  object: "balance";
  pending: {
    amount: number;
    currency: string;
    source_types?: { bank_account?: number; card?: number; fpx?: number };
  }[];
  refund_and_dispute_prefunding?: {
    available: {
      amount: number;
      currency: string;
      source_types?: { bank_account?: number; card?: number; fpx?: number };
    }[];
    pending: {
      amount: number;
      currency: string;
      source_types?: { bank_account?: number; card?: number; fpx?: number };
    }[];
  };
}
export const GetBalanceOutput = /*@__PURE__*/ Schema.Struct({
  available: Schema.Array(
    Schema.Struct({
      amount: Schema.Number,
      currency: Schema.String,
      source_types: Schema.optional(
        Schema.Struct({
          bank_account: Schema.optional(Schema.Number),
          card: Schema.optional(Schema.Number),
          fpx: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
  connect_reserved: Schema.optional(
    Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        currency: Schema.String,
        source_types: Schema.optional(
          Schema.Struct({
            bank_account: Schema.optional(Schema.Number),
            card: Schema.optional(Schema.Number),
            fpx: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  ),
  instant_available: Schema.optional(
    Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        currency: Schema.String,
        net_available: Schema.optional(
          Schema.Array(
            Schema.Struct({
              amount: Schema.Number,
              destination: Schema.String,
              source_types: Schema.optional(
                Schema.Struct({
                  bank_account: Schema.optional(Schema.Number),
                  card: Schema.optional(Schema.Number),
                  fpx: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        source_types: Schema.optional(
          Schema.Struct({
            bank_account: Schema.optional(Schema.Number),
            card: Schema.optional(Schema.Number),
            fpx: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  ),
  issuing: Schema.optional(
    Schema.Struct({
      available: Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          currency: Schema.String,
          source_types: Schema.optional(
            Schema.Struct({
              bank_account: Schema.optional(Schema.Number),
              card: Schema.optional(Schema.Number),
              fpx: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
  ),
  livemode: Schema.Boolean,
  object: Schema.Literals(["balance"]),
  pending: Schema.Array(
    Schema.Struct({
      amount: Schema.Number,
      currency: Schema.String,
      source_types: Schema.optional(
        Schema.Struct({
          bank_account: Schema.optional(Schema.Number),
          card: Schema.optional(Schema.Number),
          fpx: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
  refund_and_dispute_prefunding: Schema.optional(
    Schema.Struct({
      available: Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          currency: Schema.String,
          source_types: Schema.optional(
            Schema.Struct({
              bank_account: Schema.optional(Schema.Number),
              card: Schema.optional(Schema.Number),
              fpx: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
      pending: Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          currency: Schema.String,
          source_types: Schema.optional(
            Schema.Struct({
              bank_account: Schema.optional(Schema.Number),
              card: Schema.optional(Schema.Number),
              fpx: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
  ),
}) as unknown as Schema.Codec<GetBalanceOutput>;

// The operation
/**
 * Retrieve balance
 *
 * <p>Retrieves the current account balance, based on the authentication that was used to make the request.
 * For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetBalance = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetBalanceInput,
  outputSchema: GetBalanceOutput,
}));
