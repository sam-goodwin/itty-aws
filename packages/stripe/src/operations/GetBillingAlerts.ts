import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetBillingAlertsInput {
  alert_type?: "usage_threshold";
  ending_before?: string;
  expand?: string;
  limit?: number;
  meter?: string;
  starting_after?: string;
}
export const GetBillingAlertsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alert_type: Schema.optional(Schema.Literals(["usage_threshold"])),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  meter: Schema.optional(Schema.String),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/billing/alerts",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetBillingAlertsInput>;

// Output Schema
export interface GetBillingAlertsOutput {
  data: {
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
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetBillingAlertsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    data: Schema.Array(
      Schema.Struct({
        alert_type: Schema.Literals(["usage_threshold"]),
        id: Schema.String,
        livemode: Schema.Boolean,
        object: Schema.Literals(["billing.alert"]),
        status: Schema.NullOr(
          Schema.Literals(["active", "archived", "inactive"]),
        ),
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
                event_time_window: Schema.NullOr(
                  Schema.Literals(["day", "hour"]),
                ),
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
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  },
) as unknown as Schema.Codec<GetBillingAlertsOutput>;

// The operation
/**
 * List billing alerts
 *
 * <p>Lists billing active and inactive alerts</p>
 *
 * @param alert_type - Filter results to only include this type of alert.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param meter - Filter results to only include alerts with the given meter.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetBillingAlerts = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBillingAlertsInput,
  outputSchema: GetBillingAlertsOutput,
}));
