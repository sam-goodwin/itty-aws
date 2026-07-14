import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface GetAnalyticsEventsInput {
  user_id: string;
  name: string;
  n: number;
}
export const GetAnalyticsEventsInput =
  /*@__PURE__*/ Schema.Struct({
    user_id: Schema.String,
    name: Schema.String,
    n: Schema.Number,
  }).pipe(
    T.Http({ method: "GET", path: "/analytics/events" }),
  ) as unknown as Schema.Codec<GetAnalyticsEventsInput>;

// Output Schema
export interface GetAnalyticsEventsOutput {
  events: {
    name?: string;
    event_type?: string;
    collection?: string;
    timestamp?: number;
    user_id?: string;
    doc_id?: string;
    doc_ids?: string[];
    query?: string;
  }[];
}
export const GetAnalyticsEventsOutput =
  /*@__PURE__*/ Schema.Struct({
    events: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        event_type: Schema.optional(Schema.String),
        collection: Schema.optional(Schema.String),
        timestamp: Schema.optional(Schema.Number),
        user_id: Schema.optional(Schema.String),
        doc_id: Schema.optional(Schema.String),
        doc_ids: Schema.optional(Schema.Array(Schema.String)),
        query: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GetAnalyticsEventsOutput>;

// The operation
/**
 * Retrieve analytics events
 *
 * Retrieve the most recent events for a user and rule.
 *
 * @param name - Analytics rule name
 * @param n - Number of events to return (max 1000)
 */
export const getAnalyticsEvents = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetAnalyticsEventsInput,
  outputSchema: GetAnalyticsEventsOutput,
  errors: [BadRequest] as const,
}));
