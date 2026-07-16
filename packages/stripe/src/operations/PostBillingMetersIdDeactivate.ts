import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostBillingMetersIdDeactivateInput {
  id: string;
  expand?: string[];
}
export const PostBillingMetersIdDeactivateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing/meters/{id}/deactivate",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostBillingMetersIdDeactivateInput>;

// Output Schema
export interface PostBillingMetersIdDeactivateOutput {
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
export const PostBillingMetersIdDeactivateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PostBillingMetersIdDeactivateOutput>;

// The operation
/**
 * Deactivate a billing meter
 *
 * <p>When a meter is deactivated, no more meter events will be accepted for this meter. You can’t attach a deactivated meter to a price.</p>
 */
export const PostBillingMetersIdDeactivate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostBillingMetersIdDeactivateInput,
    outputSchema: PostBillingMetersIdDeactivateOutput,
  }));
