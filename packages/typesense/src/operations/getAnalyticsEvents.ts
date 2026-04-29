import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const GetAnalyticsEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String,
    name: Schema.String,
    n: Schema.Number,
  }).pipe(T.Http({ method: "GET", path: "/analytics/events" }));
export type GetAnalyticsEventsInput = typeof GetAnalyticsEventsInput.Type;

// Output Schema
export const GetAnalyticsEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type GetAnalyticsEventsOutput = typeof GetAnalyticsEventsOutput.Type;

// The operation
/**
 * Retrieve analytics events
 *
 * Retrieve the most recent events for a user and rule.
 *
 * @param name - Analytics rule name
 * @param n - Number of events to return (max 1000)
 */
export const getAnalyticsEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAnalyticsEventsInput,
  outputSchema: GetAnalyticsEventsOutput,
  errors: [BadRequest] as const,
}));
