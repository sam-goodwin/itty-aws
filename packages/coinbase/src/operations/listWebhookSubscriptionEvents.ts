import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListWebhookSubscriptionEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    eventId: Schema.optional(Schema.String),
    minCreatedAt: Schema.optional(Schema.String),
    maxCreatedAt: Schema.optional(Schema.String),
    eventTypeNames: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/data/webhooks/subscriptions/{subscriptionId}/events",
    }),
  );
export type ListWebhookSubscriptionEventsInput =
  typeof ListWebhookSubscriptionEventsInput.Type;

// Output Schema
export const ListWebhookSubscriptionEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    events: Schema.Array(
      Schema.Struct({
        eventId: Schema.String,
        eventTypeName: Schema.String,
        status: Schema.Literals([
          "pending",
          "processing",
          "succeeded",
          "failed",
          "retrying",
        ]),
        createdAt: Schema.String,
        succeededAt: Schema.optional(Schema.String),
        retryCount: Schema.Number,
        response: Schema.optional(
          Schema.Struct({
            httpCode: Schema.optional(Schema.Number),
            elapsedTimeMs: Schema.optional(Schema.Number),
            body: Schema.optional(Schema.String),
            errorName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ListWebhookSubscriptionEventsOutput =
  typeof ListWebhookSubscriptionEventsOutput.Type;

// The operation
/**
 * List webhook subscription events
 *
 * Retrieve webhook event delivery attempts for a specific subscription.
 * Returns event deliveries in descending order by creation time (newest first),
 * including delivery status, retry count, and response details.
 * ### Use Cases
 * - Debug webhook delivery failures and inspect response codes
 * - Monitor delivery status and retry counts
 * - Audit event delivery history for a subscription
 * - Verify that expected events were sent to webhook URLs
 * ### Filtering
 * Use optional query parameters to narrow results:
 * - `eventId` — find a specific event by ID
 * - `minCreatedAt` / `maxCreatedAt` — filter by time range
 * - `eventTypeNames` — filter by event type (comma-separated)
 * **Note:** Results are limited to the 50 most recent events (newest first). No pagination is supported.
 *
 * @param subscriptionId - Unique identifier for the webhook subscription.
 * @param eventId - Filter by a specific event ID.
 * @param minCreatedAt - Filter events created at or after this timestamp (RFC 3339 format).
 * @param maxCreatedAt - Filter events created at or before this timestamp (RFC 3339 format).
 * @param eventTypeNames - Filter by event type names (comma-separated).
 */
export const listWebhookSubscriptionEvents =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListWebhookSubscriptionEventsInput,
    outputSchema: ListWebhookSubscriptionEventsOutput,
  }));
