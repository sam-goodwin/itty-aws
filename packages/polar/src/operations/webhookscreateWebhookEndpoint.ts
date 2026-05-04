import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const WebhookscreateWebhookEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
    name: Schema.optional(Schema.Unknown),
    format: Schema.Literals(["raw", "discord", "slack"]),
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
    organization_id: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "POST", path: "/v1/webhooks/endpoints" }));
export type WebhookscreateWebhookEndpointInput =
  typeof WebhookscreateWebhookEndpointInput.Type;

// Output Schema
export const WebhookscreateWebhookEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type WebhookscreateWebhookEndpointOutput =
  typeof WebhookscreateWebhookEndpointOutput.Type;

// The operation
/**
 * Create Webhook Endpoint
 *
 * Create a webhook endpoint.
 * **Scopes**: `webhooks:write`
 */
export const webhookscreateWebhookEndpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhookscreateWebhookEndpointInput,
    outputSchema: WebhookscreateWebhookEndpointOutput,
    errors: [UnprocessableEntity] as const,
  }));
