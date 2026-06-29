import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const GetInstanceUsageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationID: Schema.String.pipe(T.PathParam()),
  envOrInsID: Schema.String.pipe(T.PathParam()),
  start: Schema.optional(Schema.String),
  end: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/platform/applications/{applicationID}/instances/{envOrInsID}/usage",
  }),
);
export type GetInstanceUsageInput = typeof GetInstanceUsageInput.Type;

// Output Schema
export const GetInstanceUsageOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    application_id: Schema.String,
    instance_id: Schema.String,
    period_start: Schema.String,
    period_end: Schema.String,
    mau: Schema.Struct({
      total_usage: Schema.Number,
      total_billable_usage: Schema.Number,
    }),
    mao: Schema.Struct({
      total_usage: Schema.Number,
      total_billable_usage: Schema.Number,
    }),
    custom_domains: Schema.Struct({
      total_usage: Schema.Number,
    }),
    sms_messages: Schema.Struct({
      total_usage: Schema.Number,
      tier_a: Schema.Struct({
        total_usage: Schema.Number,
      }),
      tier_b: Schema.Struct({
        total_usage: Schema.Number,
      }),
      tier_c: Schema.Struct({
        total_usage: Schema.Number,
      }),
      tier_d: Schema.Struct({
        total_usage: Schema.Number,
      }),
      tier_e: Schema.Struct({
        total_usage: Schema.Number,
      }),
      tier_f: Schema.Struct({
        total_usage: Schema.Number,
      }),
    }),
    enterprise_connections: Schema.Struct({
      total_usage: Schema.Number,
    }),
  },
);
export type GetInstanceUsageOutput = typeof GetInstanceUsageOutput.Type;

// The operation
/**
 * Get instance usage
 *
 * Get usage totals for an application instance across meters such as MAU, MAO,
 * SMS, custom domains, and enterprise connections.
 * The `envOrInsID` parameter can be either an environment type (e.g., "development", "production")
 * or an instance ID.
 * Requires the `application_usage:read` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param start - Start of the date range for usage data in YYYY-MM-DD format.
Both `start` and `end` must be provided together.
When omitted, the current billing cycle is used.

 * @param end - Inclusive end of the date range for usage data in YYYY-MM-DD format.
Both `start` and `end` must be provided together.
When omitted, the current billing cycle is used.

 */
export const getInstanceUsage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceUsageInput,
  outputSchema: GetInstanceUsageOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
