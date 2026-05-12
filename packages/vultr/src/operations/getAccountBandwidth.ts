import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAccountBandwidthInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/account/bandwidth" }),
  );
export type GetAccountBandwidthInput = typeof GetAccountBandwidthInput.Type;

// Output Schema
export const GetAccountBandwidthOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bandwidth: Schema.optional(
      Schema.Struct({
        previous_month: Schema.optional(
          Schema.Struct({
            timestamp_start: Schema.optional(Schema.String),
            timestamp_end: Schema.optional(Schema.String),
            gb_in: Schema.optional(Schema.Number),
            gb_out: Schema.optional(Schema.Number),
            total_instance_hours: Schema.optional(Schema.Number),
            total_instance_count: Schema.optional(Schema.Number),
            instance_bandwidth_credits: Schema.optional(Schema.Number),
            free_bandwidth_credits: Schema.optional(Schema.Number),
            purchased_bandwidth_credits: Schema.optional(Schema.Number),
            overage: Schema.optional(Schema.Number),
            overage_unit_cost: Schema.optional(Schema.Number),
            overage_cost: Schema.optional(Schema.Number),
          }),
        ),
        current_month_to_date: Schema.optional(
          Schema.Struct({
            timestamp_start: Schema.optional(Schema.String),
            timestamp_end: Schema.optional(Schema.String),
            gb_in: Schema.optional(Schema.Number),
            gb_out: Schema.optional(Schema.Number),
            total_instance_hours: Schema.optional(Schema.Number),
            total_instance_count: Schema.optional(Schema.Number),
            instance_bandwidth_credits: Schema.optional(Schema.Number),
            free_bandwidth_credits: Schema.optional(Schema.Number),
            purchased_bandwidth_credits: Schema.optional(Schema.Number),
            overage: Schema.optional(Schema.Number),
            overage_unit_cost: Schema.optional(Schema.Number),
            overage_cost: Schema.optional(Schema.Number),
          }),
        ),
        current_month_projected: Schema.optional(
          Schema.Struct({
            timestamp_start: Schema.optional(Schema.String),
            timestamp_end: Schema.optional(Schema.String),
            gb_in: Schema.optional(Schema.Number),
            gb_out: Schema.optional(Schema.Number),
            total_instance_hours: Schema.optional(Schema.Number),
            total_instance_count: Schema.optional(Schema.Number),
            instance_bandwidth_credits: Schema.optional(Schema.Number),
            free_bandwidth_credits: Schema.optional(Schema.Number),
            purchased_bandwidth_credits: Schema.optional(Schema.Number),
            overage: Schema.optional(Schema.Number),
            overage_unit_cost: Schema.optional(Schema.Number),
            overage_cost: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  });
export type GetAccountBandwidthOutput = typeof GetAccountBandwidthOutput.Type;

// The operation
/**
 * Get Account Bandwidth Info
 *
 * Get your Vultr account bandwidth information.
 */
export const getAccountBandwidth = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAccountBandwidthInput,
  outputSchema: GetAccountBandwidthOutput,
}));
