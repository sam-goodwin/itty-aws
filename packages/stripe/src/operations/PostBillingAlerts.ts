import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostBillingAlertsInput {
  alert_type: "usage_threshold";
  expand?: string[];
  title: string;
  usage_threshold?: {
    filters?: { customer?: string; type: "customer" }[];
    gte: number;
    meter: string;
    recurrence: "one_time";
  };
}
export const PostBillingAlertsInput = /*@__PURE__*/ Schema.Struct({
  alert_type: Schema.Literals(["usage_threshold"]),
  expand: Schema.optional(Schema.Array(Schema.String)),
  title: Schema.String,
  usage_threshold: Schema.optional(
    Schema.Struct({
      filters: Schema.optional(
        Schema.Array(
          Schema.Struct({
            customer: Schema.optional(Schema.String),
            type: Schema.Literals(["customer"]),
          }),
        ),
      ),
      gte: Schema.Number,
      meter: Schema.String,
      recurrence: Schema.Literals(["one_time"]),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/billing/alerts",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostBillingAlertsInput>;

// Output Schema
export interface PostBillingAlertsOutput {
  alert_type: "usage_threshold";
  id: string;
  livemode: boolean;
  object: "billing.alert";
  status: "active" | "archived" | "inactive" | null;
  title: string;
  usage_threshold: {
    filters: { customer: unknown; type: "customer" }[] | null;
    gte: number;
    meter:
      | string
      | {
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
        };
    recurrence: "one_time";
  } | null;
}
export const PostBillingAlertsOutput =
  /*@__PURE__*/ Schema.Struct({
    alert_type: Schema.Literals(["usage_threshold"]),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["billing.alert"]),
    status: Schema.NullOr(Schema.Literals(["active", "archived", "inactive"])),
    title: Schema.String,
    usage_threshold: Schema.NullOr(
      Schema.Struct({
        filters: Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              customer: Schema.Unknown,
              type: Schema.Literals(["customer"]),
            }),
          ),
        ),
        gte: Schema.Number,
        meter: Schema.Union([
          Schema.String,
          Schema.Struct({
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
          }),
        ]),
        recurrence: Schema.Literals(["one_time"]),
      }),
    ),
  }) as unknown as Schema.Codec<PostBillingAlertsOutput>;

// The operation
/**
 * Create a billing alert
 *
 * <p>Creates a billing alert</p>
 */
export const PostBillingAlerts = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostBillingAlertsInput,
  outputSchema: PostBillingAlertsOutput,
}));
