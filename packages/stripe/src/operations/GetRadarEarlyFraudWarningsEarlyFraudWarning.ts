import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetRadarEarlyFraudWarningsEarlyFraudWarningInput {
  early_fraud_warning: string;
  expand?: string;
}
export const GetRadarEarlyFraudWarningsEarlyFraudWarningInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    early_fraud_warning: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/radar/early_fraud_warnings/{early_fraud_warning}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetRadarEarlyFraudWarningsEarlyFraudWarningInput>;

// Output Schema
export interface GetRadarEarlyFraudWarningsEarlyFraudWarningOutput {
  actionable: boolean;
  charge: unknown;
  created: number;
  fraud_type: string;
  id: string;
  livemode: boolean;
  object: "radar.early_fraud_warning";
  payment_intent?: unknown;
}
export const GetRadarEarlyFraudWarningsEarlyFraudWarningOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionable: Schema.Boolean,
    charge: Schema.Unknown,
    created: Schema.Number,
    fraud_type: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["radar.early_fraud_warning"]),
    payment_intent: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<GetRadarEarlyFraudWarningsEarlyFraudWarningOutput>;

// The operation
/**
 * Retrieve an early fraud warning
 *
 * <p>Retrieves the details of an early fraud warning that has previously been created. </p>
 * <p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetRadarEarlyFraudWarningsEarlyFraudWarning =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetRadarEarlyFraudWarningsEarlyFraudWarningInput,
    outputSchema: GetRadarEarlyFraudWarningsEarlyFraudWarningOutput,
  }));
