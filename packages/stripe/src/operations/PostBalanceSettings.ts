import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostBalanceSettingsInput {
  expand?: string[];
  payments?: {
    debit_negative_balances?: boolean;
    payouts?: {
      automatic_transfer_rules_by_currency?:
        | Record<
            string,
            | {
                payout_method: string;
                transfer_up_to_amount?: number;
                type: "transfer_all" | "transfer_up_to_amount";
              }[]
            | ""
          >
        | "";
      minimum_balance_by_currency?: Record<string, number | ""> | "";
      schedule?: {
        interval?: "daily" | "manual" | "monthly" | "weekly";
        monthly_payout_days?: number[];
        weekly_payout_days?: (
          | "friday"
          | "monday"
          | "thursday"
          | "tuesday"
          | "wednesday"
        )[];
      };
      statement_descriptor?: string;
    };
    settlement_timing?: {
      delay_days_override?: number | "";
      start_of_day?:
        | { hour?: number; minutes?: number; timezone?: string }
        | "";
    };
  };
}
export const PostBalanceSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.Array(Schema.String)),
    payments: Schema.optional(
      Schema.Struct({
        debit_negative_balances: Schema.optional(Schema.Boolean),
        payouts: Schema.optional(
          Schema.Struct({
            automatic_transfer_rules_by_currency: Schema.optional(
              Schema.Union([
                Schema.Record(
                  Schema.String,
                  Schema.Union([
                    Schema.Array(
                      Schema.Struct({
                        payout_method: Schema.String,
                        transfer_up_to_amount: Schema.optional(Schema.Number),
                        type: Schema.Literals([
                          "transfer_all",
                          "transfer_up_to_amount",
                        ]),
                      }),
                    ),
                    Schema.Literals([""]),
                  ]),
                ),
                Schema.Literals([""]),
              ]),
            ),
            minimum_balance_by_currency: Schema.optional(
              Schema.Union([
                Schema.Record(
                  Schema.String,
                  Schema.Union([Schema.Number, Schema.Literals([""])]),
                ),
                Schema.Literals([""]),
              ]),
            ),
            schedule: Schema.optional(
              Schema.Struct({
                interval: Schema.optional(
                  Schema.Literals(["daily", "manual", "monthly", "weekly"]),
                ),
                monthly_payout_days: Schema.optional(
                  Schema.Array(Schema.Number),
                ),
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
            statement_descriptor: Schema.optional(Schema.String),
          }),
        ),
        settlement_timing: Schema.optional(
          Schema.Struct({
            delay_days_override: Schema.optional(
              Schema.Union([Schema.Number, Schema.Literals([""])]),
            ),
            start_of_day: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  hour: Schema.optional(Schema.Number),
                  minutes: Schema.optional(Schema.Number),
                  timezone: Schema.optional(Schema.String),
                }),
                Schema.Literals([""]),
              ]),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/balance_settings",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostBalanceSettingsInput>;

// Output Schema
export interface PostBalanceSettingsOutput {
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
export const PostBalanceSettingsOutput =
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
  }) as unknown as Schema.Codec<PostBalanceSettingsOutput>;

// The operation
/**
 * Update balance settings
 *
 * <p>Updates balance settings for a given connected account.
 * Related guide: <a href="/connect/authentication">Making API calls for connected accounts</a></p>
 */
export const PostBalanceSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostBalanceSettingsInput,
  outputSchema: PostBalanceSettingsOutput,
}));
