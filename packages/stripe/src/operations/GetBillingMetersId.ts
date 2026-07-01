import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetBillingMetersIdInput {
  id: string;
  expand?: string;
}
export const GetBillingMetersIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/billing/meters/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetBillingMetersIdInput>;

// Output Schema
export interface GetBillingMetersIdOutput {
  created: number;
  customer_mapping: { event_payload_key: string; type: "by_id" };
  default_aggregation: { formula: "count" | "last" | "sum" };
  display_name: string;
  event_name: string;
  event_time_window: "day" | "hour" | null;
  id: string;
  livemode: boolean;
  object: "billing.meter";
  status: "active" | "inactive";
  status_transitions: { deactivated_at: number | null };
  updated: number;
  value_settings: { event_payload_key: string };
}
export const GetBillingMetersIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    customer_mapping: Schema.Struct({
      event_payload_key: Schema.String,
      type: Schema.Literals(["by_id"]),
    }),
    default_aggregation: Schema.Struct({
      formula: Schema.Literals(["count", "last", "sum"]),
    }),
    display_name: Schema.String,
    event_name: Schema.String,
    event_time_window: Schema.NullOr(Schema.Literals(["day", "hour"])),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["billing.meter"]),
    status: Schema.Literals(["active", "inactive"]),
    status_transitions: Schema.Struct({
      deactivated_at: Schema.NullOr(Schema.Number),
    }),
    updated: Schema.Number,
    value_settings: Schema.Struct({
      event_payload_key: Schema.String,
    }),
  }) as unknown as Schema.Codec<GetBillingMetersIdOutput>;

// The operation
/**
 * Retrieve a billing meter
 *
 * <p>Retrieves a billing meter given an ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetBillingMetersId = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBillingMetersIdInput,
  outputSchema: GetBillingMetersIdOutput,
}));
