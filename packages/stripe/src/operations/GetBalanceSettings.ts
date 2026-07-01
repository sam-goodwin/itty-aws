import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetBalanceSettingsInput {
  expand?: string;
}
export const GetBalanceSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/balance_settings",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetBalanceSettingsInput>;

// Output Schema
export interface GetBalanceSettingsOutput {
  object: "balance_settings";
  payments: {
    debit_negative_balances: boolean | null;
    payouts: {
      automatic_transfer_rules_by_currency: Record<
        string,
        {
          payout_method: string;
          transfer_up_to_amount: number | null;
          type: "transfer_all" | "transfer_up_to_amount";
        }[]
      > | null;
      minimum_balance_by_currency: Record<string, number> | null;
      schedule: {
        interval: "daily" | "manual" | "monthly" | "weekly" | null;
        monthly_payout_days?: number[];
        weekly_payout_days?: (
          | "friday"
          | "monday"
          | "thursday"
          | "tuesday"
          | "wednesday"
        )[];
      } | null;
      statement_descriptor: string | null;
      status: "disabled" | "enabled";
    } | null;
    settlement_timing: {
      delay_days: number;
      delay_days_override?: number;
      start_of_day: { hour: number; minutes: number; timezone: string } | null;
    };
  };
}
export const GetBalanceSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["balance_settings"]),
    payments: Schema.Struct({
      debit_negative_balances: Schema.NullOr(Schema.Boolean),
      payouts: Schema.NullOr(
        Schema.Struct({
          automatic_transfer_rules_by_currency: Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Array(
                Schema.Struct({
                  payout_method: Schema.String,
                  transfer_up_to_amount: Schema.NullOr(Schema.Number),
                  type: Schema.Literals([
                    "transfer_all",
                    "transfer_up_to_amount",
                  ]),
                }),
              ),
            ),
          ),
          minimum_balance_by_currency: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Number),
          ),
          schedule: Schema.NullOr(
            Schema.Struct({
              interval: Schema.NullOr(
                Schema.Literals(["daily", "manual", "monthly", "weekly"]),
              ),
              monthly_payout_days: Schema.optional(Schema.Array(Schema.Number)),
              weekly_payout_days: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "friday",
                    "monday",
                    "thursday",
                    "tuesday",
                    "wednesday",
                  ]),
                ),
              ),
            }),
          ),
          statement_descriptor: Schema.NullOr(Schema.String),
          status: Schema.Literals(["disabled", "enabled"]),
        }),
      ),
      settlement_timing: Schema.Struct({
        delay_days: Schema.Number,
        delay_days_override: Schema.optional(Schema.Number),
        start_of_day: Schema.NullOr(
          Schema.Struct({
            hour: Schema.Number,
            minutes: Schema.Number,
            timezone: Schema.String,
          }),
        ),
      }),
    }),
  }) as unknown as Schema.Codec<GetBalanceSettingsOutput>;

// The operation
/**
 * Retrieve balance settings
 *
 * <p>Retrieves balance settings for a given connected account.
 * Related guide: <a href="/connect/authentication">Making API calls for connected accounts</a></p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetBalanceSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBalanceSettingsInput,
  outputSchema: GetBalanceSettingsOutput,
}));
