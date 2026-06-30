import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostV2BillingMeterEventStreamInput {
  events: {
    event_name: string;
    identifier?: string;
    payload: Record<string, string>;
    timestamp?: string;
  }[];
}
export const PostV2BillingMeterEventStreamInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    events: Schema.Array(
      Schema.Struct({
        event_name: Schema.String,
        identifier: Schema.optional(Schema.String),
        payload: Schema.Record(Schema.String, Schema.String),
        timestamp: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/billing/meter_event_stream" }),
  ) as unknown as Schema.Codec<PostV2BillingMeterEventStreamInput>;

// Output Schema
export interface PostV2BillingMeterEventStreamOutput {}
export const PostV2BillingMeterEventStreamOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as unknown as Schema.Codec<PostV2BillingMeterEventStreamOutput>;

// The operation
/**
 * Create a Meter Event with asynchronous validation
 *
 * Creates meter events. Events are processed asynchronously, including validation. Requires a meter event session for authentication. Supports up to 10,000 requests per second in livemode. For even higher rate-limits, contact sales.
 */
export const PostV2BillingMeterEventStream =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV2BillingMeterEventStreamInput,
    outputSchema: PostV2BillingMeterEventStreamOutput,
  }));
