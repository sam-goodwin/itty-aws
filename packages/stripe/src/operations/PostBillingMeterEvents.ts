import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostBillingMeterEventsInput {
  event_name: string;
  expand?: string[];
  identifier?: string;
  payload: Record<string, string>;
  timestamp?: number;
}
export const PostBillingMeterEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event_name: Schema.String,
    expand: Schema.optional(Schema.Array(Schema.String)),
    identifier: Schema.optional(Schema.String),
    payload: Schema.Record(Schema.String, Schema.String),
    timestamp: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing/meter_events",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostBillingMeterEventsInput>;

// Output Schema
export interface PostBillingMeterEventsOutput {
  created: number;
  event_name: string;
  identifier: string;
  livemode: boolean;
  object: "billing.meter_event";
  payload: Record<string, string>;
  timestamp: number;
}
export const PostBillingMeterEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    event_name: Schema.String,
    identifier: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["billing.meter_event"]),
    payload: Schema.Record(Schema.String, Schema.String),
    timestamp: Schema.Number,
  }) as unknown as Schema.Codec<PostBillingMeterEventsOutput>;

// The operation
/**
 * Create a billing meter event
 *
 * <p>Creates a billing meter event.</p>
 */
export const PostBillingMeterEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostBillingMeterEventsInput,
    outputSchema: PostBillingMeterEventsOutput,
  }),
);
