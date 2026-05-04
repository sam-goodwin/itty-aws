import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const WebhookslistWebhookEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/v1/webhooks/endpoints" }));
export type WebhookslistWebhookEndpointsInput =
  typeof WebhookslistWebhookEndpointsInput.Type;

// Output Schema
export const WebhookslistWebhookEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        id: Schema.String,
        url: Schema.String,
        name: Schema.optional(Schema.Unknown),
        format: Schema.Literals(["raw", "discord", "slack"]),
        secret: SensitiveString,
        organization_id: Schema.String,
        events: Schema.Array(
          Schema.Literals([
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
        ),
        enabled: Schema.Boolean,
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type WebhookslistWebhookEndpointsOutput =
  typeof WebhookslistWebhookEndpointsOutput.Type;

// The operation
/**
 * List Webhook Endpoints
 *
 * List webhook endpoints.
 * **Scopes**: `webhooks:read` `webhooks:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const webhookslistWebhookEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhookslistWebhookEndpointsInput,
    outputSchema: WebhookslistWebhookEndpointsOutput,
    errors: [UnprocessableEntity] as const,
  }));
