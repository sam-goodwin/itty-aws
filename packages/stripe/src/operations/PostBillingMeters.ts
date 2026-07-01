import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostBillingMetersInput {
  customer_mapping?: { event_payload_key: string; type: "by_id" };
  default_aggregation: { formula: "count" | "last" | "sum" };
  display_name: string;
  event_name: string;
  event_time_window?: "day" | "hour";
  expand?: string[];
  value_settings?: { event_payload_key: string };
}
export const PostBillingMetersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    customer_mapping: Schema.optional(
      Schema.Struct({
        event_payload_key: Schema.String,
        type: Schema.Literals(["by_id"]),
      }),
    ),
    default_aggregation: Schema.Struct({
      formula: Schema.Literals(["count", "last", "sum"]),
    }),
    display_name: Schema.String,
    event_name: Schema.String,
    event_time_window: Schema.optional(Schema.Literals(["day", "hour"])),
    expand: Schema.optional(Schema.Array(Schema.String)),
    value_settings: Schema.optional(
      Schema.Struct({
        event_payload_key: Schema.String,
      }),
    ),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/v1/billing/meters",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostBillingMetersInput>;

// Output Schema
export interface PostBillingMetersOutput {
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
export const PostBillingMetersOutput =
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
  }) as unknown as Schema.Codec<PostBillingMetersOutput>;

// The operation
/**
 * Create a billing meter
 *
 * <p>Creates a billing meter.</p>
 */
export const PostBillingMeters = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostBillingMetersInput,
  outputSchema: PostBillingMetersOutput,
}));
