import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const WebhooksupdateWebhookEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    url: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.Unknown),
    format: Schema.optional(Schema.Unknown),
    events: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "PATCH", path: "/v1/webhooks/endpoints/{id}" }));
export type WebhooksupdateWebhookEndpointInput =
  typeof WebhooksupdateWebhookEndpointInput.Type;

// Output Schema
export const WebhooksupdateWebhookEndpointOutput =
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
export type WebhooksupdateWebhookEndpointOutput =
  typeof WebhooksupdateWebhookEndpointOutput.Type;

// The operation
/**
 * Update Webhook Endpoint
 *
 * Update a webhook endpoint.
 * **Scopes**: `webhooks:write`
 *
 * @param id - The webhook endpoint ID.
 */
export const webhooksupdateWebhookEndpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhooksupdateWebhookEndpointInput,
    outputSchema: WebhooksupdateWebhookEndpointOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
