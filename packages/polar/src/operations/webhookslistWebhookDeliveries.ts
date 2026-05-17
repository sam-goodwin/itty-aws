import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const WebhookslistWebhookDeliveriesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoint_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
    start_timestamp: Schema.optional(Schema.String).pipe(T.QueryParam()),
    end_timestamp: Schema.optional(Schema.String).pipe(T.QueryParam()),
    succeeded: Schema.optional(Schema.String).pipe(T.QueryParam()),
    query: Schema.optional(Schema.String).pipe(T.QueryParam()),
    http_code_class: Schema.optional(Schema.String).pipe(T.QueryParam()),
    event_type: Schema.optional(Schema.String).pipe(T.QueryParam()),
    page: Schema.optional(Schema.Number).pipe(T.QueryParam()),
    limit: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/webhooks/deliveries" }));
export type WebhookslistWebhookDeliveriesInput =
  typeof WebhookslistWebhookDeliveriesInput.Type;

// Output Schema
export const WebhookslistWebhookDeliveriesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        id: Schema.String,
        succeeded: Schema.Boolean,
        http_code: Schema.NullOr(Schema.Number),
        response: Schema.NullOr(Schema.String),
        webhook_event: Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          last_http_code: Schema.optional(Schema.NullOr(Schema.Number)),
          succeeded: Schema.optional(Schema.NullOr(Schema.Boolean)),
          skipped: Schema.Boolean,
          payload: Schema.NullOr(Schema.String),
          type: Schema.Literals([
            "checkout.created",
            "checkout.updated",
            "checkout.expired",
            "customer.created",
            "customer.updated",
            "customer.deleted",
            "customer.state_changed",
            "customer_seat.assigned",
            "customer_seat.claimed",
            "customer_seat.revoked",
            "member.created",
            "member.updated",
            "member.deleted",
            "order.created",
            "order.updated",
            "order.paid",
            "order.refunded",
            "subscription.created",
            "subscription.updated",
            "subscription.active",
            "subscription.canceled",
            "subscription.uncanceled",
            "subscription.revoked",
            "subscription.past_due",
            "refund.created",
            "refund.updated",
            "product.created",
            "product.updated",
            "benefit.created",
            "benefit.updated",
            "benefit_grant.created",
            "benefit_grant.cycled",
            "benefit_grant.updated",
            "benefit_grant.revoked",
            "organization.updated",
          ]),
          is_archived: Schema.Boolean,
        }),
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type WebhookslistWebhookDeliveriesOutput =
  typeof WebhookslistWebhookDeliveriesOutput.Type;

// The operation
/**
 * List Webhook Deliveries
 *
 * List webhook deliveries.
 * Deliveries are all the attempts to deliver a webhook event to an endpoint.
 * **Scopes**: `webhooks:read` `webhooks:write`
 *
 * @param endpoint_id - Filter by webhook endpoint ID.
 * @param start_timestamp - Filter deliveries after this timestamp.
 * @param end_timestamp - Filter deliveries before this timestamp.
 * @param succeeded - Filter by delivery success status.
 * @param query - Query to filter webhook deliveries.
 * @param http_code_class - Filter by HTTP response code class (2xx, 3xx, 4xx, 5xx).
 * @param event_type - Filter by webhook event type.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const webhookslistWebhookDeliveries =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhookslistWebhookDeliveriesInput,
    outputSchema: WebhookslistWebhookDeliveriesOutput,
    errors: [UnprocessableEntity] as const,
  }));
