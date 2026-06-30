import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RequestLimitsUpgradeInput {
  userId: string;
  userIdType: "phone_number";
  fields?: {
    ssnLast4?: string;
    dateOfBirth?: { day?: string; month?: string; year?: string };
  };
}
export const RequestLimitsUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String,
    userIdType: Schema.Literals(["phone_number"]),
    fields: Schema.optional(
      Schema.Struct({
        ssnLast4: Schema.optional(Schema.String),
        dateOfBirth: Schema.optional(
          Schema.Struct({
            day: Schema.optional(Schema.String),
            month: Schema.optional(Schema.String),
            year: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/onramp/limits/upgrade" }),
  ) as unknown as Schema.Codec<RequestLimitsUpgradeInput>;

// Output Schema
export type RequestLimitsUpgradeOutput = void;
export const RequestLimitsUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RequestLimitsUpgradeOutput>;

// The operation
/**
 * Request limit upgrade
 *
 * Requests a limit upgrade for an onramp user by submitting identity information. Only phone number is currently supported as a userId.
 * The verification process is asynchronous. After calling this endpoint, use the [Get Onramp User Limits](https://docs.cdp.coinbase.com/api-reference/v2/rest-api/onramp/get-onramp-user-limits) endpoint to check the status in the `limitUpgradeOptions` array.
 * **Prerequisites:**
 * - The phone number must have been previously verified by your app via OTP. - Upgrades may not be available until a certain number of successful transactions by the user.
 * **Supported fields:**
 * - `ssnLast4`: Last 4 digits of the Social Security Number (no dashes or spaces).
 * - `dateOfBirth`: Date of birth (day, month, year as zero-padded strings).
 */
export const requestLimitsUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RequestLimitsUpgradeInput,
    outputSchema: RequestLimitsUpgradeOutput,
  }),
);
